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
      className: _css_blogpost_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ponde,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qcyJdLCJuYW1lcyI6WyJCbG9nUG9zdCIsInByb3BzIiwicG9zdHMiLCJzdHlsZSIsImJsb2dwb3N0IiwibWFwIiwiX2lkIiwidGl0bGUiLCJzbHVnIiwibWFpbkltYWdlIiwiX2NyZWF0ZWRBdCIsInRhZ3MiLCJzdWJzZWN0aW9uIiwicG9zdCIsImN1cnJlbnQiLCJsaW5rIiwicG9uZGUiLCJwaXhlbGZvbnQiLCJoaGVhZGluZyIsIndyYXBwZXIiLCJoY29udGFpbmVyIiwiaGFzaHRhZyIsIm92ZXJsYXkiLCJpbWFnZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUV2QixxQkFBdUJBLEtBQXZCLENBQVFDLEtBQVI7QUFBQSxNQUFRQSxLQUFSLDZCQUFnQixFQUFoQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFLLENBQUNDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQ0M7QUFBQSxRQUNFQyxHQURGLFFBQ0VBLEdBREY7QUFBQSwwQkFFRUMsS0FGRjtBQUFBLFFBRUVBLEtBRkYsMkJBRVUsRUFGVjtBQUFBLHlCQUdFQyxJQUhGO0FBQUEsUUFHRUEsSUFIRiwwQkFHUyxFQUhUO0FBQUEsUUFJRUMsU0FKRixRQUlFQSxTQUpGO0FBQUEsK0JBS0VDLFVBTEY7QUFBQSxRQUtFQSxVQUxGLGdDQUtlLEVBTGY7QUFBQSx5QkFNRUMsSUFORjtBQUFBLFFBTUVBLElBTkYsMEJBTVMsRUFOVDtBQUFBLCtCQU9FQyxVQVBGO0FBQUEsUUFPRUEsVUFQRixnQ0FPZSxFQVBmOztBQUFBLFdBU0VKLElBQUksSUFDRixNQUFDLDJEQUFEO0FBQU0sUUFBRSxFQUFDLEtBQVQ7QUFBZSxlQUFTLEVBQUVMLCtEQUFLLENBQUNVLElBQWhDO0FBQXNDLFNBQUcsRUFBRVAsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixRQUFFLGtCQUFXRSxJQUFJLENBQUNNLE9BQWhCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRVgsK0RBQUssQ0FBQ1ksSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFWiwrREFBSyxDQUFDYSxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUViLCtEQUFLLENBQUNJLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JBLEtBQS9CLENBREYsRUFHRTtBQUFLLGVBQVMsRUFBRUosK0RBQUssQ0FBQ2MsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFZCwrREFBSyxDQUFDZSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FIRixFQU1FO0FBQUssZUFBUyxFQUFFZiwrREFBSyxDQUFDZ0IsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFFaEIsK0RBQUssQ0FBQ1MsVUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ0EsVUFBakMsQ0FERixDQU5GLEVBU0U7QUFBSyxlQUFTLEVBQUVULCtEQUFLLENBQUNpQixVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUVqQiwrREFBSyxDQUFDa0IsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ1YsSUFBSSxDQUFDLENBQUQsQ0FBckMsQ0FERixFQUVFO0FBQU0sZUFBUyxFQUFFUiwrREFBSyxDQUFDa0IsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ1YsSUFBSSxDQUFDLENBQUQsQ0FBckMsQ0FGRixFQUdFO0FBQU0sZUFBUyxFQUFFUiwrREFBSyxDQUFDa0IsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQ1YsSUFBSSxDQUFDLENBQUQsQ0FBckMsQ0FIRixDQVRGLEVBY0U7QUFBSyxlQUFTLEVBQUVSLCtEQUFLLENBQUNtQixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZEYsRUFlRTtBQUNFLFNBQUcsRUFBRWhCLEdBRFA7QUFFRSxlQUFTLEVBQUVILCtEQUFLLENBQUNvQixLQUZuQjtBQUdFLFNBQUcsWUFBS2QsU0FBUyxDQUFDZSxHQUFmLENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWZGLENBREYsQ0FERixDQURGLENBVko7QUFBQSxHQURELENBREgsQ0FERjtBQTRDRDs7S0EvQ1F4QixRO0FBaURNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNGZhYWQ4MzhmNThhNTY2YzEwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL2Nzcy9ibG9ncG9zdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC1wYXJhbGxheC10aWx0XCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcblxyXG5mdW5jdGlvbiBCbG9nUG9zdChwcm9wcykge1xyXG5cclxuICBjb25zdCB7IHBvc3RzID0gW10gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmxvZ3Bvc3R9PlxyXG4gICAgICB7cG9zdHMubWFwKFxyXG4gICAgICAgICh7XHJcbiAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICB0aXRsZSA9IFwiXCIsXHJcbiAgICAgICAgICBzbHVnID0gXCJcIixcclxuICAgICAgICAgIG1haW5JbWFnZSxcclxuICAgICAgICAgIF9jcmVhdGVkQXQgPSBcIlwiLFxyXG4gICAgICAgICAgdGFncyA9IFtdLFxyXG4gICAgICAgICAgc3Vic2VjdGlvbiA9IFwiXCIsXHJcbiAgICAgICAgfSkgPT5cclxuICAgICAgICAgIHNsdWcgJiYgKFxyXG4gICAgICAgICAgICA8VGlsdCBpZD1cIm5hbVwiIGNsYXNzTmFtZT17c3R5bGUucG9zdH0ga2V5PXtfaWR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5saW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBvbmRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnRpdGxlfT57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmRhdGV9PntfY3JlYXRlZEF0fTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBpeGVsZm9udH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmhoZWFkaW5nfT50YWdzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuc3Vic2VjdGlvbn0+e3N1YnNlY3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuaGFzaHRhZ30+e3RhZ3NbMF19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5oYXNodGFnfT57dGFnc1sxXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmhhc2h0YWd9Pnt0YWdzWzJdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtfaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHttYWluSW1hZ2UudXJsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1RpbHQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==