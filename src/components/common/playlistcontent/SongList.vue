<template>
  <div class="song-list">
    <BetterScroll class="content" ref="scroll" :data="songlistData">
     
    <SongListItem 
      v-for="(item,index) in songlistData.length"
      :key="index"
      :MusicId="songlistData[index].id"
      :INDEX="index"
    />
  
    </BetterScroll>
  </div>
</template>
<script>
import BetterScroll from '@/components/betterscroll/BetterScroll'
import SongListItem from './SongListItem'
export default {
  name:'SongList',
  data() {
    return{}
  },
  props: {
    songlistData: {//歌曲列表
      type:Array,
      default() {
        return []
      }
    }
  },
  components: {
    SongListItem,
    BetterScroll
  },
  computed: {
    getMusicId() {
      return this.songlistData
    }
  },
  methods: {
    // btn() {
    //   console.log(this.song_list_data[0].id);
    // }
  }
}
</script>
<style scoped>
  .song-list {
    background: white;
    height: calc(100vh - 371px);
  }
  .content {
    overflow: hidden;
    height: 100%;
    position: relative;
  }
</style>