
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        compress: false,
        paths: ['bower_components'],
        "include css": true
      },

      files: {
        'public/stylesheets/main.css': 'assets/stylesheets/main.styl'
      }
    }
  };
};
