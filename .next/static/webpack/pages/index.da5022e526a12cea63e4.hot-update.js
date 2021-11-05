webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TextEffect.js":
/*!**********************************!*\
  !*** ./components/TextEffect.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_dencrypt_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-dencrypt-effect */ "./node_modules/use-dencrypt-effect/dist/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\TextEffect.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];

var values = ["Latest Project"];

var TextEffect = function TextEffect() {
  _s();

  var _useDencrypt = Object(use_dencrypt_effect__WEBPACK_IMPORTED_MODULE_2__["useDencrypt"])(),
      result = _useDencrypt.result,
      dencrypt = _useDencrypt.dencrypt;

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var i = 0;
    var action = setInterval(function () {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 1000);
    return function () {
      return clearInterval(action);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3990913678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, result, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3990913678",
    __self: _this
  }, "@font-face{font-family:\"Ponde\";src:url(\"https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2Fponde___.ttf?v=1636136028723\"), url(\"https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2Fponde___.ttf?v=1636136028723\") format(\"ttf\");}@font-face{font-family:\"PixelFont\";src:url(\"https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2FSpookyPixelFont-Regular.ttf?v=1636136053962\"), url(\"https://cdn.glitch.me/e0644440-9dc1-433d-a852-23d7d5f44df7%2FSpookyPixelFont-Regular.ttf?v=1636136053962\") format(\"ttf\");}.ponde.jsx-3990913678{font-family:\"Ponde\",sans-serif;}.pixelfont.jsx-3990913678{font-family:\"PixelFont\",sans-serif;}div.jsx-3990913678{color:white;font-size:48px;color:white;font-family:\"Ponde\",sans-serif;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:14%;margin-top:10%;margin-bottom:0%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxUZXh0RWZmZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHK0IsQUFPSSxBQU9RLEFBSUksQUFJeEIsWUFDRyxRQXBCRSxJQU9BLEdBY0wsSUFUZCxJQUlBLElBTWtDLCtCQUNaLHNHQUNKLGdCQUNELGVBQ0UsaUJBQ25CLGFBMUJBLGtDQU9BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFyb25cXERlc2t0b3BcXE5ldyBmb2xkZXIgKDUpXFxjb21wb25lbnRzXFxUZXh0RWZmZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGVuY3J5cHQgfSBmcm9tIFwidXNlLWRlbmNyeXB0LWVmZmVjdFwiO1xyXG5cclxuLy8gY29uc3QgdmFsdWVzID0gW1widXNlRGVuY3J5cHRcIiwgXCJDdXN0b21pemFibGVcIiwgXCJSZWFjdCBIb29rXCIsIFwiVGV4dCBFZmZlY3RcIl07XHJcbmNvbnN0IHZhbHVlcyA9IFtcIkxhdGVzdCBQcm9qZWN0XCJdO1xyXG5cclxuY29uc3QgVGV4dEVmZmVjdCA9ICgpID0+IHtcclxuICBjb25zdCB7IHJlc3VsdCwgZGVuY3J5cHQgfSA9IHVzZURlbmNyeXB0KCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgY29uc3QgYWN0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBkZW5jcnlwdCh2YWx1ZXNbaV0pO1xyXG5cclxuICAgICAgaSA9IGkgPT09IHZhbHVlcy5sZW5ndGggLSAxID8gMCA6IGkgKyAxO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYWN0aW9uKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVzdWx0fVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb25kZVwiO1xyXG4gICAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL2Nkbi5nbGl0Y2gubWUvZTA2NDQ0NDAtOWRjMS00MzNkLWE4NTItMjNkN2Q1ZjQ0ZGY3JTJGcG9uZGVfX18udHRmP3Y9MTYzNjEzNjAyODcyM1wiKSxcclxuICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLm1lL2UwNjQ0NDQwLTlkYzEtNDMzZC1hODUyLTIzZDdkNWY0NGRmNyUyRnBvbmRlX19fLnR0Zj92PTE2MzYxMzYwMjg3MjNcIilcclxuICAgICAgICAgICAgICBmb3JtYXQoXCJ0dGZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBpeGVsRm9udFwiO1xyXG4gICAgICAgICAgc3JjOiB1cmwoXCJodHRwczovL2Nkbi5nbGl0Y2gubWUvZTA2NDQ0NDAtOWRjMS00MzNkLWE4NTItMjNkN2Q1ZjQ0ZGY3JTJGU3Bvb2t5UGl4ZWxGb250LVJlZ3VsYXIudHRmP3Y9MTYzNjEzNjA1Mzk2MlwiKSxcclxuICAgICAgICAgICAgdXJsKFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLm1lL2UwNjQ0NDQwLTlkYzEtNDMzZC1hODUyLTIzZDdkNWY0NGRmNyUyRlNwb29reVBpeGVsRm9udC1SZWd1bGFyLnR0Zj92PTE2MzYxMzYwNTM5NjJcIilcclxuICAgICAgICAgICAgICBmb3JtYXQoXCJ0dGZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9uZGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9uZGVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5waXhlbGZvbnQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGl4ZWxGb250XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9uZGVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0JTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRFZmZlY3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aaron\\\\Desktop\\\\New folder (5)\\\\components\\\\TextEffect.js */"));
};

