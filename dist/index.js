(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-image", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-image"] = factory();
	else
		root["dyna-image"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DynaImage.tsx":
/*!***************************!*\
  !*** ./src/DynaImage.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynaImage: () => (/* binding */ DynaImage),
/* harmony export */   EImageMode: () => (/* binding */ EImageMode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-hash */ "object-hash");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/Loading.tsx");
/* harmony import */ var _utils_cropDivBackgroundImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/cropDivBackgroundImage */ "./src/utils/cropDivBackgroundImage.ts");
/* harmony import */ var _DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DynaImage.module.less */ "./src/DynaImage.module.less");
/* harmony import */ var _material_ui_icons_BrokenImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/BrokenImage */ "@material-ui/icons/BrokenImage");
/* harmony import */ var _material_ui_icons_BrokenImage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BrokenImage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/cn */ "./src/utils/cn.ts");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var EImageMode;
(function (EImageMode) {
  EImageMode["FIT"] = "FIT";
  EImageMode["FILL"] = "FILL";
})(EImageMode || (EImageMode = {}));
var DynaImage = function DynaImage(props) {
  var className = props.className,
    userStyle = props.style,
    _props$imgStyle = props.imgStyle,
    imgStyle = _props$imgStyle === void 0 ? {} : _props$imgStyle,
    src = props.src,
    _props$mode = props.mode,
    mode = _props$mode === void 0 ? EImageMode.FIT : _props$mode,
    alt = props.alt,
    content = props.content,
    _props$showLoadingSpi = props.showLoadingSpinner,
    showLoadingSpinner = _props$showLoadingSpi === void 0 ? false : _props$showLoadingSpi,
    _props$showBrokenImag = props.showBrokenImageOnFail,
    showBrokenImageOnFail = _props$showBrokenImag === void 0 ? true : _props$showBrokenImag,
    crop = props.crop,
    horizontalMirror = props.horizontalMirror,
    verticalMirror = props.verticalMirror,
    blackAndWhite = props.blackAndWhite,
    onLoad = props.onLoad,
    onError = props.onError;
  var refDivWithBackgroundImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loadFailed = _useState4[0],
    setLoadFailed = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setIsLoading(true);
    setLoadFailed(false);
  }, [src]);
  var style = Object.assign({
    backgroundImage: "url(".concat(src, ")"),
    backgroundSize: function () {
      switch (mode) {
        case EImageMode.FIT:
          return 'contain';
        case EImageMode.FILL:
          return 'cover';
      }
    }(),
    transform: [horizontalMirror ? 'scaleX(-1)' : '', verticalMirror ? 'scaleY(-1)' : ''].filter(Boolean).join(' '),
    filter: blackAndWhite ? 'grayscale(100%)' : undefined
  }, imgStyle);
  var key = object_hash__WEBPACK_IMPORTED_MODULE_2___default()(Object.assign(Object.assign({}, props), {
    content: undefined
  }));
  var handleLoad = function handleLoad() {
    if (crop && refDivWithBackgroundImage.current) {
      (0,_utils_cropDivBackgroundImage__WEBPACK_IMPORTED_MODULE_4__.cropDivBackgroundImage)(refDivWithBackgroundImage.current, crop.percentageX1, crop.percentageY1, crop.percentageX2, crop.percentageY2);
    }
    setIsLoading(false);
    onLoad && onLoad();
  };
  var handleError = function handleError(e) {
    setIsLoading(false);
    setLoadFailed(true);
    onError && onError(e);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_7__.cn)(_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__.root, className),
      style: userStyle,
      isLoading: showLoadingSpinner && isLoading,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__.imageContainer,
        ref: refDivWithBackgroundImage,
        style: style,
        children: [showBrokenImageOnFail && !!loadFailed && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: _DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__.loadFailedContainer,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_material_ui_icons_BrokenImage__WEBPACK_IMPORTED_MODULE_6___default()), {
            className: _DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__.brokenIcon
          })
        }), !!content && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: _DynaImage_module_less__WEBPACK_IMPORTED_MODULE_5__.contentContainer,
          children: content
        })]
      }, key)
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      hidden: true,
      src: src,
      alt: alt,
      onLoad: handleLoad,
      onError: handleError
    })]
  });
};

