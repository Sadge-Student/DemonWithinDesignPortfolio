module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// client.js
const sanityClient = __webpack_require__(/*! @sanity/client */ "@sanity/client");

module.exports = sanityClient({
  projectId: "cosdlytw",
  dataset: "production",
  useCdn: true
});

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_twittericon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/twittericon.png */ "./public/static/twittericon.png");
/* harmony import */ var _public_static_twittericon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_twittericon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_githubicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/githubicon.png */ "./public/static/githubicon.png");
/* harmony import */ var _public_static_githubicon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_githubicon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_sanityicon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/sanityicon.png */ "./public/static/sanityicon.png");
/* harmony import */ var _public_static_sanityicon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_sanityicon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_static_reacticon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/static/reacticon.png */ "./public/static/reacticon.png");
/* harmony import */ var _public_static_reacticon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_static_reacticon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_static_nextjsicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/nextjsicon.png */ "./public/static/nextjsicon.png");
/* harmony import */ var _public_static_nextjsicon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_nextjsicon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_static_zeiticon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/static/zeiticon.png */ "./public/static/zeiticon.png");
/* harmony import */ var _public_static_zeiticon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_static_zeiticon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_footer_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/footer.module.css */ "./css/footer.module.css");
/* harmony import */ var _css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Footer = () => __jsx("div", {
  className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.BlenderProM,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.footer || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mylinks || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.follow || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "Follow us on:"), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Twitter Icon",
  src: _public_static_twittericon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.twittericon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://twitter.com/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}, "Twitter"))), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Twitter Icon",
  src: _public_static_githubicon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.twittericon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://github.com/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, "Github"))), __jsx("br", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
})), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.rlinks || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}, __jsx("a", {
  href: "/about",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}, "ABOUT"), __jsx("a", {
  href: "/posts",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, "BLOG"), __jsx("a", {
  href: "mailto:123@mail.com",
  target: "_top",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}, "CONTACT")), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.builtwith || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 7
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.bwith || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }
}, "Built with:"), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Sanity Icon",
  src: _public_static_sanityicon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://www.sanity.io/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 13
  }
}, "Sanity"))), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Twitter Icon",
  src: _public_static_reacticon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://reactjs.org/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 13
  }
}, "React"))), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Twitter Icon",
  src: _public_static_nextjsicon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://nextjs.org/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 13
  }
}, "Next.js"))), __jsx("div", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.link || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2085888330" + " " + (_css_footer_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.favicon || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 11
  }
}, __jsx("img", {
  alt: "Twitter Icon",
  src: _public_static_zeiticon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 13
  }
})), __jsx("a", {
  href: "https://zeit.co/",
  target: "_blank",
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2085888330",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 13
  }
}, "ZEIT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9naXRodWJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgU2FuaXR5TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZ1wiO1xyXG5pbXBvcnQgUmVhY3RMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmdcIjtcclxuaW1wb3J0IE5leHRqc0xvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvbmV4dGpzaWNvbi5wbmdcIjtcclxuaW1wb3J0IFplaXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZ1wiO1xyXG5pbXBvcnQgRnN0eWxlIGZyb20gXCIuLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLkJsZW5kZXJQcm9NfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5teWxpbmtzfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mb2xsb3d9PkZvbGxvdyB1cyBvbjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBJY29uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0ZzdHlsZS50d2l0dGVyaWNvbn1cclxuICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VHdpdHRlcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIEljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17RnN0eWxlLnR3aXR0ZXJpY29ufVxyXG4gICAgICAgICAgICAgIHNyYz17R2l0aHViTG9nb31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUucmxpbmtzfT5cclxuICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QUJPVVQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPkJMT0c8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoxMjNAbWFpbC5jb21cIiB0YXJnZXQ9XCJfdG9wXCI+XHJcbiAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuYnVpbHR3aXRofT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5id2l0aH0+QnVpbHQgd2l0aDo8L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTYW5pdHkgSWNvblwiIHNyYz17U2FuaXR5TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2FuaXR5LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5TYW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17UmVhY3RMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5SZWFjdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtOZXh0anNMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk5leHQuanM8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17WmVpdExvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vemVpdC5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+WkVJVDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\Footer.js */")));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/SlugLayout.js":
/*!**********************************!*\
  !*** ./components/SlugLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\SlugLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const SlugLayout = props => __jsx("div", {
  className: "jsx-2492088735" + " " + "Layout",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-2492088735" + " " + "Content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2492088735",
  __self: undefined
}, "body{margin:0;background-color:#000001;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxTbHVnTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QixBQUdrQixTQUNnQix5QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV3IGZvbGRlciAoNSlcXGNvbXBvbmVudHNcXFNsdWdMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgU2x1Z0xheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1Z0xheW91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\SlugLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (SlugLayout);

/***/ }),

/***/ "./css/footer.module.css":
/*!*******************************!*\
  !*** ./css/footer.module.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blenderproH": "footer_blenderproH__1NMNW",
	"BlenderProM": "footer_BlenderProM__1MsR3",
	"footer": "footer_footer__3ZN3s",
	"twittericon": "footer_twittericon__1xTd5",
	"link": "footer_link__3hsSK",
	"mylinks": "footer_mylinks__UUGor",
	"builtwith": "footer_builtwith__ObkRJ",
	"favicon": "footer_favicon__1lYq0",
	"rlinks": "footer_rlinks__i5zs9",
	"follow": "footer_follow__1twDj",
	"bwith": "footer_bwith__1XaW8"
};


/***/ }),

/***/ "./css/slug.module.css":
/*!*****************************!*\
  !*** ./css/slug.module.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blenderproH": "slug_blenderproH__1N4aq",
	"BlenderProM": "slug_BlenderProM__DEskF"
};


/***/ }),

/***/ "./lib/DraculaTheme.js":
/*!*****************************!*\
  !*** ./lib/DraculaTheme.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'code[class*="language-"]': {
    color: "#a9b7c6",
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    textAlign: "justify"
  },
  'pre[class*="language-"]': {
    color: "#a9b7c6",
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "hidden",
    background: "#171820"
  },
  'pre[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'pre[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  'code[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33,66,131,.85)"
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#2b2b2b",
    padding: ".1em",
    borderRadius: ".3em"
  },
  comment: {
    color: "#808080"
  },
  prolog: {
    color: "#808080"
  },
  cdata: {
    color: "#808080"
  },
  delimiter: {
    color: "#cc7832"
  },
  boolean: {
    color: "#cc7832"
  },
  keyword: {
    color: "#cc7832"
  },
  selector: {
    color: "#cc7832"
  },
  important: {
    color: "#cc7832"
  },
  atrule: {
    color: "#cc7832"
  },
  operator: {
    color: "#a9b7c6"
  },
  punctuation: {
    color: "#a9b7c6"
  },
  "attr-name": {
    color: "#a9b7c6"
  },
  tag: {
    color: "#e8bf6a"
  },
  "tag .punctuation": {
    color: "#e8bf6a"
  },
  doctype: {
    color: "#e8bf6a"
  },
  builtin: {
    color: "#e8bf6a"
  },
  entity: {
    color: "#6897bb"
  },
  number: {
    color: "#6897bb"
  },
  symbol: {
    color: "#6897bb"
  },
  property: {
    color: "#9876aa"
  },
  constant: {
    color: "#9876aa"
  },
  variable: {
    color: "#9876aa"
  },
  string: {
    color: "#6a8759"
  },
  char: {
    color: "#6a8759"
  },
  "attr-value": {
    color: "#a5c261"
  },
  "attr-value .punctuation": {
    color: "#a5c261"
  },
  "attr-value .punctuation:first-child": {
    color: "#a9b7c6"
  },
  url: {
    color: "#287bde",
    textDecoration: "underline"
  },
  function: {
    color: "#ffc66d"
  },
  regex: {
    background: "#364135"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  },
  inserted: {
    background: "#294436"
  },
  deleted: {
    background: "#484a4a"
  },
  "code.language-css .token.property": {
    color: "#a9b7c6"
  },
  "code.language-css .token.property + .token.punctuation": {
    color: "#a9b7c6"
  },
  "code.language-css .token.id": {
    color: "#ffc66d"
  },
  "code.language-css .token.selector > .token.class": {
    color: "#ffc66d"
  },
  "code.language-css .token.selector > .token.attribute": {
    color: "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    color: "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    color: "#ffc66d"
  }
};
exports.default = _default;

/***/ }),

/***/ "./lib/NightowlTheme.js":
/*!******************************!*\
  !*** ./lib/NightowlTheme.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*='language-'],\npre[class*='language-']": {
    color: "#a9b7c6",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none"
  },
  "pre[class*='language-']::-moz-selection,\npre[class*='language-'] ::-moz-selection,\ncode[class*='language-']::-moz-selection,\ncode[class*='language-'] ::-moz-selection": {
    textShadow: "none",
    background: "#2b2b2b"
  },
  "pre[class*='language-']::selection,\npre[class*='language-'] ::selection,\ncode[class*='language-']::selection,\ncode[class*='language-'] ::selection": {
    textShadow: "none",
    background: "#2b2b2b"
  },
  "@media print": {
    "code[class*='language-'],\n  pre[class*='language-']": {
      textShadow: "none"
    }
  },
  pre: {
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto"
  },
  ":not(pre) > code,\npre": {
    color: "rgba(33, 66, 131, 0.85)",
    background: "rgba(33, 66, 131, 0.85)"
  },
  ":not(pre) > code": {
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal"
  },
  comment: {
    color: "rgb(99, 119, 119)",
    fontStyle: "italic"
  },
  prolog: {
    color: "rgb(99, 119, 119)",
    fontStyle: "italic"
  },
  cdata: {
    color: "rgb(99, 119, 119)",
    fontStyle: "italic"
  },
  punctuation: {
    color: "rgb(199, 146, 234)"
  },
  ".namespace": {
    color: "rgb(178, 204, 214)"
  },
  deleted: {
    color: "rgba(239, 83, 80, 0.56)",
    fontStyle: "italic"
  },
  property: {
    color: "rgb(128, 203, 196)"
  },
  symbol: {
    color: "rgb(128, 203, 196)"
  },
  keyword: {
    color: "rgb(127, 219, 202)"
  },
  tag: {
    color: "rgb(127, 219, 202)"
  },
  operator: {
    color: "rgb(127, 219, 202)"
  },
  boolean: {
    color: "rgb(255, 88, 116)"
  },
  number: {
    color: "rgb(247, 140, 108)"
  },
  char: {
    color: "rgb(130, 170, 255)"
  },
  builtin: {
    color: "rgb(130, 170, 255)"
  },
  function: {
    color: "rgb(130, 170, 255)"
  },
  constant: {
    color: "rgb(130, 170, 255)"
  },
  doctype: {
    color: "rgb(199, 146, 234)",
    fontStyle: "italic"
  },
  selector: {
    color: "rgb(199, 146, 234)",
    fontStyle: "italic"
  },
  inserted: {
    color: "rgb(173, 219, 103)",
    fontStyle: "italic"
  },
  "attr-name": {
    color: "rgb(173, 219, 103)",
    fontStyle: "italic"
  },
  string: {
    color: "rgb(173, 219, 103)"
  },
  url: {
    color: "rgb(173, 219, 103)"
  },
  entity: {
    color: "rgb(173, 219, 103)"
  },
  ".language-css .token.string": {
    color: "rgb(173, 219, 103)"
  },
  ".token.string": {
    color: "rgb(173, 219, 103)"
  },
  ".style .token.string": {
    color: "rgb(173, 219, 103)"
  },
  "class-name": {
    color: "rgb(255, 203, 139)"
  },
  atrule: {
    color: "rgb(255, 203, 139)"
  },
  "attr-value": {
    color: "rgb(255, 203, 139)"
  },
  regex: {
    color: "rgb(214, 222, 235)"
  },
  important: {
    color: "rgb(214, 222, 235)",
    fontWeight: "bold"
  },
  variable: {
    color: "rgb(214, 222, 235)"
  },
  bold: {
    fontWeight: "bold"
  },
  italic: {
    fontStyle: "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! groq */ "groq");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/block-content-to-react */ "@sanity/block-content-to-react");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-twitter-embed */ "react-twitter-embed");
