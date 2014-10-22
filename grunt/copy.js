
'use strict';

module.exports = function () {
  return {
    fonts: {
      expand: true,
      cwd: '<%= assets.fonts.directory %>',
      src: [
        '**'
      ],
      dest: '<%= output.fonts.directory %>',
      filter: 'isFile'
    },

    images: {
      expand: true,
      cwd: '<%= assets.images.directory %>',
      src: [
        '**'
      ],
      dest: '<%= output.images.directory %>',
      filter: 'isFile'
    }
  };
};
