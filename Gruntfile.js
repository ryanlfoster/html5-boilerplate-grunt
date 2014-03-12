
module.exports = function (grunt) {
  'use strict';

  // Load Grunt config
  require('load-grunt-config')(grunt);

  // Default task
  grunt.registerTask('default', ['sass', 'copy', 'javascripts', 'minification']);

  // Shorthands
  grunt.registerTask('javascripts', ['jslint', 'browserify', 'exorcise']);
  grunt.registerTask('minification', ['cssmin', 'imagemin', 'uglify']);

  // Server tasks
  grunt.registerTask('server', ['concurrent:standalone']);
  grunt.registerTask('serve', ['concurrent:laravel']);
};
