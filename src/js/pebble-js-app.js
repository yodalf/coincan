// Set callback for the app ready event
Pebble.addEventListener("ready",
                        function(e) {
                          console.log("connect!: " + e.ready);
                          console.log(e.type);
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
                          "13": forecastPeriod
                          });
                        }
                      );
      
                  }
                }
              };
            req.open('GET', "http://weather.gc.ca/wxlink/site_js/s0000620_e.js", true);
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
    }


  // req.open('GET', "https://data.mtgox.com/api/1/BTCUSD/ticker", true);
  // req.open('GET', "http://api.bitcoincharts.com/v1/markets.json", true);
  req.open('GET', "https://www.cavirtex.com/api/CAD/ticker.json", true);
  req.send(null);

  }
