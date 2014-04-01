
module.exports = function () {
  'use strict';

  return {
    images: {
      expand: true,
      cwd: 'assets/images/',
      src: [
        '**'
      ],
      dest: 'build/images/',
      filter: 'isFile'
    },

    fonts: {
      expand: true,
      cwd: 'assets/fonts/',
      src: [
        '**'
      ],
      dest: 'public/fonts/',
      filter: 'isFile'
    }
  };
};