/***/ }),

/***/ "./src/DynaResponsiveImage.tsx":
/*!*************************************!*\
  !*** ./src/DynaResponsiveImage.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynaResponsiveImage: () => (/* binding */ DynaResponsiveImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DynaResponsiveImageByScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynaResponsiveImageByScreen */ "./src/DynaResponsiveImageByScreen.tsx");
/* harmony import */ var _DynaResponsiveImageByContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynaResponsiveImageByContainer */ "./src/DynaResponsiveImageByContainer.tsx");



var DynaResponsiveImage = function DynaResponsiveImage(props) {
  var relation = props.relation;
  return relation === "screen" ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DynaResponsiveImageByScreen__WEBPACK_IMPORTED_MODULE_1__.DynaResponsiveImageByScreen, Object.assign({}, props)) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DynaResponsiveImageByContainer__WEBPACK_IMPORTED_MODULE_2__.DynaResponsiveImageByContainer, Object.assign({}, props));
};

/***/ }),

/***/ "./src/DynaResponsiveImageByContainer.tsx":
/*!************************************************!*\
  !*** ./src/DynaResponsiveImageByContainer.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynaResponsiveImageByContainer: () => (/* binding */ DynaResponsiveImageByContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useResizeEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/useResizeEvent */ "./src/utils/useResizeEvent.ts");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var DynaResponsiveImageByContainer = function DynaResponsiveImageByContainer(props) {
  var className = props.className,
    _props$imgStyle = props.imgStyle,
    imgStyle = _props$imgStyle === void 0 ? {} : _props$imgStyle,
    srcSet = props.srcSet,
    alt = props.alt,
    content = props.content,
    horizontalMirror = props.horizontalMirror,
    verticalMirror = props.verticalMirror,
    blackAndWhite = props.blackAndWhite,
    zoom = props.zoom,
    onLoad = props.onLoad,
    onError = props.onError;
  var imageVersions = Object.entries(srcSet).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      width = _ref2[0];
    return width !== "main";
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      _width = _ref4[0],
      url = _ref4[1];
    return {
      width: parseInt(_width.slice(1)),
      url: url
    };
  }).sort(function (a, b) {
    return a.width - b.width;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    containerWidth = _useState4[0],
    setContainerWidth = _useState4[1];
  var _useResizeEvent = (0,_utils_useResizeEvent__WEBPACK_IMPORTED_MODULE_2__.useResizeEvent)({
      skipOnMount: false,
      onResize: function onResize(_ref5) {
        var containerWidth = _ref5.width;
        return setContainerWidth(containerWidth);
      }
    }),
    ref = _useResizeEvent.ref;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var imageVersion = imageVersions.find(function (version) {
      return version.width >= containerWidth;
    });
    var url = imageVersion ? imageVersion.url : imageVersions[imageVersions.length - 1].url;
    setImageUrl(url);
  }, [containerWidth, srcSet.main]);
  if (zoom && (verticalMirror || horizontalMirror)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: ["DynaResponsiveImage: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "zoom"
      }), " cannot work with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "horizontalMirror"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "verticalMirror"
      }), "."]
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    ref: ref,
    className: className,
    "data-component-name": "DynaResponsiveImage",
    style: {
      position: 'relative',
      overflow: 'hidden'
    },
    children: !!imageUrl && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        width: "100%",
        alt: alt,
        src: imageUrl,
        style: Object.assign({
          transform: [horizontalMirror ? 'scaleX(-1)' : '', verticalMirror ? 'scaleY(-1)' : '', zoom ? "scale(".concat(zoom.zoom, ")") : ''].filter(Boolean).join(' '),
          transformOrigin: zoom ? "".concat(zoom.percentageX, "% ").concat(zoom.percentageY, "%") : undefined,
          filter: blackAndWhite ? 'grayscale(100%)' : undefined
        }, imgStyle),
        onLoad: onLoad,
        onError: onError
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        children: content
      })]
    })
  });
};

