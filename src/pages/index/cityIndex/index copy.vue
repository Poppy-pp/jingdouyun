<!-- 城市索引 -->
<template>
  <div class="container indexMenu">
    <div class="view">
      <i-index height="100%" @change="onChange">
        <i-index-item v-for="(item,index) in city" :name="item.key" :key="index">
          <view
            class="i-index-demo-item"
            v-for="(it,ind) in item.list"
            @click="itemClick(it)"
            :key="ind"
          >{{it.name}}</view>
        </i-index-item>
      </i-index>
    </div>
  </div>
</template>

<script>
import { cities } from "@/utils/city";
export default {
  data() {
    return {
      city: []
    };
  },
  components: {},
  computed: {},
  methods: {
    itemClick(item) {
      wx.setStorage({
        key:"cname",
        data:item.name
      })
      wx.navigateBack({
        delta: 2
      });
      // wx.redirectTo({
      //   url: "/pages/index/main?name=" + item.name
      // });
    },
    onChange(event) {
      const detail = event.mp.detail;
    },
    formatCity() {
      let storeCity = new Array(26);
      const words = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ];
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
          key: firstName
        });
      });
      this.city = storeCity;
    }
  },
  created() {
    this.formatCity();
  }
};
</script>

<style lang="stylus" scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

.indexMenu {
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
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
