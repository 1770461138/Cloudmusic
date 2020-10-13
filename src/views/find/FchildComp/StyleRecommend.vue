<template>
  <div class="style-recommend" v-if="Object.keys(play_lists) !== 0">
    <div class="head-title">{{Fhead_title}}</div>
    <Swipe :auto="0" :continuous="false" :showIndicators="false">
      <SwipeItem 
        v-for="(item,index) in play_lists.length" 
        :key="index">
          <PlayListItem :play_list_items="play_lists[index].resources"/>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
import PlayListItem from '@/components/common/playlist/PlayListItem'


import {getMusicSearchUrl} from '@/network/search.js'
import {mapGetters} from 'vuex'
export default {
  name: 'StyleRecommend',
  data() {
    return{
      head_title: ''
    }
  },
  props: {
    play_lists: {
      type: Array,
      default() {
        return []
      }
    },
    Fhead_title: String
    },
  components:{
    Swipe,
    SwipeItem,
    PlayListItem
  },
  computed: {
    ...mapGetters([
      'getStyleRecommendList'
      ]),
    
  },
  methods: {
    
  },
  created() {
    // getMusicSearchUrl("33894312").then(res=>{
    //   console.log(res);
    // })
    
  },
  
}
</script>
<style scoped>
  .mint-swipe {
    height: 200px;
  }
  .style-recommend {
    margin-top: 10px;
  }
  .head-title {
    font-size: 18px;
    margin-bottom: 5px;
  }
</style>