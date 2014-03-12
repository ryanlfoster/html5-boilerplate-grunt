
module.exports = function () {
  'use strict';

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
