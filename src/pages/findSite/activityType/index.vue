<!-- 活动类型 -->
<template>
   <div class="container">
     <ul>
       <li v-for="(item,index) in typeActions" :key="index" @click="chooseItem(item,index)" :class="curIndex == index ? 'active' : ''">{{ item.name }}</li>
     </ul>
   </div>
</template>

<script>
export default {
   data() {
       return {
          curIndex:0,
          typeActions: [
            { name: "不限" },
            { name: "发布会 / 颁奖 / 庆典" },
            { name: "论坛 / 推介会 / 商务会议" },
            { name: "讲座 / 沙龙" },
            { name: "工作会 / 总结会" },
            { name: "年会 / 答谢会" },
            { name: "聚会 / 团建 / 拓展" }
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
        type: item.name,
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
