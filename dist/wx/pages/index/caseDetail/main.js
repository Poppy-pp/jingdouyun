require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([19],{

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(59);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b4f36fd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(62);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b4f36fd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b4f36fd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\caseDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b4f36fd8", Component.options)
  } else {
    hotAPI.reload("data-v-b4f36fd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 61:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      info: [{ url: '/static/images/case1.png', type: '活动类型', value: '会议' }, { url: '/static/images/case2.png', type: '活动场地', value: '五星酒店' }, { url: '/static/images/case3.png', type: '活动人数', value: '200' }],
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }]
    };
  },

  components: {},
  computed: {},
  methods: {
    // 调出拨打电话
    onPhoneCall: function onPhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("腾讯创投会议")]), _vm._v(" "), _c('ul', _vm._l((_vm.info), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    }), _vm._v("\n         " + _vm._s(item.type)), _c('span', [_vm._v(_vm._s(item.value))])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("详细介绍")]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，\n       是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。\n     ")]), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/site-introduce.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，\n       是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。\n     ")])], 1), _vm._v(" "), _c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_vm._v("联系场地顾问")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/cooperate.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b4f36fd8", esExports)
  }
}

/***/ })

},[58]);