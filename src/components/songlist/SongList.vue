<template>
  <div class="song-list-item" @click="PlayMusic(INDEX)">
    <div class="song-index" >
      <!-- currentIndex === song_id ? true : false -->
      <!-- <img v-if="currentID === MusicId ? true : false" src="~@/assets/img/playlistcontent/playing.png" alt=""> -->
      <span>{{INDEX+1}}</span>
    </div>
    <div class="song-info">
      <div class="song-name">{{song_name}}</div>
      <div class="song-author">{{song_author}} - {{sub_name}}</div>
    </div>
    <div class="more">
      <img src="~@/assets/img/playlistcontent/more.png" alt="">
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {getMusicDetail,getMusicSearchUrl} from '@/network/search.js'
export default {
  name:'SongList',
  data() {
    return{
      song_name: '',
      song_author:'',
      sub_name: '', //歌手右边的副标题
      // song_id: 0,
      // currentID: -1
    }
  },
  props: {
    MusicId: null,
    INDEX: null,
  },
  computed: {
    ...mapGetters(['getIsPlay','getMusicListIDS'])
  },
  created() {
    this._getMusicDetail(this.MusicId)
  },
  methods: {
    _getMusicDetail(id) {
      getMusicDetail(id).then(res=>{
        // console.log(res);
        // this.song_id = res.songs[0].id
        // console.log(this.song_id);
        this.song_name = res.songs[0].name
        this.song_author = res.songs[0].ar[0].name
        this.sub_name = res.songs[0].al.name
      })
    },
    PlayMusic(INDEX) {
      // this.currentID =MusicId
      // console.log(this.currentID);
      //播放歌单里的任意一首歌时把该歌曲的下标值传到vuex库上的music上
      this.$store.commit('SET_INDEX',INDEX)
      //获取音乐url并更新vuex库中的Now_Music
      getMusicSearchUrl(this.MusicId).then(res=>{
        const musicUrl = res.data[0].url
        this.$store.commit('Now_Music',musicUrl)
      })
      //获取音乐的信息并更新到vuex库的MusicInfo
      getMusicDetail(this.MusicId).then(res=>{
        console.log(res);
        this.$store.commit('Set_MusicInfo',res.songs[0])
      })
    },
  },
  
}
</script>
<style scoped>
  .song-list-item {
    display: flex;
    height: 55px;
    font-size: 16px;
    width: 100%; 
  }
  .song-index, .more {
    text-align: center;
    width: 50px;
    line-height: 44px;
    color: rgb(151, 148, 148);
  }
  .song-index img {
    margin-top: 17px;
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
  .song-info {
    flex: 1;
    margin-left: 5px;
    
  }
  .song-name{
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 5px;
  }
  .song-author {
    font-size: 13px;
    margin-top: 3px;
    color: rgb(160, 160, 160);
  }
  .more img {
    margin-top: 7px;
    width: 20px;
    height: 20px;
  }
</style>