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
        "defaultValue": "Other Settings"
      },
      {
        "type": "select",
        "messageKey": "exchange",
        "defaultValue": "Kraken-USD",
        "label": "Bitcoin Exchange",
        "options": [
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
        "messageKey": "cadence",
        "defaultValue": 30,
        "label": "Update Interval",
        "options": [
          {
            "label": "1 minute",
            "value": 1
          },
          {
            "label": "5 minutes",
            "value": 5
          },
          {
            "label": "30 minutes",
            "value": 30
          },
          {
            "label": "1 hour",
            "value": 60
          },
          {
            "label": "3 hours",
            "value": 180
          },
          {
            "label": "6 hours",
            "value": 360
          }
        ]
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
