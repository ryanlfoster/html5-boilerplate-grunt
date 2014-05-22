
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        optimizationLevel: 1,
        progressive: true,
        interlaced: true,
        pngquant: true,
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
