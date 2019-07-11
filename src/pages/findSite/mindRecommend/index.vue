<!-- 找场地-智能推荐 -->
<template>
  <div class="container">
    <div class="card">
      <p class="title">{{ formData.area }}</p>
      <i class="needs" v-for="(item,index) in formData.needs" :key="index">{{ item.title }}</i>
      <p class="date">{{ formData.date + '&emsp;' +  formData.num + '&emsp;' + formData.price }}</p>
      <p class="date creat-time">2019.05.27 12:32生成方案</p>
    </div>
    <div class="no-data">
      <p>没有找到心仪的场地？</p>
      <p>让场地顾问1对1免费帮您找~</p>
      <button>免费帮我找场地</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //上页面数据
      formData: {
        addrask: "北京市/北京市/东城区",
        area: "北京市/北京市/东城区",
        date: "2019/07/11",
        num: "50人以下",
        price: "1万-5万",
        sitetype: "四星酒店",
        needs:[
          { isSelect:true, title:"无柱"},
          { isSelect:true, title:"泳池"},
        ]
      }
    };
  },
  components: {},
  computed: {},
  methods: {
    /* 获取当前路由栈数据 */
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.formData = JSON.parse(options.form);
    }
  },
  mounted() {
    this.getQuery();
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
.container{
  padding 10px 0
}
.card {
  display: block;
  margin: 0 auto;
  width: 85%;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 15px;
  .title{
    padding 10px 0
    font-weight bold
    font-size 18px
  }
  .needs{
    font-size 14px
    display inline-block
    background-color #dcf3fc
    color #5ad0fc
    padding:3px 10px;
    border-radius 3px
    margin 5px 5px 5px 0
  }
  .date{
    font-size 15px
    color #90959a
    padding 5px 0
    margin-bottom 5px
    border-bottom 1px solid #f3f3f3
  }
  .creat-time{
    border-bottom none
  }
}
.no-data{
  margin-top 50px
  text-align center
  font-size 15px
  color #90959a
  p{
    margin-bottom 5px
  }
  button{
    color #11bcfd
    border 1px solid #11bcfd
    border-radius 20px
    background-color #ffffff
    width 50%
    font-size 15px
    margin-top 20px
  }
}
</style>
