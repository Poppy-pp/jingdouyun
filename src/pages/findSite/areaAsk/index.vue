<!-- 位置要求 -->
<template>
  <div class="container">
    <van-tree-select
      :items="areas"
      :main-active-index="mainActiveIndex"
      :active-id="activeId"
      v-bind:click-nav="onClickNav"
      v-bind:click-item="onClickItem"
    />
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      area: "",
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
      activeId: 1 // 被选中元素的id
    };
  },
=======
   data() {
       return {
          area:'',
          areas:[
            { text: '不限', children: [  { text: '不限', id: 1, disabled: false },]},
            { text: '附近', children: [  { text: '不限', id: 2, disabled: false },{ text: '500m以内', id: 3, disabled: false },{ text: '1000m以内', id: 4, disabled: false },]},
            { text: '区域', children: [  { text: '不限', id: 5, disabled: false },{ text: '东城区', id: 6, disabled: false },{ text: '武侯区', id: 7, disabled: false },]},
            { text: '地铁', children: [  { text: '不限', id: 8, disabled: false },{ text: '1号线',id: 9, disabled: false  }, { text: '3号线',id: 10, disabled: false  }]},
            { text: '道路', children: [  { text: '不限', id: 12, disabled: false },{ text: '一环', id: 13, disabled: false },{ text: '四环', id: 14, disabled: false },]},
            { text: '商圈', children: [  { text: '总部基地', id: 15, disabled: false }, { text: '中关村', id: 16, disabled: false },{ text: '软件园', id: 17, disabled: false },]},
          ],
          mainActiveIndex: 0,// 左侧高亮元素的index
          activeId: 1,// 被选中元素的id
          arr:[],
       }
   },
>>>>>>> 5a946e7b15f3b24ba39be291a7a1e9b89f223318
  components: {},
  computed: {},
  methods: {
    // 点击一级菜单
    onClickNav(e) {
      console.log(e.mp.detail.index);
      this.mainActiveIndex = e.mp.detail.index;
    },
    // 点击子集
    onClickItem(e) {
<<<<<<< HEAD
      console.log(e);
      this.activeId = e.mp.detail.id;
      this.showPopup = false;
      this.area = this.activeId;

=======
      this.activeId = e.mp.detail.id;//选中变蓝色
>>>>>>> 5a946e7b15f3b24ba39be291a7a1e9b89f223318
      // 带参返回上一页
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      prevPage.setData({
        //往上一页传递的参数值
        addrask: e.mp.detail
      });
      wx.navigateBack({
        delta: 1
      });
    }
  },
  created() {}
};
</script>

<style lang="stylus"></style>
