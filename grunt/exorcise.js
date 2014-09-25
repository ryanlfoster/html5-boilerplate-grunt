
'use strict';

module.exports = function () {
  return {
    build: {
      files: {
        '<%= project.publicPath %>/javascripts/main.js.map': [
          '<%= project.publicPath %>/javascripts/main.js'
        ]
      }
    }
  };
};
