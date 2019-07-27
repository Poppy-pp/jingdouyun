<!-- 城市索引 -->
<template>
  <div class="container indexMenu">
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
    itemClick(item){
      console.log(item)
    },
    onChange(event) {
      const detail = event.mp.detail
      const scrollTop = detail.scrollTop;
      console.log(event,event.mp.detail,scrollTop,'click right menu callback data')
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
.indexMenu {
  .i-index-demo-item {
    padding 10px 0 10px 10px;
    border-bottom 1px solid #ddd;
  }
}
</style>
