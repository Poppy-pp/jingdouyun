<!-- 找场地-免费找场地订单详情 -->
<template>
   <div class="container">
      <div class="title-radius">
        <div class="icon" v-if="orderStatus">
          <div class="icon-box">
            <img src="../../../../static/images/needs.png" class="circle">
            <i>提交需求</i>
          </div>
          <img src="../../../../static/images/circle.png">
          <div class="icon-box">
            <img src="../../../../static/images/adviser.png" class="circle">
            <i>顾问受理</i>
          </div>
        </div>
        <div class="icon cancel" v-else>
          <img src="../../../../static/images/cancel-order.png" class="circle">
        </div>
        <p class="icon-title" v-if="orderStatus">顾问已受理，将与您沟通确认需求<i class="icon-desc">顾问将在10分钟左右致电您，请保持手机畅通</i></p>
        <p class="icon-title" v-else>订单已取消</p>
      </div>
      <div class="card">
        <p class="divider">— 鲸抖云·让活动变得简单 —<i class="card-desc">2019.5.27 12:32提交</i></p>
        <ul>
          <li>{{ '· 订单号：' + infoList.ordernum }}</li>
          <li>{{ '· 活动城市：' + infoList.area }}</li>
          <li>{{ '· 活动类型：' + infoList.sitetype }}</li>
          <li>{{ '· 举办时间：' + infoList.date }}</li>
          <li>{{ '· 活动人数：' + infoList.num }}</li>
          <li>{{ '· 活动预算：' + infoList.price }}</li>
        </ul>
      </div>
      <div class="btn-detail" v-if="orderStatus">
        <button class="cancel" @click="showDialog = true">取消订单</button>
        <button class="confirm" @click="showContact = true">联系顾问</button>
      </div>
      <div class="btn-detail" v-else>
        <button class="again" @click="againPublish">重新发布需求</button>
      </div>

      <!-- 联系顾问 弹出层-->
      <van-action-sheet :show="showContact" :actions="contactActions" @select="onSelectContact" @cancel="showContact = false" cancel-text="取消" /> 
      <!-- 确认框 -->
      <van-dialog :show="showDialog" :message="dialogMsg" :showCancelButton="true" @confirm="confirmCancel" @cancel="showDialog = false"/>
   </div>
</template>

<script>
export default {
   data() {
       return {
          infoList:[
            // { key:'订单号', value:'JDY12312' }, { key:'活动城市', value:'北京' }, { key:'活动类型', value:'发布会/颁奖/庆典' }, { key:'举办时间', value:'2019.09.01-2019.10.03' }, { key:'活动人数', value:'100人以下' }, { key:'活动预算', value:'5000以下' }, 
          ],
          showContact: false,
          showDialog: false,
          contactActions: [ { name: '010-12345323' }, { name: '呼叫' } ],
          orderStatus: true,//订单状态【true：生效，false：已取消】
          dialogMsg: '您确定要取消该订单吗？',
       }
   },
  components: {},
  computed:{},
  methods:{
    // 取消订单
    confirmCancel(){
      this.orderStatus = false;//订单状态改为 失效
    },
    // 选择呼叫
    onSelectContact(val){ },
    // 重新发布需求
    againPublish(){
      wx.switchTab({
        url: '/pages/findSite/main',
      })
    },
    /* 获取当前路由栈数据 */
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.infoList = JSON.parse(options.form);
      if(this.infoList.status == 0){// 订单已取消页面
        this.orderStatus = false;
      }else{
        this.orderStatus = true;
      }
    },
  },
  mounted() {
    this.getQuery();
  },
  created(){}
}
</script>

<style lang="stylus" scoped>
.container .title-radius{
  height 150px
  flex-wrap wrap
  padding-top 0
  .icon{
    display:flex;
    justify-content center
    width 100%
    height 70px
  }
  .icon img{
    display inline-block
    width 40px
    height 40px
    padding 5px
  }
  .icon .circle{
    border 1px solid #ffffff
    border-radius 50%
    margin 0 10px
  }
  .icon .icon-box{
    font-size 12px
    color #ffffff
    display:inline-block;
    text-align center
  }
  .icon-title{
    font-size 18px
    color #ffffff
    margin-top:-20px
  }
  .icon-desc{
    font-size 12px
    color #ffffff
    text-align center
  }
  .icon.cancel{
    height 50px
  }
  .icon.cancel img{
    width 30px
    height 30px
    padding 10px
  }
}
.card {
  position: relative;
  top: -50px;
  display: block;
  margin: 0 auto;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 0 20px 40px 20px;
  .divider{
    padding 20px 0
    font-size 18px
    color #000
    border-bottom 1px solid #f3f3f3
    .card-desc{
      font-size 14px
      text-align center
      color #cdcdcd
      margin-top 5px
    }
  }
  ul{
    li{
      font-size 16px
      color #666
      padding 10px 0
    }
  }
}
.btn-detail {
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  .confirm, .cancel {
    width: 48%;
    display: inline-block;
    font-size: 17px;
    line-height: 45px;
  }
  .cancel{
    background-color:#9aa0a6;
    color:#ffffff;
  }
  .confirm, .again {
    background: linear-gradient(to right, #02d5fc 0%,#1fa5ff 100%);
    color #ffffff
  }
  .again{
    width: 95%;
    font-size: 17px;
    line-height: 45px;
  }
}
button::after {
  border: none;
}
</style>
