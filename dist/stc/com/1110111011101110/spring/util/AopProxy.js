"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AopFun = function () {
    function AopFun() {
        _classCallCheck(this, AopFun);
    }

    _createClass(AopFun, [{
        key: "before",
        value: function before() {}
    }, {
        key: "after",
        value: function after() {}
    }, {
        key: "afterReturning",
        value: function afterReturning() {}
    }, {
        key: "afterThrowing",
        value: function afterThrowing() {}
    }, {
        key: "around",
        value: function around() {}
    }]);

    return AopFun;
}();

var AopProxy = {
    findFuns: function findFuns(key) {
        var aopFun = this.aopFuns[key];
        if (null == aopFun) {
            return new AopFun();
        }
        return aopFun;
    },
    get: function get(trapTarget, key, receiver) {
        var fun = this.findFuns(key);
        fun.after();
        var res = Reflect.get(trapTarget, key, receiver);
        fun.before();
        return res;
    },
    set: function set(trapTarget, key, receiver) {
        var fun = this.findFuns(key);
        fun.after();
        var res = Reflect.set(trapTarget, key, receiver);
        fun.before();
        return res;
    },
    construct: function construct(trapTarget, argumentList) {

        var res = Reflect.construct(trapTarget, argumentList);
        return res;
    }
};

module.exports = AopProxy;
//# sourceMappingURL=AopProxy.js.map