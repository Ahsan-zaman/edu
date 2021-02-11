(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Field: vee_validate__WEBPACK_IMPORTED_MODULE_0__.Field,
    Form: vee_validate__WEBPACK_IMPORTED_MODULE_0__.Form
  },
  data: function data() {
    return {
      email: 'ahsan@ahsan-web.ml',
      password: '',
      show: false
    };
  },
  methods: {
    // Validator function
    isRequired: function isRequired(value) {
      return value ? true : 'Email is required';
    },
    onSubmit: function onSubmit() {
      var _this = this;

      //   alert('Submitting :(');
      this.$http.post('/login', {
        email: this.email,
        password: this.password
      }).then(function () {
        localStorage.setItem('auth', true);
      })["catch"](function (err) {
        // console.log()
        _this.$refs.form.setErrors(err.response.data.errors);
      });
    },
    validateEmail: function validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Email is required';
      } // if the field is not a valid email


      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Must be a valid email address';
      } // All is good


      return true;
    },
    validatePassword: function validatePassword(value) {
      // if the field is empty
      if (!value) {
        return 'Password is required';
      } // if the field is not a valid password


      if (!/^[a-zA-Z0-9]{8,}$/i.test(value)) {
        return 'Password must contain at least 8 characters';
      } // All is good


      return true;
    },
    confirmPassword: function confirmPassword(value) {
      // if the field is empty
      if (!value) {
        return 'Retype your password';
      } // if the field is not a valid password


      if (!(value == this.password)) {
        return 'Passwords doesn\'t match';
      } // All is good


      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=template&id=12f5395a":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=template&id=12f5395a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "lg:flex"
};
var _hoisted_2 = {
  "class": "lg:w-1/2 xl:max-w-screen-sm p-3"
};
var _hoisted_3 = {
  "class": "mt-10 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-center text-4xl text-purple-600 font-display font-semibold lg:text-left xl:text-5xl\r\n                xl:text-bold"
}, "Log in", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "mt-12"
};
var _hoisted_6 = {
  "class": "mt-8"
};
var _hoisted_7 = {
  "class": "flex justify-between items-center"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  "class": "text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800\r\n                                    cursor-pointer"
}, " Forgot Password? ")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "relative flex items-center"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "text-xs text-red-600"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mt-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "bg-purple-600 text-gray-100 p-4 w-full rounded-full tracking-wide\r\n                            font-semibold font-display focus:outline-none focus:shadow-outline shadow-lg"
}, " Login ")], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "mt-12 text-sm font-display font-semibold text-gray-700 text-center"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Don't have an account ? ");

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sign up");

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "hidden lg:flex items-center justify-center bg-indigo-100 flex-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "max-w-xs transform duration-200 hover:scale-110 cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-5/6 mx-auto",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 528.71721 699.76785"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
  y: "17.06342",
  width: "444",
  height: "657",
  fill: "#535461"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("polygon", {
  points: "323 691.063 0 674.063 0 17.063 323 0.063 323 691.063",
  fill: "#7f9cf5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
  cx: "296",
  cy: "377.06342",
  r: "4",
  fill: "#535461"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("polygon", {
  points: "296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66",
  fill: "#535461"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("polygon", {
  points: "337 691.063 317.217 691 318 0.063 337 0.063 337 691.063",
  fill: "#7f9cf5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  opacity: "0.1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("polygon", {
  points: "337.217 691 317.217 691 318.217 0 337.217 0 337.217 691",
  fill: "#fff"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
  cx: "296",
  cy: "348.06342",
  r: "13",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
  cx: "296",
  cy: "346.06342",
  r: "13",
  fill: "#535461"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "52.81943",
  y1: "16.10799",
  x2: "52.81943",
  y2: "677.15616",
  fill: "none",
  stroke: "#000",
  "stroke-miterlimit": "10",
  "stroke-width": "2",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "109.81943",
  y1: "12.10799",
  x2: "109.81943",
  y2: "679.15616",
  fill: "none",
  stroke: "#000",
  "stroke-miterlimit": "10",
  "stroke-width": "2",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "166.81943",
  y1: "9.10799",
  x2: "166.81943",
  y2: "683",
  fill: "none",
  stroke: "#000",
  "stroke-miterlimit": "10",
  "stroke-width": "2",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "223.81943",
  y1: "6.10799",
  x2: "223.81943",
  y2: "687.15616",
  fill: "none",
  stroke: "#000",
  "stroke-miterlimit": "10",
  "stroke-width": "2",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("line", {
  x1: "280.81943",
  y1: "3.10799",
  x2: "280.81943",
  y2: "688",
  fill: "none",
  stroke: "#000",
  "stroke-miterlimit": "10",
  "stroke-width": "2",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ellipse", {
  cx: "463.21721",
  cy: "95.32341",
  rx: "39.5",
  ry: "37",
  fill: "#2f2e41"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#ffb8b8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#7f9cf5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z",
  transform: "translate(-335.6414 -100.11607)",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#ffb8b8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#2f2e41"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#2f2e41"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#2f2e41"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
  cx: "465.21721",
  cy: "105.82341",
  r: "34",
  fill: "#ffb8b8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#7f9cf5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#ffb8b8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z",
  transform: "translate(-335.6414 -100.11607)",
  opacity: "0.1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#7f9cf5"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z",
  transform: "translate(-335.6414 -100.11607)",
  fill: "#2f2e41"
})])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Field");

  var _component_Form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Form");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Form, {
    ref: "form",
    onSubmit: $options.onSubmit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var errors = _ref.errors;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Field name=\"field\" :rules=\"isRequired\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.email ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, "Email Address", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none ", !errors.email ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "email",
        rules: $options.validateEmail,
        validateOnInput: true,
        autocomplete: "off",
        modelValue: $data.email,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.email = $event;
        }),
        placeholder: "mike@gmail.com"
      }, null, 8
      /* PROPS */
      , ["class", "rules", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
        "class": "text-xs text-red-600",
        innerHTML: Array.isArray(errors.email) ? errors.email.join('<br> ') : errors.email
      }, null, 8
      /* PROPS */
      , ["innerHTML"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.password ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, " Password ", 2
      /* CLASS */
      ), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none ", !errors.password ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "password",
        type: $data.show ? 'text' : 'password',
        rules: $options.validatePassword,
        validateOnInput: true,
        autocomplete: "new-password",
        modelValue: $data.password,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.password = $event;
        }),
        placeholder: "Password"
      }, null, 8
      /* PROPS */
      , ["class", "type", "rules", "modelValue"]), $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
        key: 0,
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return $data.show = !$data.show;
        }),
        "class": "w-6 cursor-pointer absolute right-1",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, [_hoisted_10, _hoisted_11])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
        key: 1,
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return $data.show = !$data.show;
        }),
        "class": "w-6 cursor-pointer absolute right-1",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, [_hoisted_12]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(errors.password), 1
      /* TEXT */
      )]), _hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmit"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/signup",
    "class": "cursor-pointer text-indigo-600 hover:text-indigo-800"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_17];
    }),
    _: 1
    /* STABLE */

  })])])])]), _hoisted_18]);
}

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "defineRule": () => (/* binding */ defineRule),
/* harmony export */   "useField": () => (/* binding */ useField),
/* harmony export */   "useFieldError": () => (/* binding */ useFieldError),
/* harmony export */   "useFieldValue": () => (/* binding */ useFieldValue$1),
/* harmony export */   "useForm": () => (/* binding */ useForm),
/* harmony export */   "useFormErrors": () => (/* binding */ useFormErrors),
/* harmony export */   "useFormValues": () => (/* binding */ useFormValues),
/* harmony export */   "useIsFieldDirty": () => (/* binding */ useIsFieldDirty),
/* harmony export */   "useIsFieldTouched": () => (/* binding */ useIsFieldTouched),
/* harmony export */   "useIsFieldValid": () => (/* binding */ useIsFieldValid),
/* harmony export */   "useIsFormDirty": () => (/* binding */ useIsFormDirty),
/* harmony export */   "useIsFormTouched": () => (/* binding */ useIsFormTouched),
/* harmony export */   "useIsFormValid": () => (/* binding */ useIsFormValid),
/* harmony export */   "useIsSubmitting": () => (/* binding */ useIsSubmitting),
/* harmony export */   "useResetForm": () => (/* binding */ useResetForm),
/* harmony export */   "useSubmitCount": () => (/* binding */ useSubmitCount),
/* harmony export */   "useSubmitForm": () => (/* binding */ useSubmitForm),
/* harmony export */   "useValidateField": () => (/* binding */ useValidateField),
/* harmony export */   "useValidateForm": () => (/* binding */ useValidateForm),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/**
  * vee-validate v4.1.17
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */


