//{{{  Includes
#include <pebble.h>
#include "message_keys.auto.h"
//}}}
//{{{  Defines

#define INT_DIGITS 5 /* enough for 64 bit integer */

//{{{  Keys
// Map old key names to new auto-generated ones for compatibility
#define KEY_CNF_TROTTEUSE MESSAGE_KEY_trotteuse
#define KEY_CNF_EXCHANGE MESSAGE_KEY_exchange
#define KEY_CNF_LOCATION MESSAGE_KEY_location
#define KEY_CNF_SERVICE MESSAGE_KEY_service
#define KEY_CNF_CELSIUS MESSAGE_KEY_celsius
#define KEY_CNF_HEALTH MESSAGE_KEY_health
#define KEY_CNF_CADENCE MESSAGE_KEY_cadence
// Legacy keys that are not in the new config
#define KEY_JS_EVENT 18
//}}}

//{{{  Geometries
#define FULL_FRAME       (GRect(0, 0, 144, 168))

#define GRECT_DATE_LAYER (GRect((144-100)/2, -4, 100, 19))

#define BTC_OFFSET       14
#define X_SIZE 60
#define Y_SIZE 22

#define X_FRAME 144
#define Y_FRAME 168

//#define GRECT_TROTTEUSE GRect(10, 95, 134, 6)
#define GRECT_TROTTEUSE GRect(36, 0, 73, 6)
#define GRECT_TROTTEUSE_WITH_HEALTH GRect(0, 0, 121, 6)


#define GRECT_DOT4 GRect(X_FRAME-10,91,10,10)
#define GRECT_WEATHER_LAYER_1  GRect(pos.x, pos.y, 144, 80)
#define GRECT_WEATHER_LAYER_2  GRect(0, 0, 144, 80)
#define GRECT_WEATHER_LAYER_3  GRect(0, -7, 144, 80)
#define GRECT_WEATHER_LAYER_5  GRect(0, 14, 144, 80)
#define GRECT_WEATHER_LAYER_7  GRect(0, 30, 144, 80)
#define GRECT_WEATHER_LAYER_9  GRect(0, -2, 144, 80)
#define GRECT_WEATHER_LAYER_10 GRect(0, 23, 144, 80)
#define GRECT_WEATHER_LAYER_11 GRect(0, 19, 144, 80)
#define GRECT_WEATHER_LAYER_12 GRect(0, 48, 144, 80)
#define GRECT_BATTERY_LAYER    GRect(122, 51, 22, 16)
#define GRECT_BLUETOOTH_LAYER  GRect(0, 51, 30, 16)

#define GRECT_ICON1_LAYER      GRect(0, -3, 60, 60)
#define GRECT_ICON2_LAYER      GRect(145-60, -3, 60, 60)

#ifdef PBL_COLOR
#define GRECT_TIME_LAYER (GRect((144-134)/2-1, 37, 134, 55))
#define GRECT_BCV3_LAYER        GRect(21, 16-6, 56, 24)
#define GRECT_BCH3_LAYER        GRect( 0, 17-6, 31, 14)
#define GRECT_BCL3_LAYER        GRect( 0, 30-6, 31, 14)
#define GRECT_BCV4_LAYER        GRect(23, 16-6, 56, 24)
#define GRECT_BCH4_LAYER        GRect( 0, 17-6, 31, 14)
#define GRECT_BCL4_LAYER        GRect( 0, 30-6, 31, 14)
#define GRECT_BCV5_LAYER        GRect( 5, 16-6, 66, 24)
#define GRECT_BCH5_LAYER        GRect( 0, 17-6,  5, 16)
#define GRECT_BCL5_LAYER        GRect( 0, 30-6,  5, 16)
#else
#define GRECT_TIME_LAYER (GRect((144-134)/2, 37, 134, 55))
#define GRECT_BCV3_LAYER        GRect(21, 16-6, 56, 24)
#define GRECT_BCH3_LAYER        GRect( 0, 17-6, 31, 14)
#define GRECT_BCL3_LAYER        GRect( 0, 30-6, 31, 14)
#define GRECT_BCV4_LAYER        GRect(23, 16-6, 56, 24)
#define GRECT_BCH4_LAYER        GRect( 0, 17-6, 31, 14)
#define GRECT_BCL4_LAYER        GRect( 0, 30-6, 31, 14)
#define GRECT_BCV5_LAYER        GRect( 5, 16-6, 66, 24)
#define GRECT_BCH5_LAYER        GRect( 0, 17-6,  5, 16)
#define GRECT_BCL5_LAYER        GRect( 0, 30-6,  5, 16)
#endif

#define GRECT_GRAPH_LAYER_1     GRect(140-X_SIZE, BTC_OFFSET+1, X_SIZE, Y_SIZE)
#define GRECT_GRAPH_LAYER_2     GRect(135-X_SIZE, BTC_OFFSET+1, X_SIZE, Y_SIZE)

#define GRECT_TOP_LAYER         GRect(0,   0, 144, 93)
#define GRECT_MIDDLE_LAYER      GRect(0,  95, 144, 7)
#define GRECT_BOTTOM_LAYER      GRect(0, 102, 144, 67)




//}}}

//{{{  Colors
#ifdef PBL_COLOR
//{{{  
#define cWindowB    GColorBlack
#define cTopB
#define cBitcoinsB
#define cWeatherB   GColorBlack
#define cIconB      GColorClear

#define cInfoB      GColorClear
#define cInfoF      GColorWhite

#define cTimeF      GColorYellow
#define cTimeB      GColorBlack

#define cDateF      GColorWhite
#define cDateB      GColorBlack

#define cBtchF      GColorWhite
#define cBtchB      GColorBlack

#define cBtclF      GColorWhite
#define cBtclB      GColorBlack

#define cBtcF       GColorWhite
#define cBtcB       GColorBlack

#define cGraphF     GColorWhite

#define cTempF  GColorWhite
#define cTempB  GColorClear


#define cInfoBlueF  GColorWhite
#define cInfoBlueB  GColorClear
#define cInfoBlueAlarmB  GColorWhite
#define cInfoBlueAlarmF  GColorBlack

#define cInfoBatF  GColorWhite
#define cInfoBatB  GColorClear
#define cInfoBatAlarmB  GColorWhite
#define cInfoBatAlarmF  GColorBlack
//}}}
#else
//{{{  
#define cWindowB    GColorBlack
#define cTopB
#define cBitcoinsB
#define cWeatherB   GColorBlack
#define cIconB      GColorClear

#define cInfoB      GColorClear
#define cInfoF      GColorWhite

#define cTimeF      GColorWhite
#define cTimeB      GColorBlack

#define cDateF      GColorWhite
#define cDateB      GColorBlack

#define cBtchF      GColorWhite
#define cBtchB      GColorBlack

#define cBtclF      GColorWhite
#define cBtclB      GColorBlack

#define cBtcF       GColorWhite
#define cBtcB       GColorBlack

#define cGraphF     GColorWhite

#define cTempF  GColorWhite
#define cTempB  GColorClear


#define cInfoBlueF  GColorWhite
#define cInfoBlueB  GColorClear
#define cInfoBlueAlarmB  GColorWhite
#define cInfoBlueAlarmF  GColorBlack

#define cInfoBatF  GColorWhite
#define cInfoBatB  GColorClear
#define cInfoBatAlarmB  GColorWhite
#define cInfoBatAlarmF  GColorBlack
//}}}
#endif
//}}}

//}}}
//{{{  Globals

Window    *window;

//{{{  Layers
static TextLayer *time_layer;
static TextLayer *date_layer;
static TextLayer *bc_layer;
static TextLayer *bcH_layer;
static TextLayer *bcL_layer;

static Layer *graph_layer;
static Layer *trotteuse_layer;
static Layer *trotteuse_scale_layer;
static Layer *DOT_layer;

static Layer *top_layer;
static Layer *mid_layer;
static Layer *bot_layer;

//{{{  WeatherLayer struct
typedef struct
{
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
    char temp1_str[16];
    char temp2_str[16];
    char temp3_str[16];
    char temp4_str[16];
    char temp5_str[16];
    char wind_str[16];
} WeatherLayer;
//}}}

static WeatherLayer weather_layer;
//}}}

//{{{  Variables
char btcV[16];
char btcL[16];
char btcH[16];
char obIconCode[16];
char obTemperature[16];
char obWindDir[16];
char obWindDir_bkp[16];
char obWindGust[16];
char obWindSpeed[16];
char obWindChill[16];
char obHumidex[16];
char forecastIconCode[16];
char forecastLow[16];
char forecastHigh[16];
char forecastTemp[16];
char forecastPeriod[16];

float btcV_value = 0.0;
float btcL_value = 0.0;
float btcH_value = 0.0;
int   obIconCode_value = 0;

