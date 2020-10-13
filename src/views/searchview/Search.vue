<template>
  <div id="search">
    <SNavBar/>
    <BetterScroll class="content" ref="scroll">
      <div>
        <!-- <SHRecords/> -->
        <SHotSearch/>
      </div>
    </BetterScroll>
  </div>
</template>
<script>
import SNavBar from './child/SNavBar'
// import SHRecords from './child/SHRecords'
import SHotSearch from './child/SHotSearch'
import BetterScroll from '@/components/betterscroll/BetterScroll'
export default {
  name:'Search',
  data() {
    return{}
  },
  components: {
    SNavBar,
    // SHRecords,
    SHotSearch,
    BetterScroll
  }
}
</script>
<style scoped>
  #search {
    margin-left: 10px;
    margin-right: 10px;
    height: calc(100vh - 93px);
  }
  .content {
    overflow: hidden;
    height: 100%;
    position: relative;
  }
</style>