function isCallable(fn) {
    return typeof fn === 'function';
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);

const RULES = {};
/**
 * Adds a custom validator to the list of validation rules.
 */
function defineRule(id, validator) {
    // makes sure new rules are properly formatted.
    guardExtend(id, validator);
    RULES[id] = validator;
}
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}
/**
 * Guards from extension violations.
 */
function guardExtend(id, validator) {
    if (isCallable(validator)) {
        return;
    }
    throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}

function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
/**
 * Checks if an tag name is a native HTML tag and not a Vue component
 */
function isHTMLTag(tag) {
    return ['input', 'textarea', 'select'].includes(tag);
}
/**
 * Checks if an input is of type file
 */
function isFileInputNode(tag, attrs) {
    return isHTMLTag(tag) && attrs.type === 'file';
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isIndex(value) {
    return Number(value) >= 0;
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return el.tagName === 'SELECT' && el.multiple;
}
/**
 * Checks if a tag name with attrs object will render a native multi-select element
 */
function isNativeMultiSelectNode(tag, attrs) {
    // The falsy value array is the values that Vue won't add the `multiple` prop if it has one of these values
    const hasTruthyBindingValue = ![false, null, undefined, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
    return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue;
}
/**
 * Checks if a node should have a `:value` binding or not
 *
 * These nodes should not have a value binding
 * For files, because they are not reactive
 * For multi-selects because the value binding will reset the value
 */
function shouldHaveValueBinding(tag, attrs) {
    return isNativeMultiSelectNode(tag, attrs) || isFileInputNode(tag, attrs);
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
/**
 * Gets a nested property value from an object
 */
function getFromPath(object, path) {
    if (!object) {
        return undefined;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = path
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return undefined;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc)) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc)) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
// Uses same component provide as its own injections
// Due to changes in https://github.com/vuejs/vue-next/pull/2424
function injectWithSelf(symbol, def = undefined) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(symbol, (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || def);
}
function warn(message) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`[vee-validate]: ${message}`);
}
/**
 * Ensures we deal with a singular field value
 */
