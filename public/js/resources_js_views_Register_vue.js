(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue_select_src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select/src/index */ "./node_modules/vue-select/src/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Field: vee_validate__WEBPACK_IMPORTED_MODULE_1__.Field,
    Form: vee_validate__WEBPACK_IMPORTED_MODULE_1__.Form,
    vSelect: vue_select_src_index__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      name: "Ahsan Zaman",
      role: "",
      email: "ahsan@ahsan-web.ml",
      password: "ahsan1997",
      show: false,
      roles: ["Student", "Parent", "Teacher"]
    };
  },
  methods: {
    // Validator function
    isRequired: function isRequired(value) {
      return value ? true : "Email is required";
    },
    onSubmit: function onSubmit() {
      if (this.role) {
        alert("Submitting :("); // const { setErrors } = useForm()

        this.$refs.signupform.setErrors({
          email: "this is from server"
        });
      } else {
        this.bus.emit('toast', {
          title: 'Error',
          text: 'Please select an account type',
          type: 'error'
        });
      }
    },
    validateEmail: function validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "Email is required";
      } // if the field is not a valid email


      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return "Must be a valid email address";
      } // All is good


      return true;
    },
    validatePassword: function validatePassword(value) {
      // if the field is empty
      if (!value) {
        return "Password is required";
      } // if the field is not a valid password


      if (!/^[a-zA-Z0-9]{8,}$/i.test(value)) {
        return "Password must contain at least 8 characters";
      } // All is good


      return true;
    },
    confirmPassword: function confirmPassword(value) {
      // if the field is empty
      if (!value) {
        return "Retype your password";
      } // if the field is not a valid password


      if (!(value == this.password)) {
        return "Passwords doesn't match";
      } // All is good


      return true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "text-center text-4xl text-purple-600 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
}, " Sign up ", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "mt-12"
};
var _hoisted_6 = {
  "class": "text-xs text-red-600"
};
var _hoisted_7 = {
  "class": "mt-8"
};
var _hoisted_8 = {
  "class": "mt-8"
};
var _hoisted_9 = {
  "class": "text-xs text-red-600"
};
var _hoisted_10 = {
  "class": "mt-8"
};
var _hoisted_11 = {
  "class": "relative flex items-center"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
}, null, -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "text-xs text-red-600"
};
var _hoisted_16 = {
  "class": "mt-8"
};
var _hoisted_17 = {
  "class": "text-xs text-red-600"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "mt-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
}, " Signup ")], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "mt-12 text-sm font-display font-semibold text-gray-700 text-center"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Have an account already ? ");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login here");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

  var _component_v_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-select");

  var _component_Form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Form");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Form, {
    ref: "signupform",
    onSubmit: $options.onSubmit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var errors = _ref.errors;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Field name=\"field\" :rules=\"isRequired\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.name ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, "Full Name", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none", !errors.name ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "name",
        rules: $options.isRequired,
        autocomplete: "",
        modelValue: $data.name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.name = $event;
        }),
        placeholder: "Jhon Doe"
      }, null, 8
      /* PROPS */
      , ["class", "rules", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(errors.name), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.role ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, "Account Type", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_select, {
        options: $data.roles,
        "class": ["w-full text-lg py-2 border-0 border-b focus:outline-none style-chooser", !errors.role ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        modelValue: $data.role,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.role = $event;
        }),
        placeholder: "Select"
      }, null, 8
      /* PROPS */
      , ["options", "class", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.email ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, "Email Address", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none", !errors.email ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "email",
        rules: $options.validateEmail,
        validateOnInput: true,
        autocomplete: "off",
        modelValue: $data.email,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.email = $event;
        }),
        placeholder: "mike@gmail.com"
      }, null, 8
      /* PROPS */
      , ["class", "rules", "modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(errors.email), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.password ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, " Password ", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none", !errors.password ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "password",
        type: $data.show ? 'text' : 'password',
        rules: $options.validatePassword,
        validateOnInput: true,
        autocomplete: "new-password",
        modelValue: $data.password,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.password = $event;
        }),
        placeholder: "Password"
      }, null, 8
      /* PROPS */
      , ["class", "type", "rules", "modelValue"]), $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
        key: 0,
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $data.show = !$data.show;
        }),
        "class": "w-6 cursor-pointer absolute right-1",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, [_hoisted_12, _hoisted_13])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
        key: 1,
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $data.show = !$data.show;
        }),
        "class": "w-6 cursor-pointer absolute right-1",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, [_hoisted_14]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(errors.password), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        "class": [!errors.confirm_password ? 'text-gray-700' : 'text-red-600', "text-sm font-bold tracking-wide"]
      }, " Confirm Password ", 2
      /* CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        "class": ["w-full text-lg py-2 border-b focus:outline-none", !errors.confirm_password ? 'border-gray-300 focus:border-indigo-500' : 'border-red-600 focus:border-red-600'],
        name: "confirm_password",
        type: "password",
        rules: $options.confirmPassword,
        validateOnInput: true,
        autocomplete: "off",
        placeholder: "Confirm Password"
      }, null, 8
      /* PROPS */
      , ["class", "rules"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(errors.confirm_password), 1
      /* TEXT */
      )]), _hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onSubmit"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/login",
    "class": "cursor-pointer text-indigo-600 hover:text-indigo-800"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  })])])])]), _hoisted_22]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vs__dropdown-toggle {\n  border: 0px;\n}\n.style-chooser .vs__selected {\n  background-color: #7c3aed;\n  color: #fff;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_3563ad7c_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_3563ad7c_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_3563ad7c_lang_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/views/Register.vue?vue&type=script&lang=js");
/* harmony import */ var _Register_vue_vue_type_style_index_0_id_3563ad7c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss */ "./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss");




;
_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Register_vue_vue_type_template_id_3563ad7c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/views/Register.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_3563ad7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_3563ad7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=3563ad7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c");


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

/***/ "./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_style_index_0_id_3563ad7c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&lang=scss");


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