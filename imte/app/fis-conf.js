var
  isDebug = true,  // TODO: for debug;
  isCompressed = false,
  isVersioned = true,
  isModule = true;

/****** Customized area BEGIN ******/
if (isDebug) {
  isCompressed = false;
  isVersioned = false;
}
else {
  isCompressed = true;
  isVersioned = true;
  fis.set('project.ignore', ['test/**']);
}

/**
 * fis-optimizer-uglify-js
 */
// fis.config.set('settings.optimizer.uglify-js', option);

var
  domain = 'http://teaera.club/teaera',  // TODO: step 1;
  debugDomain = 'http://127.0.0.1/teaera';  // TODO: step 2;

/**
 * fis-optimizer-uglify-js
 */
// fis.config.set('settings.optimizer.uglify-js', option);

fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://128.199.224.14/te/receiver.php',
    to: '/teaera/nginx/html/teaera'  // TODO: step 3;
  })
});
/****** Customized area END ******/

if (isModule) {
  /**
   * Module
   */
  fis.hook('module', {
    mode: 'commonJS'
  });

  fis.match('static/module/*.js', {
    isMod: true  // Marked as module
  });

  fis.match('static/module/app/*.js', {
    isMod: true  // Marked as module
  });

  fis.match('static/module/component/*.js', {
    isMod: true  // Marked as module
  });

  fis.match('static/module/main/*.js', {
    isMod: true  // Marked as module
  });

  /**
   * fis3-postpackager-loader
   */
  fis.match('::packager', {
    postpackager: fis.plugin('loader', {
      allInOne: false
    })
  });
}

if (isCompressed) {
  /**
   * Compression;
   */
  fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
  });

  fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
  });
}
else {
  // Pass;
}

if (isVersioned) {
  /**
   * Add MD5-stamp;
   */
  fis.match('*.{js,css}', {
    useHash: true,
    domain: domain
  });

  fis.match('*.{png,jpg,gif,ico}', {
    useHash: true,
    domain: domain
  });
}
else {
  fis.match('*.{js,css}', {
    useHash: false,
    domain: debugDomain
  });

  fis.match('*.{png,jpg,gif,ico}', {
    useHash: false,
    domain: debugDomain
  });
}