function normalizeField(field) {
    if (Array.isArray(field)) {
        return field[0];
    }
    return field;
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
    if (Array.isArray(currentValue)) {
        const newVal = [...currentValue];
        const idx = newVal.indexOf(checkedValue);
        idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
        return newVal;
    }
    return currentValue === checkedValue ? uncheckedValue : checkedValue;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeChildren = (context, slotProps) => {
    if (!context.slots.default) {
        return context.slots.default;
    }
    return context.slots.default(slotProps);
};
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

const isEvent = (evt) => {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        return Array.from(input.files);
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    return input.value;
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        const val = getFromPath(crossTable, value) || crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return keysOf(params)
        .filter(key => isLocator(params[key]))
        .map(key => params[key]);
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
    currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    const errors = result.errors;
    return {
        errors,
        valid: !errors.length,
    };
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    if (isYupValidator(field.rules)) {
        return validateFieldWithYup(value, field.rules, { bails: field.bails });
    }
    // if a generic function, use it as the pipeline.
    if (isCallable(field.rules)) {
        const ctx = {
            field: field.name,
            form: field.formData,
            value: value,
        };
        const result = await field.rules(value, ctx);
        const isValid = typeof result !== 'string' && result;
        const message = typeof result === 'string' ? result : _generateFieldError(ctx);
        return {
            errors: !isValid ? [message] : [],
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
/**
 * Handles yup validation
 */
async function validateFieldWithYup(value, validator, opts) {
    var _a;
    const errors = await validator
        .validate(value, {
        abortEarly: (_a = opts.bails) !== null && _a !== void 0 ? _a : true,
    })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
            return err.errors;
        }
        // re-throw the error so we don't hide it
        throw err;
    });
    return {
        errors,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.name,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}

const FormContextSymbol = Symbol('vee-validate-form');
const FormErrorsSymbol = Symbol('vee-validate-form-errors');
const FormInitialValuesSymbol = Symbol('vee-validate-form-initial-values');
const FieldContextSymbol = Symbol('vee-validate-field-instance');

let ID_COUNTER = 0;
/**
 * Creates a field composite.
 */
function useField(name, rules, opts) {
    const fid = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    const { initialValue, validateOnMount, bails, type, valueProp, label, validateOnValueUpdate, uncheckedValue, } = normalizeOptions((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name), opts);
    const form = injectWithSelf(FormContextSymbol);
    const { meta, errors, handleBlur, handleInput, resetValidationState, setValidationState, value, checked, } = useValidationState({
        name,
        // make sure to unref initial value because of possible refs passed in
        initValue: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue),
        form,
        type,
        valueProp,
    });
    const normalizedRules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let rulesValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules);
        const schema = form === null || form === void 0 ? void 0 : form.schema;
        if (schema && !isYupValidator(schema)) {
            rulesValue = extractRuleFromSchema(schema, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name)) || rulesValue;
        }
        if (isYupValidator(rulesValue) || isCallable(rulesValue)) {
            return rulesValue;
        }
        return normalizeRules(rulesValue);
    });
    const validate$1 = async () => {
        var _a;
        meta.pending = true;
        let result;
        if (!form || !form.validateSchema) {
            result = await validate(value.value, normalizedRules.value, {
                name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(label) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name),
                values: (_a = form === null || form === void 0 ? void 0 : form.values) !== null && _a !== void 0 ? _a : {},
                bails,
            });
        }
        else {
            result = (await form.validateSchema())[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name)];
        }
        meta.pending = false;
        return setValidationState(result);
    };
    // Common input/change event handler
    const handleChange = (e) => {
        var _a, _b;
        if (checked && checked.value === ((_b = (_a = e) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.checked)) {
            return;
        }
        let newValue = normalizeEventValue(e);
        // Single checkbox field without a form to toggle it's value
        if (checked && type === 'checkbox' && !form) {
            newValue = resolveNextCheckboxValue(value.value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(valueProp), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(uncheckedValue));
        }
        value.value = newValue;
        meta.dirty = true;
        if (!validateOnValueUpdate) {
            return validate$1();
        }
    };
    if (validateOnMount) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(validate$1);
    }
    const errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return errors.value[0];
    });
    function setTouched(isTouched) {
        meta.touched = isTouched;
    }
    function setDirty(isDirty) {
        meta.dirty = isDirty;
    }
    let unwatchValue;
    function watchValue() {
        if (validateOnValueUpdate) {
            unwatchValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, validate$1, {
                deep: true,
            });
        }
    }
    watchValue();
    function resetField(state) {
        unwatchValue === null || unwatchValue === void 0 ? void 0 : unwatchValue();
        resetValidationState(state);
        watchValue();
    }
    const field = {
        idx: -1,
        fid,
        name,
        value,
        meta,
        errors,
        errorMessage,
        type,
        valueProp,
        uncheckedValue,
        checked,
        resetField,
        handleReset: () => resetField(),
        validate: validate$1,
        handleChange,
        handleBlur,
        handleInput,
        setValidationState,
        setTouched,
        setDirty,
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FieldContextSymbol, field);
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(rules) && typeof (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules) !== 'function') {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(rules, validate$1, {
            deep: true,
        });
    }
    // if no associated form return the field API immediately
    if (!form) {
        return field;
    }
    // associate the field with the given form
    form.register(field);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        form.unregister(field);
    });
    // extract cross-field dependencies in a computed prop
    const dependencies = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const rulesVal = normalizedRules.value;
        // is falsy, a function schema or a yup schema
        if (!rulesVal || isCallable(rulesVal) || isYupValidator(rulesVal)) {
            return {};
        }
        return Object.keys(rulesVal).reduce((acc, rule) => {
            const deps = extractLocators(rulesVal[rule])
                .map((dep) => dep.__locatorRef)
                .reduce((depAcc, depName) => {
                const depValue = getFromPath(form.values, depName) || form.values[depName];
                if (depValue !== undefined) {
                    depAcc[depName] = depValue;
                }
                return depAcc;
            }, {});
            Object.assign(acc, deps);
            return acc;
        }, {});
    });
    // Adds a watcher that runs the validation whenever field dependencies change
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(dependencies, (deps, oldDeps) => {
        // Skip if no dependencies or if the field wasn't manipulated
        if (!Object.keys(deps).length || !meta.dirty) {
            return;
        }
        const shouldValidate = Object.keys(deps).some(depName => {
            return deps[depName] !== oldDeps[depName];
        });
        if (shouldValidate) {
            validate$1();
        }
    });
    return field;
}
/**
 * Normalizes partial field options to include the full
 */
