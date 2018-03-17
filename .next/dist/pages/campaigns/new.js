"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require("../../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Volumes/Photo_Drive/projects/Educational/kickstarter-ethereum-clone/pages/campaigns/new.js?entry";


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: "",
      errorMessage: "",
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ""
                });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                // Don't need gas because Metamask will automatically calculate

                console.log(_factory2.default);
                _context.next = 9;
                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                  from: accounts[0]
                });

              case 9:

                _routes.Router.pushRoute("/");
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errorMessage: _context.t0.message.toString().split("\n")[0]
                });

              case 15:

                _this.setState({
                  loading: false
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignNew, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, " Create a Campaign "), " ", " ", _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit,
        error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, " Minimum Contribution "), " ", _react2.default.createElement(_semanticUiReact.Input, { value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({
            minimumContribution: event.target.value
          });
        },
        label: "wei",
        labelPosition: "right", __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), " ", _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), " ", _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Create!"), " "), " ");
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRvU3RyaW5nIiwic3BsaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDTDs7OztBQUVGLEFBQ0UsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFDRSxBQUNBLEFBQ0s7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0osQTsyQkFBUSxBQUNlLEFBQ3JCO29CQUZNLEFBRVEsQUFDZDtlQUhNLEEsQUFHRztBQUhILEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSzsyQkFBUyxBQUNILEFBQ1Q7Z0NBTE8sQUFHVCxBQUFjLEFBRUU7QUFGRixBQUNaO2dDQUpPO2dDQUFBO3VCQVFnQixjQUFBLEFBQUssSUFSckIsQUFRZ0IsQUFBUzs7bUJBQTFCO0FBUkMsb0NBU1A7O0FBRUE7O3dCQVhPLEFBV1AsQUFBUSxBQUFJO2dDQVhMO3lDQVlELEFBQVEsUUFBUixBQUNILGVBQWUsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLHFCQUR2QixBQUVIO3dCQUNPLFNBZkgsQUFZRCxBQUVFLEFBQ0UsQUFBUztBQURYLEFBQ0osaUJBSEU7O21CQU1OOzsrQkFBQSxBQUFPLFVBbEJBLEFBa0JQLEFBQWlCO2dDQWxCVjtBQUFBOzttQkFBQTtnQ0FBQTtnREFvQlA7O3NCQUFBLEFBQUs7Z0NBQ1csWUFBQSxBQUFJLFFBQUosQUFBWSxXQUFaLEFBQXVCLE1BQXZCLEFBQTZCLE1BckJ0QyxBQW9CUCxBQUFjLEFBQ0UsQUFBbUM7QUFEckMsQUFDWjs7bUJBSUo7O3NCQUFBLEFBQUs7MkJBekJJLEFBeUJULEFBQWMsQUFDSDtBQURHLEFBQ1o7O21CQTFCTzttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7OzZCQThCRjttQkFDUDs7NkJBQVEsQUFDSjs7b0JBREk7c0JBQUEsQUFFTjtBQUZNO0FBQUEsT0FBQSxrQkFFTixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGTSxBQUVOLHdCQUZNLEtBT0YscUJBQUEsQUFDSix1Q0FBSyxVQUNDLEtBRkYsQUFFTyxBQUVQO2VBQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUpkLEFBSW9CO29CQUpwQjtzQkFBQSxBQU1BO0FBTkE7eUJBT0osY0FESSxzQkFBQSxBQUNDOztvQkFERDtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLDJCQUNpQyxxQkFBQSxBQUM3Qix3Q0FBTSxPQUNKLEtBQUEsQUFBSyxNQUZzQixBQUVoQixBQUViO2tCQUNFLHlCQUFBO3dCQUNFLEFBQUs7aUNBQ2tCLE1BQUEsQUFBTSxPQUYvQixBQUNFLEFBQWMsQUFDc0I7QUFEdEIsQUFDWixXQURGO0FBTnlCLEFBVTdCO2VBVjZCLEFBVXZCLEFBQ047dUJBWDZCLEFBV2Y7b0JBWGU7c0JBVG5DLEFBTUEsQUFHbUM7QUFBQTtXQWMxQixxQkFBQSxBQUNILDBDQUFRLE9BREwsTUFDVyxRQURYLEFBQ2tCLEFBQ3JCO2lCQUNFLEtBQUEsQUFBSyxNQUhKLEFBR1U7O29CQUhWO3NCQXZCVCxBQXVCUztBQUFBO1VBS0YscUJBQUEsQUFDYix5Q0FBTyxTQURNLE1BQ0UsU0FDRCxLQUFBLEFBQUssTUFGTixBQUVZO29CQUZaO3NCQUFBO0FBQUE7U0E1QlAsQUE0Qk8sWUFuQ0wsQUFPRixNQVBOLEFBQVEsQUE2Q2lEOzs7OztBQW5GbkMsQSxBQXNGMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1Bob3RvX0RyaXZlL3Byb2plY3RzL0VkdWNhdGlvbmFsL2tpY2tzdGFydGVyLWV0aGVyZXVtLWNsb25lIn0=