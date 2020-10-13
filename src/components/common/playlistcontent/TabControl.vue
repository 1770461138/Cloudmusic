<template>
  <div class="content-head">
    <div class="play-icon" @click="PlayAll">
      <img src="~@/assets/img/playlistcontent/play-icon.png" alt="">
    </div>
    <div class="song-count">
      <span>播放全部(共{{song_count}}首)</span>
    </div>
    <div class="cafv-icon">
      <span>+ 收藏 ( {{subscribed_count|subscribedCountFilter}} )</span>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {getMusicSearchUrl,getMusicDetail} from '@/network/search.js'
export default {
  name:'TabControl',
  data() {
    return{
      count: 0
    }
  },
  props: {
    song_count: {//歌曲数量
      type:Number,
      default: 0
    },
    subscribed_count: {//收藏人数
      type:Number,
      default: 0
    },
  },
  computed: {
    ...mapGetters([
      'getMusicListIDS',
      'getMusicIndex',
      ])
  },
  created() {

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
  methods:{
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
  }
}
</script>
<style scoped>
  .content-head {
    height: 44px;
    background: white;
    display: flex;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }
  .play-icon {
    width: 40px;
    margin-left: 10px;
    margin-top: 7px;
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
</style>