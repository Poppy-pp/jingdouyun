<template>
   <div class="container">
    <div class="title-radius"></div>
    <div class="card">
      订单
    </div>
   </div>
</template>

<script>
export default {
   data() {
       return {}
   },
  components: {},
  computed:{},
  methods:{},
  created(){}
}
</script>

<style scoped lang="stylus">
.container .title-radius{
  height 100px
  padding-top 0
}
.card {
   position relative
   top -50px
  display: block;
  margin: 0 auto;
  width: 85%;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px 15px;
}
</style>
