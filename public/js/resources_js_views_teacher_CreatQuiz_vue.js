(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_teacher_CreatQuiz_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_select_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select/src/index */ "./node_modules/vue-select/src/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    vSelect: vue_select_src_index__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      errors: {
        role: 0
      },
      questions: [],
      question: '',
      selectedQ: [],
      timeoutID: null
    };
  },
  methods: {
    searchQ: function searchQ(search) {
      var _this = this;

      if (!search) return;
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(function () {
        _this.$http.get("/question?search=".concat(escape(search), "&selected=").concat(encodeURI(_this.selectedQ.map(function (s) {
          return s.id;
        })))).then(function (res) {
          _this.questions = res.data;
        });
      }, 700);
    },
    diffColor: function diffColor(diff) {
      if (diff == 'easy') return 'bg-green-600';else if (diff == 'medium') return 'bg-yellow-400';else if (diff == 'hard') return 'bg-red-600';
    },
    sq: function sq(q) {
      this.selectedQ.push(q);
      this.questions = this.questions.filter(function (ques) {
        return ques.id != q.id;
      });
      this.question = '';
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$http.get('/question').then(function (res) {
      _this2.questions = res.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "text-gray-600 body-font"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-center mt-20 flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", {
  "class": "sm:text-3xl text-2xl font-medium text-purple-600"
}, " Creat new Quiz ")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container max-w-screen-xl px-4 md:px-6 lg:px-8 py-24 mx-auto"
};
var _hoisted_4 = {
  "class": "flex"
};
var _hoisted_5 = {
  "class": "py-3"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  fill: "none",
  "class": "w-6",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
    options: $data.questions,
    label: "question",
    modelValue: $data.question,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.question = $event;
    }),
    onSearch: $options.searchQ,
    "onOption:selected": $options.sq,
    placeholder: "Search for questions... ",
    "class": ["w-full text-lg py-2 border border-purple-600 rounded focus:outline-none style-chooser", !$data.errors.role ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600']
  }, {
    option: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var question = _ref.question,
          difficulty = _ref.difficulty;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": [$options.diffColor(difficulty), "text-white text-xs rounded-md px-2 py-1 mx-2"]
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(difficulty), 3
      /* TEXT, CLASS */
      )])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["options", "modelValue", "onSearch", "onOption:selected", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedQ, function (q) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": "text-white bg-purple-600 rounded px-2 py-1 mr-2 mb-2 inline-flex flex-wrap items-center",
      key: q.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(q.question) + " ", 1
    /* TEXT */
    ), _hoisted_6]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".v-select{\n  position:relative;\n  font-family:inherit\n}\n.v-select,.v-select *{\n  box-sizing:border-box\n}\n@-webkit-keyframes vSelectSpinner{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes vSelectSpinner{\n0%{\n    transform:rotate(0deg)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n.vs__fade-enter-active,.vs__fade-leave-active{\n  pointer-events:none;\n  transition:opacity .15s cubic-bezier(1,.5,.8,1)\n}\n.vs__fade-enter,.vs__fade-leave-to{\n  opacity:0\n}\n.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{\n  cursor:not-allowed;\n  background-color:#f8f8f8\n}\n.v-select[dir=rtl] .vs__actions{\n  padding:0 3px 0 6px\n}\n.v-select[dir=rtl] .vs__clear{\n  margin-left:6px;\n  margin-right:0\n}\n.v-select[dir=rtl] .vs__deselect{\n  margin-left:0;\n  margin-right:2px\n}\n.v-select[dir=rtl] .vs__dropdown-menu{\n  text-align:right\n}\n.vs__dropdown-toggle{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  display:flex;\n  padding:0 0 4px;\n  background:none;\n  border:1px solid rgba(60,60,60,.26);\n  border-radius:4px;\n  white-space:normal\n}\n.vs__selected-options{\n  display:flex;\n  flex-basis:100%;\n  flex-grow:1;\n  flex-wrap:wrap;\n  padding:0 2px;\n  position:relative\n}\n.vs__actions{\n  display:flex;\n  align-items:center;\n  padding:4px 6px 0 3px\n}\n.vs--searchable .vs__dropdown-toggle{\n  cursor:text\n}\n.vs--unsearchable .vs__dropdown-toggle{\n  cursor:pointer\n}\n.vs--open .vs__dropdown-toggle{\n  border-bottom-color:transparent;\n  border-bottom-left-radius:0;\n  border-bottom-right-radius:0\n}\n.vs__open-indicator{\n  fill:rgba(60,60,60,.5);\n  transform:scale(1);\n  transition:transform .15s cubic-bezier(1,-.115,.975,.855);\n  transition-timing-function:cubic-bezier(1,-.115,.975,.855)\n}\n.vs--open .vs__open-indicator{\n  transform:rotate(180deg) scale(1)\n}\n.vs--loading .vs__open-indicator{\n  opacity:0\n}\n.vs__clear{\n  fill:rgba(60,60,60,.5);\n  padding:0;\n  border:0;\n  background-color:transparent;\n  cursor:pointer;\n  margin-right:8px\n}\n.vs__dropdown-menu{\n  display:block;\n  box-sizing:border-box;\n  position:absolute;\n  top:calc(100% - 1px);\n  left:0;\n  z-index:1000;\n  padding:5px 0;\n  margin:0;\n  width:100%;\n  max-height:350px;\n  min-width:160px;\n  overflow-y:auto;\n  box-shadow:0 3px 6px 0 rgba(0,0,0,.15);\n  border:1px solid rgba(60,60,60,.26);\n  border-top-style:none;\n  border-radius:0 0 4px 4px;\n  text-align:left;\n  list-style:none;\n  background:#fff\n}\n.vs__no-options{\n  text-align:center\n}\n.vs__dropdown-option{\n  line-height:1.42857143;\n  display:block;\n  padding:3px 20px;\n  clear:both;\n  color:#333;\n  white-space:nowrap\n}\n.vs__dropdown-option:hover{\n  cursor:pointer\n}\n.vs__dropdown-option--highlight{\n  background:#5897fb;\n  color:#fff\n}\n.vs__dropdown-option--disabled{\n  background:inherit;\n  color:rgba(60,60,60,.5)\n}\n.vs__dropdown-option--disabled:hover{\n  cursor:inherit\n}\n.vs__selected{\n  display:flex;\n  align-items:center;\n  background-color:#f0f0f0;\n  border:1px solid rgba(60,60,60,.26);\n  border-radius:4px;\n  color:#333;\n  line-height:1.4;\n  margin:4px 2px 0;\n  padding:0 .25em;\n  z-index:0\n}\n.vs__deselect{\n  display:inline-flex;\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  margin-left:4px;\n  padding:0;\n  border:0;\n  cursor:pointer;\n  background:none;\n  fill:rgba(60,60,60,.5);\n  text-shadow:0 1px 0 #fff\n}\n.vs--single .vs__selected{\n  background-color:transparent;\n  border-color:transparent\n}\n.vs--single.vs--open .vs__selected{\n  position:absolute;\n  opacity:.4\n}\n.vs--single.vs--searching .vs__selected{\n  display:none\n}\n.vs__search::-webkit-search-cancel-button{\n  display:none\n}\n.vs__search::-ms-clear,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{\n  display:none\n}\n.vs__search,.vs__search:focus{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n  line-height:1.4;\n  font-size:1em;\n  border:1px solid transparent;\n  border-left:none;\n  outline:none;\n  margin:4px 0 0;\n  padding:0 7px;\n  background:none;\n  box-shadow:none;\n  width:0;\n  max-width:100%;\n  flex-grow:1;\n  z-index:1\n}\n.vs__search::-moz-placeholder{\n  color:inherit\n}\n.vs__search:-ms-input-placeholder{\n  color:inherit\n}\n.vs__search::placeholder{\n  color:inherit\n}\n.vs--unsearchable .vs__search{\n  opacity:1\n}\n.vs--unsearchable:not(.vs--disabled) .vs__search:hover{\n  cursor:pointer\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{\n  opacity:.2\n}\n.vs__spinner{\n  align-self:center;\n  opacity:0;\n  font-size:5px;\n  text-indent:-9999em;\n  overflow:hidden;\n  border:.9em solid hsla(0,0%,39.2%,.1);\n  border-left-color:rgba(60,60,60,.45);\n  transform:translateZ(0);\n  -webkit-animation:vSelectSpinner 1.1s linear infinite;\n          animation:vSelectSpinner 1.1s linear infinite;\n  transition:opacity .1s\n}\n.vs__spinner,.vs__spinner:after{\n  border-radius:50%;\n  width:5em;\n  height:5em\n}\n.vs--loading .vs__spinner{\n  opacity:1\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vs__dropdown-toggle {\n  border: 0px;\n}\n.style-chooser .vs__selected {\n  background-color: #7c3aed;\n  color: #fff;\n}\n.style-chooser .vs__dropdown-option.vs__dropdown-option--highlight {\n  background: #7c3aed;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

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

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_12_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_6ec6bfe5_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_6ec6bfe5_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_6ec6bfe5_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_style_index_0_id_3aa39102_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_style_index_0_id_3aa39102_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_style_index_0_id_3aa39102_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-select/src/components/Deselect.vue":
/*!*************************************************************!*\
  !*** ./node_modules/vue-select/src/components/Deselect.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Deselect_vue_vue_type_template_id_0b5ce234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deselect.vue?vue&type=template&id=0b5ce234 */ "./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234");

