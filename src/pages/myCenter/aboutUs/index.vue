<!-- 关于我们-->
<template>
   <div class="container">
      <p class="logo"> <img src="/static/images/site1.png" alt=""></p>
      <p class="title">鲸抖云</p>
      <p class="text">鲸抖云，主要以全数据、全整合、全媒体、全渠道为主体的全方位活动服务平台，是中国目前唯一将场地租赁、活动资源、媒介广告、热门IP实现垂直
         领域细分标准和全链路的平台。致力于打造中国价值公共关系的品质服务标杆，做领先于中国公关活动领域的优质资源整合商。<br>
         鲸抖云，适用于互联网、金融、房地产、汽车、科技、快消品、公关等全行业及从业者的活动场地需求、资源需求、媒介需求、IP需求。
      </p>
      <p class="desc">—更多精彩内容请下载鲸抖云APP—</p>
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
  mounted () {
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
   padding 0 15px
   .logo{
      display flex
      justify-content center
      margin-top:26px
      img{
         width 75px
         height 75px
      }
   }
   .title{
      font-size 18px
      font-weight bold
      color #000
      text-align center
      margin-top 44rpx
   }
   .text{
      font-size 14px
      color #4f575e
      margin-top:17px;
      line-height:24px;
   }
   .desc{
      margin-top 30px
      font-size 12px
      color #91969b
      text-align center
   }
}
</style>
