module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/License","2":"pages/Privacy","3":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return vueI18n; });
/* unused harmony export vueI18nLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return defaultLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return routesNameSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return defaultLocaleRouteNameSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lazy; });
/* unused harmony export langDir */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return rootRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detectBrowserLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return differentDomains; });
/* unused harmony export seo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return vuex; });
/* unused harmony export parsePages */
/* unused harmony export pages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return beforeLanguageSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return onLanguageSwitched; });
/* unused harmony export IS_UNIVERSAL_MODE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCALE_CODE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOCALE_ISO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCALE_DOMAIN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCALE_FILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_OPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return localeCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trailingSlash; });
const vueI18n = {
  "fallbackLocale": "de",
  "messages": {
    "en": {
      "navbar": {
        "about": "About",
        "socials": "Socials",
        "blog": "Blog",
        "resume": "Résumé"
      },
      "hello": {
        "title": "Hello and welcome to my website 👋",
        "subtitle": "Let's begin, shall we?",
        "button": "Take me away →"
      },
      "me": {
        "title": "My name is Yannick ...",
        "subtitle": "... and I'm a computer science student from Germany 🇩🇪",
        "text1": "I'm passionate about frontend-development, especially with Vue.js, also I work as a part-time web developer.",
        "text2": "I'm also really interested in logic and reasoning, and I'm currently writing my bachelor's thesis about abstract argumentation 🎓",
        "text3": "Other than that, I enjoy running 🏃 and heavy metal music 🎸",
        "button": "What else? →"
      },
      "socials": {
        "title": "You want to get in touch with me?",
        "subtitle": "Try here 👇",
        "button": "There is still more?! →"
      },
      "blog": {
        "title": "Don't tell me you are writing a blog? 🤦‍♂️",
        "subtitle": "Yes, I do!",
        "text1": "Being fairly new to computer science and spending a lot of time on programming and in university, there are many ideas floating around all the time.",
        "text2": "So I try to capture the most interesting ones on my blog!",
        "button": "This is getting out of control →"
      },
      "apps": {
        "title": "This is still under construction 🏗",
        "subtitle": "Stop by again soon!",
        "button": "Will do →"
      },
      "resume": {
        "title": "And in case you want to take a look at my résumé 📒",
        "subtitle": "My <a href=\"/Resume_EN.pdf\" target=\"_blank\" style=\"color: #fff\">résumé in english 🇬🇧</a> and my <a href=\"/Resume_DE.pdf\" target=\"_blank\" style=\"color: #fff\">résumé in german 🇩🇪</a>",
        "button": "That was great! →"
      },
      "end": {
        "title": "Thank's for stopping by!",
        "subtitle": "I hope you liked this litte tour 🚶",
        "button": "We're done, aren't we?"
      },
      "copyright": {
        "license": "MIT Licensed",
        "notice": "Datenschutzhinweis",
        "copyright": "2019 - 2020 Yannick Spoerl"
      }
    },
    "de": {
      "navbar": {
        "about": "Über mich",
        "socials": "Kontakt",
        "blog": "Blog",
        "resume": "Lebenslauf"
      },
      "hello": {
        "title": "Hallo und willkommen auf meiner Website 👋",
        "subtitle": "Wollen wir loslegen?",
        "button": "Auf geht's →"
      },
      "me": {
        "title": "Ich bin Yannick ...",
        "subtitle": "... und ich bin ein Informatik-Student aus Deutschland 🇩🇪",
        "text1": "Meine Leidenschaft ist Frontend-Development, speziell mit Vue.js, außerdem arbeite ich nebenher als Web developer.",
        "text2": "Auch bin ich großer Fan von Logik und Argumentation, weshalb ich momentan an meiner Bachelorarbeit über Abstrakte Argumentation  schreibe 🎓",
        "text3": "Ansonsten gehe ich gerne Laufen 🏃 und liebe Heavy-Metal Musik 🎸",
        "button": "Was denn noch? →"
      },
      "socials": {
        "title": "Du möchtest mich kontaktieren?",
        "subtitle": "Probier's hier 👇",
        "button": "Es geht noch weiter?! →"
      },
      "blog": {
        "title": "Sag bloß, du schreibst auch einen Blog? 🤦‍♂️",
        "subtitle": "In der Tat!",
        "text1": "Sowohl durch meine Arbeit als Programmierer, als auch Projekte in meiner Freizeit und die viele Zeit in der Uni entstehen viele Ideen!",
        "text2": "Die interessantesten davon versuche ich daher in Blog-Einträgen zu behandeln!",
        "button": "Das wird langsam zu viel →"
      },
      "apps": {
        "title": "Hier wird noch gearbeitet 🏗",
        "subtitle": "Schaue demnächst nochmal vorbei!",
        "button": "Werde ich machen →"
      },
      "resume": {
        "title": "Und falls du einen Blick in meinen Lebenslauf werfen willst 📒",
        "subtitle": "Hier ist mein <a href=\"https://www.yannickspoerl.de/Resume_EN.pdf\" target=\"_blank\" class=\"external\" style=\"color: #fff\">Lebenslauf auf Englisch 🇬🇧</a> und mein <a href=\"https://www.yannickspoerl.de/Resume_DE.pdf\" target=\"_blank\" style=\" color: #fff\">Lebenslauf auf Deutsch 🇩🇪</a>",
        "button": "Du bist super! →"
      },
      "end": {
        "title": "Danke für's Vorbeischauen!",
        "subtitle": "Ich hoffe, du hattest Spaß auf dieser kleinen Tour 🚶",
        "button": "Wir sind hier fertig oder?"
      },
      "copyright": {
        "license": "MIT Lizenz",
        "notice": "Datenschutzhinweis",
        "copyright": "2019 - 2020 Yannick Spoerl"
      }
    }
  }
};
const vueI18nLoader = false;
const locales = ["en", "de"];
const defaultLocale = 'en';
const routesNameSeparator = '___';
const defaultLocaleRouteNameSuffix = 'default';
const strategy = 'prefix_except_default';
const lazy = false;
const langDir = null;
const rootRedirect = null;
const detectBrowserLanguage = {
  "useCookie": true,
  "cookieDomain": null,
  "cookieKey": "i18n_redirected",
  "alwaysRedirect": false,
  "fallbackLocale": ""
};
const differentDomains = false;
const seo = false;
const baseUrl = '';
const vuex = {
  "moduleName": "i18n",
  "syncLocale": false,
  "syncMessages": false,
  "syncRouteParams": true
};
const parsePages = true;
const pages = {};
const beforeLanguageSwitch = () => null;
const onLanguageSwitched = () => null;
const IS_UNIVERSAL_MODE = true;
const MODULE_NAME = 'nuxt-i18n';
const LOCALE_CODE_KEY = 'code';
const LOCALE_ISO_KEY = 'iso';
const LOCALE_DOMAIN_KEY = 'domain';
const LOCALE_FILE_KEY = 'file';
const STRATEGIES = {
  "PREFIX": "prefix",
  "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
  "PREFIX_AND_DEFAULT": "prefix_and_default",
  "NO_PREFIX": "no_prefix"
};
const COMPONENT_OPTIONS_KEY = 'nuxtI18n';
const localeCodes = ["en", "de"];
const trailingSlash = undefined;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue-feather-icons");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e02.woff2";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/EJRVQgYoZZY2vCFuvAFSzr-_dSb_nco.380b5d0.woff2";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/EJRVQgYoZZY2vCFuvAFYzr-_dSb_nco.aef7c5d.woff2";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfc.woff2";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("86150b90", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("01b54bb1", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1c916bdb", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b8808616", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44b2c830", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavLink.vue?vue&type=template&id=35f2c332&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.isExternal(this.link) && this.link[0] !== '#')?_c('router-link',{staticClass:"nav-link",attrs:{"to":this.link}},[_vm._t("default")],2):_c('a',{staticClass:"nav-link external",attrs:{"href":_vm.computedLink,"target":_vm.isMailto(_vm.normalizedlink) || _vm.isTel(_vm.normalizedlink) || this.link[0] === '#' ? null : '_blank',"rel":_vm.isMailto(_vm.normalizedlink) || _vm.isTel(_vm.normalizedlink) ? null : 'noopener noreferrer'}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NavLink.vue?vue&type=template&id=35f2c332&

// CONCATENATED MODULE: ./components/util.js
const hashRE = /#.*$/;
const extRE = /\.(md|html)$/;
const endingSlashRE = /\/$/;
const outboundRE = /^(https?:|mailto:|tel:)/;
function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}
function isExternal(path) {
  return outboundRE.test(path);
}
function isMailto(path) {
  return /^mailto:/.test(path);
}
function isTel(path) {
  return /^tel:/.test(path);
}
function ensureExt(path) {
  if (isExternal(path)) {
    return path;
  }

  const hashMatch = path.match(hashRE);
  const hash = hashMatch ? hashMatch[0] : '';
  const normalized = normalize(path);

  if (endingSlashRE.test(normalized)) {
    return path;
  }

  return normalized + hash;
}
/*
 * find parent vm by ref
 * @param {String} ref
 * @param {Vue} vm
 * @param {any} def default value
 * @returns {Element}
 */

