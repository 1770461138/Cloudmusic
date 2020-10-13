<template>
  <div class="other-info">
    <div class="local">
      <img src="~@/assets/img/profile/local.png" alt="">
      <div>本地音乐</div>
    </div>
    <div class="download">
      <img src="~@/assets/img/profile/download.png" alt="">
      <div>下载管理</div>
    </div>
    <div class="radio">
      <img src="~@/assets/img/profile/radio.png" alt="">
      <div>我的电台</div>
    </div>
    <div class="cafv">
      <img src="~@/assets/img/profile/cafv.png" alt="">
      <div>我的收藏</div>
    </div>
    <div class="newsong">
      <img src="~@/assets/img/profile/new.png" alt="">
      <div>关注新歌</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'PotherInfo',
  data() {
    return{}
  },
}
</script>
<style scoped>
  .other-info {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    padding-bottom: 10px;
    color: white;
  }
  .local, .download, .radio, .cafv, .newsong {
    flex: 1;
    width: 70px;
    text-align: center;
    /* padding: 10px 0 10px 0; */
  }
  .local img, .download img, .radio img, .cafv img, .newsong img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    
  }
</style>