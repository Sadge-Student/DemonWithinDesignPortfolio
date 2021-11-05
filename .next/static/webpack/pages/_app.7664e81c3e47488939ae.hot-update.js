webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NewMenu.js":
/*!*******************************!*\
  !*** ./components/NewMenu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\NewMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function NewMenu() {
  function click() {
    var body = document.body;
    var burgerContain = document.getElementsByClassName("b-container")[0];
    var burgerNav = document.getElementsByClassName("b-nav")[0];
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle("open");
    });
    false;
  }

  function mclick() {
    var body = document.body;
    var mburger = document.getElementById("toggle");
    var moverlay = document.getElementById("overlay");
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
    var body = document.body;
    var iframe = document.createElement('iframe');
    var post = document.getElementsByClassName("post");
    [post].forEach(function (el) {
      el.classList.toggle("active");
      console.log("click");
    });
    iframe.src = "https://www.youtube.com/embed/glFc9E1UH4s?autoplay=1";
    iframe.width = "100%";
    iframe.height = "100%";
    var videoDiv = document.getElementsByClassName('videoFrame');
    videoDiv.appendChild(iframe);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "toggle",
    onClick: mclick,
    className: "jsx-3554721518" + " " + "button_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-3554721518" + " " + "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-3554721518" + " " + "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-3554721518" + " " + "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "overlay",
    className: "jsx-3554721518" + " " + "overlay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "jsx-3554721518" + " " + "overlay-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Home")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/posts",
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Posts")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "/about",
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "About")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:123@abc.com",
    target: "_top",
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Contact"))))), __jsx("div", {
    className: "jsx-3554721518" + " " + "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3554721518" + " " + "b-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/",
    className: "jsx-3554721518" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/posts",
    className: "jsx-3554721518" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Posts")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/about",
    className: "jsx-3554721518" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "About")), __jsx("li", {
    className: "jsx-3554721518",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "mailto:Aaron_d_23@hotmail.co.uk",
    target: "_top",
    className: "jsx-3554721518" + " " + "b-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Contact")))), __jsx("div", {
    className: "jsx-3554721518" + " " + "b-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("div", {
    onClick: click,
    className: "jsx-3554721518" + " " + "b-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3554721518" + " " + "b-bun b-bun--top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3554721518" + " " + "b-bun b-bun--mid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3554721518" + " " + "b-bun b-bun--bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3554721518",
    __self: this
  }, ".nav.jsx-3554721518{position:fixed;z-index:7;}@-webkit-keyframes slideInLeft{0%.jsx-3554721518{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%.jsx-3554721518{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slideInLeft-jsx-3554721518{0%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@keyframes slideInLeft-jsx-3554721518{0%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:visible;}100%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}@-webkit-keyframes slideOutLeft{0%.jsx-3554721518{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%.jsx-3554721518{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}@-webkit-keyframes slideOutLeft-jsx-3554721518{0%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}@keyframes slideOutLeft-jsx-3554721518{0%{-webkit-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}100%{-webkit-transform:translate3d(-250px,0,0);-webkit-transform:translate3d(-250px,0,0);-ms-transform:translate3d(-250px,0,0);transform:translate3d(-250px,0,0);visibility:hidden;}}*.jsx-3554721518{box-sizing:border-box;}.b-nav.jsx-3554721518{position:absolute;z-index:11;}.b-nav.jsx-3554721518:not(.open){visibility:hidden;}.b-nav.jsx-3554721518 li.jsx-3554721518{color:#444444;list-style-type:none;padding:10px;text-align:left;-webkit-transform:translateX(-250px);-webkit-transform:translateX(-250px);-ms-transform:translateX(-250px);transform:translateX(-250px);}.b-nav.jsx-3554721518 li.jsx-3554721518:not(.open){-webkit-animation-duration:0.4s;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slideOutLeft;-webkit-animation-name:slideOutLeft-jsx-3554721518;animation-name:slideOutLeft-jsx-3554721518;}.b-nav.jsx-3554721518 li.jsx-3554721518:first-child{padding-top:120px;}.b-nav.open.jsx-3554721518{visibility:visible;}.b-nav.open.jsx-3554721518 li.jsx-3554721518{-webkit-animation-duration:0.4s;-webkit-animation-duration:0.4s;animation-duration:0.4s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slideInLeft;-webkit-animation-name:slideInLeft-jsx-3554721518;animation-name:slideInLeft-jsx-3554721518;}.b-link.jsx-3554721518{background:transparent;border-left:rgba(68,68,68,0) solid 2px;color:#444444;font-family:BlenderProMedium,Helvetica,Arial,sans-serif;font-size:24px;font-weight:300;margin-left:30px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;width:auto;}.b-link.jsx-3554721518:hover,.b-link--active.jsx-3554721518{border-left:white solid 2px;padding-left:30px;color:white;}.b-menu.jsx-3554721518{border:white solid 2px;border-radius:50%;cursor:pointer;display:inline-block;height:60px;padding-left:15.5px;padding-top:17.5px;position:relative;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:60px;z-index:12;}.b-menu.jsx-3554721518:hover{border-radius:50%;border:solid 2px transparent;border-radius:50%;background-image:linear-gradient(transparent,transparent), linear-gradient(to right,rgb(255,100,205),transparent);background-origin:border-box;background-clip:content-box,border-box;}.b-menu.jsx-3554721518:hover .b-bun.jsx-3554721518{background:white;}.b-bun.jsx-3554721518{background:#444444;position:relative;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;}.b-bun--top.jsx-3554721518{height:2px;top:0;width:25px;}.b-bun--mid.jsx-3554721518{height:2px;top:8px;width:25px;}.b-bun--bottom.jsx-3554721518{height:2px;top:16px;width:25px;}.b-brand.jsx-3554721518{color:white;font-family:\"BlenderProMedium\",sans-serif;font-size:24px;font-weight:300;margin-left:30px;position:relative;-webkit-text-decoration:none;text-decoration:none;top:-21.4285714286px;-webkit-transition:all 0.4s ease;-webkit-transition:all 0.4s ease;transition:all 0.4s ease;z-index:13;}.b-container.jsx-3554721518{height:60px;left:30px;position:absolute;top:30px;}.b-container.jsx-3554721518:hover.jsx-3554721518:not(.open) .bun-top.jsx-3554721518,.b-container.jsx-3554721518:hover.jsx-3554721518:not(.open) .bun-mid.jsx-3554721518,.b-container.jsx-3554721518:hover.jsx-3554721518:not(.open) .bun-bottom.jsx-3554721518{background:white;}.b-container.open.jsx-3554721518{-webkit-transition:all 1s;transition:all 1s;}.b-container.open.jsx-3554721518 .b-main.jsx-3554721518{border:#444444 solid 2px;}.b-container.open.jsx-3554721518 .b-menu.jsx-3554721518{border:red solid 2px;}.b-container.open.jsx-3554721518 .b-bun--top.jsx-3554721518{background:white;top:9px;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.b-container.open.jsx-3554721518 .b-bun--mid.jsx-3554721518{opacity:0;}.b-container.open.jsx-3554721518 .b-bun--bottom.jsx-3554721518{background:white;top:5px;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}.b-container.open.jsx-3554721518 .b-brand.jsx-3554721518{color:#444444;}.container.jsx-3554721518{position:absolute;width:100%;height:100%;text-align:center;top:40%;left:0;margin:0 auto;font-family:\"BlenderProMedium\",sans-serif;}.container.jsx-3554721518 p.jsx-3554721518{font-size:20px;}.container.jsx-3554721518 a.jsx-3554721518{display:inline-block;position:relative;text-align:center;color:#1abc9c;-webkit-text-decoration:none;text-decoration:none;font-size:20px;overflow:hidden;top:5px;}.container.jsx-3554721518 a.jsx-3554721518:after{content:\"\";position:absolute;background:#1abc9c;height:2px;width:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);left:50%;bottom:0;-webkit-transition:0.35s ease;transition:0.35s ease;}.container.jsx-3554721518 a.jsx-3554721518:hover.jsx-3554721518:after,.container.jsx-3554721518 a.jsx-3554721518:focus.jsx-3554721518:after,.container.jsx-3554721518 a.jsx-3554721518:active.jsx-3554721518:after{width:100%;}h1.jsx-3554721518{position:relative;text-align:center;font-family:\"BlenderProMedium\",sans-serif;}.button_container.jsx-3554721518{position:fixed;top:5%;right:2%;height:27px;width:35px;cursor:pointer;z-index:100;-webkit-transition:opacity 0.25s ease;transition:opacity 0.25s ease;}.button_container.jsx-3554721518:hover{opacity:0.7;}.button_container.active.jsx-3554721518 .top.jsx-3554721518{-webkit-transform:translateY(11px) translateX(0) rotate(45deg);-ms-transform:translateY(11px) translateX(0) rotate(45deg);transform:translateY(11px) translateX(0) rotate(45deg);background:#fff;}.button_container.active.jsx-3554721518 .middle.jsx-3554721518{opacity:0;background:#fff;}.button_container.active.jsx-3554721518 .bottom.jsx-3554721518{-webkit-transform:translateY(-11px) translateX(0) rotate(-45deg);-ms-transform:translateY(-11px) translateX(0) rotate(-45deg);transform:translateY(-11px) translateX(0) rotate(-45deg);background:#fff;}.button_container.jsx-3554721518 span.jsx-3554721518{background:#30ace0;border:none;height:5px;width:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.35s ease;transition:all 0.35s ease;cursor:pointer;}.button_container.jsx-3554721518 span.jsx-3554721518:nth-of-type(2){top:11px;}.button_container.jsx-3554721518 span.jsx-3554721518:nth-of-type(3){top:22px;}.overlay.jsx-3554721518{position:fixed;background:#0039a0;top:0;left:0;width:100%;height:0%;opacity:0;visibility:hidden;-webkit-transition:opacity 0.35s,visibility 0.35s,height 0.35s;transition:opacity 0.35s,visibility 0.35s,height 0.35s;overflow:hidden;z-index:77;}.overlay.open.jsx-3554721518{opacity:0.9;visibility:visible;height:100%;}.overlay.open.jsx-3554721518 li.jsx-3554721518{-webkit-animation:fadeInRight-jsx-3554721518 0.5s ease forwards;animation:fadeInRight-jsx-3554721518 0.5s ease forwards;-webkit-animation-delay:0.35s;animation-delay:0.35s;}.overlay.open.jsx-3554721518 li.jsx-3554721518:nth-of-type(2){-webkit-animation-delay:0.4s;animation-delay:0.4s;}.overlay.open.jsx-3554721518 li.jsx-3554721518:nth-of-type(3){-webkit-animation-delay:0.45s;animation-delay:0.45s;}.overlay.open.jsx-3554721518 li.jsx-3554721518:nth-of-type(4){-webkit-animation-delay:0.5s;animation-delay:0.5s;}.overlay.jsx-3554721518 nav.jsx-3554721518{position:relative;height:70%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:50px;font-family:\"BlenderProMedium\",sans-serif;font-weight:400;text-align:center;}.overlay.jsx-3554721518 ul.jsx-3554721518{list-style:none;padding:0;margin:0 auto;display:inline-block;position:relative;height:100%;}.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518{display:block;height:25%;height:calc(100% / 4);min-height:50px;position:relative;opacity:0;}.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518 a.jsx-3554721518{display:block;position:relative;color:#fff;-webkit-text-decoration:none;text-decoration:none;overflow:hidden;}.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518 a.jsx-3554721518:hover.jsx-3554721518:after,.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518 a.jsx-3554721518:focus.jsx-3554721518:after,.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518 a.jsx-3554721518:active.jsx-3554721518:after{width:100%;}.overlay.jsx-3554721518 ul.jsx-3554721518 li.jsx-3554721518 a.jsx-3554721518:after{content:\"\";position:absolute;bottom:0;left:50%;width:0%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:3px;background:#fff;-webkit-transition:0.35s;transition:0.35s;}@-webkit-keyframes fadeInRight-jsx-3554721518{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}@keyframes fadeInRight-jsx-3554721518{0%{opacity:0;left:20%;}100%{opacity:1;left:0;}}@media only screen and (min-width:769px){.button_container.jsx-3554721518{display:none;}}@media only screen and (max-width:768px){.nav.jsx-3554721518{display:none;}}@media only screen and (max-width:425px){.button_container.jsx-3554721518{right:3.5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxOZXdNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHa0IsQUFHMEIsQUFNK0IsQUFLTCxBQU1LLEFBS0wsQUFNQSxBQUlLLEFBT0wsQUFJSyxBQU14QixBQUlKLEFBSUEsQUFHSixBQVFrQixBQVFkLEFBR0MsQUFHYSxBQVNULEFBY0ssQUFPTCxBQXNCTCxBQW9CRCxBQUlFLEFBTVIsQUFLQSxBQUtBLEFBTUMsQUFjQSxBQVFLLEFBR0MsQUFLTyxBQUdKLEFBR0osQUFNUCxBQUdPLEFBTUgsQUFJSSxBQVVILEFBR00sQUFVVixBQWFBLEFBSU8sQUFNSCxBQVVILEFBRzJDLEFBSTdDLEFBSStDLEFBSXRDLEFBV1YsQUFHQSxBQUlNLEFBYUgsQUFLNkIsQUFJcEIsQUFHQyxBQUdELEFBR0gsQUFVRixBQVFGLEFBUUEsQUFTSCxBQUdBLEFBYUMsQUFJQSxBQU9HLEFBTUEsQUFLRixTQTlHZixBQUdBLENBbEdBLEFBNEVrQixBQTRHTCxBQUlGLENBdFBILEFBS0UsQUFLQyxBQW9GUyxBQWFwQixBQXVIQSxBQUdvQixBQW1DbEIsQ0F4UDJDLEFBY2pDLEFBaUdaLEFBOENxQixDQWdGbkIsQUFNQSxDQTNXcUIsQUEyS3ZCLEFBOElhLEFBUU8sQ0E3WFIsQUFxUFosQUFvQ1MsQUEyQ1ksQ0F5Q1QsQ0FuTlosQUFXYSxBQXFDYixBQWNVLEFBU0EsQUEwTFIsQ0F0V1csQUFJYixBQW1CQSxBQTBEK0IsQUFxR2xCLEFBd0NPLEFBZ0ZQLENBcFJiLEFBK0VvQixBQVlQLEFBd0lDLEFBcUdaLENBeE9XLENBc0NiLEFBbUNvQixDQXZNcEIsQUFrSm9CLEFBdUZULENBL0xpQyxBQXFCeEIsRUEvR3BCLEFBaU5BLEFBT2tDLEFBU0MsQUFvSlgsQ0EzRXhCLEFBbUVnQixFQXJRSSxBQTZEcEIsQ0FoSEEsQUFzTGMsQUF1Qk8sQUFpR1gsQUFzQ0MsQ0EvTlgsQ0FLQSxBQTJHYyxBQXdCRCxBQStCQyxDQTlRWSxBQWNBLEFBNFNiLEVBekRMLENBeFFPLENBdU44QixDQXpRVixBQVdBLEFBTUEsQUFXQSxBQXdIQSxBQXNNTixDQXNDbEIsQ0FsSlMsQ0FyRFQsQUFrSUYsQUF5Q2MsQ0E5UE4sQUE0SEcsQ0F2T29CLEFBV0EsQUFlQSxBQVdBLEFBeVEzQixDQXhCQSxBQXVEYixBQTRDdUIsQ0FsTHZCLEVBbkdjLENBNkJNLEFBZ01QLEFBZ0RLLEFBcUJQLENBOVVPLEFBc01MLENBL0RiLENBcUpBLEFBTUEsRUFIQSxDQXhDb0IsQ0FoSUgsQUF3R0EsRUEzS00sQUEyUk0sQ0FuTEgsQUFnQ1YsQ0EvSWhCLEFBd0gyQixBQXFHZixDQTFGRixBQXVCQyxFQTJHUyxDQXBSSixDQTRSSSxDQXpUbUIsQ0EwRXVCLEVBc0dyRCxDQXVCb0IsQUFtRWpCLENBbkpNLEFBd0dKLENBOUhhLENBMkZKLEFBMkRmLEdBdEVRLEVBbko2QyxDQXNCL0MsQUFvTUwsQ0FsQ1QsQUFxRG9CLENBdUNOLEVBbEZrQixBQTBGcEIsR0FqRWdCLENBaklULEdBbEhnQixBQWNBLEFBOEpVLENBN0h2QixFQThQdEIsQUFRQSxFQU1rQixHQXJEeUMsS0EzUTVCLENBd0hYLE9BbkVDLEFBNFFyQixXQXhNdUIsQUE2SkMsQ0FoUkcsQUFjQSxBQXdLVixPQXRJRyxBQTJDcEIsRUFpRkEsQUFvSGlCLEVBeFFBLElBbEZmLEFBV0EsQUFNQSxBQVdBLEFBcU5nQixLQWxDbEIsR0E4RmlCLENBckZqQixBQW1JNkMsQ0FoUFYsQ0F4QmpCLEVBaU1sQixBQThHYSxHQWhKSCxJQXZQYSxBQVdBLEFBZUQsQUFXQSxHQThRdEIsQ0EzREEsQUFnSmtCLENBeElQLEVBdktRLE9BMEZJLEFBOEVaLEVBK0VYLEVBclRFLEFBV0EsQ0FyQ0EsQUFXQSxDQTZYaUIsQ0ExR0QsRUEvTm9CLEFBY0QsQUFtQ1YsQUFrQkksQUErSFAsQ0F4S0QsR0E2TUwsSUEwREEsSUE3S2lCLEVBNEduQyxNQVFBLENBOU9BLEdBd1NvQixLQTlOc0IsTUFyRGIsQUFzUFgsQ0FwUVksR0F5VTlCLEdBdkNBLEdBOUsyQixNQTFGUSxBQTJPdEIsQ0FuRWIsTUFqSjJCLElBcU4zQixNQWxNQSxlQWxCd0IsQ0F2QkcsbUJBMEZkLEVBbEVVLFNBbUV2QixZQWxFbUIsQ0FyQ25CLEdBZEEsWUEyQmEsV0FDYiwwREF3QmEsV0FDQSxXQUViIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxOZXdNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTmV3TWVudSgpIHtcclxuICBmdW5jdGlvbiBjbGljaygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgYnVyZ2VyQ29udGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiLWNvbnRhaW5lclwiKVswXTtcclxuICAgIGNvbnN0IGJ1cmdlck5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiLW5hdlwiKVswXTtcclxuXHJcbiAgICBbYm9keSwgYnVyZ2VyQ29udGFpbiwgYnVyZ2VyTmF2XS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIH0pO1xyXG4gICAgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtY2xpY2soKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IG1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IG1vdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG4gICAgW21idXJnZXJdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICB9KTtcclxuICAgIFttb3ZlcmxheV0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcmxheSFcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVhc3RlcmVnZygpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBjb25zdCBwb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBvc3RcIik7XHJcbiAgXHJcbiAgICBbcG9zdF0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgaWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvZ2xGYzlFMVVINHM/YXV0b3BsYXk9MVwiO1xyXG4gICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBpZnJhbWUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICBjb25zdCB2aWRlb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZGVvRnJhbWUnKTtcclxuICAgIHZpZGVvRGl2LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fY29udGFpbmVyXCIgaWQ9XCJ0b2dnbGVcIiBvbkNsaWNrPXttY2xpY2t9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcFwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgaWQ9XCJvdmVybGF5XCI+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJvdmVybGF5LW1lbnVcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvcG9zdHNcIj5Qb3N0czwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86MTIzQGFiYy5jb21cIiB0YXJnZXQ9XCJfdG9wXCI+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1uYXZcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImItbGlua1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiLWxpbmtcIiBocmVmPVwiL3Bvc3RzXCI+XHJcbiAgICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYi1saW5rXCIgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYi1saW5rXCJcclxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOkFhcm9uX2RfMjNAaG90bWFpbC5jby51a1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItbWVudVwiIG9uQ2xpY2s9e2NsaWNrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWJ1biBiLWJ1bi0tdG9wXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1idW4gYi1idW4tLW1pZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItYnVuIGItYnVuLS1ib3R0b21cIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZUluTGVmdCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dExlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlT3V0TGVmdCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLW5hdiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2Om5vdCgub3Blbikge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1uYXYgbGkge1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2IGxpOm5vdCgub3Blbikge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVPdXRMZWZ0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2IGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2Lm9wZW4ge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2Lm9wZW4gbGkge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XHJcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1saW5rIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IHJnYmEoNjgsIDY4LCA2OCwgMCkgc29saWQgMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQmxlbmRlclByb01lZGl1bSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbGluazpob3ZlcixcclxuICAgICAgICAuYi1saW5rLS1hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IHdoaXRlIHNvbGlkIDJweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLW1lbnUge1xyXG4gICAgICAgICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICAgICAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTUuNXB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE3LjVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMjtcclxuICAgICAgICAgIC8qIHRyYW5zaXRpb246IGFsbCAxczsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLyogaG92ZXIgZWZmZWN0IG9uIGJ1dHRvbiAqL1xyXG4gICAgICAgIC5iLW1lbnU6aG92ZXIge1xyXG4gICAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5cclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCksXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1NSwgMTAwLCAyMDUpLCB0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIC5iLW1lbnU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDsgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4OyByaWdodDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1NSwgMTAwLCAyMDUpIDAlLCByZ2IoMTI4LCAxMjgsIDI1NSkgNTAlLCByZ2IoMCwgMjU1LCAyMjUpIDEwMCUpO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBcclxuICAgIH0gKi9cclxuXHJcbiAgICAgICAgLmItbWVudTpob3ZlciAuYi1idW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1idW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ0NDQ0NDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWJ1bi0tdG9wIHtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWJ1bi0tbWlkIHtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItYnVuLS1ib3R0b20ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLWJyYW5kIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIHRvcDogLTIxLjQyODU3MTQyODZweDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXI6aG92ZXI6bm90KC5vcGVuKSAuYnVuLXRvcCxcclxuICAgICAgICAuYi1jb250YWluZXI6aG92ZXI6bm90KC5vcGVuKSAuYnVuLW1pZCxcclxuICAgICAgICAuYi1jb250YWluZXI6aG92ZXI6bm90KC5vcGVuKSAuYnVuLWJvdHRvbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4ge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1tZW51OmhvdmVyIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItbWFpbiB7XHJcbiAgICAgICAgICBib3JkZXI6ICM0NDQ0NDQgc29saWQgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1tZW51IHtcclxuICAgICAgICAgIGJvcmRlcjogcmVkIHNvbGlkIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnVuLS10b3Age1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1idW4tLW1pZCB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1jb250YWluZXIub3BlbiAuYi1idW4tLWJvdHRvbSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnJhbmQge1xyXG4gICAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogIzFhYmM5YztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciBhOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjM1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIGE6aG92ZXI6YWZ0ZXIsXHJcbiAgICAgICAgLmNvbnRhaW5lciBhOmZvY3VzOmFmdGVyLFxyXG4gICAgICAgIC5jb250YWluZXIgYTphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIuYWN0aXZlIC50b3Age1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAubWlkZGxlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lci5hY3RpdmUgLmJvdHRvbSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciBzcGFuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzMGFjZTA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciBzcGFuOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIHRvcDogMTFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIgc3BhbjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAzOWEwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB2aXNpYmlsaXR5IDAuMzVzLCBoZWlnaHQgMC4zNXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgei1pbmRleDogNzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiBsaSB7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJblJpZ2h0IDAuNXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSBuYXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJsZW5kZXJQcm9NZWRpdW1cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAvIDQpO1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6aG92ZXI6YWZ0ZXIsXHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYTpmb2N1czphZnRlcixcclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhOmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zNXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAuYnV0dG9uX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICByaWdodDogMy41JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\NewMenu.js */"));
}

