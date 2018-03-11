"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

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
  var provider = new _web2.default.providers.HttpProvider("https://ropsten.infura.io/zG3wXpq3gtehekEheZ17");

  web3 = new _web2.default(provider);
}

exports.default = web3;