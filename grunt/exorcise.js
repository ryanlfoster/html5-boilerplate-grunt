
'use strict';

module.exports = function () {
  return {
    build: {
      files: {
        'public/javascripts/main.js.map': ['public/javascripts/main.js']
      }
    }
  };
};
