<template>
  <MenuItem>
    <div slot="left-nav">
      <img src="~@/assets/img/menu.png" alt="">
    </div>
    <div slot="middle-nav" class="menu">
      <Item link="/profile"><div slot="item-text" class="item">我的</div></Item>
      <Item link="/find"><div slot="item-text" class="item">发现</div></Item>
      <Item link="/cloudtribe"><div slot="item-text" class="item">云村</div></Item>
      <Item link="/video"><div slot="item-text" class="item">视频</div></Item>
    </div>
    <div slot="right-nav">
      <img src="~@/assets/img/search.png" alt="" @click="_search">
    </div>
  </MenuItem>
</template>
<script>
import MenuItem from './MenuItem'
import Item from './Item'
export default {
  name:'Menu',
  data() {
    return{}
  },
  components: {
    MenuItem,
    Item
  },
  methods: {
    _search() {
      this.$router.push('/search')
    }
  }
}
</script>
<style scoped>
  .menu {
    display: flex;
  }
  .item {
    flex: 1;
  }
</style>