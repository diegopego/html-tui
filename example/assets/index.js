/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(/*! ./index.css */ 2);
	
	var _ = __webpack_require__(/*! .. */ 1);
	
	var TuiElement = _.TuiElement;
	var render = _.render;
	var compressBox = _.compressBox;
	
	requestAnimationFrame(function () {
	    var element = new TuiElement(document.querySelector(".tui-dom"));
	    var serializedElement = compressBox(element.toArray());
	
	    document.querySelector(".tui-cli").innerHTML = render.html(serializedElement);
	    if (/PhantomJS/.test(window.navigator.userAgent)) {
	        console.log(render.ansi(serializedElement));
	    } else {
	        console.log.apply(console, render.chrome(serializedElement));
	    }
	});

/***/ },
/* 1 */
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TuiElement = _interopRequire(__webpack_require__(/*! ./lib/tui-element */ 4));
	exports.render = _interopRequire(__webpack_require__(/*! ./lib/renders */ 7));
	exports.compressBox = _interopRequire(__webpack_require__(/*! ./lib/compress-box */ 5));
	exports.addSerializer = __webpack_require__(/*! ./lib/serializers */ 8).addSerializer;

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../~/css-loader!./index.css */ 3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../~/style-loader/addStyles.js */ 6)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/azproduction/Projects/html-tui/node_modules/css-loader/index.js!/Users/azproduction/Projects/html-tui/example/index.css", function() {
			var newContent = require("!!/Users/azproduction/Projects/html-tui/node_modules/css-loader/index.js!/Users/azproduction/Projects/html-tui/example/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ../~/css-loader!./index.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/cssToString.js */ 9)();
	__webpack_require__(/*! ../~/css-loader/mergeImport.js */ 10)(exports, __webpack_require__(/*! -!../~/css-loader!../index.css */ 11), "");
	exports.push([module.id, "\n\n.mc {\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.menu {\n    margin: 0;\n    background: #0ff;\n    color: #000;\n}\n\n.menu__item {\n    display: inline-block;\n    margin-left: 1px;\n    margin-right: 1px;\n    color: black;\n    height: 1px;\n}\n\n.menu__item-shortcut {\n    color: #ff0;\n}\n\n.content {\n    padding-bottom: 3px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    background: #000;\n}\n\n.panel {\n    width: 50%;\n    border: solid 1px #fff;\n    background: #00f;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    float: left;\n    height: 100%;\n    margin-bottom: -3px;\n}\n\n.panel__caption {\n    display: inline-block;\n\n    position: absolute;\n\n    margin-top: -1px;\n    color: #000;\n    background: #fff;\n}\n\n.file-list {\n    height: 100%;\n}\n\n.file,\n.header {\n    overflow: hidden;\n    height: 1px;\n    color: white;\n}\n\n.file_state_focused {\n    background: #0ff;\n    color: #000;\n}\n\n.file_state_focused .file__name,\n.file_state_focused .file__size {\n    border-right-color: black;\n}\n\n.file__name,\n.file__size,\n.file__time,\n.header__name,\n.header__time,\n.header__size {\n    float: left;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.file__name,\n.header__name {\n    width: 50%;\n    border-right: solid 1px #fff;\n}\n\n.file__size,\n.header__size {\n    width: 20%;\n    border-right: solid 1px #fff;\n}\n\n.file__size {\n    text-align: right;\n}\n\n.file__time,\n.header__time{\n    width: 30%;\n    text-align: right;\n}\n\n.file__name_type_file {\n    color: #fff;\n    padding-left: 1px;\n}\n\n.file_state_focused .file__name_type_file {\n    color: white;\n}\n\n.header__name,\n.header__time,\n.header__size {\n    color: yellow;\n    text-align: center;\n}\n\n.console {\n    margin-top: -3px;\n    height: 3px;\n    overflow: hidden;\n    color: grey;\n    background: #000;\n}\n\n.console__input {\n    border: none;\n    color: inherit;\n    background: inherit;\n    height: 1px;\n}\n\n.controls {\n    margin-top: -1px;\n    height: 1px;\n}\n\n.control {\n    float: left;\n    height: 1px;\n}\n\n.control__number,\n.control__name {\n    float: left;\n}\n\n.control__number {\n    margin-left: 1px;\n    color: #fff;\n}\n\n.control__name {\n    width: 6px;\n    background: #0ff;\n    color: #000;\n}\n", ""]);

/***/ },
/* 4 */
/*!*****************************!*\
  !*** ../lib/tui-element.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 13)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 14)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	var getNormalizedClientRectOf = __webpack_require__(/*! ./utils */ 15).getNormalizedClientRectOf;
	
	var selectSerializerFor = __webpack_require__(/*! ./serializers */ 8).selectSerializerFor;
	
	var TuiText = _interopRequire(__webpack_require__(/*! ./tui-text */ 16));
	
	var TuiElement = (function () {
	  /**
	   *
	   * @param {Node} node
	   * @constructor
	   */
	
	  function TuiElement(node) {
	    _classCallCheck(this, TuiElement);
	
	    if (node.nodeType !== 1) {
	      throw new Error("Only element node is supported");
	    }
	
	    if (!node.ownerDocument && !node.ownerDocument.defaultView) {
	      throw new Error("Can not serialize detached node");
	    }
	
	    /**
	     * @type {string}
	     */
	    this.tagName = node.tagName.toLowerCase();
	
	    /**
	     * @type {{name: string, value: string}[]}
	     */
	    this.attributes = Array.prototype.slice.call(node.attributes);
	
	    /**
	     * @type {object}
	     */
	    this.properties = this.getProperties(node);
	
	    /**
	     * @type {boolean}
	     */
	    this.isActiveEment = node.ownerDocument.activeElement === node;
	
	    /**
	     * @type {CssStyle}
	     */
	    this.style = node.ownerDocument.defaultView.getComputedStyle(node);
	
	    /**
	     * @type {ClientRect}
	     */
	    this.boundingBox = getNormalizedClientRectOf(node.getBoundingClientRect());
	
	    /**
	     * @type {(TuiElement|TuiText)[]}
	     */
	    this.content = this.getContentOf(node);
	
	    // TODO currently serializer is bound to HTMLElement
	    /**
	     * @type {function}
	     */
	    this.serializeNode = selectSerializerFor(node);
	  }
	
	  _createClass(TuiElement, {
	    getContentOf: {
	
	      /**
	       * @param {Node} node
	       * @returns {(TuiElement|TuiText)[]}
	       */
	
	      value: function getContentOf(node) {
	        var _this = this;
	
	        return Array.prototype.slice.call(node.childNodes).reduce(function (content, node) {
	          if (node.nodeType === 1) {
	            content.push(new TuiElement(node));
	          }
	          if (node.nodeType === 3) {
	            content.push(new TuiText(node, _this.style));
	          }
	          return content;
	        }, []);
	      }
	    },
	    getProperties: {
	
	      /**
	       *
	       * @param node
	       */
	
	      value: function getProperties(node) {
	        return {
	          value: node.value,
	          readOnly: node.readOnly,
	          checked: node.checked,
	          autofocus: node.autofocus,
	          selectionStart: node.selectionStart,
	          selectionEnd: node.selectionEnd
	        };
	      }
	    },
	    toArray: {
	
	      /**
	       *
	       * @returns {Array<Array<(TuiSymbol)>>}
	       */
	
	      value: function toArray() {
	        return this.serializeNode.call(null, this);
	      }
	    },
	    toString: {
	
	      /**
	       *
	       * @returns {string}
	       */
	
	      value: function toString() {
	        return this.toArray().map(function (row) {
	          return row.join("");
	        }).join("\n");
	      }
	    }
	  });
	
	  return TuiElement;
	})();
	
	module.exports = TuiElement;

/***/ },
/* 5 */
/*!******************************!*\
  !*** ../lib/compress-box.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 17)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	module.exports = compressBox;
	
	var _tuiSymbol = __webpack_require__(/*! ./tui-symbol */ 18);
	
	var TuiSymbol = _interopRequire(_tuiSymbol);
	
	var isSameStyleSymbol = _tuiSymbol.isSameStyleSymbol;
	
	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 * @returns {(TuiSymbol|null)[]}
	 */
	function uniteSymbols(symbolA, symbolB) {
	    if (!symbolA) {
	        return [null, symbolB];
	    }
	
	    if (isSameStyleSymbol(symbolA, symbolB)) {
	        return [new TuiSymbol(symbolA.char + symbolB.char, symbolA.style), null];
	    }
	
	    return [symbolA, symbolB];
	}
	function compressBox(box) {
	    return box.map(function (row) {
	        return row.reduce(function (row, symbol) {
	            var lastSymbol = row[row.length - 1];
	
	            var _uniteSymbols = uniteSymbols(lastSymbol, symbol);
	
	            var _uniteSymbols2 = _slicedToArray(_uniteSymbols, 2);
	
	            var unitedSymbols = _uniteSymbols2[0];
	            var extraSymbol = _uniteSymbols2[1];
	
	            if (unitedSymbols === null) {
	                row.push(extraSymbol);
	                return row;
	            }
	
	            if (unitedSymbols !== null) {
	                row[row.length - 1] = unitedSymbols;
	            }
	
	            if (extraSymbol !== null) {
	                row.push(extraSymbol);
	            }
	
	            return row;
	        }, []);
	    });
	}

/***/ },
/* 6 */
/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/*!*******************************!*\
  !*** ../lib/renders/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ansi = __webpack_require__(/*! ./ansi */ 19).ansi;
	
	var chrome = __webpack_require__(/*! ./chrome */ 20).chrome;
	
	var html = __webpack_require__(/*! ./html */ 21).html;
	
	var ascii = __webpack_require__(/*! ./ascii */ 22).ascii;
	
	module.exports = { ansi: ansi, chrome: chrome, html: html, ascii: ascii };

/***/ },
/* 8 */
/*!***********************************!*\
  !*** ../lib/serializers/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	/**
	 *
	 * @param {HTMLElement} node
	 * @param {function} node.matches
	 * @returns {function}
	 */
	exports.selectSerializerFor = selectSerializerFor;
	
	/**
	 * @param {string} selector
	 * @param {function} serializer
	 * @example
	 *  add('table', tableSerializer);
	 *  add('input[type="progress"]', progressBarSerializer);
	 */
	exports.addSerializer = addSerializer;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var defaultSerializer = _interopRequire(__webpack_require__(/*! ./default */ 23));
	
	var inputSerializer = _interopRequire(__webpack_require__(/*! ./input */ 24));
	
	var calculateSpecificity = __webpack_require__(/*! specificity */ 27).calculate;
	
	/**
	 * Ordered by specificity, the most specific and last added element is at the end
	 * @type {{selector: string, specificity: string, serializer: function}[]}
	 */
	var serializers = [];
	
	/**
	 * @param {{specificity: string}} a
	 * @param {{specificity: string}} b
	 * @returns {number}
	 */
	function sortBySpecificity(a, b) {
	    if (a.specificity > b.specificity) {
	        return 1;
	    }
	
	    if (a.specificity < b.specificity) {
	        return -1;
	    }
	
	    return 0;
	}
	
	/**
	 * @param {HTMLElement} node
	 * @returns string
	 */
	function getMatchFunctionFor(node) {
	    var variants = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector"];
	
	    for (var i = 0; i < variants.length; i++) {
	        if (typeof node[variants[i]] === "function") {
	            return variants[i];
	        }
	    }
	
	    throw new Error("match function is not found");
	}
	function selectSerializerFor(node) {
	    var matchedSerializers = serializers.filter(function (serializer) {
	        return node[getMatchFunctionFor(node)](serializer.selector);
	    });
	
	    // the last serializer is the most specific(by specificity and order of adding)
	    return matchedSerializers[matchedSerializers.length - 1].serializer;
	}
	
	function addSerializer(selector, serializer) {
	    if (typeof selector !== "string") {
	        throw new TypeError("`selector` should be a string");
	    }
	
	    if (typeof serializer !== "function") {
	        throw new TypeError("`serializer` should be a function");
	    }
	
	    calculateSpecificity(selector).forEach(function (_ref) {
	        var selector = _ref.selector;
	        var specificity = _ref.specificity;
	
	        serializers.push({ selector: selector, serializer: serializer, specificity: specificity });
	    });
	
	    serializers.sort(sortBySpecificity);
	}
	
	// Matches on all TuiElements
	addSerializer("*", defaultSerializer);
	
	// Matches all inputs
	addSerializer("input,select,textarea", inputSerializer);

/***/ },
/* 9 */
/*!**************************************!*\
  !*** ../~/css-loader/cssToString.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 10 */
/*!**************************************!*\
  !*** ../~/css-loader/mergeImport.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(list, importedList, media) {
		for(var i = 0; i < importedList.length; i++) {
			var item = importedList[i];
			if(media && !item[2])
				item[2] = media;
			else if(media) {
				item[2] = "(" + item[2] + ") and (" + media + ")";
			}
			list.push(item);
		}
	};

/***/ },
/* 11 */
/*!************************************!*\
  !*** ../~/css-loader!../index.css ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../~/css-loader/cssToString.js */ 9)();
	exports.push([module.id, ".tui-dom {\n    font-family: 'Courier New', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    font-size: 1px;\n    line-height: 1px;\n    letter-spacing: 0.4px;\n    visibility: visible;\n    z-index: -1;\n}\n\n.tui-dom * {\n    padding: 0;\n    margin: 0;\n    line-height: inherit;\n    font-size: inherit;\n    letter-spacing: inherit;\n    font-family: inherit;\n}\n\n.tui-cli {\n    font-family: 'Courier New', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    font-size: 13px;\n    line-height: 13px;\n    display: inline-block;\n    margin: 0;\n}\n", ""]);

/***/ },
/* 12 */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/helpers/interop-require.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 13 */
/*!******************************************************!*\
  !*** ../~/babel-runtime/helpers/class-call-check.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 14 */
/*!**************************************************!*\
  !*** ../~/babel-runtime/helpers/create-class.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var key in props) {
	      var prop = props[key];
	      prop.configurable = true;
	      if (prop.value) prop.writable = true;
	    }
	
	    Object.defineProperties(target, props);
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 15 */
/*!***********************!*\
  !*** ../lib/utils.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	exports.getNormalizedClientRectOf = getNormalizedClientRectOf;
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @param {ClientRect} boundingBox
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	exports.shiftBox = shiftBox;
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} layerA
	 * @param {Array<Array<(TuiSymbol)>>} layerB
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	exports.mergeBoxes = mergeBoxes;
	
	/**
	 *
	 * @param {String} content
	 * @param {Object} style
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	exports.renderTextBox = renderTextBox;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tuiSymbol = __webpack_require__(/*! ./tui-symbol */ 18);
	
	var emptySymbol = _tuiSymbol.emptySymbol;
	var isTransparentColor = _tuiSymbol.isTransparentColor;
	
	var TuiSymbol = _interopRequire(_tuiSymbol);
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ./characters */ 25).BACKGROUND_CHARACTER;
	
	function getNormalizedClientRectOf(boundingBox) {
	    return {
	        bottom: Math.round(boundingBox.bottom),
	        height: Math.round(boundingBox.height),
	        left: Math.round(boundingBox.left),
	        right: Math.round(boundingBox.right),
	        top: Math.round(boundingBox.top),
	        width: Math.round(boundingBox.width)
	    };
	}
	
	/**
	 * @param {number} length
	 * @param {*} content
	 * @returns {Array}
	 */
	function fillArray(length, content) {
	    var array = new Array(length);
	
	    for (var i = 0; i < array.length; i++) {
	        array[i] = content;
	    }
	
	    return array;
	}
	function shiftBox(box, boundingBox) {
	    var width = boundingBox.width;
	    var left = boundingBox.left;
	    var top = boundingBox.top;
	    var paddingLeft = fillArray(left, emptySymbol);
	    var paddingTop = fillArray(left + width, emptySymbol);
	
	    box.forEach(function (row) {
	        row.unshift.apply(row, paddingLeft);
	    });
	
	    for (; top--;) {
	        box.unshift(paddingTop);
	    }
	
	    return box;
	}
	
	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 * @returns {(TuiSymbol)}
	 */
	function mergeSymbols(symbolA, symbolB) {
	    var backgroundColor = isTransparentColor(symbolB.style.backgroundColor) ? symbolA.style.backgroundColor : symbolB.style.backgroundColor;
	
	    var color = symbolB.char === BACKGROUND_CHARACTER ? symbolA.style.color : symbolB.style.color;
	    var char = symbolB.char === BACKGROUND_CHARACTER ? symbolA.char : symbolB.char;
	
	    return new TuiSymbol(char, { color: color, backgroundColor: backgroundColor });
	}
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} layerA
	 * @param {Array<Array<(TuiSymbol)>>} layerB
	 * @returns {{maxWidth: number, maxHeight: number}}
	 */
	function getMaxDimensions(layerA, layerB) {
	    var maxWidth = Math.max(layerA[0] && layerA[0].length || 0, layerB[0] && layerB[0].length || 0);
	    var maxHeight = Math.max(layerA.length, layerB.length);
	
	    return { maxWidth: maxWidth, maxHeight: maxHeight };
	}
	function mergeBoxes(layerA, layerB) {
	    var box = [];
	
	    var _getMaxDimensions = getMaxDimensions(layerA, layerB);
	
	    var maxWidth = _getMaxDimensions.maxWidth;
	    var maxHeight = _getMaxDimensions.maxHeight;
	
	    for (var y = 0; y < maxHeight; y++) {
	        box.push([]);
	        for (var x = 0; x < maxWidth; x++) {
	            box[y][x] = mergeSymbols(layerA[y] && layerA[y][x] || emptySymbol, layerB[y] && layerB[y][x] || emptySymbol);
	        }
	    }
	
	    return box;
	}
	
	function renderTextBox(content, style) {
	    var symbols = String(content).split("").map(function (symbol) {
	        return new TuiSymbol(symbol, style);
	    });
	
	    return [symbols];
	}

/***/ },
/* 16 */
/*!**************************!*\
  !*** ../lib/tui-text.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 13)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 14)["default"];
	
	var _utils = __webpack_require__(/*! ./utils */ 15);
	
	var getNormalizedClientRectOf = _utils.getNormalizedClientRectOf;
	var shiftBox = _utils.shiftBox;
	var renderTextBox = _utils.renderTextBox;
	
	var TuiText = (function () {
	    /**
	     *
	     * @param {Node} node
	     * @param {CssStyle} [style=null]
	     * @constructor
	     */
	
	    function TuiText(node) {
	        var style = arguments[1] === undefined ? null : arguments[1];
	
	        _classCallCheck(this, TuiText);
	
	        if (node.nodeType !== 3) {
	            throw new Error("Only text node is supported");
	        }
	
	        if (!node.ownerDocument) {
	            throw new Error("Can not serialize detached node");
	        }
	
	        var range = node.ownerDocument.createRange();
	        range.selectNodeContents(node);
	
	        /**
	         * @type {ClientRect}
	         */
	        this.boundingBox = getNormalizedClientRectOf(range.getBoundingClientRect());
	
	        this.content = node.textContent;
	
	        this.style = style || node.parentNode.ownerDocument.defaultView.getComputedStyle(node.parentNode);
	    }
	
	    _createClass(TuiText, {
	        _renderTextBox: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             * @private
	             */
	
	            value: function _renderTextBox() {
	                var content = this.content.replace(/\s\s+/g, " ");
	
	                return renderTextBox(content, this.style);
	            }
	        },
	        toArray: {
	
	            /**
	             *
	             * @returns {Array<Array<(TuiSymbol)>>}
	             */
	
	            value: function toArray() {
	                if (this.boundingBox.width === 0 || this.boundingBox.height === 0) {
	                    return [[]];
	                }
	
	                return shiftBox(this._renderTextBox(), this.boundingBox);
	            }
	        },
	        toString: {
	
	            /**
	             *
	             * @returns {string}
	             */
	
	            value: function toString() {
	                return this.toArray().map(function (row) {
	                    return row.join("");
	                }).join("\n");
	            }
	        }
	    });
	
	    return TuiText;
	})();
	
	module.exports = TuiText;

/***/ },
/* 17 */
/*!*****************************************************!*\
  !*** ../~/babel-runtime/helpers/sliced-to-array.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 26)["default"];
	
	exports["default"] = function (arr, i) {
	  if (Array.isArray(arr)) {
	    return arr;
	  } else if (_core.$for.isIterable(Object(arr))) {
	    var _arr = [];
	
	    for (var _iterator = _core.$for.getIterator(arr), _step; !(_step = _iterator.next()).done;) {
	      _arr.push(_step.value);
	
	      if (i && _arr.length === i) break;
	    }
	
	    return _arr;
	  } else {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 18 */
/*!****************************!*\
  !*** ../lib/tui-symbol.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 13)["default"];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 14)["default"];
	
	/**
	 *
	 * @param {(TuiSymbol)} symbolA
	 * @param {(TuiSymbol)} symbolB
	 */
	exports.isSameStyleSymbol = isSameStyleSymbol;
	
	/**
	 *
	 * @param {string} color
	 * @returns {boolean}
	 */
	exports.isTransparentColor = isTransparentColor;
	
	/**
	 *
	 * @param {string} char
	 * @param {CssStyle} style
	 * @returns {boolean}
	 */
	exports.isTransparentCharacter = isTransparentCharacter;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ./characters */ 25).BACKGROUND_CHARACTER;
	
	function isSameStyleSymbol(symbolA, symbolB) {
	    return symbolA.style.color === symbolB.style.color && symbolA.style.backgroundColor === symbolB.style.backgroundColor;
	}
	
	function isTransparentColor(color) {
	    return color === "rgba(0, 0, 0, 0)" || color === "transparent";
	}
	
	function isTransparentCharacter(char, style) {
	    return char === BACKGROUND_CHARACTER && isTransparentColor(style.backgroundColor);
	}
	
	var TuiSymbol = (function () {
	    /**
	     *
	     * @param {string} char
	     * @param {{color: string, backgroundColor: string}} style
	     */
	
	    function TuiSymbol(char, style) {
	        _classCallCheck(this, TuiSymbol);
	
	        if (isTransparentCharacter(char, style)) {
	            char = BACKGROUND_CHARACTER;
	        }
	
	        this.char = char;
	        this.style = style;
	    }
	
	    _createClass(TuiSymbol, {
	        toString: {
	
	            /**
	             *
	             * @returns {string}
	             */
	
	            value: function toString() {
	                return this.char;
	            }
	        }
	    });
	
	    return TuiSymbol;
	})();
	
	exports["default"] = TuiSymbol;
	var emptySymbol = new TuiSymbol(BACKGROUND_CHARACTER, {
	    color: "rgba(0, 0, 0, 0)",
	    backgroundColor: "rgba(0, 0, 0, 0)"
	});
	exports.emptySymbol = emptySymbol;

/***/ },
/* 19 */
/*!******************************!*\
  !*** ../lib/renders/ansi.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	exports.ansi = ansi;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ansiColors = {
	    // # Styles
	    bold: ["\u001b[1m", "\u001b[22m"],
	    italic: ["\u001b[3m", "\u001b[23m"],
	    underline: ["\u001b[4m", "\u001b[24m"],
	    inverse: ["\u001b[7m", "\u001b[27m"],
	    strikethrough: ["\u001b[9m", "\u001b[29m"],
	
	    // # Text colors
	    // ## Grayscale
	    "rgb(255, 255, 255)": ["\u001b[37m", "\u001b[39m"],
	    "rgb(128, 128, 128)": ["\u001b[90m", "\u001b[39m"],
	    "rgb(0, 0, 0)": ["\u001b[30m", "\u001b[39m"],
	    // ## Colors
	    "rgb(0, 0, 255)": ["\u001b[34m", "\u001b[39m"],
	    "rgb(0, 255, 255)": ["\u001b[36m", "\u001b[39m"],
	    "rgb(0, 128, 0)": ["\u001b[32m", "\u001b[39m"],
	    "rgb(255, 0, 255)": ["\u001b[35m", "\u001b[39m"],
	    "rgb(255, 0, 0)": ["\u001b[31m", "\u001b[39m"],
	    "rgb(255, 255, 0)": ["\u001b[33m", "\u001b[39m"],
	    "rgba(0, 0, 0, 0)": ["", ""],
	
	    // # Background colors
	    // ## Grayscale
	    "rgb(255, 255, 255)BG": ["\u001b[47m", "\u001b[49m"],
	    "rgb(0, 0, 0)BG": ["\u001b[49;5;8m", "\u001b[49m"],
	    "rgb(128, 128, 128)BG": ["\u001b[40m", "\u001b[49m"],
	    // ## Colors
	    "rgb(0, 0, 255)BG": ["\u001b[44m", "\u001b[49m"],
	    "rgb(0, 255, 255)BG": ["\u001b[46m", "\u001b[49m"],
	    "rgb(0, 128, 0)BG": ["\u001b[42m", "\u001b[49m"],
	    "rgb(255, 0, 255)BG": ["\u001b[45m", "\u001b[49m"],
	    "rgb(255, 0, 0)BG": ["\u001b[41m", "\u001b[49m"],
	    "rgb(255, 255, 0)BG": ["\u001b[43m", "\u001b[49m"],
	    "rgba(0, 0, 0, 0)BG": ["", ""]
	};
	
	/**
	 *
	 * @param {string} string
	 * @param {string[]} style
	 * @returns {*}
	 */
	function wrapString(string, style) {
	    var pair = ansiColors[style];
	
	    if (!pair) {
	        return string;
	    }
	
	    return pair[0] + string + pair[1];
	}
	
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function ansiSymbol(symbol) {
	    var character = wrapString(symbol.char, symbol.style.color);
	    character = wrapString(character, symbol.style.backgroundColor + "BG");
	
	    return character;
	}
	function ansi(box) {
	    return box.map(function (row) {
	        return row.map(ansiSymbol).join("");
	    }).join("\n");
	}

/***/ },
/* 20 */
/*!********************************!*\
  !*** ../lib/renders/chrome.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = __webpack_require__(/*! babel-runtime/helpers/sliced-to-array */ 17)["default"];
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string[]}
	 */
	exports.chrome = chrome;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function chromeSymbol(symbol) {
	    var char = "%c" + symbol.char;
	    var style = "";
	
	    if (symbol.style.color) {
	        style += "color:" + symbol.style.color + ";";
	    }
	
	    if (symbol.style.backgroundColor) {
	        style += "background-color:" + symbol.style.backgroundColor + ";";
	    }
	
	    return [char, style];
	}
	function chrome(box) {
	    var characters = [];
	    var styles = [];
	
	    box.forEach(function (row) {
	        var rowCharacters = "";
	        var rowStyles = [];
	
	        row.forEach(function (symbol) {
	            var _chromeSymbol = chromeSymbol(symbol);
	
	            var _chromeSymbol2 = _slicedToArray(_chromeSymbol, 2);
	
	            var character = _chromeSymbol2[0];
	            var style = _chromeSymbol2[1];
	
	            rowCharacters += character;
	            rowStyles.push(style);
	        });
	
	        characters.push(rowCharacters);
	        styles.push.apply(styles, rowStyles);
	    });
	
	    return [characters.join("\n")].concat(styles);
	}

/***/ },
/* 21 */
/*!******************************!*\
  !*** ../lib/renders/html.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	exports.html = html;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string[]}
	 */
	function htmlSymbol(symbol) {
	    var style = "";
	
	    if (symbol.style.color) {
	        style += "color:" + symbol.style.color + ";";
	    }
	
	    if (symbol.style.backgroundColor) {
	        style += "background-color:" + symbol.style.backgroundColor + ";";
	    }
	
	    return "<span style=\"" + style + "\">" + symbol.char + "</span>";
	}
	function html(box) {
	    return box.map(function (row) {
	        return row.map(htmlSymbol).join("");
	    }).join("\n");
	}

/***/ },
/* 22 */
/*!*******************************!*\
  !*** ../lib/renders/ascii.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 *
	 * @param {Array<Array<(TuiSymbol)>>} box
	 * @returns {string}
	 */
	exports.ascii = ascii;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 *
	 * @param {TuiSymbol} symbol
	 * @returns {string}
	 */
	function asciiSymbol(symbol) {
	  return symbol.char;
	}
	function ascii(box) {
	  return box.map(function (row) {
	    return row.map(asciiSymbol).join("");
	  }).join("\n");
	}

/***/ },
/* 23 */
/*!*******************************************!*\
  !*** ../lib/serializers/default/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _core = __webpack_require__(/*! babel-runtime/core-js */ 26)["default"];
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	/**
	 *
	 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
	 * @param {object} scheme
	 * @returns {string}
	 * @private
	 */
	exports.lookupCharacter = lookupCharacter;
	
	/**
	 *
	 * @param {{x: string, y: string}} options
	 * @param {CssStyle} style
	 * @returns {{color: string, backgroundColor: string}}
	 * @private
	 */
	exports.lookupCharacterStyle = lookupCharacterStyle;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(/*! ../../utils */ 15);
	
	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;
	
	var borderScheme = __webpack_require__(/*! ./border-scheme */ 28).borderScheme;
	
	var TuiSymbol = _interopRequire(__webpack_require__(/*! ../../tui-symbol */ 18));
	
	function lookupCharacter(_x, _x2) {
	    var _again = true;
	
	    _function: while (_again) {
	        _again = false;
	        var options = _x,
	            scheme = _x2;
	        propertyName = value = undefined;
	
	        var propertyName = _core.Object.keys(scheme)[0];
	        var value = scheme[propertyName];
	
	        if (typeof value !== "object") {
	            return value;
	        }
	
	        value = value[options[propertyName]];
	
	        if (typeof value !== "object") {
	            return value;
	        }
	
	        _x = options;
	        _x2 = value;
	        _again = true;
	        continue _function;
	    }
	}
	
	function lookupCharacterStyle(options, style) {
	    var color = style.color;
	    var backgroundColor = style.backgroundColor;
	
	    if (options.x === "min") {
	        color = style.borderLeftColor;
	    }
	
	    if (options.x === "max") {
	        color = style.borderRightColor;
	    }
	
	    if (options.y === "min" && options.x === "mid") {
	        color = style.borderTopColor;
	    }
	
	    if (options.y === "max" && options.x === "mid") {
	        color = style.borderBottomColor;
	    }
	
	    return { color: color, backgroundColor: backgroundColor };
	}
	
	/**
	 *
	 * @param {{x: string, y: string, top: string, left: string, bottom: string, right: string}} options
	 * @param {CssStyle} elementStyle
	 * @returns {TuiSymbol}
	 */
	function fromPositionAndStyle(options, elementStyle) {
	    var char = lookupCharacter(options, borderScheme);
	    var characterStyle = lookupCharacterStyle(options, elementStyle);
	
	    return new TuiSymbol(char, characterStyle);
	}
	
	/**
	 *
	 * @param {TuiElement} tuiElement
	 * @param {number} x
	 * @param {number} y
	 * @returns {TuiSymbol}
	 * @private
	 */
	function boxCharacterAt(tuiElement, x, y) {
	    /* jshint maxcomplexity: 10 */
	    var width = tuiElement.boundingBox.width;
	    var height = tuiElement.boundingBox.height;
	
	    var position = {
	        x: x === 0 ? "min" : x === width - 1 ? "max" : "mid",
	        y: y === 0 ? "min" : y === height - 1 ? "max" : "mid",
	        top: parseInt(tuiElement.style.borderTopWidth) ? "yes" : "no",
	        right: parseInt(tuiElement.style.borderRightWidth) ? "yes" : "no",
	        bottom: parseInt(tuiElement.style.borderBottomWidth) ? "yes" : "no",
	        left: parseInt(tuiElement.style.borderLeftWidth) ? "yes" : "no"
	    };
	
	    return fromPositionAndStyle(position, tuiElement.style);
	}
	
	/**
	 *
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 * @private
	 */
	function renderBox(tuiElement) {
	    var box = [];
	    for (var y = 0; y < tuiElement.boundingBox.height; y++) {
	        box.push([]);
	        for (var x = 0; x < tuiElement.boundingBox.width; x++) {
	            box[y][x] = boxCharacterAt(tuiElement, x, y);
	        }
	    }
	
	    return box;
	}
	
	/**
	 *
	 * @returns {Array<Array<Array<(TuiSymbol)>>>}
	 * @private
	 */
	function renderContent(tuiElement) {
	    return tuiElement.content.map(function (item) {
	        return item.toArray();
	    });
	}
	
	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	
	exports["default"] = function (tuiElement) {
	    var box = shiftBox(renderBox(tuiElement), tuiElement.boundingBox);
	    var content = renderContent(tuiElement);
	
	    return [box].concat(content).reduce(mergeBoxes, []);
	};

/***/ },
/* 24 */
/*!*****************************************!*\
  !*** ../lib/serializers/input/index.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequire = __webpack_require__(/*! babel-runtime/helpers/interop-require */ 12)["default"];
	
	var _utils = __webpack_require__(/*! ../../utils */ 15);
	
	var mergeBoxes = _utils.mergeBoxes;
	var shiftBox = _utils.shiftBox;
	var renderTextBox = _utils.renderTextBox;
	
	var defaultSerializer = _interopRequire(__webpack_require__(/*! ../default */ 23));
	
	/**
	 * Max width of input text in viewport
	 *
	 * @param {object} style
	 * @param {ClientRect} boundingBox
	 * @returns {number}
	 */
	function getInputMaxContentWidth(_ref) {
	    var style = _ref.style;
	    var boundingBox = _ref.boundingBox;
	
	    var leftInputBorder = parseInt(style.borderLeftWidth) + parseInt(style.paddingLeft);
	    var rightInputBorder = parseInt(style.borderRightWidth) + parseInt(style.paddingRight);
	
	    return boundingBox.width - leftInputBorder - rightInputBorder;
	}
	
	/**
	 * Return bounding box of input's value
	 *
	 * @param {object} style
	 * @param {ClientRect}boundingBox
	 * @param {string} value
	 * @returns {ClientRect}
	 */
	function getInputTextBoundingBox(_ref) {
	    var style = _ref.style;
	    var boundingBox = _ref.boundingBox;
	    var value = _ref.properties.value;
	
	    var width = Number(value.length);
	    var height = 1;
	    var left = boundingBox.left;
	    var top = boundingBox.top;
	
	    left += parseInt(style.borderLeftWidth);
	    left += parseInt(style.paddingLeft);
	
	    top += parseInt(style.borderTopWidth);
	    top += parseInt(style.paddingTop);
	
	    return {
	        left: left,
	        top: top,
	        bottom: top + height,
	        right: left + width,
	        height: height,
	        width: width
	    };
	}
	
	/**
	 * Returns range which should fit into input
	 *
	 * @param {TuiElement} tuiElement
	 * @returns {{start: number, end: number}}
	 */
	function getVisibleTextRange(tuiElement) {
	    /* jshint maxstatements: 20 */
	    var _tuiElement$properties = tuiElement.properties;
	    var value = _tuiElement$properties.value;
	    var selectionEnd = _tuiElement$properties.selectionEnd;
	
	    var inputContentWidth = getInputMaxContentWidth(tuiElement);
	    var halfOfInputContentWidth = inputContentWidth / 2;
	    var start = Math.floor(selectionEnd - halfOfInputContentWidth) + 1;
	    var end = Math.ceil(selectionEnd + halfOfInputContentWidth) + 1;
	
	    // Cursor at the end of the box
	    if (value.length === selectionEnd && value.length + 1 > inputContentWidth) {
	        end -= 1;
	    }
	
	    if (start < 0) {
	        end -= start;
	        start = 0;
	    }
	
	    if (end > value.length) {
	        start -= end - value.length;
	        end = value.length;
	    }
	
	    if (start < 0) {
	        start = 0;
	    }
	
	    return {
	        start: start,
	        end: end
	    };
	}
	
	/**
	 *
	 * @param {object} style
	 * @param {string} value
	 * @param {number} selectionEnd
	 * @param {ClientRect} textBoundingBox
	 * @param {object} visibleTextRange
	 * @param {number} visibleTextRange.start
	 * @param {number} visibleTextRange.end
	 * @returns {Array<Array<TuiSymbol>>}
	 */
	function renderCursorBox(_ref, textBoundingBox, visibleTextRange) {
	    var style = _ref.style;
	    var _ref$properties = _ref.properties;
	    var value = _ref$properties.value;
	    var selectionEnd = _ref$properties.selectionEnd;
	
	    // Render cursor
	    var cursorWidth = 1;
	    var textAtCursor = value.substr(selectionEnd, cursorWidth);
	
	    // End of text
	    if (textAtCursor === "") {
	        textAtCursor = " ";
	    }
	
	    var cursorLeft = textBoundingBox.left + selectionEnd - visibleTextRange.start;
	    var cursorRight = cursorLeft + cursorWidth;
	
	    var cursorBoundingBox = {
	        left: cursorLeft,
	        top: textBoundingBox.top,
	        bottom: textBoundingBox.bottom,
	        right: cursorRight,
	        height: textBoundingBox.height,
	        width: cursorWidth
	    };
	
	    // Invert background and text color
	    var cursorBox = renderTextBox(textAtCursor, {
	        color: style.backgroundColor,
	        backgroundColor: style.color
	    });
	
	    return shiftBox(cursorBox, cursorBoundingBox);
	}
	
	/**
	 *
	 * @param {object} style
	 * @param {string} value
	 * @param {ClientRect} textBoundingBox
	 * @param {object} visibleTextRange
	 * @param {number} visibleTextRange.start
	 * @param {number} visibleTextRange.end
	 * @returns {Array<Array<TuiSymbol>>}
	 */
	function renderInputTextBox(_ref, textBoundingBox, visibleTextRange) {
	    var style = _ref.style;
	    var value = _ref.properties.value;
	
	    var textInViewport = value.slice(visibleTextRange.start, visibleTextRange.end);
	    var textBox = renderTextBox(textInViewport, style);
	
	    return shiftBox(textBox, textBoundingBox);
	}
	
	/**
	 * @param {TuiElement} tuiElement
	 * @returns {Array<Array<(TuiSymbol)>>}
	 */
	
	module.exports = function (tuiElement) {
	    // Compute common measurements
	    var textBoundingBox = getInputTextBoundingBox(tuiElement);
	    var visibleTextRange = getVisibleTextRange(tuiElement);
	
	    // Render
	    var inputBox = defaultSerializer(tuiElement);
	    var textBox = renderInputTextBox(tuiElement, textBoundingBox, visibleTextRange);
	    var cursorBox = renderCursorBox(tuiElement, textBoundingBox, visibleTextRange);
	
	    inputBox = mergeBoxes(inputBox, textBox);
	    inputBox = mergeBoxes(inputBox, cursorBox);
	
	    return inputBox;
	};

