<!--图片左右滑动  -->
<template>
  <div class="container">
    <swiper :class="status ? 'swiper declare' : 'swiper'" :indicator-dots="indicatorDots" :autoplay="autoplay" >
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.url" class="slide-image" mode="aspectFill"/>
                <span class="tag">{{ index+1 +'/' + images.length }}</span>
                <div v-if="index == 0 && noplay == false" class="play">
                  <img src="/static/images/play.png" alt="">
                  <span>00'30'</span>
                </div>
            </swiper-item>
        </block>
    </swiper>
  </div>
      
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    },
    status:{
      type: Boolean
    },
    noplay:{
      type: Boolean
    },
  },
  data() {
    return {
      indicatorDots: false,
      autoplay: false,
      showBigImg:false,
      active: 0,
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="stylus">
.swiper {
  height: 250px;
  position relative
  image {
    height: 100%;
    width: 100%;
  }
  .tag{
    position absolute
    right:0;
    bottom 9%
    width 30px
    padding 3px 7px
    font-size 12px
    color #ffffff
    background rgba(0,0,0,0.2)
    text-align center
    border-top-left-radius 10px
    border-bottom-left-radius 10px
    i {
      display inline-block
    }
  }
  .play{
    position absolute
    left 50%
    bottom 7%
    transform translateX(-50%)
    display flex
    align-items center
    img{
      width 30px
      height 30px
    }
    span{
      width 30px
      padding 3px 7px
      font-size 12px
      color #ffffff
      background rgba(0,0,0,0.2)
      text-align center
      border-top-right-radius 10px
      border-bottom-right-radius 10px
    }
  }
}
.declare{
  height: 214px;
  swiper-item{
    border-radius 10px
  }
}
</style>