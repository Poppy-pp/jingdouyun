<!-- 找场地-智能推荐 -->
<template>
  <div class="container">
    <div class="card">
      <p class="title">{{ formData.area }}</p>
      <i class="needs" v-for="(item,index) in formData.needs" :key="index">{{ item.title }}</i>
      <p class="date">{{ formData.date + '&emsp;' +  formData.num + '&emsp;' + formData.price }}</p>
      <p class="date creat-time">2019.05.27 12:32生成方案</p>
    </div>

    <div class="site-box" v-if="siteList.length != 0">
      <i class="result-title">已为您精准推荐{{ siteList.length }}个场地</i>
      <ul>
        <li v-for="(item,index) in siteList" :key="index">
          <img src="../../../../static/images/default.png">
          <div class="right-box">
            <p class="title">{{ item.name }}</p>
            <p class="price">￥{{ item.price }}<i>参考价</i></p>
            <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
            <i class="result-title"><van-icon name="location-o" />{{ item.far }}</i>
            <i class="result-title">{{item.addr }}</i>
          </div>
        </li>
      </ul>
      <div class="share" @click="showShare = true">
        <i>分享<br>好友</i>
      </div>
    </div>

    <div :class="siteList.length == 0 ? 'no-data' : 'no-data-position'">
      <p>没有找到心仪的场地？</p>
      <p>让场地顾问1对1免费帮您找~</p>
      <button @click="goFindForm">免费帮我找场地</button>
    </div>

    <!-- 分享好友 弹出层 -->
    <van-popup :show="showShare" position="bottom" class="share-pop" @close="showShare = false">
      <p class="title">分享至</p>
      <div class="share-item">
        <div class="icon-box">
          <img src="../../../../static/images/link.png">
          <i>复制链接</i>
        </div>
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
      //上页面数据
      formData: {
        addrask: "北京市/北京市/东城区",
        area: "北京市/北京市/东城区",
        date: "2019/07/11",
        num: "50人以下",
        price: "1万-5万",
        sitetype: "四星酒店",
        needs:[
          { isSelect:true, title:"无柱"},
          { isSelect:true, title:"泳池"},
        ]
      },
      // 智能推荐的场地
      siteList: [
        {name:'朝阳公园', price:'12000/天', num:'500人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'500人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
      ],
      shareActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
    };
  },
  components: {},
  computed: {},
  methods: {
    /* 获取当前路由栈数据 */
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.formData = JSON.parse(options.form);
    },
    // 跳转找场地表单
    goFindForm(){
      wx.navigateTo({
        url: '/pages/findSite/findSiteForm/main',
      })
    }
  },
  mounted() {
    // this.getQuery();
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
.container{
  padding 10px 0
}
.card {
  display: block;
  margin: 0 auto;
  width: 85%;
  border-radius: 7px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 15px;
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
}
.no-data{
  width 100%
  text-align center
  font-size 12px
  color #90959a
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
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
.no-data-position{
  width 100%
  text-align center
  font-size 12px
  color #90959a
  position:relative;
  margin-top 20px
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
.site-box{
  display: block;
  margin: 0 auto;
  width: 85%;
  border-radius: 7px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 15px;
  margin-top 10px
  .result-title{
    font-size 13px
    color #90959a
    padding 5px 0
  }
  ul{
    li{
      border-bottom 1px solid #f3f3f3
      padding 15px 0
      display flex
      align-items center
      img{
        width 110px
        height 95px
        border-radius 10px
        margin-right 10px
      }
      .right-box{
        .title{
          padding 2px
          font-weight bold
          font-size 13px
          margin-bottom 5px
        }
        .price{
          font-size 13px
          color #11bcfd
          display flex
          align-items center
          i{
            color #111a34
            font-size 20rpx
            display inline
            margin-left 10px
          }
        }
        .result-title{
          margin-left 4px
          margin-bottom 3px
          padding 0
          font-size 12px
        }
        .result-title:last-child{
          margin-left 17px
        }
      }
    }
    li:last-child{
      border-bottom none
    }
  }
  .share{
    width 50px
    height 50px
    position fixed
    right 20px
    bottom 27%
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
    padding 10px 60px 20px
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
