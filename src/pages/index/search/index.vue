<!-- 搜索 -->
<template>
   <div class="container">
     <div class="header">
        <van-icon class="search" name="search" />
        <input v-model="inputvalue" type="text" placeholder="搜索您心仪的场地" placeholder-style="color:#8e9398" @input="inputSearch" @confirm="inputEnter">
        <van-icon v-if="inputstatus" class="clear" name="cross" @click="clearInput" />
        <span @click="goCancel">取消</span>
     </div>
     <!-- 搜索历史 -->
     <div v-if="!resultstatus && searchHistory.length != 0" class="search-history">
        <p class="title">搜索历史<img src="/static/images/delete.png" alt="" @click="showDialog = true"></p>
        <ul>
          <li v-for="(item,index) in showHistory" :key="index">
            <van-icon name="clock-o" class="clock" /> <span @click='selectHot(item)'>{{item }}</span><van-icon class="cha" name="cross" @click="deleteItem(index)" />
          </li>
          <p class="more" v-if="searchHistory.length > 5" @click="seeMore">{{ morestatus ? '收起' : '查看更多搜索历史' }}</p>
        </ul>
     </div>
     <!-- 热搜场地 -->
     <div v-if="!resultstatus" class="hot-search">
       <p class="title">热搜场地</p>
       <block v-for="(item, index) in hotList" :key="index">
          <text class="needs-select" @click='selectHot(item.name)'>{{item.name}}</text>
        </block>
     </div>
     <!-- 搜索结果 -->
     <div v-if="resultstatus" class="search-result">
       <p>名称包含{{ inputvalue }}的场地</p>
       <div class="content" v-for="(item,index) in resultList" :key="index" @click="goCaseDetail">
        <img :src="item.url">
        <div class="right-box">
          <p class="title">{{ item.name }}</p>
          <i class="result-title">{{ item.type }}</i>
          <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
        </div>
     </div>
     </div>

     <!-- 清除确认框 -->
      <van-dialog :show="showDialog" :message="dialogMsg" title="清除搜索历史" :showCancelButton="true" @confirm="confirmCancel" @cancel="showDialog = false"/>
   </div>
</template>

<script>
export default {
   data() {
       return {
        hotList:[ '北京鸟巢体育场','北京西郊宾馆', '北京***酒店','北京***酒店' ],
        inputstatus:false,//输入状态，是否输入
        resultstatus:false,
        morestatus:false,
        inputvalue:'',
        resultList:[
          { url:'/static/images/tengxun.png', name:'全场', type:'五星酒店',num:'500人',area:'2400m', count:'13m'},
          { url:'/static/images/tengxun.png', name:'全场', type:'特色场地',num:'2000人' ,area:'2400m', count:'13m'}
        ],
        showHistory:[],
        searchHistory:['北京鸟巢体育场1','鸟巢2','北京鸟巢体育场3','北京鸟巢体育场4','北京鸟巢体育场5','北京鸟巢体育场6'],
        showDialog: false,
        dialogMsg: '清除后不可恢复',
        
        Request: this.$api.api.prototype, //请求头
       }
   },
  components: {},
  computed:{},
  methods:{
    //取消
    goCancel(){
      wx.navigateBack({
        delta: 1
      })
    },
    // 选择热门场地
    selectHot(item){
    
      this.inputvalue = item;
      this.inputEnter();
      this.inputstatus = true;
    },
    // 输入
    inputSearch(e){
      if (e.target.value.length > 0) {
        this.inputstatus = true;//显示清空按钮
         
      }else{
        this.inputstatus = false;
        this.resultstatus = false;
      }
    },
    // 回车
    inputEnter(){
    
        this.Request.getSpaceListSearch(this.inputvalue,"","","","","","").then(res =>{
            console.log(res)
            this.resultList = res
          }).catch(res =>{
            console.log(res) //失败
          })
    
      this.resultstatus = true;//显示结果
      this.searchHistory.push(this.inputvalue);//存入历史
      this.showHistory = this.searchHistory.slice(0,5);//显示前5条数据
    },
    // 查看更多搜索历史
    seeMore(){
      if( this.morestatus ){//收起
        this.morestatus = false;
        this.showHistory = this.searchHistory.slice(0,5);
      }else{//展开
        this.morestatus = true;
        this.showHistory = this.searchHistory;
      }
    },
    // 删除历史
    confirmCancel(){
      this.searchHistory = '';
      this.showHistory = '';
    },
    // 删除某一项
    deleteItem(index){
      this.searchHistory.splice(index,1);
      this.showHistory = this.searchHistory.slice(0,5);
    },
    // 清空
    clearInput(){
      this.inputstatus = false;
      this.resultstatus = false;
      this.inputvalue = '';
    },
  },
  mounted() {
  
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      
      this.Request.getSpaceListHot(options.city).then(res =>{
        console.log(res)
        this.hotList = res
      }).catch(res =>{
        console.log(res) //失败
      })
  },
  created(){
    this.showHistory = this.searchHistory.slice(0,5);
  }
}
</script>

