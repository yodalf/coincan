#include <pebble.h>
#include "util.h"


#define FULL_FRAME      (GRect(0, 0, 144, 168))
#define TIME_FRAME      (GRect(0, -8, 144, 168-6))
#define DATE_FRAME      (GRect(0, 46, 144, 168-62))


Window    *window;

TextLayer *time_layer;
TextLayer *date_layer;
TextLayer *bc_layer;
TextLayer *bcH_layer;
TextLayer *bcL_layer;

Layer *graph_layer;


static char btcV[16];
static char btcL[16];
static char btcH[16];
static char obIconCode[16];
static char obTemperature[16];
static char obWindDir[16];
static char obWindGust[16];
static char obWindSpeed[16];
static char obWindChill[16];
static char obHumidex[16];
static char forecastIconCode[16];
static char forecastLow[16];
static char forecastHigh[16];
static char forecastTemp[16];
static char forecastPeriod[16];

static float btcV_value = 0.0;
static float btcL_value = 0.0;
static float btcH_value = 0.0;
static int   obIconCode_value = 0;

static BatteryChargeState battery_state;

static char battery_text[8];
static char bluetooth_text[8];

static const uint32_t const segments[] = { 1000, 1000, 1000 };
VibePattern myVibes = {
  .durations = segments,
  .num_segments = ARRAY_LENGTH(segments),
};

#define X_SIZE 36
#define Y_SIZE 24

GPath *bgraph;
GPoint bgraph_data[2*X_SIZE];
static const GPathInfo bgraph_info = 
  {
  .num_points = 2*X_SIZE,
  .points = bgraph_data
  };

void graph_update_proc(struct Layer *, GContext *);

static char time_text[] = "00:00"; // Needs to be static because it's used by the system later.
static char date_text[] = "........";


////////////////////////////////////////////////////////////////////////////////////
//
//   WEATHER 
//
////////////////////////////////////////////////////////////////////////////////////

typedef struct {
	Layer *layer;
	//BmpContainer icon_layer;
	//BmpContainer icon_layer2;
	TextLayer *temp1_layer;
	TextLayer *temp2_layer;
	TextLayer *temp3_layer;
	TextLayer *temp4_layer;
	TextLayer *temp5_layer;
	TextLayer *wind_layer;
	TextLayer *temp_layer_background;
  TextLayer *bluetooth_layer;
  TextLayer *battery_layer;

  BitmapLayer *icon1_layer;
  BitmapLayer *icon2_layer;

  GBitmap *icon1_bitmap;
  GBitmap *icon2_bitmap;

	bool has_weather_icon;
	char temp1_str[5];
	char temp2_str[5];
	char temp3_str[5];
	char temp4_str[5];
	char temp5_str[5];
  char wind_str[16];
} WeatherLayer;

WeatherLayer weather_layer;


static uint8_t WEATHER_ICONS[] = {
	RESOURCE_ID_I00,
	RESOURCE_ID_I01,
	RESOURCE_ID_I02,
	RESOURCE_ID_I03,
	RESOURCE_ID_I04,
	RESOURCE_ID_I05,
	RESOURCE_ID_I06,
	RESOURCE_ID_I07,
	RESOURCE_ID_I08,
	RESOURCE_ID_I09,
	RESOURCE_ID_I10,
	RESOURCE_ID_I11,
	RESOURCE_ID_I12,
	RESOURCE_ID_I13,
	RESOURCE_ID_I14,
	RESOURCE_ID_I15,
	RESOURCE_ID_I16,
	RESOURCE_ID_I17,
	RESOURCE_ID_I18,
	RESOURCE_ID_I19,
	RESOURCE_ID_I20,
	RESOURCE_ID_I21,
	RESOURCE_ID_I22,
	RESOURCE_ID_I23,
	RESOURCE_ID_I24,
	RESOURCE_ID_I25,
	RESOURCE_ID_I26,
	RESOURCE_ID_I27,
	RESOURCE_ID_I28,
	RESOURCE_ID_I28,  
	RESOURCE_ID_I30,
	RESOURCE_ID_I31,
	RESOURCE_ID_I32,
	RESOURCE_ID_I33,
	RESOURCE_ID_I34,
	RESOURCE_ID_I35,
	RESOURCE_ID_I36,
	RESOURCE_ID_I37,
	RESOURCE_ID_I38,
	RESOURCE_ID_I39,
	RESOURCE_ID_I40,
	RESOURCE_ID_I41,
	RESOURCE_ID_I42,
	RESOURCE_ID_I43,
	RESOURCE_ID_I44,
	RESOURCE_ID_I45,
	RESOURCE_ID_ICON_ERROR,
};