/***/ }),

/***/ "./src/DynaResponsiveImageByScreen.tsx":
/*!*********************************************!*\
  !*** ./src/DynaResponsiveImageByScreen.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynaResponsiveImageByScreen: () => (/* binding */ DynaResponsiveImageByScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var DynaResponsiveImageByScreen = function DynaResponsiveImageByScreen(props) {
  var className = props.className,
    _props$imgStyle = props.imgStyle,
    imgStyle = _props$imgStyle === void 0 ? {} : _props$imgStyle,
    srcSet = props.srcSet,
    alt = props.alt,
    content = props.content,
    horizontalMirror = props.horizontalMirror,
    verticalMirror = props.verticalMirror,
    blackAndWhite = props.blackAndWhite,
    zoom = props.zoom,
    onLoad = props.onLoad,
    onError = props.onError;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  var handleLoad = function handleLoad() {
    setIsLoaded(true);
    onLoad && onLoad();
  };
  if (zoom && (verticalMirror || horizontalMirror)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: ["DynaResponsiveImage: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "zoom"
      }), " cannot work with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "horizontalMirror"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: "verticalMirror"
      }), "."]
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    style: {
      position: 'relative',
      overflow: 'hidden'
    },
    "data-component-name": "DynaResponsiveImage",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        media: "(max-width: 767px)",
        srcSet: ["".concat(srcSet.W192, " 128w"), "".concat(srcSet.W384, " 240w"), "".concat(srcSet.W384, " 320w"), "".concat(srcSet.W768, " 640w")].join(', '),
        sizes: "100vw"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
        media: "(min-width: 768px)",
        srcSet: ["".concat(srcSet.W192, " 128w"), "".concat(srcSet.W384, " 240w"), "".concat(srcSet.W384, " 320w"), "".concat(srcSet.W768, " 640w"), "".concat(srcSet.W1024, " 960w"), "".concat(srcSet.W2048, " 2048w"), "".concat(srcSet.W4096, " 4096w")].join(', '),
        sizes: "50vw"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        width: "100%",
        alt: alt,
        src: srcSet.main,
        style: Object.assign({
          transform: [horizontalMirror ? 'scaleX(-1)' : '', verticalMirror ? 'scaleY(-1)' : '', zoom ? "scale(".concat(zoom.zoom, ")") : ''].filter(Boolean).join(' '),
          transformOrigin: zoom ? "".concat(zoom.percentageX, "% ").concat(zoom.percentageY, "%") : undefined,
          filter: blackAndWhite ? 'grayscale(100%)' : undefined
        }, imgStyle),
        onLoad: handleLoad,
        onError: onError
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      style: {
        display: isLoaded ? undefined : 'none',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      children: content
    })]
  });
};

/***/ }),

/***/ "./src/Loading.tsx":
/*!*************************!*\
  !*** ./src/Loading.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/createStyles */ "@material-ui/core/styles/createStyles");
/* harmony import */ var _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_3__);




var Loading = function Loading(props) {
  var className = props.className,
    style = props.style,
    isLoading = props.isLoading,
    _props$showCircularIc = props.showCircularIcon,
    showCircularIcon = _props$showCircularIc === void 0 ? true : _props$showCircularIc,
    children = props.children;
  var classes = useStyles({});
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: [classes.root, className].filter(Boolean).join(' '),
    style: style,
    children: [children, isLoading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: classes.loadingContainer,
      children: showCircularIcon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {
        className: classes.loader,
        variant: "indeterminate",
        color: "primary"
      })
    })]
  });
};
var useStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return _material_ui_core_styles_createStyles__WEBPACK_IMPORTED_MODULE_3___default()({
    root: {
      position: 'relative'
    },
    loadingContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    loader: {
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: 'calc(50% - 20px)'
    }
  });
});

