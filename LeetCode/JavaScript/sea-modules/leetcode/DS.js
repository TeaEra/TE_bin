define(function (require, exports, module) {

    var DS = {};

    module.exports = DS;

    DS.ListNode = function (val) {
        this.val = val;
        this.next = null;
    };

});