const script = {}
script.render = _Deselect_vue_vue_type_template_id_0b5ce234__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

script.__file = "node_modules/vue-select/src/components/Deselect.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);

/***/ }),

/***/ "./node_modules/vue-select/src/components/OpenIndicator.vue":
/*!******************************************************************!*\
  !*** ./node_modules/vue-select/src/components/OpenIndicator.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OpenIndicator_vue_vue_type_template_id_b2cac0e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenIndicator.vue?vue&type=template&id=b2cac0e8 */ "./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8");

const script = {}
script.render = _OpenIndicator_vue_vue_type_template_id_b2cac0e8__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

script.__file = "node_modules/vue-select/src/components/OpenIndicator.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);

/***/ }),

/***/ "./node_modules/vue-select/src/components/Select.vue":
/*!***********************************************************!*\
  !*** ./node_modules/vue-select/src/components/Select.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_vue_vue_type_template_id_6ec6bfe5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=6ec6bfe5 */ "./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5");
/* harmony import */ var _Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js */ "./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js");
/* harmony import */ var _Select_vue_vue_type_style_index_0_id_6ec6bfe5_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss */ "./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss");




;
_Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Select_vue_vue_type_template_id_6ec6bfe5__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "node_modules/vue-select/src/components/Select.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_pointerScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/pointerScroll */ "./node_modules/vue-select/src/mixins/pointerScroll.js");
/* harmony import */ var _mixins_typeAheadPointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/typeAheadPointer */ "./node_modules/vue-select/src/mixins/typeAheadPointer.js");
/* harmony import */ var _mixins_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/ajax */ "./node_modules/vue-select/src/mixins/ajax.js");
/* harmony import */ var _childComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./childComponents */ "./node_modules/vue-select/src/components/childComponents.js");
/* harmony import */ var _directives_appendToBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/appendToBody */ "./node_modules/vue-select/src/directives/appendToBody.js");
/* harmony import */ var _utility_sortAndStringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/sortAndStringify */ "./node_modules/vue-select/src/utility/sortAndStringify.js");
/* harmony import */ var _utility_uniqueId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/uniqueId */ "./node_modules/vue-select/src/utility/uniqueId.js");

  
  
  
  
  
  
  

  /**
   * @name VueSelect
   */
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    components: {..._childComponents__WEBPACK_IMPORTED_MODULE_3__.default},

    mixins: [_mixins_pointerScroll__WEBPACK_IMPORTED_MODULE_0__.default, _mixins_typeAheadPointer__WEBPACK_IMPORTED_MODULE_1__.default, _mixins_ajax__WEBPACK_IMPORTED_MODULE_2__.default],

    directives: {appendToBody: _directives_appendToBody__WEBPACK_IMPORTED_MODULE_4__.default},

    emits: [
      'open', 'close',
      'update:modelValue',
      'search',
      'search:compositionstart',
      'search:compositionend',
      'search:keydown',
      'search:blur',
      'search:focus',
      'search:input'
    ],

    props: {
      /**
       * Contains the currently selected value. Very similar to a
       * `value` attribute on an <input>. You can listen for changes
       * using 'change' event using v-on
       * @type {Object||String||null}
       */
      modelValue: {},

      /**
       * An object with any custom components that you'd like to overwrite
       * the default implementation of in your app. The keys in this object
       * will be merged with the defaults.
       * @see https://vue-select.org/guide/components.html
       * @type {Function}
       */
      components: {
        type: Object,
        default: () => ({}),
      },

      /**
       * An array of strings or objects to be used as dropdown choices.
       * If you are using an array of objects, vue-select will look for
       * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
       * custom label key can be set with the `label` prop.
       * @type {Array}
       */
      options: {
        type: Array,
        default() {
          return []
        },
      },

      /**
       * Disable the entire component.
       * @type {Boolean}
       */
      disabled: {
        type: Boolean,
        default: false
      },

      /**
       * Can the user clear the selected property.
       * @type {Boolean}
       */
      clearable: {
        type: Boolean,
        default: true
      },

      /**
       * Enable/disable filtering the options.
       * @type {Boolean}
       */
      searchable: {
        type: Boolean,
        default: true
      },

      /**
       * Equivalent to the `multiple` attribute on a `<select>` input.
       * @type {Boolean}
       */
      multiple: {
        type: Boolean,
        default: false
      },

      /**
       * Equivalent to the `placeholder` attribute on an `<input>`.
       * @type {String}
       */
      placeholder: {
        type: String,
        default: ''
      },

      /**
       * Sets a Vue transition property on the `.vs__dropdown-menu`.
       * @type {String}
       */
      transition: {
        type: String,
        default: 'vs__fade'
      },

      /**
       * Enables/disables clearing the search text when an option is selected.
       * @type {Boolean}
       */
      clearSearchOnSelect: {
        type: Boolean,
        default: true
      },

      /**
       * Close a dropdown when an option is chosen. Set to false to keep the dropdown
       * open (useful when combined with multi-select, for example)
       * @type {Boolean}
       */
      closeOnSelect: {
        type: Boolean,
        default: true
      },

      /**
       * Tells vue-select what key to use when generating option
       * labels when each `option` is an object.
       * @type {String}
       */
      label: {
        type: String,
        default: 'label'
      },

      /**
       * Value of the 'autocomplete' field of the input
       * element.
       * @type {String}
       */
      autocomplete: {
        type: String,
        default: 'off'
      },

      /**
       * When working with objects, the reduce
       * prop allows you to transform a given
       * object to only the information you
       * want passed to a v-model binding
       * or @input event.
       */
      reduce: {
        type: Function,
        default: option => option,
      },

      /**
       * Decides whether an option is selectable or not. Not selectable options
       * are displayed but disabled and cannot be selected.
       *
       * @type {Function}
       * @since 3.3.0
       * @param {Object|String} option
       * @return {Boolean}
       */
      selectable: {
        type: Function,
        default: option => true,
      },

      /**
       * Callback to generate the label text. If {option}
       * is an object, returns option[this.label] by default.
       *
       * Label text is used for filtering comparison and
       * displaying. If you only need to adjust the
       * display, you should use the `option` and
       * `selected-option` slots.
       *
       * @type {Function}
       * @param  {Object || String} option
       * @return {String}
       */
      getOptionLabel: {
        type: Function,
        default(option) {
          if (typeof option === 'object') {
            if (!option.hasOwnProperty(this.label)) {
              return console.warn(
                `[vue-select warn]: Label key "option.${this.label}" does not` +
                ` exist in options object ${JSON.stringify(option)}.\n` +
                'https://vue-select.org/api/props.html#getoptionlabel'
              )
            }
            return option[this.label]
          }
          return option;
        }
      },

      /**
       * Generate a unique identifier for each option. If `option`
       * is an object and `option.hasOwnProperty('id')` exists,
       * `option.id` is used by default, otherwise the option
       * will be serialized to JSON.
       *
       * If you are supplying a lot of options, you should
       * provide your own keys, as JSON.stringify can be
       * slow with lots of objects.
       *
       * The result of this function *must* be unique.
       *
       * @type {Function}
       * @param  {Object || String} option
       * @return {String}
       */
      getOptionKey: {
        type: Function,
        default (option) {
          if (typeof option !== 'object') {
            return option;
          }

          try {
            return option.hasOwnProperty('id') ? option.id : (0,_utility_sortAndStringify__WEBPACK_IMPORTED_MODULE_5__.default)(option);
          } catch (e) {
            const warning = `[vue-select warn]: Could not stringify this option ` +
              `to generate unique key. Please provide'getOptionKey' prop ` +
              `to return a unique key for each option.\n` +
              'https://vue-select.org/api/props.html#getoptionkey';
            return console.warn(warning, option, e);
          }
        },
      },

      /**
       * Select the current value if selectOnTab is enabled
       * @deprecated since 3.3
       */
      onTab: {
        type: Function,
        default: function () {
          if (this.selectOnTab && !this.isComposing) {
            this.typeAheadSelect();
          }
        },
      },

      /**
       * Enable/disable creating options from searchEl.
       * @type {Boolean}
       */
      taggable: {
        type: Boolean,
        default: false
      },

      /**
       * Set the tabindex for the input field.
       * @type {Number}
       */
      tabindex: {
        type: Number,
        default: null
      },

      /**
       * When true, newly created tags will be added to
       * the options list.
       * @type {Boolean}
       */
      pushTags: {
        type: Boolean,
        default: false
      },

      /**
       * When true, existing options will be filtered
       * by the search text. Should not be used in conjunction
       * with taggable.
       * @type {Boolean}
       */
      filterable: {
        type: Boolean,
        default: true
      },

      /**
       * Callback to determine if the provided option should
       * match the current search text. Used to determine
       * if the option should be displayed.
       * @type   {Function}
       * @param  {Object || String} option
       * @param  {String} label
       * @param  {String} search
       * @return {Boolean}
       */
      filterBy: {
        type: Function,
        default(option, label, search) {
          return (label || '').toLowerCase().indexOf(search.toLowerCase()) > -1
        }
      },

      /**
       * Callback to filter results when search text
       * is provided. Default implementation loops
       * each option, and returns the result of
       * this.filterBy.
       * @type   {Function}
       * @param  {Array} list of options
       * @param  {String} search text
       * @param  {Object} vSelect instance
       * @return {Boolean}
       */
      filter: {
        type: Function,
        default(options, search) {
          return options.filter((option) => {
            let label = this.getOptionLabel(option)
            if (typeof label === 'number') {
              label = label.toString()
            }
            return this.filterBy(option, label, search)
          });
        }
      },

      /**
       * User defined function for adding Options
       * @type {Function}
       */
      createOption: {
        type: Function,
        default (option) {
          return (typeof this.optionList[0] === 'object') ? {[this.label]: option} : option;
        },
      },

      /**
       * When false, updating the options will not reset the selected value. Accepts
       * a `boolean` or `function` that returns a `boolean`. If defined as a function,
       * it will receive the params listed below.
       *
       * @since 3.4 - Type changed to {Boolean|Function}
       *
       * @type {Boolean|Function}
       * @param {Array} newOptions
       * @param {Array} oldOptions
       * @param {Array} selectedValue
       */
      resetOnOptionsChange: {
        default: false,
        validator: (value) => ['function', 'boolean'].includes(typeof value)
      },

      /**
       * If search text should clear on blur
       * @return {Boolean} True when single and clearSearchOnSelect
       */
      clearSearchOnBlur: {
        type: Function,
        default: function ({ clearSearchOnSelect, multiple }) {
          return clearSearchOnSelect && !multiple
        }
      },

      /**
       * Disable the dropdown entirely.
       * @type {Boolean}
       */
      noDrop: {
        type: Boolean,
        default: false
      },

      /**
       * Sets the id of the input element.
       * @type {String}
       * @default {null}
       */
      inputId: {
        type: String
      },

      /**
       * Sets RTL support. Accepts 'ltr', 'rtl', 'auto'.
       * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
       * @type {String}
       * @default 'auto'
       */
      dir: {
        type: String,
        default: 'auto'
      },

      /**
       * When true, hitting the 'tab' key will select the current select value
       * @type {Boolean}
       * @deprecated since 3.3 - use selectOnKeyCodes instead
       */
      selectOnTab: {
        type: Boolean,
        default: false
      },

      /**
       * Keycodes that will select the current option.
       * @type Array
       */
      selectOnKeyCodes: {
        type: Array,
        default: () => [13],
      },

      /**
       * Query Selector used to find the search input
       * when the 'search' slot is used.
       *
       * Must be a valid CSS selector string.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
       * @type {String}
       */
      searchInputQuerySelector: {
        type: String,
        default: '[type=search]'
      },

      /**
       * Used to modify the default keydown events map
       * for the search input. Can be used to implement
       * custom behaviour for key presses.
       */
      mapKeydown: {
        type: Function,
        /**
         * @param map {Object}
         * @param vm {VueSelect}
         * @return {Object}
         */
        default: (map, vm) => map,
      },

      /**
       * Append the dropdown element to the end of the body
       * and size/position it dynamically. Use it if you have
       * overflow or z-index issues.
       * @type {Boolean}
       */
      appendToBody: {
        type: Boolean,
        default: false
      },

      /**
       * When `appendToBody` is true, this function is responsible for
       * positioning the drop down list.
       *
       * If a function is returned from `calculatePosition`, it will
       * be called when the drop down list is removed from the DOM.
       * This allows for any garbage collection you may need to do.
       *
       * @since v3.7.0
       * @see http://vue-select.org/guide/positioning.html
       */
      calculatePosition: {
        type: Function,
        /**
         * @param dropdownList {HTMLUListElement}
         * @param component {Vue} current instance of vue select
         * @param width {string} calculated width in pixels of the dropdown menu
         * @param top {string} absolute position top value in pixels relative to the document
         * @param left {string} absolute position left value in pixels relative to the document
         * @return {function|void}
         */
        default(dropdownList, component, {width, top, left}) {
          dropdownList.style.top = top;
          dropdownList.style.left = left;
          dropdownList.style.width = width;
        }
      }
    },

    data() {
      return {
        uid: (0,_utility_uniqueId__WEBPACK_IMPORTED_MODULE_6__.default)(),
        search: '',
        open: false,
        isComposing: false,
        pushedTags: [],
        _value: [] // Internal value managed by Vue Select if no `modelValue` prop is passed
      }
    },

    watch: {
      /**
       * Maybe reset the value
       * when options change.
       * Make sure selected option
       * is correct.
       * @return {[type]} [description]
       */
      options (newOptions, oldOptions) {
        let shouldReset = () => typeof this.resetOnOptionsChange === 'function'
          ? this.resetOnOptionsChange(newOptions, oldOptions, this.selectedValue)
          : this.resetOnOptionsChange;

        if (!this.taggable && shouldReset()) {
          this.clearSelection();
        }

        if (this.modelValue && this.isTrackingValues) {
          this.setInternalValueFromOptions(this.modelValue);
        }
      },

      /**
       * Make sure to update internal
       * value if prop changes outside
       */
      modelValue(val) {
        if (this.isTrackingValues) {
          this.setInternalValueFromOptions(val)
        }
      },

      /**
       * Always reset the value when
       * the multiple prop changes.
       * @param  {Boolean} isMultiple
       * @return {void}
       */
      multiple() {
        this.clearSelection()
      },

      open(isOpen) {
        this.$emit(isOpen ? 'open' : 'close');
      }
    },

    created() {
      this.mutableLoading = this.loading;

      if (typeof this.modelValue !== "undefined" && this.isTrackingValues) {
        this.setInternalValueFromOptions(this.modelValue)
      }
    },

    methods: {
      /**
       * Make sure tracked value is
       * one option if possible.
       * @param  {Object|String} value
       * @return {void}
       */
      setInternalValueFromOptions(value) {
        if (Array.isArray(value)) {
          this.$data._value = value.map(val => this.findOptionFromReducedValue(val));
        } else {
          this.$data._value = this.findOptionFromReducedValue(value);
        }
      },

      /**
       * Select a given option.
       * @param  {Object|String} option
       * @return {void}
       */
      select(option) {
        this.$emit('option:selecting', option);
        if (!this.isOptionSelected(option)) {
          if (this.taggable && !this.optionExists(option)) {
            /* @TODO: could we use v-model instead of push-tags? */
            this.$emit('option:created', option);
            this.pushTag(option);
          }
          if (this.multiple) {
            option = this.selectedValue.concat(option)
          }
          this.updateValue(option);
          this.$emit('option:selected', option);
        }
        this.onAfterSelect(option)
      },

      /**
       * De-select a given option.
       * @param  {Object|String} option
       * @return {void}
       */
      deselect (option) {
        this.$emit('option:deselecting', option);
        this.updateValue(this.selectedValue.filter(val => {
          return !this.optionComparator(val, option);
        }));
        this.$emit('option:deselected', option);
      },

      /**
       * Clears the currently selected value(s)
       * @return {void}
       */
      clearSelection() {
        this.updateValue(this.multiple ? [] : null)
      },

      /**
       * Called from this.select after each selection.
       * @param  {Object|String} option
       * @return {void}
       */
      onAfterSelect(option) {
        if (this.closeOnSelect) {
          this.open = !this.open;
          this.searchEl.blur()
        }

        if (this.clearSearchOnSelect) {
          this.search = ''
        }
      },

      /**
       * Accepts a selected value, updates local
       * state when required, and triggers the
       * input event.
       *
       * @emits input
       * @param value
       */
      updateValue (value) {
        if (typeof this.modelValue === 'undefined') {
          // Vue select has to manage value
          this.$data._value = value;
        }

        if (value !== null) {
          if (Array.isArray(value)) {
            value = value.map(val => this.reduce(val));
          } else {
            value = this.reduce(value);
          }
        }

        this.$emit('update:modelValue', value);
      },

      /**
       * Toggle the visibility of the dropdown menu.
       * @param  {Event} event
       * @return {void}
       */
      toggleDropdown (event) {
        const targetIsNotSearch = event.target !== this.searchEl;
        if (targetIsNotSearch) {
          event.preventDefault();
        }

        //  don't react to click on deselect/clear buttons,
        //  they dropdown state will be set in their click handlers

        const ignoredButtons = [
          ...(document.querySelectorAll('.vs__deselect') || []),
          ...([this.$refs['clearButton']] || 0),
        ];

        if (this.searchEl === undefined || ignoredButtons.filter(Boolean).some(ref => ref.contains(event.target) || ref === event.target)) {
          event.preventDefault();
          return;
        }

        if (this.open && targetIsNotSearch) {
          this.searchEl.blur();
        } else if (!this.disabled) {
          this.open = true;
          this.searchEl.focus();
        }
      },

      /**
       * Check if the given option is currently selected.
       * @param  {Object|String}  option
       * @return {Boolean}        True when selected | False otherwise
       */
      isOptionSelected(option) {
        return this.selectedValue.some(value => this.optionComparator(value, option))
      },

      /**
       * Determine if two option objects are matching.
       *
       * @param a {Object}
       * @param b {Object}
       * @returns {boolean}
       */
      optionComparator(a, b) {
        return this.getOptionKey(a) === this.getOptionKey(b);
      },

      /**
       * Finds an option from the options
       * where a reduced value matches
       * the passed in value.
       *
       * @param value {Object}
       * @returns {*}
       */
      findOptionFromReducedValue (value) {
        const predicate = option => JSON.stringify(this.reduce(option)) === JSON.stringify(value);

        const matches = [
          ...this.options,
          ...this.pushedTags,
        ].filter(predicate);

        if (matches.length === 1) {
          return matches[0];
        }

        /**
         * This second loop is needed to cover an edge case where `taggable` + `reduce`
         * were used in conjunction with a `create-option` that doesn't create a
         * unique reduced value.
         * @see https://github.com/sagalbot/vue-select/issues/1089#issuecomment-597238735
         */
        return matches.find(match => this.optionComparator(match, this.$data._value)) || value;
      },

      /**
       * 'Private' function to close the search options
       * @emits  {search:blur}
       * @returns {void}
       */
      closeSearchOptions(){
        this.open = false
        this.$emit('search:blur')
      },

      /**
       * Delete the value on Delete keypress when there is no
       * text in the search input, & there's tags to delete
       */
      maybeDeleteValue() {
        if (!this.searchEl.value.length && this.selectedValue && this.selectedValue.length && this.clearable) {
          let value = null;
          if (this.multiple) {
            value = [...this.selectedValue.slice(0, this.selectedValue.length - 1)]
          }
          this.updateValue(value)
        }
      },

      /**
       * Determine if an option exists
       * within this.optionList array.
       *
       * @param  {Object || String} option
       * @return {boolean}
       */
      optionExists(option) {
        return this.optionList.some(_option => this.optionComparator(_option, option))
      },

      /**
       * Ensures that options are always
       * passed as objects to slots.
       * @param option
       * @return {*}
       */
      normalizeOptionForSlot (option) {
        return (typeof option === 'object') ? option : {[this.label]: option};
      },

      /**
       * If push-tags is true, push the
       * given option to `this.pushedTags`.
       *
       * @param  {Object || String} option
       * @return {void}
       */
      pushTag (option) {
        this.pushedTags.push(option);
      },

      /**
       * If there is any text in the search input, remove it.
       * Otherwise, blur the search input to close the dropdown.
       * @return {void}
       */
      onEscape() {
        if (!this.search.length) {
          this.searchEl.blur()
        } else {
          this.search = ''
        }
      },

      /**
       * Close the dropdown on blur.
       * @emits  {search:blur}
       * @return {void}
       */
      onSearchBlur() {
        if (this.mousedown && !this.searching) {
          this.mousedown = false
        } else {
          const { clearSearchOnSelect, multiple } = this;
          if (this.clearSearchOnBlur({ clearSearchOnSelect, multiple })) {
            this.search = ''
          }
          this.closeSearchOptions()
          return
        }
        // Fixed bug where no-options message could not be closed
        if (this.search.length === 0 && this.options.length === 0){
          this.closeSearchOptions()
          return
        }
      },

      /**
       * Open the dropdown on focus.
       * @emits  {search:focus}
       * @return {void}
       */
      onSearchFocus() {
        this.open = true
        this.$emit('search:focus')
      },

      /**
       * Event-Handler to help workaround IE11 (probably fixes 10 as well)
       * firing a `blur` event when clicking
       * the dropdown's scrollbar, causing it
       * to collapse abruptly.
       * @see https://github.com/sagalbot/vue-select/issues/106
       * @return {void}
       */
      onMousedown() {
        this.mousedown = true
      },

      /**
       * Event-Handler to help workaround IE11 (probably fixes 10 as well)
       * @see https://github.com/sagalbot/vue-select/issues/106
       * @return {void}
       */
      onMouseUp() {
        this.mousedown = false
      },

      /**
       * Search <input> KeyBoardEvent handler.
       * @param e {KeyboardEvent}
       * @return {Function}
       */
      onSearchKeyDown (e) {
        const preventAndSelect = e => {
          e.preventDefault();
          return !this.isComposing && this.typeAheadSelect();
        };

        const defaults = {
          //  backspace
          8: e => this.maybeDeleteValue(),
          //  tab
          9: e => this.onTab(),
          //  esc
          27: e => this.onEscape(),
          //  up.prevent
          38: e => {
            e.preventDefault();
            return this.typeAheadUp();
          },
          //  down.prevent
          40: e => {
            e.preventDefault();
            return this.typeAheadDown();
          },
        };

        this.selectOnKeyCodes.forEach(keyCode => defaults[keyCode] = preventAndSelect);

        const handlers = this.mapKeydown(defaults, this);

        if (typeof handlers[e.keyCode] === 'function') {
          return handlers[e.keyCode](e);
        }
      }
    },

    computed: {
      /**
       * Determine if the component needs to
       * track the state of values internally.
       * @return {boolean}
       */
      isTrackingValues () {
        return typeof this.modelValue === 'undefined' || this.$options.props.hasOwnProperty('reduce');
      },

      /**
       * The options that are currently selected.
       * @return {Array}
       */
      selectedValue () {
        let value = this.modelValue;
        if (this.isTrackingValues) {
          // Vue select has to manage value internally
          value = this.$data._value;
        }

        if (value) {
          return [].concat(value);
        }

        return [];
      },

      /**
       * The options available to be chosen
       * from the dropdown, including any
       * tags that have been pushed.
       *
       * @return {Array}
       */
      optionList () {
        return this.options.concat(this.pushTags ? this.pushedTags : []);
      },

      /**
       * Find the search input DOM element.
       * @returns {HTMLInputElement}
       */
      searchEl () {
        return !!this.$slots['search']
          ? this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector)
          : this.$refs.search;
      },

      /**
       * The object to be bound to the $slots.search slot.
       * @returns {Object}
       */
      scope () {
        const listSlot = {
          search: this.search,
          loading: this.loading,
          searching: this.searching,
          filteredOptions: this.filteredOptions
        };
        return {
          search: {
            attributes: {
              'disabled': this.disabled,
              'placeholder': this.searchPlaceholder,
              'tabindex': this.tabindex,
              'readonly': !this.searchable,
              'id': this.inputId,
              'aria-autocomplete': 'list',
              'aria-labelledby': `vs${this.uid}__combobox`,
              'aria-controls': `vs${this.uid}__listbox`,
              'ref': 'search',
              'type': 'search',
              'autocomplete': this.autocomplete,
              'value': this.search,
              ...(this.dropdownOpen && this.filteredOptions[this.typeAheadPointer] ? {
                'aria-activedescendant': `vs${this.uid}__option-${this.typeAheadPointer}`
              } : {}),
            },
            events: {
              'compositionstart': () => this.isComposing = true,
              'compositionend': () => this.isComposing = false,
              'keydown': this.onSearchKeyDown,
              'blur': this.onSearchBlur,
              'focus': this.onSearchFocus,
              'input': (e) => this.search = e.target.value,
            },
          },
          spinner: {
            loading: this.mutableLoading
          },
          noOptions: {
            search: this.search,
            loading: this.loading,
            searching: this.searching,
          },
          openIndicator: {
            attributes: {
              'ref': 'openIndicator',
              'role': 'presentation',
              'class': 'vs__open-indicator',
            },
          },
          listHeader: listSlot,
          listFooter: listSlot,
          header: { ...listSlot, deselect: this.deselect },
          footer: { ...listSlot, deselect: this.deselect }
        };
      },

      /**
       * Returns an object containing the child components
       * that will be used throughout the component. The
       * `component` prop can be used to overwrite the defaults.
       *
       * @return {Object}
       */
      childComponents () {
        return {
          ..._childComponents__WEBPACK_IMPORTED_MODULE_3__.default,
          ...this.components
        };
      },

      /**
       * Holds the current state of the component.
       * @return {Object}
       */
      stateClasses() {
        return {
          'vs--open': this.dropdownOpen,
          'vs--single': !this.multiple,
          'vs--searching': this.searching && !this.noDrop,
          'vs--searchable': this.searchable && !this.noDrop,
          'vs--unsearchable': !this.searchable,
          'vs--loading': this.mutableLoading,
          'vs--disabled': this.disabled
        }
      },

      /**
       * Return the current state of the
       * search input
       * @return {Boolean} True if non empty value
       */
      searching() {
        return !! this.search
      },

      /**
       * Return the current state of the
       * dropdown menu.
       * @return {Boolean} True if open
       */
      dropdownOpen() {
        return this.noDrop ? false : this.open && !this.mutableLoading
      },

      /**
       * Return the placeholder string if it's set
       * & there is no value selected.
       * @return {String} Placeholder text
       */
      searchPlaceholder() {
        if (this.isValueEmpty && this.placeholder) {
          return this.placeholder;
        }
      },

      /**
       * The currently displayed options, filtered
       * by the search elements value. If tagging
       * true, the search text will be prepended
       * if it doesn't already exist.
       *
       * @return {array}
       */
      filteredOptions() {
        const optionList = [].concat(this.optionList);

        if (!this.filterable && !this.taggable) {
          return optionList;
        }

        let options = this.search.length ? this.filter(optionList, this.search, this) : optionList;
        if (this.taggable && this.search.length) {
          const createdOption = this.createOption(this.search);
          if (!this.optionExists(createdOption)) {
            options.unshift(createdOption);
          }
        }
        return options;
      },

      /**
       * Check if there aren't any options selected.
       * @return {Boolean}
       */
      isValueEmpty() {
        return this.selectedValue.length === 0;
      },

      /**
       * Determines if the clear button should be displayed.
       * @return {Boolean}
       */
      showClearButton() {
        return !this.multiple && this.clearable && !this.open && !this.isValueEmpty
      },
    },

  });