_s(TextEffect, "MzX1P3uxAYwTMR96L0ZPOoy/ti4=", false, function () {
  return [use_dencrypt_effect__WEBPACK_IMPORTED_MODULE_2__["useDencrypt"]];
});

_c = TextEffect;
/* harmony default export */ __webpack_exports__["default"] = (TextEffect);

var _c;

$RefreshReg$(_c, "TextEffect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZXh0RWZmZWN0LmpzIl0sIm5hbWVzIjpbInZhbHVlcyIsIlRleHRFZmZlY3QiLCJ1c2VEZW5jcnlwdCIsInJlc3VsdCIsImRlbmNyeXB0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJpIiwiYWN0aW9uIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxDQUFDLGdCQUFELENBQWY7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixxQkFBNkJDLHVFQUFXLEVBQXhDO0FBQUEsTUFBUUMsTUFBUixnQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxRQUFoQixnQkFBZ0JBLFFBQWhCOztBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQy9CTCxjQUFRLENBQUNKLE1BQU0sQ0FBQ08sQ0FBRCxDQUFQLENBQVI7QUFFQUEsT0FBQyxHQUFHQSxDQUFDLEtBQUtQLE1BQU0sQ0FBQ1UsTUFBUCxHQUFnQixDQUF0QixHQUEwQixDQUExQixHQUE4QkgsQ0FBQyxHQUFHLENBQXRDO0FBQ0QsS0FKeUIsRUFJdkIsSUFKdUIsQ0FBMUI7QUFNQSxXQUFPO0FBQUEsYUFBTUksYUFBYSxDQUFDSCxNQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBVkQsRUFVRyxFQVZIO0FBWUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsTUFESDtBQUFBO0FBQUE7QUFBQSwrN0hBREY7QUF1Q0QsQ0F0REQ7O0dBQU1GLFU7VUFDeUJDLCtEOzs7S0FEekJELFU7QUF3RFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhNTAyMmU1MjZhMTJjZWE2M2U0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEZW5jcnlwdCB9IGZyb20gXCJ1c2UtZGVuY3J5cHQtZWZmZWN0XCI7XHJcblxyXG4vLyBjb25zdCB2YWx1ZXMgPSBbXCJ1c2VEZW5jcnlwdFwiLCBcIkN1c3RvbWl6YWJsZVwiLCBcIlJlYWN0IEhvb2tcIiwgXCJUZXh0IEVmZmVjdFwiXTtcclxuY29uc3QgdmFsdWVzID0gW1wiTGF0ZXN0IFByb2plY3RcIl07XHJcblxyXG5jb25zdCBUZXh0RWZmZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcmVzdWx0LCBkZW5jcnlwdCB9ID0gdXNlRGVuY3J5cHQoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICBjb25zdCBhY3Rpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGRlbmNyeXB0KHZhbHVlc1tpXSk7XHJcblxyXG4gICAgICBpID0gaSA9PT0gdmFsdWVzLmxlbmd0aCAtIDEgPyAwIDogaSArIDE7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChhY3Rpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtyZXN1bHR9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvbmRlXCI7XHJcbiAgICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vY2RuLmdsaXRjaC5tZS9lMDY0NDQ0MC05ZGMxLTQzM2QtYTg1Mi0yM2Q3ZDVmNDRkZjclMkZwb25kZV9fXy50dGY/dj0xNjM2MTM2MDI4NzIzXCIpLFxyXG4gICAgICAgICAgICB1cmwoXCJodHRwczovL2Nkbi5nbGl0Y2gubWUvZTA2NDQ0NDAtOWRjMS00MzNkLWE4NTItMjNkN2Q1ZjQ0ZGY3JTJGcG9uZGVfX18udHRmP3Y9MTYzNjEzNjAyODcyM1wiKVxyXG4gICAgICAgICAgICAgIGZvcm1hdChcInR0ZlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGl4ZWxGb250XCI7XHJcbiAgICAgICAgICBzcmM6IHVybChcImh0dHBzOi8vY2RuLmdsaXRjaC5tZS9lMDY0NDQ0MC05ZGMxLTQzM2QtYTg1Mi0yM2Q3ZDVmNDRkZjclMkZTcG9va3lQaXhlbEZvbnQtUmVndWxhci50dGY/dj0xNjM2MTM2MDUzOTYyXCIpLFxyXG4gICAgICAgICAgICB1cmwoXCJodHRwczovL2Nkbi5nbGl0Y2gubWUvZTA2NDQ0NDAtOWRjMS00MzNkLWE4NTItMjNkN2Q1ZjQ0ZGY3JTJGU3Bvb2t5UGl4ZWxGb250LVJlZ3VsYXIudHRmP3Y9MTYzNjEzNjA1Mzk2MlwiKVxyXG4gICAgICAgICAgICAgIGZvcm1hdChcInR0ZlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wb25kZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBpeGVsZm9udCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQaXhlbEZvbnRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb25kZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTQlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEVmZmVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==