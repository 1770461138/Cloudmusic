<template>
  <div class="outer">
    <div class="outer-title">{{Fselect_title}}</div>
    <wScroll class="content" ref="scroll">
      <div v-for="(item,index) in Fselect.creatives" :key="index" class="inner" ref="inners">
        <img 
          :src="item.uiElement.image.imageUrl" 
          alt="" 
          @click="PushPlayListDetail(index)">
        <div class="inner-title">{{item.uiElement.mainTitle.title}}</div>
      </div>
    </wScroll>
  </div>
</template>
<script>
import wScroll from '@/components/common/scroll/wScroll'
export default {
  name:'FindSelectedPlaylists',
  data() {
    return{
      listID: null
    }
  },
  props: {
    Fselect: {
      type:Object,
      default() {
        return {}
      }
    },
    Fselect_title: String
  },
  components: {
    wScroll
  },
  computed: {
    
  },
  created() {
    
  },
  methods: {
    PushPlayListDetail(index) {//跳转到对应歌单的详情页面
      this.listID = this.Fselect.creatives[index].creativeId
      this.$router.push('/playlist/'+this.listID)
      // console.log(this.listID);
    }
  },
  mounted() {
    // console.log(this.$refs.inners.clientWidth );
    
  }
}
</script>
<style scoped>
  .outer {
    height: 180px;
    margin-top: 12px;
    width: 100%;
  }
  .outer-title {
    height: 28px;
    font-size: 16px;
    font-family: "宋体";
  }
  .content {
    overflow: hidden;
    /* width: 900px; */
    height: 146px;
  }
  .inner {
    float: left;
    width: 110px;
    margin-right: 10px;
  }
  .inner img {
    width: 110px;
    height: 110px;
    border-radius: 5px;
  }
  .inner-title {
    font-size: 12px;
  }
</style>