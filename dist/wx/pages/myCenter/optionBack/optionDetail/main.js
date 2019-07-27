require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(156);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d5cf297e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(159);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5cf297e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_d5cf297e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myCenter\\optionBack\\optionDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d5cf297e", Component.options)
  } else {
    hotAPI.reload("data-v-d5cf297e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            textnum: 0, //输入框字数
            des: '', //输入框内容
            imageList: [], //上传图片列表
            mobile: '', //手机号
            title: '', //反馈问题标题
            ischeck: false //选中
        };
    },

    components: {},
    computed: {},
    methods: {
        submit: function submit() {
            wx.navigateTo({
                url: '/pages/myCenter/optionBack/optionOk/main'
            });
        },
        textareaInput: function textareaInput() {
            this.textnum = this.des.length;
        },
        upimage: function upimage() {
            var _this = this;

            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function success(res) {
                    var tempFilePaths = res.tempFilePaths; // tempFilePath可以作为img标签的src属性显示图片
                    _this.imageList = _this.imageList.concat(tempFilePaths);
                }
            });
        },
        check: function check() {
            this.ischeck = !this.ischeck;
        },
        getQuery: function getQuery() {
            var pages = getCurrentPages();
            var currentPage = pages[pages.length - 1];
            var options = currentPage.options;
            this.title = options.title;
        }
    },
    mounted: function mounted() {
        this.getQuery();
        // 初始化
        this.textnum = 0;
        this.des = '';
        this.imageList = [];
        this.mobile = '';
    },
    created: function created() {}
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "content-item"
  }, [_c('span', {
    staticClass: "_bold"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.des),
      expression: "des"
    }],
    staticClass: "content-edit",
    attrs: {
      "maxlength": "200",
      "placeholder": "请填写10个字以上的问题描述以便我们提供更高的帮助",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.des)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.des = $event.target.value
      }, _vm.textareaInput]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "edit-nums"
  }, [_vm._v(_vm._s(_vm.textnum) + "/200")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item"
  }, [_c('span', {
    staticClass: "_bold"
  }, [_vm._v("相关截图（选填）")]), _c('span', {
    staticClass: "content-imageNum"
  }, [_vm._v(_vm._s(_vm.imageList.length) + "/4")])]), _vm._v(" "), _c('div', {
    staticClass: "imagebox"
  }, [_vm._l((_vm.imageList), function(i, index) {
    return _c('div', {
      key: index,
      staticClass: "imageitem"
    }, [_c('img', {
      staticClass: "_image",
      attrs: {
        "src": i
      }
    })])
  }), _vm._v(" "), (_vm.imageList.length < 4) ? _c('div', {
    staticClass: "add",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.upimage
    }
  }, [_c('img', {
    staticClass: "_jia",
    attrs: {
      "src": "/static/images/jia.png"
    }
  })]) : _vm._e()], 2), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "content-item",
    staticStyle: {
      "justify-content": "flex-start"
    }
  }, [_c('span', {
    staticClass: "_bold"
  }, [_vm._v("联系方式")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mobile),
      expression: "mobile"
    }],
    staticClass: "_input",
    attrs: {
      "type": "text",
      "placeholder": "邮箱/手机号",
      "placeholder-style": "color:#c0c0c0",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mobile = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content-item-check"
  }, [(_vm.ischeck == false) ? _c('img', {
    staticClass: "_checked",
    attrs: {
      "src": "/static/images/check.png",
      "eventid": '4'
    },
    on: {
      "click": _vm.check
    }
  }) : (_vm.ischeck == true) ? _c('img', {
    staticClass: "_checked",
    attrs: {
      "src": "/static/images/checked.png",
      "eventid": '3'
    },
    on: {
      "click": _vm.check
    }
  }) : _vm._e(), _vm._v(" "), _c('div', [_vm._v("请填写10个字以上的问题描述以便我们提供更好的帮助")])]), _vm._v(" "), _c('div', {
    staticClass: "subit",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("提交")])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-item-metion"
  }, [_c('div', [_vm._v("输入有效联系方式以便开发者联系你（选择）")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-d5cf297e", esExports)
  }
}

/***/ })

},[155]);