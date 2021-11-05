webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/blogpost.module.css */ "./css/blogpost.module.css");
/* harmony import */ var _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-parallax-tilt */ "./node_modules/react-parallax-tilt/dist/index.esm.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\aaron\\Desktop\\New folder (5)\\components\\BlogPost.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function BlogPost(props) {
  var _this = this;

  var _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts;
  return __jsx("div", {
    className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blogpost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, posts.map(function (_ref) {
    var _id = _ref._id,
        _ref$title = _ref.title,
        title = _ref$title === void 0 ? "" : _ref$title,
        _ref$slug = _ref.slug,
        slug = _ref$slug === void 0 ? "" : _ref$slug,
        mainImage = _ref.mainImage,
        _ref$_createdAt = _ref._createdAt,
        _createdAt = _ref$_createdAt === void 0 ? "" : _ref$_createdAt,
        _ref$tags = _ref.tags,
        tags = _ref$tags === void 0 ? [] : _ref$tags,
        _ref$subsection = _ref.subsection,
        subsection = _ref$subsection === void 0 ? "" : _ref$subsection;

    return slug && __jsx(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "nam",
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.post,
      key: _id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(slug.current),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pixelfont,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, title), __jsx("div", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.pixelfont,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hheading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 23
      }
    }, "tags")), __jsx("div", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.subsection,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 23
      }
    }, subsection)), __jsx("div", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hcontainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hashtag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }
    }, tags[0]), __jsx("span", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hashtag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 23
      }
    }, tags[1]), __jsx("span", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hashtag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 23
      }
    }, tags[2])), __jsx("div", {
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }), __jsx("img", {
      alt: _id,
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.image,
      src: "".concat(mainImage.url),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    })))));
  }));
}

_c = BlogPost;
/* harmony default export */ __webpack_exports__["default"] = (BlogPost);

var _c;

