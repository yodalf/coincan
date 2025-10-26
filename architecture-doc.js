const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat, PageSize, PageOrientation } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 24 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 56, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: "000000", font: "Arial" },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        size: {
          width: 12240,  // 8.5 inches in twentieths of a point (8.5 * 1440)
          height: 15840, // 11 inches in twentieths of a point (11 * 1440)
          orientation: PageOrientation.PORTRAIT
        }
      }
    },
    children: [
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Bitcoin and Weather Watchface")] }),
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Software Architecture Documentation")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: "Version 5.1.0", italics: true })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Project Overview")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The Bitcoin and Weather watchface is a Pebble smartwatch application that displays real-time Bitcoin prices and weather information alongside traditional time and date. The application supports multiple Pebble watch models and integrates with external APIs for cryptocurrency pricing and weather data.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1.1 Key Features")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Real-time Bitcoin price tracking from Kraken exchange (CAD, USD, EUR)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Weather data from Environment Canada or Open-Meteo APIs")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Historical Bitcoin price graph visualization (60 data points)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Configurable display options (seconds ticker, health tracking)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("GPS-based automatic location detection")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Metric and imperial unit support")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun("Battery and Bluetooth status indicators")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("1.2 Supported Platforms")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Aplite (Pebble Classic)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Basalt (Pebble Time)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Chalk (Pebble Time Round)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Diorite (Pebble 2)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun("Emery (Pebble Time 2)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Architecture Overview")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("The application follows a three-tier architecture with clear separation between the watchface (C), JavaScript communication layer (PebbleKit JS), and external services.")] }),

      new Table({
        columnWidths: [3120, 6240],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 3120, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Layer", bold: true })] })]
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 6240, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Description", bold: true })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 3120, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: "Watchface (C)", bold: true })] })]
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 6240, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Native C code running on the watch. Handles UI rendering, user input, time updates, and persistent storage.")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 3120, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: "PebbleKit JS", bold: true })] })]
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 6240, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("JavaScript layer running on the connected phone. Manages API calls, GPS location, and data formatting.")] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: cellBorders,
                width: { size: 3120, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun({ text: "External APIs", bold: true })] })]
              }),
              new TableCell({
                borders: cellBorders,
                width: { size: 6240, type: WidthType.DXA },
                children: [new Paragraph({ children: [new TextRun("Kraken (Bitcoin), Environment Canada / Open-Meteo (Weather), OpenStreetMap Nominatim (Geocoding)")] })]
              })
            ]
          })
        ]
      }),

      new Paragraph({ spacing: { before: 240 }, heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Component Architecture")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.1 Watchface Layer (main.c)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The C watchface is organized into the following functional modules:")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.1.1 Display Components")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Time Layer: ", bold: true }), new TextRun("Large central display showing current time (12/24hr format)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Date Layer: ", bold: true }), new TextRun("Shows day and date (e.g., 'Mon 19')")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Bitcoin Layers: ", bold: true }), new TextRun("Current price (bc_layer), 24h high (bcH_layer), 24h low (bcL_layer)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Graph Layer: ", bold: true }), new TextRun("60-point historical Bitcoin price visualization")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Weather Layer: ", bold: true }), new TextRun("Temperature, wind data, weather icons, forecast information")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Trotteuse Layer: ", bold: true }), new TextRun("Optional seconds ticker bar (configurable)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Status Indicators: ", bold: true }), new TextRun("Battery level and Bluetooth connection")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.1.2 Data Structures")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "WeatherLayer: ", bold: true }), new TextRun("Composite structure containing 5 temperature text layers, wind layer, 2 weather icon bitmap layers, and status indicators")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Graph Data: ", bold: true }), new TextRun("GPath structure with 120 points (60 points × 2 for path closure) storing normalized Bitcoin price history")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Configuration: ", bold: true }), new TextRun("Global variables for user preferences (exchange, weather service, units, display options)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.1.3 Event Handlers")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Tick Handler: ", bold: true }), new TextRun("handle_minute_tick() - Updates time display and triggers periodic data fetches")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Message Handler: ", bold: true }), new TextRun("Receives Bitcoin and weather data from JavaScript layer")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Battery Handler: ", bold: true }), new TextRun("Monitors battery state and updates display")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Bluetooth Handler: ", bold: true }), new TextRun("Tracks connection status and triggers vibration alerts")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.1.4 Update Mechanisms")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The watchface uses a configurable cadence system for data updates (default: 3 minutes). Updates are aligned to clock intervals (0, N, 2N, 3N minutes after the hour) to prevent duplicate fetches. A splash screen timer triggers the initial data fetch 3 seconds after launch.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.2 PebbleKit JS Layer")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.2.1 Core Modules (index.js)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Location Services: ", bold: true }), new TextRun("GPS acquisition, reverse geocoding via OpenStreetMap Nominatim, fallback to Quebec City coordinates")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Bitcoin Fetcher: ", bold: true }), new TextRun("fetch_BTC() - Retrieves prices from Kraken API, supports CAD/USD/EUR currencies")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Weather Fetcher: ", bold: true }), new TextRun("Dual API support (Environment Canada GeoMet / Open-Meteo), temperature unit conversion, weather code mapping")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Configuration Manager: ", bold: true }), new TextRun("Pebble Clay integration for user settings, AppMessage protocol for watch communication")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.2.2 Data Flow")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("Watch requests data → JS acquires GPS → Reverse geocode location → Fetch Bitcoin from Kraken → Fetch weather from chosen API → Format and send to watch via AppMessage → Watch updates display and stores in persistent storage")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3.2.3 Configuration (config.js)")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("Pebble Clay configuration provides a web-based settings page with toggles, selects, and other controls. Settings include health display, temperature units, seconds ticker, Bitcoin exchange, weather service, and update interval.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Data Management")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.1 Persistent Storage")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The watchface uses Pebble's persist API to store configuration and historical data between app launches. Storage includes user preferences (trotteuse, celsius, health, exchange, location, service, cadence), Bitcoin price data (current, high, low values plus 60-point graph history), weather data (cached for offline viewing), and location information.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.2 Bitcoin Graph Algorithm")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The push_point() function maintains a 60-point sliding window of Bitcoin prices. New values are added to the right, oldest values are removed from the left. Y-coordinates are normalized between btcL (low) and btcH (high) to fit the 23-pixel graph height. The graph uses a closed GPath structure for efficient rendering.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.3 Message Protocol")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("Communication between C and JavaScript uses numbered message keys (0-18) defined in package.json. The protocol includes Bitcoin data (keys 0-2), weather observation (keys 3-9), forecast (keys 10-13), location (key 14), and configuration (keys for trotteuse, celsius, health, exchange, service, location, cadence, clearbtcdata).")] }),

      new Table({
        columnWidths: [1560, 3120, 4680],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Key", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Name", bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Purpose", bold: true })] })] })
            ]
          }),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("0-2")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("btcV, btcL, btcH")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Current, low, high Bitcoin price")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("3-9")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Weather observation")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Icon, temp, wind direction, gust, speed, wind chill, humidex")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("10-13")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Weather forecast")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Icon, high, low, period name")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("14")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Location")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("3-character locality code")] })] })
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("18")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("JS events")] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun("Status codes (1=ready, 2=timeout, 3-5=errors)")] })] })
          ]})
        ]
      }),

      new Paragraph({ spacing: { before: 240 }, heading: HeadingLevel.HEADING_1, children: [new TextRun("5. External API Integration")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.1 Kraken Cryptocurrency Exchange")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Endpoint: ", bold: true }), new TextRun("https://api.kraken.com/0/public/Ticker")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Currency Pairs: ", bold: true }), new TextRun("XBTCAD, XBTUSD, XBTEUR")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Data Extracted: ", bold: true }), new TextRun("24h high, 24h low, current close price")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Timeout: ", bold: true }), new TextRun("3 seconds")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.2 Environment Canada GeoMet API")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Endpoint: ", bold: true }), new TextRun("https://api.weather.gc.ca/collections/citypageweather-realtime/items")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Query Method: ", bold: true }), new TextRun("Bounding box around GPS coordinates (±0.1 degrees)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Station Selection: ", bold: true }), new TextRun("Closest station to GPS coordinates using distance calculation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Data Points: ", bold: true }), new TextRun("Temperature, wind speed/direction/gusts, wind chill (if ≤0°C), weather icon code, forecast high/low")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Timeout: ", bold: true }), new TextRun("10 seconds")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.3 Open-Meteo Weather API")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Endpoint: ", bold: true }), new TextRun("https://api.open-meteo.com/v1/forecast")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Parameters: ", bold: true }), new TextRun("GPS latitude/longitude, current weather, hourly forecast (12h), daily forecast")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Weather Code Mapping: ", bold: true }), new TextRun("WMO codes converted to Environment Canada icon codes for display consistency")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Timeout: ", bold: true }), new TextRun("10 seconds")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.4 OpenStreetMap Nominatim")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Endpoint: ", bold: true }), new TextRun("https://nominatim.openstreetmap.org/reverse")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Purpose: ", bold: true }), new TextRun("Reverse geocoding GPS coordinates to city/locality names")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Fallback Logic: ", bold: true }), new TextRun("Locality → County → State/Province")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun({ text: "Timeout: ", bold: true }), new TextRun("3 seconds")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. UI Layout and Positioning")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.1 Display Geometry")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The watchface is designed for 144×168 pixel displays with three main regions: top (0-95px), middle (95-102px), and bottom (102-168px). The top region contains Bitcoin data and graph. The middle region shows the optional seconds ticker. The bottom region displays time, date, weather, and status indicators.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.2 Dynamic Positioning")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("Component positions adjust based on configuration. When the trotteuse is enabled, the time layer moves up 5 pixels. Bitcoin layers shift vertically by 3 pixels when trotteuse is disabled. Graph positioning depends on both trotteuse state and platform (color vs monochrome).")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.3 Platform-Specific Rendering")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The application uses conditional compilation (#ifdef PBL_COLOR) for platform-specific adjustments. Color platforms use yellow time display and slight horizontal offset for time layer. Monochrome platforms use white on black. Both maintain identical functionality with adjusted aesthetics.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Configuration and User Preferences")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.1 Available Settings")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Health Display: ", bold: true }), new TextRun("Enable/disable step count visualization")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Temperature Units: ", bold: true }), new TextRun("Celsius/Fahrenheit and km/h or mph")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Seconds Ticker: ", bold: true }), new TextRun("Show/hide trotteuse bar")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Bitcoin Exchange: ", bold: true }), new TextRun("Kraken CAD/USD/EUR")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Weather Service: ", bold: true }), new TextRun("Environment Canada or Open-Meteo")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun({ text: "Update Interval: ", bold: true }), new TextRun("1 or 3 minutes")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun({ text: "Clear Bitcoin Graph: ", bold: true }), new TextRun("Reset historical price data")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.2 Configuration Workflow")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("Settings are managed through Pebble Clay web interface. User modifies settings in phone app → Clay sends AppMessage to watch → Watch handler updates global variables → Watch persists settings → Watch requests new data fetch → UI updates to reflect changes.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. Error Handling and Resilience")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.1 Network Timeouts")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("All API requests implement timeout protection (3-10 seconds). On timeout, the watch displays cached data and appends an asterisk to the date to indicate staleness. Users receive status codes via message key 18.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.2 GPS Fallback")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("When GPS acquisition fails, the system defaults to Quebec City coordinates (47.0, -71.2). This ensures weather data is always available even without location services.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.3 Data Validation")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("JavaScript layer validates API responses before transmission. The C layer sanitizes float values before graph rendering to prevent out-of-bounds coordinates. Null checks protect against missing weather station data.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.4 Vibration Alerts")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("Bluetooth disconnection triggers vibration alerts with night mode suppression (10pm-5am). Battery alerts use distinct vibration patterns (long pulses for critical, short pulses for low).")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("9. Performance Considerations")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("9.1 Battery Optimization")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Configurable update intervals (1 or 3 minutes) reduce API calls")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("GPS timeout prevents excessive location searching")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Seconds ticker is optional to minimize second-unit tick subscriptions")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun("Cached weather data reduces network activity")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("9.2 Memory Management")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Static string buffers prevent dynamic allocation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("GPath reuse for graph rendering")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Conditional layer creation (trotteuse only when enabled)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun("Bitmap resource management with proper cleanup")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("9.3 Rendering Efficiency")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Layer dirty marking only when data changes")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Transparent time layer to prevent background overwriting")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun("Optimized graph path with minimal points")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("10. Build and Deployment")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.1 Build System")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The project uses Pebble SDK 3 with waf build system. Primary commands include 'pebble build' (compile for all platforms), 'pebble clean' (remove build artifacts), 'pebble install --emulator <platform>' (install to emulator), and 'pebble screenshot' (capture emulator display).")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.2 Dependencies")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Pebble SDK 3")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("pebble-clay ^1.0.4 (configuration UI)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 120 }, children: [new TextRun("Node.js (for PebbleKit JS)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.3 Testing")] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun("Testing occurs on multiple emulators (aplite, basalt, chalk, diorite, emery) to verify cross-platform compatibility. Screenshot validation ensures visual correctness after changes. Log monitoring tracks API response times and error conditions.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("11. Recent Enhancements")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Fixed time display overwriting issue with transparent layer implementation")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Added clear Bitcoin graph data feature")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Updated BTC graph border to 23-pixel tall vertical lines")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Implemented configurable update cadence (1 or 3 minutes)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Enhanced Environment Canada API integration with closest station selection")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun("Added Open-Meteo as alternative weather service")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("12. Code Organization")] }),
      new Paragraph({ spacing: { after: 120 }, children: [new TextRun("The codebase uses folding markers ({{{ and }}}) for logical code organization. Major sections include Includes, Defines (Keys, Geometries, Colors), Globals (Layers, Variables), Utilities, Handlers (Time, Message, Configuration), and Graphics update procedures.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("13. Future Considerations")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Support for additional cryptocurrency exchanges")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Extended historical data visualization (beyond 60 points)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Customizable color themes for color platforms")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Multiple timezone support")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [new TextRun("Enhanced health integration (heart rate, sleep data)")] }),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 240 }, children: [new TextRun("Weather alerts and notifications")] }),

      new Paragraph({ spacing: { before: 400, after: 120 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "---", bold: true })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Document Generated: " + new Date().toLocaleDateString(), italics: true, size: 20 })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Version: 5.1.0", italics: true, size: 20 })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/realo/Work/PEBBLE/coincan/Bitcoin_Weather_Architecture.docx", buffer);
  console.log("Document created successfully: Bitcoin_Weather_Architecture.docx");
});
