<!-- 场地介绍 -->
<template>
   <div class="container">
     <!-- 头部 -->
     <div class="header">
        <img class="banner" :src="image">
        <div class="text">
          <p class="place">{{ addr.title }}</p>
          <p class="title">{{ addr.name }}</p>
          <p class="price">参考价 <span>￥{{ addr.price }}</span>/天</p>
        </div>
     </div>
     <!-- 基础信息 -->
     <div class="info">
       <p class="title-p">基础信息</p>
       <ul>
         <li v-for="(item,index) in info" :key="index">
           {{ item.type }}<span>{{ item.value }}</span>
         </li>
       </ul>
     </div>
     <!-- 最多容纳 -->
     <div class="more">
       <p class="title-p">最多容纳<span class="num">{{addr.num}}人</span></p>
       <div class="scroll">
        <div class="scroll-item" v-for="(item,index) in moreList" :key="index">
          <img :src="item.url" alt="">
          <span>{{ item.title }} <i>{{ item.value }}</i></span>
        </div>
      </div>
     </div>
     <!-- 免费咨询按钮 -->
     <p class="btn"><button class="free-btn" @click="onPhoneCall">免费咨询场地详情/报价</button></p>
      

   </div>
</template>

<script>
export default {
   data() {
       return {
         contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
         
         addr:{
            name: '华熙LIVE五棵松-凯迪拉克中心',
            title: '二楼宴会厅',
            price: '1234',
            num: "500",
          },
         info:[
           {type:'会场面积', value:'2000m'}, {type:'会场层高', value:'30m'}, {type:'所在楼层', value:'1层'}, {type:'场地特点', value:'无柱'},
         ],
         moreList:[
          { url: "/static/images/more1.png", title:'剧院式', value:'300人' },
          { url: "/static/images/more2.png", title:'课桌式', value:'120人' },
          { url: "/static/images/more3.png", title:'宴会式', value:'340人' },
          { url: "/static/images/more4.png", title:'U型', value:'300人' },
          { url: "/static/images/more5.png", title:'鱼骨式', value:'300人' },
          { url: "/static/images/more6.png", title:'董事会', value:'300人' },
          { url: "/static/images/more7.png", title:'酒会式', value:'300人' },
         ],
         
         image: "/static/images/site-detail.png",
         
          Request: this.$api.api.prototype, //请求头
       }
   },
  components: {},
  computed:{},
  methods:{
    /* 获取当前路由栈数据 */
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      
      const sitespaceid = JSON.parse(options.form).id
      
      this.Request.getSiteListDetailAddr(sitespaceid).then(res =>{
        console.log(res)
        this.addr = res
      }).catch(res =>{
        console.log(res) //失败
      })
      
      this.Request.getSiteListDetailInfo(sitespaceid).then(res =>{
        console.log(res)
        this.info = res
      }).catch(res =>{
        console.log(res) //失败
      })
      
      this.Request.getSiteListDetailMoreList(sitespaceid).then(res =>{
        console.log(res)
        this.moreList = res
      }).catch(res =>{
        console.log(res) //失败
      })
      
      this.Request.getSiteListDetailBanner(sitespaceid).then(res =>{
        console.log(res)
        this.image = res
      }).catch(res =>{
        console.log(res) //失败
      })
      
      
      
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: this.addr.title
      })
    
      
      
      
    },
    // 调出拨打电话
    onPhoneCall(){ 
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      })
    },
  },
  mounted () {
    this.getQuery();
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
  .header{
    position relative
    .banner{
      width 100%
      height 250px
    }
    .text{
      position absolute
      bottom:10%;
      left:20px;
      color #ececec
      .place{
        font-size 17px
        margin-bottom 5px
      }
      .title{
        font-size 14px
        margin-bottom 5px
      }
      .price{
        font-size 12px
        span{
          font-size 17px
        }
      }
    }
  }
  .title-p{
    font-size 19px
    font-weight 600
    margin-bottom:7px;
    .num{
      font-size 16px
      margin-left:10px;
      color #8e9398
      font-weight normal
    }
  }
  .info{
    padding 25px 15px
    ul{
      padding-bottom 76rpx
      border-bottom 1px solid #f3f3f3
      li{
        color #8e9398
        font-size 14px
        padding 8px 0 0
        span{
          color #000
          margin-left 20px
        }
      }
    }
  }
  .more{
    padding 7px 15px 60px
    .scroll{
      overflow-x: scroll;
      white-space: nowrap;
      .scroll-item{
        width 92px
        height 70px
        display inline-flex
        justify-content center
        align-items center
        border 1px solid #dddddd
        border-radius 10px
        margin:35px 10px 15px 0;
        position relative
        img {
          width 30px
          height 30px
          border-radius 50%
          border 1px solid #dddddd
          padding 15rpx
          position absolute
          top:-35%;
          left:50%;
          transform:translateX(-50%);
          background-color:#ffffff;
        }
        span{
          text-align center
          font-size 12px
          color #2f3f4e
          margin-top:15px;
          i{
            color #989da1
            margin-top:5px;
          }
        }
      }
    }
    .scroll::-webkit-scrollbar {
      display: none;
    }
  }
  .btn{
    width: 100%;
    background-color #ffffff
    height 63px
    position:fixed;
    bottom:0;
    .free-btn{
      background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
      width: 92%;
      color: #fff;
      padding: 6px 0;
      margin-bottom: 15px;
      border-radius: 3px;
      font-size 14px
    }
    .free-btn::after{ 
      border: none; 
      outline: none;
    }
  }
  
}
</style>