BatteryChargeState battery_state;

char battery_text[8];
char bluetooth_text[8];

bool BuzzEnable = true;

char geoArea1[5];

// Configuration
int trotteuse = 0;
int trotteuse_draw_scale = 1;
bool cnfTrotteuse = true;
bool cnfCelsius = true;
bool cnfHealth = true;
char cnfExchange[20];
char cnfLocation[32];
char cnfService[32];
int cnfCadence = 30;  // Update interval in minutes (default: 30 minutes)
int last_fetch_minute = -1;  // Track last fetch minute to prevent duplicate fetches

int errorInWeather = 0;

char time_text[] = "00:00"; // Needs to be static because it's used by the system later.
char date_text[] = "........";

int message_count = 0;


uint8_t WEATHER_ICONS[] = //{{{
{
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
//}}}

//{{{  Vibrations
const uint32_t segments_long[] = { 1000, 1000, 1000 };
const uint32_t segments_short[] = { 100, 100, 100, 100, 100, 100, 100, 100, 100, 100};
VibePattern myLongVibes =
{
    .durations = segments_long,
    .num_segments = ARRAY_LENGTH(segments_long),
};
VibePattern myShortVibes =
{
    .durations = segments_short,
    .num_segments = ARRAY_LENGTH(segments_short),
};
//}}}

//{{{  Graphic
GPath *bgraph;
GPoint bgraph_data[2*X_SIZE];
const GPathInfo bgraph_info =
{
    .num_points = 2*X_SIZE,
    .points = bgraph_data
};
//}}}

float DOT1 = 0.0;
float DOT2 = 0.0;
float DOT3 = 0.0;
float DOT4 = 0.0;

//}}}

//{{{  Prototypes

// Utility functions
char* _itoa(int i, char *);
int _atoi(const char *);
float _string2float(char *);

// Init and deinit
void init(void);
void deinit(void);

// Graphics update procedures
void DOT_update_proc(struct Layer *, GContext *);
void graph_update_proc(struct Layer *, GContext *);
void trotteuse_update_proc(struct Layer *, GContext *);
void trotteuse_scale_update_proc(struct Layer *, GContext *);

// Weather layer management
void weather_layer_init(WeatherLayer* weather_layer, GPoint pos);
void weather_layer_deinit(WeatherLayer* weather_layer);

// Communication
void fetch_msg(void);

// Time handlers
void handle_second_tick(struct tm* tick_time);
void handle_minute_update(struct tm* tick_time);
void handle_minute_tick(struct tm*, TimeUnits);

// Configuration handlers
void handle_config_trotteuse(Tuple *tuple);
void handle_config_health(Tuple *tuple);
void handle_config_celsius(Tuple *tuple);
void handle_config_exchange(Tuple *tuple);
void handle_config_location(Tuple *tuple);
void handle_config_service(Tuple *tuple);
void handle_config_cadence(Tuple *tuple);

// Data handlers
void handle_bitcoin_data(Tuple *btcV_tuple, Tuple *btcL_tuple, Tuple *btcH_tuple);
void handle_weather_observation(Tuple *iconCode, Tuple *temp, Tuple *windDir, Tuple *windGust, Tuple *windSpeed, Tuple *windChill, Tuple *humidex);
void update_weather_display(void);
void handle_js_event(Tuple *tuple);

//}}}

//}}}

//{{{  Utilities
float _string2float(char *input) //{{{
{
    int intValue=0, divisionDecimal=1;
    float result=0;
    while(*input!='.'&&*input!='\0'){
        intValue = (intValue*10+*input-'0');
        input++;
    }
    if(*input=='\0')
        return (float)intValue;
    else
        input++;
    while(*input!='\0'){
        divisionDecimal*=10;
        result=(result*10+*input-'0');
        input++;
    }
    return result=result/divisionDecimal+intValue;
}
//}}}
int _atoi(const char *s) //{{{
{
         const char digits[] = "0123456789";  /* legal digits in order */
        unsigned val=0;         /* value we're accumulating */
        int neg=0;              /* set to true if we see a minus sign */

        /* skip whitespace */
        while (*s==' ' || *s=='\t') {
                s++;
        }

        /* check for sign */
        if (*s=='-') {
                neg=1;
                s++;
        }
        else if (*s=='+') {
                s++;
        }

        /* process each digit */
        while (*s) {
                const char *where;
                unsigned digit;
                
                /* look for the digit in the list of digits */
                where = strchr(digits, *s);
                if (where==NULL) {
                        /* not found; not a digit, so stop */
                        break;
                }

                /* get the index into the digit list, which is the value */
                digit = (where - digits);

                /* could (should?) check for overflow here */

                /* shift the number over and add in the new digit */
                val = val*10 + digit;
 
                /* look at the next character */
                s++;
        }
        
        /* handle negative numbers */
        if (neg) {
                return -val;
        }
        
        /* done */
        return val;
}
//}}}
char *_itoa(int i, char *buf) //{{{
{
  /* Room for INT_DIGITS digits, - and '\0' */
 // char buf[INT_DIGITS + 2];
  char *p = buf + INT_DIGITS + 1;	/* points to terminating '\0' */
  *p = '\0';
  if (i >= 0) {
    do {
      *--p = '0' + (i % 10);
      i /= 10;
    } while (i != 0);
    return p;
  }
  else {			/* i < 0 */
    do {
      *--p = '0' - (i % 10);
      i /= 10;
    } while (i != 0);
    *--p = '-';
  }
  return p;
}
//}}}
char *strchr(const char *s, int ch) //{{{
{
        /* scan from left to right */
        while (*s) {
                /* if we hit it, return it */
                if (*s==ch) {
                        return (char *)s;
                }
                s++;
        }

        /* if we were looking for the 0, return that */
        if (*s==ch) {
                return (char *)s;
        }

        /* didn't find it */
        return NULL;
}
//}}}

void push_point(float btc, float btcL, float btcH) //{{{
{
    /* Push a new btc value on the graph stack*/

    int i,j,new_point;

    /* Sanitize floats */
    if (btc < btcL) btc = btcL;
    if (btc > btcH) btc = btcH;

    for (i=0; i<X_SIZE-1; i++) bgraph_data[i].y = bgraph_data[i+1].y;
    new_point =  (Y_SIZE-1) - ((Y_SIZE-1) * ((btc-btcL)/(btcH-btcL)) );
    bgraph_data[X_SIZE-1].y =  new_point;
    bgraph_data[X_SIZE].y =  new_point;
    j = 2*X_SIZE;
    for (i=X_SIZE+1; i<2*X_SIZE; i++) bgraph_data[i].y = bgraph_data[j-i-1].y;
}
//}}}
void fetch_msg(void) //{{{
{
    DictionaryIterator *iter;

    //Tuplet symbol_tuple = TupletCString(0, "HELLO!");
    APP_LOG(APP_LOG_LEVEL_DEBUG, "==> Fetch");


    #if defined(PBL_HEALTH)
    // Use the step count metric
    HealthMetric metric = HealthMetricStepCount;
    time_t start = time_start_of_today() - 24*SECONDS_PER_HOUR;
    time_t end = time_start_of_today();

    // Check the metric has data available for today
    HealthServiceAccessibilityMask mask = health_service_metric_accessible(metric, 
      start, end);

    if(cnfHealth && (mask & HealthServiceAccessibilityMaskAvailable))
        {
        // Data is available!
        APP_LOG(APP_LOG_LEVEL_DEBUG, "Steps today: %d", 
              (int)health_service_sum_today(metric));
        APP_LOG(APP_LOG_LEVEL_DEBUG, "Steps yesterday: %d",
              (int) health_service_sum(HealthMetricStepCount, start, end));

        unsigned long steps_today = (unsigned long) health_service_sum_today(metric);
        unsigned long steps_previous  = (unsigned long) health_service_sum(HealthMetricStepCount, start, end);
        DOT4 = (float) (steps_today % (2*steps_previous)) / (float) steps_previous;
        if (DOT4 > 1.0) 
            DOT4 = -1 * (DOT4 - 1.0);
        } 
    else 
        {
        // No data recorded yet today
        APP_LOG(APP_LOG_LEVEL_ERROR, "Data unavailable!");
        }
    #endif
    
    
    
    app_message_outbox_begin(&iter);

    if (iter == NULL)
        {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "Null iter!");
        return;
        }

    if (date_text[strlen(date_text)-1] != '*') strcat(date_text, "*");

    //dict_write_tuplet(iter, &symbol_tuple);

    APP_LOG(APP_LOG_LEVEL_DEBUG, "***** LOCATION: %s", cnfLocation);
    dict_write_cstring(iter, KEY_CNF_LOCATION, cnfLocation);
    dict_write_cstring(iter, KEY_CNF_EXCHANGE, cnfExchange);
    dict_write_cstring(iter, KEY_CNF_SERVICE, cnfService);
    dict_write_cstring(iter, KEY_CNF_CELSIUS, cnfCelsius ? "1":"0");
    dict_write_cstring(iter, KEY_CNF_HEALTH, cnfHealth ? "1":"0");

    dict_write_end(iter);

    message_count = 0;

    app_message_outbox_send();

    layer_mark_dirty(window_get_root_layer(window));

    APP_LOG(APP_LOG_LEVEL_DEBUG, "Message sent");
}
//}}}
//}}}
//{{{  Handlers

