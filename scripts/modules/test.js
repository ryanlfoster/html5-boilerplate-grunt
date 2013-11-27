function Test(options) {
    this.init();
}

Test.prototype = {
    init: function() {
        console.log('init');
    }
};

module.exports = Test;