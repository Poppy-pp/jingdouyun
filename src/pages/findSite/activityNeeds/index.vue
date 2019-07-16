<!-- 活动需求 -->
<template>
   <div class="container">
      <div class="needs-box">
        <block v-for="(item, index) in needsList" :key="index">
          <text :class="item.isSelect ? 'needs-active' : 'needs-select'" @click='selectNeeds(index)'>{{item.title}}</text>
        </block>
        <div class="btn">
          <button class="resize" @click="resizeNeeds">重置</button>
          <button class="confirm" @click="submitNeeds">确定</button>
        </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
          needsList: [ {title: "不限", isSelect: false}, {title: "客房住宿", isSelect: false}, {title: "场地方正", isSelect: false}, {title: "网红打卡", isSelect: false}, 
            {title: "无柱", isSelect: false}, {title: "泳池", isSelect: false}, {title: "温泉", isSelect: false}, {title: "景区周围", isSelect: false},  {title: "园林草坪", isSelect: false}, 
            {title: "户外广场", isSelect: false}, {title: "郊野", isSelect: false}, {title: "豪华", isSelect: false}, {title: "私密", isSelect: false}, {title: "中式", isSelect: false}, 
            {title: "进车场地", isSelect: false}, {title: "美食餐饮", isSelect: false}, {title: "免费WIFI", isSelect: false}, {title: "健身娱乐", isSelect: false}, {title: "自然采光", isSelect: false}, 
            {title: "阳光房", isSelect: false}, {title: "水景", isSelect: false}, {title: "露台", isSelect: false}, {title: "高尔夫", isSelect: false}, {title: "艺术特色", isSelect: false}, 
            {title: "地铁沿线", isSelect: false}, {title: "声光电设备", isSelect: false}
          ],
          needs:[],
          showeneeds:'',
       }
   },
  components: {},
  computed:{},
  methods:{
    // 点击选择活动需求
    selectNeeds(index) {
      this.needsList[index].isSelect = !this.needsList[index].isSelect;
    },
    // 重置活动需求
    resizeNeeds(){
      this.needs = [];
      this.needsList.forEach((item,index) =>{
        item.isSelect = false;
      })
    },
    // 确认选择活动需求
    submitNeeds(){
      this.needs = [];//初始化
      this.showeneeds = '';
      this.needsList.forEach((v,i)=>{
        if(v.isSelect){
          this.needs.push(v)
        }
      })
      this.needs.forEach((item,index) =>{
        this.showeneeds += item.title + '/';//页面显示
      })

      wx.navigateBack({
        delta:1
      })
    },
  },
  created(){}
}
</script>

<style lang="stylus">
.needs-box{
  padding: 10px
}
.needs-select{
  display: inline-block;
  line-height: 40rpx;
  padding: 10rpx 26rpx;
  margin: 10rpx 10rpx;
  font-size: 12px;
  background: #f6f7f8;
  color: #1b233c;
  border: none;
  border-radius: 3px;
  width:39%;
  text-align center
}
.needs-active{
  display: inline-block;
  background: #f0f1f1;
  color: #11bcfd;
  font-size: 12px;
  line-height: 40rpx;
  padding: 10rpx 26rpx;
  margin: 10rpx 10rpx;
  border-radius: 16rpx;
  border-radius: 3px;
  width:39%;
  text-align center
}
.needs-box .btn{
  margin-top 20px
  display flex
  justify-content space-between
}
.needs-box .resize, .needs-box .confirm{
  width 35%
  display inline-block
  font-size 13px
  line-height 30px
  border-radius 3px
}
.needs-box .resize{
  background-color #c7cbcf
  color #ffffff
}
.needs-box .confirm{
  background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
  color #ffffff
}
.needs-box button::after{
  border none
}
</style>
