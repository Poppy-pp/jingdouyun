<!-- 授权 手机号码 -->
<template>
  <van-popup :show="show" position="bottom" round>
    <div class="pop">
      <p class="title">
        <img src="../../../static/images/logo.png" />鲸抖云官方版 申请获得
      </p>
      <p class="type">你的手机号码</p>
      <van-cell title="15642369581">
        <i class="label">微信绑定号码</i>
        <van-icon
          slot="right-icon"
          name="success"
          style="line-height: inherit;color: #05c160;font-size:16px;"
        />
      </van-cell>
      <navigator url="../login/main" class="other">使用其他手机号码</navigator>
      <div class="btn">
        <button class="refuse">拒绝</button>
        <button class="allow">允许</button>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  components: {},
  computed: {},
  methods: {},
  created() {
    wx.login({
      success: function(res) {
        console.log("用户凭证code：", res.code);
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.pop {
  padding: 22px 0 50px 0;
}

.pop .title, .pop .type, .pop .other, .pop .btn {
  padding: 0 17px;
}

.pop .title {
  display: flex;
  align-items: center;
  font-size: 14px;
  color #333333
}

.pop .title img {
  width: 20px;
  height: 20px;
  margin-right 5px
}

.pop .type {
  font-size: 20px;
  margin-top: 20px;
}

.pop .label {
  float: left;
  font-size: 12px;
}

van-cell {
  margin-top: 10px;
  display: block;
}

.pop .other {
  color: #4f7cc1;
  margin-top: 15px;
  font-size: 12px;
}

.pop .btn {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.pop .refuse, .pop .allow {
  width: 47%;
  display: inline-block;
  font-size: 14px;
  line-height: 35px;
  border-radius 3px
}

.pop .refuse {
  background-color: #f2f2f2;
  color: #06ae56;
}

.pop .allow {
  background-color: #05c160;
  color: #ffffff;
}

.pop button::after {
  border: none;
}
</style>
