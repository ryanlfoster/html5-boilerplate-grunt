
'use strict';

module.exports = function () {
  return {
    options: {
      browsers: ['last 3 version', 'ie 9'],
      map: false
    },

    single_file: {
      src: '<%= project.publicPath %>/stylesheets/main.css',
      dest: '<%= project.publicPath %>/stylesheets/main.css'
    }
  };
};
