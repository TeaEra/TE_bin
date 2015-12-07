var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

/**
 * Override onConsoleMessage to display msg in console;
 */
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

/*page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};

page.onResourceReceived = function(response) {
  console.log('Request ' + JSON.stringify(response, undefined, 4));
};*/

/*// viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
// the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };*/

/*console.log('The default user agent is: ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';*/

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address');
  }
  else {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
    //
    page.evaluate(function () {
      console.log('Title: ' + document.title);
      console.log('UA: ' + navigator.userAgent);
    });
    // Beside PNG format, PhantomJS supports JPEG, GIF, and PDF.
    page.render('temp.png');
  }
  phantom.exit();
});
