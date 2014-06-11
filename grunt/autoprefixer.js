
'use strict';

module.exports = function () {
  return {
    options: {
      browsers: ['last 3 version', 'ie 9'],
      map: false
    },

    single_file: {
      src: 'public/stylesheets/main.css',
      dest: 'public/stylesheets/main.css'
    }
  };
};
