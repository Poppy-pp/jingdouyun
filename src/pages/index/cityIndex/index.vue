<template>
  <div class="container">
    <!-- <div class="containerTop"> -->
    <!-- <div class="search">
        <div :class="isInput?'search-left col-8':'search-left'">
          <i-icon type="search" i-class="icon-b" size="24" />
          <i-input
            i-class="input-b"
            @focus="focus"
            maxlength="10000"
            :value="value"
            type="text"
            @change="getChange"
            placeholder="搜索目的地"
          />
        </div>
        <div v-show="isInput" class="search-right" @click="isInput=false">取消</div>
    </div>-->
    <!-- <div class="tabs">
                <i-tabs :current="current" @change="tabsSelect" color="#19be6b">
                    <i-tab key="1" title="国内" i-class="tab"></i-tab>
                    <i-tab key="2" title="海外" i-class="tab"></i-tab>
                </i-tabs>
    </div>-->
    <!-- <div style="width:100%;text-align:center;margin-top:20px;" v-if="loading">
      <van-loading type="spinner" color="#56c6ff" />
    </div>-->
    <!--索引index组件-->
    <div class="view" v-show="!isInput">
      <i-index
        class="i_indexsss"
        height="100%"
        v-if="siteList&&current==1"
        :scrollTop="scrollTop"
        @change="onChange"
      >
        <template v-for="(item,index) in siteList">
          <i-index-item :key="index" :name="item.key" v-if="item.key != '热门'">
            <div
              class="i-index-demo-item"
              @click="setSite(item1,'name')"
              v-for="(item1,inx) in item.list"
              :key="inx"
            >{{item1.name}}</div>
          </i-index-item>
          <i-index-item :key="index" :name="item.key" v-else>
            <div class="curcity" @click="clickCurCity">
              <div class="title">当前城市</div>
              <h3>
                <i-icon type="coordinates_fill" size="24" color="#13bdfd" />
                {{ locationInfo.address_component.city }}
              </h3>
            </div>
            <!--热门城市-->
            <div class="hot" v-show="!isInput">
              <div class="title">热门城市</div>
              <i-row>
                <i-col span="8" v-for="(item,index1) in hotList" v-if="index1<12" :key="index1">
                  <div
                    class="x-btn"
                    @click="setSite(item,'name')"
                    style="color:#13bdfd"
                    v-if="curCity&&curCity.name == item.name"
                  >{{item.name}}</div>
                  <div class="x-btn" @click="setSite(item,'name')" v-else>{{item.name}}</div>
                </i-col>
              </i-row>
            </div>
          </i-index-item>
        </template>
      </i-index>
      <!-- <i-index height="100%" v-if="siteList&&current==2" :scrollTop="scrollTop">
          <i-index-item v-for="(item,index) in siteList" :key="index" :name="item.key">
            <div
              class="i-index-demo-item"
              @click="setSite(item1,'name')"
              v-for="(item1,inx) in item.list"
              :key="inx"
            >{{item1.name}}</div>
          </i-index-item>
      </i-index>-->
    </div>
  </div>
  <!--搜索列表-->
  <!-- <div class="search-list" v-show="isInput">
      <i-cell-group v-for="(item,index) in searchList" :key="index">
        <i-cell is-link :title="item.name" i-class="bor-b" @click="setSite(item,'name')"></i-cell>
      </i-cell-group>
  </div>-->
  <!-- </div> -->
