<!-- 活动预算 -->
<template>
   <div class="container">
     <ul>
       <li v-for="(item,index) in priceActions" :key="index" @click="chooseItem(item,index)" :class="curIndex == index ? 'active' : ''">{{ item.name }}</li>
     </ul>
   </div>
</template>

<script>
export default {
   data() {
       return {
          curIndex:0,
          priceActions: [
            { name: "不限" },
            { name: "1万元以下" },
            { name: "1万-5万" },
            { name: "5万-10万" },
            { name: "10万-20万" },
            { name: "20万-30万" },
            { name: "30万-50万" },
            { name: "50万以上" }
          ],
       }
   },
  components: {},
  computed:{},
  methods:{
    // 确认选择
    chooseItem(item,index){
      this.curIndex = index;//点击的index
      // 带参返回上一页
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];  //上一个页面
      prevPage.setData({//往上一页传递的参数值
        price: item.name,
      })
      wx.navigateBack({
        delta: 1
      })
    },
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
  ul{
    margin-top 68rpx
    li{
      padding 34rpx 10px
      text-align:center;
      font-size:32rpx;
      color #111a34
    }
    .active{
        color #11bcfd
    }
  }
}
</style>
