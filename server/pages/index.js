exports.ids = [3];
exports.modules = Array(50).concat([
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4549e6be", content, true, context)
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("69676156", content, true, context)
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2613571b", content, true, context)
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("737259de", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e7f14666", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_VueScrollSnap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".scroll-snap-container{display:block;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;-ms-scroll-snap-points-y:repeat(100%);scroll-snap-points-y:repeat(100%);-ms-scroll-snap-destination:0 0;scroll-snap-destination:0 0;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;-ms-scroll-snap-type:mandatory;scroll-snap-type:mandatory;scroll-behavior:smooth}.scroll-snap-container.horizontal{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;overflow-y:hidden;overflow-x:scroll;-ms-scroll-snap-points-x:repeat(100%);scroll-snap-points-x:repeat(100%);-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.scroll-snap-container.fullscreen,.scroll-snap-container.horizontal{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.scroll-snap-container.fullscreen{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:absolute;top:0;bottom:0;left:0;right:0;min-width:100%;min-height:100%}.scroll-snap-container.fullscreen.horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.item{scroll-snap-align:start}.scroll-snap-container.fullscreen>.item{min-height:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}.scroll-snap-container.horizontal>.item{scroll-snap-align:center}.scroll-snap-container.fullscreen.horizontal>.item{scroll-snap-align:center;min-width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button{background:#d05dd2;color:#fff;border-radius:5px;border:none}body,html{padding:0;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a:hover{text-decoration:underline}.content__default:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img{max-width:100%}.content__default.custom{padding:0;margin:0}.content__default.custom img{max-width:100%}a{font-weight:500;color:#41b883;text-decoration:underline}a:hover{color:#349369}p a code{font-weight:400;color:#41b883}kbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1,.content__default:not(.custom)>h2,.content__default:not(.custom)>h3,.content__default:not(.custom)>h4,.content__default:not(.custom)>h5,.content__default:not(.custom)>h6{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3{font-size:1.35rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor:hover{text-decoration:none}.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid rgba(0,0,0,.3)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1:first-child{padding-top:2rem}}@media (max-width:419px){h1{font-size:1.9rem}.content__default div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}p.text{font-size:22px}@media (max-width:719px){p.text{font-size:14px}}h1.text{font-size:41px}@media (max-width:719px){h1.text{font-size:28px}}h3.text{font-size:28px}@media (max-width:719px){h3.text{font-size:20px}}.item{min-height:calc(100vh - 142px)}@media (max-width:719px){.item{padding:65px 0 0;min-height:calc(100vh - 173px)}}.scroll-snap-container{width:100%;height:calc(100vh - 142px)}@media (max-width:719px){.scroll-snap-container{padding:65px 0 0;height:calc(100vh - 173px)}}.dark{background-color:#435466;color:#fff}.light{background-color:#4dba87;color:#fff}.panel{display:flex;justify-content:center;flex-direction:column;text-align:center;height:calc(100vh - 142px)}@media (max-width:719px){.panel{height:calc(100vh - 173px)}}.nav-link{text-decoration:none}.button{display:inline-block;font-size:1.2rem;color:#fff;background-color:#41b883;padding:.8rem 1.6rem;border-radius:4px;transition:background-color .1s ease;box-sizing:border-box;border-bottom:1px solid #3aa676}.button:hover{background-color:#51c290}@media (max-width:419px){.button:hover{font-size:1rem;padding:.6rem 1.2rem}}.button.nav-link.router-link-active,.button.nav-link:hover{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Me_vue_vue_type_style_index_0_id_63a2477a_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup[data-v-63a2477a]{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button[data-v-63a2477a]{background:#d05dd2;color:#fff;border-radius:5px;border:none}body[data-v-63a2477a],html[data-v-63a2477a]{padding:0;margin:0}body[data-v-63a2477a]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a[data-v-63a2477a]:hover{text-decoration:underline}.content__default:not(.custom) p.demo[data-v-63a2477a]{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img[data-v-63a2477a]{max-width:100%}.content__default.custom[data-v-63a2477a]{padding:0;margin:0}.content__default.custom img[data-v-63a2477a]{max-width:100%}a[data-v-63a2477a]{font-weight:500;color:#41b883;text-decoration:underline}a[data-v-63a2477a]:hover{color:#349369}p a code[data-v-63a2477a]{font-weight:400;color:#41b883}kbd[data-v-63a2477a]{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote[data-v-63a2477a]{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p[data-v-63a2477a]{margin:0}ol[data-v-63a2477a],ul[data-v-63a2477a]{padding-left:1.2em}strong[data-v-63a2477a]{font-weight:600}h1[data-v-63a2477a],h2[data-v-63a2477a],h3[data-v-63a2477a],h4[data-v-63a2477a],h5[data-v-63a2477a],h6[data-v-63a2477a]{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1[data-v-63a2477a],.content__default:not(.custom)>h2[data-v-63a2477a],.content__default:not(.custom)>h3[data-v-63a2477a],.content__default:not(.custom)>h4[data-v-63a2477a],.content__default:not(.custom)>h5[data-v-63a2477a],.content__default:not(.custom)>h6[data-v-63a2477a]{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor[data-v-63a2477a],h2:hover .header-anchor[data-v-63a2477a],h3:hover .header-anchor[data-v-63a2477a],h4:hover .header-anchor[data-v-63a2477a],h5:hover .header-anchor[data-v-63a2477a],h6:hover .header-anchor[data-v-63a2477a]{opacity:1}h1[data-v-63a2477a]{font-size:2.2rem}h2[data-v-63a2477a]{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3[data-v-63a2477a]{font-size:1.35rem}a.header-anchor[data-v-63a2477a]{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor[data-v-63a2477a]:hover{text-decoration:none}.line-number[data-v-63a2477a],code[data-v-63a2477a],kbd[data-v-63a2477a]{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol[data-v-63a2477a],p[data-v-63a2477a],ul[data-v-63a2477a]{line-height:1.7}hr[data-v-63a2477a]{border:0;border-top:1px solid rgba(0,0,0,.3)}table[data-v-63a2477a]{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr[data-v-63a2477a]{border-top:1px solid #dfe2e5}tr[data-v-63a2477a]:nth-child(2n){background-color:#f6f8fa}td[data-v-63a2477a],th[data-v-63a2477a]{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1[data-v-63a2477a]:first-child{padding-top:2rem}}@media (max-width:419px){h1[data-v-63a2477a]{font-size:1.9rem}.content__default div[class*=language-][data-v-63a2477a]{margin:.85rem -1.5rem;border-radius:0}}.button[data-v-63a2477a]{-webkit-text-decoration-line:none;text-decoration-line:none;color:#41b883;border-bottom:1px solid #e6e6e6}.button[data-v-63a2477a],.button[data-v-63a2477a]:hover{background-color:#fff}.button.nav-link.router-link-active[data-v-63a2477a],.button.nav-link[data-v-63a2477a]:hover{color:#41b883}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_style_index_0_id_6e296317_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup[data-v-6e296317]{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button[data-v-6e296317]{background:#d05dd2;color:#fff;border-radius:5px;border:none}body[data-v-6e296317],html[data-v-6e296317]{padding:0;margin:0}body[data-v-6e296317]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a[data-v-6e296317]:hover{text-decoration:underline}.content__default:not(.custom) p.demo[data-v-6e296317]{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img[data-v-6e296317]{max-width:100%}.content__default.custom[data-v-6e296317]{padding:0;margin:0}.content__default.custom img[data-v-6e296317]{max-width:100%}a[data-v-6e296317]{font-weight:500;color:#41b883;text-decoration:underline}a[data-v-6e296317]:hover{color:#349369}p a code[data-v-6e296317]{font-weight:400;color:#41b883}kbd[data-v-6e296317]{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote[data-v-6e296317]{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p[data-v-6e296317]{margin:0}ol[data-v-6e296317],ul[data-v-6e296317]{padding-left:1.2em}strong[data-v-6e296317]{font-weight:600}h1[data-v-6e296317],h2[data-v-6e296317],h3[data-v-6e296317],h4[data-v-6e296317],h5[data-v-6e296317],h6[data-v-6e296317]{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1[data-v-6e296317],.content__default:not(.custom)>h2[data-v-6e296317],.content__default:not(.custom)>h3[data-v-6e296317],.content__default:not(.custom)>h4[data-v-6e296317],.content__default:not(.custom)>h5[data-v-6e296317],.content__default:not(.custom)>h6[data-v-6e296317]{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor[data-v-6e296317],h2:hover .header-anchor[data-v-6e296317],h3:hover .header-anchor[data-v-6e296317],h4:hover .header-anchor[data-v-6e296317],h5:hover .header-anchor[data-v-6e296317],h6:hover .header-anchor[data-v-6e296317]{opacity:1}h1[data-v-6e296317]{font-size:2.2rem}h2[data-v-6e296317]{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3[data-v-6e296317]{font-size:1.35rem}a.header-anchor[data-v-6e296317]{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor[data-v-6e296317]:hover{text-decoration:none}.line-number[data-v-6e296317],code[data-v-6e296317],kbd[data-v-6e296317]{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol[data-v-6e296317],p[data-v-6e296317],ul[data-v-6e296317]{line-height:1.7}hr[data-v-6e296317]{border:0;border-top:1px solid rgba(0,0,0,.3)}table[data-v-6e296317]{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr[data-v-6e296317]{border-top:1px solid #dfe2e5}tr[data-v-6e296317]:nth-child(2n){background-color:#f6f8fa}td[data-v-6e296317],th[data-v-6e296317]{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1[data-v-6e296317]:first-child{padding-top:2rem}}@media (max-width:419px){h1[data-v-6e296317]{font-size:1.9rem}.content__default div[class*=language-][data-v-6e296317]{margin:.85rem -1.5rem;border-radius:0}}.external[data-v-6e296317]{-webkit-text-decoration-line:none;text-decoration-line:none}.external[data-v-6e296317],.external[data-v-6e296317]:hover{color:#fff}.button[data-v-6e296317]{-webkit-text-decoration-line:none;text-decoration-line:none;color:#41b883;border-bottom:1px solid #e6e6e6}.button[data-v-6e296317],.button[data-v-6e296317]:hover{background-color:#fff}.button.nav-link.router-link-active[data-v-6e296317],.button.nav-link[data-v-6e296317]:hover{color:#41b883}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resume_vue_vue_type_style_index_0_id_2ef5cef5_scoped_true_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(7);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup[data-v-2ef5cef5]{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button[data-v-2ef5cef5]{background:#d05dd2;color:#fff;border-radius:5px;border:none}body[data-v-2ef5cef5],html[data-v-2ef5cef5]{padding:0;margin:0}body[data-v-2ef5cef5]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a[data-v-2ef5cef5]:hover{text-decoration:underline}.content__default:not(.custom) p.demo[data-v-2ef5cef5]{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img[data-v-2ef5cef5]{max-width:100%}.content__default.custom[data-v-2ef5cef5]{padding:0;margin:0}.content__default.custom img[data-v-2ef5cef5]{max-width:100%}a[data-v-2ef5cef5]{font-weight:500;color:#41b883;text-decoration:underline}a[data-v-2ef5cef5]:hover{color:#349369}p a code[data-v-2ef5cef5]{font-weight:400;color:#41b883}kbd[data-v-2ef5cef5]{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote[data-v-2ef5cef5]{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p[data-v-2ef5cef5]{margin:0}ol[data-v-2ef5cef5],ul[data-v-2ef5cef5]{padding-left:1.2em}strong[data-v-2ef5cef5]{font-weight:600}h1[data-v-2ef5cef5],h2[data-v-2ef5cef5],h3[data-v-2ef5cef5],h4[data-v-2ef5cef5],h5[data-v-2ef5cef5],h6[data-v-2ef5cef5]{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1[data-v-2ef5cef5],.content__default:not(.custom)>h2[data-v-2ef5cef5],.content__default:not(.custom)>h3[data-v-2ef5cef5],.content__default:not(.custom)>h4[data-v-2ef5cef5],.content__default:not(.custom)>h5[data-v-2ef5cef5],.content__default:not(.custom)>h6[data-v-2ef5cef5]{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor[data-v-2ef5cef5],h2:hover .header-anchor[data-v-2ef5cef5],h3:hover .header-anchor[data-v-2ef5cef5],h4:hover .header-anchor[data-v-2ef5cef5],h5:hover .header-anchor[data-v-2ef5cef5],h6:hover .header-anchor[data-v-2ef5cef5]{opacity:1}h1[data-v-2ef5cef5]{font-size:2.2rem}h2[data-v-2ef5cef5]{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3[data-v-2ef5cef5]{font-size:1.35rem}a.header-anchor[data-v-2ef5cef5]{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor[data-v-2ef5cef5]:hover{text-decoration:none}.line-number[data-v-2ef5cef5],code[data-v-2ef5cef5],kbd[data-v-2ef5cef5]{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol[data-v-2ef5cef5],p[data-v-2ef5cef5],ul[data-v-2ef5cef5]{line-height:1.7}hr[data-v-2ef5cef5]{border:0;border-top:1px solid rgba(0,0,0,.3)}table[data-v-2ef5cef5]{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr[data-v-2ef5cef5]{border-top:1px solid #dfe2e5}tr[data-v-2ef5cef5]:nth-child(2n){background-color:#f6f8fa}td[data-v-2ef5cef5],th[data-v-2ef5cef5]{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1[data-v-2ef5cef5]:first-child{padding-top:2rem}}@media (max-width:419px){h1[data-v-2ef5cef5]{font-size:1.9rem}.content__default div[class*=language-][data-v-2ef5cef5]{margin:.85rem -1.5rem;border-radius:0}}.external[data-v-2ef5cef5]{-webkit-text-decoration-line:none;text-decoration-line:none}.external[data-v-2ef5cef5],.external[data-v-2ef5cef5]:hover{color:#fff}.button[data-v-2ef5cef5]{-webkit-text-decoration-line:none;text-decoration-line:none;border-bottom:1px solid #e6e6e6;color:#41b883}.button[data-v-2ef5cef5],.button[data-v-2ef5cef5]:hover{background-color:#fff}.button.nav-link.router-link-active[data-v-2ef5cef5],.button.nav-link[data-v-2ef5cef5]:hover{color:#41b883}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hello.vue?vue&type=template&id=702e6760&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\"><h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('hello.title')))+"</h1> <h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('hello.subtitle')))+"</h1> <a href=\"#me\" class=\"button nav-link\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('hello.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hello.vue?vue&type=template&id=702e6760&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hello.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Hellovue_type_script_lang_js_ = ({
  name: 'hello'
});
// CONCATENATED MODULE: ./components/Hello.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Hellovue_type_script_lang_js_ = (Hellovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Hello.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Hellovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9ae6d168"
  
)

/* harmony default export */ var Hello = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Me.vue?vue&type=template&id=63a2477a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\" data-v-63a2477a><h1 class=\"text\" data-v-63a2477a>"+_vm._ssrEscape(_vm._s(_vm.$t('me.title')))+"</h1> <h3 class=\"text\" data-v-63a2477a>"+_vm._ssrEscape(_vm._s(_vm.$t('me.subtitle')))+"</h3> <p class=\"text\" data-v-63a2477a>"+_vm._ssrEscape(_vm._s(_vm.$t('me.text1')))+"</p> <p class=\"text\" data-v-63a2477a>"+_vm._ssrEscape(_vm._s(_vm.$t('me.text2')))+"</p> <p class=\"text\" data-v-63a2477a>"+_vm._ssrEscape(_vm._s(_vm.$t('me.text3')))+"</p> <a href=\"#socials\" class=\"button nav-link\" data-v-63a2477a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('me.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Me.vue?vue&type=template&id=63a2477a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Me.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Mevue_type_script_lang_js_ = ({
  name: 'me'
});
// CONCATENATED MODULE: ./components/Me.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mevue_type_script_lang_js_ = (Mevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Me.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "63a2477a",
  "17e8aae4"
  
)

/* harmony default export */ var Me = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Socials.vue?vue&type=template&id=60c3ee4a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\" data-v-60c3ee4a>","</div>",[_vm._ssrNode("<h1 class=\"text\" data-v-60c3ee4a>"+_vm._ssrEscape(_vm._s(_vm.$t('socials.title')))+"</h1> <h1 class=\"text\" data-v-60c3ee4a>"+_vm._ssrEscape(_vm._s(_vm.$t('socials.subtitle')))+"</h1> "),_vm._ssrNode("<ul style=\"list-style: none;\" data-v-60c3ee4a>","</ul>",_vm._l((_vm.$site.contact),function(item,index){return _vm._ssrNode("<li style=\"display: inline; margin: 5px\" data-v-60c3ee4a>","</li>",[_c('NavLink',{attrs:{"link":item.link}},[_c(_vm.getIcon(item.type),{tag:"component",staticClass:"mainIcon",attrs:{"size":"4x"}})],1)],1)}),0),_vm._ssrNode(" <a href=\"#blog\" class=\"button nav-link\" data-v-60c3ee4a>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('socials.button'))+"\n    ")+"</a>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Socials.vue?vue&type=template&id=60c3ee4a&scoped=true&

// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Socials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Socialsvue_type_script_lang_js_ = ({
  name: 'socials',
  methods: {
    getIcon(type) {
      switch (type) {
        case 'github':
          return external_vue_feather_icons_["GithubIcon"];

        case 'twitter':
          return external_vue_feather_icons_["TwitterIcon"];

        case 'instagram':
          return external_vue_feather_icons_["InstagramIcon"];

        case 'mail':
          return external_vue_feather_icons_["MailIcon"];
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Socials.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Socialsvue_type_script_lang_js_ = (Socialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Socials.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Socialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "60c3ee4a",
  "49559aa0"
  
)

/* harmony default export */ var Socials = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavLink: __webpack_require__(20).default})


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog.vue?vue&type=template&id=6e296317&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\" data-v-6e296317><h1 class=\"text\" data-v-6e296317>"+_vm._ssrEscape(_vm._s(_vm.$t('blog.title')))+"</h1> <h1 class=\"text\" data-v-6e296317>"+_vm._ssrEscape(_vm._s(_vm.$t('blog.subtitle')))+"</h1> <p class=\"text\" data-v-6e296317>"+_vm._ssrEscape(_vm._s(_vm.$t('blog.text1')))+"</p> <p class=\"text\" data-v-6e296317>"+_vm._ssrEscape(_vm._s(_vm.$t('blog.text2')))+"</p> <a href=\"https://blog.yannickspoerl.de\" target=\"_blank\" class=\"external\" data-v-6e296317><h1 class=\"text\" data-v-6e296317>👉 blog.yannickspoerl.de</h1></a> <br data-v-6e296317> <a href=\"#apps\" class=\"button nav-link\" data-v-6e296317>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('blog.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog.vue?vue&type=template&id=6e296317&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blogvue_type_script_lang_js_ = ({
  name: 'blog'
});
// CONCATENATED MODULE: ./components/Blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogvue_type_script_lang_js_ = (Blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blog.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6e296317",
  "ed3ccfd0"
  
)

/* harmony default export */ var Blog = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apps.vue?vue&type=template&id=ad9bbe4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\"><h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('apps.title')))+"</h1> <h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('apps.subtitle')))+"</h1> <a href=\"#resume\" class=\"button nav-link\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('apps.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Apps.vue?vue&type=template&id=ad9bbe4e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Apps.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Appsvue_type_script_lang_js_ = ({
  name: 'apps'
});
// CONCATENATED MODULE: ./components/Apps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Appsvue_type_script_lang_js_ = (Appsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Apps.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Appsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "11116a30"
  
)

