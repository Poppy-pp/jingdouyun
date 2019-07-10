<!-- 登录 -->
<template>
   <div class="login">
     <div class="welcome">
       <p>您好，</p>
       <p>欢迎来到鲸抖云</p>
     </div>

    <van-field v-model="phone" clearable label="手机号码" placeholder="输入有效手机号码"> <i slot="button" class="sms-code">获取验证码</i> </van-field>
    <van-field v-model="sms" clearable label="验证码" placeholder="输入6位验证码"/>
    <p class="remember">
      <label>保存此号码供以后授权使用</label>
      <van-switch :checked="remember" active-color="#11bcfd" inactive-color="#ccc" size="18px" @change="changeRemember"/> 
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
         phone:'',
         sms:'',
         remember: true,
         showToast: false,
         toastMsg:'',
       }
   },
  components: {},
  computed:{},
  methods:{
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
  font-size 22px
  padding 30px 18px 20px
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
    padding: 12px 0;
    margin-top: 25px;
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
.remember{
  padding 15px 15px 15px 0
  margin-left 18px
  font-size:16px;
  line-height:24px;
  border-bottom 1px solid #f3f3f3
}
.remember van-switch{
  float right
}
</style>
