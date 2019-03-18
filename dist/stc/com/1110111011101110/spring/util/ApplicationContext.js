"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationContext = function () {
    function ApplicationContext() {
        _classCallCheck(this, ApplicationContext);

        this.binds = {};
    }

    _createClass(ApplicationContext, [{
        key: "findBind",
        value: function findBind(bindName) {
            if (this.binds[bindName] == null) {
                throw new Error();
            }
            return this.binds[bindName];
        }
    }, {
        key: "addBind",
        value: function addBind(bindName, obj) {
            if (this.binds[bindName] != null) {
                throw new Error();
            }
            this.binds[bindName] = obj;
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new ApplicationContext();
            }
            return this.instance;
        }
    }]);

    return ApplicationContext;
}();

module.exports = ApplicationContext;
//# sourceMappingURL=ApplicationContext.js.map