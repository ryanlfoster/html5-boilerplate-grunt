
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
          directory: 'assets/stylus',
          filename: 'main'
        },

        scripts: {
          directory: 'assets/scripts',
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
};
