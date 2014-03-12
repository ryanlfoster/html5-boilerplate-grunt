
module.exports = function (grunt) {
  'use strict';

  // Measures the time each task takes
  require('time-grunt')(grunt);

  // Load Grunt config
  require('load-grunt-config')(grunt);

  // Default task
  grunt.registerTask('default', ['sass', 'copy', 'javascripts', 'minification']);

  // Shorthands
  grunt.registerTask('javascripts', ['jslint', 'browserify', 'exorcise']);
  grunt.registerTask('minify', ['cssmin', 'imagemin', 'uglify']);

  // Server tasks
  grunt.registerTask('server', ['concurrent:standalone']);
  grunt.registerTask('serve', ['concurrent:laravel']);
};