//{{{  Time and Display Handlers
/**
 * Handle second updates - Update trotteuse (second hand) display
 */
void handle_second_tick(struct tm* tick_time) //{{{
{
    trotteuse = tick_time->tm_sec;
    layer_mark_dirty(trotteuse_layer);
}
//}}}

/**
 * Handle minute updates - Update time, date, and fetch weather data every 5 minutes
 */
void handle_minute_update(struct tm* tick_time) //{{{
{
    // Disable buzzer during night hours (10pm - 5am)
    BuzzEnable = !((tick_time->tm_hour >= 22) || (tick_time->tm_hour <= 5));

    // Format and update time display
    if (clock_is_24h_style()) {
        strftime(time_text, sizeof(time_text), "%k:%M", tick_time);
    } else {
        strftime(time_text, sizeof(time_text), "%l:%M", tick_time);
    }

    strftime(date_text, sizeof(date_text), "%a %d", tick_time);

    // Mark layers for redraw
    layer_mark_dirty(text_layer_get_layer(time_layer));
    layer_mark_dirty(text_layer_get_layer(date_layer));

    // Fetch weather data based on configurable cadence aligned to clock intervals
    // For cadence of N minutes, fetch at 0, N, 2N, 3N... minutes after the hour
    int current_minute = tick_time->tm_min;
    int current_hour = tick_time->tm_hour;

    // Calculate if current time aligns with cadence interval
    bool should_fetch = false;

    if (cnfCadence >= 60) {
        // For hourly intervals (60, 180, 360 min)
        int hour_interval = cnfCadence / 60;
        if (current_minute == 0 && (current_hour % hour_interval) == 0) {
            should_fetch = true;
        }
    } else {
        // For sub-hourly intervals (1, 5, 30 min)
        if (current_minute % cnfCadence == 0) {
            should_fetch = true;
        }
    }

    // Only fetch if we haven't already fetched this minute
    if (should_fetch && last_fetch_minute != current_minute) {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "Fetching weather (cadence: %d min, time: %02d:%02d)", cnfCadence, current_hour, current_minute);
        fetch_msg();
        last_fetch_minute = current_minute;
    }
}
//}}}

/**
 * Main tick handler - Routes to second or minute handlers
 */
void handle_minute_tick(struct tm* tick_time, TimeUnits units_changed) //{{{
{
    if (units_changed & SECOND_UNIT) {
        handle_second_tick(tick_time);
    }

    if (units_changed & MINUTE_UNIT) {
        handle_minute_update(tick_time);
    }
}
//}}}
//}}}

//{{{  Message Handler Helpers

/**
 * Handle configuration tuple for trotteuse (second hand)
 */
void handle_config_trotteuse(Tuple *tuple) //{{{
{
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: === handle_config_trotteuse called ===");

    if (!tuple) {
        APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: tuple is NULL - no trotteuse data received");
        return;
    }

    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Tuple received - type: %d", tuple->type);

    // Handle different tuple types - Clay may send INT, CSTRING, or UINT
    if (tuple->type == TUPLE_CSTRING) {
        APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Tuple value string: %s", tuple->value->cstring);
        cnfTrotteuse = (strcmp(tuple->value->cstring,"1") == 0);
    } else if (tuple->type == TUPLE_INT || tuple->type == TUPLE_UINT) {
        int32_t intValue = tuple->value->int32;
        APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Tuple value int: %d", (int)intValue);
        cnfTrotteuse = (intValue != 0);
    } else {
        APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Unknown tuple type, defaulting to OFF");
        cnfTrotteuse = false;
    }

    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: cnfTrotteuse will be: %d", cnfTrotteuse ? 1:0);

    if (cnfTrotteuse) {
        APP_LOG(APP_LOG_LEVEL_INFO, "CONFIG_C: Enabling trotteuse (seconds hand) - subscribing to SECOND_UNIT");
        tick_timer_service_subscribe(SECOND_UNIT | MINUTE_UNIT, &handle_minute_tick);
    } else {
        APP_LOG(APP_LOG_LEVEL_INFO, "CONFIG_C: Disabling trotteuse (seconds hand) - unsubscribing from SECOND_UNIT");
        tick_timer_service_subscribe(MINUTE_UNIT, &handle_minute_tick);
    }

    persist_write_bool(KEY_CNF_TROTTEUSE, cnfTrotteuse);
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Persisted cnfTrotteuse value: %d", cnfTrotteuse ? 1:0);

    trotteuse = 0;
    layer_mark_dirty(trotteuse_scale_layer);
    layer_mark_dirty(trotteuse_layer);
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Marked layers dirty and reset trotteuse to 0");
}
//}}}

/**
 * Handle configuration tuple for health tracking
 */
void update_trotteuse_layout() //{{{
{
    // Always use the centered layout now
    GRect bounds = GRECT_TROTTEUSE;
    layer_set_frame(trotteuse_layer, bounds);
    layer_set_frame(trotteuse_scale_layer, bounds);
}
//}}}

void handle_config_health(Tuple *tuple) //{{{
{
    if (!tuple) return;

    // Handle different tuple types
    if (tuple->type == TUPLE_CSTRING) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Health: %s", tuple->value->cstring);
        cnfHealth = (strcmp(tuple->value->cstring,"1") == 0);
    } else if (tuple->type == TUPLE_INT || tuple->type == TUPLE_UINT) {
        int32_t intValue = tuple->value->int32;
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Health (int): %d", (int)intValue);
        cnfHealth = (intValue != 0);
    } else {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Health (empty)");
        cnfHealth = false;
    }

    persist_write_bool(KEY_CNF_HEALTH, cnfHealth);
    DOT4 = 0.0;

    // Update trotteuse layer layout when health setting changes
    update_trotteuse_layout();
}
//}}}

/**
 * Handle configuration tuple for temperature unit (Celsius/Fahrenheit)
 */
void handle_config_celsius(Tuple *tuple) //{{{
{
    if (!tuple) return;

    // Handle different tuple types
    if (tuple->type == TUPLE_CSTRING) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Celsius: %s", tuple->value->cstring);
        cnfCelsius = (strcmp(tuple->value->cstring,"1") == 0);
    } else if (tuple->type == TUPLE_INT || tuple->type == TUPLE_UINT) {
        int32_t intValue = tuple->value->int32;
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Celsius (int): %d", (int)intValue);
        cnfCelsius = (intValue != 0);
    } else {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN Celsius (empty)");
        cnfCelsius = false;
    }

    persist_write_bool(KEY_CNF_CELSIUS, cnfCelsius);
}
//}}}

/**
 * Handle configuration tuple for exchange name
 */
void handle_config_exchange(Tuple *tuple) //{{{
{
    if (!tuple) return;

    APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN Exchange: %s", tuple->value->cstring);
    strcpy(cnfExchange, tuple->value->cstring);
    persist_write_string(KEY_CNF_EXCHANGE, cnfExchange);
}
//}}}

/**
 * Handle configuration tuple for location
 */
void handle_config_location(Tuple *tuple) //{{{
{
    if (!tuple) return;

    APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN Location: %s", tuple->value->cstring);
    strcpy(cnfLocation, tuple->value->cstring);
    persist_write_string(KEY_CNF_LOCATION, cnfLocation);
}
//}}}

/**
 * Handle configuration tuple for weather service
 */
void handle_config_service(Tuple *tuple) //{{{
{
    if (!tuple) return;

    APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN cnfService: %s", tuple->value->cstring);
    strcpy(cnfService, tuple->value->cstring);
    persist_write_string(KEY_CNF_SERVICE, cnfService);
}
//}}}

/**
 * Handle configuration tuple for update cadence
 */
void handle_config_cadence(Tuple *tuple) //{{{
{
    if (!tuple) return;

    // Handle different tuple types
    if (tuple->type == TUPLE_CSTRING) {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN cnfCadence: %s", tuple->value->cstring);
        cnfCadence = atoi(tuple->value->cstring);
    } else if (tuple->type == TUPLE_INT || tuple->type == TUPLE_UINT) {
        cnfCadence = tuple->value->int32;
        APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN cnfCadence (int): %d", cnfCadence);
    } else {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "* IN cnfCadence (empty) - using default");
        cnfCadence = 30;
    }

    APP_LOG(APP_LOG_LEVEL_DEBUG, "cnfCadence set to: %d minutes", cnfCadence);
    persist_write_int(KEY_CNF_CADENCE, cnfCadence);
}
//}}}

