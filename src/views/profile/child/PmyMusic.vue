<template>
  <div class="my-music">
    <div class="head">我的音乐</div>
    <div class="playlist">
      <BetterScroll class="content" ref="scroll" :ScrollX="true" :ScrollY="false">
      <div class="wrapper">
        <div class="item" style="padding-left: 0">
          <img src="~@/assets/img/profile/mylove.png" alt="" @click="PushTo_Playlist">
          <div style="font-size:13px;position:relative;bottom:55%">我喜欢的音乐</div>
          <el-button size="mini" round style="background:#cbcaca;position:relative;bottom:40%;color:white;">心动模式</el-button>
        </div>
        <div class="item">
          <img src="~@/assets/img/profile/FM.png" alt="">
          <div style="font-size:13px;position:relative;bottom:55%">私人FM</div>
          <div style="font-size:12px;position:relative;bottom:35%;color:white">你的私人曲库</div>
        </div>
        <div class="item">
          <img src="~@/assets/img/profile/sound.png" alt="">
          <div style="font-size:13px;position:relative;bottom:55%">电音专区</div>
          <div style="font-size:12px;position:relative;bottom:35%;color:white">全球热门电音</div>
        </div>
        <div class="item">
          <img src="~@/assets/img/profile/yunbei.png" alt="">
          <div style="font-size:13px;position:relative;bottom:55%">推歌精选</div>
          <div style="font-size:12px;position:relative;bottom:35%;color:white">云贝助力好歌</div>
        </div>
        <div class="item" style="padding-right: 0">
          <img src="~@/assets/img/profile/pk.png" alt="">
          <div style="font-size:13px;position:relative;bottom:55%">赏音猎人</div>
          <div style="font-size:12px;position:relative;bottom:35%;color:white">多人听歌PK</div>
        </div>
      </div>
      </BetterScroll>
    </div>
  </div>
</template>
<script>
import BetterScroll from '@/components/betterscroll/BetterScroll'
import {mapGetters} from 'vuex'
export default {
  name:'PmyMusic',
  data() {
    return{}
  },
  components: {
    BetterScroll
  },
  computed: {
    ...mapGetters(['getUser_Favorite_musicId']),
  },
  methods: {
    PushTo_Playlist(){
      if(this.getUser_Favorite_musicId) {
        this.$router.push('/playlist/'+this.getUser_Favorite_musicId)
      }return false
    }
  }
}
</script>
<style scoped>
  .my-music {
    padding: 10px 10px 0 10px;
    background: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .head {
    font-size: 16px;
    font-weight: 550;
    line-height: 35px;
  }
  .playlist {
    width: 100%;
  }
  .content {
    width: 100%;
    overflow: hidden;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  }
  .item {
    /* flex: 1; */
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    height: 130px;
  }
  .item img {
    width: 100px;
    border-radius: 8px;
  }
</style>