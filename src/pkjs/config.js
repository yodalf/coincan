module.exports = [
  {
    "type": "heading",
    "defaultValue": "Bitcoin and Weather Configuration"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Display Settings"
      },
      {
        "type": "toggle",
        "messageKey": "health",
        "label": "Health display",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "celsius",
        "label": "Metric (Celsius and kph)",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "trotteuse",
        "label": "Display seconds ticker",
        "defaultValue": true
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Bitcoin Settings"
      },
      {
        "type": "select",
        "messageKey": "exchange",
        "defaultValue": "Kraken-USD",
        "label": "Exchange",
        "options": [
          {
            "label": "Bitstamp",
            "value": "Bitstamp"
          },
          {
            "label": "Bitpay CAD",
            "value": "Bitpay-CAD"
          },
          {
            "label": "Bitpay USD",
            "value": "Bitpay-USD"
          },
          {
            "label": "Bitpay EUR",
            "value": "Bitpay-EUR"
          },
          {
            "label": "Bitpay CNY",
            "value": "Bitpay-CNY"
          },
          {
            "label": "BTC-e",
            "value": "BTC-e"
          },
          {
            "label": "BTCC",
            "value": "BTCC"
          },
          {
            "label": "QuadrigaCX",
            "value": "QuadrigaCX"
          },
          {
            "label": "Kraken CAD",
            "value": "Kraken-CAD"
          },
          {
            "label": "Kraken USD",
            "value": "Kraken-USD"
          },
          {
            "label": "Kraken EUR",
            "value": "Kraken-EUR"
          }
        ]
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Weather Settings"
      },
      {
        "type": "select",
        "messageKey": "service",
        "defaultValue": "Environnement Canada",
        "label": "Weather Service",
        "options": [
          {
            "label": "Environnement Canada",
            "value": "Environnement Canada"
          },
          {
            "label": "Open-Meteo",
            "value": "Open-Meteo"
          }
        ]
      },
      {
        "type": "select",
        "messageKey": "location",
        "defaultValue": "GPS automatic",
        "label": "Env. Canada Location",
        "options": [
          { "label": "GPS automatic", "value": "GPS automatic" },
          { "label": "Quebec City", "value": "Quebec City" },
          { "label": "Montreal", "value": "Montreal" },
          { "label": "Vancouver", "value": "Vancouver" },
          { "label": "Sept-Iles", "value": "Sept-Iles" },
          { "label": "St-John's (NL)", "value": "St-John's (NL)" },
          { "label": "Fredericton", "value": "Fredericton" },
          { "label": "Charlottetown", "value": "Charlottetown" },
          { "label": "Toronto", "value": "Toronto" },
          { "label": "Winnipeg", "value": "Winnipeg" },
          { "label": "Regina", "value": "Regina" },
          { "label": "Edmonton", "value": "Edmonton" },
          { "label": "Victoria", "value": "Victoria" },
          { "label": "Iqaluit", "value": "Iqaluit" },
          { "label": "Yellowknife", "value": "Yellowknife" },
          { "label": "Whitehorse", "value": "Whitehorse" }
        ]
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