/**
 * Format Bitcoin price for display
 * If price >= 1000, display as "XXXk" (e.g., "158k")
 * Otherwise, display full value
 */
void format_btc_price(char *dest, char *source, size_t dest_size) {
    float value = _string2float(source);

    if (value >= 1000.0) {
        // Display as thousands with "k" suffix
        int thousands = (int)(value / 1000.0);
        snprintf(dest, dest_size, "%dk", thousands);
    } else {
        // Display full value
        snprintf(dest, dest_size, "%.0f", value);
    }
}

/**
 * Handle Bitcoin price data
 */
void handle_bitcoin_data(Tuple *btcV_tuple, Tuple *btcL_tuple, Tuple *btcH_tuple) //{{{
{
    if (btcV_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN btcV");
        char btcV_raw[16];
        strncpy(btcV_raw, btcV_tuple->value->cstring, 16);
        btcV_value = _string2float(btcV_raw);

        // Format for display
        format_btc_price(btcV, btcV_raw, sizeof(btcV));

        APP_LOG(APP_LOG_LEVEL_DEBUG, "BTC: raw=%s formatted=%s value=%d", btcV_raw, btcV, (int)btcV_value);

        if (cnfExchange[0] == 'B' && cnfExchange[1] == 'i' && cnfExchange[2] == 't' && cnfExchange[3] == 'p') {
            text_layer_set_text(bcH_layer, "");
            text_layer_set_text(bcL_layer, "");
            layer_set_frame(text_layer_get_layer(bc_layer), GRECT_BCV5_LAYER);
            layer_set_frame(text_layer_get_layer(bcH_layer), GRECT_BCH5_LAYER);
            layer_set_frame(text_layer_get_layer(bcL_layer), GRECT_BCL5_LAYER);
        } else {
            text_layer_set_text(bcH_layer, btcH);
            text_layer_set_text(bcL_layer, btcL);
            if (cnfExchange[0] == 'B' && cnfExchange[1] == 'T' && cnfExchange[2] == 'C' && cnfExchange[3] == 'C') {
                layer_set_frame(text_layer_get_layer(bc_layer),  GRECT_BCV4_LAYER);
                layer_set_frame(text_layer_get_layer(bcH_layer), GRECT_BCH4_LAYER);
                layer_set_frame(text_layer_get_layer(bcL_layer), GRECT_BCL4_LAYER);
            } else {
                layer_set_frame(text_layer_get_layer(bc_layer),  GRECT_BCV3_LAYER);
                layer_set_frame(text_layer_get_layer(bcH_layer), GRECT_BCH3_LAYER);
                layer_set_frame(text_layer_get_layer(bcL_layer), GRECT_BCL3_LAYER);
            }
        }
    }

    if (btcL_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN btcL");
        char btcL_raw[16];
        strncpy(btcL_raw, btcL_tuple->value->cstring, 16);
        btcL_value = _string2float(btcL_raw);

        // Format for display
        format_btc_price(btcL, btcL_raw, sizeof(btcL));

        APP_LOG(APP_LOG_LEVEL_DEBUG, "BTC: Low raw=%s formatted=%s", btcL_raw, btcL);
    }

    if (btcH_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN btcH");
        char btcH_raw[16];
        strncpy(btcH_raw, btcH_tuple->value->cstring, 16);
        btcH_value = _string2float(btcH_raw);

        // Format for display
        format_btc_price(btcH, btcH_raw, sizeof(btcH));

        APP_LOG(APP_LOG_LEVEL_DEBUG, "BTC: High raw=%s formatted=%s", btcH_raw, btcH);
    }
}
//}}}

/**
 * Handle weather observation data
 */
void handle_weather_observation(Tuple *iconCode, Tuple *temp, Tuple *windDir, Tuple *windGust, Tuple *windSpeed, Tuple *windChill, Tuple *humidex) //{{{
{
    if (iconCode) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obIconCode");
        strncpy(obIconCode, iconCode->value->cstring, 16);
        obIconCode_value = _atoi(obIconCode);
        gbitmap_destroy(weather_layer.icon1_bitmap);
        weather_layer.icon1_bitmap =  gbitmap_create_with_resource(WEATHER_ICONS[_atoi(obIconCode)]);
        bitmap_layer_set_bitmap(weather_layer.icon1_layer, weather_layer.icon1_bitmap );
        bitmap_layer_set_compositing_mode(weather_layer.icon1_layer, GCompOpAssignInverted);
    }

    if (temp) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obTemperature");
        strncpy(obTemperature, temp->value->cstring, 16);
    }

    if (windDir) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obWindDir");
        strncpy(obWindDir, windDir->value->cstring, 16);
        strncpy(obWindDir_bkp, windDir->value->cstring, 16);
    }

    if (windGust) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obWindGust");
        strncpy(obWindGust, windGust->value->cstring, 16);
    }

    if (windSpeed) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obWindSpeed");
        strncpy(obWindSpeed, windSpeed->value->cstring, 16);
    }

    if (windChill) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obWindChill");
        strncpy(obWindChill, windChill->value->cstring, 16);
    }

    if (humidex) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN obHumidex");
        strncpy(obHumidex, humidex->value->cstring, 16);
    }
}
//}}}

/**
 * Update weather display with current data
 */
