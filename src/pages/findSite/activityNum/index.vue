<!-- 活动人数 -->
<template>
   <div class="container">
     <ul>
       <li v-for="(item,index) in numActions" :key="index" @click="chooseItem(item,index)" :class="curIndex == index ? 'active' : ''">{{ item.name }}</li>
     </ul>
   </div>
</template>

<script>
export default {
   data() {
       return {
          curIndex:0,
          numActions: [
            { name: "不限" },
            { name: "50人以下" },
            { name: "50-100人" },
            { name: "100-300人" },
            { name: "500-1000人" },
            { name: "1000人以上" }
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
        num: item.name,
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
