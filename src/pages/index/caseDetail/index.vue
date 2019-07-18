<!-- 案例详情 -->
<template>
   <div class="container">
     <div class="header">
       <img src="/static/images/cooperate.png" alt="">
     </div>
     <div class="content">
        <p class="title-p">腾讯创投会议</p>
        <ul>
          <li v-for="(item,index) in info" :key="index">
            <img :src="item.url" alt="">
            {{ item.type }}<span>{{ item.value }}</span>
          </li>
        </ul>
     </div>
      <div class="content">
        <p class="title-p">详细介绍</p>
        <p class="text">美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，
          是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。
        </p>
        <img class="img" src="/static/images/site-introduce.png" alt="">
        <p class="text">美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，
          是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。
        </p>
     </div>
     <button class="free-btn" @click="showContact = true">联系场地顾问</button>
     <!-- 电话 弹出层-->
      <van-action-sheet :show="showContact" :actions="contactActions" @select="onSelectContact" @cancel="showContact = false" cancel-text="取消" /> 
   </div>
</template>

<script>
export default {
   data() {
       return {
         info:[
           { url:'/static/images/case1.png',type:'活动类型', value:'会议'},
           { url:'/static/images/case2.png',type:'活动场地', value:'五星酒店'},
           { url:'/static/images/case3.png',type:'活动人数', value:'200'},
         ],
         showContact:false,
         contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
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
  position relative
  height 250px
  img{
    width 100%;
    height 250px
  }
}
.title-p{
  font-size 19px
  font-weight 600
  margin-bottom:7px;
}
.content{
  padding 20px 15px 9px
  ul{
    padding-bottom 30px
    border-bottom 1px solid #f3f3f3
    li{
      color #8e9398
      font-size 14px
      padding 10px 0 2px
      display flex
      align-items center
      span{
        color #000
        margin-left 20px
      }
      img{
        width 35rpx
        height 35rpx
        margin-right 15rpx
      }
    }
  }
  .text{
    font-size 14px
    color #4f575e
    line-height 24px
    margin-top 12px
  }
  .img{
    width 100%
    height 212px
    border-radius:10px;
    margin-top:13px;
  }
}
.free-btn{
  background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
  width: 92%;
  color: #fff;
  padding: 6px 0;
  margin-bottom: 15px;
  border-radius: 3px;
  font-size 14px
  margin-top:37px;
}
.free-btn::after{ 
  border: none; 
  outline: none;
}
</style>
