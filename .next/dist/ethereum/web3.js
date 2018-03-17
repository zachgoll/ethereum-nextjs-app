"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

var _env = require("../env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

/**
 * A convenient way of checking whether we are in the browser
 * or on the server.
 *
 * In the node console, `typeof window` returns 'undefined'
 * In the browser, `typeof window` returns Object
 */
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and Metamask is installed and running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server or user not running Metamask
  var provider = new _web2.default.providers.HttpProvider(_env.infura);

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsImluZnVyYSIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBUyxBQUFULEFBQXVCLEFBQXZCOzs7O0FBRUEsSUFBSSxZQUFKOztBQUVBOzs7Ozs7O0FBT0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDdkU7QUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0Q7QUFIRCxPQUdPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixBQUNmLEFBRGUsQUFBakIsQUFJQTs7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1Bob3RvX0RyaXZlL3Byb2plY3RzL0VkdWNhdGlvbmFsL2tpY2tzdGFydGVyLWV0aGVyZXVtLWNsb25lIn0=