/***/ }),

/***/ "./src/utils/Canvas2Image.ts":
/*!***********************************!*\
  !*** ./src/utils/Canvas2Image.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas2Image: () => (/* binding */ Canvas2Image)
/* harmony export */ });
// @ts-nocheck
/**
 * Covert canvas to image
 * and save the image file
 * Credits: https://www.npmjs.com/package/canvas-to-image
 */
var Canvas2Image = function () {
  // Check if support sth.
  var $support = function () {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    return {
      canvas: !!ctx,
      imageData: !!ctx.getImageData,
      dataURL: !!canvas.toDataURL,
      btoa: !!window.btoa
    };
  }();
  var downloadMime = "image/octet-stream";
  function scaleCanvas(canvas, width, height) {
    var w = canvas.width,
      h = canvas.height;
    if (width === undefined) {
      width = w;
    }
    if (height === undefined) {
      height = h;
    }
    var retCanvas = document.createElement("canvas");
    var retCtx = retCanvas.getContext("2d");
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
    return retCanvas;
  }
  function getDataURL(canvas, type, width, height) {
    canvas = scaleCanvas(canvas, width, height);
    return canvas.toDataURL(type);
  }
  // Save file to local with file name and file type
  function saveFile(strData, fileType) {
    var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "name";
    // Document location.href = strData;
    var saveLink = document.createElement("a");
    // Download file name
    saveLink.download = fileName + "." + fileType;
    // Download file data
    saveLink.href = strData;
    // Start download
    saveLink.click();
  }
  function genImage(strData) {
    var img = document.createElement("img");
    img.src = strData;
    return img;
  }
  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, "jpeg");
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return "image/" + r;
  }
  function encodeData(data) {
    if (!window.btoa) {
      // eslint-disable-next-line no-throw-literal
      throw "btoa undefined";
    }
    var str = "";
    if (typeof data == "string") {
      str = data;
    } else {
      for (var i = 0; i < data.length; i++) {
        str += String.fromCharCode(data[i]);
      }
    }
    return btoa(str);
  }
  function getImageData(canvas) {
    var w = canvas.width,
      h = canvas.height;
    return canvas.getContext("2d").getImageData(0, 0, w, h);
  }
  function makeURI(strData, type) {
    return "data:" + type + ";base64," + strData;
  }
  /**
   * Create bitmap image
   * 按照规则生成图片响应头和响应体
   */
  var genBitmapImage = function genBitmapImage(oData) {
    //
    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
    //
    var biWidth = oData.width;
    var biHeight = oData.height;
    var biSizeImage = biWidth * biHeight * 3;
    var bfSize = biSizeImage + 54; // Total header size = 54 bytes
    //
    //  Typedef struct tagBITMAPFILEHEADER {
    //  	WORD bfType;
    //  	DWORD bfSize;
    //  	WORD bfReserved1;
    //  	WORD bfReserved2;
    //  	DWORD bfOffBits;
    //  } BITMAPFILEHEADER;
    //
    var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4d,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0, 0,
    // WORD bfReserved2 -- Reserved; must be zero
    0, 0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0];
    //
    //  Typedef struct tagBITMAPINFOHEADER {
    //  	DWORD biSize;
    //  	LONG  biWidth;
    //  	LONG  biHeight;
    //  	WORD  biPlanes;
    //  	WORD  biBitCount;
    //  	DWORD biCompression;
    //  	DWORD biSizeImage;
    //  	LONG  biXPelsPerMeter;
    //  	LONG  biYPelsPerMeter;
    //  	DWORD biClrUsed;
    //  	DWORD biClrImportant;
    //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
    //
    var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // Has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
    // LONG biXPelsPerMeter, unused
    0, 0, 0, 0,
    // LONG biYPelsPerMeter, unused
    0, 0, 0, 0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0,
    // DWORD biClrImportant, unused
    0, 0, 0, 0];
    var iPadding = (4 - biWidth * 3 % 4) % 4;
    var aImgData = oData.data;
    var strPixelData = "";
    var biWidth4 = biWidth << 2;
    var y = biHeight;
    var fromCharCode = String.fromCharCode;
    do {
      var iOffsetY = biWidth4 * (y - 1);
      var strPixelRow = "";
      for (var x = 0; x < biWidth; x++) {
        var iOffsetX = x << 2;
        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) + fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) + fromCharCode(aImgData[iOffsetY + iOffsetX]);
      }
      for (var c = 0; c < iPadding; c++) {
        strPixelRow += String.fromCharCode(0);
      }
      strPixelData += strPixelRow;
    } while (--y);
    return encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);
  };
  /**
   * SaveAsImage
   * @param canvas canvasElement
   * @param width {String} image type
   * @param height {Number} [optional] png width
   * @param type {string} [optional] png height
   * @param fileName {String} image name
   */
  var saveAsImage = function saveAsImage(canvas, width, height, type, fileName) {
    // Save file type
    var fileType = type;
    if ($support.canvas && $support.dataURL) {
      if (typeof canvas == "string") {
        canvas = document.getElementById(canvas);
      }
      if (type === undefined) {
        type = "png";
      }
      type = fixType(type);
      if (/bmp/.test(type)) {
        var data = getImageData(scaleCanvas(canvas, width, height));
        var strData = genBitmapImage(data);
        // Use new parameter: fileType
        saveFile(makeURI(strData, downloadMime), fileType, fileName);
      } else {
        var _strData = getDataURL(canvas, type, width, height);
        // Use new parameter: fileType
        saveFile(_strData.replace(type, downloadMime), fileType, fileName);
      }
    }
  };
  var convertToImage = function convertToImage(canvas, width, height, type) {
    if ($support.canvas && $support.dataURL) {
      if (typeof canvas == "string") {
        canvas = document.getElementById(canvas);
      }
      if (type === undefined) {
        type = "png";
      }
      type = fixType(type);
      if (/bmp/.test(type)) {
        var data = getImageData(scaleCanvas(canvas, width, height));
        var strData = genBitmapImage(data);
        return genImage(makeURI(strData, "image/bmp"));
      } else {
        var _strData2 = getDataURL(canvas, type, width, height);
        return genImage(_strData2);
      }
    }
  };
  return {
    saveAsImage: saveAsImage,
    saveAsPNG: function saveAsPNG(canvas, width, height, fileName) {
      return saveAsImage(canvas, width, height, "png", fileName);
    },
    saveAsJPEG: function saveAsJPEG(canvas, width, height, fileName) {
      return saveAsImage(canvas, width, height, "jpeg", fileName);
    },
    saveAsGIF: function saveAsGIF(canvas, width, height, fileName) {
      return saveAsImage(canvas, width, height, "gif", fileName);
    },
    saveAsBMP: function saveAsBMP(canvas, width, height, fileName) {
      return saveAsImage(canvas, width, height, "bmp", fileName);
    },
    convertToImage: convertToImage,
    convertToPNG: function convertToPNG(canvas, width, height) {
      return convertToImage(canvas, width, height, "png");
    },
    convertToJPEG: function convertToJPEG(canvas, width, height) {
      return convertToImage(canvas, width, height, "jpeg");
    },
    convertToGIF: function convertToGIF(canvas, width, height) {
      return convertToImage(canvas, width, height, "gif");
    },
    convertToBMP: function convertToBMP(canvas, width, height) {
      return convertToImage(canvas, width, height, "bmp");
    }
  };
}();

