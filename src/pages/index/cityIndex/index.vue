<!-- 城市索引 -->
<template>
   <div class="container">
     <i-index height="100%" @change="onChange">
        <i-index-item v-for="(item,index) in city"  :name="item.key" :key="index">
            <view class="i-index-demo-item" v-for="(item2,index2) in item.list" :key="index2">
                {{item2.name}}
            </view>
        </i-index-item>
    </i-index>
   </div>
</template>

<script>
import { cities } from '@/utils/city';
export default {
   data() {
       return {
         city :[],
       }
   },
  components: { },
  computed:{},
  methods:{
    formatCity(){
      let storeCity = new Array(26);
      const words = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      words.forEach((item,index)=>{
          storeCity[index] = {
              key : item,
              list : []
          }
      })
      cities.forEach((item)=>{
          let firstName = item.pinyin.substring(0,1);
          let index = words.indexOf( firstName );
          storeCity[index].list.push({
              name : item.name,
              key : firstName
          });
      })
      console.log(storeCity)

      this.city = storeCity;
    }
  },
  created(){
    this.formatCity();
  }
}
</script>

<style lang="stylus" scoped>
</style>
