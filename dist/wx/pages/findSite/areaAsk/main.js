require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([25],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(27);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_64b2f6da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(30);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_64b2f6da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\findSite\\areaAsk\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64b2f6da", Component.options)
  } else {
    hotAPI.reload("data-v-64b2f6da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      area: '',
      areas: [{ text: '不限', children: [{ text: '不限', id: 1, disabled: false }] }, { text: '附近', children: [{ text: '不限', id: 2, disabled: false }, { text: '500m以内', id: 3, disabled: false }, { text: '1000m以内', id: 4, disabled: false }] }, { text: '区域', children: [{ text: '不限', id: 5, disabled: false }, { text: '东城区', id: 6, disabled: false }, { text: '武侯区', id: 7, disabled: false }] }, { text: '地铁', children: [{ text: '不限', id: 8, disabled: false }, { text: '1号线', id: 9, disabled: false }, { text: '3号线', id: 10, disabled: false }] }, { text: '道路', children: [{ text: '不限', id: 12, disabled: false }, { text: '一环', id: 13, disabled: false }, { text: '四环', id: 14, disabled: false }] }, { text: '商圈', children: [{ text: '总部基地', id: 15, disabled: false }, { text: '中关村', id: 16, disabled: false }, { text: '软件园', id: 17, disabled: false }] }],
      mainActiveIndex: 0, // 左侧高亮元素的index
      activeId: 1, // 被选中元素的id
      wHeight: ''
    };
  },

  components: {},
  computed: {},
  methods: {
    // 点击一级菜单
    onClickNav: function onClickNav(e) {
      this.mainActiveIndex = e.mp.detail.index;
    },

    // 点击子集
    onClickItem: function onClickItem(e) {
      this.activeId = e.mp.detail.id;
      this.showPopup = false;
      // this.area = this.activeId;

      // 带参返回上一页
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.setData({ //往上一页传递的参数值
        addrask: e.mp.detail
      });
      wx.navigateBack({
        delta: 1
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    wx.getSystemInfo({
      success: function success(res) {
        _this.wHeight = res.windowHeight + 'px';
      }
    });
  },
  created: function created() {}
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    style: ('height:' + _vm.wHeight)
  }, [_c('van-tree-select', {
    attrs: {
      "items": _vm.areas,
      "main-active-index": _vm.mainActiveIndex,
      "active-id": _vm.activeId,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "clickNav": _vm.onClickNav,
      "clickItem": _vm.onClickItem
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
     require("vue-hot-reload-api").rerender("data-v-64b2f6da", esExports)
  }
}

/***/ })

},[26]);