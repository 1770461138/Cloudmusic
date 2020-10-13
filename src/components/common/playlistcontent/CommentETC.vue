<template>
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
</template>
<script>
export default {
  name:'CommentETC',
  data() {
    return{}
  },
  props: {
    comment_count: 0,
    share_count: 0,
  },
  filters: {
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