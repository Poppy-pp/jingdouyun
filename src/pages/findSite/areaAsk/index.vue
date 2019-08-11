<!-- 位置要求 -->
<template>
  <div class="container">
    <van-tree-select
      :items="areas"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      @clickNav="onClickNav"
      @clickItem="onClickItem"
    />
    <div class="btn">
      <button class="resize" @click="resizeNeeds">重置</button>
      <button class="confirm" @click="submitNeeds">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaList: [],
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
      mainActiveIndex: 0, // 左侧高亮元素的index
      activeId: "1", // 被选中元素的id
      arr: []
    };
  },
  components: {},
  computed: {},
  methods: {
    resizeNeeds() {
      this.activeId = "";
      this.areaList = [];
    },
    submitNeeds() {
      wx.navigateBack({
        delta: 1
      });
    },
    // 点击一级菜单
    onClickNav(e) {
      // this.activeId = "";
      this.mainActiveIndex = e.mp.detail.index;
    },
    // 点击子集
    onClickItem(e) {
      //多选 判断
      if (this.activeId.indexOf(e.mp.detail.id) != -1) {
        let aclist = this.activeId.split(",");
        let ind = aclist.findIndex(id => id == e.mp.detail.id);
        aclist.splice(ind, 1);
        this.areaList.splice(ind, 1);
        this.activeId = aclist.join(",");
      } else {
        if (this.activeId == "") {
          this.activeId = e.mp.detail.id + "";
        } else {
          this.activeId += "," + e.mp.detail.id;
        } //选中变蓝色
        this.areaList.push(e.mp.detail);
      }
      // 带参返回上一页
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.setData({
        //往上一页传递的参数值
        addrask: this.areaList,
        addraskId: this.activeId
      });
      // wx.navigateBack({
      //   delta: 1
      // });
    }
  },
  onShow(option) {
    this.mainActiveIndex = 0
    this.resizeNeeds();
    this.activeId = "1"
  }
};
</script>

<style lang="stylus">
.container {
  position: relative;

  .btn {
    position: absolute;
    bottom: 10px;
    right: 23px;
    z-index: 1111111;
    width: 200px;
  }

  .resize, .confirm {
    width: 35%;
    display: inline-block;
    font-size: 13px;
    line-height: 30px;
    border-radius: 3px;
  }

  .resize {
    background-color: #c7cbcf;
    color: #ffffff;
    margin-right: 20px;
  }

  .confirm {
    background: linear-gradient(to right, #02d5fc 0%, #1fa5ff 100%);
    color: #ffffff;
  }

  .button::after {
    border: none;
  }
}
</style>
