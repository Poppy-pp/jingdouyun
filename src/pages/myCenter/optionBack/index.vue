<template>

  <div class="content">

    <div class="content-item-metion">
        <div class="content-item-title">请选择反馈内容</div>
    </div>

    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">无法打开小程序</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">小程序闪退</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">卡顿</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">黑屏白屏</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">界面错位</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">界面加载慢</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">死机</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">其他异常</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>
    <navigator url="/pages/myCenter/optionBack/optionDetail/main" class="content-item" hover-class="none">
        <div class="content-item-title">意见与建议</div>
        <van-icon name="arrow" size="12px" color="#D9D9D9" />
    </navigator>

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
