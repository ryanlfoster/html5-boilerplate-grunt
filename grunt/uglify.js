
'use strict';

module.exports = function () {
  return {
    build: {
      src: '<%= output.scripts.directory %>/<%= output.scripts.filename %>.js',
      dest: '<%= output.scripts.directory %>/<%= output.scripts.filename %>.min.js'
    }
  };
};
