<!-- 找场地-首页 -->
<template>
  <div class="container">
    <div class="title-radius"></div>
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
            <van-field v-model="num" label="活动人数" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="phone" clearable label="联系电话" placeholder="请输入手机号" @input="inputPhone"> <i slot="button" class="sms-code">短信验证</i> </van-field>
            <van-field v-model="sms" clearable label="验证码" placeholder="请输入验证码" @input="inputSms"/>
            <button class="free-btn" @click="findSite">
                <p class="title">免费帮我找场地</p>
                <p class="desc">5s提交场地需求-10分钟场地顾问致电-25分钟接收场地方案</p>
            </button>
          </van-cell-group>
        </div>
        <!-- tab页二 -->
        <div v-show="active == 1">
            <van-cell-group>
            <van-field v-model="area" label="活动城市" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
            <van-field v-model="sitetype" label="场地类型" is-link @click="showActionSite" readonly="readonly" placeholder="请选择场地类型"/>
            <van-field v-model="date" label="活动时间" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
            <van-field v-model="num" label="活动人数" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="addrask" label="位置要求" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择位置要求"/>
            <van-field v-model="showeneeds" label="活动需求" is-link @click="showPopupNeeds" readonly="readonly" placeholder="请选择活动需求"/>
            <button class="free-btn" @click="recommendSite">
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

    <!-- 省市区 弹出层 -->
    <van-popup :show="showArea" position="bottom">
        <van-area :area-list="areaList" title="省市区" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
    </van-popup>
    <!-- 选择时间 弹出层 -->
    <van-popup :show="showDate" position="bottom">
        <van-datetime-picker v-model="currentDate" title="活动时间" type="date" :min-date="currentDate" @confirm="onDateConfirm" @cancel="onDateCancel" />
    </van-popup>
    <!-- 活动类型 弹出层-->
    <van-action-sheet :show="showType" :actions="typeActions" @select="onSelectType" @cancel="onCancelType" cancel-text="取消" />
    <!-- 活动人数 弹出层 -->
    <van-action-sheet :show="showNum" :actions="numActions" @select="onSelectNum" @cancel="onCancelNum" cancel-text="取消" />
    <!-- 活动预算 弹出层 -->
    <van-action-sheet :show="showPrice" :actions="priceActions" @select="onSelectPrice" @cancel="onCancelPrice" cancel-text="取消" />
    <!-- 场地类型 弹出层 -->
    <van-action-sheet :show="showSite" :actions="siteActions" @select="onSelectSite" @cancel="onCancelSite" cancel-text="取消" />
    <!-- 活动需求 弹出层 -->
    <van-popup :show="showNeeds" position="bottom">
      <div class="needs-box">
        <block v-for="(item, index) in needsList" :key="index">
          <text :class="item.isSelect ? 'needs-active' : 'needs-select'" @click='selectNeeds(index)'>{{item.title}}</text>
        </block>
        <div class="btn">
          <button class="cancel" @click="showNeeds = false">取消</button>
          <button class="resize" @click="resizeNeeds">重置</button>
          <button class="confirm" @click="submitNeeds">确定</button>
        </div>
      </div>
    </van-popup>
    <!-- 提示 -->
    <van-toast :show="showToast" :message="toastMsg"/>
  </div>
</template>

