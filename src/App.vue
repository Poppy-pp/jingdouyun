<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    wx.hideTabBar()
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.container .title-radius{
  padding: 5px 0 45px 0;
  background-color: #56c6ff;
  position: relative;
  width: 105%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top:0;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.container .title-radius .title-text{
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}
.divider{
  text-align: center;
  font-size: 13px;
  color: #333333;
  font-weight: 600;
}
.address-icon{
  width: 15px !important;
  height: 15px !important;
  margin-bottom: -3px;
  margin-right: 0 !important;
}
</style>
