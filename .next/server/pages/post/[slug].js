module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].js");
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
  href: "https://vercel.com/",
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
}, "Vercel")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2085888330",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZrQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9naXRodWJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgU2FuaXR5TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZ1wiO1xyXG5pbXBvcnQgUmVhY3RMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmdcIjtcclxuaW1wb3J0IE5leHRqc0xvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvbmV4dGpzaWNvbi5wbmdcIjtcclxuaW1wb3J0IFplaXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZ1wiO1xyXG5pbXBvcnQgRnN0eWxlIGZyb20gXCIuLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLkJsZW5kZXJQcm9NfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5teWxpbmtzfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mb2xsb3d9PkZvbGxvdyB1cyBvbjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBJY29uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0ZzdHlsZS50d2l0dGVyaWNvbn1cclxuICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VHdpdHRlcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIEljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17RnN0eWxlLnR3aXR0ZXJpY29ufVxyXG4gICAgICAgICAgICAgIHNyYz17R2l0aHViTG9nb31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUucmxpbmtzfT5cclxuICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QUJPVVQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPkJMT0c8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoxMjNAbWFpbC5jb21cIiB0YXJnZXQ9XCJfdG9wXCI+XHJcbiAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuYnVpbHR3aXRofT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5id2l0aH0+QnVpbHQgd2l0aDo8L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTYW5pdHkgSWNvblwiIHNyYz17U2FuaXR5TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2FuaXR5LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5TYW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17UmVhY3RMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5SZWFjdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtOZXh0anNMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk5leHQuanM8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17WmVpdExvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VmVyY2VsPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\Footer.js */")));

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
	"BlenderProM": "slug_BlenderProM__DEskF",
	"ponde": "slug_ponde__a_3D5",
	"pixelfont": "slug_pixelfont__D78uc"
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

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
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
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SlugLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/SlugLayout */ "./components/SlugLayout.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_slug_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../css/slug.module.css */ "./css/slug.module.css");
/* harmony import */ var _css_slug_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_slug_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/NightowlTheme */ "./lib/NightowlTheme.js");
/* harmony import */ var _lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_NightowlTheme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/DraculaTheme */ "./lib/DraculaTheme.js");
/* harmony import */ var _lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_DraculaTheme__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\pages\\post\\[slug].js";

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
        lineNumber: 53,
        columnNumber: 7
      }
    }),
    twitterTweetEmbed: props => __jsx("div", {
      className: "twitter-embed",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx(react_twitter_embed__WEBPACK_IMPORTED_MODULE_6__["TwitterTweetEmbed"], {
      tweetId: props.node.tweetId,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    })),
    imageStyle: props => __jsx("div", {
      className: "imageStyleDiv",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, __jsx("h3", {
      className: "imageStyleHeader",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, props.node.caption), __jsx("figure", {
      className: "imageStyle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "imageStyleA",
      href: props.node.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "imageStyleOverlay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("img", {
      src: urlFor(props.node),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }), __jsx("figcaption", {
      className: "imageStyleFigCaption",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, props.node.caption)))),
    block: props => {
      // Add anchors for H2's
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_13__["includes"])(["h2"], props.node.style)) {
        return __jsx(props.node.style, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, __jsx("a", {
          id: props.children,
          href: `#` + props.children,
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }
        }, __jsx("div", {
          className: "jsx-1709162960" + " " + "subheading",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }
        }, __jsx("span", {
          className: "jsx-1709162960" + " " + "underline",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }
        }, __jsx("span", {
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 19
          }
        }, props.children))), __jsx("svg", {
          viewBox: "0 0 24 24",
          className: "jsx-1709162960" + " " + "linkicon",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 15
          }
        }, __jsx("path", {
          fill: "#FFFFFF",
          d: "M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z",
          className: "jsx-1709162960",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "1709162960",
          __self: undefined
        }, ".linkicon.jsx-1709162960{width:26px;height:100%;margin-left:0px;top:3px;position:relative;}.linkicon.jsx-1709162960 path.jsx-1709162960{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xccG9zdFxcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHd0IsQUFHNEIsQUFRQyxXQVBBLENBUWQsV0FQa0IsZ0JBQ1IsUUFDVSxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV3IGZvbGRlciAoNSlcXHBhZ2VzXFxwb3N0XFxbc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgeyBUd2l0dGVyVHdlZXRFbWJlZCB9IGZyb20gXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgU2x1Z0xheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TbHVnTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vY3NzL3NsdWcubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gaW1wb3J0IHRoZW1lIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20vZGFyY3VsYSc7XHJcbmltcG9ydCBDb2RlVGhlbWUgZnJvbSBcIi4uLy4uL2xpYi9OaWdodG93bFRoZW1lXCI7XHJcbmltcG9ydCBDb2RlVGhlbWUxIGZyb20gXCIuLi8uLi9saWIvRHJhY3VsYVRoZW1lXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIGFzIGxvZGFzaEluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEJsb2NrU2VyaWFsaXplciA9IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2s7XHJcblxyXG5jb25zdCBzZXJpYWxpemVycyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgY29kZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN0eWxlZGNvZGVcIlxyXG4gICAgICAgIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfVxyXG4gICAgICAgIHN0eWxlPXtDb2RlVGhlbWUxfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLm5vZGUuY29kZX1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICAgICksXHJcbiAgICB5b3V0dWJlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlYmdcIj5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLWVtYmVkXCJcclxuICAgICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9ICB0aGlzIHNob3dzIGFsbCB0aGUgaW5mbyAqL31cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICB7LyogPHA+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsKX08L3A+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgY29kZXBlbjogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29kZXBlbi1lbWJlZFwiXHJcbiAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgPjwvaWZyYW1lPlxyXG4gICAgKSxcclxuXHJcbiAgICB0d2l0dGVyVHdlZXRFbWJlZDogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlci1lbWJlZFwiPlxyXG4gICAgICAgIDxUd2l0dGVyVHdlZXRFbWJlZCB0d2VldElkPXtwcm9wcy5ub2RlLnR3ZWV0SWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBpbWFnZVN0eWxlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlRGl2XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImltYWdlU3R5bGVIZWFkZXJcIj57cHJvcHMubm9kZS5jYXB0aW9ufTwvaDM+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlU3R5bGVBXCIgaHJlZj17cHJvcHMubm9kZS51cmx9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlT3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VybEZvcihwcm9wcy5ub2RlKX0+PC9pbWc+XHJcbiAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlRmlnQ2FwdGlvblwiPntwcm9wcy5ub2RlLmNhcHRpb259PC9maWdjYXB0aW9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBibG9jazogKHByb3BzKSA9PiB7XHJcbiAgICAgIC8vIEFkZCBhbmNob3JzIGZvciBIMidzXHJcbiAgICAgIGlmIChsb2Rhc2hJbmNsdWRlcyhbXCJoMlwiXSwgcHJvcHMubm9kZS5zdHlsZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHByb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgICAgIDxhIGlkPXtwcm9wcy5jaGlsZHJlbn0gaHJlZj17YCNgICsgcHJvcHMuY2hpbGRyZW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsaW5raWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMC41OSwxMy40MUMxMSwxMy44IDExLDE0LjQ0IDEwLjU5LDE0LjgzQzEwLjIsMTUuMjIgOS41NiwxNS4yMiA5LjE3LDE0LjgzQzcuMjIsMTIuODggNy4yMiw5LjcxIDkuMTcsNy43NlY3Ljc2TDEyLjcxLDQuMjJDMTQuNjYsMi4yNyAxNy44MywyLjI3IDE5Ljc4LDQuMjJDMjEuNzMsNi4xNyAyMS43Myw5LjM0IDE5Ljc4LDExLjI5TDE4LjI5LDEyLjc4QzE4LjMsMTEuOTYgMTguMTcsMTEuMTQgMTcuODksMTAuMzZMMTguMzYsOS44OEMxOS41NCw4LjcxIDE5LjU0LDYuODEgMTguMzYsNS42NEMxNy4xOSw0LjQ2IDE1LjI5LDQuNDYgMTQuMTIsNS42NEwxMC41OSw5LjE3QzkuNDEsMTAuMzQgOS40MSwxMi4yNCAxMC41OSwxMy40MU0xMy40MSw5LjE3QzEzLjgsOC43OCAxNC40NCw4Ljc4IDE0LjgzLDkuMTdDMTYuNzgsMTEuMTIgMTYuNzgsMTQuMjkgMTQuODMsMTYuMjRWMTYuMjRMMTEuMjksMTkuNzhDOS4zNCwyMS43MyA2LjE3LDIxLjczIDQuMjIsMTkuNzhDMi4yNywxNy44MyAyLjI3LDE0LjY2IDQuMjIsMTIuNzFMNS43MSwxMS4yMkM1LjcsMTIuMDQgNS44MywxMi44NiA2LjExLDEzLjY1TDUuNjQsMTQuMTJDNC40NiwxNS4yOSA0LjQ2LDE3LjE5IDUuNjQsMTguMzZDNi44MSwxOS41NCA4LjcxLDE5LjU0IDkuODgsMTguMzZMMTMuNDEsMTQuODNDMTQuNTksMTMuNjYgMTQuNTksMTEuNzYgMTMuNDEsMTAuNTlDMTMsMTAuMiAxMyw5LjU2IDEzLjQxLDkuMTdaXCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvcHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZWZhdWx0QmxvY2tTZXJpYWxpemVyKHByb3BzKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIHN1YnRpdGxlID0gXCJNaXNzaW5nIFN1YnRpdGxlXCIsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gICAgYXV0aG9ySW1hZ2UsXHJcbiAgICBtYWluSW1hZ2UsXHJcbiAgICBib2R5ID0gW10sXHJcbiAgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0aW1hZ2VcIiBzcmM9e2Ake21haW5JbWFnZS51cmx9YH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1Ymxpc2hlZFwiPlB1Ymxpc2hlZCBieSB7bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7Lyoge2NhdGVnb3JpZXMgJiYgKFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge2F1dGhvckltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgLndpZHRoKDUwKVxyXG4gICAgICAgICAgICAgICAgICAudXJsKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3Rib2R5XCJcclxuICAgICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogNTAwLCBoOiAzMDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogNzAwLCBoOiA4MDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xheW91dD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vNFpqeFVVaC5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2cocHJvcHMuY2hpbGRyZW4pfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvU2x1Z0xheW91dD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBmMTM7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiArIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAjODE4MGZmIDAlLFxyXG4gICAgICAgICAgICAgICM4MTgwZmYgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCAyMnB4IC0zcHggIzgxODBmZjsgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDIycHggLTNweCAjODE4MGZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgICAgLyogcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci10b3A6IDhweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICB0b3A6IC0xMHJlbTtcclxuICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuNjEpIDBweCAwcHggMHB4IDJweDsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMywgMjQsIDMyKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZS1jb250ZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInBvbmRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAvKiBBZGRpbmcgOmdsb2JhbCBjYW4gdGFyZ2V0IHRoYXQgZWxlbWVudCBpbnNpZGUgdGhlIGJsb2NrY29udGVudCBkaXYgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aWRlc2NyZWVuIHF1ZXJ5ICovXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIHRvcDogLTRyZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IC0uMjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IC01cmVtIDFyZW0gMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGE6bm90KDpob3ZlcikudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtNHB4IDJweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDRweCAycHgsIHJnYigwLCAwLCAwKSAtNHB4IDNweCwgcmdiKDAsIDAsIDApIDRweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtM3B4IDNweCwgcmdiKDAsIDAsIDApIDNweCAzcHgsIHJnYigwLCAwLCAwKSAtMnB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDJweCAzcHgsIHJnYigwLCAwLCAwKSAtMXB4IDNweCwgcmdiKDAsIDAsIDApIDFweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAwcHggM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC0zcHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgM3B4IDFweCwgcmdiKDAsIDAsIDApIC0ycHggMXB4LCByZ2IoMCwgMCwgMCkgMnB4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0xcHggMXB4LCByZ2IoMCwgMCwgMCkgMXB4IDFweCwgcmdiKDAsIDAsIDApIDBweCAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhOmhvdmVyIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDIyNSwgMjU1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTM5LCAyMzMsIDI1Myk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlIDBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgdWwsXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdHlsZWRjb2RlIHtcclxuICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmViZyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE3MTgyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlcGVuLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50d2l0dGVyLWVtYmVkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZURpdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgaW1nIHtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZUEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVGaWdDYXB0aW9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogNzc7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZU92ZXJsYXkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgICB6LWluZGV4OiA3ODtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTElKTtcclxuICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZSAuaW1hZ2VTdHlsZU92ZXJsYXk6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlSGVhZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTEzJTtcclxuICAgICAgICAgIGxlZnQ6IDE5JTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgLmltYWdlU3R5bGVPdmVybGF5OmhvdmVyIH4gLmltYWdlU3R5bGVGaWdDYXB0aW9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMjpob3ZlciAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT4sXHJcbiAgYm9keSxcclxufWA7XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\post\\\\[slug].js */"));
      }

      return defaultBlockSerializer(props);
    }
  }
};