/***/ }),

/***/ "./src/utils/cn.ts":
/*!*************************!*\
  !*** ./src/utils/cn.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
var cn = function cn() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  return classNames.filter(Boolean).join(' ');
};

/***/ }),

/***/ "./src/utils/cropDivBackgroundImage.ts":
/*!*********************************************!*\
  !*** ./src/utils/cropDivBackgroundImage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cropDivBackgroundImage: () => (/* binding */ cropDivBackgroundImage)
/* harmony export */ });
/* unused harmony export cropImage */
/* harmony import */ var dyna_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dyna-error */ "dyna-error");
/* harmony import */ var dyna_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dyna_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Canvas2Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas2Image */ "./src/utils/Canvas2Image.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


var cropImage = function cropImage(img, percentageX1, percentageY1, percentageX2, percentageY2) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var error;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          try {
            img.src = "url(" + cropImageCore(img, percentageX1, percentageY1, percentageX2, percentageY2) + ")";
          } catch (e) {
            error = (0,dyna_error__WEBPACK_IMPORTED_MODULE_0__.dynaError)(e);
            console.error('Dyna Image: crop error: ' + error.message, error);
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var cropDivBackgroundImage = function cropDivBackgroundImage(divWithBackgroundImage, percentageX1, percentageY1, percentageX2, percentageY2) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var imageURL, croppedImage, error;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          imageURL = divWithBackgroundImage.style.backgroundImage.split('"')[1];
          _context2.next = 4;
          return cropImageByUrl(imageURL, percentageX1, percentageY1, percentageX2, percentageY2);
        case 4:
          croppedImage = _context2.sent;
          divWithBackgroundImage.style.backgroundImage = "url(" + croppedImage + ")";
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          error = (0,dyna_error__WEBPACK_IMPORTED_MODULE_0__.dynaError)(_context2.t0);
          console.error('Dyna Image: crop error: ' + error.message, error);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
};
var cropImageByUrl = function cropImageByUrl(imageURL, percentageX1, percentageY1, percentageX2, percentageY2) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.src = imageURL;
    image.setAttribute('crossorigin', 'anonymous');
    image.onload = function () {
      resolve(cropImageCore(image, percentageX1, percentageY1, percentageX2, percentageY2));
    };
    image.onerror = reject;
  });
};
var cropImageCore = function cropImageCore(image, percentageX1, percentageY1, percentageX2, percentageY2) {
  var x1 = getPxValue(percentageX1, image.width);
  var x2 = getPxValue(percentageX2, image.width);
  var y1 = getPxValue(percentageY1, image.height);
  var y2 = getPxValue(percentageY2, image.height);
  var width = x2 - x1;
  var height = y2 - y1;
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext('2d');
  ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, x1,
  // Copy from x
  y1,
  // Copy from y
  width,
  // Copy width
  height,
  // Copy height
  0,
  // Paste on x
  0,
  // Paste on y
  width,
  // Paste width
  height);
  var newImage = _Canvas2Image__WEBPACK_IMPORTED_MODULE_1__.Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
  return newImage === null || newImage === void 0 ? void 0 : newImage.src;
};
var getPxValue = function getPxValue(percentage, size) {
  return size * percentage / 100;
};

