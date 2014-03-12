
module.exports = function () {
  'use strict';

  return {
    build: {
      src: 'assets/javascripts/main.js',
      dest: 'public/javascripts/main.js',

      options: {
        debug: true,
        alias: [
          'bower_components/jquery/dist/jquery.js:jquery'
        ],
        aliasMappings: [
          {
            cwd: 'assets/javascripts/modules',
            src: ['*.js', '**/*.js'],
            dest: 'modules'
          }
        ]
      }
    }
  };
};
