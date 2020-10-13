<template>
  <div class="entrance">
    <div class="daily-recommendation">
      <div style="height:54px" @click="PushTO_DailyRec">
        <img src="~@/assets/img/Entrance/每日推荐.jpg" alt="" >
        <div class="now-date">{{NowDate}}</div>
      </div>
      <div>每日推荐</div>
    </div>
    <div class="playlist">
      <img src="~@/assets/img/Entrance/歌单.jpg" alt="" @click="PushTO_PL">
      <div>歌单</div>
    </div>
    <div class="ranking-list">
      <img src="~@/assets/img/Entrance/排行榜.jpg" alt="" @click="PushTO_TopList">
      <div>排行榜</div>
    </div>
    <div class="radio">
      <img src="~@/assets/img/Entrance/电台.jpg" alt="" @click="PushTO_Radio">
      <div>电台</div>
    </div>
    <div class="sing-and-chat">
      <img src="~@/assets/img/Entrance/唱聊.jpg" alt="" @click="PushTO_SAC">
      <div>唱聊</div>
    </div>
    <div class="game-zone">
      <img src="~@/assets/img/Entrance/游戏专区.jpg" alt="" @click="PushTO_GZ">
      <div>游戏专区</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'FEntrance',
  data() {
    return{
      NowDate: ''
    }
  },
  created() {
    this.getNowDate()
  },
  methods: {
    getNowDate() {
      this.NowDate = new Date().getDate()
    },
    PushTO_TopList() {
      this.$router.push('/toplist')
    },
    PushTO_DailyRec() {
      console.log('今日推荐');
    },
    PushTO_PL() {
      console.log('歌单');
    },
    PushTO_Radio() {
      console.log('电台');
    },
    PushTO_SAC() {
      console.log('唱聊');
    },
    PushTO_GZ() {
      console.log('游戏专区');
    }
  }
}
</script>
<style scoped>
  .entrance {
    display: flex;
    text-align: center;
    font-size: 14px;
  }
  .now-date {
    color: red;
    position: relative;
    bottom: 35px;
  }
  .daily-recommendation, .playlist, .ranking-list, .radio, .sing-and-chat, .game-zone {
    flex: 1;
    width: 70px;
    padding: 10px 0 10px 0;
  }
  .daily-recommendation img, .playlist img, .ranking-list img, .radio img, .sing-and-chat img, .game-zone img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>