/***/ }),

/***/ "./resources/js/views/teacher/CreatQuiz.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/teacher/CreatQuiz.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreatQuiz_vue_vue_type_template_id_3aa39102__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatQuiz.vue?vue&type=template&id=3aa39102 */ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102");
/* harmony import */ var _CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatQuiz.vue?vue&type=script&lang=js */ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js");
/* harmony import */ var _CreatQuiz_vue_vue_type_style_index_0_id_3aa39102_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss */ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss");




;
_CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _CreatQuiz_vue_vue_type_template_id_3aa39102__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/teacher/CreatQuiz.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreatQuiz.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102":
/*!********************************************************************************!*\
  !*** ./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_template_id_3aa39102__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_template_id_3aa39102__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreatQuiz.vue?vue&type=template&id=3aa39102 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=template&id=3aa39102");


/***/ }),

/***/ "./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_style_index_0_id_6ec6bfe5_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader/dist/cjs.js!../../../css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../vue-loader/dist/stylePostLoader.js!../../../postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=style&index=0&id=6ec6bfe5&lang=scss");


/***/ }),

/***/ "./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreatQuiz_vue_vue_type_style_index_0_id_3aa39102_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/teacher/CreatQuiz.vue?vue&type=style&index=0&id=3aa39102&lang=scss");


