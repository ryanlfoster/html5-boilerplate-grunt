
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

      src: 'assets/stylesheets/main.styl',
      dest: '<%= project.publicPath %>/stylesheets/main.css'
    }
  };
};