function findContainerInVm(ref, vm, def) {
  if (!ref) return def;
  let container;
  let parent = vm;

  while ((parent = parent.$parent) && !container) {
    container = parent.$refs[ref];
  } // Ensure it's html element (ref could be component)


  if (container && container.$el) {
    container = container.$el;
  }

  return container || def;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavLink.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NavLinkvue_type_script_lang_js_ = ({
  props: {
    link: {
      required: true
    }
  },
  computed: {
    computedLink() {
      if (isExternal(this.link)) return this.link;
      return '/' + this.link;
    },

    normalizedlink() {
      if (!this.link) return;
      if (this.$router.currentRoute.path !== '/') return '/' + this.link;
      return ensureExt(this.link);
    }

  },
  methods: {
    isExternal: isExternal,
    isMailto: isMailto,
    isTel: isTel
  }
});
// CONCATENATED MODULE: ./components/NavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavLinkvue_type_script_lang_js_ = (NavLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/NavLink.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "28d23792"
  
)

/* harmony default export */ var NavLink = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.e51ba59.png";

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=d74a0a2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{attrs:{"id":"header-wrapper"}},[_vm._ssrNode("<header id=\"header\">","</header>",[_vm._ssrNode("<div class=\"header-wrapper\">","</div>",[_vm._ssrNode("<div class=\"title\">","</div>",[_c('NavLink',{staticClass:"home-link",attrs:{"link":"#hello"}},[_c('img',{attrs:{"src":__webpack_require__(24),"width":"7.4%","alt":"Logo"}}),_vm._v("\n              \n            "+_vm._s(_vm.$site.title)+"\n        ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[(_vm.$site.navbar)?_vm._ssrNode("<ul class=\"nav\">","</ul>",[_vm._l((_vm.$site.navbar),function(item){return _vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('NavLink',{attrs:{"link":item.link}},[_vm._v("\n              "+_vm._s(_vm.$t('navbar.' + item.text))+"\n            ")])],1)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" style=\"cursor: pointer\">","</li>",[_vm._ssrNode("<a>","</a>",[_c('flag',{attrs:{"squared":false,"iso":_vm.flagMapping[_vm.$i18n.locale]}})],1)])],2):_vm._e()])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=d74a0a2c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
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
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  data() {
    return {
      /**
       * map locales to flag-isos
       */
      flagMapping: {
        de: 'gb',
        en: 'de'
      }
    };
  },

  computed: {
    activeLink() {
      return this.$router.currentRoute;
    }

  },
  methods: {
    /**
     * change local and persist in cookie
     */
    changeLocale() {
      if (this.$i18n.locale === 'de') {
        this.$i18n.locale = 'en';
        localStorage.setItem('yannickspoerlde-locale', 'en');
        return;
      }

      this.$i18n.locale = 'de';
      localStorage.setItem('yannickspoerlde-locale', 'de');
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "73b49e03"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavLink: __webpack_require__(20).default,Header: __webpack_require__(25).default})


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=b6c3bdb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer-left-wrap\" data-v-b6c3bdb0>","</div>",[(_vm.contact)?_vm._ssrNode("<ul class=\"contact\" data-v-b6c3bdb0>","</ul>",_vm._l((_vm.contact),function(item){return _vm._ssrNode("<li class=\"contact-item\" data-v-b6c3bdb0>","</li>",[_c('NavLink',{attrs:{"link":item.link}},[_c(item.iconComponent,{tag:"component"}),_vm._v("\n            "+_vm._s(item.text)+"\n        ")],1)],1)}),0):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer-right-wrap\" data-v-b6c3bdb0>","</div>",[(_vm.copyright)?_vm._ssrNode("<ul class=\"copyright\" data-v-b6c3bdb0>","</ul>",_vm._l((_vm.copyright),function(item){return _vm._ssrNode("<li class=\"copyright-item\" data-v-b6c3bdb0>","</li>",[_c('NavLink',{attrs:{"link":item.link}},[_vm._v("\n          "+_vm._s(_vm.$t('copyright.' + item.text))+"\n        ")])],1)}),0):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=b6c3bdb0&scoped=true&

// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  components: {
    CodepenIcon: external_vue_feather_icons_["CodepenIcon"],
    CodesandboxIcon: external_vue_feather_icons_["CodesandboxIcon"],
    FacebookIcon: external_vue_feather_icons_["FacebookIcon"],
    GithubIcon: external_vue_feather_icons_["GithubIcon"],
    GitlabIcon: external_vue_feather_icons_["GitlabIcon"],
    GlobeIcon: external_vue_feather_icons_["GlobeIcon"],
    InstagramIcon: external_vue_feather_icons_["InstagramIcon"],
    LinkedinIcon: external_vue_feather_icons_["LinkedinIcon"],
    MailIcon: external_vue_feather_icons_["MailIcon"],
    MessageSquareIcon: external_vue_feather_icons_["MessageSquareIcon"],
    MusicIcon: external_vue_feather_icons_["MusicIcon"],
    PhoneIcon: external_vue_feather_icons_["PhoneIcon"],
    TwitterIcon: external_vue_feather_icons_["TwitterIcon"],
    VideoIcon: external_vue_feather_icons_["VideoIcon"],
    YoutubeIcon: external_vue_feather_icons_["YoutubeIcon"]
  },
  computed: {
    contact() {
      return (this.$site.contact || []).map(({
        type,
        link
      }) => {
        return {
          iconComponent: this.getIconComponentName(type),
          link
        };
      }).filter(({
        iconComponent
      }) => iconComponent);
    },

    copyright() {
      return this.$site.copyright || [];
    }

  },
  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case 'codepen':
          return 'CodepenIcon';

        case 'codesandbox':
          return 'CodesandboxIcon';

        case 'facebook':
          return 'FacebookIcon';

        case 'github':
          return 'GithubIcon';

        case 'gitlab':
          return 'GitlabIcon';

        case 'instagram':
          return 'InstagramIcon';

        case 'linkedin':
          return 'LinkedinIcon';

        case 'mail':
          return 'MailIcon';

        case 'messenger':
          return 'MessageSquareIcon';

        case 'music':
          return 'MusicIcon';

        case 'phone':
          return 'PhoneIcon';

        case 'twitter':
          return 'TwitterIcon';

        case 'video':
          return 'VideoIcon';

        case 'web':
          return 'GlobeIcon';

        case 'youtube':
          return 'YoutubeIcon';

        default:
          return '';
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b6c3bdb0",
  "52823a11"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavLink: __webpack_require__(20).default,Footer: __webpack_require__(26).default})


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Yannick Spoerl\",\"navbar\":[{\"text\":\"about\",\"link\":\"#me\"},{\"text\":\"socials\",\"link\":\"#socials\"},{\"text\":\"blog\",\"link\":\"#blog\"},{\"text\":\"resume\",\"link\":\"#resume\"}],\"contact\":[{\"type\":\"github\",\"link\":\"https://github.com/YannickSpoerl\"},{\"type\":\"twitter\",\"link\":\"https://twitter.com/yannickspoerl\"},{\"type\":\"instagram\",\"link\":\"https://www.instagram.com/yannickspoerl\"},{\"type\":\"mail\",\"link\":\"mailto:yannick@yannickspoerl.de\"}],\"copyright\":[{\"text\":\"copyright\",\"link\":\"/\"},{\"text\":\"notice\",\"link\":\"/privacy\"},{\"text\":\"license\",\"link\":\"/license\"}]}");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
module.exports = __webpack_require__(48);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
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
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button{background:#d05dd2;color:#fff;border-radius:5px;border:none}body,html{padding:0;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a:hover{text-decoration:underline}.content__default:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img{max-width:100%}.content__default.custom{padding:0;margin:0}.content__default.custom img{max-width:100%}a{font-weight:500;color:#41b883;text-decoration:underline}a:hover{color:#349369}p a code{font-weight:400;color:#41b883}kbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1,.content__default:not(.custom)>h2,.content__default:not(.custom)>h3,.content__default:not(.custom)>h4,.content__default:not(.custom)>h5,.content__default:not(.custom)>h6{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3{font-size:1.35rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor:hover{text-decoration:none}.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid rgba(0,0,0,.3)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1:first-child{padding-top:2rem}}@media (max-width:419px){h1{font-size:1.9rem}.content__default div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}#vuepress-theme-blog__global-layout{word-wrap:break-word}.content-wrapper{padding:160px 15px 80px;min-height:calc(100vh - 300px);max-width:1080px;margin:0 auto}@media (max-width:719px){.content-wrapper{padding:100px 15px 20px;min-height:calc(100vh - 180px)}}.content-wrapper-main{padding-top:80px;width:100%;height:100%;margin:0}@media (max-width:719px){.content-wrapper-main{padding:65px 0 0;min-height:calc(100vh - 140px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
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
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button{background:#d05dd2;color:#fff;border-radius:5px;border:none}body,html{padding:0;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a:hover{text-decoration:underline}.content__default:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img{max-width:100%}.content__default.custom{padding:0;margin:0}.content__default.custom img{max-width:100%}a{font-weight:500;color:#41b883;text-decoration:underline}a:hover{color:#349369}p a code{font-weight:400;color:#41b883}kbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1,.content__default:not(.custom)>h2,.content__default:not(.custom)>h3,.content__default:not(.custom)>h4,.content__default:not(.custom)>h5,.content__default:not(.custom)>h6{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3{font-size:1.35rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor:hover{text-decoration:none}.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid rgba(0,0,0,.3)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1:first-child{padding-top:2rem}}@media (max-width:419px){h1{font-size:1.9rem}.content__default div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.activeLink{color:#41b883}#header{z-index:12;position:fixed;top:0;width:100vw;height:80px;box-sizing:border-box;background-color:#fff;padding:20px 32px;margin:auto;box-shadow:0 5px 20px rgba(0,0,0,.03),0 6px 6px rgba(0,0,0,.05);transition:all 1s cubic-bezier(.25,.8,.25,1)}#header ol,#header ul{list-style:none;margin:0;padding:0}#header:hover{box-shadow:0 5px 20px rgba(0,0,0,.08),0 6px 6px rgba(0,0,0,.1)}.header-wrapper{display:flex;line-height:40px;height:40px}.header-wrapper .title{font-size:30px;margin:0;letter-spacing:2px;display:block;text-transform:uppercase}.header-wrapper .title a{color:#000;font-weight:700;text-decoration:none}.header-wrapper .header-right-wrap{flex:1;display:flex;justify-content:flex-end;align-items:center}.header-wrapper .header-right-wrap .nav{flex:0 0 auto;display:flex;margin:0}.header-wrapper .header-right-wrap .nav .nav-item{margin-left:20px}.header-wrapper .header-right-wrap .nav .nav-item a{font-size:20px;text-decoration:none;transition:color .3s}.header-wrapper .header-right-wrap .search-box{margin-left:20px}.header-wrapper .header-right-wrap .search-box input{border-radius:5px;transition:all .5s;border:1px solid #cecece}.header-wrapper .header-right-wrap .search-box input:hover{border:1px solid #41b883;box-shadow:0 0 5px #41b883}.header-wrapper .header-right-wrap .search-box .suggestions{border:1px solid #000;top:40px;right:0}.header-wrapper .header-right-wrap .search-box .suggestions a{color:#000;text-decoration:none}.header-wrapper .header-right-wrap .search-box .suggestions a.focused{color:#41b883}@media (max-width:719px){#header{display:none}.header-wrapper{flex-direction:column}.header-wrapper .header-right-wrap{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
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
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button{background:#d05dd2;color:#fff;border-radius:5px;border:none}body,html{padding:0;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a:hover{text-decoration:underline}.content__default:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img{max-width:100%}.content__default.custom{padding:0;margin:0}.content__default.custom img{max-width:100%}a{font-weight:500;color:#41b883;text-decoration:underline}a:hover{color:#349369}p a code{font-weight:400;color:#41b883}kbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1,.content__default:not(.custom)>h2,.content__default:not(.custom)>h3,.content__default:not(.custom)>h4,.content__default:not(.custom)>h5,.content__default:not(.custom)>h6{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3{font-size:1.35rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor:hover{text-decoration:none}.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid rgba(0,0,0,.3)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1:first-child{padding-top:2rem}}@media (max-width:419px){h1{font-size:1.9rem}.content__default div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.nav-link{color:#000}.nav-link.router-link-active,.nav-link:hover{color:#41b883}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileHeader_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
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
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button{background:#d05dd2;color:#fff;border-radius:5px;border:none}body,html{padding:0;margin:0}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a:hover{text-decoration:underline}.content__default:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img{max-width:100%}.content__default.custom{padding:0;margin:0}.content__default.custom img{max-width:100%}a{font-weight:500;color:#41b883;text-decoration:underline}a:hover{color:#349369}p a code{font-weight:400;color:#41b883}kbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p{margin:0}ol,ul{padding-left:1.2em}strong{font-weight:600}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1,.content__default:not(.custom)>h2,.content__default:not(.custom)>h3,.content__default:not(.custom)>h4,.content__default:not(.custom)>h5,.content__default:not(.custom)>h6{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1}h1{font-size:2.2rem}h2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3{font-size:1.35rem}a.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor:hover{text-decoration:none}.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol,p,ul{line-height:1.7}hr{border:0;border-top:1px solid rgba(0,0,0,.3)}table{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr{border-top:1px solid #dfe2e5}tr:nth-child(2n){background-color:#f6f8fa}td,th{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1:first-child{padding-top:2rem}}@media (max-width:419px){h1{font-size:1.9rem}.content__default div[class*=language-]{margin:.85rem -1.5rem;border-radius:0}}.mobile-header-bar{z-index:12;position:fixed;top:0;width:100vw;box-sizing:border-box;background-color:#fff;margin:auto;box-shadow:0 5px 20px rgba(0,0,0,.03),0 6px 6px rgba(0,0,0,.05);transition:all 1s cubic-bezier(.25,.8,.25,1)}#mobile-header .mobile-header-title{display:flex;align-items:center;justify-content:space-between;padding:1.2em}#mobile-header .mobile-header-title .mobile-home-link{text-decoration:none;text-transform:uppercase;color:#000;font-weight:700}.mobile-nav-item{padding:10px 0;list-style:none}.mobile-nav-item a{text-decoration:none}.menu-divider{margin:0}.mobile-menu-wrapper{max-height:0;overflow:hidden;transition:.3s ease;background-color:#fff}.mobile-menu-wrapper.open{max-height:450px;transition:.3s ease}@media (min-width:719px){#mobile-header{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_b6c3bdb0_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
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
exports.push([module.i, "@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:\"PT Serif\";font-style:normal;font-weight:400;font-display:swap;src:local(\"PT Serif\"),local(\"PTSerif-Regular\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.global-ui .sw-update-popup[data-v-b6c3bdb0]{border-color:$accentColor;color:$accentColor;border-radius:10px}.global-ui .sw-update-popup button[data-v-b6c3bdb0]{background:#d05dd2;color:#fff;border-radius:5px;border:none}body[data-v-b6c3bdb0],html[data-v-b6c3bdb0]{padding:0;margin:0}body[data-v-b6c3bdb0]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50;background-color:#fff}.content__default:not(.custom) a[data-v-b6c3bdb0]:hover{text-decoration:underline}.content__default:not(.custom) p.demo[data-v-b6c3bdb0]{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px}.content__default:not(.custom) img[data-v-b6c3bdb0]{max-width:100%}.content__default.custom[data-v-b6c3bdb0]{padding:0;margin:0}.content__default.custom img[data-v-b6c3bdb0]{max-width:100%}a[data-v-b6c3bdb0]{font-weight:500;color:#41b883;text-decoration:underline}a[data-v-b6c3bdb0]:hover{color:#349369}p a code[data-v-b6c3bdb0]{font-weight:400;color:#41b883}kbd[data-v-b6c3bdb0]{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em}blockquote[data-v-b6c3bdb0]{font-size:.9rem;color:#215c42;border-left:3px solid #41b883;margin:.5rem 0;padding:.25rem 0 .25rem 1rem}blockquote>p[data-v-b6c3bdb0]{margin:0}ol[data-v-b6c3bdb0],ul[data-v-b6c3bdb0]{padding-left:1.2em}strong[data-v-b6c3bdb0]{font-weight:600}h1[data-v-b6c3bdb0],h2[data-v-b6c3bdb0],h3[data-v-b6c3bdb0],h4[data-v-b6c3bdb0],h5[data-v-b6c3bdb0],h6[data-v-b6c3bdb0]{font-weight:600;line-height:1.25}.content__default:not(.custom)>h1[data-v-b6c3bdb0],.content__default:not(.custom)>h2[data-v-b6c3bdb0],.content__default:not(.custom)>h3[data-v-b6c3bdb0],.content__default:not(.custom)>h4[data-v-b6c3bdb0],.content__default:not(.custom)>h5[data-v-b6c3bdb0],.content__default:not(.custom)>h6[data-v-b6c3bdb0]{margin-top:calc(.5rem - 80px);padding-top:calc(80px + 1rem);margin-bottom:0}h1:hover .header-anchor[data-v-b6c3bdb0],h2:hover .header-anchor[data-v-b6c3bdb0],h3:hover .header-anchor[data-v-b6c3bdb0],h4:hover .header-anchor[data-v-b6c3bdb0],h5:hover .header-anchor[data-v-b6c3bdb0],h6:hover .header-anchor[data-v-b6c3bdb0]{opacity:1}h1[data-v-b6c3bdb0]{font-size:2.2rem}h2[data-v-b6c3bdb0]{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid rgba(0,0,0,.3)}h3[data-v-b6c3bdb0]{font-size:1.35rem}a.header-anchor[data-v-b6c3bdb0]{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0}a.header-anchor[data-v-b6c3bdb0]:hover{text-decoration:none}.line-number[data-v-b6c3bdb0],code[data-v-b6c3bdb0],kbd[data-v-b6c3bdb0]{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}ol[data-v-b6c3bdb0],p[data-v-b6c3bdb0],ul[data-v-b6c3bdb0]{line-height:1.7}hr[data-v-b6c3bdb0]{border:0;border-top:1px solid rgba(0,0,0,.3)}table[data-v-b6c3bdb0]{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto}tr[data-v-b6c3bdb0]{border-top:1px solid #dfe2e5}tr[data-v-b6c3bdb0]:nth-child(2n){background-color:#f6f8fa}td[data-v-b6c3bdb0],th[data-v-b6c3bdb0]{border:1px solid #dfe2e5;padding:.6em 1em}@media (max-width:719px){.content__default:not(.custom)>h1[data-v-b6c3bdb0]:first-child{padding-top:2rem}}@media (max-width:419px){h1[data-v-b6c3bdb0]{font-size:1.9rem}.content__default div[class*=language-][data-v-b6c3bdb0]{margin:.85rem -1.5rem;border-radius:0}}ol[data-v-b6c3bdb0],ul[data-v-b6c3bdb0]{list-style:none;margin:0;padding:0}.footer[data-v-b6c3bdb0]{min-height:60px;box-sizing:border-box;background-color:#000;display:flex;padding:15px 32px}.footer .footer-left-wrap[data-v-b6c3bdb0]{line-height:30px;flex:1;display:flex}.footer .footer-left-wrap .contact[data-v-b6c3bdb0]{display:flex;flex-wrap:wrap;justify-content:center}.footer .footer-left-wrap .contact .contact-item[data-v-b6c3bdb0]{margin-right:10px}.footer .footer-left-wrap .contact .contact-item a[data-v-b6c3bdb0]{font-size:12px;color:#828282;text-decoration:none;transition:color .3s}.footer .footer-left-wrap .contact .contact-item a[data-v-b6c3bdb0]:hover{color:#fff}.footer .footer-right-wrap[data-v-b6c3bdb0]{flex:1;display:flex;align-items:center;justify-content:center}@media (min-width:959px){.footer .footer-right-wrap[data-v-b6c3bdb0]{justify-content:flex-end}}.footer .footer-right-wrap .copyright[data-v-b6c3bdb0]{display:flex;justify-content:flex-end}.footer .footer-right-wrap .copyright .copyright-item[data-v-b6c3bdb0]{flex:0 0 auto;padding:0 10px;position:relative;line-height:12px;border-right:1px solid #828282}.footer .footer-right-wrap .copyright .copyright-item[data-v-b6c3bdb0]:last-child{border-right:none}.footer .footer-right-wrap .copyright .copyright-item a[data-v-b6c3bdb0]{font-size:12px;color:#828282;text-decoration:none;transition:color .3s}.footer .footer-right-wrap .copyright .copyright-item a[data-v-b6c3bdb0]:hover{color:hsla(0,0%,100%,.9)}@media (max-width:719px){.footer[data-v-b6c3bdb0]{min-height:100px;flex-direction:column}.footer .footer-left-wrap[data-v-b6c3bdb0]{align-items:center;justify-content:center}.footer .footer-right-wrap .copyright[data-v-b6c3bdb0]{display:block}.footer .footer-right-wrap .copyright .copyright-item[data-v-b6c3bdb0]{line-height:1;border-right:none;text-align:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("is-https");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLanguageAsync", function() { return loadLanguageAsync; });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

/**
 * Asynchronously load messages from translation files
 * @param  {Context}  context  Nuxt context
 * @param  {String}   locale  Language code to load
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;

  if (!app.i18n.loadedLanguages) {
    app.i18n.loadedLanguages = [];
  }

  if (!app.i18n.loadedLanguages.includes(locale)) {
    const langOptions = app.i18n.locales.find(l => l[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_CODE_KEY */ "b"]] === locale);

    if (langOptions) {
      const file = langOptions[_options__WEBPACK_IMPORTED_MODULE_0__[/* LOCALE_FILE_KEY */ "d"]];

      if (file) {// Hiding template directives from eslint so that parsing doesn't break.

        /*  */
      } else {
        // eslint-disable-next-line no-console
        console.warn(`[${_options__WEBPACK_IMPORTED_MODULE_0__[/* MODULE_NAME */ "f"]}] Could not find lang file for locale ${locale}`);
      }
    }
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(27);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(28);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(11);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(21);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(19);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _81284986 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 3).then(__webpack_require__.bind(null, 72)));

const _8012b368 = () => interopDefault(__webpack_require__.e(/* import() | pages/License */ 1).then(__webpack_require__.bind(null, 73)));

const _3fc84a13 = () => interopDefault(__webpack_require__.e(/* import() | pages/Privacy */ 2).then(__webpack_require__.bind(null, 74))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/de",
    component: _81284986,
    name: "index___de"
  }, {
    path: "/License",
    component: _8012b368,
    name: "License___en"
  }, {
    path: "/Privacy",
    component: _3fc84a13,
    name: "Privacy___en"
  }, {
    path: "/de/License",
    component: _8012b368,
    name: "License___de"
  }, {
    path: "/de/Privacy",
    component: _3fc84a13,
    name: "Privacy___de"
  }, {
    path: "/",
    component: _81284986,
    name: "index___en"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=0b44280c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<h1>Looks, like you did a wrong turn!</h1> <a href=\"/\">Take me back!</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=0b44280c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error'],
  layout: 'default'
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e18b6c82"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "ea2423ac"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3fc24c2c&
var defaultvue_type_template_id_3fc24c2c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"vuepress-theme-blog__global-layout"}},[_c('Header'),_vm._ssrNode(" "),_c('MobileHeader',{attrs:{"is-open":_vm.isMobileHeaderOpen},on:{"toggle-sidebar":function($event){_vm.isMobileHeaderOpen = !_vm.isMobileHeaderOpen}}}),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.$router.currentRoute.path === '/' ? 'content-wrapper-main' : 'content-wrapper'))+">","</div>",[_c('nuxt')],1),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_3fc24c2c_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3fc24c2c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
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
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  data() {
    return {
      isMobileHeaderOpen: false
    };
  },

  mounted() {
    this.isMobileHeaderOpen = false;
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_3fc24c2c_render,
  defaultvue_type_template_id_3fc24c2c_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "13ecbdb8"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(25).default,MobileHeader: __webpack_require__(49).default,Footer: __webpack_require__(26).default})

