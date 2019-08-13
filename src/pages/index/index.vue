<!-- 鲸选-首页 -->
<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <div class="search-box">
      <span @click="goCityIndex">
        {{ curCity.name }}
        <img src="../../../static/images/jiantou-white.png" />
      </span>
      <p class="input" @click="goSearch(curCity.name)">
        <van-icon name="search" />
        <input type="text" placeholder="搜索您心仪的场地" placeholder-style="color:#ffffff" disabled="true" />
      </p>
      <img class="adviser" src="../../../static/images/adviser.png" alt @click="onPhoneCall" />
    </div>
    <!-- 轮播 -->
    <Swiper :images="images" />
    <!-- 鲸鸿一撇 -->
    <div class="hot-box">
      <p class="title-box">
        <img src="../../../static/images/qipao.png" /> 鲸鸿·一瞥
      </p>
      <div class="hot-item" v-for="(item,index) in hotList" :key="index" @click="goHot(item.title)">
        <image :src="item.url" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <!-- 场地筛选 -->
    <div class="site">
      <p class="title-box" id="search">
        <img src="../../../static/images/qipao.png" /> 场地筛选
      </p>
      <div :class="isTop ? 'search searchTop' : 'search'">
        <span
          v-for="(item,index) in searchTitle"
          :key="index"
          @click="chooseSearch(item,index)"
          :class=" chooseSearchIndex == index && showPopup ? 'active-span' : ''"
        >
          {{ item }}
          <img
            :src=" chooseSearchIndex == index && showPopup ? '/static/images/jiantou-blue.png' : '/static/images/jiantou-gray.png'"
          />
        </span>
        <p class="notify" v-if="showNotify">已为您搜索符合条件的结果</p>
        <!-- 弹窗 -->
        <van-popup
          :show="showPopup"
          position="top"
          @close="showPopup = false"
          class="search-popup"
          overlay-style="position:absolute;top:60px;height:1400px;"
        >
          <!-- 区域 -->
          <van-tree-select
            v-if="chooseSearchIndex == 0"
            :items="areas"
            :maxHeight="300"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @clickNav="onClickNav"
            @clickItem="onClickItem"
          />
          <!-- 类型 -->
          <div class="needs-box" v-if="chooseSearchIndex == 1">
            <block v-for="(item, index) in typeList" :key="index">
              <text
                :class="item.isSelect ? 'needs-active' : 'needs-select'"
                @click="selectType(item,index)"
              >{{item.title}}</text>
            </block>
          </div>
          <!-- 面积/人数/价格 -->
          <div class="action-box" v-if="chooseSearchIndex != 0 && chooseSearchIndex != 0">
            <ul>
              <li
                v-for="(item,index) in actions"
                :key="index"
                @click="selectAction(item)"
              >{{ item.name }}</li>
            </ul>
          </div>
        </van-popup>
      </div>
      <div :class="isTop ? 'site-box site-boxTop' : 'site-box'" :style="'min-height:'+wHeight">
        <ul v-if="siteList.length != 0">
          <li v-for="(item,index) in siteList" :key="index" :id="index == 19 ? 'site-20' : ''">
            <div @click="goSiteDetail(item.id)" class="li-detail">
              <img :src="item.url" />
              <div class="right-box">
                <p class="title">{{ item.name }}</p>
                <p class="price">
                  ￥{{ item.price }}
                  <span>/天</span>
                  <i>参考价</i>
                </p>
                <i class="result-title">{{ item.area + ' | ' + item.num + ' | ' + item.count}}</i>
                <i class="result-title">
                  <img class="address-icon" src="/static/images/address.png" />
                  {{ item.far }}
                </i>
                <i class="result-title">{{item.addr.name }}</i>
              </div>
            </div>

            <!-- 列表中有10-20个场地，用户滑动浏览10个场地后出现 -->
            <div v-if="index == 9 && 10 <= siteList.length < 20" class="middle" @click="goFindForm">
              <p class="one-p">没有找到心仪的场地 ？</p>
              <p class="two-p">让场地顾问1对1免费帮您找</p>
              <button>发布需求</button>
            </div>
          </li>
        </ul>
        <div v-else class="no-data-search">
          <p>没有找到心仪的场地？</p>
          <p>让场地顾问1对1免费帮您找~</p>
          <button @click="goFindForm">免费帮我找场地</button>
        </div>
      </div>
      <!-- （1）列表少于10个场地资源，页面底部直接出现 ；（2）列表中刚好有20个场地，滑动浏览20个后出现；（3）20个以上，，滑动底部出现-->
      <div
        v-if="(0 < siteList.length && siteList.length < 10) || siteList.length >= 20"
        class="no-data"
      >
        <p class="black">没有找到心仪的场地？</p>
        <p class="desc">更多场地资源，让场地顾问1对1免费帮您找</p>
        <button @click="goFindForm">免费帮我找场地</button>
      </div>
      <!-- 列表中有20个场地以上，滑动至20个场地后，悬浮按钮出现 -->
      <button
        v-if="siteList.length > 20 && showBtn"
        class="suspensionBtn"
        @click="goFindForm"
      >发布场地需求</button>
    </div>

    <!-- 搜索提示 -->
    <van-toast :show="showToast" :message="toastMsg" />

    <van-tabbar :active="active">
      <van-tabbar-item
        v-for="(item,index) in tabList"
        :key="index"
        :name="index"
        @click="tabChange(item.pagePath)"
      >
        <image slot="icon" :src="item.iconPath" mode="aspectFit" />
        <image slot="icon-active" :src="item.selectedIconPath" mode="aspectFit" />
        {{
        item.text
        }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Swiper from "@/components/swiper";
import QQMapWX from "../../../static/tools/qqmap-wx-jssdk.js";
import { mapActions, mapState } from "vuex";
export default {
  components: { Swiper },
  computed: {
    ...mapState({
      openId: state => state.openId,
      curCity: state => state.curCity,
      locationInfo: state => state.locationInfo
    })
  },
  data() {
    return {
      tabList: [
        {
          text: "找场地",
          pagePath: "/pages/findSite/main",
          iconPath: "/static/tabs/find.png",
          selectedIconPath: "/static/tabs/find-active.png"
        },
        {
          text: "鲸选",
          pagePath: "/pages/index/main",
          iconPath: "/static/tabs/home.png",
          selectedIconPath: "/static/tabs/home-active.png"
        },
        {
          text: "我的",
          pagePath: "/pages/myCenter/main",
          iconPath: "/static/tabs/my.png",
          selectedIconPath: "/static/tabs/my-active.png"
        }
      ],
      active: 1,
      qqmapsdk: null, //授权地理位置
      isTop: false, //是否置顶
      showBtn: false, //悬浮按钮
      showNotify: false,
      showToast: false,
      wHeight: "", //场地列表盒子的最小高度
      searchHeight: "", //筛选框的高度
      headerHeight: "", //头部搜索框高度
      siteTop: "", //场地列表距离顶部的初始高度
      toastMsg: "", //提示文字信息
      contactActions: [{ name: "010-12345323" }, { name: "呼叫" }],
      images: [],
      hotList: [
        { url: "../../static/images/hot-1.png", title: "合作案例" },
        { url: "../../static/images/hot-2.png", title: "热门场地" },
        { url: "../../static/images/hot-3.png", title: "城市地标" }
      ],
      searchTitle: ["区域", "类型", "面积", "人数", "价格"],
      siteList: [
        {
          name: "朝阳公园",
          price: "12000",
          num: "100人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "100人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "100人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "200人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "300人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "400人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "500人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "600人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "700人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "800人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        },
        {
          name: "朝阳公园",
          price: "12000",
          num: "800人",
          count: "8间",
          area: "2400m",
          addr: "朝阳区朝阳北路101号",
          far: "距市中心 2.32千米"
        }
      ],
      showPopup: false,
      //选择的区域——区域下拉
      areas: [
        { text: "不限", children: [{ text: "不限", id: 1, disabled: false }] },
        {
          text: "附近",
          children: [
            { text: "不限", id: 2, disabled: false },
            { text: "500m以内", id: 3, disabled: false },
            { text: "1000m以内", id: 4, disabled: false }
          ]
        },
        {
          text: "区域",
          children: [
            { text: "不限", id: 5, disabled: false },
            { text: "东城区", id: 6, disabled: false },
            { text: "武侯区", id: 7, disabled: false }
          ]
        },
        {
          text: "地铁",
          children: [
            { text: "不限", id: 8, disabled: false },
            { text: "1号线", id: 9, disabled: false },
            { text: "3号线", id: 10, disabled: false }
          ]
        },
        {
          text: "道路",
          children: [
            { text: "不限", id: 12, disabled: false },
            { text: "一环", id: 13, disabled: false },
            { text: "四环", id: 14, disabled: false }
          ]
        },
        {
          text: "商圈",
          children: [
            { text: "总部基地", id: 15, disabled: false },
            { text: "中关村", id: 16, disabled: false },
            { text: "软件园", id: 17, disabled: false }
          ]
        }
      ],
      //选择的类型——类型下拉
      typeList: [
        { title: "不限", isSelect: false },
        { title: "五星酒店", isSelect: false },
        { title: "四星酒店", isSelect: false },
        { title: "三星酒店", isSelect: false },
        { title: "经济酒店", isSelect: false },
        { title: "艺术展馆", isSelect: false },
        { title: "体育场馆", isSelect: false },
        { title: "会议中心", isSelect: false },
        { title: "商超/综合体", isSelect: false },
        { title: "公共空间", isSelect: false },
        { title: "特色场地", isSelect: false },
        { title: "剧院影院", isSelect: false },
        { title: "高端会所", isSelect: false },
        { title: "餐厅酒吧", isSelect: false }
      ],
      mainActiveIndex: 0, // 左侧高亮元素的index
      activeId: 1, // 被选中元素的id
      chooseSearchIndex: 0, //选择的筛选条件下拉tab的index
      actions: [],
      area: "",
      type: "",
      size: "",
      num: "",
      price: "",
      Request: this.$api.api.prototype //请求头
    };
  },
  methods: {
    tabChange(url) {
      wx.navigateTo({
        url: url
      });
    },
    // 跳转到选择城市
    goCityIndex() {
      wx.navigateTo({
        url: "/pages/index/cityIndex/main"
      });
    },
    // 跳转到热门/合作案例
    goHot(data) {
      if (data == "合作案例") {
        wx.navigateTo({
          url: "/pages/index/cooperateCase/main?title=" + data
        });
      } else {
        wx.navigateTo({
          url:
            "/pages/index/hotSite/main?title=" +
            data +
            "&addr=" +
            this.curCity.name
        });
      }
    },
    // 跳转至场地详情
    goSiteDetail(id) {
      let form = {
        id: id
      };
      wx.navigateTo({
        url: "/pages/index/siteDetail/main?form=" + JSON.stringify(form)
      });
    },
    // 跳转至搜索
    goSearch(data) {
      wx.navigateTo({
        url: "/pages/index/search/main?city=" + data
      });
    },
    // 点击筛选下拉菜单
    chooseSearch(data, index) {
      // 判断是否吸顶，点击就吸顶
      if (!this.isTop) {
        this.isTop = true;
        wx.pageScrollTo({
          scrollTop: this.siteTop
        });
      }
      // 两次点击同一个菜单，收起弹出框
      if (this.chooseSearchIndex == index) {
        this.showPopup = !this.showPopup;
        return;
      }
      this.chooseSearchIndex = index;
      this.showPopup = true;
      this.actions = [];
      if (index == 2) {
        this.actions = [
          { name: "不限", from: "", to: "" },
          { name: "50㎡以下", from: "1", to: "50" },
          { name: "50㎡-100㎡", from: "51", to: "100" },
          { name: "100㎡-200㎡", from: "101", to: "200" },
          { name: "200㎡-500㎡", from: "200", to: "500" },
          { name: "500㎡-800㎡", from: "501", to: "800" },
          { name: "800㎡-1000㎡", from: "801", to: "1000" },
          { name: "1000㎡以上", from: "1001", to: "99999" }
        ];
      } else if (index == 3) {
        this.actions = [
          { name: "不限", from: "", to: "" },
          { name: "50人以下", from: "1", to: "50" },
          { name: "50-100人", from: "51", to: "100" },
          { name: "100-300人", from: "101", to: "300" },
          { name: "300-500人", from: "301", to: "500" },
          { name: "500-1000人", from: "501", to: "1000" },
          { name: "1000人以上", from: "1001", to: "99999" }
        ];
      } else if (index == 4) {
        this.actions = [
          { name: "不限" },
          { name: "1万元以下" },
          { name: "1万-5万" },
          { name: "5万-10万" },
          { name: "10万-20万" },
          { name: "20万-30万" },
          { name: "30万-50万" },
          { name: "50万以上" }
        ];
      }
    },
    // 跳转找场地表单
    goFindForm() {
      wx.navigateTo({
        url: "/pages/findSite/findSiteForm/main"
      });
    },
    // 区域——点击一级菜单
    onClickNav(e) {
      console.log(e);
      this.mainActiveIndex = e.mp.detail.index;
    },
    // 区域——点击子集
    onClickItem(e) {
      this.showPopup = false;
      this.activeId = e.mp.detail.id;
      this.searchTitle[this.chooseSearchIndex] = e.mp.detail.text;
    },
    // 类型——点击选择类型
    selectType(data, index) {
      this.showPopup = false;
      this.searchTitle[this.chooseSearchIndex] = data.title;
      this.typeList.forEach(item => {
        item.isSelect = false;
      });
      this.typeList[index].isSelect = !this.typeList[index].isSelect;
      this.type = "0"; //初始化

      this.typeList.every((v, i) => {
        if (v.isSelect) {
          if (v.id == 1) {
            this.type = "";
            return false;
          }

          this.type = this.type + "_" + v.id;
        }

        return true;
      });
    },
    // 面积、人数、价格——点击选择
    selectAction(item) {
      this.showPopup = false;
      this.searchTitle[this.chooseSearchIndex] = item.name;
      this.siteList = [];

      if (this.chooseSearchIndex == 2) {
        this.size = item.name;

        this.Request.getSpaceListSearch(
          "",
          this.curCity.name,
          this.type,
          "",
          "",
          item.from,
          item.to
        )
          .then(res => {
            this.siteList = res;

            // 显示提示
            this.showToast = true;
            this.showNotify = true;
            this.toastMsg = "共找到" + this.siteList.length + "个场地";
            setTimeout(() => {
              this.showToast = false;
              this.showNotify = false;
            }, 2000);
          })
          .catch(res => {
            console.log(res); //失败
          });
      } else if (this.chooseSearchIndex == 3) {
        this.num = item.name;

        this.Request.getSpaceListSearch(
          "",
          this.curCity.name,
          this.type,
          item.from,
          item.to,
          "",
          ""
        )
          .then(res => {
            this.siteList = res;

            // 显示提示
            this.showToast = true;
            this.showNotify = true;
            this.toastMsg = "共找到" + this.siteList.length + "个场地";
            setTimeout(() => {
              this.showToast = false;
              this.showNotify = false;
            }, 2000);
          })
          .catch(res => {
            console.log(res); //失败
          });
      } else if (this.chooseSearchIndex == 4) {
        this.price = item.name;
      }
    },
    // 调出拨打电话
    onPhoneCall() {
      wx.makePhoneCall({
        phoneNumber: "010-12345323"
      });
    }
  },

  mounted: function() {
    this.Request.getSpaceTypeSearchItem()
      .then(res => {
        console.log(res);
        this.typeList = res;
      })
      .catch(res => {
        console.log(res); //失败
      });
  },

  created() {
    // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: "ADWBZ-IEU3F-E62JG-NUDQS-6F3X6-7DBII"
    });
  },
  //监听屏幕滚动
  onPageScroll(ev) {
    var query = wx.createSelectorQuery();
    // 滚动时——获取筛选栏距离顶部的高度
    query
      .select("#search")
      .boundingClientRect(res => {
        var scrollTop = res.top + (res.height + 15); //获取的是“场地筛选”标题，所以加上这个标题的高度和margin ，才是筛选框距离顶部的滚动高度
        if (scrollTop <= this.headerHeight) {
          this.isTop = true;
        }
        if (scrollTop > this.headerHeight) {
          this.isTop = false;
        }
      })
      .exec();

    // 获取滑动的场地，滑动20个后，显示悬浮按钮
    if (this.siteList.length > 20) {
      query
        .select("#site-20")
        .boundingClientRect(res => {
          if (
            res.top <
            wx.getSystemInfoSync().windowHeight - this.headerHeight
          ) {
            //顶部距离 < 视口高度 - 头部搜索栏
            this.showBtn = true;
          } else {
            this.showBtn = false;
          }
        })
        .exec();
    }
  },
  onReady() {
    // 获取头部搜索栏的高度
    var query = wx.createSelectorQuery();
    query
      .select(".search-box")
      .boundingClientRect(res => {
        this.headerHeight = res.height;
      })
      .exec();

    // 可见区域高度，赋值给场地列表最小高度
    query
      .select(".search")
      .boundingClientRect(res => {
        //获取筛选框的高度
        this.searchHeight = res.height;
        this.wHeight =
          wx.getSystemInfoSync().windowHeight -
          this.headerHeight -
          this.searchHeight -
          20 +
          "px"; //可见视口高度 - 头部搜索栏高度 - 筛选框高度 - padding-bootom
      })
      .exec();

    //场地列表距离顶部的初始高度，跟随筛选条件吸顶上滚
    wx
      .createSelectorQuery()
      .select(".site-box")
      .boundingClientRect(res => {
        this.siteTop = res.top - this.headerHeight - this.searchHeight; //初始高度 - 头部搜索栏高度 - 筛选框高度  = 上滚距离
      })
      .exec();
  },
  onShow(option) {
    this.globalData.uid = this.openId;
    console.log(this.globalData);

    // 获取地理位置授权
    if (this.locationInfo.address == undefined) {
      wx.getLocation({
        type: "gcj02",
        success: res => {
          this.qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: addressRes => {
              this.$store.commit("SET_LOCATIONINFO", addressRes.result);
              this.$store.commit("SET_City", {
                name: addressRes.result.address_component.city
              });
            }
          });
        }
      });
    }

    // let _self = this;
    // wx.getStorage({
    //   key: "cname",
    //   success(res) {
    //     _self.addr = res.data.name || "成都";
    //   }
    // });

    this.Request.getActivityListBanner()
      .then(res => {
        this.images = res;
      })
      .catch(res => {});

    this.Request.getSpaceList(this.curCity.name)
      .then(res => {
        this.siteList = res;
      })
      .catch(res => {});
  }
};
</script>
<style scoped lang="stylus">
.container {
  position: relative;
}

