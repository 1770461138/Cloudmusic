<template>
  <div class="play-list-content">
    
        <!-- 这里把歌单的所有数据都传过去，方便playlistinfo组件抓取数据 -->
        <PlayListInfo :playlistData="playlistData"/>
        <CommentETC :comment_count="getCommentCount" :share_count="getShareCount"/>
        <ContentHead 
          :song_count="showSongCount" 
          :subscribed_count="showSubscribedCount"/>
        <SongList :songlistData="showSongList"/>
      
  </div>
</template>
<script>
import PlayListInfo from '@/components/common/playlistcontent/PlayListInfo'
import CommentETC from '@/components/common/playlistcontent/CommentETC'
import ContentHead from '@/components/common/playlistcontent/ContentHead'
import SongList from '@/components/common/playlistcontent/SongList'
import BetterScroll from '@/components/betterscroll/BetterScroll'
export default {
  name:'PlayListContent',
  data() {
    return{
      
    }
  },
  props: {
    playlistData: {}
  },
  components: {
    PlayListInfo,
    CommentETC,
    ContentHead,
    SongList,
    BetterScroll
  },
  created() {
    
  },
  mounted() {
    // console.log(this.playlistData);
  },
  computed: {
    showSongCount() {//歌曲数量
      return this.playlistData.trackCount
    },
    showSubscribedCount() {//收藏人数
      return this.playlistData.subscribedCount
    },
    showSongList() {
      return this.playlistData.trackIds
    },
    getBackground() {
      return this.playlistData.backgroundCoverUrl
    },
    getCommentCount() {//评论条数
      return this.playlistData.commentCount
    },
    getShareCount() {//分享条数
      return this.playlistData.shareCount
    },
  },
  methods: {
    // btn() {
    //   console.log(this.playlistData);
    // }
  }
}
</script>
<style scoped>
  .play-list-content {
    height: calc(100vh - 93px);
  }
  .content {
    overflow: hidden;
    height: 100%;
    position: relative;
    border: 1px solid red;
  }
</style>