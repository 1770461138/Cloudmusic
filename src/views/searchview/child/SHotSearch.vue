<template>
  <div id="hot-search">
    <div class="head-title">热搜榜</div>
    <div class="hot-songs">
      <div 
        v-for="(item,index) in hotsearch" 
        :key="index" 
        class="song-content"
        @click="_SongSearch(item.searchWord)"
         >
          <div class="index" :class="{active: index<3}">{{index+1}}</div>
          <div class="songs">
            <div :class="{song_name: index<3}" class="songs-name">
              {{item.searchWord}}
              <!-- <img v-show="item.iconUrl" :src="item.iconUrl" alt=""> -->
            </div>
            <div class="song-describe">{{item.content}}</div>
          </div>
          <div class="score">{{item.score}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {HotSearch,SongSearch} from '@/network/search.js'
export default {
  name:'SHotSearch',
  data() {
    return{
      hotsearch: {},
    }
  },
  created() {
    this._HotSearch()
  },
  computed: {
  },
  methods: {
    _HotSearch() {
      HotSearch().then(res=>{
        console.log(res);
        this.hotsearch = res.data
      })
    },
    _SongSearch(searchword) {
        SongSearch(searchword).then(res=>{
          console.log(res);
        })
    }
  }
}
</script>
<style scoped>
  #hot-search {
    padding-top: 20px;
  }
  .head-title {
    font-weight: 550;
  }
  .song-content {
    display: flex;
    padding-top: 10px;
  }
  .index {
    width: 30px;
    text-align: left;
    line-height: 35px;
  }
  .active {
    color: red;
  }
  .songs {
    flex: 1;
  }
  .song_name {
    font-size: 18px;
    font-weight: 570;
    font-family: '黑体';
  }
  .song-describe {
    font-size: 14px;
    line-height: 28px;
    color: rgb(156, 156, 156);
  }
  .score {
    width: 75px;
    text-align: right;
    font-size: 14px;
    color: rgb(156, 156, 156);
  }
</style>