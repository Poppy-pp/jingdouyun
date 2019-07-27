require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([22],{

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(44);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_35226836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(47);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-35226836"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_35226836_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\findSite\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35226836", Component.options)
  } else {
    hotAPI.reload("data-v-35226836", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_area__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      active: 0,
      touchS: [0, 0], //滑动开始位置x,y
      touchE: [0, 0], //滑动结束位置x,y
      tabTitle: ["场地顾问推荐", "鲸灵智能推荐"],
      showHistory: false,
      showArea: false,
      showDate: false,
      showType: false,
      showSite: false,
      showNum: false,
      showPrice: false,
      showToast: false,
      toastMsg: '', //提示文字信息
      currentDate: new Date().getTime(), //时间戳格式
      areaList: __WEBPACK_IMPORTED_MODULE_1__utils_area__["a" /* default */],
      typeActions: [{ name: '不限' }, { name: '发布会/颁奖/庆典' }, { name: '论坛/推介会/商务会议' }, { name: '讲座/沙龙' }, { name: '工作会/总结会' }, { name: '年会/答谢会' }, { name: '聚会/团建/拓展' }],
      numActions: [{ name: '不限' }, { name: '50人以下' }, { name: '50-100人' }, { name: '100-300人' }, { name: '500-1000人' }, { name: '1000人以上' }],
      priceActions: [{ name: '不限' }, { name: '1万元以下' }, { name: '1万-5万' }, { name: '5万-10万' }, { name: '10万-20万' }, { name: '20万-30万' }, { name: '30万-50万' }, { name: '50万以上' }],
      siteActions: [{ name: '不限' }, { name: '五星酒店' }, { name: '四星酒店' }, { name: '三星酒店' }, { name: '经济酒店' }, { name: '艺术展馆' }, { name: '体育场馆' }, { name: '会议中心' }, { name: '商超/综合体' }, { name: '公共空间' }, { name: '特色场地' }, { name: '剧院影院' }, { name: '高端会所' }, { name: '餐厅酒吧' }],
      historyData: [//历史订单记录
      { addrask: "北京市/北京市/东城区", ordernum: 'JDY12312', status: '1', statusname: '客服已受理', area: "北京市/北京市/东城区", date: "2019/07/11", num: "50人以下", price: "1万-5万", sitetype: "四星酒店", needs: [{ isSelect: true, title: "无柱" }, { isSelect: true, title: "泳池" }] }, { addrask: "四川省/成都市/高新区", ordernum: 'JDY12313', status: '2', statusname: '方案已生成', area: "四川省/成都市/高新区", date: "2019/07/13", num: "50-100人", price: "1万-5万", sitetype: "五星酒店", needs: [{ isSelect: true, title: "温泉" }, { isSelect: true, title: "室外" }] }, { addrask: "四川省/成都市/高新区", ordernum: 'JDY12314', status: '0', statusname: '订单已取消', area: "四川省/成都市/高新区", date: "2019/07/13", num: "50-100人", price: "1万-5万", sitetype: "五星酒店", needs: [{ isSelect: true, title: "温泉" }, { isSelect: true, title: "室外" }] }],
      area: '', //选择的城市信息
      type: '', //活动类型
      date: '',
      num: '',
      price: '',
      phone: '',
      sms: '',
      sitetype: '', //场地类型
      addrask: '', //位置要求
      needs: [], //活动需求
      showneeds: '' //页面显示活动需求
    };
  },

  components: {},
  computed: {},
  methods: {
    // 免费找场地
    findSite: function findSite() {
      var _this = this;

      if (this.area == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动城市';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.type == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动类型';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.date == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动时间';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.num == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动人数';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.price == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动预算';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.phone == '') {
        this.showToast = true;
        this.toastMsg = '请输入联系电话';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else if (this.sms == '') {
        this.showToast = true;
        this.toastMsg = '请输入验证码';
        setTimeout(function () {
          _this.showToast = false;
        }, 2000);
      } else {
        // 跳转至订单详情页面
        var form = {
          area: this.area,
          type: this.type,
          date: this.date,
          num: this.num,
          price: this.price,
          phone: this.phone,
          sms: this.sms
        };
        wx.navigateTo({
          url: '/pages/findSite/freeDetail/main?form=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(form)
        });
      }
    },

    // 智能推荐
    recommendSite: function recommendSite() {
      var _this2 = this;

      if (this.area == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动城市';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.sitetype == '') {
        this.showToast = true;
        this.toastMsg = '请选择场地类型';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.date == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动时间';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.num == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动人数';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.price == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动预算';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.addrask == '') {
        this.showToast = true;
        this.toastMsg = '请选择位置要求';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else if (this.showneeds == '') {
        this.showToast = true;
        this.toastMsg = '请选择活动需求';
        setTimeout(function () {
          _this2.showToast = false;
        }, 2000);
      } else {
        // 跳转至智能推荐页面
        var form = {
          area: this.area,
          sitetype: this.sitetype,
          date: this.date,
          num: this.num,
          price: this.price,
          addrask: this.addrask,
          needs: this.needs
        };
        wx.navigateTo({
          url: '/pages/findSite/mindRecommend/main?form=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(form)
        });
      }
    },

    // 查看订单详情
    goDetail: function goDetail(data) {
      wx.navigateTo({
        url: '/pages/findSite/freeDetail/main?form=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)
      });
    },


    // 位置要求
    goAreaAsk: function goAreaAsk() {
      wx.navigateTo({
        url: '/pages/findSite/areaAsk/main'
      });
    },


    // 活动需求
    goActivityNeeds: function goActivityNeeds() {
      wx.navigateTo({
        url: '/pages/findSite/activityNeeds/main'
      });
    },


    // 滑动开始位置
    touchStart: function touchStart(e) {
      var sx = e.touches[0].pageX;
      var sy = e.touches[0].pageY;
      this.touchS = [sx, sy];
    },

    // 滑动移动位置
    touchMove: function touchMove(e) {
      var sx = e.touches[0].pageX;
      var sy = e.touches[0].pageY;
      this.touchE = [sx, sy];
    },

    // 滑动结束位置
    touchEnd: function touchEnd(e) {
      if (this.touchS[1] > this.touchE[1] + 50) {
        console.log('上滑');
        this.showHistory = true;
      }
    },


    // 输入手机号
    inputPhone: function inputPhone(val) {
      this.phone = val.mp.detail;
    },

    // 输入验证码
    inputSms: function inputSms(val) {
      this.sms = val.mp.detail;
    },


    //   城市
    showPopupArea: function showPopupArea() {
      this.showArea = true;
    },

    // 确认地址
    onAddrConfirm: function onAddrConfirm(val) {
      this.showArea = false;
      this.area = val.target.values[0].name + '/' + val.target.values[1].name + '/' + val.target.values[2].name;
    },

    // 取消地址
    onAddrCancel: function onAddrCancel() {
      this.showArea = false;
    },


    // 日期
    showPopupDate: function showPopupDate() {
      this.showDate = true;
    },

    // 确认日期
    onDateConfirm: function onDateConfirm(val) {
      this.showDate = false;
      this.date = Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTime */])(new Date(val.mp.detail)).split(' ')[0]; //取年月日
    },

    // 取消日期
    onDateCancel: function onDateCancel() {
      this.showDate = false;
    },


    // 活动类型
    showActionType: function showActionType() {
      this.showType = true;
    },
    onSelectType: function onSelectType(item) {
      this.showType = false;
      this.type = item.target.name;
    },
    onCancelType: function onCancelType(item) {
      this.showType = false;
    },


    // 活动人数
    showActionNum: function showActionNum() {
      this.showNum = true;
    },
    onSelectNum: function onSelectNum(item) {
      this.showNum = false;
      this.num = item.target.name;
    },
    onCancelNum: function onCancelNum(item) {
      this.showNum = false;
    },


    // 活动预算
    showActionPrice: function showActionPrice() {
      this.showPrice = true;
    },
    onSelectPrice: function onSelectPrice(item) {
      this.showPrice = false;
      this.price = item.target.name;
    },
    onCancelPrice: function onCancelPrice(item) {
      this.showPrice = false;
    },


    // 场地类型
    showActionSite: function showActionSite() {
      this.showSite = true;
    },
    onSelectSite: function onSelectSite(item) {
      this.showSite = false;
      this.sitetype = item.target.name;
    },
    onCancelSite: function onCancelSite(item) {
      this.showSite = false;
    },


    //初始化数据 
    clearData: function clearData() {
      this.area = '';
      this.type = '';
      this.date = '';
      this.num = '';
      this.price = '';
      this.phone = '';
      this.sms = '';
    }
  },
  mounted: function mounted() {
    this.clearData();
  },
  created: function created() {},
  onShow: function onShow() {
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    if (currPage.data.addrask) {
      //位置要求
      this.addrask = '';
      this.addrask = currPage.data.addrask.text;
    }
    if (currPage.data.showneeds) {
      //活动需求
      this.needs = [];
      this.showneeds = '';
      this.needs = currPage.data.needs;
      this.showneeds = currPage.data.showneeds;
    }
  }
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "title-radius"
  }, [_c('p', {
    staticClass: "title-text"
  }, [_vm._v("活动场地一站式服务")])], 1), _vm._v(" "), (!_vm.showHistory) ? _c('div', {
    attrs: {
      "id": "tab-box"
    }
  }, [_c('ul', {
    staticClass: "tab-tilte"
  }, _vm._l((_vm.tabTitle), function(title, index) {
    return _c('li', {
      key: index,
      class: {
        active: _vm.active == index
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.active = index
        }
      }
    }, [_vm._v(_vm._s(title))])
  })), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active == 0),
      expression: "active == 0"
    }]
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('van-field', {
    attrs: {
      "label": "活动城市*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动城市",
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.showPopupArea
    },
    model: {
      value: (_vm.area),
      callback: function($$v) {
        _vm.area = $$v
      },
      expression: "area"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动类型*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动类型",
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.showActionType
    },
    model: {
      value: (_vm.type),
      callback: function($$v) {
        _vm.type = $$v
      },
      expression: "type"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动时间*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动时间",
      "eventid": '3',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.showPopupDate
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动人数*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动人数",
      "eventid": '4',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.showActionNum
    },
    model: {
      value: (_vm.num),
      callback: function($$v) {
        _vm.num = $$v
      },
      expression: "num"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动预算*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动预算",
      "eventid": '5',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.showActionPrice
    },
    model: {
      value: (_vm.price),
      callback: function($$v) {
        _vm.price = $$v
      },
      expression: "price"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "type": "number",
      "clearable": "",
      "label": "联系电话*",
      "placeholder": "请输入手机号",
      "eventid": '6',
      "mpcomid": '5'
    },
    on: {
      "input": _vm.inputPhone
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  }, [_c('i', {
    staticClass: "sms-code",
    slot: "button"
  }, [_vm._v("短信验证")])], 1), _vm._v(" "), _c('van-field', {
    attrs: {
      "type": "number",
      "clearable": "",
      "label": "验证码*",
      "placeholder": "请输入验证码",
      "eventid": '7',
      "mpcomid": '6'
    },
    on: {
      "input": _vm.inputSms
    },
    model: {
      value: (_vm.sms),
      callback: function($$v) {
        _vm.sms = $$v
      },
      expression: "sms"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.findSite
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("免费帮我找场地")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("5s提交场地需求-10分钟场地顾问致电-25分钟接收场地方案")])], 1)], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.active == 1),
      expression: "active == 1"
    }]
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '15'
    }
  }, [_c('van-field', {
    attrs: {
      "label": "活动城市*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动城市",
      "eventid": '9',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.showPopupArea
    },
    model: {
      value: (_vm.area),
      callback: function($$v) {
        _vm.area = $$v
      },
      expression: "area"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "场地类型*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择场地类型",
      "eventid": '10',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.showActionSite
    },
    model: {
      value: (_vm.sitetype),
      callback: function($$v) {
        _vm.sitetype = $$v
      },
      expression: "sitetype"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动时间*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动时间",
      "eventid": '11',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.showPopupDate
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动人数*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动人数",
      "eventid": '12',
      "mpcomid": '11'
    },
    on: {
      "click": _vm.showActionNum
    },
    model: {
      value: (_vm.num),
      callback: function($$v) {
        _vm.num = $$v
      },
      expression: "num"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动预算*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动预算",
      "eventid": '13',
      "mpcomid": '12'
    },
    on: {
      "click": _vm.showActionPrice
    },
    model: {
      value: (_vm.price),
      callback: function($$v) {
        _vm.price = $$v
      },
      expression: "price"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "位置要求*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择位置要求",
      "eventid": '14',
      "mpcomid": '13'
    },
    on: {
      "click": _vm.goAreaAsk
    },
    model: {
      value: (_vm.addrask),
      callback: function($$v) {
        _vm.addrask = $$v
      },
      expression: "addrask"
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "活动需求*",
      "is-link": "",
      "readonly": "readonly",
      "placeholder": "请选择活动需求",
      "eventid": '15',
      "mpcomid": '14'
    },
    on: {
      "click": _vm.goActivityNeeds
    },
    model: {
      value: (_vm.showneeds),
      callback: function($$v) {
        _vm.showneeds = $$v
      },
      expression: "showneeds"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "free-btn",
    attrs: {
      "eventid": '16'
    },
    on: {
      "click": _vm.recommendSite
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("智能速配")]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v("5s生成场地方案")])], 1)], 1), _vm._v(" "), _c('i', {
    staticClass: "describe"
  }, [_vm._v("今天已有***人发布需求")])], 1)])], 1) : _c('div', {
    staticClass: "history-box"
  }, [_c('div', {
    staticClass: "card add",
    attrs: {
      "eventid": '17'
    },
    on: {
      "click": function($event) {
        _vm.showHistory = false
      }
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "plus",
      "mpcomid": '16'
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "first-title"
  }, [_vm._v("发布需求")])], 1), _vm._v(" "), _vm._l((_vm.historyData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "card",
      attrs: {
        "eventid": '18_' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(item)
        }
      }
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.area))]), _vm._v(" "), _vm._l((item.needs), function(item2, index2) {
      return _c('i', {
        key: index2,
        staticClass: "needs"
      }, [_vm._v(_vm._s(item2.title))])
    }), _vm._v(" "), _c('p', {
      staticClass: "date"
    }, [_vm._v(_vm._s(item.date + ' ' + item.num + ' ' + item.price))]), _vm._v(" "), _c('p', {
      staticClass: "date creat-time"
    }, [_vm._v("2019.05.27 12:32生成方案"), _c('span', {
      class: item.status == '0' ? 'cancel' : ''
    }, [_vm._v(_vm._s(item.statusname))])])], 2)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "footer-box",
    attrs: {
      "eventid": '19'
    },
    on: {
      "touchstart": _vm.touchStart,
      "touchmove": _vm.touchMove,
      "touchend": _vm.touchEnd
    }
  }, [_c('p', {
    staticClass: "divider"
  }, [_vm._v("— 鲸抖云·让活动变得简单 —")]), _vm._v(" "), (!_vm.showHistory) ? _c('i', {
    staticClass: "pull-down"
  }, [_vm._v("上划查看历史需求订单")]) : _vm._e()], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showArea,
      "position": "bottom",
      "round": "",
      "eventid": '21',
      "mpcomid": '18'
    },
    on: {
      "close": function($event) {
        _vm.showArea = false
      }
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "title": "省市区",
      "eventid": '20',
      "mpcomid": '17'
    },
    on: {
      "confirm": _vm.onAddrConfirm,
      "cancel": _vm.onAddrCancel
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showDate,
      "position": "bottom",
      "round": "",
      "eventid": '23',
      "mpcomid": '20'
    },
    on: {
      "close": function($event) {
        _vm.showDate = false
      }
    }
  }, [_c('van-datetime-picker', {
    attrs: {
      "title": "活动时间",
      "type": "date",
      "min-date": _vm.currentDate,
      "eventid": '22',
      "mpcomid": '19'
    },
    on: {
      "confirm": _vm.onDateConfirm,
      "cancel": _vm.onDateCancel
    },
    model: {
      value: (_vm.currentDate),
      callback: function($$v) {
        _vm.currentDate = $$v
      },
      expression: "currentDate"
    }
  })], 1), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.showType,
      "actions": _vm.typeActions,
      "cancel-text": "取消",
      "eventid": '24',
      "mpcomid": '21'
    },
    on: {
      "select": _vm.onSelectType,
      "cancel": _vm.onCancelType
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.showNum,
      "actions": _vm.numActions,
      "cancel-text": "取消",
      "eventid": '25',
      "mpcomid": '22'
    },
    on: {
      "select": _vm.onSelectNum,
      "cancel": _vm.onCancelNum
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.showPrice,
      "actions": _vm.priceActions,
      "cancel-text": "取消",
      "eventid": '26',
      "mpcomid": '23'
    },
    on: {
      "select": _vm.onSelectPrice,
      "cancel": _vm.onCancelPrice
    }
  }), _vm._v(" "), _c('van-action-sheet', {
    attrs: {
      "show": _vm.showSite,
      "actions": _vm.siteActions,
      "cancel-text": "取消",
      "eventid": '27',
      "mpcomid": '24'
    },
    on: {
      "select": _vm.onSelectSite,
      "cancel": _vm.onCancelSite
    }
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "show": _vm.showToast,
      "message": _vm.toastMsg,
      "mpcomid": '25'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-35226836", esExports)
  }
}

/***/ })

},[43]);