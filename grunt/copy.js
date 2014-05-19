
module.exports = function () {
  'use strict';

  return {
    fonts: {
      expand: true,
      cwd: 'assets/fonts/',
      src: [
        '**'
      ],
      dest: 'public/fonts/',
      filter: 'isFile'
    },

    images: {
      expand: true,
      cwd: 'assets/images/',
      src: [
        '**'
      ],
      dest: 'public/images/',
      filter: 'isFile'
    }
  };
};