function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_4___default()(_client__WEBPACK_IMPORTED_MODULE_7___default.a).image(source);
}

const Post = props => {
  const {
    title = "Missing title",
    name = "Missing name",
    subtitle = "Missing Subtitle",
    categories,
    authorImage,
    mainImage,
    body = []
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-189154141",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, title)), __jsx(_components_SlugLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("article", {
    className: "jsx-189154141" + " " + "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-189154141" + " " + "Lsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-189154141" + " " + "main-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-189154141" + " " + "post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: `${mainImage.url}`,
    className: "jsx-189154141" + " " + "postimage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-189154141" + " " + "header-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-189154141" + " " + "title-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-189154141" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 19
    }
  }, title), __jsx("span", {
    className: "jsx-189154141" + " " + "published",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, "Published by ", name))), __jsx("div", {
    className: "jsx-189154141" + " " + "block-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 176,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "jsx-189154141" + " " + "Rsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-189154141" + " " + "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "315497250",
    __self: undefined
  }, "*.jsx-189154141{margin:0;padding:0;}.article.jsx-189154141{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main-content.jsx-189154141{max-width:50%;background-color:#0e0f13;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.Lsection.jsx-189154141{height:100%;width:10%;}.Rsection.jsx-189154141{height:100%;width:10%;}.menu.jsx-189154141{color:white;position:fixed;}.Rsection.jsx-189154141 img.jsx-189154141{width:300px;height:auto;position:fixed;top:10%;}.Lsection.jsx-189154141+.Lsection.jsx-189154141{margin-left:2%;}.post.jsx-189154141{margin:1rem;}.postimage.jsx-189154141{width:100%;height:25em;margin-bottom:1rem;object-fit:cover;}.header-content.jsx-189154141{-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;background-image:linear-gradient( to right, #8180ff 0%, #8180ff 100% );-webkit-box-shadow:4px 4px 22px -3px #8180ff;box-shadow:4px 4px 22px -3px #8180ff;padding:2em;color:white;display:inline-block;margin-bottom:1rem;top:-10rem;left:1rem;border-radius:25px;}.header-content.jsx-189154141:before{content:\"\";position:absolute;top:7px;right:7px;bottom:7px;left:7px;background:rgb(23,24,32);border-radius:25px;}.published.jsx-189154141{margin:1rem;font-size:16px;}.title-content.jsx-189154141{position:relative;}.title.jsx-189154141{font-size:64px;font-weight:normal;margin-bottom:1rem;font-family:\"ponde\",sans-serif;}.block-content.jsx-189154141{height:auto;width:auto;}@media only screen and (max-width:1024px){.title.jsx-189154141{font-size:32px;}.main-content.jsx-189154141{width:100%;max-width:100%;margin-left:10%;margin-right:0%;}.header-content.jsx-189154141{width:92%;top:-4rem;left:-.25rem;}.post-image.jsx-189154141{width:100%;}}@media only screen and (max-width:768px){.title.jsx-189154141{font-size:32px;}.main-content.jsx-189154141{width:100%;max-width:100%;margin-left:0%;margin-right:10%;}.Lsection.jsx-189154141{display:none;}.postimage.jsx-189154141{height:15em;width:100%;}.header-content.jsx-189154141{width:82%;box-shadow:none;margin-bottom:none;}.title.jsx-189154141{margin-bottom:0;}.published.jsx-189154141{display:none;}}@media only screen and (max-width:425px){*.jsx-189154141{margin:0;padding:0;}.header-content.jsx-189154141{width:84%;}.post.jsx-189154141{margin:0.5rem;margin-right:3.5rem;}.main-content.jsx-189154141{width:100%;max-width:100%;margin-left:0;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xccG9zdFxcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNNa0IsQUFHb0IsQUFLSSxBQUlDLEFBTUYsQUFLQSxBQUtBLEFBS0EsQUFPRyxBQUlILEFBSUQsQUFPYSxBQXlCYixBQVlDLEFBS00sQUFJSCxBQU9ILEFBYUssQUFJSixBQVdELEFBTUMsQUFNSSxBQUlKLEFBT0UsQUFJRCxBQUtGLEFBTU0sQUFJSCxBQU1KLEFBS0MsQUFJSSxBQUtILFNBbE1ILEFBcUxFLENBaERBLEFBZ0NNLEFBcUJsQixDQTdJWSxBQWdDTSxBQTZDRCxBQWlCakIsQUFVaUIsQUE4Q0EsQ0FwTFAsQUFLQSxBQUtLLEFBS0gsQUFXZCxBQWdEaUIsQUFnQkosQUF1REUsQ0FKYixBQW1CQSxDQXRLeUIsQUFxTEgsQ0F6SnhCLEFBNkRxQixBQW9CbkIsQUEyQkEsQ0EwQkEsRUE3RUYsQ0E3RkEsQUFxTEUsQ0FoRGUsRUF0SGpCLEFBS0EsQ0F5QnFCLEFBNERyQixBQXVERSxDQWxJZSxBQXFCUSxFQXVFTCxBQTJCRCxBQWdCSSxBQThCTCxDQTFLbEIsQUFnRUEsRUFaVSxJQXlEUixDQXBDbUIsQUE0Rm5CLEdBaEhVLEVBckVFLEFBc0JKLENBcUtTLENBOUNFLENBeEdGLEFBNkVDLEdBMkNsQixFQXRJRixBQStDYSxNQW9CcUIsRUFrR2hDLEdBckhTLEFBNENULEFBMkJBLENBeEdGLFFBbUM2QixPQTlFN0IsVUFnR0EsUUFqQnFCLGtCQXpFckIsQ0EwRUEsWUFoQ29CLGtCQUtqQix1RUFDNEMsNkNBQ1IscUNBQ3pCLFlBTUEsWUFDUyxxQkFDRixtQkFDUixXQUNELFVBQ1MsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xccG9zdFxcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi8uLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgey8qIDxwPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9PC9wPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGNvZGVwZW46IChwcm9wcykgPT4gKFxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvZGVwZW4tZW1iZWRcIlxyXG4gICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgID48L2lmcmFtZT5cclxuICAgICksXHJcblxyXG4gICAgdHdpdHRlclR3ZWV0RW1iZWQ6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItZW1iZWRcIj5cclxuICAgICAgICA8VHdpdHRlclR3ZWV0RW1iZWQgdHdlZXRJZD17cHJvcHMubm9kZS50d2VldElkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgaW1hZ2VTdHlsZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZURpdlwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbWFnZVN0eWxlSGVhZGVyXCI+e3Byb3BzLm5vZGUuY2FwdGlvbn08L2gzPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlU3R5bGVcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZVN0eWxlQVwiIGhyZWY9e3Byb3BzLm5vZGUudXJsfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZU92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocHJvcHMubm9kZSl9PjwvaW1nPlxyXG4gICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZUZpZ0NhcHRpb25cIj57cHJvcHMubm9kZS5jYXB0aW9ufTwvZmlnY2FwdGlvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgYmxvY2s6IChwcm9wcykgPT4ge1xyXG4gICAgICAvLyBBZGQgYW5jaG9ycyBmb3IgSDInc1xyXG4gICAgICBpZiAobG9kYXNoSW5jbHVkZXMoW1wiaDJcIl0sIHByb3BzLm5vZGUuc3R5bGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICAgICA8YSBpZD17cHJvcHMuY2hpbGRyZW59IGhyZWY9e2AjYCArIHByb3BzLmNoaWxkcmVufT5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibGlua2ljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNTksMTMuNDFDMTEsMTMuOCAxMSwxNC40NCAxMC41OSwxNC44M0MxMC4yLDE1LjIyIDkuNTYsMTUuMjIgOS4xNywxNC44M0M3LjIyLDEyLjg4IDcuMjIsOS43MSA5LjE3LDcuNzZWNy43NkwxMi43MSw0LjIyQzE0LjY2LDIuMjcgMTcuODMsMi4yNyAxOS43OCw0LjIyQzIxLjczLDYuMTcgMjEuNzMsOS4zNCAxOS43OCwxMS4yOUwxOC4yOSwxMi43OEMxOC4zLDExLjk2IDE4LjE3LDExLjE0IDE3Ljg5LDEwLjM2TDE4LjM2LDkuODhDMTkuNTQsOC43MSAxOS41NCw2LjgxIDE4LjM2LDUuNjRDMTcuMTksNC40NiAxNS4yOSw0LjQ2IDE0LjEyLDUuNjRMMTAuNTksOS4xN0M5LjQxLDEwLjM0IDkuNDEsMTIuMjQgMTAuNTksMTMuNDFNMTMuNDEsOS4xN0MxMy44LDguNzggMTQuNDQsOC43OCAxNC44Myw5LjE3QzE2Ljc4LDExLjEyIDE2Ljc4LDE0LjI5IDE0LjgzLDE2LjI0VjE2LjI0TDExLjI5LDE5Ljc4QzkuMzQsMjEuNzMgNi4xNywyMS43MyA0LjIyLDE5Ljc4QzIuMjcsMTcuODMgMi4yNywxNC42NiA0LjIyLDEyLjcxTDUuNzEsMTEuMjJDNS43LDEyLjA0IDUuODMsMTIuODYgNi4xMSwxMy42NUw1LjY0LDE0LjEyQzQuNDYsMTUuMjkgNC40NiwxNy4xOSA1LjY0LDE4LjM2QzYuODEsMTkuNTQgOC43MSwxOS41NCA5Ljg4LDE4LjM2TDEzLjQxLDE0LjgzQzE0LjU5LDEzLjY2IDE0LjU5LDExLjc2IDEzLjQxLDEwLjU5QzEzLDEwLjIgMTMsOS41NiAxMy40MSw5LjE3WlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlua2ljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L3Byb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGVmYXVsdEJsb2NrU2VyaWFsaXplcihwcm9wcyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXHJcbiAgICBzdWJ0aXRsZSA9IFwiTWlzc2luZyBTdWJ0aXRsZVwiLFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICAgIGF1dGhvckltYWdlLFxyXG4gICAgbWFpbkltYWdlLFxyXG4gICAgYm9keSA9IFtdLFxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTbHVnTGF5b3V0PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTHNlY3Rpb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWJsaXNoZWRcIj5QdWJsaXNoZWQgYnkge25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIHtjYXRlZ29yaWVzICYmIChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIFBvc3RlZCBpblxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgIC53aWR0aCg1MClcclxuICAgICAgICAgICAgICAgICAgLnVybCgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0Ym9keVwiXHJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogMzAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDcwMCwgaDogODAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSc2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzRaanhVVWguanBnXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHByb3BzLmNoaWxkcmVuKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L1NsdWdMYXlvdXQ+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFydGljbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZjEzO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24gKyAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMjVlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICAgIzgxODBmZiAwJSxcclxuICAgICAgICAgICAgICAjODE4MGZmIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA0cHggMjJweCAtM3B4ICM4MTgwZmY7IFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAyMnB4IC0zcHggIzgxODBmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiA4cHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgdG9wOiAtMTByZW07XHJcbiAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjYxKSAwcHggMHB4IDBweCAycHg7ICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDI0LCAzMik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUtY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJwb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCA6Z2xvYmFsKGltZykge1xyXG4gICAgICAgIH1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgLyogQWRkaW5nIDpnbG9iYWwgY2FuIHRhcmdldCB0aGF0IGVsZW1lbnQgaW5zaWRlIHRoZSBibG9ja2NvbnRlbnQgZGl2ICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2lkZXNjcmVlbiBxdWVyeSAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB0b3A6IC00cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAtLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0LWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAtNXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIG1hcmdpbjogMyUgMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhOm5vdCg6aG92ZXIpLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTRweCAycHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSA0cHggMnB4LCByZ2IoMCwgMCwgMCkgLTRweCAzcHgsIHJnYigwLCAwLCAwKSA0cHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTNweCAzcHgsIHJnYigwLCAwLCAwKSAzcHggM3B4LCByZ2IoMCwgMCwgMCkgLTJweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAycHggM3B4LCByZ2IoMCwgMCwgMCkgLTFweCAzcHgsIHJnYigwLCAwLCAwKSAxcHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMHB4IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtM3B4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDNweCAxcHgsIHJnYigwLCAwLCAwKSAtMnB4IDFweCwgcmdiKDAsIDAsIDApIDJweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtMXB4IDFweCwgcmdiKDAsIDAsIDApIDFweCAxcHgsIHJnYigwLCAwLCAwKSAwcHggMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYTpob3ZlciAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyMjUsIDI1NSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEzOSwgMjMzLCAyNTMpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHVsLFxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3R5bGVkY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlYmcge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzE4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZXBlbi1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdpdHRlci1lbWJlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVEaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlIGltZyB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVBIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlRmlnQ2FwdGlvbiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVPdmVybGF5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgICAgei1pbmRleDogNzg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xJSk7XHJcbiAgICAgICAgICBzY2FsZTogMTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgLmltYWdlU3R5bGVPdmVybGF5OmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZUhlYWRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0xMyU7XHJcbiAgICAgICAgICBsZWZ0OiAxOSU7XHJcbiAgICAgICAgICB6LWluZGV4OiA3NztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlIC5pbWFnZVN0eWxlT3ZlcmxheTpob3ZlciB+IC5pbWFnZVN0eWxlRmlnQ2FwdGlvbiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDI6aG92ZXIgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIFwibWFpbkltYWdlXCI6IG1haW5JbWFnZS5hc3NldC0+LFxyXG4gIGJvZHksXHJcbn1gO1xyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\post\\\\[slug].js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3022914454",
    __self: undefined
  }, "body{margin:0;background-color:#000001;font-family:\"BlenderProMedium\",sans-serif;}img{height:100%;position:relative;}h4{font-size:22px;}.subheading{display:inline;}.block-content{color:white;margin:-5rem 1rem 1rem 1rem;}.block-content h2{font-size:32px;margin:3% 0;display:inline;}.block-content h2 a{color:rgba(255,255,255,1);-webkit-text-decoration:none;text-decoration:none;}.block-content h2 a:not(:hover) .underline{background:none;}.block-content h2 a .underline{text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -4px 2px, rgb(0,0,0) 4px 2px,rgb(0,0,0) -4px 3px,rgb(0,0,0) 4px 3px, rgb(0,0,0) -3px 3px,rgb(0,0,0) 3px 3px,rgb(0,0,0) -2px 3px, rgb(0,0,0) 2px 3px,rgb(0,0,0) -1px 3px,rgb(0,0,0) 1px 3px, rgb(0,0,0) 0px 3px;background-position:0% 32px;}.block-content a .underline{position:relative;text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -3px 1px, rgb(0,0,0) 3px 1px,rgb(0,0,0) -2px 1px,rgb(0,0,0) 2px 1px, rgb(0,0,0) -1px 1px,rgb(0,0,0) 1px 1px,rgb(0,0,0) 0px 1px;background-image:linear-gradient( rgba(255,255,255,0.25), rgba(255,255,255,0.25) );background-size:100% 2px;background-position:0% 21px;background-repeat:no-repeat;}.block-content a:hover .underline{background-image:linear-gradient( to left, rgb(0,255,225) 0%, rgb(0,255,255) 50%, rgb(0,225,255) 100% );}.block-content a{position:relative;color:rgb(139,233,253);-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 250ms ease 0s;transition:color 250ms ease 0s;}.block-content p{color:rgba(255,255,255,0.7);font-size:20px;}.block-content ul,.block-content li{font-size:16px;color:rgba(255,255,255,0.7);}.styledcode{margin:1em;}.youtubebg{padding:2rem;background:#171820;}.youtube-embed{width:100%;height:30rem;}.codepen-embed{width:100%;height:650px;padding-bottom:1%;}.twitter-embed{margin-left:17%;}.imageStyleDiv{position:relative;display:inline-block;}.imageStyle img{object-fit:cover;width:200px;height:200px;border:solid black 10px;border-radius:25px;}.imageStyleA{position:relative;display:inline-block;}.imageStyleFigCaption{opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);line-height:100%;z-index:77;color:#FFFFFF;-webkit-transition:opacity 1s;transition:opacity 1s;}.imageStyleOverlay{position:absolute;height:100%;width:100%;background-color:rgba(0,0,0,0.4);z-index:78;border-radius:25px;-webkit-transform:translate(0%,-1%);-ms-transform:translate(0%,-1%);transform:translate(0%,-1%);scale:1;opacity:0;-webkit-transition:opacity 2s;transition:opacity 2s;}.imageStyle .imageStyleOverlay:hover{opacity:1;}.imageStyleHeader{position:absolute;top:-13%;left:19%;z-index:77;}.imageStyle .imageStyleOverlay:hover~.imageStyleFigCaption{opacity:1;}.block-content h2:hover .linkicon path{opacity:1;}@media only screen and (max-width:768px){img{width:100%;}.youtube-embed{width:100%;height:12rem;}}@media only screen and (max-width:1024px){img{width:100%;}.youtube-embed{width:100%;height:16rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xccG9zdFxcW3NsdWddLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtaeUIsQUFHb0IsQUFPRyxBQUtHLEFBSUEsQUFJSCxBQUtHLEFBTWMsQUFLYixBQVNNLEFBS0osQUFvQmpCLEFBR2lCLEFBT2EsQUFNaEIsQUFLSixBQUlFLEFBS0YsQUFLQSxBQU1LLEFBSUUsQUFTRCxBQVFDLEFBS1IsQUFhUSxBQWFSLEFBSVEsQUFPUixBQUlBLEFBS0csQUFJQSxBQU9BLEFBSUEsU0FyTVksQ0F5SVAsQUEwQnBCLEFBV0EsQUFJQSxDQXZGQSxBQVNlLEFBS0EsQUE4RWIsQUFJZSxBQU9mLEFBSWUsQ0EvTEcsQUFhVSxDQTJFVCxFQW5GckIsQUFJQSxBQVNjLEFBNkRtQixDQWxEakMsQUEyRUEsQ0FhYyxDQXZFdUQsQUFvQjFDLEFBMENKLEFBaUJBLEFBa0JULEFBaUJILE1BbEVYLEFBS29CLEFBa0ZsQixBQVdBLEVBeEtxQixDQUxOLEFBOElOLENBeEZNLEFBMERQLENBYkssQ0FySGYsQUErSWEsRUF2RGIsRUEvRjZDLEVBMElsQyxBQThCRSxHQXJEYixBQWlCQSxDQWhIQSxDQXFEdUIsQUE4RVksQ0E3SG5DLEFBZ0ZBLEFBbUIwQixDQTdDMUIsQUFNQSxFQXFEMEMsRUE4QjFDLG1CQTNDcUIsUUEwQlIsRUF2SmIsQUE4QkEsUUE2R2tDLENBYmxDLEFBMEJxQixNQS9FWSxhQUxqQyxBQXFGK0IseURBL0UvQiw0QkFrRW1CLFdBY1QsTUFiRyxFQWNELFNBYkksQ0FjUSxhQWJBLGdCQXhGckIsdUJBc0dILGFBYkEsMEJBckc4QixxQkFhSCxPQVozQixrQkFhOEIsNEJBQ0EsNEJBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xccG9zdFxcW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi8uLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgey8qIDxwPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9PC9wPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGNvZGVwZW46IChwcm9wcykgPT4gKFxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvZGVwZW4tZW1iZWRcIlxyXG4gICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgID48L2lmcmFtZT5cclxuICAgICksXHJcblxyXG4gICAgdHdpdHRlclR3ZWV0RW1iZWQ6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItZW1iZWRcIj5cclxuICAgICAgICA8VHdpdHRlclR3ZWV0RW1iZWQgdHdlZXRJZD17cHJvcHMubm9kZS50d2VldElkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgaW1hZ2VTdHlsZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZURpdlwiPlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbWFnZVN0eWxlSGVhZGVyXCI+e3Byb3BzLm5vZGUuY2FwdGlvbn08L2gzPlxyXG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlU3R5bGVcIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJpbWFnZVN0eWxlQVwiIGhyZWY9e3Byb3BzLm5vZGUudXJsfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZU92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IocHJvcHMubm9kZSl9PjwvaW1nPlxyXG4gICAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZUZpZ0NhcHRpb25cIj57cHJvcHMubm9kZS5jYXB0aW9ufTwvZmlnY2FwdGlvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZmlndXJlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgYmxvY2s6IChwcm9wcykgPT4ge1xyXG4gICAgICAvLyBBZGQgYW5jaG9ycyBmb3IgSDInc1xyXG4gICAgICBpZiAobG9kYXNoSW5jbHVkZXMoW1wiaDJcIl0sIHByb3BzLm5vZGUuc3R5bGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICAgICA8YSBpZD17cHJvcHMuY2hpbGRyZW59IGhyZWY9e2AjYCArIHByb3BzLmNoaWxkcmVufT5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibGlua2ljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNTksMTMuNDFDMTEsMTMuOCAxMSwxNC40NCAxMC41OSwxNC44M0MxMC4yLDE1LjIyIDkuNTYsMTUuMjIgOS4xNywxNC44M0M3LjIyLDEyLjg4IDcuMjIsOS43MSA5LjE3LDcuNzZWNy43NkwxMi43MSw0LjIyQzE0LjY2LDIuMjcgMTcuODMsMi4yNyAxOS43OCw0LjIyQzIxLjczLDYuMTcgMjEuNzMsOS4zNCAxOS43OCwxMS4yOUwxOC4yOSwxMi43OEMxOC4zLDExLjk2IDE4LjE3LDExLjE0IDE3Ljg5LDEwLjM2TDE4LjM2LDkuODhDMTkuNTQsOC43MSAxOS41NCw2LjgxIDE4LjM2LDUuNjRDMTcuMTksNC40NiAxNS4yOSw0LjQ2IDE0LjEyLDUuNjRMMTAuNTksOS4xN0M5LjQxLDEwLjM0IDkuNDEsMTIuMjQgMTAuNTksMTMuNDFNMTMuNDEsOS4xN0MxMy44LDguNzggMTQuNDQsOC43OCAxNC44Myw5LjE3QzE2Ljc4LDExLjEyIDE2Ljc4LDE0LjI5IDE0LjgzLDE2LjI0VjE2LjI0TDExLjI5LDE5Ljc4QzkuMzQsMjEuNzMgNi4xNywyMS43MyA0LjIyLDE5Ljc4QzIuMjcsMTcuODMgMi4yNywxNC42NiA0LjIyLDEyLjcxTDUuNzEsMTEuMjJDNS43LDEyLjA0IDUuODMsMTIuODYgNi4xMSwxMy42NUw1LjY0LDE0LjEyQzQuNDYsMTUuMjkgNC40NiwxNy4xOSA1LjY0LDE4LjM2QzYuODEsMTkuNTQgOC43MSwxOS41NCA5Ljg4LDE4LjM2TDEzLjQxLDE0LjgzQzE0LjU5LDEzLjY2IDE0LjU5LDExLjc2IDEzLjQxLDEwLjU5QzEzLDEwLjIgMTMsOS41NiAxMy40MSw5LjE3WlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlua2ljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L3Byb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGVmYXVsdEJsb2NrU2VyaWFsaXplcihwcm9wcyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXHJcbiAgICBzdWJ0aXRsZSA9IFwiTWlzc2luZyBTdWJ0aXRsZVwiLFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICAgIGF1dGhvckltYWdlLFxyXG4gICAgbWFpbkltYWdlLFxyXG4gICAgYm9keSA9IFtdLFxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTbHVnTGF5b3V0PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTHNlY3Rpb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWJsaXNoZWRcIj5QdWJsaXNoZWQgYnkge25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIHtjYXRlZ29yaWVzICYmIChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIFBvc3RlZCBpblxyXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgIC53aWR0aCg1MClcclxuICAgICAgICAgICAgICAgICAgLnVybCgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0Ym9keVwiXHJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogMzAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDcwMCwgaDogODAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSc2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzRaanhVVWguanBnXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHByb3BzLmNoaWxkcmVuKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L1NsdWdMYXlvdXQ+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFydGljbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZjEzO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24gKyAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMjVlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICAgIzgxODBmZiAwJSxcclxuICAgICAgICAgICAgICAjODE4MGZmIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA0cHggMjJweCAtM3B4ICM4MTgwZmY7IFxyXG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAyMnB4IC0zcHggIzgxODBmZjtcclxuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiA4cHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgdG9wOiAtMTByZW07XHJcbiAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjYxKSAwcHggMHB4IDBweCAycHg7ICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDI0LCAzMik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUtY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJwb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCA6Z2xvYmFsKGltZykge1xyXG4gICAgICAgIH1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgLyogQWRkaW5nIDpnbG9iYWwgY2FuIHRhcmdldCB0aGF0IGVsZW1lbnQgaW5zaWRlIHRoZSBibG9ja2NvbnRlbnQgZGl2ICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2lkZXNjcmVlbiBxdWVyeSAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgICB0b3A6IC00cmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiAtLjI1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0LWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAtNXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIG1hcmdpbjogMyUgMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhOm5vdCg6aG92ZXIpLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTRweCAycHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSA0cHggMnB4LCByZ2IoMCwgMCwgMCkgLTRweCAzcHgsIHJnYigwLCAwLCAwKSA0cHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTNweCAzcHgsIHJnYigwLCAwLCAwKSAzcHggM3B4LCByZ2IoMCwgMCwgMCkgLTJweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAycHggM3B4LCByZ2IoMCwgMCwgMCkgLTFweCAzcHgsIHJnYigwLCAwLCAwKSAxcHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMHB4IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtM3B4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDNweCAxcHgsIHJnYigwLCAwLCAwKSAtMnB4IDFweCwgcmdiKDAsIDAsIDApIDJweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtMXB4IDFweCwgcmdiKDAsIDAsIDApIDFweCAxcHgsIHJnYigwLCAwLCAwKSAwcHggMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYTpob3ZlciAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyMjUsIDI1NSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEzOSwgMjMzLCAyNTMpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHVsLFxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3R5bGVkY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlYmcge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzE4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZXBlbi1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdpdHRlci1lbWJlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVEaXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlIGltZyB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVBIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlRmlnQ2FwdGlvbiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVPdmVybGF5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgICAgei1pbmRleDogNzg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xJSk7XHJcbiAgICAgICAgICBzY2FsZTogMTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgLmltYWdlU3R5bGVPdmVybGF5OmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZUhlYWRlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0xMyU7XHJcbiAgICAgICAgICBsZWZ0OiAxOSU7XHJcbiAgICAgICAgICB6LWluZGV4OiA3NztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlIC5pbWFnZVN0eWxlT3ZlcmxheTpob3ZlciB+IC5pbWFnZVN0eWxlRmlnQ2FwdGlvbiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDI6aG92ZXIgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIFwibWFpbkltYWdlXCI6IG1haW5JbWFnZS5hc3NldC0+LFxyXG4gIGJvZHksXHJcbn1gO1xyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\post\\\\[slug].js */"));
};

