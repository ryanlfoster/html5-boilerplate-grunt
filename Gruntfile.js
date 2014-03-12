
module.exports = function (grunt) {
  'use strict';

  // Load Grunt config
  require('load-grunt-config')(grunt);

  // Register default task
  grunt.registerTask('default', [
    'stylesheets', 'copy:images', 'imagemin', 'copy:fonts',
    'jslint', 'browserify', 'exorcise', 'uglify'
  ]);

  grunt.registerTask('server', ['concurrent:standalone']);
  grunt.registerTask('serve', ['concurrent:laravel']);
};
