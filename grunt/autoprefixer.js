
'use strict';

module.exports = function () {
  return {
    options: {
      browsers: ['last 2 version', 'ie 8', 'ie 9'],
      map: false
    },

    single_file: {
      src: 'public/stylesheets/main.css',
      dest: 'public/stylesheets/main.css'
    }
  };
};
