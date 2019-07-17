<!--轮播  -->
<template>
    <swiper @click="goArticle" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" indicator-color="#eaeaea" indicator-active-color="#ffffff">
        <block v-for="(item, index) in images" :key="index">
            <swiper-item>
                <image :src="item.url" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper> 
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    }
  },
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  },
  methods: {
    // 跳转到文章详情
    goArticle(){
      wx.navigateTo({
        url: '/pages/index/articleDetail/main',
      })
    },
  }
};
</script>

<style scoped>
.swiper {
  height: 370rpx !important;
  margin-top: 49px;
}
image {
  height: 100%;
  width: 100%;
}
</style>