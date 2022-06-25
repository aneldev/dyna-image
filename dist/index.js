(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-image", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-image"] = factory();
	else
		root["dyna-image"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/typings-for-css-modules-loader/lib??ref--7-1!./node_modules/postcss-loader/lib??postcss!./node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".DynaImage-module-root--1YPv5yzG5UqC {\n  width: 100%;\n  height: 100%;\n}\n.DynaImage-module-imageContainer--36M3tFtJbOOT {\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.DynaImage-module-contentContainer--3xbQSbz0jif1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.DynaImage-module-loadFailedContainer--1eK3Vl6IX8bk {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  color: gray;\n}\n.DynaImage-module-brokenIcon--2YJuF_apl3Qv {\n  width: 20% !important;\n  height: 20% !important;\n}\n", ""]);

// exports
exports.locals = {
	"root": "DynaImage-module-root--1YPv5yzG5UqC",
	"imageContainer": "DynaImage-module-imageContainer--36M3tFtJbOOT",
	"contentContainer": "DynaImage-module-contentContainer--3xbQSbz0jif1",
	"loadFailedContainer": "DynaImage-module-loadFailedContainer--1eK3Vl6IX8bk",
	"brokenIcon": "DynaImage-module-brokenIcon--2YJuF_apl3Qv"
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/DynaImage.module.less":
/*!***********************************!*\
  !*** ./src/DynaImage.module.less ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/typings-for-css-modules-loader/lib??ref--7-1!../node_modules/postcss-loader/lib??postcss!../node_modules/less-loader/dist/cjs.js!./DynaImage.module.less */ "./node_modules/typings-for-css-modules-loader/lib/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js!./src/DynaImage.module.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/DynaImage.tsx":
/*!***************************!*\
  !*** ./src/DynaImage.tsx ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynaImage = exports.EImageMode = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var react_1 = __webpack_require__(/*! react */ "react");

var Loading_1 = __webpack_require__(/*! ./Loading */ "./src/Loading.tsx");

var cropDivBackgroundImage_1 = __webpack_require__(/*! ./utils/cropDivBackgroundImage */ "./src/utils/cropDivBackgroundImage.ts");

var styles = __importStar(__webpack_require__(/*! ./DynaImage.module.less */ "./src/DynaImage.module.less"));

var BrokenImage_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/BrokenImage */ "@material-ui/icons/BrokenImage"));

var cn_1 = __webpack_require__(/*! ./utils/cn */ "./src/utils/cn.ts");

var EImageMode;

(function (EImageMode) {
  EImageMode["FIT"] = "FIT";
  EImageMode["FILL"] = "FILL";
})(EImageMode = exports.EImageMode || (exports.EImageMode = {}));

