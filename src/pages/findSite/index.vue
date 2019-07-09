<!-- 找场地-首页 -->
<template>
  <div class="container">
    <div class="title-radius">
      <p class="title-text">活动场地一站式服务</p>
    </div>
    <div id="tab-box">
      <ul class="tab-tilte">
        <li
          v-for="(title,index) in tabTitle"
          @click="active=index"
          :class="{active:active == index}"
          :key="index"
        >{{title}}</li>
      </ul>
      <div class="tab-content">
          <!-- tab页一 -->
        <div v-show="active == 0">
          <van-cell-group>
            <van-field v-model="area" label="活动城市" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
            <van-field v-model="type" label="活动类型" is-link @click="showActionType" readonly="readonly" placeholder="请选择活动类型"/>
            <van-field v-model="date" label="活动时间" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
            <van-field v-model="num" label="活动人数" is-link @click="" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算" is-link @click="" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="phone" label="联系电话" placeholder="请输入手机号" error> <i slot="button" class="sms-code">短信验证</i> </van-field>
            <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码"/>
            <button class="free-btn">
                <p class="title">免费帮我找场地</p>
                <p class="desc">5s提交场地需求-10分钟场地顾问致电-25分钟接收场地方案</p>
            </button>
          </van-cell-group>
        </div>
        <!-- tab页二 -->
        <div v-show="active == 1">
            <van-cell-group>
            <van-field v-model="area" label="活动城市" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
            <van-field v-model="type" label="活动类型" is-link @click="showActionType" readonly="readonly" placeholder="请选择活动类型"/>
            <van-field v-model="date" label="活动时间" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
            <van-field v-model="num" label="活动人数" is-link @click="" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算" is-link @click="" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="price" label="位置要求" is-link @click="" readonly="readonly" placeholder="请选择位置要求"/>
            <van-field v-model="price" label="活动需求" is-link @click="" readonly="readonly" placeholder="请选择活动需求"/>
            <button class="free-btn">
                <p class="title">智能速配</p>
                <p class="desc">5s生成场地方案</p>
            </button>
          </van-cell-group>
          <i class="describe">今天已有***人发布需求</i>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <p class="divider">— 鲸抖云·让活动变得简单 —</p>
    <i class="pull-down">上划查看历史需求订单</i>

    <!-- 省市区弹出层 -->
    <van-popup v-model="showArea" position="bottom">
        <van-area :area-list="areaList" title="省市区" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
    </van-popup>
    <!-- 选择时间弹出层 -->
    <van-popup v-model="showDate" position="bottom">
        <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" :max-date="maxDate" :formatter="formatter" />
    </van-popup>
    <!-- 活动类型 -->
    <van-action-sheet v-model="showType" :actions="typeActions" @select="onSelectType" cancel-text="取消" />
  </div>
</template>

<script>
import addressInfo from '@/utils/area'
export default {
  data() {
    return {
      active: 0,
      tabTitle: ["场地顾问推荐", "鲸灵智能推荐"],
      showArea: false,
      showDate: false,
      showType: false,
      currentDate: new Date(),
      areaList: addressInfo,
      area:'',//选择的城市信息
      typeActions: [
        { name: '不限' },
        { name: '发布会/颁奖/庆典' },
        { name: '论坛/推介会/商务会议'},
        { name: '讲座/沙龙'},
        { name: '团建/年会/公司聚会'},
      ]
    };
  },
  components: {},
  computed: {},
  methods: {
    //   地址
    showPopupArea() {
      this.showArea = true;
      console.log(this.showArea)
    },
    // 日期
    showPopupDate() {
      this.showDate = true;
    },
    // 活动类型
    showActionType(){
        this.showType = true;
    },
    // 确认地址
    onAddrConfirm(val){
        this.showArea = false;
        this.area = val[0].name+ "" +val[1].name;
    },
    // 取消地址
    onAddrCancel(){
        this.showArea = false;
    },
    // 选择活动类型
    onSelectType(item) {
      this.showType = false;
      Toast(item.name);
    },
    formatter(type, value) {
　　if (type === 'year') {
　　return `${value}年`;
　　} else if (type === 'month') {
　　  return `${value}月`
　　} else if (type === 'day') {
　　return `${value}日`
　　} 
　　return value;
　}
  },
  created() {
  }
};
</script>
<style scoped>
#tab-box {
  position: relative;
  top: -20px;
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 0 0 15px 0;
}
.tab-tilte {
  width: 100%;
}
.tab-tilte li {
  width: 50%;
  padding: 15px 0;
  text-align: center;
  background-color: #dcf3fc;
  cursor: pointer;
  font-size: 15px;
  color: #8e9398;
  display: inline-block;
}
.tab-tilte li:nth-child(1) {
  border-top-left-radius: 10px;
}
.tab-tilte li:nth-child(2) {
  border-top-right-radius: 10px;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  background-color: #fff;
  color: #333333;
}
.tab-content div {
  width: 100%;
}
.sms-code{
    font-size: 14px;
    background-color: #fff;
    color: #1bbffe;
}
.free-btn{
    background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
    width: 95%;
    color: #fff;
    padding: 8px 0;
    margin-top: 15px;
    border-radius: 4px;
    line-height: 20px;
}
.free-btn::after{ 
    border: none; 
    outline: none;
}
.free-btn .title{
    font-size: 15px;
}
.free-btn .desc{
    font-size: 12px;
}
.pull-down{
    text-align: center;
    font-size: 12px;
    margin: 10px 0;
    color: #cdcdcd;
}
.describe{
    text-align: center;
    font-size: 12px;
    color: #cdcdcd;
    margin-top: 5px;
}
</style>


