
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        bundleOptions: {
          debug: true
        },

        alias: [
          'bower_components/jquery/dist/jquery.js:jquery'
        ],

        transform: [
          'coffeeify'
        ]
      },

      files: {
        '<%= project.publicPath %>/javascripts/main.js': [
          'assets/javascripts/**/*.js',
          'assets/javascripts/**/*.coffee'
        ]
      }
    }
  };
};
