<!-- 我的订单 -->
<template>
   <div class="container">
     <div class="Navbar">
         <div :class="active == 0 ? '_NavTab bold' : '_NavTab'" @click="tabchange(0)">顾问推荐
            <div v-if="active == 0" class="_NavTabLine"></div>
         </div>
         <div :class="active == 1 ? '_NavTab bold' : '_NavTab'" @click="tabchange(1)">鲸灵推荐
            <div v-if="active == 1" class="_NavTabLine"></div>
         </div>
     </div>
     <div class="Nav_content">
      <div class="card" v-for="(item,index) in formData" :key="index" @click="goDetail(item)">
         <p class="title">{{ item.area }}</p>
          <i class="needs" v-if="item.needs.title">{{ item.needs.title }}</i>
         <!-- <i class="needs" v-for="(item2,index2) in item.needs" :key="index2">{{ item2.title }}</i> -->
         <p class="date">{{ item.date + '&emsp;' +  item.num + '&emsp;' + item.price }}</p>
         <p class="date creat-time">{{ item.order_date + "提交"}} <text class="type typecolor">{{ item.type }}</text></p>
      </div>

      <div :class="formData.length == 0 ? 'no-data-position' : 'no-data'">
         <p>没有找到场地哦？</p>
         <p>去“找场地”发布你的场地需求吧~</p>
         <button @click="goFindForm">去找场地</button>
      </div>

     </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
          active:0,
          formData:[
            {
               area: "北京市",
               date: "2019.06.03 全天",
               num: "200-300人",
               price: "5000元以下",
               type:"客服已受理",
               needs:[
                  { isSelect:true, title:"发布会/颁奖/庆典"}
               ]
            },
            {
               area: "北京市",
               date: "2019.06.03 全天",
               num: "200-300人",
               price: "5000元以下",
               type:"客服已受理",
               needs:[
                  { isSelect:true, title:"发布会/颁奖/庆典"}
               ]
            },
          ], 
	  
	  Request: this.$api.api.prototype, //请求头
      }
   },
  components: {},
  computed:{},
  methods:{
   //切换导航
   tabchange(tag){
      this.active = tag
   },
   //找场地
   goFindForm(){
      wx.navigateTo({
        url: '/pages/findSite/findSiteForm/main',
      })
   },
   // 查看订单详情
    goDetail(data){
      wx.navigateTo({
        url: '/pages/findSite/freeDetail/main?form=' + JSON.stringify(data),
      })
    },
  },
  mounted () {
  },
  onShow () {
  
    console.log(this.globalData)
    this.Request.getMySpaceOrder(this.globalData.uid).then(res =>{
        this.formData = res
    })
    .catch(res =>{
        console.log(res) //失败
    })
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
   .Navbar{
      width:100%;
      height:44px;
      border-bottom:1px solid #F5F5F5;
      display:flex;
      flex-direction:row;
      line-height:44px;
      text-align:center;
      font-size:16px;
   }
   ._NavTab{
      width:50%;
      height:100%;
      position:relative;
   }
   .bold{
      font-weight bold
   }
   ._NavTabLine{
      position:absolute;
      width: 38px;
      height: 4px;
      left: 40%;
      margin-top:-4px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background: -webkit-linear-gradient(left,#02D5FC,#1FA5FF);
   }
   .Nav_content{
      display: flex;
      flex-direction: column;
      margin: 13px 0 10px 0;
   }
   .card {
      display: block;
      margin: 5px auto 10px;
      width: 85%;
      border-radius: 7px;
      box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.1);
      background-color: #fff;
      padding: 10px 15px;
      position: relative;
      .title{
         padding 5px 0
         font-weight bold
         font-size 15px
      }
      .needs{
         font-size 20rpx
         display inline-block
         background-color #dcf3fc
         color #26c1fd
         padding:1px 10px;
         border-radius 2px
         margin 0px 5px 0px 0
      }
      .date{
         font-size 12px
         color #90959a
         padding 5px 0
         border-bottom 1px solid #f3f3f3
         width 100%
      }
      .creat-time{
         border-bottom none
      }
      .type{
         position absolute
         right 15px
         font-size 12px
      }
      .typecolor{
         color #333333
      }
   }
.no-data-position{
  width 100%
  text-align center
  font-size 12px
  color #90959a
  position:relative;
  margin-top 50%
  p{
    margin-bottom 5px
  }
  button{
    color #11bcfd
    border 1px solid #11bcfd
    border-radius 20px
    background-color #ffffff
    width 35%
    font-size 12px
    margin-top 20px
  }
}
.no-data{
   display none
}
</style>
