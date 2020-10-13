<template>
  <div class="outer">
    <div class="inner" v-if="Object.keys(playlist).length !== 0">
      <div class="top" @click="PushTo_PlayListDetail">
        <img :src="playlist.coverImgUrl">
        <div class="updata-time">{{playlist.updateFrequency}}</div>
      </div>
      <div class="bottom">{{playlist.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  props: {
    playlist: {}
  },
  methods: {
    PushTo_PlayListDetail() {
      console.log(this.playlist.id);
      this.$router.push('/playlist/'+this.playlist.id)
    },
  }
}
</script>
<style scoped>
  .inner  {
    width: 100%;
    margin-top: 5px;
  }
  .top {
    height: 110px;
  }
  .top img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .updata-time {
    font-size: 12px;
    position: relative;
    bottom: 25px;
    left: 5px;
    color: white;
  }
  .bottom {
    font-size: 14px;
  }
</style>