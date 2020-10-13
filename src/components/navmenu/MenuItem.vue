<template>
  <div class="menu-item">
    <div class="left"><slot name="left-nav"></slot></div>
    <div class="middle"><slot name="middle-nav"></slot></div>
    <div class="right"><slot name="right-nav"></slot></div>
  </div>
</template>
<script>
export default {
  name:'MenuItem',
  data() {
    return{}
  },
}
</script>
<style scoped>
  .menu-item {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .left, .right {
    width: 45px;
  }
  .left img, .right img {
    width: 25px;
    height: 25px;
    margin: 10px 9px 9px 10px;
  }
  .middle {
    flex: 1;
    font-size: 18px;
  }
</style>