void weather_layer_init(WeatherLayer* weather_layer, GPoint pos);
void weather_layer_deinit(WeatherLayer* weather_layer);
//void weather_layer_set_icon(WeatherLayer* weather_layer, int icon1, int icon2);
//void weather_layer_set_temperature(WeatherLayer* weather_layer, int16_t temperature, char * wind_dir, int wind_speed, int wind_gust, int humidex, int forecast_temp);










////////////////////////////////////////////////////////////////////////////////////
//
//   Helper Functions
//
////////////////////////////////////////////////////////////////////////////////////



/* Push a new btc value on the graph stack 
*/
void push_point(float btc, float btcL, float btcH)
{
  int i,j;

  for (i=0; i<X_SIZE-1; i++) bgraph_data[i].y = bgraph_data[i+1].y;
  bgraph_data[X_SIZE-1].y =  Y_SIZE - (Y_SIZE * ((btc-btcL)/(btcH-btcL)) );
  j = 2*X_SIZE;
  for (i=X_SIZE; i<2*X_SIZE; i++) bgraph_data[i].y = bgraph_data[j-i-1].y;
  
}




static void in_received_handler(DictionaryIterator *iter, void *context) 
  {
  Tuple *btcV_tuple = dict_find(iter, 0);
  Tuple *btcL_tuple = dict_find(iter, 1);
  Tuple *btcH_tuple = dict_find(iter, 2);
  Tuple *obIconCode_tuple = dict_find(iter, 3);
  Tuple *obTemperature_tuple = dict_find(iter, 4);
  Tuple *obWindDir_tuple = dict_find(iter, 5);
  Tuple *obWindGust_tuple = dict_find(iter, 6);
  Tuple *obWindSpeed_tuple = dict_find(iter, 7);
  Tuple *obWindChill_tuple = dict_find(iter, 8);
  Tuple *obHumidex_tuple = dict_find(iter, 9);
  Tuple *forecastIconCode_tuple = dict_find(iter, 10);
  Tuple *forecastHigh_tuple = dict_find(iter, 11);
  Tuple *forecastLow_tuple = dict_find(iter, 12);
  Tuple *forecastPeriod_tuple = dict_find(iter, 13);


  // Default positions
  if (btcV_tuple) 
    {
    strncpy(btcV, btcV_tuple->value->cstring, 16);
    btcV_value = _string2float(btcV);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "Res: %s", btcV);
    }

  if (btcL_tuple) 
    {
    strncpy(btcL, btcL_tuple->value->cstring, 16);
    btcL_value = _string2float(btcL);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "ResL: %s", btcL);
    }

  if (btcH_tuple) 
    {
    strncpy(btcH, btcH_tuple->value->cstring, 16);
    btcH_value = _string2float(btcH);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "ResH: %s", btcH);
    }

  if (obIconCode_tuple) 
    {
    strncpy(obIconCode, obIconCode_tuple->value->cstring, 16);
    obIconCode_value = _atoi(obIconCode);
    gbitmap_destroy(weather_layer.icon1_bitmap);
    weather_layer.icon1_bitmap =  gbitmap_create_with_resource(WEATHER_ICONS[_atoi(obIconCode)]);
    bitmap_layer_set_bitmap(weather_layer.icon1_layer, weather_layer.icon1_bitmap );
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obIconCode: %s", obIconCode_tuple->value->cstring);
    }

  if (obTemperature_tuple) 
    {
    strncpy(obTemperature, obTemperature_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obTemperature: %s", obTemperature_tuple->value->cstring);
    }

  if (obWindDir_tuple) 
    {
    strncpy(obWindDir, obWindDir_tuple->value->cstring, 16);    
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obWindDir: %s", obWindDir_tuple->value->cstring);
    }

  if (obWindGust_tuple) 
    {
    strncpy(obWindGust, obWindGust_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obWindGust: %s", obWindGust_tuple->value->cstring);
    }

  if (obWindSpeed_tuple) 
    {
    strncpy(obWindSpeed, obWindSpeed_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obWindSpeed: %s", obWindSpeed_tuple->value->cstring);
    }

  if (obWindChill_tuple) 
    {
    strncpy(obWindChill, obWindChill_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obWindChill: %s", obWindChill_tuple->value->cstring);
    }

  if (obHumidex_tuple) 
    {
    strncpy(obHumidex, obHumidex_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "obHumidex: %s", obHumidex_tuple->value->cstring);
    }

  if (forecastIconCode_tuple) 
    {
    strncpy(forecastIconCode, forecastIconCode_tuple->value->cstring, 16);
    gbitmap_destroy(weather_layer.icon2_bitmap);
    weather_layer.icon2_bitmap =  gbitmap_create_with_resource(WEATHER_ICONS[_atoi(forecastIconCode)]);
    bitmap_layer_set_bitmap(weather_layer.icon2_layer, weather_layer.icon2_bitmap );
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "forecastIconCode: %s", forecastIconCode_tuple->value->cstring);
    }

  if (forecastLow_tuple) 
    {
    strncpy(forecastLow, forecastLow_tuple->value->cstring, 16);
    strncpy(forecastTemp, forecastLow_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "forecastLow: %s", forecastLow_tuple->value->cstring);
    }

  if (forecastPeriod_tuple) 
    {
    strncpy(forecastPeriod, forecastPeriod_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "forecastPeriod: %s", forecastPeriod_tuple->value->cstring);
    }

  if (forecastHigh_tuple) 
    {
    strncpy(forecastHigh, forecastHigh_tuple->value->cstring, 16);
    strncpy(forecastTemp, forecastHigh_tuple->value->cstring, 16);
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "forecastHigh: %s", forecastHigh_tuple->value->cstring);

    //
    // Execute this at the END of the tuple message chain 
    //

    if (date_text[strlen(date_text)-1] == '*') date_text[strlen(date_text)-1] = '\0';
  
    push_point(btcV_value, btcL_value, btcH_value);

    if (obWindSpeed[0] != '!')
      {
      strncat(obWindDir, " ", 16);
      strncat(obWindDir, obWindSpeed, 16);

      if (obWindGust[0] != '!')
        {
        strncat(obWindDir, "/", 16);
        // strncat(obWindDir, " -> ", 16);
        strncat(obWindDir, obWindGust, 16);
        }
      }
    else
      {
      strncpy(obWindDir, "NO WIND!", 16);
      }

    
      strncpy(battery_text, "", 8);
      if (battery_state.is_plugged) 
        	text_layer_set_font(weather_layer.battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14_BOLD) );
      else
        	text_layer_set_font(weather_layer.battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
      strncat(battery_text, " ", 8);    
      strncat(battery_text, _itoa(battery_state.charge_percent), 8);
      //strncat(battery_text, "% ", 8);    
      if (battery_state.is_charging) 
        strncat(battery_text, "*", 8);
      else
        strncat(battery_text, " ", 8);    
    
    
    if ((obWindChill[0] == '!') && (obHumidex[0] == '!'))
      {
	    text_layer_set_text(weather_layer.temp1_layer, "");
	    text_layer_set_text(weather_layer.temp2_layer, "");
     	text_layer_set_text(weather_layer.temp3_layer, "");
     	text_layer_set_text(weather_layer.temp4_layer, obTemperature);
     	text_layer_set_text(weather_layer.temp5_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
      }
    else if (obWindChill[0] != '!')
      {
    	text_layer_set_text(weather_layer.temp1_layer, obTemperature);
    	text_layer_set_text(weather_layer.temp2_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
    	text_layer_set_text(weather_layer.temp3_layer, obWindChill);
    	text_layer_set_text(weather_layer.temp4_layer, "");
    	text_layer_set_text(weather_layer.temp5_layer, "");
      } 
    else if (obHumidex[0] != '!')
      {
    	text_layer_set_text(weather_layer.temp1_layer, obTemperature);
    	text_layer_set_text(weather_layer.temp2_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
    	text_layer_set_text(weather_layer.temp3_layer, obHumidex);
    	text_layer_set_text(weather_layer.temp4_layer, "");
    	text_layer_set_text(weather_layer.temp5_layer, "");
      }
    }

  }
  
static void in_dropped_handler(AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Dropped!");
}

static void out_failed_handler(DictionaryIterator *failed, AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Failed to Send!");
}

static void fetch_msg(void) {
  DictionaryIterator *iter;

  Tuplet symbol_tuple = TupletCString(0, "HELLO!");

  app_message_outbox_begin(&iter);

  if (iter == NULL) {
    APP_LOG(APP_LOG_LEVEL_DEBUG, "Null iter!");
    return;
  }

  strcat(date_text, "*");

  dict_write_tuplet(iter, &symbol_tuple);
  dict_write_end(iter);

  app_message_outbox_send();

  layer_mark_dirty(window_get_root_layer(window));


  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Message sent");
}



static void app_message_init(void) {
  // Register message handlers
  app_message_register_inbox_received(in_received_handler);
  app_message_register_inbox_dropped(in_dropped_handler);
  app_message_register_outbox_failed(out_failed_handler);

  // Init buffers
  app_message_open(104, 24);
}





static void handle_minute_tick(struct tm* tick_time, TimeUnits units_changed) 
  {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "M: %s %s %d", time_text, date_text,tick_time->tm_min);

  strftime(time_text, sizeof(time_text), "%T", tick_time);
  strftime(date_text, sizeof(date_text), "%a %d", tick_time);

  layer_mark_dirty(text_layer_get_layer(time_layer));
  layer_mark_dirty(text_layer_get_layer(date_layer));

  if ( 0 == (tick_time->tm_min % 5) ) 
    {
    fetch_msg();
    }
  }


static void bluetooth_handler(bool connected)
  {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Bluetooth event!");
  if (connected)
    {
    strcpy(bluetooth_text," ok");
    }
  else
    {
    strcpy(bluetooth_text, " LOST!");
    vibes_enqueue_custom_pattern(myVibes);
    }
  
  layer_mark_dirty(window_get_root_layer(window));
  }

static void battery_handler(BatteryChargeState charge)
  {
  battery_state.charge_percent  = charge.charge_percent;
  battery_state.is_charging  = charge.is_charging;
  battery_state.is_plugged  = charge.is_plugged;    

  fetch_msg();
  }

static void init(void) 
  {

  app_message_init();

  window = window_create();
  window_stack_push(window, true);
  window_set_background_color(window, GColorBlack);


  time_layer = text_layer_create(TIME_FRAME);
  text_layer_set_text_color(time_layer, GColorWhite);
  text_layer_set_background_color(time_layer, GColorClear);
  text_layer_set_font(time_layer, fonts_load_custom_font(resource_get_handle(RESOURCE_ID_FUTURA_CONDENSED_53)));
  text_layer_set_text_alignment(time_layer, GTextAlignmentCenter);
  text_layer_set_text(time_layer, time_text);
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(time_layer));


  date_layer = text_layer_create(DATE_FRAME);
  text_layer_set_text_color(date_layer, GColorWhite);
  text_layer_set_background_color(date_layer, GColorClear);
  text_layer_set_font(date_layer, fonts_load_custom_font(resource_get_handle(RESOURCE_ID_FUTURA_18)));
  text_layer_set_text_alignment(date_layer, GTextAlignmentCenter);
  text_layer_set_text(date_layer, date_text);
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(date_layer));


  bcH_layer = text_layer_create(FULL_FRAME);
  text_layer_set_text_color(bcH_layer, GColorWhite);
  text_layer_set_background_color(bcH_layer, GColorClear);
  text_layer_set_font(bcH_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
  text_layer_set_text_alignment(bcH_layer, GTextAlignmentCenter);
  text_layer_set_text(bcH_layer, btcH);
  layer_set_frame(text_layer_get_layer(bcH_layer), GRect(-47, 65, 130, 168-62));
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(bcH_layer));

  bcL_layer = text_layer_create(FULL_FRAME);
  text_layer_set_text_color(bcL_layer, GColorWhite);
  text_layer_set_background_color(bcL_layer, GColorClear);
  text_layer_set_font(bcL_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
  text_layer_set_text_alignment(bcL_layer, GTextAlignmentCenter);
  text_layer_set_text(bcL_layer, btcL);
  layer_set_frame(text_layer_get_layer(bcL_layer), GRect(-47, 80, 130, 168-62));
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(bcL_layer));

  bc_layer = text_layer_create(FULL_FRAME);
  text_layer_set_text_color(bc_layer, GColorWhite);
  text_layer_set_background_color(bc_layer, GColorClear);
  text_layer_set_font(bc_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD) );
  text_layer_set_text_alignment(bc_layer, GTextAlignmentCenter);
  text_layer_set_text(bc_layer, btcV);
  layer_set_frame(text_layer_get_layer(bc_layer), GRect(0, 64, 130, 168-62));
  layer_add_child(window_get_root_layer(window), text_layer_get_layer(bc_layer));



	// Add weather layer
	weather_layer_init(&weather_layer, GPoint(0, 90));
	layer_add_child(window_get_root_layer(window), weather_layer.layer);


  // Add graph layer	
  graph_layer = layer_create(GRect(104, 70, 36, 24));
  //text_layer_set_background_color(graph_layer, GColorClear);
  layer_add_child(window_get_root_layer(window), graph_layer);
  layer_set_update_proc(graph_layer, graph_update_proc);

  // Create the Gpath
  bgraph = gpath_create(&bgraph_info);
  APP_LOG(APP_LOG_LEVEL_DEBUG, "** Persist size: %d", sizeof(bgraph_data));

  if (persist_exists(0))
    {
    int dsize = sizeof(bgraph_data);
    APP_LOG(APP_LOG_LEVEL_DEBUG, "** Read Persist size: %d", dsize);
    persist_read_data(0, bgraph_data, 200);
    persist_read_data(1, ((char *) bgraph_data) + 200, dsize-200);    
    }
  else
    {
    for (int i=0; i<X_SIZE; i++) bgraph_data[i] = (GPoint) {i,0};
    for (int i=X_SIZE; i<2*X_SIZE; i++) bgraph_data[i] = (GPoint) {(2*X_SIZE)-i-1,0};
    }

  // Ensures time is displayed immediately (will break if NULL tick event accessed).
  // (This is why it's a good idea to have a separate routine to do the update itself.)
  time_t now = time(NULL);
  struct tm *current_time = localtime(&now);
  handle_minute_tick(current_time, MINUTE_UNIT);
  tick_timer_service_subscribe(MINUTE_UNIT, &handle_minute_tick);

  bluetooth_connection_service_subscribe( &bluetooth_handler );
  battery_state_service_subscribe( & battery_handler );
  

  //gpath_init(&bgraph, &bgraph_info);
  //for (int i=0; i<X_SIZE; i++) bgraph_data[i] = (GPoint) {i,0};
  //for (int i=X_SIZE; i<2*X_SIZE; i++) bgraph_data[i] = (GPoint) {(2*X_SIZE)-i-1,0};


  obWindSpeed[0] = obWindGust[0] = '!';


  battery_state = battery_state_service_peek();
  if (bluetooth_connection_service_peek()) 
    strcpy(bluetooth_text," ok");
  else
    strcpy(bluetooth_text," LOST!");
  
  fetch_msg();


  }


