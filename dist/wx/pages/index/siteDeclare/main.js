require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "person"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "/static/images/avatar.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(" 蒲蒲 "), _vm._l((_vm.needs), function(item, index) {
    return _c('i', {
      key: index,
      staticClass: "needs"
    }, [_vm._v(_vm._s(item))])
  }), _c('i', {
    staticClass: "small"
  }, [_vm._v("场地资源方")])], 2), _vm._v(" "), _c('div', {
    staticClass: "circle",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_c('img', {
    staticClass: "phone",
    attrs: {
      "src": "/static/images/phone-white.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showBigImg = true
      }
    }
  }, [_c('Swiperdetail', {
    attrs: {
      "images": _vm.images,
      "status": _vm.status,
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "person"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "/static/images/avatar.jpg",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(" 蒲蒲 "), _vm._l((_vm.needs), function(item, index) {
    return _c('i', {
      key: index,
      staticClass: "needs"
    }, [_vm._v(_vm._s(item))])
  }), _c('i', {
    staticClass: "small"
  }, [_vm._v("场地资源方")])], 2), _vm._v(" "), _c('div', {
    staticClass: "circle",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_c('img', {
    staticClass: "phone",
    attrs: {
      "src": "/static/images/phone-white.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showBigImg = true
      }
    }
  }, [_c('Swiperdetail', {
    attrs: {
      "images": _vm.images,
      "status": _vm.status,
      "mpcomid": '1'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showBigImg),
      expression: "showBigImg"
    }],
    staticClass: "tabs"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('img', {
    staticClass: "close",
    attrs: {
      "src": "/static/images/close.png",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.showBigImg = false
      }
    }
  }), _vm._v(" "), _c('p', _vm._l((_vm.tabTitle), function(title, index) {
    return _c('span', {
      key: index,
      class: {
        active: _vm.active == index
      },
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.active = index
        }
      }
    }, [_vm._v(_vm._s(title))])
  }))], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active == 0),
      expression: "active == 0"
    }],
    staticClass: "content"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/site-introduce.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "play",
    attrs: {
      "src": "/static/images/play.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active == 1),
      expression: "active == 1"
    }],
    staticClass: "content"
  }, [_c('Swiperdetail', {
    attrs: {
      "images": _vm.images,
      "noplay": true,
      "mpcomid": '2'
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e41dfe6", esExports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e41dfe6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(100);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e41dfe6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e41dfe6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\siteDeclare\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e41dfe6", Component.options)
  } else {
    hotAPI.reload("data-v-3e41dfe6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_swiperdetail__ = __webpack_require__(5);
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
      needs: ["实名认证", "企业认证"],
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }],
      images: [{ url: "/static/images/site-introduce.png" }, { url: "/static/images/site-detail.png" }, { url: "/static/images/site-detail.png" }],
      status: true,
      showBigImg: false,
      active: 0,
      tabTitle: ['视频', '图片']
    };
  },

  components: { Swiperdetail: __WEBPACK_IMPORTED_MODULE_0__components_swiperdetail__["a" /* default */] },
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

/***/ })

},[93]);