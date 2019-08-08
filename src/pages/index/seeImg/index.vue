<!-- 查看图片弹窗 -->
<template>
      <div class="tabs">
         <div class="title">
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
</template>

<script>
import Swiperdetail from "@/components/swiperdetail";
export default {
   data() {
       return {
         images: [
            { url: "/static/images/near.png" },
            { url: "/static/images/cooperate.png" },
         ],
         active:0,
         tabTitle:['视频','图片'],
       }
   },
  components: { Swiperdetail },
  computed:{},
  methods:{
    
  },
  created(){},
}
</script>

<style lang="stylus" scoped>
.tabs{
      position absolute
      top 0
      left 0
      background-color #000
      width:100%;
      height:100%;
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
</style>
