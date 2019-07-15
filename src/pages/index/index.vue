<!-- 鲸选-首页 -->
<template>
  <div class="container" >
    <!-- 头部搜索框 -->
    <div class="search-box">
      <span @click="goCityIndex">{{ addr }}<img src="../../../static/images/jiantou-white.png"></span>
      <p class="input">
        <van-icon name="search" />
        <input type="text" placeholder="搜索您心仪的场地" placeholder-style="color:#ffffff">
      </p>
      <img class="adviser" src="../../../static/images/adviser.png" alt="">
    </div>
    <!-- 轮播 --> 
    <Swiper :images="images"/>
    <!-- 鲸鸿一撇 -->
    <div class="hot-box" >
      <p class="title-box"> <img src="../../../static/images/qipao.png" > 鲸鸿一撇</p>
      <div class="hot-item" v-for="(item,index) in hotList" :key="index">
        <image :src="item.url" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <!-- 场地筛选 -->
    <div class="site">
      <p class="title-box"> <img src="../../../static/images/qipao.png" > 场地筛选</p>
      <div class="search">
        <span v-for="(item,index) in searchTitle" :key="index" @click="chooseSearch(item)">{{ item }}<img src="../../../static/images/jiantou-gray.png"></span>
      </div>
      <div class="site-box">
        <ul>
          <li v-for="(item,index) in siteList" :key="index">
            <img src="../../../static/images/default.png">
            <div class="right-box">
              <p class="title">{{ item.name }}</p>
              <p class="price">￥{{ item.price }}<i>参考价</i></p>
              <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
              <i class="result-title"><van-icon name="location-o" />{{ item.far }}</i>
              <i class="result-title">{{item.addr }}</i>
            </div>

            <div v-if="index == 3" class="middle">
              <p class="one-p">没有找到心仪的场地 ？</p>
              <p class="two-p">让场地顾问1对1免费帮您找</p>
              <button @click="goFindForm">发布需求</button>
            </div>
          </li>
        </ul>
      </div>
      <div class="no-data">
        <p class="black">没有找到心仪的场地？</p>
        <p>更多场地资源，让场地顾问1对1免费帮您找</p>
        <button @click="goFindForm">免费帮我找场地</button>
      </div>
    </div>
    
    <!-- 弹窗 -->
    <van-popup :show="showPopup" position="top" @close="showPopup = false" >
      <!-- 区域 -->
      <van-tree-select v-if="chooseSearchTitle == '区域'" :items="areas" :main-active-index="mainActiveIndex" :active-id="activeId" @clickNav="onClickNav" @clickItem="onClickItem"/>
      <!-- 类型 -->
      <div class="needs-box" v-if="chooseSearchTitle == '类型'">
        <block v-for="(item, index) in typeList" :key="index">
          <text :class="item.isSelect ? 'needs-active' : 'needs-select'" @click='selectType(index)'>{{item.title}}</text>
        </block>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";
