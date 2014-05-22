
module.exports = function () {
  'use strict';

  return {
    build: {
      files: {
        'public/javascripts/main.js': ['assets/javascripts/main.js']
      },

      options: {
        bundleOptions: {
          debug: true
        },

        alias: [
          'bower_components/jquery/dist/jquery.js:jquery'
        ]
      }
    }
  };
};