void update_weather_display(void) //{{{
{
    // Build wind string
    strncpy(obWindDir, obWindDir_bkp, 16);
    if (obWindSpeed[0] != '!') {
        strncat(obWindDir, " ", 16);
        strncat(obWindDir, obWindSpeed, 16);

        if (obWindGust[0] != '!') {
            strncat(obWindDir, "/", 16);
            strncat(obWindDir, obWindGust, 16);
        }
    } else {
        strncpy(obWindDir, "NO WIND!", 16);
    }

    // Update temperature displays based on available data
    if ((obWindChill[0] == '!') && (obHumidex[0] == '!')) {
        text_layer_set_text(weather_layer.temp1_layer, "");
        text_layer_set_text(weather_layer.temp2_layer, "");
        text_layer_set_text(weather_layer.temp3_layer, "");
        text_layer_set_text(weather_layer.temp4_layer, obTemperature);
        text_layer_set_text(weather_layer.temp5_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
    } else if (obWindChill[0] != '!') {
        text_layer_set_text(weather_layer.temp1_layer, obTemperature);
        text_layer_set_text(weather_layer.temp2_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
        text_layer_set_text(weather_layer.temp3_layer, obWindChill);
        text_layer_set_text(weather_layer.temp4_layer, "");
        text_layer_set_text(weather_layer.temp5_layer, "");
    } else if (obHumidex[0] != '!') {
        text_layer_set_text(weather_layer.temp1_layer, obTemperature);
        text_layer_set_text(weather_layer.temp2_layer, (forecastPeriod[2] == 'd') ? forecastHigh : forecastLow);
        text_layer_set_text(weather_layer.temp3_layer, obHumidex);
        text_layer_set_text(weather_layer.temp4_layer, "");
        text_layer_set_text(weather_layer.temp5_layer, "");
    } else {
        text_layer_set_text(weather_layer.temp1_layer, "");
        text_layer_set_text(weather_layer.temp2_layer, "");
        text_layer_set_text(weather_layer.temp3_layer, "");
        text_layer_set_text(weather_layer.temp4_layer, "");
        text_layer_set_text(weather_layer.temp5_layer, "");
    }
}
//}}}

/**
 * Handle JavaScript event messages (errors and status)
 */
void handle_js_event(Tuple *tuple) //{{{
{
    if (!tuple) return;

    APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT %s", tuple->value->cstring);

    switch (tuple->value->cstring[0]) {
        case '1':
            APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT fetch_msg");
            fetch_msg();
            break;

        case '2':
            APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT TIMEOUT!");
            fetch_msg();
            break;

        case '3':
            APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT Bad ID!");
            errorInWeather = 1;
            if (date_text[strlen(date_text)-1] == '*') date_text[strlen(date_text)-1] = '\0';
            bitmap_layer_set_compositing_mode(weather_layer.icon1_layer, GCompOpClear);
            bitmap_layer_set_compositing_mode(weather_layer.icon2_layer, GCompOpClear);
            strncpy(obWindDir, "bad ID", 16);
            text_layer_set_text(weather_layer.temp1_layer, "");
            text_layer_set_text(weather_layer.temp2_layer, "?");
            text_layer_set_text(weather_layer.temp3_layer, "");
            text_layer_set_text(weather_layer.temp4_layer, "");
            text_layer_set_text(weather_layer.temp5_layer, "");
            if (bluetooth_text[1] != '?') {
                strcpy(bluetooth_text," **");
            }
            break;

        case '4':
            APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT Bad city name!");
            errorInWeather = 1;
            if (date_text[strlen(date_text)-1] == '*') date_text[strlen(date_text)-1] = '\0';
            bitmap_layer_set_compositing_mode(weather_layer.icon1_layer, GCompOpClear);
            bitmap_layer_set_compositing_mode(weather_layer.icon2_layer, GCompOpClear);
            strncpy(obWindDir, "bad location", 16);
            text_layer_set_text(weather_layer.temp1_layer, "");
            text_layer_set_text(weather_layer.temp2_layer, "?");
            text_layer_set_text(weather_layer.temp3_layer, "");
            text_layer_set_text(weather_layer.temp4_layer, "");
            text_layer_set_text(weather_layer.temp5_layer, "");
            if (bluetooth_text[1] != '?') {
                strcpy(bluetooth_text," **");
            }
            break;

        case '5':
            APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN jsEVENT Fetching weather!");
            errorInWeather = 1;
            if (date_text[strlen(date_text)-1] == '*') date_text[strlen(date_text)-1] = '\0';
            bitmap_layer_set_compositing_mode(weather_layer.icon1_layer, GCompOpClear);
            bitmap_layer_set_compositing_mode(weather_layer.icon2_layer, GCompOpClear);
            strncpy(obWindDir, "internet ?", 16);
            text_layer_set_text(weather_layer.temp1_layer, "");
            text_layer_set_text(weather_layer.temp2_layer, "?");
            text_layer_set_text(weather_layer.temp3_layer, "");
            text_layer_set_text(weather_layer.temp4_layer, "");
            text_layer_set_text(weather_layer.temp5_layer, "");
            if (bluetooth_text[1] != '?') {
                strcpy(bluetooth_text," **");
            }
            fetch_msg();
            break;

        default:
            break;
    }
}
//}}}
//}}}

//{{{  Main Message Handler
/**
 * Handle incoming messages from JavaScript - Main dispatcher
 */
void in_received_handler(DictionaryIterator *iter, void *context) //{{{
{
    //{{{  Extract tuples
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
    Tuple *geoArea1_tuple = dict_find(iter, 14);

    // Configuration Tuplets
    Tuple *cnfTrotteuse_tuple = dict_find(iter, KEY_CNF_TROTTEUSE);
    Tuple *cnfExchange_tuple = dict_find(iter, KEY_CNF_EXCHANGE);
    Tuple *cnfLocation_tuple = dict_find(iter, KEY_CNF_LOCATION);
    Tuple *cnfService_tuple  = dict_find(iter, KEY_CNF_SERVICE);
    Tuple *cnfCelsius_tuple   = dict_find(iter, KEY_CNF_CELSIUS);
    Tuple *cnfHealth_tuple   = dict_find(iter, KEY_CNF_HEALTH);
    Tuple *cnfCadence_tuple  = dict_find(iter, KEY_CNF_CADENCE);

    Tuple *jsEvent_tuple = dict_find(iter, KEY_JS_EVENT);
    //}}}

    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: ===== MESSAGE RECEIVED =====");
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Message count: %d", message_count + 1);
    message_count += 1;
    window_set_background_color(window, GColorBlack);
    trotteuse = 0;

    //{{{  Handle Configuration Tuples
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: Checking for configuration tuples...");
    APP_LOG(APP_LOG_LEVEL_INFO,"CONFIG_C: cnfTrotteuse_tuple = %s", cnfTrotteuse_tuple ? "PRESENT" : "NULL");
    handle_config_trotteuse(cnfTrotteuse_tuple);
    handle_config_health(cnfHealth_tuple);
    handle_config_celsius(cnfCelsius_tuple);
    handle_config_exchange(cnfExchange_tuple);
    handle_config_location(cnfLocation_tuple);
    handle_config_service(cnfService_tuple);
    handle_config_cadence(cnfCadence_tuple);

    // Refetch weather if exchange or location changed
    if (cnfExchange_tuple || cnfLocation_tuple) {
        fetch_msg();
    }
    //}}}

    //{{{  Handle Geo Area
    if (geoArea1_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN geoArea1");
        strncpy(geoArea1, geoArea1_tuple->value->cstring, 5);
        if (bluetooth_text[1] != '?') {
            strcpy(bluetooth_text," ");
            strncat(bluetooth_text, geoArea1, 5);
        }
    }
    //}}}

    //{{{  Handle Bitcoin Data
    handle_bitcoin_data(btcV_tuple, btcL_tuple, btcH_tuple);
    //}}}

    //{{{  Handle Weather Observation Data
    handle_weather_observation(obIconCode_tuple, obTemperature_tuple, obWindDir_tuple,
                               obWindGust_tuple, obWindSpeed_tuple, obWindChill_tuple, obHumidex_tuple);
    //}}}

    //{{{  Handle Weather Forecast Data
    if (forecastIconCode_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN forecastIconCode");
        strncpy(forecastIconCode, forecastIconCode_tuple->value->cstring, 16);
        gbitmap_destroy(weather_layer.icon2_bitmap);
        weather_layer.icon2_bitmap =  gbitmap_create_with_resource(WEATHER_ICONS[_atoi(forecastIconCode)]);
        bitmap_layer_set_bitmap(weather_layer.icon2_layer, weather_layer.icon2_bitmap);
        bitmap_layer_set_compositing_mode(weather_layer.icon2_layer, GCompOpAssignInverted);
    }

    if (forecastLow_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN forecastLow");
        strncpy(forecastLow, forecastLow_tuple->value->cstring, 16);
        strncpy(forecastTemp, forecastLow_tuple->value->cstring, 16);
    }

    if (forecastPeriod_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN forecastPeriod");
        strncpy(forecastPeriod, forecastPeriod_tuple->value->cstring, 16);
    }

    // forecastHigh marks the end of the data update cycle
    if (forecastHigh_tuple) {
        APP_LOG(APP_LOG_LEVEL_DEBUG,"* IN forecastHigh");
        errorInWeather = 0;

        strncpy(forecastHigh, forecastHigh_tuple->value->cstring, 16);
        strncpy(forecastTemp, forecastHigh_tuple->value->cstring, 16);

        // Clear loading indicator
        if (date_text[strlen(date_text)-1] == '*') {
            date_text[strlen(date_text)-1] = '\0';
        }

        // Update Bitcoin graph
        push_point(btcV_value, btcL_value, btcH_value);

        // Update weather display
        update_weather_display();
    }
    //}}}

    //{{{  Handle JavaScript Events
    handle_js_event(jsEvent_tuple);
    //}}}
}
//}}}
void in_dropped_handler(AppMessageResult reason, void *context) //{{{
{
    APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Dropped!");
}
//}}}
void out_failed_handler(DictionaryIterator *failed, AppMessageResult reason, void *context) //{{{
{
    APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Failed to Send!");
}
//}}}
void bluetooth_handler(bool connected) //{{{
{
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "Bluetooth event!");
    if (connected)
        {
        strcpy(bluetooth_text," ");
        strcat(bluetooth_text, geoArea1);

        text_layer_set_font(weather_layer.bluetooth_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
        text_layer_set_background_color(weather_layer.bluetooth_layer, cInfoBlueB);
        text_layer_set_text_color(weather_layer.bluetooth_layer, cInfoBlueF );
        }
    else
        {
        strcpy(bluetooth_text, " ??");
        text_layer_set_font(weather_layer.bluetooth_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14_BOLD) );
        text_layer_set_background_color(weather_layer.bluetooth_layer, cInfoBlueAlarmB);
        text_layer_set_text_color(weather_layer.bluetooth_layer, cInfoBlueAlarmF );
        if (BuzzEnable) vibes_enqueue_custom_pattern(myLongVibes);
        }

    layer_mark_dirty(window_get_root_layer(window));
}
//}}}
void battery_handler(BatteryChargeState charge) //{{{
{
    char Buffer[INT_DIGITS+2];

    if ((charge.charge_percent <= 50) && (charge.charge_percent < battery_state.charge_percent) )
        {
        if (BuzzEnable) vibes_enqueue_custom_pattern(myShortVibes);
        }

    battery_state.charge_percent  = charge.charge_percent;
    battery_state.is_charging  = charge.is_charging;
    battery_state.is_plugged  = charge.is_plugged;

    strncpy(battery_text, "", 8);

    if (battery_state.charge_percent <= 30)
        {
        text_layer_set_background_color(weather_layer.battery_layer, cInfoBatAlarmB);
        text_layer_set_text_color(weather_layer.battery_layer, cInfoBatAlarmF);
        }
    else
        {
        text_layer_set_background_color(weather_layer.battery_layer, cInfoBatB);
        text_layer_set_text_color(weather_layer.battery_layer, cInfoBatF);
        }



    strncat(battery_text, " ", 8);

    if (battery_state.charge_percent > 99)
        strncat(battery_text, "FL", 8);
    else
        strncat(battery_text,  _itoa(battery_state.charge_percent, Buffer), 8);

    if (battery_state.is_charging)
        strncat(battery_text, "*", 8);
    else
        strncat(battery_text, " ", 8);

    if (battery_state.is_plugged)
        {
        text_layer_set_font(weather_layer.battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14_BOLD) );
        }
    else
        {
        text_layer_set_font(weather_layer.battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
        }

    layer_mark_dirty(window_get_root_layer(window));
    //fetch_msg();
}
//}}}
//}}}

//{{{  Graphics update procs
void DOT_update_proc(struct Layer *layer, GContext *ctx) //{{{
{
    window_set_background_color(window, GColorClear );
    
    if (0 != trotteuse)
        return;
   
    //GRect bounds = layer_get_bounds(DOT_layer);
    APP_LOG(APP_LOG_LEVEL_DEBUG, "************* DOT ************");

    graphics_context_set_fill_color(ctx, GColorBlack);
    graphics_fill_rect(ctx, GRECT_DOT4, 0, GCornerNone);

    graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_context_set_fill_color(ctx, GColorWhite);

    // DOT #1
    //graphics_fill_radial(ctx, GRect(0,0,11,11), GOvalScaleModeFitCircle, 1, 0 , TRIG_MAX_ANGLE);
    //graphics_fill_radial(ctx, GRect(0,0,11,11), GOvalScaleModeFitCircle, 5, 0 , TRIG_MAX_ANGLE/1);
    
    // DOT #2
    //graphics_fill_radial(ctx, GRect(12,0,11,11), GOvalScaleModeFitCircle, 1, 0 , TRIG_MAX_ANGLE);
    //graphics_fill_radial(ctx, GRect(12,0,11,11), GOvalScaleModeFitCircle, 5, 0 , TRIG_MAX_ANGLE/2);
    
    // DOT #3
    //graphics_fill_radial(ctx, GRect(X_FRAME-25,0,11,11), GOvalScaleModeFitCircle, 1, 0 , TRIG_MAX_ANGLE);
    //graphics_fill_radial(ctx, GRect(X_FRAME-25,0,11,11), GOvalScaleModeFitCircle, 5, 0 , TRIG_MAX_ANGLE/3);
   


    // DOT #4
    if (DOT4 != 0.0)
        {
        graphics_fill_radial(ctx, GRECT_DOT4, GOvalScaleModeFitCircle, 1, 0 , TRIG_MAX_ANGLE);
        if (DOT4 >= 0.0) 
            {
            graphics_fill_radial(ctx, GRECT_DOT4, GOvalScaleModeFitCircle, 5, 0 , (int) (TRIG_MAX_ANGLE*(DOT4)) );
            }
        else
            {
            graphics_fill_radial(ctx, GRECT_DOT4, GOvalScaleModeFitCircle, 5, (int) (TRIG_MAX_ANGLE*(-1*DOT4)), TRIG_MAX_ANGLE );
            }        
        }
}
//}}}
void graph_update_proc(struct Layer *layer, GContext *ctx) //{{{
{
    if (0 != trotteuse)
        return;

    APP_LOG(APP_LOG_LEVEL_DEBUG, "************* GRAPH ************");


    if (btcV_value != 0.0)
        graphics_context_set_stroke_color(ctx, cGraphF);
    else
        graphics_context_set_stroke_color(ctx, cWindowB);
    
    graphics_context_set_stroke_color(ctx, GColorWhite);
    graphics_context_set_fill_color(ctx, GColorBlack);
    graphics_fill_rect(ctx, FULL_FRAME, 0, GCornerNone);

    gpath_draw_outline(ctx, bgraph);
}
//}}}
void trotteuse_update_proc(struct Layer *layer, GContext *ctx) //{{{
{
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "************* TROT ************");
    // Calculate pixels per second based on layer width
    GRect bounds = layer_get_frame(layer);
    float pixels_per_second = (float)bounds.size.w / 60.0;

    if (0 == trotteuse)
        {
        graphics_context_set_stroke_color(ctx, cTimeB);
        GPoint p0 = GPoint(10, 98);
        GPoint p1 = GPoint(10 + (int)(60 * pixels_per_second), 98);
        graphics_draw_line(ctx, p0, p1);
        }
    if (cnfTrotteuse)
        graphics_context_set_stroke_color(ctx, cTimeF);
    else
        graphics_context_set_stroke_color(ctx, cTimeB);
    //GPoint p0 = GPoint(10, 98);
    //GPoint p1 = GPoint(10 + trotteuse*2 , 98);
    GPoint p0 = GPoint(0, 2);
    GPoint p1 = GPoint(0 + (int)(trotteuse * pixels_per_second), 2);
    graphics_draw_line(ctx, p0, p1);
}
//}}}
void trotteuse_scale_update_proc(struct Layer *layer, GContext *ctx) //{{{
{
    if (0 != trotteuse)
        return;
    APP_LOG(APP_LOG_LEVEL_DEBUG, "************* TROT-SCALE ************");
    if (trotteuse_draw_scale)
        {
        //APP_LOG(APP_LOG_LEVEL_DEBUG, "SCALE!");

        // Calculate pixels per second based on layer width
        GRect bounds = layer_get_frame(layer);
        float pixels_per_second = (float)bounds.size.w / 60.0;

        if (cnfTrotteuse)
            graphics_context_set_stroke_color(ctx, cTimeF);
        else
            graphics_context_set_stroke_color(ctx, cTimeB);

        graphics_context_set_fill_color(ctx, GColorBlack);
        graphics_fill_rect(ctx, FULL_FRAME, 0, GCornerNone);

        for (int i=0; i<=60; i+=5)
            {
            int x_pos = (int)(i * pixels_per_second);
            // Ensure last mark doesn't exceed bounds
            if (x_pos >= bounds.size.w)
                x_pos = bounds.size.w - 1;

            if (0 == (i%10) )
                graphics_draw_line(ctx, GPoint(x_pos,0), GPoint(x_pos,4));
            else
                graphics_draw_line(ctx, GPoint(x_pos,0), GPoint(x_pos,2));
            }
        }
}
//}}}
//}}}

