<!-- 场地主官宣 -->
<template>
   <div class="container">
      <div class="box">
         <div class="person">
            <img class="avatar" src="/static/images/cooperate.png" alt="">
            <span> 蒲蒲 <i class="needs" v-for="(item,index) in needs" :key="index">{{ item }}</i><i class="small">场地资源方</i></span>
            <div class="circle" @click="onPhoneCall"><img class="phone" src="/static/images/phone-white.png" alt=""></div>
         </div>
         <p class="text">场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！</p>
         <span><Swiperdetail :images="images" :status="status"></Swiperdetail></span>
      </div>
      
      <div class="box">
         <div class="person">
            <img class="avatar" src="/static/images/cooperate.png" alt="">
            <span> 蒲蒲 <i class="needs" v-for="(item,index) in needs" :key="index">{{ item }}</i><i class="small">场地资源方</i></span>
            <div class="circle" @click="onPhoneCall"><img class="phone" src="/static/images/phone-white.png" alt=""></div>
         </div>
         <p class="text">场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！</p>
         <span><Swiperdetail :images="images" :status="status"></Swiperdetail></span>
      </div>
   </div>
</template>

<script>
import Swiperdetail from "@/components/swiperdetail";
export default {
   data() {
       return {
         needs:[ "实名认证","企业认证"],
         contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
         images: [
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/5.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/1.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/2.jpg" }
         ],
         status:true,
       }
   },
  components: { Swiperdetail },
  computed:{},
  methods:{
     // 调出拨打电话
    onPhoneCall(){ 
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      })
    },
  },
  created(){},
  onReady(){
     this.wHeight = wx.getSystemInfoSync().windowHeight + 'px';
  }
}
</script>

<style lang="stylus" scoped>
.container{
   padding 10px 15px
   position relative
   overflow scroll
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
   
}
</style>