/***/ },
/* 25 */
/*!****************************!*\
  !*** ../lib/characters.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BACKGROUND_CHARACTER = " ";
	exports.BACKGROUND_CHARACTER = BACKGROUND_CHARACTER;

/***/ },
/* 26 */
/*!*************************************!*\
  !*** ../~/babel-runtime/core-js.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.6.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!function(global, framework, undefined){
	'use strict';
	
	/******************************************************************************
	 * Module : common                                                            *
	 ******************************************************************************/
	
	  // Shortcuts for [[Class]] & property names
	var OBJECT          = 'Object'
	  , FUNCTION        = 'Function'
	  , ARRAY           = 'Array'
	  , STRING          = 'String'
	  , NUMBER          = 'Number'
	  , REGEXP          = 'RegExp'
	  , DATE            = 'Date'
	  , MAP             = 'Map'
	  , SET             = 'Set'
	  , WEAKMAP         = 'WeakMap'
	  , WEAKSET         = 'WeakSet'
	  , SYMBOL          = 'Symbol'
	  , PROMISE         = 'Promise'
	  , MATH            = 'Math'
	  , ARGUMENTS       = 'Arguments'
	  , PROTOTYPE       = 'prototype'
	  , CONSTRUCTOR     = 'constructor'
	  , TO_STRING       = 'toString'
	  , TO_STRING_TAG   = TO_STRING + 'Tag'
	  , TO_LOCALE       = 'toLocaleString'
	  , HAS_OWN         = 'hasOwnProperty'
	  , FOR_EACH        = 'forEach'
	  , ITERATOR        = 'iterator'
	  , FF_ITERATOR     = '@@' + ITERATOR
	  , PROCESS         = 'process'
	  , CREATE_ELEMENT  = 'createElement'
	  // Aliases global objects and prototypes
	  , Function        = global[FUNCTION]
	  , Object          = global[OBJECT]
	  , Array           = global[ARRAY]
	  , String          = global[STRING]
	  , Number          = global[NUMBER]
	  , RegExp          = global[REGEXP]
	  , Date            = global[DATE]
	  , Map             = global[MAP]
	  , Set             = global[SET]
	  , WeakMap         = global[WEAKMAP]
	  , WeakSet         = global[WEAKSET]
	  , Symbol          = global[SYMBOL]
	  , Math            = global[MATH]
	  , TypeError       = global.TypeError
	  , RangeError      = global.RangeError
	  , setTimeout      = global.setTimeout
	  , setImmediate    = global.setImmediate
	  , clearImmediate  = global.clearImmediate
	  , parseInt        = global.parseInt
	  , isFinite        = global.isFinite
	  , process         = global[PROCESS]
	  , nextTick        = process && process.nextTick
	  , document        = global.document
	  , html            = document && document.documentElement
	  , navigator       = global.navigator
	  , define          = global.define
	  , console         = global.console || {}
	  , ArrayProto      = Array[PROTOTYPE]
	  , ObjectProto     = Object[PROTOTYPE]
	  , FunctionProto   = Function[PROTOTYPE]
	  , Infinity        = 1 / 0
	  , DOT             = '.';
	
	// http://jsperf.com/core-js-isobject
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	// Native function?
	var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
	
	// Object internal [[Class]] or toStringTag
	// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	var toString = ObjectProto[TO_STRING];
	function setToStringTag(it, tag, stat){
	  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
	}
	function cof(it){
	  return toString.call(it).slice(8, -1);
	}
	function classof(it){
	  var O, T;
	  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
	    : typeof (T = (O = Object(it))[SYMBOL_TAG]) == 'string' ? T : cof(O);
	}
	
	// Function
	var call  = FunctionProto.call
	  , apply = FunctionProto.apply
	  , REFERENCE_GET;
	// Partial apply
	function part(/* ...args */){
	  var fn     = assertFunction(this)
	    , length = arguments.length
	    , args   = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , i = 0, j = 0, _args;
	    if(!holder && !_length)return invoke(fn, args, that);
	    _args = args.slice();
	    if(holder)for(;length > i; i++)if(_args[i] === _)_args[i] = arguments[j++];
	    while(_length > j)_args.push(arguments[j++]);
	    return invoke(fn, _args, that);
	  }
	}
	// Optional / simple context binding
	function ctx(fn, that, length){
	  assertFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    }
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    }
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    }
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	  }
	}
	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	function invoke(fn, args, that){
	  var un = that === undefined;
	  switch(args.length | 0){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	}
	
	// Object:
	var create           = Object.create
	  , getPrototypeOf   = Object.getPrototypeOf
	  , setPrototypeOf   = Object.setPrototypeOf
	  , defineProperty   = Object.defineProperty
	  , defineProperties = Object.defineProperties
	  , getOwnDescriptor = Object.getOwnPropertyDescriptor
	  , getKeys          = Object.keys
	  , getNames         = Object.getOwnPropertyNames
	  , getSymbols       = Object.getOwnPropertySymbols
	  , isFrozen         = Object.isFrozen
	  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  , ES5Object        = Object
	  , Dict;
	function toObject(it){
	  return ES5Object(assertDefined(it));
	}
	function returnIt(it){
	  return it;
	}
	function returnThis(){
	  return this;
	}
	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function ownKeys(it){
	  assertObject(it);
	  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	}
	// 19.1.2.1 Object.assign(target, source, ...)
	var assign = Object.assign || function(target, source){
	  var T = Object(assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	}
	function keyOf(object, el){
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	}
	
	// Array
	// array('str1,str2,str3') => ['str1', 'str2', 'str3']
	function array(it){
	  return String(it).split(',');
	}
	var push    = ArrayProto.push
	  , unshift = ArrayProto.unshift
	  , slice   = ArrayProto.slice
	  , splice  = ArrayProto.splice
	  , indexOf = ArrayProto.indexOf
	  , forEach = ArrayProto[FOR_EACH];
	/*
	 * 0 -> forEach
	 * 1 -> map
	 * 2 -> filter
	 * 3 -> some
	 * 4 -> every
	 * 5 -> find
	 * 6 -> findIndex
	 */
	function createArrayMethod(type){
	  var isMap       = type == 1
	    , isFilter    = type == 2
	    , isSome      = type == 3
	    , isEvery     = type == 4
	    , isFindIndex = type == 6
	    , noholes     = type == 5 || isFindIndex;
	  return function(callbackfn/*, that = undefined */){
	    var O      = Object(assertDefined(this))
	      , that   = arguments[1]
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = isMap ? Array(length) : isFilter ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(noholes || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(type){
	        if(isMap)result[index] = res;             // map
	        else if(res)switch(type){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(isEvery)return false;           // every
	      }
	    }
	    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	  }
	}
	function createArrayContains(isContains){
	  return function(el /*, fromIndex = 0 */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length);
	    if(isContains && el != el){
	      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
	    } else for(;length > index; index++)if(isContains || index in O){
	      if(O[index] === el)return isContains || index;
	    } return !isContains && -1;
	  }
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof vs isFunction
	  return typeof A == 'function' ? A : B;
	}
	
	// Math
	var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
	  , pow    = Math.pow
	  , abs    = Math.abs
	  , ceil   = Math.ceil
	  , floor  = Math.floor
	  , max    = Math.max
	  , min    = Math.min
	  , random = Math.random
	  , trunc  = Math.trunc || function(it){
	      return (it > 0 ? floor : ceil)(it);
	    }
	// 20.1.2.4 Number.isNaN(number)
	function sameNaN(number){
	  return number != number;
	}
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it) ? 0 : trunc(it);
	}
	// 7.1.15 ToLength
	function toLength(it){
	  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	}
	function toIndex(index, length){
	  var index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	}
	function lz(num){
	  return num > 9 ? num : '0' + num;
	}
	
	function createReplacer(regExp, replace, isStatic){
	  var replacer = isObject(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(isStatic ? it : this).replace(regExp, replacer);
	  }
	}
	function createPointAt(toString){
	  return function(pos){
	    var s = String(assertDefined(this))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return toString ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? toString ? s.charAt(i) : a
	      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  }
	}
	
	// Assertion & errors
	var REDUCE_ERROR = 'Reduce of empty object with no initial value';
	function assert(condition, msg1, msg2){
	  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError('Function called on null or undefined');
	  return it;
	}
	function assertFunction(it){
	  assert(isFunction(it), it, ' is not a function!');
	  return it;
	}
	function assertObject(it){
	  assert(isObject(it), it, ' is not an object!');
	  return it;
	}
	function assertInstance(it, Constructor, name){
	  assert(it instanceof Constructor, name, ": use the 'new' operator!");
	}
	
	// Property descriptors & Symbol
	function descriptor(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  }
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return defineProperty(object, key, descriptor(bitmap, value));
	  } : simpleSet;
	}
	function uid(key){
	  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
	}
	function getWellKnownSymbol(name, setter){
	  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	}
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	      try {
	        return defineProperty({}, 'a', {get: function(){ return 2 }}).a == 2;
	      } catch(e){}
	    }()
	  , sid    = 0
	  , hidden = createDefiner(1)
	  , set    = Symbol ? simpleSet : hidden
	  , safeSymbol = Symbol || uid;
	function assignHidden(target, src){
	  for(var key in src)hidden(target, key, src[key]);
	  return target;
	}
	
	var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
	  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {}
	  , SYMBOL_TAG         = getWellKnownSymbol(TO_STRING_TAG)
	  , SYMBOL_SPECIES     = getWellKnownSymbol('species')
	  , SYMBOL_ITERATOR;
	function setSpecies(C){
	  if(DESC && (framework || !isNative(C)))defineProperty(C, SYMBOL_SPECIES, {
	    configurable: true,
	    get: returnThis
	  });
	}
	
	/******************************************************************************
	 * Module : common.export                                                     *
	 ******************************************************************************/
	
	var NODE = cof(process) == PROCESS
	  , core = {}
	  , path = framework ? global : core
	  , old  = global.core
	  , exportGlobal
	  // type bitmap
	  , FORCED = 1
	  , GLOBAL = 2
	  , STATIC = 4
	  , PROTO  = 8
	  , BIND   = 16
	  , WRAP   = 32;
	function $define(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & GLOBAL
	    , target   = isGlobal ? global : (type & STATIC)
	        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // there is a similar native
	    own = !(type & FORCED) && target && key in target
	      && (!isFunction(target[key]) || isNative(target[key]));
	    // export native or passed
	    out = (own ? target : source)[key];
	    // prevent global pollution for namespaces
	    if(!framework && isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & BIND && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & WRAP && !framework && target[key] == out){
	      exp = function(param){
	        return this instanceof out ? new out(param) : out(param);
	      }
	      exp[PROTOTYPE] = out[PROTOTYPE];
	    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	    // extend global
	    if(framework && target && !own){
	      if(isGlobal)target[key] = out;
	      else delete target[key] && hidden(target, key, out);
	    }
	    // export
	    if(exports[key] != out)hidden(exports, key, exp);
	  }
	}
	// CommonJS export
	if(typeof module != 'undefined' && module.exports)module.exports = core;
	// RequireJS export
	else if(isFunction(define) && define.amd)define(function(){return core});
	// Export to global object
	else exportGlobal = true;
	if(exportGlobal || framework){
	  core.noConflict = function(){
	    global.core = old;
	    return core;
	  }
	  global.core = core;
	}
	
	/******************************************************************************
	 * Module : common.iterators                                                  *
	 ******************************************************************************/
	
	SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
	var ITER  = safeSymbol('iter')
	  , KEY   = 1
	  , VALUE = 2
	  , Iterators = {}
	  , IteratorPrototype = {}
	    // Safari has byggy iterators w/o `next`
	  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	setIterator(IteratorPrototype, returnThis);
	function setIterator(O, value){
	  hidden(O, SYMBOL_ITERATOR, value);
	  // Add iterator for FF iterator protocol
	  FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
	}
	function createIterator(Constructor, NAME, next, proto){
	  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	}
	function defineIterator(Constructor, NAME, value, DEFAULT){
	  var proto = Constructor[PROTOTYPE]
	    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
	  if(framework){
	    // Define iterator
	    setIterator(proto, iter);
	    if(iter !== value){
	      var iterProto = getPrototypeOf(iter.call(new Constructor));
	      // Set @@toStringTag to native iterators
	      setToStringTag(iterProto, NAME + ' Iterator', true);
	      // FF fix
	      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	    }
	  }
	  // Plug for library
	  Iterators[NAME] = iter;
	  // FF & v8 fix
	  Iterators[NAME + ' Iterator'] = returnThis;
	  return iter;
	}
	function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
	  function createIter(kind){
	    return function(){
	      return new Constructor(this, kind);
	    }
	  }
	  createIterator(Constructor, NAME, next);
	  var entries = createIter(KEY+VALUE)
	    , values  = createIter(VALUE);
	  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
	  else entries = defineIterator(Base, NAME, entries, 'entries');
	  if(DEFAULT){
	    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	      entries: entries,
	      keys: IS_SET ? values : createIter(KEY),
	      values: values
	    });
	  }
	}
	function iterResult(done, value){
	  return {value: value, done: !!done};
	}
	function isIterable(it){
	  var O      = Object(it)
	    , Symbol = global[SYMBOL]
	    , hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
	  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	}
	function getIterator(it){
	  var Symbol  = global[SYMBOL]
	    , ext     = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR]
	    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	  return assertObject(getIter.call(it));
	}
	function stepCall(fn, value, entries){
	  return entries ? invoke(fn, value) : fn(value);
	}
	function checkDangerIterClosing(fn){
	  var danger = true;
	  var O = {
	    next: function(){ throw 1 },
	    'return': function(){ danger = false }
	  };
	  O[SYMBOL_ITERATOR] = returnThis;
	  try {
	    fn(O);
	  } catch(e){}
	  return danger;
	}
	function closeIterator(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)ret.call(iterator);
	}
	function safeIterClose(exec, iterator){
	  try {
	    exec(iterator);
	  } catch(e){
	    closeIterator(iterator);
	    throw e;
	  }
	}
	function forOf(iterable, entries, fn, that){
	  safeIterClose(function(iterator){
	    var f = ctx(fn, that, entries ? 2 : 1)
	      , step;
	    while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false){
	      return closeIterator(iterator);
	    }
	  }, getIterator(iterable));
	}
	
	/******************************************************************************
	 * Module : es6.symbol                                                        *
	 ******************************************************************************/
	
	// ECMAScript 6 symbols shim
	!function(TAG, SymbolRegistry, AllSymbols, setter){
	  // 19.4.1.1 Symbol([description])
	  if(!isNative(Symbol)){
	    Symbol = function(description){
	      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
	      var tag = uid(description)
	        , sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
	      AllSymbols[tag] = sym;
	      DESC && setter && defineProperty(ObjectProto, tag, {
	        configurable: true,
	        set: function(value){
	          hidden(this, tag, value);
	        }
	      });
	      return sym;
	    }
	    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
	      return this[TAG];
	    });
	  }
	  $define(GLOBAL + WRAP, {Symbol: Symbol});
	  
	  var symbolStatics = {
	    // 19.4.2.1 Symbol.for(key)
	    'for': function(key){
	      return has(SymbolRegistry, key += '')
	        ? SymbolRegistry[key]
	        : SymbolRegistry[key] = Symbol(key);
	    },
	    // 19.4.2.4 Symbol.iterator
	    iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
	    // 19.4.2.5 Symbol.keyFor(sym)
	    keyFor: part.call(keyOf, SymbolRegistry),
	    // 19.4.2.10 Symbol.species
	    species: SYMBOL_SPECIES,
	    // 19.4.2.13 Symbol.toStringTag
	    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	    // 19.4.2.14 Symbol.unscopables
	    unscopables: SYMBOL_UNSCOPABLES,
	    pure: safeSymbol,
	    set: set,
	    useSetter: function(){setter = true},
	    useSimple: function(){setter = false}
	  };
	  // 19.4.2.2 Symbol.hasInstance
	  // 19.4.2.3 Symbol.isConcatSpreadable
	  // 19.4.2.6 Symbol.match
	  // 19.4.2.8 Symbol.replace
	  // 19.4.2.9 Symbol.search
	  // 19.4.2.11 Symbol.split
	  // 19.4.2.12 Symbol.toPrimitive
	  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'),
	    function(it){
	      symbolStatics[it] = getWellKnownSymbol(it);
	    }
	  );
	  $define(STATIC, SYMBOL, symbolStatics);
	  
	  setToStringTag(Symbol, SYMBOL);
	  
	  $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	    // 19.1.2.7 Object.getOwnPropertyNames(O)
	    getOwnPropertyNames: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
	      return result;
	    },
	    // 19.1.2.8 Object.getOwnPropertySymbols(O)
	    getOwnPropertySymbols: function(it){
	      var names = getNames(toObject(it)), result = [], key, i = 0;
	      while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	      return result;
	    }
	  });
	  
	  // 20.2.1.9 Math[@@toStringTag]
	  setToStringTag(Math, MATH, true);
	  // 24.3.3 JSON[@@toStringTag]
	  setToStringTag(global.JSON, 'JSON', true);
	}(safeSymbol('tag'), {}, {}, true);
	
	/******************************************************************************
	 * Module : es6.object.statics                                                *
	 ******************************************************************************/
	
	!function(){
	  var objectStatic = {
	    // 19.1.3.1 Object.assign(target, source)
	    assign: assign,
	    // 19.1.3.10 Object.is(value1, value2)
	    is: function(x, y){
	      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	    }
	  };
	  // 19.1.3.19 Object.setPrototypeOf(O, proto)
	  // Works with __proto__ only. Old v8 can't works with null proto objects.
	  '__proto__' in ObjectProto && function(buggy, set){
	    try {
	      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
	      set({}, ArrayProto);
	    } catch(e){ buggy = true }
	    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
	      assertObject(O);
	      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	      if(buggy)O.__proto__ = proto;
	      else set(O, proto);
	      return O;
	    }
	  }();
	  $define(STATIC, OBJECT, objectStatic);
	}();
	
	/******************************************************************************
	 * Module : es6.object.statics-accept-primitives                              *
	 ******************************************************************************/
	
	!function(){
	  // Object static methods accept primitives
	  function wrapObjectMethod(key, MODE){
	    var fn  = Object[key]
	      , exp = core[OBJECT][key]
	      , f   = 0
	      , o   = {};
	    if(!exp || isNative(exp)){
	      o[key] = MODE == 1 ? function(it){
	        return isObject(it) ? fn(it) : it;
	      } : MODE == 2 ? function(it){
	        return isObject(it) ? fn(it) : true;
	      } : MODE == 3 ? function(it){
	        return isObject(it) ? fn(it) : false;
	      } : MODE == 4 ? function(it, key){
	        return fn(toObject(it), key);
	      } : function(it){
	        return fn(toObject(it));
	      };
	      try { fn(DOT) }
	      catch(e){ f = 1 }
	      $define(STATIC + FORCED * f, OBJECT, o);
	    }
	  }
	  wrapObjectMethod('freeze', 1);
	  wrapObjectMethod('seal', 1);
	  wrapObjectMethod('preventExtensions', 1);
	  wrapObjectMethod('isFrozen', 2);
	  wrapObjectMethod('isSealed', 2);
	  wrapObjectMethod('isExtensible', 3);
	  wrapObjectMethod('getOwnPropertyDescriptor', 4);
	  wrapObjectMethod('getPrototypeOf');
	  wrapObjectMethod('keys');
	  wrapObjectMethod('getOwnPropertyNames');
	}();
	
	/******************************************************************************
	 * Module : es6.number.statics                                                *
	 ******************************************************************************/
	
	!function(isInteger){
	  $define(STATIC, NUMBER, {
	    // 20.1.2.1 Number.EPSILON
	    EPSILON: pow(2, -52),
	    // 20.1.2.2 Number.isFinite(number)
	    isFinite: function(it){
	      return typeof it == 'number' && isFinite(it);
	    },
	    // 20.1.2.3 Number.isInteger(number)
	    isInteger: isInteger,
	    // 20.1.2.4 Number.isNaN(number)
	    isNaN: sameNaN,
	    // 20.1.2.5 Number.isSafeInteger(number)
	    isSafeInteger: function(number){
	      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	    },
	    // 20.1.2.6 Number.MAX_SAFE_INTEGER
	    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	    // 20.1.2.10 Number.MIN_SAFE_INTEGER
	    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	    // 20.1.2.12 Number.parseFloat(string)
	    parseFloat: parseFloat,
	    // 20.1.2.13 Number.parseInt(string, radix)
	    parseInt: parseInt
	  });
	// 20.1.2.3 Number.isInteger(number)
	}(Number.isInteger || function(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	});
	
	/******************************************************************************
	 * Module : es6.math                                                          *
	 ******************************************************************************/
	
	// ECMAScript 6 shim
	!function(){
	  // 20.2.2.28 Math.sign(x)
	  var E    = Math.E
	    , exp  = Math.exp
	    , log  = Math.log
	    , sqrt = Math.sqrt
	    , sign = Math.sign || function(x){
	        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	      };
	  
	  // 20.2.2.5 Math.asinh(x)
	  function asinh(x){
	    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	  }
	  // 20.2.2.14 Math.expm1(x)
	  function expm1(x){
	    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
	  }
	    
	  $define(STATIC, MATH, {
	    // 20.2.2.3 Math.acosh(x)
	    acosh: function(x){
	      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	    },
	    // 20.2.2.5 Math.asinh(x)
	    asinh: asinh,
	    // 20.2.2.7 Math.atanh(x)
	    atanh: function(x){
	      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	    },
	    // 20.2.2.9 Math.cbrt(x)
	    cbrt: function(x){
	      return sign(x = +x) * pow(abs(x), 1 / 3);
	    },
	    // 20.2.2.11 Math.clz32(x)
	    clz32: function(x){
	      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	    },
	    // 20.2.2.12 Math.cosh(x)
	    cosh: function(x){
	      return (exp(x = +x) + exp(-x)) / 2;
	    },
	    // 20.2.2.14 Math.expm1(x)
	    expm1: expm1,
	    // 20.2.2.16 Math.fround(x)
	    // TODO: fallback for IE9-
	    fround: function(x){
	      return new Float32Array([x])[0];
	    },
	    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	    hypot: function(value1, value2){
	      var sum  = 0
	        , len1 = arguments.length
	        , len2 = len1
	        , args = Array(len1)
	        , larg = -Infinity
	        , arg;
	      while(len1--){
	        arg = args[len1] = +arguments[len1];
	        if(arg == Infinity || arg == -Infinity)return Infinity;
	        if(arg > larg)larg = arg;
	      }
	      larg = arg || 1;
	      while(len2--)sum += pow(args[len2] / larg, 2);
	      return larg * sqrt(sum);
	    },
	    // 20.2.2.18 Math.imul(x, y)
	    imul: function(x, y){
	      var UInt16 = 0xffff
	        , xn = +x
	        , yn = +y
	        , xl = UInt16 & xn
	        , yl = UInt16 & yn;
	      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	    },
	    // 20.2.2.20 Math.log1p(x)
	    log1p: function(x){
	      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	    },
	    // 20.2.2.21 Math.log10(x)
	    log10: function(x){
	      return log(x) / Math.LN10;
	    },
	    // 20.2.2.22 Math.log2(x)
	    log2: function(x){
	      return log(x) / Math.LN2;
	    },
	    // 20.2.2.28 Math.sign(x)
	    sign: sign,
	    // 20.2.2.30 Math.sinh(x)
	    sinh: function(x){
	      return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	    },
	    // 20.2.2.33 Math.tanh(x)
	    tanh: function(x){
	      var a = expm1(x = +x)
	        , b = expm1(-x);
	      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	    },
	    // 20.2.2.34 Math.trunc(x)
	    trunc: trunc
	  });
	}();
	
	/******************************************************************************
	 * Module : es6.string                                                        *
	 ******************************************************************************/
	
	!function(fromCharCode){
	  function assertNotRegExp(it){
	    if(cof(it) == REGEXP)throw TypeError();
	  }
	  
	  $define(STATIC, STRING, {
	    // 21.1.2.2 String.fromCodePoint(...codePoints)
	    fromCodePoint: function(x){
	      var res = []
	        , len = arguments.length
	        , i   = 0
	        , code
	      while(len > i){
	        code = +arguments[i++];
	        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	        res.push(code < 0x10000
	          ? fromCharCode(code)
	          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	        );
	      } return res.join('');
	    },
	    // 21.1.2.4 String.raw(callSite, ...substitutions)
	    raw: function(callSite){
	      var raw = toObject(callSite.raw)
	        , len = toLength(raw.length)
	        , sln = arguments.length
	        , res = []
	        , i   = 0;
	      while(len > i){
	        res.push(String(raw[i++]));
	        if(i < sln)res.push(String(arguments[i]));
	      } return res.join('');
	    }
	  });
	  
	  $define(PROTO, STRING, {
	    // 21.1.3.3 String.prototype.codePointAt(pos)
	    codePointAt: createPointAt(false),
	    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	    endsWith: function(searchString /*, endPosition = @length */){
	      assertNotRegExp(searchString);
	      var that = String(assertDefined(this))
	        , endPosition = arguments[1]
	        , len = toLength(that.length)
	        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
	      searchString += '';
	      return that.slice(end - searchString.length, end) === searchString;
	    },
	    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	    includes: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	    },
	    // 21.1.3.13 String.prototype.repeat(count)
	    repeat: function(count){
	      var str = String(assertDefined(this))
	        , res = ''
	        , n   = toInteger(count);
	      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
	      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	      return res;
	    },
	    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	    startsWith: function(searchString /*, position = 0 */){
	      assertNotRegExp(searchString);
	      var that  = String(assertDefined(this))
	        , index = toLength(min(arguments[1], that.length));
	      searchString += '';
	      return that.slice(index, index + searchString.length) === searchString;
	    }
	  });
	}(String.fromCharCode);
	
	/******************************************************************************
	 * Module : es6.array.statics                                                 *
	 ******************************************************************************/
	
	!function(){
	  $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {
	    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	      var O       = Object(assertDefined(arrayLike))
	        , mapfn   = arguments[1]
	        , mapping = mapfn !== undefined
	        , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
	        , index   = 0
	        , length, result, step;
	      if(isIterable(O)){
	        result = new (generic(this, Array));
	        safeIterClose(function(iterator){
	          for(; !(step = iterator.next()).done; index++){
	            result[index] = mapping ? f(step.value, index) : step.value;
	          }
	        }, getIterator(O));
	      } else {
	        result = new (generic(this, Array))(length = toLength(O.length));
	        for(; length > index; index++){
	          result[index] = mapping ? f(O[index], index) : O[index];
	        }
	      }
	      result.length = index;
	      return result;
	    }
	  });
	  
	  $define(STATIC, ARRAY, {
	    // 22.1.2.3 Array.of( ...items)
	    of: function(/* ...args */){
	      var index  = 0
	        , length = arguments.length
	        , result = new (generic(this, Array))(length);
	      while(length > index)result[index] = arguments[index++];
	      result.length = length;
	      return result;
	    }
	  });
	  
	  setSpecies(Array);
	}();
	
	/******************************************************************************
	 * Module : es6.array.prototype                                               *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
	      var O     = Object(assertDefined(this))
	        , len   = toLength(O.length)
	        , to    = toIndex(target, len)
	        , from  = toIndex(start, len)
	        , end   = arguments[2]
	        , fin   = end === undefined ? len : toIndex(end, len)
	        , count = min(fin - from, len - to)
	        , inc   = 1;
	      if(from < to && to < from + count){
	        inc  = -1;
	        from = from + count - 1;
	        to   = to + count - 1;
	      }
	      while(count-- > 0){
	        if(from in O)O[to] = O[from];
	        else delete O[to];
	        to += inc;
	        from += inc;
	      } return O;
	    },
	    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	    fill: function(value /*, start = 0, end = @length */){
	      var O      = Object(assertDefined(this))
	        , length = toLength(O.length)
	        , index  = toIndex(arguments[1], length)
	        , end    = arguments[2]
	        , endPos = end === undefined ? length : toIndex(end, length);
	      while(endPos > index)O[index++] = value;
	      return O;
	    },
	    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	    find: createArrayMethod(5),
	    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	    findIndex: createArrayMethod(6)
	  });
	  
	  if(framework){
	    // 22.1.3.31 Array.prototype[@@unscopables]
	    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
	      ArrayUnscopables[it] = true;
	    });
	    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	  }
	}();
	
	/******************************************************************************
	 * Module : es6.iterators                                                     *
	 ******************************************************************************/
	
	!function(at){
	  // 22.1.3.4 Array.prototype.entries()
	  // 22.1.3.13 Array.prototype.keys()
	  // 22.1.3.29 Array.prototype.values()
	  // 22.1.3.30 Array.prototype[@@iterator]()
	  defineStdIterators(Array, ARRAY, function(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , kind  = iter.k
	      , index = iter.i++;
	    if(!O || index >= O.length){
	      iter.o = undefined;
	      return iterResult(1);
	    }
	    if(kind == KEY)  return iterResult(0, index);
	    if(kind == VALUE)return iterResult(0, O[index]);
	                     return iterResult(0, [index, O[index]]);
	  }, VALUE);
	  
	  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	  Iterators[ARGUMENTS] = Iterators[ARRAY];
	  
	  // 21.1.3.27 String.prototype[@@iterator]()
	  defineStdIterators(String, STRING, function(iterated){
	    set(this, ITER, {o: String(iterated), i: 0});
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	  }, function(){
	    var iter  = this[ITER]
	      , O     = iter.o
	      , index = iter.i
	      , point;
	    if(index >= O.length)return iterResult(1);
	    point = at.call(O, index);
	    iter.i += point.length;
	    return iterResult(0, point);
	  });
	}(createPointAt(true));
	
	/******************************************************************************
	 * Module : web.immediate                                                     *
	 ******************************************************************************/
	
	// setImmediate shim
	// Node.js 0.9+ & IE10+ has setImmediate, else:
	isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
	  var postMessage      = global.postMessage
	    , addEventListener = global.addEventListener
	    , MessageChannel   = global.MessageChannel
	    , counter          = 0
	    , queue            = {}
	    , defer, channel, port;
	  setImmediate = function(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(isFunction(fn) ? fn : Function(fn), args);
	    }
	    defer(counter);
	    return counter;
	  }
	  clearImmediate = function(id){
	    delete queue[id];
	  }
	  function run(id){
	    if(has(queue, id)){
	      var fn = queue[id];
	      delete queue[id];
	      fn();
	    }
	  }
	  function listner(event){
	    run(event.data);
	  }
	  // Node.js 0.8-
	  if(NODE){
	    defer = function(id){
	      nextTick(part.call(run, id));
	    }
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is object
	  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
	    defer = function(id){
	      postMessage(id, '*');
	    }
	    addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(isFunction(MessageChannel)){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
	    defer = function(id){
	      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run(id);
	      }
	    }
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(run, 0, id);
	    }
	  }
	}('onreadystatechange');
	$define(GLOBAL + BIND, {
	  setImmediate:   setImmediate,
	  clearImmediate: clearImmediate
	});
	
	/******************************************************************************
	 * Module : es6.promise                                                       *
	 ******************************************************************************/
	
	// ES6 promises shim
	// Based on https://github.com/getify/native-promise-only/
	!function(Promise, test){
	  isFunction(Promise) && isFunction(Promise.resolve)
	  && Promise.resolve(test = new Promise(function(){})) == test
	  || function(asap, RECORD){
	    function isThenable(it){
	      var then;
	      if(isObject(it))then = it.then;
	      return isFunction(then) ? then : false;
	    }
	    function handledRejectionOrHasOnRejected(promise){
	      var record = promise[RECORD]
	        , chain  = record.c
	        , i      = 0
	        , react;
	      if(record.h)return true;
	      while(chain.length > i){
	        react = chain[i++];
	        if(react.fail || handledRejectionOrHasOnRejected(react.P))return true;
	      }
	    }
	    function notify(record, reject){
	      var chain = record.c;
	      if(reject || chain.length)asap(function(){
	        var promise = record.p
	          , value   = record.v
	          , ok      = record.s == 1
	          , i       = 0;
	        if(reject && !handledRejectionOrHasOnRejected(promise)){
	          setTimeout(function(){
	            if(!handledRejectionOrHasOnRejected(promise)){
	              if(NODE){
	                if(!process.emit('unhandledRejection', value, promise)){
	                  // default node.js behavior
	                }
	              } else if(isFunction(console.error)){
	                console.error('Unhandled promise rejection', value);
	              }
	            }
	          }, 1e3);
	        } else while(chain.length > i)!function(react){
	          var cb = ok ? react.ok : react.fail
	            , ret, then;
	          try {
	            if(cb){
	              if(!ok)record.h = true;
	              ret = cb === true ? value : cb(value);
	              if(ret === react.P){
	                react.rej(TypeError(PROMISE + '-chain cycle'));
	              } else if(then = isThenable(ret)){
	                then.call(ret, react.res, react.rej);
	              } else react.res(ret);
	            } else react.rej(value);
	          } catch(err){
	            react.rej(err);
	          }
	        }(chain[i++]);
	        chain.length = 0;
	      });
	    }
	    function resolve(value){
	      var record = this
	        , then, wrapper;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      try {
	        if(then = isThenable(value)){
	          wrapper = {r: record, d: false}; // wrap
	          then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	        } else {
	          record.v = value;
	          record.s = 1;
	          notify(record);
	        }
	      } catch(err){
	        reject.call(wrapper || {r: record, d: false}, err); // wrap
	      }
	    }
	    function reject(value){
	      var record = this;
	      if(record.d)return;
	      record.d = true;
	      record = record.r || record; // unwrap
	      record.v = value;
	      record.s = 2;
	      notify(record, true);
	    }
	    function getConstructor(C){
	      var S = assertObject(C)[SYMBOL_SPECIES];
	      return S != undefined ? S : C;
	    }
	    // 25.4.3.1 Promise(executor)
	    Promise = function(executor){
	      assertFunction(executor);
	      assertInstance(this, Promise, PROMISE);
	      var record = {
	        p: this,      // promise
	        c: [],        // chain
	        s: 0,         // state
	        d: false,     // done
	        v: undefined, // value
	        h: false      // handled rejection
	      };
	      hidden(this, RECORD, record);
	      try {
	        executor(ctx(resolve, record, 1), ctx(reject, record, 1));
	      } catch(err){
	        reject.call(record, err);
	      }
	    }
	    assignHidden(Promise[PROTOTYPE], {
	      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	      then: function(onFulfilled, onRejected){
	        var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	        var react = {
	          ok:   isFunction(onFulfilled) ? onFulfilled : true,
	          fail: isFunction(onRejected)  ? onRejected  : false
	        } , P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject){
	          react.res = assertFunction(resolve);
	          react.rej = assertFunction(reject);
	        }), record = this[RECORD];
	        record.c.push(react);
	        record.s && notify(record);
	        return P;
	      },
	      // 25.4.5.1 Promise.prototype.catch(onRejected)
	      'catch': function(onRejected){
	        return this.then(undefined, onRejected);
	      }
	    });
	    assignHidden(Promise, {
	      // 25.4.4.1 Promise.all(iterable)
	      all: function(iterable){
	        var Promise = getConstructor(this)
	          , values  = [];
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, push, values);
	          var remaining = values.length
	            , results   = Array(remaining);
	          if(remaining)forEach.call(values, function(promise, index){
	            Promise.resolve(promise).then(function(value){
	              results[index] = value;
	              --remaining || resolve(results);
	            }, reject);
	          });
	          else resolve(results);
	        });
	      },
	      // 25.4.4.4 Promise.race(iterable)
	      race: function(iterable){
	        var Promise = getConstructor(this);
	        return new Promise(function(resolve, reject){
	          forOf(iterable, false, function(promise){
	            Promise.resolve(promise).then(resolve, reject);
	          });
	        });
	      },
	      // 25.4.4.5 Promise.reject(r)
	      reject: function(r){
	        return new (getConstructor(this))(function(resolve, reject){
	          reject(r);
	        });
	      },
	      // 25.4.4.6 Promise.resolve(x)
	      resolve: function(x){
	        return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE]
	          ? x : new (getConstructor(this))(function(resolve, reject){
	            resolve(x);
	          });
	      }
	    });
	  }(nextTick || setImmediate, safeSymbol('record'));
	  setToStringTag(Promise, PROMISE);
	  setSpecies(Promise);
	  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
	}(global[PROMISE]);
	
	/******************************************************************************
	 * Module : es6.collections                                                   *
	 ******************************************************************************/
	
	// ECMAScript 6 collections shim
	!function(){
	  var UID   = safeSymbol('uid')
	    , O1    = safeSymbol('O1')
	    , WEAK  = safeSymbol('weak')
	    , LEAK  = safeSymbol('leak')
	    , LAST  = safeSymbol('last')
	    , FIRST = safeSymbol('first')
	    , SIZE  = DESC ? safeSymbol('size') : 'size'
	    , uid   = 0
	    , tmp   = {};
	  
	  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
	    var ADDER = isMap ? 'set' : 'add'
	      , proto = C && C[PROTOTYPE]
	      , O     = {};
	    function initFromIterable(that, iterable){
	      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
	      return that;
	    }
	    function fixSVZ(key, chain){
	      var method = proto[key];
	      if(framework)proto[key] = function(a, b){
	        var result = method.call(this, a === 0 ? 0 : a, b);
	        return chain ? this : result;
	      };
	    }
	    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))){
	      // create collection constructor
	      C = isWeak
	        ? function(iterable){
	            assertInstance(this, C, NAME);
	            set(this, UID, uid++);
	            initFromIterable(this, iterable);
	          }
	        : function(iterable){
	            var that = this;
	            assertInstance(that, C, NAME);
	            set(that, O1, create(null));
	            set(that, SIZE, 0);
	            set(that, LAST, undefined);
	            set(that, FIRST, undefined);
	            initFromIterable(that, iterable);
	          };
	      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	      isWeak || !DESC || defineProperty(C[PROTOTYPE], 'size', {get: function(){
	        return assertDefined(this[SIZE]);
	      }});
	    } else {
	      var Native = C
	        , inst   = new C
	        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
	        , buggyZero;
	      // wrap to init collections from iterable
	      if(checkDangerIterClosing(function(O){ new C(O) })){
	        C = function(iterable){
	          assertInstance(this, C, NAME);
	          return initFromIterable(new Native, iterable);
	        }
	        C[PROTOTYPE] = proto;
	        if(framework)proto[CONSTRUCTOR] = C;
	      }
	      isWeak || inst[FOR_EACH](function(val, key){
	        buggyZero = 1 / key === -Infinity;
	      });
	      // fix converting -0 key to +0
	      if(buggyZero){
	        fixSVZ('delete');
	        fixSVZ('has');
	        isMap && fixSVZ('get');
	      }
	      // + fix .add & .set for chaining
	      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
	    }
	    setToStringTag(C, NAME);
	    setSpecies(C);
	    
	    O[NAME] = C;
	    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
	    
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
	      set(this, ITER, {o: iterated, k: kind});
	    }, function(){
	      var iter  = this[ITER]
	        , kind  = iter.k
	        , entry = iter.l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
	        // or finish the iteration
	        iter.o = undefined;
	        return iterResult(1);
	      }
	      // return step by kind
	      if(kind == KEY)  return iterResult(0, entry.k);
	      if(kind == VALUE)return iterResult(0, entry.v);
	                       return iterResult(0, [entry.k, entry.v]);   
	    }, isMap ? KEY+VALUE : VALUE, !isMap);
	    
	    return C;
	  }
	  
	  function fastKey(it, create){
	    // return primitive with prefix
	    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
	    // can't set id to frozen object
	    if(isFrozen(it))return 'F';
	    if(!has(it, UID)){
	      // not necessary to add id
	      if(!create)return 'E';
	      // add missing object id
	      hidden(it, UID, ++uid);
	    // return object id with prefix
	    } return 'O' + it[UID];
	  }
	  function getEntry(that, key){
	    // fast case
	    var index = fastKey(key), entry;
	    if(index != 'F')return that[O1][index];
	    // frozen object case
	    for(entry = that[FIRST]; entry; entry = entry.n){
	      if(entry.k == key)return entry;
	    }
	  }
	  function def(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry)entry.v = value;
	    // create new entry
	    else {
	      that[LAST] = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that[LAST],          // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that[FIRST])that[FIRST] = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index != 'F')that[O1][index] = entry;
	    } return that;
	  }
	
	  var collectionMethods = {
	    // 23.1.3.1 Map.prototype.clear()
	    // 23.2.3.2 Set.prototype.clear()
	    clear: function(){
	      for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
	        entry.r = true;
	        if(entry.p)entry.p = entry.p.n = undefined;
	        delete data[entry.i];
	      }
	      that[FIRST] = that[LAST] = undefined;
	      that[SIZE] = 0;
	    },
	    // 23.1.3.3 Map.prototype.delete(key)
	    // 23.2.3.4 Set.prototype.delete(value)
	    'delete': function(key){
	      var that  = this
	        , entry = getEntry(that, key);
	      if(entry){
	        var next = entry.n
	          , prev = entry.p;
	        delete that[O1][entry.i];
	        entry.r = true;
	        if(prev)prev.n = next;
	        if(next)next.p = prev;
	        if(that[FIRST] == entry)that[FIRST] = next;
	        if(that[LAST] == entry)that[LAST] = prev;
	        that[SIZE]--;
	      } return !!entry;
	    },
	    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	    forEach: function(callbackfn /*, that = undefined */){
	      var f = ctx(callbackfn, arguments[1], 3)
	        , entry;
	      while(entry = entry ? entry.n : this[FIRST]){
	        f(entry.v, entry.k, this);
	        // revert to the last existing entry
	        while(entry && entry.r)entry = entry.p;
	      }
	    },
	    // 23.1.3.7 Map.prototype.has(key)
	    // 23.2.3.7 Set.prototype.has(value)
	    has: function(key){
	      return !!getEntry(this, key);
	    }
	  }
	  
	  // 23.1 Map Objects
	  Map = getCollection(Map, MAP, {
	    // 23.1.3.6 Map.prototype.get(key)
	    get: function(key){
	      var entry = getEntry(this, key);
	      return entry && entry.v;
	    },
	    // 23.1.3.9 Map.prototype.set(key, value)
	    set: function(key, value){
	      return def(this, key === 0 ? 0 : key, value);
	    }
	  }, collectionMethods, true);
	  
	  // 23.2 Set Objects
	  Set = getCollection(Set, SET, {
	    // 23.2.3.1 Set.prototype.add(value)
	    add: function(value){
	      return def(this, value = value === 0 ? 0 : value, value);
	    }
	  }, collectionMethods);
	  
	  function defWeak(that, key, value){
	    if(isFrozen(assertObject(key)))leakStore(that).set(key, value);
	    else {
	      has(key, WEAK) || hidden(key, WEAK, {});
	      key[WEAK][that[UID]] = value;
	    } return that;
	  }
	  function leakStore(that){
	    return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
	  }
	  
	  var weakMethods = {
	    // 23.3.3.2 WeakMap.prototype.delete(key)
	    // 23.4.3.3 WeakSet.prototype.delete(value)
	    'delete': function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this)['delete'](key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	    },
	    // 23.3.3.4 WeakMap.prototype.has(key)
	    // 23.4.3.4 WeakSet.prototype.has(value)
	    has: function(key){
	      if(!isObject(key))return false;
	      if(isFrozen(key))return leakStore(this).has(key);
	      return has(key, WEAK) && has(key[WEAK], this[UID]);
	    }
	  };
	  
	  // 23.3 WeakMap Objects
	  WeakMap = getCollection(WeakMap, WEAKMAP, {
	    // 23.3.3.3 WeakMap.prototype.get(key)
	    get: function(key){
	      if(isObject(key)){
	        if(isFrozen(key))return leakStore(this).get(key);
	        if(has(key, WEAK))return key[WEAK][this[UID]];
	      }
	    },
	    // 23.3.3.5 WeakMap.prototype.set(key, value)
	    set: function(key, value){
	      return defWeak(this, key, value);
	    }
	  }, weakMethods, true, true);
	  
	  // IE11 WeakMap frozen keys fix
	  if(framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7){
	    forEach.call(array('delete,has,get,set'), function(key){
	      var method = WeakMap[PROTOTYPE][key];
	      WeakMap[PROTOTYPE][key] = function(a, b){
	        // store frozen objects on leaky map
	        if(isObject(a) && isFrozen(a)){
	          var result = leakStore(this)[key](a, b);
	          return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	        } return method.call(this, a, b);
	      };
	    });
	  }
	  
	  // 23.4 WeakSet Objects
	  WeakSet = getCollection(WeakSet, WEAKSET, {
	    // 23.4.3.1 WeakSet.prototype.add(value)
	    add: function(value){
	      return defWeak(this, value, true);
	    }
	  }, weakMethods, false, true);
	}();
	
	/******************************************************************************
	 * Module : es6.reflect                                                       *
	 ******************************************************************************/
	
	!function(){
	  function Enumerate(iterated){
	    var keys = [], key;
	    for(key in iterated)keys.push(key);
	    set(this, ITER, {o: iterated, a: keys, i: 0});
	  }
	  createIterator(Enumerate, OBJECT, function(){
	    var iter = this[ITER]
	      , keys = iter.a
	      , key;
	    do {
	      if(iter.i >= keys.length)return iterResult(1);
	    } while(!((key = keys[iter.i++]) in iter.o));
	    return iterResult(0, key);
	  });
	  
	  function wrap(fn){
	    return function(it){
	      assertObject(it);
	      try {
	        return fn.apply(undefined, arguments), true;
	      } catch(e){
	        return false;
	      }
	    }
	  }
	  
	  function reflectGet(target, propertyKey/*, receiver*/){
	    var receiver = arguments.length < 3 ? target : arguments[2]
	      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
	    if(desc)return has(desc, 'value')
	      ? desc.value
	      : desc.get === undefined
	        ? undefined
	        : desc.get.call(receiver);
	    return isObject(proto = getPrototypeOf(target))
	      ? reflectGet(proto, propertyKey, receiver)
	      : undefined;
	  }
	  function reflectSet(target, propertyKey, V/*, receiver*/){
	    var receiver = arguments.length < 4 ? target : arguments[3]
	      , ownDesc  = getOwnDescriptor(assertObject(target), propertyKey)
	      , existingDescriptor, proto;
	    if(!ownDesc){
	      if(isObject(proto = getPrototypeOf(target))){
	        return reflectSet(proto, propertyKey, V, receiver);
	      }
	      ownDesc = descriptor(0);
	    }
	    if(has(ownDesc, 'value')){
	      if(ownDesc.writable === false || !isObject(receiver))return false;
	      existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	      existingDescriptor.value = V;
	      return defineProperty(receiver, propertyKey, existingDescriptor), true;
	    }
	    return ownDesc.set === undefined
	      ? false
	      : (ownDesc.set.call(receiver, V), true);
	  }
	  var isExtensible = Object.isExtensible || returnIt;
	  
	  var reflect = {
	    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	    apply: ctx(call, apply, 3),
	    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	    construct: function(target, argumentsList /*, newTarget*/){
	      var proto    = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE]
	        , instance = create(isObject(proto) ? proto : ObjectProto)
	        , result   = apply.call(target, instance, argumentsList);
	      return isObject(result) ? result : instance;
	    },
	    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	    defineProperty: wrap(defineProperty),
	    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	    deleteProperty: function(target, propertyKey){
	      var desc = getOwnDescriptor(assertObject(target), propertyKey);
	      return desc && !desc.configurable ? false : delete target[propertyKey];
	    },
	    // 26.1.5 Reflect.enumerate(target)
	    enumerate: function(target){
	      return new Enumerate(assertObject(target));
	    },
	    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	    get: reflectGet,
	    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	    getOwnPropertyDescriptor: function(target, propertyKey){
	      return getOwnDescriptor(assertObject(target), propertyKey);
	    },
	    // 26.1.8 Reflect.getPrototypeOf(target)
	    getPrototypeOf: function(target){
	      return getPrototypeOf(assertObject(target));
	    },
	    // 26.1.9 Reflect.has(target, propertyKey)
	    has: function(target, propertyKey){
	      return propertyKey in target;
	    },
	    // 26.1.10 Reflect.isExtensible(target)
	    isExtensible: function(target){
	      return !!isExtensible(assertObject(target));
	    },
	    // 26.1.11 Reflect.ownKeys(target)
	    ownKeys: ownKeys,
	    // 26.1.12 Reflect.preventExtensions(target)
	    preventExtensions: wrap(Object.preventExtensions || returnIt),
	    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	    set: reflectSet
	  }
	  // 26.1.14 Reflect.setPrototypeOf(target, proto)
	  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
	    return setPrototypeOf(assertObject(target), proto), true;
	  };
	  
	  $define(GLOBAL, {Reflect: {}});
	  $define(STATIC, 'Reflect', reflect);
	}();
	
	/******************************************************************************
	 * Module : es7.proposals                                                     *
	 ******************************************************************************/
	
	!function(){
	  $define(PROTO, ARRAY, {
	    // https://github.com/domenic/Array.prototype.includes
	    includes: createArrayContains(true)
	  });
	  $define(PROTO, STRING, {
	    // https://github.com/mathiasbynens/String.prototype.at
	    at: createPointAt(true)
	  });
	  
	  function createObjectToArray(isEntries){
	    return function(object){
	      var O      = toObject(object)
	        , keys   = getKeys(object)
	        , length = keys.length
	        , i      = 0
	        , result = Array(length)
	        , key;
	      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	      else while(length > i)result[i] = O[keys[i++]];
	      return result;
	    }
	  }
	  $define(STATIC, OBJECT, {
	    // https://gist.github.com/WebReflection/9353781
	    getOwnPropertyDescriptors: function(object){
	      var O      = toObject(object)
	        , result = {};
	      forEach.call(ownKeys(O), function(key){
	        defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
	      });
	      return result;
	    },
	    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	    values:  createObjectToArray(false),
	    entries: createObjectToArray(true)
	  });
	  $define(STATIC, REGEXP, {
	    // https://gist.github.com/kangax/9698100
	    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
	  });
	}();
	
	/******************************************************************************
	 * Module : es7.abstract-refs                                                 *
	 ******************************************************************************/
	
	// https://github.com/zenparsing/es-abstract-refs
	!function(REFERENCE){
	  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
	  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
	    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
	  
	  $define(STATIC, SYMBOL, {
	    referenceGet: REFERENCE_GET,
	    referenceSet: REFERENCE_SET,
	    referenceDelete: REFERENCE_DELETE
	  });
	  
	  hidden(FunctionProto, REFERENCE_GET, returnThis);
	  
	  function setMapMethods(Constructor){
	    if(Constructor){
	      var MapProto = Constructor[PROTOTYPE];
	      hidden(MapProto, REFERENCE_GET, MapProto.get);
	      hidden(MapProto, REFERENCE_SET, MapProto.set);
	      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
	    }
	  }
	  setMapMethods(Map);
	  setMapMethods(WeakMap);
	}('reference');
	
	/******************************************************************************
	 * Module : core.dict                                                         *
	 ******************************************************************************/
	
	!function(DICT){
	  Dict = function(iterable){
	    var dict = create(null);
	    if(iterable != undefined){
	      if(isIterable(iterable)){
	        forOf(iterable, true, function(key, value){
	          dict[key] = value;
	        });
	      } else assign(dict, iterable);
	    }
	    return dict;
	  }
	  Dict[PROTOTYPE] = null;
	  
	  function DictIterator(iterated, kind){
	    set(this, ITER, {o: toObject(iterated), a: getKeys(iterated), i: 0, k: kind});
	  }
	  createIterator(DictIterator, DICT, function(){
	    var iter = this[ITER]
	      , O    = iter.o
	      , keys = iter.a
	      , kind = iter.k
	      , key;
	    do {
	      if(iter.i >= keys.length){
	        iter.o = undefined;
	        return iterResult(1);
	      }
	    } while(!has(O, key = keys[iter.i++]));
	    if(kind == KEY)  return iterResult(0, key);
	    if(kind == VALUE)return iterResult(0, O[key]);
	                     return iterResult(0, [key, O[key]]);
	  });
	  function createDictIter(kind){
	    return function(it){
	      return new DictIterator(it, kind);
	    }
	  }
	  
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findKey
	   * 7 -> mapPairs
	   */
	  function createDictMethod(type){
	    var isMap    = type == 1
	      , isEvery  = type == 4;
	    return function(object, callbackfn, that /* = undefined */){
	      var f      = ctx(callbackfn, that, 3)
	        , O      = toObject(object)
	        , result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined
	        , key, val, res;
	      for(key in O)if(has(O, key)){
	        val = O[key];
	        res = f(val, key, object);
	        if(type){
	          if(isMap)result[key] = res;             // map
	          else if(res)switch(type){
	            case 2: result[key] = val; break      // filter
	            case 3: return true;                  // some
	            case 5: return val;                   // find
	            case 6: return key;                   // findKey
	            case 7: result[res[0]] = res[1];      // mapPairs
	          } else if(isEvery)return false;         // every
	        }
	      }
	      return type == 3 || isEvery ? isEvery : result;
	    }
	  }
	  function createDictReduce(isTurn){
	    return function(object, mapfn, init){
	      assertFunction(mapfn);
	      var O      = toObject(object)
	        , keys   = getKeys(O)
	        , length = keys.length
	        , i      = 0
	        , memo, key, result;
	      if(isTurn)memo = init == undefined ? new (generic(this, Dict)) : Object(init);
	      else if(arguments.length < 3){
	        assert(length, REDUCE_ERROR);
	        memo = O[keys[i++]];
	      } else memo = Object(init);
	      while(length > i)if(has(O, key = keys[i++])){
	        result = mapfn(memo, O[key], key, object);
	        if(isTurn){
	          if(result === false)break;
	        } else memo = result;
	      }
	      return memo;
	    }
	  }
	  var findKey = createDictMethod(6);
	  function includes(object, el){
	    return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
	  }
	  
	  var dictMethods = {
	    keys:    createDictIter(KEY),
	    values:  createDictIter(VALUE),
	    entries: createDictIter(KEY+VALUE),
	    forEach: createDictMethod(0),
	    map:     createDictMethod(1),
	    filter:  createDictMethod(2),
	    some:    createDictMethod(3),
	    every:   createDictMethod(4),
	    find:    createDictMethod(5),
	    findKey: findKey,
	    mapPairs:createDictMethod(7),
	    reduce:  createDictReduce(false),
	    turn:    createDictReduce(true),
	    keyOf:   keyOf,
	    includes:includes,
	    // Has / get / set own property
	    has: has,
	    get: get,
	    set: createDefiner(0),
	    isDict: function(it){
	      return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
	    }
	  };
	  
	  if(REFERENCE_GET)for(var key in dictMethods)!function(fn){
	    function method(){
	      for(var args = [this], i = 0; i < arguments.length;)args.push(arguments[i++]);
	      return invoke(fn, args);
	    }
	    fn[REFERENCE_GET] = function(){
	      return method;
	    }
	  }(dictMethods[key]);
	  
	  $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
	}('Dict');
	
	/******************************************************************************
	 * Module : core.$for                                                         *
	 ******************************************************************************/
	
	!function(ENTRIES, FN){  
	  function $for(iterable, entries){
	    if(!(this instanceof $for))return new $for(iterable, entries);
	    this[ITER]    = getIterator(iterable);
	    this[ENTRIES] = !!entries;
	  }
	  
	  createIterator($for, 'Wrapper', function(){
	    return this[ITER].next();
	  });
	  var $forProto = $for[PROTOTYPE];
	  setIterator($forProto, function(){
	    return this[ITER]; // unwrap
	  });
	  
	  function createChainIterator(next){
	    function Iter(I, fn, that){
	      this[ITER]    = getIterator(I);
	      this[ENTRIES] = I[ENTRIES];
	      this[FN]      = ctx(fn, that, I[ENTRIES] ? 2 : 1);
	    }
	    createIterator(Iter, 'Chain', next, $forProto);
	    setIterator(Iter[PROTOTYPE], returnThis); // override $forProto iterator
	    return Iter;
	  }
	  
	  var MapIter = createChainIterator(function(){
	    var step = this[ITER].next();
	    return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
	  });
	  
	  var FilterIter = createChainIterator(function(){
	    for(;;){
	      var step = this[ITER].next();
	      if(step.done || stepCall(this[FN], step.value, this[ENTRIES]))return step;
	    }
	  });
	  
	  assignHidden($forProto, {
	    of: function(fn, that){
	      forOf(this, this[ENTRIES], fn, that);
	    },
	    array: function(fn, that){
	      var result = [];
	      forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
	      return result;
	    },
	    filter: function(fn, that){
	      return new FilterIter(this, fn, that);
	    },
	    map: function(fn, that){
	      return new MapIter(this, fn, that);
	    }
	  });
	  
	  $for.isIterable  = isIterable;
	  $for.getIterator = getIterator;
	  
	  $define(GLOBAL + FORCED, {$for: $for});
	}('entries', safeSymbol('fn'));
	
	/******************************************************************************
	 * Module : core.delay                                                        *
	 ******************************************************************************/
	
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$define(GLOBAL + FORCED, {
	  delay: function(time){
	    return new Promise(function(resolve){
	      setTimeout(resolve, time, true);
	    });
	  }
	});
	
	/******************************************************************************
	 * Module : core.binding                                                      *
	 ******************************************************************************/
	
	!function(_, toLocaleString){
	  // Placeholder
	  core._ = path._ = path._ || {};
	
	  $define(PROTO + FORCED, FUNCTION, {
	    part: part,
	    only: function(numberArguments, that /* = @ */){
	      var fn     = assertFunction(this)
	        , n      = toLength(numberArguments)
	        , isThat = arguments.length > 1;
	      return function(/* ...args */){
	        var length = min(n, arguments.length)
	          , args   = Array(length)
	          , i      = 0;
	        while(length > i)args[i] = arguments[i++];
	        return invoke(fn, args, isThat ? that : this);
	      }
	    }
	  });
	  
	  function tie(key){
	    var that  = this
	      , bound = {};
	    return hidden(that, _, function(key){
	      if(key === undefined || !(key in that))return toLocaleString.call(that);
	      return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
	    })[_](key);
	  }
	  
	  hidden(path._, TO_STRING, function(){
	    return _;
	  });
	  
	  hidden(ObjectProto, _, tie);
	  DESC || hidden(ArrayProto, _, tie);
	  // IE8- dirty hack - redefined toLocaleString is not enumerable
	}(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);
	
	/******************************************************************************
	 * Module : core.object                                                       *
	 ******************************************************************************/
	
	!function(){
	  function define(target, mixin){
	    var keys   = ownKeys(toObject(mixin))
	      , length = keys.length
	      , i = 0, key;
	    while(length > i)defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
	    return target;
	  };
	  $define(STATIC + FORCED, OBJECT, {
	    isObject: isObject,
	    classof: classof,
	    define: define,
	    make: function(proto, mixin){
	      return define(create(proto), mixin);
	    }
	  });
	}();
	
	/******************************************************************************
	 * Module : core.array                                                        *
	 ******************************************************************************/
	
	$define(PROTO + FORCED, ARRAY, {
	  turn: function(fn, target /* = [] */){
	    assertFunction(fn);
	    var memo   = target == undefined ? [] : Object(target)
	      , O      = ES5Object(this)
	      , length = toLength(O.length)
	      , index  = 0;
	    while(length > index)if(fn(memo, O[index], index++, this) === false)break;
	    return memo;
	  }
	});
	if(framework)ArrayUnscopables.turn = true;
	
	/******************************************************************************
	 * Module : core.number                                                       *
	 ******************************************************************************/
	
	!function(numberMethods){  
	  function NumberIterator(iterated){
	    set(this, ITER, {l: toLength(iterated), i: 0});
	  }
	  createIterator(NumberIterator, NUMBER, function(){
	    var iter = this[ITER]
	      , i    = iter.i++;
	    return i < iter.l ? iterResult(0, i) : iterResult(1);
	  });
	  defineIterator(Number, NUMBER, function(){
	    return new NumberIterator(this);
	  });
	  
	  numberMethods.random = function(lim /* = 0 */){
	    var a = +this
	      , b = lim == undefined ? 0 : +lim
	      , m = min(a, b);
	    return random() * (max(a, b) - m) + m;
	  };
	
	  forEach.call(array(
	      // ES3:
	      'round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' +
	      // ES6:
	      'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'
	    ), function(key){
	      var fn = Math[key];
	      if(fn)numberMethods[key] = function(/* ...args */){
	        // ie9- dont support strict mode & convert `this` to object -> convert it to number
	        var args = [+this]
	          , i    = 0;
	        while(arguments.length > i)args.push(arguments[i++]);
	        return invoke(fn, args);
	      }
	    }
	  );
	  
	  $define(PROTO + FORCED, NUMBER, numberMethods);
	}({});
	
	/******************************************************************************
	 * Module : core.string                                                       *
	 ******************************************************************************/
	
	!function(){
	  var escapeHTMLDict = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&apos;'
	  }, unescapeHTMLDict = {}, key;
	  for(key in escapeHTMLDict)unescapeHTMLDict[escapeHTMLDict[key]] = key;
	  $define(PROTO + FORCED, STRING, {
	    escapeHTML:   createReplacer(/[&<>"']/g, escapeHTMLDict),
	    unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
	  });
	}();
	
	/******************************************************************************
	 * Module : core.date                                                         *
	 ******************************************************************************/
	
	!function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR){
	  function createFormat(prefix){
	    return function(template, locale /* = current */){
	      var that = this
	        , dict = locales[has(locales, locale) ? locale : current];
	      function get(unit){
	        return that[prefix + unit]();
	      }
	      return String(template).replace(formatRegExp, function(part){
	        switch(part){
	          case 's'  : return get(SECONDS);                  // Seconds : 0-59
	          case 'ss' : return lz(get(SECONDS));              // Seconds : 00-59
	          case 'm'  : return get(MINUTES);                  // Minutes : 0-59
	          case 'mm' : return lz(get(MINUTES));              // Minutes : 00-59
	          case 'h'  : return get(HOURS);                    // Hours   : 0-23
	          case 'hh' : return lz(get(HOURS));                // Hours   : 00-23
	          case 'D'  : return get(DATE);                     // Date    : 1-31
	          case 'DD' : return lz(get(DATE));                 // Date    : 01-31
	          case 'W'  : return dict[0][get('Day')];           // Day     : Понедельник
	          case 'N'  : return get(MONTH) + 1;                // Month   : 1-12
	          case 'NN' : return lz(get(MONTH) + 1);            // Month   : 01-12
	          case 'M'  : return dict[2][get(MONTH)];           // Month   : Январь
	          case 'MM' : return dict[1][get(MONTH)];           // Month   : Января
	          case 'Y'  : return get(YEAR);                     // Year    : 2014
	          case 'YY' : return lz(get(YEAR) % 100);           // Year    : 14
	        } return part;
	      });
	    }
	  }
	  function addLocale(lang, locale){
	    function split(index){
	      var result = [];
	      forEach.call(array(locale.months), function(it){
	        result.push(it.replace(flexioRegExp, '$' + index));
	      });
	      return result;
	    }
	    locales[lang] = [array(locale.weekdays), split(1), split(2)];
	    return core;
	  }
	  $define(PROTO + FORCED, DATE, {
	    format:    createFormat('get'),
	    formatUTC: createFormat('getUTC')
	  });
	  addLocale(current, {
	    weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
	    months: 'January,February,March,April,May,June,July,August,September,October,November,December'
	  });
	  addLocale('ru', {
	    weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
	    months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' +
	            'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
	  });
	  core.locale = function(locale){
	    return has(locales, locale) ? current = locale : current;
	  };
	  core.addLocale = addLocale;
	}(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
	
	/******************************************************************************
	 * Module : core.global                                                       *
	 ******************************************************************************/
	
	$define(GLOBAL + FORCED, {global: global});
	
	/******************************************************************************
	 * Module : js.array.statics                                                  *
	 ******************************************************************************/
	
	// JavaScript 1.6 / Strawman array statics shim
	!function(arrayStatics){
	  function setArrayStatics(keys, length){
	    forEach.call(array(keys), function(key){
	      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
	    });
	  }
	  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
	  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	                  'reduce,reduceRight,copyWithin,fill,turn');
	  $define(STATIC, ARRAY, arrayStatics);
	}({});
	
	/******************************************************************************
	 * Module : web.dom.itarable                                                  *
	 ******************************************************************************/
	
	!function(NodeList){
	  if(framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){
	    hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	  }
	  Iterators.NodeList = Iterators[ARRAY];
	}(global.NodeList);
	
	/******************************************************************************
	 * Module : core.log                                                          *
	 ******************************************************************************/
	
	!function(log, enabled){
	  // Methods from https://github.com/DeveloperToolsWG/console-object/blob/master/api.md
	  forEach.call(array('assert,clear,count,debug,dir,dirxml,error,exception,' +
	      'group,groupCollapsed,groupEnd,info,isIndependentlyComposed,log,' +
	      'markTimeline,profile,profileEnd,table,time,timeEnd,timeline,' +
	      'timelineEnd,timeStamp,trace,warn'), function(key){
	    log[key] = function(){
	      if(enabled && key in console)return apply.call(console[key], console, arguments);
	    };
	  });
	  $define(GLOBAL + FORCED, {log: assign(log.log, log, {
	    enable: function(){
	      enabled = true;
	    },
	    disable: function(){
	      enabled = false;
	    }
	  })});
	}({}, true);
	}(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), false);
	module.exports = { "default": module.exports, __esModule: true };