function normalizeOptions(name, opts) {
    const defaults = () => ({
        initialValue: undefined,
        validateOnMount: false,
        bails: true,
        rules: '',
        label: name,
        validateOnValueUpdate: true,
    });
    if (!opts) {
        return defaults();
    }
    return Object.assign(Object.assign({}, defaults()), (opts || {}));
}
/**
 * Manages the validation state of a field.
 */
function useValidationState({ name, initValue, form, type, valueProp, }) {
    var _a;
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    const formInitialValues = injectWithSelf(FormInitialValuesSymbol, undefined);
    const initialValue = ((_a = getFromPath((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(formInitialValues), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name))) !== null && _a !== void 0 ? _a : initValue);
    const { resetMeta, meta } = useMeta(initialValue);
    const value = useFieldValue(initialValue, name, form);
    if (hasCheckedAttr(type) && initialValue) {
        value.value = initialValue;
    }
    const checked = hasCheckedAttr(type)
        ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (Array.isArray(value.value)) {
                return value.value.includes((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(valueProp));
            }
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(valueProp) === value.value;
        })
        : undefined;
    if (checked === undefined || checked.value) {
        // Set the value without triggering the watcher
        value.value = initialValue;
    }
    /**
     * Handles common onBlur meta update
     */
    const handleBlur = () => {
        meta.touched = true;
    };
    /**
     * Handles common on blur events
     */
    const handleInput = (e) => {
        // Checkboxes/Radio will emit a `change` event anyway, custom components will use `update:modelValue`
        // so this is redundant
        if (!hasCheckedAttr(type)) {
            value.value = normalizeEventValue(e);
        }
        meta.dirty = true;
    };
    // Updates the validation state with the validation result
    function setValidationState(result) {
        errors.value = result.errors;
        meta.valid = !result.errors.length;
        return result;
    }
    // Resets the validation state
    function resetValidationState(state) {
        var _a;
        const fieldPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name);
        const newValue = state && 'value' in state
            ? state.value
            : ((_a = getFromPath((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(formInitialValues), fieldPath)) !== null && _a !== void 0 ? _a : initValue);
        if (form) {
            form.setFieldValue(fieldPath, newValue, { force: true });
        }
        else {
            value.value = newValue;
        }
        errors.value = (state === null || state === void 0 ? void 0 : state.errors) || [];
        resetMeta(state);
    }
    return {
        meta,
        errors,
        setValidationState,
        resetValidationState,
        handleBlur,
        handleInput,
        value,
        checked,
    };
}
/**
 * Exposes meta flags state and some associated actions with them.
 */
function useMeta(initialValue) {
    const initialMeta = () => ({
        touched: false,
        dirty: false,
        valid: false,
        pending: false,
        initialValue,
    });
    const meta = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(initialMeta());
    /**
     * Resets the flag state
     */
    function resetMeta(state) {
        var _a, _b, _c;
        const defaults = initialMeta();
        meta.pending = defaults.pending;
        meta.touched = (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : defaults.touched;
        meta.dirty = (_b = state === null || state === void 0 ? void 0 : state.dirty) !== null && _b !== void 0 ? _b : defaults.dirty;
        meta.initialValue = (_c = state === null || state === void 0 ? void 0 : state.value) !== null && _c !== void 0 ? _c : defaults.initialValue;
    }
    return {
        meta,
        resetMeta,
    };
}
/**
 * Extracts the validation rules from a schema
 */
function extractRuleFromSchema(schema, fieldName) {
    // no schema at all
    if (!schema) {
        return undefined;
    }
    // there is a key on the schema object for this field
    return schema[fieldName];
}
/**
 * Manages the field value
 */
function useFieldValue(initialValue, path, form) {
    // if no form is associated, use a regular ref.
    if (!form) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(initialValue);
    }
    // set initial value
    setInPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), initialValue);
    // otherwise use a computed setter that triggers the `setFieldValue`
    const value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
        get() {
            return getFromPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        },
        set(newVal) {
            form.setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), newVal);
        },
    });
    return value;
}

