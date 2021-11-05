webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogPost */ "./components/BlogPost.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_TextEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TextEffect */ "./components/TextEffect.js");
/* harmony import */ var react_konami_code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-konami-code */ "./node_modules/react-konami-code/dist/Konami.js");
/* harmony import */ var react_konami_code__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_konami_code__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\pages\\index.js",
    _templateObject;



var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








function easteregg() {
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/wERoLoUkZFQ?autoplay=1&showinfo=0&controls=0";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.position = "absolute";
  iframe.frameBorder = "0";
  iframe.style = "pointer-events: none;";
  var videoDiv = document.getElementById('videoFrame');
  videoDiv.appendChild(iframe);
}

function Index(_ref) {
  var posts = _ref.posts,
      author = _ref.author;
  return __jsx("div", {
    className: "jsx-130325835",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-130325835",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Homepage")), __jsx("div", {
    id: "videoFrame",
    className: "jsx-130325835",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_components_TextEffect__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(_components_BlogPost__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "/posts",
    className: "jsx-130325835" + " " + "viewall",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-130325835" + " " + "block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-130325835",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "View all games")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "130325835",
    __self: this
  }, ".viewall.jsx-130325835{-webkit-text-decoration:none;text-decoration:none;display:contents;text-align:center;}.viewall.jsx-130325835 .block.jsx-130325835:after{-webkit-transition:1s filter;transition:1s filter;}.block.jsx-130325835 p.jsx-130325835{display:grid;font-family:BlenderProMedium,Helvetica,Arial,sans-serif;font-size:24px;color:white;position:absolute;top:-25px;bottom:-25px;left:0;right:0;line-height:100px;}.block.jsx-130325835{position:relative;margin-left:18%;margin-bottom:2%;width:300px;height:100px;background:linear-gradient(0deg,#000,#272727);border-radius:20px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.block.jsx-130325835:before,.block.jsx-130325835:after{content:\"\";position:absolute;left:-2px;top:-2px;background:linear-gradient( 45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000 );background-size:400%;width:calc(100% + 4px);height:calc(100% + 4px);z-index:-1;-webkit-animation:steam-jsx-130325835 20s linear infinite;animation:steam-jsx-130325835 20s linear infinite;border-radius:20px;}@-webkit-keyframes steam-jsx-130325835{0%{background-position:0 0;}50%{background-position:400% 0;}100%{background-position:0 0;}}@keyframes steam-jsx-130325835{0%{background-position:0 0;}50%{background-position:400% 0;}100%{background-position:0 0;}}.block.jsx-130325835:after{-webkit-filter:blur(5px);filter:blur(5px);}.viewall.jsx-130325835:hover .block.jsx-130325835:after{-webkit-filter:blur(50px);filter:blur(50px);}#videoFrame.jsx-130325835{height:100vh;width:99vw;position:absolute;z-index:77;}#videoFrame.jsx-130325835:empty{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NrQixBQUlnQyxBQU1BLEFBSVIsQUFhSyxBQVlQLEFBMkJlLEFBR0csQUFHSCxBQUtULEFBSUMsQUFJTCxBQU1BLFdBbkRLLEVBekJ5QyxBQXVFaEQsQUFNYixLQWhFa0IsTUF1Q2hCLEFBTUEsQUFja0IsR0FqQmxCLEVBN0JVLEtBWk8sS0FhUixHQW9DWCxBQVVhLEVBTmIsSUEzQkcsRUFsRGdCLEFBTW5CLENBbUJjLEVBMkRkLFVBMURlLElBekJLLEVBVUgsT0FnQmlDLFFBZnBDLENBVmQsV0FXb0Isa0JBQ1IsUUFjUyxFQWJOLGFBQ04sSUFhYSxHQVpaLFFBQ1Usa0JBQ3BCLElBZ0N1QixxQkFDRSx1QkFDQyx3QkFDYixDQXhCYixVQXlCc0MsNEdBQ2pCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhcm9uXFxEZXNrdG9wXFxOZXcgZm9sZGVyICg1KVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dQb3N0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBUZXh0RWZmZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRFZmZlY3RcIjtcclxuaW1wb3J0IEtvbmFtaSBmcm9tIFwicmVhY3Qta29uYW1pLWNvZGVcIjtcclxuXHJcbmZ1bmN0aW9uIGVhc3RlcmVnZygpIHtcclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgaWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd0VSb0xvVWtaRlE/YXV0b3BsYXk9MSZzaG93aW5mbz0wJmNvbnRyb2xzPTBcIjtcclxuICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICBpZnJhbWUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgaWZyYW1lLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gIGlmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xyXG4gIGlmcmFtZS5zdHlsZSA9IFwicG9pbnRlci1ldmVudHM6IG5vbmU7XCJcclxuICB2YXIgdmlkZW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9GcmFtZScpO1xyXG4gIHZpZGVvRGl2LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcG9zdHMsIGF1dGhvciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lcGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBpZD1cInZpZGVvRnJhbWVcIj48L2Rpdj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8VGV4dEVmZmVjdCAvPlxyXG4gICAgICAgIDxCbG9nUG9zdCBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlld2FsbFwiIGhyZWY9XCIvcG9zdHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+VmlldyBhbGwgZ2FtZXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC52aWV3YWxsIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpZXdhbGwgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGZpbHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jayBwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQmxlbmRlclByb01lZGl1bSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgICBib3R0b206IC0yNXB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMCwgIzI3MjcyNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2s6YmVmb3JlLFxyXG4gICAgICAgIC5ibG9jazphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogLTJweDtcclxuICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgNDVkZWcsXHJcbiAgICAgICAgICAgICNmYjAwOTQsXHJcbiAgICAgICAgICAgICMwMDAwZmYsXHJcbiAgICAgICAgICAgICMwMGZmMDAsXHJcbiAgICAgICAgICAgICNmZmZmMDAsXHJcbiAgICAgICAgICAgICNmZjAwMDAsXHJcbiAgICAgICAgICAgICNmYjAwOTQsXHJcbiAgICAgICAgICAgICMwMDAwZmYsXHJcbiAgICAgICAgICAgICMwMGZmMDAsXHJcbiAgICAgICAgICAgICNmZmZmMDAsXHJcbiAgICAgICAgICAgICNmZjAwMDBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzdGVhbSAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc3RlYW0ge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpZXdhbGw6aG92ZXIgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIGZpbHRlcjogYmx1cig1MHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN2aWRlb0ZyYW1lIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB3aWR0aDogOTl2dztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdmlkZW9GcmFtZTplbXB0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8S29uYW1pIGFjdGlvbj17ZWFzdGVyZWdnfT5cclxuICAgICAgPC9Lb25hbWk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcclxuICAgICAgKltfaWQgPT0gXCIyYzhhY2NkZC0zYmIyLTQ0NWUtODQ2My03ZDU0YmEyZDQ0ZWZcIl0ge1xyXG4gICAgICAgIC4uLixcclxuICAgICAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT5cclxuICAgICAgfVxyXG4gICAgYCksXHJcbn0pO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\pages\\\\index.js */"), __jsx(react_konami_code__WEBPACK_IMPORTED_MODULE_11___default.a, {
    action: easteregg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }));
}
_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _client__WEBPACK_IMPORTED_MODULE_9___default.a.fetch(groq__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      *[_id == \"2c8accdd-3bb2-445e-8463-7d54ba2d44ef\"] {\n        ...,\n      \"mainImage\": mainImage.asset->\n      }\n    "]))));

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            posts: _context.t0
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZWFzdGVyZWdnIiwiaWZyYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImZyYW1lQm9yZGVyIiwic3R5bGUiLCJ2aWRlb0RpdiIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJJbmRleCIsInBvc3RzIiwiYXV0aG9yIiwiZ2V0SW5pdGlhbFByb3BzIiwiY2xpZW50IiwiZmV0Y2giLCJncm9xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDbkIsTUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRixRQUFNLENBQUNHLEdBQVAsR0FBYSw0RUFBYjtBQUNBSCxRQUFNLENBQUNJLEtBQVAsR0FBZSxNQUFmO0FBQ0FKLFFBQU0sQ0FBQ0ssTUFBUCxHQUFnQixNQUFoQjtBQUNBTCxRQUFNLENBQUNNLFFBQVAsR0FBa0IsVUFBbEI7QUFDQU4sUUFBTSxDQUFDTyxXQUFQLEdBQXFCLEdBQXJCO0FBQ0FQLFFBQU0sQ0FBQ1EsS0FBUCxHQUFlLHVCQUFmO0FBQ0EsTUFBSUMsUUFBUSxHQUFHUixRQUFRLENBQUNTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZjtBQUNBRCxVQUFRLENBQUNFLFdBQVQsQ0FBcUJYLE1BQXJCO0FBQ0Q7O0FBRWMsU0FBU1ksS0FBVCxPQUFrQztBQUFBLE1BQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDL0MsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQUlFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFBVSxTQUFLLEVBQUVELEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQXVCLFFBQUksRUFBQyxRQUE1QjtBQUFBLHVDQUFhLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsdUNBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FIRixDQUxGO0FBQUE7QUFBQTtBQUFBLDBoUEEyR0UsTUFBQyx5REFBRDtBQUFRLFVBQU0sRUFBRWQsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNHRixDQURGO0FBZ0hEO0tBakh1QmEsSztBQW1IeEJBLEtBQUssQ0FBQ0csZUFBTixpTUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1RDLDhDQUFNLENBQUNDLEtBQVAsQ0FBYUMsMkNBQWIsaVJBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQ3RCTCxpQkFEc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmFmMjk5NDNkM2Y2OTY1ZTVlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dQb3N0IGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2dQb3N0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCBUZXh0RWZmZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRFZmZlY3RcIjtcclxuaW1wb3J0IEtvbmFtaSBmcm9tIFwicmVhY3Qta29uYW1pLWNvZGVcIjtcclxuXHJcbmZ1bmN0aW9uIGVhc3RlcmVnZygpIHtcclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgaWZyYW1lLnNyYyA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvd0VSb0xvVWtaRlE/YXV0b3BsYXk9MSZzaG93aW5mbz0wJmNvbnRyb2xzPTBcIjtcclxuICBpZnJhbWUud2lkdGggPSBcIjEwMCVcIjtcclxuICBpZnJhbWUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgaWZyYW1lLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gIGlmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xyXG4gIGlmcmFtZS5zdHlsZSA9IFwicG9pbnRlci1ldmVudHM6IG5vbmU7XCJcclxuICB2YXIgdmlkZW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9GcmFtZScpO1xyXG4gIHZpZGVvRGl2LmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgcG9zdHMsIGF1dGhvciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lcGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBpZD1cInZpZGVvRnJhbWVcIj48L2Rpdj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8VGV4dEVmZmVjdCAvPlxyXG4gICAgICAgIDxCbG9nUG9zdCBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlld2FsbFwiIGhyZWY9XCIvcG9zdHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgPHA+VmlldyBhbGwgZ2FtZXM8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC52aWV3YWxsIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpZXdhbGwgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzIGZpbHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ibG9jayBwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQmxlbmRlclByb01lZGl1bSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgICBib3R0b206IC0yNXB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMCwgIzI3MjcyNyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmxvY2s6YmVmb3JlLFxyXG4gICAgICAgIC5ibG9jazphZnRlciB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogLTJweDtcclxuICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgNDVkZWcsXHJcbiAgICAgICAgICAgICNmYjAwOTQsXHJcbiAgICAgICAgICAgICMwMDAwZmYsXHJcbiAgICAgICAgICAgICMwMGZmMDAsXHJcbiAgICAgICAgICAgICNmZmZmMDAsXHJcbiAgICAgICAgICAgICNmZjAwMDAsXHJcbiAgICAgICAgICAgICNmYjAwOTQsXHJcbiAgICAgICAgICAgICMwMDAwZmYsXHJcbiAgICAgICAgICAgICMwMGZmMDAsXHJcbiAgICAgICAgICAgICNmZmZmMDAsXHJcbiAgICAgICAgICAgICNmZjAwMDBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcclxuICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzdGVhbSAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBrZXlmcmFtZXMgc3RlYW0ge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpZXdhbGw6aG92ZXIgLmJsb2NrOmFmdGVyIHtcclxuICAgICAgICAgIGZpbHRlcjogYmx1cig1MHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN2aWRlb0ZyYW1lIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB3aWR0aDogOTl2dztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDc3O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjdmlkZW9GcmFtZTplbXB0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8S29uYW1pIGFjdGlvbj17ZWFzdGVyZWdnfT5cclxuICAgICAgPC9Lb25hbWk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xyXG4gIHBvc3RzOiBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcclxuICAgICAgKltfaWQgPT0gXCIyYzhhY2NkZC0zYmIyLTQ0NWUtODQ2My03ZDU0YmEyZDQ0ZWZcIl0ge1xyXG4gICAgICAgIC4uLixcclxuICAgICAgXCJtYWluSW1hZ2VcIjogbWFpbkltYWdlLmFzc2V0LT5cclxuICAgICAgfVxyXG4gICAgYCksXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9