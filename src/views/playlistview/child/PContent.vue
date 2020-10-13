<template>
  <div class="playlist-content" v-if="Object.keys(playlistData).length !== 0">
    <!-- <div class="head">
      <div class="play-icon" @click="PlayAll">
        <img src="~@/assets/img/playlistcontent/play-icon.png" alt="">
      </div>
      <div class="song-count">
        <span>播放全部(共{{showSongCount}}首)</span>
      </div>
      <div class="cafv-icon">
        <span>+ 收藏 ( {{showSubscribedCount|subscribedCountFilter}} )</span>
      </div>
    </div> -->
    <div class="menu">
      <SongList
        v-for="(item,index) in showSongList"
        :key="index"
        :MusicId="showSongList[index].id"
        :INDEX="index"/>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import SongList from '@/components/songlist/SongList'
import {getMusicSearchUrl,getMusicDetail} from '@/network/search.js'
export default {
  name:'PContent',
  data() {
    return{}
  },
  props: {
    playlistData: {},
  },
  components: {
    SongList
  },
  computed: {
    ...mapGetters([
      'getMusicListIDS',
      'getMusicIndex',
      ]),
    showSongCount() {//歌曲数量
      return this.playlistData.trackCount
    },
    showSubscribedCount() {//收藏量
      return this.playlistData.subscribedCount
    },
    showSongList() {//所有歌曲的id
      return this.playlistData.trackIds
    },
  },
  methods: {
    PlayAll() {//播放全部：有bug

      if(this.getMusicListIDS.length === 0) return false
      //每次点击都要清除下标值，不然播放的还是上一次的歌曲
      this.$store.commit('CLEAR_INDEX')
      //取出下一首的ID
      this.$store.commit('ADD_INDEX')
      //请求下一首歌曲的url
      //IDS存储了歌单的所有ID,index是下一首歌曲的下标值
      getMusicSearchUrl(this.getMusicListIDS[this.getMusicIndex]).then(res=>{
        this.$store.commit('Now_Music',res.data[0].url)
      })
      //请求下一首歌曲的歌名歌手等信息
      getMusicDetail(this.getMusicListIDS[this.getMusicIndex]).then(res=>{
        this.$store.commit('Set_MusicInfo',res.songs[0])
      })
    }
  },
  filters: {
    subscribedCountFilter(value) {
      if(value<100000){
        return value
      }else if(value<100000000){
        return (value/10000).toFixed(1)+'万'
      }return (value/100000000).toFixed(1)+'亿'
    }
  },
}
</script>
<style scoped>
  .head {
    height: 44px;
    background: white;
    display: flex;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }
  .play-icon {
    width: 40px;
    margin: 7px 0 7px 10px;
  }
  .play-icon img {
    height: 30px;
    width: 30px;
  }
  .song-count {
    flex: 1;
    font-size: 16px;
    line-height: 44px;
  }
  .cafv-icon {
    width: 120px;
    margin:5px 5px 5px 0;
    font-size: 13px;
    background: red;
    line-height: 34px;
    color: white;
    text-align: center;
    border-radius: 25px;
  }
  .menu {
    background: white;
  }
</style>