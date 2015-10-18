(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $cnfTrotteuse = $('#cnfTrotteuse');
  var $cnfExchange = $('#cnfExchange');
  var $cnfLocation = $('#cnfLocation');
  //var $cnfOWMid = $('#cnfOWMid');
  var $cnfOWMkey = $('#cnfOWMkey');
  var $cnfOWMloc = $('#cnfOWMloc');
  var $cnfService = $('#cnfWeatherSvc');

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