// CONCATENATED MODULE: ./.nuxt/App.js





const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._payloadFetchIndex = 0;
    },

    async fetchPayload(route) {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      const base = (this.$router.options.base || '').replace(/\/+$/, '');

      if (base && route.startsWith(base)) {
        route = route.substr(base.length);
      }

      route = (route.replace(/\/+$/, '') || '/').split('?')[0].split('#')[0];
      const src = urlJoin(base, staticAssetsBase, route, 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(decodeURI(route), encodeURI(src));
        this.setPagePayload(payload);
        return payload;
      } catch (err) {
        this.setPagePayload(false);
        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js

/** @type {import('@nuxt/types').Middleware} */

_nuxt_middleware.nuxti18n = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};
// EXTERNAL MODULE: ./.nuxt/nuxt-i18n/options.js
var nuxt_i18n_options = __webpack_require__(0);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js




function localePath(route, locale) {
  const localizedRoute = localeRoute.call(this, route, locale);

  if (!localizedRoute) {
    return;
  }

  return localizedRoute.fullPath;
}

function localeRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;

  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && locale && locale !== i18n.locale) {
    // eslint-disable-next-line no-console
    console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Passing non-current locale to localePath is unsupported when using no_prefix strategy`);
  }

  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  const localizedRoute = Object.assign({}, route);

  if (route.path && !route.name) {
    const isDefaultLocale = locale === nuxt_i18n_options["j" /* defaultLocale */]; // if route has a path defined but no name, resolve full route using the path

    const isPrefixed = // don't prefix default locale
    !(isDefaultLocale && [nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_EXCEPT_DEFAULT, nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT].includes(nuxt_i18n_options["t" /* strategy */])) && // no prefix for any language
    !(nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) && // no prefix for different domains
    !i18n.differentDomains;
    let path = isPrefixed ? `/${locale}${route.path}` : route.path;
    path = path.replace(/\/+$/, '') + (nuxt_i18n_options["u" /* trailingSlash */] ? '/' : '') || '/';
    localizedRoute.path = path;
  } else {
    if (!route.name && !route.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  return this.router.resolve(localizedRoute).route;
}

function switchLocalePath(locale) {
  const i18n = this.i18n;

  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX && locale && locale !== i18n.locale) {
    // eslint-disable-next-line no-console
    console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Passing non-current locale to switchLocalePath is unsupported when using no_prefix strategy`);
  }

  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncRouteParams && store) {
    langSwitchParams = store.getters[`${nuxt_i18n_options["w" /* vuex */].moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const lang = i18n.locales.find(l => l[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]] === locale);

    if (lang && lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]]) {
      let protocol;

      if (true) {
        const isHTTPS = __webpack_require__(44);

        protocol = isHTTPS(this.req) ? 'https' : 'http';
      } else {}

      path = protocol + '://' + lang[nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */]] + path;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Could not find domain name for locale ${locale}`);
    }
  }

  return path;
}

