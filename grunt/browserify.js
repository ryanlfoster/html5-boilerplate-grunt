
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        bundleOptions: {
          debug: true
        },

        transform: [
          'coffeeify',
          'debowerify'
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
