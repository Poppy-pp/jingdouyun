import Vue from 'vue'
import App from './App'
import store from './store/index'
import toast from '../static/vant/toast/toast.js'


Vue.config.productionTip = false
App.mpType = 'app'

import api from './utils/api'
Vue.prototype.$api = api
Vue.prototype.$store = store;
Vue.prototype.$toast = toast;

const app = new Vue(App)
app.$mount()

getApp().globalData = {
  uid: '1234567890'
}
Vue.prototype.globalData = getApp().globalData