void graph_update_proc(struct Layer *layer, GContext *ctx)
  {
  graphics_context_set_stroke_color(ctx, GColorWhite);
  gpath_draw_outline(ctx, bgraph);
  }

static void deinit(void) 
  {
  gpath_destroy(bgraph);

  text_layer_destroy(time_layer);
  text_layer_destroy(date_layer);
  text_layer_destroy(bc_layer);
  text_layer_destroy(bcH_layer);
  text_layer_destroy(bcL_layer);

  layer_destroy(graph_layer);

  weather_layer_deinit(&weather_layer);

  window_destroy(window);

  // Save persistent data
  int dsize = sizeof(bgraph_data);
  persist_delete(0);
  int ret = persist_write_data(0, bgraph_data, 200);
  APP_LOG(APP_LOG_LEVEL_DEBUG, "** Write Persist size, ret: %d %d", dsize, ret);
  persist_write_data(1, ((char *) bgraph_data)+200, dsize-200);

  }




////////////////////////////////////////////////////////////////////////////////////
//
//   WEATHER 
//
////////////////////////////////////////////////////////////////////////////////////



void weather_layer_init(WeatherLayer* weather_layer, GPoint pos) {
  
  APP_LOG(APP_LOG_LEVEL_DEBUG, "Init weather layers...");

	weather_layer->layer = layer_create(GRect(pos.x, pos.y, 144, 80));
	
	// Add background layer
	weather_layer->temp_layer_background = text_layer_create(GRect(0, 10, 144, 68));
	text_layer_set_background_color(weather_layer->temp_layer_background, GColorWhite);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp_layer_background));
	
  // Add temperature #1 layer
	weather_layer->temp1_layer = text_layer_create(GRect(0, 4, 144, 80));
	text_layer_set_background_color(weather_layer->temp1_layer, GColorClear);
	text_layer_set_text_color(weather_layer->temp1_layer, GColorBlack );
  text_layer_set_font(weather_layer->temp1_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
	text_layer_set_text_alignment(weather_layer->temp1_layer, GTextAlignmentCenter);
  text_layer_set_text(weather_layer->temp1_layer, obTemperature);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp1_layer));

  // Add temperature #2 layer
	weather_layer->temp2_layer = text_layer_create(GRect(0, 24, 144, 80));
	text_layer_set_background_color(weather_layer->temp2_layer, GColorClear);
	text_layer_set_text_color(weather_layer->temp2_layer, GColorBlack );
  text_layer_set_font(weather_layer->temp2_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
	text_layer_set_text_alignment(weather_layer->temp2_layer, GTextAlignmentCenter);
  text_layer_set_text(weather_layer->temp2_layer, forecastTemp);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp2_layer));

  // Add temperature #3 layer
	weather_layer->temp3_layer = text_layer_create(GRect(0, 38, 144, 80));
	text_layer_set_background_color(weather_layer->temp3_layer, GColorClear);
	text_layer_set_text_color(weather_layer->temp3_layer, GColorBlack );
  text_layer_set_font(weather_layer->temp3_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
	text_layer_set_text_alignment(weather_layer->temp3_layer, GTextAlignmentCenter);
  text_layer_set_text(weather_layer->temp3_layer, "x");
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp3_layer));

  // Add temperature #4 layer
	weather_layer->temp4_layer = text_layer_create(GRect(0, 10, 144, 80));
	text_layer_set_background_color(weather_layer->temp4_layer, GColorClear);
	text_layer_set_text_color(weather_layer->temp4_layer, GColorBlack );
  text_layer_set_font(weather_layer->temp4_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
	text_layer_set_text_alignment(weather_layer->temp4_layer, GTextAlignmentCenter);
  text_layer_set_text(weather_layer->temp4_layer, "y");
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp4_layer));

  // Add temperature #5 layer
	weather_layer->temp5_layer  = text_layer_create(GRect(0, 35, 144, 80));
	text_layer_set_background_color(weather_layer->temp5_layer, GColorClear);
	text_layer_set_text_color(weather_layer->temp5_layer, GColorBlack );
  text_layer_set_font(weather_layer->temp5_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
	text_layer_set_text_alignment(weather_layer->temp5_layer, GTextAlignmentCenter);
  text_layer_set_text(weather_layer->temp5_layer, "z");
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp5_layer));

  // Add wind layer
	weather_layer->wind_layer = text_layer_create(GRect(0, 57, 144, 80));
	text_layer_set_background_color(weather_layer->wind_layer, GColorClear);
	text_layer_set_text_alignment(weather_layer->wind_layer, GTextAlignmentCenter);
	text_layer_set_font(weather_layer->wind_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD) );
	text_layer_set_text_color(weather_layer->wind_layer, GColorBlack );
  text_layer_set_text(weather_layer->wind_layer, obWindDir);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->wind_layer));

  // Add Battery layer
	weather_layer->battery_layer = text_layer_create(GRect(0, 63, 144, 80));
	text_layer_set_background_color(weather_layer->battery_layer, GColorClear);
	text_layer_set_text_alignment(weather_layer->battery_layer, GTextAlignmentRight);
	text_layer_set_font(weather_layer->battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
	text_layer_set_text_color(weather_layer->battery_layer, GColorBlack );
  text_layer_set_text(weather_layer->battery_layer, battery_text);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->battery_layer));

  // Add Bluetooth layer
	weather_layer->bluetooth_layer = text_layer_create(GRect(0, 63, 144, 80));
	text_layer_set_background_color(weather_layer->bluetooth_layer, GColorClear);
	text_layer_set_text_alignment(weather_layer->bluetooth_layer, GTextAlignmentLeft);
	text_layer_set_font(weather_layer->bluetooth_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
	text_layer_set_text_color(weather_layer->bluetooth_layer, GColorBlack );
  text_layer_set_text(weather_layer->bluetooth_layer, bluetooth_text);
	layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->bluetooth_layer));

  // Init bitmapped icon layers
  weather_layer->icon1_layer = bitmap_layer_create(GRect(0, 8, 60, 60));
  weather_layer->icon2_layer = bitmap_layer_create(GRect(145 - 60, 8, 60, 60));
	layer_add_child(weather_layer->layer, bitmap_layer_get_layer(weather_layer->icon1_layer));
	layer_add_child(weather_layer->layer, bitmap_layer_get_layer(weather_layer->icon2_layer));
  bitmap_layer_set_background_color(weather_layer->icon1_layer, GColorClear);
  bitmap_layer_set_background_color(weather_layer->icon2_layer, GColorClear);
  weather_layer->icon1_bitmap = gbitmap_create_with_resource(WEATHER_ICONS[0]);
  weather_layer->icon2_bitmap = gbitmap_create_with_resource(WEATHER_ICONS[0]);

  bitmap_layer_set_bitmap(weather_layer->icon1_layer,  weather_layer->icon1_bitmap  );
  bitmap_layer_set_bitmap(weather_layer->icon2_layer,  weather_layer->icon2_bitmap  );

}

void weather_layer_deinit(WeatherLayer* weather_layer) 
  {

  text_layer_destroy(weather_layer->temp_layer_background);
  text_layer_destroy(weather_layer->temp1_layer);
  text_layer_destroy(weather_layer->temp2_layer);
  text_layer_destroy(weather_layer->temp3_layer);
  text_layer_destroy(weather_layer->temp4_layer);
  text_layer_destroy(weather_layer->temp5_layer);
  text_layer_destroy(weather_layer->wind_layer);

  layer_destroy(weather_layer->layer);

	if (weather_layer->has_weather_icon)
		{
    bitmap_layer_destroy(weather_layer->icon1_layer);
    bitmap_layer_destroy(weather_layer->icon2_layer);
    }
  }












/********************* Main Program *******************/

int main(void)
  {
  init();
  app_event_loop();
  deinit();
  }


