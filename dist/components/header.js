"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "nav",
    { className: "navbar navbar-expand-lg sticky-top navbar-dark bg-primary" },
    _react2.default.createElement(
      "a",
      { className: "navbar-brand", href: "#" },
      "FakeTube"
    ),
    _react2.default.createElement(
      "button",
      { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" },
      _react2.default.createElement("span", { className: "navbar-toggler-icon" })
    ),
    _react2.default.createElement(
      "div",
      { className: "collapse navbar-collapse", id: "navbarNavDropdown" },
      _react2.default.createElement(
        "ul",
        { className: "navbar-nav ml-auto" },
        _react2.default.createElement(
          "li",
          { className: "nav-item active" },
          _react2.default.createElement(
            "a",
            { className: "nav-link", href: "#" },
            "Home ",
            _react2.default.createElement("span", { "class": "sr-only" })
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link", href: "http://www.shawntfox.com#about" },
            "About Me"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link", href: "https://www.shawntfox.com#resume" },
            "Back To STF.com"
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "nav-item" },
          _react2.default.createElement(
            "a",
            { className: "nav-link", href: "https://www.shawntfox.com/projects.html" },
            "Projects"
          )
        )
      )
    )
  );
};

exports.default = Header;