const Field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Field',
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: [Object, String, Function],
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined,
        },
        validateOnChange: {
            type: Boolean,
            default: undefined,
        },
        validateOnInput: {
            type: Boolean,
            default: undefined,
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: undefined,
        },
        bails: {
            type: Boolean,
            default: () => getConfig().bails,
        },
        label: {
            type: String,
            default: undefined,
        },
        uncheckedValue: {
            type: null,
            default: undefined,
        },
        modelValue: {
            type: null,
        },
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const rules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'rules');
        const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'name');
        const label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'label');
        const uncheckedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'uncheckedValue');
        const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, handleInput, setDirty, setTouched, resetField, handleReset, meta, checked, } = useField(name, rules, {
            validateOnMount: props.validateOnMount,
            bails: props.bails,
            type: ctx.attrs.type,
            // Gets the initial value either from `value` prop/attr or `v-model` binding (modelValue)
            // For checkboxes and radio buttons it will always be the model value not the `value` attribute
            initialValue: hasCheckedAttr(ctx.attrs.type)
                ? props.modelValue
                : 'modelValue' in props
                    ? props.modelValue
                    : ctx.attrs.value,
            // Only for checkboxes and radio buttons
            valueProp: ctx.attrs.value,
            uncheckedValue,
            label,
            validateOnValueUpdate: false,
        });
        // If there is a v-model applied on the component we need to emit the `update:modelValue` whenever the value binding changes
        const onChangeHandler = 'modelValue' in props
            ? function handleChangeWithModel(e) {
                handleChange(e);
                ctx.emit('update:modelValue', value.value);
            }
            : handleChange;
        const onInputHandler = 'modelValue' in props
            ? function handleChangeWithModel(e) {
                handleInput(e);
                ctx.emit('update:modelValue', value.value);
            }
            : handleInput;
        const fieldProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
            const baseOnBlur = [handleBlur, ctx.attrs.onBlur, validateOnBlur ? validateField : undefined].filter(Boolean);
            const baseOnInput = [onInputHandler, validateOnInput ? onChangeHandler : undefined, ctx.attrs.onInput].filter(Boolean);
            const baseOnChange = [onInputHandler, validateOnChange ? onChangeHandler : undefined, ctx.attrs.onChange].filter(Boolean);
            const attrs = {
                name: props.name,
                onBlur: baseOnBlur,
                onInput: baseOnInput,
                onChange: baseOnChange,
            };
            if (validateOnModelUpdate) {
                attrs['onUpdate:modelValue'] = [onChangeHandler];
            }
            if (hasCheckedAttr(ctx.attrs.type) && checked) {
                attrs.checked = checked.value;
            }
            else {
                attrs.value = value.value;
            }
            const tag = resolveTag(props, ctx);
            if (shouldHaveValueBinding(tag, ctx.attrs)) {
                delete attrs.value;
            }
            return attrs;
        });
        const slotProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return {
                field: fieldProps.value,
                value: value.value,
                meta,
                errors: errors.value,
                errorMessage: errorMessage.value,
                validate: validateField,
                resetField,
                handleChange: onChangeHandler,
                handleInput: onInputHandler,
                handleReset,
                handleBlur,
                setDirty,
                setTouched,
            };
        });
        if ('modelValue' in props) {
            const modelValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'modelValue');
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(modelValue, newModelValue => {
                if (newModelValue !== value.value) {
                    value.value = newModelValue;
                    validateField();
                }
            });
        }
        return () => {
            const tag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(resolveTag(props, ctx));
            const children = normalizeChildren(ctx, slotProps.value);
            if (tag) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
            }
            return children;
        };
    },
});
function resolveTag(props, ctx) {
    let tag = props.as || '';
    if (!props.as && !ctx.slots.default) {
        tag = 'input';
    }
    return tag;
}
function resolveValidationTriggers(props) {
    var _a, _b, _c, _d;
    const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
    return {
        validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
        validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
        validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
        validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate,
    };
}

