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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NewMenu.js":
/*!*******************************!*\
  !*** ./components/NewMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\NewMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function NewMenu() {
  function click() {
    const body = document.body;
    const burgerContain = document.getElementsByClassName("b-container")[0];
    const burgerNav = document.getElementsByClassName("b-nav")[0];
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle("open");
    });
    false;
  }

  function mclick() {
    const body = document.body;
    const mburger = document.getElementById("toggle");
    const moverlay = document.getElementById("overlay");
    [mburger].forEach(function (el) {
      el.classList.toggle("active");
      console.log("click");
    });
    [moverlay].forEach(function (el) {
      el.classList.toggle("open");
      console.log("Overlay!");
    });
  }

  function easteregg() {
    const body = document.body;
    const iframe = document.createElement('iframe');
    const post = document.getElementsByClassName("post");
    [post].forEach(function (el) {
      el.classList.toggle("active");
      console.log("click");
    });
    iframe.src = "https://www.youtube.com/embed/glFc9E1UH4s?autoplay=1";
    iframe.width = "100%";
    iframe.height = "100%";
    const videoDiv = document.getElementsByClassName('videoFrame');
    videoDiv.appendChild(iframe);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "toggle",
    onClick: mclick,
    className: "jsx-425984940" + " " + "button_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-425984940" + " " + "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-425984940" + " " + "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-425984940" + " " + "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "overlay",
    className: "jsx-425984940" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-425984940" + " " + "overlay-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Home")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/posts",
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Posts")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/about",
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "About")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:123@abc.com",
    target: "_top",
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Contact"))))), __jsx("div", {
    className: "jsx-425984940" + " " + "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-425984940" + " " + "b-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-425984940" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/posts",
    className: "jsx-425984940" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Posts")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/about",
    className: "jsx-425984940" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "About")), __jsx("li", {
    className: "jsx-425984940",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:Aaron_d_23@hotmail.co.uk",
    target: "_top",
    className: "jsx-425984940" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Contact")))), __jsx("div", {
    className: "jsx-425984940" + " " + "b-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: click,
    className: "jsx-425984940" + " " + "b-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-425984940" + " " + "b-bun b-bun--top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-425984940" + " " + "b-bun b-bun--mid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-425984940" + " " + "b-bun b-bun--bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "425984940",
    __self: this
  }, ".nav.jsx-425984940{position:fixed;z-index:7;}@-webkit-keyframes slideInLeft{0%.jsx-425984940{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%.jsx-425984940{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slideInLeft-jsx-425984940{0%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slideInLeft-jsx-425984940{0%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slideOutLeft{0%.jsx-425984940{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%.jsx-425984940{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}@-webkit-keyframes slideOutLeft-jsx-425984940{0%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}@keyframes slideOutLeft-jsx-425984940{0%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}*.jsx-425984940{box-sizing:border-box;}.b-nav.jsx-425984940{position:absolute;z-index:11;}.b-nav.jsx-425984940:not(.open){visibility:hidden;}.b-nav.jsx-425984940 li.jsx-425984940{color:#444444;list-style-type:none;padding:10px;text-align:left;-webkit-transform:translateX(-250px);-webkit-transform:translateX(-250px);-ms-transform:translateX(-250px);transform:translateX(-250px);}.b-nav.jsx-425984940 li.jsx-425984940:not(.open){-webkit-animation-duration:0.4s;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slideOutLeft;-webkit-animation-name:slideOutLeft-jsx-425984940;animation-name:slideOutLeft-jsx-425984940;}.b-nav.jsx-425984940 li.jsx-425984940:first-child{padding-top:120px;}.b-nav.open.jsx-425984940{visibility:visible;}.b-nav.open.jsx-425984940 li.jsx-425984940{-webkit-animation-duration:0.4s;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slideInLeft;-webkit-animation-name:slideInLeft-jsx-425984940;animation-name:slideInLeft-jsx-425984940;}.b-link.jsx-425984940{background:transparent;border-left:rgba(68,68,68,0) solid 2px;color:#444444;font-family:BlenderProMedium,Helvetica,Arial,sans-serif;font-size:24px;font-weight:300;margin-left:30px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;width:auto;}.b-link.jsx-425984940:hover,.b-link--active.jsx-425984940{border-left:white solid 2px;padding-left:30px;color:white;}.b-menu.jsx-425984940{border:white solid 2px;border-radius:50%;cursor:pointer;display:inline-block;height:60px;padding-left:15.5px;padding-top:17.5px;position:relative;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:60px;z-index:12;}.b-menu.jsx-425984940:hover{border-radius:50%;border:solid 2px transparent;border-radius:50%;background-image:linear-gradient(transparent,transparent), linear-gradient(to right,rgb(129,128,255),transparent);background-origin:border-box;background-clip:content-box,border-box;}.b-menu.jsx-425984940:hover .b-bun.jsx-425984940{background:white;}.b-bun.jsx-425984940{background:#444444;position:relative;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;}.b-bun--top.jsx-425984940{height:2px;top:0;width:25px;}.b-bun--mid.jsx-425984940{height:2px;top:8px;width:25px;}.b-bun--bottom.jsx-425984940{height:2px;top:16px;width:25px;}.b-brand.jsx-425984940{color:white;font-family:\"BlenderProMedium\",sans-serif;font-size:24px;font-weight:300;margin-left:30px;position:relative;-webkit-text-decoration:none;text-decoration:none;top:-21.4285714286px;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;z-index:13;}.b-container.jsx-425984940{height:60px;left:30px;position:absolute;top:30px;}.b-container.jsx-425984940:hover.jsx-425984940:not(.open) .bun-top.jsx-425984940,.b-container.jsx-425984940:hover.jsx-425984940:not(.open) .bun-mid.jsx-425984940,.b-container.jsx-425984940:hover.jsx-425984940:not(.open) .bun-bottom.jsx-425984940{background:white;}.b-container.open.jsx-425984940{-webkit-transition:all 1s;transition:all 1s;}.b-container.open.jsx-425984940 .b-main.jsx-425984940{border:#444444 solid 2px;}.b-container.open.jsx-425984940 .b-menu.jsx-425984940{border:red solid 2px;}.b-container.open.jsx-425984940 .b-bun--top.jsx-425984940{background:white;top:9px;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.b-container.open.jsx-425984940 .b-bun--mid.jsx-425984940{opacity:0;}.b-container.open.jsx-425984940 .b-bun--bottom.jsx-425984940{background:white;top:5px;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.b-container.open.jsx-425984940 .b-brand.jsx-425984940{color:#444444;}.container.jsx-425984940{position:absolute;width:100%;height:100%;text-align:center;top:40%;left:0;margin:0 auto;font-family:\"BlenderProMedium\",sans-serif;}.container.jsx-425984940 p.jsx-425984940{font-size:20px;}.container.jsx-425984940 a.jsx-425984940{display:inline-block;position:relative;text-align:center;color:#1abc9c;-webkit-text-decoration:none;text-decoration:none;font-size:20px;overflow:hidden;top:5px;}.container.jsx-425984940 a.jsx-425984940:after{content:\"\";position:absolute;background:#1abc9c;height:2px;width:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);left:50%;bottom:0;-webkit-transition:0.35s ease;transition:0.35s ease;}.container.jsx-425984940 a.jsx-425984940:hover.jsx-425984940:after,.container.jsx-425984940 a.jsx-425984940:focus.jsx-425984940:after,.container.jsx-425984940 a.jsx-425984940:active.jsx-425984940:after{width:100%;}h1.jsx-425984940{position:relative;text-align:center;font-family:\"BlenderProMedium\",sans-serif;}.button_container.jsx-425984940{position:fixed;top:5%;right:2%;height:27px;width:35px;cursor:pointer;z-index:100;-webkit-transition:opacity 0.25s ease;transition:opacity 0.25s ease;}.button_container.jsx-425984940:hover{opacity:0.7;}.button_container.active.jsx-425984940 .top.jsx-425984940{-webkit-transform:translateY(11px) translateX(0) rotate(45deg);-ms-transform:translateY(11px) translateX(0) rotate(45deg);transform:translateY(11px) translateX(0) rotate(45deg);background:#fff;}.button_container.active.jsx-425984940 .middle.jsx-425984940{opacity:0;background:#fff;}.button_container.active.jsx-425984940 .bottom.jsx-425984940{-webkit-transform:translateY(-11px) translateX(0) rotate(-45deg);-ms-transform:translateY(-11px) translateX(0) rotate(-45deg);transform:translateY(-11px) translateX(0) rotate(-45deg);background:#fff;}.button_container.jsx-425984940 span.jsx-425984940{background:#8180ff;border:none;height:5px;width:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.35s ease;transition:all 0.35s ease;cursor:pointer;}.button_container.jsx-425984940 span.jsx-425984940:nth-of-type(2){top:11px;}.button_container.jsx-425984940 span.jsx-425984940:nth-of-type(3){top:22px;}.overlay.jsx-425984940{position:fixed;background:#8180ff;top:0;left:0;width:100%;height:0%;opacity:0;visibility:hidden;-webkit-transition:opacity 0.35s,visibility 0.35s,height 0.35s;transition:opacity 0.35s,visibility 0.35s,height 0.35s;overflow:hidden;z-index:77;}.overlay.open.jsx-425984940{opacity:0.9;visibility:visible;height:100%;}.overlay.open.jsx-425984940 li.jsx-425984940{-webkit-animation:fadeInRight-jsx-425984940 0.5s ease forwards;animation:fadeInRight-jsx-425984940 0.5s ease forwards;-webkit-animation-delay:0.35s;animation-delay:0.35s;}.overlay.open.jsx-425984940 li.jsx-425984940:nth-of-type(2){-webkit-animation-delay:0.4s;animation-delay:0.4s;}.overlay.open.jsx-425984940 li.jsx-425984940:nth-of-type(3){-webkit-animation-delay:0.45s;animation-delay:0.45s;}.overlay.open.jsx-425984940 li.jsx-425984940:nth-of-type(4){-webkit-animation-delay:0.5s;animation-delay:0.5s;}.overlay.jsx-425984940 nav.jsx-425984940{position:relative;height:70%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:50px;font-family:\"BlenderProMedium\",sans-serif;font-weight:400;text-align:center;}.overlay.jsx-425984940 ul.jsx-425984940{list-style:none;padding:0;margin:0 auto;display:inline-block;position:relative;height:100%;}.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940{display:block;height:25%;height:calc(100% / 4);min-height:50px;position:relative;opacity:0;}.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940 a.jsx-425984940{display:block;position:relative;color:#fff;-webkit-text-decoration:none;text-decoration:none;overflow:hidden;}.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940 a.jsx-425984940:hover.jsx-425984940:after,.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940 a.jsx-425984940:focus.jsx-425984940:after,.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940 a.jsx-425984940:active.jsx-425984940:after{width:100%;}.overlay.jsx-425984940 ul.jsx-425984940 li.jsx-425984940 a.jsx-425984940:after{content:\"\";position:absolute;bottom:0;left:50%;width:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:3px;background:#fff;-webkit-transition:0.35s;transition:0.35s;}@-webkit-keyframes fadeInRight-jsx-425984940{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}@keyframes fadeInRight-jsx-425984940{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}@media only screen and (min-width:769px){.button_container.jsx-425984940{display:none;}}@media only screen and (max-width:768px){.nav.jsx-425984940{display:none;}}@media only screen and (max-width:425px){.button_container.jsx-425984940{right:3.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxOZXdNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHa0IsQUFHMEIsQUFNK0IsQUFLTCxBQU1LLEFBS0wsQUFNQSxBQUlLLEFBT0wsQUFJSyxBQU14QixBQUlKLEFBSUEsQUFHSixBQVFrQixBQVFkLEFBR0MsQUFHYSxBQVNULEFBY0ssQUFPTCxBQXNCTCxBQW9CRCxBQUlFLEFBTVIsQUFLQSxBQUtBLEFBTUMsQUFjQSxBQVFLLEFBR0MsQUFLTyxBQUdKLEFBR0osQUFNUCxBQUdPLEFBTUgsQUFJSSxBQVVILEFBR00sQUFVVixBQWFBLEFBSU8sQUFNSCxBQVVILEFBRzJDLEFBSTdDLEFBSStDLEFBSXRDLEFBV1YsQUFHQSxBQUlNLEFBYUgsQUFLNkIsQUFJcEIsQUFHQyxBQUdELEFBR0gsQUFVRixBQVFGLEFBUUEsQUFTSCxBQUdBLEFBYUMsQUFJQSxBQU9HLEFBTUEsQUFLRixTQTlHZixBQUdBLENBbEdBLEFBNEVrQixBQTRHTCxBQUlGLENBdFBILEFBS0UsQUFLQyxBQW9GUyxBQWFwQixBQXVIQSxBQUdvQixBQW1DbEIsQ0F4UDJDLEFBY2pDLEFBaUdaLEFBOENxQixDQWdGbkIsQUFNQSxDQTNXcUIsQUEyS3ZCLEFBOElhLEFBUU8sQ0E3WFIsQUFxUFosQUFvQ1MsQUEyQ1ksQ0F5Q1QsQ0FuTlosQUFXYSxBQXFDYixBQWNVLEFBU0EsQUEwTFIsQ0F0V1csQUFJYixBQW1CQSxBQTBEK0IsQUFxR2xCLEFBd0NPLEFBZ0ZQLENBcFJiLEFBK0VvQixBQVlQLEFBd0lDLEFBcUdaLENBeE9XLENBc0NiLEFBbUNvQixDQXZNcEIsQUFrSm9CLEFBdUZULENBL0xpQyxBQXFCeEIsRUEvR3BCLEFBaU5BLEFBT2tDLEFBU0MsQUFvSlgsQ0EzRXhCLEFBbUVnQixFQXJRSSxBQTZEcEIsQ0FoSEEsQUFzTGMsQUF1Qk8sQUFpR1gsQUFzQ0MsQ0EvTlgsQ0FLQSxBQTJHYyxBQXdCRCxBQStCQyxDQTlRWSxBQWNBLEFBNFNiLEVBekRMLENBeFFPLENBdU44QixDQXpRVixBQVdBLEFBTUEsQUFXQSxBQXdIQSxBQXNNTixDQXNDbEIsQ0FsSlMsQ0FyRFQsQUFrSUYsQUF5Q2MsQ0E5UE4sQUE0SEcsQ0F2T29CLEFBV0EsQUFlQSxBQVdBLEFBeVEzQixDQXhCQSxBQXVEYixBQTRDdUIsQ0FsTHZCLEVBbkdjLENBNkJNLEFBZ01QLEFBZ0RLLEFBcUJQLENBOVVPLEFBc01MLENBL0RiLENBcUpBLEFBTUEsRUFIQSxDQXhDb0IsQ0FoSUgsQUF3R0EsRUEzS00sQUEyUk0sQ0FuTEgsQUFnQ1YsQ0EvSWhCLEFBd0gyQixBQXFHZixDQTFGRixBQXVCQyxFQTJHUyxDQXBSSixDQTRSSSxDQXpUbUIsQ0EwRXVCLEVBc0dyRCxDQXVCb0IsQUFtRWpCLENBbkpNLEFBd0dKLENBOUhhLENBMkZKLEFBMkRmLEdBdEVRLEVBbko2QyxDQXNCL0MsQUFvTUwsQ0FsQ1QsQUFxRG9CLENBdUNOLEVBbEZrQixBQTBGcEIsR0FqRWdCLENBaklULEdBbEhnQixBQWNBLEFBOEpVLENBN0h2QixFQThQdEIsQUFRQSxFQU1rQixHQXJEeUMsS0EzUTVCLENBd0hYLE9BbkVDLEFBNFFyQixTQTNDd0IsRUE3SkQsQ0FuSEksQUFjQSxBQXdLVixPQXRJRyxBQTJDcEIsRUFpRkEsQUFvSGlCLEVBeFFBLElBbEZmLEFBV0EsQUFNQSxBQVdBLEFBcU5nQixLQWxDbEIsR0E4RmlCLENBckZqQixBQW1JNkMsQ0FoUFYsQ0F4QmpCLEVBaU1sQixBQThHYSxHQWhKSCxJQXZQYSxBQVdBLEFBZUQsQUFXQSxHQThRdEIsQ0EzREEsQUFnSmtCLENBeElQLEVBdktRLE9BMEZJLEFBOEVaLEFBK0VYLElBclRFLEFBV0EsQ0FyQ0EsQUFXQSxDQTZYaUIsQ0ExR0QsRUEvTm9CLEFBY0QsQUFtQ1YsQUFrQkksQUErSFAsQ0F4S0QsR0E2TUwsSUEwREEsSUE3S2lCLEVBNEduQyxNQVFBLENBOU9BLEdBd1NvQixLQTlOc0IsTUFyRGIsQUFzUFgsQ0FwUVksR0F5VTlCLEdBdkNBLEdBOUsyQixNQTFGUSxBQTJPdEIsQ0FuRWIsTUFqSjJCLElBcU4zQixNQWxNQSxlQWxCd0IsQ0F2QkcsbUJBMEZkLEVBbEVVLFNBbUV2QixXQXZHQSxDQXFDbUIsRUFuRG5CLGNBMkJhLFdBQ2IsMERBd0JhLFdBQ0EsV0FFYiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxcY29tcG9uZW50c1xcTmV3TWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE5ld01lbnUoKSB7XHJcbiAgZnVuY3Rpb24gY2xpY2soKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGJ1cmdlckNvbnRhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYi1jb250YWluZXJcIilbMF07XHJcbiAgICBjb25zdCBidXJnZXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYi1uYXZcIilbMF07XHJcblxyXG4gICAgW2JvZHksIGJ1cmdlckNvbnRhaW4sIGJ1cmdlck5hdl0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICAgIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWNsaWNrKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBjb25zdCBtb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuICAgIFttYnVyZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgfSk7XHJcbiAgICBbbW92ZXJsYXldLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXkhXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlYXN0ZXJlZ2coKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgY29uc3QgcG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3N0XCIpO1xyXG4gIFxyXG4gICAgW3Bvc3RdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGlmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2dsRmM5RTFVSDRzP2F1dG9wbGF5PTFcIjtcclxuICAgIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgaWZyYW1lLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgY29uc3QgdmlkZW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlb0ZyYW1lJyk7XHJcbiAgICB2aWRlb0Rpdi5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX2NvbnRhaW5lclwiIGlkPVwidG9nZ2xlXCIgb25DbGljaz17bWNsaWNrfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwib3ZlcmxheS1tZW51XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3Bvc3RzXCI+UG9zdHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOjEyM0BhYmMuY29tXCIgdGFyZ2V0PVwiX3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItbmF2XCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiLWxpbmtcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYi1saW5rXCIgaHJlZj1cIi9wb3N0c1wiPlxyXG4gICAgICAgICAgICAgIFBvc3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImItbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImItbGlua1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpBYXJvbl9kXzIzQGhvdG1haWwuY28udWtcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl90b3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLW1lbnVcIiBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1idW4gYi1idW4tLXRvcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItYnVuIGItYnVuLS1taWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWJ1biBiLWJ1bi0tYm90dG9tXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1uYXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdjpub3QoLm9wZW4pIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2IGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdiBsaTpub3QoLm9wZW4pIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdiBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdi5vcGVuIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdi5vcGVuIGxpIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItbGluayB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiByZ2JhKDY4LCA2OCwgNjgsIDApIHNvbGlkIDJweDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEJsZW5kZXJQcm9NZWRpdW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWxpbms6aG92ZXIsXHJcbiAgICAgICAgLmItbGluay0tYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1tZW51IHtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xyXG4gICAgICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1LjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNy41cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICAgICAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXM7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGhvdmVyIGVmZmVjdCBvbiBidXR0b24gKi9cclxuICAgICAgICAuYi1tZW51OmhvdmVyIHtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMjksIDEyOCwgMjU1KSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiAuYi1tZW51OmhvdmVyOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7IGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDsgcmlnaHQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDEwMCwgMjA1KSAwJSwgcmdiKDEyOCwgMTI4LCAyNTUpIDUwJSwgcmdiKDAsIDI1NSwgMjI1KSAxMDAlKTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgXHJcbiAgICB9ICovXHJcblxyXG4gICAgICAgIC5iLW1lbnU6aG92ZXIgLmItYnVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItYnVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1idW4tLXRvcCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1idW4tLW1pZCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWJ1bi0tYm90dG9tIHtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1icmFuZCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0b3A6IC0yMS40Mjg1NzE0Mjg2cHg7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgei1pbmRleDogMTM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi10b3AsXHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi1taWQsXHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItbWVudTpob3ZlciB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLW1haW4ge1xyXG4gICAgICAgICAgYm9yZGVyOiAjNDQ0NDQ0IHNvbGlkIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItbWVudSB7XHJcbiAgICAgICAgICBib3JkZXI6IHJlZCBzb2xpZCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJ1bi0tdG9wIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnVuLS1taWQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnVuLS1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJyYW5kIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMxYWJjOWM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFhYmM5YztcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciBhOmhvdmVyOmFmdGVyLFxyXG4gICAgICAgIC5jb250YWluZXIgYTpmb2N1czphZnRlcixcclxuICAgICAgICAuY29udGFpbmVyIGE6YWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAudG9wIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lci5hY3RpdmUgLm1pZGRsZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIuYWN0aXZlIC5ib3R0b20ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIgc3BhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MGZmO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIgc3BhbjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyIHNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzgxODBmZjtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdmlzaWJpbGl0eSAwLjM1cywgaGVpZ2h0IDAuMzVzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4gbGkge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMzVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNDVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgbmF2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyA0KTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhOmhvdmVyOmFmdGVyLFxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6Zm9jdXM6YWZ0ZXIsXHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYTphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMzVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDMuNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZW51O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\NewMenu.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (NewMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NewMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewMenu */ "./components/NewMenu.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app'



