require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(117);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ad63a6ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad63a6ae"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_ad63a6ae_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ad63a6ae", Component.options)
  } else {
    hotAPI.reload("data-v-ad63a6ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      phone: '',
      sms: '',
      remember: true,
      showToast: false,
      toastMsg: ''
    };
  },

  components: {},
  computed: {},
  methods: {
    // 切换记住 开关
    changeRemember: function changeRemember(val) {
      this.remember = val.mp.detail;
    },

    // 登录
    login: function login() {
      var _this = this;

      if (this.phone == '' || this.sms == '') {
        this.showToast = true;
        this.toastMsg = '请填写完整的登录信息！';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      }
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "welcome"
  }, [_c('p', [_vm._v("您好，")]), _vm._v(" "), _c('p', [_vm._v("欢迎来到鲸抖云")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "clearable": "",
      "label": "手机号码",
      "placeholder": "输入有效手机号码",
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  }, [_c('i', {
    staticClass: "sms-code",
    slot: "button"
  }, [_vm._v("获取验证码")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "clearable": "",
      "label": "验证码",
      "placeholder": "输入6位验证码",
      "eventid": '1',
      "mpcomid": '1'
    },
    model: {
      value: (_vm.sms),
      callback: function($$v) {
        _vm.sms = $$v
      },
      expression: "sms"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "remember"
  }, [_c('label', [_vm._v("保存此号码供以后授权使用")]), _vm._v(" "), _c('van-switch', {
    attrs: {
      "checked": _vm.remember,
      "active-color": "#11bcfd",
      "inactive-color": "#ccc",
      "size": "20px",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.changeRemember
    }
  })], 1), _vm._v(" "), _c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.login
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("完成")])], 1), _vm._v(" "), _c('van-toast', {
    attrs: {
      "show": _vm.showToast,
      "message": _vm.toastMsg,
      "mpcomid": '3'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-ad63a6ae", esExports)
  }
}

/***/ })

},[116]);