<!-- 找场地-首页 -->
<template>
  <div class="container">
    <div class="title-radius">
      <p class="title-text">活动场地一站式服务</p>
    </div>

    <!-- 首页 -->
    <div id="tab-box" v-if="!showHistory">
      <ul class="tab-tilte">
        <li
          v-for="(title,index) in tabTitle"
          @click="active=index"
          :class="{active:active == index}"
          :key="index"
        >{{title}}</li>
      </ul>
      <div class="tab-content">
        <!-- tab页一 -->
        <div v-show="active == 0">
          <van-cell-group>
            <van-field
              v-model="area"
              label="活动城市*"
              is-link
              @click="showPopupArea"
              readonly="readonly"
              placeholder="请选择活动城市"
            />
            <van-field
              v-model="type"
              label="活动类型*"
              is-link
              @click="showActionType"
              readonly="readonly"
              placeholder="请选择活动类型"
            />
            <van-field
              v-model="date"
              label="活动时间*"
              is-link
              @click="showPopupDate"
              readonly="readonly"
              placeholder="请选择活动时间"
            />
            <van-field
              v-model="num"
              label="活动人数*"
              is-link
              @click="showActionNum"
              readonly="readonly"
              placeholder="请选择活动人数"
            />
            <van-field
              v-model="price"
              label="活动预算*"
              is-link
              @click="showActionPrice"
              readonly="readonly"
              placeholder="请选择活动预算"
            />
            <van-field
              v-model="phone"
              type="number"
              clearable
              label="联系电话*"
              placeholder="请输入手机号"
              @input="inputPhone"
            >
              <i slot="button" class="sms-code" @click.stop="getCode">{{ smsCodeText }}</i>
            </van-field>
            <van-field
              v-model="sms"
              type="number"
              clearable
              label="验证码*"
              placeholder="请输入验证码"
              @input="inputSms"
            />
            <button class="free-btn" @click="findSite">
              <p class="title">免费帮我找场地</p>
              <p class="desc">5s提交场地需求-10分钟场地顾问致电-25分钟接收场地方案</p>
            </button>
          </van-cell-group>
        </div>
        <!-- tab页二 -->
        <div v-show="active == 1">
          <van-cell-group>
            <van-field
              v-model="area"
              label="活动城市*"
              is-link
              @click="showPopupArea"
              readonly="readonly"
              placeholder="请选择活动城市"
            />
            <van-field
              v-model="showtype"
              label="场地类型*"
              is-link
              @click="showActionSite"
              readonly="readonly"
              placeholder="请选择场地类型"
            />
            <van-field
              v-model="date"
              label="活动时间*"
              is-link
              @click="showPopupDate"
              readonly="readonly"
              placeholder="请选择活动时间"
            />
            <van-field
              v-model="num"
              label="活动人数*"
              is-link
              @click="showActionNum"
              readonly="readonly"
              placeholder="请选择活动人数"
            />
            <van-field
              v-model="price"
              label="活动预算*"
              is-link
              @click="showActionPrice"
              readonly="readonly"
              placeholder="请选择活动预算"
            />
            <van-field
              v-model="addrask"
              label="位置要求*"
              is-link
              @click="goAreaAsk"
              readonly="readonly"
              placeholder="请选择位置要求"
            />
            <van-field
              v-model="showneeds"
              label="活动需求*"
              is-link
              @click="goActivityNeeds"
              readonly="readonly"
              placeholder="请选择活动需求"
            />
            <button class="free-btn" @click="recommendSite">
              <p class="title">智能速配</p>
              <p class="desc">5s生成场地方案</p>
            </button>
          </van-cell-group>
          <i class="describe">今天已有***人发布需求</i>
        </div>
      </div>
    </div>

    <!-- 历史订单记录 -->
    <div class="history-box" v-else>
      <div class="card add" @click="showHistory = false">
        <van-icon name="plus" />
        <p class="first-title">发布需求</p>
      </div>
      <div class="card" v-for="(item,index) in historyData" :key="index" @click="goDetail(item)">
        <p class="title">{{ item.area }}</p>
        <i class="needs" v-for="(item2,index2) in item.needs" :key="index2">{{ item2.title }}</i>
        <p class="date">{{ item.date + '&emsp;' + item.num + '&emsp;' + item.price }}</p>
        <p class="date creat-time">
          2019.05.27 12:32生成方案
          <span
            :class="item.status == '0' ? 'cancel' : ''"
          >{{ item.statusname }}</span>
        </p>
      </div>
    </div>

    <!-- 分割线 -->
    <div class="footer-box" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <p class="divider">— 鲸抖云·让活动变得简单 —</p>
      <i class="pull-down" v-if="!showHistory">上划查看历史需求订单</i>
    </div>

    <!-- 省市区 弹出层 -->
    <van-popup :show="showArea" position="bottom" @close="showArea = false" round>
      <van-area :area-list="areaList" title="省市区" @confirm="onAddrConfirm" @cancel="onAddrCancel" />
    </van-popup>
    <!-- 选择时间 弹出层 -->
    <van-popup :show="showDate" position="bottom" @close="showDate = false" round>
      <van-datetime-picker
        v-model="currentDate"
        title="活动时间"
        type="date"
        :min-date="currentDate"
        @confirm="onDateConfirm"
        @cancel="onDateCancel"
      />
    </van-popup>
    <!-- 提示 -->
    <van-toast :show="showToast" :message="toastMsg" />
    <div class="van-tabbar--fixed1"></div>
  </div>