function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route.name) {
    return null;
  }

  return route.name.split(nuxt_i18n_options["s" /* routesNameSeparator */])[0];
}

function getLocaleRouteName(routeName, locale) {
  const name = routeName + (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX ? '' : nuxt_i18n_options["s" /* routesNameSeparator */] + locale); // Match route without prefix for default locale

  if (locale === nuxt_i18n_options["j" /* defaultLocale */] && nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    return name + nuxt_i18n_options["s" /* routesNameSeparator */] + nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */];
  }

  return name;
}

const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.apply(proxy, arguments);
  };
};

const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app
  } = context;
  app.localePath = NuxtContextProxy(context, localePath);
  app.localeRoute = NuxtContextProxy(context, localeRoute);
  app.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(22);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/seo-head.js


const nuxtI18nSeo = function () {
  if (!(external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) || !this.$i18n || !this.$i18n.locale || !this.$i18n.locales || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] === false || this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]] && this.$options[nuxt_i18n_options["a" /* COMPONENT_OPTIONS_KEY */]].seo === false) {
    return {};
  }

  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.locales.find(l => codeFromLocale(l) === this.$i18n.locale);
  const currentLocaleIso = isoFromLocale(currentLocale);

  if (currentLocale && currentLocaleIso) {
    metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
  }

  addHreflangLinks.bind(this)(this.$i18n.locales, this.$i18n.__baseUrl, metaObject.link);
  addCanonicalLinks.bind(this)(currentLocale, this.$i18n.__baseUrl, metaObject.link);
  addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
  addAlternateOgLocales.bind(this)(this.$i18n.locales, currentLocaleIso, metaObject.meta);
  return metaObject;
};

