<!-- 场地详情 -->
<template>
   <div class="container" id="container">
      <!-- 头部 -->
      <div class="header">
        <span> <Swiperdetail :images="images"></Swiperdetail></span>
        <div class="right-icon">
          <img :src="isFollow ? '/static/images/follow-yes.png' : '/static/images/follow.png'" alt="" @click="followSiteSpace(spaceListId)">
          <img src="/static/images/share.png" alt="" @click="showShare = true">
        </div>
      </div>
      <!-- 场地信息 -->
      <div class="site-info">
        <p class="title-p">{{ addr.name }} <span>【{{ addr.type }}】</span></p>
        <p class="order-num">{{ addr.order_count }}人预定</p>
        <div class="tags">
          <button v-for="(item,index) in tags" :key="index">{{ item }}</button>
        </div>
        <div class="desc">
          <span v-for="(item,index) in largenfo" :key="index"> {{ item.value }} <i>{{ item.desc }}</i>
          </span>
        </div>
        <div class="address" @click="goMap(addr)">
          <i class="result-title"><img class="address-icon" src="/static/images/address.png" />{{ addr.address }}<br><span>{{ addr.desc  }}</span></i>
          <img src="/static/images/map.png" alt="">
        </div>
      </div>
      <!--场地主官宣 -->
      <div class="site-declare">
        <p class="title-p">场地主官宣 <span class="num">{{user_count}}</span><i @click="goSiteDeclare">更多<van-icon name="arrow" size="10px" /></i></p>
        <div class="person">
          <img class="avatar" src="/static/images/cooperate.png" alt="">
          <span> {{user.name}} <i class="needs" v-for="(item,index) in needs" :key="index">{{ item }}</i><i class="small">{{user.relationship}}</i></span>
          <div class="circle" @click="onPhoneCall(user.mobile)"><img class="phone" src="/static/images/phone-white.png" alt=""></div>
        </div>
        <p class="text">{{user.content}}</p>
        <div class="img-group"><img v-for="(item,index) in smallImgs" :key="index" :src="item.url" alt="" @click="goShowImg"></div>
      </div>
      <!-- 场地空间 -->
      <div class="site-space">
        <p class="title-p">场地空间 <span class="num">{{ siteList.length }} 间</span></p>
        <div class="site-box">
          <ul>
            <li v-for="(item,index) in siteListFive" :key="index" @click="goSiteSpace(item.id)">
              <img :src="item.url">
              <div class="right-box">
                <p class="title">{{ item.name }}</p>
                <p class="price">￥{{ item.price }}<span>/天</span> <i>参考价</i></p>
                <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
                <i class="tag" v-if="item.tag">{{item.tag }}</i>
              </div>
            </li>
          </ul>
          <p class="more" @click="getMore">查看更多场地空间({{ siteList.length }})</p>
        </div>
      </div>
      <!-- 场地介绍 -->
      <div class="site-introduce">
        <p class="title-p">场地介绍 <i @click="goSiteIntroduce">更多<van-icon name="arrow" size="10px" /></i></p>
        <p class="text">美食荟萃的演艺秀场大戏楼坐落于北京东五环京城梨园公园内。是国家一流京剧表演团体演出大戏楼大戏楼将传统的北京戏楼文化重彰于世，
          是北京最大的传统戏楼，名家演绎的国粹京剧，让中外宾客赞不绝口被誉为中国的”红磨坊“。
        </p>
      </div>
      <!-- 附近热门场地 -->
      <div class="site-near">
        <p class="title-p">附近热门场地 <span class="num">{{nearsiteList.length}}</span></p>
        <div class="scroll">
          <div class="scroll-item" v-for="(item,index) in nearsiteList" :key="index" @click="goSiteDetail(item.id)">
            <img :src="item.url" alt="">
            <div class="box">
              <p class="title">{{ item.name }}</p>
              <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
              <i class="result-title"><img class="address-icon" src="/static/images/address.png" />{{ item.far + item.addr }}</i>
            </div>
          </div>
        </div>
      </div>
      <!-- 免费咨询按钮 -->
      <p class="btn-box" v-if="showBtn"><button class="free-btn" @click="onPhoneCall">免费咨询场地详情/报价</button></p>
      <!-- 分享好友 弹出层 -->
      <van-popup :show="showShare" position="bottom" class="share-pop" @close="showShare = false" round>
        <p class="title">分享至</p>
        <div class="share-item">
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
import Swiperdetail from "@/components/swiperdetail";
import { mapActions, mapState } from "vuex";
export default {
   data() {
       return {
          isFollow:false,
          showShare:false,
          touchS: [0, 0],//滑动开始位置x,y
          touchE: [0, 0],//滑动结束位置x,y
          showBtn:false,
          addr:{
            name: '华熙LIVE五棵松-凯迪拉克中心',
            type: '五星酒店',
            order_count: '1234',
            address:'北京市五道口和平路128号',
            desc:'距市中心2.32千米',
          },
          contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
          images: [
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/5.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/1.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/2.jpg" }
          ],
          smallImgs:[
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/5.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/1.jpg" },
            { url: "http://demo.sc.chinaz.com/Files/DownLoad/webjs1/201801/jiaoben5647/img/2.jpg" }
          ],
          tags: [ '场地方正', '网红打卡', '泳池', '无柱'],
          largenfo: [
            { desc:'最大面积', value: '2400m' },
            { desc:'最大容纳', value: '500人' },
            { desc:'空间数量', value: '8间' },
            { desc:'客房数量', value: '42间' },
          ],
		  user_count: 0,
		  user: {
            name: '蒲蒲',
            relationship: '场地资源方',
			mobile: "1234567",
			content: "场地的位置很好，交通方便，适合大规模的会议、活动。我们随行的同事都对这个场地十分满意，下次有类似的活动需求还会去这里！",
		  },
          needs:[ "实名认证","企业认证"],
          siteList: [
            {name:'全场', price:'12000', num:'100人', count:'8间', area:'2400m', tag:'无柱', url:"/static/images/default.png"},
            {name:'一楼演艺大厅', price:'12000', num:'200人', count:'8间', area:'2400m',  tag:'无柱'},
            {name:'朝阳公园第一宴会厅', price:'12000', num:'300人', count:'8间', area:'2400m',  tag:'无柱'},
            {name:'宴会厅', price:'12000', num:'400人', count:'8间', area:'2400m', tag:'泳池'},
            {name:'朝阳公园第二宴会厅', price:'12000', num:'500人', count:'8间', area:'2400m',  tag:'无柱'},
          ],
          siteListFive:[],//页面显示前五条空间
          nearsiteList: [
            {name:'华熙LIVE五棵松-凯迪拉克中心', price:'12000', num:'100人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米',url: "/static/images/near.png"},
            {name:'华熙LIVE五棵松-凯迪拉克中心', price:'12000', num:'200人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米',url: "/static/images/near.png"},
            {name:'华熙LIVE五棵松-凯迪拉克中心', price:'12000', num:'300人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米',url: "/static/images/near.png"},
            {name:'华熙LIVE五棵松-凯迪拉克中心', price:'12000', num:'400人', count:'8间', area:'2400m', addr:'朝阳区朝阳北路101号', far:'距市中心 2.32千米',url: "/static/images/near.png"},
          ],
          spaceListId: -1,
          Request: this.$api.api.prototype, //请求头
       }
   },
  components: {Swiperdetail},
  computed:{
    ...mapState({
      locationInfo: state => state.locationInfo
    })
  },
  methods:{
    //  查看图片
   goShowImg(e){
        var current = e.target.dataset.src;
        var urlList = [];
        this.smallImgs.forEach((item) => {
          urlList.push(item.url);
        });
        wx.previewImage({
          current: current,//当前点击的图片链接
          urls: urlList //图片数组
        })
    },
   // 跳转至场地详情
    goSiteDetail(id) {
      let form = {
        id: id
      };
      wx.navigateTo({
        url: "/pages/index/siteDetail/main?form=" + JSON.stringify(form)
      });
    },
    // 调出拨打电话
    onPhoneCall(phone){ 
      wx.makePhoneCall({
        phoneNumber: phone
      })
    },
    // 查看更多场地空间
    getMore(){
      this.siteListFive == this.siteList;
    },
    // 跳转场地介绍
    goSiteIntroduce(){
        let form = {
          id:this.spaceListId,
        }
    
      wx.navigateTo({
        url: '/pages/index/siteIntroduce/main?form=' + JSON.stringify(form),
      })
    },
    // 打开地图
    goMap(data){
      wx.openLocation({
        latitude: this.locationInfo.location.lat,
        longitude: this.locationInfo.location.lng,
        scale: 28,
        name: this.locationInfo.formatted_addresses.recommend,
        address: this.locationInfo.address
      })
    },
    // 跳转场地主官宣
    goSiteDeclare(){
      wx.navigateTo({
        url: '/pages/index/siteDeclare/main',
      })
    },
    // 跳转场地空间详情
    goSiteSpace(id){
      let form = {
        id:id,
      }
      wx.navigateTo({
        url: '/pages/index/siteSpace/main?form=' + JSON.stringify(form),
      })
    },
    
    followSiteSpace(id){  
        this.isFollow = !this.isFollow;
        this.Request.addSpaceListKeep(this.globalData.uid,id).then(res =>{
            console.log(res)
            
          }).catch(res =>{
            console.log(res) //失败
          })
    },
  },
  
  mounted() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.spaceListId = JSON.parse(options.form).id;
      
      console.log(this.spaceListId)
      
      this.Request.getSpaceListAddr(this.spaceListId,this.globalData.latitude,this.globalData.longitude).then(res =>{
        console.log(res)
        this.addr = res
        
        
        console.log(this.addr.latitude)
        console.log(this.addr.longitude)
        this.Request.getSpaceListNear(this.spaceListId,
           this.addr.latitude,this.addr.longitude).then(res => {
            console.log(res)
            this.nearsiteList = res;
        }).catch(res => {});
         
      }).catch(res =>{
        console.log(res) //失败
      })
      
      this.Request.getSpaceListImages(this.spaceListId).then(res =>{
        console.log(res)
        this.images = res
      }).catch(res =>{
        console.log(res) //失败
      })
        
      this.Request.getSpaceListTags(this.spaceListId).then(res =>{
        console.log(res)
        this.tags = res
      }).catch(res =>{
        console.log(res) //失败
      })
     
      this.Request.getSiteList(this.spaceListId).then(res =>{
        this.siteList = res
        this.siteListFive = this.siteList.slice(0,5)
      }).catch(res =>{
        console.log(res) //失败
      }) 
      
      this.Request.addSpaceListHistory(this.globalData.uid,this.spaceListId).then(res =>{
        console.log(res)
        
      }).catch(res =>{
        console.log(res) //失败
      })
	  
	  this.Request.getBulletinList(this.spaceListId).then(res =>{
        console.log(res)
		
		this.user_count = res.length
		this.user = []
		this.needs = []
		this.smallImgs = []
		
		if(res.length>0){	
			this.user = res[0]
			this.needs = res[0].needs
			this.smallImgs = res[0].image
		}
      }).catch(res =>{
        console.log(res) //失败
      })
      
  },
  
  created(){
  },
  
  //监听屏幕滚动 判断上下滚动
  onPageScroll(ev) {
    var query = wx.createSelectorQuery()
    query.select('#container').boundingClientRect()
    query.exec((res) => {
      var height = '';//view的高度
      var bottom = '';//滑动到底部的距离
      height = res[0].height - wx.getSystemInfoSync().windowHeight;
      bottom = res[0].bottom - wx.getSystemInfoSync().windowHeight;
      if( bottom < height/2){//滑动过半屏
        this.showBtn = true;
      }else{
        this.showBtn = false;
      }
   })
  },
}
</script>

