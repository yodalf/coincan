// Set callback for the app ready event

var geoLocality="";
var geoArea1="";

var geoBaseArea1={
// Simulator
  "VA":"620",
//Canada
  "AB":"045",
  "BC":"141",
  "MB":"193",
  "NB":"250",
  "NL":"280",
  "NS":"318",
  "NT":"366",
  "NU":"394",
  "ON":"458",
  "PE":"583",
  "QC":"620",
  "SK":"788",
  "YT":"825"
};

function fetchWeather(latitude, longitude) {
  var req = new XMLHttpRequest();
//  longitude=-73.6;
//  latitude=45.5;
//  longitude=-79.4;
//  latitude=43.7;

//  longitude=-123.1;
//  latitude=49.3;

  //  Edmonton
//  longitude=-113.5;
//  latitude=53.5;

  // Iqaluit  
//  longitude=-68.5;
//  latitude=63.7;

  // Yellowknife
//  longitude=-114.4;
//  latitude=62.4;
  // Regina
//  longitude=-104.6;
//  latitude=50.5;
  
  req.open('GET', "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=true");
  
//  req.open('GET', "http://api.openweathermap.org/data/2.5/weather?" +
//    "lat=" + latitude + "&lon=" + longitude + "&cnt=1", true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      if(req.status == 200) {
        
        var response = JSON.parse(req.responseText);
        //console.log(req.responseText);
        // Find administrative_area_level_1 (province)
        for(var i=0; i<7; i++) {
          if (response.results[0].address_components[i].types[0].match("locality")) {
            geoLocality = response.results[0].address_components[i].short_name;
          }
          if (response.results[0].address_components[i].types[0].match("administrative_area_level_1")) {
            geoArea1 = response.results[0].address_components[i].short_name;
            break;
          }
        }
        //strcpy(geoArea1,"xx");
        CanadaString = geoBaseArea1[geoArea1];
        console.log("CSTRING:"+CanadaString);
        var address = response.results[0].formatted_address;
        console.log("geoLocality: " + geoLocality);
        console.log("geoArea1: " + geoArea1);
        console.log("ADDRESS: " + address);


        //var temperature = Math.round(response.main.temp - 273.15);
        //var icon = iconFromWeatherId(response.weather[0].id);
        //var city = response.name;
        //console.log(temperature);
        //console.log(icon);
        //console.log(city);
        //Pebble.sendAppMessage({
        //  "WEATHER_ICON_KEY":icon,
        //  "WEATHER_TEMPERATURE_KEY":temperature + "\u00B0C",
        //  "WEATHER_CITY_KEY":city}
        //);

      } else {
        console.log("Error");
      }
    }
  };
  req.send(null);
}

function locationSuccess(pos) {
  var coordinates = pos.coords;
  fetchWeather(coordinates.latitude, coordinates.longitude);
}

function locationError(err) {
  console.warn('location error (' + err.code + '): ' + err.message);
  Pebble.sendAppMessage({
    "WEATHER_CITY_KEY":"Loc Unavailable",
    "WEATHER_TEMPERATURE_KEY":"N/A"
  });
}

var locationOptions = { "timeout": 15000, "maximumAge": 60000 }; 



Pebble.addEventListener("ready",
                        function(e) {
                          console.log("connect!: " + e.ready);
                          console.log(e.type);
                          
                          window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
                          
                        });

Pebble.addEventListener("appmessage",
                        function(e) {
                          fetch_BTC();
                        });


