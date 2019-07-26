require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([20],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(54);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_194271aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(57);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-194271aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_194271aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\articleDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-194271aa", Component.options)
  } else {
    hotAPI.reload("data-v-194271aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 56:
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
      showShare: false
    };
  },

  components: {},
  computed: {},
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ 57:
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
      "src": "/static/images/article-detail.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("找不到合适的场地 鲸抖云智能服务帮你找到最合适的场地")]), _vm._v(" "), _c('span', [_vm._v("鲸抖云官方App    2019.05.18")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("详情内容")]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('p', {
    staticClass: "first"
  }, [_vm._v("【会议场地规模】")]), _vm._v(" "), _c('p', [_vm._v("明确会议场地时间、地点、规模等信息")]), _vm._v(" "), _c('p', [_vm._v("这几点是一场会议举办的基本要素。")]), _vm._v(" "), _c('span', {
    staticClass: "bgcolor"
  }, [_vm._v("确定会议布局方式")]), _vm._v(" "), _c('p', [_vm._v("寻找合适的场地，查询档期和报价")]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/detail-1.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "first"
  }, [_vm._v("【会议场地规模】")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("直接供应商是指酒店、场地的直接拥有者或销售人员，间接供应商则是指会务公司、会场搜索预订网站(如酒店哥哥等)，两者各有利弊。\n        但往往与直接供应商联系较为繁琐，间接供应商一般都可以提供完善便利的设备，当然，如何权衡还是要看打击的看法啦！\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "share",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showShare = true
      }
    }
  }, [_c('i', [_vm._v("分享"), _c('br'), _vm._v("好友")], 1)], 1), _vm._v(" "), _c('van-popup', {
    staticClass: "share-pop",
    attrs: {
      "show": _vm.showShare,
      "position": "bottom",
      "round": "",
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "close": function($event) {
        _vm.showShare = false
      }
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("分享至")]), _vm._v(" "), _c('div', {
    staticClass: "share-item"
  }, [_c('div', {
    staticClass: "icon-box"
  }, [_c('img', {
    attrs: {
      "src": "../../../../static/images/wechat.png"
    }
  }), _vm._v(" "), _c('i', [_vm._v("微信好友")])], 1), _vm._v(" "), _c('div', {
    staticClass: "icon-box"
  }, [_c('img', {
    attrs: {
      "src": "../../../../static/images/friend.png"
    }
  }), _vm._v(" "), _c('i', [_vm._v("微信朋友圈")])], 1)]), _vm._v(" "), _c('button', {
    staticClass: "cancel",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showShare = false
      }
    }
  }, [_vm._v("取消")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-194271aa", esExports)
  }
}

/***/ })

},[53]);