/***/ }),

/***/ "./src/utils/useIsMounted.ts":
/*!***********************************!*\
  !*** ./src/utils/useIsMounted.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIsMounted = function useIsMounted() {
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return isMounted.current;
  }, []);
};

/***/ }),

/***/ "./src/utils/useResizeEvent.ts":
/*!*************************************!*\
  !*** ./src/utils/useResizeEvent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResizeEvent: () => (/* binding */ useResizeEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-debounce */ "use-debounce");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-resize-detector */ "react-resize-detector");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_resize_detector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsMounted */ "./src/utils/useIsMounted.ts");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var useResizeEvent = function useResizeEvent() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$refreshRate = _ref.refreshRate,
    refreshRate = _ref$refreshRate === void 0 ? 500 : _ref$refreshRate,
    _ref$minRefreshRate = _ref.minRefreshRate,
    minRefreshRate = _ref$minRefreshRate === void 0 ? refreshRate : _ref$minRefreshRate,
    _ref$skipOnMount = _ref.skipOnMount,
    skipOnMount = _ref$skipOnMount === void 0 ? true : _ref$skipOnMount,
    _ref$leading = _ref.leading,
    leading = _ref$leading === void 0 ? true : _ref$leading,
    _ref$trailing = _ref.trailing,
    trailing = _ref$trailing === void 0 ? true : _ref$trailing,
    _ref$onResize = _ref.onResize,
    onResize = _ref$onResize === void 0 ? function () {
      return undefined;
    } : _ref$onResize;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    mountEventCall = _useState2[0],
    setMountEventCall = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      width: 0,
      height: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    dimension = _useState4[0],
    setDimension = _useState4[1];
  var getIsMounted = (0,_useIsMounted__WEBPACK_IMPORTED_MODULE_3__.useIsMounted)();
  var getDimension = function getDimension(width, height) {
    return {
      width: width,
      height: height
    };
  };
  var handleContainerResize = (0,use_debounce__WEBPACK_IMPORTED_MODULE_1__.useDebouncedCallback)(function (width, height) {
    if (width === undefined) return; // 4TS
    if (height === undefined) return; // 4TS
    var currentDimension = getDimension(width, height);
    if (width === 0 && height === 0) return; // Ignore this useDebouncedCallback's call
    if (!mountEventCall) {
      setMountEventCall(true);
      setDimension(currentDimension);
      if (!skipOnMount) {
        onResize({
          width: width,
          height: height,
          diffPercentage: 0
        });
      }
      return;
    }
    var widthDiffPercentage = Math.abs(100 * (width - dimension.width) / dimension.width);
    var heightDiffPercentage = Math.abs(100 * (height - dimension.height) / dimension.height);
    var diffPercentage = (widthDiffPercentage + heightDiffPercentage) / 2;
    var sameDimension = diffPercentage === 0;
    setDimension(currentDimension);
    if (!sameDimension && getIsMounted()) {
      onResize({
        width: width,
        height: height,
        diffPercentage: diffPercentage
      });
    }
  }, refreshRate, {
    leading: leading,
    trailing: trailing,
    maxWait: minRefreshRate
  });
  var _useResizeDetector = (0,react_resize_detector__WEBPACK_IMPORTED_MODULE_2__.useResizeDetector)({
      skipOnMount: false,
      onResize: handleContainerResize
    }),
    ref = _useResizeDetector.ref;
  return Object.assign({
    ref: ref
  }, dimension);
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.96.1/node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.96.1/node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brokenIcon: () => (/* binding */ brokenIcon),
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   imageContainer: () => (/* binding */ imageContainer),
/* harmony export */   loadFailedContainer: () => (/* binding */ loadFailedContainer),
/* harmony export */   root: () => (/* binding */ root)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.qpa2t3RsZFQMX7IMLzoS {
  width: 100%;
  height: 100%;
}
.HUpusUk4umoKdu2TPNfp {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
.dGnuJeqiLHPxj3UlG482 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.cCWDD9GsNJFG02IgyQMV {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  color: gray;
}
.iZyKQffkfOfq1_uvFStC {
  width: 20% !important;
  height: 20% !important;
}
`, "",{"version":3,"sources":["webpack://./src/DynaImage.module.less"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;AACF;AAEA;EACE,WAAA;EACA,YAAA;EAKA,kCAAA;EACA,4BAAA;EAEA,kBAAA;AALF;AAQA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;AANF;AASA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,oBAAA;EAAA,aAAA;EACA,qBAAA;MAAA,uBAAA;EACA,sBAAA;MAAA,mBAAA;EACA,WAAA;AAPF;AAUA;EACE,qBAAA;EACA,sBAAA;AARF","sourcesContent":[".root {\n  width: 100%;\n  height: 100%;\n}\n\n.imageContainer {\n  width: 100%;\n  height: 100%;\n\n  // background-image: url(images/background-photo.jpg); // Updated from JS\n  // background-size: cover; // Updated from JS\n\n  background-position: center center;\n  background-repeat: no-repeat;\n\n  position: relative;\n}\n\n.contentContainer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.loadFailedContainer {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: gray;\n}\n\n.brokenIcon {\n  width: 20% !important;\n  height: 20% !important;;\n}\n"],"sourceRoot":""}]);
// Exports
var root = `qpa2t3RsZFQMX7IMLzoS`;
var imageContainer = `HUpusUk4umoKdu2TPNfp`;
var contentContainer = `dGnuJeqiLHPxj3UlG482`;
var loadFailedContainer = `cCWDD9GsNJFG02IgyQMV`;
var brokenIcon = `iZyKQffkfOfq1_uvFStC`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/DynaImage.module.less":
/*!***********************************!*\
  !*** ./src/DynaImage.module.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brokenIcon: () => (/* reexport safe */ _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__.brokenIcon),
/* harmony export */   contentContainer: () => (/* reexport safe */ _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__.contentContainer),
/* harmony export */   imageContainer: () => (/* reexport safe */ _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__.imageContainer),
/* harmony export */   loadFailedContainer: () => (/* reexport safe */ _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__.loadFailedContainer),
/* harmony export */   root: () => (/* reexport safe */ _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__.root)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!../node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!../node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.96.1/node_modules/less-loader/dist/cjs.js!./DynaImage.module.less */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.96.1/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/.pnpm/typed-css-modules-loader@0.0.18/node_modules/typed-css-modules-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/.pnpm/postcss-loader@8.1.1_postcss@8.4.49_typescript@5.6.3_webpack@5.96.1/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./node_modules/.pnpm/less-loader@12.2.0_less@4.2.0_webpack@5.96.1/node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_96_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_96_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_pnpm_typed_css_modules_loader_0_0_18_node_modules_typed_css_modules_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_pnpm_postcss_loader_8_1_1_postcss_8_4_49_typescript_5_6_3_webpack_5_96_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_node_modules_pnpm_less_loader_12_2_0_less_4_2_0_webpack_5_96_1_node_modules_less_loader_dist_cjs_js_DynaImage_module_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.96.1/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles/createStyles":
/*!********************************************************!*\
  !*** external "@material-ui/core/styles/createStyles" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/createStyles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/icons/BrokenImage":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BrokenImage" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/BrokenImage");

/***/ }),

/***/ "dyna-error":
/*!*****************************!*\
  !*** external "dyna-error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("dyna-error");

/***/ }),

/***/ "object-hash":
/*!******************************!*\
  !*** external "object-hash" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("object-hash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-resize-detector":
/*!****************************************!*\
  !*** external "react-resize-detector" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-resize-detector");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "use-debounce":
/*!*******************************!*\
  !*** external "use-debounce" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("use-debounce");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynaImage: () => (/* reexport safe */ _DynaImage__WEBPACK_IMPORTED_MODULE_0__.DynaImage),
/* harmony export */   DynaResponsiveImage: () => (/* reexport safe */ _DynaResponsiveImage__WEBPACK_IMPORTED_MODULE_1__.DynaResponsiveImage),
/* harmony export */   EImageMode: () => (/* reexport safe */ _DynaImage__WEBPACK_IMPORTED_MODULE_0__.EImageMode)
/* harmony export */ });
/* harmony import */ var _DynaImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynaImage */ "./src/DynaImage.tsx");
/* harmony import */ var _DynaResponsiveImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynaResponsiveImage */ "./src/DynaResponsiveImage.tsx");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map