/* harmony default export */ var Apps = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Resume.vue?vue&type=template&id=2ef5cef5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\" data-v-2ef5cef5><h1 class=\"text\" data-v-2ef5cef5>"+_vm._ssrEscape(_vm._s(_vm.$t('resume.title')))+"</h1> <h1 class=\"text\" data-v-2ef5cef5>"+(_vm._s(_vm.$t('resume.subtitle')))+"</h1> <a href=\"#end\" class=\"button nav-link\" data-v-2ef5cef5>"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('resume.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Resume.vue?vue&type=template&id=2ef5cef5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Resume.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Resumevue_type_script_lang_js_ = ({
  name: 'resume'
});
// CONCATENATED MODULE: ./components/Resume.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Resumevue_type_script_lang_js_ = (Resumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Resume.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Resumevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2ef5cef5",
  "46bc98ba"
  
)

/* harmony default export */ var Resume = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/End.vue?vue&type=template&id=fe3d4712&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._ssrNode("<div style=\"margin-top: -60px\"><h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('end.title')))+"</h1> <h1 class=\"text\">"+_vm._ssrEscape(_vm._s(_vm.$t('end.subtitle')))+"</h1> <a href=\"#hello\" class=\"button nav-link\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.$t('end.button'))+"\n    ")+"</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/End.vue?vue&type=template&id=fe3d4712&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/End.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Endvue_type_script_lang_js_ = ({
  name: 'end'
});
// CONCATENATED MODULE: ./components/End.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Endvue_type_script_lang_js_ = (Endvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/End.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Endvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0f28a956"
  
)

