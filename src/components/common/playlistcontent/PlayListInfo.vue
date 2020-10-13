<template>
  <div class="play-list-info" v-if="Object.keys(playlistData).length!==0">
    <div class="left">
      <img :src="showCoverimg" alt="">
      
    </div>
    <div class="right">
      <div class="head-title">
        <span>{{showHeadTitil}}</span>
      </div>
      <div class="creator-info">
        <div class="creator-img">
          <img :src="showCreatorImg" alt="">
        </div>
        <div class="creator-name">
          <span>{{showCreatorName}}</span>
          <img src="" alt="">
        </div>
      </div>
      <div class="description">
        <span>{{showDescription}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'PlayListInfo',
  data() {
    return{}
  },
  props: {
    playlistData: {}
  },
  computed: {
    showCoverimg() {
      return this.playlistData.coverImgUrl 
    },
    showHeadTitil() {
      return this.playlistData.name
    },
    showDescription() {
      return this.playlistData.description
    },
    showCreatorImg() {
      return this.playlistData.creator.avatarUrl 
    },
    showCreatorName() {
      return this.playlistData.creator.nickname 
    },
    
  }
}
</script>
<style scoped>
  .play-list-info {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 15px;
    padding-top: 20px;
    display: flex;
    color: white;
  }
  .left {
    width: 140px;
  }
  .right {
    flex: 1;
  }
  .left img {
    width: 130px;
    height: 130px;
    border-radius: 5px;
  }
  .head-title {
    font-size: 18px;
  }
  .creator-info {
    display: flex;
    height: 25px;
    margin-top: 8px;
    margin-bottom: 3px;
  }
  .creator-img{
    width: 32px;
  }
  .creator-name {
    flex: 1;
    line-height: 25px;
  }
  .creator-img img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .creator-name span {
    font-size: 10px;
  }
  .creator-name img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 7px;
    left: 3px;
    background:url('~@/assets/img/playlistcontent/go.png') no-repeat;
  }
  .description span {
    font-size: 10px;
    text-overflow: ellipsis;
  }
  .description  {
    height: 42px;
    line-clamp: 2;
    overflow: hidden;
  }
</style>