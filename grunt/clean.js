
'use strict';

module.exports = function () {
  return {
    compiled: [
      '<%= project.publicPath %>/stylesheets',
      '<%= project.publicPath %>/javascripts',
      '<%= project.publicPath %>/images',
      '<%= project.publicPath %>/fonts'
    ]
  };
};
