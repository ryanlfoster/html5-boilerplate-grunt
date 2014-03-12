
module.exports = function () {
  'use strict';

  return {
    build: {
      options: {
        style: 'expanded',
        quiet: true,
        sourcemap: true
      },

      files: {
        'public/stylesheets/main.css': 'assets/stylesheets/main.scss'
      }
    }
  };
};
