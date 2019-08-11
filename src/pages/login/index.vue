<!-- 登录 -->
<template>
   <div class="login">
     <div class="welcome">
       <p>您好，</p>
       <p>欢迎来到鲸抖云</p>
     </div>

    <van-field v-model="phone" clearable label="手机号码" placeholder="输入有效手机号码" @input="inputPhone"> <i slot="button" class="sms-code" @click.stop="getCode">{{ smsCodeText }}</i> </van-field>
    <van-field v-model="sms" clearable label="验证码" placeholder="输入6位验证码" @input="inputSms"/>
    <p class="remember">
      <label>保存此号码供以后授权使用</label>
      <van-switch :checked="remember" active-color="#11bcfd" inactive-color="#ccc" size="20px" @change="changeRemember"/> 
    </p>
    <button class="free-btn" @click="login">
        <p class="title">完成</p>
    </button>

    <!-- 提示 -->
    <van-toast :show="showToast" :message="toastMsg"/>
   </div>
</template>

<script>
export default {
   data() {
       return {
         smsCodeText:"获取验证码",
         phone:'',
         sms:'',
         remember: true,
         showToast: false,
         toastMsg:'',
         time:60,
		 
		 Request: this.$api.api.prototype, //请求头
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
	  this.Request.sendSms(this.phone)
        .then(res => {
          console.log(res);
        })
        .catch(res => {
          console.log(res); //失败
        });
    },
	
	// 输入手机号
    inputPhone(val) {
      this.phone = val.mp.detail;
    },
    // 输入验证码
    inputSms(val) {
      this.sms = val.mp.detail;
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
    // 切换记住 开关
    changeRemember(val){
      this.remember = val.mp.detail;
    },
    // 登录
    login(){

      if (this.phone == '' || this.sms == ''){
        this.showToast = true;
        this.toastMsg = '请填写完整的登录信息！';
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      }else{
	  
	  	this.Request.login(this.phone, this.sms)
        .then(res => {
			if (res != "SMSERROR") {
			
			 this.$store.commit('SET_OPEN_ID',this.phone);
			 this.globalData.uid = this.phone
			  
			  console.log(this.globalData)
			  wx.navigateTo({
				url: "/pages/index/main"
			  });
			  
			} else {
			  // 显示提示
			  this.showToast = true;
			  this.toastMsg = "验证码错误，请重新输入！";
			  setTimeout(() => {
				this.showToast = false;
			  }, 2000);
			}
        })
        .catch(res => {
          console.log(res); //失败
        });
	  
	  }
    }
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.login{
  padding 0 10px;
}
.login .welcome{
  font-size 20px
  font-weight bold
  padding 15px 18px 35px
  color #111a34  
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
    padding: 10px 0;
    margin-top: 50px;
    border-radius: 3px;
    line-height: 20px;
    font-size 14px
}
.free-btn::after{ 
    border: none; 
    outline: none;
}
.free-btn .title{
    font-size: 15px;
}
.remember{
  padding 10px 15px 10px 0
  margin-left 18px
  font-size:14px;
  line-height:24px;
  border-bottom 1px solid #f3f3f3
}
.remember van-switch{
  float right
}
</style>
