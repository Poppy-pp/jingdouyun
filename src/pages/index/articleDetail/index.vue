<!-- 文章活动详情 -->
<template>
   <div class="container">
     <div class="header">
        <img class="banner" src="/static/images/article-detail.png">
        <p>找不到合适的场地 鲸抖云智能服务帮你找到最合适的场地</p>
        <span>鲸抖云官方App    2019.05.18</span>
     </div>
     <div class="content">
       <span class="title">详情内容</span>
       <div class="text">
         <p class="first">【会议场地规模】</p>
         <p>明确会议场地时间、地点、规模等信息</p>
         <p>这几点是一场会议举办的基本要素。</p>
         <span class="bgcolor">确定会议布局方式</span>
         <p>寻找合适的场地，查询档期和报价</p>
         <img src="/static/images/detail-1.png" alt="">
         <p class="first">【会议场地规模】</p>
         <p class="desc">直接供应商是指酒店、场地的直接拥有者或销售人员，间接供应商则是指会务公司、会场搜索预订网站(如酒店哥哥等)，两者各有利弊。
           但往往与直接供应商联系较为繁琐，间接供应商一般都可以提供完善便利的设备，当然，如何权衡还是要看打击的看法啦！
         </p>
       </div>
     </div>
     <div class="share" @click="showShare = true">
        <i>分享<br>好友</i>
      </div>

      <!-- 分享好友 弹出层 -->
      <van-popup :show="showShare" position="bottom" class="share-pop" @close="showShare = false" round>
        <p class="title">分享至</p>
        <div class="share-item">
          <div class="icon-box">
            <img src="../../../../static/images/wechat.png">
            <i>微信好友</i>
          </div>
          <div class="icon-box">
            <img src="../../../../static/images/friend.png">
            <i>微信朋友圈</i>
          </div>
        </div>
        <button class="cancel" @click="showShare = false">取消</button>
      </van-popup>
   </div>
</template>

<script>
export default {
   data() {
       return {
         showShare: false,
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
.header{
  .banner{
    width 100%
    height 250px
  }
  p{
    font-size 19px
    padding 18px 20px 8px
    color #2c344b
    font-weight 600
  }
  span{
    font-size 12px
    color #93989d
    padding 0 20px
  }
}
.content{
  padding 25px 20px
  .title{
    font-size 16px
    font-weight 600
    border-bottom: 3px solid #68e7fe;
  }
  .text{
    text-align center
    font-size 14px
    margin-top:22px;
    color #4f575e
    p,span{
      line-height 24px
    }
    .first{
      font-weight 600  
      margin-bottom:12px;
      color #2c344b
    }
    .bgcolor{
      background-color #fff3e5
    }
    img{
      width:100%;
      height:192px;
      margin:20px 0;
      border-radius:10px;
    }
    .desc{
      text-align left 
      line-height 23px
    }
  }
}
.share{
  width 50px
  height 50px
  position fixed
  right 20px
  bottom 10%
  background: linear-gradient(to right, #02d4fc 0%,#1caafe 100%);
  border 3px solid #a9e5fc
  border-radius 50%
  display flex
  align-items center
  justify-content center
  line-height 16px
  z-index 10
  i{
    color #ffffff
    font-size 13px
  }
}
.share-pop{
  .title{
    text-align center
    font-size 13px
    color #7f7f7f
    padding 15px 0
  }
  .cancel{
    background-color #f4f5f7
    color #333
    font-size 14px
    padding 15px 0
  }
  button::after{
    border:none
  }
  .share-item{
    display flex
    justify-content space-between
    padding 10px 80px 20px
    .icon-box{
      font-size 12px
      color #444
      display:inline-block;
      text-align center
    }
    img{
      width 20px
      height 20px
      padding 10px
      background-color #f1f2f3
      border-radius 50%
    }
  }
}
</style>
