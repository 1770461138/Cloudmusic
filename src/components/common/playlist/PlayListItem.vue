<template>
  <div class="play-list-item" v-if="Object.keys(play_list_items).length !== 0">
    <div v-for="(item,index) in play_list_items.length" :key="index">
      <div class="list-content">
        <div class="play-img">
          <img :src="play_list_items[index].uiElement.image.imageUrl" alt="">
        </div>
        <div class="play-text">
          <span class="song-name">{{play_list_items[index].uiElement.mainTitle.title}} </span>
          <span class="song-author"> - {{play_list_items[index].resourceExtInfo.artists[0].name}}</span>
          <!-- subtitle 在返回的数据中，有的数据是没有subtitle，所以会报错 -->
          <!-- <div class="song-describe">{{play_list_items[index].uiElement.subTitle.title}}</div> -->
        </div>
        <div class="play-icon" @click="_getNowMusicUrl(play_list_items[index].resourceId,index)">
            <!-- 比对id，相同就显示播放按钮，不同就显示停止按钮，id是唯一的 -->
          <img v-if="currentMusicID === play_list_items[index].resourceId ? false : true" 
            src="~@/assets/img/stop.png" 
            alt="停止状态">
          <img v-else src="~@/assets/img/play.png" alt="播放状态">
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
import {getMusicSearchUrl,getMusicDetail} from '@/network/search.js'
export default {
  name:'PlayListItem',
  data() {
    return{
      isPlay: false,
      currentMusicID: -1,
      
    }
  },
  props: {
    play_list_items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    
  },
  methods: {
    _getNowMusicUrl(musicID,index) {//利用即将要播放的音乐的id发送网络请求，获取音乐的url并保存到vuex上
      this.currentMusicID = musicID 
      getMusicSearchUrl(musicID).then(res=>{
        const musicUrl = res.data[0].url
        console.log(musicUrl);
        this.$store.commit('Now_Music',musicUrl)
      })
      getMusicDetail(musicID).then(res=>{
        console.log(res);
        this.$store.commit('Set_MusicInfo',res.songs[0])
      })
      //取下音乐时长并保存到vuex上
      const duration = this.play_list_items[index].resourceExtInfo.songData.duration
      this.$store.commit('Set_Duration',duration)
    },
    
  }
}
</script>
<style scoped>
  .list-content {
    display: flex;
    width: 100%;
  }
  .play-img img{
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  .play-text {
    flex: 1;
    padding-left: 10px;
  }
  .song-author,.song-describe {
    font-size: 8px;
  }
  .play-icon {
    width: 50px;
    height: 60px;
  }
  .play-icon img {
    width: 30px;
    height: 30px;
    position: relative;
    top: 15px;
  }
</style>