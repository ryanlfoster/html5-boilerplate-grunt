
'use strict';

module.exports = function (grunt) {
  // Measures the time each task takes
  require('time-grunt')(grunt);

  // Load Grunt config
  require('load-grunt-config')(grunt, {
    init: true,
    data: {
      project: {
        assetPath: 'assets',
        publicPath: 'public'
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['build']);

  // Shorthands
  grunt.registerTask('build', [
    'stylus',
    'autoprefixer',
    'copy:fonts',
    'copy:images',
    'javascripts',
    'minify'
  ]);

  grunt.registerTask('javascripts', [
    'jslint',
    'browserify',
    'exorcise',
    'modernizr'
  ]);

  grunt.registerTask('minify', [
    'cssmin',
    'uglify'
  ]);

  // Server tasks
  grunt.registerTask('server', ['concurrent:standalone']);
  grunt.registerTask('serve', ['concurrent:laravel']);
};
