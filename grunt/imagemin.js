
module.exports = function () {
  'use strict';

  return {
    build: {
      options: {
        optimizationLevel: 3
      },

      files: [
        {
          expand: true,
          cwd: 'public/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images/'
        }
      ]
    }
  };
};
