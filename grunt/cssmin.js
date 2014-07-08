
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        keepSpecialComments: 0
      },

      files: {
        '<%= project.publicPath %>/stylesheets/main.min.css': '<%= project.publicPath %>/stylesheets/main.css'
      }
    }
  };
};
