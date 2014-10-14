
'use strict';

module.exports = function () {
  return {
    build: {
      src: '<%= project.publicPath %>/javascripts/main.js',
      dest: '<%= project.publicPath %>/javascripts/main.js.map'
    }
  };
};