<style lang="stylus" scoped>
.container{
  padding 14px 15px
  .header{
    display flex
    justify-content flex-start
    align-items center
    position relative
    margin-bottom 3px
    input{
      width: 77%;
      border: none;
      outline: none;
      font-size 12px
      color #8e9398
      border-radius 20px
      background-color #f6f7f8
      padding 4px 5px 4px 35px
      margin-right 10px
    }
    .search{
      position: absolute;
      top: 50%;
      left: 10px;
      color: #8e9398; 
      transform:translateY(-50%);
      height:16px;
    }
    .clear{
      position: absolute;
      top: 50%;
      right: 14%;
      color: #8e9398; 
      transform:translateY(-50%);
      height:16px;
      z-index:10;
    }
    span{
      font-size 12px
      color #8e9398
    }
  }
  .hot-search{
    margin-top:25px;
    .title{
      font-size 16px
      color #8e9398
      margin-bottom:16px;
    }
    .needs-select{
      display: inline-block;
      line-height:42rpx;
      padding: 14rpx 26rpx;
      margin: 10rpx 10rpx;
      font-size: 26rpx;
      background: #f6f7f8;
      color: #545b6d;
      border: none;
      border-radius: 3px;
      width:39%;
      text-align center
      font-weight bold
    }
  }
  .search-result{
    margin-top:23px
    padding-left 5px
    p{
      font-size 16px
      color #8e9398
    }
    .content{
      padding 40rpx 0
      border-bottom 1px solid #f3f3f3
      display flex
      align-items center
      flex-wrap wrap
      img{
        width 85px
        height 65px
        border-radius 10px
        margin-right 10px
      }
      .right-box{
        .title{
          padding 0 2px
          font-weight bold
          font-size 16px
          margin-bottom 20rpx
          color #111a34
        }
        .result-title{
          margin-left 4px
          margin-bottom 3px
          padding 0
          font-size 22rpx
          color #91969b
        }
        .result-title:nth-child(3){
          font-size 24rpx
        }
      }
    }
    :last-child.content{
      border-bottom none
    }
  }
  .search-history{
    margin-top:24px;
    .title{
      font-size 16px
      color #8e9398
      margin-bottom:22rpx;
      display flex
      justify-content space-between
      align-items center
      img{
        width 36rpx
        height 36rpx
      }
    }
    ul{
      li{
        color #8e9398
        font-size 14px
        display flex
        align-items center
        padding:7px 0;
        .clock{
          margin-right 10px
          font-size:17px;
          height:16px
        }
        .cha{
          margin-left auto
          font-size:17px;
          height:16px
        }
      }
      .more{
        font-size:13px;
        margin-top:37px;
        color #8e9398
        text-align center
      }
    }
  }
}
</style>
