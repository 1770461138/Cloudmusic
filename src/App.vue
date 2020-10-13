<template>
  <div id="app"> 
    <!-- <BottomBar/> -->
    <!-- <router-view/> -->
    <div v-if="!$route.meta.keepAlive">
        <!-- <navTop></navTop> -->
        <BottomBar/>
        <router-view></router-view>
    </div>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import BottomBar from '@/components/bottomBar/BottomBar'
export default {
  name: 'App',
  components: {
    BottomBar
  }
}
</script>>
<style>
  @import url('~@/assets/css/body.css');
</style>
