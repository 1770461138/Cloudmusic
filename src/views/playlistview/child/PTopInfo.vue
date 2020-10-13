<template>
  <div class="playlist-info" @click="btn"  v-if="Object.keys(playlistData).length!==0">
    <div class="head-info">
      <div class="left">
        <img :src="showCoverimg" alt="" @load="ImgLoadEnd">
        <div class="play-count">▷{{showPlayCount|playCountFilter}}</div>
      </div>
      <div class="right">
        <div class="head-title">{{showHeadTitil}}</div>
        <div class="creator-info">
          <img :src="showCreatorImg" alt="">
          <div class="creator-name">{{showCreatorName}} ▷</div>
        </div>
        <div class="description"><span>{{showDescription}}</span></div>
      </div>
    </div>
    <div class="comment-etc">
      <div class="comment-count">
        <img src="~@/assets/img/playlistcontent/comment.png" alt="">
        <div>{{comment_count|commentCountFilter}}</div>
      </div>
      <div class="share-count">
        <img src="~@/assets/img/playlistcontent/share.png" alt="">
        <div>{{share_count|shareCountFilter}}</div>
      </div>
      <div class="download">
        <img src="~@/assets/img/playlistcontent/download.png" alt="">
        <div>下载</div>
      </div>
      <div class="multiple-select">
        <img src="~@/assets/img/playlistcontent/select.png" alt="">
        <div>多选</div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name:'PTopInfo',
  data() {
    return{}
  },
  props: {
    playlistData: {}
  },
  computed: {
    showCoverimg() {//歌单头像
      return this.playlistData.coverImgUrl
    },
    showPlayCount() {//歌单播放量
      return this.playlistData.playCount
    },
    showHeadTitil() {//歌单头部标题
      return this.playlistData.name
    },
    showCreatorImg() {//歌单创建者头像
      return this.playlistData.creator.avatarUrl 
    },
    showCreatorName() {//创建者
      return this.playlistData.creator.nickname 
    },
    showDescription() {//歌单的描述信息
      return this.playlistData.description
    },
    comment_count() {//评论数量
      return this.playlistData.commentCount
    },
    share_count() {//分享数量
      return this.playlistData.shareCount
    }
  },
  methods: {
    btn() {
      console.log(this.playlistData);
    },
    ImgLoadEnd() {
      console.log('-------');
      this.$emit('ImgLoadEnd')
    }
  },
  filters: {
    playCountFilter(value) {
      if(value<10000){
        return value
      }else if(value<100000000){
        return (value/10000).toFixed(1)+'万'
      }return (value/100000000).toFixed(1)+'亿'
    },
    commentCountFilter(value) {
      if(value<100000) {return value}
      return (value/10000).toFixed(1)+'万'
    },
    shareCountFilter(value) {
      if(value<100000) {return value}
      return (value/10000).toFixed(1)+'万'
    }
  }
}
</script>
<style scoped>
  .head-info {
    color: white;
    display: flex;
    padding-top: 10px;
    margin: 20px 10px 0 10px;
  }
  .left {
    width: 35%;
    height: 35%;
    /* height: 125px; */
  }
  .left img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  .play-count {
    font-size: 10px;
    color: white;
    position: relative;
    bottom: 120px;
    left: 60px;
  }
  .right {
    flex: 1;
    margin-left: 10px;
  }
  .head-title {
    font-size: 18px;
  }
  .creator-info {
    margin-top: 5px;
    display: flex;
  }
  .creator-info img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .creator-name {
    margin-left: 5px;
    font-size: 12px;
    line-height: 25px;
  }
  .description  {
    margin-top: 5px;
    height: 40px;
    line-clamp: 2;
    overflow: hidden;
  }
  .description span {
    font-size: 12px;
    text-overflow: ellipsis;
  }
  .comment-etc {
    margin-bottom: 15px;
    color: white;
    text-align: center;
    display: flex;
  }
  .comment-etc img {
    width: 25px;
    height: 25px;
  }
  .comment-count, .share-count, .download, .multiple-select {
    flex: 1;
  }
</style>