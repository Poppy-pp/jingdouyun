<!-- 鲸选-首页 -->
<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <div class="search-box">
      <span @click="goCityIndex">{{ addr }}<img src="../../../static/images/jiantou-white.png"></span>
      <p class="input">
        <van-icon name="search" />
        <input type="text" placeholder="搜索您心仪的场地" placeholder-style="color:#ffffff" @click="goSearch">
      </p>
      <img class="adviser" src="../../../static/images/adviser.png" alt="" @click="onPhoneCall">
    </div>
    <!-- 轮播 --> 
    <Swiper :images="images"/>
    <!-- 鲸鸿一撇 -->
    <div class="hot-box" >
      <p class="title-box"> <img src="../../../static/images/qipao.png" > 鲸鸿·一瞥</p>
      <div class="hot-item" v-for="(item,index) in hotList" :key="index" @click="goHot(item.title)">
        <image :src="item.url" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <!-- 场地筛选 -->
    <div class="site">
      <p class="title-box"> <img src="../../../static/images/qipao.png" > 场地筛选</p>
      <div :class="isTop ? 'search searchTop' : 'search'">
        <span v-for="(item,index) in searchTitle" :key="index" @click="chooseSearch(item)">{{ item }}<img src="../../../static/images/jiantou-gray.png"></span>
        <p class="notify" v-if="showNotify">已为您搜索符合条件的结果</p>
        <!-- 弹窗 -->
        <van-popup :show="showPopup" position="top" @close="showPopup = false" class="search-popup" overlay-style="position:absolute;top:60px;height:1400px;" >
          <!-- 区域 -->
          <van-tree-select v-if="chooseSearchTitle == '区域'" :items="areas" :main-active-index="mainActiveIndex" :active-id="activeId" @clickNav="onClickNav" @clickItem="onClickItem"/>
          <!-- 类型 -->
          <div class="needs-box" v-if="chooseSearchTitle == '类型'">
            <block v-for="(item, index) in typeList" :key="index">
              <text :class="item.isSelect ? 'needs-active' : 'needs-select'" @click='selectType(index)'>{{item.title}}</text>
            </block>
          </div>
          <!-- 面积/人数/价格 -->
          <div class="action-box" v-if="chooseSearchTitle != '区域' && chooseSearchTitle != '类型'">
            <ul>
              <li v-for="(item,index) in actions" :key="index" @click="selectAction(item)">{{ item.name }}</li>
            </ul>
          </div>
        </van-popup>
      </div>
      <div class="site-box">
        <ul v-if="siteList.length != 0">
          <li v-for="(item,index) in siteList" :key="index" @click="goSiteDetail">
            <img src="../../../static/images/default.png">
            <div class="right-box">
              <p class="title">{{ item.name }}</p>
              <p class="price">￥{{ item.price }}<span>/天</span> <i>参考价</i></p>
              <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
              <i class="result-title"><img class="address-icon" src="/static/images/address.png" />{{ item.far }}</i>
              <i class="result-title">{{item.addr }}</i>
            </div>

            <div v-if="index == 3" class="middle">
              <p class="one-p">没有找到心仪的场地 ？</p>
              <p class="two-p">让场地顾问1对1免费帮您找</p>
              <button @click="goFindForm">发布需求</button>
            </div>
          </li>
        </ul>
        <div v-else class="no-data-search">
          <p>没有找到心仪的场地？</p>
          <p>让场地顾问1对1免费帮您找~</p>
          <button @click="goFindForm">免费帮我找场地</button>
        </div>
      </div>
      <div v-if="siteList.length != 0" class="no-data">
        <p class="black">没有找到心仪的场地？</p>
        <p class="desc">更多场地资源，让场地顾问1对1免费帮您找</p>
        <button @click="goFindForm">免费帮我找场地</button>
      </div>
      <!-- 吸顶时 显示悬浮按钮 -->
      <button v-if="isTop" class="suspensionBtn" @click="goFindForm">发布场地需求</button>
    </div>
    
    
    <!-- 搜索提示 -->
    <van-toast :show="showToast" :message="toastMsg"/>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";
