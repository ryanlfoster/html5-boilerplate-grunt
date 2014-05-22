
'use strict';

module.exports = function () {
  return {
    build: {
      files: {
        'public/javascripts/main.min.js': ['public/javascripts/main.js']
      }
    }
  };
};
