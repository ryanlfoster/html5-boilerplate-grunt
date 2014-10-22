
'use strict';

module.exports = function () {
  return {
    compiled: [
      '<%= output.styles.directory %>',
      '<%= output.scripts.directory %>',
      '<%= output.fonts.directory %>',
      '<%= output.images.directory %>'
    ]
  };
};
