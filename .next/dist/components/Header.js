"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" } }, _react2.default.createElement(_routes.Link, { route: "/" }, _react2.default.createElement("a", { className: "item" }, "CrowdCoin")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right" }, _react2.default.createElement(_routes.Link, { route: "/" }, _react2.default.createElement("a", { className: "item" }, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new" }, _react2.default.createElement("a", { className: "item" }, "+"))));
};