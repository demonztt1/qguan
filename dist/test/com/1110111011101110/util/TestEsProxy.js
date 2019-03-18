"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aopProxy = require("../../../../stc/com/1110111011101110/spring/util/AopProxy");

var A = function () {
    function A() {
        _classCallCheck(this, A);

        this.s = 0;
    }

    _createClass(A, [{
        key: "findId",
        value: function findId() {
            console;
            return this.s;
        }
    }, {
        key: "setId",
        value: function setId(wwww) {
            this.s = 100;
        }
    }]);

    return A;
}();

function www() {
    console.log("www");
}

var a = new A();
var proxy = new Proxy(a, {
    get: function get(trapTarget, key, receiver) {

        trapTarget.s = a;
        return Reflect.get(trapTarget, key, receiver);
    }
});

var Funs = function () {
    function Funs() {
        _classCallCheck(this, Funs);
    }

    _createClass(Funs, [{
        key: "before",
        value: function before() {
            console.log("before");
        }
    }, {
        key: "after",
        value: function after() {
            console.log("after");
        }
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

    return Funs;
}();

var funwws = new Funs();
funwws.after = function () {
    console.log("after111111");
};
funwws.before = function () {
    console.log("before11111");
};
var sw = aopProxy;
var aopFuns = {};
aopFuns['findId'] = funwws;
sw.aopFuns = aopFuns;

var aopProxyImpn = new Proxy(A, sw);
/*aopProxyImpn.addFuns( 'findId','after',www)*/
var sop = new aopProxyImpn();

var sopImpn = new Proxy(sop, sw);
sopImpn.setId('wwwwww');
console.log(sopImpn.findId());
//# sourceMappingURL=TestEsProxy.js.map