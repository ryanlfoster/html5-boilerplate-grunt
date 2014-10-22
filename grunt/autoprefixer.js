
'use strict';

module.exports = function () {
  return {
    options: {
      browsers: [
        'last 3 version',
        'ie 9'
      ],

      map: false
    },

    single_file: {
      src: '<%= output.styles.directory %>/<%= output.styles.filename %>.css',
      dest: '<%= output.styles.directory %>/<%= output.styles.filename %>.css'
    }
  };
};
