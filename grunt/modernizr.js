
module.exports = function () {
  'use strict';

  return {
    build: {
      'devFile': 'bower_components/modernizr/modernizr.js',
      'outputFile': 'public/javascripts/modernizr.min.js',
      'uglify': true,
      'parseFiles': false,
      'matchCommunityTests': false,
      'customTests': [],

      'tests': [
        'touch',
        'svg',
        'history',
        'backgroundsize',
        'cssanimations',
        'csstransitions',
        'csstransforms',
        'csstransforms3d'
      ],

      'extra': {
        'shiv': true,
        'printshiv': false,
        'load': false,
        'mq': false,
        'cssclasses': true
      },

      'extensibility': {
        'addtest': false,
        'prefixed': true,
        'teststyles': true,
        'testprops': true,
        'testallprops': true,
        'hasevents': false,
        'prefixes': true,
        'domprefixes': true
      }
    }
  };
};
