'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApplicationContext = require('./ApplicationContext');

var _ApplicationContext2 = _interopRequireDefault(_ApplicationContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContextLoader = function () {
    function ContextLoader() {
        _classCallCheck(this, ContextLoader);

        this.applicationContext = _ApplicationContext2.default.current();
        this.binds = {};
    }

    _createClass(ContextLoader, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!this.instance) {
                this.instance = new ContextLoader();
            }
            return this.instance;
        }
    }]);

    return ContextLoader;
}();
//# sourceMappingURL=ContextLoader.js.map