.search-box {
  width: 95%;
  height: 30px;
  background-color: #56c6ff;
  padding: 10px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  span {
    font-size: 15px;
    color: #ffffff;
    display: inline-block;

    img {
      width: 10px;
      height: 8px;
    }
  }

  .input {
    position: relative;
    margin-left: 20px;
    width: 58%;

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 12px;
      color: #ffffff;
      border-radius: 20px;
      background-color: #8edafd;
      padding: 4px 5px 4px 35px;
    }

    van-icon {
      position: absolute;
      top: 50%;
      left: 10px;
      color: #ffffff;
      transform: translateY(-50%);
      height: 16px;
    }
  }

  .adviser {
    width: 45rpx;
    height: 45rpx;
    margin-left: auto;
  }
}

.title-box {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #112334;
  position: relative;
  z-index: 1;

  img {
    width: 35px;
    height: 35px;
    position: absolute;
    z-index: -1;
    top: -15rpx;
  }
}

.hot-box {
  padding: 42px 15px 11px;

  .hot-item {
    width: 130px;
    height: 83px;
    display: inline-block;
    position: relative;
    margin-top: 10px;

    image {
      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      left: 10px;
      bottom: 10px;
      color: #ffffff;
      font-size: 18px;
    }
  }

  :nth-child(2).hot-item {
    width: 208px;
    height: 170px;
    margin-right: 5px;

    image {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }

  :nth-child(3).hot-item {
    position: absolute;
    margin-bottom: 5px;

    image {
      border-top-right-radius: 10px;
    }

    span {
      font-size: 14px;
    }
  }

  :nth-child(4).hot-item {
    image {
      border-bottom-right-radius: 10px;
    }

    span {
      font-size: 14px;
    }
  }
}

.site {
  padding: 20px 0;
  position: relative;

  .title-box {
    padding: 0 15px;
  }

  .search {
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    padding: 18px 0;
    background-color: #ffffff;
    position: relative;

    span {
      width: 17%;
      text-align: center;
      font-size: 29rpx;
      color: #4f575e;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      padding: 0 10rpx;

      img {
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }

    .active-span {
      color: #11bcfd;
    }

    .notify {
      position: absolute;
      color: #fff;
      text-align: center;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      padding: 10px 0;
      margin-top: 18px;
    }
  }

  .searchTop {
    position: fixed;
    top: 98rpx;
    z-index: 10;
    width: 100%;
  }

  .site-boxTop {
    top: 128rpx;
    margin-bottom: 70px !important;
  }

  .site-box {
    display: block;
    margin: 0 auto;
    width: 92%;
    border-radius: 7px;
    background-color: #fff;
    padding: 0 15px;
    position: relative;

    .result-title {
      font-size: 13px;
      color: #90959a;
      padding: 5px 0;
      margin-bottom: 5px;
    }

    ul {
      li {
        border-bottom: 1px solid #f3f3f3;
        padding: 19px 0;

        .li-detail {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        img {
          width: 120px;
          height: 105px;
          border-radius: 10px;
          margin-right: 10px;
        }

        .right-box {
          width: 60%;

          .title {
            padding: 2px;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 3px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .price {
            font-size: 16px;
            color: #11bcfd;
            display: flex;
            align-items: center;

            span {
              font-size: 22rpx;
            }

            i {
              color: #111a34;
              font-size: 22rpx;
              display: inline;
              margin-left: 10px;
            }
          }

          .result-title {
            margin-left: 4px;
            margin-bottom: 3px;
            padding: 0;
            font-size: 12px;
            color: #91969b;
          }

          .result-title:last-child {
            margin-left: 17px;
          }
        }
      }

      li:last-child {
        border-bottom: none;
      }

      .middle {
        background: linear-gradient(to right, #94eafe 0%, #24a8ff 100%);
        padding: 25px 0;
        border-radius: 7px;
        text-align: center;
        color: #ffffff;
        width: 100%;
        margin-top: 40px;

        .one-p {
          font-size: 16px;
        }

        .two-p {
          font-size: 22rpx;
          margin-top: 5px;
          color: #e4f6ff;
        }

        button {
          width: 38%;
          color: #11bcfd;
          font-size: 13px;
          border-radius: 3px;
          margin-top: 18px;
          padding: 2px 0;
        }

        button::after {
          border: none;
        }
      }
    }
  }

  .no-data {
    margin: 30px 0 50px;
    text-align: center;
    font-size: 12px;
    color: #90959a;

    .black {
      font-size: 16px;
      color: #000;
      font-weight: 600;
    }

    .desc {
      margin: 5px 0;
      font-size: 22rpx;
    }

    button {
      color: #11bcfd;
      border: 1px solid #11bcfd;
      border-radius: 20px;
      background-color: #ffffff;
      width: 38%;
      font-size: 12px;
      margin-top: 15px;
    }
  }
}

.needs-box {
  padding: 10px;
}

.needs-select {
  display: inline-block;
  line-height: 42rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  font-size: 24rpx;
  background: #f6f7f8;
  color: #111a34;
  border: none;
  border-radius: 3px;
  width: 23%;
  text-align: center;
}

.needs-active {
  display: inline-block;
  background: #f0f1f1;
  color: #11bcfd;
  font-size: 24rpx;
  padding: 14rpx 26rpx;
  margin: 10rpx 10rpx;
  border-radius: 16rpx;
  line-height: 42rpx;
  border-radius: 3px;
  width: 23%;
  text-align: center;
}

.action-box {
  ul {
    padding: 10px;

    li {
      text-align: center;
      padding: 13px;
      font-size: 15px;
      color: #4f575e;
    }
  }
}

.no-data-search {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #90959a;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  p {
    margin-bottom: 5px;
  }

  button {
    color: #11bcfd;
    border: 1px solid #11bcfd;
    border-radius: 20px;
    background-color: #ffffff;
    width: 35%;
    font-size: 12px;
    margin-top: 20px;
  }
}

.suspensionBtn {
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  border: 3px solid #a9e5fc;
  background: linear-gradient(to right, #02d6fc 0%, #1fa5ff 100%);
  border-radius: 40rpx;
  background-color: #fff;
  width: 45%;
  font-size: 26rpx;
  padding: 2px 0;
}
</style>
