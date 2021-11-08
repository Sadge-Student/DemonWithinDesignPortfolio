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
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\NextJSPortfolio\\components\\Footer.js";


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
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ga0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV4dEpTUG9ydGZvbGlvXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdpdHRlckxvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvdHdpdHRlcmljb24ucG5nXCI7XHJcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL2dpdGh1Ymljb24ucG5nXCI7XHJcbmltcG9ydCBTYW5pdHlMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL3Nhbml0eWljb24ucG5nXCI7XHJcbmltcG9ydCBSZWFjdExvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvcmVhY3RpY29uLnBuZ1wiO1xyXG5pbXBvcnQgTmV4dGpzTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9uZXh0anNpY29uLnBuZ1wiO1xyXG5pbXBvcnQgWmVpdExvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvemVpdGljb24ucG5nXCI7XHJcbmltcG9ydCBGc3R5bGUgZnJvbSBcIi4uL2Nzcy9mb290ZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUuQmxlbmRlclByb019PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLm15bGlua3N9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZvbGxvd30+Rm9sbG93IHVzIG9uOjwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBhbHQ9XCJUd2l0dGVyIEljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17RnN0eWxlLnR3aXR0ZXJpY29ufVxyXG4gICAgICAgICAgICAgIHNyYz17VHdpdHRlckxvZ299XHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Ud2l0dGVyPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXIgSWNvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtGc3R5bGUudHdpdHRlcmljb259XHJcbiAgICAgICAgICAgICAgc3JjPXtHaXRodWJMb2dvfVxyXG4gICAgICAgICAgICA+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5HaXRodWI8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5ybGlua3N9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BQk9VVDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL3Bvc3RzXCI+QkxPRzwvYT5cclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOjEyM0BtYWlsLmNvbVwiIHRhcmdldD1cIl90b3BcIj5cclxuICAgICAgICAgIENPTlRBQ1RcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5idWlsdHdpdGh9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmJ3aXRofT5CdWlsdCB3aXRoOjwvc3Bhbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlNhbml0eSBJY29uXCIgc3JjPXtTYW5pdHlMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zYW5pdHkuaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlNhbml0eTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtSZWFjdExvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlJlYWN0PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJUd2l0dGVyIEljb25cIiBzcmM9e05leHRqc0xvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+TmV4dC5qczwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiVHdpdHRlciBJY29uXCIgc3JjPXtaZWl0TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5WZXJjZWw8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\NextJSPortfolio\\\\components\\\\Footer.js */")));

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
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\NextJSPortfolio\\components\\SlugLayout.js";


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
}, "body{margin:0;background-color:#000001;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xcY29tcG9uZW50c1xcU2x1Z0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIsQUFHa0IsU0FDZ0IseUJBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xcY29tcG9uZW50c1xcU2x1Z0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBTbHVnTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGVudFwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbHVnTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\NextJSPortfolio\\\\components\\\\SlugLayout.js */"));

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
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\NextJSPortfolio\\pages\\about.js";

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
        }, ".linkicon.jsx-1709162960{width:26px;height:100%;margin-left:0px;top:3px;position:relative;}.linkicon.jsx-1709162960 path.jsx-1709162960{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGd0IsQUFHNEIsQUFRQyxXQVBBLENBUWQsV0FQa0IsZ0JBQ1IsUUFDVSxrQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV4dEpTUG9ydGZvbGlvXFxwYWdlc1xcYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgeyBUd2l0dGVyVHdlZXRFbWJlZCB9IGZyb20gXCJyZWFjdC10d2l0dGVyLWVtYmVkXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xyXG5pbXBvcnQgU2x1Z0xheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TbHVnTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vY3NzL3NsdWcubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gaW1wb3J0IHRoZW1lIGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20vZGFyY3VsYSc7XHJcbmltcG9ydCBDb2RlVGhlbWUgZnJvbSBcIi4uL2xpYi9OaWdodG93bFRoZW1lXCI7XHJcbmltcG9ydCBDb2RlVGhlbWUxIGZyb20gXCIuLi9saWIvRHJhY3VsYVRoZW1lXCI7XHJcbmltcG9ydCB7IGluY2x1ZGVzIGFzIGxvZGFzaEluY2x1ZGVzIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdEJsb2NrU2VyaWFsaXplciA9IEJsb2NrQ29udGVudC5kZWZhdWx0U2VyaWFsaXplcnMudHlwZXMuYmxvY2s7XHJcblxyXG5jb25zdCBzZXJpYWxpemVycyA9IHtcclxuICB0eXBlczoge1xyXG4gICAgY29kZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxTeW50YXhIaWdobGlnaHRlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cInN0eWxlZGNvZGVcIlxyXG4gICAgICAgIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfVxyXG4gICAgICAgIHN0eWxlPXtDb2RlVGhlbWUxfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLm5vZGUuY29kZX1cclxuICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cclxuICAgICksXHJcbiAgICB5b3V0dWJlOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ5b3V0dWJlYmdcIj5cclxuICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLWVtYmVkXCJcclxuICAgICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCl9ICB0aGlzIHNob3dzIGFsbCB0aGUgaW5mbyAqL31cclxuICAgICAgICA8L2lmcmFtZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGNvZGVwZW46IChwcm9wcykgPT4gKFxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICBoc3BhY2U9XCIwXCJcclxuICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgIGFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvZGVwZW4tZW1iZWRcIlxyXG4gICAgICAgIHNyYz17cHJvcHMubm9kZS51cmx9XHJcbiAgICAgID48L2lmcmFtZT5cclxuICAgICksXHJcblxyXG4gICAgdHdpdHRlclR3ZWV0RW1iZWQ6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXItZW1iZWRcIj5cclxuICAgICAgICA8VHdpdHRlclR3ZWV0RW1iZWQgdHdlZXRJZD17cHJvcHMubm9kZS50d2VldElkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgYmxvY2s6IChwcm9wcykgPT4ge1xyXG4gICAgICAvLyBBZGQgYW5jaG9ycyBmb3IgSDInc1xyXG4gICAgICBpZiAobG9kYXNoSW5jbHVkZXMoW1wiaDJcIl0sIHByb3BzLm5vZGUuc3R5bGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICAgICA8YSBpZD17cHJvcHMuY2hpbGRyZW59IGhyZWY9e2AjYCArIHByb3BzLmNoaWxkcmVufT5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwibGlua2ljb25cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNTksMTMuNDFDMTEsMTMuOCAxMSwxNC40NCAxMC41OSwxNC44M0MxMC4yLDE1LjIyIDkuNTYsMTUuMjIgOS4xNywxNC44M0M3LjIyLDEyLjg4IDcuMjIsOS43MSA5LjE3LDcuNzZWNy43NkwxMi43MSw0LjIyQzE0LjY2LDIuMjcgMTcuODMsMi4yNyAxOS43OCw0LjIyQzIxLjczLDYuMTcgMjEuNzMsOS4zNCAxOS43OCwxMS4yOUwxOC4yOSwxMi43OEMxOC4zLDExLjk2IDE4LjE3LDExLjE0IDE3Ljg5LDEwLjM2TDE4LjM2LDkuODhDMTkuNTQsOC43MSAxOS41NCw2LjgxIDE4LjM2LDUuNjRDMTcuMTksNC40NiAxNS4yOSw0LjQ2IDE0LjEyLDUuNjRMMTAuNTksOS4xN0M5LjQxLDEwLjM0IDkuNDEsMTIuMjQgMTAuNTksMTMuNDFNMTMuNDEsOS4xN0MxMy44LDguNzggMTQuNDQsOC43OCAxNC44Myw5LjE3QzE2Ljc4LDExLjEyIDE2Ljc4LDE0LjI5IDE0LjgzLDE2LjI0VjE2LjI0TDExLjI5LDE5Ljc4QzkuMzQsMjEuNzMgNi4xNywyMS43MyA0LjIyLDE5Ljc4QzIuMjcsMTcuODMgMi4yNywxNC42NiA0LjIyLDEyLjcxTDUuNzEsMTEuMjJDNS43LDEyLjA0IDUuODMsMTIuODYgNi4xMSwxMy42NUw1LjY0LDE0LjEyQzQuNDYsMTUuMjkgNC40NiwxNy4xOSA1LjY0LDE4LjM2QzYuODEsMTkuNTQgOC43MSwxOS41NCA5Ljg4LDE4LjM2TDEzLjQxLDE0LjgzQzE0LjU5LDEzLjY2IDE0LjU5LDExLjc2IDEzLjQxLDEwLjU5QzEzLDEwLjIgMTMsOS41NiAxMy40MSw5LjE3WlwiXHJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAubGlua2ljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8L3Byb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGVmYXVsdEJsb2NrU2VyaWFsaXplcihwcm9wcyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLCBtYWluSW1hZ2UsIGJvZHkgPSBbXSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2x1Z0xheW91dD5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxzZWN0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0aW1hZ2VcIiBzcmM9e2Ake21haW5JbWFnZS51cmx9YH0gLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhYm91dFwiPkFib3V0IFVzPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0Ym9keVwiXHJcbiAgICAgICAgICAgICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPcHRpb25zPXt7IHc6IDUwMCwgaDogMzAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDcwMCwgaDogODAwLCBmaXQ6IFwibWF4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uY2xpZW50LmNvbmZpZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSc2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzRaanhVVWguanBnXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKHByb3BzLmNoaWxkcmVuKX0gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8L1NsdWdMYXlvdXQ+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzAwMCwgMCAtMnB4IDAgIzAwMCwgMCAycHggMCAjMDAwLCAtMnB4IDAgMCAjMDAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgbGVmdDogMjhweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvbmRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJ0aWNsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMGYxMztcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24gaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uICsgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgcmdiKDI1NSwgMTAwLCAyMDUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMTI4LCAxMjgsIDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCAyMjUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDhweCAwcHggMHB4OyAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICAgICAgLyogcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgKi9cclxuICAgICAgICAgIC8qIGJvcmRlci10b3A6IDhweCBzb2xpZCBibGFjazsgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQ6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICBib3R0b206IDdweDtcclxuICAgICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsMC42MSkgMHB4IDBweCAwcHggMnB4OyAqL1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzLCAyNCwgMzIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2hlZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUtY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IDpnbG9iYWwoaW1nKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAvKiBBZGRpbmcgOmdsb2JhbCBjYW4gdGFyZ2V0IHRoYXQgZWxlbWVudCBpbnNpZGUgdGhlIGJsb2NrY29udGVudCBkaXYgICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiB3aWRlc2NyZWVuIHF1ZXJ5ICovXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0aW1hZ2Uge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAxO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIuKAolwiO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBuZW9uIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG5lb24ge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCA0MHB4ICMyMjhkZmYsIDAgMCA3MHB4ICMyMjhkZmYsIDAgMCA4MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDEwMHB4ICMyMjhkZmYsIDAgMCAxNTBweCAjMjI4ZGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMTVweCAjZmZmLFxyXG4gICAgICAgICAgICAgIDAgMCAyMHB4ICMyMjhkZmYsIDAgMCAzNXB4ICMyMjhkZmYsIDAgMCA0MHB4ICMyMjhkZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDUwcHggIzIyOGRmZiwgMCAwIDc1cHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJoZWFkaW5nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhOm5vdCg6aG92ZXIpLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTRweCAycHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSA0cHggMnB4LCByZ2IoMCwgMCwgMCkgLTRweCAzcHgsIHJnYigwLCAwLCAwKSA0cHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTNweCAzcHgsIHJnYigwLCAwLCAwKSAzcHggM3B4LCByZ2IoMCwgMCwgMCkgLTJweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAycHggM3B4LCByZ2IoMCwgMCwgMCkgLTFweCAzcHgsIHJnYigwLCAwLCAwKSAxcHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMHB4IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDMycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtM3B4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDNweCAxcHgsIHJnYigwLCAwLCAwKSAtMnB4IDFweCwgcmdiKDAsIDAsIDApIDJweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtMXB4IDFweCwgcmdiKDAsIDAsIDApIDFweCAxcHgsIHJnYigwLCAwLCAwKSAwcHggMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLFxyXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDIxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYTpob3ZlciAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gbGVmdCxcclxuICAgICAgICAgICAgcmdiKDEyOSwxMjgsMjU1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDEyOSwxMjgsMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigxMjksMTI4LDI1NSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEzOSwgMjMzLCAyNTMpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZSAwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAgYTpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDEyOSwxMjgsMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHVsLFxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3R5bGVkY29kZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlYmcge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxNzE4MjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZS1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZXBlbi1lbWJlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHdpdHRlci1lbWJlZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDI6aG92ZXIgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwiYWJvdXRcIl1bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT4sXHJcbiAgYm9keSxcclxufWA7XHJcblxyXG5BYm91dC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\NextJSPortfolio\\\\pages\\\\about.js */"));
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
    className: "jsx-1123315691",
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
    className: "jsx-1123315691" + " " + "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1123315691" + " " + "Lsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1123315691" + " " + "main-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1123315691" + " " + "post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1123315691" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: `${mainImage.url}`,
    className: "jsx-1123315691" + " " + "postimage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx("h1", {
    className: "jsx-1123315691" + " " + "about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "About Us")), __jsx("div", {
    className: "jsx-1123315691" + " " + "block-content",
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
    className: "jsx-1123315691" + " " + "Rsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1123315691" + " " + "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3849573751",
    __self: undefined
  }, "*.jsx-1123315691{margin:0;padding:0;}h1.jsx-1123315691{text-shadow:2px 0 0 #000,0 -2px 0 #000,0 2px 0 #000,-2px 0 0 #000;color:white;font-size:64px;position:absolute;bottom:60px;left:28px;font-family:\"Ponde\",sans-serif;}.article.jsx-1123315691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.container.jsx-1123315691{position:relative;text-align:center;color:white;}.main-content.jsx-1123315691{max-width:50%;background-color:#0e0f13;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.Lsection.jsx-1123315691{height:100%;width:10%;}.Rsection.jsx-1123315691{height:100%;width:10%;}.menu.jsx-1123315691{color:white;position:fixed;}.Rsection.jsx-1123315691 img.jsx-1123315691{width:300px;height:auto;position:fixed;top:10%;}.Lsection.jsx-1123315691+.Lsection.jsx-1123315691{margin-left:2%;}.post.jsx-1123315691{margin:1rem;}.postimage.jsx-1123315691{width:100%;height:30em;margin-bottom:1rem;}.header-content.jsx-1123315691{-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;background-image:linear-gradient( to right, rgb(255,100,205) 0%, rgb(128,128,255) 50%, rgb(0,255,225) 100% );padding:2em;color:white;display:inline-block;margin-bottom:1rem;}.header-content.jsx-1123315691:before{content:\"\";position:absolute;top:7px;right:7px;bottom:7px;left:7px;background:rgb(23,24,32);}.published.jsx-1123315691{margin:1rem;font-size:16px;}.title-content.jsx-1123315691{position:relative;}.title.jsx-1123315691{font-size:52px;font-weight:normal;margin-bottom:1rem;}.block-content.jsx-1123315691{height:auto;width:auto;}@media only screen and (max-width:1024px){.title.jsx-1123315691{font-size:32px;}.main-content.jsx-1123315691{width:100%;max-width:100%;margin-left:10%;margin-right:0%;}.Rsection.jsx-1123315691{display:none;}.header-content.jsx-1123315691{width:92%;}.post-image.jsx-1123315691{width:100%;}}@media only screen and (max-width:768px){.title.jsx-1123315691{font-size:32px;}.main-content.jsx-1123315691{width:100%;max-width:100%;margin-left:0%;margin-right:10%;}.Lsection.jsx-1123315691{display:none;}.postimage.jsx-1123315691{height:15em;width:100%;}.header-content.jsx-1123315691{width:90%;}}@media only screen and (max-width:425px){*.jsx-1123315691{margin:0;padding:0;}.header-content.jsx-1123315691{width:84%;}.post.jsx-1123315691{margin:0.5rem;margin-right:3.5rem;}.main-content.jsx-1123315691{width:100%;max-width:100%;margin-left:0;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStKa0IsQUFHb0IsQUFLNEQsQUFVeEQsQUFJSyxBQU1KLEFBTUYsQUFLQSxBQUtBLEFBS0EsQUFPRyxBQUlILEFBSUQsQUFNYSxBQXNCYixBQVdDLEFBS00sQUFJSCxBQU1ILEFBYUssQUFJSixBQU9FLEFBSUgsQUFJQyxBQU1JLEFBSUosQUFPRSxBQUlELEFBS0YsQUFNRCxBQUtDLEFBSUksQUFLSCxTQWhNSCxBQW1MRSxDQXBDWixBQThCQSxBQVdBLENBM0hZLEFBNEJNLEFBMkNELEFBZWpCLEFBVWlCLEFBb0NBLENBbEtQLEFBS0EsQUFLSyxBQUtILEFBV2QsQUEyQ2lCLEFBZUosQUFxREUsQ0E3QmIsQUF5QkEsQ0EzSXlCLEFBbUtILENBdkl4QixBQXdEcUIsQUFtQm5CLEFBeUJBLEdBdElrQixBQXNGcEIsQ0F4R0EsQUFtTEUsR0FwSkYsQUFLQSxDQXlCcUIsQUFzRHJCLEFBcURFLENBMUhlLEFBb0JRLEVBa0VMLEFBeUJELEFBb0NELENBeEpsQixBQTJEQSxFQVhVLEtBb0JXLEFBK0VuQixFQXpLWSxDQXVFRixFQWpFRSxBQXNCSixDQW1KUyxDQXBDRSxDQWhHckIsQUF1RW9CLEtBckZwQixBQTJDYSxDQXZFYixLQTBGQSxFQXFGRSxHQXZHUyxBQTBDVCxBQXlCQSxRQTNKWSxDQTBGZSxPQWhGN0IsSUFUaUIsY0EwRmpCLENBekZvQixpQkFvQnBCLENBbkJjLFlBQ0YsQUEyRFEsVUExRGMsUUFnRS9CLHVCQS9ESCxzRkFpRWMsWUFNQSxZQUNTLHFCQUNGLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXh0SlNQb3J0Zm9saW9cXHBhZ2VzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XHJcbmltcG9ydCB7IFR3aXR0ZXJUd2VldEVtYmVkIH0gZnJvbSBcInJlYWN0LXR3aXR0ZXItZW1iZWRcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBTbHVnTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NsdWdMYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFByaXNtIGFzIFN5bnRheEhpZ2hsaWdodGVyIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jc3Mvc2x1Zy5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBpbXBvcnQgdGhlbWUgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbS9kYXJjdWxhJztcclxuaW1wb3J0IENvZGVUaGVtZSBmcm9tIFwiLi4vbGliL05pZ2h0b3dsVGhlbWVcIjtcclxuaW1wb3J0IENvZGVUaGVtZTEgZnJvbSBcIi4uL2xpYi9EcmFjdWxhVGhlbWVcIjtcclxuaW1wb3J0IHsgaW5jbHVkZXMgYXMgbG9kYXNoSW5jbHVkZXMgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0QmxvY2tTZXJpYWxpemVyID0gQmxvY2tDb250ZW50LmRlZmF1bHRTZXJpYWxpemVycy50eXBlcy5ibG9jaztcclxuXHJcbmNvbnN0IHNlcmlhbGl6ZXJzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBjb2RlOiAocHJvcHMpID0+IChcclxuICAgICAgPFN5bnRheEhpZ2hsaWdodGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3R5bGVkY29kZVwiXHJcbiAgICAgICAgbGFuZ3VhZ2U9e3Byb3BzLm5vZGUubGFuZ3VhZ2V9XHJcbiAgICAgICAgc3R5bGU9e0NvZGVUaGVtZTF9XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMubm9kZS5jb2RlfVxyXG4gICAgICA8L1N5bnRheEhpZ2hsaWdodGVyPlxyXG4gICAgKSxcclxuICAgIHlvdXR1YmU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlvdXR1YmViZ1wiPlxyXG4gICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICB2c3BhY2U9XCIwXCJcclxuICAgICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICAgIG1hcmdpbkhlaWdodD1cIjBcIlxyXG4gICAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInlvdXR1YmUtZW1iZWRcIlxyXG4gICAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsKX0gIHRoaXMgc2hvd3MgYWxsIHRoZSBpbmZvICovfVxyXG4gICAgICAgIDwvaWZyYW1lPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcblxyXG4gICAgY29kZXBlbjogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgIGhzcGFjZT1cIjBcIlxyXG4gICAgICAgIG1hcmdpbldpZHRoPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgYWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNhbWVzaXRlPVwiTm9uZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29kZXBlbi1lbWJlZFwiXHJcbiAgICAgICAgc3JjPXtwcm9wcy5ub2RlLnVybH1cclxuICAgICAgPjwvaWZyYW1lPlxyXG4gICAgKSxcclxuXHJcbiAgICB0d2l0dGVyVHdlZXRFbWJlZDogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlci1lbWJlZFwiPlxyXG4gICAgICAgIDxUd2l0dGVyVHdlZXRFbWJlZCB0d2VldElkPXtwcm9wcy5ub2RlLnR3ZWV0SWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBibG9jazogKHByb3BzKSA9PiB7XHJcbiAgICAgIC8vIEFkZCBhbmNob3JzIGZvciBIMidzXHJcbiAgICAgIGlmIChsb2Rhc2hJbmNsdWRlcyhbXCJoMlwiXSwgcHJvcHMubm9kZS5zdHlsZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHByb3BzLm5vZGUuc3R5bGU+XHJcbiAgICAgICAgICAgIDxhIGlkPXtwcm9wcy5jaGlsZHJlbn0gaHJlZj17YCNgICsgcHJvcHMuY2hpbGRyZW59PlxyXG4gICAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwcm9wcywgbnVsbCwgMil9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJsaW5raWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGRkZGXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk0xMC41OSwxMy40MUMxMSwxMy44IDExLDE0LjQ0IDEwLjU5LDE0LjgzQzEwLjIsMTUuMjIgOS41NiwxNS4yMiA5LjE3LDE0LjgzQzcuMjIsMTIuODggNy4yMiw5LjcxIDkuMTcsNy43NlY3Ljc2TDEyLjcxLDQuMjJDMTQuNjYsMi4yNyAxNy44MywyLjI3IDE5Ljc4LDQuMjJDMjEuNzMsNi4xNyAyMS43Myw5LjM0IDE5Ljc4LDExLjI5TDE4LjI5LDEyLjc4QzE4LjMsMTEuOTYgMTguMTcsMTEuMTQgMTcuODksMTAuMzZMMTguMzYsOS44OEMxOS41NCw4LjcxIDE5LjU0LDYuODEgMTguMzYsNS42NEMxNy4xOSw0LjQ2IDE1LjI5LDQuNDYgMTQuMTIsNS42NEwxMC41OSw5LjE3QzkuNDEsMTAuMzQgOS40MSwxMi4yNCAxMC41OSwxMy40MU0xMy40MSw5LjE3QzEzLjgsOC43OCAxNC40NCw4Ljc4IDE0LjgzLDkuMTdDMTYuNzgsMTEuMTIgMTYuNzgsMTQuMjkgMTQuODMsMTYuMjRWMTYuMjRMMTEuMjksMTkuNzhDOS4zNCwyMS43MyA2LjE3LDIxLjczIDQuMjIsMTkuNzhDMi4yNywxNy44MyAyLjI3LDE0LjY2IDQuMjIsMTIuNzFMNS43MSwxMS4yMkM1LjcsMTIuMDQgNS44MywxMi44NiA2LjExLDEzLjY1TDUuNjQsMTQuMTJDNC40NiwxNS4yOSA0LjQ2LDE3LjE5IDUuNjQsMTguMzZDNi44MSwxOS41NCA4LjcxLDE5LjU0IDkuODgsMTguMzZMMTMuNDEsMTQuODNDMTQuNTksMTMuNjYgMTQuNTksMTEuNzYgMTMuNDEsMTAuNTlDMTMsMTAuMiAxMyw5LjU2IDEzLjQxLDkuMTdaXCJcclxuICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvcHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkZWZhdWx0QmxvY2tTZXJpYWxpemVyKHByb3BzKTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgQWJvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsIG1haW5JbWFnZSwgYm9keSA9IFtdIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTbHVnTGF5b3V0PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImFydGljbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTHNlY3Rpb25cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RpbWFnZVwiIHNyYz17YCR7bWFpbkltYWdlLnVybH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFib3V0XCI+QWJvdXQgVXM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3Rib2R5XCJcclxuICAgICAgICAgICAgICAgICAgYmxvY2tzPXtib2R5fVxyXG4gICAgICAgICAgICAgICAgICAvLyBpbWFnZU9wdGlvbnM9e3sgdzogNTAwLCBoOiAzMDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogNzAwLCBoOiA4MDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8L0xheW91dD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vNFpqeFVVaC5qcGdcIiAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2cocHJvcHMuY2hpbGRyZW4pfSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvU2x1Z0xheW91dD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjMDAwLCAwIC0ycHggMCAjMDAwLCAwIDJweCAwICMwMDAsIC0ycHggMCAwICMwMDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAyOHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9uZGVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnRpY2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUwZjEzO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuUnNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24gKyAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3Qge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMzBlbTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICByZ2IoMjU1LCAxMDAsIDIwNSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigxMjgsIDEyOCwgMjU1KSA1MCUsXHJcbiAgICAgICAgICAgIHJnYigwLCAyNTUsIDIyNSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwcHggOHB4IDBweCAwcHg7ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAyZW07XHJcbiAgICAgICAgICAvKiBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyAqL1xyXG4gICAgICAgICAgLyogYm9yZGVyLXRvcDogOHB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgICAgcmlnaHQ6IDdweDtcclxuICAgICAgICAgIGJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLDAsMCwwLjYxKSAwcHggMHB4IDBweCAycHg7ICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMsIDI0LCAzMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaGVkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZS1jb250ZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IHtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgOmdsb2JhbChpbWcpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgIHtcclxuICAgICAgICAgIC8qIEFkZGluZyA6Z2xvYmFsIGNhbiB0YXJnZXQgdGhhdCBlbGVtZW50IGluc2lkZSB0aGUgYmxvY2tjb250ZW50IGRpdiAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIHdpZGVzY3JlZW4gcXVlcnkgKi9cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkyJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnBvc3RpbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhlYWRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGk6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi4oCiXCI7XHJcbiAgICAgICAgICBhbmltYXRpb246IG5lb24gMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbmVvbiB7XHJcbiAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsIDAgMCAyMHB4ICNmZmYsIDAgMCAzMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDQwcHggIzIyOGRmZiwgMCAwIDcwcHggIzIyOGRmZiwgMCAwIDgwcHggIzIyOGRmZixcclxuICAgICAgICAgICAgICAwIDAgMTAwcHggIzIyOGRmZiwgMCAwIDE1MHB4ICMyMjhkZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZmYsIDAgMCAxNXB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgMCAwIDIwcHggIzIyOGRmZiwgMCAwIDM1cHggIzIyOGRmZiwgMCAwIDQwcHggIzIyOGRmZixcclxuICAgICAgICAgICAgICAwIDAgNTBweCAjMjI4ZGZmLCAwIDAgNzVweCAjMjI4ZGZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YmhlYWRpbmcge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGE6bm90KDpob3ZlcikudW5kZXJsaW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IHJnYigwLCAwLCAwKSAtNHB4IDBweCwgcmdiKDAsIDAsIDApIDRweCAwcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtNHB4IDFweCwgcmdiKDAsIDAsIDApIDRweCAxcHgsIHJnYigwLCAwLCAwKSAtNHB4IDJweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDRweCAycHgsIHJnYigwLCAwLCAwKSAtNHB4IDNweCwgcmdiKDAsIDAsIDApIDRweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAtM3B4IDNweCwgcmdiKDAsIDAsIDApIDNweCAzcHgsIHJnYigwLCAwLCAwKSAtMnB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDJweCAzcHgsIHJnYigwLCAwLCAwKSAtMXB4IDNweCwgcmdiKDAsIDAsIDApIDFweCAzcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAwcHggM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMzJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC0zcHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgM3B4IDFweCwgcmdiKDAsIDAsIDApIC0ycHggMXB4LCByZ2IoMCwgMCwgMCkgMnB4IDFweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0xcHggMXB4LCByZ2IoMCwgMCwgMCkgMXB4IDFweCwgcmdiKDAsIDAsIDApIDBweCAxcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksXHJcbiAgICAgICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMjFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBhOmhvdmVyIC51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgICAgICByZ2IoMTI5LDEyOCwyNTUpIDAlLFxyXG4gICAgICAgICAgICByZ2IoMTI5LDEyOCwyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDEyOSwxMjgsMjU1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmxvY2stY29udGVudCBhIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTM5LCAyMzMsIDI1Myk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlIDBzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgcCBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTI5LDEyOCwyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgdWwsXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdHlsZWRjb2RlIHtcclxuICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmViZyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzE3MTgyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC55b3V0dWJlLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlcGVuLWVtYmVkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50d2l0dGVyLWVtYmVkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMjpob3ZlciAubGlua2ljb24gcGF0aCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJhYm91dFwiXVswXXtcclxuICB0aXRsZSxcclxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxyXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuICBcIm1haW5JbWFnZVwiOiBtYWluSW1hZ2UuYXNzZXQtPixcclxuICBib2R5LFxyXG59YDtcclxuXHJcbkFib3V0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHJldHVybiBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\NextJSPortfolio\\\\pages\\\\about.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2591341205",
    __self: undefined
  }, "body{margin:0;background-color:#000001;font-family:\"BlenderProMedium\",sans-serif;}img{height:100%;position:relative;}.block-content li{list-style:none;}.block-content li:before{content:\"\u2022\";-webkit-animation:neon 1.5s ease-in-out infinite alternate;animation:neon 1.5s ease-in-out infinite alternate;color:#ffffff;margin:5px;}@-webkit-keyframes neon{from{text-shadow:0 0 10px #fff,0 0 20px #fff,0 0 30px #fff, 0 0 40px #228dff,0 0 70px #228dff,0 0 80px #228dff, 0 0 100px #228dff,0 0 150px #228dff;}to{text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff, 0 0 20px #228dff,0 0 35px #228dff,0 0 40px #228dff, 0 0 50px #228dff,0 0 75px #228dff;}}.subheading{display:inline;}.block-content{color:white;margin:1rem;}.block-content h2{font-size:32px;margin:0;display:inline;}.block-content h2 a{color:rgba(255,255,255,1);-webkit-text-decoration:none;text-decoration:none;}.block-content h2 a:not(:hover) .underline{background:none;}.block-content h2 a .underline{text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -4px 2px, rgb(0,0,0) 4px 2px,rgb(0,0,0) -4px 3px,rgb(0,0,0) 4px 3px, rgb(0,0,0) -3px 3px,rgb(0,0,0) 3px 3px,rgb(0,0,0) -2px 3px, rgb(0,0,0) 2px 3px,rgb(0,0,0) -1px 3px,rgb(0,0,0) 1px 3px, rgb(0,0,0) 0px 3px;background-position:0% 32px;}.block-content a .underline{position:relative;text-shadow:rgb(0,0,0) -4px 0px,rgb(0,0,0) 4px 0px, rgb(0,0,0) -4px 1px,rgb(0,0,0) 4px 1px,rgb(0,0,0) -3px 1px, rgb(0,0,0) 3px 1px,rgb(0,0,0) -2px 1px,rgb(0,0,0) 2px 1px, rgb(0,0,0) -1px 1px,rgb(0,0,0) 1px 1px,rgb(0,0,0) 0px 1px;background-image:linear-gradient( rgba(255,255,255,0.25), rgba(255,255,255,0.25) );background-size:100% 2px;background-position:0% 21px;background-repeat:no-repeat;}.block-content a:hover .underline{background-image:linear-gradient( to left, rgb(129,128,255) 0%, rgb(129,128,255) 50%, rgb(129,128,255) 100% );}.block-content a{position:relative;color:rgb(139,233,253);-webkit-text-decoration:none;text-decoration:none;-webkit-transition:color 250ms ease 0s;transition:color 250ms ease 0s;}.block-content p a:hover{color:rgb(129,128,255);}.block-content p{color:rgba(255,255,255,0.7);font-size:18px;}.block-content ul,.block-content li{font-size:16px;color:rgba(255,255,255,0.7);}.styledcode{margin:1em;}.youtubebg{padding:2rem;background:#171820;}.youtube-embed{width:100%;height:650px;}.codepen-embed{width:100%;height:650px;}.twitter-embed{margin-left:17%;}.block-content h2:hover .linkicon path{opacity:1;}@media only screen and (max-width:768px){img{width:100%;}}@media only screen and (max-width:1024px){img{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlXeUIsQUFHb0IsQUFPRyxBQUtJLEFBSUosQUFTNEIsQUFLRixBQUt2QixBQUlILEFBS0csQUFNYyxBQUtiLEFBU00sQUFLSixBQW9CakIsQUFHaUIsQUFPSyxBQUlRLEFBTWhCLEFBS0osQUFJRSxBQUtGLEFBS0EsQUFLSyxBQUlOLEFBS0csQUFNQSxTQW5KWSxDQXlJM0IsQ0F2QkEsQUFTZSxBQUtBLEFBY2IsQUFNQSxDQTdJa0IsQUFTaUMsQUF1QnZDLENBK0VPLEVBbkZyQixBQVNXLEFBaUVzQixDQWpHakMsQUEyQ0EsQUE4RUEsRUE3RHFFLEFBb0IxQyxLQU8zQixDQTNEQSxBQUtpQixBQStFakIsQUFLQSxFQS9FdUIsRUFxRE4sRUEvRmpCLEVBK0dBLEVBdEg2QyxLQTZDN0MsRUErQ3VCLEVBV3ZCLEFBTUEsaUNBNUdBLEFBaURBLGVBMkNpQyxtQkFMakMsWUF4RWdCLGNBQ0gsSUFZWCxHQUxBLElBTkYsY0E0RUEsc0ZBbkJHLDhEQVoyQixxQkFhSCxPQVozQixrQkFhOEIsNEJBQ0EsNEJBQzlCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5leHRKU1BvcnRmb2xpb1xccGFnZXNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBjb2RlcGVuOiAocHJvcHMpID0+IChcclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2RlcGVuLWVtYmVkXCJcclxuICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICA+PC9pZnJhbWU+XHJcbiAgICApLFxyXG5cclxuICAgIHR3aXR0ZXJUd2VldEVtYmVkOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLWVtYmVkXCI+XHJcbiAgICAgICAgPFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e3Byb3BzLm5vZGUudHdlZXRJZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGJsb2NrOiAocHJvcHMpID0+IHtcclxuICAgICAgLy8gQWRkIGFuY2hvcnMgZm9yIEgyJ3NcclxuICAgICAgaWYgKGxvZGFzaEluY2x1ZGVzKFtcImgyXCJdLCBwcm9wcy5ub2RlLnN0eWxlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICAgICAgPGEgaWQ9e3Byb3BzLmNoaWxkcmVufSBocmVmPXtgI2AgKyBwcm9wcy5jaGlsZHJlbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxpbmtpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwLjU5LDEzLjQxQzExLDEzLjggMTEsMTQuNDQgMTAuNTksMTQuODNDMTAuMiwxNS4yMiA5LjU2LDE1LjIyIDkuMTcsMTQuODNDNy4yMiwxMi44OCA3LjIyLDkuNzEgOS4xNyw3Ljc2VjcuNzZMMTIuNzEsNC4yMkMxNC42NiwyLjI3IDE3LjgzLDIuMjcgMTkuNzgsNC4yMkMyMS43Myw2LjE3IDIxLjczLDkuMzQgMTkuNzgsMTEuMjlMMTguMjksMTIuNzhDMTguMywxMS45NiAxOC4xNywxMS4xNCAxNy44OSwxMC4zNkwxOC4zNiw5Ljg4QzE5LjU0LDguNzEgMTkuNTQsNi44MSAxOC4zNiw1LjY0QzE3LjE5LDQuNDYgMTUuMjksNC40NiAxNC4xMiw1LjY0TDEwLjU5LDkuMTdDOS40MSwxMC4zNCA5LjQxLDEyLjI0IDEwLjU5LDEzLjQxTTEzLjQxLDkuMTdDMTMuOCw4Ljc4IDE0LjQ0LDguNzggMTQuODMsOS4xN0MxNi43OCwxMS4xMiAxNi43OCwxNC4yOSAxNC44MywxNi4yNFYxNi4yNEwxMS4yOSwxOS43OEM5LjM0LDIxLjczIDYuMTcsMjEuNzMgNC4yMiwxOS43OEMyLjI3LDE3LjgzIDIuMjcsMTQuNjYgNC4yMiwxMi43MUw1LjcxLDExLjIyQzUuNywxMi4wNCA1LjgzLDEyLjg2IDYuMTEsMTMuNjVMNS42NCwxNC4xMkM0LjQ2LDE1LjI5IDQuNDYsMTcuMTkgNS42NCwxOC4zNkM2LjgxLDE5LjU0IDguNzEsMTkuNTQgOS44OCwxOC4zNkwxMy40MSwxNC44M0MxNC41OSwxMy42NiAxNC41OSwxMS43NiAxMy40MSwxMC41OUMxMywxMC4yIDEzLDkuNTYgMTMuNDEsOS4xN1pcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9wcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIocHJvcHMpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIiwgbWFpbkltYWdlLCBib2R5ID0gW10gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICBibG9ja3M9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDMwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA3MDAsIGg6IDgwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnNlY3Rpb25cIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS80Wmp4VVVoLmpwZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlbil9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9TbHVnTGF5b3V0PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMCAwICMwMDAsIDAgLTJweCAwICMwMDAsIDAgMnB4IDAgIzAwMCwgLTJweCAwIDAgIzAwMDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFydGljbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBmMTM7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiArIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgIHJnYigyNTUsIDEwMCwgMjA1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDEyOCwgMTI4LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCA4cHggMHB4IDBweDsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiA4cHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuNjEpIDBweCAwcHggMHB4IDJweDsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMywgMjQsIDMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wdWJsaXNoZWQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCA6Z2xvYmFsKGltZykge1xyXG4gICAgICAgIH1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgLyogQWRkaW5nIDpnbG9iYWwgY2FuIHRhcmdldCB0aGF0IGVsZW1lbnQgaW5zaWRlIHRoZSBibG9ja2NvbnRlbnQgZGl2ICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2lkZXNjcmVlbiBxdWVyeSAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0LWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBsaTpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCLigKJcIjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbmVvbiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBuZW9uIHtcclxuICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgNDBweCAjMjI4ZGZmLCAwIDAgNzBweCAjMjI4ZGZmLCAwIDAgODBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCAxMDBweCAjMjI4ZGZmLCAwIDAgMTUwcHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE1cHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgMjBweCAjMjI4ZGZmLCAwIDAgMzVweCAjMjI4ZGZmLCAwIDAgNDBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCA1MHB4ICMyMjhkZmYsIDAgMCA3NXB4ICMyMjhkZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYTpub3QoOmhvdmVyKS51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC00cHggMnB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgNHB4IDJweCwgcmdiKDAsIDAsIDApIC00cHggM3B4LCByZ2IoMCwgMCwgMCkgNHB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0zcHggM3B4LCByZ2IoMCwgMCwgMCkgM3B4IDNweCwgcmdiKDAsIDAsIDApIC0ycHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMnB4IDNweCwgcmdiKDAsIDAsIDApIC0xcHggM3B4LCByZ2IoMCwgMCwgMCkgMXB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDBweCAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAzMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTNweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAzcHggMXB4LCByZ2IoMCwgMCwgMCkgLTJweCAxcHgsIHJnYigwLCAwLCAwKSAycHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTFweCAxcHgsIHJnYigwLCAwLCAwKSAxcHggMXB4LCByZ2IoMCwgMCwgMCkgMHB4IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGE6aG92ZXIgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIGxlZnQsXHJcbiAgICAgICAgICAgIHJnYigxMjksMTI4LDI1NSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigxMjksMTI4LDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMTI5LDEyOCwyNTUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMzksIDIzMywgMjUzKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UgMHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBwIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMjksMTI4LDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB1bCxcclxuICAgICAgICAuYmxvY2stY29udGVudCBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0eWxlZGNvZGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZWJnIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTcxODIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGVwZW4tZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnR3aXR0ZXItZW1iZWQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyOmhvdmVyIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcImFib3V0XCJdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIFwibWFpbkltYWdlXCI6IG1haW5JbWFnZS5hc3NldC0+LFxyXG4gIGJvZHksXHJcbn1gO1xyXG5cclxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\NextJSPortfolio\\\\pages\\\\about.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2x1Z0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3NsdWcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9saWIvRHJhY3VsYVRoZW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9OaWdodG93bFRoZW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdGF0aWMvZ2l0aHViaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9uZXh0anNpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3JlYWN0aWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3N0YXRpYy9zYW5pdHlpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3R3aXR0ZXJpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3RhdGljL3plaXRpY29uLnBuZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvaW1hZ2UtdXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JvcVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJGb290ZXIiLCJGc3R5bGUiLCJCbGVuZGVyUHJvTSIsImZvb3RlciIsIm15bGlua3MiLCJmb2xsb3ciLCJsaW5rIiwiZmF2aWNvbiIsIlR3aXR0ZXJMb2dvIiwidHdpdHRlcmljb24iLCJHaXRodWJMb2dvIiwicmxpbmtzIiwiYnVpbHR3aXRoIiwiYndpdGgiLCJTYW5pdHlMb2dvIiwiUmVhY3RMb2dvIiwiTmV4dGpzTG9nbyIsIlplaXRMb2dvIiwiU2x1Z0xheW91dCIsInByb3BzIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZGVmYXVsdCIsIl9kZWZhdWx0IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZGlyZWN0aW9uIiwidGV4dEFsaWduIiwid2hpdGVTcGFjZSIsIndvcmRTcGFjaW5nIiwid29yZEJyZWFrIiwibGluZUhlaWdodCIsIk1velRhYlNpemUiLCJPVGFiU2l6ZSIsInRhYlNpemUiLCJXZWJraXRIeXBoZW5zIiwiTW96SHlwaGVucyIsIm1zSHlwaGVucyIsImh5cGhlbnMiLCJ3b3JkV3JhcCIsInBhZGRpbmciLCJtYXJnaW4iLCJvdmVyZmxvdyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJjb21tZW50IiwicHJvbG9nIiwiY2RhdGEiLCJkZWxpbWl0ZXIiLCJib29sZWFuIiwia2V5d29yZCIsInNlbGVjdG9yIiwiaW1wb3J0YW50IiwiYXRydWxlIiwib3BlcmF0b3IiLCJwdW5jdHVhdGlvbiIsInRhZyIsImRvY3R5cGUiLCJidWlsdGluIiwiZW50aXR5IiwibnVtYmVyIiwic3ltYm9sIiwicHJvcGVydHkiLCJjb25zdGFudCIsInZhcmlhYmxlIiwic3RyaW5nIiwiY2hhciIsInVybCIsInRleHREZWNvcmF0aW9uIiwiZnVuY3Rpb24iLCJyZWdleCIsImJvbGQiLCJmb250V2VpZ2h0IiwiaXRhbGljIiwiZm9udFN0eWxlIiwiaW5zZXJ0ZWQiLCJkZWxldGVkIiwidGV4dFNoYWRvdyIsInByZSIsImRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIiLCJCbG9ja0NvbnRlbnQiLCJkZWZhdWx0U2VyaWFsaXplcnMiLCJ0eXBlcyIsImJsb2NrIiwic2VyaWFsaXplcnMiLCJjb2RlIiwibm9kZSIsImxhbmd1YWdlIiwiQ29kZVRoZW1lMSIsInlvdXR1YmUiLCJjb2RlcGVuIiwidHdpdHRlclR3ZWV0RW1iZWQiLCJ0d2VldElkIiwibG9kYXNoSW5jbHVkZXMiLCJzdHlsZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiQWJvdXQiLCJ0aXRsZSIsIm1haW5JbWFnZSIsImJvZHkiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5Qyxp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QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYWJvdXQuanNcIik7XG4iLCIvLyBjbGllbnQuanNcclxuY29uc3Qgc2FuaXR5Q2xpZW50ID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzYW5pdHlDbGllbnQoe1xyXG4gIHByb2plY3RJZDogXCJjb3NkbHl0d1wiLFxyXG4gIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gIHVzZUNkbjogdHJ1ZSxcclxufSk7XHJcbiIsImltcG9ydCBUd2l0dGVyTG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy90d2l0dGVyaWNvbi5wbmdcIjtcclxuaW1wb3J0IEdpdGh1YkxvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvZ2l0aHViaWNvbi5wbmdcIjtcclxuaW1wb3J0IFNhbml0eUxvZ28gZnJvbSBcIi4uL3B1YmxpYy9zdGF0aWMvc2FuaXR5aWNvbi5wbmdcIjtcclxuaW1wb3J0IFJlYWN0TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9yZWFjdGljb24ucG5nXCI7XHJcbmltcG9ydCBOZXh0anNMb2dvIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL25leHRqc2ljb24ucG5nXCI7XHJcbmltcG9ydCBaZWl0TG9nbyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy96ZWl0aWNvbi5wbmdcIjtcclxuaW1wb3J0IEZzdHlsZSBmcm9tIFwiLi4vY3NzL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5CbGVuZGVyUHJvTX0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmZvb3Rlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubXlsaW5rc30+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZm9sbG93fT5Gb2xsb3cgdXMgb246PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD1cIlR3aXR0ZXIgSWNvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtGc3R5bGUudHdpdHRlcmljb259XHJcbiAgICAgICAgICAgICAgc3JjPXtUd2l0dGVyTG9nb31cclxuICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlR3aXR0ZXI8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PVwiVHdpdHRlciBJY29uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e0ZzdHlsZS50d2l0dGVyaWNvbn1cclxuICAgICAgICAgICAgICBzcmM9e0dpdGh1YkxvZ299XHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkdpdGh1Yjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLnJsaW5rc30+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPkFCT1VUPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvcG9zdHNcIj5CTE9HPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86MTIzQG1haWwuY29tXCIgdGFyZ2V0PVwiX3RvcFwiPlxyXG4gICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmJ1aWx0d2l0aH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuYndpdGh9PkJ1aWx0IHdpdGg6PC9zcGFuPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17RnN0eWxlLmxpbmt9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtGc3R5bGUuZmF2aWNvbn0+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PVwiU2FuaXR5IEljb25cIiBzcmM9e1Nhbml0eUxvZ299PjwvaW1nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNhbml0eS5pby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+U2FuaXR5PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJUd2l0dGVyIEljb25cIiBzcmM9e1JlYWN0TG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgPHNwYW4+UmVhY3Q8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0ZzdHlsZS5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17RnN0eWxlLmZhdmljb259PlxyXG4gICAgICAgICAgICA8aW1nIGFsdD1cIlR3aXR0ZXIgSWNvblwiIHNyYz17TmV4dGpzTG9nb30+PC9pbWc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5OZXh0LmpzPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtGc3R5bGUubGlua30+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e0ZzdHlsZS5mYXZpY29ufT5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJUd2l0dGVyIEljb25cIiBzcmM9e1plaXRMb2dvfT48L2ltZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlZlcmNlbDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuXHJcbmNvbnN0IFNsdWdMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIkxheW91dFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgPEZvb3RlciAvPlxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDE7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWdMYXlvdXQ7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJsZW5kZXJwcm9IXCI6IFwiZm9vdGVyX2JsZW5kZXJwcm9IX18xTk1OV1wiLFxuXHRcIkJsZW5kZXJQcm9NXCI6IFwiZm9vdGVyX0JsZW5kZXJQcm9NX18xTXNSM1wiLFxuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfXzNaTjNzXCIsXG5cdFwidHdpdHRlcmljb25cIjogXCJmb290ZXJfdHdpdHRlcmljb25fXzF4VGQ1XCIsXG5cdFwibGlua1wiOiBcImZvb3Rlcl9saW5rX18zaHNTS1wiLFxuXHRcIm15bGlua3NcIjogXCJmb290ZXJfbXlsaW5rc19fVVVHb3JcIixcblx0XCJidWlsdHdpdGhcIjogXCJmb290ZXJfYnVpbHR3aXRoX19PYmtSSlwiLFxuXHRcImZhdmljb25cIjogXCJmb290ZXJfZmF2aWNvbl9fMWxZcTBcIixcblx0XCJybGlua3NcIjogXCJmb290ZXJfcmxpbmtzX19pNXpzOVwiLFxuXHRcImZvbGxvd1wiOiBcImZvb3Rlcl9mb2xsb3dfXzF0d0RqXCIsXG5cdFwiYndpdGhcIjogXCJmb290ZXJfYndpdGhfXzFYYVc4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibGVuZGVycHJvSFwiOiBcInNsdWdfYmxlbmRlcnByb0hfXzFONGFxXCIsXG5cdFwiQmxlbmRlclByb01cIjogXCJzbHVnX0JsZW5kZXJQcm9NX19ERXNrRlwiLFxuXHRcInBvbmRlXCI6IFwic2x1Z19wb25kZV9fYV8zRDVcIixcblx0XCJwaXhlbGZvbnRcIjogXCJzbHVnX3BpeGVsZm9udF9fRDc4dWNcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgdmFsdWU6IHRydWUsXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfZGVmYXVsdCA9IHtcclxuICAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0nOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgICBmb250RmFtaWx5OiBcIkNvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsIG1vbm9zcGFjZVwiLFxyXG4gICAgZGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgIHdoaXRlU3BhY2U6IFwicHJlXCIsXHJcbiAgICB3b3JkU3BhY2luZzogXCJub3JtYWxcIixcclxuICAgIHdvcmRCcmVhazogXCJub3JtYWxcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS41XCIsXHJcbiAgICBNb3pUYWJTaXplOiBcIjRcIixcclxuICAgIE9UYWJTaXplOiBcIjRcIixcclxuICAgIHRhYlNpemU6IFwiNFwiLFxyXG4gICAgV2Via2l0SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBNb3pIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIG1zSHlwaGVuczogXCJub25lXCIsXHJcbiAgICBoeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIHdoaXRlU3BhY2U6IFwicHJlLXdyYXBcIixcclxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXHJcbiAgfSxcclxuICAncHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSc6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgbW9ub3NwYWNlXCIsXHJcbiAgICBkaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJwcmVcIixcclxuICAgIHdvcmRTcGFjaW5nOiBcIm5vcm1hbFwiLFxyXG4gICAgd29yZEJyZWFrOiBcIm5vcm1hbFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIE1velRhYlNpemU6IFwiNFwiLFxyXG4gICAgT1RhYlNpemU6IFwiNFwiLFxyXG4gICAgdGFiU2l6ZTogXCI0XCIsXHJcbiAgICBXZWJraXRIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIE1vekh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgbXNIeXBoZW5zOiBcIm5vbmVcIixcclxuICAgIGh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgcGFkZGluZzogXCIxZW1cIixcclxuICAgIG1hcmdpbjogXCIuNWVtIDBcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMTcxODIwXCIsXHJcbiAgfSxcclxuICAncHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6Oi1tb3otc2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAncHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6c2VsZWN0aW9uJzoge1xyXG4gICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLDY2LDEzMSwuODUpXCIsXHJcbiAgfSxcclxuICAncHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24nOiB7XHJcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMzMsNjYsMTMxLC44NSlcIixcclxuICB9LFxyXG4gICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbic6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgzMyw2NiwxMzEsLjg1KVwiLFxyXG4gIH0sXHJcbiAgJzpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJzoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMmIyYjJiXCIsXHJcbiAgICBwYWRkaW5nOiBcIi4xZW1cIixcclxuICAgIGJvcmRlclJhZGl1czogXCIuM2VtXCIsXHJcbiAgfSxcclxuICBjb21tZW50OiB7XHJcbiAgICBjb2xvcjogXCIjODA4MDgwXCIsXHJcbiAgfSxcclxuICBwcm9sb2c6IHtcclxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcclxuICB9LFxyXG4gIGNkYXRhOiB7XHJcbiAgICBjb2xvcjogXCIjODA4MDgwXCIsXHJcbiAgfSxcclxuICBkZWxpbWl0ZXI6IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIGJvb2xlYW46IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIGtleXdvcmQ6IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIHNlbGVjdG9yOiB7XHJcbiAgICBjb2xvcjogXCIjY2M3ODMyXCIsXHJcbiAgfSxcclxuICBpbXBvcnRhbnQ6IHtcclxuICAgIGNvbG9yOiBcIiNjYzc4MzJcIixcclxuICB9LFxyXG4gIGF0cnVsZToge1xyXG4gICAgY29sb3I6IFwiI2NjNzgzMlwiLFxyXG4gIH0sXHJcbiAgb3BlcmF0b3I6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICB9LFxyXG4gIHB1bmN0dWF0aW9uOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICBcImF0dHItbmFtZVwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICB0YWc6IHtcclxuICAgIGNvbG9yOiBcIiNlOGJmNmFcIixcclxuICB9LFxyXG4gIFwidGFnIC5wdW5jdHVhdGlvblwiOiB7XHJcbiAgICBjb2xvcjogXCIjZThiZjZhXCIsXHJcbiAgfSxcclxuICBkb2N0eXBlOiB7XHJcbiAgICBjb2xvcjogXCIjZThiZjZhXCIsXHJcbiAgfSxcclxuICBidWlsdGluOiB7XHJcbiAgICBjb2xvcjogXCIjZThiZjZhXCIsXHJcbiAgfSxcclxuICBlbnRpdHk6IHtcclxuICAgIGNvbG9yOiBcIiM2ODk3YmJcIixcclxuICB9LFxyXG4gIG51bWJlcjoge1xyXG4gICAgY29sb3I6IFwiIzY4OTdiYlwiLFxyXG4gIH0sXHJcbiAgc3ltYm9sOiB7XHJcbiAgICBjb2xvcjogXCIjNjg5N2JiXCIsXHJcbiAgfSxcclxuICBwcm9wZXJ0eToge1xyXG4gICAgY29sb3I6IFwiIzk4NzZhYVwiLFxyXG4gIH0sXHJcbiAgY29uc3RhbnQ6IHtcclxuICAgIGNvbG9yOiBcIiM5ODc2YWFcIixcclxuICB9LFxyXG4gIHZhcmlhYmxlOiB7XHJcbiAgICBjb2xvcjogXCIjOTg3NmFhXCIsXHJcbiAgfSxcclxuICBzdHJpbmc6IHtcclxuICAgIGNvbG9yOiBcIiM2YTg3NTlcIixcclxuICB9LFxyXG4gIGNoYXI6IHtcclxuICAgIGNvbG9yOiBcIiM2YTg3NTlcIixcclxuICB9LFxyXG4gIFwiYXR0ci12YWx1ZVwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTVjMjYxXCIsXHJcbiAgfSxcclxuICBcImF0dHItdmFsdWUgLnB1bmN0dWF0aW9uXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhNWMyNjFcIixcclxuICB9LFxyXG4gIFwiYXR0ci12YWx1ZSAucHVuY3R1YXRpb246Zmlyc3QtY2hpbGRcIjoge1xyXG4gICAgY29sb3I6IFwiI2E5YjdjNlwiLFxyXG4gIH0sXHJcbiAgdXJsOiB7XHJcbiAgICBjb2xvcjogXCIjMjg3YmRlXCIsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcclxuICB9LFxyXG4gIGZ1bmN0aW9uOiB7XHJcbiAgICBjb2xvcjogXCIjZmZjNjZkXCIsXHJcbiAgfSxcclxuICByZWdleDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMzY0MTM1XCIsXHJcbiAgfSxcclxuICBib2xkOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB9LFxyXG4gIGl0YWxpYzoge1xyXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG4gIH0sXHJcbiAgaW5zZXJ0ZWQ6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzI5NDQzNlwiLFxyXG4gIH0sXHJcbiAgZGVsZXRlZDoge1xyXG4gICAgYmFja2dyb3VuZDogXCIjNDg0YTRhXCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5wcm9wZXJ0eVwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5wcm9wZXJ0eSArIC50b2tlbi5wdW5jdHVhdGlvblwiOiB7XHJcbiAgICBjb2xvcjogXCIjYTliN2M2XCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5pZFwiOiB7XHJcbiAgICBjb2xvcjogXCIjZmZjNjZkXCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5zZWxlY3RvciA+IC50b2tlbi5jbGFzc1wiOiB7XHJcbiAgICBjb2xvcjogXCIjZmZjNjZkXCIsXHJcbiAgfSxcclxuICBcImNvZGUubGFuZ3VhZ2UtY3NzIC50b2tlbi5zZWxlY3RvciA+IC50b2tlbi5hdHRyaWJ1dGVcIjoge1xyXG4gICAgY29sb3I6IFwiI2ZmYzY2ZFwiLFxyXG4gIH0sXHJcbiAgXCJjb2RlLmxhbmd1YWdlLWNzcyAudG9rZW4uc2VsZWN0b3IgPiAudG9rZW4ucHNldWRvLWNsYXNzXCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG4gIFwiY29kZS5sYW5ndWFnZS1jc3MgLnRva2VuLnNlbGVjdG9yID4gLnRva2VuLnBzZXVkby1lbGVtZW50XCI6IHtcclxuICAgIGNvbG9yOiBcIiNmZmM2NmRcIixcclxuICB9LFxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICB2YWx1ZTogdHJ1ZSxcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9kZWZhdWx0ID0ge1xyXG4gIFwiY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxcbnByZVtjbGFzcyo9J2xhbmd1YWdlLSddXCI6IHtcclxuICAgIGNvbG9yOiBcIiNhOWI3YzZcIixcclxuICAgIGZvbnRGYW1pbHk6IFwiQ29uc29sYXMsIE1vbmFjbywgJ0FuZGFsZSBNb25vJywgJ1VidW50dSBNb25vJywgbW9ub3NwYWNlXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG5cclxuICAgIHdvcmRTcGFjaW5nOiBcIm5vcm1hbFwiLFxyXG4gICAgd29yZEJyZWFrOiBcIm5vcm1hbFwiLFxyXG4gICAgd29yZFdyYXA6IFwibm9ybWFsXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgTW96VGFiU2l6ZTogXCI0XCIsXHJcbiAgICBPVGFiU2l6ZTogXCI0XCIsXHJcbiAgICB0YWJTaXplOiBcIjRcIixcclxuICAgIFdlYmtpdEh5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgTW96SHlwaGVuczogXCJub25lXCIsXHJcbiAgICBtc0h5cGhlbnM6IFwibm9uZVwiLFxyXG4gICAgaHlwaGVuczogXCJub25lXCIsXHJcbiAgfSxcclxuICBcInByZVtjbGFzcyo9J2xhbmd1YWdlLSddOjotbW96LXNlbGVjdGlvbixcXG5wcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSA6Oi1tb3otc2VsZWN0aW9uLFxcbmNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXTo6LW1vei1zZWxlY3Rpb24sXFxuY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddIDo6LW1vei1zZWxlY3Rpb25cIjoge1xyXG4gICAgdGV4dFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyYjJiMmJcIixcclxuICB9LFxyXG4gIFwicHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ106OnNlbGVjdGlvbixcXG5wcmVbY2xhc3MqPSdsYW5ndWFnZS0nXSA6OnNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ106OnNlbGVjdGlvbixcXG5jb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10gOjpzZWxlY3Rpb25cIjoge1xyXG4gICAgdGV4dFNoYWRvdzogXCJub25lXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyYjJiMmJcIixcclxuICB9LFxyXG4gIFwiQG1lZGlhIHByaW50XCI6IHtcclxuICAgIFwiY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLFxcbiAgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG4gICAgICB0ZXh0U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmU6IHsgcGFkZGluZzogXCIxZW1cIiwgbWFyZ2luOiBcIjAuNWVtIDBcIiwgb3ZlcmZsb3c6IFwiYXV0b1wiIH0sXHJcbiAgXCI6bm90KHByZSkgPiBjb2RlLFxcbnByZVwiOiB7XHJcbiAgICBjb2xvcjogXCJyZ2JhKDMzLCA2NiwgMTMxLCAwLjg1KVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDMzLCA2NiwgMTMxLCAwLjg1KVwiLFxyXG4gIH0sXHJcbiAgXCI6bm90KHByZSkgPiBjb2RlXCI6IHtcclxuICAgIHBhZGRpbmc6IFwiMC4xZW1cIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjNlbVwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3JtYWxcIixcclxuICB9LFxyXG4gIGNvbW1lbnQ6IHsgY29sb3I6IFwicmdiKDk5LCAxMTksIDExOSlcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgcHJvbG9nOiB7IGNvbG9yOiBcInJnYig5OSwgMTE5LCAxMTkpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIGNkYXRhOiB7IGNvbG9yOiBcInJnYig5OSwgMTE5LCAxMTkpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIHB1bmN0dWF0aW9uOiB7IGNvbG9yOiBcInJnYigxOTksIDE0NiwgMjM0KVwiIH0sXHJcbiAgXCIubmFtZXNwYWNlXCI6IHsgY29sb3I6IFwicmdiKDE3OCwgMjA0LCAyMTQpXCIgfSxcclxuICBkZWxldGVkOiB7IGNvbG9yOiBcInJnYmEoMjM5LCA4MywgODAsIDAuNTYpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIHByb3BlcnR5OiB7IGNvbG9yOiBcInJnYigxMjgsIDIwMywgMTk2KVwiIH0sXHJcbiAgc3ltYm9sOiB7IGNvbG9yOiBcInJnYigxMjgsIDIwMywgMTk2KVwiIH0sXHJcbiAga2V5d29yZDogeyBjb2xvcjogXCJyZ2IoMTI3LCAyMTksIDIwMilcIiB9LFxyXG4gIHRhZzogeyBjb2xvcjogXCJyZ2IoMTI3LCAyMTksIDIwMilcIiB9LFxyXG4gIG9wZXJhdG9yOiB7IGNvbG9yOiBcInJnYigxMjcsIDIxOSwgMjAyKVwiIH0sXHJcbiAgYm9vbGVhbjogeyBjb2xvcjogXCJyZ2IoMjU1LCA4OCwgMTE2KVwiIH0sXHJcbiAgbnVtYmVyOiB7IGNvbG9yOiBcInJnYigyNDcsIDE0MCwgMTA4KVwiIH0sXHJcbiAgY2hhcjogeyBjb2xvcjogXCJyZ2IoMTMwLCAxNzAsIDI1NSlcIiB9LFxyXG4gIGJ1aWx0aW46IHsgY29sb3I6IFwicmdiKDEzMCwgMTcwLCAyNTUpXCIgfSxcclxuICBmdW5jdGlvbjogeyBjb2xvcjogXCJyZ2IoMTMwLCAxNzAsIDI1NSlcIiB9LFxyXG4gIGNvbnN0YW50OiB7IGNvbG9yOiBcInJnYigxMzAsIDE3MCwgMjU1KVwiIH0sXHJcbiAgZG9jdHlwZTogeyBjb2xvcjogXCJyZ2IoMTk5LCAxNDYsIDIzNClcIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH0sXHJcbiAgc2VsZWN0b3I6IHsgY29sb3I6IFwicmdiKDE5OSwgMTQ2LCAyMzQpXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG4gIGluc2VydGVkOiB7IGNvbG9yOiBcInJnYigxNzMsIDIxOSwgMTAzKVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBcImF0dHItbmFtZVwiOiB7IGNvbG9yOiBcInJnYigxNzMsIDIxOSwgMTAzKVwiLCBmb250U3R5bGU6IFwiaXRhbGljXCIgfSxcclxuICBzdHJpbmc6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICB1cmw6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBlbnRpdHk6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBcIi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZ1wiOiB7IGNvbG9yOiBcInJnYigxNzMsIDIxOSwgMTAzKVwiIH0sXHJcbiAgXCIudG9rZW4uc3RyaW5nXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBcIi5zdHlsZSAudG9rZW4uc3RyaW5nXCI6IHsgY29sb3I6IFwicmdiKDE3MywgMjE5LCAxMDMpXCIgfSxcclxuICBcImNsYXNzLW5hbWVcIjogeyBjb2xvcjogXCJyZ2IoMjU1LCAyMDMsIDEzOSlcIiB9LFxyXG4gIGF0cnVsZTogeyBjb2xvcjogXCJyZ2IoMjU1LCAyMDMsIDEzOSlcIiB9LFxyXG4gIFwiYXR0ci12YWx1ZVwiOiB7IGNvbG9yOiBcInJnYigyNTUsIDIwMywgMTM5KVwiIH0sXHJcbiAgcmVnZXg6IHsgY29sb3I6IFwicmdiKDIxNCwgMjIyLCAyMzUpXCIgfSxcclxuICBpbXBvcnRhbnQ6IHsgY29sb3I6IFwicmdiKDIxNCwgMjIyLCAyMzUpXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH0sXHJcbiAgdmFyaWFibGU6IHsgY29sb3I6IFwicmdiKDIxNCwgMjIyLCAyMzUpXCIgfSxcclxuICBib2xkOiB7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH0sXHJcbiAgaXRhbGljOiB7IGZvbnRTdHlsZTogXCJpdGFsaWNcIiB9LFxyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuIiwiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IHsgVHdpdHRlclR3ZWV0RW1iZWQgfSBmcm9tIFwicmVhY3QtdHdpdHRlci1lbWJlZFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcclxuaW1wb3J0IFNsdWdMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2x1Z0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9zbHVnLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGltcG9ydCB0aGVtZSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtL2RhcmN1bGEnO1xyXG5pbXBvcnQgQ29kZVRoZW1lIGZyb20gXCIuLi9saWIvTmlnaHRvd2xUaGVtZVwiO1xyXG5pbXBvcnQgQ29kZVRoZW1lMSBmcm9tIFwiLi4vbGliL0RyYWN1bGFUaGVtZVwiO1xyXG5pbXBvcnQgeyBpbmNsdWRlcyBhcyBsb2Rhc2hJbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIgPSBCbG9ja0NvbnRlbnQuZGVmYXVsdFNlcmlhbGl6ZXJzLnR5cGVzLmJsb2NrO1xyXG5cclxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XHJcbiAgdHlwZXM6IHtcclxuICAgIGNvZGU6IChwcm9wcykgPT4gKFxyXG4gICAgICA8U3ludGF4SGlnaGxpZ2h0ZXJcclxuICAgICAgICBjbGFzc05hbWU9XCJzdHlsZWRjb2RlXCJcclxuICAgICAgICBsYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX1cclxuICAgICAgICBzdHlsZT17Q29kZVRoZW1lMX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5ub2RlLmNvZGV9XHJcbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XHJcbiAgICApLFxyXG4gICAgeW91dHViZTogKHByb3BzKSA9PiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZWJnXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgIHZzcGFjZT1cIjBcIlxyXG4gICAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxyXG4gICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXHJcbiAgICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgICBzYW1lc2l0ZT1cIk5vbmVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1lbWJlZFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwpfSAgdGhpcyBzaG93cyBhbGwgdGhlIGluZm8gKi99XHJcbiAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuXHJcbiAgICBjb2RlcGVuOiAocHJvcHMpID0+IChcclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgdnNwYWNlPVwiMFwiXHJcbiAgICAgICAgaHNwYWNlPVwiMFwiXHJcbiAgICAgICAgbWFyZ2luV2lkdGg9XCIwXCJcclxuICAgICAgICBtYXJnaW5IZWlnaHQ9XCIwXCJcclxuICAgICAgICBhbGlnbj1cIm1pZGRsZVwiXHJcbiAgICAgICAgc2FtZXNpdGU9XCJOb25lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2RlcGVuLWVtYmVkXCJcclxuICAgICAgICBzcmM9e3Byb3BzLm5vZGUudXJsfVxyXG4gICAgICA+PC9pZnJhbWU+XHJcbiAgICApLFxyXG5cclxuICAgIHR3aXR0ZXJUd2VldEVtYmVkOiAocHJvcHMpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyLWVtYmVkXCI+XHJcbiAgICAgICAgPFR3aXR0ZXJUd2VldEVtYmVkIHR3ZWV0SWQ9e3Byb3BzLm5vZGUudHdlZXRJZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG5cclxuICAgIGJsb2NrOiAocHJvcHMpID0+IHtcclxuICAgICAgLy8gQWRkIGFuY2hvcnMgZm9yIEgyJ3NcclxuICAgICAgaWYgKGxvZGFzaEluY2x1ZGVzKFtcImgyXCJdLCBwcm9wcy5ub2RlLnN0eWxlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8cHJvcHMubm9kZS5zdHlsZT5cclxuICAgICAgICAgICAgPGEgaWQ9e3Byb3BzLmNoaWxkcmVufSBocmVmPXtgI2AgKyBwcm9wcy5jaGlsZHJlbn0+XHJcbiAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb3BzLCBudWxsLCAyKX08L3ByZT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImxpbmtpY29uXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTEwLjU5LDEzLjQxQzExLDEzLjggMTEsMTQuNDQgMTAuNTksMTQuODNDMTAuMiwxNS4yMiA5LjU2LDE1LjIyIDkuMTcsMTQuODNDNy4yMiwxMi44OCA3LjIyLDkuNzEgOS4xNyw3Ljc2VjcuNzZMMTIuNzEsNC4yMkMxNC42NiwyLjI3IDE3LjgzLDIuMjcgMTkuNzgsNC4yMkMyMS43Myw2LjE3IDIxLjczLDkuMzQgMTkuNzgsMTEuMjlMMTguMjksMTIuNzhDMTguMywxMS45NiAxOC4xNywxMS4xNCAxNy44OSwxMC4zNkwxOC4zNiw5Ljg4QzE5LjU0LDguNzEgMTkuNTQsNi44MSAxOC4zNiw1LjY0QzE3LjE5LDQuNDYgMTUuMjksNC40NiAxNC4xMiw1LjY0TDEwLjU5LDkuMTdDOS40MSwxMC4zNCA5LjQxLDEyLjI0IDEwLjU5LDEzLjQxTTEzLjQxLDkuMTdDMTMuOCw4Ljc4IDE0LjQ0LDguNzggMTQuODMsOS4xN0MxNi43OCwxMS4xMiAxNi43OCwxNC4yOSAxNC44MywxNi4yNFYxNi4yNEwxMS4yOSwxOS43OEM5LjM0LDIxLjczIDYuMTcsMjEuNzMgNC4yMiwxOS43OEMyLjI3LDE3LjgzIDIuMjcsMTQuNjYgNC4yMiwxMi43MUw1LjcxLDExLjIyQzUuNywxMi4wNCA1LjgzLDEyLjg2IDYuMTEsMTMuNjVMNS42NCwxNC4xMkM0LjQ2LDE1LjI5IDQuNDYsMTcuMTkgNS42NCwxOC4zNkM2LjgxLDE5LjU0IDguNzEsMTkuNTQgOS44OCwxOC4zNkwxMy40MSwxNC44M0MxNC41OSwxMy42NiAxNC41OSwxMS43NiAxMy40MSwxMC41OUMxMywxMC4yIDEzLDkuNTYgMTMuNDEsOS4xN1pcIlxyXG4gICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmxpbmtpY29uIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9wcm9wcy5ub2RlLnN0eWxlPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRlZmF1bHRCbG9ja1NlcmlhbGl6ZXIocHJvcHMpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIiwgbWFpbkltYWdlLCBib2R5ID0gW10gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNsdWdMYXlvdXQ+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMc2VjdGlvblwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicG9zdGltYWdlXCIgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWJvdXRcIj5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zdGJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICBibG9ja3M9e2JvZHl9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGltYWdlT3B0aW9ucz17eyB3OiA1MDAsIGg6IDMwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA3MDAsIGg6IDgwMCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHNlcmlhbGl6ZXJzPXtzZXJpYWxpemVyc31cclxuICAgICAgICAgICAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnNlY3Rpb25cIj5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS80Wmp4VVVoLmpwZ1wiIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocHJvcHMsIG51bGwsIDIpfTwvcHJlPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlbil9ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9TbHVnTGF5b3V0PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMCAwICMwMDAsIDAgLTJweCAwICMwMDAsIDAgMnB4IDAgIzAwMCwgLTJweCAwIDAgIzAwMDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogNjBweDtcclxuICAgICAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFydGljbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTBmMTM7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuTHNlY3Rpb24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Sc2VjdGlvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlJzZWN0aW9uIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5Mc2VjdGlvbiArIC5Mc2VjdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgIHJnYigyNTUsIDEwMCwgMjA1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDEyOCwgMTI4LCAyNTUpIDUwJSxcclxuICAgICAgICAgICAgcmdiKDAsIDI1NSwgMjI1KSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLyogYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCA4cHggMHB4IDBweDsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcclxuICAgICAgICAgIC8qIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07ICovXHJcbiAgICAgICAgICAvKiBib3JkZXItdG9wOiA4cHggc29saWQgYmxhY2s7ICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICByaWdodDogN3B4O1xyXG4gICAgICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICAgICAgICAvKiBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuNjEpIDBweCAwcHggMHB4IDJweDsgKi9cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMywgMjQsIDMyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wdWJsaXNoZWQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLWNvbnRlbnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCA6Z2xvYmFsKGltZykge1xyXG4gICAgICAgIH1cclxuICAgICAgICAge1xyXG4gICAgICAgICAgLyogQWRkaW5nIDpnbG9iYWwgY2FuIHRhcmdldCB0aGF0IGVsZW1lbnQgaW5zaWRlIHRoZSBibG9ja2NvbnRlbnQgZGl2ICAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogd2lkZXNjcmVlbiBxdWVyeSAqL1xyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLlJzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0LWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkxzZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucG9zdGltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5wb3N0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBsaTpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCLigKJcIjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbmVvbiAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBuZW9uIHtcclxuICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI2ZmZiwgMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgNDBweCAjMjI4ZGZmLCAwIDAgNzBweCAjMjI4ZGZmLCAwIDAgODBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCAxMDBweCAjMjI4ZGZmLCAwIDAgMTUwcHggIzIyOGRmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmZiwgMCAwIDE1cHggI2ZmZixcclxuICAgICAgICAgICAgICAwIDAgMjBweCAjMjI4ZGZmLCAwIDAgMzVweCAjMjI4ZGZmLCAwIDAgNDBweCAjMjI4ZGZmLFxyXG4gICAgICAgICAgICAgIDAgMCA1MHB4ICMyMjhkZmYsIDAgMCA3NXB4ICMyMjhkZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3ViaGVhZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBoMiBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgaDIgYTpub3QoOmhvdmVyKS51bmRlcmxpbmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyIGEgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogcmdiKDAsIDAsIDApIC00cHggMHB4LCByZ2IoMCwgMCwgMCkgNHB4IDBweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC00cHggMXB4LCByZ2IoMCwgMCwgMCkgNHB4IDFweCwgcmdiKDAsIDAsIDApIC00cHggMnB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgNHB4IDJweCwgcmdiKDAsIDAsIDApIC00cHggM3B4LCByZ2IoMCwgMCwgMCkgNHB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIC0zcHggM3B4LCByZ2IoMCwgMCwgMCkgM3B4IDNweCwgcmdiKDAsIDAsIDApIC0ycHggM3B4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgMnB4IDNweCwgcmdiKDAsIDAsIDApIC0xcHggM3B4LCByZ2IoMCwgMCwgMCkgMXB4IDNweCxcclxuICAgICAgICAgICAgcmdiKDAsIDAsIDApIDBweCAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAzMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrLWNvbnRlbnQgYSAudW5kZXJsaW5lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2IoMCwgMCwgMCkgLTRweCAwcHgsIHJnYigwLCAwLCAwKSA0cHggMHB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTRweCAxcHgsIHJnYigwLCAwLCAwKSA0cHggMXB4LCByZ2IoMCwgMCwgMCkgLTNweCAxcHgsXHJcbiAgICAgICAgICAgIHJnYigwLCAwLCAwKSAzcHggMXB4LCByZ2IoMCwgMCwgMCkgLTJweCAxcHgsIHJnYigwLCAwLCAwKSAycHggMXB4LFxyXG4gICAgICAgICAgICByZ2IoMCwgMCwgMCkgLTFweCAxcHgsIHJnYigwLCAwLCAwKSAxcHggMXB4LCByZ2IoMCwgMCwgMCkgMHB4IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSxcclxuICAgICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAyMXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGE6aG92ZXIgLnVuZGVybGluZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIGxlZnQsXHJcbiAgICAgICAgICAgIHJnYigxMjksMTI4LDI1NSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigxMjksMTI4LDI1NSkgNTAlLFxyXG4gICAgICAgICAgICByZ2IoMTI5LDEyOCwyNTUpIDEwMCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMzksIDIzMywgMjUzKTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDI1MG1zIGVhc2UgMHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBwIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMjksMTI4LDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2stY29udGVudCB1bCxcclxuICAgICAgICAuYmxvY2stY29udGVudCBsaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0eWxlZGNvZGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueW91dHViZWJnIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTcxODIwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnlvdXR1YmUtZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGVwZW4tZW1iZWQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnR3aXR0ZXItZW1iZWQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jay1jb250ZW50IGgyOmhvdmVyIC5saW5raWNvbiBwYXRoIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcImFib3V0XCJdWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIFwibWFpbkltYWdlXCI6IG1haW5JbWFnZS5hc3NldC0+LFxyXG4gIGJvZHksXHJcbn1gO1xyXG5cclxuQWJvdXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhnQUFBQjRDQVlBQUFBNVpEYlNBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlScFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ESXhJRGM1TGpFMU5Ea3hNU3dnTWpBeE15OHhNQzh5T1MweE1UbzBOem94TmlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJFUkNNVUl3UVRNNE5rTkZNVEZGTTBGQk5USkZSVE16TlRKRU1VSkRORFlpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UkVSQ01VSXdRVEk0TmtORk1URkZNMEZCTlRKRlJUTXpOVEpFTVVKRE5EWWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVFdGamFXNTBiM05vS1NJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rVTFNVGM0UVRNeU9UbEJNREV4UlRJNVFURTFRa014TURRMlFUZzVNRFJFSWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pKQk5ERTBRVUpET1RsQk1URXhSVEk1UVRFMVFrTXhNRFEyUVRnNU1EUkVJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrOGtTcXlBQUFERDVKUkVGVWVOcnNYUTJRbFZVWmZsbFlVQmUyWUN1UUZOZWw5UTlFY1ZFUVNBM3hCMnBUU1ZjRVNqRUxuWm9tQlcweWE1dzBtMUd5ektTbXRFWURjNmhHb2hSRHJVR1FaVWtvMEVBUkNBWEsrRkV3WEZ6Mnl2WStmTy9kK2ZidS9mbSsrNTMzKzduM1BEUFB3QzZYYzc3elB2YzdQKzk1ejN0NmRIUjBrRVhwb2xlSnRHTXdjd1R6RTh3NlppMXpFTE5HMkpmWkorUC90REVQTVBjSzMySnVZMjVsYm1hdVovNDc2WWJwa2NBMytCam11Y3h4d2xITUFVcDF2YzE4aWZtaXNKblphZ1UyanlITUtjeEp6UE96dkkxaEFXLzlNdVlTNXBQTU42ekF4ZU5qek9uTXE1bWpZL3FNTGN5RnpQbk1YVlpnYjdpUU9ZdDVPYk15SVQxaE8vTVB6Sjh4bjdjQ1o1L3NUV1hlS3BPbEpBT1RzL3VZVHpCVDVTNHdoSjNCdklNNXRNUldLRnVZZDB2M25TcEhnVC9Obk1zOHBjU1hvcTh4WnpPZktoZUJUMkkrd0x5MHpId096ekMvTG9LSGhvb1E2OEtFNlhZWm84cE5YSkkycnhNYlZKYmFHM3dhODNIbUdXUkJJdlEwNW9ha3Y4RTltRjlocnJIaWRzRVpZcE92aW8wUytRYkQvL3RMNWxWV3o3ejRIWE1tT1g3eHhBaGN6MXdrWGJORllXeGtYc1o4UFFsZDlIam1LaXV1TDV3cU5oc2ZkNEdieUhIVkRiQ2ErY1lBc1YxVFhBWEdPUEliWm0rclZkSG9MVGE4UG00QzN5UVRxZ3Fya1JGTkhoR2J4bUtTTlZQRXRUQ1BMd2ExYlZDQm02UkxzVyt1RGc0enJ5Rm56emwwZ2NmTHBNQ091Ym80Uk00ZStZb3dCYTZYYWIyZExZY0R4SWFOS1dhZFhJekE4RkN0bHJXYlJYaUFNK1FjOHVueDhqdDJ3bS82S3l0dUpEaFZiTjlEVTJCc0hGd1o4RUgza2VOb2YxbitYdXJZSjIxRm0vY0hMT3RLMFVDbGk0YnJjUzBGRDFuOURIV05iamhPSmhIWUw0VS85dWlFQzNxUW5BQzhaMlFTdXNQMWI0M014UUhMUitodUEvT2ZKZ1hHQnZYZktQaVdIeVlMT0hIUW51UGZxOG1KMFVKVVpkS0M3L0NXSXFvU01WanY1ckhqZjVuOUE5YUYvZVN6ODlqUmR4ZDlHNW5aejExUzRLRmdtSGxTRjRMY1d4SWc3R3A1MWhIeTdPL20rV3k3MkNBb1lKOXZtQnFEVDJaKzI1QXhYdkR4V1hSeE9LTHlPWExPQzhVTlcyVk1IQ1BQNmhYTERkVi9oMmdUdUl2K00vTmlRdy9WSU9PNFgyRGNueU5mdEZ4emdEZGtYSHFWdVpPY2cyTWdEcGE5SjJOam02czhqUFZWNUJ4T0d5ejhPRGxSbnNPWUorUVpBKzloM3N0OHYwZ2J2R1RJbmt1Wmx3UVJHS0d0ZnpMME1PMWkwUFlBWmNEQkFrZjhjT1pLNlJHV3kvaG5PaUlDNi8zVHlmSFluVWZPUVRkOGdXNmdZSkdSbGZLRk14VjRsemxwOVN4d0wyblFTWVllNU0wOGI0WGZ0VGg0T09RdU9UMmNtYWgzdTZ3ZVRPQjFXZUdrL0k3Qk13eUtDN3hscUp5T0NNUk5DMnVxM3Y4WWZLNTYwY3JYSkt0U0JuSFQ2ME1MQjZiUEdFT3IzbjRFeGtHd29WYUh4QUJhWGUxSDREa0tEM0dVMWFFVEd0NjZXNzBLUEpGMHZFZ25XRjA3TVVTaHpOTkZ1NElDMzZqVXFJSE1mbGJiSXpZWXFGVDJUWVVFUnRxRXp5cFZqcVhOV1ZiZkl6YlFPcTdTS0JybUZIZ0c2WjU4bTJqMVZiVkJaZWFTS1ZQZ0p1WEdOVnA5MVczUWxFdGdKQkRUem1aenQ5VlgzUWFqM1V0Y3Q4Q1hLMWQ4RnprbjZjb2RzTUYzbGV1NExKdkFreFFyWEJWQ281S0V1OFFtV3BqY09iT1Z6UWFrQjBTMGhVWUd1UTlramJiUjZ0b0YySmJFTHBoR3ZsQnNhU0trdVRYOUJvOGp2ZlNBRDFseHMrSlZzWTBHK29pbW5WMzBXS1dLc0NIK1BhdGxUdHhEeFFVTmVNRll0OERqbENyNU5jVTBoMk5Nc0V0c3BJRng3akY0TCtrY1E4R1VmYlhWTVM5d1drRWp1QkJ6cWhvSWpEaWtIUW9WYkNXNzVlZ1ZXOFFQWVJySG9ZdldpajkrMnVybUdVdVV5aDBCZ2V1VkNsOWhkWXZjVnZVUXVGYXBjRHYyUm0rcldpMkJFUnI3cHRYTk0yQ3JsSmJBZ3hRS1Jsam9CMVkzejRDNE94WEtIUVNCYXhRSy9wL1Z6RGMwanRMV2FBbTgzK3JsR3dlMEJOYUlrK3BwOWZJTmpVMkhmaEJZSTB0T1g2dVhiMmlFRmZmV3ltOVZaZlh5aldxTlFyVUV0cm16WW1JeitLSTFFa1lma2k3SFhtM3EvVVhEdG1HbFJzRXBwVy9qWUt1Ylp3d21uWERsVklYaWt1WkVxNXRuMUNtVnU3K0M5SEpWMVZuZEluOFo5a0hnM1VxRmo3SzZlY2JaU3VYdWhzQTdsUW9mYTNXTDNGWTdOUVUrazV4d1hJdkNQb01SbWdKdlZpb2M3c29KVnIrQ21FQjZydDNORUhpVDRzTlBzZm9WeEJXS1pXK0Nvd1BwZkxZclZZQnRRK3czdDFvZHN3SkRHTElQYVIyTVB4NXZNQ0lxOXlwVmdBZWZiblhNaWVtSzRpSnNka2ZhRjcxR3NSRzNrTDIwSXh0NmlXMjBjQ1JkWXRyd0t4VXJ3aUdyYTYyZTNmQjUwcjM5dk5rdDhJdktqY0VabkdxcmFTZXF4U2FhV09FV0dEKzBLVmFHaWRiOVZ0ZE8vSWgwZ2gzVGFNc1VHRnRWeTVVYmhWdThwbGx0anlSSm1hbGN4M0xSdE12azU0OGhOTzVoY3BKOGx5dHc0dS9uSWRUVG1RTGFuVTRZbWVpMmhWQTVVdDRqd1hoTG1ZbUxrNVpMUTVxTDFKS1RJTDNMRzR4ZmhISGNwRm9hZW5FWmlZdjhKOCtHSk83cXRMaVVaWDI2SU1SWkpFN1UzVW1sSFdLTHRpRnQwbE1VWGhySHg5MC9aR1o4L3lnNXUwdVZJUm9CU3pSYzlyU3V4TVJGeXNKNXBKOTd6QTJjQ1lQcmVWZXVOeGliLzRzaW1IakFrL1lUMHNuQ0dqWVFuZkVMY2p4Sm8wT3VleEZscE16SWRtZkRCY3kvK2lpMFdXWnRLQmpaQXJCNWpTMndYa1YrQXpGTS9KU1NkZndVeVVVL1NVNm0zcVlJaDUwSm1kcmx1cFFEVjkrTTlGQWdiZy81RUhVL1NZaXUvbWJtYkNvKzNoZXBsNTZRTDgvZktYNGh1RDFseVlla1kxTXAraUJEREhGbmR2dm01UkFZaTNHdjJWOXVaMzQveTBJYm5wVEg1STBjR2ZEaGNSM2NDOUpiNElxOVZ5ajhpeTB4dHVFNm4xSFNTMEhjRDhmb0N3ZmY5bnl2QXFON1JhSXVyMGxVSGlEbnFyVTIxNXB2Z015VUVaS3lrRnpwOVF3QjI1eGJaRDM5VFRKL0V3c21taitXdHRSSlR4Vlh3QTdZdU9nZTR3NkJjL0RhRG4vWXlCeVpVY1lWekdYTVkrVlAwemlRcFU2VGJHQyszeEYvWEplckRma2FWOEZjNzdPaVZ1WWxyaktHTVhjekp6RnJtTnNOTjJ5V29yaHBmaTNtNHI0c1dtVjkva0pYMjhFRDR6Y2RFdTVIUWxiemJIdk1reW5QTld4RlRDck9JdjFMc2pDWlF0TFF1TjU2UHBueXBHRXFGR214aFB6ZlhZZ3JZMzVQWGU4T3FCSlhIY2FJUncwMTdENEs1d1kwckJEdWphbTRUMU9CSEZ0ZWJoL0ZSQXQzR1ByTlJvdmRxZlFGSDhmSXBBajM3T0cyVE9SS1BqbEF3eERNTjVEQ3UwMnRyemlCNG5UM0V5YTB3MlNDUmNXK3dla1oybmVLZUlCRzE4eTVWVHhXdDhueXBwR0NCZHovaGNLOUt1K0ExQmtuM0ZsSVhLOENBL2RUY1hmZS9zQlZCeHdYeTZTN3hsb1NWOWR1S0xKeEt5TXdhSnd5OThHMU85ZkxCNzBLbkJMbmg5KzM1aFRxZnNzSTd1UEZqc2VENUJ5NndwZmdrSTh5RWFpL05BS2p4aVdwK1VIUkltVlNZT0ExY1QvNnhleU1uNThqSjdMam9IVGRjOFROOXkxeWRwWXlnK1QzaUdjTTl4eU1rUy9OUHlJdzdMYVlDSHl6T0tHOG9ZaDE0ZndpMW1ybjVpbnZST2F6ekFlWlI4bnYrak9ITVB1NVBqZUtPWmQ1ZmdocjMyeXNqY0dhZDRIZjV5Nm1vVlhNZFQ0ZnJKblpNMGQ1ZGN3OThya0crZDE1OHJzTklqWit0MVkrTXo4aWdUOFNzYmh3T3ZYMSs5ekZuRGg0VDVZL2ZnNk9qNUZaWHpZZ2Nmang1SVNScm5HTk0walErUytYZnh0M0FWM0t2RDZpcmpFVlliZThSMnp1T3h1ZWwzVndMbUEzNVhueWR4Y3VJamZtVVRLQm5hTjNJcHBVVFN4MjVSRGt6QkMyN3FiNjlDWTlKTlA3eWdRS0hNVXp3N2JUZ2l3TGd4NEtXOHo4Z2srUk1hdEdRTUZGQ1JPNEtnSnhZZHRBSVZRbVR2MHRrSEhSajhqRFpTMkx2ZHdieWQ4eGptT3A5Sk9kd3BhenlFQ1VhNUF4T0JNNDYvcFlnQzhOM0c2dnlIcHpuNnlIRWV1RWRNZll1S2dsNTRvOEJCTDBwL0FqT21wbDBoZldtMnNraE5sa0NsczhFSktxTGZRNThVcGpLSG1QSU9sVG9tL3VRWm5YTERaVm9PbUQyZGhhL0JUcDMzWjJkQW1LQzV0ZGFGSmNEWUZKeHRWekluSW5KaFhyeFdiTnBndldTcTJBc3pIWVZIalVhbGNRaUY0ZFM2N3pSRWtRR0lESDZ6cm1EZkozaSs3MitaSk1xTlRzRTBaeWxFZklDY2h1c1pwMkdjWVFUL2F3ZGtWaFpiOUJOajFFZE54QzRVWml4SEdXUEVkc3NTbU1Dc05NYjRUZ3RSK1NFNTM0WkJtS2l6YWZSazZBUTJpWGhrV1J2d3FUaVNteUpGaGJCc0xpWE5WRjB1WnRZVmNlWllJeUJMRWhOdXNhOGg4T2s0U1VUQnVsYldqamMxRTlSTlFaNk9BbnhRbEMrS1p4N0hLVngvLzNkZ1RQNmpYTlZJdTBaYmkwN1hDVUJqYnBpellGQkFla3o5bG04MWl0b2VpeXlTT3l0Q0dIK0w4bDUxenp5amdaTTQ0Q3A0RU45cXZJMmNSQWNBRTJIbkM0K2N0YVRnRVBxQ1huOVA0RjhtYWl4MWtnNHI0VFJ5UEdXV0NMRWhpRExaVHhmd0VHQUlnMkl0c0toS3BjQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL25leHRqc2ljb24tZTVhMzBjNWU3ZjcxMzhmNzBhMmMwY2NiNmVlZTY0ZjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3JlYWN0aWNvbi1iNzc0OGE5NTJkNzE2MTlmMjU5NGRmZmM3MzMyZGI5MS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2FuaXR5aWNvbi0yM2I5NjdiN2MxYjg4MDJjMjc4ZmJhZjEwYTlmOThjNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdHdpdHRlcmljb24tNTljZGFhYTAzODFlMDE3Yzc1ZTYxNDNhNGVlY2VkZGEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3plaXRpY29uLTQzMWY2ZmJhYTU1OTYyNzYxMzIxNTU3NTlhYmYzNDllLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncm9xXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXR3aXR0ZXItZW1iZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9