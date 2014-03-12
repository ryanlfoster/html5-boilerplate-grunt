
module.exports = function () {
  'use strict';

  return {
    all: {
      src: [
        'Gruntfile.js',
        'grunt/*.js',
        'assets/javascripts/**/*.js',
        'assets/javascripts/*.js'
      ],

      exclude: [
        'assets/javascripts/vendor/**/*.js',
        'assets/javascripts/vendor/*.js'
      ],

      options: {
        errorsOnly: true
      },

      directives: {
        node: true,
        todo: true,
        browser: true,
        indent: 2,
        nomen: true
      }
    }
  };
};
