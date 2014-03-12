
module.exports = function () {
  'use strict';

  return {
    build: {
      files: {
        'public/javascripts/main.js.map': ['public/javascripts/main.js']
      }
    }
  };
};