/* harmony import */ var react_twitter_embed__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SlugLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SlugLayout */ "./components/SlugLayout.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_slug_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/slug.module.css */ "./css/slug.module.css");
/* harmony import */ var _css_slug_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_slug_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/NightowlTheme */ "./lib/NightowlTheme.js");
/* harmony import */ var _lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/DraculaTheme */ "./lib/DraculaTheme.js");
/* harmony import */ var _lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// [slug].js









 // import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula';




const defaultBlockSerializer = _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a.defaultSerializers.types.block;
const serializers = {
  types: {
    code: props => __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__["Prism"], {
      className: "styledcode",
      language: props.node.language,
      style: _lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, props.node.code),
    youtube: props => __jsx("div", {
      className: "youtubebg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx("iframe", {
      frameBorder: "0",
      vspace: "0",
      hspace: "0",
      marginWidth: "0",
      marginHeight: "0",
      align: "middle",
      samesite: "None",
      className: "youtube-embed",
      src: props.node.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    })),
    codepen: props => __jsx("iframe", {
      frameBorder: "0",
      vspace: "0",
      hspace: "0",
      marginWidth: "0",
      marginHeight: "0",
      align: "middle",
      samesite: "None",
      className: "codepen-embed",
      src: props.node.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }),
    twitterTweetEmbed: props => __jsx("div", {
      className: "twitter-embed",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__["TwitterTweetEmbed"], {
      tweetId: props.node.tweetId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    })),
    block: props => {
      // Add anchors for H2's
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_13__["includes"])(["h2"], props.node.style)) {
        return __jsx(props.node.style, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, __jsx("a", {
          id: props.children,
          href: `#` + props.children,
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "jsx-1709162960" + " " + "subheading",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }
        }, __jsx("span", {
          className: "jsx-1709162960" + " " + "underline",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 17
          }
        }, __jsx("span", {
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 19
          }
        }, props.children))), __jsx("svg", {
          viewBox: "0 0 24 24",
          className: "jsx-1709162960" + " " + "linkicon",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }
        }, __jsx("path", {
          fill: "#FFFFFF",
          d: "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "1709162960",
          __self: undefined
        }, ".linkicon.jsx-1709162960{width:26px;height:100%;margin-left:0px;top:3px;position:relative;}.linkicon.jsx-1709162960 path.jsx-1709162960{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZ3QixBQUc0QixBQVFDLFdBUEEsQ0FRZCxXQVBrQixnQkFDUixRQUNVLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBjb2RlcGVuOiAocHJvcHMpID0+IChcclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2RlcGVuLWVtYmVkXCJcclxuICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICA+PC9pZnJhbWU+XHJcbiAgICApLFxyXG5cclxuICAgIHR3aXR0ZXJUd2VldEVtYmVkOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLWVtYmVkXCI+XHJcbiAgICAgICAgPFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e3Byb3BzLm5vZGUudHdlZXRJZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGJsb2NrOiAocHJvcHMpID0+IHtcclxuICAgICAgLy8gQWRkIGFuY2hvcnMgZm9yIEgyJ3NcclxuICAgICAgaWYgKGxvZGFzaEluY2x1ZGVzKFtcImgyXCJdLCBwcm9wcy5ub2RlLnN0eWxlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICAgICAgPGEgaWQ9e3Byb3BzLmNoaWxkcmVufSBocmVmPXtgI2AgKyBwcm9wcy5jaGlsZHJlbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxpbmtpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwLjU5LDEzLjQxQzExLDEzLjggMTEsMTQuNDQgMTAuNTksMTQuODNDMTAuMiwxNS4yMiA5LjU2LDE1LjIyIDkuMTcsMTQuODNDNy4yMiwxMi44OCA3LjIyLDkuNzEgOS4xNyw3Ljc2VjcuNzZMMTIuNzEsNC4yMkMxNC42NiwyLjI3IDE3LjgzLDIuMjcgMTkuNzgsNC4yMkMyMS43Myw2LjE3IDIxLjczLDkuMzQgMTkuNzgsMTEuMjlMMTguMjksMTIuNzhDMTguMywxMS45NiAxOC4xNywxMS4xNCAxNy44OSwxMC4zNkwxOC4zNiw5Ljg4QzE5LjU0LDguNzEgMTkuNTQsNi44MSAxOC4zNiw1LjY0QzE3LjE5LDQuNDYgMTUuMjksNC40NiAxNC4xMiw1LjY0TDEwLjU5LDkuMTdDOS40MSwxMC4zNCA5LjQxLDEyLjI0IDEwLjU5LDEzLjQxTTEzLjQxLDkuMTdDMTMuOCw4Ljc4IDE0LjQ0LDguNzggMTQuODMsOS4xN0MxNi43OCwxMS4xMiAxNi43OCwxNC4yOSAxNC44MywxNi4yNFYxNi4yNEwxMS4yOSwxOS43OEM5LjM0LDIxLjczIDYuMTcsMjEuNzMgNC4yMiwxOS43OEMyLjI3LDE3LjgzIDIuMjcsMTQuNjYgNC4yMiwxMi43MUw1LjcxLDExLjIyQzUuNywxMi4wNCA1LjgzLDEyLjg2IDYuMTEsMTMuNjVMNS42NCwxNC4xMkM0LjQ2LDE1LjI5IDQuNDYsMTcuMTkgNS42NCwxOC4zNkM2LjgxLDE5LjU0IDguNzEsMTkuNTQgOS44OCwxOC4zNkwxMy40MSwxNC44M0MxNC41OSwxMy42NiAxNC41OSwxMS43NiAxMy40MSwxMC41OUMxMywxMC4yIDEzLDkuNTYgMTMuNDEsOS4xN1pcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9wcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIocHJvcHMpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIiwgbWFpbkltYWdlLCBib2R5ID0gW10gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICBibG9ja3M9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDMwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA3MDAsIGg6IDgwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnNlY3Rpb25cIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS80Wmp4VVVoLmpwZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlbil9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9TbHVnTGF5b3V0PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGYxMztcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uICsgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgcmdiKDI1NSwgMTAwLCAyMDUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMTI4LCAxMjgsIDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDhweCAwcHggMHB4OyAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgICAgLyogcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci10b3A6IDhweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICBib3R0b206IDdweDtcclxuICAgICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC42MSkgMHB4IDBweCAwcHggMnB4OyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzLCAyNCwgMzIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUtY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAvKiBBZGRpbmcgOmdsb2JhbCBjYW4gdGFyZ2V0IHRoYXQgZWxlbWVudCBpbnNpZGUgdGhlIGJsb2NrY29udGVudCBkaXYgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aWRlc2NyZWVuIHF1ZXJ5ICovXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBuZW9uIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5lb24ge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCA0MHB4ICMyMjhkZmYsIDAgMCA3MHB4ICMyMjhkZmYsIDAgMCA4MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDEwMHB4ICMyMjhkZmYsIDAgMCAxNTBweCAjMjI4ZGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMTVweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCAyMHB4ICMyMjhkZmYsIDAgMCAzNXB4ICMyMjhkZmYsIDAgMCA0MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDUwcHggIzIyOGRmZiwgMCAwIDc1cHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJoZWFkaW5nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhOm5vdCg6aG92ZXIpLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTRweCAycHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSA0cHggMnB4LCByZ2IoMCwgMCwgMCkgLTRweCAzcHgsIHJnYigwLCAwLCAwKSA0cHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTNweCAzcHgsIHJnYigwLCAwLCAwKSAzcHggM3B4LCByZ2IoMCwgMCwgMCkgLTJweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAycHggM3B4LCByZ2IoMCwgMCwgMCkgLTFweCAzcHgsIHJnYigwLCAwLCAwKSAxcHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMHB4IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtM3B4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDNweCAxcHgsIHJnYigwLCAwLCAwKSAtMnB4IDFweCwgcmdiKDAsIDAsIDApIDJweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtMXB4IDFweCwgcmdiKDAsIDAsIDApIDFweCAxcHgsIHJnYigwLCAwLCAwKSAwcHggMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYTpob3ZlciAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyMjUsIDI1NSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEzOSwgMjMzLCAyNTMpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHVsLFxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3R5bGVkY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlYmcge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzE4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZXBlbi1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdpdHRlci1lbWJlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDI6aG92ZXIgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwiYWJvdXRcIl1bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT4sXHJcbiAgYm9keSxcclxufWA7XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\about.js */"));
      }

      return defaultBlockSerializer(props);
    }
  }
};

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_7___default.a).image(source);
}