/***/ }),

/***/ "./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Deselect_vue_vue_type_template_id_0b5ce234__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Deselect_vue_vue_type_template_id_0b5ce234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Deselect.vue?vue&type=template&id=0b5ce234 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234");


/***/ }),

/***/ "./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_OpenIndicator_vue_vue_type_template_id_b2cac0e8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_OpenIndicator_vue_vue_type_template_id_b2cac0e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./OpenIndicator.vue?vue&type=template&id=b2cac0e8 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8");


/***/ }),

/***/ "./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5 ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_template_id_6ec6bfe5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Select_vue_vue_type_template_id_6ec6bfe5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Select.vue?vue&type=template&id=6ec6bfe5 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Deselect.vue?vue&type=template&id=0b5ce234 ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [
    _hoisted_2
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/OpenIndicator.vue?vue&type=template&id=b2cac0e8 ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1 /* HOISTED */)

function render(_ctx, _cache) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [
    _hoisted_2
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-select/src/components/Select.vue?vue&type=template&id=6ec6bfe5 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  class: "vs__selected-options",
  ref: "selectedOptions"
}
const _hoisted_2 = {
  class: "vs__actions",
  ref: "actions"
}
const _hoisted_3 = { class: "vs__spinner" }
const _hoisted_4 = {
  key: 0,
  class: "vs__no-options"
}
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sorry, no matching options.")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_append_to_body = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("append-to-body")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    dir: $props.dir,
    class: ["v-select", $options.stateClasses]
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header", $options.scope.header),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      id: `vs${$data.uid}__combobox`,
      ref: "toggle",
      onMousedown: _cache[2] || (_cache[2] = $event => ($options.toggleDropdown($event))),
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": $options.dropdownOpen.toString(),
      "aria-owns": `vs${$data.uid}__listbox`,
      "aria-label": "Search for option"
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.selectedValue, (option) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selected-option-container", {
            option: $options.normalizeOptionForSlot(option),
            deselect: $options.deselect,
            multiple: $props.multiple,
            disabled: $props.disabled
          }, () => [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
              key: $props.getOptionKey(option),
              class: "vs__selected"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selected-option", $options.normalizeOptionForSlot(option), () => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.getOptionLabel(option)), 1 /* TEXT */)
              ]),
              ($props.multiple)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
                    key: 0,
                    disabled: $props.disabled,
                    onClick: $event => ($options.deselect(option)),
                    type: "button",
                    class: "vs__deselect",
                    title: `Deselect ${$props.getOptionLabel(option)}`,
                    "aria-label": `Deselect ${$props.getOptionLabel(option)}`,
                    ref: "deselectButtons"
                  }, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.childComponents.Deselect)))
                  ], 8 /* PROPS */, ["disabled", "onClick", "title", "aria-label"]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]))
          ])
        }), 256 /* UNKEYED_FRAGMENT */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "search", $options.scope.search, () => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ class: "vs__search" }, $options.scope.search.attributes, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)($options.scope.search.events)), null, 16 /* FULL_PROPS */)
        ])
      ], 512 /* NEED_PATCH */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
          disabled: $props.disabled,
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.clearSelection && $options.clearSelection(...args))),
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          ref: "clearButton"
        }, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.childComponents.Deselect)))
        ], 8 /* PROPS */, ["disabled"]), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.showClearButton]
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "open-indicator", $options.scope.openIndicator, () => [
          (!$props.noDrop)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.childComponents.OpenIndicator), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, $options.scope.openIndicator.attributes), null, 16 /* FULL_PROPS */))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "spinner", $options.scope.spinner, () => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, "Loading...", 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.mutableLoading]
          ])
        ])
      ], 512 /* NEED_PATCH */)
    ], 40 /* PROPS, HYDRATE_EVENTS */, ["id", "aria-expanded", "aria-owns"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: $props.transition }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        ($options.dropdownOpen)
          ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", {
              ref: "dropdownMenu",
              id: `vs${$data.uid}__listbox`,
              key: `vs${$data.uid}__listbox`,
              class: "vs__dropdown-menu",
              role: "listbox",
              onMousedown: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.onMousedown && $options.onMousedown(...args)), ["prevent"])),
              onMouseup: _cache[4] || (_cache[4] = (...args) => ($options.onMouseUp && $options.onMouseUp(...args))),
              tabindex: "-1"
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-header", $options.scope.listHeader),
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredOptions, (option, index) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
                  role: "option",
                  key: $props.getOptionKey(option),
                  id: `vs${$data.uid}__option-${index}`,
                  class: ["vs__dropdown-option", { 'vs__dropdown-option--selected': $options.isOptionSelected(option), 'vs__dropdown-option--highlight': index === _ctx.typeAheadPointer, 'vs__dropdown-option--disabled': !$props.selectable(option) }],
                  "aria-selected": index === _ctx.typeAheadPointer ? true : null,
                  onMouseover: $event => ($props.selectable(option) ? _ctx.typeAheadPointer = index : null),
                  onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($props.selectable(option) ? $options.select(option) : null), ["prevent","stop"])
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", $options.normalizeOptionForSlot(option), () => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.getOptionLabel(option)), 1 /* TEXT */)
                  ])
                ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["id", "aria-selected", "onMouseover", "onMousedown"]))
              }), 128 /* KEYED_FRAGMENT */)),
              ($options.filteredOptions.length === 0)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_4, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "no-options", $options.scope.noOptions, () => [
                      _hoisted_5
                    ])
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "list-footer", $options.scope.listFooter)
            ], 40 /* PROPS, HYDRATE_EVENTS */, ["id"])), [
              [_directive_append_to_body]
            ])
          : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("ul", {
              key: 1,
              id: `vs${$data.uid}__listbox`,
              role: "listbox",
              style: {"display":"none","visibility":"hidden"}
            }, null, 8 /* PROPS */, ["id"]))
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["name"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer", $options.scope.footer)
  ], 10 /* CLASS, PROPS */, ["dir"]))
}

