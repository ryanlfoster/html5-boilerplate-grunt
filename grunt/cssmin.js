
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        keepSpecialComments: 0
      },

      src: '<%= project.publicPath %>/stylesheets/main.css',
      dest: '<%= project.publicPath %>/stylesheets/main.min.css'
    }
  };
};