const About = props => {
  const {
    title = "Missing title",
    mainImage,
    body = []
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1606037729",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, title)), __jsx(_components_SlugLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("article", {
    className: "jsx-1606037729" + " " + "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1606037729" + " " + "Lsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1606037729" + " " + "main-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1606037729" + " " + "post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1606037729" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `${mainImage.url}`,
    className: "jsx-1606037729" + " " + "postimage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("h1", {
    className: "jsx-1606037729" + " " + "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "About Us")), __jsx("div", {
    className: "jsx-1606037729" + " " + "block-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    className: "postbody",
    blocks: body // imageOptions={{ w: 500, h: 300, fit: "max" }}
    ,
    imageOptions: {
      w: 700,
      h: 800,
      fit: "max"
    },
    serializers: serializers
  }, _client__WEBPACK_IMPORTED_MODULE_7___default.a.config(), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "jsx-1606037729" + " " + "Rsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1606037729" + " " + "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1899347810",
    __self: undefined
  }, "*.jsx-1606037729{margin:0;padding:0;}h1.jsx-1606037729{color:white;font-size:64px;position:absolute;bottom:60px;left:28px;}.article.jsx-1606037729{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.container.jsx-1606037729{position:relative;text-align:center;color:white;}.main-content.jsx-1606037729{max-width:50%;background-color:#0e0f13;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.Lsection.jsx-1606037729{height:100%;width:10%;}.Rsection.jsx-1606037729{height:100%;width:10%;}.menu.jsx-1606037729{color:white;position:fixed;}.Rsection.jsx-1606037729 img.jsx-1606037729{width:300px;height:auto;position:fixed;top:10%;}.Lsection.jsx-1606037729+.Lsection.jsx-1606037729{margin-left:2%;}.post.jsx-1606037729{margin:1rem;}.postimage.jsx-1606037729{width:100%;height:30em;margin-bottom:1rem;}.header-content.jsx-1606037729{-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;background-image:linear-gradient( to right, rgb(255,100,205) 0%, rgb(128,128,255) 50%, rgb(0,255,225) 100% );padding:2em;color:white;display:inline-block;margin-bottom:1rem;}.header-content.jsx-1606037729:before{content:\"\";position:absolute;top:7px;right:7px;bottom:7px;left:7px;background:rgb(23,24,32);}.published.jsx-1606037729{margin:1rem;font-size:16px;}.title-content.jsx-1606037729{position:relative;}.title.jsx-1606037729{font-size:52px;font-weight:normal;margin-bottom:1rem;}.block-content.jsx-1606037729{height:auto;width:auto;}@media only screen and (max-width:1024px){.title.jsx-1606037729{font-size:32px;}.main-content.jsx-1606037729{width:100%;max-width:100%;margin-left:10%;margin-right:0%;}.Rsection.jsx-1606037729{display:none;}.header-content.jsx-1606037729{width:92%;}.post-image.jsx-1606037729{width:100%;}}@media only screen and (max-width:768px){.title.jsx-1606037729{font-size:32px;}.main-content.jsx-1606037729{width:100%;max-width:100%;margin-left:0%;margin-right:10%;}.Lsection.jsx-1606037729{display:none;}.postimage.jsx-1606037729{height:15em;width:100%;}.header-content.jsx-1606037729{width:90%;}}@media only screen and (max-width:425px){*.jsx-1606037729{margin:0;padding:0;}.header-content.jsx-1606037729{width:84%;}.post.jsx-1606037729{margin:0.5rem;margin-right:3.5rem;}.main-content.jsx-1606037729{width:100%;max-width:100%;margin-left:0;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0prQixBQUdvQixBQUtHLEFBUUMsQUFJSyxBQU1KLEFBTUYsQUFLQSxBQUtBLEFBS0EsQUFPRyxBQUlILEFBSUQsQUFNYSxBQXNCYixBQVdDLEFBS00sQUFJSCxBQU1ILEFBYUssQUFJSixBQU9FLEFBSUgsQUFJQyxBQU1JLEFBSUosQUFPRSxBQUlELEFBS0YsQUFNRCxBQUtDLEFBSUksQUFLSCxTQTlMSCxBQWlMRSxDQXBDWixBQThCQSxBQVdBLENBM0hZLEFBNEJNLEFBMkNELEFBZWpCLEFBVWlCLEFBb0NBLENBMUxGLEFBd0JMLEFBS0EsQUFLSyxBQUtILEFBV2QsQUEyQ2lCLEFBZUosQUFxREUsQ0E3QmIsQUF5QkEsQ0EzSXlCLEFBbUtILENBdkl4QixBQXdEcUIsQUFtQm5CLEFBeUJBLEdBdElrQixBQXNGcEIsQ0F0R0EsQUFpTEUsR0FwSkYsQUFLQSxDQXlCcUIsQUFzRHJCLEFBcURFLENBMUhlLEFBb0JRLEVBa0VMLEFBeUJELEFBb0NELENBMUxFLEFBa0NwQixBQTJEQSxFQVhVLEtBb0JXLEFBK0VuQixFQXpLWSxDQXVFRixFQWpFRSxBQXNCSixDQW1KUyxDQXBDRSxDQWhHckIsQUF1RW9CLEdBN0hOLEVBd0NkLEFBMkNhLENBdkViLEtBMEZBLEVBcUZFLEVBMUxVLENBbUZELEFBMENULEFBeUJBLFNBckpGLEFBb0Y2QixPQWhGN0Isa0JBaUZBLGtCQXJFQSxhQXlDb0Isa0JBTWpCLDZHQUVXLFlBTUEsWUFDUyxxQkFDRixtQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV3IGZvbGRlciAoNSlcXHBhZ2VzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XHJcbmltcG9ydCB7IFR3aXR0ZXJUd2VldEVtYmVkIH0gZnJvbSBcInJlYWN0LXR3aXR0ZXItZW1iZWRcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBTbHVnTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NsdWdMYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jc3Mvc2x1Zy5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBpbXBvcnQgdGhlbWUgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbS9kYXJjdWxhJztcclxuaW1wb3J0IENvZGVUaGVtZSBmcm9tIFwiLi4vbGliL05pZ2h0b3dsVGhlbWVcIjtcclxuaW1wb3J0IENvZGVUaGVtZTEgZnJvbSBcIi4uL2xpYi9EcmFjdWxhVGhlbWVcIjtcclxuaW1wb3J0IHsgaW5jbHVkZXMgYXMgbG9kYXNoSW5jbHVkZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0QmxvY2tTZXJpYWxpemVyID0gQmxvY2tDb250ZW50LmRlZmF1bHRTZXJpYWxpemVycy50eXBlcy5ibG9jaztcclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBjb2RlOiAocHJvcHMpID0+IChcclxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3R5bGVkY29kZVwiXHJcbiAgICAgICAgbGFuZ3VhZ2U9e3Byb3BzLm5vZGUubGFuZ3VhZ2V9XHJcbiAgICAgICAgc3R5bGU9e0NvZGVUaGVtZTF9XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMubm9kZS5jb2RlfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG4gICAgKSxcclxuICAgIHlvdXR1YmU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlvdXR1YmViZ1wiPlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInlvdXR1YmUtZW1iZWRcIlxyXG4gICAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsKX0gIHRoaXMgc2hvd3MgYWxsIHRoZSBpbmZvICovfVxyXG4gICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgY29kZXBlbjogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29kZXBlbi1lbWJlZFwiXHJcbiAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgPjwvaWZyYW1lPlxyXG4gICAgKSxcclxuXHJcbiAgICB0d2l0dGVyVHdlZXRFbWJlZDogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlci1lbWJlZFwiPlxyXG4gICAgICAgIDxUd2l0dGVyVHdlZXRFbWJlZCB0d2VldElkPXtwcm9wcy5ub2RlLnR3ZWV0SWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBibG9jazogKHByb3BzKSA9PiB7XHJcbiAgICAgIC8vIEFkZCBhbmNob3JzIGZvciBIMidzXHJcbiAgICAgIGlmIChsb2Rhc2hJbmNsdWRlcyhbXCJoMlwiXSwgcHJvcHMubm9kZS5zdHlsZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHByb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgICAgIDxhIGlkPXtwcm9wcy5jaGlsZHJlbn0gaHJlZj17YCNgICsgcHJvcHMuY2hpbGRyZW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsaW5raWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMC41OSwxMy40MUMxMSwxMy44IDExLDE0LjQ0IDEwLjU5LDE0LjgzQzEwLjIsMTUuMjIgOS41NiwxNS4yMiA5LjE3LDE0LjgzQzcuMjIsMTIuODggNy4yMiw5LjcxIDkuMTcsNy43NlY3Ljc2TDEyLjcxLDQuMjJDMTQuNjYsMi4yNyAxNy44MywyLjI3IDE5Ljc4LDQuMjJDMjEuNzMsNi4xNyAyMS43Myw5LjM0IDE5Ljc4LDExLjI5TDE4LjI5LDEyLjc4QzE4LjMsMTEuOTYgMTguMTcsMTEuMTQgMTcuODksMTAuMzZMMTguMzYsOS44OEMxOS41NCw4LjcxIDE5LjU0LDYuODEgMTguMzYsNS42NEMxNy4xOSw0LjQ2IDE1LjI5LDQuNDYgMTQuMTIsNS42NEwxMC41OSw5LjE3QzkuNDEsMTAuMzQgOS40MSwxMi4yNCAxMC41OSwxMy40MU0xMy40MSw5LjE3QzEzLjgsOC43OCAxNC40NCw4Ljc4IDE0LjgzLDkuMTdDMTYuNzgsMTEuMTIgMTYuNzgsMTQuMjkgMTQuODMsMTYuMjRWMTYuMjRMMTEuMjksMTkuNzhDOS4zNCwyMS43MyA2LjE3LDIxLjczIDQuMjIsMTkuNzhDMi4yNywxNy44MyAyLjI3LDE0LjY2IDQuMjIsMTIuNzFMNS43MSwxMS4yMkM1LjcsMTIuMDQgNS44MywxMi44NiA2LjExLDEzLjY1TDUuNjQsMTQuMTJDNC40NiwxNS4yOSA0LjQ2LDE3LjE5IDUuNjQsMTguMzZDNi44MSwxOS41NCA4LjcxLDE5LjU0IDkuODgsMTguMzZMMTMuNDEsMTQuODNDMTQuNTksMTMuNjYgMTQuNTksMTEuNzYgMTMuNDEsMTAuNTlDMTMsMTAuMiAxMyw5LjU2IDEzLjQxLDkuMTdaXCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvcHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZWZhdWx0QmxvY2tTZXJpYWxpemVyKHByb3BzKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsIG1haW5JbWFnZSwgYm9keSA9IFtdIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTbHVnTGF5b3V0PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTHNlY3Rpb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RpbWFnZVwiIHNyYz17YCR7bWFpbkltYWdlLnVybH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFib3V0XCI+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3Rib2R5XCJcclxuICAgICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogNTAwLCBoOiAzMDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogNzAwLCBoOiA4MDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xheW91dD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vNFpqeFVVaC5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2cocHJvcHMuY2hpbGRyZW4pfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvU2x1Z0xheW91dD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAyOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFydGljbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBmMTM7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiArIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgIHJnYigyNTUsIDEwMCwgMjA1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDEyOCwgMTI4LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCA4cHggMHB4IDBweDsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiA4cHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuNjEpIDBweCAwcHggMHB4IDJweDsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMywgMjQsIDMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wdWJsaXNoZWQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCA6Z2xvYmFsKGltZykge1xyXG4gICAgICAgIH1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgLyogQWRkaW5nIDpnbG9iYWwgY2FuIHRhcmdldCB0aGF0IGVsZW1lbnQgaW5zaWRlIHRoZSBibG9ja2NvbnRlbnQgZGl2ICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2lkZXNjcmVlbiBxdWVyeSAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0LWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCLigKJcIjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbmVvbiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBuZW9uIHtcclxuICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgNDBweCAjMjI4ZGZmLCAwIDAgNzBweCAjMjI4ZGZmLCAwIDAgODBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCAxMDBweCAjMjI4ZGZmLCAwIDAgMTUwcHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE1cHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgMjBweCAjMjI4ZGZmLCAwIDAgMzVweCAjMjI4ZGZmLCAwIDAgNDBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCA1MHB4ICMyMjhkZmYsIDAgMCA3NXB4ICMyMjhkZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYTpub3QoOmhvdmVyKS51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC00cHggMnB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgNHB4IDJweCwgcmdiKDAsIDAsIDApIC00cHggM3B4LCByZ2IoMCwgMCwgMCkgNHB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0zcHggM3B4LCByZ2IoMCwgMCwgMCkgM3B4IDNweCwgcmdiKDAsIDAsIDApIC0ycHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMnB4IDNweCwgcmdiKDAsIDAsIDApIC0xcHggM3B4LCByZ2IoMCwgMCwgMCkgMXB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDBweCAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAzMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTNweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAzcHggMXB4LCByZ2IoMCwgMCwgMCkgLTJweCAxcHgsIHJnYigwLCAwLCAwKSAycHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTFweCAxcHgsIHJnYigwLCAwLCAwKSAxcHggMXB4LCByZ2IoMCwgMCwgMCkgMHB4IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGE6aG92ZXIgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIGxlZnQsXHJcbiAgICAgICAgICAgIHJnYigwLCAyNTUsIDIyNSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyNTUsIDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjI1LCAyNTUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMzksIDIzMywgMjUzKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UgMHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB1bCxcclxuICAgICAgICAuYmxvY2stY29udGVudCBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0eWxlZGNvZGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZWJnIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTcxODIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGVwZW4tZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnR3aXR0ZXItZW1iZWQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyOmhvdmVyIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcImFib3V0XCJdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIFwibWFpbkltYWdlXCI6IG1haW5JbWFnZS5hc3NldC0+LFxyXG4gIGJvZHksXHJcbn1gO1xyXG5cclxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\about.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "967543850",
    __self: undefined
  }, "body{margin:0;background-color:#000001;font-family:\"BlenderProMedium\",sans-serif;}img{height:100%;position:relative;}li{list-style:none;}li:before{content:\"\u2022\";-webkit-animation:neon 1.5s ease-in-out infinite alternate;animation:neon 1.5s ease-in-out infinite alternate;color:#ffffff;margin:5px;}@-webkit-keyframes neon{from{text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 30px #fff, 0 0 40px #228dff,0 0 70px #228dff,0 0 80px #228dff, 0 0 100px #228dff,0 0 150px #228dff;}to{text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff, 0 0 20px #228dff,0 0 35px #228dff,0 0 40px #228dff, 0 0 50px #228dff,0 0 75px #228dff;}}.subheading{display:inline;}.block-content{color:white;margin:1rem;}.block-content h2{font-size:32px;margin:0;display:inline;}.block-content h2 a{color:rgba(255,255,255,1);-webkit-text-decoration:none;text-decoration:none;}.block-content h2 a:not(:hover) .underline{background:none;}.block-content h2 a .underline{text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -4px 2px, rgb(0,0,0) 4px 2px,rgb(0,0,0) -4px 3px,rgb(0,0,0) 4px 3px, rgb(0,0,0) -3px 3px,rgb(0,0,0) 3px 3px,rgb(0,0,0) -2px 3px, rgb(0,0,0) 2px 3px,rgb(0,0,0) -1px 3px,rgb(0,0,0) 1px 3px, rgb(0,0,0) 0px 3px;background-position:0% 32px;}.block-content a .underline{position:relative;text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -3px 1px, rgb(0,0,0) 3px 1px,rgb(0,0,0) -2px 1px,rgb(0,0,0) 2px 1px, rgb(0,0,0) -1px 1px,rgb(0,0,0) 1px 1px,rgb(0,0,0) 0px 1px;background-image:linear-gradient( rgba(255,255,255,0.25), rgba(255,255,255,0.25) );background-size:100% 2px;background-position:0% 21px;background-repeat:no-repeat;}.block-content a:hover .underline{background-image:linear-gradient( to left, rgb(0,255,225) 0%, rgb(0,255,255) 50%, rgb(0,225,255) 100% );}.block-content a{position:relative;color:rgb(139,233,253);-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 250ms ease 0s;transition:color 250ms ease 0s;}.block-content p{color:rgba(255,255,255,0.7);font-size:18px;}.block-content ul,.block-content li{font-size:16px;color:rgba(255,255,255,0.7);}.styledcode{margin:1em;}.youtubebg{padding:2rem;background:#171820;}.youtube-embed{width:100%;height:650px;}.codepen-embed{width:100%;height:650px;}.twitter-embed{margin-left:17%;}.block-content h2:hover .linkicon path{opacity:1;}@media only screen and (max-width:768px){img{width:100%;}}@media only screen and (max-width:1024px){img{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVd5QixBQUdvQixBQU9HLEFBS0ksQUFJSixBQVM0QixBQUtGLEFBS3ZCLEFBSUgsQUFLRyxBQU1jLEFBS2IsQUFTTSxBQUtKLEFBb0JqQixBQUdpQixBQU9hLEFBTWhCLEFBS0osQUFJRSxBQUtGLEFBS0EsQUFLSyxBQUlOLEFBS0csQUFNQSxTQS9JWSxDQXFJM0IsQ0F2QkEsQUFTZSxBQUtBLEFBY2IsQUFNQSxDQXpJa0IsQUFTaUMsQUF1QnZDLENBMkVPLEVBL0VyQixBQVNXLEFBNkRzQixDQTdGakMsQUEyQ0EsQUEwRUEsRUF6RHFFLEFBb0IxQyxNQXBEM0IsQUFLaUIsQUEyRWpCLEFBS0EsRUEzRXVCLEVBaUROLEVBM0ZqQixFQTJHQSxFQWxINkMsS0E2QzdDLEVBK0N1QixFQU92QixBQU1BLGlDQXhHQSxBQWlEQSxlQTJDaUMsYUFMakMsa0JBeEVnQixjQUNILElBWVgsR0FMQSxJQU5GLGNBNEVBLHNGQW5CRyw4REFaMkIscUJBYUgsT0FaM0Isa0JBYThCLDRCQUNBLDRCQUM5QiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBjb2RlcGVuOiAocHJvcHMpID0+IChcclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2RlcGVuLWVtYmVkXCJcclxuICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICA+PC9pZnJhbWU+XHJcbiAgICApLFxyXG5cclxuICAgIHR3aXR0ZXJUd2VldEVtYmVkOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLWVtYmVkXCI+XHJcbiAgICAgICAgPFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e3Byb3BzLm5vZGUudHdlZXRJZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGJsb2NrOiAocHJvcHMpID0+IHtcclxuICAgICAgLy8gQWRkIGFuY2hvcnMgZm9yIEgyJ3NcclxuICAgICAgaWYgKGxvZGFzaEluY2x1ZGVzKFtcImgyXCJdLCBwcm9wcy5ub2RlLnN0eWxlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICAgICAgPGEgaWQ9e3Byb3BzLmNoaWxkcmVufSBocmVmPXtgI2AgKyBwcm9wcy5jaGlsZHJlbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxpbmtpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwLjU5LDEzLjQxQzExLDEzLjggMTEsMTQuNDQgMTAuNTksMTQuODNDMTAuMiwxNS4yMiA5LjU2LDE1LjIyIDkuMTcsMTQuODNDNy4yMiwxMi44OCA3LjIyLDkuNzEgOS4xNyw3Ljc2VjcuNzZMMTIuNzEsNC4yMkMxNC42NiwyLjI3IDE3LjgzLDIuMjcgMTkuNzgsNC4yMkMyMS43Myw2LjE3IDIxLjczLDkuMzQgMTkuNzgsMTEuMjlMMTguMjksMTIuNzhDMTguMywxMS45NiAxOC4xNywxMS4xNCAxNy44OSwxMC4zNkwxOC4zNiw5Ljg4QzE5LjU0LDguNzEgMTkuNTQsNi44MSAxOC4zNiw1LjY0QzE3LjE5LDQuNDYgMTUuMjksNC40NiAxNC4xMiw1LjY0TDEwLjU5LDkuMTdDOS40MSwxMC4zNCA5LjQxLDEyLjI0IDEwLjU5LDEzLjQxTTEzLjQxLDkuMTdDMTMuOCw4Ljc4IDE0LjQ0LDguNzggMTQuODMsOS4xN0MxNi43OCwxMS4xMiAxNi43OCwxNC4yOSAxNC44MywxNi4yNFYxNi4yNEwxMS4yOSwxOS43OEM5LjM0LDIxLjczIDYuMTcsMjEuNzMgNC4yMiwxOS43OEMyLjI3LDE3LjgzIDIuMjcsMTQuNjYgNC4yMiwxMi43MUw1LjcxLDExLjIyQzUuNywxMi4wNCA1LjgzLDEyLjg2IDYuMTEsMTMuNjVMNS42NCwxNC4xMkM0LjQ2LDE1LjI5IDQuNDYsMTcuMTkgNS42NCwxOC4zNkM2LjgxLDE5LjU0IDguNzEsMTkuNTQgOS44OCwxOC4zNkwxMy40MSwxNC44M0MxNC41OSwxMy42NiAxNC41OSwxMS43NiAxMy40MSwxMC41OUMxMywxMC4yIDEzLDkuNTYgMTMuNDEsOS4xN1pcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9wcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIocHJvcHMpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIiwgbWFpbkltYWdlLCBib2R5ID0gW10gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICBibG9ja3M9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDMwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA3MDAsIGg6IDgwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnNlY3Rpb25cIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS80Wmp4VVVoLmpwZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlbil9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9TbHVnTGF5b3V0PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGYxMztcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uICsgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgcmdiKDI1NSwgMTAwLCAyMDUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMTI4LCAxMjgsIDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDhweCAwcHggMHB4OyAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgICAgLyogcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci10b3A6IDhweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICBib3R0b206IDdweDtcclxuICAgICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC42MSkgMHB4IDBweCAwcHggMnB4OyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzLCAyNCwgMzIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUtY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAvKiBBZGRpbmcgOmdsb2JhbCBjYW4gdGFyZ2V0IHRoYXQgZWxlbWVudCBpbnNpZGUgdGhlIGJsb2NrY29udGVudCBkaXYgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aWRlc2NyZWVuIHF1ZXJ5ICovXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBuZW9uIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5lb24ge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCA0MHB4ICMyMjhkZmYsIDAgMCA3MHB4ICMyMjhkZmYsIDAgMCA4MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDEwMHB4ICMyMjhkZmYsIDAgMCAxNTBweCAjMjI4ZGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMTVweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCAyMHB4ICMyMjhkZmYsIDAgMCAzNXB4ICMyMjhkZmYsIDAgMCA0MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDUwcHggIzIyOGRmZiwgMCAwIDc1cHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJoZWFkaW5nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhOm5vdCg6aG92ZXIpLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTRweCAycHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSA0cHggMnB4LCByZ2IoMCwgMCwgMCkgLTRweCAzcHgsIHJnYigwLCAwLCAwKSA0cHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTNweCAzcHgsIHJnYigwLCAwLCAwKSAzcHggM3B4LCByZ2IoMCwgMCwgMCkgLTJweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAycHggM3B4LCByZ2IoMCwgMCwgMCkgLTFweCAzcHgsIHJnYigwLCAwLCAwKSAxcHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMHB4IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtM3B4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDNweCAxcHgsIHJnYigwLCAwLCAwKSAtMnB4IDFweCwgcmdiKDAsIDAsIDApIDJweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtMXB4IDFweCwgcmdiKDAsIDAsIDApIDFweCAxcHgsIHJnYigwLCAwLCAwKSAwcHggMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYTpob3ZlciAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyMjUsIDI1NSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEzOSwgMjMzLCAyNTMpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHVsLFxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3R5bGVkY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlYmcge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzE4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZXBlbi1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdpdHRlci1lbWJlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDI6aG92ZXIgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwiYWJvdXRcIl1bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT4sXHJcbiAgYm9keSxcclxufWA7XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\about.js */"));
};

