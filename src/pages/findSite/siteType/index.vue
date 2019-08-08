<!-- 场地类型 -->
<template>
   <div class="container">
     <ul>
       <li v-for="(item,index) in siteActions" :key="index" @click="chooseItem(item,index)" :class="item.isSelect ? 'active' : ''">{{ item.name }}</li>
     </ul>
     <div class="btn">
        <button class="resize" @click="resize">重置</button>
        <button class="confirm" @click="submit">确定</button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
          sitetype:[],
          showtype:'',
          siteActions: [
            { name: "不限", isSelect: false },
            { name: "五星酒店", isSelect: false },
            { name: "四星酒店", isSelect: false },
            { name: "三星酒店", isSelect: false },
            { name: "经济酒店", isSelect: false },
            { name: "艺术展馆", isSelect: false },
            { name: "体育场馆", isSelect: false },
            { name: "会议中心", isSelect: false },
            { name: "商超/综合体", isSelect: false },
            { name: "公共空间", isSelect: false },
            { name: "特色场地", isSelect: false },
            { name: "剧院影院", isSelect: false },
            { name: "高端会所", isSelect: false },
            { name: "餐厅酒吧", isSelect: false }
          ],
       }
   },
  components: {},
  computed:{},
  methods:{
    // 点击选择
    chooseItem(item,index){
      this.siteActions[index].isSelect = !this.siteActions[index].isSelect;
    },
    // 重置活动需求
    resize(){
      this.typsitetypee = [];
      this.siteActions.forEach((item,index) =>{
        item.isSelect = false;
      })
    },
    // 确认选择
    submit(){
      this.sitetype = [];//初始化
      this.showtype = '';
      this.siteActions.forEach((v,i)=>{
        if(v.isSelect){
          this.sitetype.push(v)
        }
      })
      this.sitetype.forEach((item,index) =>{
        this.showtype += item.name + '/';//页面显示
      })
      // 带参返回上一页
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];  //上一个页面
      prevPage.setData({//往上一页传递的参数值
        sitetype: this.sitetype,
        showtype: this.showtype
      })
      wx.navigateBack({
        delta: 1
      })
    },
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
  ul{
    margin-top 68rpx
    li{
      padding 34rpx 10px
      text-align:center;
      font-size:32rpx;
      color #111a34
    }
    .active{
        color #11bcfd
    }
  }
  .btn{
    margin 34px 0
    display flex
    justify-content space-between
  }
 .resize,.confirm{
    width 35%
    display inline-block
    font-size 13px
    line-height 30px
    border-radius 3px
  }
  .resize{
    background-color #c7cbcf
    color #ffffff
  }
  .confirm{
    background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
    color #ffffff
  }
  button::after{
    border none
  }
}
</style>
