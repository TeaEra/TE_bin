/* global fis */

var
  isDebug = false,
  isCompressed = false,
  isVersioned = true,
  isModule = true;

/****** Customized area BEGIN ******/

if (isDebug) {
  isCompressed = false;
}
else {
  fis.set('project.ignore', ['test/**']);
}

/**
 * fis-optimizer-uglify-js
 */
// fis.config.set('settings.optimizer.uglify-js', option);

var
  domain = 'http://appsearch.m.sogou.com/campaigns/palm-print',
  // debugDomain = 'http://127.0.0.1:8080';
  debugDomain = 'http://appsearch.m.sogou.com/campaigns/palm-print';

/**
 * fis-optimizer-uglify-js
 */
// fis.config.set('settings.optimizer.uglify-js', option);

fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://10.134.50.225/te/receiver.php',
    to: '/search/nginx/html/campaigns/palm-print'
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

  fis.match('module/*.js', {
    isMod: true  // Marked as module
  });

  fis.match('module/app/*.js', {
    isMod: true  // Marked as module
  });

  fis.match('module/main/*.js', {
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

  fis.match('*.{png,jpg,gif}', {
    useHash: true,
    domain: domain
  });

  fis.match('images/pv.gif', {
    useHash: false
  });

  fis.match('images/cl.gif', {
    useHash: false
  });
}
else {
  fis.match('*.{js,css}', {
    useHash: false,
    domain: debugDomain
  });

  fis.match('*.{png,jpg,gif}', {
    useHash: false,
    domain: debugDomain
  });
}