//{{{  Init and Deinit
void app_message_init(void) //{{{
{
    // Register message handlers
    app_message_register_inbox_received(in_received_handler);
    app_message_register_inbox_dropped(in_dropped_handler);
    app_message_register_outbox_failed(out_failed_handler);

    // Init buffers
    //app_message_open(app_message_inbox_size_maximum(), app_message_outbox_size_maximum());
    app_message_open(512, 512);
}
//}}}

void weather_layer_init(WeatherLayer* weather_layer, GPoint pos) //{{{
{

    APP_LOG(APP_LOG_LEVEL_DEBUG, "Init weather layers...");


    weather_layer->layer = layer_create(GRECT_WEATHER_LAYER_1);

    // Add background layer
    weather_layer->temp_layer_background = text_layer_create(GRECT_WEATHER_LAYER_2);
    text_layer_set_background_color(weather_layer->temp_layer_background, cWeatherB);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp_layer_background));

    // Add temperature #1 layer
    weather_layer->temp1_layer = text_layer_create(GRECT_WEATHER_LAYER_3);
    text_layer_set_background_color(weather_layer->temp1_layer, cTempB);
    text_layer_set_text_color(weather_layer->temp1_layer, cTempF );
    text_layer_set_font(weather_layer->temp1_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
    text_layer_set_text_alignment(weather_layer->temp1_layer, GTextAlignmentCenter);
    text_layer_set_text(weather_layer->temp1_layer, obTemperature);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp1_layer));

    // Add temperature #2 layer
    weather_layer->temp2_layer = text_layer_create(GRECT_WEATHER_LAYER_5);
    text_layer_set_background_color(weather_layer->temp2_layer, cTempB);
    text_layer_set_text_color(weather_layer->temp2_layer, cTempF);
    text_layer_set_font(weather_layer->temp2_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
    text_layer_set_text_alignment(weather_layer->temp2_layer, GTextAlignmentCenter);
    text_layer_set_text(weather_layer->temp2_layer, forecastTemp);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp2_layer));

    // Add temperature #3 layer
    weather_layer->temp3_layer = text_layer_create(GRECT_WEATHER_LAYER_7);
    text_layer_set_background_color(weather_layer->temp3_layer, cTempB);
    text_layer_set_text_color(weather_layer->temp3_layer, cTempF);
    text_layer_set_font(weather_layer->temp3_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
    text_layer_set_text_alignment(weather_layer->temp3_layer, GTextAlignmentCenter);
    text_layer_set_text(weather_layer->temp3_layer, "x");
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp3_layer));

    // Add temperature #4 layer
    //#ifdef PBL_COLOR
    weather_layer->temp4_layer = text_layer_create(GRECT_WEATHER_LAYER_9);
    //#else
    //weather_layer->temp4_layer = text_layer_create(GRECT_WEATHER_LAYER_2);
    //#endif

    text_layer_set_background_color(weather_layer->temp4_layer, cTempB);
    text_layer_set_text_color(weather_layer->temp4_layer, cTempF);
    text_layer_set_font(weather_layer->temp4_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));
    text_layer_set_text_alignment(weather_layer->temp4_layer, GTextAlignmentCenter);
    text_layer_set_text(weather_layer->temp4_layer, "y");
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp4_layer));

    // Add temperature #5 layer
    //#ifdef PBL_COLOR
    weather_layer->temp5_layer  = text_layer_create(GRECT_WEATHER_LAYER_10);
    //#else
    //weather_layer->temp5_layer  = text_layer_create(GRECT_WEATHER_LAYER_11);
    //#endif

    text_layer_set_background_color(weather_layer->temp5_layer, cTempB);
    text_layer_set_text_color(weather_layer->temp5_layer, cTempF);
    text_layer_set_font(weather_layer->temp5_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD));
    text_layer_set_text_alignment(weather_layer->temp5_layer, GTextAlignmentCenter);
    text_layer_set_text(weather_layer->temp5_layer, "z");
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->temp5_layer));

    // Add wind layer
    weather_layer->wind_layer = text_layer_create(GRECT_WEATHER_LAYER_12);
    text_layer_set_background_color(weather_layer->wind_layer, cInfoB);
    text_layer_set_text_alignment(weather_layer->wind_layer, GTextAlignmentCenter);
    text_layer_set_font(weather_layer->wind_layer, fonts_get_system_font(FONT_KEY_GOTHIC_18_BOLD) );
    text_layer_set_text_color(weather_layer->wind_layer, cInfoF);
    text_layer_set_text(weather_layer->wind_layer, obWindDir);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->wind_layer));

    // Add Battery layer
    weather_layer->battery_layer = text_layer_create(GRECT_BATTERY_LAYER);
    text_layer_set_text_alignment(weather_layer->battery_layer, GTextAlignmentRight);
    text_layer_set_font(weather_layer->battery_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
    text_layer_set_background_color(weather_layer->battery_layer, cInfoBatB);
    text_layer_set_text_color(weather_layer->battery_layer, cInfoBatF);
    text_layer_set_text(weather_layer->battery_layer, battery_text);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->battery_layer));

    // Add Bluetooth layer
    weather_layer->bluetooth_layer = text_layer_create(GRECT_BLUETOOTH_LAYER);
    text_layer_set_background_color(weather_layer->bluetooth_layer, cInfoBlueB);
    text_layer_set_text_alignment(weather_layer->bluetooth_layer, GTextAlignmentLeft);
    text_layer_set_font(weather_layer->bluetooth_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
    text_layer_set_text_color(weather_layer->bluetooth_layer, cInfoBlueF);
    text_layer_set_text(weather_layer->bluetooth_layer, bluetooth_text);
    layer_add_child(weather_layer->layer, text_layer_get_layer(weather_layer->bluetooth_layer));

    // Init bitmapped icon layers
    weather_layer->icon1_layer = bitmap_layer_create(GRECT_ICON1_LAYER);
    weather_layer->icon2_layer = bitmap_layer_create(GRECT_ICON2_LAYER);
    layer_add_child(weather_layer->layer, bitmap_layer_get_layer(weather_layer->icon1_layer));
    layer_add_child(weather_layer->layer, bitmap_layer_get_layer(weather_layer->icon2_layer));
    bitmap_layer_set_background_color(weather_layer->icon1_layer, cIconB);
    bitmap_layer_set_background_color(weather_layer->icon2_layer, cIconB);
    weather_layer->icon1_bitmap = gbitmap_create_with_resource(WEATHER_ICONS[0]);
    weather_layer->icon2_bitmap = gbitmap_create_with_resource(WEATHER_ICONS[0]);

    //  bitmap_layer_set_bitmap(weather_layer->icon1_layer,  weather_layer->icon1_bitmap  );
    //  bitmap_layer_set_bitmap(weather_layer->icon2_layer,  weather_layer->icon2_bitmap  );


    // Zero out text fields
    text_layer_set_text(weather_layer->temp1_layer, "");
    text_layer_set_text(weather_layer->temp2_layer, "");
    text_layer_set_text(weather_layer->temp3_layer, "");
    text_layer_set_text(weather_layer->temp4_layer, "COINCAN 5.1d");
    text_layer_set_text(weather_layer->temp5_layer, "");
}
//}}}
void weather_layer_deinit(WeatherLayer* weather_layer) //{{{
{

    tick_timer_service_unsubscribe();
    battery_state_service_unsubscribe();
    bluetooth_connection_service_unsubscribe();

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

    //  window_destroy(window);
}
//}}}