function addHreflangLinks(locales, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
    return;
  }

  const localeMap = new Map();

  for (const locale of locales) {
    const localeIso = isoFromLocale(locale);

    if (!localeIso) {
      // eslint-disable-next-line no-console
      console.warn(`[${nuxt_i18n_options["f" /* MODULE_NAME */]}] Locale ISO code is required to generate alternate link`);
      continue;
    }

    const [language, region] = localeIso.split('-');

    if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
      localeMap.set(language, locale);
    }

    localeMap.set(localeIso, locale);
  }

  for (const [iso, mapLocale] of localeMap.entries()) {
    link.push({
      hid: `alternate-hreflang-${iso}`,
      rel: 'alternate',
      href: baseUrl + this.switchLocalePath(mapLocale.code),
      hreflang: iso
    });
  }
}

function addCanonicalLinks(currentLocale, baseUrl, link) {
  if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].PREFIX_AND_DEFAULT) {
    return;
  }

  const currentLocaleCode = codeFromLocale(currentLocale);
  const canonicalPath = this.switchLocalePath(currentLocaleCode);
  const canonicalPathIsDifferentFromCurrent = canonicalPath !== this.$route.path;
  const shouldAddCanonical = canonicalPath && canonicalPathIsDifferentFromCurrent;

  if (!shouldAddCanonical) {
    return;
  }

  link.push({
    hid: `canonical-lang-${currentLocaleCode}`,
    rel: 'canonical',
    href: baseUrl + canonicalPath
  });
}