/***/ }),

/***/ "./node_modules/vue-select/src/components/childComponents.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-select/src/components/childComponents.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Deselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Deselect */ "./node_modules/vue-select/src/components/Deselect.vue");
/* harmony import */ var _OpenIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenIndicator */ "./node_modules/vue-select/src/components/OpenIndicator.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Deselect: _Deselect__WEBPACK_IMPORTED_MODULE_0__.default,
  OpenIndicator: _OpenIndicator__WEBPACK_IMPORTED_MODULE_1__.default
});


/***/ }),

/***/ "./node_modules/vue-select/src/directives/appendToBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-select/src/directives/appendToBody.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    inserted (el, bindings, {context}) {
        if (context.appendToBody) {
            const {height, top, left, width} = context.$refs.toggle.getBoundingClientRect();
            let scrollX = window.scrollX || window.pageXOffset;
            let scrollY = window.scrollY || window.pageYOffset;
            el.unbindPosition = context.calculatePosition(el, context, {
                width: width + 'px',
                left: (scrollX + left) + 'px',
                top: (scrollY + top + height) + 'px',
            });
            
            document.body.appendChild(el);
        }
    },

    unbind (el, bindings, {context}) {
        if (context.appendToBody) {
            if (el.unbindPosition && typeof el.unbindPosition === 'function') {
                el.unbindPosition();
            }
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }
    },
});