/***/ },
/* 27 */
/*!***************************************!*\
  !*** ../~/specificity/specificity.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Calculates the specificity of CSS selectors
	 * http://www.w3.org/TR/css3-selectors/#specificity
	 *
	 * Returns an array of objects with the following properties:
	 *  - selector: the input
	 *  - specificity: e.g. 0,1,0,0
	 *  - parts: array with details about each part of the selector that counts towards the specificity
	 */
	var SPECIFICITY = (function() {
		var calculate,
			calculateSingle;
	
		calculate = function(input) {
			var selectors,
				selector,
				i,
				len,
				results = [];
	
			// Separate input by commas
			selectors = input.split(',');
	
			for (i = 0, len = selectors.length; i < len; i += 1) {
				selector = selectors[i];
				if (selector.length > 0) {
					results.push(calculateSingle(selector));
				}
			}
	
			return results;
		};
	
		// Calculate the specificity for a selector by dividing it into simple selectors and counting them
		calculateSingle = function(input) {
			var selector = input,
				findMatch,
				typeCount = {
					'a': 0,
					'b': 0,
					'c': 0
				},
				parts = [],
				// The following regular expressions assume that selectors matching the preceding regular expressions have been removed
				attributeRegex = /(\[[^\]]+\])/g,
				idRegex = /(#[^\s\+>~\.\[:]+)/g,
				classRegex = /(\.[^\s\+>~\.\[:]+)/g,
				pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
				// A regex for pseudo classes with brackets - :nth-child(), :nth-last-child(), :nth-of-type(), :nth-last-type(), :lang()
				pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi,
				// A regex for other pseudo classes, which don't have brackets
				pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g,
				elementRegex = /([^\s\+>~\.\[:]+)/g;
	
			// Find matches for a regular expression in a string and push their details to parts
			// Type is "a" for IDs, "b" for classes, attributes and pseudo-classes and "c" for elements and pseudo-elements
			findMatch = function(regex, type) {
				var matches, i, len, match, index, length;
				if (regex.test(selector)) {
					matches = selector.match(regex);
					for (i = 0, len = matches.length; i < len; i += 1) {
						typeCount[type] += 1;
						match = matches[i];
						index = selector.indexOf(match);
						length = match.length;
						parts.push({
							selector: match,
							type: type,
							index: index,
							length: length
						});
						// Replace this simple selector with whitespace so it won't be counted in further simple selectors
						selector = selector.replace(match, Array(length + 1).join(' '));
					}
				}
			};
	
			// Remove the negation psuedo-class (:not) but leave its argument because specificity is calculated on its argument
			(function() {
				var regex = /:not\(([^\)]*)\)/g;
				if (regex.test(selector)) {
					selector = selector.replace(regex, '     $1 ');
				}
			}());
	
			// Remove anything after a left brace in case a user has pasted in a rule, not just a selector
			(function() {
				var regex = /{[^]*/gm,
					matches, i, len, match;
				if (regex.test(selector)) {
					matches = selector.match(regex);
					for (i = 0, len = matches.length; i < len; i += 1) {
						match = matches[i];
						selector = selector.replace(match, Array(match.length + 1).join(' '));
					}
				}
			}());
	
			// Add attribute selectors to parts collection (type b)
			findMatch(attributeRegex, 'b');
	
			// Add ID selectors to parts collection (type a)
			findMatch(idRegex, 'a');
	
			// Add class selectors to parts collection (type b)
			findMatch(classRegex, 'b');
	
			// Add pseudo-element selectors to parts collection (type c)
			findMatch(pseudoElementRegex, 'c');
	
			// Add pseudo-class selectors to parts collection (type b)
			findMatch(pseudoClassWithBracketsRegex, 'b');
			findMatch(pseudoClassRegex, 'b');
	
			// Remove universal selector and separator characters
			selector = selector.replace(/[\*\s\+>~]/g, ' ');
	
			// Remove any stray dots or hashes which aren't attached to words
			// These may be present if the user is live-editing this selector
			selector = selector.replace(/[#\.]/g, ' ');
	
			// The only things left should be element selectors (type c)
			findMatch(elementRegex, 'c');
	
			// Order the parts in the order they appear in the original selector
			// This is neater for external apps to deal with
			parts.sort(function(a, b) {
				return a.index - b.index;
			});
	
			return {
				selector: input,
				specificity: '0,' + typeCount.a.toString() + ',' + typeCount.b.toString() + ',' + typeCount.c.toString(),
				parts: parts
			};
		};
	
		return {
			calculate: calculate
		};
	}());
	
	// Export for Node JS
	if (true) {
		exports.calculate = SPECIFICITY.calculate;
	}


/***/ },
/* 28 */
/*!***************************************************!*\
  !*** ../lib/serializers/default/border-scheme.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var BACKGROUND_CHARACTER = __webpack_require__(/*! ../../characters */ 25).BACKGROUND_CHARACTER;
	
	var borderScheme = {
	    x: {
	        min: {
	            y: {
	                min: {
	                    // x─┐
	                    // │ │
	                    // └─┘
	                    left: {
	                        no: {
	                            top: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            top: {
	                                no: "│",
	                                yes: "┌"
	                            }
	                        }
	                    }
	                },
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // x─┘
	                    left: {
	                        no: {
	                            bottom: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            bottom: {
	                                no: "│",
	                                yes: "└"
	                            }
	                        }
	                    }
	                },
	                mid: {
	                    // ┌─┐
	                    // x │
	                    // └─┘
	                    left: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "│"
	                    }
	                }
	            }
	        },
	        mid: {
	            y: {
	                min: {
	                    // ┌x┐
	                    // │ │
	                    // └─┘
	                    top: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "─"
	                    }
	                },
	                // ┌─┐
	                // │x│
	                // └─┘
	                mid: BACKGROUND_CHARACTER,
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // └x┘
	                    bottom: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "─"
	                    }
	                }
	            }
	        },
	        max: {
	            y: {
	                min: {
	                    // ┌─x
	                    // │ │
	                    // └─┘
	                    right: {
	                        no: {
	                            top: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            top: {
	                                no: "│",
	                                yes: "┐"
	                            }
	                        }
	                    }
	                },
	                mid: {
	                    // ┌─┐
	                    // │ x
	                    // └─┘
	                    right: {
	                        no: BACKGROUND_CHARACTER,
	                        yes: "│"
	                    }
	                },
	                max: {
	                    // ┌─┐
	                    // │ │
	                    // └─x
	                    right: {
	                        no: {
	                            bottom: {
	                                no: BACKGROUND_CHARACTER,
	                                yes: "─"
	                            }
	                        },
	                        yes: {
	                            bottom: {
	                                no: "|",
	                                yes: "┘"
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	};
	exports.borderScheme = borderScheme;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDc0NDU4MzVlMGNiMGU2MmY0YjkiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LmNzcz8wOTJjIiwid2VicGFjazovLy8uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbGliL3R1aS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9saWIvY29tcHJlc3MtYm94LmpzIiwid2VicGFjazovLy8uLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9yZW5kZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9saWIvc2VyaWFsaXplcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL34vY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vfi9jc3MtbG9hZGVyL21lcmdlSW1wb3J0LmpzIiwid2VicGFjazovLy8uLi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwid2VicGFjazovLy8uLi9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi90dWktdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkLXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uLi9saWIvdHVpLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3JlbmRlcnMvYW5zaS5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3JlbmRlcnMvY2hyb21lLmpzIiwid2VicGFjazovLy8uLi9saWIvcmVuZGVycy9odG1sLmpzIiwid2VicGFjazovLy8uLi9saWIvcmVuZGVycy9hc2NpaS5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL3NlcmlhbGl6ZXJzL2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9zZXJpYWxpemVycy9pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL2NoYXJhY3RlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzLmpzIiwid2VicGFjazovLy8uLi9+L3NwZWNpZmljaXR5L3NwZWNpZmljaXR5LmpzIiwid2VicGFjazovLy8uLi9saWIvc2VyaWFsaXplcnMvZGVmYXVsdC9ib3JkZXItc2NoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7cUJDdENPLG9CQUFhOzs2QkFDMEIsV0FBSTs7S0FBMUMsVUFBVSxLQUFWLFVBQVU7S0FBRSxNQUFNLEtBQU4sTUFBTTtLQUFFLFdBQVcsS0FBWCxXQUFXOztBQUV2QyxzQkFBcUIsQ0FBQyxZQUFZO0FBQzlCLFNBQUksT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNqRSxTQUFJLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzs7QUFFdkQsYUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzlFLFNBQUksV0FBVyxDQUFDLElBQUks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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLFFBQVEsZ0JBQWdCLFlBQVk7QUFDcEUsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRCxZQUFZO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0QsMEJBQTBCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLFVBQVU7QUFDL0IsMEJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsMkJBQTBCLGVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsY0FBYztBQUN4QywyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsc0JBQXNCLElBQUk7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaLE1BQUssVUFBVTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFlBQVc7QUFDWCxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsY0FBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLHFDQUFxQztBQUMxRDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUMsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0UsT0FBTztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsWUFBWTtBQUMvQjtBQUNBLEVBQUM7O0FBRUQ7QUFD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WDswQkFDSjtBQUNELDRCQUFHLEVBQUU7QUFDRCxtQ0FBTSxFQUFFO0FBQ0osbUNBQUUsRUFBRSxHQUFHO0FBQ1Asb0NBQUcsRUFBRSxHQUFHOzhCQUNYOzBCQUNKO3NCQUNKO2tCQUNKO2NBQ0o7VUFDSjtNQUNKO0VBQ0osQ0FBQztTQW5JUyxZQUFZLEdBQVosWUFBWSxDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0NzQ0NTgzNWUwY2IwZTYyZjRiOVxuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHtUdWlFbGVtZW50LCByZW5kZXIsIGNvbXByZXNzQm94fSBmcm9tICcuLic7XG5cbnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBuZXcgVHVpRWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVpLWRvbScpKTtcbiAgICB2YXIgc2VyaWFsaXplZEVsZW1lbnQgPSBjb21wcmVzc0JveChlbGVtZW50LnRvQXJyYXkoKSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVpLWNsaScpLmlubmVySFRNTCA9IHJlbmRlci5odG1sKHNlcmlhbGl6ZWRFbGVtZW50KTtcbiAgICBpZiAoL1BoYW50b21KUy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVuZGVyLmFuc2koc2VyaWFsaXplZEVsZW1lbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCByZW5kZXIuY2hyb21lKHNlcmlhbGl6ZWRFbGVtZW50KSk7XG4gICAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IHtkZWZhdWx0IGFzIFR1aUVsZW1lbnR9IGZyb20gJy4vbGliL3R1aS1lbGVtZW50JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyByZW5kZXJ9IGZyb20gJy4vbGliL3JlbmRlcnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNvbXByZXNzQm94fSBmcm9tICcuL2xpYi9jb21wcmVzcy1ib3gnO1xuZXhwb3J0IHthZGRTZXJpYWxpemVyfSBmcm9tICcuL2xpYi9zZXJpYWxpemVycyc7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9pbmRleC5qc1xuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvZXhhbXBsZS9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL2V4YW1wbGUvaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL2V4YW1wbGUvaW5kZXguY3NzXCIpO1xuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Nzc1RvU3RyaW5nLmpzXCIpKCk7XG5yZXF1aXJlKFwiL1VzZXJzL2F6cHJvZHVjdGlvbi9Qcm9qZWN0cy9odG1sLXR1aS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9tZXJnZUltcG9ydC5qc1wiKShleHBvcnRzLCByZXF1aXJlKFwiLSEvVXNlcnMvYXpwcm9kdWN0aW9uL1Byb2plY3RzL2h0bWwtdHVpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL2luZGV4LmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG4ubWMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5tZW51X19pdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0tc2hvcnRjdXQge1xcbiAgICBjb2xvcjogI2ZmMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuLnBhbmVsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogIzAwZjtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XFxufVxcblxcbi5wYW5lbF9fY2FwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmZpbGUtbGlzdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmZpbGUsXFxuLmhlYWRlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5maWxlX3N0YXRlX2ZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjMGZmO1xcbiAgICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmZpbGVfc3RhdGVfZm9jdXNlZCAuZmlsZV9fbmFtZSxcXG4uZmlsZV9zdGF0ZV9mb2N1c2VkIC5maWxlX19zaXplIHtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmZpbGVfX25hbWUsXFxuLmZpbGVfX3NpemUsXFxuLmZpbGVfX3RpbWUsXFxuLmhlYWRlcl9fbmFtZSxcXG4uaGVhZGVyX190aW1lLFxcbi5oZWFkZXJfX3NpemUge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5maWxlX19uYW1lLFxcbi5oZWFkZXJfX25hbWUge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZmZmO1xcbn1cXG5cXG4uZmlsZV9fc2l6ZSxcXG4uaGVhZGVyX19zaXplIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2ZmZjtcXG59XFxuXFxuLmZpbGVfX3NpemUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmZpbGVfX3RpbWUsXFxuLmhlYWRlcl9fdGltZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5maWxlX19uYW1lX3R5cGVfZmlsZSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcXG59XFxuXFxuLmZpbGVfc3RhdGVfZm9jdXNlZCAuZmlsZV9fbmFtZV90eXBlX2ZpbGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJfX25hbWUsXFxuLmhlYWRlcl9fdGltZSxcXG4uaGVhZGVyX19zaXplIHtcXG4gICAgY29sb3I6IHllbGxvdztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29uc29sZSB7XFxuICAgIG1hcmdpbi10b3A6IC0zcHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogZ3JleTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG59XFxuXFxuLmNvbnNvbGVfX2lucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxufVxcblxcbi5jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbn1cXG5cXG4uY29udHJvbCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDFweDtcXG59XFxuXFxuLmNvbnRyb2xfX251bWJlcixcXG4uY29udHJvbF9fbmFtZSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uY29udHJvbF9fbnVtYmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb250cm9sX19uYW1lIHtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgYmFja2dyb3VuZDogIzBmZjtcXG4gICAgY29sb3I6ICMwMDA7XFxufVxcblwiLCBcIlwiXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIhLi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2dldE5vcm1hbGl6ZWRDbGllbnRSZWN0T2Z9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtzZWxlY3RTZXJpYWxpemVyRm9yfSBmcm9tICcuL3NlcmlhbGl6ZXJzJztcbmltcG9ydCBUdWlUZXh0IGZyb20gJy4vdHVpLXRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdWlFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25seSBlbGVtZW50IG5vZGUgaXMgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5vZGUub3duZXJEb2N1bWVudCAmJiAhbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3Qgc2VyaWFsaXplIGRldGFjaGVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50YWdOYW1lID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHt7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5hdHRyaWJ1dGVzKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHRoaXMuZ2V0UHJvcGVydGllcyhub2RlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzQWN0aXZlRW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbm9kZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0Nzc1N0eWxlfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Q2xpZW50UmVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSBnZXROb3JtYWxpemVkQ2xpZW50UmVjdE9mKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7KFR1aUVsZW1lbnR8VHVpVGV4dClbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudE9mKG5vZGUpO1xuXG4gICAgICAgIC8vIFRPRE8gY3VycmVudGx5IHNlcmlhbGl6ZXIgaXMgYm91bmQgdG8gSFRNTEVsZW1lbnRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VyaWFsaXplTm9kZSA9IHNlbGVjdFNlcmlhbGl6ZXJGb3Iobm9kZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQHJldHVybnMgeyhUdWlFbGVtZW50fFR1aVRleHQpW119XG4gICAgICovXG4gICAgZ2V0Q29udGVudE9mKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcykucmVkdWNlKChjb250ZW50LCBub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChuZXcgVHVpRWxlbWVudChub2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChuZXcgVHVpVGV4dChub2RlLCB0aGlzLnN0eWxlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKi9cbiAgICBnZXRQcm9wZXJ0aWVzKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBub2RlLnZhbHVlLFxuICAgICAgICAgICAgcmVhZE9ubHk6IG5vZGUucmVhZE9ubHksXG4gICAgICAgICAgICBjaGVja2VkOiBub2RlLmNoZWNrZWQsXG4gICAgICAgICAgICBhdXRvZm9jdXM6IG5vZGUuYXV0b2ZvY3VzLFxuICAgICAgICAgICAgc2VsZWN0aW9uU3RhcnQ6IG5vZGUuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmQ6IG5vZGUuc2VsZWN0aW9uRW5kXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVOb2RlLmNhbGwobnVsbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCkubWFwKChyb3cpID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3R1aS1lbGVtZW50LmpzXG4gKiovIiwiaW1wb3J0IFR1aVN5bWJvbCBmcm9tICcuL3R1aS1zeW1ib2wnO1xuaW1wb3J0IHtpc1NhbWVTdHlsZVN5bWJvbH0gZnJvbSAnLi90dWktc3ltYm9sJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQVxuICogQHBhcmFtIHsoVHVpU3ltYm9sKX0gc3ltYm9sQlxuICogQHJldHVybnMgeyhUdWlTeW1ib2x8bnVsbClbXX1cbiAqL1xuZnVuY3Rpb24gdW5pdGVTeW1ib2xzKHN5bWJvbEEsIHN5bWJvbEIpIHtcbiAgICBpZiAoIXN5bWJvbEEpIHtcbiAgICAgICAgcmV0dXJuIFtudWxsLCBzeW1ib2xCXTtcbiAgICB9XG5cbiAgICBpZiAoaXNTYW1lU3R5bGVTeW1ib2woc3ltYm9sQSwgc3ltYm9sQikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXcgVHVpU3ltYm9sKHN5bWJvbEEuY2hhciArIHN5bWJvbEIuY2hhciwgc3ltYm9sQS5zdHlsZSksIG51bGxdO1xuICAgIH1cblxuICAgIHJldHVybiBbc3ltYm9sQSwgc3ltYm9sQl07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHJlc3NCb3goYm94KSB7XG4gICAgcmV0dXJuIGJveC5tYXAoKHJvdykgPT4ge1xuICAgICAgICByZXR1cm4gcm93LnJlZHVjZSgocm93LCBzeW1ib2wpID0+IHtcbiAgICAgICAgICAgIHZhciBsYXN0U3ltYm9sID0gcm93W3Jvdy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBbdW5pdGVkU3ltYm9scywgZXh0cmFTeW1ib2xdID0gdW5pdGVTeW1ib2xzKGxhc3RTeW1ib2wsIHN5bWJvbCk7XG5cbiAgICAgICAgICAgIGlmICh1bml0ZWRTeW1ib2xzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goZXh0cmFTeW1ib2wpO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh1bml0ZWRTeW1ib2xzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm93W3Jvdy5sZW5ndGggLSAxXSA9IHVuaXRlZFN5bWJvbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChleHRyYVN5bWJvbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKGV4dHJhU3ltYm9sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSwgW10pO1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL2NvbXByZXNzLWJveC5qc1xuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc0lFOSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgOVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU5LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc0lFOSgpO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KCkge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZVRleHQoc291cmNlLCBpZCwgcmVwbGFjZW1lbnQpIHtcclxuXHR2YXIgYm91bmRhcmllcyA9IFtcIi8qKiA+PlwiICsgaWQgKyBcIiAqKi9cIiwgXCIvKiogXCIgKyBpZCArIFwiPDwgKiovXCJdO1xyXG5cdHZhciBzdGFydCA9IHNvdXJjZS5sYXN0SW5kZXhPZihib3VuZGFyaWVzWzBdKTtcclxuXHR2YXIgd3JhcHBlZFJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnRcclxuXHRcdD8gKGJvdW5kYXJpZXNbMF0gKyByZXBsYWNlbWVudCArIGJvdW5kYXJpZXNbMV0pXHJcblx0XHQ6IFwiXCI7XHJcblx0aWYgKHNvdXJjZS5sYXN0SW5kZXhPZihib3VuZGFyaWVzWzBdKSA+PSAwKSB7XHJcblx0XHR2YXIgZW5kID0gc291cmNlLmxhc3RJbmRleE9mKGJvdW5kYXJpZXNbMV0pICsgYm91bmRhcmllc1sxXS5sZW5ndGg7XHJcblx0XHRyZXR1cm4gc291cmNlLnNsaWNlKDAsIHN0YXJ0KSArIHdyYXBwZWRSZXBsYWNlbWVudCArIHNvdXJjZS5zbGljZShlbmQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gc291cmNlICsgd3JhcHBlZFJlcGxhY2VtZW50O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0LCBpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYShKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSArIFwiICovXCI7XHJcblx0XHRcdGNzcyA9IFwiQGltcG9ydCB1cmwoXFxcImRhdGE6dGV4dC9jc3M7YmFzZTY0LFwiICsgYnRvYShjc3MpICsgXCJcXFwiKVwiO1xyXG5cdFx0fSBjYXRjaChlKSB7fVxyXG5cdH1cclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7YW5zaX0gZnJvbSAnLi9hbnNpJztcbmltcG9ydCB7Y2hyb21lfSBmcm9tICcuL2Nocm9tZSc7XG5pbXBvcnQge2h0bWx9IGZyb20gJy4vaHRtbCc7XG5pbXBvcnQge2FzY2lpfSBmcm9tICcuL2FzY2lpJztcblxuZXhwb3J0IGRlZmF1bHQge2Fuc2ksIGNocm9tZSwgaHRtbCwgYXNjaWl9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3JlbmRlcnMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgZGVmYXVsdFNlcmlhbGl6ZXIgZnJvbSAnLi9kZWZhdWx0JztcbmltcG9ydCBpbnB1dFNlcmlhbGl6ZXIgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQge2NhbGN1bGF0ZSBhcyBjYWxjdWxhdGVTcGVjaWZpY2l0eX0gZnJvbSAnc3BlY2lmaWNpdHknO1xuXG4vKipcbiAqIE9yZGVyZWQgYnkgc3BlY2lmaWNpdHksIHRoZSBtb3N0IHNwZWNpZmljIGFuZCBsYXN0IGFkZGVkIGVsZW1lbnQgaXMgYXQgdGhlIGVuZFxuICogQHR5cGUge3tzZWxlY3Rvcjogc3RyaW5nLCBzcGVjaWZpY2l0eTogc3RyaW5nLCBzZXJpYWxpemVyOiBmdW5jdGlvbn1bXX1cbiAqL1xudmFyIHNlcmlhbGl6ZXJzID0gW107XG5cbi8qKlxuICogQHBhcmFtIHt7c3BlY2lmaWNpdHk6IHN0cmluZ319IGFcbiAqIEBwYXJhbSB7e3NwZWNpZmljaXR5OiBzdHJpbmd9fSBiXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBzb3J0QnlTcGVjaWZpY2l0eShhLCBiKSB7XG4gICAgaWYgKGEuc3BlY2lmaWNpdHkgPiBiLnNwZWNpZmljaXR5KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGlmIChhLnNwZWNpZmljaXR5IDwgYi5zcGVjaWZpY2l0eSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG59XG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRnVuY3Rpb25Gb3Iobm9kZSkge1xuICAgIHZhciB2YXJpYW50cyA9IFsnbWF0Y2hlcycsICdtYXRjaGVzU2VsZWN0b3InLCAnbW96TWF0Y2hlc1NlbGVjdG9yJywgJ3dlYmtpdE1hdGNoZXNTZWxlY3RvciddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVbdmFyaWFudHNbaV1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFyaWFudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoIGZ1bmN0aW9uIGlzIG5vdCBmb3VuZCcpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBub2RlLm1hdGNoZXNcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFNlcmlhbGl6ZXJGb3Iobm9kZSkge1xuICAgIHZhciBtYXRjaGVkU2VyaWFsaXplcnMgPSBzZXJpYWxpemVycy5maWx0ZXIoZnVuY3Rpb24gKHNlcmlhbGl6ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVbZ2V0TWF0Y2hGdW5jdGlvbkZvcihub2RlKV0oc2VyaWFsaXplci5zZWxlY3Rvcik7XG4gICAgfSk7XG5cbiAgICAvLyB0aGUgbGFzdCBzZXJpYWxpemVyIGlzIHRoZSBtb3N0IHNwZWNpZmljKGJ5IHNwZWNpZmljaXR5IGFuZCBvcmRlciBvZiBhZGRpbmcpXG4gICAgcmV0dXJuIG1hdGNoZWRTZXJpYWxpemVyc1ttYXRjaGVkU2VyaWFsaXplcnMubGVuZ3RoIC0gMV0uc2VyaWFsaXplcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHNlcmlhbGl6ZXJcbiAqIEBleGFtcGxlXG4gKiAgYWRkKCd0YWJsZScsIHRhYmxlU2VyaWFsaXplcik7XG4gKiAgYWRkKCdpbnB1dFt0eXBlPVwicHJvZ3Jlc3NcIl0nLCBwcm9ncmVzc0JhclNlcmlhbGl6ZXIpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkU2VyaWFsaXplcihzZWxlY3Rvciwgc2VyaWFsaXplcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BzZWxlY3RvcmAgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BzZXJpYWxpemVyYCBzaG91bGQgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNwZWNpZmljaXR5KHNlbGVjdG9yKS5mb3JFYWNoKCh7c2VsZWN0b3IsIHNwZWNpZmljaXR5fSkgPT4ge1xuICAgICAgICBzZXJpYWxpemVycy5wdXNoKHtzZWxlY3Rvciwgc2VyaWFsaXplciwgc3BlY2lmaWNpdHl9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZXJzLnNvcnQoc29ydEJ5U3BlY2lmaWNpdHkpO1xufVxuXG4vLyBNYXRjaGVzIG9uIGFsbCBUdWlFbGVtZW50c1xuYWRkU2VyaWFsaXplcignKicsIGRlZmF1bHRTZXJpYWxpemVyKTtcblxuLy8gTWF0Y2hlcyBhbGwgaW5wdXRzXG5hZGRTZXJpYWxpemVyKCdpbnB1dCxzZWxlY3QsdGV4dGFyZWEnLCBpbnB1dFNlcmlhbGl6ZXIpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3NlcmlhbGl6ZXJzL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vY3NzLWxvYWRlci9jc3NUb1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgaW1wb3J0ZWRMaXN0LCBtZWRpYSkge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBpbXBvcnRlZExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gaW1wb3J0ZWRMaXN0W2ldO1xyXG5cdFx0aWYobWVkaWEgJiYgIWl0ZW1bMl0pXHJcblx0XHRcdGl0ZW1bMl0gPSBtZWRpYTtcclxuXHRcdGVsc2UgaWYobWVkaWEpIHtcclxuXHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWEgKyBcIilcIjtcclxuXHRcdH1cclxuXHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHR9XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2Nzcy1sb2FkZXIvbWVyZ2VJbXBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi9Vc2Vycy9henByb2R1Y3Rpb24vUHJvamVjdHMvaHRtbC10dWkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvY3NzVG9TdHJpbmcuanNcIikoKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50dWktZG9tIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4udHVpLWRvbSAqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi50dWktY2xpIHtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9jc3MtbG9hZGVyIS4uL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqO1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICBwcm9wLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAocHJvcC52YWx1ZSkgcHJvcC53cml0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2VtcHR5U3ltYm9sLCBpc1RyYW5zcGFyZW50Q29sb3J9IGZyb20gJy4vdHVpLXN5bWJvbCc7XG5pbXBvcnQgVHVpU3ltYm9sIGZyb20gJy4vdHVpLXN5bWJvbCc7XG5pbXBvcnQge0JBQ0tHUk9VTkRfQ0hBUkFDVEVSfSBmcm9tICcuL2NoYXJhY3RlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZENsaWVudFJlY3RPZihib3VuZGluZ0JveCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvdHRvbTogTWF0aC5yb3VuZChib3VuZGluZ0JveC5ib3R0b20pLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQoYm91bmRpbmdCb3guaGVpZ2h0KSxcbiAgICAgICAgbGVmdDogTWF0aC5yb3VuZChib3VuZGluZ0JveC5sZWZ0KSxcbiAgICAgICAgcmlnaHQ6IE1hdGgucm91bmQoYm91bmRpbmdCb3gucmlnaHQpLFxuICAgICAgICB0b3A6IE1hdGgucm91bmQoYm91bmRpbmdCb3gudG9wKSxcbiAgICAgICAgd2lkdGg6IE1hdGgucm91bmQoYm91bmRpbmdCb3gud2lkdGgpXG4gICAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0geyp9IGNvbnRlbnRcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gZmlsbEFycmF5KGxlbmd0aCwgY29udGVudCkge1xuICAgIHZhciBhcnJheSA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheVtpXSA9IGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHBhcmFtIHtDbGllbnRSZWN0fSBib3VuZGluZ0JveFxuICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hpZnRCb3goYm94LCBib3VuZGluZ0JveCkge1xuICAgIHZhciB3aWR0aCA9IGJvdW5kaW5nQm94LndpZHRoO1xuICAgIHZhciBsZWZ0ID0gYm91bmRpbmdCb3gubGVmdDtcbiAgICB2YXIgdG9wID0gYm91bmRpbmdCb3gudG9wO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IGZpbGxBcnJheShsZWZ0LCBlbXB0eVN5bWJvbCk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBmaWxsQXJyYXkobGVmdCArIHdpZHRoLCBlbXB0eVN5bWJvbCk7XG5cbiAgICBib3guZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIHJvdy51bnNoaWZ0LmFwcGx5KHJvdywgcGFkZGluZ0xlZnQpO1xuICAgIH0pO1xuXG4gICAgZm9yICg7dG9wLS07KSB7XG4gICAgICAgIGJveC51bnNoaWZ0KHBhZGRpbmdUb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBib3g7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7KFR1aVN5bWJvbCl9IHN5bWJvbEFcbiAqIEBwYXJhbSB7KFR1aVN5bWJvbCl9IHN5bWJvbEJcbiAqIEByZXR1cm5zIHsoVHVpU3ltYm9sKX1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VTeW1ib2xzKHN5bWJvbEEsIHN5bWJvbEIpIHtcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gaXNUcmFuc3BhcmVudENvbG9yKHN5bWJvbEIuc3R5bGUuYmFja2dyb3VuZENvbG9yKSA/XG4gICAgICAgIHN5bWJvbEEuc3R5bGUuYmFja2dyb3VuZENvbG9yIDogc3ltYm9sQi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICB2YXIgY29sb3IgPSBzeW1ib2xCLmNoYXIgPT09IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSID8gc3ltYm9sQS5zdHlsZS5jb2xvciA6IHN5bWJvbEIuc3R5bGUuY29sb3I7XG4gICAgdmFyIGNoYXIgPSBzeW1ib2xCLmNoYXIgPT09IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSID8gc3ltYm9sQS5jaGFyIDogc3ltYm9sQi5jaGFyO1xuXG4gICAgcmV0dXJuIG5ldyBUdWlTeW1ib2woY2hhciwge2NvbG9yLCBiYWNrZ3JvdW5kQ29sb3J9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBsYXllckFcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gbGF5ZXJCXG4gKiBAcmV0dXJucyB7e21heFdpZHRoOiBudW1iZXIsIG1heEhlaWdodDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0TWF4RGltZW5zaW9ucyhsYXllckEsIGxheWVyQikge1xuICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWF4KGxheWVyQVswXSAmJiBsYXllckFbMF0ubGVuZ3RoIHx8IDAsIGxheWVyQlswXSAmJiBsYXllckJbMF0ubGVuZ3RoIHx8IDApO1xuICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heChsYXllckEubGVuZ3RoLCBsYXllckIubGVuZ3RoKTtcblxuICAgIHJldHVybiB7bWF4V2lkdGgsIG1heEhlaWdodH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gbGF5ZXJBXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGxheWVyQlxuICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUJveGVzKGxheWVyQSwgbGF5ZXJCKSB7XG4gICAgdmFyIGJveCA9IFtdO1xuICAgIHZhciB7bWF4V2lkdGgsIG1heEhlaWdodH0gPSBnZXRNYXhEaW1lbnNpb25zKGxheWVyQSwgbGF5ZXJCKTtcblxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbWF4SGVpZ2h0OyB5KyspIHtcbiAgICAgICAgYm94LnB1c2goW10pO1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG1heFdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIGJveFt5XVt4XSA9IG1lcmdlU3ltYm9scyhcbiAgICAgICAgICAgICAgICBsYXllckFbeV0gJiYgbGF5ZXJBW3ldW3hdIHx8IGVtcHR5U3ltYm9sLFxuICAgICAgICAgICAgICAgIGxheWVyQlt5XSAmJiBsYXllckJbeV1beF0gfHwgZW1wdHlTeW1ib2xcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYm94O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRleHRCb3goY29udGVudCwgc3R5bGUpIHtcbiAgICB2YXIgc3ltYm9scyA9IFN0cmluZyhjb250ZW50KS5zcGxpdCgnJykubWFwKChzeW1ib2wpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUdWlTeW1ib2woc3ltYm9sLCBzdHlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW3N5bWJvbHNdO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3V0aWxzLmpzXG4gKiovIiwiaW1wb3J0IHtnZXROb3JtYWxpemVkQ2xpZW50UmVjdE9mLCBzaGlmdEJveCwgcmVuZGVyVGV4dEJveH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1aVRleHQge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHtDc3NTdHlsZX0gW3N0eWxlPW51bGxdXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iobm9kZSwgc3R5bGUgPSBudWxsKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgdGV4dCBub2RlIGlzIHN1cHBvcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFub2RlLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBzZXJpYWxpemUgZGV0YWNoZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhbmdlID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhub2RlKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0NsaWVudFJlY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJvdW5kaW5nQm94ID0gZ2V0Tm9ybWFsaXplZENsaWVudFJlY3RPZihyYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcblxuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGUgfHwgbm9kZS5wYXJlbnROb2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLnBhcmVudE5vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVuZGVyVGV4dEJveCgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpO1xuXG4gICAgICAgIHJldHVybiByZW5kZXJUZXh0Qm94KGNvbnRlbnQsIHRoaXMuc3R5bGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59XG4gICAgICovXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYm91bmRpbmdCb3gud2lkdGggPT09IDAgfHwgdGhpcy5ib3VuZGluZ0JveC5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbW11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNoaWZ0Qm94KHRoaXMuX3JlbmRlclRleHRCb3goKSwgdGhpcy5ib3VuZGluZ0JveCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCkubWFwKChyb3cpID0+IHJvdy5qb2luKCcnKSkuam9pbignXFxuJyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3R1aS10ZXh0LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY29yZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanNcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH0gZWxzZSBpZiAoX2NvcmUuJGZvci5pc0l0ZXJhYmxlKE9iamVjdChhcnIpKSkge1xuICAgIHZhciBfYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY29yZS4kZm9yLmdldEl0ZXJhdG9yKGFyciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICAgIF9hcnIucHVzaChfc3RlcC52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZC10by1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0JBQ0tHUk9VTkRfQ0hBUkFDVEVSfSBmcm9tICcuL2NoYXJhY3RlcnMnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0geyhUdWlTeW1ib2wpfSBzeW1ib2xBXG4gKiBAcGFyYW0geyhUdWlTeW1ib2wpfSBzeW1ib2xCXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVTdHlsZVN5bWJvbChzeW1ib2xBLCBzeW1ib2xCKSB7XG4gICAgcmV0dXJuIHN5bWJvbEEuc3R5bGUuY29sb3IgPT09IHN5bWJvbEIuc3R5bGUuY29sb3IgJiZcbiAgICAgICAgc3ltYm9sQS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IHN5bWJvbEIuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFuc3BhcmVudENvbG9yKGNvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yID09PSAncmdiYSgwLCAwLCAwLCAwKScgfHwgY29sb3IgPT09ICd0cmFuc3BhcmVudCc7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyXG4gKiBAcGFyYW0ge0Nzc1N0eWxlfSBzdHlsZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zcGFyZW50Q2hhcmFjdGVyKGNoYXIsIHN0eWxlKSB7XG4gICAgcmV0dXJuIGNoYXIgPT09IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSICYmIGlzVHJhbnNwYXJlbnRDb2xvcihzdHlsZS5iYWNrZ3JvdW5kQ29sb3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdWlTeW1ib2wge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJcbiAgICAgKiBAcGFyYW0ge3tjb2xvcjogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZ319IHN0eWxlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2hhciwgc3R5bGUpIHtcbiAgICAgICAgaWYgKGlzVHJhbnNwYXJlbnRDaGFyYWN0ZXIoY2hhciwgc3R5bGUpKSB7XG4gICAgICAgICAgICBjaGFyID0gQkFDS0dST1VORF9DSEFSQUNURVI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXIgPSBjaGFyO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFyO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBlbXB0eVN5bWJvbCA9IG5ldyBUdWlTeW1ib2woQkFDS0dST1VORF9DSEFSQUNURVIsIHtcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi90dWktc3ltYm9sLmpzXG4gKiovIiwidmFyIGFuc2lDb2xvcnMgPSB7XG4gICAgLy8gIyBTdHlsZXNcbiAgICBib2xkOiBbJ1xceDFCWzFtJywgJ1xceDFCWzIybSddLFxuICAgIGl0YWxpYzogWydcXHgxQlszbScsICdcXHgxQlsyM20nXSxcbiAgICB1bmRlcmxpbmU6IFsnXFx4MUJbNG0nLCAnXFx4MUJbMjRtJ10sXG4gICAgaW52ZXJzZTogWydcXHgxQls3bScsICdcXHgxQlsyN20nXSxcbiAgICBzdHJpa2V0aHJvdWdoOiBbJ1xceDFCWzltJywgJ1xceDFCWzI5bSddLFxuXG4gICAgLy8gIyBUZXh0IGNvbG9yc1xuICAgIC8vICMjIEdyYXlzY2FsZVxuICAgICdyZ2IoMjU1LCAyNTUsIDI1NSknOiBbJ1xceDFCWzM3bScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDEyOCwgMTI4LCAxMjgpJzogWydcXHgxQls5MG0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigwLCAwLCAwKSc6IFsnXFx4MUJbMzBtJywgJ1xceDFCWzM5bSddLFxuICAgIC8vICMjIENvbG9yc1xuICAgICdyZ2IoMCwgMCwgMjU1KSc6IFsnXFx4MUJbMzRtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2IoMCwgMjU1LCAyNTUpJzogWydcXHgxQlszNm0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigwLCAxMjgsIDApJzogWydcXHgxQlszMm0nLCAnXFx4MUJbMzltJ10sXG4gICAgJ3JnYigyNTUsIDAsIDI1NSknOiBbJ1xceDFCWzM1bScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDI1NSwgMCwgMCknOiBbJ1xceDFCWzMxbScsICdcXHgxQlszOW0nXSxcbiAgICAncmdiKDI1NSwgMjU1LCAwKSc6IFsnXFx4MUJbMzNtJywgJ1xceDFCWzM5bSddLFxuICAgICdyZ2JhKDAsIDAsIDAsIDApJzogWycnLCAnJ10sXG5cbiAgICAvLyAjIEJhY2tncm91bmQgY29sb3JzXG4gICAgLy8gIyMgR3JheXNjYWxlXG4gICAgJ3JnYigyNTUsIDI1NSwgMjU1KUJHJzogWydcXHgxQls0N20nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigwLCAwLCAwKUJHJzogWydcXHgxQls0OTs1OzhtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMTI4LCAxMjgsIDEyOClCRyc6IFsnXFx4MUJbNDBtJywgJ1xceDFCWzQ5bSddLFxuICAgIC8vICMjIENvbG9yc1xuICAgICdyZ2IoMCwgMCwgMjU1KUJHJzogWydcXHgxQls0NG0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigwLCAyNTUsIDI1NSlCRyc6IFsnXFx4MUJbNDZtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMCwgMTI4LCAwKUJHJzogWydcXHgxQls0Mm0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigyNTUsIDAsIDI1NSlCRyc6IFsnXFx4MUJbNDVtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2IoMjU1LCAwLCAwKUJHJzogWydcXHgxQls0MW0nLCAnXFx4MUJbNDltJ10sXG4gICAgJ3JnYigyNTUsIDI1NSwgMClCRyc6IFsnXFx4MUJbNDNtJywgJ1xceDFCWzQ5bSddLFxuICAgICdyZ2JhKDAsIDAsIDAsIDApQkcnOiBbJycsICcnXVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXX0gc3R5bGVcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiB3cmFwU3RyaW5nKHN0cmluZywgc3R5bGUpIHtcbiAgICB2YXIgcGFpciA9IGFuc2lDb2xvcnNbc3R5bGVdO1xuXG4gICAgaWYgKCFwYWlyKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhaXJbMF0gKyBzdHJpbmcgKyBwYWlyWzFdO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIGFuc2lTeW1ib2woc3ltYm9sKSB7XG4gICAgdmFyIGNoYXJhY3RlciA9IHdyYXBTdHJpbmcoc3ltYm9sLmNoYXIsIHN5bWJvbC5zdHlsZS5jb2xvcik7XG4gICAgY2hhcmFjdGVyID0gd3JhcFN0cmluZyhjaGFyYWN0ZXIsIHN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgKyAnQkcnKTtcblxuICAgIHJldHVybiBjaGFyYWN0ZXI7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn0gYm94XG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYW5zaShib3gpIHtcbiAgICByZXR1cm4gYm94Lm1hcCgocm93KSA9PiByb3cubWFwKGFuc2lTeW1ib2wpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9yZW5kZXJzL2Fuc2kuanNcbiAqKi8iLCIvKipcbiAqXG4gKiBAcGFyYW0ge1R1aVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJucyB7c3RyaW5nW119XG4gKi9cbmZ1bmN0aW9uIGNocm9tZVN5bWJvbChzeW1ib2wpIHtcbiAgICB2YXIgY2hhciA9IGAlYyR7c3ltYm9sLmNoYXJ9YDtcbiAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgIGlmIChzeW1ib2wuc3R5bGUuY29sb3IpIHtcbiAgICAgICAgc3R5bGUgKz0gYGNvbG9yOiR7c3ltYm9sLnN0eWxlLmNvbG9yfTtgO1xuICAgIH1cblxuICAgIGlmIChzeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7c3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvcn07YDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2NoYXIsIHN0eWxlXTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+fSBib3hcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNocm9tZShib3gpIHtcbiAgICB2YXIgY2hhcmFjdGVycyA9IFtdO1xuICAgIHZhciBzdHlsZXMgPSBbXTtcblxuICAgIGJveC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgdmFyIHJvd0NoYXJhY3RlcnMgPSAnJztcbiAgICAgICAgdmFyIHJvd1N0eWxlcyA9IFtdO1xuXG4gICAgICAgIHJvdy5mb3JFYWNoKChzeW1ib2wpID0+IHtcbiAgICAgICAgICAgIHZhciBbY2hhcmFjdGVyLCBzdHlsZV0gPSBjaHJvbWVTeW1ib2woc3ltYm9sKTtcblxuICAgICAgICAgICAgcm93Q2hhcmFjdGVycyArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICByb3dTdHlsZXMucHVzaChzdHlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoYXJhY3RlcnMucHVzaChyb3dDaGFyYWN0ZXJzKTtcbiAgICAgICAgc3R5bGVzLnB1c2guYXBwbHkoc3R5bGVzLCByb3dTdHlsZXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFtjaGFyYWN0ZXJzLmpvaW4oJ1xcbicpXS5jb25jYXQoc3R5bGVzKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9yZW5kZXJzL2Nocm9tZS5qc1xuICoqLyIsIi8qKlxuICpcbiAqIEBwYXJhbSB7VHVpU3ltYm9sfSBzeW1ib2xcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuZnVuY3Rpb24gaHRtbFN5bWJvbChzeW1ib2wpIHtcbiAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgIGlmIChzeW1ib2wuc3R5bGUuY29sb3IpIHtcbiAgICAgICAgc3R5bGUgKz0gYGNvbG9yOiR7c3ltYm9sLnN0eWxlLmNvbG9yfTtgO1xuICAgIH1cblxuICAgIGlmIChzeW1ib2wuc3R5bGUuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHN0eWxlICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiR7c3ltYm9sLnN0eWxlLmJhY2tncm91bmRDb2xvcn07YDtcbiAgICB9XG5cbiAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwiJHtzdHlsZX1cIj4ke3N5bWJvbC5jaGFyfTwvc3Bhbj5gO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoYm94KSB7XG4gICAgcmV0dXJuIGJveC5tYXAoKHJvdykgPT4gcm93Lm1hcChodG1sU3ltYm9sKS5qb2luKCcnKSkuam9pbignXFxuJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9saWIvcmVuZGVycy9odG1sLmpzXG4gKiovIiwiLyoqXG4gKlxuICogQHBhcmFtIHtUdWlTeW1ib2x9IHN5bWJvbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gYXNjaWlTeW1ib2woc3ltYm9sKSB7XG4gICAgcmV0dXJuIHN5bWJvbC5jaGFyO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PChUdWlTeW1ib2wpPj59IGJveFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzY2lpKGJveCkge1xuICAgIHJldHVybiBib3gubWFwKChyb3cpID0+IHJvdy5tYXAoYXNjaWlTeW1ib2wpLmpvaW4oJycpKS5qb2luKCdcXG4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9yZW5kZXJzL2FzY2lpLmpzXG4gKiovIiwiaW1wb3J0IHttZXJnZUJveGVzLCBzaGlmdEJveH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHtib3JkZXJTY2hlbWV9IGZyb20gJy4vYm9yZGVyLXNjaGVtZSc7XG5pbXBvcnQgVHVpU3ltYm9sIGZyb20gJy4uLy4uL3R1aS1zeW1ib2wnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3t4OiBzdHJpbmcsIHk6IHN0cmluZywgdG9wOiBzdHJpbmcsIGxlZnQ6IHN0cmluZywgYm90dG9tOiBzdHJpbmcsIHJpZ2h0OiBzdHJpbmd9fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cENoYXJhY3RlcihvcHRpb25zLCBzY2hlbWUpIHtcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gT2JqZWN0LmtleXMoc2NoZW1lKVswXTtcbiAgICB2YXIgdmFsdWUgPSBzY2hlbWVbcHJvcGVydHlOYW1lXTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHZhbHVlW29wdGlvbnNbcHJvcGVydHlOYW1lXV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvb2t1cENoYXJhY3RlcihvcHRpb25zLCB2YWx1ZSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7e3g6IHN0cmluZywgeTogc3RyaW5nfX0gb3B0aW9uc1xuICogQHBhcmFtIHtDc3NTdHlsZX0gc3R5bGVcbiAqIEByZXR1cm5zIHt7Y29sb3I6IHN0cmluZywgYmFja2dyb3VuZENvbG9yOiBzdHJpbmd9fVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cENoYXJhY3RlclN0eWxlKG9wdGlvbnMsIHN0eWxlKSB7XG4gICAgdmFyIGNvbG9yID0gc3R5bGUuY29sb3I7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcblxuICAgIGlmIChvcHRpb25zLnggPT09ICdtaW4nKSB7XG4gICAgICAgIGNvbG9yID0gc3R5bGUuYm9yZGVyTGVmdENvbG9yO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnggPT09ICdtYXgnKSB7XG4gICAgICAgIGNvbG9yID0gc3R5bGUuYm9yZGVyUmlnaHRDb2xvcjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy55ID09PSAnbWluJyAmJiBvcHRpb25zLnggPT09ICdtaWQnKSB7XG4gICAgICAgIGNvbG9yID0gc3R5bGUuYm9yZGVyVG9wQ29sb3I7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMueSA9PT0gJ21heCcgJiYgb3B0aW9ucy54ID09PSAnbWlkJykge1xuICAgICAgICBjb2xvciA9IHN0eWxlLmJvcmRlckJvdHRvbUNvbG9yO1xuICAgIH1cblxuICAgIHJldHVybiB7Y29sb3IsIGJhY2tncm91bmRDb2xvcn07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7e3g6IHN0cmluZywgeTogc3RyaW5nLCB0b3A6IHN0cmluZywgbGVmdDogc3RyaW5nLCBib3R0b206IHN0cmluZywgcmlnaHQ6IHN0cmluZ319IG9wdGlvbnNcbiAqIEBwYXJhbSB7Q3NzU3R5bGV9IGVsZW1lbnRTdHlsZVxuICogQHJldHVybnMge1R1aVN5bWJvbH1cbiAqL1xuZnVuY3Rpb24gZnJvbVBvc2l0aW9uQW5kU3R5bGUob3B0aW9ucywgZWxlbWVudFN0eWxlKSB7XG4gICAgdmFyIGNoYXIgPSBsb29rdXBDaGFyYWN0ZXIob3B0aW9ucywgYm9yZGVyU2NoZW1lKTtcbiAgICB2YXIgY2hhcmFjdGVyU3R5bGUgPSBsb29rdXBDaGFyYWN0ZXJTdHlsZShvcHRpb25zLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgcmV0dXJuIG5ldyBUdWlTeW1ib2woY2hhciwgY2hhcmFjdGVyU3R5bGUpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1R1aUVsZW1lbnR9IHR1aUVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHJldHVybnMge1R1aVN5bWJvbH1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJveENoYXJhY3RlckF0KHR1aUVsZW1lbnQsIHgsIHkpIHtcbiAgICAvKiBqc2hpbnQgbWF4Y29tcGxleGl0eTogMTAgKi9cbiAgICB2YXIgd2lkdGggPSB0dWlFbGVtZW50LmJvdW5kaW5nQm94LndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSB0dWlFbGVtZW50LmJvdW5kaW5nQm94LmhlaWdodDtcblxuICAgIHZhciBwb3NpdGlvbiA9IHtcbiAgICAgICAgeDogeCA9PT0gMCA/ICdtaW4nIDogeCA9PT0gd2lkdGggLSAxID8gJ21heCcgOiAnbWlkJyxcbiAgICAgICAgeTogeSA9PT0gMCA/ICdtaW4nIDogeSA9PT0gaGVpZ2h0IC0gMSA/ICdtYXgnIDogJ21pZCcsXG4gICAgICAgIHRvcDogcGFyc2VJbnQodHVpRWxlbWVudC5zdHlsZS5ib3JkZXJUb3BXaWR0aCkgPyAneWVzJyA6ICdubycsXG4gICAgICAgIHJpZ2h0OiBwYXJzZUludCh0dWlFbGVtZW50LnN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpID8gJ3llcycgOiAnbm8nLFxuICAgICAgICBib3R0b206IHBhcnNlSW50KHR1aUVsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpID8gJ3llcycgOiAnbm8nLFxuICAgICAgICBsZWZ0OiBwYXJzZUludCh0dWlFbGVtZW50LnN0eWxlLmJvcmRlckxlZnRXaWR0aCkgPyAneWVzJyA6ICdubydcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZyb21Qb3NpdGlvbkFuZFN0eWxlKHBvc2l0aW9uLCB0dWlFbGVtZW50LnN0eWxlKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtUdWlFbGVtZW50fSB0dWlFbGVtZW50XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckJveCh0dWlFbGVtZW50KSB7XG4gICAgdmFyIGJveCA9IFtdO1xuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdHVpRWxlbWVudC5ib3VuZGluZ0JveC5oZWlnaHQ7IHkrKykge1xuICAgICAgICBib3gucHVzaChbXSk7XG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdHVpRWxlbWVudC5ib3VuZGluZ0JveC53aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICBib3hbeV1beF0gPSBib3hDaGFyYWN0ZXJBdCh0dWlFbGVtZW50LCB4LCB5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib3g7XG59XG5cbi8qKlxuICpcbiAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxBcnJheTwoVHVpU3ltYm9sKT4+Pn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbnRlbnQodHVpRWxlbWVudCkge1xuICAgIHJldHVybiB0dWlFbGVtZW50LmNvbnRlbnQubWFwKChpdGVtKSA9PiBpdGVtLnRvQXJyYXkoKSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUdWlFbGVtZW50fSB0dWlFbGVtZW50XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR1aUVsZW1lbnQpIHtcbiAgICB2YXIgYm94ID0gc2hpZnRCb3gocmVuZGVyQm94KHR1aUVsZW1lbnQpLCB0dWlFbGVtZW50LmJvdW5kaW5nQm94KTtcbiAgICB2YXIgY29udGVudCA9IHJlbmRlckNvbnRlbnQodHVpRWxlbWVudCk7XG5cbiAgICByZXR1cm4gW2JveF0uY29uY2F0KGNvbnRlbnQpLnJlZHVjZShtZXJnZUJveGVzLCBbXSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9saWIvc2VyaWFsaXplcnMvZGVmYXVsdC9pbmRleC5qc1xuICoqLyIsImltcG9ydCB7bWVyZ2VCb3hlcywgc2hpZnRCb3gsIHJlbmRlclRleHRCb3h9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBkZWZhdWx0U2VyaWFsaXplciBmcm9tICcuLi9kZWZhdWx0JztcblxuLyoqXG4gKiBNYXggd2lkdGggb2YgaW5wdXQgdGV4dCBpbiB2aWV3cG9ydFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZVxuICogQHBhcmFtIHtDbGllbnRSZWN0fSBib3VuZGluZ0JveFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0SW5wdXRNYXhDb250ZW50V2lkdGgoe3N0eWxlLCBib3VuZGluZ0JveH0pIHtcbiAgICB2YXIgbGVmdElucHV0Qm9yZGVyID0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHBhcnNlSW50KHN0eWxlLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgcmlnaHRJbnB1dEJvcmRlciA9IHBhcnNlSW50KHN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpICsgcGFyc2VJbnQoc3R5bGUucGFkZGluZ1JpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZGluZ0JveC53aWR0aCAtIGxlZnRJbnB1dEJvcmRlciAtIHJpZ2h0SW5wdXRCb3JkZXI7XG59XG5cbi8qKlxuICogUmV0dXJuIGJvdW5kaW5nIGJveCBvZiBpbnB1dCdzIHZhbHVlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0eWxlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9Ym91bmRpbmdCb3hcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge0NsaWVudFJlY3R9XG4gKi9cbmZ1bmN0aW9uIGdldElucHV0VGV4dEJvdW5kaW5nQm94KHtzdHlsZSwgYm91bmRpbmdCb3gsIHByb3BlcnRpZXM6IHt2YWx1ZX19KSB7XG4gICAgdmFyIHdpZHRoID0gTnVtYmVyKHZhbHVlLmxlbmd0aCk7XG4gICAgdmFyIGhlaWdodCA9IDE7XG4gICAgdmFyIGxlZnQgPSBib3VuZGluZ0JveC5sZWZ0O1xuICAgIHZhciB0b3AgPSBib3VuZGluZ0JveC50b3A7XG5cbiAgICBsZWZ0ICs9IHBhcnNlSW50KHN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgbGVmdCArPSBwYXJzZUludChzdHlsZS5wYWRkaW5nTGVmdCk7XG5cbiAgICB0b3AgKz0gcGFyc2VJbnQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICAgIHRvcCArPSBwYXJzZUludChzdHlsZS5wYWRkaW5nVG9wKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQsXG4gICAgICAgIHRvcCxcbiAgICAgICAgYm90dG9tOiB0b3AgKyBoZWlnaHQsXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgcmFuZ2Ugd2hpY2ggc2hvdWxkIGZpdCBpbnRvIGlucHV0XG4gKlxuICogQHBhcmFtIHtUdWlFbGVtZW50fSB0dWlFbGVtZW50XG4gKiBAcmV0dXJucyB7e3N0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyfX1cbiAqL1xuZnVuY3Rpb24gZ2V0VmlzaWJsZVRleHRSYW5nZSh0dWlFbGVtZW50KSB7XG4gICAgLyoganNoaW50IG1heHN0YXRlbWVudHM6IDIwICovXG4gICAgdmFyIHt2YWx1ZSwgc2VsZWN0aW9uRW5kfSA9IHR1aUVsZW1lbnQucHJvcGVydGllcztcbiAgICB2YXIgaW5wdXRDb250ZW50V2lkdGggPSBnZXRJbnB1dE1heENvbnRlbnRXaWR0aCh0dWlFbGVtZW50KTtcbiAgICB2YXIgaGFsZk9mSW5wdXRDb250ZW50V2lkdGggPSBpbnB1dENvbnRlbnRXaWR0aCAvIDI7XG4gICAgdmFyIHN0YXJ0ID0gTWF0aC5mbG9vcihzZWxlY3Rpb25FbmQgLSBoYWxmT2ZJbnB1dENvbnRlbnRXaWR0aCkgKyAxO1xuICAgIHZhciBlbmQgPSBNYXRoLmNlaWwoc2VsZWN0aW9uRW5kICsgaGFsZk9mSW5wdXRDb250ZW50V2lkdGgpICsgMTtcblxuICAgIC8vIEN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBib3hcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSBzZWxlY3Rpb25FbmQgJiYgdmFsdWUubGVuZ3RoICsgMSA+IGlucHV0Q29udGVudFdpZHRoKSB7XG4gICAgICAgIGVuZCAtPSAxO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgZW5kIC09IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGVuZCA+IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBzdGFydCAtPSAoZW5kIC0gdmFsdWUubGVuZ3RoKTtcbiAgICAgICAgZW5kID0gdmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgZW5kOiBlbmRcbiAgICB9O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc3R5bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IHNlbGVjdGlvbkVuZFxuICogQHBhcmFtIHtDbGllbnRSZWN0fSB0ZXh0Qm91bmRpbmdCb3hcbiAqIEBwYXJhbSB7b2JqZWN0fSB2aXNpYmxlVGV4dFJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gdmlzaWJsZVRleHRSYW5nZS5zdGFydFxuICogQHBhcmFtIHtudW1iZXJ9IHZpc2libGVUZXh0UmFuZ2UuZW5kXG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8VHVpU3ltYm9sPj59XG4gKi9cbmZ1bmN0aW9uIHJlbmRlckN1cnNvckJveCh7c3R5bGUsIHByb3BlcnRpZXM6IHt2YWx1ZSwgc2VsZWN0aW9uRW5kfX0sIHRleHRCb3VuZGluZ0JveCwgdmlzaWJsZVRleHRSYW5nZSkge1xuICAgIC8vIFJlbmRlciBjdXJzb3JcbiAgICB2YXIgY3Vyc29yV2lkdGggPSAxO1xuICAgIHZhciB0ZXh0QXRDdXJzb3IgPSB2YWx1ZS5zdWJzdHIoc2VsZWN0aW9uRW5kLCBjdXJzb3JXaWR0aCk7XG5cbiAgICAvLyBFbmQgb2YgdGV4dFxuICAgIGlmICh0ZXh0QXRDdXJzb3IgPT09ICcnKSB7XG4gICAgICAgIHRleHRBdEN1cnNvciA9ICcgJztcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yTGVmdCA9IHRleHRCb3VuZGluZ0JveC5sZWZ0ICsgc2VsZWN0aW9uRW5kIC0gdmlzaWJsZVRleHRSYW5nZS5zdGFydDtcbiAgICB2YXIgY3Vyc29yUmlnaHQgPSBjdXJzb3JMZWZ0ICsgY3Vyc29yV2lkdGg7XG5cbiAgICB2YXIgY3Vyc29yQm91bmRpbmdCb3ggPSB7XG4gICAgICAgIGxlZnQ6IGN1cnNvckxlZnQsXG4gICAgICAgIHRvcDogdGV4dEJvdW5kaW5nQm94LnRvcCxcbiAgICAgICAgYm90dG9tOiB0ZXh0Qm91bmRpbmdCb3guYm90dG9tLFxuICAgICAgICByaWdodDogY3Vyc29yUmlnaHQsXG4gICAgICAgIGhlaWdodDogdGV4dEJvdW5kaW5nQm94LmhlaWdodCxcbiAgICAgICAgd2lkdGg6IGN1cnNvcldpZHRoXG4gICAgfTtcblxuICAgIC8vIEludmVydCBiYWNrZ3JvdW5kIGFuZCB0ZXh0IGNvbG9yXG4gICAgdmFyIGN1cnNvckJveCA9IHJlbmRlclRleHRCb3godGV4dEF0Q3Vyc29yLCB7XG4gICAgICAgIGNvbG9yOiBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc3R5bGUuY29sb3JcbiAgICB9KTtcblxuICAgIHJldHVybiBzaGlmdEJveChjdXJzb3JCb3gsIGN1cnNvckJvdW5kaW5nQm94KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0eWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7Q2xpZW50UmVjdH0gdGV4dEJvdW5kaW5nQm94XG4gKiBAcGFyYW0ge29iamVjdH0gdmlzaWJsZVRleHRSYW5nZVxuICogQHBhcmFtIHtudW1iZXJ9IHZpc2libGVUZXh0UmFuZ2Uuc3RhcnRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2aXNpYmxlVGV4dFJhbmdlLmVuZFxuICogQHJldHVybnMge0FycmF5PEFycmF5PFR1aVN5bWJvbD4+fVxuICovXG5mdW5jdGlvbiByZW5kZXJJbnB1dFRleHRCb3goe3N0eWxlLCBwcm9wZXJ0aWVzOiB7dmFsdWV9fSwgdGV4dEJvdW5kaW5nQm94LCB2aXNpYmxlVGV4dFJhbmdlKSB7XG4gICAgdmFyIHRleHRJblZpZXdwb3J0ID0gdmFsdWUuc2xpY2UodmlzaWJsZVRleHRSYW5nZS5zdGFydCwgdmlzaWJsZVRleHRSYW5nZS5lbmQpO1xuICAgIHZhciB0ZXh0Qm94ID0gcmVuZGVyVGV4dEJveCh0ZXh0SW5WaWV3cG9ydCwgc3R5bGUpO1xuXG4gICAgcmV0dXJuIHNoaWZ0Qm94KHRleHRCb3gsIHRleHRCb3VuZGluZ0JveCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtUdWlFbGVtZW50fSB0dWlFbGVtZW50XG4gKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8KFR1aVN5bWJvbCk+Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR1aUVsZW1lbnQpIHtcbiAgICAvLyBDb21wdXRlIGNvbW1vbiBtZWFzdXJlbWVudHNcbiAgICB2YXIgdGV4dEJvdW5kaW5nQm94ID0gZ2V0SW5wdXRUZXh0Qm91bmRpbmdCb3godHVpRWxlbWVudCk7XG4gICAgdmFyIHZpc2libGVUZXh0UmFuZ2UgPSBnZXRWaXNpYmxlVGV4dFJhbmdlKHR1aUVsZW1lbnQpO1xuXG4gICAgLy8gUmVuZGVyXG4gICAgdmFyIGlucHV0Qm94ID0gZGVmYXVsdFNlcmlhbGl6ZXIodHVpRWxlbWVudCk7XG4gICAgdmFyIHRleHRCb3ggPSByZW5kZXJJbnB1dFRleHRCb3godHVpRWxlbWVudCwgdGV4dEJvdW5kaW5nQm94LCB2aXNpYmxlVGV4dFJhbmdlKTtcbiAgICB2YXIgY3Vyc29yQm94ID0gcmVuZGVyQ3Vyc29yQm94KHR1aUVsZW1lbnQsIHRleHRCb3VuZGluZ0JveCwgdmlzaWJsZVRleHRSYW5nZSk7XG5cbiAgICBpbnB1dEJveCA9IG1lcmdlQm94ZXMoaW5wdXRCb3gsIHRleHRCb3gpO1xuICAgIGlucHV0Qm94ID0gbWVyZ2VCb3hlcyhpbnB1dEJveCwgY3Vyc29yQm94KTtcblxuICAgIHJldHVybiBpbnB1dEJveDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9zZXJpYWxpemVycy9pbnB1dC9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX0NIQVJBQ1RFUiA9ICcgJztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2xpYi9jaGFyYWN0ZXJzLmpzXG4gKiovIiwiLyoqXG4gKiBDb3JlLmpzIDAuNi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qc1xuICogTGljZW5zZTogaHR0cDovL3JvY2subWl0LWxpY2Vuc2Uub3JnXG4gKiDCqSAyMDE1IERlbmlzIFB1c2hrYXJldlxuICovXG4hZnVuY3Rpb24oZ2xvYmFsLCBmcmFtZXdvcmssIHVuZGVmaW5lZCl7XG4ndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvbW1vbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLy8gU2hvcnRjdXRzIGZvciBbW0NsYXNzXV0gJiBwcm9wZXJ0eSBuYW1lc1xyXG52YXIgT0JKRUNUICAgICAgICAgID0gJ09iamVjdCdcclxuICAsIEZVTkNUSU9OICAgICAgICA9ICdGdW5jdGlvbidcclxuICAsIEFSUkFZICAgICAgICAgICA9ICdBcnJheSdcclxuICAsIFNUUklORyAgICAgICAgICA9ICdTdHJpbmcnXHJcbiAgLCBOVU1CRVIgICAgICAgICAgPSAnTnVtYmVyJ1xyXG4gICwgUkVHRVhQICAgICAgICAgID0gJ1JlZ0V4cCdcclxuICAsIERBVEUgICAgICAgICAgICA9ICdEYXRlJ1xyXG4gICwgTUFQICAgICAgICAgICAgID0gJ01hcCdcclxuICAsIFNFVCAgICAgICAgICAgICA9ICdTZXQnXHJcbiAgLCBXRUFLTUFQICAgICAgICAgPSAnV2Vha01hcCdcclxuICAsIFdFQUtTRVQgICAgICAgICA9ICdXZWFrU2V0J1xyXG4gICwgU1lNQk9MICAgICAgICAgID0gJ1N5bWJvbCdcclxuICAsIFBST01JU0UgICAgICAgICA9ICdQcm9taXNlJ1xyXG4gICwgTUFUSCAgICAgICAgICAgID0gJ01hdGgnXHJcbiAgLCBBUkdVTUVOVFMgICAgICAgPSAnQXJndW1lbnRzJ1xyXG4gICwgUFJPVE9UWVBFICAgICAgID0gJ3Byb3RvdHlwZSdcclxuICAsIENPTlNUUlVDVE9SICAgICA9ICdjb25zdHJ1Y3RvcidcclxuICAsIFRPX1NUUklORyAgICAgICA9ICd0b1N0cmluZydcclxuICAsIFRPX1NUUklOR19UQUcgICA9IFRPX1NUUklORyArICdUYWcnXHJcbiAgLCBUT19MT0NBTEUgICAgICAgPSAndG9Mb2NhbGVTdHJpbmcnXHJcbiAgLCBIQVNfT1dOICAgICAgICAgPSAnaGFzT3duUHJvcGVydHknXHJcbiAgLCBGT1JfRUFDSCAgICAgICAgPSAnZm9yRWFjaCdcclxuICAsIElURVJBVE9SICAgICAgICA9ICdpdGVyYXRvcidcclxuICAsIEZGX0lURVJBVE9SICAgICA9ICdAQCcgKyBJVEVSQVRPUlxyXG4gICwgUFJPQ0VTUyAgICAgICAgID0gJ3Byb2Nlc3MnXHJcbiAgLCBDUkVBVEVfRUxFTUVOVCAgPSAnY3JlYXRlRWxlbWVudCdcclxuICAvLyBBbGlhc2VzIGdsb2JhbCBvYmplY3RzIGFuZCBwcm90b3R5cGVzXHJcbiAgLCBGdW5jdGlvbiAgICAgICAgPSBnbG9iYWxbRlVOQ1RJT05dXHJcbiAgLCBPYmplY3QgICAgICAgICAgPSBnbG9iYWxbT0JKRUNUXVxyXG4gICwgQXJyYXkgICAgICAgICAgID0gZ2xvYmFsW0FSUkFZXVxyXG4gICwgU3RyaW5nICAgICAgICAgID0gZ2xvYmFsW1NUUklOR11cclxuICAsIE51bWJlciAgICAgICAgICA9IGdsb2JhbFtOVU1CRVJdXHJcbiAgLCBSZWdFeHAgICAgICAgICAgPSBnbG9iYWxbUkVHRVhQXVxyXG4gICwgRGF0ZSAgICAgICAgICAgID0gZ2xvYmFsW0RBVEVdXHJcbiAgLCBNYXAgICAgICAgICAgICAgPSBnbG9iYWxbTUFQXVxyXG4gICwgU2V0ICAgICAgICAgICAgID0gZ2xvYmFsW1NFVF1cclxuICAsIFdlYWtNYXAgICAgICAgICA9IGdsb2JhbFtXRUFLTUFQXVxyXG4gICwgV2Vha1NldCAgICAgICAgID0gZ2xvYmFsW1dFQUtTRVRdXHJcbiAgLCBTeW1ib2wgICAgICAgICAgPSBnbG9iYWxbU1lNQk9MXVxyXG4gICwgTWF0aCAgICAgICAgICAgID0gZ2xvYmFsW01BVEhdXHJcbiAgLCBUeXBlRXJyb3IgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXHJcbiAgLCBSYW5nZUVycm9yICAgICAgPSBnbG9iYWwuUmFuZ2VFcnJvclxyXG4gICwgc2V0VGltZW91dCAgICAgID0gZ2xvYmFsLnNldFRpbWVvdXRcclxuICAsIHNldEltbWVkaWF0ZSAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcclxuICAsIGNsZWFySW1tZWRpYXRlICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxyXG4gICwgcGFyc2VJbnQgICAgICAgID0gZ2xvYmFsLnBhcnNlSW50XHJcbiAgLCBpc0Zpbml0ZSAgICAgICAgPSBnbG9iYWwuaXNGaW5pdGVcclxuICAsIHByb2Nlc3MgICAgICAgICA9IGdsb2JhbFtQUk9DRVNTXVxyXG4gICwgbmV4dFRpY2sgICAgICAgID0gcHJvY2VzcyAmJiBwcm9jZXNzLm5leHRUaWNrXHJcbiAgLCBkb2N1bWVudCAgICAgICAgPSBnbG9iYWwuZG9jdW1lbnRcclxuICAsIGh0bWwgICAgICAgICAgICA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICwgbmF2aWdhdG9yICAgICAgID0gZ2xvYmFsLm5hdmlnYXRvclxyXG4gICwgZGVmaW5lICAgICAgICAgID0gZ2xvYmFsLmRlZmluZVxyXG4gICwgY29uc29sZSAgICAgICAgID0gZ2xvYmFsLmNvbnNvbGUgfHwge31cclxuICAsIEFycmF5UHJvdG8gICAgICA9IEFycmF5W1BST1RPVFlQRV1cclxuICAsIE9iamVjdFByb3RvICAgICA9IE9iamVjdFtQUk9UT1RZUEVdXHJcbiAgLCBGdW5jdGlvblByb3RvICAgPSBGdW5jdGlvbltQUk9UT1RZUEVdXHJcbiAgLCBJbmZpbml0eSAgICAgICAgPSAxIC8gMFxyXG4gICwgRE9UICAgICAgICAgICAgID0gJy4nO1xyXG5cclxuLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxyXG5mdW5jdGlvbiBpc09iamVjdChpdCl7XHJcbiAgcmV0dXJuIGl0ICE9PSBudWxsICYmICh0eXBlb2YgaXQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGl0ID09ICdmdW5jdGlvbicpO1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe1xyXG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJztcclxufVxyXG4vLyBOYXRpdmUgZnVuY3Rpb24/XHJcbnZhciBpc05hdGl2ZSA9IGN0eCgvLi8udGVzdCwgL1xcW25hdGl2ZSBjb2RlXFxdXFxzKlxcfVxccyokLywgMSk7XHJcblxyXG4vLyBPYmplY3QgaW50ZXJuYWwgW1tDbGFzc11dIG9yIHRvU3RyaW5nVGFnXHJcbi8vIGh0dHA6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcclxudmFyIHRvU3RyaW5nID0gT2JqZWN0UHJvdG9bVE9fU1RSSU5HXTtcclxuZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcoaXQsIHRhZywgc3RhdCl7XHJcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0W1BST1RPVFlQRV0sIFNZTUJPTF9UQUcpKWhpZGRlbihpdCwgU1lNQk9MX1RBRywgdGFnKTtcclxufVxyXG5mdW5jdGlvbiBjb2YoaXQpe1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XHJcbn1cclxuZnVuY3Rpb24gY2xhc3NvZihpdCl7XHJcbiAgdmFyIE8sIFQ7XHJcbiAgcmV0dXJuIGl0ID09IHVuZGVmaW5lZCA/IGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6ICdOdWxsJ1xyXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1NZTUJPTF9UQUddKSA9PSAnc3RyaW5nJyA/IFQgOiBjb2YoTyk7XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uXHJcbnZhciBjYWxsICA9IEZ1bmN0aW9uUHJvdG8uY2FsbFxyXG4gICwgYXBwbHkgPSBGdW5jdGlvblByb3RvLmFwcGx5XHJcbiAgLCBSRUZFUkVOQ0VfR0VUO1xyXG4vLyBQYXJ0aWFsIGFwcGx5XHJcbmZ1bmN0aW9uIHBhcnQoLyogLi4uYXJncyAqLyl7XHJcbiAgdmFyIGZuICAgICA9IGFzc2VydEZ1bmN0aW9uKHRoaXMpXHJcbiAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgYXJncyAgID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgLCBpICAgICAgPSAwXHJcbiAgICAsIF8gICAgICA9IHBhdGguX1xyXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcclxuICB3aGlsZShsZW5ndGggPiBpKWlmKChhcmdzW2ldID0gYXJndW1lbnRzW2krK10pID09PSBfKWhvbGRlciA9IHRydWU7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgdmFyIHRoYXQgICAgPSB0aGlzXHJcbiAgICAgICwgX2xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgLCBpID0gMCwgaiA9IDAsIF9hcmdzO1xyXG4gICAgaWYoIWhvbGRlciAmJiAhX2xlbmd0aClyZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcclxuICAgIF9hcmdzID0gYXJncy5zbGljZSgpO1xyXG4gICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gaTsgaSsrKWlmKF9hcmdzW2ldID09PSBfKV9hcmdzW2ldID0gYXJndW1lbnRzW2orK107XHJcbiAgICB3aGlsZShfbGVuZ3RoID4gailfYXJncy5wdXNoKGFyZ3VtZW50c1tqKytdKTtcclxuICAgIHJldHVybiBpbnZva2UoZm4sIF9hcmdzLCB0aGF0KTtcclxuICB9XHJcbn1cclxuLy8gT3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXHJcbmZ1bmN0aW9uIGN0eChmbiwgdGhhdCwgbGVuZ3RoKXtcclxuICBhc3NlcnRGdW5jdGlvbihmbik7XHJcbiAgaWYofmxlbmd0aCAmJiB0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xyXG4gIHN3aXRjaChsZW5ndGgpe1xyXG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xyXG4gICAgfVxyXG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xyXG4gICAgfVxyXG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xyXG4gICAgfVxyXG4gIH0gcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICB9XHJcbn1cclxuLy8gRmFzdCBhcHBseVxyXG4vLyBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcclxuZnVuY3Rpb24gaW52b2tlKGZuLCBhcmdzLCB0aGF0KXtcclxuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XHJcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoIHwgMCl7XHJcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcclxuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcclxuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcclxuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgIGNhc2UgNTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKTtcclxuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XHJcbn1cclxuXHJcbi8vIE9iamVjdDpcclxudmFyIGNyZWF0ZSAgICAgICAgICAgPSBPYmplY3QuY3JlYXRlXHJcbiAgLCBnZXRQcm90b3R5cGVPZiAgID0gT2JqZWN0LmdldFByb3RvdHlwZU9mXHJcbiAgLCBzZXRQcm90b3R5cGVPZiAgID0gT2JqZWN0LnNldFByb3RvdHlwZU9mXHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XHJcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXNcclxuICAsIGdldE93bkRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXHJcbiAgLCBnZXRLZXlzICAgICAgICAgID0gT2JqZWN0LmtleXNcclxuICAsIGdldE5hbWVzICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gICwgZ2V0U3ltYm9scyAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcclxuICAsIGlzRnJvemVuICAgICAgICAgPSBPYmplY3QuaXNGcm96ZW5cclxuICAsIGhhcyAgICAgICAgICAgICAgPSBjdHgoY2FsbCwgT2JqZWN0UHJvdG9bSEFTX09XTl0sIDIpXHJcbiAgLy8gRHVtbXksIGZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBpbiBlczUgbW9kdWxlXHJcbiAgLCBFUzVPYmplY3QgICAgICAgID0gT2JqZWN0XHJcbiAgLCBEaWN0O1xyXG5mdW5jdGlvbiB0b09iamVjdChpdCl7XHJcbiAgcmV0dXJuIEVTNU9iamVjdChhc3NlcnREZWZpbmVkKGl0KSk7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuSXQoaXQpe1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5UaGlzKCl7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn1cclxuZnVuY3Rpb24gZ2V0KG9iamVjdCwga2V5KXtcclxuICBpZihoYXMob2JqZWN0LCBrZXkpKXJldHVybiBvYmplY3Rba2V5XTtcclxufVxyXG5mdW5jdGlvbiBvd25LZXlzKGl0KXtcclxuICBhc3NlcnRPYmplY3QoaXQpO1xyXG4gIHJldHVybiBnZXRTeW1ib2xzID8gZ2V0TmFtZXMoaXQpLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBnZXROYW1lcyhpdCk7XHJcbn1cclxuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxyXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSl7XHJcbiAgdmFyIFQgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0YXJnZXQpKVxyXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgLCBpID0gMTtcclxuICB3aGlsZShsID4gaSl7XHJcbiAgICB2YXIgUyAgICAgID0gRVM1T2JqZWN0KGFyZ3VtZW50c1tpKytdKVxyXG4gICAgICAsIGtleXMgICA9IGdldEtleXMoUylcclxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgICAsIGogICAgICA9IDBcclxuICAgICAgLCBrZXk7XHJcbiAgICB3aGlsZShsZW5ndGggPiBqKVRba2V5ID0ga2V5c1tqKytdXSA9IFNba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIFQ7XHJcbn1cclxuZnVuY3Rpb24ga2V5T2Yob2JqZWN0LCBlbCl7XHJcbiAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpbmRleCAgPSAwXHJcbiAgICAsIGtleTtcclxuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xyXG59XHJcblxyXG4vLyBBcnJheVxyXG4vLyBhcnJheSgnc3RyMSxzdHIyLHN0cjMnKSA9PiBbJ3N0cjEnLCAnc3RyMicsICdzdHIzJ11cclxuZnVuY3Rpb24gYXJyYXkoaXQpe1xyXG4gIHJldHVybiBTdHJpbmcoaXQpLnNwbGl0KCcsJyk7XHJcbn1cclxudmFyIHB1c2ggICAgPSBBcnJheVByb3RvLnB1c2hcclxuICAsIHVuc2hpZnQgPSBBcnJheVByb3RvLnVuc2hpZnRcclxuICAsIHNsaWNlICAgPSBBcnJheVByb3RvLnNsaWNlXHJcbiAgLCBzcGxpY2UgID0gQXJyYXlQcm90by5zcGxpY2VcclxuICAsIGluZGV4T2YgPSBBcnJheVByb3RvLmluZGV4T2ZcclxuICAsIGZvckVhY2ggPSBBcnJheVByb3RvW0ZPUl9FQUNIXTtcclxuLypcclxuICogMCAtPiBmb3JFYWNoXHJcbiAqIDEgLT4gbWFwXHJcbiAqIDIgLT4gZmlsdGVyXHJcbiAqIDMgLT4gc29tZVxyXG4gKiA0IC0+IGV2ZXJ5XHJcbiAqIDUgLT4gZmluZFxyXG4gKiA2IC0+IGZpbmRJbmRleFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXJyYXlNZXRob2QodHlwZSl7XHJcbiAgdmFyIGlzTWFwICAgICAgID0gdHlwZSA9PSAxXHJcbiAgICAsIGlzRmlsdGVyICAgID0gdHlwZSA9PSAyXHJcbiAgICAsIGlzU29tZSAgICAgID0gdHlwZSA9PSAzXHJcbiAgICAsIGlzRXZlcnkgICAgID0gdHlwZSA9PSA0XHJcbiAgICAsIGlzRmluZEluZGV4ID0gdHlwZSA9PSA2XHJcbiAgICAsIG5vaG9sZXMgICAgID0gdHlwZSA9PSA1IHx8IGlzRmluZEluZGV4O1xyXG4gIHJldHVybiBmdW5jdGlvbihjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgdmFyIE8gICAgICA9IE9iamVjdChhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIHRoYXQgICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAsIHNlbGYgICA9IEVTNU9iamVjdChPKVxyXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IDBcclxuICAgICAgLCByZXN1bHQgPSBpc01hcCA/IEFycmF5KGxlbmd0aCkgOiBpc0ZpbHRlciA/IFtdIDogdW5kZWZpbmVkXHJcbiAgICAgICwgdmFsLCByZXM7XHJcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKG5vaG9sZXMgfHwgaW5kZXggaW4gc2VsZil7XHJcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xyXG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xyXG4gICAgICBpZih0eXBlKXtcclxuICAgICAgICBpZihpc01hcClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgICAvLyBtYXBcclxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxyXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcclxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcclxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcclxuICAgICAgICB9IGVsc2UgaWYoaXNFdmVyeSlyZXR1cm4gZmFsc2U7ICAgICAgICAgICAvLyBldmVyeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGaW5kSW5kZXggPyAtMSA6IGlzU29tZSB8fCBpc0V2ZXJ5ID8gaXNFdmVyeSA6IHJlc3VsdDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQXJyYXlDb250YWlucyhpc0NvbnRhaW5zKXtcclxuICByZXR1cm4gZnVuY3Rpb24oZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xyXG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXHJcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChhcmd1bWVudHNbMV0sIGxlbmd0aCk7XHJcbiAgICBpZihpc0NvbnRhaW5zICYmIGVsICE9IGVsKXtcclxuICAgICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihzYW1lTmFOKE9baW5kZXhdKSlyZXR1cm4gaXNDb250YWlucyB8fCBpbmRleDtcclxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKGlzQ29udGFpbnMgfHwgaW5kZXggaW4gTyl7XHJcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gaXNDb250YWlucyB8fCBpbmRleDtcclxuICAgIH0gcmV0dXJuICFpc0NvbnRhaW5zICYmIC0xO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBnZW5lcmljKEEsIEIpe1xyXG4gIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgdnMgaXNGdW5jdGlvblxyXG4gIHJldHVybiB0eXBlb2YgQSA9PSAnZnVuY3Rpb24nID8gQSA6IEI7XHJcbn1cclxuXHJcbi8vIE1hdGhcclxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFmZmZmZmZmZmZmZmZmIC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcclxuICAsIHBvdyAgICA9IE1hdGgucG93XHJcbiAgLCBhYnMgICAgPSBNYXRoLmFic1xyXG4gICwgY2VpbCAgID0gTWF0aC5jZWlsXHJcbiAgLCBmbG9vciAgPSBNYXRoLmZsb29yXHJcbiAgLCBtYXggICAgPSBNYXRoLm1heFxyXG4gICwgbWluICAgID0gTWF0aC5taW5cclxuICAsIHJhbmRvbSA9IE1hdGgucmFuZG9tXHJcbiAgLCB0cnVuYyAgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcclxuICAgIH1cclxuLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcclxuZnVuY3Rpb24gc2FtZU5hTihudW1iZXIpe1xyXG4gIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xyXG59XHJcbi8vIDcuMS40IFRvSW50ZWdlclxyXG5mdW5jdGlvbiB0b0ludGVnZXIoaXQpe1xyXG4gIHJldHVybiBpc05hTihpdCkgPyAwIDogdHJ1bmMoaXQpO1xyXG59XHJcbi8vIDcuMS4xNSBUb0xlbmd0aFxyXG5mdW5jdGlvbiB0b0xlbmd0aChpdCl7XHJcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCBNQVhfU0FGRV9JTlRFR0VSKSA6IDA7XHJcbn1cclxuZnVuY3Rpb24gdG9JbmRleChpbmRleCwgbGVuZ3RoKXtcclxuICB2YXIgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xyXG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xyXG59XHJcbmZ1bmN0aW9uIGx6KG51bSl7XHJcbiAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlcGxhY2VyKHJlZ0V4cCwgcmVwbGFjZSwgaXNTdGF0aWMpe1xyXG4gIHZhciByZXBsYWNlciA9IGlzT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XHJcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcclxuICB9IDogcmVwbGFjZTtcclxuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIFN0cmluZyhpc1N0YXRpYyA/IGl0IDogdGhpcykucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUG9pbnRBdCh0b1N0cmluZyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvcyl7XHJcbiAgICB2YXIgcyA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxyXG4gICAgICAsIGwgPSBzLmxlbmd0aFxyXG4gICAgICAsIGEsIGI7XHJcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIHRvU3RyaW5nID8gJycgOiB1bmRlZmluZWQ7XHJcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcclxuICAgICAgPyB0b1N0cmluZyA/IHMuY2hhckF0KGkpIDogYVxyXG4gICAgICA6IHRvU3RyaW5nID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQXNzZXJ0aW9uICYgZXJyb3JzXHJcbnZhciBSRURVQ0VfRVJST1IgPSAnUmVkdWNlIG9mIGVtcHR5IG9iamVjdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnO1xyXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cxLCBtc2cyKXtcclxuICBpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyID8gbXNnMSArIG1zZzIgOiBtc2cxKTtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtcclxuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24oaXQpe1xyXG4gIGFzc2VydChpc0Z1bmN0aW9uKGl0KSwgaXQsICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydE9iamVjdChpdCl7XHJcbiAgYXNzZXJ0KGlzT2JqZWN0KGl0KSwgaXQsICcgaXMgbm90IGFuIG9iamVjdCEnKTtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2UoaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcclxuICBhc3NlcnQoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvciwgbmFtZSwgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xyXG59XHJcblxyXG4vLyBQcm9wZXJ0eSBkZXNjcmlwdG9ycyAmIFN5bWJvbFxyXG5mdW5jdGlvbiBkZXNjcmlwdG9yKGJpdG1hcCwgdmFsdWUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXHJcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXHJcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXHJcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNpbXBsZVNldChvYmplY3QsIGtleSwgdmFsdWUpe1xyXG4gIG9iamVjdFtrZXldID0gdmFsdWU7XHJcbiAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7XHJcbiAgcmV0dXJuIERFU0MgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCBkZXNjcmlwdG9yKGJpdG1hcCwgdmFsdWUpKTtcclxuICB9IDogc2ltcGxlU2V0O1xyXG59XHJcbmZ1bmN0aW9uIHVpZChrZXkpe1xyXG4gIHJldHVybiBTWU1CT0wgKyAnKCcgKyBrZXkgKyAnKV8nICsgKCsrc2lkICsgcmFuZG9tKCkpW1RPX1NUUklOR10oMzYpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdlbGxLbm93blN5bWJvbChuYW1lLCBzZXR0ZXIpe1xyXG4gIHJldHVybiAoU3ltYm9sICYmIFN5bWJvbFtuYW1lXSkgfHwgKHNldHRlciA/IFN5bWJvbCA6IHNhZmVTeW1ib2wpKFNZTUJPTCArIERPVCArIG5hbWUpO1xyXG59XHJcbi8vIFRoZSBlbmdpbmUgd29ya3MgZmluZSB3aXRoIGRlc2NyaXB0b3JzPyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5LlxyXG52YXIgREVTQyA9ICEhZnVuY3Rpb24oKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDIgfX0pLmEgPT0gMjtcclxuICAgICAgfSBjYXRjaChlKXt9XHJcbiAgICB9KClcclxuICAsIHNpZCAgICA9IDBcclxuICAsIGhpZGRlbiA9IGNyZWF0ZURlZmluZXIoMSlcclxuICAsIHNldCAgICA9IFN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGRlblxyXG4gICwgc2FmZVN5bWJvbCA9IFN5bWJvbCB8fCB1aWQ7XHJcbmZ1bmN0aW9uIGFzc2lnbkhpZGRlbih0YXJnZXQsIHNyYyl7XHJcbiAgZm9yKHZhciBrZXkgaW4gc3JjKWhpZGRlbih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbnZhciBTWU1CT0xfVU5TQ09QQUJMRVMgPSBnZXRXZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJylcclxuICAsIEFycmF5VW5zY29wYWJsZXMgICA9IEFycmF5UHJvdG9bU1lNQk9MX1VOU0NPUEFCTEVTXSB8fCB7fVxyXG4gICwgU1lNQk9MX1RBRyAgICAgICAgID0gZ2V0V2VsbEtub3duU3ltYm9sKFRPX1NUUklOR19UQUcpXHJcbiAgLCBTWU1CT0xfU1BFQ0lFUyAgICAgPSBnZXRXZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKVxyXG4gICwgU1lNQk9MX0lURVJBVE9SO1xyXG5mdW5jdGlvbiBzZXRTcGVjaWVzKEMpe1xyXG4gIGlmKERFU0MgJiYgKGZyYW1ld29yayB8fCAhaXNOYXRpdmUoQykpKWRlZmluZVByb3BlcnR5KEMsIFNZTUJPTF9TUEVDSUVTLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IHJldHVyblRoaXNcclxuICB9KTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24uZXhwb3J0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgTk9ERSA9IGNvZihwcm9jZXNzKSA9PSBQUk9DRVNTXHJcbiAgLCBjb3JlID0ge31cclxuICAsIHBhdGggPSBmcmFtZXdvcmsgPyBnbG9iYWwgOiBjb3JlXHJcbiAgLCBvbGQgID0gZ2xvYmFsLmNvcmVcclxuICAsIGV4cG9ydEdsb2JhbFxyXG4gIC8vIHR5cGUgYml0bWFwXHJcbiAgLCBGT1JDRUQgPSAxXHJcbiAgLCBHTE9CQUwgPSAyXHJcbiAgLCBTVEFUSUMgPSA0XHJcbiAgLCBQUk9UTyAgPSA4XHJcbiAgLCBCSU5EICAgPSAxNlxyXG4gICwgV1JBUCAgID0gMzI7XHJcbmZ1bmN0aW9uICRkZWZpbmUodHlwZSwgbmFtZSwgc291cmNlKXtcclxuICB2YXIga2V5LCBvd24sIG91dCwgZXhwXHJcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmIEdMT0JBTFxyXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogKHR5cGUgJiBTVEFUSUMpXHJcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IE9iamVjdFByb3RvKVtQUk9UT1RZUEVdXHJcbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcclxuICBpZihpc0dsb2JhbClzb3VyY2UgPSBuYW1lO1xyXG4gIGZvcihrZXkgaW4gc291cmNlKXtcclxuICAgIC8vIHRoZXJlIGlzIGEgc2ltaWxhciBuYXRpdmVcclxuICAgIG93biA9ICEodHlwZSAmIEZPUkNFRCkgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXRcclxuICAgICAgJiYgKCFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSB8fCBpc05hdGl2ZSh0YXJnZXRba2V5XSkpO1xyXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcclxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XHJcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcclxuICAgIGlmKCFmcmFtZXdvcmsgJiYgaXNHbG9iYWwgJiYgIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cCA9IHNvdXJjZVtrZXldO1xyXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcclxuICAgIGVsc2UgaWYodHlwZSAmIEJJTkQgJiYgb3duKWV4cCA9IGN0eChvdXQsIGdsb2JhbCk7XHJcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxyXG4gICAgZWxzZSBpZih0eXBlICYgV1JBUCAmJiAhZnJhbWV3b3JrICYmIHRhcmdldFtrZXldID09IG91dCl7XHJcbiAgICAgIGV4cCA9IGZ1bmN0aW9uKHBhcmFtKXtcclxuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG91dCA/IG5ldyBvdXQocGFyYW0pIDogb3V0KHBhcmFtKTtcclxuICAgICAgfVxyXG4gICAgICBleHBbUFJPVE9UWVBFXSA9IG91dFtQUk9UT1RZUEVdO1xyXG4gICAgfSBlbHNlIGV4cCA9IHR5cGUgJiBQUk9UTyAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoY2FsbCwgb3V0KSA6IG91dDtcclxuICAgIC8vIGV4dGVuZCBnbG9iYWxcclxuICAgIGlmKGZyYW1ld29yayAmJiB0YXJnZXQgJiYgIW93bil7XHJcbiAgICAgIGlmKGlzR2xvYmFsKXRhcmdldFtrZXldID0gb3V0O1xyXG4gICAgICBlbHNlIGRlbGV0ZSB0YXJnZXRba2V5XSAmJiBoaWRkZW4odGFyZ2V0LCBrZXksIG91dCk7XHJcbiAgICB9XHJcbiAgICAvLyBleHBvcnRcclxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZGVuKGV4cG9ydHMsIGtleSwgZXhwKTtcclxuICB9XHJcbn1cclxuLy8gQ29tbW9uSlMgZXhwb3J0XHJcbmlmKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpbW9kdWxlLmV4cG9ydHMgPSBjb3JlO1xyXG4vLyBSZXF1aXJlSlMgZXhwb3J0XHJcbmVsc2UgaWYoaXNGdW5jdGlvbihkZWZpbmUpICYmIGRlZmluZS5hbWQpZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGNvcmV9KTtcclxuLy8gRXhwb3J0IHRvIGdsb2JhbCBvYmplY3RcclxuZWxzZSBleHBvcnRHbG9iYWwgPSB0cnVlO1xyXG5pZihleHBvcnRHbG9iYWwgfHwgZnJhbWV3b3JrKXtcclxuICBjb3JlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpe1xyXG4gICAgZ2xvYmFsLmNvcmUgPSBvbGQ7XHJcbiAgICByZXR1cm4gY29yZTtcclxuICB9XHJcbiAgZ2xvYmFsLmNvcmUgPSBjb3JlO1xyXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvbW1vbi5pdGVyYXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblNZTUJPTF9JVEVSQVRPUiA9IGdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUik7XHJcbnZhciBJVEVSICA9IHNhZmVTeW1ib2woJ2l0ZXInKVxyXG4gICwgS0VZICAgPSAxXHJcbiAgLCBWQUxVRSA9IDJcclxuICAsIEl0ZXJhdG9ycyA9IHt9XHJcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9XHJcbiAgICAvLyBTYWZhcmkgaGFzIGJ5Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXHJcbiAgLCBCVUdHWV9JVEVSQVRPUlMgPSAna2V5cycgaW4gQXJyYXlQcm90byAmJiAhKCduZXh0JyBpbiBbXS5rZXlzKCkpO1xyXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxyXG5zZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSwgcmV0dXJuVGhpcyk7XHJcbmZ1bmN0aW9uIHNldEl0ZXJhdG9yKE8sIHZhbHVlKXtcclxuICBoaWRkZW4oTywgU1lNQk9MX0lURVJBVE9SLCB2YWx1ZSk7XHJcbiAgLy8gQWRkIGl0ZXJhdG9yIGZvciBGRiBpdGVyYXRvciBwcm90b2NvbFxyXG4gIEZGX0lURVJBVE9SIGluIEFycmF5UHJvdG8gJiYgaGlkZGVuKE8sIEZGX0lURVJBVE9SLCB2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSXRlcmF0b3IoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQsIHByb3RvKXtcclxuICBDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gY3JlYXRlKHByb3RvIHx8IEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xyXG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCB2YWx1ZSwgREVGQVVMVCl7XHJcbiAgdmFyIHByb3RvID0gQ29uc3RydWN0b3JbUFJPVE9UWVBFXVxyXG4gICAgLCBpdGVyICA9IGdldChwcm90bywgU1lNQk9MX0lURVJBVE9SKSB8fCBnZXQocHJvdG8sIEZGX0lURVJBVE9SKSB8fCAoREVGQVVMVCAmJiBnZXQocHJvdG8sIERFRkFVTFQpKSB8fCB2YWx1ZTtcclxuICBpZihmcmFtZXdvcmspe1xyXG4gICAgLy8gRGVmaW5lIGl0ZXJhdG9yXHJcbiAgICBzZXRJdGVyYXRvcihwcm90bywgaXRlcik7XHJcbiAgICBpZihpdGVyICE9PSB2YWx1ZSl7XHJcbiAgICAgIHZhciBpdGVyUHJvdG8gPSBnZXRQcm90b3R5cGVPZihpdGVyLmNhbGwobmV3IENvbnN0cnVjdG9yKSk7XHJcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcclxuICAgICAgc2V0VG9TdHJpbmdUYWcoaXRlclByb3RvLCBOQU1FICsgJyBJdGVyYXRvcicsIHRydWUpO1xyXG4gICAgICAvLyBGRiBmaXhcclxuICAgICAgaGFzKHByb3RvLCBGRl9JVEVSQVRPUikgJiYgc2V0SXRlcmF0b3IoaXRlclByb3RvLCByZXR1cm5UaGlzKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxyXG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGl0ZXI7XHJcbiAgLy8gRkYgJiB2OCBmaXhcclxuICBJdGVyYXRvcnNbTkFNRSArICcgSXRlcmF0b3InXSA9IHJldHVyblRoaXM7XHJcbiAgcmV0dXJuIGl0ZXI7XHJcbn1cclxuZnVuY3Rpb24gZGVmaW5lU3RkSXRlcmF0b3JzKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQpe1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUl0ZXIoa2luZCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTtcclxuICAgIH1cclxuICB9XHJcbiAgY3JlYXRlSXRlcmF0b3IoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xyXG4gIHZhciBlbnRyaWVzID0gY3JlYXRlSXRlcihLRVkrVkFMVUUpXHJcbiAgICAsIHZhbHVlcyAgPSBjcmVhdGVJdGVyKFZBTFVFKTtcclxuICBpZihERUZBVUxUID09IFZBTFVFKXZhbHVlcyA9IGRlZmluZUl0ZXJhdG9yKEJhc2UsIE5BTUUsIHZhbHVlcywgJ3ZhbHVlcycpO1xyXG4gIGVsc2UgZW50cmllcyA9IGRlZmluZUl0ZXJhdG9yKEJhc2UsIE5BTUUsIGVudHJpZXMsICdlbnRyaWVzJyk7XHJcbiAgaWYoREVGQVVMVCl7XHJcbiAgICAkZGVmaW5lKFBST1RPICsgRk9SQ0VEICogQlVHR1lfSVRFUkFUT1JTLCBOQU1FLCB7XHJcbiAgICAgIGVudHJpZXM6IGVudHJpZXMsXHJcbiAgICAgIGtleXM6IElTX1NFVCA/IHZhbHVlcyA6IGNyZWF0ZUl0ZXIoS0VZKSxcclxuICAgICAgdmFsdWVzOiB2YWx1ZXNcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBpdGVyUmVzdWx0KGRvbmUsIHZhbHVlKXtcclxuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcclxufVxyXG5mdW5jdGlvbiBpc0l0ZXJhYmxlKGl0KXtcclxuICB2YXIgTyAgICAgID0gT2JqZWN0KGl0KVxyXG4gICAgLCBTeW1ib2wgPSBnbG9iYWxbU1lNQk9MXVxyXG4gICAgLCBoYXNFeHQgPSAoU3ltYm9sICYmIFN5bWJvbFtJVEVSQVRPUl0gfHwgRkZfSVRFUkFUT1IpIGluIE87XHJcbiAgcmV0dXJuIGhhc0V4dCB8fCBTWU1CT0xfSVRFUkFUT1IgaW4gTyB8fCBoYXMoSXRlcmF0b3JzLCBjbGFzc29mKE8pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRJdGVyYXRvcihpdCl7XHJcbiAgdmFyIFN5bWJvbCAgPSBnbG9iYWxbU1lNQk9MXVxyXG4gICAgLCBleHQgICAgID0gaXRbU3ltYm9sICYmIFN5bWJvbFtJVEVSQVRPUl0gfHwgRkZfSVRFUkFUT1JdXHJcbiAgICAsIGdldEl0ZXIgPSBleHQgfHwgaXRbU1lNQk9MX0lURVJBVE9SXSB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xyXG4gIHJldHVybiBhc3NlcnRPYmplY3QoZ2V0SXRlci5jYWxsKGl0KSk7XHJcbn1cclxuZnVuY3Rpb24gc3RlcENhbGwoZm4sIHZhbHVlLCBlbnRyaWVzKXtcclxuICByZXR1cm4gZW50cmllcyA/IGludm9rZShmbiwgdmFsdWUpIDogZm4odmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZm4pe1xyXG4gIHZhciBkYW5nZXIgPSB0cnVlO1xyXG4gIHZhciBPID0ge1xyXG4gICAgbmV4dDogZnVuY3Rpb24oKXsgdGhyb3cgMSB9LFxyXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uKCl7IGRhbmdlciA9IGZhbHNlIH1cclxuICB9O1xyXG4gIE9bU1lNQk9MX0lURVJBVE9SXSA9IHJldHVyblRoaXM7XHJcbiAgdHJ5IHtcclxuICAgIGZuKE8pO1xyXG4gIH0gY2F0Y2goZSl7fVxyXG4gIHJldHVybiBkYW5nZXI7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VJdGVyYXRvcihpdGVyYXRvcil7XHJcbiAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcclxuICBpZihyZXQgIT09IHVuZGVmaW5lZClyZXQuY2FsbChpdGVyYXRvcik7XHJcbn1cclxuZnVuY3Rpb24gc2FmZUl0ZXJDbG9zZShleGVjLCBpdGVyYXRvcil7XHJcbiAgdHJ5IHtcclxuICAgIGV4ZWMoaXRlcmF0b3IpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKTtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvck9mKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XHJcbiAgc2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7XHJcbiAgICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxyXG4gICAgICAsIHN0ZXA7XHJcbiAgICB3aGlsZSghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpaWYoc3RlcENhbGwoZiwgc3RlcC52YWx1ZSwgZW50cmllcykgPT09IGZhbHNlKXtcclxuICAgICAgcmV0dXJuIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3IpO1xyXG4gICAgfVxyXG4gIH0sIGdldEl0ZXJhdG9yKGl0ZXJhYmxlKSk7XHJcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnN5bWJvbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxyXG4hZnVuY3Rpb24oVEFHLCBTeW1ib2xSZWdpc3RyeSwgQWxsU3ltYm9scywgc2V0dGVyKXtcclxuICAvLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcclxuICBpZighaXNOYXRpdmUoU3ltYm9sKSl7XHJcbiAgICBTeW1ib2wgPSBmdW5jdGlvbihkZXNjcmlwdGlvbil7XHJcbiAgICAgIGFzc2VydCghKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpLCBTWU1CT0wgKyAnIGlzIG5vdCBhICcgKyBDT05TVFJVQ1RPUik7XHJcbiAgICAgIHZhciB0YWcgPSB1aWQoZGVzY3JpcHRpb24pXHJcbiAgICAgICAgLCBzeW0gPSBzZXQoY3JlYXRlKFN5bWJvbFtQUk9UT1RZUEVdKSwgVEFHLCB0YWcpO1xyXG4gICAgICBBbGxTeW1ib2xzW3RhZ10gPSBzeW07XHJcbiAgICAgIERFU0MgJiYgc2V0dGVyICYmIGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLCB0YWcsIHtcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICBoaWRkZW4odGhpcywgdGFnLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN5bTtcclxuICAgIH1cclxuICAgIGhpZGRlbihTeW1ib2xbUFJPVE9UWVBFXSwgVE9fU1RSSU5HLCBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpc1tUQUddO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gICRkZWZpbmUoR0xPQkFMICsgV1JBUCwge1N5bWJvbDogU3ltYm9sfSk7XHJcbiAgXHJcbiAgdmFyIHN5bWJvbFN0YXRpY3MgPSB7XHJcbiAgICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcclxuICAgICdmb3InOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXHJcbiAgICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXHJcbiAgICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gU3ltYm9sKGtleSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXHJcbiAgICBpdGVyYXRvcjogU1lNQk9MX0lURVJBVE9SIHx8IGdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUiksXHJcbiAgICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcclxuICAgIGtleUZvcjogcGFydC5jYWxsKGtleU9mLCBTeW1ib2xSZWdpc3RyeSksXHJcbiAgICAvLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcclxuICAgIHNwZWNpZXM6IFNZTUJPTF9TUEVDSUVTLFxyXG4gICAgLy8gMTkuNC4yLjEzIFN5bWJvbC50b1N0cmluZ1RhZ1xyXG4gICAgdG9TdHJpbmdUYWc6IFNZTUJPTF9UQUcgPSBnZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRywgdHJ1ZSksXHJcbiAgICAvLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXHJcbiAgICB1bnNjb3BhYmxlczogU1lNQk9MX1VOU0NPUEFCTEVTLFxyXG4gICAgcHVyZTogc2FmZVN5bWJvbCxcclxuICAgIHNldDogc2V0LFxyXG4gICAgdXNlU2V0dGVyOiBmdW5jdGlvbigpe3NldHRlciA9IHRydWV9LFxyXG4gICAgdXNlU2ltcGxlOiBmdW5jdGlvbigpe3NldHRlciA9IGZhbHNlfVxyXG4gIH07XHJcbiAgLy8gMTkuNC4yLjIgU3ltYm9sLmhhc0luc3RhbmNlXHJcbiAgLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxyXG4gIC8vIDE5LjQuMi42IFN5bWJvbC5tYXRjaFxyXG4gIC8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXHJcbiAgLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxyXG4gIC8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcclxuICAvLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXHJcbiAgZm9yRWFjaC5jYWxsKGFycmF5KCdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BsaXQsdG9QcmltaXRpdmUnKSxcclxuICAgIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgc3ltYm9sU3RhdGljc1tpdF0gPSBnZXRXZWxsS25vd25TeW1ib2woaXQpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgJGRlZmluZShTVEFUSUMsIFNZTUJPTCwgc3ltYm9sU3RhdGljcyk7XHJcbiAgXHJcbiAgc2V0VG9TdHJpbmdUYWcoU3ltYm9sLCBTWU1CT0wpO1xyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDICsgRk9SQ0VEICogIWlzTmF0aXZlKFN5bWJvbCksIE9CSkVDVCwge1xyXG4gICAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcclxuICAgIGdldE93blByb3BlcnR5TmFtZXM6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgdmFyIG5hbWVzID0gZ2V0TmFtZXModG9PYmplY3QoaXQpKSwgcmVzdWx0ID0gW10sIGtleSwgaSA9IDA7XHJcbiAgICAgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pIHx8IHJlc3VsdC5wdXNoKGtleSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxyXG4gICAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSksIHJlc3VsdCA9IFtdLCBrZXksIGkgPSAwO1xyXG4gICAgICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cclxuICBzZXRUb1N0cmluZ1RhZyhNYXRoLCBNQVRILCB0cnVlKTtcclxuICAvLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxyXG4gIHNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xyXG59KHNhZmVTeW1ib2woJ3RhZycpLCB7fSwge30sIHRydWUpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYub2JqZWN0LnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICB2YXIgb2JqZWN0U3RhdGljID0ge1xyXG4gICAgLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcclxuICAgIGFzc2lnbjogYXNzaWduLFxyXG4gICAgLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcclxuICAgIGlzOiBmdW5jdGlvbih4LCB5KXtcclxuICAgICAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxyXG4gIC8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrcyB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cclxuICAnX19wcm90b19fJyBpbiBPYmplY3RQcm90byAmJiBmdW5jdGlvbihidWdneSwgc2V0KXtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldCA9IGN0eChjYWxsLCBnZXRPd25EZXNjcmlwdG9yKE9iamVjdFByb3RvLCAnX19wcm90b19fJykuc2V0LCAyKTtcclxuICAgICAgc2V0KHt9LCBBcnJheVByb3RvKTtcclxuICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZSB9XHJcbiAgICBvYmplY3RTdGF0aWMuc2V0UHJvdG90eXBlT2YgPSBzZXRQcm90b3R5cGVPZiA9IHNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8sIHByb3RvKXtcclxuICAgICAgYXNzZXJ0T2JqZWN0KE8pO1xyXG4gICAgICBhc3NlcnQocHJvdG8gPT09IG51bGwgfHwgaXNPYmplY3QocHJvdG8pLCBwcm90bywgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xyXG4gICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xyXG4gICAgICBlbHNlIHNldChPLCBwcm90byk7XHJcbiAgICAgIHJldHVybiBPO1xyXG4gICAgfVxyXG4gIH0oKTtcclxuICAkZGVmaW5lKFNUQVRJQywgT0JKRUNULCBvYmplY3RTdGF0aWMpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gIC8vIE9iamVjdCBzdGF0aWMgbWV0aG9kcyBhY2NlcHQgcHJpbWl0aXZlc1xyXG4gIGZ1bmN0aW9uIHdyYXBPYmplY3RNZXRob2Qoa2V5LCBNT0RFKXtcclxuICAgIHZhciBmbiAgPSBPYmplY3Rba2V5XVxyXG4gICAgICAsIGV4cCA9IGNvcmVbT0JKRUNUXVtrZXldXHJcbiAgICAgICwgZiAgID0gMFxyXG4gICAgICAsIG8gICA9IHt9O1xyXG4gICAgaWYoIWV4cCB8fCBpc05hdGl2ZShleHApKXtcclxuICAgICAgb1trZXldID0gTU9ERSA9PSAxID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcclxuICAgICAgfSA6IE1PREUgPT0gMiA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcclxuICAgICAgfSA6IE1PREUgPT0gMyA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XHJcbiAgICAgIH0gOiBNT0RFID09IDQgPyBmdW5jdGlvbihpdCwga2V5KXtcclxuICAgICAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xyXG4gICAgICB9IDogZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xyXG4gICAgICB9O1xyXG4gICAgICB0cnkgeyBmbihET1QpIH1cclxuICAgICAgY2F0Y2goZSl7IGYgPSAxIH1cclxuICAgICAgJGRlZmluZShTVEFUSUMgKyBGT1JDRUQgKiBmLCBPQkpFQ1QsIG8pO1xyXG4gICAgfVxyXG4gIH1cclxuICB3cmFwT2JqZWN0TWV0aG9kKCdmcmVlemUnLCAxKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdzZWFsJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgncHJldmVudEV4dGVuc2lvbnMnLCAxKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdpc0Zyb3plbicsIDIpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2lzU2VhbGVkJywgMik7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnaXNFeHRlbnNpYmxlJywgMyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgNCk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0UHJvdG90eXBlT2YnKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdrZXlzJyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlOYW1lcycpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5udW1iZXIuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihpc0ludGVnZXIpe1xyXG4gICRkZWZpbmUoU1RBVElDLCBOVU1CRVIsIHtcclxuICAgIC8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXHJcbiAgICBFUFNJTE9OOiBwb3coMiwgLTUyKSxcclxuICAgIC8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXHJcbiAgICBpc0Zpbml0ZTogZnVuY3Rpb24oaXQpe1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIGlzRmluaXRlKGl0KTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcclxuICAgIGlzSW50ZWdlcjogaXNJbnRlZ2VyLFxyXG4gICAgLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcclxuICAgIGlzTmFOOiBzYW1lTmFOLFxyXG4gICAgLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxyXG4gICAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24obnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIE1BWF9TQUZFX0lOVEVHRVI6IE1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcclxuICAgIE1JTl9TQUZFX0lOVEVHRVI6IC1NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgLy8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcclxuICAgIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXQsXHJcbiAgICAvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXHJcbiAgICBwYXJzZUludDogcGFyc2VJbnRcclxuICB9KTtcclxuLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXHJcbn0oTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbihpdCl7XHJcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XHJcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYubWF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFQ01BU2NyaXB0IDYgc2hpbVxyXG4hZnVuY3Rpb24oKXtcclxuICAvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXHJcbiAgdmFyIEUgICAgPSBNYXRoLkVcclxuICAgICwgZXhwICA9IE1hdGguZXhwXHJcbiAgICAsIGxvZyAgPSBNYXRoLmxvZ1xyXG4gICAgLCBzcXJ0ID0gTWF0aC5zcXJ0XHJcbiAgICAsIHNpZ24gPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24oeCl7XHJcbiAgICAgICAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICBmdW5jdGlvbiBhc2luaCh4KXtcclxuICAgIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogbG9nKHggKyBzcXJ0KHggKiB4ICsgMSkpO1xyXG4gIH1cclxuICAvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG4gIGZ1bmN0aW9uIGV4cG0xKHgpe1xyXG4gICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IGV4cCh4KSAtIDE7XHJcbiAgfVxyXG4gICAgXHJcbiAgJGRlZmluZShTVEFUSUMsIE1BVEgsIHtcclxuICAgIC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcclxuICAgIGFjb3NoOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IGlzRmluaXRlKHgpID8gbG9nKHggLyBFICsgc3FydCh4ICsgMSkgKiBzcXJ0KHggLSAxKSAvIEUpICsgMSA6IHg7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG4gICAgYXNpbmg6IGFzaW5oLFxyXG4gICAgLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxyXG4gICAgYXRhbmg6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBsb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcclxuICAgIGNicnQ6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gc2lnbih4ID0gK3gpICogcG93KGFicyh4KSwgMSAvIDMpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXHJcbiAgICBjbHozMjogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA+Pj49IDApID8gMzIgLSB4W1RPX1NUUklOR10oMikubGVuZ3RoIDogMzI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxyXG4gICAgY29zaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICAgIGV4cG0xOiBleHBtMSxcclxuICAgIC8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxyXG4gICAgLy8gVE9ETzogZmFsbGJhY2sgZm9yIElFOS1cclxuICAgIGZyb3VuZDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFt4XSlbMF07XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXHJcbiAgICBoeXBvdDogZnVuY3Rpb24odmFsdWUxLCB2YWx1ZTIpe1xyXG4gICAgICB2YXIgc3VtICA9IDBcclxuICAgICAgICAsIGxlbjEgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCBsZW4yID0gbGVuMVxyXG4gICAgICAgICwgYXJncyA9IEFycmF5KGxlbjEpXHJcbiAgICAgICAgLCBsYXJnID0gLUluZmluaXR5XHJcbiAgICAgICAgLCBhcmc7XHJcbiAgICAgIHdoaWxlKGxlbjEtLSl7XHJcbiAgICAgICAgYXJnID0gYXJnc1tsZW4xXSA9ICthcmd1bWVudHNbbGVuMV07XHJcbiAgICAgICAgaWYoYXJnID09IEluZmluaXR5IHx8IGFyZyA9PSAtSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIGlmKGFyZyA+IGxhcmcpbGFyZyA9IGFyZztcclxuICAgICAgfVxyXG4gICAgICBsYXJnID0gYXJnIHx8IDE7XHJcbiAgICAgIHdoaWxlKGxlbjItLSlzdW0gKz0gcG93KGFyZ3NbbGVuMl0gLyBsYXJnLCAyKTtcclxuICAgICAgcmV0dXJuIGxhcmcgKiBzcXJ0KHN1bSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxyXG4gICAgaW11bDogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICAgIHZhciBVSW50MTYgPSAweGZmZmZcclxuICAgICAgICAsIHhuID0gK3hcclxuICAgICAgICAsIHluID0gK3lcclxuICAgICAgICAsIHhsID0gVUludDE2ICYgeG5cclxuICAgICAgICAsIHlsID0gVUludDE2ICYgeW47XHJcbiAgICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUludDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUludDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcclxuICAgIGxvZzFwOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogbG9nKDEgKyB4KTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxyXG4gICAgbG9nMTA6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbG9nKHgpIC8gTWF0aC5MTjEwO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcclxuICAgIGxvZzI6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbG9nKHgpIC8gTWF0aC5MTjI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxyXG4gICAgc2lnbjogc2lnbixcclxuICAgIC8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcclxuICAgIHNpbmg6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKGFicyh4ID0gK3gpIDwgMSkgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMiA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKEUgLyAyKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXHJcbiAgICB0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXHJcbiAgICAgICAgLCBiID0gZXhwbTEoLXgpO1xyXG4gICAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXHJcbiAgICB0cnVuYzogdHJ1bmNcclxuICB9KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oZnJvbUNoYXJDb2RlKXtcclxuICBmdW5jdGlvbiBhc3NlcnROb3RSZWdFeHAoaXQpe1xyXG4gICAgaWYoY29mKGl0KSA9PSBSRUdFWFApdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgfVxyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBTVFJJTkcsIHtcclxuICAgIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXHJcbiAgICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbih4KXtcclxuICAgICAgdmFyIHJlcyA9IFtdXHJcbiAgICAgICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCBpICAgPSAwXHJcbiAgICAgICAgLCBjb2RlXHJcbiAgICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XHJcbiAgICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XHJcbiAgICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcclxuICAgICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXHJcbiAgICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXHJcbiAgICAgICAgKTtcclxuICAgICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXHJcbiAgICByYXc6IGZ1bmN0aW9uKGNhbGxTaXRlKXtcclxuICAgICAgdmFyIHJhdyA9IHRvT2JqZWN0KGNhbGxTaXRlLnJhdylcclxuICAgICAgICAsIGxlbiA9IHRvTGVuZ3RoKHJhdy5sZW5ndGgpXHJcbiAgICAgICAgLCBzbG4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCByZXMgPSBbXVxyXG4gICAgICAgICwgaSAgID0gMDtcclxuICAgICAgd2hpbGUobGVuID4gaSl7XHJcbiAgICAgICAgcmVzLnB1c2goU3RyaW5nKHJhd1tpKytdKSk7XHJcbiAgICAgICAgaWYoaSA8IHNsbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XHJcbiAgICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZGVmaW5lKFBST1RPLCBTVFJJTkcsIHtcclxuICAgIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxyXG4gICAgY29kZVBvaW50QXQ6IGNyZWF0ZVBvaW50QXQoZmFsc2UpLFxyXG4gICAgLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxyXG4gICAgZW5kc1dpdGg6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcclxuICAgICAgYXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgIHZhciB0aGF0ID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgbGVuID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXHJcbiAgICAgICAgLCBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogbWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKTtcclxuICAgICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgICByZXR1cm4gdGhhdC5zbGljZShlbmQgLSBzZWFyY2hTdHJpbmcubGVuZ3RoLCBlbmQpID09PSBzZWFyY2hTdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcclxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICByZXR1cm4gISF+U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICAgIHJlcGVhdDogZnVuY3Rpb24oY291bnQpe1xyXG4gICAgICB2YXIgc3RyID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCByZXMgPSAnJ1xyXG4gICAgICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcclxuICAgICAgaWYoMCA+IG4gfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XHJcbiAgICAgIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcclxuICAgIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcclxuICAgICAgYXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgIHZhciB0aGF0ICA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgaW5kZXggPSB0b0xlbmd0aChtaW4oYXJndW1lbnRzWzFdLCB0aGF0Lmxlbmd0aCkpO1xyXG4gICAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICAgIHJldHVybiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaFN0cmluZy5sZW5ndGgpID09PSBzZWFyY2hTdHJpbmc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0oU3RyaW5nLmZyb21DaGFyQ29kZSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5hcnJheS5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gICRkZWZpbmUoU1RBVElDICsgRk9SQ0VEICogY2hlY2tEYW5nZXJJdGVyQ2xvc2luZyhBcnJheS5mcm9tKSwgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZyb206IGZ1bmN0aW9uKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcclxuICAgICAgdmFyIE8gICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZChhcnJheUxpa2UpKVxyXG4gICAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcclxuICAgICAgICAsIGYgICAgICAgPSBtYXBwaW5nID8gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgLCBpbmRleCAgID0gMFxyXG4gICAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXA7XHJcbiAgICAgIGlmKGlzSXRlcmFibGUoTykpe1xyXG4gICAgICAgIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpO1xyXG4gICAgICAgIHNhZmVJdGVyQ2xvc2UoZnVuY3Rpb24oaXRlcmF0b3Ipe1xyXG4gICAgICAgICAgZm9yKDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcclxuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBmKHN0ZXAudmFsdWUsIGluZGV4KSA6IHN0ZXAudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZ2V0SXRlcmF0b3IoTykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpKGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSk7XHJcbiAgICAgICAgZm9yKDsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xyXG4gICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBmKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBBUlJBWSwge1xyXG4gICAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxyXG4gICAgb2Y6IGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICB2YXIgaW5kZXggID0gMFxyXG4gICAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgcmVzdWx0ID0gbmV3IChnZW5lcmljKHRoaXMsIEFycmF5KSkobGVuZ3RoKTtcclxuICAgICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcclxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBzZXRTcGVjaWVzKEFycmF5KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuYXJyYXkucHJvdG90eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFBST1RPLCBBUlJBWSwge1xyXG4gICAgLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXHJcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbih0YXJnZXQgLyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgICB2YXIgTyAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXHJcbiAgICAgICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcclxuICAgICAgICAsIGVuZCAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICAgLCBmaW4gICA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbilcclxuICAgICAgICAsIGNvdW50ID0gbWluKGZpbiAtIGZyb20sIGxlbiAtIHRvKVxyXG4gICAgICAgICwgaW5jICAgPSAxO1xyXG4gICAgICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xyXG4gICAgICAgIGluYyAgPSAtMTtcclxuICAgICAgICBmcm9tID0gZnJvbSArIGNvdW50IC0gMTtcclxuICAgICAgICB0byAgID0gdG8gKyBjb3VudCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUoY291bnQtLSA+IDApe1xyXG4gICAgICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XHJcbiAgICAgICAgZWxzZSBkZWxldGUgT1t0b107XHJcbiAgICAgICAgdG8gKz0gaW5jO1xyXG4gICAgICAgIGZyb20gKz0gaW5jO1xyXG4gICAgICB9IHJldHVybiBPO1xyXG4gICAgfSxcclxuICAgIC8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gICAgZmlsbDogZnVuY3Rpb24odmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XHJcbiAgICAgIHZhciBPICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAgICwgaW5kZXggID0gdG9JbmRleChhcmd1bWVudHNbMV0sIGxlbmd0aClcclxuICAgICAgICAsIGVuZCAgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcclxuICAgICAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gTztcclxuICAgIH0sXHJcbiAgICAvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmaW5kOiBjcmVhdGVBcnJheU1ldGhvZCg1KSxcclxuICAgIC8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZmluZEluZGV4OiBjcmVhdGVBcnJheU1ldGhvZCg2KVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGZyYW1ld29yayl7XHJcbiAgICAvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2ZpbmQsZmluZEluZGV4LGZpbGwsY29weVdpdGhpbixlbnRyaWVzLGtleXMsdmFsdWVzJyksIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgQXJyYXlVbnNjb3BhYmxlc1tpdF0gPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBTWU1CT0xfVU5TQ09QQUJMRVMgaW4gQXJyYXlQcm90byB8fCBoaWRkZW4oQXJyYXlQcm90bywgU1lNQk9MX1VOU0NPUEFCTEVTLCBBcnJheVVuc2NvcGFibGVzKTtcclxuICB9XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lml0ZXJhdG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGF0KXtcclxuICAvLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXHJcbiAgLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcclxuICAvLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXHJcbiAgLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbiAgZGVmaW5lU3RkSXRlcmF0b3JzKEFycmF5LCBBUlJBWSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtvOiB0b09iamVjdChpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcclxuICAvLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcclxuICB9LCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIE8gICAgID0gaXRlci5vXHJcbiAgICAgICwga2luZCAgPSBpdGVyLmtcclxuICAgICAgLCBpbmRleCA9IGl0ZXIuaSsrO1xyXG4gICAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xyXG4gICAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICAgIHJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgfVxyXG4gICAgaWYoa2luZCA9PSBLRVkpICByZXR1cm4gaXRlclJlc3VsdCgwLCBpbmRleCk7XHJcbiAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIE9baW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xyXG4gIH0sIFZBTFVFKTtcclxuICBcclxuICAvLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXHJcbiAgSXRlcmF0b3JzW0FSR1VNRU5UU10gPSBJdGVyYXRvcnNbQVJSQVldO1xyXG4gIFxyXG4gIC8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcclxuICBkZWZpbmVTdGRJdGVyYXRvcnMoU3RyaW5nLCBTVFJJTkcsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xyXG4gIC8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcclxuICB9LCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIE8gICAgID0gaXRlci5vXHJcbiAgICAgICwgaW5kZXggPSBpdGVyLmlcclxuICAgICAgLCBwb2ludDtcclxuICAgIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgcG9pbnQgPSBhdC5jYWxsKE8sIGluZGV4KTtcclxuICAgIGl0ZXIuaSArPSBwb2ludC5sZW5ndGg7XHJcbiAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBwb2ludCk7XHJcbiAgfSk7XHJcbn0oY3JlYXRlUG9pbnRBdCh0cnVlKSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IHdlYi5pbW1lZGlhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHNldEltbWVkaWF0ZSBzaGltXHJcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIGVsc2U6XHJcbmlzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSAmJiBpc0Z1bmN0aW9uKGNsZWFySW1tZWRpYXRlKSB8fCBmdW5jdGlvbihPTlJFQURZU1RBVEVDSEFOR0Upe1xyXG4gIHZhciBwb3N0TWVzc2FnZSAgICAgID0gZ2xvYmFsLnBvc3RNZXNzYWdlXHJcbiAgICAsIGFkZEV2ZW50TGlzdGVuZXIgPSBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgLCBNZXNzYWdlQ2hhbm5lbCAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXHJcbiAgICAsIGNvdW50ZXIgICAgICAgICAgPSAwXHJcbiAgICAsIHF1ZXVlICAgICAgICAgICAgPSB7fVxyXG4gICAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcclxuICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbihmbil7XHJcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcclxuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW52b2tlKGlzRnVuY3Rpb24oZm4pID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZGVmZXIoY291bnRlcik7XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9XHJcbiAgY2xlYXJJbW1lZGlhdGUgPSBmdW5jdGlvbihpZCl7XHJcbiAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBydW4oaWQpe1xyXG4gICAgaWYoaGFzKHF1ZXVlLCBpZCkpe1xyXG4gICAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XHJcbiAgICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgICAgIGZuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe1xyXG4gICAgcnVuKGV2ZW50LmRhdGEpO1xyXG4gIH1cclxuICAvLyBOb2RlLmpzIDAuOC1cclxuICBpZihOT0RFKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBuZXh0VGljayhwYXJ0LmNhbGwocnVuLCBpZCkpO1xyXG4gICAgfVxyXG4gIC8vIE1vZGVybiBicm93c2Vycywgc2tpcCBpbXBsZW1lbnRhdGlvbiBmb3IgV2ViV29ya2Vyc1xyXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzIG9iamVjdFxyXG4gIH0gZWxzZSBpZihhZGRFdmVudExpc3RlbmVyICYmIGlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgcG9zdE1lc3NhZ2UoaWQsICcqJyk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xyXG4gIC8vIFdlYldvcmtlcnNcclxuICB9IGVsc2UgaWYoaXNGdW5jdGlvbihNZXNzYWdlQ2hhbm5lbCkpe1xyXG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcclxuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xyXG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xyXG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XHJcbiAgLy8gSUU4LVxyXG4gIH0gZWxzZSBpZihkb2N1bWVudCAmJiBPTlJFQURZU1RBVEVDSEFOR0UgaW4gZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKCdzY3JpcHQnKSl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgaHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIHJ1bihpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgc2V0VGltZW91dChydW4sIDAsIGlkKTtcclxuICAgIH1cclxuICB9XHJcbn0oJ29ucmVhZHlzdGF0ZWNoYW5nZScpO1xyXG4kZGVmaW5lKEdMT0JBTCArIEJJTkQsIHtcclxuICBzZXRJbW1lZGlhdGU6ICAgc2V0SW1tZWRpYXRlLFxyXG4gIGNsZWFySW1tZWRpYXRlOiBjbGVhckltbWVkaWF0ZVxyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnByb21pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRVM2IHByb21pc2VzIHNoaW1cclxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2dldGlmeS9uYXRpdmUtcHJvbWlzZS1vbmx5L1xyXG4hZnVuY3Rpb24oUHJvbWlzZSwgdGVzdCl7XHJcbiAgaXNGdW5jdGlvbihQcm9taXNlKSAmJiBpc0Z1bmN0aW9uKFByb21pc2UucmVzb2x2ZSlcclxuICAmJiBQcm9taXNlLnJlc29sdmUodGVzdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7fSkpID09IHRlc3RcclxuICB8fCBmdW5jdGlvbihhc2FwLCBSRUNPUkQpe1xyXG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZShpdCl7XHJcbiAgICAgIHZhciB0aGVuO1xyXG4gICAgICBpZihpc09iamVjdChpdCkpdGhlbiA9IGl0LnRoZW47XHJcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoZW4pID8gdGhlbiA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHByb21pc2VbUkVDT1JEXVxyXG4gICAgICAgICwgY2hhaW4gID0gcmVjb3JkLmNcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIHJlYWN0O1xyXG4gICAgICBpZihyZWNvcmQuaClyZXR1cm4gdHJ1ZTtcclxuICAgICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XHJcbiAgICAgICAgcmVhY3QgPSBjaGFpbltpKytdO1xyXG4gICAgICAgIGlmKHJlYWN0LmZhaWwgfHwgaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChyZWFjdC5QKSlyZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbm90aWZ5KHJlY29yZCwgcmVqZWN0KXtcclxuICAgICAgdmFyIGNoYWluID0gcmVjb3JkLmM7XHJcbiAgICAgIGlmKHJlamVjdCB8fCBjaGFpbi5sZW5ndGgpYXNhcChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcclxuICAgICAgICAgICwgdmFsdWUgICA9IHJlY29yZC52XHJcbiAgICAgICAgICAsIG9rICAgICAgPSByZWNvcmQucyA9PSAxXHJcbiAgICAgICAgICAsIGkgICAgICAgPSAwO1xyXG4gICAgICAgIGlmKHJlamVjdCAmJiAhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtcclxuICAgICAgICAgICAgICBpZihOT0RFKXtcclxuICAgICAgICAgICAgICAgIGlmKCFwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKSl7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgbm9kZS5qcyBiZWhhdmlvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihpc0Z1bmN0aW9uKGNvbnNvbGUuZXJyb3IpKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDFlMyk7XHJcbiAgICAgICAgfSBlbHNlIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpIWZ1bmN0aW9uKHJlYWN0KXtcclxuICAgICAgICAgIHZhciBjYiA9IG9rID8gcmVhY3Qub2sgOiByZWFjdC5mYWlsXHJcbiAgICAgICAgICAgICwgcmV0LCB0aGVuO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoY2Ipe1xyXG4gICAgICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcmV0ID0gY2IgPT09IHRydWUgPyB2YWx1ZSA6IGNiKHZhbHVlKTtcclxuICAgICAgICAgICAgICBpZihyZXQgPT09IHJlYWN0LlApe1xyXG4gICAgICAgICAgICAgICAgcmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFICsgJy1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmV0KSl7XHJcbiAgICAgICAgICAgICAgICB0aGVuLmNhbGwocmV0LCByZWFjdC5yZXMsIHJlYWN0LnJlaik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHJlYWN0LnJlcyhyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgcmVhY3QucmVqKHZhbHVlKTtcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgcmVhY3QucmVqKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfShjaGFpbltpKytdKTtcclxuICAgICAgICBjaGFpbi5sZW5ndGggPSAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpc1xyXG4gICAgICAgICwgdGhlbiwgd3JhcHBlcjtcclxuICAgICAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gICAgICByZWNvcmQuZCA9IHRydWU7XHJcbiAgICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcclxuICAgICAgICAgIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcclxuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgocmVqZWN0LCB3cmFwcGVyLCAxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgICAgICByZWNvcmQucyA9IDE7XHJcbiAgICAgICAgICBub3RpZnkocmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICByZWplY3QuY2FsbCh3cmFwcGVyIHx8IHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZXJyKTsgLy8gd3JhcFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpe1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpcztcclxuICAgICAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gICAgICByZWNvcmQuZCA9IHRydWU7XHJcbiAgICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgIHJlY29yZC5zID0gMjtcclxuICAgICAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDb25zdHJ1Y3RvcihDKXtcclxuICAgICAgdmFyIFMgPSBhc3NlcnRPYmplY3QoQylbU1lNQk9MX1NQRUNJRVNdO1xyXG4gICAgICByZXR1cm4gUyAhPSB1bmRlZmluZWQgPyBTIDogQztcclxuICAgIH1cclxuICAgIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXHJcbiAgICBQcm9taXNlID0gZnVuY3Rpb24oZXhlY3V0b3Ipe1xyXG4gICAgICBhc3NlcnRGdW5jdGlvbihleGVjdXRvcik7XHJcbiAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIFByb21pc2UsIFBST01JU0UpO1xyXG4gICAgICB2YXIgcmVjb3JkID0ge1xyXG4gICAgICAgIHA6IHRoaXMsICAgICAgLy8gcHJvbWlzZVxyXG4gICAgICAgIGM6IFtdLCAgICAgICAgLy8gY2hhaW5cclxuICAgICAgICBzOiAwLCAgICAgICAgIC8vIHN0YXRlXHJcbiAgICAgICAgZDogZmFsc2UsICAgICAvLyBkb25lXHJcbiAgICAgICAgdjogdW5kZWZpbmVkLCAvLyB2YWx1ZVxyXG4gICAgICAgIGg6IGZhbHNlICAgICAgLy8gaGFuZGxlZCByZWplY3Rpb25cclxuICAgICAgfTtcclxuICAgICAgaGlkZGVuKHRoaXMsIFJFQ09SRCwgcmVjb3JkKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBleGVjdXRvcihjdHgocmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KHJlamVjdCwgcmVjb3JkLCAxKSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICByZWplY3QuY2FsbChyZWNvcmQsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzc2lnbkhpZGRlbihQcm9taXNlW1BST1RPVFlQRV0sIHtcclxuICAgICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcclxuICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xyXG4gICAgICAgIHZhciBTID0gYXNzZXJ0T2JqZWN0KGFzc2VydE9iamVjdCh0aGlzKVtDT05TVFJVQ1RPUl0pW1NZTUJPTF9TUEVDSUVTXTtcclxuICAgICAgICB2YXIgcmVhY3QgPSB7XHJcbiAgICAgICAgICBvazogICBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogdHJ1ZSxcclxuICAgICAgICAgIGZhaWw6IGlzRnVuY3Rpb24ob25SZWplY3RlZCkgID8gb25SZWplY3RlZCAgOiBmYWxzZVxyXG4gICAgICAgIH0gLCBQID0gcmVhY3QuUCA9IG5ldyAoUyAhPSB1bmRlZmluZWQgPyBTIDogUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIHJlYWN0LnJlcyA9IGFzc2VydEZ1bmN0aW9uKHJlc29sdmUpO1xyXG4gICAgICAgICAgcmVhY3QucmVqID0gYXNzZXJ0RnVuY3Rpb24ocmVqZWN0KTtcclxuICAgICAgICB9KSwgcmVjb3JkID0gdGhpc1tSRUNPUkRdO1xyXG4gICAgICAgIHJlY29yZC5jLnB1c2gocmVhY3QpO1xyXG4gICAgICAgIHJlY29yZC5zICYmIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICAgIHJldHVybiBQO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxyXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYXNzaWduSGlkZGVuKFByb21pc2UsIHtcclxuICAgICAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXHJcbiAgICAgIGFsbDogZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgIHZhciBQcm9taXNlID0gZ2V0Q29uc3RydWN0b3IodGhpcylcclxuICAgICAgICAgICwgdmFsdWVzICA9IFtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBwdXNoLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xyXG4gICAgICAgICAgaWYocmVtYWluaW5nKWZvckVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXHJcbiAgICAgIHJhY2U6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICB2YXIgUHJvbWlzZSA9IGdldENvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxyXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKHIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgKGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgcmVqZWN0KHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcclxuICAgICAgcmVzb2x2ZTogZnVuY3Rpb24oeCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIFJFQ09SRCBpbiB4ICYmIGdldFByb3RvdHlwZU9mKHgpID09PSB0aGlzW1BST1RPVFlQRV1cclxuICAgICAgICAgID8geCA6IG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfShuZXh0VGljayB8fCBzZXRJbW1lZGlhdGUsIHNhZmVTeW1ib2woJ3JlY29yZCcpKTtcclxuICBzZXRUb1N0cmluZ1RhZyhQcm9taXNlLCBQUk9NSVNFKTtcclxuICBzZXRTcGVjaWVzKFByb21pc2UpO1xyXG4gICRkZWZpbmUoR0xPQkFMICsgRk9SQ0VEICogIWlzTmF0aXZlKFByb21pc2UpLCB7UHJvbWlzZTogUHJvbWlzZX0pO1xyXG59KGdsb2JhbFtQUk9NSVNFXSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5jb2xsZWN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBjb2xsZWN0aW9ucyBzaGltXHJcbiFmdW5jdGlvbigpe1xyXG4gIHZhciBVSUQgICA9IHNhZmVTeW1ib2woJ3VpZCcpXHJcbiAgICAsIE8xICAgID0gc2FmZVN5bWJvbCgnTzEnKVxyXG4gICAgLCBXRUFLICA9IHNhZmVTeW1ib2woJ3dlYWsnKVxyXG4gICAgLCBMRUFLICA9IHNhZmVTeW1ib2woJ2xlYWsnKVxyXG4gICAgLCBMQVNUICA9IHNhZmVTeW1ib2woJ2xhc3QnKVxyXG4gICAgLCBGSVJTVCA9IHNhZmVTeW1ib2woJ2ZpcnN0JylcclxuICAgICwgU0laRSAgPSBERVNDID8gc2FmZVN5bWJvbCgnc2l6ZScpIDogJ3NpemUnXHJcbiAgICAsIHVpZCAgID0gMFxyXG4gICAgLCB0bXAgICA9IHt9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oQywgTkFNRSwgbWV0aG9kcywgY29tbW9uTWV0aG9kcywgaXNNYXAsIGlzV2Vhayl7XHJcbiAgICB2YXIgQURERVIgPSBpc01hcCA/ICdzZXQnIDogJ2FkZCdcclxuICAgICAgLCBwcm90byA9IEMgJiYgQ1tQUk9UT1RZUEVdXHJcbiAgICAgICwgTyAgICAgPSB7fTtcclxuICAgIGZ1bmN0aW9uIGluaXRGcm9tSXRlcmFibGUodGhhdCwgaXRlcmFibGUpe1xyXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIGlzTWFwLCB0aGF0W0FEREVSXSwgdGhhdCk7XHJcbiAgICAgIHJldHVybiB0aGF0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZml4U1ZaKGtleSwgY2hhaW4pe1xyXG4gICAgICB2YXIgbWV0aG9kID0gcHJvdG9ba2V5XTtcclxuICAgICAgaWYoZnJhbWV3b3JrKXByb3RvW2tleV0gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTtcclxuICAgICAgICByZXR1cm4gY2hhaW4gPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYoIWlzTmF0aXZlKEMpIHx8ICEoaXNXZWFrIHx8ICghQlVHR1lfSVRFUkFUT1JTICYmIGhhcyhwcm90bywgRk9SX0VBQ0gpICYmIGhhcyhwcm90bywgJ2VudHJpZXMnKSkpKXtcclxuICAgICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcclxuICAgICAgQyA9IGlzV2Vha1xyXG4gICAgICAgID8gZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBDLCBOQU1FKTtcclxuICAgICAgICAgICAgc2V0KHRoaXMsIFVJRCwgdWlkKyspO1xyXG4gICAgICAgICAgICBpbml0RnJvbUl0ZXJhYmxlKHRoaXMsIGl0ZXJhYmxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGF0LCBDLCBOQU1FKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIE8xLCBjcmVhdGUobnVsbCkpO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgU0laRSwgMCk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBMQVNULCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgRklSU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGluaXRGcm9tSXRlcmFibGUodGhhdCwgaXRlcmFibGUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgYXNzaWduSGlkZGVuKGFzc2lnbkhpZGRlbihDW1BST1RPVFlQRV0sIG1ldGhvZHMpLCBjb21tb25NZXRob2RzKTtcclxuICAgICAgaXNXZWFrIHx8ICFERVNDIHx8IGRlZmluZVByb3BlcnR5KENbUFJPVE9UWVBFXSwgJ3NpemUnLCB7Z2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBhc3NlcnREZWZpbmVkKHRoaXNbU0laRV0pO1xyXG4gICAgICB9fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgTmF0aXZlID0gQ1xyXG4gICAgICAgICwgaW5zdCAgID0gbmV3IENcclxuICAgICAgICAsIGNoYWluICA9IGluc3RbQURERVJdKGlzV2VhayA/IHt9IDogLTAsIDEpXHJcbiAgICAgICAgLCBidWdneVplcm87XHJcbiAgICAgIC8vIHdyYXAgdG8gaW5pdCBjb2xsZWN0aW9ucyBmcm9tIGl0ZXJhYmxlXHJcbiAgICAgIGlmKGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZnVuY3Rpb24oTyl7IG5ldyBDKE8pIH0pKXtcclxuICAgICAgICBDID0gZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgICByZXR1cm4gaW5pdEZyb21JdGVyYWJsZShuZXcgTmF0aXZlLCBpdGVyYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENbUFJPVE9UWVBFXSA9IHByb3RvO1xyXG4gICAgICAgIGlmKGZyYW1ld29yaylwcm90b1tDT05TVFJVQ1RPUl0gPSBDO1xyXG4gICAgICB9XHJcbiAgICAgIGlzV2VhayB8fCBpbnN0W0ZPUl9FQUNIXShmdW5jdGlvbih2YWwsIGtleSl7XHJcbiAgICAgICAgYnVnZ3laZXJvID0gMSAvIGtleSA9PT0gLUluZmluaXR5O1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gZml4IGNvbnZlcnRpbmcgLTAga2V5IHRvICswXHJcbiAgICAgIGlmKGJ1Z2d5WmVybyl7XHJcbiAgICAgICAgZml4U1ZaKCdkZWxldGUnKTtcclxuICAgICAgICBmaXhTVlooJ2hhcycpO1xyXG4gICAgICAgIGlzTWFwICYmIGZpeFNWWignZ2V0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gKyBmaXggLmFkZCAmIC5zZXQgZm9yIGNoYWluaW5nXHJcbiAgICAgIGlmKGJ1Z2d5WmVybyB8fCBjaGFpbiAhPT0gaW5zdClmaXhTVlooQURERVIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XHJcbiAgICBzZXRTcGVjaWVzKEMpO1xyXG4gICAgXHJcbiAgICBPW05BTUVdID0gQztcclxuICAgICRkZWZpbmUoR0xPQkFMICsgV1JBUCArIEZPUkNFRCAqICFpc05hdGl2ZShDKSwgTyk7XHJcbiAgICBcclxuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxyXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxyXG4gICAgaXNXZWFrIHx8IGRlZmluZVN0ZEl0ZXJhdG9ycyhDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IGtpbmR9KTtcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICAgLCBlbnRyeSA9IGl0ZXIubDtcclxuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxyXG4gICAgICBpZighaXRlci5vIHx8ICEoaXRlci5sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiBpdGVyLm9bRklSU1RdKSl7XHJcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cclxuICAgICAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxyXG4gICAgICBpZihraW5kID09IEtFWSkgIHJldHVybiBpdGVyUmVzdWx0KDAsIGVudHJ5LmspO1xyXG4gICAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIGVudHJ5LnYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7ICAgXHJcbiAgICB9LCBpc01hcCA/IEtFWStWQUxVRSA6IFZBTFVFLCAhaXNNYXApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gQztcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZmFzdEtleShpdCwgY3JlYXRlKXtcclxuICAgIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcclxuICAgIGlmKCFpc09iamVjdChpdCkpcmV0dXJuICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XHJcbiAgICAvLyBjYW4ndCBzZXQgaWQgdG8gZnJvemVuIG9iamVjdFxyXG4gICAgaWYoaXNGcm96ZW4oaXQpKXJldHVybiAnRic7XHJcbiAgICBpZighaGFzKGl0LCBVSUQpKXtcclxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcclxuICAgICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xyXG4gICAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcclxuICAgICAgaGlkZGVuKGl0LCBVSUQsICsrdWlkKTtcclxuICAgIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcclxuICAgIH0gcmV0dXJuICdPJyArIGl0W1VJRF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsIGtleSl7XHJcbiAgICAvLyBmYXN0IGNhc2VcclxuICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XHJcbiAgICBpZihpbmRleCAhPSAnRicpcmV0dXJuIHRoYXRbTzFdW2luZGV4XTtcclxuICAgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxyXG4gICAgZm9yKGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xyXG4gICAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlZih0aGF0LCBrZXksIHZhbHVlKXtcclxuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcclxuICAgICAgLCBwcmV2LCBpbmRleDtcclxuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxyXG4gICAgaWYoZW50cnkpZW50cnkudiA9IHZhbHVlO1xyXG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoYXRbTEFTVF0gPSBlbnRyeSA9IHtcclxuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcclxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XHJcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXHJcbiAgICAgICAgcDogcHJldiA9IHRoYXRbTEFTVF0sICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XHJcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcclxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxyXG4gICAgICB9O1xyXG4gICAgICBpZighdGhhdFtGSVJTVF0pdGhhdFtGSVJTVF0gPSBlbnRyeTtcclxuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcclxuICAgICAgdGhhdFtTSVpFXSsrO1xyXG4gICAgICAvLyBhZGQgdG8gaW5kZXhcclxuICAgICAgaWYoaW5kZXggIT0gJ0YnKXRoYXRbTzFdW2luZGV4XSA9IGVudHJ5O1xyXG4gICAgfSByZXR1cm4gdGhhdDtcclxuICB9XHJcblxyXG4gIHZhciBjb2xsZWN0aW9uTWV0aG9kcyA9IHtcclxuICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxyXG4gICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXHJcbiAgICBjbGVhcjogZnVuY3Rpb24oKXtcclxuICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXRbTzFdLCBlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcclxuICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XHJcbiAgICAgIH1cclxuICAgICAgdGhhdFtGSVJTVF0gPSB0aGF0W0xBU1RdID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGF0W1NJWkVdID0gMDtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXHJcbiAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XHJcbiAgICAgIGlmKGVudHJ5KXtcclxuICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cclxuICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XHJcbiAgICAgICAgZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO1xyXG4gICAgICAgIGVudHJ5LnIgPSB0cnVlO1xyXG4gICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcclxuICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XHJcbiAgICAgICAgaWYodGhhdFtGSVJTVF0gPT0gZW50cnkpdGhhdFtGSVJTVF0gPSBuZXh0O1xyXG4gICAgICAgIGlmKHRoYXRbTEFTVF0gPT0gZW50cnkpdGhhdFtMQVNUXSA9IHByZXY7XHJcbiAgICAgICAgdGhhdFtTSVpFXS0tO1xyXG4gICAgICB9IHJldHVybiAhIWVudHJ5O1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdLCAzKVxyXG4gICAgICAgICwgZW50cnk7XHJcbiAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpc1tGSVJTVF0pe1xyXG4gICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XHJcbiAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXHJcbiAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gMjMuMSBNYXAgT2JqZWN0c1xyXG4gIE1hcCA9IGdldENvbGxlY3Rpb24oTWFwLCBNQVAsIHtcclxuICAgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcclxuICAgIGdldDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhpcywga2V5KTtcclxuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcclxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIGNvbGxlY3Rpb25NZXRob2RzLCB0cnVlKTtcclxuICBcclxuICAvLyAyMy4yIFNldCBPYmplY3RzXHJcbiAgU2V0ID0gZ2V0Q29sbGVjdGlvbihTZXQsIFNFVCwge1xyXG4gICAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgY29sbGVjdGlvbk1ldGhvZHMpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGRlZldlYWsodGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICBpZihpc0Zyb3plbihhc3NlcnRPYmplY3Qoa2V5KSkpbGVha1N0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBoYXMoa2V5LCBXRUFLKSB8fCBoaWRkZW4oa2V5LCBXRUFLLCB7fSk7XHJcbiAgICAgIGtleVtXRUFLXVt0aGF0W1VJRF1dID0gdmFsdWU7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH1cclxuICBmdW5jdGlvbiBsZWFrU3RvcmUodGhhdCl7XHJcbiAgICByZXR1cm4gdGhhdFtMRUFLXSB8fCBoaWRkZW4odGhhdCwgTEVBSywgbmV3IE1hcClbTEVBS107XHJcbiAgfVxyXG4gIFxyXG4gIHZhciB3ZWFrTWV0aG9kcyA9IHtcclxuICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XHJcbiAgICAgIHJldHVybiBoYXMoa2V5LCBXRUFLKSAmJiBoYXMoa2V5W1dFQUtdLCB0aGlzW1VJRF0pICYmIGRlbGV0ZSBrZXlbV0VBS11bdGhpc1tVSURdXTtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxyXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5oYXMoa2V5KTtcclxuICAgICAgcmV0dXJuIGhhcyhrZXksIFdFQUspICYmIGhhcyhrZXlbV0VBS10sIHRoaXNbVUlEXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICAvLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xyXG4gIFdlYWtNYXAgPSBnZXRDb2xsZWN0aW9uKFdlYWtNYXAsIFdFQUtNQVAsIHtcclxuICAgIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGlzT2JqZWN0KGtleSkpe1xyXG4gICAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5nZXQoa2V5KTtcclxuICAgICAgICBpZihoYXMoa2V5LCBXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXNbVUlEXV07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcclxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWZXZWFrKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIHdlYWtNZXRob2RzLCB0cnVlLCB0cnVlKTtcclxuICBcclxuICAvLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XHJcbiAgaWYoZnJhbWV3b3JrICYmIG5ldyBXZWFrTWFwKCkuc2V0KE9iamVjdC5mcmVlemUodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2RlbGV0ZSxoYXMsZ2V0LHNldCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgbWV0aG9kID0gV2Vha01hcFtQUk9UT1RZUEVdW2tleV07XHJcbiAgICAgIFdlYWtNYXBbUFJPVE9UWVBFXVtrZXldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gbGVha3kgbWFwXHJcbiAgICAgICAgaWYoaXNPYmplY3QoYSkgJiYgaXNGcm96ZW4oYSkpe1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGxlYWtTdG9yZSh0aGlzKVtrZXldKGEsIGIpO1xyXG4gICAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXHJcbiAgICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcclxuICBXZWFrU2V0ID0gZ2V0Q29sbGVjdGlvbihXZWFrU2V0LCBXRUFLU0VULCB7XHJcbiAgICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZldlYWsodGhpcywgdmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIHdlYWtNZXRob2RzLCBmYWxzZSwgdHJ1ZSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnJlZmxlY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgZnVuY3Rpb24gRW51bWVyYXRlKGl0ZXJhdGVkKXtcclxuICAgIHZhciBrZXlzID0gW10sIGtleTtcclxuICAgIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBhOiBrZXlzLCBpOiAwfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKEVudW1lcmF0ZSwgT0JKRUNULCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgPSB0aGlzW0lURVJdXHJcbiAgICAgICwga2V5cyA9IGl0ZXIuYVxyXG4gICAgICAsIGtleTtcclxuICAgIGRvIHtcclxuICAgICAgaWYoaXRlci5pID49IGtleXMubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgfSB3aGlsZSghKChrZXkgPSBrZXlzW2l0ZXIuaSsrXSkgaW4gaXRlci5vKSk7XHJcbiAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBrZXkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHdyYXAoZm4pe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpLCB0cnVlO1xyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiByZWZsZWN0R2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGRlc2MgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSksIHByb3RvO1xyXG4gICAgaWYoZGVzYylyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXHJcbiAgICAgID8gZGVzYy52YWx1ZVxyXG4gICAgICA6IGRlc2MuZ2V0ID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDogZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKVxyXG4gICAgICA/IHJlZmxlY3RHZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcilcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlZmxlY3RTZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcclxuICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXHJcbiAgICAgICwgb3duRGVzYyAgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSlcclxuICAgICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xyXG4gICAgaWYoIW93bkRlc2Mpe1xyXG4gICAgICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtcclxuICAgICAgICByZXR1cm4gcmVmbGVjdFNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcclxuICAgICAgfVxyXG4gICAgICBvd25EZXNjID0gZGVzY3JpcHRvcigwKTtcclxuICAgIH1cclxuICAgIGlmKGhhcyhvd25EZXNjLCAndmFsdWUnKSl7XHJcbiAgICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnZXRPd25EZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgZGVzY3JpcHRvcigwKTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcclxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKSwgdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gZmFsc2VcclxuICAgICAgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xyXG4gIH1cclxuICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCByZXR1cm5JdDtcclxuICBcclxuICB2YXIgcmVmbGVjdCA9IHtcclxuICAgIC8vIDI2LjEuMSBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KVxyXG4gICAgYXBwbHk6IGN0eChjYWxsLCBhcHBseSwgMyksXHJcbiAgICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXHJcbiAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uKHRhcmdldCwgYXJndW1lbnRzTGlzdCAvKiwgbmV3VGFyZ2V0Ki8pe1xyXG4gICAgICB2YXIgcHJvdG8gICAgPSBhc3NlcnRGdW5jdGlvbihhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXSlbUFJPVE9UWVBFXVxyXG4gICAgICAgICwgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3RQcm90bylcclxuICAgICAgICAsIHJlc3VsdCAgID0gYXBwbHkuY2FsbCh0YXJnZXQsIGluc3RhbmNlLCBhcmd1bWVudHNMaXN0KTtcclxuICAgICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxyXG4gICAgZGVmaW5lUHJvcGVydHk6IHdyYXAoZGVmaW5lUHJvcGVydHkpLFxyXG4gICAgLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgICAgdmFyIGRlc2MgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcclxuICAgIGVudW1lcmF0ZTogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcclxuICAgIGdldDogcmVmbGVjdEdldCxcclxuICAgIC8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgICAgcmV0dXJuIGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXHJcbiAgICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGhhczogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXHJcbiAgICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiAhIWlzRXh0ZW5zaWJsZShhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG4gICAgb3duS2V5czogb3duS2V5cyxcclxuICAgIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXHJcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogd3JhcChPYmplY3QucHJldmVudEV4dGVuc2lvbnMgfHwgcmV0dXJuSXQpLFxyXG4gICAgLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcclxuICAgIHNldDogcmVmbGVjdFNldFxyXG4gIH1cclxuICAvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcclxuICBpZihzZXRQcm90b3R5cGVPZilyZWZsZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90byl7XHJcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3RvKSwgdHJ1ZTtcclxuICB9O1xyXG4gIFxyXG4gICRkZWZpbmUoR0xPQkFMLCB7UmVmbGVjdDoge319KTtcclxuICAkZGVmaW5lKFNUQVRJQywgJ1JlZmxlY3QnLCByZWZsZWN0KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczcucHJvcG9zYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFBST1RPLCBBUlJBWSwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RvbWVuaWMvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXHJcbiAgICBpbmNsdWRlczogY3JlYXRlQXJyYXlDb250YWlucyh0cnVlKVxyXG4gIH0pO1xyXG4gICRkZWZpbmUoUFJPVE8sIFNUUklORywge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxyXG4gICAgYXQ6IGNyZWF0ZVBvaW50QXQodHJ1ZSlcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RUb0FycmF5KGlzRW50cmllcyl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgICAsIGtleXMgICA9IGdldEtleXMob2JqZWN0KVxyXG4gICAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIHJlc3VsdCA9IEFycmF5KGxlbmd0aClcclxuICAgICAgICAsIGtleTtcclxuICAgICAgaWYoaXNFbnRyaWVzKXdoaWxlKGxlbmd0aCA+IGkpcmVzdWx0W2ldID0gW2tleSA9IGtleXNbaSsrXSwgT1trZXldXTtcclxuICAgICAgZWxzZSB3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IE9ba2V5c1tpKytdXTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcbiAgJGRlZmluZShTVEFUSUMsIE9CSkVDVCwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXHJcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICwgcmVzdWx0ID0ge307XHJcbiAgICAgIGZvckVhY2guY2FsbChvd25LZXlzKE8pLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKDAsIGdldE93bkRlc2NyaXB0b3IoTywga2V5KSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcndhbGRyb24vdGMzOS1ub3Rlcy9ibG9iL21hc3Rlci9lczYvMjAxNC0wNC9hcHItOS5tZCM1MS1vYmplY3RlbnRyaWVzLW9iamVjdHZhbHVlc1xyXG4gICAgdmFsdWVzOiAgY3JlYXRlT2JqZWN0VG9BcnJheShmYWxzZSksXHJcbiAgICBlbnRyaWVzOiBjcmVhdGVPYmplY3RUb0FycmF5KHRydWUpXHJcbiAgfSk7XHJcbiAgJGRlZmluZShTVEFUSUMsIFJFR0VYUCwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va2FuZ2F4Lzk2OTgxMDBcclxuICAgIGVzY2FwZTogY3JlYXRlUmVwbGFjZXIoLyhbXFxcXFxcLVtcXF17fSgpKis/LixeJHxdKS9nLCAnXFxcXCQxJywgdHJ1ZSlcclxuICB9KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczcuYWJzdHJhY3QtcmVmcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1hYnN0cmFjdC1yZWZzXHJcbiFmdW5jdGlvbihSRUZFUkVOQ0Upe1xyXG4gIFJFRkVSRU5DRV9HRVQgPSBnZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFKydHZXQnLCB0cnVlKTtcclxuICB2YXIgUkVGRVJFTkNFX1NFVCA9IGdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrU0VULCB0cnVlKVxyXG4gICAgLCBSRUZFUkVOQ0VfREVMRVRFID0gZ2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRSsnRGVsZXRlJywgdHJ1ZSk7XHJcbiAgXHJcbiAgJGRlZmluZShTVEFUSUMsIFNZTUJPTCwge1xyXG4gICAgcmVmZXJlbmNlR2V0OiBSRUZFUkVOQ0VfR0VULFxyXG4gICAgcmVmZXJlbmNlU2V0OiBSRUZFUkVOQ0VfU0VULFxyXG4gICAgcmVmZXJlbmNlRGVsZXRlOiBSRUZFUkVOQ0VfREVMRVRFXHJcbiAgfSk7XHJcbiAgXHJcbiAgaGlkZGVuKEZ1bmN0aW9uUHJvdG8sIFJFRkVSRU5DRV9HRVQsIHJldHVyblRoaXMpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldE1hcE1ldGhvZHMoQ29uc3RydWN0b3Ipe1xyXG4gICAgaWYoQ29uc3RydWN0b3Ipe1xyXG4gICAgICB2YXIgTWFwUHJvdG8gPSBDb25zdHJ1Y3RvcltQUk9UT1RZUEVdO1xyXG4gICAgICBoaWRkZW4oTWFwUHJvdG8sIFJFRkVSRU5DRV9HRVQsIE1hcFByb3RvLmdldCk7XHJcbiAgICAgIGhpZGRlbihNYXBQcm90bywgUkVGRVJFTkNFX1NFVCwgTWFwUHJvdG8uc2V0KTtcclxuICAgICAgaGlkZGVuKE1hcFByb3RvLCBSRUZFUkVOQ0VfREVMRVRFLCBNYXBQcm90b1snZGVsZXRlJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRNYXBNZXRob2RzKE1hcCk7XHJcbiAgc2V0TWFwTWV0aG9kcyhXZWFrTWFwKTtcclxufSgncmVmZXJlbmNlJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuZGljdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihESUNUKXtcclxuICBEaWN0ID0gZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgdmFyIGRpY3QgPSBjcmVhdGUobnVsbCk7XHJcbiAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICBpZihpc0l0ZXJhYmxlKGl0ZXJhYmxlKSl7XHJcbiAgICAgICAgZm9yT2YoaXRlcmFibGUsIHRydWUsIGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgICAgZGljdFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBhc3NpZ24oZGljdCwgaXRlcmFibGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpY3Q7XHJcbiAgfVxyXG4gIERpY3RbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgXHJcbiAgZnVuY3Rpb24gRGljdEl0ZXJhdG9yKGl0ZXJhdGVkLCBraW5kKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogdG9PYmplY3QoaXRlcmF0ZWQpLCBhOiBnZXRLZXlzKGl0ZXJhdGVkKSwgaTogMCwgazoga2luZH0pO1xyXG4gIH1cclxuICBjcmVhdGVJdGVyYXRvcihEaWN0SXRlcmF0b3IsIERJQ1QsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBPICAgID0gaXRlci5vXHJcbiAgICAgICwga2V5cyA9IGl0ZXIuYVxyXG4gICAgICAsIGtpbmQgPSBpdGVyLmtcclxuICAgICAgLCBrZXk7XHJcbiAgICBkbyB7XHJcbiAgICAgIGlmKGl0ZXIuaSA+PSBrZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgaXRlci5vID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgICB9XHJcbiAgICB9IHdoaWxlKCFoYXMoTywga2V5ID0ga2V5c1tpdGVyLmkrK10pKTtcclxuICAgIGlmKGtpbmQgPT0gS0VZKSAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwga2V5KTtcclxuICAgIGlmKGtpbmQgPT0gVkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCwgT1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgW2tleSwgT1trZXldXSk7XHJcbiAgfSk7XHJcbiAgZnVuY3Rpb24gY3JlYXRlRGljdEl0ZXIoa2luZCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oaXQpe1xyXG4gICAgICByZXR1cm4gbmV3IERpY3RJdGVyYXRvcihpdCwga2luZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogMCAtPiBmb3JFYWNoXHJcbiAgICogMSAtPiBtYXBcclxuICAgKiAyIC0+IGZpbHRlclxyXG4gICAqIDMgLT4gc29tZVxyXG4gICAqIDQgLT4gZXZlcnlcclxuICAgKiA1IC0+IGZpbmRcclxuICAgKiA2IC0+IGZpbmRLZXlcclxuICAgKiA3IC0+IG1hcFBhaXJzXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlRGljdE1ldGhvZCh0eXBlKXtcclxuICAgIHZhciBpc01hcCAgICA9IHR5cGUgPT0gMVxyXG4gICAgICAsIGlzRXZlcnkgID0gdHlwZSA9PSA0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgY2FsbGJhY2tmbiwgdGhhdCAvKiA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICAgIHZhciBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcclxuICAgICAgICAsIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgICAsIHJlc3VsdCA9IGlzTWFwIHx8IHR5cGUgPT0gNyB8fCB0eXBlID09IDIgPyBuZXcgKGdlbmVyaWModGhpcywgRGljdCkpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgLCBrZXksIHZhbCwgcmVzO1xyXG4gICAgICBmb3Ioa2V5IGluIE8paWYoaGFzKE8sIGtleSkpe1xyXG4gICAgICAgIHZhbCA9IE9ba2V5XTtcclxuICAgICAgICByZXMgPSBmKHZhbCwga2V5LCBvYmplY3QpO1xyXG4gICAgICAgIGlmKHR5cGUpe1xyXG4gICAgICAgICAgaWYoaXNNYXApcmVzdWx0W2tleV0gPSByZXM7ICAgICAgICAgICAgIC8vIG1hcFxyXG4gICAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJlc3VsdFtrZXldID0gdmFsOyBicmVhayAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGtleTsgICAgICAgICAgICAgICAgICAgLy8gZmluZEtleVxyXG4gICAgICAgICAgICBjYXNlIDc6IHJlc3VsdFtyZXNbMF1dID0gcmVzWzFdOyAgICAgIC8vIG1hcFBhaXJzXHJcbiAgICAgICAgICB9IGVsc2UgaWYoaXNFdmVyeSlyZXR1cm4gZmFsc2U7ICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHR5cGUgPT0gMyB8fCBpc0V2ZXJ5ID8gaXNFdmVyeSA6IHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlRGljdFJlZHVjZShpc1R1cm4pe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgbWFwZm4sIGluaXQpe1xyXG4gICAgICBhc3NlcnRGdW5jdGlvbihtYXBmbik7XHJcbiAgICAgIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXHJcbiAgICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgICAgICwgaSAgICAgID0gMFxyXG4gICAgICAgICwgbWVtbywga2V5LCByZXN1bHQ7XHJcbiAgICAgIGlmKGlzVHVybiltZW1vID0gaW5pdCA9PSB1bmRlZmluZWQgPyBuZXcgKGdlbmVyaWModGhpcywgRGljdCkpIDogT2JqZWN0KGluaXQpO1xyXG4gICAgICBlbHNlIGlmKGFyZ3VtZW50cy5sZW5ndGggPCAzKXtcclxuICAgICAgICBhc3NlcnQobGVuZ3RoLCBSRURVQ0VfRVJST1IpO1xyXG4gICAgICAgIG1lbW8gPSBPW2tleXNbaSsrXV07XHJcbiAgICAgIH0gZWxzZSBtZW1vID0gT2JqZWN0KGluaXQpO1xyXG4gICAgICB3aGlsZShsZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBrZXlzW2krK10pKXtcclxuICAgICAgICByZXN1bHQgPSBtYXBmbihtZW1vLCBPW2tleV0sIGtleSwgb2JqZWN0KTtcclxuICAgICAgICBpZihpc1R1cm4pe1xyXG4gICAgICAgICAgaWYocmVzdWx0ID09PSBmYWxzZSlicmVhaztcclxuICAgICAgICB9IGVsc2UgbWVtbyA9IHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWVtbztcclxuICAgIH1cclxuICB9XHJcbiAgdmFyIGZpbmRLZXkgPSBjcmVhdGVEaWN0TWV0aG9kKDYpO1xyXG4gIGZ1bmN0aW9uIGluY2x1ZGVzKG9iamVjdCwgZWwpe1xyXG4gICAgcmV0dXJuIChlbCA9PSBlbCA/IGtleU9mKG9iamVjdCwgZWwpIDogZmluZEtleShvYmplY3QsIHNhbWVOYU4pKSAhPT0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICBcclxuICB2YXIgZGljdE1ldGhvZHMgPSB7XHJcbiAgICBrZXlzOiAgICBjcmVhdGVEaWN0SXRlcihLRVkpLFxyXG4gICAgdmFsdWVzOiAgY3JlYXRlRGljdEl0ZXIoVkFMVUUpLFxyXG4gICAgZW50cmllczogY3JlYXRlRGljdEl0ZXIoS0VZK1ZBTFVFKSxcclxuICAgIGZvckVhY2g6IGNyZWF0ZURpY3RNZXRob2QoMCksXHJcbiAgICBtYXA6ICAgICBjcmVhdGVEaWN0TWV0aG9kKDEpLFxyXG4gICAgZmlsdGVyOiAgY3JlYXRlRGljdE1ldGhvZCgyKSxcclxuICAgIHNvbWU6ICAgIGNyZWF0ZURpY3RNZXRob2QoMyksXHJcbiAgICBldmVyeTogICBjcmVhdGVEaWN0TWV0aG9kKDQpLFxyXG4gICAgZmluZDogICAgY3JlYXRlRGljdE1ldGhvZCg1KSxcclxuICAgIGZpbmRLZXk6IGZpbmRLZXksXHJcbiAgICBtYXBQYWlyczpjcmVhdGVEaWN0TWV0aG9kKDcpLFxyXG4gICAgcmVkdWNlOiAgY3JlYXRlRGljdFJlZHVjZShmYWxzZSksXHJcbiAgICB0dXJuOiAgICBjcmVhdGVEaWN0UmVkdWNlKHRydWUpLFxyXG4gICAga2V5T2Y6ICAga2V5T2YsXHJcbiAgICBpbmNsdWRlczppbmNsdWRlcyxcclxuICAgIC8vIEhhcyAvIGdldCAvIHNldCBvd24gcHJvcGVydHlcclxuICAgIGhhczogaGFzLFxyXG4gICAgZ2V0OiBnZXQsXHJcbiAgICBzZXQ6IGNyZWF0ZURlZmluZXIoMCksXHJcbiAgICBpc0RpY3Q6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiBnZXRQcm90b3R5cGVPZihpdCkgPT09IERpY3RbUFJPVE9UWVBFXTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGlmKFJFRkVSRU5DRV9HRVQpZm9yKHZhciBrZXkgaW4gZGljdE1ldGhvZHMpIWZ1bmN0aW9uKGZuKXtcclxuICAgIGZ1bmN0aW9uIG1ldGhvZCgpe1xyXG4gICAgICBmb3IodmFyIGFyZ3MgPSBbdGhpc10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDspYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcclxuICAgICAgcmV0dXJuIGludm9rZShmbiwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBmbltSRUZFUkVOQ0VfR0VUXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICB9XHJcbiAgfShkaWN0TWV0aG9kc1trZXldKTtcclxuICBcclxuICAkZGVmaW5lKEdMT0JBTCArIEZPUkNFRCwge0RpY3Q6IGFzc2lnbkhpZGRlbihEaWN0LCBkaWN0TWV0aG9kcyl9KTtcclxufSgnRGljdCcpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLiRmb3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oRU5UUklFUywgRk4peyAgXHJcbiAgZnVuY3Rpb24gJGZvcihpdGVyYWJsZSwgZW50cmllcyl7XHJcbiAgICBpZighKHRoaXMgaW5zdGFuY2VvZiAkZm9yKSlyZXR1cm4gbmV3ICRmb3IoaXRlcmFibGUsIGVudHJpZXMpO1xyXG4gICAgdGhpc1tJVEVSXSAgICA9IGdldEl0ZXJhdG9yKGl0ZXJhYmxlKTtcclxuICAgIHRoaXNbRU5UUklFU10gPSAhIWVudHJpZXM7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZUl0ZXJhdG9yKCRmb3IsICdXcmFwcGVyJywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB0aGlzW0lURVJdLm5leHQoKTtcclxuICB9KTtcclxuICB2YXIgJGZvclByb3RvID0gJGZvcltQUk9UT1RZUEVdO1xyXG4gIHNldEl0ZXJhdG9yKCRmb3JQcm90bywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB0aGlzW0lURVJdOyAvLyB1bndyYXBcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbkl0ZXJhdG9yKG5leHQpe1xyXG4gICAgZnVuY3Rpb24gSXRlcihJLCBmbiwgdGhhdCl7XHJcbiAgICAgIHRoaXNbSVRFUl0gICAgPSBnZXRJdGVyYXRvcihJKTtcclxuICAgICAgdGhpc1tFTlRSSUVTXSA9IElbRU5UUklFU107XHJcbiAgICAgIHRoaXNbRk5dICAgICAgPSBjdHgoZm4sIHRoYXQsIElbRU5UUklFU10gPyAyIDogMSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVJdGVyYXRvcihJdGVyLCAnQ2hhaW4nLCBuZXh0LCAkZm9yUHJvdG8pO1xyXG4gICAgc2V0SXRlcmF0b3IoSXRlcltQUk9UT1RZUEVdLCByZXR1cm5UaGlzKTsgLy8gb3ZlcnJpZGUgJGZvclByb3RvIGl0ZXJhdG9yXHJcbiAgICByZXR1cm4gSXRlcjtcclxuICB9XHJcbiAgXHJcbiAgdmFyIE1hcEl0ZXIgPSBjcmVhdGVDaGFpbkl0ZXJhdG9yKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgc3RlcCA9IHRoaXNbSVRFUl0ubmV4dCgpO1xyXG4gICAgcmV0dXJuIHN0ZXAuZG9uZSA/IHN0ZXAgOiBpdGVyUmVzdWx0KDAsIHN0ZXBDYWxsKHRoaXNbRk5dLCBzdGVwLnZhbHVlLCB0aGlzW0VOVFJJRVNdKSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgdmFyIEZpbHRlckl0ZXIgPSBjcmVhdGVDaGFpbkl0ZXJhdG9yKGZ1bmN0aW9uKCl7XHJcbiAgICBmb3IoOzspe1xyXG4gICAgICB2YXIgc3RlcCA9IHRoaXNbSVRFUl0ubmV4dCgpO1xyXG4gICAgICBpZihzdGVwLmRvbmUgfHwgc3RlcENhbGwodGhpc1tGTl0sIHN0ZXAudmFsdWUsIHRoaXNbRU5UUklFU10pKXJldHVybiBzdGVwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGFzc2lnbkhpZGRlbigkZm9yUHJvdG8sIHtcclxuICAgIG9mOiBmdW5jdGlvbihmbiwgdGhhdCl7XHJcbiAgICAgIGZvck9mKHRoaXMsIHRoaXNbRU5UUklFU10sIGZuLCB0aGF0KTtcclxuICAgIH0sXHJcbiAgICBhcnJheTogZnVuY3Rpb24oZm4sIHRoYXQpe1xyXG4gICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgIGZvck9mKGZuICE9IHVuZGVmaW5lZCA/IHRoaXMubWFwKGZuLCB0aGF0KSA6IHRoaXMsIGZhbHNlLCBwdXNoLCByZXN1bHQpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIGZpbHRlcjogZnVuY3Rpb24oZm4sIHRoYXQpe1xyXG4gICAgICByZXR1cm4gbmV3IEZpbHRlckl0ZXIodGhpcywgZm4sIHRoYXQpO1xyXG4gICAgfSxcclxuICAgIG1hcDogZnVuY3Rpb24oZm4sIHRoYXQpe1xyXG4gICAgICByZXR1cm4gbmV3IE1hcEl0ZXIodGhpcywgZm4sIHRoYXQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gICRmb3IuaXNJdGVyYWJsZSAgPSBpc0l0ZXJhYmxlO1xyXG4gICRmb3IuZ2V0SXRlcmF0b3IgPSBnZXRJdGVyYXRvcjtcclxuICBcclxuICAkZGVmaW5lKEdMT0JBTCArIEZPUkNFRCwgeyRmb3I6ICRmb3J9KTtcclxufSgnZW50cmllcycsIHNhZmVTeW1ib2woJ2ZuJykpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmRlbGF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBodHRwczovL2VzZGlzY3Vzcy5vcmcvdG9waWMvcHJvbWlzZS1yZXR1cm5pbmctZGVsYXktZnVuY3Rpb25cclxuJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHtcclxuICBkZWxheTogZnVuY3Rpb24odGltZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLmJpbmRpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oXywgdG9Mb2NhbGVTdHJpbmcpe1xyXG4gIC8vIFBsYWNlaG9sZGVyXHJcbiAgY29yZS5fID0gcGF0aC5fID0gcGF0aC5fIHx8IHt9O1xyXG5cclxuICAkZGVmaW5lKFBST1RPICsgRk9SQ0VELCBGVU5DVElPTiwge1xyXG4gICAgcGFydDogcGFydCxcclxuICAgIG9ubHk6IGZ1bmN0aW9uKG51bWJlckFyZ3VtZW50cywgdGhhdCAvKiA9IEAgKi8pe1xyXG4gICAgICB2YXIgZm4gICAgID0gYXNzZXJ0RnVuY3Rpb24odGhpcylcclxuICAgICAgICAsIG4gICAgICA9IHRvTGVuZ3RoKG51bWJlckFyZ3VtZW50cylcclxuICAgICAgICAsIGlzVGhhdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxO1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IG1pbihuLCBhcmd1bWVudHMubGVuZ3RoKVxyXG4gICAgICAgICAgLCBhcmdzICAgPSBBcnJheShsZW5ndGgpXHJcbiAgICAgICAgICAsIGkgICAgICA9IDA7XHJcbiAgICAgICAgd2hpbGUobGVuZ3RoID4gaSlhcmdzW2ldID0gYXJndW1lbnRzW2krK107XHJcbiAgICAgICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgaXNUaGF0ID8gdGhhdCA6IHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gdGllKGtleSl7XHJcbiAgICB2YXIgdGhhdCAgPSB0aGlzXHJcbiAgICAgICwgYm91bmQgPSB7fTtcclxuICAgIHJldHVybiBoaWRkZW4odGhhdCwgXywgZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoa2V5ID09PSB1bmRlZmluZWQgfHwgIShrZXkgaW4gdGhhdCkpcmV0dXJuIHRvTG9jYWxlU3RyaW5nLmNhbGwodGhhdCk7XHJcbiAgICAgIHJldHVybiBoYXMoYm91bmQsIGtleSkgPyBib3VuZFtrZXldIDogKGJvdW5kW2tleV0gPSBjdHgodGhhdFtrZXldLCB0aGF0LCAtMSkpO1xyXG4gICAgfSlbX10oa2V5KTtcclxuICB9XHJcbiAgXHJcbiAgaGlkZGVuKHBhdGguXywgVE9fU1RSSU5HLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIF87XHJcbiAgfSk7XHJcbiAgXHJcbiAgaGlkZGVuKE9iamVjdFByb3RvLCBfLCB0aWUpO1xyXG4gIERFU0MgfHwgaGlkZGVuKEFycmF5UHJvdG8sIF8sIHRpZSk7XHJcbiAgLy8gSUU4LSBkaXJ0eSBoYWNrIC0gcmVkZWZpbmVkIHRvTG9jYWxlU3RyaW5nIGlzIG5vdCBlbnVtZXJhYmxlXHJcbn0oREVTQyA/IHVpZCgndGllJykgOiBUT19MT0NBTEUsIE9iamVjdFByb3RvW1RPX0xPQ0FMRV0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLm9iamVjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICBmdW5jdGlvbiBkZWZpbmUodGFyZ2V0LCBtaXhpbil7XHJcbiAgICB2YXIga2V5cyAgID0gb3duS2V5cyh0b09iamVjdChtaXhpbikpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBpID0gMCwga2V5O1xyXG4gICAgd2hpbGUobGVuZ3RoID4gaSlkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSA9IGtleXNbaSsrXSwgZ2V0T3duRGVzY3JpcHRvcihtaXhpbiwga2V5KSk7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH07XHJcbiAgJGRlZmluZShTVEFUSUMgKyBGT1JDRUQsIE9CSkVDVCwge1xyXG4gICAgaXNPYmplY3Q6IGlzT2JqZWN0LFxyXG4gICAgY2xhc3NvZjogY2xhc3NvZixcclxuICAgIGRlZmluZTogZGVmaW5lLFxyXG4gICAgbWFrZTogZnVuY3Rpb24ocHJvdG8sIG1peGluKXtcclxuICAgICAgcmV0dXJuIGRlZmluZShjcmVhdGUocHJvdG8pLCBtaXhpbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5hcnJheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuJGRlZmluZShQUk9UTyArIEZPUkNFRCwgQVJSQVksIHtcclxuICB0dXJuOiBmdW5jdGlvbihmbiwgdGFyZ2V0IC8qID0gW10gKi8pe1xyXG4gICAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xyXG4gICAgdmFyIG1lbW8gICA9IHRhcmdldCA9PSB1bmRlZmluZWQgPyBbXSA6IE9iamVjdCh0YXJnZXQpXHJcbiAgICAgICwgTyAgICAgID0gRVM1T2JqZWN0KHRoaXMpXHJcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gMDtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKGZuKG1lbW8sIE9baW5kZXhdLCBpbmRleCsrLCB0aGlzKSA9PT0gZmFsc2UpYnJlYWs7XHJcbiAgICByZXR1cm4gbWVtbztcclxuICB9XHJcbn0pO1xyXG5pZihmcmFtZXdvcmspQXJyYXlVbnNjb3BhYmxlcy50dXJuID0gdHJ1ZTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5udW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKG51bWJlck1ldGhvZHMpeyAgXHJcbiAgZnVuY3Rpb24gTnVtYmVySXRlcmF0b3IoaXRlcmF0ZWQpe1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtsOiB0b0xlbmd0aChpdGVyYXRlZCksIGk6IDB9KTtcclxuICB9XHJcbiAgY3JlYXRlSXRlcmF0b3IoTnVtYmVySXRlcmF0b3IsIE5VTUJFUiwgZnVuY3Rpb24oKXtcclxuICAgIHZhciBpdGVyID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIGkgICAgPSBpdGVyLmkrKztcclxuICAgIHJldHVybiBpIDwgaXRlci5sID8gaXRlclJlc3VsdCgwLCBpKSA6IGl0ZXJSZXN1bHQoMSk7XHJcbiAgfSk7XHJcbiAgZGVmaW5lSXRlcmF0b3IoTnVtYmVyLCBOVU1CRVIsIGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gbmV3IE51bWJlckl0ZXJhdG9yKHRoaXMpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIG51bWJlck1ldGhvZHMucmFuZG9tID0gZnVuY3Rpb24obGltIC8qID0gMCAqLyl7XHJcbiAgICB2YXIgYSA9ICt0aGlzXHJcbiAgICAgICwgYiA9IGxpbSA9PSB1bmRlZmluZWQgPyAwIDogK2xpbVxyXG4gICAgICAsIG0gPSBtaW4oYSwgYik7XHJcbiAgICByZXR1cm4gcmFuZG9tKCkgKiAobWF4KGEsIGIpIC0gbSkgKyBtO1xyXG4gIH07XHJcblxyXG4gIGZvckVhY2guY2FsbChhcnJheShcclxuICAgICAgLy8gRVMzOlxyXG4gICAgICAncm91bmQsZmxvb3IsY2VpbCxhYnMsc2luLGFzaW4sY29zLGFjb3MsdGFuLGF0YW4sZXhwLHNxcnQsbWF4LG1pbixwb3csYXRhbjIsJyArXHJcbiAgICAgIC8vIEVTNjpcclxuICAgICAgJ2Fjb3NoLGFzaW5oLGF0YW5oLGNicnQsY2x6MzIsY29zaCxleHBtMSxoeXBvdCxpbXVsLGxvZzFwLGxvZzEwLGxvZzIsc2lnbixzaW5oLHRhbmgsdHJ1bmMnXHJcbiAgICApLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgZm4gPSBNYXRoW2tleV07XHJcbiAgICAgIGlmKGZuKW51bWJlck1ldGhvZHNba2V5XSA9IGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICAgIC8vIGllOS0gZG9udCBzdXBwb3J0IHN0cmljdCBtb2RlICYgY29udmVydCBgdGhpc2AgdG8gb2JqZWN0IC0+IGNvbnZlcnQgaXQgdG8gbnVtYmVyXHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbK3RoaXNdXHJcbiAgICAgICAgICAsIGkgICAgPSAwO1xyXG4gICAgICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICAgICAgcmV0dXJuIGludm9rZShmbiwgYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4gIFxyXG4gICRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIE5VTUJFUiwgbnVtYmVyTWV0aG9kcyk7XHJcbn0oe30pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb3JlLnN0cmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICB2YXIgZXNjYXBlSFRNTERpY3QgPSB7XHJcbiAgICAnJic6ICcmYW1wOycsXHJcbiAgICAnPCc6ICcmbHQ7JyxcclxuICAgICc+JzogJyZndDsnLFxyXG4gICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICBcIidcIjogJyZhcG9zOydcclxuICB9LCB1bmVzY2FwZUhUTUxEaWN0ID0ge30sIGtleTtcclxuICBmb3Ioa2V5IGluIGVzY2FwZUhUTUxEaWN0KXVuZXNjYXBlSFRNTERpY3RbZXNjYXBlSFRNTERpY3Rba2V5XV0gPSBrZXk7XHJcbiAgJGRlZmluZShQUk9UTyArIEZPUkNFRCwgU1RSSU5HLCB7XHJcbiAgICBlc2NhcGVIVE1MOiAgIGNyZWF0ZVJlcGxhY2VyKC9bJjw+XCInXS9nLCBlc2NhcGVIVE1MRGljdCksXHJcbiAgICB1bmVzY2FwZUhUTUw6IGNyZWF0ZVJlcGxhY2VyKC8mKD86YW1wfGx0fGd0fHF1b3R8YXBvcyk7L2csIHVuZXNjYXBlSFRNTERpY3QpXHJcbiAgfSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29yZS5kYXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGZvcm1hdFJlZ0V4cCwgZmxleGlvUmVnRXhwLCBsb2NhbGVzLCBjdXJyZW50LCBTRUNPTkRTLCBNSU5VVEVTLCBIT1VSUywgTU9OVEgsIFlFQVIpe1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZUZvcm1hdChwcmVmaXgpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRlbXBsYXRlLCBsb2NhbGUgLyogPSBjdXJyZW50ICovKXtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICAgICAgLCBkaWN0ID0gbG9jYWxlc1toYXMobG9jYWxlcywgbG9jYWxlKSA/IGxvY2FsZSA6IGN1cnJlbnRdO1xyXG4gICAgICBmdW5jdGlvbiBnZXQodW5pdCl7XHJcbiAgICAgICAgcmV0dXJuIHRoYXRbcHJlZml4ICsgdW5pdF0oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gU3RyaW5nKHRlbXBsYXRlKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24ocGFydCl7XHJcbiAgICAgICAgc3dpdGNoKHBhcnQpe1xyXG4gICAgICAgICAgY2FzZSAncycgIDogcmV0dXJuIGdldChTRUNPTkRTKTsgICAgICAgICAgICAgICAgICAvLyBTZWNvbmRzIDogMC01OVxyXG4gICAgICAgICAgY2FzZSAnc3MnIDogcmV0dXJuIGx6KGdldChTRUNPTkRTKSk7ICAgICAgICAgICAgICAvLyBTZWNvbmRzIDogMDAtNTlcclxuICAgICAgICAgIGNhc2UgJ20nICA6IHJldHVybiBnZXQoTUlOVVRFUyk7ICAgICAgICAgICAgICAgICAgLy8gTWludXRlcyA6IDAtNTlcclxuICAgICAgICAgIGNhc2UgJ21tJyA6IHJldHVybiBseihnZXQoTUlOVVRFUykpOyAgICAgICAgICAgICAgLy8gTWludXRlcyA6IDAwLTU5XHJcbiAgICAgICAgICBjYXNlICdoJyAgOiByZXR1cm4gZ2V0KEhPVVJTKTsgICAgICAgICAgICAgICAgICAgIC8vIEhvdXJzICAgOiAwLTIzXHJcbiAgICAgICAgICBjYXNlICdoaCcgOiByZXR1cm4gbHooZ2V0KEhPVVJTKSk7ICAgICAgICAgICAgICAgIC8vIEhvdXJzICAgOiAwMC0yM1xyXG4gICAgICAgICAgY2FzZSAnRCcgIDogcmV0dXJuIGdldChEQVRFKTsgICAgICAgICAgICAgICAgICAgICAvLyBEYXRlICAgIDogMS0zMVxyXG4gICAgICAgICAgY2FzZSAnREQnIDogcmV0dXJuIGx6KGdldChEQVRFKSk7ICAgICAgICAgICAgICAgICAvLyBEYXRlICAgIDogMDEtMzFcclxuICAgICAgICAgIGNhc2UgJ1cnICA6IHJldHVybiBkaWN0WzBdW2dldCgnRGF5JyldOyAgICAgICAgICAgLy8gRGF5ICAgICA6INCf0L7QvdC10LTQtdC70YzQvdC40LpcclxuICAgICAgICAgIGNhc2UgJ04nICA6IHJldHVybiBnZXQoTU9OVEgpICsgMTsgICAgICAgICAgICAgICAgLy8gTW9udGggICA6IDEtMTJcclxuICAgICAgICAgIGNhc2UgJ05OJyA6IHJldHVybiBseihnZXQoTU9OVEgpICsgMSk7ICAgICAgICAgICAgLy8gTW9udGggICA6IDAxLTEyXHJcbiAgICAgICAgICBjYXNlICdNJyAgOiByZXR1cm4gZGljdFsyXVtnZXQoTU9OVEgpXTsgICAgICAgICAgIC8vIE1vbnRoICAgOiDQr9C90LLQsNGA0YxcclxuICAgICAgICAgIGNhc2UgJ01NJyA6IHJldHVybiBkaWN0WzFdW2dldChNT05USCldOyAgICAgICAgICAgLy8gTW9udGggICA6INCv0L3QstCw0YDRj1xyXG4gICAgICAgICAgY2FzZSAnWScgIDogcmV0dXJuIGdldChZRUFSKTsgICAgICAgICAgICAgICAgICAgICAvLyBZZWFyICAgIDogMjAxNFxyXG4gICAgICAgICAgY2FzZSAnWVknIDogcmV0dXJuIGx6KGdldChZRUFSKSAlIDEwMCk7ICAgICAgICAgICAvLyBZZWFyICAgIDogMTRcclxuICAgICAgICB9IHJldHVybiBwYXJ0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkTG9jYWxlKGxhbmcsIGxvY2FsZSl7XHJcbiAgICBmdW5jdGlvbiBzcGxpdChpbmRleCl7XHJcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgZm9yRWFjaC5jYWxsKGFycmF5KGxvY2FsZS5tb250aHMpLCBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goaXQucmVwbGFjZShmbGV4aW9SZWdFeHAsICckJyArIGluZGV4KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgbG9jYWxlc1tsYW5nXSA9IFthcnJheShsb2NhbGUud2Vla2RheXMpLCBzcGxpdCgxKSwgc3BsaXQoMildO1xyXG4gICAgcmV0dXJuIGNvcmU7XHJcbiAgfVxyXG4gICRkZWZpbmUoUFJPVE8gKyBGT1JDRUQsIERBVEUsIHtcclxuICAgIGZvcm1hdDogICAgY3JlYXRlRm9ybWF0KCdnZXQnKSxcclxuICAgIGZvcm1hdFVUQzogY3JlYXRlRm9ybWF0KCdnZXRVVEMnKVxyXG4gIH0pO1xyXG4gIGFkZExvY2FsZShjdXJyZW50LCB7XHJcbiAgICB3ZWVrZGF5czogJ1N1bmRheSxNb25kYXksVHVlc2RheSxXZWRuZXNkYXksVGh1cnNkYXksRnJpZGF5LFNhdHVyZGF5JyxcclxuICAgIG1vbnRoczogJ0phbnVhcnksRmVicnVhcnksTWFyY2gsQXByaWwsTWF5LEp1bmUsSnVseSxBdWd1c3QsU2VwdGVtYmVyLE9jdG9iZXIsTm92ZW1iZXIsRGVjZW1iZXInXHJcbiAgfSk7XHJcbiAgYWRkTG9jYWxlKCdydScsIHtcclxuICAgIHdlZWtkYXlzOiAn0JLQvtGB0LrRgNC10YHQtdC90YzQtSzQn9C+0L3QtdC00LXQu9GM0L3QuNC6LNCS0YLQvtGA0L3QuNC6LNCh0YDQtdC00LAs0KfQtdGC0LLQtdGA0LMs0J/Rj9GC0L3QuNGG0LAs0KHRg9Cx0LHQvtGC0LAnLFxyXG4gICAgbW9udGhzOiAn0K/QvdCy0LDRgDrRj3zRjCzQpNC10LLRgNCw0Ls60Y980Yws0JzQsNGA0YI60LB8LNCQ0L/RgNC10Ls60Y980Yws0JzQsDrRj3zQuSzQmNGO0L060Y980YwsJyArXHJcbiAgICAgICAgICAgICfQmNGO0Ls60Y980Yws0JDQstCz0YPRgdGCOtCwfCzQodC10L3RgtGP0LHRgDrRj3zRjCzQntC60YLRj9Cx0YA60Y980Yws0J3QvtGP0LHRgDrRj3zRjCzQlNC10LrQsNCx0YA60Y980YwnXHJcbiAgfSk7XHJcbiAgY29yZS5sb2NhbGUgPSBmdW5jdGlvbihsb2NhbGUpe1xyXG4gICAgcmV0dXJuIGhhcyhsb2NhbGVzLCBsb2NhbGUpID8gY3VycmVudCA9IGxvY2FsZSA6IGN1cnJlbnQ7XHJcbiAgfTtcclxuICBjb3JlLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcclxufSgvXFxiXFx3XFx3P1xcYi9nLCAvOiguKilcXHwoLiopJC8sIHt9LCAnZW4nLCAnU2Vjb25kcycsICdNaW51dGVzJywgJ0hvdXJzJywgJ01vbnRoJywgJ0Z1bGxZZWFyJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUuZ2xvYmFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiRkZWZpbmUoR0xPQkFMICsgRk9SQ0VELCB7Z2xvYmFsOiBnbG9iYWx9KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDoganMuYXJyYXkuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cclxuIWZ1bmN0aW9uKGFycmF5U3RhdGljcyl7XHJcbiAgZnVuY3Rpb24gc2V0QXJyYXlTdGF0aWNzKGtleXMsIGxlbmd0aCl7XHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoa2V5cyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGtleSBpbiBBcnJheVByb3RvKWFycmF5U3RhdGljc1trZXldID0gY3R4KGNhbGwsIEFycmF5UHJvdG9ba2V5XSwgbGVuZ3RoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRBcnJheVN0YXRpY3MoJ3BvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXMnLCAxKTtcclxuICBzZXRBcnJheVN0YXRpY3MoJ2luZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMnLCAzKTtcclxuICBzZXRBcnJheVN0YXRpY3MoJ2pvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZiwnICtcclxuICAgICAgICAgICAgICAgICAgJ3JlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGwsdHVybicpO1xyXG4gICRkZWZpbmUoU1RBVElDLCBBUlJBWSwgYXJyYXlTdGF0aWNzKTtcclxufSh7fSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IHdlYi5kb20uaXRhcmFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihOb2RlTGlzdCl7XHJcbiAgaWYoZnJhbWV3b3JrICYmIE5vZGVMaXN0ICYmICEoU1lNQk9MX0lURVJBVE9SIGluIE5vZGVMaXN0W1BST1RPVFlQRV0pKXtcclxuICAgIGhpZGRlbihOb2RlTGlzdFtQUk9UT1RZUEVdLCBTWU1CT0xfSVRFUkFUT1IsIEl0ZXJhdG9yc1tBUlJBWV0pO1xyXG4gIH1cclxuICBJdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnNbQVJSQVldO1xyXG59KGdsb2JhbC5Ob2RlTGlzdCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvcmUubG9nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihsb2csIGVuYWJsZWQpe1xyXG4gIC8vIE1ldGhvZHMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcGVyVG9vbHNXRy9jb25zb2xlLW9iamVjdC9ibG9iL21hc3Rlci9hcGkubWRcclxuICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2Fzc2VydCxjbGVhcixjb3VudCxkZWJ1ZyxkaXIsZGlyeG1sLGVycm9yLGV4Y2VwdGlvbiwnICtcclxuICAgICAgJ2dyb3VwLGdyb3VwQ29sbGFwc2VkLGdyb3VwRW5kLGluZm8saXNJbmRlcGVuZGVudGx5Q29tcG9zZWQsbG9nLCcgK1xyXG4gICAgICAnbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZUVuZCx0YWJsZSx0aW1lLHRpbWVFbmQsdGltZWxpbmUsJyArXHJcbiAgICAgICd0aW1lbGluZUVuZCx0aW1lU3RhbXAsdHJhY2Usd2FybicpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgbG9nW2tleV0gPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZihlbmFibGVkICYmIGtleSBpbiBjb25zb2xlKXJldHVybiBhcHBseS5jYWxsKGNvbnNvbGVba2V5XSwgY29uc29sZSwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQsIHtsb2c6IGFzc2lnbihsb2cubG9nLCBsb2csIHtcclxuICAgIGVuYWJsZTogZnVuY3Rpb24oKXtcclxuICAgICAgZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZTogZnVuY3Rpb24oKXtcclxuICAgICAgZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH0pfSk7XHJcbn0oe30sIHRydWUpO1xufSh0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKSwgZmFsc2UpO1xubW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiBtb2R1bGUuZXhwb3J0cywgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNwZWNpZmljaXR5IG9mIENTUyBzZWxlY3RvcnNcbiAqIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyNzcGVjaWZpY2l0eVxuICpcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAtIHNlbGVjdG9yOiB0aGUgaW5wdXRcbiAqICAtIHNwZWNpZmljaXR5OiBlLmcuIDAsMSwwLDBcbiAqICAtIHBhcnRzOiBhcnJheSB3aXRoIGRldGFpbHMgYWJvdXQgZWFjaCBwYXJ0IG9mIHRoZSBzZWxlY3RvciB0aGF0IGNvdW50cyB0b3dhcmRzIHRoZSBzcGVjaWZpY2l0eVxuICovXG52YXIgU1BFQ0lGSUNJVFkgPSAoZnVuY3Rpb24oKSB7XG5cdHZhciBjYWxjdWxhdGUsXG5cdFx0Y2FsY3VsYXRlU2luZ2xlO1xuXG5cdGNhbGN1bGF0ZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHNlbGVjdG9ycyxcblx0XHRcdHNlbGVjdG9yLFxuXHRcdFx0aSxcblx0XHRcdGxlbixcblx0XHRcdHJlc3VsdHMgPSBbXTtcblxuXHRcdC8vIFNlcGFyYXRlIGlucHV0IGJ5IGNvbW1hc1xuXHRcdHNlbGVjdG9ycyA9IGlucHV0LnNwbGl0KCcsJyk7XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBzZWxlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXHRcdFx0aWYgKHNlbGVjdG9yLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmVzdWx0cy5wdXNoKGNhbGN1bGF0ZVNpbmdsZShzZWxlY3RvcikpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9O1xuXG5cdC8vIENhbGN1bGF0ZSB0aGUgc3BlY2lmaWNpdHkgZm9yIGEgc2VsZWN0b3IgYnkgZGl2aWRpbmcgaXQgaW50byBzaW1wbGUgc2VsZWN0b3JzIGFuZCBjb3VudGluZyB0aGVtXG5cdGNhbGN1bGF0ZVNpbmdsZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0dmFyIHNlbGVjdG9yID0gaW5wdXQsXG5cdFx0XHRmaW5kTWF0Y2gsXG5cdFx0XHR0eXBlQ291bnQgPSB7XG5cdFx0XHRcdCdhJzogMCxcblx0XHRcdFx0J2InOiAwLFxuXHRcdFx0XHQnYyc6IDBcblx0XHRcdH0sXG5cdFx0XHRwYXJ0cyA9IFtdLFxuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb25zIGFzc3VtZSB0aGF0IHNlbGVjdG9ycyBtYXRjaGluZyB0aGUgcHJlY2VkaW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIHJlbW92ZWRcblx0XHRcdGF0dHJpYnV0ZVJlZ2V4ID0gLyhcXFtbXlxcXV0rXFxdKS9nLFxuXHRcdFx0aWRSZWdleCA9IC8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2csXG5cdFx0XHRjbGFzc1JlZ2V4ID0gLyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLFxuXHRcdFx0cHNldWRvRWxlbWVudFJlZ2V4ID0gLyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksXG5cdFx0XHQvLyBBIHJlZ2V4IGZvciBwc2V1ZG8gY2xhc3NlcyB3aXRoIGJyYWNrZXRzIC0gOm50aC1jaGlsZCgpLCA6bnRoLWxhc3QtY2hpbGQoKSwgOm50aC1vZi10eXBlKCksIDpudGgtbGFzdC10eXBlKCksIDpsYW5nKClcblx0XHRcdHBzZXVkb0NsYXNzV2l0aEJyYWNrZXRzUmVnZXggPSAvKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksXG5cdFx0XHQvLyBBIHJlZ2V4IGZvciBvdGhlciBwc2V1ZG8gY2xhc3Nlcywgd2hpY2ggZG9uJ3QgaGF2ZSBicmFja2V0c1xuXHRcdFx0cHNldWRvQ2xhc3NSZWdleCA9IC8oOlteXFxzXFwrPn5cXC5cXFs6XSspL2csXG5cdFx0XHRlbGVtZW50UmVnZXggPSAvKFteXFxzXFwrPn5cXC5cXFs6XSspL2c7XG5cblx0XHQvLyBGaW5kIG1hdGNoZXMgZm9yIGEgcmVndWxhciBleHByZXNzaW9uIGluIGEgc3RyaW5nIGFuZCBwdXNoIHRoZWlyIGRldGFpbHMgdG8gcGFydHNcblx0XHQvLyBUeXBlIGlzIFwiYVwiIGZvciBJRHMsIFwiYlwiIGZvciBjbGFzc2VzLCBhdHRyaWJ1dGVzIGFuZCBwc2V1ZG8tY2xhc3NlcyBhbmQgXCJjXCIgZm9yIGVsZW1lbnRzIGFuZCBwc2V1ZG8tZWxlbWVudHNcblx0XHRmaW5kTWF0Y2ggPSBmdW5jdGlvbihyZWdleCwgdHlwZSkge1xuXHRcdFx0dmFyIG1hdGNoZXMsIGksIGxlbiwgbWF0Y2gsIGluZGV4LCBsZW5ndGg7XG5cdFx0XHRpZiAocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdFx0bWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoKHJlZ2V4KTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRcdHR5cGVDb3VudFt0eXBlXSArPSAxO1xuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hlc1tpXTtcblx0XHRcdFx0XHRpbmRleCA9IHNlbGVjdG9yLmluZGV4T2YobWF0Y2gpO1xuXHRcdFx0XHRcdGxlbmd0aCA9IG1hdGNoLmxlbmd0aDtcblx0XHRcdFx0XHRwYXJ0cy5wdXNoKHtcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBtYXRjaCxcblx0XHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0XHRcdFx0XHRsZW5ndGg6IGxlbmd0aFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIFJlcGxhY2UgdGhpcyBzaW1wbGUgc2VsZWN0b3Igd2l0aCB3aGl0ZXNwYWNlIHNvIGl0IHdvbid0IGJlIGNvdW50ZWQgaW4gZnVydGhlciBzaW1wbGUgc2VsZWN0b3JzXG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKG1hdGNoLCBBcnJheShsZW5ndGggKyAxKS5qb2luKCcgJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgbmVnYXRpb24gcHN1ZWRvLWNsYXNzICg6bm90KSBidXQgbGVhdmUgaXRzIGFyZ3VtZW50IGJlY2F1c2Ugc3BlY2lmaWNpdHkgaXMgY2FsY3VsYXRlZCBvbiBpdHMgYXJndW1lbnRcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVnZXggPSAvOm5vdFxcKChbXlxcKV0qKVxcKS9nO1xuXHRcdFx0aWYgKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShyZWdleCwgJyAgICAgJDEgJyk7XG5cdFx0XHR9XG5cdFx0fSgpKTtcblxuXHRcdC8vIFJlbW92ZSBhbnl0aGluZyBhZnRlciBhIGxlZnQgYnJhY2UgaW4gY2FzZSBhIHVzZXIgaGFzIHBhc3RlZCBpbiBhIHJ1bGUsIG5vdCBqdXN0IGEgc2VsZWN0b3Jcblx0XHQoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcmVnZXggPSAve1teXSovZ20sXG5cdFx0XHRcdG1hdGNoZXMsIGksIGxlbiwgbWF0Y2g7XG5cdFx0XHRpZiAocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdFx0bWF0Y2hlcyA9IHNlbGVjdG9yLm1hdGNoKHJlZ2V4KTtcblx0XHRcdFx0Zm9yIChpID0gMCwgbGVuID0gbWF0Y2hlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hlc1tpXTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UobWF0Y2gsIEFycmF5KG1hdGNoLmxlbmd0aCArIDEpLmpvaW4oJyAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCkpO1xuXG5cdFx0Ly8gQWRkIGF0dHJpYnV0ZSBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBiKVxuXHRcdGZpbmRNYXRjaChhdHRyaWJ1dGVSZWdleCwgJ2InKTtcblxuXHRcdC8vIEFkZCBJRCBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBhKVxuXHRcdGZpbmRNYXRjaChpZFJlZ2V4LCAnYScpO1xuXG5cdFx0Ly8gQWRkIGNsYXNzIHNlbGVjdG9ycyB0byBwYXJ0cyBjb2xsZWN0aW9uICh0eXBlIGIpXG5cdFx0ZmluZE1hdGNoKGNsYXNzUmVnZXgsICdiJyk7XG5cblx0XHQvLyBBZGQgcHNldWRvLWVsZW1lbnQgc2VsZWN0b3JzIHRvIHBhcnRzIGNvbGxlY3Rpb24gKHR5cGUgYylcblx0XHRmaW5kTWF0Y2gocHNldWRvRWxlbWVudFJlZ2V4LCAnYycpO1xuXG5cdFx0Ly8gQWRkIHBzZXVkby1jbGFzcyBzZWxlY3RvcnMgdG8gcGFydHMgY29sbGVjdGlvbiAodHlwZSBiKVxuXHRcdGZpbmRNYXRjaChwc2V1ZG9DbGFzc1dpdGhCcmFja2V0c1JlZ2V4LCAnYicpO1xuXHRcdGZpbmRNYXRjaChwc2V1ZG9DbGFzc1JlZ2V4LCAnYicpO1xuXG5cdFx0Ly8gUmVtb3ZlIHVuaXZlcnNhbCBzZWxlY3RvciBhbmQgc2VwYXJhdG9yIGNoYXJhY3RlcnNcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1tcXCpcXHNcXCs+fl0vZywgJyAnKTtcblxuXHRcdC8vIFJlbW92ZSBhbnkgc3RyYXkgZG90cyBvciBoYXNoZXMgd2hpY2ggYXJlbid0IGF0dGFjaGVkIHRvIHdvcmRzXG5cdFx0Ly8gVGhlc2UgbWF5IGJlIHByZXNlbnQgaWYgdGhlIHVzZXIgaXMgbGl2ZS1lZGl0aW5nIHRoaXMgc2VsZWN0b3Jcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoL1sjXFwuXS9nLCAnICcpO1xuXG5cdFx0Ly8gVGhlIG9ubHkgdGhpbmdzIGxlZnQgc2hvdWxkIGJlIGVsZW1lbnQgc2VsZWN0b3JzICh0eXBlIGMpXG5cdFx0ZmluZE1hdGNoKGVsZW1lbnRSZWdleCwgJ2MnKTtcblxuXHRcdC8vIE9yZGVyIHRoZSBwYXJ0cyBpbiB0aGUgb3JkZXIgdGhleSBhcHBlYXIgaW4gdGhlIG9yaWdpbmFsIHNlbGVjdG9yXG5cdFx0Ly8gVGhpcyBpcyBuZWF0ZXIgZm9yIGV4dGVybmFsIGFwcHMgdG8gZGVhbCB3aXRoXG5cdFx0cGFydHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRyZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6IGlucHV0LFxuXHRcdFx0c3BlY2lmaWNpdHk6ICcwLCcgKyB0eXBlQ291bnQuYS50b1N0cmluZygpICsgJywnICsgdHlwZUNvdW50LmIudG9TdHJpbmcoKSArICcsJyArIHR5cGVDb3VudC5jLnRvU3RyaW5nKCksXG5cdFx0XHRwYXJ0czogcGFydHNcblx0XHR9O1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2FsY3VsYXRlOiBjYWxjdWxhdGVcblx0fTtcbn0oKSk7XG5cbi8vIEV4cG9ydCBmb3IgTm9kZSBKU1xuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuXHRleHBvcnRzLmNhbGN1bGF0ZSA9IFNQRUNJRklDSVRZLmNhbGN1bGF0ZTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi4vfi9zcGVjaWZpY2l0eS9zcGVjaWZpY2l0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge0JBQ0tHUk9VTkRfQ0hBUkFDVEVSfSBmcm9tICcuLi8uLi9jaGFyYWN0ZXJzJztcblxuZXhwb3J0IHZhciBib3JkZXJTY2hlbWUgPSB7XG4gICAgeDoge1xuICAgICAgICBtaW46IHtcbiAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICAgICAgLy8geOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIOKUlOKUgOKUmFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogQkFDS0dST1VORF9DSEFSQUNURVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiAn4pSCJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiAn4pSMJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIHjilIDilJhcbiAgICAgICAgICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm86IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogJ+KUgicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUlCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pZDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIzilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8geCDilIJcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSU4pSA4pSYXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vOiBCQUNLR1JPVU5EX0NIQVJBQ1RFUixcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWlkOiB7XG4gICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOKUjHjilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzogQkFDS0dST1VORF9DSEFSQUNURVIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIOKUjOKUgOKUkFxuICAgICAgICAgICAgICAgIC8vIOKUgnjilIJcbiAgICAgICAgICAgICAgICAvLyDilJTilIDilJhcbiAgICAgICAgICAgICAgICBtaWQ6IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSLFxuICAgICAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIzilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJR44pSYXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiAn4pSAJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICBtaW46IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSM4pSAeFxuICAgICAgICAgICAgICAgICAgICAvLyDilIIg4pSCXG4gICAgICAgICAgICAgICAgICAgIC8vIOKUlOKUgOKUmFxuICAgICAgICAgICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm86IEJBQ0tHUk9VTkRfQ0hBUkFDVEVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogJ+KUgicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUkCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1pZDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIzilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIHhcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSU4pSA4pSYXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzogQkFDS0dST1VORF9DSEFSQUNURVIsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6ICfilIInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1heDoge1xuICAgICAgICAgICAgICAgICAgICAvLyDilIzilIDilJBcbiAgICAgICAgICAgICAgICAgICAgLy8g4pSCIOKUglxuICAgICAgICAgICAgICAgICAgICAvLyDilJTilIB4XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBubzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBubzogQkFDS0dST1VORF9DSEFSQUNURVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUgCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vOiAnfCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllczogJ+KUmCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vbGliL3NlcmlhbGl6ZXJzL2RlZmF1bHQvYm9yZGVyLXNjaGVtZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImluZGV4LmpzIn0=