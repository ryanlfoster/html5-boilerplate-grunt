
'use strict';

module.exports = function () {
  return {
    build: {
      files: {
        '<%= project.publicPath %>/javascripts/main.min.js': ['<%= project.publicPath %>/javascripts/main.js']
      }
    }
  };
};
