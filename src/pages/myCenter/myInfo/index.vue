<!-- 个人信息-->
<template>
   <div class="container">
      <van-field v-model="phone" label="手机号" readonly="true"  />
      <button class="free-btn" @click="showContact = true">退出登录</button>
   </div>
</template>

<script>
export default {
   data() {
       return {
          phone:'184****4587'
       }
   },
  components: {},
  computed:{},
  methods:{
  },
  mounted () {
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
   .free-btn{
      background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
      width: 95%;
      color: #fff;
      padding: 6px 0;
      margin-top: 15px;
      border-radius: 3px;
      font-size 14px
   }
   .free-btn::after{ 
      border: none; 
      outline: none;
   }
}
</style>
