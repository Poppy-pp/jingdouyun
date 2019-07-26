<template>
  <div class="content">

    <div class="content-item"><span class="_bold">{{title}}</span></div>

    <div class="content-area">
        <textarea maxlength="200" class="content-edit" @input="textareaInput" v-model="des" placeholder="请填写10个字以上的问题描述以便我们提供更高的帮助"></textarea>
        <div class="edit-nums">{{textnum}}/200</div>
    </div>

    <div class="content-item"><span class="_bold">相关截图（选填）</span><span class="content-imageNum">{{imageList.length}}/4</span></div>

    <div class="imagebox">
        <div class="imageitem" v-for="(i,index) in imageList" :key="index">
            <img :src="i" class="_image" />
        </div>
        <div v-if="imageList.length < 4" class="add" @click="upimage">
            <img src="/static/images/jia.png" class="_jia">
        </div>
    </div>

    <div class="content-item-metion">
        <div>输入有效联系方式以便开发者联系你（选择）</div>
    </div>

    <div class="content-item" style="justify-content: flex-start"><span class="_bold">联系方式</span><input type="text" v-model="mobile" placeholder="邮箱/手机号" class="_input" placeholder-style="color:#c0c0c0"></div>
   
    <div class="content-item-check">
        <img v-if="ischeck == false" src="/static/images/check.png" class="_checked" @click="check">
        <img v-else-if="ischeck == true" src="/static/images/checked.png" class="_checked" @click="check">
        <div>请填写10个字以上的问题描述以便我们提供更好的帮助</div>
    </div>

    <div class="subit" @click="submit">提交</div>

  </div>
</template>
<script>
export default {
  data() {
    return {
        textnum:0,     //输入框字数
        des:'',        //输入框内容
        imageList:[],   //上传图片列表
        mobile:'',//手机号
        title:'',        //反馈问题标题
        ischeck:false    //选中
    }
  },
  components: {},
  computed:{},
  methods:{
    submit:function(){
        wx.navigateTo({
            url: '/pages/myCenter/optionBack/optionOk/main',
        })
    },
    textareaInput:function(){
        this.textnum = this.des.length
    },
    upimage:function(){
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success:(res) =>{
                const tempFilePaths = res.tempFilePaths;// tempFilePath可以作为img标签的src属性显示图片
                this.imageList = this.imageList.concat(tempFilePaths)
            }
        })
    },
    check:function(){
        this.ischeck = !this.ischeck
    },
    getQuery() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const options = currentPage.options;
      this.title = options.title
    },
  },
  mounted() {
    this.getQuery();
    // 初始化
    this.textnum = 0;
    this.des = '';
    this.imageList = [];
    this.mobile = '';
  },
  created(){
  }
}
</script>

<style scoped lang="stylus">
    .content-item{
        line-height 48rpx 
        height 48rpx
        padding 26rpx 0 14rpx
        font-size 15px
        text-indent 30rpx
        display flex
        flex-direction row
        justify-content space-between
        font-weight bold
    }
    ._bold{
        font-weight bold

    }
    .content-area{
        margin 0 15px 
        height 215rpx 
        border-radius 3px 
        background-color #F6F7F8
        position: relative;
    }
    .content-edit{
        width:100%;
        height:100%;
        padding 10px
        font-size 12px
        box-sizing:border-box;
    }
    .edit-nums{
        height 20px 
        padding 10px 
        line-height 20px 
        font-size 12px
        color #B1B2B4
        position:absolute;
        bottom:0;
        right:0;
    }
    .content-imageNum{
        margin-right 30px 
        color #B1B5B8
        font-weight none
    }
    .imagebox{
        width 100%
        height 70px
        padding 0 0 20px 0
        display flex
        flex-direction row
    }
    ._image{
        width 100% 
        height 100%
    }
    .add{
        width 70px 
        height 70px 
        border 1px solid #EAEAEA
        margin-left 15px
        display flex
        align-items center
        justify-content center
    }
    .imageitem{
        width 70px 
        height 70px 
        margin-left 15px
    }
    ._jia{
        width 45px 
        height 45px
    }
    .content-item-check{
        line-height 48rpx 
        height 48rpx
        padding 44rpx 0 38rpx
        font-size 24rpx
        text-indent 5px
        color #9EA3A7
        display flex
        flex-direction row
        align-items center
        background-color white
    }
    ._checked{
        width 15px 
        height 15px
        margin-left 15px
    }
   .content-item-metion{
        line-height 48rpx 
        height 48rpx
        padding 22rpx 0
        font-size 24rpx
        background-color #F4F5F7
        text-indent 30rpx
        color #B1B2B4
    }
    .subit{
        margin 0 15px
        height 88rpx
        line-height 88rpx 
        color white 
        font-size 15px 
        text-align center
        border-radius 3px
        background-image linear-gradient(to right, #02D5FC 0%,#1FA5FF 100%);
    }
    ._input{
        width 255px
        margin-left 34px
        text-indent 0 !important
        font-weight normal
    }
</style>