function useForm(opts) {
    // A flat array containing field references
    const fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    // If the form is currently submitting
    const isSubmitting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    // a field map object useful for faster access of fields
    const fieldsById = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return fields.value.reduce((acc, field) => {
            const fieldPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name);
            // if the field was not added before
            if (!acc[fieldPath]) {
                acc[fieldPath] = field;
                field.idx = -1;
                return acc;
            }
            // if the same name is detected
            const existingField = acc[fieldPath];
            if (!Array.isArray(existingField)) {
                existingField.idx = 0;
                acc[fieldPath] = [existingField];
            }
            const fieldGroup = acc[fieldPath];
            field.idx = fieldGroup.length;
            fieldGroup.push(field);
            return acc;
        }, {});
    });
    // The number of times the user tried to submit the form
    const submitCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    // a private ref for all form values
    const formValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({});
    // a lookup to keep track of values by their field ids
    // this is important because later we need it if fields swap names
    const valuesByFid = {};
    // an aggregation of field errors in a map object
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return fields.value.reduce((acc, field) => {
            // Check if its a grouped field (checkbox/radio)
            let message;
            const fieldName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name);
            const fieldInstance = fieldsById.value[fieldName];
            if (Array.isArray(fieldInstance)) {
                message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)((fieldInstance.find(f => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(f.checked)) || field).errorMessage);
            }
            else {
                message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.errorMessage);
            }
            if (message) {
                acc[fieldName] = message;
            }
            return acc;
        }, {});
    });
    // initial form values
    const { readonlyInitialValues, initialValues, setInitialValues } = useFormInitialValues(fieldsById, formValues, opts === null || opts === void 0 ? void 0 : opts.initialValues);
    // form meta aggregations
    const meta = useFormMeta(fields, readonlyInitialValues);
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        const fieldInstance = fieldsById.value[field];
        if (!fieldInstance) {
            return;
        }
        if (Array.isArray(fieldInstance)) {
            fieldInstance.forEach(instance => {
                instance.setValidationState({ valid: !!message, errors: message ? [message] : [] });
            });
            return;
        }
        fieldInstance.setValidationState({ valid: !!message, errors: message ? [message] : [] });
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(fields) {
        keysOf(fields).forEach(field => {
            setFieldError(field, fields[field]);
        });
    }
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, { force } = { force: false }) {
        var _a;
        const fieldInstance = fieldsById.value[field];
        // Multiple checkboxes, and only one of them got updated
        if (Array.isArray(fieldInstance) && ((_a = fieldInstance[0]) === null || _a === void 0 ? void 0 : _a.type) === 'checkbox' && !Array.isArray(value)) {
            const newVal = resolveNextCheckboxValue(getFromPath(formValues, field) || [], value, undefined);
            setInPath(formValues, field, newVal);
            fieldInstance.forEach(fieldItem => {
                valuesByFid[fieldItem.fid] = newVal;
            });
            return;
        }
        let newValue = value;
        // Single Checkbox: toggles the field value unless the field is being reset then force it
        if (!Array.isArray(fieldInstance) && (fieldInstance === null || fieldInstance === void 0 ? void 0 : fieldInstance.type) === 'checkbox' && !force) {
            newValue = resolveNextCheckboxValue(getFromPath(formValues, field), value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fieldInstance.uncheckedValue));
        }
        setInPath(formValues, field, newValue);
        // multiple radio fields
        if (fieldInstance && Array.isArray(fieldInstance)) {
            fieldInstance.forEach(fieldItem => {
                valuesByFid[fieldItem.fid] = newValue;
            });
            return;
        }
        if (fieldInstance) {
            valuesByFid[fieldInstance.fid] = newValue;
        }
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields) {
        keysOf(fields).forEach(field => {
            setFieldValue(field, fields[field]);
        });
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const fieldInstance = fieldsById.value[field];
        if (!fieldInstance) {
            return;
        }
        if (Array.isArray(fieldInstance)) {
            fieldInstance.forEach(f => f.setTouched(isTouched));
            return;
        }
        fieldInstance.setTouched(isTouched);
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    /**
     * Sets the dirty meta state on a field
     */
    function setFieldDirty(field, isDirty) {
        const fieldInstance = fieldsById.value[field];
        if (!fieldInstance) {
            return;
        }
        if (Array.isArray(fieldInstance)) {
            fieldInstance.forEach(f => f.setDirty(isDirty));
            return;
        }
        fieldInstance.setDirty(isDirty);
    }
    /**
     * Sets the dirty meta state on multiple fields
     */
    function setDirty(fields) {
        keysOf(fields).forEach(field => {
            setFieldDirty(field, !!fields[field]);
        });
    }
    /**
     * Resets all fields
     */
    const resetForm = (state) => {
        // set initial values if provided
        if (state === null || state === void 0 ? void 0 : state.values) {
            setInitialValues(state.values);
        }
        // Reset all fields state
        fields.value.forEach(f => f.resetField());
        // set explicit state afterwards
        if (state === null || state === void 0 ? void 0 : state.dirty) {
            setDirty(state.dirty);
        }
        if (state === null || state === void 0 ? void 0 : state.touched) {
            setTouched(state.touched);
        }
        if (state === null || state === void 0 ? void 0 : state.errors) {
            setErrors(state.errors);
        }
        submitCount.value = (state === null || state === void 0 ? void 0 : state.submitCount) || 0;
    };
    function registerField(field) {
        fields.value.push(field);
        if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(field.name)) {
            valuesByFid[field.fid] = field.value.value;
            // ensures when a field's name was already taken that it preserves its same value
            // necessary for fields generated by loops
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(field.name, newPath => {
                setFieldValue(newPath, valuesByFid[field.fid]);
            }, {
                flush: 'post',
            });
        }
    }
    function unregisterField(field) {
        var _a, _b;
        const idx = fields.value.indexOf(field);
        if (idx === -1) {
            return;
        }
        fields.value.splice(idx, 1);
        const fid = field.fid;
        // cleans up the field value from fid lookup
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            delete valuesByFid[fid];
        });
        const fieldName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name);
        // in this case, this is a single field not a group (checkbox or radio)
        // so remove the field value key immediately
        if (field.idx === -1) {
            unsetPath(formValues, fieldName);
            unsetPath(initialValues.value, fieldName);
            return;
        }
        // otherwise find the actual value in the current array of values and remove it
        const valueIdx = (_b = (_a = getFromPath(formValues, fieldName)) === null || _a === void 0 ? void 0 : _a.indexOf) === null || _b === void 0 ? void 0 : _b.call(_a, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.valueProp));
        if (valueIdx === undefined) {
            unsetPath(formValues, fieldName);
            return;
        }
        if (valueIdx === -1) {
            return;
        }
        if (Array.isArray(formValues[fieldName])) {
            unsetPath(formValues, `${fieldName}.${valueIdx}`);
            return;
        }
        unsetPath(formValues, fieldName);
        unsetPath(initialValues.value, fieldName);
    }
    async function validate() {
        function resultReducer(acc, result) {
            if (!result.errors.length) {
                return acc;
            }
            acc.valid = false;
            acc.errors[result.key] = result.errors[0];
            return acc;
        }
        if (formCtx.validateSchema) {
            return formCtx.validateSchema(true).then(results => {
                return keysOf(results)
                    .map(r => ({ key: r, errors: results[r].errors }))
                    .reduce(resultReducer, { errors: {}, valid: true });
            });
        }
        const results = await Promise.all(fields.value.map(f => {
            return f.validate().then((result) => {
                return {
                    key: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(f.name),
                    errors: result.errors,
                };
            });
        }));
        return results.reduce(resultReducer, { errors: {}, valid: true });
    }
    async function validateField(field) {
        const fieldInstance = fieldsById.value[field];
        if (!fieldInstance) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`field with name ${field} was not found`);
            return Promise.resolve({ errors: [], valid: true });
        }
        if (Array.isArray(fieldInstance)) {
            return fieldInstance.map(f => f.validate())[0];
        }
        return fieldInstance.validate();
    }
    const handleSubmit = (fn) => {
        return function submissionHandler(e) {
            if (e instanceof Event) {
                e.preventDefault();
                e.stopPropagation();
            }
            isSubmitting.value = true;
            submitCount.value++;
            return validate()
                .then(result => {
                if (result.valid && typeof fn === 'function') {
                    return fn(immutableFormValues.value, {
                        evt: e,
                        setDirty,
                        setFieldDirty,
                        setErrors,
                        setFieldError,
                        setTouched,
                        setFieldTouched,
                        setValues,
                        setFieldValue,
                        resetForm,
                    });
                }
            })
                .then(() => {
                isSubmitting.value = false;
            }, err => {
                isSubmitting.value = false;
                // re-throw the err so it doesn't go silent
                throw err;
            });
        };
    };
    const formCtx = {
        register: registerField,
        unregister: unregisterField,
        fields: fieldsById,
        values: formValues,
        schema: opts === null || opts === void 0 ? void 0 : opts.validationSchema,
        submitCount,
        validateSchema: isYupValidator(opts === null || opts === void 0 ? void 0 : opts.validationSchema)
            ? (shouldMutate = false) => {
                return validateYupSchema(formCtx, shouldMutate);
            }
            : undefined,
        validate,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldError,
        setFieldTouched,
        setTouched,
        setFieldDirty,
        setDirty,
        resetForm,
        meta,
        isSubmitting,
        handleSubmit,
    };
    const immutableFormValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return fields.value.reduce((formData, field) => {
            setInPath(formData, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.value));
            return formData;
        }, {});
    });
    const submitForm = handleSubmit((_, { evt }) => {
        var _a, _b;
        if (evt) {
            (_b = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.submit) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
    });
    // Trigger initial validation
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialDirty) {
            setDirty(opts.initialDirty);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
        }
    });
    // Provide injections
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FormContextSymbol, formCtx);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FormErrorsSymbol, errors);
    return {
        errors,
        meta,
        values: formValues,
        isSubmitting,
        submitCount,
        validate,
        validateField,
        handleReset: () => resetForm(),
        resetForm,
        handleSubmit,
        submitForm,
        setFieldError,
        setErrors,
        setFieldValue,
        setValues,
        setFieldTouched,
        setTouched,
        setFieldDirty,
        setDirty,
    };
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(fields, initialValues) {
    const MERGE_STRATEGIES = {
        valid: 'every',
        dirty: 'some',
        touched: 'some',
        pending: 'some',
    };
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const flags = keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = fields.value[mergeMethod](field => field.meta[flag]);
            return acc;
        }, {});
        return Object.assign({ initialValues: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValues) }, flags);
    });
}
async function validateYupSchema(form, shouldMutate = false) {
    const errors = await form.schema
        .validate(form.values, { abortEarly: false })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name !== 'ValidationError') {
            throw err;
        }
        // list of aggregated errors
        return err.inner || [];
    });
    const fields = form.fields.value;
    const errorsByPath = errors.reduce((acc, err) => {
        acc[err.path] = err;
        return acc;
    }, {});
    // Aggregates the validation result
    const aggregatedResult = keysOf(fields).reduce((result, fieldId) => {
        const field = fields[fieldId];
        const messages = (errorsByPath[fieldId] || { errors: [] }).errors;
        const fieldResult = {
            errors: messages,
            valid: !messages.length,
        };
        result[fieldId] = fieldResult;
        const isDirty = Array.isArray(field) ? field.some(f => f.meta.dirty) : field.meta.dirty;
        if (!shouldMutate && !isDirty) {
            return result;
        }
        if (Array.isArray(field)) {
            field.forEach(f => f.setValidationState(fieldResult));
            return result;
        }
        field.setValidationState(fieldResult);
        return result;
    }, {});
    return aggregatedResult;
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(fields, formValues, providedValues) {
    const initialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(providedValues) || {});
    // acts as a read only proxy of the initial values object
    const computedInitials = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return initialValues.value;
    });
    function setInitialValues(values, updateFields = false) {
        initialValues.value = Object.assign(Object.assign({}, initialValues.value), values);
        if (!updateFields) {
            return;
        }
        // update the pristine (non-dirty and non-touched fields)
        // we exclude dirty and untouched fields because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        const isSafeToUpdate = (f) => f.meta.dirty || f.meta.touched;
        keysOf(fields.value).forEach(fieldPath => {
            const field = fields.value[fieldPath];
            const isFieldDirty = Array.isArray(field) ? field.some(isSafeToUpdate) : isSafeToUpdate(field);
            if (isFieldDirty) {
                return;
            }
            const newValue = getFromPath(initialValues.value, fieldPath);
            setInPath(formValues, fieldPath, newValue);
        });
    }
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(providedValues)) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(providedValues, value => {
            setInitialValues(value, true);
        }, {
            deep: true,
        });
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FormInitialValuesSymbol, computedInitials);
    return {
        readonlyInitialValues: computedInitials,
        initialValues,
        setInitialValues,
    };
}