const query = groq__WEBPACK_IMPORTED_MODULE_3___default.a`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage.asset->,
  body,
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const {
    slug = ""
  } = context.query;
  return await _client__WEBPACK_IMPORTED_MODULE_7___default.a.fetch(query, {
    slug
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2x1Z0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3NsdWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvRHJhY3VsYVRoZW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9OaWdodG93bFRoZW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdGF0aWMvZ2l0aHViaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9uZXh0anNpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JvcVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJGb290ZXIiLCJGc3R5bGUiLCJCbGVuZGVyUHJvTSIsImZvb3RlciIsIm15bGlua3MiLCJmb2xsb3ciLCJsaW5rIiwiZmF2aWNvbiIsIlR3aXR0ZXJMb2dvIiwidHdpdHRlcmljb24iLCJHaXRodWJMb2dvIiwicmxpbmtzIiwiYnVpbHR3aXRoIiwiYndpdGgiLCJTYW5pdHlMb2dvIiwiUmVhY3RMb2dvIiwiTmV4dGpzTG9nbyIsIlplaXRMb2dvIiwiU2x1Z0xheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZGlyZWN0aW9uIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsIndvcmRTcGFjaW5nIiwid29yZEJyZWFrIiwibGluZUhlaWdodCIsIk1velRhYlNpemUiLCJPVGFiU2l6ZSIsInRhYlNpemUiLCJXZWJraXRIeXBoZW5zIiwiTW96SHlwaGVucyIsIm1zSHlwaGVucyIsImh5cGhlbnMiLCJ3b3JkV3JhcCIsInBhZGRpbmciLCJtYXJnaW4iLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjb21tZW50IiwicHJvbG9nIiwiY2RhdGEiLCJkZWxpbWl0ZXIiLCJib29sZWFuIiwia2V5d29yZCIsInNlbGVjdG9yIiwiaW1wb3J0YW50IiwiYXRydWxlIiwib3BlcmF0b3IiLCJwdW5jdHVhdGlvbiIsInRhZyIsImRvY3R5cGUiLCJidWlsdGluIiwiZW50aXR5IiwibnVtYmVyIiwic3ltYm9sIiwicHJvcGVydHkiLCJjb25zdGFudCIsInZhcmlhYmxlIiwic3RyaW5nIiwiY2hhciIsInVybCIsInRleHREZWNvcmF0aW9uIiwiZnVuY3Rpb24iLCJyZWdleCIsImJvbGQiLCJmb250V2VpZ2h0IiwiaXRhbGljIiwiZm9udFN0eWxlIiwiaW5zZXJ0ZWQiLCJkZWxldGVkIiwidGV4dFNoYWRvdyIsInByZSIsImRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIiLCJCbG9ja0NvbnRlbnQiLCJkZWZhdWx0U2VyaWFsaXplcnMiLCJ0eXBlcyIsImJsb2NrIiwic2VyaWFsaXplcnMiLCJjb2RlIiwibm9kZSIsImxhbmd1YWdlIiwiQ29kZVRoZW1lMSIsInlvdXR1YmUiLCJjb2RlcGVuIiwidHdpdHRlclR3ZWV0RW1iZWQiLCJ0d2VldElkIiwiaW1hZ2VTdHlsZSIsImNhcHRpb24iLCJ1cmxGb3IiLCJsb2Rhc2hJbmNsdWRlcyIsInN0eWxlIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJQb3N0IiwidGl0bGUiLCJuYW1lIiwic3VidGl0bGUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJtYWluSW1hZ2UiLCJib2R5IiwidyIsImgiLCJmaXQiLCJjb25maWciLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL3Bvc3QvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0L1tzbHVnXS5qc1wiKTtcbiIsIi8vIGNsaWVudC5qc1xyXG5jb25zdCBzYW5pdHlDbGllbnQgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiBcImNvc2RseXR3XCIsXHJcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXHJcbiAgdXNlQ2RuOiB0cnVlLFxyXG59KTtcclxuIiwiaW1wb3J0IFR3aXR0ZXJMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9naXRodWJpY29uLnBuZ1wiO1xyXG5pbXBvcnQgU2FuaXR5TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZ1wiO1xyXG5pbXBvcnQgUmVhY3RMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmdcIjtcclxuaW1wb3J0IE5leHRqc0xvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvbmV4dGpzaWNvbi5wbmdcIjtcclxuaW1wb3J0IFplaXRMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZ1wiO1xyXG5pbXBvcnQgRnN0eWxlIGZyb20gXCIuLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLkJsZW5kZXJQcm9NfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5teWxpbmtzfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mb2xsb3d9PkZvbGxvdyB1cyBvbjo8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBJY29uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0ZzdHlsZS50d2l0dGVyaWNvbn1cclxuICAgICAgICAgICAgICBzcmM9e1R3aXR0ZXJMb2dvfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VHdpdHRlcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIEljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17RnN0eWxlLnR3aXR0ZXJpY29ufVxyXG4gICAgICAgICAgICAgIHNyYz17R2l0aHViTG9nb31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUucmxpbmtzfT5cclxuICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QUJPVVQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPkJMT0c8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoxMjNAbWFpbC5jb21cIiB0YXJnZXQ9XCJfdG9wXCI+XHJcbiAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuYnVpbHR3aXRofT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5id2l0aH0+QnVpbHQgd2l0aDo8L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJTYW5pdHkgSWNvblwiIHNyYz17U2FuaXR5TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2FuaXR5LmlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5TYW5pdHk8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17UmVhY3RMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5SZWFjdDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtOZXh0anNMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk5leHQuanM8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17WmVpdExvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+VmVyY2VsPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgU2x1Z0xheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiTGF5b3V0XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2x1Z0xheW91dDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmxlbmRlcnByb0hcIjogXCJmb290ZXJfYmxlbmRlcnByb0hfXzFOTU5XXCIsXG5cdFwiQmxlbmRlclByb01cIjogXCJmb290ZXJfQmxlbmRlclByb01fXzFNc1IzXCIsXG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9fM1pOM3NcIixcblx0XCJ0d2l0dGVyaWNvblwiOiBcImZvb3Rlcl90d2l0dGVyaWNvbl9fMXhUZDVcIixcblx0XCJsaW5rXCI6IFwiZm9vdGVyX2xpbmtfXzNoc1NLXCIsXG5cdFwibXlsaW5rc1wiOiBcImZvb3Rlcl9teWxpbmtzX19VVUdvclwiLFxuXHRcImJ1aWx0d2l0aFwiOiBcImZvb3Rlcl9idWlsdHdpdGhfX09ia1JKXCIsXG5cdFwiZmF2aWNvblwiOiBcImZvb3Rlcl9mYXZpY29uX18xbFlxMFwiLFxuXHRcInJsaW5rc1wiOiBcImZvb3Rlcl9ybGlua3NfX2k1enM5XCIsXG5cdFwiZm9sbG93XCI6IFwiZm9vdGVyX2ZvbGxvd19fMXR3RGpcIixcblx0XCJid2l0aFwiOiBcImZvb3Rlcl9id2l0aF9fMVhhVzhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJsZW5kZXJwcm9IXCI6IFwic2x1Z19ibGVuZGVycHJvSF9fMU40YXFcIixcblx0XCJCbGVuZGVyUHJvTVwiOiBcInNsdWdfQmxlbmRlclByb01fX0RFc2tGXCIsXG5cdFwicG9uZGVcIjogXCJzbHVnX3BvbmRlX19hXzNENVwiLFxuXHRcInBpeGVsZm9udFwiOiBcInNsdWdfcGl4ZWxmb250X19ENzh1Y1wiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICB2YWx1ZTogdHJ1ZSxcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9kZWZhdWx0ID0ge1xyXG4gICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSc6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlXCIsXHJcbiAgICBkaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJwcmVcIixcclxuICAgIHdvcmRTcGFjaW5nOiBcIm5vcm1hbFwiLFxyXG4gICAgd29yZEJyZWFrOiBcIm5vcm1hbFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIE1velRhYlNpemU6IFwiNFwiLFxyXG4gICAgT1RhYlNpemU6IFwiNFwiLFxyXG4gICAgdGFiU2l6ZTogXCI0XCIsXHJcbiAgICBXZWJraXRIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIE1vekh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgbXNIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIGh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxyXG4gICAgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJzoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gICAgZm9udEZhbWlseTogXCJDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2VcIixcclxuICAgIGRpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcInByZVwiLFxyXG4gICAgd29yZFNwYWNpbmc6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgTW96VGFiU2l6ZTogXCI0XCIsXHJcbiAgICBPVGFiU2l6ZTogXCI0XCIsXHJcbiAgICB0YWJTaXplOiBcIjRcIixcclxuICAgIFdlYmtpdEh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgTW96SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBtc0h5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgaHlwaGVuczogXCJub25lXCIsXHJcbiAgICBwYWRkaW5nOiBcIjFlbVwiLFxyXG4gICAgbWFyZ2luOiBcIi41ZW0gMFwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMxNzE4MjBcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ3ByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06OnNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6c2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAnOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0nOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyYjJiMmJcIixcclxuICAgIHBhZGRpbmc6IFwiLjFlbVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIi4zZW1cIixcclxuICB9LFxyXG4gIGNvbW1lbnQ6IHtcclxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICB9LFxyXG4gIHByb2xvZzoge1xyXG4gICAgY29sb3I6IFwiIzgwODA4MFwiLFxyXG4gIH0sXHJcbiAgY2RhdGE6IHtcclxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICB9LFxyXG4gIGRlbGltaXRlcjoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgYm9vbGVhbjoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAga2V5d29yZDoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgc2VsZWN0b3I6IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIGltcG9ydGFudDoge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgYXRydWxlOiB7XHJcbiAgICBjb2xvcjogXCIjY2M3ODMyXCIsXHJcbiAgfSxcclxuICBvcGVyYXRvcjoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gIH0sXHJcbiAgcHVuY3R1YXRpb246IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiYXR0ci1uYW1lXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIHRhZzoge1xyXG4gICAgY29sb3I6IFwiI2U4YmY2YVwiLFxyXG4gIH0sXHJcbiAgXCJ0YWcgLnB1bmN0dWF0aW9uXCI6IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGRvY3R5cGU6IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGJ1aWx0aW46IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIGVudGl0eToge1xyXG4gICAgY29sb3I6IFwiIzY4OTdiYlwiLFxyXG4gIH0sXHJcbiAgbnVtYmVyOiB7XHJcbiAgICBjb2xvcjogXCIjNjg5N2JiXCIsXHJcbiAgfSxcclxuICBzeW1ib2w6IHtcclxuICAgIGNvbG9yOiBcIiM2ODk3YmJcIixcclxuICB9LFxyXG4gIHByb3BlcnR5OiB7XHJcbiAgICBjb2xvcjogXCIjOTg3NmFhXCIsXHJcbiAgfSxcclxuICBjb25zdGFudDoge1xyXG4gICAgY29sb3I6IFwiIzk4NzZhYVwiLFxyXG4gIH0sXHJcbiAgdmFyaWFibGU6IHtcclxuICAgIGNvbG9yOiBcIiM5ODc2YWFcIixcclxuICB9LFxyXG4gIHN0cmluZzoge1xyXG4gICAgY29sb3I6IFwiIzZhODc1OVwiLFxyXG4gIH0sXHJcbiAgY2hhcjoge1xyXG4gICAgY29sb3I6IFwiIzZhODc1OVwiLFxyXG4gIH0sXHJcbiAgXCJhdHRyLXZhbHVlXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhNWMyNjFcIixcclxuICB9LFxyXG4gIFwiYXR0ci12YWx1ZSAucHVuY3R1YXRpb25cIjoge1xyXG4gICAgY29sb3I6IFwiI2E1YzI2MVwiLFxyXG4gIH0sXHJcbiAgXCJhdHRyLXZhbHVlIC5wdW5jdHVhdGlvbjpmaXJzdC1jaGlsZFwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICB1cmw6IHtcclxuICAgIGNvbG9yOiBcIiMyODdiZGVcIixcclxuICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxyXG4gIH0sXHJcbiAgZnVuY3Rpb246IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIHJlZ2V4OiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMzNjQxMzVcIixcclxuICB9LFxyXG4gIGJvbGQ6IHtcclxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIH0sXHJcbiAgaXRhbGljOiB7XHJcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcbiAgfSxcclxuICBpbnNlcnRlZDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMjk0NDM2XCIsXHJcbiAgfSxcclxuICBkZWxldGVkOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiM0ODRhNGFcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnByb3BlcnR5XCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnByb3BlcnR5ICsgLnRva2VuLnB1bmN0dWF0aW9uXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLmlkXCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnNlbGVjdG9yID4gLnRva2VuLmNsYXNzXCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnNlbGVjdG9yID4gLnRva2VuLmF0dHJpYnV0ZVwiOiB7XHJcbiAgICBjb2xvcjogXCIjZmZjNjZkXCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5zZWxlY3RvciA+IC50b2tlbi5wc2V1ZG8tY2xhc3NcIjoge1xyXG4gICAgY29sb3I6IFwiI2ZmYzY2ZFwiLFxyXG4gIH0sXHJcbiAgXCJjb2RlLmxhbmd1YWdlLWNzcyAudG9rZW4uc2VsZWN0b3IgPiAudG9rZW4ucHNldWRvLWVsZW1lbnRcIjoge1xyXG4gICAgY29sb3I6IFwiI2ZmYzY2ZFwiLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gIHZhbHVlOiB0cnVlLFxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX2RlZmF1bHQgPSB7XHJcbiAgXCJjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXFxucHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gICAgZm9udEZhbWlseTogXCJDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2VcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcblxyXG4gICAgd29yZFNwYWNpbmc6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkQnJlYWs6IFwibm9ybWFsXCIsXHJcbiAgICB3b3JkV3JhcDogXCJub3JtYWxcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICBNb3pUYWJTaXplOiBcIjRcIixcclxuICAgIE9UYWJTaXplOiBcIjRcIixcclxuICAgIHRhYlNpemU6IFwiNFwiLFxyXG4gICAgV2Via2l0SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBNb3pIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIG1zSHlwaGVuczogXCJub25lXCIsXHJcbiAgICBoeXBoZW5zOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIFwicHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ106Oi1tb3otc2VsZWN0aW9uLFxcbnByZVtjbGFzcyo9J2xhbmd1YWdlLSddIDo6LW1vei1zZWxlY3Rpb24sXFxuY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddOjotbW96LXNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10gOjotbW96LXNlbGVjdGlvblwiOiB7XHJcbiAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzJiMmIyYlwiLFxyXG4gIH0sXHJcbiAgXCJwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXTo6c2VsZWN0aW9uLFxcbnByZVtjbGFzcyo9J2xhbmd1YWdlLSddIDo6c2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXTo6c2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSA6OnNlbGVjdGlvblwiOiB7XHJcbiAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzJiMmIyYlwiLFxyXG4gIH0sXHJcbiAgXCJAbWVkaWEgcHJpbnRcIjoge1xyXG4gICAgXCJjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sXFxuICBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXVwiOiB7XHJcbiAgICAgIHRleHRTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByZTogeyBwYWRkaW5nOiBcIjFlbVwiLCBtYXJnaW46IFwiMC41ZW0gMFwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfSxcclxuICBcIjpub3QocHJlKSA+IGNvZGUsXFxucHJlXCI6IHtcclxuICAgIGNvbG9yOiBcInJnYmEoMzMsIDY2LCAxMzEsIDAuODUpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsIDY2LCAxMzEsIDAuODUpXCIsXHJcbiAgfSxcclxuICBcIjpub3QocHJlKSA+IGNvZGVcIjoge1xyXG4gICAgcGFkZGluZzogXCIwLjFlbVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuM2VtXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiLFxyXG4gIH0sXHJcbiAgY29tbWVudDogeyBjb2xvcjogXCJyZ2IoOTksIDExOSwgMTE5KVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBwcm9sb2c6IHsgY29sb3I6IFwicmdiKDk5LCAxMTksIDExOSlcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgY2RhdGE6IHsgY29sb3I6IFwicmdiKDk5LCAxMTksIDExOSlcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgcHVuY3R1YXRpb246IHsgY29sb3I6IFwicmdiKDE5OSwgMTQ2LCAyMzQpXCIgfSxcclxuICBcIi5uYW1lc3BhY2VcIjogeyBjb2xvcjogXCJyZ2IoMTc4LCAyMDQsIDIxNClcIiB9LFxyXG4gIGRlbGV0ZWQ6IHsgY29sb3I6IFwicmdiYSgyMzksIDgzLCA4MCwgMC41NilcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgcHJvcGVydHk6IHsgY29sb3I6IFwicmdiKDEyOCwgMjAzLCAxOTYpXCIgfSxcclxuICBzeW1ib2w6IHsgY29sb3I6IFwicmdiKDEyOCwgMjAzLCAxOTYpXCIgfSxcclxuICBrZXl3b3JkOiB7IGNvbG9yOiBcInJnYigxMjcsIDIxOSwgMjAyKVwiIH0sXHJcbiAgdGFnOiB7IGNvbG9yOiBcInJnYigxMjcsIDIxOSwgMjAyKVwiIH0sXHJcbiAgb3BlcmF0b3I6IHsgY29sb3I6IFwicmdiKDEyNywgMjE5LCAyMDIpXCIgfSxcclxuICBib29sZWFuOiB7IGNvbG9yOiBcInJnYigyNTUsIDg4LCAxMTYpXCIgfSxcclxuICBudW1iZXI6IHsgY29sb3I6IFwicmdiKDI0NywgMTQwLCAxMDgpXCIgfSxcclxuICBjaGFyOiB7IGNvbG9yOiBcInJnYigxMzAsIDE3MCwgMjU1KVwiIH0sXHJcbiAgYnVpbHRpbjogeyBjb2xvcjogXCJyZ2IoMTMwLCAxNzAsIDI1NSlcIiB9LFxyXG4gIGZ1bmN0aW9uOiB7IGNvbG9yOiBcInJnYigxMzAsIDE3MCwgMjU1KVwiIH0sXHJcbiAgY29uc3RhbnQ6IHsgY29sb3I6IFwicmdiKDEzMCwgMTcwLCAyNTUpXCIgfSxcclxuICBkb2N0eXBlOiB7IGNvbG9yOiBcInJnYigxOTksIDE0NiwgMjM0KVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBzZWxlY3RvcjogeyBjb2xvcjogXCJyZ2IoMTk5LCAxNDYsIDIzNClcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgaW5zZXJ0ZWQ6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIFwiYXR0ci1uYW1lXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIHN0cmluZzogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIHVybDogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIGVudGl0eTogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBcIi50b2tlbi5zdHJpbmdcIjogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiLnN0eWxlIC50b2tlbi5zdHJpbmdcIjogeyBjb2xvcjogXCJyZ2IoMTczLCAyMTksIDEwMylcIiB9LFxyXG4gIFwiY2xhc3MtbmFtZVwiOiB7IGNvbG9yOiBcInJnYigyNTUsIDIwMywgMTM5KVwiIH0sXHJcbiAgYXRydWxlOiB7IGNvbG9yOiBcInJnYigyNTUsIDIwMywgMTM5KVwiIH0sXHJcbiAgXCJhdHRyLXZhbHVlXCI6IHsgY29sb3I6IFwicmdiKDI1NSwgMjAzLCAxMzkpXCIgfSxcclxuICByZWdleDogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiB9LFxyXG4gIGltcG9ydGFudDogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfSxcclxuICB2YXJpYWJsZTogeyBjb2xvcjogXCJyZ2IoMjE0LCAyMjIsIDIzNSlcIiB9LFxyXG4gIGJvbGQ6IHsgZm9udFdlaWdodDogXCJib2xkXCIgfSxcclxuICBpdGFsaWM6IHsgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG4iLCIvLyBbc2x1Z10uanNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgeyBUd2l0dGVyVHdlZXRFbWJlZCB9IGZyb20gXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgU2x1Z0xheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TbHVnTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vY3NzL3NsdWcubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gaW1wb3J0IHRoZW1lIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20vZGFyY3VsYSc7XHJcbmltcG9ydCBDb2RlVGhlbWUgZnJvbSBcIi4uLy4uL2xpYi9OaWdodG93bFRoZW1lXCI7XHJcbmltcG9ydCBDb2RlVGhlbWUxIGZyb20gXCIuLi8uLi9saWIvRHJhY3VsYVRoZW1lXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIGFzIGxvZGFzaEluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEJsb2NrU2VyaWFsaXplciA9IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2s7XHJcblxyXG5jb25zdCBzZXJpYWxpemVycyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgY29kZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN0eWxlZGNvZGVcIlxyXG4gICAgICAgIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfVxyXG4gICAgICAgIHN0eWxlPXtDb2RlVGhlbWUxfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLm5vZGUuY29kZX1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICAgICksXHJcbiAgICB5b3V0dWJlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlYmdcIj5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLWVtYmVkXCJcclxuICAgICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9ICB0aGlzIHNob3dzIGFsbCB0aGUgaW5mbyAqL31cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgICB7LyogPHA+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsKX08L3A+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgY29kZXBlbjogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29kZXBlbi1lbWJlZFwiXHJcbiAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgPjwvaWZyYW1lPlxyXG4gICAgKSxcclxuXHJcbiAgICB0d2l0dGVyVHdlZXRFbWJlZDogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlci1lbWJlZFwiPlxyXG4gICAgICAgIDxUd2l0dGVyVHdlZXRFbWJlZCB0d2VldElkPXtwcm9wcy5ub2RlLnR3ZWV0SWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBpbWFnZVN0eWxlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlRGl2XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImltYWdlU3R5bGVIZWFkZXJcIj57cHJvcHMubm9kZS5jYXB0aW9ufTwvaDM+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImltYWdlU3R5bGVBXCIgaHJlZj17cHJvcHMubm9kZS51cmx9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlT3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VybEZvcihwcm9wcy5ub2RlKX0+PC9pbWc+XHJcbiAgICAgICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJpbWFnZVN0eWxlRmlnQ2FwdGlvblwiPntwcm9wcy5ub2RlLmNhcHRpb259PC9maWdjYXB0aW9uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBibG9jazogKHByb3BzKSA9PiB7XHJcbiAgICAgIC8vIEFkZCBhbmNob3JzIGZvciBIMidzXHJcbiAgICAgIGlmIChsb2Rhc2hJbmNsdWRlcyhbXCJoMlwiXSwgcHJvcHMubm9kZS5zdHlsZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHByb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgICAgIDxhIGlkPXtwcm9wcy5jaGlsZHJlbn0gaHJlZj17YCNgICsgcHJvcHMuY2hpbGRyZW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsaW5raWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMC41OSwxMy40MUMxMSwxMy44IDExLDE0LjQ0IDEwLjU5LDE0LjgzQzEwLjIsMTUuMjIgOS41NiwxNS4yMiA5LjE3LDE0LjgzQzcuMjIsMTIuODggNy4yMiw5LjcxIDkuMTcsNy43NlY3Ljc2TDEyLjcxLDQuMjJDMTQuNjYsMi4yNyAxNy44MywyLjI3IDE5Ljc4LDQuMjJDMjEuNzMsNi4xNyAyMS43Myw5LjM0IDE5Ljc4LDExLjI5TDE4LjI5LDEyLjc4QzE4LjMsMTEuOTYgMTguMTcsMTEuMTQgMTcuODksMTAuMzZMMTguMzYsOS44OEMxOS41NCw4LjcxIDE5LjU0LDYuODEgMTguMzYsNS42NEMxNy4xOSw0LjQ2IDE1LjI5LDQuNDYgMTQuMTIsNS42NEwxMC41OSw5LjE3QzkuNDEsMTAuMzQgOS40MSwxMi4yNCAxMC41OSwxMy40MU0xMy40MSw5LjE3QzEzLjgsOC43OCAxNC40NCw4Ljc4IDE0LjgzLDkuMTdDMTYuNzgsMTEuMTIgMTYuNzgsMTQuMjkgMTQuODMsMTYuMjRWMTYuMjRMMTEuMjksMTkuNzhDOS4zNCwyMS43MyA2LjE3LDIxLjczIDQuMjIsMTkuNzhDMi4yNywxNy44MyAyLjI3LDE0LjY2IDQuMjIsMTIuNzFMNS43MSwxMS4yMkM1LjcsMTIuMDQgNS44MywxMi44NiA2LjExLDEzLjY1TDUuNjQsMTQuMTJDNC40NiwxNS4yOSA0LjQ2LDE3LjE5IDUuNjQsMTguMzZDNi44MSwxOS41NCA4LjcxLDE5LjU0IDkuODgsMTguMzZMMTMuNDEsMTQuODNDMTQuNTksMTMuNjYgMTQuNTksMTEuNzYgMTMuNDEsMTAuNTlDMTMsMTAuMiAxMyw5LjU2IDEzLjQxLDkuMTdaXCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvcHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZWZhdWx0QmxvY2tTZXJpYWxpemVyKHByb3BzKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIHN1YnRpdGxlID0gXCJNaXNzaW5nIFN1YnRpdGxlXCIsXHJcbiAgICBjYXRlZ29yaWVzLFxyXG4gICAgYXV0aG9ySW1hZ2UsXHJcbiAgICBtYWluSW1hZ2UsXHJcbiAgICBib2R5ID0gW10sXHJcbiAgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0aW1hZ2VcIiBzcmM9e2Ake21haW5JbWFnZS51cmx9YH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1Ymxpc2hlZFwiPlB1Ymxpc2hlZCBieSB7bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7Lyoge2NhdGVnb3JpZXMgJiYgKFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge2F1dGhvckltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgLndpZHRoKDUwKVxyXG4gICAgICAgICAgICAgICAgICAudXJsKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3Rib2R5XCJcclxuICAgICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogNTAwLCBoOiAzMDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogNzAwLCBoOiA4MDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xheW91dD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vNFpqeFVVaC5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2cocHJvcHMuY2hpbGRyZW4pfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvU2x1Z0xheW91dD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBmMTM7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiArIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgICAjODE4MGZmIDAlLFxyXG4gICAgICAgICAgICAgICM4MTgwZmYgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDRweCAyMnB4IC0zcHggIzgxODBmZjsgXHJcbiAgICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDIycHggLTNweCAjODE4MGZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgICAgLyogcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci10b3A6IDhweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICB0b3A6IC0xMHJlbTtcclxuICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuNjEpIDBweCAwcHggMHB4IDJweDsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMywgMjQsIDMyKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZS1jb250ZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcInBvbmRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAvKiBBZGRpbmcgOmdsb2JhbCBjYW4gdGFyZ2V0IHRoYXQgZWxlbWVudCBpbnNpZGUgdGhlIGJsb2NrY29udGVudCBkaXYgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aWRlc2NyZWVuIHF1ZXJ5ICovXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICAgIHRvcDogLTRyZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IC0uMjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IC01cmVtIDFyZW0gMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzJSAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGE6bm90KDpob3ZlcikudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtNHB4IDJweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDRweCAycHgsIHJnYigwLCAwLCAwKSAtNHB4IDNweCwgcmdiKDAsIDAsIDApIDRweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtM3B4IDNweCwgcmdiKDAsIDAsIDApIDNweCAzcHgsIHJnYigwLCAwLCAwKSAtMnB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDJweCAzcHgsIHJnYigwLCAwLCAwKSAtMXB4IDNweCwgcmdiKDAsIDAsIDApIDFweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAwcHggM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC0zcHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgM3B4IDFweCwgcmdiKDAsIDAsIDApIC0ycHggMXB4LCByZ2IoMCwgMCwgMCkgMnB4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0xcHggMXB4LCByZ2IoMCwgMCwgMCkgMXB4IDFweCwgcmdiKDAsIDAsIDApIDBweCAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhOmhvdmVyIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDIyNSwgMjU1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTM5LCAyMzMsIDI1Myk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlIDBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgdWwsXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdHlsZWRjb2RlIHtcclxuICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmViZyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE3MTgyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlcGVuLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50d2l0dGVyLWVtYmVkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZURpdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgaW1nIHtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZUEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGVGaWdDYXB0aW9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogNzc7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZU92ZXJsYXkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgICB6LWluZGV4OiA3ODtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTElKTtcclxuICAgICAgICAgIHNjYWxlOiAxO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2VTdHlsZSAuaW1hZ2VTdHlsZU92ZXJsYXk6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZVN0eWxlSGVhZGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTEzJTtcclxuICAgICAgICAgIGxlZnQ6IDE5JTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlU3R5bGUgLmltYWdlU3R5bGVPdmVybGF5OmhvdmVyIH4gLmltYWdlU3R5bGVGaWdDYXB0aW9uIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMjpob3ZlciAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT4sXHJcbiAgYm9keSxcclxufWA7XHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhnQUFBQjRDQVlBQUFBNVpEYlNBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlScFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ESXhJRGM1TGpFMU5Ea3hNU3dnTWpBeE15OHhNQzh5T1MweE1UbzBOem94TmlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJFUkNNVUl3UVRNNE5rTkZNVEZGTTBGQk5USkZSVE16TlRKRU1VSkRORFlpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UkVSQ01VSXdRVEk0TmtORk1URkZNMEZCTlRKRlJUTXpOVEpFTVVKRE5EWWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVFdGamFXNTBiM05vS1NJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rVTFNVGM0UVRNeU9UbEJNREV4UlRJNVFURTFRa014TURRMlFUZzVNRFJFSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pKQk5ERTBRVUpET1RsQk1URXhSVEk1UVRFMVFrTXhNRFEyUVRnNU1EUkVJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrOGtTcXlBQUFERDVKUkVGVWVOcnNYUTJRbFZVWmZsbFlVQmUyWUN1UUZOZWw5UTlFY1ZFUVNBM3hCMnBUU1ZjRVNqRUxuWm9tQlcweWE1dzBtMUd5ektTbXRFWURjNmhHb2hSRHJVR1FaVWtvMEVBUkNBWEsrRkV3WEZ6Mnl2WStmTy9kK2ZidS9mbSsrNTMzKzduM1BEUFB3QzZYYzc3elB2YzdQKzk1ejN0NmRIUjBrRVhwb2xlSnRHTXdjd1R6RTh3NlppMXpFTE5HMkpmWkorUC90REVQTVBjSzMySnVZMjVsYm1hdVovNDc2WWJwa2NBMytCam11Y3h4d2xITUFVcDF2YzE4aWZtaXNKblphZ1UyanlITUtjeEp6UE96dkkxaEFXLzlNdVlTNXBQTU42ekF4ZU5qek9uTXE1bWpZL3FNTGN5RnpQbk1YVlpnYjdpUU9ZdDVPYk15SVQxaE8vTVB6Sjh4bjdjQ1o1L3NUV1hlS3BPbEpBT1RzL3VZVHpCVDVTNHdoSjNCdklNNXRNUldLRnVZZDB2M25TcEhnVC9Obk1zOHBjU1hvcTh4WnpPZktoZUJUMkkrd0x5MHpId096ekMvTG9LSGhvb1E2OEtFNlhZWm84cE5YSkkycnhNYlZKYmFHM3dhODNIbUdXUkJJdlEwNW9ha3Y4RTltRjlocnJIaWRzRVpZcE92aW8wUytRYkQvL3RMNWxWV3o3ejRIWE1tT1g3eHhBaGN6MXdrWGJORllXeGtYc1o4UFFsZDlIam1LaXV1TDV3cU5oc2ZkNEdieUhIVkRiQ2ErY1lBc1YxVFhBWEdPUEliWm0rclZkSG9MVGE4UG00QzN5UVRxZ3Fya1JGTkhoR2J4bUtTTlZQRXRUQ1BMd2ExYlZDQm02UkxzVyt1RGc0enJ5Rm56emwwZ2NmTHBNQ091Ym80Uk00ZStZb3dCYTZYYWIyZExZY0R4SWFOS1dhZFhJekE4RkN0bHJXYlJYaUFNK1FjOHVueDhqdDJ3bS82S3l0dUpEaFZiTjlEVTJCc0hGd1o4RUgza2VOb2YxbitYdXJZSjIxRm0vY0hMT3RLMFVDbGk0YnJjUzBGRDFuOURIV05iamhPSmhIWUw0VS85dWlFQzNxUW5BQzhaMlFTdXNQMWI0M014UUhMUitodUEvT2ZKZ1hHQnZYZktQaVdIeVlMT0hIUW51UGZxOG1KMFVKVVpkS0M3L0NXSXFvU01WanY1ckhqZjVuOUE5YUYvZVN6ODlqUmR4ZDlHNW5aejExUzRLRmdtSGxTRjRMY1d4SWc3R3A1MWhIeTdPL20rV3k3MkNBb1lKOXZtQnFEVDJaKzI1QXhYdkR4V1hSeE9LTHlPWExPQzhVTlcyVk1IQ1BQNmhYTERkVi9oMmdUdUl2K00vTmlRdy9WSU9PNFgyRGNueU5mdEZ4emdEZGtYSHFWdVpPY2cyTWdEcGE5SjJOam02czhqUFZWNUJ4T0d5ejhPRGxSbnNPWUorUVpBKzloM3N0OHYwZ2J2R1RJbmt1Wmx3UVJHS0d0ZnpMME1PMWkwUFlBWmNEQkFrZjhjT1pLNlJHV3kvaG5PaUlDNi8zVHlmSFluVWZPUVRkOGdXNmdZSkdSbGZLRk14VjRsemxwOVN4d0wyblFTWVllNU0wOGI0WGZ0VGg0T09RdU9UMmNtYWgzdTZ3ZVRPQjFXZUdrL0k3Qk13eUtDN3hscUp5T0NNUk5DMnVxM3Y4WWZLNTYwY3JYSkt0U0JuSFQ2ME1MQjZiUEdFT3IzbjRFeGtHd29WYUh4QUJhWGUxSDREa0tEM0dVMWFFVEd0NjZXNzBLUEpGMHZFZ25XRjA3TVVTaHpOTkZ1NElDMzZqVXFJSE1mbGJiSXpZWXFGVDJUWVVFUnRxRXp5cFZqcVhOV1ZiZkl6YlFPcTdTS0JybUZIZ0c2WjU4bTJqMVZiVkJaZWFTS1ZQZ0p1WEdOVnA5MVczUWxFdGdKQkRUem1aenQ5VlgzUWFqM1V0Y3Q4Q1hLMWQ4RnprbjZjb2RzTUYzbGV1NExKdkFreFFyWEJWQ281S0V1OFFtV3BqY09iT1Z6UWFrQjBTMGhVWUd1UTlramJiUjZ0b0YySmJFTHBoR3ZsQnNhU0trdVRYOUJvOGp2ZlNBRDFseHMrSlZzWTBHK29pbW5WMzBXS1dLc0NIK1BhdGxUdHhEeFFVTmVNRll0OERqbENyNU5jVTBoMk5Nc0V0c3BJRng3akY0TCtrY1E4R1VmYlhWTVM5d1drRWp1QkJ6cWhvSWpEaWtIUW9WYkNXNzVlZ1ZXOFFQWVJySG9ZdldpajkrMnVybUdVdVV5aDBCZ2V1VkNsOWhkWXZjVnZVUXVGYXBjRHYyUm0rcldpMkJFUnI3cHRYTk0yQ3JsSmJBZ3hRS1Jsam9CMVkzejRDNE94WEtIUVNCYXhRSy9wL1Z6RGMwanRMV2FBbTgzK3JsR3dlMEJOYUlrK3BwOWZJTmpVMkhmaEJZSTB0T1g2dVhiMmlFRmZmV3ltOVZaZlh5aldxTlFyVUV0cm16WW1JeitLSTFFa1lma2k3SFhtM3EvVVhEdG1HbFJzRXBwVy9qWUt1Ylp3d21uWERsVklYaWt1WkVxNXRuMUNtVnU3K0M5SEpWMVZuZEluOFo5a0hnM1VxRmo3SzZlY2JaU3VYdWhzQTdsUW9mYTNXTDNGWTdOUVUrazV4d1hJdkNQb01SbWdKdlZpb2M3c29KVnIrQ21FQjZydDNORUhpVDRzTlBzZm9WeEJXS1pXK0Nvd1BwZkxZclZZQnRRK3czdDFvZHN3SkRHTElQYVIyTVB4NXZNQ0lxOXlwVmdBZWZiblhNaWVtSzRpSnNka2ZhRjcxR3NSRzNrTDIwSXh0NmlXMjBjQ1JkWXRyd0t4VXJ3aUdyYTYyZTNmQjUwcjM5dk5rdDhJdktqY0VabkdxcmFTZXF4U2FhV09FV0dEKzBLVmFHaWRiOVZ0ZE8vSWgwZ2gzVGFNc1VHRnRWeTVVYmhWdThwbGx0anlSSm1hbGN4M0xSdE12azU0OGhOTzVoY3BKOGx5dHc0dS9uSWRUVG1RTGFuVTRZbWVpMmhWQTVVdDRqd1hoTG1ZbUxrNVpMUTVxTDFKS1RJTDNMRzR4ZmhISGNwRm9hZW5FWmlZdjhKOCtHSk83cXRMaVVaWDI2SU1SWkpFN1UzVW1sSFdLTHRpRnQwbE1VWGhySHg5MC9aR1o4L3lnNXUwdVZJUm9CU3pSYzlyU3V4TVJGeXNKNXBKOTd6QTJjQ1lQcmVWZXVOeGliLzRzaW1IakFrL1lUMHNuQ0dqWVFuZkVMY2p4Sm8wT3VleEZscE16SWRtZkRCY3kvK2lpMFdXWnRLQmpaQXJCNWpTMndYa1YrQXpGTS9KU1NkZndVeVVVL1NVNm0zcVlJaDUwSm1kcmx1cFFEVjkrTTlGQWdiZy81RUhVL1NZaXUvbWJtYkNvKzNoZXBsNTZRTDgvZktYNGh1RDFseVlla1kxTXAraUJEREhGbmR2dm01UkFZaTNHdjJWOXVaMzQveTBJYm5wVEg1STBjR2ZEaGNSM2NDOUpiNElxOVZ5ajhpeTB4dHVFNm4xSFNTMEhjRDhmb0N3ZmY5bnl2QXFON1JhSXVyMGxVSGlEbnFyVTIxNXB2Z015VUVaS3lrRnpwOVF3QjI1eGJaRDM5VFRKL0V3c21taitXdHRSSlR4Vlh3QTdZdU9nZTR3NkJjL0RhRG4vWXlCeVpVY1lWekdYTVkrVlAwemlRcFU2VGJHQyszeEYvWEplckRma2FWOEZjNzdPaVZ1WWxyaktHTVhjekp6RnJtTnNOTjJ5V29yaHBmaTNtNHI0c1dtVjkva0pYMjhFRDR6Y2RFdTVIUWxiemJIdk1reW5QTld4RlRDck9JdjFMc2pDWlF0TFF1TjU2UHBueXBHRXFGR214aFB6ZlhZZ3JZMzVQWGU4T3FCSlhIY2FJUncwMTdENEs1d1kwckJEdWphbTRUMU9CSEZ0ZWJoL0ZSQXQzR1ByTlJvdmRxZlFGSDhmSXBBajM3T0cyVE9SS1BqbEF3eERNTjVEQ3UwMnRyemlCNG5UM0V5YTB3MlNDUmNXK3dla1oybmVLZUlCRzE4eTVWVHhXdDhueXBwR0NCZHovaGNLOUt1K0ExQmtuM0ZsSVhLOENBL2RUY1hmZS9zQlZCeHdYeTZTN3hsb1NWOWR1S0xKeEt5TXdhSnd5OThHMU85ZkxCNzBLbkJMbmg5KzM1aFRxZnNzSTd1UEZqc2VENUJ5NndwZmdrSTh5RWFpL05BS2p4aVdwK1VIUkltVlNZT0ExY1QvNnhleU1uNThqSjdMam9IVGRjOFROOXkxeWRwWXlnK1QzaUdjTTl4eU1rUy9OUHlJdzdMYVlDSHl6T0tHOG9ZaDE0ZndpMW1ybjVpbnZST2F6ekFlWlI4bnYrak9ITVB1NVBqZUtPWmQ1ZmdocjMyeXNqY0dhZDRIZjV5Nm1vVlhNZFQ0ZnJKblpNMGQ1ZGN3OThya0crZDE1OHJzTklqWit0MVkrTXo4aWdUOFNzYmh3T3ZYMSs5ekZuRGg0VDVZL2ZnNk9qNUZaWHpZZ2Nmang1SVNScm5HTk0walErUytYZnh0M0FWM0t2RDZpcmpFVlliZThSMnp1T3h1ZWwzVndMbUEzNVhueWR4Y3VJamZtVVRLQm5hTjNJcHBVVFN4MjVSRGt6QkMyN3FiNjlDWTlKTlA3eWdRS0hNVXp3N2JUZ2l3TGd4NEtXOHo4Z2srUk1hdEdRTUZGQ1JPNEtnSnhZZHRBSVZRbVR2MHRrSEhSajhqRFpTMkx2ZHdieWQ4eGptT3A5Sk9kd3BhenlFQ1VhNUF4T0JNNDYvcFlnQzhOM0c2dnlIcHpuNnlIRWV1RWRNZll1S2dsNTRvOEJCTDBwL0FqT21wbDBoZldtMnNraE5sa0NsczhFSktxTGZRNThVcGpLSG1QSU9sVG9tL3VRWm5YTERaVm9PbUQyZGhhL0JUcDMzWjJkQW1LQzV0ZGFGSmNEWUZKeHRWekluSW5KaFhyeFdiTnBndldTcTJBc3pIWVZIalVhbGNRaUY0ZFM2N3pSRWtRR0lESDZ6cm1EZkozaSs3MitaSk1xTlRzRTBaeWxFZklDY2h1c1pwMkdjWVFUL2F3ZGtWaFpiOUJOajFFZE54QzRVWml4SEdXUEVkc3NTbU1Dc05NYjRUZ3RSK1NFNTM0WkJtS2l6YWZSazZBUTJpWGhrV1J2d3FUaVNteUpGaGJCc0xpWE5WRjB1WnRZVmNlWllJeUJMRWhOdXNhOGg4T2s0U1VUQnVsYldqamMxRTlSTlFaNk9BbnhRbEMrS1p4N0hLVngvLzNkZ1RQNmpYTlZJdTBaYmkwN1hDVUJqYnBpellGQkFla3o5bG04MWl0b2VpeXlTT3l0Q0dIK0w4bDUxenp5amdaTTQ0Q3A0RU45cXZJMmNSQWNBRTJIbkM0K2N0YVRnRVBxQ1huOVA0RjhtYWl4MWtnNHI0VFJ5UEdXV0NMRWhpRExaVHhmd0VHQUlnMkl0c0toS3BjQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL25leHRqc2ljb24tZTVhMzBjNWU3ZjcxMzhmNzBhMmMwY2NiNmVlZTY0ZjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3JlYWN0aWNvbi1iNzc0OGE5NTJkNzE2MTlmMjU5NGRmZmM3MzMyZGI5MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2FuaXR5aWNvbi0yM2I5NjdiN2MxYjg4MDJjMjc4ZmJhZjEwYTlmOThjNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdHdpdHRlcmljb24tNTljZGFhYTAzODFlMDE3Yzc1ZTYxNDNhNGVlY2VkZGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3plaXRpY29uLTQzMWY2ZmJhYTU1OTYyNzYxMzIxNTU3NTlhYmYzNDllLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncm9xXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR3aXR0ZXItZW1iZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9