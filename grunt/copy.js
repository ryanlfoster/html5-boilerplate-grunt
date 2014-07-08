
'use strict';

module.exports = function () {
  return {
    fonts: {
      expand: true,
      cwd: 'assets/fonts/',
      src: [
        '**'
      ],
      dest: '<%= project.publicPath %>/fonts/',
      filter: 'isFile'
    },

    images: {
      expand: true,
      cwd: 'assets/images/',
      src: [
        '**'
      ],
      dest: '<%= project.publicPath %>/images/',
      filter: 'isFile'
    }
  };
};
