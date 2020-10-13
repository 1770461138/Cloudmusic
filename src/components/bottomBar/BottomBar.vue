<template>
  <div class="bottom-bar">
      <div class="sing-img">
        <img :src="getNowMusicInfo.al.picUrl" alt="">
      </div>
      <div class="song-info">
        <div class="song-name">
          <span>{{getNowMusicInfo.name}}</span>
        </div>
        <div class="song-author">
          <span>{{getNowMusicInfo.ar[0].name}}</span>
        </div>
      </div>
      <div class="play-btn">
        <div class="play-pause" @click="PlayMusic">
          <!-- 这里的监听需要监听vuex上面的isplaying，而不是bottombar里的isplay -->
          <img v-if="getIsPlay" src="~@/assets/img/bottombar/pause.png" alt="">
          <img v-else src="~@/assets/img/bottombar/play.png" alt="">
          <el-progress 
            type="circle" 
            :percentage="timeProgress" 
            :width="30" 
            :show-text="false" 
            :stroke-width="2" 
            color="red"
            class="play-progress">
          </el-progress>
        </div>
        <div class="play-menu" @click="nextMusic">
          <img src="~@/assets/img/bottombar/play_menu.png" alt="">
        </div>
      </div>
      <audio :src="getNowMusic" autoplay class="play-music-audio" ref="audio"></audio>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'
import {getMusicSearchUrl,getMusicDetail} from '@/network/search.js'
export default {
  name:'BottomBar',
  data() {
    return{
      totalDuration: 0,//当前音乐的总时长，秒
      isPlay: false,//播放状态
      timeProgress:0,//设置进度条的起始值为0
      debace: true, //简单防抖
    }
  },
  computed: {
    ...mapGetters([
      'getNowMusic',
      'getMusicDuration',
      'getIsPlay',
      'getNowMusicInfo',
      'getMusicListIDS',
      'getMusicIndex'
      ]),
  },
  methods: {
    PlayMusic() {//播放与暂停
      if (this.getNowMusic !== "") {
        if(!this.$refs.audio.paused) {
          this.$refs.audio.pause()
        }else {
          this.$refs.audio.play()
        }
        this.isPlay = !this.isPlay
        this.$store.commit('Set_Play',this.isPlay)
      }
      return false;
    },
    nextMusic() {//下一首
      //先判断歌单里是否有歌曲
      if(this.getMusicListIDS.length === 0) return false
      // console.log(this.getMusicListIDS.length);
        //这里设置isplay是为了在切换下一首的瞬间先显示出暂停按钮
        this.isPlay = false
        this.$store.commit('Set_Play',this.isPlay)
        //这里设置进度条归零是为了解决下面的监听出现bug
        this.timeProgress = 0
        //取出下一首的ID
        this.$store.commit('ADD_INDEX')
        //请求下一首歌曲的url
        //IDS存储了歌单的所有ID,index是下一首歌曲的下标值
        getMusicSearchUrl(this.getMusicListIDS[this.getMusicIndex]).then(res=>{
          this.$store.commit('Now_Music',res.data[0].url)
        })
        //请求下一首歌曲的歌名歌手等信息
        getMusicDetail(this.getMusicListIDS[this.getMusicIndex]).then(res=>{
          console.log(res);
          this.$store.commit('Set_MusicInfo',res.songs[0])
        })
    }
  },
  watch: {
    getNowMusic(){
      this.isPlay = true
      this.$store.commit('Set_Play',this.isPlay)
      // console.log(this.getMusicDuration);
    },
    getIsPlay() {
      // console.log(this.getIsPlay);
      // getNowMusicInfo.dt,这个也是音乐时长
      this.totalDuration = this.getNowMusicInfo.dt/1000
      console.log(this.totalDuration);
      
      let audio = this.$refs.audio
      audio.addEventListener("timeupdate", () => {//监听audio
        //改变进度条的值，作用于el-progress组件，audio.current时audio的自带属性
        console.log(audio.currentTime);
        this.timeProgress = (100/this.totalDuration)*audio.currentTime
        if(audio.currentTime>=this.totalDuration) {
          //当一首歌结束时进度条回归为0
          this.timeProgress = 0
          //进行防抖操作，避免一下子请求不到数据而跳转到下一曲(可能会造成操作多次才请求到数据)
          if(this.getMusicListIDS.length > 0) {
            if (this.debace) {
              this.debace = false;
              this.nextMusic();
              setTimeout((res) => {
                this.debace = true;
              }, 5000);
            }
          }
          this.isPlay = false
          this.$store.commit('Set_Play',this.isPlay)
        }
      })
    },
  }
}
</script>
<style scoped>
  .bottom-bar {
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    display: flex;
    background: rgb(238, 235, 235);
    z-index: 99;
  }
  .sing-img {
    width: 45px;
    height: 45px;
    padding-top: 2px;
  }
  .sing-img img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .song-info {
    flex: 1;
    margin-top: 2px;
    margin-left: 5px;
  }
  .song-info .song-name span {
    font-size: 12px;
    
  }
  .song-info .song-author span {
    font-size: 8px;
    color: rgb(153, 149, 149);
  }
  .play-btn {
    display: flex;
    width: 70px;
    height: 30px;
    margin-top: 10px;
    margin-right: 2px;
    position: relative;
  }
  .play-pause {
    flex: 1;
  }
  .play-progress {
    position: absolute;
    top: 0;
    left: 0;
  }
  .play-menu {
    width: 30px;
  }
  .play-pause img, .play-menu img{
    width: 30px;
    height: 30px;
  }
</style>