$RefreshReg$(_c, "BlogPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qcyJdLCJuYW1lcyI6WyJCbG9nUG9zdCIsInByb3BzIiwicG9zdHMiLCJzdHlsZSIsImJsb2dwb3N0IiwibWFwIiwiX2lkIiwidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwiX2NyZWF0ZWRBdCIsInRhZ3MiLCJzdWJzZWN0aW9uIiwicG9zdCIsImN1cnJlbnQiLCJsaW5rIiwicGl4ZWxmb250IiwiaGhlYWRpbmciLCJ3cmFwcGVyIiwiaGNvbnRhaW5lciIsImhhc2h0YWciLCJvdmVybGF5IiwiaW1hZ2UiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFFdkIscUJBQXVCQSxLQUF2QixDQUFRQyxLQUFSO0FBQUEsTUFBUUEsS0FBUiw2QkFBZ0IsRUFBaEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFQywrREFBSyxDQUFDQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEtBQUssQ0FBQ0csR0FBTixDQUNDO0FBQUEsUUFDRUMsR0FERixRQUNFQSxHQURGO0FBQUEsMEJBRUVDLEtBRkY7QUFBQSxRQUVFQSxLQUZGLDJCQUVVLEVBRlY7QUFBQSx5QkFHRUMsSUFIRjtBQUFBLFFBR0VBLElBSEYsMEJBR1MsRUFIVDtBQUFBLFFBSUVDLFNBSkYsUUFJRUEsU0FKRjtBQUFBLCtCQUtFQyxVQUxGO0FBQUEsUUFLRUEsVUFMRixnQ0FLZSxFQUxmO0FBQUEseUJBTUVDLElBTkY7QUFBQSxRQU1FQSxJQU5GLDBCQU1TLEVBTlQ7QUFBQSwrQkFPRUMsVUFQRjtBQUFBLFFBT0VBLFVBUEYsZ0NBT2UsRUFQZjs7QUFBQSxXQVNFSixJQUFJLElBQ0YsTUFBQywyREFBRDtBQUFNLFFBQUUsRUFBQyxLQUFUO0FBQWUsZUFBUyxFQUFFTCwrREFBSyxDQUFDVSxJQUFoQztBQUFzQyxTQUFHLEVBQUVQLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsUUFBRSxrQkFBV0UsSUFBSSxDQUFDTSxPQUFoQixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUVYLCtEQUFLLENBQUNZLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRVosK0RBQUssQ0FBQ2EsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFYiwrREFBSyxDQUFDSSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCQSxLQUEvQixDQURGLEVBR0U7QUFBSyxlQUFTLEVBQUVKLCtEQUFLLENBQUNhLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRWIsK0RBQUssQ0FBQ2MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBSEYsRUFNRTtBQUFLLGVBQVMsRUFBRWQsK0RBQUssQ0FBQ2UsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFFZiwrREFBSyxDQUFDUyxVQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDQSxVQUFqQyxDQURGLENBTkYsRUFTRTtBQUFLLGVBQVMsRUFBRVQsK0RBQUssQ0FBQ2dCLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRWhCLCtEQUFLLENBQUNpQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDVCxJQUFJLENBQUMsQ0FBRCxDQUFyQyxDQURGLEVBRUU7QUFBTSxlQUFTLEVBQUVSLCtEQUFLLENBQUNpQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDVCxJQUFJLENBQUMsQ0FBRCxDQUFyQyxDQUZGLEVBR0U7QUFBTSxlQUFTLEVBQUVSLCtEQUFLLENBQUNpQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDVCxJQUFJLENBQUMsQ0FBRCxDQUFyQyxDQUhGLENBVEYsRUFjRTtBQUFLLGVBQVMsRUFBRVIsK0RBQUssQ0FBQ2tCLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkRixFQWVFO0FBQ0UsU0FBRyxFQUFFZixHQURQO0FBRUUsZUFBUyxFQUFFSCwrREFBSyxDQUFDbUIsS0FGbkI7QUFHRSxTQUFHLFlBQUtiLFNBQVMsQ0FBQ2MsR0FBZixDQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFmRixDQURGLENBREYsQ0FERixDQVZKO0FBQUEsR0FERCxDQURILENBREY7QUE0Q0Q7O0tBL0NRdkIsUTtBQWlETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjJjNzVjMTc1MzljM2ZhMzNiZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9jc3MvYmxvZ3Bvc3QubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVGlsdCBmcm9tIFwicmVhY3QtcGFyYWxsYXgtdGlsdFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5cclxuZnVuY3Rpb24gQmxvZ1Bvc3QocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBwb3N0cyA9IFtdIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2dwb3N0fT5cclxuICAgICAge3Bvc3RzLm1hcChcclxuICAgICAgICAoe1xyXG4gICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgICAgICAgc2x1ZyA9IFwiXCIsXHJcbiAgICAgICAgICBtYWluSW1hZ2UsXHJcbiAgICAgICAgICBfY3JlYXRlZEF0ID0gXCJcIixcclxuICAgICAgICAgIHRhZ3MgPSBbXSxcclxuICAgICAgICAgIHN1YnNlY3Rpb24gPSBcIlwiLFxyXG4gICAgICAgIH0pID0+XHJcbiAgICAgICAgICBzbHVnICYmIChcclxuICAgICAgICAgICAgPFRpbHQgaWQ9XCJuYW1cIiBjbGFzc05hbWU9e3N0eWxlLnBvc3R9IGtleT17X2lkfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5waXhlbGZvbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUudGl0bGV9Pnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuZGF0ZX0+e19jcmVhdGVkQXR9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGl4ZWxmb250fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuaGhlYWRpbmd9PnRhZ3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5zdWJzZWN0aW9ufT57c3Vic2VjdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhjb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5oYXNodGFnfT57dGFnc1swXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmhhc2h0YWd9Pnt0YWdzWzFdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuaGFzaHRhZ30+e3RhZ3NbMl19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e19pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake21haW5JbWFnZS51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvVGlsdD5cclxuICAgICAgICAgIClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9