<style lang="stylus" scoped>
.header{
  position relative
  .right-icon{
    position absolute
    right 15px
    top 10%
    img{
      width 23px
      height 23px
      margin-left:20px;
    }
  }
}
.title-p{
  font-size 19px
  font-weight 600
  margin-bottom:7px;
  span{
    font-size 12px
    font-weight normal
    color #11bcfd
  }
  .num{
    font-size 16px
    margin-left:5px;
    color #8e9398
  }
  i{
    display inline-block
    font-size 12px
    color #8e9398
    margin-left auto
    font-weight normal
  }
}
.site-info{
  padding 15px
  .order-num{
    font-size 12px
    color #90959a
  }
  .tags{
    margin-top:12px;
    button{
      display inline-block
      font-size 22rpx
      color #4f575e
      background-color #f1f2f3
      border-radius 3px
      line-height:23px;
      padding 0 9px
      margin:0 16rpx 10rpx 0;

    }
    button::after{
      border none
    }
  }
  .desc{
    margin-top:15px;
    display flex
    justify-content space-between
    align-items:center;
    padding:0 2px 20px;
    border-bottom 1px solid #f3f3f3
    span{
      font-size 20px
      font-weight 600
      display:inline-block;
      text-align:center;
      color #111a34
    }
    i{
      font-size 12px 
      color #90959a 
      font-weight normal
    }
  }
  .address{
    padding:15px 0;
    display flex
    align-items center
    justify-content space-between
    .result-title{
      font-size 13px
      color #111a34
      span{
        font-size 12px
        color #90959a
        margin-left 14px
        margin-top 5px
      }
    }
    img{
      width 75px
      height 56px
      border-radius 10px
    }
  }
}
.site-declare{
  padding 2px 15px
  .title-p{
    display flex
    align-items:flex-end;
  }
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
        margin-top:6px;
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
    font-size 13px
    color #4f575e
    line-height 20px
  }
  .img-group{
    display flex
    justify-content space-between
    margin-top:10px
    img {
      width 107px
      height 90px
      border-radius 10px
    }
  }
}
.site-space{
  padding 43px 15px 0
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
        padding 18px 0
        display flex
        align-items center
        flex-wrap wrap
        img{
          width 122px
          height 90px
          border-radius 10px
          margin-right 10px
        }
        .right-box{
          width 59%
          .title{
            padding 2px
            font-weight bold
            font-size 16px
            margin-bottom 3px
            white-space: nowrap; 
            overflow: hidden;   
            text-overflow: ellipsis;
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
          .tag{
            font-size 20rpx
            display inline-block
            background-color #f1f2f3
            color #5f666c
            padding:1px 10px;
            border-radius 2px
            margin-left:5px;
          }
        }
      }
      li:last-child{
        border-bottom none
      }
    }
    .more{
      font-size 12px
      color #8e9398
      text-align center
      margin-top 15px
    }
  }
}
.site-introduce{
  padding 43px 15px 0
  .title-p{
    display flex
    align-items:flex-end;
  }
  .text{
    font-size 14px
    color #4f575e
    line-height 24px
    margin-top 20px
  }
}
.site-near{
  padding 43px 15px 0
  margin-bottom:170rpx;
  .scroll{
    overflow-x: scroll;
    white-space: nowrap;
    .scroll-item{
      width 200px
      display inline-block
      margin:12px 15px 15px 0;
      img {
        width 100%
        height 132px
        border-radius 10px 
      }
      .box{
          .title{
            padding 2px
            font-weight bold
            font-size 15px
            margin-bottom 3px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-top:9px;
          }
          .result-title{
            margin-left 4px
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-bottom 3px
            padding 0
            font-size 12px
            color #91969b
          }
          .tag{
            font-size 20rpx
            display inline-block
            background-color #f1f2f3
            color #5f666c
            padding:1px 10px;
            border-radius 2px
            margin-left:5px;
          }
        }
    }
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
}
.container{
  position relative
}
.btn-box{
  width 100%
  height 65px;
  background-color #ffffff
  position fixed 
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  .free-btn{
    background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
    width: 92%;
    color: #fff;
    padding: 6px 0;
    border-radius: 3px;
    font-size 14px
  }
  .free-btn::after{ 
      border: none; 
      outline: none;
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
    padding 10px 80px 20px
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