var DynaImage = function DynaImage(props) {
  var className = props.className,
      userStyle = props.style,
      _a = props.imgStyle,
      imgStyle = _a === void 0 ? {} : _a,
      src = props.src,
      _b = props.mode,
      mode = _b === void 0 ? EImageMode.FIT : _b,
      alt = props.alt,
      content = props.content,
      _c = props.showLoadingSpinner,
      showLoadingSpinner = _c === void 0 ? false : _c,
      _d = props.showBrokenImageOnFail,
      showBrokenImageOnFail = _d === void 0 ? true : _d,
      crop = props.crop,
      horizontalMirror = props.horizontalMirror,
      verticalMirror = props.verticalMirror,
      blackAndWhite = props.blackAndWhite,
      onLoad = props.onLoad,
      onError = props.onError;
  var refDivWithBackgroundImage = (0, react_1.useRef)(null);

  var _e = (0, react_1.useState)(true),
      isLoading = _e[0],
      setIsLoading = _e[1];

  var _f = (0, react_1.useState)(false),
      loadFailed = _f[0],
      setLoadFailed = _f[1];

  (0, react_1.useEffect)(function () {
    setIsLoading(true);
    setLoadFailed(false);
  }, [src]);

  var style = __assign({
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

  var handleLoad = function handleLoad() {
    if (crop && refDivWithBackgroundImage.current) {
      (0, cropDivBackgroundImage_1.cropDivBackgroundImage)(refDivWithBackgroundImage.current, crop.percentageX1, crop.percentageY1, crop.percentageX2, crop.percentageY2);
    }

    setIsLoading(false);
    onLoad && onLoad();
  };

  var handleError = function handleError(e) {
    setIsLoading(false);
    setLoadFailed(true);
    onError && onError(e);
  };

  return React.createElement(React.Fragment, null, React.createElement(Loading_1.Loading, {
    className: (0, cn_1.cn)(styles.root, className),
    style: userStyle,
    isLoading: showLoadingSpinner && isLoading
  }, React.createElement("div", {
    key: JSON.stringify(props),
    className: styles.imageContainer,
    ref: refDivWithBackgroundImage,
    style: style
  }, showBrokenImageOnFail && !!loadFailed && React.createElement("div", {
    className: styles.loadFailedContainer
  }, React.createElement(BrokenImage_1["default"], {
    className: styles.brokenIcon
  })), !!content && React.createElement("div", {
    className: styles.contentContainer
  }, content))), React.createElement("img", {
    hidden: true,
    src: src,
    alt: alt,
    onLoad: handleLoad,
    onError: handleError
  }));
};

exports.DynaImage = DynaImage;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(__createBinding, "__createBinding", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(__setModuleDefault, "__setModuleDefault", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(__importStar, "__importStar", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(__importDefault, "__importDefault", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(React, "React", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(styles, "styles", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(BrokenImage_1, "BrokenImage_1", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(EImageMode, "EImageMode", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
  reactHotLoader.register(DynaImage, "DynaImage", "/Users/dennisat/dev/dyna/dyna-image/src/DynaImage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/DynaResponsiveImage.tsx":
/*!*************************************!*\
  !*** ./src/DynaResponsiveImage.tsx ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynaResponsiveImage = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var react_1 = __webpack_require__(/*! react */ "react");

var DynaResponsiveImage = function DynaResponsiveImage(props) {
  var className = props.className,
      _a = props.imgStyle,
      imgStyle = _a === void 0 ? {} : _a,
      srcSet = props.srcSet,
      alt = props.alt,
      content = props.content,
      horizontalMirror = props.horizontalMirror,
      verticalMirror = props.verticalMirror,
      blackAndWhite = props.blackAndWhite,
      zoom = props.zoom,
      onLoad = props.onLoad,
      onError = props.onError;
  var refImage = (0, react_1.useRef)(null);

  if (zoom && (verticalMirror || horizontalMirror)) {
    return React.createElement("div", null, "DynaImage: ", React.createElement("code", null, "zoom"), " cannot work with ", React.createElement("code", null, "horizontalMirror"), " or ", React.createElement("code", null, "verticalMirror"), ".");
  }

  return React.createElement("div", {
    className: className,
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("picture", null, Object.keys(srcSet).filter(function (set) {
    return set !== 'main' && !!srcSet[set];
  }).map(function (set, index) {
    return React.createElement("source", {
      key: index,
      media: "(max-width: ".concat(set.substring(1), "px)"),
      srcSet: "".concat(srcSet[set], " ").concat(set.substring(1), "w"),
      sizes: "100vw"
    });
  }), React.createElement("img", {
    width: "100%",
    ref: refImage,
    alt: alt,
    src: srcSet.main,
    style: __assign({
      transform: [horizontalMirror ? 'scaleX(-1)' : '', verticalMirror ? 'scaleY(-1)' : '', zoom ? "scale(".concat(zoom.zoom, ")") : ''].filter(Boolean).join(' '),
      transformOrigin: zoom ? "".concat(zoom.percentageX, "% ").concat(zoom.percentageY, "%") : undefined,
      filter: blackAndWhite ? 'grayscale(100%)' : undefined
    }, imgStyle),
    onLoad: onLoad,
    onError: onError
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }
  }, content));
};

exports.DynaResponsiveImage = DynaResponsiveImage;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__assign, "__assign", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
  reactHotLoader.register(__createBinding, "__createBinding", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
  reactHotLoader.register(__setModuleDefault, "__setModuleDefault", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
  reactHotLoader.register(__importStar, "__importStar", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
  reactHotLoader.register(React, "React", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
  reactHotLoader.register(DynaResponsiveImage, "DynaResponsiveImage", "/Users/dennisat/dev/dyna/dyna-image/src/DynaResponsiveImage.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/Loading.tsx":
/*!*************************!*\
  !*** ./src/Loading.tsx ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loading = void 0;

var React = __importStar(__webpack_require__(/*! react */ "react"));

var core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");

var makeStyles_1 = __importDefault(__webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles"));

var createStyles_1 = __importDefault(__webpack_require__(/*! @material-ui/core/styles/createStyles */ "@material-ui/core/styles/createStyles"));

var Loading = function Loading(props) {
  var className = props.className,
      style = props.style,
      isLoading = props.isLoading,
      _a = props.showCircularIcon,
      showCircularIcon = _a === void 0 ? true : _a,
      children = props.children;
  var classes = useStyles({});
  return React.createElement("div", {
    className: [classes.root, className].filter(Boolean).join(' '),
    style: style
  }, children, isLoading && React.createElement("div", {
    className: classes.loadingContainer
  }, showCircularIcon && React.createElement(core_1.CircularProgress, {
    className: classes.loader,
    variant: "indeterminate",
    color: "primary"
  })));
};

__signature__(Loading, "useStyles{classes}", function () {
  return [useStyles];
});

exports.Loading = Loading;
var useStyles = (0, makeStyles_1["default"])(function () {
  return (0, createStyles_1["default"])({
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
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__createBinding, "__createBinding", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(__setModuleDefault, "__setModuleDefault", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(__importStar, "__importStar", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(__importDefault, "__importDefault", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(React, "React", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(makeStyles_1, "makeStyles_1", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(createStyles_1, "createStyles_1", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(Loading, "Loading", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
  reactHotLoader.register(useStyles, "useStyles", "/Users/dennisat/dev/dyna/dyna-image/src/Loading.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynaResponsiveImage = exports.EImageMode = exports.DynaImage = void 0;

var DynaImage_1 = __webpack_require__(/*! ./DynaImage */ "./src/DynaImage.tsx");

Object.defineProperty(exports, "DynaImage", {
  enumerable: true,
  get: function get() {
    return DynaImage_1.DynaImage;
  }
});
Object.defineProperty(exports, "EImageMode", {
  enumerable: true,
  get: function get() {
    return DynaImage_1.EImageMode;
  }
});

var DynaResponsiveImage_1 = __webpack_require__(/*! ./DynaResponsiveImage */ "./src/DynaResponsiveImage.tsx");

Object.defineProperty(exports, "DynaResponsiveImage", {
  enumerable: true,
  get: function get() {
    return DynaResponsiveImage_1.DynaResponsiveImage;
  }
});

/***/ }),

/***/ "./src/utils/Canvas2Image.ts":
/*!***********************************!*\
  !*** ./src/utils/Canvas2Image.ts ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // @ts-nocheck

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas2Image = void 0;
/**
 * Covert canvas to image
 * and save the image file
 * Credits: https://www.npmjs.com/package/canvas-to-image
 */

exports.Canvas2Image = function () {
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
  } // Save file to local with file name and file type


  function saveFile(strData, fileType, fileName) {
    if (fileName === void 0) {
      fileName = "name";
    } // Document location.href = strData;


    var saveLink = document.createElement("a"); // Download file name

    saveLink.download = fileName + "." + fileType; // Download file data

    saveLink.href = strData; // Start download

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

    var BITMAPFILEHEADER = [// WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4d, // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff, // WORD bfReserved1 -- Reserved; must be zero
    0, 0, // WORD bfReserved2 -- Reserved; must be zero
    0, 0, // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0]; //
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

    var BITMAPINFOHEADER = [// DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0, // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff, // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff, // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0, // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // Has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0, // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0, // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff, // LONG biXPelsPerMeter, unused
    0, 0, 0, 0, // LONG biYPelsPerMeter, unused
    0, 0, 0, 0, // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0, // DWORD biClrImportant, unused
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
        var strData = genBitmapImage(data); // Use new parameter: fileType

        saveFile(makeURI(strData, downloadMime), fileType, fileName);
      } else {
        var strData = getDataURL(canvas, type, width, height); // Use new parameter: fileType

        saveFile(strData.replace(type, downloadMime), fileType, fileName);
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
        var strData = getDataURL(canvas, type, width, height);
        return genImage(strData);
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
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cn = void 0;

var cn = function cn() {
  var classNames = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    classNames[_i] = arguments[_i];
  }

  return classNames.filter(Boolean).join(' ');
};

exports.cn = cn;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cn, "cn", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cn.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/utils/cropDivBackgroundImage.ts":
/*!*********************************************!*\
  !*** ./src/utils/cropDivBackgroundImage.ts ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cropDivBackgroundImage = exports.cropImage = void 0;

var Canvas2Image_1 = __webpack_require__(/*! ./Canvas2Image */ "./src/utils/Canvas2Image.ts");

var cropImage = function cropImage(img, percentageX1, percentageY1, percentageX2, percentageY2) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      try {
        img.src = "url(" + cropImageCore(img, percentageX1, percentageY1, percentageX2, percentageY2) + ")";
      } catch (e) {
        console.error('Dyna Image: crop error: ' + e.message, e);
      }

      return [2
      /*return*/
      ];
    });
  });
};

exports.cropImage = cropImage;

var cropDivBackgroundImage = function cropDivBackgroundImage(divWithBackgroundImage, percentageX1, percentageY1, percentageX2, percentageY2) {
  return __awaiter(void 0, void 0, void 0, function () {
    var imageURL, croppedImage, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          imageURL = divWithBackgroundImage.style.backgroundImage.split('"')[1];
          return [4
          /*yield*/
          , cropImageByUrl(imageURL, percentageX1, percentageY1, percentageX2, percentageY2)];

        case 1:
          croppedImage = _a.sent();
          divWithBackgroundImage.style.backgroundImage = "url(" + croppedImage + ")";
          return [3
          /*break*/
          , 3];

        case 2:
          e_1 = _a.sent();
          console.error('Dyna Image: crop error: ' + e_1.message, e_1);
          return [3
          /*break*/
          , 3];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};

exports.cropDivBackgroundImage = cropDivBackgroundImage;

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
  ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, x1, // Copy from x
  y1, // Copy from y
  width, // Copy width
  height, // Copy height
  0, // Paste on x
  0, // Paste on y
  width, // Paste width
  height);
  var newImage = Canvas2Image_1.Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
  return newImage === null || newImage === void 0 ? void 0 : newImage.src;
};

var getPxValue = function getPxValue(percentage, size) {
  return size * percentage / 100;
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(__awaiter, "__awaiter", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(__generator, "__generator", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(cropImage, "cropImage", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(cropDivBackgroundImage, "cropDivBackgroundImage", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(cropImageByUrl, "cropImageByUrl", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(cropImageCore, "cropImageCore", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
  reactHotLoader.register(getPxValue, "getPxValue", "/Users/dennisat/dev/dyna/dyna-image/src/utils/cropDivBackgroundImage.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dennisat/dev/dyna/dyna-image/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles/createStyles":
/*!********************************************************!*\
  !*** external "@material-ui/core/styles/createStyles" ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createStyles");

/***/ }),

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "@material-ui/icons/BrokenImage":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BrokenImage" ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BrokenImage");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map