<script>
import addressInfo from '@/utils/area'
import { formatTime } from '@/utils/index'
export default {
  data() {
    return {
      active: 0,
      tabTitle: ["场地顾问推荐", "鲸灵智能推荐"],
      showArea: false,
      showDate: false,
      showType: false,
      showSite: false,
      showNum: false,
      showPrice: false,
      showToast: false,
      showNeeds: false,
      toastMsg: '',//提示文字信息
      currentDate: new Date().getTime(),//时间戳格式
      areaList: addressInfo,
      typeActions: [
        { name: '不限' },
        { name: '发布会/颁奖/庆典' },
        { name: '论坛/推介会/商务会议'},
        { name: '讲座/沙龙'},
        { name: '工作会/总结会'},
        { name: '年会/答谢会'},
        { name: '聚会/团建/拓展'},
      ],
      numActions: [
        { name: '不限' },
        { name: '50人以下' },
        { name: '50-100人'},
        { name: '100-300人'},
        { name: '500-1000人'},
        { name: '1000人以上'},
      ],
      priceActions: [
        { name: '不限' },
        { name: '1万元以下' },
        { name: '1万-5万'},
        { name: '5万-10万'},
        { name: '10万-20万'},
        { name: '20万-30万'},
        { name: '30万-50万'},
        { name: '50万以上'},
      ],
      siteActions: [
        { name: '不限' }, { name: '五星酒店' }, { name: '四星酒店' }, { name: '三星酒店' }, { name: '经济酒店' }, { name: '艺术展馆' }, { name: '体育场馆' }, 
        { name: '会议中心' },{ name: '商超/综合体' }, { name: '公共空间' }, { name: '特色场地' }, { name: '剧院影院' }, { name: '高端会所' }, { name: '餐厅酒吧' },
      ],
      needsList: [ {title: "不限", isSelect: false}, {title: "客房住宿", isSelect: false}, {title: "场地方正", isSelect: false}, {title: "网红打卡", isSelect: false}, 
        {title: "无柱", isSelect: false}, {title: "泳池", isSelect: false}, {title: "温泉", isSelect: false}, {title: "景区周围", isSelect: false},  {title: "园林草坪", isSelect: false}, 
        {title: "户外广场", isSelect: false}, {title: "郊野", isSelect: false}, {title: "豪华", isSelect: false}, {title: "私密", isSelect: false}, {title: "中式", isSelect: false}, 
        {title: "进车场地", isSelect: false}, {title: "美食餐饮", isSelect: false}, {title: "免费WIFI", isSelect: false}, {title: "健身娱乐", isSelect: false}, {title: "自然采光", isSelect: false}, 
        {title: "阳光房", isSelect: false}, {title: "水景", isSelect: false}, {title: "露台", isSelect: false}, {title: "高尔夫", isSelect: false}, {title: "艺术特色", isSelect: false}, 
        {title: "地铁沿线", isSelect: false}, {title: "声光电设备", isSelect: false}
      ],
      area:'',//选择的城市信息
      type:'',//活动类型
      date:'',
      num:'',
      price:'',
      phone:'',
      sms:'',
      sitetype:'',//场地类型
      addrask:'',//位置要求
      needs:[],//活动需求
      showeneeds:'',//页面显示活动需求
    };
  },
  components: {},
  computed: {},
  methods: {
    // 免费找场地
    findSite(){
      if (this.area == '' || this.type == '' || this.date == '' || this.num == '' || this.price == '' || this.phone == '' || this.sms == ''){
        this.showToast = true;
        this.toastMsg = '请填写完整的活动信息！';
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      }else{
        // 跳转至订单详情页面
        let form = {
          area: this.area,
          type: this.type,
          date: this.date,
          num: this.num,
          price: this.price,
          phone: this.phone,
          sms: this.sms,
        }
        wx.navigateTo({
          url: '/pages/findSite/freeDetail/main?form=' + JSON.stringify(form),
        })
      }
    },
    // 智能推荐
    recommendSite(){
      if (this.area == '' || this.sitetype == '' || this.date == '' || this.num == '' || this.price == '' || this.addrask == '' || this.needs == ''){
        this.showToast = true;
        this.toastMsg = '请填写完整的活动信息！';
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      }else{
        // 跳转至智能推荐页面
        let form = {
          area: this.area,
          sitetype: this.sitetype,
          date: this.date,
          num: this.num,
          price: this.price,
          addrask: this.addrask,
          needs: this.needs,
        }
        wx.navigateTo({
          url: '/pages/findSite/mindRecommend/main?form=' + JSON.stringify(form)
        })
      }
    },

    // 输入手机号
    inputPhone(val){
      this.phone = val.mp.detail;
    },
    // 输入验证码
    inputSms(val){
      this.sms = val.mp.detail;
    },

    //   城市
    showPopupArea() {
      this.showArea = true;
    },
    // 确认地址
    onAddrConfirm(val){
        this.showArea = false;
        this.area = val.target.values[0].name + '/' + val.target.values[1].name + '/' + val.target.values[2].name ;
        this.addrask = this.area;
    },
    // 取消地址
    onAddrCancel(){
        this.showArea = false;
    },

    // 日期
    showPopupDate() {
      this.showDate = true;
    },
    // 确认日期
    onDateConfirm(val){
        this.showDate = false;
        this.date = formatTime(new Date(val.mp.detail)).split(' ')[0];//取年月日
    },
    // 取消日期
    onDateCancel(){
        this.showDate = false;
    },

    // 活动类型
    showActionType(){
        this.showType = true;
    },
    onSelectType(item) {
      this.showType = false;
      this.type = item.target.name;
    },
    onCancelType(item) {
      this.showType = false;
    },

    // 活动人数
    showActionNum(){
        this.showNum = true;
    },
    onSelectNum(item) {
      this.showNum = false;
      this.num = item.target.name;
    },
    onCancelNum(item) {
      this.showNum = false;
    },

    // 活动预算
    showActionPrice(){
        this.showPrice = true;
    },
    onSelectPrice(item) {
      this.showPrice = false;
      this.price = item.target.name;
    },
    onCancelPrice(item) {
      this.showPrice = false;
    },

    // 场地类型
    showActionSite(){
        this.showSite = true;
    },
    onSelectSite(item) {
      this.showSite = false;
      this.sitetype = item.target.name;
    },
    onCancelSite(item) {
      this.showSite = false;
    },

    // 活动需求
    showPopupNeeds() {
      this.showNeeds = true;
    },
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
      this.showNeeds = false;
    },

    //初始化数据 
    clearData(){
      this.area = '';
      this.type = '';
      this.date = '';
      this.num = '';
      this.price = '';
      this.phone = '';
      this.sms = '';
    }
  },
  created() {
    this.clearData()
  }
};
</script>
<style scoped lang="stylus">
#tab-box {
  position: relative;
  top: -20px;
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
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
  width:40%;
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
  width:40%;
  text-align center
}
.needs-box .btn{
  margin-top 20px
  display flex
  justify-content space-between
}
.needs-box .resize, .needs-box .confirm, .needs-box .cancel{
  width 31%
  display inline-block
  font-size 16px
  line-height 40px
  border-radius 4px
}
.needs-box .resize{
  background-color #c7cbcf
  color #ffffff
}
.needs-box .confirm{
  background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
  color #ffffff
}
.needs-box .cancel{
  background-color:#f5f5f5;
  color:#999;
}
.needs-box button::after{
  border none
}
</style>


