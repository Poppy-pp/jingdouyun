<!-- 授权 位置 信息-->
<template>
  <van-popup :show="show" position="bottom" round>
    <div class="pop">
      <p class="title"><img src="../../../static/images/logo.png">鲸抖云官方版 申请获得</p>
      <p class="type">获取你的位置信息</p>
      <i class="other">您的位置用于小程序位置接口的效果展示</i>
      <div class="btn">
        <button class="refuse">拒绝</button>
        <button class="allow">允许</button>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
   data() {
       return {
         show: true,
       }
   },
  components: {},
  computed:{},
  methods:{
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.pop{
  padding: 15px 0 40px 0;
}
.pop .title, .pop .type, .pop .other, .pop .btn{
  padding 0 17px
}
.pop .title{
  display flex
  align-items center
  font-size 14px
  color #333333
}
.pop .title img{
  width 20px
  height 20px
  margin-right 5px
}
.pop .type{
  font-size 20px
  margin-top 10px
}
van-cell{
  margin-top 10px
  display:block;
}
.pop .other{
  color #919191
  margin-top 5px
  font-size 12px
}
.pop .btn{
  margin-top 30px
  display flex
  justify-content space-between
}
.pop .refuse, .pop .allow{
  width: 47%;
  display: inline-block;
  font-size: 14px;
  line-height: 35px;
  border-radius 3px
}
.pop .refuse{
  background-color #f2f2f2
  color #06ae56
}
.pop .allow{
  background-color #05c160
  color #ffffff
}
.pop button::after{
  border none
}
</style>
