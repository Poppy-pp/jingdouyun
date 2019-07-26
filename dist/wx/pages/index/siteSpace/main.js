require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(112);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f2c3cc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(113)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f2c3cc2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f2c3cc2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\siteSpace\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f2c3cc2", Component.options)
  } else {
    hotAPI.reload("data-v-7f2c3cc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 114:
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
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }],
      title: '',
      info: [{ type: '会场面积', value: '2000m' }, { type: '会场层高', value: '30m' }, { type: '所在楼层', value: '1层' }, { type: '场地特点', value: '无柱' }],
      moreList: [{ url: "/static/images/more1.png", title: '剧院式', value: '300人' }, { url: "/static/images/more2.png", title: '课桌式', value: '120人' }, { url: "/static/images/more3.png", title: '宴会式', value: '340人' }, { url: "/static/images/more4.png", title: 'U型', value: '300人' }, { url: "/static/images/more5.png", title: '鱼骨式', value: '300人' }, { url: "/static/images/more6.png", title: '董事会', value: '300人' }, { url: "/static/images/more7.png", title: '酒会式', value: '300人' }]
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
      this.title = options.title;
    },

    // 调出拨打电话
    onPhoneCall: function onPhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      });
    }
  },
  mounted: function mounted() {
    this.getQuery();
  },
  created: function created() {}
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "banner",
    attrs: {
      "src": "/static/images/site-detail.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "place"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("华熙LIVE五棵松-凯迪拉克中心")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("参考价 "), _c('span', [_vm._v("￥12,000")]), _vm._v("/天")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("基础信息")]), _vm._v(" "), _c('ul', _vm._l((_vm.info), function(item, index) {
    return _c('li', {
      key: index
    }, [_vm._v("\n        " + _vm._s(item.type)), _c('span', [_vm._v(_vm._s(item.value))])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "more"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("最多容纳"), _c('span', {
    staticClass: "num"
  }, [_vm._v("500人")])]), _vm._v(" "), _c('div', {
    staticClass: "scroll"
  }, _vm._l((_vm.moreList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "scroll-item"
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.title) + " "), _c('i', [_vm._v(_vm._s(item.value))])], 1)])
  }))], 1), _vm._v(" "), _c('p', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_vm._v("免费咨询场地详情/报价")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f2c3cc2", esExports)
  }
}

/***/ })

},[111]);