</template>
<script>
import { cities } from "@/utils/city";
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState({
      curCity: state => state.curCity,
      locationInfo: state => state.locationInfo
    })
  },
  data() {
    return {
      current: 1, //1为国内 2为国外 占时只用国内 没有国外
      scrollTop: 0, //index索引距离顶部距离高度
      value: "",
      siteList: null,
      isInput: false, //是否获取到焦点
      hotList: [],
      searchList: []
    };
  },
  methods: {
    //选项卡切换
    // tabsSelect(obj) {
    //   this.current = obj.mp.detail.key;
    //   if (this.current == 1) {
    //     this.init(this.siteInlandList);
    //   } else {
    //     this.init(this.siteForeignList);
    //   }
    // },
    onChange(item) {
      console.log(item);
    },
    focus() {
      this.isInput = true;
      this.search();
    },
    getChange(value) {
      console.log(value);
      this.value = value.mp.detail.detail.value;
      this.search();
    },
    // 点击当前城市
    clickCurCity() {
      this.$store.commit("SET_City", {
        name: this.locationInfo.address_component.city
      });
      wx.navigateBack();
    },
    //点击搜索列表
    setSite(item, filed) {
      var data = {
        city: item[filed],
        ...item,
        showCon: true,
        name: item[filed] + "市"
      };
      // if (this.current == 1) {
      //   data.nation = "中国";
      // } else {
      //   data.nation = "海外";
      // }
      this.$store.commit("SET_City", data);
      // wx.setStorage({
      //   key: "cname",
      //   data: data
      // });
      // console.log(data);
      // this.isInput = false;
      // this.$store.commit("SET_SITE", data);
      wx.navigateBack();
    },
    //搜索列表
    search() {
      this.searchList = this.hotList.filter(e => {
        return (
          e.name.indexOf(this.value) > -1 || this.value.indexOf(e.name) > -1
        );
      });
    },
    init(data) {
      this.siteList = null;
      this.searchList = [];
      // this.value = this.$store.state.site.city;
      // this.value = ["北京", "成都", "重庆", "武汉"];//初始化搜索格式
      this.hotList = data;
      this.searchList = data;
      //设置
      var cities = data;
      let wordsList = [];
      cities.forEach(item => {
        wordsList.push(item.pinyin.substring(0, 1));
      });
      var words = wordsList.filter((e, i, slef) => {
        return slef.indexOf(e) == i;
      });
      words = words.sort(function compareFunction(param1, param2) {
        return param1.localeCompare(param2, "zh");
      });
      words.unshift("热门");
      let storeCity = new Array(words.length);
      words.forEach((item, index) => {
        storeCity[index] = {
          key: item,
          list: []
        };
      });
      cities.forEach(item => {
        let firstName = item.pinyin.substring(0, 1);
        let index = words.indexOf(firstName);
        storeCity[index].list.push({
          name: item.name,
          key: firstName,
          code: item.code
        });
      });
      this.siteList = storeCity;
      setTimeout(() => {
        mpvue.hideLoading();
      }, 2000);
    }
  },
  created() {
    mpvue.showLoading({
      title: "加载中"
    });
  },
  onShow() {
    this.init(cities);
  },
  onReady() {},
  onLoad() {
    // let than = this;
    // wx.getSystemInfo({
    //   success: function(res) {
    //     than.scrollTop = parseInt(res.screenWidth / 750 * 715);
    //   }
    // });
  }
};
</script>
<style lang="css">
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
view {
  overflow: visible;
  z-index: 1000;
}
.tab {
  padding: 0 20rpx;
}
/*搜索*/
.search {
  width: 674rpx;
  margin: 0 auto;
  height: 70rpx;
  overflow: hidden;
}
.search-left {
  overflow: hidden;
  border-radius: 14rpx;
  width: 100%;
  background: #f8faf9;
  padding-left: 16rpx;
  float: left;
  position: relative;
}
.containerTop {
  height: 680rpx;
}
.col-8 {
  width: 80%;
}
.search-left .icon-b {
  color: #07c687;
  display: inline-block;
  vertical-align: middle;
}
.search-left .input-b {
  padding: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  background: none;
  width: 80%;
}
.search-right {
  float: left;
  font-size: 28rpx;
  color: #ccc;
  line-height: 70rpx;
  padding-left: 20rpx;
}
/*下划线*/
.bor-b {
  border-bottom: 2rpx solid #ccc;
}
.search-list {
  width: 674rpx;
  margin: 0 auto;
  position: absolute;
  left: 38rpx;
  top: 70rpx;
  bottom: 0;
  overflow: auto;
}
.curcity {
  width: 674rpx;
  margin: 0 auto;
  padding: 0 0 50rpx 0;
  position: relative;
  z-index: 1;
  border-bottom: 2rpx solid #f4f4f4;
}
.curcity .title {
  font-size: 30rpx;
  color: #222;
  line-height: 30rpx;
  padding: 30rpx 0 10rpx 0;
  margin: 0rpx 15rpx 10rpx 15rpx;
  color: #8f9499;
}
.curcity h3 {
  font-size: 18px;
  font-weight: 800;
}
.hot {
  width: 674rpx;
  margin: 25rpx auto;
  position: relative;
  z-index: 1;
  border-bottom: 2rpx solid #f4f4f4;
  padding-bottom: 35rpx;
}
.hot .title {
  font-size: 30rpx;
  color: #222;
  line-height: 30rpx;
  padding: 30rpx 0 10rpx 0;
  margin: 0rpx 15rpx 10rpx 15rpx;
  color: #8f9499;
}
.hot .x-btn {
  height: 65rpx;
  line-height: 65rpx;
  margin: 12rpx 15rpx;
  text-align: center;
  background: #f6f7f8;
  font-size: 28rpx;
  color: #222;
}
/*索引*/
/* .view {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1000;
  padding-top:30rpx;
  margin: 0rpx 0 0 35rpx;
  border-top:2rpx solid #f4f4f4
} */
view {
  overflow: visible;
}

.view {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1000;
}
.i-index-demo-item {
  padding: 40rpx 0;
  margin: 0 48rpx;
  border-bottom: 2rpx solid #f4f4f4;
}
.i-index-demo-item:last-child {
  border-bottom: 0;
}
</style>