export default {
  components: { Swiper },
  data() {
    return {
      addr:'北京',
      images: [
        { url: "../../static/images/banner.png" },
        { url: "../../static/images/banner.png" },
        { url: "../../static/images/banner.png" }
      ],
      hotList: [
        { url :'../../static/images/hot-1.png', title: '热门场地' },
        { url :'../../static/images/hot-2.png', title: '特价专区' },
        { url :'../../static/images/hot-3.png', title: '点击榜' },
        { url :'../../static/images/hot-4.png', title: '城市地标' }
      ],
      searchTitle: ['区域','类型','面积','人数','价格'],
      siteList: [
        {name:'朝阳公园', price:'12000/天', num:'100人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'200人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'300人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'400人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'500人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'600人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'700人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
        {name:'朝阳公园', price:'12000/天', num:'800人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米'},
      ],
      showPopup:false,
      //选择的区域——区域下拉
      area:'',
      areas:[
        { text: '不限', children: [  { text: '不限', id: 1, disabled: false },]},
        { text: '附近', children: [  { text: '不限', id: 2, disabled: false },{ text: '500m以内', id: 3, disabled: false },{ text: '1000m以内', id: 4, disabled: false },]},
        { text: '区域', children: [  { text: '不限', id: 5, disabled: false },{ text: '东城区', id: 6, disabled: false },{ text: '武侯区', id: 7, disabled: false },]},
        { text: '地铁', children: [  { text: '不限', id: 8, disabled: false },{ text: '1号线',id: 9, disabled: false  }, { text: '3号线',id: 10, disabled: false  }]},
        { text: '道路', children: [  { text: '不限', id: 12, disabled: false },{ text: '一环', id: 13, disabled: false },{ text: '四环', id: 14, disabled: false },]},
        { text: '商圈', children: [  { text: '总部基地', id: 15, disabled: false }, { text: '中关村', id: 16, disabled: false },{ text: '软件园', id: 17, disabled: false },]},
      ],
      //选择的类型——类型下拉
      type:[],
      typeList: [ {title: "不限", isSelect: false}, {title: "五星酒店", isSelect: false}, {title: "四星酒店", isSelect: false}, {title: "三星酒店", isSelect: false}, 
        {title: "经济酒店", isSelect: false}, {title: "艺术展馆", isSelect: false}, {title: "体育场馆", isSelect: false}, {title: "会议中心", isSelect: false},  
        {title: "商超/综合体", isSelect: false}, {title: "公共空间", isSelect: false}, {title: "特色场地", isSelect: false}, {title: "剧院影院", isSelect: false}, 
        {title: "高端会所", isSelect: false}, {title: "餐厅酒吧", isSelect: false}, 
      ],
      mainActiveIndex: 0,// 左侧高亮元素的index
      activeId: 1,// 被选中元素的id
      chooseSearchTitle:'',//选择的筛选条件下拉
    };
  },
  methods: {
    // 跳转到选择城市
    goCityIndex(){
      wx.navigateTo({
        url: '/pages/index/cityIndex/main',
      })
    },
    // 点击筛选下拉菜单
    chooseSearch(data){
      this.chooseSearchTitle = data;
      this.showPopup = true;
    },
    // 跳转找场地表单
    goFindForm(){
      wx.navigateTo({
        url: '/pages/findSite/findSiteForm/main',
      })
    },
    // 区域——点击一级菜单
    onClickNav(e) {
      this.mainActiveIndex = e.mp.detail.index;
    },
    // 区域——点击子集
    onClickItem(e) {
      this.activeId = e.mp.detail.id;
      this.showPopup = false;
      // this.area = this.activeId;
    },
    // 类型——点击选择类型
    selectType(index) {
      this.typeList[index].isSelect = !this.typeList[index].isSelect;
      this.type = [];//初始化
      this.typeList.forEach((v,i)=>{
        if(v.isSelect){
          this.type.push(v)
        }
      })
    },
    
  },
  created() {
  }
};
</script>

<style scoped lang="stylus">
.search-box{
  width 95%
  height 30px
  background-color #56c6ff
  padding 10px
  display flex
  align-items center
  position fixed
  top 0
  z-index 10
  span{
    font-size 15px;
    color #ffffff
    display inline-block
    img{
      width 10px
      height 8px
    }
  }
  .input{
    position relative
    margin-left 20px
    input{
      width: 100%;
      border: none;
      outline: none;
      font-size 14px
      color #ffffff
      border-radius 20px
      background-color #8edafd
      padding 3px 5px 3px 35px
    }
    van-icon{
      position: absolute;
      top: 8px;
      left: 10px;
      color: #ffffff; 
    }
  }
  .adviser{
    width 30px
    height 30px
    margin-left auto
  }
}
.title-box{
  font-size 18px
  font-weight bold
  margin-bottom 10px
  position relative
  z-index 1
  img{
    width 30px
    height 30px
    position absolute
    z-index -1
    top -5px
  }
}
.hot-box{
  padding 20px 10px
  .hot-item{
    width 50%
    height 120px
    display inline-block
    position relative
    image{
      width 100%
      height 100%
    }
    span{
      position absolute
      left 10px
      bottom 10px
      color #ffffff
      font-size 15px
    }
  }
  :nth-child(2) image{
    border-top-left-radius 10px
  }
  :nth-child(3) image{
    border-top-right-radius 10px
  }
  :nth-child(4){
    top:-5px;
    image{
      border-bottom-left-radius 10px
    }
  } 
  :nth-child(5){
    top:-5px;
    image{
      border-bottom-right-radius 10px
    }
  } 
}
.site{
  padding 20px 10px
  .search{
    border-top 1px solid #f3f3f3
    border-bottom 1px solid #f3f3f3
    padding 15px 0
    span{
      width 20%
      text-align center
      font-size 15px;
      color #6f757b
      display inline-block
      img{
        width 10px
        height 8px
      }
    }
  }
  .site-box{
    display: block;
    margin: 0 auto;
    width: 95%;
    border-radius: 10px;
    background-color: #fff;
    padding: 10px 0;
    .result-title{
      font-size 15px
      color #90959a
      padding 5px 0
      margin-bottom 5px
    }
    ul{
      li{
        border-bottom 1px solid #f3f3f3
        padding 15px 0
        display flex
        align-items center
        flex-wrap wrap
        img{
          width 120px
          height 100px
          border-radius 10px
          margin-right 10px
        }
        .right-box{
          .title{
            padding 2px
            font-weight bold
            font-size 16px
          }
          .price{
            font-size 18px
            color #11bcfd
            display flex
            align-items center
            i{
              color #111a34
              font-size 12px
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
      .middle{
        background: linear-gradient(to right, #94eafe 0%,#24a8ff 100%);
        padding 20px 10px
        border-radius 5px
        text-align center
        color #ffffff
        width 100%
        margin-top 20px
        .one-p{ 
          font-size 16px
        }
        .two-p{ 
          font-size 12px
        }
        button{
          width 40%
          color:#11bcfd;
          font-size 15px
          border-radius 3px
          margin-top 10px
        }
        button::after{
          border none
        }
      }
    }
  }
  .no-data{
    margin-top 20px
    text-align center
    font-size 12px
    color #90959a
    .black{
      font-size 15px
      color #000
    }
    p{
      margin-bottom 5px
    }
    button{
      color #11bcfd
      border 1px solid #11bcfd
      border-radius 20px
      background-color #ffffff
      width 50%
      font-size 15px
      margin-top 20px
    }
  }
}
.needs-box{
  padding: 10px
}
.needs-select{
  display: inline-block;
  line-height: 50rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  font-size: 26rpx;
  background: #f6f7f8;
  color: #999;
  border: none;
  border-radius: 3px;
  width:23%;
  text-align center
}
.needs-active{
  display: inline-block;
  background: #f0f1f1;
  color: #11bcfd;
  font-size: 26rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  border-radius: 16rpx;
  line-height: 50rpx;
  border-radius: 3px;
  width:23%;
  text-align center
}
</style>
