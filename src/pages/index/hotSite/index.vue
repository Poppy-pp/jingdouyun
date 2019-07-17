<!-- 热门城市/推荐/我的收藏 -->
<template>
   <div class="container">
     <div class="site-box">
       <div class="scroll" v-if="mystatus">
          <button v-for="(item,index) in tags" :key="index" @click="chooseTags(item)">{{ item }}</button>
       </div>
        <ul>
          <li v-for="(item,index) in siteList" :key="index">
            <img src="../../../../static/images/default.png">
            <div class="right-box">
              <p class="title">{{ item.name }}</p>
              <p class="price">￥{{ item.price }}<span>/天</span> <i>参考价</i></p>
              <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
              <i class="result-title"><van-icon name="location-o" />{{ item.far }}</i>
              <i class="result-title">{{item.addr }}</i>
            </div>
          </li>
        </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
        siteList: [
          {name:'朝阳公园', price:'12000', num:'100人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'200人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'300人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'400人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'500人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'600人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'700人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
          {name:'朝阳公园', price:'12000', num:'800人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        ],
        tags:[ '全部(6)', '体育场馆(1)','酒店(3)',  '会议中心(2)', '泳池(4)', '户外(6)', '健身(6)'],
        mystatus:false,//我的收藏状态
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
      if (options.title == '我的收藏') {
        this.mystatus = true;
      }else{
        this.mystatus = false;
      }
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: options.title
      })
    },
    // 选择查询条件
    chooseTags(item){

    },
  },
  mounted () {
    this.getQuery()
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
  padding 0 10px
}
.site-box{
  display: block;
  margin: 0 auto;
  width: 95%;
  border-radius: 7px;
  background-color: #fff;
  .result-title{
    font-size 13px
    color #90959a
    padding 5px 0
    margin-bottom 5px
  }
  ul{
    li{
      border-bottom 1px solid #f3f3f3
      padding 19px 0
      display flex
      align-items center
      flex-wrap wrap
      img{
        width 120px
        height 105px
        border-radius 10px
        margin-right 10px
      }
      .right-box{
        .title{
          padding 2px
          font-weight bold
          font-size 16px
          margin-bottom 3px
        }
        .price{
          font-size 16px
          color #11bcfd
          display flex
          align-items center
          span{
            font-size 22rpx
          }
          i{
            color #111a34
            font-size 22rpx
            display inline
            margin-left 10px
          }
        }
        .result-title{
          margin-left 4px
          margin-bottom 3px
          padding 0
          font-size 12px
          color #91969b
        }
        .result-title:last-child{
          margin-left 17px
        }
      }
    }
    li:last-child{
      border-bottom none
    }
    .middle{
      background: linear-gradient(to right, #94eafe 0%,#24a8ff 100%);
      padding 25px 10px
      border-radius 7px
      text-align center
      color #ffffff
      width 100%
      margin-top 40px
      .one-p{ 
        font-size 16px
      }
      .two-p{ 
        font-size:22rpx;
        margin-top:5px;
        color #e4f6ff
      }
      button{
        width 38%
        color:#11bcfd;
        font-size 13px
        border-radius 3px
        margin-top 18px
        padding:2px 0;
      }
      button::after{
        border none
      }
    }
  }
  .scroll{
    overflow-x: scroll;
    white-space: nowrap;
    button{
      display inline-block
      font-size 12px
      color #2b344b
      background-color #f6f7f8
      border-radius 20px
      line-height:26px;
      padding 0 15px
      margin 0 5px
    }
    button::after{
      border none
    }
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
}
</style>