/***/ }),

/***/ "./node_modules/vue-select/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-select/src/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "VueSelect": () => (/* reexport safe */ _components_Select_vue__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "mixins": () => (/* reexport safe */ _mixins_index__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _components_Select_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Select.vue */ "./node_modules/vue-select/src/components/Select.vue");
/* harmony import */ var _mixins_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/index */ "./node_modules/vue-select/src/mixins/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_Select_vue__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./node_modules/vue-select/src/mixins/ajax.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/src/mixins/ajax.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    /**
     * Toggles the adding of a 'loading' class to the main
     * .v-select wrapper. Useful to control UI state when
     * results are being processed through AJAX.
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      mutableLoading: false,
    };
  },

  watch: {
    /**
     * Anytime the search string changes, emit the
     * 'search' event. The event is passed with two
     * parameters: the search string, and a function
     * that accepts a boolean parameter to toggle the
     * loading state.
     *
     * @emits search
     */
    search () {
      this.$emit('search', this.search, this.toggleLoading);
    },

    /**
     * Sync the loading prop with the internal
     * mutable loading value.
     * @param val
     */
    loading (val) {
      this.mutableLoading = val;
    },
  },

  methods: {
    /**
     * Toggle this.loading. Optionally pass a boolean
     * value. If no value is provided, this.loading
     * will be set to the opposite of it's current value.
     * @param toggle Boolean
     * @returns {*}
     */
    toggleLoading (toggle = null) {
      if (toggle == null) {
        return (this.mutableLoading = !this.mutableLoading);
      }
      return (this.mutableLoading = toggle);
    },
  },
});


