import Vue from 'vue'
import App from './App'
import store from './store/index'


Vue.config.productionTip = false
App.mpType = 'app'

import api from './utils/api'
Vue.prototype.$api = api
Vue.prototype.$store = store;
wx.hideTabBar()
const app = new Vue(App)
app.$mount()

getApp().globalData = {
  uid: '1234567890'
}
Vue.prototype.globalData = getApp().globalData
