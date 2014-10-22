
'use strict';

module.exports = function () {
  return {
    compiled: [
      '<%= output.styles.directory %>',
      '<%= output.scripts.directory %>',
      '<%= project.publicPath %>/images',
      '<%= project.publicPath %>/fonts'
    ]
  };
};