/***/ }),

/***/ "./node_modules/vue-select/src/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-select/src/mixins/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./node_modules/vue-select/src/mixins/ajax.js");
/* harmony import */ var _typeAheadPointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeAheadPointer */ "./node_modules/vue-select/src/mixins/typeAheadPointer.js");
/* harmony import */ var _pointerScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pointerScroll */ "./node_modules/vue-select/src/mixins/pointerScroll.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ajax: _ajax__WEBPACK_IMPORTED_MODULE_0__.default, pointer: _typeAheadPointer__WEBPACK_IMPORTED_MODULE_1__.default, pointerScroll: _pointerScroll__WEBPACK_IMPORTED_MODULE_2__.default });


/***/ }),

/***/ "./node_modules/vue-select/src/mixins/pointerScroll.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-select/src/mixins/pointerScroll.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    autoscroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    typeAheadPointer() {
      if (this.autoscroll) {
        this.maybeAdjustScroll();
      }
    },
  },

  methods: {
    /**
     * Adjust the scroll position of the dropdown list
     * if the current pointer is outside of the
     * overflow bounds.
     * @returns {*}
     */
    maybeAdjustScroll() {
      const optionEl =
        this.$refs.dropdownMenu?.children[this.typeAheadPointer] || false;

      if (optionEl) {
        const bounds = this.getDropdownViewport();
        const { top, bottom, height } = optionEl.getBoundingClientRect();

        if (top < bounds.top) {
          return (this.$refs.dropdownMenu.scrollTop = optionEl.offsetTop);
        } else if (bottom > bounds.bottom) {
          return (this.$refs.dropdownMenu.scrollTop =
            optionEl.offsetTop - (bounds.height - height));
        }
      }
    },

    /**
     * The currently viewable portion of the dropdownMenu.
     * @returns {{top: (string|*|number), bottom: *}}
     */
    getDropdownViewport() {
      return this.$refs.dropdownMenu
        ? this.$refs.dropdownMenu.getBoundingClientRect()
        : {
            height: 0,
            top: 0,
            bottom: 0
          };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-select/src/mixins/typeAheadPointer.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-select/src/mixins/typeAheadPointer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data() {
    return {
      typeAheadPointer: -1
    }
  },

  watch: {
    filteredOptions() {
      for (let i = 0; i < this.filteredOptions.length; i++) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    }
  },

  methods: {
    /**
     * Move the typeAheadPointer visually up the list by
     * setting it to the previous selectable option.
     * @return {void}
     */
    typeAheadUp() {
      for (let i = this.typeAheadPointer - 1; i >= 0; i--) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    },

    /**
     * Move the typeAheadPointer visually down the list by
     * setting it to the next selectable option.
     * @return {void}
     */
    typeAheadDown() {
      for (let i = this.typeAheadPointer + 1; i < this.filteredOptions.length; i++) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i;
          break;
        }
      }
    },

    /**
     * Select the option at the current typeAheadPointer position.
     * Optionally clear the search input on selection.
     * @return {void}
     */
    typeAheadSelect() {
      const typeAheadOption = this.filteredOptions[this.typeAheadPointer];

      if (typeAheadOption) {
        this.select(typeAheadOption);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-select/src/utility/sortAndStringify.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-select/src/utility/sortAndStringify.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param sortable {object}
 * @return {string}
 */
function sortAndStringify(sortable) {
  const ordered = {};

  Object.keys(sortable).sort().forEach(key => {
    ordered[key] = sortable[key];
  });

  return JSON.stringify(ordered);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortAndStringify);


/***/ }),

/***/ "./node_modules/vue-select/src/utility/uniqueId.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-select/src/utility/uniqueId.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let idCount = 0;

/**
 * Dead simple unique ID implementation.
 * Thanks lodash!
 * @return {number}
 */
function uniqueId() {
  return ++idCount;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uniqueId);


/***/ })

}]);