
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
        ]
      },

      files: {
        'public/javascripts/main.js': ['assets/javascripts/main.js']
      }
    }
  };
};
