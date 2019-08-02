<!-- 合作案例 -->
<template>
   <div class="container">
     <div class="header">
       <img src="/static/images/cooperate.png" alt="">
       <p class="title">介绍鲸抖云合作案例优势、实力的文案</p>
     </div>
     <div class="content" v-for="(item,index) in coopList" :key="index" @click="goCaseDetail(item.id)">
        <img :src="item.url">
        <div class="right-box">
          <p class="title">{{ item.title }}</p>
          <i class="result-title">{{ item.type }}</i>
          <i class="result-title">{{ item.other }}</i>
          <i class="result-title">{{ item.num }}人</i>
        </div>
     </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
         coopList:[
           { url:'/static/images/tengxun.png', title:'腾讯创投会议', type:'会议',other:'五星酒店',num:'1000人' },
           { url:'/static/images/tengxun.png', title:'腾讯创投会议', type:'会议',other:'特色场地',num:'2000人' }
         ],
         
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
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: options.title
      })
      
        this.Request.getCaseList().then(res =>{
            console.log(res)
            this.coopList = res
        }).catch(res =>{
            console.log(res) //失败
        })
     
      
    },
    // 跳转至案例详情
    goCaseDetail(id){
      wx.navigateTo({
        url: '/pages/index/caseDetail/main?id='+id,
      })
    }
  },
  mounted () {
    this.getQuery()
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
  .title{
    font-size 23px
    color #ffffff
    position absolute
    bottom 10%
    left 15px
  }
}
.content{
  padding 15px 15px 11px
  border-bottom 1px solid #f3f3f3
  display flex
  align-items center
  flex-wrap wrap
  img{
    width 100px
    height 78px
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
    .result-title{
      margin-left 4px
      margin-bottom 3px
      padding 0
      font-size 22rpx
      color #91969b
    }
    .result-title:nth-child(3){
      color #000
    }
    .result-title:nth-child(4){
      font-size 12px
    }
  }
}
:last-child.content{
  border-bottom none
}
</style>
