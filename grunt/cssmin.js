
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        keepSpecialComments: 0
      },

      files: {
        'public/stylesheets/main.min.css': 'public/stylesheets/main.css'
      }
    }
  };
};
