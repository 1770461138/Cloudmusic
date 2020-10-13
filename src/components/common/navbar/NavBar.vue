<template>
  <div class="nav-bar">
    <div class="back"><slot name="back-nav"></slot></div>
    <div class="content"><slot name="content-nav"></slot></div>
    <div class="search"><slot name="search-nav"></slot></div>
    <div class="more"><slot name="more-nav"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 0 0 rgba(100,100,100,.1);
    background: white;
    
  }
  .back,.search, .more {
    width: 40px;
  }
  .content {
    flex: 1;
    color: white;
    font-size: 18px;
  }
</style>