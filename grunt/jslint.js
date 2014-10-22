
'use strict';

module.exports = function () {
  return {
    all: {
      src: [
        'Gruntfile.js',
        'grunt/*.js',
        '<%= assets.scripts.directory %>/**/*.js',
        '<%= assets.scripts.directory %>/*.js'
      ],

      exclude: [
        '<%= assets.scripts.directory %>/vendor/**/*.js',
        '<%= assets.scripts.directory %>/vendor/*.js'
      ],

      options: {
        errorsOnly: true,
        failOnError: false
      },

      directives: {
        devel: true,
        node: true,
        todo: true,
        browser: true,
        indent: 2,
        nomen: true
      }
    }
  };
};
