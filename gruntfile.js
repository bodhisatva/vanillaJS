/*module.exports = function(grunt) {
    'use strict';
*/

 // var allWatchFiles = { //yhdistetään polkuja watchfiles muuttujaan
  //  serverViews: ['app/**/*.*'],
  //  serverJS: ['gruntfile.js', 'server.js'],
  //  jScripts: ['public/javascript/**/*.js']
 // };

  module.exports = function(grunt) {

  var watchFiles = {
    serverViews: ['app/**/*.*'],
    serverJS: ['gruntfile.js', 'server.js'],
    clientJS: ['public/javascript/**/*.js'],
  };


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },
      serverJS: {
        files: watchFiles.serverJS,
        /*tasks: ['jshint'],*/
        options: {
          livereload: true
        }
      },
      clientJS: {
        files: watchFiles.clientJS,
        options: {
          livereload: true,
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
    concurrent: {
      default: ['nodemon', 'watch'],
      debug: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true,
        limit: 10
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('default', ['concurrent:default']);
  grunt.registerTask('debug', ['lint', 'concurrent:debug']);

};
