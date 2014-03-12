
module.exports = function () {
  'use strict';

  return {
    build: {
      files: {
        'public/javascripts/main.min.js': ['public/javascripts/main.js']
      }
    }
  };
};
