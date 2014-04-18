
module.exports = function () {
  'use strict';

  return {
    build: {
      files: [
        {
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.svg'],
          dest: 'public/images/'
        }
      ]
    }
  };
};
