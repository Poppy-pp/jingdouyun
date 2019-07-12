<!-- 鲸选-首页 -->
<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <div class="search-box">
      <span @click="goCityIndex">{{ addr }}<img src="../../../static/images/jiantou.png"></span>
      <p class="input">
        <van-icon name="search" />
        <input type="text" placeholder="搜索您心仪的场地" placeholder-style="color:#ffffff">
      </p>
      <img class="adviser" src="../../../static/images/adviser.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      addr:'北京'
    };
  },
  methods: {
    // 跳转到选择城市
    goCityIndex(){
      wx.navigateTo({
        url: '/pages/index/cityIndex/main',
      })
    },
  },

  created() {
  }
};
</script>

<style scoped lang="stylus">
.search-box{
  height 30px
  background-color #56c6ff
  padding 1px 10px 10px
  display flex
  align-items center
  span{
    font-size 15px;
    color #ffffff
    display inline-block
    img{
      width 10px
      height 8px
    }
  }
  .input{
    position relative
    margin-left 20px
    input{
      width: 100%;
      border: none;
      outline: none;
      font-size 14px
      color #ffffff
      border-radius 20px
      background-color #8edafd
      padding 3px 5px 3px 35px
    }
    van-icon{
      position: absolute;
      top: 8px;
      left: 10px;
      color: #ffffff; 
    }
  }
  .adviser{
    width 30px
    height 30px
    margin-left auto
  }
}
</style>
