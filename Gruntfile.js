
'use strict';

module.exports = function (grunt) {
  // Measures the time each task takes
  require('time-grunt')(grunt);

  // Load Grunt config
  require('load-grunt-config')(grunt, {
    init: true,

    data: {
      assets: {
        stylus: {
          directory: 'assets/stylesheets',
          filename: 'main'
        },

        scripts: {
          directory: 'assets/javascripts',
          filename: 'main'
        },

        fonts: {
          directory: 'assets/fonts'
        },

        images: {
          directory: 'assets/images'
        }
      },

      output: {
        styles: {
          directory: 'public/stylesheets',
          filename: 'main'
        },

        scripts: {
          directory: 'public/javascripts',
          filename: 'main'
        },

        fonts: {
          directory: 'public/fonts'
        },

        images: {
          directory: 'public/images'
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['build']);

  // Complete build task
  grunt.registerTask('build', [
    'copy',
    'styles',
    'scripts',
    'minify'
  ]);

  // Stylesheet build tasks
  grunt.registerTask('styles', [
    'stylus',
    'autoprefixer'
  ]);

  // Javascript build tasks
  grunt.registerTask('scripts', [
    'jslint',
    'browserify',
    'exorcise',
    'modernizr'
  ]);

  // Minify build tasks
  grunt.registerTask('minify', [
    'cssmin',
    'uglify'
  ]);

  // Create custom watcher command
  grunt.registerTask('watcher', [
    'browserify',
    'watch'
  ]);

  // Server tasks
  grunt.registerTask('server', ['concurrent:standalone']);
  grunt.registerTask('serve', ['concurrent:laravel']);
};
