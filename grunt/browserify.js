
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

      src: [
        'assets/javascripts/*.js',
        'assets/javascripts/**/*.js'
      ],

      dest: '<%= project.publicPath %>/javascripts/main.js'
    }
  };
};
