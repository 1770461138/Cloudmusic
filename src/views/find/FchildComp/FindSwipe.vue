<template>
  <Swipe class="find-swipe" :auto="3000">
    <SwipeItem v-for="(item,index) in Fbanners" :key="index">
        <img :src="item.pic" alt="" class="img" >
    </SwipeItem>
  </Swipe>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
  name: 'FindSwipe',
  props: {
    Fbanners:{
      type:Array,
      default() {
        return []
          }
        }
    },
  data(){
    return{
      imgisLoad: false
    }
  },
  components:{
    Swipe,
    SwipeItem
  },
  methods: {
    swiperImgLoad() {//监听图片加载完成
      // if(!this.imgisLoad){
      //   this.$emit('swiperImgLoad')
      //   this.imgisLoad = true
      // }
    },
  }
}
</script>
<style scoped>
  img {
    width: 100%;
  }
  .mint-swipe {
    height: 135px;
    border-radius: 6px;
  }
</style>