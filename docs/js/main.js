(function() {
  console.log('Configuration page loaded');
  alert('Configuration page loaded - v1');
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit button clicked!');

    var configData = getAndStoreConfigData();
    console.log('Config data:', JSON.stringify(configData));

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    console.log('Return to:', return_to);

    var encodedData = encodeURIComponent(JSON.stringify(configData));
    console.log('Encoded data:', encodedData);

    var finalURL = return_to + encodedData;
    console.log('Final URL:', finalURL);

    document.location = finalURL;
  });
}

function loadOptions() {
  var $cnfHealth = $('#cnfHealth');
  var $cnfCelsius = $('#cnfCelsius');
  var $cnfTrotteuse = $('#cnfTrotteuse');
  var $cnfExchange = $('#cnfExchange');
  var $cnfLocation = $('#cnfLocation');
  //var $cnfOWMid = $('#cnfOWMid');
  var $cnfOWMkey = $('#cnfOWMkey');
  var $cnfOWMloc = $('#cnfOWMloc');
  var $cnfService = $('#cnfWeatherSvc');

  if (localStorage.cnfHealth) {
    $cnfHealth[0].checked = localStorage.cnfHealth === 'true';
  }
  if (localStorage.cnfCelsius) {
    $cnfCelsius[0].checked = localStorage.cnfCelsius === 'true';
  }
  if (localStorage.cnfTrotteuse) {
    $cnfTrotteuse[0].checked = localStorage.cnfTrotteuse === 'true';
  }
  if (localStorage.cnfExchange) {
    $cnfExchange[0].value = localStorage.cnfExchange;
  }
  if (localStorage.cnfLocation) {
    $cnfLocation[0].value = localStorage.cnfLocation;
  }
  //if (localStorage.cnfOWMid) {
  //  $cnfOWMid[0].value = localStorage.cnfOWMid;
  //}
  if (localStorage.cnfOWMkey) {
    $cnfOWMkey[0].value = localStorage.cnfOWMkey;
  }
  if (localStorage.cnfOWMloc) {
    $cnfOWMloc[0].value = localStorage.cnfOWMloc;
  }
  if (localStorage.cnfService) {
    $cnfService[0].value = localStorage.cnfService;
  }
}

function getAndStoreConfigData() {
  var $cnfHealth     = $('#cnfHealth');
  var $cnfCelsius     = $('#cnfCelsius');
  var $cnfTrotteuse   = $('#cnfTrotteuse');
  var $cnfExchange    = $('#cnfExchange');
  var $cnfLocation    = $('#cnfLocation');
  //var $cnfOWMid       = $('#cnfOWMid');
  var $cnfOWMkey      = $('#cnfOWMkey');
  var $cnfOWMloc      = $('#cnfOWMloc');
  var $cnfService     = $('#cnfWeatherSvc');

  var options = {
    //backgroundColor: $backgroundColorPicker.val(),
    //twentyFourHourFormat: $timeFormatCheckbox[0].checked
    cnfHealth:      $cnfHealth[0].checked,
    cnfCelsius:    $cnfCelsius[0].checked,
    cnfTrotteuse:  $cnfTrotteuse[0].checked,
    cnfExchange:   $cnfExchange.val(),
    cnfLocation:   $cnfLocation.val(),
    cnfOWMid:      "", //$cnfOWMid.val(),
    cnfOWMkey:     $cnfOWMkey.val(),
    cnfOWMloc:     $cnfOWMloc.val(),
    cnfService:    $cnfService.val()
  };

  //localStorage.backgroundColor = options.backgroundColor;
  //localStorage.twentyFourHourFormat = options.twentyFourHourFormat;
  localStorage.cnfHealth     = options.cnfHealth;
  localStorage.cnfCelsius   = options.cnfCelsius;
  localStorage.cnfTrotteuse = options.cnfTrotteuse;
  localStorage.cnfExchange  = options.cnfExchange;
  localStorage.cnfLocation  = options.cnfLocation;
  localStorage.cnfOWMid     = options.cnfOWMid;
  localStorage.cnfOWMkey    = options.cnfOWMkey;
  localStorage.cnfOWMloc    = options.cnfOWMloc;
  localStorage.cnfService   = options.cnfService;

  console.log('  ==> Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
