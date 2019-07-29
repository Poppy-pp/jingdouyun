<!-- 地图-->
<template>
   <div class="container">
        <map id="map" :longitude="longitude" :latitude="latitude" scale="14"  :markers="markers" show-location :style="'width:100%;height:'+wHeight"  ></map>
        <div class="bottom-box" @click="showType = true">
            <p>{{ address }}</p>
            <span>{{ desc }}</span>
            <img src="/static/images/daohang.png" alt="">
        </div>
        <!-- 地图弹出层-->
        <van-action-sheet :show="showType" :actions="typeActions" @select="onSelectType" @cancel="showType = false" cancel-text="取消" />
   </div>
</template>

<script>
export default {
   data() {
       return {
          showType:false,
          typeActions: [
            { name: '显示路线' },
            { name: '街景' },
            { name: '腾讯地图'},
            { name: '百度地图'},
            { name: 'Apple地图'}
          ],
          wHeight:'',//可视区域高度
          address:'',
          desc:'',
          longitude:'',
          latitude:'',
          markers: [{
            iconPath: "/static/images/location.png",
            id: 0,
            latitude: 30.5530300000,
            longitude: 104.0756230000,
            width: 50,
            height: 50
          }],
       }
   },
  components: {},
  computed:{},
  methods:{
   /* 获取当前路由栈数据 */
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.address = JSON.parse(options.address).address;
      this.desc =  JSON.parse(options.address).desc;
    },
    // 选择地图
    onSelectType(item) {
      this.showType = false;
    },
  },
  mounted () {
    this.getQuery();
  },
  created(){},
  onLoad() {
    wx.getLocation({
      type: 'gcj02',
      altitude:true,//高精度定位
      success: (res) => {//定位成功，更新定位结果
        this.latitude = res.latitude
        this.longitude = res.longitude
        // this.markers[0].latitude = res.latitude
        // this.markers[0].longitude = res.longitude
      },
      fail:function(){//定位失败回调
        wx.showToast({ title:"定位失败", icon:"none" })
      }
    })

    // 获取可视窗口
    wx.getSystemInfo({
        success:  (res) => {
          this.wHeight = res.windowHeight + 'px';
        }
    })
  },
}
</script>

<style lang="stylus" scoped>
.container{
  width 100%
  position relative
  .bottom-box{
    position fixed
    bottom 0
    width 100%
    padding 40rpx 30rpx
    display inline-block
    background-color #ffffff
    color #111a34
    p{
      font-size 20px
      font-weight bold
    }
    span{
      font-size 14px
      color #90959a
    }
    img{
      width:50px;
      height:50px;
      display:inline-block;
      position:absolute;
      right:10%;
      top:50%;
      transform:translateY(-50%);
    }
  }
}
</style>
