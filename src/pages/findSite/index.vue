<!-- 找场地-首页 -->
<template>
  <div class="container">
    <div class="title-radius"><p class="title-text">活动场地一站式服务</p></div>

    <!-- 首页 -->
    <div id="tab-box" v-if="!showHistory">
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
            <van-field v-model="area" label="活动城市*" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
            <van-field v-model="type" label="活动类型*" is-link @click="showActionType" readonly="readonly" placeholder="请选择活动类型"/>
            <van-field v-model="date" label="活动时间*" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
            <van-field v-model="num" label="活动人数*" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算*" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="phone" clearable label="联系电话*" placeholder="请输入手机号" @input="inputPhone"> <i slot="button" class="sms-code">短信验证</i> </van-field>
            <van-field v-model="sms" clearable label="验证码*" placeholder="请输入验证码" @input="inputSms"/>
            <button class="free-btn" @click="findSite">
                <p class="title">免费帮我找场地</p>
                <p class="desc">5s提交场地需求-10分钟场地顾问致电-25分钟接收场地方案</p>
            </button>
          </van-cell-group>
        </div>
        <!-- tab页二 -->
        <div v-show="active == 1">
            <van-cell-group>
            <van-field v-model="area" label="活动城市*" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
            <van-field v-model="sitetype" label="场地类型*" is-link @click="showActionSite" readonly="readonly" placeholder="请选择场地类型"/>
            <van-field v-model="date" label="活动时间*" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
            <van-field v-model="num" label="活动人数*" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
            <van-field v-model="price" label="活动预算*" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
            <van-field v-model="addrask" label="位置要求*" is-link @click="goAreaAsk" readonly="readonly" placeholder="请选择位置要求"/>
            <van-field v-model="showeneeds" label="活动需求*" is-link @click="goActivityNeeds" readonly="readonly" placeholder="请选择活动需求"/>
            <button class="free-btn" @click="recommendSite">
                <p class="title">智能速配</p>
                <p class="desc">5s生成场地方案</p>
            </button>
          </van-cell-group>
          <i class="describe">今天已有***人发布需求</i>
        </div>
      </div>
    </div>

    <!-- 历史订单记录 -->
    <div class="history-box" v-else>
      <div class="card add" @click="showHistory = false">
        <van-icon name="plus" />
        <p class="first-title">发布需求</p>
      </div>
      <div class="card" v-for="(item,index) in historyData" :key="index" @click="goDetail(item)">
        <p class="title">{{ item.area }}</p>
        <i class="needs" v-for="(item2,index2) in item.needs" :key="index2">{{ item2.title }}</i>
        <p class="date">{{ item.date + '&emsp;' +  item.num + '&emsp;' + item.price }}</p>
        <p class="date creat-time">2019.05.27 12:32生成方案<span :class="item.status == '0' ? 'cancel' : ''">{{ item.statusname }}</span></p>
      </div>

    </div>

    <!-- 分割线 -->
    <div @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
      <p class="divider">— 鲸抖云·让活动变得简单 —</p>
      <i class="pull-down" v-if="!showHistory">上划查看历史需求订单</i>
    </div>

    <!-- 省市区 弹出层 -->
    <van-popup :show="showArea" position="bottom" @close="showArea = false">
        <van-area :area-list="areaList" title="省市区" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
    </van-popup>
    <!-- 选择时间 弹出层 -->
    <van-popup :show="showDate" position="bottom" @close="showDate = false">
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
      touchS: [0, 0],//滑动开始位置x,y
      touchE: [0, 0],//滑动结束位置x,y
      tabTitle: ["场地顾问推荐", "鲸灵智能推荐"],
      showHistory: false,
      showArea: false,
      showDate: false,
      showType: false,
      showSite: false,
      showNum: false,
      showPrice: false,
      showToast: false,
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
      historyData:[//历史订单记录
        { addrask: "北京市/北京市/东城区", ordernum:'JDY12312', status:'1', statusname:'客服已受理', area: "北京市/北京市/东城区", date: "2019/07/11", num: "50人以下", price: "1万-5万", sitetype: "四星酒店", needs:[ { isSelect:true, title:"无柱"}, { isSelect:true, title:"泳池"}]},
        { addrask: "四川省/成都市/高新区", ordernum:'JDY12313', status:'2',  statusname:'方案已生成', area: "四川省/成都市/高新区", date: "2019/07/13", num: "50-100人", price: "1万-5万", sitetype: "五星酒店", needs:[ { isSelect:true, title:"温泉"}, { isSelect:true, title:"室外"}]},
        { addrask: "四川省/成都市/高新区", ordernum:'JDY12314', status:'0',  statusname:'订单已取消', area: "四川省/成都市/高新区", date: "2019/07/13", num: "50-100人", price: "1万-5万", sitetype: "五星酒店", needs:[ { isSelect:true, title:"温泉"}, { isSelect:true, title:"室外"}]},
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
    // 查看订单详情
    goDetail(data){
      wx.navigateTo({
        url: '/pages/findSite/freeDetail/main?form=' + JSON.stringify(data),
      })
    },

    // 位置要求
    goAreaAsk(){
      wx.navigateTo({
        url: '/pages/findSite/areaAsk/main',
      })
    },

    // 活动需求
    goActivityNeeds(){
      wx.navigateTo({
        url: '/pages/findSite/activityNeeds/main',
      })
    },

    // 滑动开始位置
    touchStart (e) {
        let sx = e.touches[0].pageX
        let sy = e.touches[0].pageY
        this.touchS = [sx, sy]
    },
    // 滑动移动位置
    touchMove(e) {
        let sx = e.touches[0].pageX;
        let sy = e.touches[0].pageY;
        this.touchE = [sx, sy]
    },
    // 滑动结束位置
    touchEnd(e) {
        if (this.touchS[1] > this.touchE[1] + 50) {
            console.log('上滑');
            this.showHistory = true;
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
        this.area = val.target.values[0].name + '/' + val.target.values[1].name + '/' + val.target.values[2].name;
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

    //初始化数据 
    clearData(){
      this.area = '';
      this.type = '';
      this.date = '';
      this.num = '';
      this.price = '';
      this.phone = '';
      this.sms = '';
    },
  },
  created() {
    this.clearData();
  }
};
</script>
<style scoped lang="stylus">
#tab-box {
  position: relative;
  top: -32px;
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 0 0 10px 0;
}
.tab-tilte {
  width: 100%;
}
.tab-tilte li {
  width: 50%;
  padding: 10px 0;
  text-align: center;
  background-color: #dcf3fc;
  cursor: pointer;
  font-size: 14px;
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
  font-weight 600
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
    width: 92%;
    color: #fff;
    padding: 6px 0;
    margin-top: 15px;
    border-radius: 3px;
    line-height: 18px;
}
.free-btn::after{ 
    border: none; 
    outline: none;
}
.free-btn .title{
    font-size: 14px;
}
.free-btn .desc{
    font-size:22rpx;
}
.pull-down{
    text-align: center;
    font-size:22rpx;
    margin:8rpx 0;
    color: #c1c1c1;
}
.describe{
    text-align: center;
    font-size:22rpx;
    color: #c1c1c1;
    margin-top: 5px;
}
.history-box{
  .add{
    justify-content center
  }
  .card{
    position: relative;
    top: -30px;
    display: flex;
    align-items center
    flex-wrap wrap
    margin: 0 auto;
    width: 82%;
    border-radius: 7px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 8px 20px
    margin-bottom 15px
    van-icon{
      color #11bcfd
      font-size 24px
    }
    .first-title{
      width 100%
      text-align center
      font-size 15px
    }
    .title{
      padding 5px 0
      font-weight bold
      font-size 15px
      width 100%
    }
    .needs{
      font-size 20rpx
      display inline-block
      background-color #dcf3fc
      color #26c1fd
      padding:1px 10px;
      border-radius 2px
      margin 0px 5px 0px 0
    }
    .date{
      font-size 12px
      color #90959a
      padding 5px 0
      margin-bottom 5px
      border-bottom 1px solid #f3f3f3
      width 100%
      span{
        float right
        color #262e46
        font-size 14px
      }
      .cancel{
        color #90959a
      }
    }
    .creat-time{
      border-bottom none
    }
  }
}

</style>