/* harmony default export */ var End = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=586019a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('vue-scroll-snap',[_c('div',{staticClass:"item",attrs:{"id":"hello"}},[_c('Hello')],1),_vm._v(" "),_c('div',{staticClass:"item light",attrs:{"id":"me"}},[_c('Me')],1),_vm._v(" "),_c('div',{staticClass:"item",attrs:{"id":"socials"}},[_c('Socials')],1),_vm._v(" "),_c('div',{staticClass:"item light",attrs:{"id":"blog"}},[_c('Blog')],1),_vm._v(" "),_c('div',{staticClass:"item",attrs:{"id":"apps"}},[_c('Apps')],1),_vm._v(" "),_c('div',{staticClass:"item light",attrs:{"id":"resume"}},[_c('Resume')],1),_vm._v(" "),_c('div',{staticClass:"item",attrs:{"id":"end"}},[_c('End')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=586019a8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-scroll-snap/src/VueScrollSnap.vue?vue&type=template&id=25c515af&
var VueScrollSnapvue_type_template_id_25c515af_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scroll-snap-container",class:{'fullscreen': _vm.fullscreen, 'horizontal': _vm.horizontal }},[_vm._t("default")],2)}
var VueScrollSnapvue_type_template_id_25c515af_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/vue-scroll-snap/src/VueScrollSnap.vue?vue&type=template&id=25c515af&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-scroll-snap/src/VueScrollSnap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var VueScrollSnapvue_type_script_lang_js_ = ({
  name: "VueScrollSnap",
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
      required: false
    },
    horizontal: {
      type: Boolean,
      default: false,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-scroll-snap/src/VueScrollSnap.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueScrollSnapvue_type_script_lang_js_ = (VueScrollSnapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vue-scroll-snap/src/VueScrollSnap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_VueScrollSnapvue_type_script_lang_js_,
  VueScrollSnapvue_type_template_id_25c515af_render,
  VueScrollSnapvue_type_template_id_25c515af_staticRenderFns,
  false,
  injectStyles,
  null,
  "45d0ee54"
  
)

/* harmony default export */ var VueScrollSnap = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Main',
  components: {
    VueScrollSnap: VueScrollSnap
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "502ea844"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/* nuxt-component-imports */
installComponents(pages_component, {Hello: __webpack_require__(65).default,Me: __webpack_require__(66).default,Socials: __webpack_require__(67).default,Blog: __webpack_require__(68).default,Apps: __webpack_require__(69).default,Resume: __webpack_require__(70).default,End: __webpack_require__(71).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map