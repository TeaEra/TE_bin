'use strict';

module.exports = function (grunt) {
	// Load required modules;
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

	// User-defined configuration;
	var config = {
		app: 'app',
    dist: 'dist',
		releasePath: 'D:/WS_TE/TE_bin/imte/dist'
    // '/Users/TeaEra/Documents/TE-WS/TE_bin/imte/dist'
	};

  // TODO: !!!
  var confJson = require('./imte.conf.json');
  var os = confJson.os;
  if (os === 'mac') {
    config.releasePath = '/Users/TeaEra/Documents/TE-WS/TE_bin/imte/dist';
  }
  else if (os === 'work-win') {
    // Pass;
  }
  else if (os === 'home-win') {
    config.releasePath = 'C:/TeaEra/WS_TE/TE_bin/imte/dist';
  }

  /**
   * Release command for this project:
   *
   * grunt fis3Release
   */

	var pkgjson = require('./package.json');

	// Project configuration;
	grunt.initConfig({
		config: config,

		pkgjson: pkgjson,

		shell: {
			ll: {
				command: 'ls -l'
			},
			test: {
				command: 'echo <%=pkgjson.name %> && echo <%=config.app %>'
			},
			fisRelease: {
				command: 'cd <%=config.app %> && fis release --verbose  --optimize --md5 --domains --dest <%=config.releasePath %>'
			},
			mvAfterRelease: {
				command: 'mv -f <%=config.releasePath%>/*.tpl.html <%=config.releasePath%>/templates/'
			},
			cleanRelease: {
				command: 'rm -rf <%=config.releasePath %>/*'
			},
      rmPhpTplAfterRelease: {
        command: 'rm -rf <%=config.app %>/*.tpl.html'
      },
      getResMap: {
        // command: 'cd <%=config.app %>/test/shell && node getResMap.js'
        command: 'cd <%=config.app %>/test/shell && python getResMap.py'
      },
      //
      moveDistToRelease: {
        command: 'mv -f <%=config.dist %>/* <%=config.releasePath %>/'
      },
      //
      fis3Release: {
        command: 'cd <%=config.app %> && fis3 release -d <%=config.releasePath %>'
      },
      //
      fis3PreRelease: {
        // command: 'cd <%=config.app %> && fis3 server clean && fis3 release && fis3 server start'
        command: 'cd <%=config.app %> && fis3 release qa'
      }
		},

		copy: {
			copyPhpTpl: {
				expand: true,
				cwd: '<%=config.app %>/templates/',
				src: ['**'],
				dest: '<%=config.app %>/'
			},
      copyAllToDist: {
        expand: true,
        cwd: '<%=config.app %>',
        src: ['**'],
        dest: '<%=config.dist %>'
      }
		},

    clean: {
      dist: ['<%=config.dist %>/*'],
      distTest: ['<%=config.dist %>/test'],
      fisConf: ['<%=config.dist %>/fis-conf.js']
    },

    uglify: {
      options: {
        banner: '/* <%= pkgjson.author %> on <%= grunt.template.today("mm-dd-yyyy") %> */\n'
      },
      minify: {
        files: [{
          expand: true,
          cwd: '<%=config.app %>/js',
          src: '**/*.js',
          dest: '<%=config.dist %>/js'
        }]
      }
    },

    cssmin: {
      options: {
      },
      minify: {
        expand: true,
        cwd: '<%=config.app %>/css',
        src: ['*.css'],
        dest: '<%=config.dist %>/css',
      }
    }

	});

	// Task definitions;
	grunt.registerTask('release', ['shell:cleanRelease', 'copy:copyPhpTpl', 'shell:fisRelease', 'shell:mvAfterRelease', 'shell:rmPhpTplAfterRelease']);
  grunt.registerTask('getResMap', ['shell:getResMap']);
  // Release for cache-strategy;
  grunt.registerTask(
    'releaseCache',
    ['clean:dist', 'getResMap', 'copy:copyAllToDist', 'uglify:minify', 'cssmin:minify', 'clean:distTest', 'clean:fisConf', 'shell:cleanRelease', 'shell:moveDistToRelease']
  );
  //
  grunt.registerTask(
    'fis3Release',
    ['shell:cleanRelease', 'shell:fis3Release']
  );
  //
  grunt.registerTask(
    'fis3PreRelease',
    ['shell:fis3PreRelease']
  );
};
