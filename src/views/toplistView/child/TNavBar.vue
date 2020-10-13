<template>
  <NavBar>
    <div slot="back-nav" class="back-icon">
      <img src="~@/assets/img/back.png" alt="" @click="Back">
    </div>
    <div slot="content-nav" class="nav-title">
      <span>排行榜</span>
    </div>
  </NavBar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name:'TNavBar',
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
    margin: 7px 0 7px 0;
    width: 30px;
    height: 30px;
  }
  .nav-title {
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-align: left;
  }
</style>