_c = NewMenu;
/* harmony default export */ __webpack_exports__["default"] = (NewMenu);

var _c;

$RefreshReg$(_c, "NewMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdNZW51LmpzIl0sIm5hbWVzIjpbIk5ld01lbnUiLCJjbGljayIsImJvZHkiLCJkb2N1bWVudCIsImJ1cmdlckNvbnRhaW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnVyZ2VyTmF2IiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWNsaWNrIiwibWJ1cmdlciIsImdldEVsZW1lbnRCeUlkIiwibW92ZXJsYXkiLCJjb25zb2xlIiwibG9nIiwiZWFzdGVyZWdnIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInBvc3QiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInZpZGVvRGl2IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixXQUFTQyxLQUFULEdBQWlCO0FBQ2YsUUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsUUFBTUUsYUFBYSxHQUFHRCxRQUFRLENBQUNFLHNCQUFULENBQWdDLGFBQWhDLEVBQStDLENBQS9DLENBQXRCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHSCxRQUFRLENBQUNFLHNCQUFULENBQWdDLE9BQWhDLEVBQXlDLENBQXpDLENBQWxCO0FBRUEsS0FBQ0gsSUFBRCxFQUFPRSxhQUFQLEVBQXNCRSxTQUF0QixFQUFpQ0MsT0FBakMsQ0FBeUMsVUFBVUMsRUFBVixFQUFjO0FBQ3JEQSxRQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixNQUFwQjtBQUNELEtBRkQ7QUFHQTtBQUNEOztBQUVELFdBQVNDLE1BQVQsR0FBa0I7QUFDaEIsUUFBTVQsSUFBSSxHQUFHQyxRQUFRLENBQUNELElBQXRCO0FBQ0EsUUFBTVUsT0FBTyxHQUFHVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdYLFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixTQUF4QixDQUFqQjtBQUNBLEtBQUNELE9BQUQsRUFBVUwsT0FBVixDQUFrQixVQUFVQyxFQUFWLEVBQWM7QUFDOUJBLFFBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxNQUFiLENBQW9CLFFBQXBCO0FBQ0FLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDRCxLQUhEO0FBSUEsS0FBQ0YsUUFBRCxFQUFXUCxPQUFYLENBQW1CLFVBQVVDLEVBQVYsRUFBYztBQUMvQkEsUUFBRSxDQUFDQyxTQUFILENBQWFDLE1BQWIsQ0FBb0IsTUFBcEI7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNELEtBSEQ7QUFJRDs7QUFFRCxXQUFTQyxTQUFULEdBQXFCO0FBQ25CLFFBQU1mLElBQUksR0FBR0MsUUFBUSxDQUFDRCxJQUF0QjtBQUNBLFFBQU1nQixNQUFNLEdBQUdmLFFBQVEsQ0FBQ2dCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFFBQU1DLElBQUksR0FBR2pCLFFBQVEsQ0FBQ0Usc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBYjtBQUVBLEtBQUNlLElBQUQsRUFBT2IsT0FBUCxDQUFlLFVBQVVDLEVBQVYsRUFBYztBQUMzQkEsUUFBRSxDQUFDQyxTQUFILENBQWFDLE1BQWIsQ0FBb0IsUUFBcEI7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNELEtBSEQ7QUFLQUUsVUFBTSxDQUFDRyxHQUFQLEdBQWEsc0RBQWI7QUFDQUgsVUFBTSxDQUFDSSxLQUFQLEdBQWUsTUFBZjtBQUNBSixVQUFNLENBQUNLLE1BQVAsR0FBZ0IsTUFBaEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdyQixRQUFRLENBQUNFLHNCQUFULENBQWdDLFlBQWhDLENBQWpCO0FBQ0FtQixZQUFRLENBQUNDLFdBQVQsQ0FBcUJQLE1BQXJCO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRTtBQUFrQyxNQUFFLEVBQUMsUUFBckM7QUFBOEMsV0FBTyxFQUFFUCxNQUF2RDtBQUFBLHdDQUFlLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFnQixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBLHdDQUFnQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBLHdDQUFnQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FO0FBQXlCLE1BQUUsRUFBQyxTQUE1QjtBQUFBLHdDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQVBGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsb0JBQVI7QUFBNkIsVUFBTSxFQUFDLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBVkYsQ0FERixDQURGLENBTkYsRUEyQkU7QUFBQSx3Q0FBZSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQXNCLFFBQUksRUFBQyxHQUEzQjtBQUFBLHdDQUFhLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFzQixRQUFJLEVBQUMsUUFBM0I7QUFBQSx3Q0FBYSxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQU5GLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBc0IsUUFBSSxFQUFDLFFBQTNCO0FBQUEsd0NBQWEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FYRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUVFLFFBQUksRUFBQyxpQ0FGUDtBQUdFLFVBQU0sRUFBQyxNQUhUO0FBQUEsd0NBQ1ksUUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FoQkYsQ0FEQSxDQURGLEVBOEJFO0FBQUEsd0NBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBd0IsV0FBTyxFQUFFVixLQUFqQztBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQSx3Q0FBZSxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBLHdDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLENBOUJGLENBM0JGO0FBQUE7QUFBQTtBQUFBLGt6bUNBREY7QUFzZkQ7O0tBamlCUUQsTztBQW1pQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzY2NGU4MWMzZTQ3NDg4OTM5YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE5ld01lbnUoKSB7XHJcbiAgZnVuY3Rpb24gY2xpY2soKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGJ1cmdlckNvbnRhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYi1jb250YWluZXJcIilbMF07XHJcbiAgICBjb25zdCBidXJnZXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYi1uYXZcIilbMF07XHJcblxyXG4gICAgW2JvZHksIGJ1cmdlckNvbnRhaW4sIGJ1cmdlck5hdl0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICAgIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWNsaWNrKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBjb25zdCBtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XHJcbiAgICBjb25zdCBtb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTtcclxuICAgIFttYnVyZ2VyXS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xyXG4gICAgfSk7XHJcbiAgICBbbW92ZXJsYXldLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXkhXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlYXN0ZXJlZ2coKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgY29uc3QgcG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3N0XCIpO1xyXG4gIFxyXG4gICAgW3Bvc3RdLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGlmcmFtZS5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2dsRmM5RTFVSDRzP2F1dG9wbGF5PTFcIjtcclxuICAgIGlmcmFtZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgaWZyYW1lLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgY29uc3QgdmlkZW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2aWRlb0ZyYW1lJyk7XHJcbiAgICB2aWRlb0Rpdi5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX2NvbnRhaW5lclwiIGlkPVwidG9nZ2xlXCIgb25DbGljaz17bWNsaWNrfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3BcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwib3ZlcmxheS1tZW51XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL3Bvc3RzXCI+UG9zdHM8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOjEyM0BhYmMuY29tXCIgdGFyZ2V0PVwiX3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItbmF2XCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiLWxpbmtcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYi1saW5rXCIgaHJlZj1cIi9wb3N0c1wiPlxyXG4gICAgICAgICAgICAgIFBvc3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImItbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImItbGlua1wiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpBYXJvbl9kXzIzQGhvdG1haWwuY28udWtcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl90b3BcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLW1lbnVcIiBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYi1idW4gYi1idW4tLXRvcFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImItYnVuIGItYnVuLS1taWRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiLWJ1biBiLWJ1bi0tYm90dG9tXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjUwcHgsIDAsIDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTBweCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwLCAwKTtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1uYXYge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdjpub3QoLm9wZW4pIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItbmF2IGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdiBsaTpub3QoLm9wZW4pIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdiBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdi5vcGVuIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLW5hdi5vcGVuIGxpIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItbGluayB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiByZ2JhKDY4LCA2OCwgNjgsIDApIHNvbGlkIDJweDtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IEJsZW5kZXJQcm9NZWRpdW0sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWxpbms6aG92ZXIsXHJcbiAgICAgICAgLmItbGluay0tYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1tZW51IHtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xyXG4gICAgICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1LjVweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNy41cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICAgICAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXM7ICovXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGhvdmVyIGVmZmVjdCBvbiBidXR0b24gKi9cclxuICAgICAgICAuYi1tZW51OmhvdmVyIHtcclxuICAgICAgICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDEwMCwgMjA1KSwgdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiAuYi1tZW51OmhvdmVyOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7IGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDsgcmlnaHQ6IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDEwMCwgMjA1KSAwJSwgcmdiKDEyOCwgMTI4LCAyNTUpIDUwJSwgcmdiKDAsIDI1NSwgMjI1KSAxMDAlKTtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgXHJcbiAgICB9ICovXHJcblxyXG4gICAgICAgIC5iLW1lbnU6aG92ZXIgLmItYnVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmItYnVuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1idW4tLXRvcCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1idW4tLW1pZCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWJ1bi0tYm90dG9tIHtcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1icmFuZCB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0b3A6IC0yMS40Mjg1NzE0Mjg2cHg7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gICAgICAgICAgei1pbmRleDogMTM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYi1jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi10b3AsXHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi1taWQsXHJcbiAgICAgICAgLmItY29udGFpbmVyOmhvdmVyOm5vdCgub3BlbikgLmJ1bi1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItbWVudTpob3ZlciB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLW1haW4ge1xyXG4gICAgICAgICAgYm9yZGVyOiAjNDQ0NDQ0IHNvbGlkIDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItbWVudSB7XHJcbiAgICAgICAgICBib3JkZXI6IHJlZCBzb2xpZCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJ1bi0tdG9wIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnVuLS1taWQge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmItY29udGFpbmVyLm9wZW4gLmItYnVuLS1ib3R0b20ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iLWNvbnRhaW5lci5vcGVuIC5iLWJyYW5kIHtcclxuICAgICAgICAgIGNvbG9yOiAjNDQ0NDQ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMxYWJjOWM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXIgYTphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFhYmM5YztcclxuICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciBhOmhvdmVyOmFmdGVyLFxyXG4gICAgICAgIC5jb250YWluZXIgYTpmb2N1czphZnRlcixcclxuICAgICAgICAuY29udGFpbmVyIGE6YWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmxlbmRlclByb01lZGl1bVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAudG9wIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lci5hY3RpdmUgLm1pZGRsZSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIuYWN0aXZlIC5ib3R0b20ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIgc3BhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzBhY2UwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgZWFzZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXIgc3BhbjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25fY29udGFpbmVyIHNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMzlhMDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdmlzaWJpbGl0eSAwLjM1cywgaGVpZ2h0IDAuMzVzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5Lm9wZW4gbGkge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMzVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNDVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkgbmF2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCbGVuZGVyUHJvTWVkaXVtXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLyA0KTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB1bCBsaSBhOmhvdmVyOmFmdGVyLFxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6Zm9jdXM6YWZ0ZXIsXHJcbiAgICAgICAgLm92ZXJsYXkgdWwgbGkgYTphY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHVsIGxpIGE6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMzVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgICAgICAgLmJ1dHRvbl9jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgIC5idXR0b25fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDMuNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9