<template>
  <div class="container">
    <div class="title-radius">
      <div class="infomation">
        <image src="http://img2.imgtn.bdimg.com/it/u=2667103721,4031219275&fm=26&gp=0.jpg" class="_headimage"></image>
        <div class="info">
          <div class="name">帅哥哥</div>
          <div class="loookinfo" @click="goMyInfo">点击查看个人信息  <van-icon name="arrow" size="8px"/></div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="item" @click="goMyOrder">
        <image src="/static/images/order.png" class="_tabimage"></image>
        <text class="tabText">订单</text>
      </div>
      <div class="item" @click="goHot('我的收藏')">
        <image src="/static/images/shoucang.png" class="_tabimage"></image>
        <text class="tabText">收藏</text>
      </div>
      <div class="item" @click="goHot('我的足迹')">
        <image src="/static/images/foot.png" class="_tabimage"></image>
        <text class="tabText">足迹</text>
      </div>
    </div>
    <div class="card centerNav">
      <div class="Navitem">
        <div class="item_metion">关注企业号/公众号</div>
        <div class="item_value">获取行业最新资讯  <van-icon name="arrow" size="10px" /></div>
      </div>
      <div class="Navitem">
        <div class="item_metion">下载鲸抖云App</div>
        <div class="item_value">全方位活动服务平台  <van-icon name="arrow" size="10px" /></div>
      </div>
      <div class="Navitem" @click="onPhoneCall">
        <div class="item_metion">客服电话</div>
        <div class="item_value">010-1234151  <image src="/static/images/phone.png" class="_phone"></image></div>
      </div> 
      <div class="Navitem" @click="goAboutUs">
        <div class="item_metion">关于我们</div>
        <div class="item_value"><van-icon name="arrow" size="10px" /></div>
      </div>
      <div class="Navitem" @click="goOptionback">
        <div class="item_metion">意见反馈</div>
        <div class="item_value"><van-icon name="arrow" size="10px" /></div>
      </div>
    </div>
    <div class="my-metion">— 鲸抖云·让活动变的简单 —</div>

    <van-tabbar :active="tabactive">
      <van-tabbar-item
        v-for="(item,index) in tabList"
        :key="index"
        :name="index"
        @click="tabChange(item.pagePath)"
      >
        <image slot="icon" :src="item.iconPath" mode="aspectFit" />
        <image slot="icon-active" :src="item.selectedIconPath" mode="aspectFit" />
        {{
        item.text
        }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          text: "找场地",
          pagePath: "/pages/findSite/main",
          iconPath: "/static/tabs/find.png",
          selectedIconPath: "/static/tabs/find-active.png"
        },
        {
          text: "鲸选",
          pagePath: "/pages/index/main",
          iconPath: "/static/tabs/home.png",
          selectedIconPath: "/static/tabs/home-active.png"
        },
        {
          text: "我的",
          pagePath: "/pages/myCenter/main",
          iconPath: "/static/tabs/my.png",
          selectedIconPath: "/static/tabs/my-active.png"
        }
      ],
      tabactive:2,
      contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
    }
  },
  components: {},
  computed:{},
  methods:{
    tabChange(url) {
      wx.switchTab({
        url: url
      });
    },
    // 跳转到热门
    goHot(data){
      wx.navigateTo({
        url: '/pages/index/hotSite/main?title=' + data,
      })
    },
    // 调出拨打电话
    onPhoneCall(){ 
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      })
    },
    // 跳转到我的订单
    goMyOrder(){
      wx.navigateTo({
        url: '/pages/myCenter/myOrder/main',
      })
    },
    // 跳转到关于我们
    goAboutUs(){
      wx.navigateTo({
        url: '/pages/myCenter/aboutUs/main',
      })
    },
    // 跳转到个人信息
    goMyInfo(){
      wx.navigateTo({
        url: '/pages/myCenter/myInfo/main',
      })
    },
    // 跳转意见反馈
    goOptionback(){
      wx.navigateTo({
        url: '/pages/myCenter/optionBack/main',
      })
    }
  }
}
</script>


<style scoped lang="stylus">
.container .title-radius{
  height 120px
  padding-top 0
}
.infomation{
  width:85%;
  height: 63px;
  margin:0 auto;
  display:flex;
  flex-direction:row;
  padding:22px 0;
}
._headimage{
  width:55px;
  height:55px;
  border-radius:50%;
}

.info{
  color:white;
  line-height:31.5px;
  margin-left:15px;
}
.name{
  font-size:22px;
}
.loookinfo{
  font-size:22rpx;
  color:#f2f2f2;
}
.card {
  position relative
  top -66px
  display: block;
  margin: 0 auto;
  width: 85%;
  border-radius: 7px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 15px 15px;
  display:flex;
  flex-direction: row;
  justify-content: space-around ;
}
.item{
  display:flex;
  flex-direction :column;
  text-align:center;
}
._tabimage{
  width:25px;
  height:25px;
  margin-bottom:5px;
}
.tabText{
  font-size:14px;
}
.centerNav{
  margin-top:20px;
  display:flex;
  flex-direction:column;
  padding:0 15px;
}
.Navitem{
  width:96%;
  height:51px;
  margin:0 auto;
  line-height:55px;
  border-bottom:1px solid #f3f3f3;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:2px 0;
}
.Navitem:last-child{
  border-bottom none
}
.item_metion{
  font-size:15px;
  color:#111a34;
  font-weight:bold;
}
.item_value{
  font-size:13px;
  color:#969b9f;
  display:flex;
  align-items:center;
}
._phone{
  width:18px;
  height:18px;
  margin-left:5px;
}
.my-metion{
  color:#969b9f;
  font-size:14px;
  text-align:center;
  padding-bottom:10px;
}

</style>

