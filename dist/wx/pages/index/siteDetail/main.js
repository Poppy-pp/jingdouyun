require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51889e2b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51889e2b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_51889e2b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\siteDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51889e2b", Component.options)
  } else {
    hotAPI.reload("data-v-51889e2b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      touchS: [0, 0], //滑动开始位置x,y
      touchE: [0, 0], //滑动结束位置x,y
      showBtn: false,
      contactActions: [{ name: '010-12345323' }, { name: '呼叫' }],
      images: [{ url: "/static/images/site-detail.png" }, { url: "/static/images/site-detail.png" }, { url: "/static/images/site-detail.png" }],
      smallImgs: [{ url: "/static/images/site1.png" }, { url: "/static/images/site2.png" }, { url: "/static/images/site3.png" }],
      tags: ['场地方正', '网红打卡', '泳池', '无柱'],
      largenfo: [{ desc: '最大面积', value: '2400m' }, { desc: '最大容纳', value: '500人' }, { desc: '空间数量', value: '8间' }, { desc: '客房数量', value: '42间' }],
      needs: ["实名认证", "企业认证"],
      siteList: [{ name: '全场', price: '12000', num: '100人', count: '8间', area: '2400m', tag: '无柱' }, { name: '一楼演艺大厅', price: '12000', num: '200人', count: '8间', area: '2400m', tag: '无柱' }, { name: '朝阳公园第一宴会厅', price: '12000', num: '300人', count: '8间', area: '2400m', tag: '无柱' }, { name: '宴会厅', price: '12000', num: '400人', count: '8间', area: '2400m', tag: '泳池' }, { name: '朝阳公园第二宴会厅', price: '12000', num: '500人', count: '8间', area: '2400m', tag: '无柱' }],
      nearsiteList: [{ name: '华熙LIVE五棵松-凯迪拉克中心', price: '12000', num: '100人', count: '8间', area: '2400m', addr: '朝阳区朝阳北路101号', far: '距市中心 2.32千米', url: "/static/images/near.png" }, { name: '华熙LIVE五棵松-凯迪拉克中心', price: '12000', num: '200人', count: '8间', area: '2400m', addr: '朝阳区朝阳北路101号', far: '距市中心 2.32千米', url: "/static/images/near.png" }, { name: '华熙LIVE五棵松-凯迪拉克中心', price: '12000', num: '300人', count: '8间', area: '2400m', addr: '朝阳区朝阳北路101号', far: '距市中心 2.32千米', url: "/static/images/near.png" }, { name: '华熙LIVE五棵松-凯迪拉克中心', price: '12000', num: '400人', count: '8间', area: '2400m', addr: '朝阳区朝阳北路101号', far: '距市中心 2.32千米', url: "/static/images/near.png" }]
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
    },

    // 查看更多场地空间
    getMore: function getMore() {
      this.siteList.push({ name: '全场', price: '12000', num: '100人', count: '8间', area: '2400m', tag: '无柱' }, { name: '一楼演艺大厅', price: '12000', num: '200人', count: '8间', area: '2400m', tag: '无柱' }, { name: '朝阳公园第一宴会厅', price: '12000', num: '300人', count: '8间', area: '2400m', tag: '无柱' }, { name: '宴会厅', price: '12000', num: '400人', count: '8间', area: '2400m', tag: '泳池' }, { name: '朝阳公园第二宴会厅', price: '12000', num: '500人', count: '8间', area: '2400m', tag: '无柱' });
    },

    // 跳转场地介绍
    goSiteIntroduce: function goSiteIntroduce() {
      wx.navigateTo({
        url: '/pages/index/siteIntroduce/main'
      });
    },

    // 跳转场地主官宣
    goSiteDeclare: function goSiteDeclare() {
      wx.navigateTo({
        url: '/pages/index/siteDeclare/main'
      });
    },

    // 跳转场地空间详情
    goSiteSpace: function goSiteSpace(data) {
      wx.navigateTo({
        url: '/pages/index/siteSpace/main?title=' + data
      });
    }
  },
  created: function created() {},

  //监听屏幕滚动 判断上下滚动
  onPageScroll: function onPageScroll(ev) {
    var _this = this;

    var query = wx.createSelectorQuery();
    query.select('#container').boundingClientRect();
    query.exec(function (res) {
      var height = ''; //view的高度
      var bottom = ''; //滑动到底部的距离
      height = res[0].height - wx.getSystemInfoSync().windowHeight;
      bottom = res[0].bottom - wx.getSystemInfoSync().windowHeight;
      if (bottom < height / 2) {
        //滑动过半屏
        _this.showBtn = true;
      } else {
        _this.showBtn = false;
      }
    });
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "container"
    }
  }, [_c('div', {
    staticClass: "header"
  }, [_c('Swiperdetail', {
    attrs: {
      "images": _vm.images,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "site-info"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("华熙LIVE五棵松-凯迪拉克中心 "), _c('span', [_vm._v("【五星酒店】")])]), _vm._v(" "), _c('p', {
    staticClass: "order-num"
  }, [_vm._v("1231人预定")]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.tags), function(item, index) {
    return _c('button', {
      key: index
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, _vm._l((_vm.largenfo), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v(" " + _vm._s(item.value) + " "), _c('i', [_vm._v(_vm._s(item.desc))])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('i', {
    staticClass: "result-title"
  }, [_c('img', {
    staticClass: "address-icon",
    attrs: {
      "src": "/static/images/address.png"
    }
  }), _vm._v("北京市五道口和平路128号"), _c('br'), _c('span', [_vm._v("距市中心2.32千米")])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/map.png",
      "alt": ""
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "site-declare"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("场地主官宣 "), _c('span', {
    staticClass: "num"
  }, [_vm._v("2")]), _c('i', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goSiteDeclare
    }
  }, [_vm._v("更多"), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '1'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
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
      "eventid": '1'
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
  }, [_vm._v("场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！")]), _vm._v(" "), _c('div', {
    staticClass: "img-group"
  }, _vm._l((_vm.smallImgs), function(item, index) {
    return _c('img', {
      key: index,
      attrs: {
        "src": item.url,
        "alt": ""
      }
    })
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "site-space"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("场地空间 "), _c('span', {
    staticClass: "num"
  }, [_vm._v("5间")])]), _vm._v(" "), _c('div', {
    staticClass: "site-box"
  }, [_c('ul', _vm._l((_vm.siteList), function(item, index) {
    return _c('li', {
      key: index,
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.goSiteSpace(item.name)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": "/static/images/default.png"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "right-box"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.price)), _c('span', [_vm._v("/天")]), _vm._v(" "), _c('i', [_vm._v("参考价")])], 1), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.area + ' | ' + item.num + ' | ' + item.count))]), _vm._v(" "), _c('i', {
      staticClass: "tag"
    }, [_vm._v(_vm._s(item.tag))])], 1)])
  })), _vm._v(" "), _c('p', {
    staticClass: "more",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.getMore
    }
  }, [_vm._v("查看更多场地空间(23)")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "site-introduce"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("场地介绍 "), _c('i', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.goSiteIntroduce
    }
  }, [_vm._v("更多"), _c('van-icon', {
    attrs: {
      "name": "arrow",
      "size": "10px",
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('p', {
    staticClass: "text"
  }, [_vm._v("美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，\n     是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。\n   ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "site-near"
  }, [_c('p', {
    staticClass: "title-p"
  }, [_vm._v("附近热门场地 "), _c('span', {
    staticClass: "num"
  }, [_vm._v("8")])]), _vm._v(" "), _c('div', {
    staticClass: "scroll"
  }, _vm._l((_vm.nearsiteList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "scroll-item"
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "right-box"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_vm._v(_vm._s(item.area + ' | ' + item.num + ' | ' + item.count))]), _vm._v(" "), _c('i', {
      staticClass: "result-title"
    }, [_c('img', {
      staticClass: "address-icon",
      attrs: {
        "src": "/static/images/address.png"
      }
    }), _vm._v(_vm._s(item.far + item.addr))])], 1)])
  }))], 1), _vm._v(" "), (_vm.showBtn) ? _c('p', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.onPhoneCall
    }
  }, [_vm._v("免费咨询场地详情/报价")])], 1) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-icon"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/follow.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/share.png",
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
     require("vue-hot-reload-api").rerender("data-v-51889e2b", esExports)
  }
}

/***/ })

},[101]);