<template>
  <div id="profile">
    <Menu style="color:white"/>
    <BetterScroll class="content" ref="scroll">
      <div>
        <PuserInfo/>
        <PotherInfo/>
        <PmyMusic/>
        <PuserPlaylist/>
      </div>
    </BetterScroll>
  </div>
</template>
<script>
import Menu from '@/components/navmenu/Menu'
import PuserInfo from './child/PuserInfo'
import PotherInfo from './child/PotherInfo'
import PmyMusic from './child/PmyMusic'
import PuserPlaylist from './child/PuserPlaylist'
import BetterScroll from '@/components/betterscroll/BetterScroll'

import {mapGetters} from 'vuex'
export default {
  name:'Profile',
  data() {
    return{}
  },
  components: {
    Menu,
    PuserInfo,
    PotherInfo,
    PmyMusic,
    PuserPlaylist,
    BetterScroll
  },
  computed: {
    ...mapGetters(['getSignInfo']),
    getBGurl() {
      if(this.getSignInfo.profile.userId !== undefined) {
        return this.getSignInfo.profile.backgroundUrl
      }return false
    }
  }
}
</script>
<style scoped>
  #profile {
    background: url('~@/assets/img/profile/bg.jpg') no-repeat ;
    height: calc(100vh - 93px);
    background-size: contain;
    
  }
  .content {
    overflow: hidden;
    height: 100%;
    position: relative;
  }
</style>