void init(void) //{{{
{
    app_message_init();

    window = window_create();
    window_stack_push(window, true);
    window_set_background_color(window, cWindowB);



    top_layer = layer_create( GRECT_TOP_LAYER );
    mid_layer = layer_create( GRECT_MIDDLE_LAYER );
    bot_layer = layer_create( GRECT_BOTTOM_LAYER );
    layer_add_child(window_get_root_layer(window), top_layer);
    //layer_insert_above_sibling(mid_layer, top_layer);
    //layer_insert_above_sibling(bot_layer, bot_layer);
    layer_add_child(window_get_root_layer(window), mid_layer);
    //layer_add_child(mid_layer, top_layer);
    //layer_add_child(mid_layer, bot_layer);
    layer_add_child(window_get_root_layer(window), bot_layer);

    // Add graph layer
    #ifdef PBL_COLOR
        graph_layer = layer_create( GRECT_GRAPH_LAYER_1 );
    #else
        graph_layer = layer_create( GRECT_GRAPH_LAYER_2 );
    #endif
    //layer_add_child(window_get_root_layer(window), graph_layer);
    //layer_insert_below_sibling(window_get_root_layer(window), graph_layer);
    layer_add_child(top_layer, graph_layer);
    layer_set_update_proc(graph_layer, graph_update_proc);
    //layer_insert_below_sibling(text_layer_get_layer(time_layer), graph_layer);
    //layer_insert_above_sibling(top_layer, graph_layer);
    //layer_insert_below_sibling(graph_layer, text_layer_get_layer(time_layer));


    time_layer = text_layer_create(GRECT_TIME_LAYER);
    text_layer_set_text_color(time_layer, cTimeF);
    text_layer_set_background_color(time_layer, cTimeB);
    text_layer_set_font(time_layer, fonts_load_custom_font(resource_get_handle(RESOURCE_ID_FUTURA_CONDENSED_53)));
    text_layer_set_text_alignment(time_layer, GTextAlignmentCenter);
    text_layer_set_text(time_layer, time_text);
    //layer_add_child(window_get_root_layer(window), text_layer_get_layer(time_layer));
    layer_add_child(top_layer, text_layer_get_layer(time_layer));
    //layer_insert_below_sibling(text_layer_get_layer(time_layer), top_layer);
    
    date_layer = text_layer_create(GRECT_DATE_LAYER);
    text_layer_set_text_color(date_layer, cDateF);
    text_layer_set_background_color(date_layer, cDateB);
    text_layer_set_font(date_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14));
    //text_layer_set_font(date_layer, fonts_load_custom_font(resource_get_handle(RESOURCE_ID_FUTURA_18)));
    text_layer_set_text_alignment(date_layer, GTextAlignmentCenter);
    text_layer_set_text(date_layer, date_text);
    layer_add_child(top_layer, text_layer_get_layer(date_layer));

    bc_layer = text_layer_create(GRECT_BCV3_LAYER);
    text_layer_set_text_color(bc_layer, cBtcF);
    text_layer_set_background_color(bc_layer, cBtcB);
    text_layer_set_font(bc_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD) );
    text_layer_set_text_alignment(bc_layer, GTextAlignmentCenter);
    text_layer_set_text(bc_layer, btcV);
    //layer_add_child(window_get_root_layer(window), text_layer_get_layer(bc_layer));
    layer_add_child(top_layer, text_layer_get_layer(bc_layer));

    bcL_layer = text_layer_create(GRECT_BCL3_LAYER);
    text_layer_set_text_color(bcL_layer, cBtclF);
    text_layer_set_background_color(bcL_layer, cBtclB);
    text_layer_set_font(bcL_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
    text_layer_set_text_alignment(bcL_layer, GTextAlignmentCenter);
    text_layer_set_text(bcL_layer, btcL);
    //layer_add_child(text_layer_get_layer(bc_layer), text_layer_get_layer(bcL_layer));
    layer_add_child(top_layer, text_layer_get_layer(bcL_layer));
    
    bcH_layer = text_layer_create(GRECT_BCH3_LAYER);
    text_layer_set_text_color(bcH_layer, cBtchF);
    text_layer_set_background_color(bcH_layer, cBtchB);
    text_layer_set_font(bcH_layer, fonts_get_system_font(FONT_KEY_GOTHIC_14) );
    text_layer_set_text_alignment(bcH_layer, GTextAlignmentCenter);
    text_layer_set_text(bcH_layer, btcH);
    //layer_add_child(text_layer_get_layer(bcL_layer), text_layer_get_layer(bcH_layer));
    //layer_add_child(window_get_root_layer(window), text_layer_get_layer(bcH_layer));
    layer_add_child(top_layer, text_layer_get_layer(bcH_layer));

    //layer_insert_below_sibling(text_layer_get_layer(bc_layer), text_layer_get_layer(bcL_layer));
    //layer_insert_below_sibling(text_layer_get_layer(bcL_layer), text_layer_get_layer(bcH_layer));


    // Add weather layer
    weather_layer_init(&weather_layer, GPoint(0, 0));
    layer_add_child(bot_layer, weather_layer.layer);



    // Add a trotteuse layer
    trotteuse_layer = layer_create( GRECT_TROTTEUSE );
    layer_add_child(mid_layer, trotteuse_layer);
    layer_set_update_proc(trotteuse_layer, trotteuse_update_proc);
    //layer_insert_above_sibling(trotteuse_layer, mid_layer);

    // Add a trotteuse scale layer
    trotteuse_scale_layer = layer_create( GRECT_TROTTEUSE );
    //layer_add_child(window_get_root_layer(window), trotteuse_scale_layer);
    layer_add_child(mid_layer, trotteuse_scale_layer);
    layer_set_update_proc(trotteuse_scale_layer, trotteuse_scale_update_proc);
    //layer_insert_above_sibling(trotteuse_scale_layer, trotteuse_layer);

    // Adjust trotteuse layout based on health setting
    update_trotteuse_layout();

    // Upper right DOT layer
    //#ifdef PBL_COLOR
    //    DOT_layer = layer_create( GRect(140-(10+1), 1, (10), (10)) );
    //#else
    //    DOT_layer = layer_create( GRect(135-(10+1), 1, (10), (10)) );
    //#endif
    
    DOT_layer = layer_create( FULL_FRAME ) ;
    
    layer_add_child(window_get_root_layer(window), DOT_layer);
    //layer_add_child(text_layer_get_layer(time_layer), DOT_layer);
    layer_set_update_proc(DOT_layer, DOT_update_proc);

    //layer_insert_above_sibling( text_layer_get_layer(time_layer), DOT_layer);



    // Create the Gpath
    bgraph = gpath_create(&bgraph_info);

    if (persist_exists(0))
        {
        int dsize = sizeof(bgraph_data);
        persist_read_data(0, bgraph_data, 250);
        persist_read_data(1, ((char *) bgraph_data) + 250, dsize-250);
        }
    else
        {
        for (int i=0; i<X_SIZE; i++) bgraph_data[i] = (GPoint)
            {
            i,Y_SIZE/2
            };
        for (int i=X_SIZE; i<2*X_SIZE; i++) bgraph_data[i] = (GPoint)
            {
            (2*X_SIZE)-i-1,Y_SIZE/2
            };

        }

    if (persist_exists(KEY_CNF_HEALTH))
        cnfHealth = persist_read_bool(KEY_CNF_HEALTH);
    else
        cnfHealth= true;
    
    if (persist_exists(KEY_CNF_CELSIUS))
        cnfCelsius = persist_read_bool(KEY_CNF_CELSIUS);
    else
        cnfCelsius = true;

    if (persist_exists(KEY_CNF_TROTTEUSE))
        cnfTrotteuse = persist_read_bool(KEY_CNF_TROTTEUSE);
    else
        cnfTrotteuse = true;

    if (persist_exists(KEY_CNF_EXCHANGE))
        {
        persist_read_string(KEY_CNF_EXCHANGE, cnfExchange, 20);
        APP_LOG(APP_LOG_LEVEL_DEBUG, "** Read back Exchange: %s", cnfExchange);
        }
    else
        strcpy(cnfExchange, "Bitstamp");

    if (persist_exists(KEY_CNF_LOCATION))
        {
        persist_read_string(KEY_CNF_LOCATION, cnfLocation, 32);
        APP_LOG(APP_LOG_LEVEL_DEBUG, "** Read back Location: %s", cnfLocation);
        }
    else
        strcpy(cnfLocation, "GPS automatic");



    if (persist_exists(KEY_CNF_SERVICE))
        {
        persist_read_string(KEY_CNF_SERVICE, cnfService, 32);
        APP_LOG(APP_LOG_LEVEL_DEBUG, "** Read back Service: %s", cnfService);
        }
    else
        strcpy(cnfService, "Environnement Canada");

    if (persist_exists(KEY_CNF_CADENCE))
        {
        cnfCadence = persist_read_int(KEY_CNF_CADENCE);
        // Validate cadence value - must be one of: 1, 5, 30, 60, 180, 360
        if (cnfCadence != 1 && cnfCadence != 5 && cnfCadence != 30 &&
            cnfCadence != 60 && cnfCadence != 180 && cnfCadence != 360) {
            APP_LOG(APP_LOG_LEVEL_WARNING, "** Invalid cadence value %d, resetting to 30", cnfCadence);
            cnfCadence = 30;
            persist_write_int(KEY_CNF_CADENCE, cnfCadence);
        }
        APP_LOG(APP_LOG_LEVEL_DEBUG, "** Read back Cadence: %d minutes", cnfCadence);
        }
    else
        cnfCadence = 30;  // Default: 30 minutes

    // Ensures time is displayed immediately (will break if NULL tick event accessed).
    // (This is why it's a good idea to have a separate routine to do the update itself.)
    time_t now = time(NULL);
    struct tm *current_time = localtime(&now);
    handle_minute_tick(current_time, MINUTE_UNIT);

    if (cnfTrotteuse)
        {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "ON cnfTrotteuse: %d", cnfTrotteuse ? 1:0);
        tick_timer_service_subscribe(SECOND_UNIT | MINUTE_UNIT, &handle_minute_tick);
        }
    else
        {
        APP_LOG(APP_LOG_LEVEL_DEBUG, "OFF cnfTrotteuse: %d", cnfTrotteuse ? 1:0);
        tick_timer_service_subscribe(MINUTE_UNIT, &handle_minute_tick);
        }

    bluetooth_connection_service_subscribe( &bluetooth_handler );
    battery_state_service_subscribe( & battery_handler );

    // Fetch weather immediately on startup
    APP_LOG(APP_LOG_LEVEL_DEBUG, "Fetching weather on startup...");
    fetch_msg();

    // GRAPH DEBUG
    //for (int i=0; i<X_SIZE; i++) push_point(X_SIZE-i, X_SIZE/4, X_SIZE/2);
    //for (int i=0; i<X_SIZE; i++) push_point(i, 0, X_SIZE);
    //for (int i=0; i<X_SIZE; i++) push_point(1, 0, 2);


    if (persist_get_size(0) != 250)
        {
        persist_delete(0);
        persist_delete(1);
        for (int i=0; i<X_SIZE; i++) push_point(1, 0, 2);
        }    

    obWindSpeed[0] = obWindGust[0] = '!';


    battery_state = battery_state_service_peek();
    battery_handler(battery_state);

    if (bluetooth_connection_service_peek())
        {
        strcpy(bluetooth_text," ok");
        }
    else
        strcpy(bluetooth_text," LOST!");

}
//}}}
void deinit(void) //{{{
{
    gpath_destroy(bgraph);

    text_layer_destroy(time_layer);
    text_layer_destroy(date_layer);
    text_layer_destroy(bc_layer);
    text_layer_destroy(bcH_layer);
    text_layer_destroy(bcL_layer);

    layer_destroy(graph_layer);
    layer_destroy(DOT_layer);

    layer_destroy(trotteuse_layer);
    layer_destroy(trotteuse_scale_layer);

    weather_layer_deinit(&weather_layer);

    window_destroy(window);

    // Save persistent data
    int dsize = sizeof(bgraph_data);
    persist_delete(0);
    persist_delete(1);
    int ret = persist_write_data(0, bgraph_data, 250);
    persist_write_data(1, ((char *) bgraph_data)+250, dsize-250+1);

}
//}}}
//}}}

int main(void) //{{{
{
    init();
    app_event_loop();
    deinit();
}
//}}}

