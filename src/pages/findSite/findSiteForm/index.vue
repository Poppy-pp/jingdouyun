<!-- 免费找场地-表单 -->
<template>
   <div class="container">
     <van-cell-group>
        <van-field v-model="area" label="活动城市*" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
        <van-field v-model="type" label="活动类型*" is-link @click="showActionType" readonly="readonly" placeholder="请选择活动类型"/>
        <van-field v-model="date" label="活动时间*" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
        <van-field v-model="num" label="活动人数*" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
        <van-field v-model="price" label="活动预算*" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
        <van-field v-model="phone" type="number" clearable label="联系电话*" placeholder="请输入手机号" @input="inputPhone"> <i slot="button" class="sms-code">短信验证</i> </van-field>
        <van-field v-model="sms" type="number" clearable label="验证码*" placeholder="请输入验证码" @input="inputSms"/>
        <button class="free-btn" @click="findSite">
            <p class="title">免费帮我找场地</p>
        </button>
        <p class="desc">·5s提交场地需求 ·10分钟场地顾问致电 ·25分钟接收场地方案</p>
      </van-cell-group>

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
          showArea: false,
          showDate: false,
          showType: false,
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
          area:'',//选择的城市信息
          type:'',//活动类型
          date:'',
          num:'',
          price:'',
          phone:'',
          sms:'',
       }
   },
  components: {},
  computed:{},
  methods:{
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
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.sms-code{
    font-size: 14px;
    background-color: #fff;
    color: #1bbffe;
}
.free-btn{
    background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
    width: 84%;
    color: #fff;
    padding: 10px 0;
    margin-top: 38px;
    border-radius: 3px;
    line-height: 25px;
}
.free-btn::after{ 
    border: none; 
    outline: none;
}
.free-btn .title{
    font-size: 13px;
}
.desc{
    font-size: 12px;
    color #8e9398
    text-align center
    margin-top 25px
}
</style>
