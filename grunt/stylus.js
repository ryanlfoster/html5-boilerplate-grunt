
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        compress: false,
        paths: [
          'bower_components'
        ],
        "include css": true
      },

      src: '<%= assets.stylus.directory %>/<%= assets.stylus.filename %>.styl',
      dest: '<%= output.styles.directory %>/<%= output.styles.filename %>.css'
    }
  };
};
