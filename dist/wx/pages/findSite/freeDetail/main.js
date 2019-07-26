require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([23],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(39);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fb0f36c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(42);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fb0f36c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5fb0f36c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\findSite\\freeDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fb0f36c", Component.options)
  } else {
    hotAPI.reload("data-v-5fb0f36c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
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
      infoList: [
        // { key:'订单号', value:'JDY12312' }, { key:'活动城市', value:'北京' }, { key:'活动类型', value:'发布会/颁奖/庆典' }, { key:'举办时间', value:'2019.09.01-2019.10.03' }, { key:'活动人数', value:'100人以下' }, { key:'活动预算', value:'5000以下' }, 
      ],
      showDialog: false,
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }],
      orderStatus: true, //订单状态【true：生效，false：已取消】
      dialogMsg: '您确定要取消该订单吗？'
    };
  },

  components: {},
  computed: {},
  methods: {
    // 取消订单
    confirmCancel: function confirmCancel() {
      this.orderStatus = false; //订单状态改为 失效
    },

    // 调出拨打电话
    onPhoneCall: function onPhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      });
    },

    // 重新发布需求
    againPublish: function againPublish() {
      wx.switchTab({
        url: '/pages/findSite/main'
      });
    },

    /* 获取当前路由栈数据 */
    getQuery: function getQuery() {
      var pages = getCurrentPages();
      var currentPage = pages[pages.length - 1];
      var options = currentPage.options;
      this.infoList = JSON.parse(options.form);
      if (this.infoList.status == 0) {
        // 订单已取消页面
        this.orderStatus = false;
      } else {
        this.orderStatus = true;
      }
    }
  },
  mounted: function mounted() {
    this.getQuery();
  },
  created: function created() {}
});

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title-radius"
  }, [(_vm.orderStatus) ? _c('div', {
    staticClass: "icon"
  }, [_c('div', {
    staticClass: "icon-box"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": "../../../../static/images/needs.png"
    }
  }), _vm._v(" "), _c('i', [_vm._v("提交需求")])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../../static/images/circle.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "icon-box"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": "../../../../static/images/adviser.png"
    }
  }), _vm._v(" "), _c('i', [_vm._v("顾问受理")])], 1)]) : _c('div', {
    staticClass: "icon cancel"
  }, [_c('img', {
    staticClass: "circle",
    attrs: {
      "src": "../../../../static/images/cancel-order.png"
    }
  })]), _vm._v(" "), (_vm.orderStatus) ? _c('p', {
    staticClass: "icon-title"
  }, [_vm._v("顾问已受理，将与您沟通确认需求"), _c('i', {
    staticClass: "icon-desc"
  }, [_vm._v("顾问将在10分钟左右致电您，请保持手机畅通")])], 1) : _c('p', {
    staticClass: "icon-title"
  }, [_vm._v("订单已取消")])], 1), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('p', {
    staticClass: "divider"
  }, [_vm._v("— 鲸抖云·让活动变得简单 —"), _c('i', {
    staticClass: "card-desc"
  }, [_vm._v("2019.5.27 12:32提交")])], 1), _vm._v(" "), _c('ul', [_c('li', [_vm._v(_vm._s('· 订单号：' + _vm.infoList.ordernum))]), _vm._v(" "), _c('li', [_vm._v(_vm._s('· 活动城市：' + _vm.infoList.area))]), _vm._v(" "), _c('li', [_vm._v(_vm._s('· 活动类型：' + _vm.infoList.type))]), _vm._v(" "), _c('li', [_vm._v(_vm._s('· 举办时间：' + _vm.infoList.date))]), _vm._v(" "), _c('li', [_vm._v(_vm._s('· 活动人数：' + _vm.infoList.num))]), _vm._v(" "), _c('li', [_vm._v(_vm._s('· 活动预算：' + _vm.infoList.price))])], 1)], 1), _vm._v(" "), (_vm.orderStatus) ? _c('div', {
    staticClass: "btn-detail"
  }, [_c('button', {
    staticClass: "cancel",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showDialog = true
      }
    }
  }, [_vm._v("取消订单")]), _vm._v(" "), _c('button', {
    staticClass: "confirm",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_vm._v("联系顾问")])], 1) : _c('div', {
    staticClass: "btn-detail"
  }, [_c('button', {
    staticClass: "again",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.againPublish
    }
  }, [_vm._v("重新发布需求")])], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "show": _vm.showDialog,
      "message": _vm.dialogMsg,
      "showCancelButton": true,
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "confirm": _vm.confirmCancel,
      "cancel": function($event) {
        _vm.showDialog = false
      }
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
     require("vue-hot-reload-api").rerender("data-v-5fb0f36c", esExports)
  }
}

/***/ })

},[38]);