function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
  const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

  if (!hasCurrentLocaleAndIso) {
    return;
  }

  meta.push({
    hid: 'og:locale',
    property: 'og:locale',
    // Replace dash with underscore as defined in spec: language_TERRITORY
    content: underscoreIsoFromLocale(currentLocale)
  });
}

function addAlternateOgLocales(locales, currentLocaleIso, meta) {
  const localesWithoutCurrent = locales.filter(locale => {
    const localeIso = isoFromLocale(locale);
    return localeIso && localeIso !== currentLocaleIso;
  });
  const alternateLocales = localesWithoutCurrent.map(locale => ({
    hid: `og:locale:alternate-${isoFromLocale(locale)}`,
    property: 'og:locale:alternate',
    content: underscoreIsoFromLocale(locale)
  }));
  meta.push(...alternateLocales);
}

function isoFromLocale(locale) {
  return locale[nuxt_i18n_options["e" /* LOCALE_ISO_KEY */]];
}

function underscoreIsoFromLocale(locale) {
  return isoFromLocale(locale).replace(/-/g, '_');
}

function codeFromLocale(locale) {
  return locale[nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]];
}
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(23);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(45);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/**
 * Parses locales provided from browser through `accept-language` header.
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

const parseAcceptLanguage = input => {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
};
/**
 * Find locale code that best matches provided list of browser locales.
 * @param {string[]} appLocales The user-configured locale codes that are to be matched.
 * @param {string[]} browserLocales The locales to match against configured.
 * @return {string?}
 */

