require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(136);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_44528b77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44528b77"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_44528b77_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myCenter\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44528b77", Component.options)
  } else {
    hotAPI.reload("data-v-44528b77", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }]
    };
  },

  components: {},
  computed: {},
  methods: {
    // 跳转到热门
    goHot: function goHot(data) {
      wx.navigateTo({
        url: '/pages/index/hotSite/main?title=' + data
      });
    },

    // 调出拨打电话
    onPhoneCall: function onPhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      });
    },

    // 跳转到我的订单
    goMyOrder: function goMyOrder() {
      wx.navigateTo({
        url: '/pages/myCenter/myOrder/main'
      });
    },

    // 跳转到关于我们
    goAboutUs: function goAboutUs() {
      wx.navigateTo({
        url: '/pages/myCenter/aboutUs/main'
      });
    },

    // 跳转到个人信息
    goMyInfo: function goMyInfo() {
      wx.navigateTo({
        url: '/pages/myCenter/myInfo/main'
      });
    },

    // 跳转意见反馈
    goOptionback: function goOptionback() {
      wx.navigateTo({
        url: '/pages/myCenter/optionBack/main'
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title-radius"
  }, [_c('div', {
    staticClass: "infomation"
  }, [_c('image', {
    staticClass: "_headimage",
    attrs: {
      "src": "http://img2.imgtn.bdimg.com/it/u=2667103721,4031219275&fm=26&gp=0.jpg"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("帅哥哥")]), _vm._v(" "), _c('div', {
    staticClass: "loookinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goMyInfo
    }
  }, [_vm._v("点击查看个人信息  "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "8px",
      "mpcomid": '0'
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.goMyOrder
    }
  }, [_c('image', {
    staticClass: "_tabimage",
    attrs: {
      "src": "/static/images/order.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "tabText"
  }, [_vm._v("订单")])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.goHot('我的收藏')
      }
    }
  }, [_c('image', {
    staticClass: "_tabimage",
    attrs: {
      "src": "/static/images/shoucang.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "tabText"
  }, [_vm._v("收藏")])]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.goHot('我的足迹')
      }
    }
  }, [_c('image', {
    staticClass: "_tabimage",
    attrs: {
      "src": "/static/images/foot.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "tabText"
  }, [_vm._v("足迹")])])]), _vm._v(" "), _c('div', {
    staticClass: "card centerNav"
  }, [_c('div', {
    staticClass: "Navitem"
  }, [_c('div', {
    staticClass: "item_metion"
  }, [_vm._v("关注企业号/公众号")]), _vm._v(" "), _c('div', {
    staticClass: "item_value"
  }, [_vm._v("获取行业最新资讯  "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "Navitem"
  }, [_c('div', {
    staticClass: "item_metion"
  }, [_vm._v("下载鲸抖云App")]), _vm._v(" "), _c('div', {
    staticClass: "item_value"
  }, [_vm._v("全方位活动服务平台  "), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "Navitem",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_c('div', {
    staticClass: "item_metion"
  }, [_vm._v("客服电话")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "Navitem",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.goAboutUs
    }
  }, [_c('div', {
    staticClass: "item_metion"
  }, [_vm._v("关于我们")]), _vm._v(" "), _c('div', {
    staticClass: "item_value"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '3'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "Navitem",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.goOptionback
    }
  }, [_c('div', {
    staticClass: "item_metion"
  }, [_vm._v("意见反馈")]), _vm._v(" "), _c('div', {
    staticClass: "item_value"
  }, [_c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '4'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "my-metion"
  }, [_vm._v("— 鲸抖云·让活动变的简单 —")])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item_value"
  }, [_vm._v("010-1234151  "), _c('image', {
    staticClass: "_phone",
    attrs: {
      "src": "/static/images/phone.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-44528b77", esExports)
  }
}

/***/ })

},[135]);