<template>

  <div class="content">

    <div class="content-item-metion">
        <div class="content-item-title">请选择反馈内容</div>
    </div>

    <div v-for="i in question" :key="index" class="content-item" @click="goDetail(i)">
        <div class="content-item-title">{{i}}</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        question:["无法打开小程序","小程序闪退","卡顿","黑屏白屏","界面错位","界面加载慢","死机","其他异常","意见与建议"]
    }
  },
  components: {},
  computed:{},
  methods:{
    goDetail:function(title){
        wx.navigateTo({
            url: '/pages/myCenter/optionBack/optionDetail/main?title=' +title,
        })
    }
  },
  created(){}
}
</script>

<style scoped lang="stylus">
    .content-item-metion{
        line-height 48rpx 
        height 48rpx
        padding 22rpx 0
        font-size 24rpx
        background-color #F4F5F7
        text-indent 30rpx
        color #B1B2B4
    }
    .content{
        margin 0 
    }
    .content-item{
        line-height 48rpx 
        height 48rpx
        padding 30rpx 30rpx
        font-size 30rpx
        border-bottom 1rpx solid #f6f6f6
        display flex
        flex-direction row
        justify-content space-between
    }
</style>
