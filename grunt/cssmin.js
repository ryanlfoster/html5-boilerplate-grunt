
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        keepSpecialComments: 0
      },

      src: '<%= output.styles.directory %>/<%= output.styles.filename %>.css',
      dest: '<%= output.styles.directory %>/<%= output.styles.filename %>.min.css'
    }
  };
};
