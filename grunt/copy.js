
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
    }
  };
};
