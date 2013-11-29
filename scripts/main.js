(function () {
    'use strict';

    var $ = require('../bower_components/jquery/jquery.js'),
        Test = require('./modules/test.js'),
        test = new Test();

    test.init();

    $(function () {
        $('body').append('<p>jQuery loaded</p>');
    });
}());