const Form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Form',
    inheritAttrs: false,
    props: {
        as: {
            type: String,
            default: 'form',
        },
        validationSchema: {
            type: Object,
            default: undefined,
        },
        initialValues: {
            type: Object,
            default: undefined,
        },
        initialErrors: {
            type: Object,
            default: undefined,
        },
        initialDirty: {
            type: Object,
            default: undefined,
        },
        initialTouched: {
            type: Object,
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        onSubmit: {
            type: Function,
            default: undefined,
        },
    },
    setup(props, ctx) {
        const initialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'initialValues');
        const { errors, values, meta, isSubmitting, submitCount, validate, validateField, handleReset, resetForm, handleSubmit, submitForm, setErrors, setFieldError, setFieldValue, setValues, setFieldDirty, setDirty, setFieldTouched, setTouched, } = useForm({
            validationSchema: props.validationSchema,
            initialValues,
            initialErrors: props.initialErrors,
            initialTouched: props.initialTouched,
            initialDirty: props.initialDirty,
            validateOnMount: props.validateOnMount,
        });
        const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit) : submitForm;
        function handleFormReset(e) {
            if (isEvent(e)) {
                // Prevent default form reset behavior
                e.preventDefault();
            }
            handleReset();
            if (typeof ctx.attrs.onReset === 'function') {
                ctx.attrs.onReset();
            }
        }
        function handleScopedSlotSubmit(evt, onSubmit) {
            const onSuccess = typeof evt === 'function' && !onSubmit ? evt : onSubmit;
            return handleSubmit(onSuccess)(evt);
        }
        const slotProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return {
                meta: meta.value,
                errors: errors.value,
                values: values,
                isSubmitting: isSubmitting.value,
                submitCount: submitCount.value,
                validate,
                validateField,
                handleSubmit: handleScopedSlotSubmit,
                handleReset,
                submitForm,
                setErrors,
                setFieldError,
                setFieldValue,
                setValues,
                setFieldDirty,
                setDirty,
                setFieldTouched,
                setTouched,
                resetForm,
            };
        });
        return function renderForm() {
            // FIXME: Hacky but cute way to expose some stuff to the rendered instance
            // getCurrentInstance doesn't work with render fns, it returns the wrong instance
            // we want to expose setFieldError and setErrors
            if (!('setErrors' in this)) {
                this.setFieldError = setFieldError;
                this.setErrors = setErrors;
                this.setFieldValue = setFieldValue;
                this.setValues = setValues;
                this.setFieldDirty = setFieldDirty;
                this.setDirty = setDirty;
                this.setFieldTouched = setFieldTouched;
                this.setTouched = setTouched;
                this.resetForm = resetForm;
                this.validate = validate;
                this.validateField = validateField;
            }
            const children = normalizeChildren(ctx, slotProps.value);
            if (!props.as) {
                return children;
            }
            // Attributes to add on a native `form` tag
            const formAttrs = props.as === 'form'
                ? {
                    // Disables native validation as vee-validate will handle it.
                    novalidate: true,
                }
                : {};
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(
            // avoid resolving the form component as itself
            props.as === 'form' ? props.as : (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as), Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
        };
    },
});

const ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    props: {
        as: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FormErrorsSymbol, undefined);
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return errors === null || errors === void 0 ? void 0 : errors.value[props.name];
        });
        return () => {
            // Renders nothing if there are no messages
            if (!message.value) {
                return undefined;
            }
            const children = normalizeChildren(ctx, {
                message: message.value,
            });
            const tag = (props.as ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as) : props.as);
            const attrs = Object.assign({ role: 'alert' }, ctx.attrs);
            // If no tag was specified and there are children
            // render the slot as is without wrapping it
            if (!tag && (children === null || children === void 0 ? void 0 : children.length)) {
                return children;
            }
            // If no children in slot
            // render whatever specified and fallback to a <span> with the message in it's contents
            if (!(children === null || children === void 0 ? void 0 : children.length)) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag || 'span', attrs, message.value);
            }
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, attrs, children);
        };
    },
});

function useResetForm() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function resetForm(state) {
        if (!form) {
            return;
        }
        return form.resetForm(state);
    };
}

/**
 * If a field is dirty or not
 */
function useIsFieldDirty(path) {
    const form = injectWithSelf(FormContextSymbol);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fields.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.dirty;
    });
}

/**
 * If a field is touched or not
 */
function useIsFieldTouched(path) {
    const form = injectWithSelf(FormContextSymbol);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fields.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.touched;
    });
}

/**
 * If a field is validated and is valid
 */
function useIsFieldValid(path) {
    const form = injectWithSelf(FormContextSymbol);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fields.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.valid;
    });
}

/**
 * If the form is submitting or not
 */
function useIsSubmitting() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validates a single field
 */
function useValidateField(path) {
    const form = injectWithSelf(FormContextSymbol);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return function validateField() {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fields.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return Promise.resolve({
                errors: [],
                valid: true,
            });
        }
        return field.validate();
    };
}

/**
 * If the form is dirty or not
 */
function useIsFormDirty() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is touched or not
 */
function useIsFormTouched() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form has been validated and is valid
 */
function useIsFormValid() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validate multiple fields
 */
function useValidateForm() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function validateField() {
        if (!form) {
            return Promise.resolve({ errors: {}, valid: true });
        }
        return form.validate();
    };
}

/**
 * The number of form's submission count
 */
function useSubmitCount() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null && _a !== void 0 ? _a : 0;
    });
}

/**
 * Gives access to a field's current value
 */
function useFieldValue$1(path) {
    const form = injectWithSelf(FormContextSymbol);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        if (path) {
            return getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        }
        return (_a = field === null || field === void 0 ? void 0 : field.value) === null || _a === void 0 ? void 0 : _a.value;
    });
}

/**
 * Gives access to a form's values
 */
function useFormValues() {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return (form === null || form === void 0 ? void 0 : form.values) || {};
    });
}

/**
 * Gives access to all form errors
 */
function useFormErrors() {
    const errors = injectWithSelf(FormErrorsSymbol);
    if (!errors) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return errors || (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({}));
}

/**
 * Gives access to a single field error
 */
function useFieldError(path) {
    const errors = injectWithSelf(FormErrorsSymbol);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextSymbol);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        if (path) {
            return (_a = errors === null || errors === void 0 ? void 0 : errors.value) === null || _a === void 0 ? void 0 : _a[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)];
        }
        return field === null || field === void 0 ? void 0 : field.errorMessage.value;
    });
}

function useSubmitForm(cb) {
    const form = injectWithSelf(FormContextSymbol);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    const onSubmit = form ? form.handleSubmit(cb) : undefined;
    return function submitForm(e) {
        if (!onSubmit) {
            return;
        }
        return onSubmit(e);
    };
}




/***/ }),

/***/ "./resources/js/views/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_12f5395a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=12f5395a */ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/views/Login.vue?vue&type=script&lang=js");



_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Login_vue_vue_type_template_id_12f5395a__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/Login.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a":
/*!********************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=template&id=12f5395a ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_12f5395a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_12f5395a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=12f5395a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Login.vue?vue&type=template&id=12f5395a");


/***/ })

}]);