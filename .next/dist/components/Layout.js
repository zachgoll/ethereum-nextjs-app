"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/Zach/Projects/Educational/ethereum-nextjs-app/components/Layout.js";

// Anything place in this component will be moved to Head element in HTML

exports.default = function (props) {
  return _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Kickstart")), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUdULEFBQU87Ozs7QUFDUCxBQUFPLEFBQVksQUFFbkI7Ozs7Ozs7O0FBSkE7O2tCQUllLGlCQUFTLEFBQ3RCO3lCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUE7U0FDRSxBQUNNLEFBQ0o7VUFGRixBQUVPOztnQkFGUDtrQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLHNCQUdGLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQU5KLEFBQ0UsQUFLRSxBQUVGLCtCQUFBLEFBQUM7O2dCQUFEO2tCQVJGLEFBUUUsQUFDQztBQUREO0FBQUEsWUFUSixBQUNFLEFBU1MsQUFHWjtBQWREIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvWmFjaC9Qcm9qZWN0cy9FZHVjYXRpb25hbC9ldGhlcmV1bS1uZXh0anMtYXBwIn0=