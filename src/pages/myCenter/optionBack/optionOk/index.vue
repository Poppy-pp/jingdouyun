<template>
  <div class="container">
      <div class="box">
        <img src="/static/images/ok.png" class="_okimage">
      </div>
      <div class="ok">反馈已提交</div>
      <div class="text">已将您的反馈内容提交给开发者</div>  
      <div class="close" @click="close">关闭</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {},
  computed:{},
  methods:{
    close:function(){
      wx.navigateBack({
        delta: 2
      })
    }
  },
  created(){}
}
</script>

<style scoped lang="stylus">
  .container{
    display flex
    flex-direction column
    margin-top 80px
  }
  .box{
    text-align center
  }
  ._okimage{
    width 100px
    height 100px 
  }
  .ok{
    text-align center
    font-size 36rpx
    margin-top 26rpx
  }
  .text{
    text-align center
    font-size 12px
    color #B9BCBF
    margin-top 66rpx
  }
  .close{
    margin 20px 15px
    height 88rpx
    line-height 88rpx 
    color white 
    font-size 14px 
    text-align center
    border-radius 3px
    background-image linear-gradient(to right, #02D5FC 0%,#1FA5FF 100%);
  }
</style>