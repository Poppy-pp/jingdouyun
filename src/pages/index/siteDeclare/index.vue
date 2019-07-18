<!-- 场地主官宣 -->
<template>
   <div class="container">
      <div class="box">
         <div class="person">
            <img class="avatar" src="/static/images/avatar.jpg" alt="">
            <span> 蒲蒲 <i class="needs" v-for="(item,index) in needs" :key="index">{{ item }}</i><i class="small">场地资源方</i></span>
            <div class="circle" @click="showContact = true"><img class="phone" src="/static/images/phone-white.png" alt=""></div>
         </div>
         <p class="text">场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！</p>
         <span @click="showBigImg = true"><Swiperdetail :images="images" :status="status"></Swiperdetail></span>
      </div>
      
      <div class="box">
         <div class="person">
            <img class="avatar" src="/static/images/avatar.jpg" alt="">
            <span> 蒲蒲 <i class="needs" v-for="(item,index) in needs" :key="index">{{ item }}</i><i class="small">场地资源方</i></span>
            <div class="circle" @click="showContact = true"><img class="phone" src="/static/images/phone-white.png" alt=""></div>
         </div>
         <p class="text">场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！</p>
         <span @click="showBigImg = true"><Swiperdetail :images="images" :status="status"></Swiperdetail></span>
      </div>

      <!-- 电话 弹出层-->
      <van-action-sheet :show="showContact" :actions="contactActions" @select="onSelectContact" @cancel="showContact = false" cancel-text="取消" /> 
      <!-- 查看图片弹窗 -->
      <div class="tabs" v-show="showBigImg" >
         <div class="title">
            <img class="close" src="/static/images/close.png" @click="showBigImg = false"/>
            <p>
               <span v-for="(title,index) in tabTitle" @click="active=index" :class="{active:active == index}" :key="index" >{{title}}</span>
            </p>
         </div>
         <div v-show="active == 0" class="content">
            <img src="/static/images/site-introduce.png" alt="">
            <img class="play" src="/static/images/play.png" alt="">
         </div>
         <div v-show="active == 1" class="content">
            <Swiperdetail :images="images" :noplay="true"></Swiperdetail>
         </div>
      </div>   
   </div>
</template>

<script>
import Swiperdetail from "@/components/swiperdetail";
export default {
   data() {
       return {
         needs:[ "实名认证","企业认证"],
         showContact:false,
         contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
         images: [
            { url: "/static/images/site-introduce.png" },
            { url: "/static/images/site-detail.png" },
            { url: "/static/images/site-detail.png" }
         ],
         status:true,
         showBigImg:false,
         active:0,
         tabTitle:['视频','图片'],
       }
   },
  components: { Swiperdetail },
  computed:{},
  methods:{
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
   padding 10px 15px
   position relative
   .box{
      padding 10px 15px 25px
      border-bottom 1px solid #f3f3f3
      .person{
         padding 18px 0
         display flex
         justify-content flex-start
         .avatar {
            width 50px
            height 50px
            border-radius 50%
         }
         span{
            margin-left: 10px;
            font-size:16px;
            .needs{
            font-size 20rpx
            display inline-block
            background-color #dcf3fc
            color #26c1fd
            padding:1px 10px;
            border-radius 2px
            margin-left:10px;
            }
            .small{
            font-size 22rpx
            color #9a9fa3
            margin-top:8px;
            }
         }
         .circle{
            width 35px
            height 35px
            background-color #11bcfd
            border-radius 50%
            display flex
            justify-content center
            align-items center
            margin-left auto
            .phone{
            width 20px
            height 20px
            }
         }
         }
         .text{
         font-size 14px
         color #4f575e
         line-height 24px
         margin-bottom 12px
      }
   }
   .tabs{
      position absolute
      top 0
      left 0
      padding 20px 0
      background-color #000
      width:100%;
      height:100%;
      .close{
         width 20px
         height 20px
         float:left;
      }
      .title{
         width 92% !important
         color #ffffff
         font-size:15px;
         padding:5px 15px;
         text-align:center;
         span{
            margin:0 10px;
            padding-bottom:5px;
         }
         .active{
            border-bottom 1px solid #ffffff
         }
      }
      .content{
         width 100%
         margin-top 35%
         position relative
         img{
            width 100%
         }
         .play{
            width 50px
            height 50px
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
         }
      }
   }
}
</style>
