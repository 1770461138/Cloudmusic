<template>
  <div class="navbar-item" @click="navbarBtn" :style="ItemActiveStyle">
    <slot name="item-text"></slot>
  </div>
</template>
<script>
export default {
  name:'Item',
  data() {
    return{}
  },
  props: {
    link: String
  },
  computed: {
    RouteIsActive() {//判断当前哪个路由处于活跃状态
      return this.$route.path.indexOf(this.link) !== -1
    },
    ItemActiveStyle() {
      return this.RouteIsActive ? {"font-size": "18px","font-weight": "550","color":"red"} : {}
    }
  },
  methods: {
    navbarBtn() {
      this.$router.push(this.link)
    }
  }
}
</script>
<style scoped>
  .navbar-item {
    flex: 1;
    text-align: center;
    font-weight: 100;
  }
</style>