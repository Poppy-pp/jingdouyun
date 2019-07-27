require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(89);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5a3c7d4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a3c7d4a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5a3c7d4a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a3c7d4a", Component.options)
  } else {
    hotAPI.reload("data-v-5a3c7d4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      hotList: ['北京鸟巢体育场', '北京西郊宾馆', '北京***酒店', '北京***酒店'],
      inputstatus: false, //输入状态，是否输入
      resultstatus: false,
      morestatus: false,
      inputvalue: '',
      resultList: [{ url: '/static/images/tengxun.png', title: '全场', other: '五星酒店', count: '500人', area: '2400m', num: '13m' }, { url: '/static/images/tengxun.png', title: '全场', other: '特色场地', count: '2000人', area: '2400m', num: '13m' }],
      showHistory: [],
      searchHistory: ['北京鸟巢体育场1', '鸟巢2', '北京鸟巢体育场3', '北京鸟巢体育场4', '北京鸟巢体育场5', '北京鸟巢体育场6'],
      showDialog: false,
      dialogMsg: '清除后不可恢复'
    };
  },

  components: {},
  computed: {},
  methods: {
    //取消
    goCancel: function goCancel() {
      wx.navigateBack({
        delta: 1
      });
    },

    // 选择热门场地
    selectHot: function selectHot(item) {
      this.inputvalue = item;
      this.inputEnter();
      this.inputstatus = true;
    },

    // 输入
    inputSearch: function inputSearch(e) {
      if (e.target.value.length > 0) {
        this.inputstatus = true; //显示清空按钮
      } else {
        this.inputstatus = false;
        this.resultstatus = false;
      }
    },

    // 回车
    inputEnter: function inputEnter() {
      this.resultstatus = true; //显示结果
      this.searchHistory.push(this.inputvalue); //存入历史
      this.showHistory = this.searchHistory.slice(0, 5); //显示前5条数据
    },

    // 查看更多搜索历史
    seeMore: function seeMore() {
      if (this.morestatus) {
        //收起
        this.morestatus = false;
        this.showHistory = this.searchHistory.slice(0, 5);
      } else {
        //展开
        this.morestatus = true;
        this.showHistory = this.searchHistory;
      }
    },

    // 删除历史
    confirmCancel: function confirmCancel() {
      this.searchHistory = '';
      this.showHistory = '';
    },

    // 删除某一项
    deleteItem: function deleteItem(index) {
      this.searchHistory.splice(index, 1);
      this.showHistory = this.searchHistory.slice(0, 5);
    },

    // 清空
    clearInput: function clearInput() {
      this.inputstatus = false;
      this.resultstatus = false;
      this.inputvalue = '';
    }
  },
  created: function created() {
    this.showHistory = this.searchHistory.slice(0, 5);
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('van-icon', {
    staticClass: "search",
    attrs: {
      "name": "search",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputvalue),
      expression: "inputvalue"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索您心仪的场地",
      "placeholder-style": "color:#8e9398",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputvalue)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.inputvalue = $event.target.value
      }, _vm.inputSearch],
      "confirm": _vm.inputEnter
    }
  }), _vm._v(" "), (_vm.inputstatus) ? _c('van-icon', {
    staticClass: "clear",
    attrs: {
      "name": "cross",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goCancel
    }
  }, [_vm._v("取消")])], 1), _vm._v(" "), (!_vm.resultstatus && _vm.searchHistory.length != 0) ? _c('div', {
    staticClass: "search-history"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("搜索历史"), _c('img', {
    attrs: {
      "src": "/static/images/delete.png",
      "alt": "",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.showDialog = true
      }
    }
  })]), _vm._v(" "), _c('ul', [_vm._l((_vm.showHistory), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('van-icon', {
      staticClass: "clock",
      attrs: {
        "name": "clock-o",
        "mpcomid": '2_' + index
      }
    }), _vm._v(" "), _c('span', {
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectHot(item)
        }
      }
    }, [_vm._v(_vm._s(item))]), _c('van-icon', {
      staticClass: "cha",
      attrs: {
        "name": "cross",
        "eventid": '5_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.deleteItem(index)
        }
      }
    })], 1)
  }), _vm._v(" "), (_vm.searchHistory.length > 5) ? _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.seeMore
    }
  }, [_vm._v(_vm._s(_vm.morestatus ? '收起' : '查看更多搜索历史'))]) : _vm._e()], 2)], 1) : _vm._e(), _vm._v(" "), (!_vm.resultstatus) ? _c('div', {
    staticClass: "hot-search"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("热搜场地")]), _vm._v(" "), _vm._l((_vm.hotList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('text', {
      staticClass: "needs-select",
      attrs: {
        "eventid": '7_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectHot(item)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  })], 2) : _vm._e(), _vm._v(" "), (_vm.resultstatus) ? _c('div', {
    staticClass: "search-result"
  }, [_c('p', [_vm._v("名称包含" + _vm._s(_vm.inputvalue) + "的场地")]), _vm._v(" "), _vm._l((_vm.resultList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "content",
      attrs: {
        "eventid": '8_' + index
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
    }, [_vm._v(_vm._s(item.other))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.area + ' | ' + item.num + ' | ' + item.count))])], 1)])
  })], 2) : _vm._e(), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "show": _vm.showDialog,
      "message": _vm.dialogMsg,
      "title": "清除搜索历史",
      "showCancelButton": true,
      "eventid": '9',
      "mpcomid": '4'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a3c7d4a", esExports)
  }
}

/***/ })

},[88]);