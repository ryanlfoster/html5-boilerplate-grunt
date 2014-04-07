
module.exports = function () {
  'use strict';

  return {
    build: {
      options: {
        optimizationLevel: 3,
        cache: false
      },

      files: [
        {
          expand: true,
          cwd: 'assets/images/',
          src: ['*.{png,jpg,gif}', '**/*.{png,jpg,gif}'],
          dest: 'public/images/'
        }
      ]
    }
  };
};
