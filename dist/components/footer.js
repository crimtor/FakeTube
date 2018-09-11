"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "footer",
      { className: "footer" },
      _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "p",
          { className: "text-muted" },
          "\xA9 Beer Rate 2018 |",
          _react2.default.createElement(
            "a",
            { href: "/" },
            "Home"
          ),
          " |",
          _react2.default.createElement(
            "a",
            { href: "https://www.linkedin.com/in/shawn-fox-2233907/" },
            "LinkedIn"
          ),
          "|  ",
          _react2.default.createElement(
            "a",
            { href: "https://www.facebook.com/crimtor" },
            "Facebook"
          ),
          "|  ",
          _react2.default.createElement(
            "a",
            { href: "https://github.com/crimtor" },
            "GitHub"
          )
        )
      )
    )
  );
};

exports.default = Footer;