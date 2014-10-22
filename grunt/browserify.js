
'use strict';

module.exports = function () {
  return {
    build: {
      options: {
        browserifyOptions: {
          debug: true,
          fullPaths: false
        },

        watch: true
      },

      src: '<%= assets.scripts.directory %>/<%= assets.scripts.filename %>.js',
      dest: '<%= output.scripts.directory %>/<%= output.scripts.filename %>.js'
    }
  };
};
