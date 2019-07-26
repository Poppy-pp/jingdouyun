require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(70);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f32b26b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(73);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f32b26b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f32b26b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\cooperateCase\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f32b26b", Component.options)
  } else {
    hotAPI.reload("data-v-6f32b26b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      coopList: [{ url: '/static/images/tengxun.png', title: '腾讯创投会议', type: '会议', other: '五星酒店', num: '1000人' }, { url: '/static/images/tengxun.png', title: '腾讯创投会议', type: '会议', other: '特色场地', num: '2000人' }]
    };
  },

  components: {},
  computed: {},
  methods: {
    /* 获取当前路由栈数据 */
    getQuery: function getQuery() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var options = currentPage.options;
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: options.title
      });
    },

    // 跳转至案例详情
    goCaseDetail: function goCaseDetail() {
      wx.navigateTo({
        url: '/pages/index/caseDetail/main'
      });
    }
  },
  mounted: function mounted() {
    this.getQuery();
  },
  created: function created() {}
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/cooperate.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("介绍鲸抖云合作案例优势、实力的文案")])], 1), _vm._v(" "), _vm._l((_vm.coopList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "content",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": _vm.goCaseDetail
      }
    }, [_c('img', {
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "right-box"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.type))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.other))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.num))])], 1)])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f32b26b", esExports)
  }
}

/***/ })

},[69]);