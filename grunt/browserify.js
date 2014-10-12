
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },

      files: {
        '<%= project.publicPath %>/javascripts/main.js': [
          'assets/javascripts/*.js',
          'assets/javascripts/**/*.js'
        ]
      }
    }
  };
};