export default {
  components: { Swiper },
  data() {
    return {
      isTop:false,//是否置顶
      addr:'北京',
      showNotify: false,
      showToast: false,
      toastMsg: '',//提示文字信息
      contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
      images: [
        { url: "../../static/images/banner.png" },
        { url: "../../static/images/banner.png" },
        { url: "../../static/images/banner.png" }
      ],
      hotList: [
        { url :'../../static/images/hot-1.png', title: '合作案例' },
        { url :'../../static/images/hot-2.png', title: '热门场地' },
        { url :'../../static/images/hot-3.png', title: '城市地标' }
      ],
      searchTitle: ['区域','类型','面积','人数','价格'],
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
      showPopup:false,
      //选择的区域——区域下拉
      areas:[
        { text: '不限', children: [  { text: '不限', id: 1, disabled: false },]},
        { text: '附近', children: [  { text: '不限', id: 2, disabled: false },{ text: '500m以内', id: 3, disabled: false },{ text: '1000m以内', id: 4, disabled: false },]},
        { text: '区域', children: [  { text: '不限', id: 5, disabled: false },{ text: '东城区', id: 6, disabled: false },{ text: '武侯区', id: 7, disabled: false },]},
        { text: '地铁', children: [  { text: '不限', id: 8, disabled: false },{ text: '1号线',id: 9, disabled: false  }, { text: '3号线',id: 10, disabled: false  }]},
        { text: '道路', children: [  { text: '不限', id: 12, disabled: false },{ text: '一环', id: 13, disabled: false },{ text: '四环', id: 14, disabled: false },]},
        { text: '商圈', children: [  { text: '总部基地', id: 15, disabled: false }, { text: '中关村', id: 16, disabled: false },{ text: '软件园', id: 17, disabled: false },]},
      ],
      //选择的类型——类型下拉
      typeList: [ {title: "不限", isSelect: false}, {title: "五星酒店", isSelect: false}, {title: "四星酒店", isSelect: false}, {title: "三星酒店", isSelect: false}, 
        {title: "经济酒店", isSelect: false}, {title: "艺术展馆", isSelect: false}, {title: "体育场馆", isSelect: false}, {title: "会议中心", isSelect: false},  
        {title: "商超/综合体", isSelect: false}, {title: "公共空间", isSelect: false}, {title: "特色场地", isSelect: false}, {title: "剧院影院", isSelect: false}, 
        {title: "高端会所", isSelect: false}, {title: "餐厅酒吧", isSelect: false}, 
      ],
      mainActiveIndex: 0,// 左侧高亮元素的index
      activeId: 1,// 被选中元素的id
      chooseSearchTitle:'',//选择的筛选条件下拉
      actions:[],
      area:'',
      type:[],
      size:'',
      num:'',
      price:'',
    };
  },
  methods: {
    // 跳转到选择城市
    goCityIndex(){
      wx.navigateTo({
        url: '/pages/index/cityIndex/main',
      })
    },
    // 跳转到热门/合作案例
    goHot(data){
      if (data == '合作案例') {
        wx.navigateTo({
          url: '/pages/index/cooperateCase/main?title=' + data,
        })
      }else{
        wx.navigateTo({
          url: '/pages/index/hotSite/main?title=' + data,
        })
      }
    },
    // 跳转至场地详情
    goSiteDetail(){
      wx.navigateTo({
        url: '/pages/index/siteDetail/main',
      })
    },
    // 跳转至搜索
    goSearch(){
      wx.navigateTo({
        url: '/pages/index/search/main',
      })
    },
    // 点击筛选下拉菜单
    chooseSearch(data){
      this.chooseSearchTitle = data;
      this.showPopup = true;
      this.actions = [];
      if (data == '面积') {
        this.actions = [  
          { name: '不限' },{ name: '50㎡以下' },{ name: '50㎡-100㎡'},{ name: '100㎡-200㎡'},{ name: '200㎡-500㎡'},{ name: '500㎡-800㎡'},{ name: '800㎡-1000㎡'},{ name: '1000㎡以上'},
        ]
      }else if(data == '人数'){
        this.actions = [  
          { name: '不限' },{ name: '50人以下' },{ name: '50-100人'},{ name: '100-300人'},{ name: '300-500人'},{ name: '500-1000人'},{ name: '1000人以上'},
        ]
      }else if(data == '价格'){
        this.actions = [  
          { name: '不限' },{ name: '1万元以下' },{ name: '1万-5万'},{ name: '5万-10万'},{ name: '10万-20万'},{ name: '20万-30万'},{ name: '30万-50万'},{ name: '50万以上'},
        ]
      }
    },
    // 跳转找场地表单
    goFindForm(){
      wx.navigateTo({
        url: '/pages/findSite/findSiteForm/main'
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
      this.siteList = [];
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
    // 面积、人数、价格——点击选择
    selectAction(item) {
      this.showPopup = false;
      if(this.chooseSearchTitle == '面积'){
        this.size = item.name;
      }else if(this.chooseSearchTitle == '人数'){
        this.num = item.name;
      }else if(this.chooseSearchTitle == '价格'){
        this.price = item.name;
      }
      // 显示提示
      this.showToast = true;
      this.showNotify = true;
      this.toastMsg = '共找到12个场地';
      setTimeout(() => {
        this.showToast = false;
        this.showNotify = false;
      }, 2000);
    },
    // 调出拨打电话
    onPhoneCall(){ 
      wx.makePhoneCall({
        phoneNumber: '010-12345323'
      })
    },
    
  },
  created() {
  },
  //监听屏幕滚动
  onPageScroll(ev) {
    var query = wx.createSelectorQuery()
    query.select('.container').boundingClientRect()
    query.exec((res) => {
      var height = '';//view的高度
      var top = '';//滑动到顶部的距离
      height = res[0].height - wx.getSystemInfoSync().windowHeight;
      top = res[0].top;
      if( top <= -540 ){
        this.isTop = true;
      } 
      if(top > -500){
        this.isTop = false;
      }
   })
  }
};
</script>

<style scoped lang="stylus">
.container{
  position relative
}
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
    width:58%;
    input{
      width: 100%;
      border: none;
      outline: none;
      font-size 12px
      color #ffffff
      border-radius 20px
      background-color #8edafd
      padding 4px 5px 4px 35px
    }
    van-icon{
      position: absolute;
      top: 50%;
      left: 10px;
      color: #ffffff; 
      transform:translateY(-50%);
      height:16px;
    }
  }
  .adviser{
    width 30px
    height 30px
    margin-left auto
  }
}
.title-box{
  font-size 22px
  font-weight 600
  margin-bottom 20px
  color #112334
  position relative
  z-index 1
  img{
    width 35px
    height 35px
    position absolute
    z-index -1
    top -15rpx
  }
}
.hot-box{
  padding 42px 15px 11px
  .hot-item{
    width 130px
    height 83px
    display inline-block
    position relative
    margin-top 10px
    image{
      width 100%
      height 100%
    }
    span{
      position absolute
      left 10px
      bottom 10px
      color #ffffff
      font-size 18px
    }
  }
  :nth-child(2).hot-item{
    width 208px
    height 170px
    margin-right:5px;
    image{
      border-top-left-radius 10px
      border-bottom-left-radius 10px
    }
  }
  :nth-child(3).hot-item{
    position:absolute;
    margin-bottom:5px;
    image{
      border-top-right-radius 10px
    }
    span{
      font-size 14px
    }
  }
  :nth-child(4).hot-item {
    image{
      border-bottom-right-radius 10px
    }
    span{
      font-size 14px
    }
  }
}
.site{
  padding 20px 0
  .title-box{
    padding 0 15px
  }
  .search{
    border-top 1px solid #f3f3f3
    border-bottom 1px solid #f3f3f3
    padding 18px 0
    background-color #ffffff
    position relative
    span{
      width 20%
      text-align center
      font-size 15px;
      color #4f575e
      display inline-block
      img{
        width 10px
        height 8px
      }
    }
    .notify{
      position absolute
      color:#fff;
      text-align:center;
      font-size 12px
      background rgba(0,0,0,0.5)
      width:100%;
      padding:10px 0;
      margin-top:18px;
    }
    .search-popup{
      // position absolute
    }
  }
  .searchTop{
    position:fixed;
    top:50px;
    z-index:10;
    width 100%
  }
  .site-box{
    display: block;
    margin: 0 auto;
    width: 92%;
    border-radius: 7px;
    background-color: #fff;
    padding 0 15px
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
  }
  .no-data{
    margin-top 30px
    text-align center
    font-size 12px
    color #90959a
    .black{
      font-size 16px
      color #000
      font-weight 600
    }
    .desc{
      margin 5px 0
      font-size 22rpx
    }
    button{
      color #11bcfd
      border 1px solid #11bcfd
      border-radius 20px
      background-color #ffffff
      width 38%
      font-size 12px
      margin-top 15px
    }
  }
}
.needs-box{
  padding: 10px
}
.needs-select{
  display: inline-block;
  line-height:42rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  font-size: 24rpx;
  background: #f6f7f8;
  color: #111a34;
  border: none;
  border-radius: 3px;
  width:23%;
  text-align center
}
.needs-active{
  display: inline-block;
  background: #f0f1f1;
  color: #11bcfd;
  font-size: 24rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  border-radius: 16rpx;
  line-height: 42rpx;
  border-radius: 3px;
  width:23%;
  text-align center
}
.action-box{
  ul{
    padding 10px
    li{
      text-align:center;
      padding:13px;
      font-size:15px;
      color:#4f575e;
    }
  }
}
.no-data-search{
  width 100%
  text-align center
  font-size 12px
  color #90959a
  margin:50% 0;
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
.suspensionBtn{
  position fixed
  bottom 3%
  left 50%
  transform translateX(-50%)
  color:#ffffff;
  border:3px solid #a9e5fc;
  background linear-gradient(to right, #02d6fc 0%,#1fa5ff 100%);
  border-radius:40rpx;
  background-color:#fff;
  width:45%;
  font-size:26rpx;
  padding:2px 0;
}
</style>
