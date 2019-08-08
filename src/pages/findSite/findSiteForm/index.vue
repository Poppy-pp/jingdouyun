<!-- 免费找场地-表单 -->
<template>
   <div class="container">
     <van-cell-group>
        <van-field v-model="area" label="活动城市*" is-link @click="showPopupArea" readonly="readonly" placeholder="请选择活动城市"/>
        <van-field v-model="type" label="活动类型*" is-link @click="showActionType" readonly="readonly" placeholder="请选择活动类型"/>
        <van-field v-model="date" label="活动时间*" is-link @click="showPopupDate" readonly="readonly" placeholder="请选择活动时间"/>
        <van-field v-model="num" label="活动人数*" is-link @click="showActionNum" readonly="readonly" placeholder="请选择活动人数"/>
        <van-field v-model="price" label="活动预算*" is-link @click="showActionPrice" readonly="readonly" placeholder="请选择活动预算"/>
        <van-field v-model="phone" type="number" clearable label="联系电话*" placeholder="请输入手机号" @input="inputPhone"> <i slot="button" class="sms-code" @click.stop="getCode">{{ smsCodeText }}</i> </van-field>
        <van-field v-model="sms" type="number" clearable label="验证码*" placeholder="请输入验证码" @input="inputSms"/>
        <button class="free-btn" @click="findSite">
            <p class="title">免费帮我找场地</p>
        </button>
        <p class="desc">·5s提交场地需求 ·10分钟场地顾问致电 ·25分钟接收场地方案</p>
      </van-cell-group>

      <!-- 省市区 弹出层 -->
      <van-popup :show="showArea" position="bottom" @close="showArea = false" round>
          <van-area :area-list="areaList" title="省市区" @confirm="onAddrConfirm" @cancel="onAddrCancel"/>
      </van-popup>
      <!-- 选择时间 弹出层 -->
      <van-popup :show="showDate" position="bottom" @close="showDate = false" round>
          <van-datetime-picker v-model="currentDate" title="活动时间" type="date" :min-date="currentDate" @confirm="onDateConfirm" @cancel="onDateCancel" />
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
          showArea: false,
          showDate: false,
          showToast: false,
          toastMsg: '',//提示文字信息
          currentDate: new Date().getTime(),//时间戳格式
          areaList: addressInfo,
          area:'',//选择的城市信息
          type:'',//活动类型
          date:'',
          num:'',
          price:'',
          phone:'',
          sms:'',
          time:'',
          smsCodeText:'短信验证'
       }
   },
  components: {},
  computed:{},
  methods:{
    //获取验证码
    getCode(){
      if(this.time != 60) return;
      this.timeBack();
      //下面调用获取验证按方法

    
    },
    //验证码倒计时
    timeBack(){
      this.time--;
      if(this.time != 0){
        this.smsCodeText = this.time + "秒"
        setTimeout(()=>{
          this.timeBack()
        },1000)
      }else{
        this.smsCodeText = "重新获取"
        this.time = 60
      }
    },
    // 免费找场地
    findSite(){
       if (this.area == ''){
        this.showToast = true;
        this.toastMsg = '请选择活动城市';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.type == ''){
        this.showToast = true;
        this.toastMsg = '请选择活动类型';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.date == ''){
        this.showToast = true;
        this.toastMsg = '请选择活动时间';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.num == ''){
        this.showToast = true;
        this.toastMsg = '请选择活动人数';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.price == ''){
        this.showToast = true;
        this.toastMsg = '请选择活动预算';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.phone == ''){
        this.showToast = true;
        this.toastMsg = '请输入联系电话';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else if(this.sms == ''){
        this.showToast = true;
        this.toastMsg = '请输入验证码';
        setTimeout(() => { this.showToast = false; }, 2000);
      }else{
        this.Request.addMySpaceOrder(this.globalData.uid,this.area,this.type,this.date,this.num,this.price,this.phone,this.sms).then(res =>{
            console.log(res)
            
            // 跳转至订单详情页面
            let form = {
              area: this.area,
              type: this.type,
              date: this.date,
              num: this.num,
              price: this.price,
              phone: this.phone,
              sms: this.sms,
              ordernum: res,
            }
            console.log(JSON.stringify(form))
            wx.navigateTo({
                url: '/pages/findSite/freeDetail/main?form=' + JSON.stringify(form),
            })
        })
        .catch(res =>{
            console.log(res) //失败
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
    showActionType() {
      wx.navigateTo({
        url: "/pages/findSite/activityType/main"
      });
    },
    // 活动人数
    showActionNum() {
      wx.navigateTo({
        url: "/pages/findSite/activityNum/main"
      });
    },
    // 活动预算
    showActionPrice() {
      wx.navigateTo({
        url: "/pages/findSite/activityPrice/main"
      });
    },
  },
  created(){},
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];
    if (currPage.data.type) {//活动类型
      this.type = [];
      this.type = currPage.data.type;
    }
    if (currPage.data.num) {//活动人数
      this.num = [];
      this.num = currPage.data.num;
    }
    if (currPage.data.price) {//活动人数
      this.price = [];
      this.price = currPage.data.price;
    }
  }
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