function fetch_BTC () 
  {
  var req = new XMLHttpRequest();
    
  req.onload = function(e) 
    {
    if (req.readyState == 4) 
      {
      if(req.status == 200) 
        {
        var response = JSON.parse(req.responseText);
        
        if (response.high) 
          {
          var btcH = Math.round(response.high);
          var btcL = Math.round(response.low);
          var btcV = Math.round(response.last);

          //if (btcV > 1000) 
          //  btcV = Math.round(btcV);
          //else
          //  btcV = (Math.round(100.0 * btcV))/100.0;

          Pebble.sendAppMessage({"0":  btcV.toString() , "1":  btcL.toString(), "2":  btcH.toString()} , function(e) {  

          // console.log(btcL, btcH, btcV);

            req.onload = function(e) 
              {
              if (req.readyState == 4) 
                {
                if(req.status == 200) 
                  {
                  var XX=req.responseText.split("\n");
                  for (var i=0; i < XX.length; i++)
                    {
                    var Xline = XX[i].split("=");

                    if (Xline[0].match("var obIconCode")) 
                      { 
                      var obIconCode = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obIconCode = obIconCode.substring(1, obIconCode.length-1);
                      //console.log("IC:"+obIconCode) 
                      } 

                    if (Xline[0].match("var obTemperature")) 
                      { 
                      var obTemperature = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obTemperature = obTemperature.substring(1, obTemperature.length-1);
                      //console.log("T:"+obTemperature) 
                      } 

                    if (Xline[0].match("var obWindDir")) 
                      { 
                      var obWindDir = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obWindDir = obWindDir.substring(1, obWindDir.length-1);
                      //console.log("D:"+obWindDir);
                      } 

                    if (Xline[0].match("var obWindGust")) 
                      { 
                      var obWindGust = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obWindGust = obWindGust.substring(1, obWindGust.length-1);
                      if (0 === obWindGust.length) obWindGust = "!";
                      //console.log("WG:"+obWindGust) 
                      } 

                    if (Xline[0].match("var obWindSpeed")) 
                      { 
                      var obWindSpeed = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obWindSpeed = obWindSpeed.substring(1, obWindSpeed.length-1);
                      if (0 === obWindSpeed.length) obWindSpeed = "!";
                      //console.log("WS:"+obWindSpeed) 
                      } 



                    if (Xline[0].match("var obWindChill")) 
                      { 
                      var obWindChill = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obWindChill = obWindChill.substring(1, obWindChill.length-1);
                      if (0 === obWindChill.length) obWindChill = "!";
                      //console.log("WC:"+obWindChill) 
                      } 

                    if (Xline[0].match("var obHumidex")) 
                      { 
                      var obHumidex = Xline[1].substring(1,Xline[1].indexOf(";"));
                      obHumidex = obHumidex.substring(1, obHumidex.length-1);
                      if (0 === obHumidex.length) obHumidex = "!";
                      //console.log("H:"+obHumidex) 
                      } 

                    if (Xline[0].match("var forecastIconCodes")) 
                      { 
                      var forecastIconCode = Xline[1].substring(2,Xline[1].indexOf(","));
                      forecastIconCode = forecastIconCode.substring(1, forecastIconCode.length-1);
                      //console.log("fIC:"+forecastIconCode) 
                      } 

                    if (Xline[0].match("var forecastHighs")) 
                      { 
                      var forecastHigh = Xline[1].substring(2,Xline[1].indexOf(","));
                      forecastHigh = forecastHigh.substring(1, forecastHigh.length-1);
                      //console.log("fH:"+forecastHigh) 
                      } 

                    if (Xline[0].match("var forecastPeriods")) 
                      { 
                      var forecastPeriod = Xline[1].substring(2,Xline[1].indexOf(","));
                      forecastPeriod = forecastPeriod.substring(1, forecastPeriod.length-1);
                      //console.log("fL:"+forecastLow) 
                      } 

                    if (Xline[0].match("var forecastLows")) 
                      { 
                      var forecastLow = Xline[1].substring(2,Xline[1].indexOf(","));
                      forecastLow = forecastLow.substring(1, forecastLow.length-1);
                      //console.log("fL:"+forecastLow) 
                      } 

                    }

                    Pebble.sendAppMessage({
                      "3":  obIconCode,
                      "4":  obTemperature,
                      "5":  obWindDir, 
                      "6":  obWindGust, 
                      "7":  obWindSpeed,
                      "8":  obWindChill
                      }, function (e) {
                        Pebble.sendAppMessage({
                          "9":  obHumidex,
                          "10": forecastIconCode,
                          "11": forecastHigh, 
                          "12": forecastLow,
                          "13": forecastPeriod,
                          "14": geoArea1
                          });
                        }
                      );
      
                  }
                }
              };
//            req.open('GET', "http://weather.gc.ca/wxlink/site_js/s0000620_e.js", true);
            req.open('GET', "http://weather.gc.ca/wxlink/site_js/s0000"+CanadaString+"_e.js", true);
            req.send(null);



            }
          );
          }
        }
      } 
    else 
      {
      console.log("Error");
      }
    };
    

  // req.open('GET', "https://data.mtgox.com/api/1/BTCUSD/ticker", true);
  // req.open('GET', "http://api.bitcoincharts.com/v1/markets.json", true);
  req.open('GET', "https://www.cavirtex.com/api/CAD/ticker.json", true);
  req.send(null);

  }
