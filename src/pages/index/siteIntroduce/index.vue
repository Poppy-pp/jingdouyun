<!-- 场地介绍 -->
<template>
   <div class="container">
      <p class="title-p">华熙LIVE五棵松-凯迪拉克中心 </p>
      <div class="text" v-html="addr.content">  </div>
   </div>
</template>

<script>
export default {
   data() {
       return {
        addr:{
            name: '华熙LIVE五棵松-凯迪拉克中心',
            content: 'HTML5 CONTENT',
          },
          
          Request: this.$api.api.prototype, //请求头
         
       }
   },
  components: {},
  computed:{},
  methods:{
  },
    mounted() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      
      this.Request.getSpaceListIntroduce(JSON.parse(options.form).id).then(res =>{
        console.log(res)
        this.addr = res
      }).catch(res =>{
        console.log(res) //失败
      })
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container{
  padding 25px 15px
  .title-p{
    font-size 19px
    font-weight 600
    margin-bottom:7px;
  }
  .text{
    font-size 14px
    color #4f575e
    line-height 24px
    margin-top 12px
  }
  img{
    width 100%
    height 212px
    border-radius:10px;
    margin-top:13px;
  }
}
</style>
