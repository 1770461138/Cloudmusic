<template>
  <NavBar>
    <div slot="back-nav" class="back-icon">
      <img src="~@/assets/img/playlistnavbar/back.png" alt="" @click="Back">
    </div>
    <div slot="content-nav" class="nav-title">
      <span>歌单</span>
    </div>
    <div slot="search-nav" class="search-icon">
      <img src="~@/assets/img/playlistnavbar/search.png" alt="">
    </div>
    <div slot="more-nav" class="more-icon">
      <img src="~@/assets/img/playlistnavbar/more.png" alt="">
    </div>
  </NavBar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name:'PNavBar',
  data() {
    return{}
  },
  components: {
    NavBar
  },
  methods: {
    Back() {
      this.$router.back(-1)
    }
  }
}
</script>
<style scoped>
  .back-icon img{
    margin: 7px 0 7px 10px;
    width: 30px;
    height: 30px;
  }
  .nav-title {
    font-size: 20px;
    font-weight: 500;
    color: white;
    text-align: left;
  }
  .more-icon img,.search-icon img {
    margin: 10px 0 9px 0;
    width: 25px;
    height: 25px;
  }
</style>