</template>

<script>
import addressInfo from "@/utils/area";
import { formatTime } from "@/utils/index";
export default {
  data() {
    return {
      active: 0,
      touchS: [0, 0], //滑动开始位置x,y
      touchE: [0, 0], //滑动结束位置x,y
      tabTitle: ["场地顾问推荐", "鲸灵智能推荐"],
      showHistory: false,
      showArea: false,
      showDate: false,
      showToast: false,
      toastMsg: "", //提示文字信息
      currentDate: new Date().getTime(), //时间戳格式
      areaList: addressInfo,
      historyData: [
        //历史订单记录
        {
          addrask: "北京市/北京市/东城区",
          ordernum: "JDY12312",
          status: "1",
          statusname: "客服已受理",
          area: "北京市/北京市/东城区",
          date: "2019/07/11",
          num: "50人以下",
          price: "1万-5万",
          sitetype: "四星酒店",
          needs: [
            { isSelect: true, title: "无柱" },
            { isSelect: true, title: "泳池" }
          ]
        },
        {
          addrask: "四川省/成都市/高新区",
          ordernum: "JDY12313",
          status: "2",
          statusname: "方案已生成",
          area: "四川省/成都市/高新区",
          date: "2019/07/13",
          num: "50-100人",
          price: "1万-5万",
          sitetype: "五星酒店",
          needs: [
            { isSelect: true, title: "温泉" },
            { isSelect: true, title: "室外" }
          ]
        },
        {
          addrask: "四川省/成都市/高新区",
          ordernum: "JDY12314",
          status: "0",
          statusname: "订单已取消",
          area: "四川省/成都市/高新区",
          date: "2019/07/13",
          num: "50-100人",
          price: "1万-5万",
          sitetype: "五星酒店",
          needs: [
            { isSelect: true, title: "温泉" },
            { isSelect: true, title: "室外" }
          ]
        }
      ],
      ctoast:null,
      area: "", //选择的城市信息
      type: "", //活动类型
      date: "",
      num: "",
      price: "",
      phone: "",
      sms: "",
      sitetype: "", //场地类型
      showtype: "", //页面展示场地类型
      addrask: "", //位置要求
      needs: [], //活动需求
      showneeds: "", //页面显示活动需求
      Request: this.$api.api.prototype, //请求头
      time: 60,
      smsCodeText: "短信验证"
    };
  },
  components: {},
  computed: {},

  methods: {
    //获取验证码
    getCode() {
      if (this.time != 60) return;
      this.timeBack();
      //下面调用获取验证按方法
      this.sendSms();
    },
    //验证码倒计时
    timeBack() {
      this.time--;
      if (this.time != 0) {
        this.smsCodeText = this.time + "秒";
        setTimeout(() => {
          this.timeBack();
        }, 1000);
      } else {
        this.smsCodeText = "重新获取";
        this.time = 60;
      }
    },
    // 免费找场地
    findSite() {
      if (this.area == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动城市";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.type == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动类型";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.date == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动时间";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.num == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动人数";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.price == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动预算";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.phone == "") {
        this.showToast = true;
        this.toastMsg = "请输入联系电话";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.sms == "") {
        this.showToast = true;
        this.toastMsg = "请输入验证码";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else {
        this.Request.addMySpaceOrder(
          this.globalData.uid,
          this.area,
          this.type,
          this.date,
          this.num,
          this.price,
          this.phone,
          this.sms
        )
          .then(res => {
            console.log(res);

            if (res != "SMSERROR") {
              // 跳转至订单详情页面
              let form = {
                area: this.area,
                type: this.type,
                date: this.date,
                num: this.num,
                price: this.price,
                phone: this.phone,
                sms: this.sms,
                ordernum: res
              };
              console.log(JSON.stringify(form));
              wx.navigateTo({
                url:
                  "/pages/findSite/freeDetail/main?form=" + JSON.stringify(form)
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
    },
    // 智能推荐
    recommendSite() {
      if (this.area == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动城市";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.sitetype == "") {
        this.showToast = true;
        this.toastMsg = "请选择场地类型";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.date == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动时间";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.num == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动人数";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.price == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动预算";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.addrask == "") {
        this.showToast = true;
        this.toastMsg = "请选择位置要求";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else if (this.showneeds == "") {
        this.showToast = true;
        this.toastMsg = "请选择活动需求";
        setTimeout(() => {
          this.showToast = false;
        }, 2000);
      } else {
        // 跳转至智能推荐页面
        let form = {
          area: this.area,
          sitetype: this.sitetype,
          date: this.date,
          num: this.num,
          price: this.price,
          addrask: this.addrask,
          needs: this.needs
        };
        wx.navigateTo({
          url: "/pages/findSite/mindRecommend/main?form=" + JSON.stringify(form)
        });
      }
    },
    // 查看订单详情
    goDetail(data) {
      wx.navigateTo({
        url: "/pages/findSite/freeDetail/main?form=" + JSON.stringify(data)
      });
    },

    // 位置要求
    goAreaAsk() {
      wx.navigateTo({
        url: "/pages/findSite/areaAsk/main"
      });
    },

    // 活动需求
    goActivityNeeds() {
      wx.navigateTo({
        url: "/pages/findSite/activityNeeds/main"
      });
    },

    // 滑动开始位置
    touchStart(e) {
      let sx = e.touches[0].pageX;
      let sy = e.touches[0].pageY;
      this.touchS = [sx, sy];
    },
    // 滑动移动位置
    touchMove(e) {
      let sx = e.touches[0].pageX;
      let sy = e.touches[0].pageY;
      this.touchE = [sx, sy];
    },
    // 滑动结束位置
    touchEnd(e) {
      if (this.touchS[1] > this.touchE[1] + 50) {
        console.log("上滑");
        this.showHistory = true;
      }
    },

    sendSms() {
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

    //   城市
    showPopupArea() {
      this.showArea = true;
    },
    // 确认地址
    onAddrConfirm(val) {
      this.showArea = false;
      this.area =
        val.target.values[0].name +
        "/" +
        val.target.values[1].name +
        "/" +
        val.target.values[2].name;
    },
    // 取消地址
    onAddrCancel() {
      this.showArea = false;
    },

    // 日期
    showPopupDate() {
      this.showDate = true;
    },
    // 确认日期
    onDateConfirm(val) {
      this.showDate = false;
      this.date = formatTime(new Date(val.mp.detail)).split(" ")[0]; //取年月日
    },
    // 取消日期
    onDateCancel() {
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
    // 场地类型
    showActionSite() {
      wx.navigateTo({
        url: "/pages/findSite/siteType/main"
      });
    },

    //初始化数据
    clearData() {
      this.area = "";
      this.type = "";
      this.date = "";
      this.num = "";
      this.price = "";
      this.phone = "";
      this.sms = "";
    }
  },
  mounted() {
    this.clearData();
    this.Request.getActivityType()
      .then(res => {
        console.log(res);
        this.typeActions = res;
      })
      .catch(res => {
        console.log(res); //失败
      });

    this.Request.getActivityPeopleNumber()
      .then(res => {
        console.log(res);
        this.numActions = res;
      })
      .catch(res => {
        console.log(res); //失败
      });

    this.Request.getActivityBudget()
      .then(res => {
        console.log(res);
        this.priceActions = res;
      })
      .catch(res => {
        console.log(res); //失败
      });

    this.Request.getSpaceType()
      .then(res => {
        console.log(res);
        this.siteActions = res;
      })
      .catch(res => {
        console.log(res); //失败
      });
  },
  onShow() {
    let pages = getCurrentPages();
    let currPage = pages[pages.length - 1];
    if (currPage.data.type) {
      //活动类型
      this.type = [];
      this.type = currPage.data.type;
    }
    if (currPage.data.num) {
      //活动人数
      this.num = [];
      this.num = currPage.data.num;
    }
    if (currPage.data.price) {
      //活动人数
      this.price = [];
      this.price = currPage.data.price;
    }
    if (currPage.data.sitetype) {
      //场地类型
      this.sitetype = [];
      this.showtype = "";
      this.sitetype = currPage.data.sitetype;
      this.showtype = currPage.data.showtype;
    }
    console.log(currPage.data);
    if (currPage.data.addrask) {
      //位置要求
      this.addrask = "";
      currPage.data.addrask.forEach(item => {
        if (this.addrask == "") {
          this.addrask = item.text;
        } else {
          this.addrask += "/" + item.text;
        }
      });
    }
    if (currPage.data.showneeds) {
      //活动需求
      this.needs = [];
      this.showneeds = "";
      this.needs = currPage.data.needs;
      this.showneeds = currPage.data.showneeds;
    }
  }
};
</script>
<style scoped lang="stylus">
#tab-box {
  position: relative;
  top: -32px;
  display: block;
  margin: 0 auto;
  width: 90%;
  border-radius: 8px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 0 0 10px 0;
}
.van-tabbar--fixed1 {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f6f7f8;
  border-top-left-radius:50px;
  border-top-right-radius: 50px;
  width: 100%;
  height: 10px;
  z-index 1111
}
.tab-tilte {
  width: 100%;
}

.tab-tilte li {
  width: 50%;
  padding: 10px 0;
  text-align: center;
  background-color: #dcf3fc;
  cursor: pointer;
  font-size: 14px;
  color: #8e9398;
  display: inline-block;
}

.tab-tilte li:nth-child(1) {
  border-top-left-radius: 10px;
}

.tab-tilte li:nth-child(2) {
  border-top-right-radius: 10px;
}

/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  background-color: #fff;
  color: #333333;
  font-weight: 600;
}

.tab-content div {
  width: 100%;
}

.sms-code {
  font-size: 14px;
  background-color: #fff;
  color: #1bbffe;
}

.free-btn {
  background: linear-gradient(to right, #02d5fc 0%, #1fa5ff 100%);
  width: 92%;
  color: #fff;
  padding: 6px 0;
  margin-top: 15px;
  border-radius: 3px;
  line-height: 18px;
}

.free-btn::after {
  border: none;
  outline: none;
}

.free-btn .title {
  font-size: 14px;
}

.free-btn .desc {
  font-size: 22rpx;
}

.pull-down {
  text-align: center;
  font-size: 22rpx;
  margin: 8rpx 0;
  color: #c1c1c1;
}

.describe {
  text-align: center;
  font-size: 22rpx;
  color: #c1c1c1;
  margin-top: 5px;
}

.history-box {
  .add {
    justify-content: center;
  }

  .card {
    position: relative;
    top: -30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 82%;
    border-radius: 7px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 8px 20px;
    margin-bottom: 15px;

    van-icon {
      color: #11bcfd;
      font-size: 24px;
    }

    .first-title {
      width: 100%;
      text-align: center;
      font-size: 15px;
    }

    .title {
      padding: 5px 0;
      font-weight: bold;
      font-size: 15px;
      width: 100%;
    }

    .needs {
      font-size: 20rpx;
      display: inline-block;
      background-color: #dcf3fc;
      color: #26c1fd;
      padding: 1px 10px;
      border-radius: 2px;
      margin: 0px 5px 0px 0;
    }

    .date {
      font-size: 12px;
      color: #90959a;
      padding: 5px 0;
      margin-bottom: 5px;
      border-bottom: 1px solid #f3f3f3;
      width: 100%;

      span {
        float: right;
        color: #262e46;
        font-size: 14px;
      }

      .cancel {
        color: #90959a;
      }
    }

    .creat-time {
      border-bottom: none;
    }
  }
}

.footer-box {
  margin-bottom: 10px;
}
</style>


