;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';

    var Test = require('./modules/test.js'),
        test = new Test();

    test.init();
}());

},{"./modules/test.js":2}],2:[function(require,module,exports){
'use strict';

function Test(options) {

}

Test.prototype = {
    init: function() {
        console.log('init');
    }
};

module.exports = Test;

},{}]},{},[1])
;