function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.ico",
    className: "jsx-2155369389",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("meta", {
    content: "width=device-width, initial-scale=1",
    name: "viewport",
    className: "jsx-2155369389",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_components_NewMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(Component, _extends({}, pageProps, {
    className: "jsx-2155369389" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2155369389",
    __self: this
  }, "body::-webkit-scrollbar,body::-webkit-scrollbar-track{overflow:hidden;background:#8e208b;}body::-webkit-scrollbar-thumb{border:10px solid #404040;border-radius:200px;-webkit-transition:background 0.25s;-webkit-transition:background 0.25s;-webkit-transition:background 0.25s;transition:background 0.25s;background:hsla(0,0%,100%,1);}body::-webkit-scrollbar-thumb:active{border:white;}body::-webkit-scrollbar,body::-webkit-scrollbar-track{overflow:hidden;background:hsla(0,0%,100%,0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFJMkIsQUFJVSxBQVFiLEFBS0csYUFKbEIsR0FacUIsQUFpQmEsVUFiWixTQUh0QixVQWlCQSxDQWJzQyxvQ0FDQSxvQ0FDUixnRUFDSSw2QkFDbEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXJvblxcRGVza3RvcFxcTmV3IGZvbGRlciAoNSlcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IE5ld01lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3TWVudVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5ld01lbnUgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGUyMDhiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxyXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXHJcbi8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xyXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cclxuLy9cclxuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4vL1xyXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\_app.js */"));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OZXdNZW51LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTmV3TWVudSIsImNsaWNrIiwiYm9keSIsImRvY3VtZW50IiwiYnVyZ2VyQ29udGFpbiIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJidXJnZXJOYXYiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJtY2xpY2siLCJtYnVyZ2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3ZlcmxheSIsImNvbnNvbGUiLCJsb2ciLCJlYXN0ZXJlZ2ciLCJpZnJhbWUiLCJjcmVhdGVFbGVtZW50IiwicG9zdCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwidmlkZW9EaXYiLCJhcHBlbmRDaGlsZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QTtBQUFBO0FBQUEsd3FtQ0FERjtBQXNmRDs7QUFFY0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmlCQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzBCLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sT0FBRyxFQUFDLGVBQVY7QUFBMEIsUUFBSSxFQUFDLGNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxXQUFPLEVBQUMscUNBQWQ7QUFBb0QsUUFBSSxFQUFDLFVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBQUE7QUFBQTtBQUFBLGkyR0FERjtBQWtDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWVGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBOZXdNZW51KCkge1xyXG4gIGZ1bmN0aW9uIGNsaWNrKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBidXJnZXJDb250YWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImItY29udGFpbmVyXCIpWzBdO1xyXG4gICAgY29uc3QgYnVyZ2VyTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImItbmF2XCIpWzBdO1xyXG5cclxuICAgIFtib2R5LCBidXJnZXJDb250YWluLCBidXJnZXJOYXZdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgICBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1jbGljaygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbW92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XHJcbiAgICBbbWJ1cmdlcl0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgIH0pO1xyXG4gICAgW21vdmVybGF5XS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJPdmVybGF5IVwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWFzdGVyZWdnKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGNvbnN0IHBvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicG9zdFwiKTtcclxuICBcclxuICAgIFtwb3N0XS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBpZnJhbWUuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9nbEZjOUUxVUg0cz9hdXRvcGxheT0xXCI7XHJcbiAgICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGlmcmFtZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgIGNvbnN0IHZpZGVvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmlkZW9GcmFtZScpO1xyXG4gICAgdmlkZW9EaXYuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9jb250YWluZXJcIiBpZD1cInRvZ2dsZVwiIG9uQ2xpY2s9e21jbGlja30+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3R0b21cIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBpZD1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm92ZXJsYXktbWVudVwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wb3N0c1wiPlBvc3RzPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoxMjNAYWJjLmNvbVwiIHRhcmdldD1cIl90b3BcIj5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLW5hdlwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImItbGlua1wiIGhyZWY9XCIvcG9zdHNcIj5cclxuICAgICAgICAgICAgICBQb3N0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiLWxpbmtcIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiLWxpbmtcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86QWFyb25fZF8yM0Bob3RtYWlsLmNvLnVrXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1tZW51XCIgb25DbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItYnVuIGItYnVuLS10b3BcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWJ1biBiLWJ1bi0tbWlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1idW4gYi1idW4tLWJvdHRvbVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItbmF2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXY6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdiBsaSB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXYgbGk6bm90KC5vcGVuKSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XHJcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXYgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXYub3BlbiB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXYub3BlbiBsaSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLWxpbmsge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogcmdiYSg2OCwgNjgsIDY4LCAwKSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBCbGVuZGVyUHJvTWVkaXVtLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1saW5rOmhvdmVyLFxyXG4gICAgICAgIC5iLWxpbmstLWFjdGl2ZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItbWVudSB7XHJcbiAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgKi9cclxuICAgICAgICAgIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNS41cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTcuNXB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEyO1xyXG4gICAgICAgICAgLyogdHJhbnNpdGlvbjogYWxsIDFzOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBob3ZlciBlZmZlY3Qgb24gYnV0dG9uICovXHJcbiAgICAgICAgLmItbWVudTpob3ZlciB7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50KSxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTI5LCAxMjgsIDI1NSksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogLmItbWVudTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4OyBib3R0b206IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAxMDAsIDIwNSkgMCUsIHJnYigxMjgsIDEyOCwgMjU1KSA1MCUsIHJnYigwLCAyNTUsIDIyNSkgMTAwJSk7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIFxyXG4gICAgfSAqL1xyXG5cclxuICAgICAgICAuYi1tZW51OmhvdmVyIC5iLWJ1biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLWJ1biB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItYnVuLS10b3Age1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItYnVuLS1taWQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1idW4tLWJvdHRvbSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItYnJhbmQge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdG9wOiAtMjEuNDI4NTcxNDI4NnB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItY29udGFpbmVyIHtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIGxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lcjpob3Zlcjpub3QoLm9wZW4pIC5idW4tdG9wLFxyXG4gICAgICAgIC5iLWNvbnRhaW5lcjpob3Zlcjpub3QoLm9wZW4pIC5idW4tbWlkLFxyXG4gICAgICAgIC5iLWNvbnRhaW5lcjpob3Zlcjpub3QoLm9wZW4pIC5idW4tYm90dG9tIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLW1lbnU6aG92ZXIge1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1tYWluIHtcclxuICAgICAgICAgIGJvcmRlcjogIzQ0NDQ0NCBzb2xpZCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLW1lbnUge1xyXG4gICAgICAgICAgYm9yZGVyOiByZWQgc29saWQgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1idW4tLXRvcCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJ1bi0tbWlkIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJ1bi0tYm90dG9tIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1icmFuZCB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjMWFiYzljO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIGE6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxYWJjOWM7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMzVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYTpob3ZlcjphZnRlcixcclxuICAgICAgICAuY29udGFpbmVyIGE6Zm9jdXM6YWZ0ZXIsXHJcbiAgICAgICAgLmNvbnRhaW5lciBhOmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogNSU7XHJcbiAgICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lci5hY3RpdmUgLnRvcCB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTFweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIuYWN0aXZlIC5taWRkbGUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAuYm90dG9tIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyIHNwYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzgxODBmZjtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyIHNwYW46bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgdG9wOiAxMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciBzcGFuOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgwZmY7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHZpc2liaWxpdHkgMC4zNXMsIGhlaWdodCAwLjM1cztcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB6LWluZGV4OiA3NztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjM1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjQ1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IG5hdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgdWwge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC8gNCk7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYTpob3ZlcjphZnRlcixcclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhOmZvY3VzOmFmdGVyLFxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6YWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjM1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzLjUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVudTtcclxuIiwiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IE5ld01lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3TWVudVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5ld01lbnUgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjOGUyMDhiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzQwNDA0MDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxyXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXHJcbi8vIHBlcmZvcm0gYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24sIGNhdXNpbmcgZXZlcnkgcGFnZSBpbiB5b3VyIGFwcCB0b1xyXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cclxuLy9cclxuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcclxuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXHJcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xyXG4vL1xyXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=