
'use strict';

module.exports = function () {
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
