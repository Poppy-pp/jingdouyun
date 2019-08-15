<!-- 案例详情 -->
<template>
   <div class="container">
     <div class="header">
       <img :src="addr.image" alt="">
     </div>
     <div class="content">
        <p class="title-p">{{addr.title}}</p>
        <ul>
          <li v-for="(item,index) in info" :key="index">
            <img :src="item.url" alt="">
            {{ item.type }}<span>{{ item.value }}</span>
          </li>
        </ul>
        <p class="title-p">详细介绍</p>
        <div class="text" v-html="addr.content">  </div>
     </div>
     <button class="free-btn" @click="onPhoneCall">联系场地顾问</button>
   </div>
</template>

<script>
export default {
   data() {
       return {
         
         addr:[],
         info:[
           { url:'/static/images/case1.png',type:'活动类型', value:'会议'},
           { url:'/static/images/case2.png',type:'活动场地', value:'五星酒店'},
           { url:'/static/images/case3.png',type:'活动人数', value:'200'},
         ],
         contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
         
         Request: this.$api.api.prototype, //请求头
       }
   },
  components: {},
  computed:{},
  methods:{
    // 调出拨打电话
    onPhoneCall(){ 
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      })
    },
  },
  mounted () {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;

        this.Request.getCaseListInfo(options.id).then(res =>{
            console.log(res)
            this.info = res
        }).catch(res =>{
            console.log(res) //失败
        })
        
        this.Request.getCaseListIntroduce(options.id).then(res =>{
            console.log(res)
            this.addr = res
        }).catch(res =>{
            console.log(res) //失败
        })

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
  margin:7px 0;
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
    font-size 28rpx
    color #4f575e
    line-height 24px
    margin-top 12px
    overflow hidden
    display:block;
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