const matchBrowserLocale = (appLocales, browserLocales) => {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // First pass: match exact locale.

  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedCode = appLocales.find(appCode => appCode.toLowerCase() === browserCode.toLowerCase());

    if (matchedCode) {
      matchedLocales.push({
        code: matchedCode,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    if (browserCode.includes('-')) {
      // For backwards-compatibility, this is lower-cased before comparing.
      const languageCode = browserCode.split('-')[0].toLowerCase();

      if (appLocales.includes(languageCode)) {
        // Deduct a thousandth for being non-exact match.
        matchedLocales.push({
          code: languageCode,
          score: 0.999 - index / browserLocales.length
        });
        break;
      }
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : null;
};
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 * @param {string | function} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @return {string}
 */

const resolveBaseUrl = (baseUrl, context) => {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  return baseUrl;
};
/**
 * Get locale code that corresponds to current hostname
 * @param  {object} locales
 * @param  {object} [req] Request object
 * @param  {{ localDomainKey: string, localeCodeKey: string }} options
 * @return {string | null} Locade code found if any
 */

const getLocaleDomain = (locales, req, {
  localDomainKey,
  localeCodeKey
}) => {
  const hostname =  false ? undefined : req.headers['x-forwarded-host'] || req.headers.host;

  if (hostname) {
    const localeDomain = locales.find(l => l[localDomainKey] === hostname);

    if (localeDomain) {
      return localeDomain[localeCodeKey];
    }
  }

  return null;
};
/**
 * Creates getter for getLocaleFromRoute
 * @param  {string[]} localeCodes
 * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
 * @return {(route) => string| null}
 */

const createLocaleFromRouteGetter = (localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) => {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = new RegExp(`^/${localesPattern}/`, 'i');
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {Object} route
   * @param  {string[]} localeCodes
   * @param  {{ routesNameSeparator: string, defaultLocaleRouteNameSuffix: string }} options
   * @return {string | null} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return null;
  };

  return getLocaleFromRoute;
};
/**
 * @param {object} [req]
 * @param {{ useCookie: boolean, localeCodes: string[], cookieKey: string}} options
 * @return {string | void}
 */

const getLocaleCookie = (req, {
  useCookie,
  cookieKey,
  localeCodes
}) => {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
};
/**
 * @param {string} locale
 * @param {object} [res]
 * @param {{ useCookie: boolean, cookieDomain: string, cookieKey: string}} options
 */

const setLocaleCookie = (locale, res, {
  useCookie,
  cookieDomain,
  cookieKey
}) => {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: 'lax'
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (typeof headers === 'string') {
      headers = [headers];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
};
const registerStore = (store, vuex, localeCodes, moduleName) => {
  store.registerModule(vuex.moduleName, {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => locale => routeParams[locale] || {}
      } : {})
    }
  }, {
    preserveState: !!store.state[vuex.moduleName]
  });
};
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 * @param  {Store} store     Vuex store
 * @param  {String} locale   Current locale
 * @param  {Object} messages Current messages
 * @param  {{ vuex: object }} options
 * @return {Promise(void)}
 */

const syncVuex = async (store, locale = null, messages = null, {
  vuex
}) => {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
};

const isObject = value => value && !Array.isArray(value) && typeof value === 'object';
/**
 * Validate setRouteParams action's payload
 * @param {object} routeParams The action's payload
 * @param {string[]} localeCodes
 * @param {string} moduleName
 */


const validateRouteParams = (routeParams, localeCodes, moduleName) => {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(`[${moduleName}] Route params should be an object`);
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for key ${key} which is not a valid locale`);
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(`[${moduleName}] Trying to set route params for locale ${key} with a non-object value`);
    }
  }
};
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





external_vue_default.a.use(external_vue_i18n_default.a);
const getLocaleFromRoute = createLocaleFromRouteGetter(nuxt_i18n_options["o" /* localeCodes */], {
  routesNameSeparator: nuxt_i18n_options["s" /* routesNameSeparator */],
  defaultLocaleRouteNameSuffix: nuxt_i18n_options["k" /* defaultLocaleRouteNameSuffix */]
});
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (nuxt_i18n_options["w" /* vuex */] && store) {
    registerStore(store, nuxt_i18n_options["w" /* vuex */], nuxt_i18n_options["o" /* localeCodes */], nuxt_i18n_options["f" /* MODULE_NAME */]);
  }

  const {
    useCookie,
    cookieKey,
    cookieDomain
  } = nuxt_i18n_options["l" /* detectBrowserLanguage */];

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    // Abort if different domains option enabled
    if (!initialSetup && app.i18n.differentDomains) {
      return;
    } // Abort if newLocale did not change


    if (newLocale === app.i18n.locale) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);

      if (useCookie) {
        app.i18n.setLocaleCookie(newLocale);
      }
    } // Lazy-loading enabled


    if (nuxt_i18n_options["n" /* lazy */]) {
      const {
        loadLanguageAsync
      } = __webpack_require__(46); // Load fallback locale.


      if (app.i18n.fallbackLocale && newLocale !== app.i18n.fallbackLocale) {
        await loadLanguageAsync(context, app.i18n.fallbackLocale);
      }

      await loadLanguageAsync(context, newLocale);
    }

    app.i18n.locale = newLocale;
    await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), {
      vuex: nuxt_i18n_options["w" /* vuex */]
    }); // Must retrieve from context as it might have changed since plugin initialization.

    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getRedirectPathForLocale = (route, locale) => {
    if (!locale || app.i18n.differentDomains || nuxt_i18n_options["t" /* strategy */] === nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      return '';
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);

      if (redirectPath === route.fullPath) {
        return '';
      }
    }

    return redirectPath;
  }; // Called by middleware on navigation (also on the initial one).


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && nuxt_i18n_options["r" /* rootRedirect */]) {
      let statusCode = 302;
      let path = nuxt_i18n_options["r" /* rootRedirect */];

      if (typeof nuxt_i18n_options["r" /* rootRedirect */] !== 'string') {
        statusCode = nuxt_i18n_options["r" /* rootRedirect */].statusCode;
        path = nuxt_i18n_options["r" /* rootRedirect */].path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
    const finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage() || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';
    await app.i18n.setLocale(finalLocale);
    return [null, null];
  };

  const doDetectBrowserLanguage = () => {
    // Browser detection is ignored if it is a nuxt generate.
    if (true) {
      return false;
    }

    const {
      alwaysRedirect,
      fallbackLocale
    } = nuxt_i18n_options["l" /* detectBrowserLanguage */];
    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      matchedLocale = matchBrowserLocale(nuxt_i18n_options["o" /* localeCodes */], parseAcceptLanguage(req.headers['accept-language']));
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      } else if (useCookie && !app.i18n.getLocaleCookie()) {
        app.i18n.setLocaleCookie(finalLocale);
      }
    }

    return false;
  };

  const extendVueI18nInstance = i18n => {
    i18n.locales = nuxt_i18n_options["p" /* locales */];
    i18n.defaultLocale = nuxt_i18n_options["j" /* defaultLocale */];
    i18n.differentDomains = nuxt_i18n_options["m" /* differentDomains */];
    i18n.beforeLanguageSwitch = nuxt_i18n_options["i" /* beforeLanguageSwitch */];
    i18n.onLanguageSwitched = nuxt_i18n_options["q" /* onLanguageSwitched */];

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: nuxt_i18n_options["o" /* localeCodes */]
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.__baseUrl = app.i18n.__baseUrl;
  }; // Set instance options


  const vueI18nOptions = typeof nuxt_i18n_options["v" /* vueI18n */] === 'function' ? Object(nuxt_i18n_options["v" /* vueI18n */])(context) : nuxt_i18n_options["v" /* vueI18n */];
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance;
  app.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  app.i18n.__baseUrl = resolveBaseUrl(nuxt_i18n_options["h" /* baseUrl */], context);
  app.i18n.__onNavigate = onNavigate; // Inject seo function

  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      app.i18n.locales.forEach(locale => {
        locale.domain = store.state.localeDomains[locale.code];
      });
    }
  }

  let finalLocale = nuxt_i18n_options["l" /* detectBrowserLanguage */] && doDetectBrowserLanguage();

  if (!finalLocale) {
    if (nuxt_i18n_options["w" /* vuex */] && nuxt_i18n_options["w" /* vuex */].syncLocale && store && store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale !== '') {
      finalLocale = store.state[nuxt_i18n_options["w" /* vuex */].moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const options = {
        localDomainKey: nuxt_i18n_options["c" /* LOCALE_DOMAIN_KEY */],
        localeCodeKey: nuxt_i18n_options["b" /* LOCALE_CODE_KEY */]
      };
      const domainLocale = getLocaleDomain(nuxt_i18n_options["p" /* locales */], req, options);
      finalLocale = domainLocale;
    } else if (nuxt_i18n_options["t" /* strategy */] !== nuxt_i18n_options["g" /* STRATEGIES */].NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    } else if (useCookie) {
      finalLocale = app.i18n.getLocaleCookie();
    }
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// EXTERNAL MODULE: ./assets/config.json
var assets_config = __webpack_require__(29);

// CONCATENATED MODULE: ./plugins/loadContent.js


external_vue_default.a.prototype.$site = assets_config;
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(47);

// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')

 // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')

 // Source: ../plugins/loadContent.js (mode: 'all')

 // Source: ../plugins/loadFlagModule.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Yannick Spoerl",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/loadContent.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/loadContent.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileHeader.vue?vue&type=template&id=f937eea0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"mobile-header"}},[_vm._ssrNode("<div class=\"mobile-header-bar\">","</div>",[_vm._ssrNode("<div class=\"mobile-header-title\">","</div>",[_c('NavLink',{staticClass:"mobile-home-link",attrs:{"link":"/"}},[_c('img',{attrs:{"src":__webpack_require__(24),"width":"6%","alt":"Logo"}}),_vm._v("\n          \n        "+_vm._s(_vm.$site.title)+"\n      ")]),_vm._ssrNode(" "),_c(_vm.isOpen ? 'XIcon' : 'MenuIcon',{tag:"component",on:{"click":function($event){return _vm.$emit('toggle-sidebar')}}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("mobile-menu-wrapper",{ open: _vm.isOpen }))+">","</div>",[_vm._ssrNode("<hr class=\"menu-divider\"> "),(_vm.$site.navbar)?_vm._ssrNode("<ul class=\"mobile-nav\">","</ul>",[_vm._l((_vm.$site.navbar),function(item){return _vm._ssrNode("<li class=\"mobile-nav-item\">","</li>",[_c('NavLink',{attrs:{"link":item.link}},[_vm._v(_vm._s(_vm.$t('navbar.' + item.text)))])],1)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"mobile-nav-item\" style=\"cursor: pointer\">","</li>",[_vm._ssrNode("<a>","</a>",[_c('flag',{attrs:{"squared":false,"iso":_vm.flagMapping[_vm.$i18n.locale]}})],1)])],2):_vm._e()],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileHeader.vue?vue&type=template&id=f937eea0&

// EXTERNAL MODULE: external "vue-feather-icons"
var external_vue_feather_icons_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileHeader.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var MobileHeadervue_type_script_lang_js_ = ({
  components: {
    MenuIcon: external_vue_feather_icons_["MenuIcon"],
    XIcon: external_vue_feather_icons_["XIcon"]
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      /**
       * map locale to flag-iso
       */
      flagMapping: {
        de: 'gb',
        en: 'de'
      }
    };
  },

  methods: {
    /**
     * change locale and persist in cookie
     */
    changeLocale() {
      this.$emit('toggle-sidebar');

      if (this.$i18n.locale === 'de') {
        this.$i18n.locale = 'en';
        localStorage.setItem('yannickspoerlde-locale', 'en');
        return;
      }

      this.$i18n.locale = 'de';
      localStorage.setItem('yannickspoerlde-locale', 'de');
    }

  }
});
// CONCATENATED MODULE: ./components/MobileHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileHeadervue_type_script_lang_js_ = (MobileHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MobileHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0632a9c5"
  
)

/* harmony default export */ var MobileHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavLink: __webpack_require__(20).default})


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map