const query = groq__WEBPACK_IMPORTED_MODULE_3___default.a`*[_type == "about"][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage.asset->,
  body,
}`;

About.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_7___default.a.fetch(query, {
    slug
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./public/static/githubicon.png":
/*!**************************************!*\
  !*** ./public/static/githubicon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2Q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"

/***/ }),

/***/ "./public/static/nextjsicon.png":
/*!**************************************!*\
  !*** ./public/static/nextjsicon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/nextjsicon-e5a30c5e7f7138f70a2c0ccb6eee64f7.png";

/***/ }),

/***/ "./public/static/reacticon.png":
/*!*************************************!*\
  !*** ./public/static/reacticon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/reacticon-b7748a952d71619f2594dffc7332db91.png";

/***/ }),

/***/ "./public/static/sanityicon.png":
/*!**************************************!*\
  !*** ./public/static/sanityicon.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sanityicon-23b967b7c1b8802c278fbaf10a9f98c4.png";

/***/ }),

/***/ "./public/static/twittericon.png":
/*!***************************************!*\
  !*** ./public/static/twittericon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/twittericon-59cdaaa0381e017c75e6143a4eecedda.png";

/***/ }),

/***/ "./public/static/zeiticon.png":
/*!************************************!*\
  !*** ./public/static/zeiticon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/zeiticon-431f6fbaa5596276132155759abf349e.png";

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("groq");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-twitter-embed":
/*!**************************************!*\
  !*** external "react-twitter-embed" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2x1Z0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3NsdWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvRHJhY3VsYVRoZW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9OaWdodG93bFRoZW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdGF0aWMvZ2l0aHViaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9uZXh0anNpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JvcVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJGb290ZXIiLCJGc3R5bGUiLCJCbGVuZGVyUHJvTSIsImZvb3RlciIsIm15bGlua3MiLCJmb2xsb3ciLCJsaW5rIiwiZmF2aWNvbiIsIlR3aXR0ZXJMb2dvIiwidHdpdHRlcmljb24iLCJHaXRodWJMb2dvIiwicmxpbmtzIiwiYnVpbHR3aXRoIiwiYndpdGgiLCJTYW5pdHlMb2dvIiwiUmVhY3RMb2dvIiwiTmV4dGpzTG9nbyIsIlplaXRMb2dvIiwiU2x1Z0xheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZGlyZWN0aW9uIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsIndvcmRTcGFjaW5nIiwid29yZEJyZWFrIiwibGluZUhlaWdodCIsIk1velRhYlNpemUiLCJPVGFiU2l6ZSIsInRhYlNpemUiLCJXZWJraXRIeXBoZW5zIiwiTW96SHlwaGVucyIsIm1zSHlwaGVucyIsImh5cGhlbnMiLCJ3b3JkV3JhcCIsInBhZGRpbmciLCJtYXJnaW4iLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjb21tZW50IiwicHJvbG9nIiwiY2RhdGEiLCJkZWxpbWl0ZXIiLCJib29sZWFuIiwia2V5d29yZCIsInNlbGVjdG9yIiwiaW1wb3J0YW50IiwiYXRydWxlIiwib3BlcmF0b3IiLCJwdW5jdHVhdGlvbiIsInRhZyIsImRvY3R5cGUiLCJidWlsdGluIiwiZW50aXR5IiwibnVtYmVyIiwic3ltYm9sIiwicHJvcGVydHkiLCJjb25zdGFudCIsInZhcmlhYmxlIiwic3RyaW5nIiwiY2hhciIsInVybCIsInRleHREZWNvcmF0aW9uIiwiZnVuY3Rpb24iLCJyZWdleCIsImJvbGQiLCJmb250V2VpZ2h0IiwiaXRhbGljIiwiZm9udFN0eWxlIiwiaW5zZXJ0ZWQiLCJkZWxldGVkIiwidGV4dFNoYWRvdyIsInByZSIsImRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIiLCJCbG9ja0NvbnRlbnQiLCJkZWZhdWx0U2VyaWFsaXplcnMiLCJ0eXBlcyIsImJsb2NrIiwic2VyaWFsaXplcnMiLCJjb2RlIiwibm9kZSIsImxhbmd1YWdlIiwiQ29kZVRoZW1lMSIsInlvdXR1YmUiLCJjb2RlcGVuIiwidHdpdHRlclR3ZWV0RW1iZWQiLCJ0d2VldElkIiwibG9kYXNoSW5jbHVkZXMiLCJzdHlsZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiQWJvdXQiLCJ0aXRsZSIsIm1haW5JbWFnZSIsImJvZHkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiIsIi8vIGNsaWVudC5qc1xyXG5jb25zdCBzYW5pdHlDbGllbnQgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiBcImNvc2RseXR3XCIsXHJcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXHJcbiAgdXNlQ2RuOiB0cnVlLFxyXG59KTtcclxuIiwiaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9naXRodWJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgU2FuaXR5TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZ1wiO1xyXG5pbXBvcnQgUmVhY3RMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmdcIjtcclxuaW1wb3J0IE5leHRqc0xvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvbmV4dGpzaWNvbi5wbmdcIjtcclxuaW1wb3J0IFplaXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZ1wiO1xyXG5pbXBvcnQgRnN0eWxlIGZyb20gXCIuLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLkJsZW5kZXJQcm9NfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5teWxpbmtzfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mb2xsb3d9PkZvbGxvdyB1cyBvbjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBJY29uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0ZzdHlsZS50d2l0dGVyaWNvbn1cclxuICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VHdpdHRlcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIEljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17RnN0eWxlLnR3aXR0ZXJpY29ufVxyXG4gICAgICAgICAgICAgIHNyYz17R2l0aHViTG9nb31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUucmxpbmtzfT5cclxuICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QUJPVVQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPkJMT0c8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoxMjNAbWFpbC5jb21cIiB0YXJnZXQ9XCJfdG9wXCI+XHJcbiAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuYnVpbHR3aXRofT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5id2l0aH0+QnVpbHQgd2l0aDo8L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTYW5pdHkgSWNvblwiIHNyYz17U2FuaXR5TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2FuaXR5LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5TYW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17UmVhY3RMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5SZWFjdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtOZXh0anNMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk5leHQuanM8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17WmVpdExvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vemVpdC5jby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+WkVJVDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuXHJcbmNvbnN0IFNsdWdMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWdMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJsZW5kZXJwcm9IXCI6IFwiZm9vdGVyX2JsZW5kZXJwcm9IX18xTk1OV1wiLFxuXHRcIkJsZW5kZXJQcm9NXCI6IFwiZm9vdGVyX0JsZW5kZXJQcm9NX18xTXNSM1wiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzNaTjNzXCIsXG5cdFwidHdpdHRlcmljb25cIjogXCJmb290ZXJfdHdpdHRlcmljb25fXzF4VGQ1XCIsXG5cdFwibGlua1wiOiBcImZvb3Rlcl9saW5rX18zaHNTS1wiLFxuXHRcIm15bGlua3NcIjogXCJmb290ZXJfbXlsaW5rc19fVVVHb3JcIixcblx0XCJidWlsdHdpdGhcIjogXCJmb290ZXJfYnVpbHR3aXRoX19PYmtSSlwiLFxuXHRcImZhdmljb25cIjogXCJmb290ZXJfZmF2aWNvbl9fMWxZcTBcIixcblx0XCJybGlua3NcIjogXCJmb290ZXJfcmxpbmtzX19pNXpzOVwiLFxuXHRcImZvbGxvd1wiOiBcImZvb3Rlcl9mb2xsb3dfXzF0d0RqXCIsXG5cdFwiYndpdGhcIjogXCJmb290ZXJfYndpdGhfXzFYYVc4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibGVuZGVycHJvSFwiOiBcInNsdWdfYmxlbmRlcnByb0hfXzFONGFxXCIsXG5cdFwiQmxlbmRlclByb01cIjogXCJzbHVnX0JsZW5kZXJQcm9NX19ERXNrRlwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICB2YWx1ZTogdHJ1ZSxcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9kZWZhdWx0ID0ge1xyXG4gICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSc6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlXCIsXHJcbiAgICBkaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJwcmVcIixcclxuICAgIHdvcmRTcGFjaW5nOiBcIm5vcm1hbFwiLFxyXG4gICAgd29yZEJyZWFrOiBcIm5vcm1hbFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIE1velRhYlNpemU6IFwiNFwiLFxyXG4gICAgT1RhYlNpemU6IFwiNFwiLFxyXG4gICAgdGFiU2l6ZTogXCI0XCIsXHJcbiAgICBXZWJraXRIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIE1vekh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgbXNIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIGh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxyXG4gICAgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJzoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gICAgZm9udEZhbWlseTogXCJDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2VcIixcclxuICAgIGRpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcInByZVwiLFxyXG4gICAgd29yZFNwYWNpbmc6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgTW96VGFiU2l6ZTogXCI0XCIsXHJcbiAgICBPVGFiU2l6ZTogXCI0XCIsXHJcbiAgICB0YWJTaXplOiBcIjRcIixcclxuICAgIFdlYmtpdEh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgTW96SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBtc0h5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgaHlwaGVuczogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiBcIjFlbVwiLFxyXG4gICAgbWFyZ2luOiBcIi41ZW0gMFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMxNzE4MjBcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ3ByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAnOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyYjJiMmJcIixcclxuICAgIHBhZGRpbmc6IFwiLjFlbVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIi4zZW1cIixcclxuICB9LFxyXG4gIGNvbW1lbnQ6IHtcclxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICB9LFxyXG4gIHByb2xvZzoge1xyXG4gICAgY29sb3I6IFwiIzgwODA4MFwiLFxyXG4gIH0sXHJcbiAgY2RhdGE6IHtcclxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICB9LFxyXG4gIGRlbGltaXRlcjoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgYm9vbGVhbjoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAga2V5d29yZDoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgc2VsZWN0b3I6IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIGltcG9ydGFudDoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgYXRydWxlOiB7XHJcbiAgICBjb2xvcjogXCIjY2M3ODMyXCIsXHJcbiAgfSxcclxuICBvcGVyYXRvcjoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gIH0sXHJcbiAgcHVuY3R1YXRpb246IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiYXR0ci1uYW1lXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIHRhZzoge1xyXG4gICAgY29sb3I6IFwiI2U4YmY2YVwiLFxyXG4gIH0sXHJcbiAgXCJ0YWcgLnB1bmN0dWF0aW9uXCI6IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGRvY3R5cGU6IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGJ1aWx0aW46IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGVudGl0eToge1xyXG4gICAgY29sb3I6IFwiIzY4OTdiYlwiLFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICBjb2xvcjogXCIjNjg5N2JiXCIsXHJcbiAgfSxcclxuICBzeW1ib2w6IHtcclxuICAgIGNvbG9yOiBcIiM2ODk3YmJcIixcclxuICB9LFxyXG4gIHByb3BlcnR5OiB7XHJcbiAgICBjb2xvcjogXCIjOTg3NmFhXCIsXHJcbiAgfSxcclxuICBjb25zdGFudDoge1xyXG4gICAgY29sb3I6IFwiIzk4NzZhYVwiLFxyXG4gIH0sXHJcbiAgdmFyaWFibGU6IHtcclxuICAgIGNvbG9yOiBcIiM5ODc2YWFcIixcclxuICB9LFxyXG4gIHN0cmluZzoge1xyXG4gICAgY29sb3I6IFwiIzZhODc1OVwiLFxyXG4gIH0sXHJcbiAgY2hhcjoge1xyXG4gICAgY29sb3I6IFwiIzZhODc1OVwiLFxyXG4gIH0sXHJcbiAgXCJhdHRyLXZhbHVlXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhNWMyNjFcIixcclxuICB9LFxyXG4gIFwiYXR0ci12YWx1ZSAucHVuY3R1YXRpb25cIjoge1xyXG4gICAgY29sb3I6IFwiI2E1YzI2MVwiLFxyXG4gIH0sXHJcbiAgXCJhdHRyLXZhbHVlIC5wdW5jdHVhdGlvbjpmaXJzdC1jaGlsZFwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICB1cmw6IHtcclxuICAgIGNvbG9yOiBcIiMyODdiZGVcIixcclxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gIH0sXHJcbiAgZnVuY3Rpb246IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIHJlZ2V4OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzNjQxMzVcIixcclxuICB9LFxyXG4gIGJvbGQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIH0sXHJcbiAgaXRhbGljOiB7XHJcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcbiAgfSxcclxuICBpbnNlcnRlZDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjk0NDM2XCIsXHJcbiAgfSxcclxuICBkZWxldGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiM0ODRhNGFcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnByb3BlcnR5XCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnByb3BlcnR5ICsgLnRva2VuLnB1bmN0dWF0aW9uXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLmlkXCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnNlbGVjdG9yID4gLnRva2VuLmNsYXNzXCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnNlbGVjdG9yID4gLnRva2VuLmF0dHJpYnV0ZVwiOiB7XHJcbiAgICBjb2xvcjogXCIjZmZjNjZkXCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5zZWxlY3RvciA+IC50b2tlbi5wc2V1ZG8tY2xhc3NcIjoge1xyXG4gICAgY29sb3I6IFwiI2ZmYzY2ZFwiLFxyXG4gIH0sXHJcbiAgXCJjb2RlLmxhbmd1YWdlLWNzcyAudG9rZW4uc2VsZWN0b3IgPiAudG9rZW4ucHNldWRvLWVsZW1lbnRcIjoge1xyXG4gICAgY29sb3I6IFwiI2ZmYzY2ZFwiLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlLFxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX2RlZmF1bHQgPSB7XHJcbiAgXCJjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXFxucHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gICAgZm9udEZhbWlseTogXCJDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2VcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcblxyXG4gICAgd29yZFNwYWNpbmc6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkV3JhcDogXCJub3JtYWxcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICBNb3pUYWJTaXplOiBcIjRcIixcclxuICAgIE9UYWJTaXplOiBcIjRcIixcclxuICAgIHRhYlNpemU6IFwiNFwiLFxyXG4gICAgV2Via2l0SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBNb3pIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIG1zSHlwaGVuczogXCJub25lXCIsXHJcbiAgICBoeXBoZW5zOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIFwicHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ106Oi1tb3otc2VsZWN0aW9uLFxcbnByZVtjbGFzcyo9J2xhbmd1YWdlLSddIDo6LW1vei1zZWxlY3Rpb24sXFxuY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddOjotbW96LXNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10gOjotbW96LXNlbGVjdGlvblwiOiB7XHJcbiAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzJiMmIyYlwiLFxyXG4gIH0sXHJcbiAgXCJwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXTo6c2VsZWN0aW9uLFxcbnByZVtjbGFzcyo9J2xhbmd1YWdlLSddIDo6c2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXTo6c2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSA6OnNlbGVjdGlvblwiOiB7XHJcbiAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzJiMmIyYlwiLFxyXG4gIH0sXHJcbiAgXCJAbWVkaWEgcHJpbnRcIjoge1xyXG4gICAgXCJjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXFxuICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXVwiOiB7XHJcbiAgICAgIHRleHRTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByZTogeyBwYWRkaW5nOiBcIjFlbVwiLCBtYXJnaW46IFwiMC41ZW0gMFwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfSxcclxuICBcIjpub3QocHJlKSA+IGNvZGUsXFxucHJlXCI6IHtcclxuICAgIGNvbG9yOiBcInJnYmEoMzMsIDY2LCAxMzEsIDAuODUpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsIDY2LCAxMzEsIDAuODUpXCIsXHJcbiAgfSxcclxuICBcIjpub3QocHJlKSA+IGNvZGVcIjoge1xyXG4gICAgcGFkZGluZzogXCIwLjFlbVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuM2VtXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLFxyXG4gIH0sXHJcbiAgY29tbWVudDogeyBjb2xvcjogXCJyZ2IoOTksIDExOSwgMTE5KVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBwcm9sb2c6IHsgY29sb3I6IFwicmdiKDk5LCAxMTksIDExOSlcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgY2RhdGE6IHsgY29sb3I6IFwicmdiKDk5LCAxMTksIDExOSlcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgcHVuY3R1YXRpb246IHsgY29sb3I6IFwicmdiKDE5OSwgMTQ2LCAyMzQpXCIgfSxcclxuICBcIi5uYW1lc3BhY2VcIjogeyBjb2xvcjogXCJyZ2IoMTc4LCAyMDQsIDIxNClcIiB9LFxyXG4gIGRlbGV0ZWQ6IHsgY29sb3I6IFwicmdiYSgyMzksIDgzLCA4MCwgMC41NilcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgcHJvcGVydHk6IHsgY29sb3I6IFwicmdiKDEyOCwgMjAzLCAxOTYpXCIgfSxcclxuICBzeW1ib2w6IHsgY29sb3I6IFwicmdiKDEyOCwgMjAzLCAxOTYpXCIgfSxcclxuICBrZXl3b3JkOiB7IGNvbG9yOiBcInJnYigxMjcsIDIxOSwgMjAyKVwiIH0sXHJcbiAgdGFnOiB7IGNvbG9yOiBcInJnYigxMjcsIDIxOSwgMjAyKVwiIH0sXHJcbiAgb3BlcmF0b3I6IHsgY29sb3I6IFwicmdiKDEyNywgMjE5LCAyMDIpXCIgfSxcclxuICBib29sZWFuOiB7IGNvbG9yOiBcInJnYigyNTUsIDg4LCAxMTYpXCIgfSxcclxuICBudW1iZXI6IHsgY29sb3I6IFwicmdiKDI0NywgMTQwLCAxMDgpXCIgfSxcclxuICBjaGFyOiB7IGNvbG9yOiBcInJnYigxMzAsIDE3MCwgMjU1KVwiIH0sXHJcbiAgYnVpbHRpbjogeyBjb2xvcjogXCJyZ2IoMTMwLCAxNzAsIDI1NSlcIiB9LFxyXG4gIGZ1bmN0aW9uOiB7IGNvbG9yOiBcInJnYigxMzAsIDE3MCwgMjU1KVwiIH0sXHJcbiAgY29uc3RhbnQ6IHsgY29sb3I6IFwicmdiKDEzMCwgMTcwLCAyNTUpXCIgfSxcclxuICBkb2N0eXBlOiB7IGNvbG9yOiBcInJnYigxOTksIDE0NiwgMjM0KVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBzZWxlY3RvcjogeyBjb2xvcjogXCJyZ2IoMTk5LCAxNDYsIDIzNClcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgaW5zZXJ0ZWQ6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIFwiYXR0ci1uYW1lXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIHN0cmluZzogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIHVybDogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIGVudGl0eTogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBcIi50b2tlbi5zdHJpbmdcIjogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiLnN0eWxlIC50b2tlbi5zdHJpbmdcIjogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiY2xhc3MtbmFtZVwiOiB7IGNvbG9yOiBcInJnYigyNTUsIDIwMywgMTM5KVwiIH0sXHJcbiAgYXRydWxlOiB7IGNvbG9yOiBcInJnYigyNTUsIDIwMywgMTM5KVwiIH0sXHJcbiAgXCJhdHRyLXZhbHVlXCI6IHsgY29sb3I6IFwicmdiKDI1NSwgMjAzLCAxMzkpXCIgfSxcclxuICByZWdleDogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiB9LFxyXG4gIGltcG9ydGFudDogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfSxcclxuICB2YXJpYWJsZTogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiB9LFxyXG4gIGJvbGQ6IHsgZm9udFdlaWdodDogXCJib2xkXCIgfSxcclxuICBpdGFsaWM6IHsgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG4iLCIvLyBbc2x1Z10uanNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgeyBUd2l0dGVyVHdlZXRFbWJlZCB9IGZyb20gXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xyXG5pbXBvcnQgU2x1Z0xheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TbHVnTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vY3NzL3NsdWcubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gaW1wb3J0IHRoZW1lIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20vZGFyY3VsYSc7XHJcbmltcG9ydCBDb2RlVGhlbWUgZnJvbSBcIi4uL2xpYi9OaWdodG93bFRoZW1lXCI7XHJcbmltcG9ydCBDb2RlVGhlbWUxIGZyb20gXCIuLi9saWIvRHJhY3VsYVRoZW1lXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIGFzIGxvZGFzaEluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEJsb2NrU2VyaWFsaXplciA9IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2s7XHJcblxyXG5jb25zdCBzZXJpYWxpemVycyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgY29kZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN0eWxlZGNvZGVcIlxyXG4gICAgICAgIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfVxyXG4gICAgICAgIHN0eWxlPXtDb2RlVGhlbWUxfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLm5vZGUuY29kZX1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICAgICksXHJcbiAgICB5b3V0dWJlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlYmdcIj5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLWVtYmVkXCJcclxuICAgICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9ICB0aGlzIHNob3dzIGFsbCB0aGUgaW5mbyAqL31cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGNvZGVwZW46IChwcm9wcykgPT4gKFxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvZGVwZW4tZW1iZWRcIlxyXG4gICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgID48L2lmcmFtZT5cclxuICAgICksXHJcblxyXG4gICAgdHdpdHRlclR3ZWV0RW1iZWQ6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItZW1iZWRcIj5cclxuICAgICAgICA8VHdpdHRlclR3ZWV0RW1iZWQgdHdlZXRJZD17cHJvcHMubm9kZS50d2VldElkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgYmxvY2s6IChwcm9wcykgPT4ge1xyXG4gICAgICAvLyBBZGQgYW5jaG9ycyBmb3IgSDInc1xyXG4gICAgICBpZiAobG9kYXNoSW5jbHVkZXMoW1wiaDJcIl0sIHByb3BzLm5vZGUuc3R5bGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICAgICA8YSBpZD17cHJvcHMuY2hpbGRyZW59IGhyZWY9e2AjYCArIHByb3BzLmNoaWxkcmVufT5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibGlua2ljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNTksMTMuNDFDMTEsMTMuOCAxMSwxNC40NCAxMC41OSwxNC44M0MxMC4yLDE1LjIyIDkuNTYsMTUuMjIgOS4xNywxNC44M0M3LjIyLDEyLjg4IDcuMjIsOS43MSA5LjE3LDcuNzZWNy43NkwxMi43MSw0LjIyQzE0LjY2LDIuMjcgMTcuODMsMi4yNyAxOS43OCw0LjIyQzIxLjczLDYuMTcgMjEuNzMsOS4zNCAxOS43OCwxMS4yOUwxOC4yOSwxMi43OEMxOC4zLDExLjk2IDE4LjE3LDExLjE0IDE3Ljg5LDEwLjM2TDE4LjM2LDkuODhDMTkuNTQsOC43MSAxOS41NCw2LjgxIDE4LjM2LDUuNjRDMTcuMTksNC40NiAxNS4yOSw0LjQ2IDE0LjEyLDUuNjRMMTAuNTksOS4xN0M5LjQxLDEwLjM0IDkuNDEsMTIuMjQgMTAuNTksMTMuNDFNMTMuNDEsOS4xN0MxMy44LDguNzggMTQuNDQsOC43OCAxNC44Myw5LjE3QzE2Ljc4LDExLjEyIDE2Ljc4LDE0LjI5IDE0LjgzLDE2LjI0VjE2LjI0TDExLjI5LDE5Ljc4QzkuMzQsMjEuNzMgNi4xNywyMS43MyA0LjIyLDE5Ljc4QzIuMjcsMTcuODMgMi4yNywxNC42NiA0LjIyLDEyLjcxTDUuNzEsMTEuMjJDNS43LDEyLjA0IDUuODMsMTIuODYgNi4xMSwxMy42NUw1LjY0LDE0LjEyQzQuNDYsMTUuMjkgNC40NiwxNy4xOSA1LjY0LDE4LjM2QzYuODEsMTkuNTQgOC43MSwxOS41NCA5Ljg4LDE4LjM2TDEzLjQxLDE0LjgzQzE0LjU5LDEzLjY2IDE0LjU5LDExLjc2IDEzLjQxLDEwLjU5QzEzLDEwLjIgMTMsOS41NiAxMy40MSw5LjE3WlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlua2ljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L3Byb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGVmYXVsdEJsb2NrU2VyaWFsaXplcihwcm9wcyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLCBtYWluSW1hZ2UsIGJvZHkgPSBbXSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2x1Z0xheW91dD5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxzZWN0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0aW1hZ2VcIiBzcmM9e2Ake21haW5JbWFnZS51cmx9YH0gLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhYm91dFwiPkFib3V0IFVzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0Ym9keVwiXHJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogMzAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDcwMCwgaDogODAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSc2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzRaanhVVWguanBnXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHByb3BzLmNoaWxkcmVuKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L1NsdWdMYXlvdXQ+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgbGVmdDogMjhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnRpY2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZjEzO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24gKyAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzBlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICByZ2IoMjU1LCAxMDAsIDIwNSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigxMjgsIDEyOCwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyNTUsIDIyNSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwcHggOHB4IDBweCAwcHg7ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAyZW07XHJcbiAgICAgICAgICAvKiBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyAqL1xyXG4gICAgICAgICAgLyogYm9yZGVyLXRvcDogOHB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjYxKSAwcHggMHB4IDBweCAycHg7ICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDI0LCAzMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZS1jb250ZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgOmdsb2JhbChpbWcpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgIC8qIEFkZGluZyA6Z2xvYmFsIGNhbiB0YXJnZXQgdGhhdCBlbGVtZW50IGluc2lkZSB0aGUgYmxvY2tjb250ZW50IGRpdiAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHdpZGVzY3JlZW4gcXVlcnkgKi9cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi4oCiXCI7XHJcbiAgICAgICAgICBhbmltYXRpb246IG5lb24gMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbmVvbiB7XHJcbiAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDQwcHggIzIyOGRmZiwgMCAwIDcwcHggIzIyOGRmZiwgMCAwIDgwcHggIzIyOGRmZixcclxuICAgICAgICAgICAgICAwIDAgMTAwcHggIzIyOGRmZiwgMCAwIDE1MHB4ICMyMjhkZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDIwcHggIzIyOGRmZiwgMCAwIDM1cHggIzIyOGRmZiwgMCAwIDQwcHggIzIyOGRmZixcclxuICAgICAgICAgICAgICAwIDAgNTBweCAjMjI4ZGZmLCAwIDAgNzVweCAjMjI4ZGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGE6bm90KDpob3ZlcikudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtNHB4IDJweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDRweCAycHgsIHJnYigwLCAwLCAwKSAtNHB4IDNweCwgcmdiKDAsIDAsIDApIDRweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtM3B4IDNweCwgcmdiKDAsIDAsIDApIDNweCAzcHgsIHJnYigwLCAwLCAwKSAtMnB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDJweCAzcHgsIHJnYigwLCAwLCAwKSAtMXB4IDNweCwgcmdiKDAsIDAsIDApIDFweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAwcHggM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC0zcHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgM3B4IDFweCwgcmdiKDAsIDAsIDApIC0ycHggMXB4LCByZ2IoMCwgMCwgMCkgMnB4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0xcHggMXB4LCByZ2IoMCwgMCwgMCkgMXB4IDFweCwgcmdiKDAsIDAsIDApIDBweCAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhOmhvdmVyIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDIyNSwgMjU1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTM5LCAyMzMsIDI1Myk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlIDBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgdWwsXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdHlsZWRjb2RlIHtcclxuICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmViZyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE3MTgyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlcGVuLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50d2l0dGVyLWVtYmVkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMjpob3ZlciAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJhYm91dFwiXVswXXtcclxuICB0aXRsZSxcclxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuICBcIm1haW5JbWFnZVwiOiBtYWluSW1hZ2UuYXNzZXQtPixcclxuICBib2R5LFxyXG59YDtcclxuXHJcbkFib3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIZ0FBQUI0Q0FZQUFBQTVaRGJTQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5UnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5TMWpNREl4SURjNUxqRTFORGt4TVN3Z01qQXhNeTh4TUM4eU9TMHhNVG8wTnpveE5pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZSRVJDTVVJd1FUTTROa05GTVRGRk0wRkJOVEpGUlRNek5USkVNVUpETkRZaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJFUkNNVUl3UVRJNE5rTkZNVEZGTTBGQk5USkZSVE16TlRKRU1VSkRORFlpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1RXRmphVzUwYjNOb0tTSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1UxTVRjNFFUTXlPVGxCTURFeFJUSTVRVEUxUWtNeE1EUTJRVGc1TURSRUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qSkJOREUwUVVKRE9UbEJNVEV4UlRJNVFURTFRa014TURRMlFUZzVNRFJFSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzhrU3F5QUFBREQ1SlJFRlVlTnJzWFEyUWxWVVpmbGxZVUJlMllDdVFGTmVsOVE5RWNWRVFTQTN4QjJwVFNWY0VTakVMblpvbUJXMHlhNXcwbTFHeXpLU210RVlEYzZoR29oUkRyVUdRWlVrbzBFQVJDQVhLK0ZFd1hGejJ5dlkrZk8vZCtmYnUvZm0rKzUzMys3bjNQRFBQd0M2WGM3N3pQdmM3UCs5NXozdDZkSFIwa0VYcG9sZUp0R013Y3dUekU4dzZaaTF6RUxORzJKZlpKK1AvdERFUE1QY0szMkp1WTI1bGJtYXVaLzQ3NllicGtjQTMrQmptdWN4eHdsSE1BVXAxdmMxOGlmbWlzSm5aYWdVMmp5SE1LY3hKelBPenZJMWhBVy85TXVZUzVwUE1ONnpBeGVOanpPbk1xNW1qWS9xTUxjeUZ6UG5NWFZaZ2I3aVFPWXQ1T2JNeUlUMWhPL01Qeko4eG43Y0NaNS9zVFdYZUtwT2xKQU9Ucy91WVR6QlQ1UzR3aEozQnZJTTV0TVJXS0Z1WWQwdjNuU3BIZ1QvTm5NczhwY1NYb3E4eFp6T2ZLaGVCVDJJK3dMeTB6SHdPenpDL0xvS0hob29RNjhLRTZYWVpvOHBOWEpJMnJ4TWJWSmJhRzN3YTgzSG1HV1JCSXZRMDVvYWt2OEU5bUY5aHJySGlkc0VaWXBPdmlvMFMrUWJELy90TDVsVld6N3o0SFhNbU9YN3h4QWhjejF3a1hiTkZZV3hrWHNaOFBRbGQ5SGptS2l1dUw1d3FOaHNmZDRHYnlISFZEYkNhK2NZQXNWMVRYQVhHT1BJYlptK3JWZEhvTFRhOFBtNEMzeVFUcWdxcmtSRk5IaEdieG1LU05WUEV0VENQTHdhMWJWQ0JtNlJMc1crdURnNHpyeUZuenpsMGdjZkxwTUNPdWJvNFJNNGUrWW93QmE2WGFiMmRMWWNEeElhTktXYWRYSXpBOEZDdGxyV2JSWGlBTStRYzh1bng4anQyd20vNkt5dHVKRGhWYk45RFUyQnNIRndaOEVIM2tlTm9mMW4rWHVyWUoyMUZtL2NITE90SzBVQ2xpNGJyY1MwRkQxbjlESFdOYmpoT0poSFlMNFUvOXVpRUMzcVFuQUM4WjJRU3VzUDFiNDNNeFFITFIraHVBL09mSmdYR0J2WGZLUGlXSHlZTE9ISFFudVBmcThtSjBVSlVaZEtDNy9DV0lxb1NNVmp2NXJIamY1bjlBOWFGL2VTejg5alJkeGQ5RzVuWnoxMVM0S0ZnbUhsU0Y0TGNXeElnN0dwNTFoSHk3Ty9tK1d5NzJDQW9ZSjl2bUJxRFQyWisyNUF4WHZEeFdYUnhPS0x5T1hMT0M4VU5XMlZNSENQUDZoWExEZFYvaDJnVHVJditNL05pUXcvVklPTzRYMkRjbnlOZnRGeHpnRGRrWEhxVnVaT2NnMk1nRHBhOUoyTmptNnM4alBWVjVCeE9HeXo4T0RsUm5zT1lKK1FaQSs5aDNzdDh2MGdidkdUSW5rdVpsd1FSR0tHdGZ6TDBNTzFpMFBZQVpjREJBa2Y4Y09aSzZSR1d5L2huT2lJQzYvM1R5ZkhZblVmT1FUZDhnVzZnWUpHUmxmS0ZNeFY0bHpscDlTeHdMMm5RU1lZZTVNMDhiNFhmdFRoNE9PUXVPVDJjbWFoM3U2d2VUT0IxV2VHay9JN0JNd3lLQzd4bHFKeU9DTVJOQzJ1cTN2OFlmSzU2MGNyWEpLdFNCbkhUNjBNTEI2YlBHRU9yM240RXhrR3dvVmFIeEFCYVhlMUg0RGtLRDNHVTFhRVRHdDY2VzcwS1BKRjB2RWduV0YwN01VU2h6Tk5GdTRJQzM2alVxSUhNZmxiYkl6WVlxRlQyVFlVRVJ0cUV6eXBWanFYTldWYmZJemJRT3E3U0tCcm1GSGdHNlo1OG0yajFWYlZCWmVhU0tWUGdKdVhHTlZwOTFXM1FsRXRnSkJEVHptWnp0OVZYM1FhajNVdGN0OENYSzFkOEZ6a242Y29kc01GM2xldTRMSnZBa3hRclhCVkNvNUtFdThRbVdwamNPYk9WelFha0IwUzBoVVlHdVE5a2piYlI2dG9GMkpiRUxwaEd2bEJzYVNLa3VUWDlCbzhqdmZTQUQxbHhzK0pWc1kwRytvaW1uVjMwV0tXS3NDSCtQYXRsVHR4RHhRVU5lTUZZdDhEamxDcjVOY1UwaDJOTXNFdHNwSUZ4N2pGNEwra2NROEdVZmJYVk1TOXdXa0VqdUJCenFob0lqRGlrSFFvVmJDVzc1ZWdWVzhRUFlSckhvWXZXaWo5KzJ1cm1HVXVVeWgwQmdldVZDbDloZFl2Y1Z2VVF1RmFwY0R2MlJtK3JXaTJCRVJyN3B0WE5NMkNybEpiQWd4UUtSbGpvQjFZM3o0QzRPeFhLSFFTQmF4UUsvcC9WekRjMGp0TFdhQW04MytybEd3ZTBCTmFJaytwcDlmSU5qVTJIZmhCWUkwdE9YNnVYYjJpRUZmZld5bTlWWmZYeWpXcU5RclVFdHJtelltSXorS0kxRWtZZmtpN0hYbTNxL1VYRHRtR2xSc0VwcFcvallLdWJad3dtblhEbFZJWGlrdVpFcTV0bjFDbVZ1NytDOUhKVjFWbmRJbjhaOWtIZzNVcUZqN0s2ZWNiWlN1WHVoc0E3bFFvZmEzV0wzRlk3TlFVK2s1eHdYSXZDUG9NUm1nSnZWaW9jN3NvSlZyK0NtRUI2cnQzTkVIaVQ0c05Qc2ZvVnhCV0taVytDb3dQcGZMWXJWWUJ0USt3M3Qxb2Rzd0pER0xJUGFSMk1QeDV2TUNJcTl5cFZnQWVmYm5YTWllbUs0aUpzZGtmYUY3MUdzUkcza0wyMEl4dDZpVzIwY0NSZFl0cndLeFVyd2lHcmE2MmUzZkI1MHIzOXZOa3Q4SXZLamNFWm5HcXJhU2VxeFNhYVdPRVdHRCswS1ZhR2lkYjlWdGRPL0loMGdoM1RhTXNVR0Z0Vnk1VWJoVnU4cGxsdGp5UkptYWxjeDNMUnRNdms1NDhoTk81aGNwSjhseXR3NHUvbklkVFRtUUxhblU0WW1laTJoVkE1VXQ0andYaExtWW1MazVaTFE1cUwxSktUSUwzTEc0eGZoSEhjcEZvYWVuRVppWXY4SjgrR0pPN3F0TGlVWlgyNklNUlpKRTdVM1VtbEhXS0x0aUZ0MGxNVVhockh4OTAvWkdaOC95ZzV1MHVWSVJvQlN6UmM5clN1eE1SRnlzSjVwSjk3ekEyY0NZUHJlVmV1TnhpYi80c2ltSGpBay9ZVDBzbkNHallRbmZFTGNqeEpvME91ZXhGbHBNeklkbWZEQmN5LytpaTBXV1p0S0JqWkFyQjVqUzJ3WGtWK0F6Rk0vSlNTZGZ3VXlVVS9TVTZtM3FZSWg1MEptZHJsdXBRRFY5K005RkFnYmcvNUVIVS9TWWl1L21ibWJDbyszaGVwbDU2UUw4L2ZLWDRodUQxbHlZZWtZMU1wK2lCRERIRm5kdnZtNVJBWWkzR3YyVjl1WjM0L3kwSWJucFRINUkwY0dmRGhjUjNjQzlKYjRJcTlWeWo4aXkweHR1RTZuMUhTUzBIY0Q4Zm9Dd2ZmOW55dkFxTjdSYUl1cjBsVUhpRG5xclUyMTVwdmdNeVVFWkt5a0Z6cDlRd0IyNXhiWkQzOVRUSi9Fd3NtbWorV3R0UkpUeFZYd0E3WXVPZ2U0dzZCYy9EYURuL1l5QnlaVWNZVnpHWE1ZK1ZQMHppUXBVNlRiR0MrM3hGL1hKZXJEZmthVjhGYzc3T2lWdVlscmpLR01YY3pKekZybU5zTk4yeVdvcmhwZmkzbTRyNHNXbVY5L2tKWDI4RUQ0emNkRXU1SFFsYnpiSHZNa3luUE5XeEZUQ3JPSXYxTHNqQ1pRdExRdU41NlBwbnlwR0VxRkdteGhQemZYWWdyWTM1UFhlOE9xQkpYSGNhSVJ3MDE3RDRLNXdZMHJCRHVqYW00VDFPQkhGdGViaC9GUkF0M0dQck5Sb3ZkcWZRRkg4ZklwQWozN09HMlRPUktQamxBd3hETU41REN1MDJ0cnppQjRuVDNFeWEwdzJTQ1JjVyt3ZWtaMm5lS2VJQkcxOHk1VlR4V3Q4bnlwcEdDQmR6L2hjSzlLdStBMUJrbjNGbElYSzhDQS9kVGNYZmUvc0JWQnh3WHk2Uzd4bG9TVjlkdUtMSnhLeU13YUp3eTk4RzFPOWZMQjcwS25CTG5oOSszNWhUcWZzc0k3dVBGanNlRDVCeTZ3cGZna0k4eUVhaS9OQUtqeGlXcCtVSFJJbVZTWU9BMWNULzZ4ZXlNbjU4ako3TGpvSFRkYzhUTjl5MXlkcFl5ZytUM2lHY005eHlNa1MvTlB5SXc3TGFZQ0h5ek9LRzhvWWgxNGZ3aTFtcm41aW52Uk9henpBZVpSOG52K2pPSE1QdTVQamVLT1pkNWZnaHIzMnlzamNHYWQ0SGY1eTZtb1ZYTWRUNGZySm5aTTBkNWRjdzk4cmtHK2QxNThyc05JalordDFZK016OGlnVDhTc2Jod092WDErOXpGbkRoNFQ1WS9mZzZPajVGWlh6WWdjZmp4NUlTUnJuR05NMGpRK1MrWGZ4dDNBVjNLdkQ2aXJqRVZZYmU4UjJ6dU94dWVsM1Z3TG1BMzVYbnlkeGN1SWpmbVVUS0JuYU4zSXBwVVRTeDI1UkRrekJDMjdxYjY5Q1k5Sk5QN3lnUUtITVV6dzdiVGdpd0xneDRLVzh6OGdrK1JNYXRHUU1GRkNSTzRLZ0p4WWR0QUlWUW1UdjB0a0hIUmo4akRaUzJMdmR3YnlkOHhqbU9wOUpPZHdwYXp5RUNVYTVBeE9CTTQ2L3BZZ0M4TjNHNnZ5SHB6bjZ5SEVldUVkTWZZdUtnbDU0bzhCQkwwcC9Bak9tcGwwaGZXbTJza2hObGtDbHM4RUpLcUxmUTU4VXBqS0htUElPbFRvbS91UVpuWExEWlZvT21EMmRoYS9CVHAzM1oyZEFtS0M1dGRhRkpjRFlGSnh0VnpJbkluSmhYcnhXYk5wZ3ZXU3EyQXN6SFlWSGpVYWxjUWlGNGRTNjd6UkVrUUdJREg2enJtRGZKM2krNzIrWkpNcU5Uc0UwWnlsRWZJQ2NodXNacDJHY1lRVC9hd2RrVmhaYjlCTmoxRWROeEM0VVppeEhHV1BFZHNzU21NQ3NOTWI0VGd0UitTRTUzNFpCbUtpemFmUms2QVEyaVhoa1dSdndxVGlTbXlKRmhiQnNMaVhOVkYwdVp0WVZjZVpZSXlCTEVoTnVzYThoOE9rNFNVVEJ1bGJXampjMUU5Uk5RWjZPQW54UWxDK0taeDdIS1Z4Ly8zZGdUUDZqWE5WSXUwWmJpMDdYQ1VCamJwaXpZRkJBZWt6OWxtODFpdG9laXl5U095dENHSCtMOGw1MXp6eWpnWk00NENwNEVOOXF2STJjUkFjQUUySG5DNCtjdGFUZ0VQcUNYbjlQNEY4bWFpeDFrZzRyNFRSeVBHV1dDTEVoaURMWlR4ZndFR0FJZzJJdHNLaEtwY0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9uZXh0anNpY29uLWU1YTMwYzVlN2Y3MTM4ZjcwYTJjMGNjYjZlZWU2NGY3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9yZWFjdGljb24tYjc3NDhhOTUyZDcxNjE5ZjI1OTRkZmZjNzMzMmRiOTEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Nhbml0eWljb24tMjNiOTY3YjdjMWI4ODAyYzI3OGZiYWYxMGE5Zjk4YzQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3R3aXR0ZXJpY29uLTU5Y2RhYWEwMzgxZTAxN2M3NWU2MTQzYTRlZWNlZGRhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy96ZWl0aWNvbi00MzFmNmZiYWE1NTk2Mjc2MTMyMTU1NzU5YWJmMzQ5ZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JvcVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10d2l0dGVyLWVtYmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==