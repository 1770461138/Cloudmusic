<template>
  <div id="play-list-detail" >
    <PNavBar class="cc"/>
    <TabControl
      :song_count="SongCount" 
      :subscribed_count="SubscribedCount"
      class="fixed"
      v-show="isshow"
      ref="tabcontrol2"
    />
    <BetterScroll class="content" ref="scroll" :probeType="3" @scroll="ContentScroll">
      <div>
        <PTopInfo :playlistData="playlistData" @ImgLoadEnd="ImgLoadEnd"/>
        <TabControl
          :song_count="SongCount" 
          :subscribed_count="SubscribedCount"
          ref="tabcontrol1"
          v-show="isshow1"
        />
        <PContent :playlistData="playlistData"/>  
      </div>
    </BetterScroll>
  </div>
</template>
<script>
import PNavBar from './child/PNavBar'
import PTopInfo from './child/PTopInfo'
import PContent from './child/PContent'
import TabControl from '@/components/tabcontrol/TabControl'
import BetterScroll from '@/components/betterscroll/BetterScroll'
import {getPlayListDetail} from '@/network/find.js'
export default {
  name:'PlayListDetail',
  data() {
    return{
      playlistID: null,//歌单的路由id
      playlistData: {},//歌单数据
      song_ids: [],//存储歌单中的所有歌曲id
      isshow: false,//控制tabcontrol的显示与隐藏
      tabcontrol_OffsetTop: 0,//用于保存tabcontrol所处的位置高度
      isshow1:true
    }
  },
  components: {
    PNavBar,
    PTopInfo,
    PContent,
    TabControl,
    BetterScroll
  },
  created() {
    //获取唯一的歌单路由id
    this.playlistID = this.$route.params.id
    // console.log(this.play_list_id);
    this._getPlayListDetail(this.playlistID)
  },
  mounted() {
    // this.tabcontrol_OffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    
  },
  computed: {
    SongCount() {//歌曲数量
      return this.playlistData.trackCount
    },
    SubscribedCount() {//收藏人数
      return this.playlistData.subscribedCount
    },
  },
  methods: {
    _getPlayListDetail(id) {//请求歌单的数据
      getPlayListDetail(id).then(res=>{
        console.log(res.playlist);
        this.playlistData = res.playlist
        //将歌单数据中的歌曲id遍历保存下来
        this.playlistData.trackIds.forEach((item) => {
        this.song_ids.push(item.id);
        })
        //将所有歌曲id添加到vuex库上
        this.$store.commit('Add_Music_ListIDS',this.song_ids)
      })
    },
    ImgLoadEnd() {//歌单主页图片加载完成后
      console.log('========');
      console.log(this.$refs.tabcontrol1.$el.offsetTop);
      this.tabcontrol_OffsetTop = this.$refs.tabcontrol1.$el.offsetTop+20
      console.log(this.tabcontrol_OffsetTop);
    },
    ContentScroll(position) {
      console.log(position);
      this.isshow = (-position.y)>240
      this.isshow1 = (-position.y)<240
    }
  }
}
</script>
<style scoped>
  #play-list-detail {
    background: rgb(90, 87, 87);
    background-size: 100% ;
    height: 100vh;
   /* :style="{backgroundImage: 'url(' + (im)+')'}" */
  }
  .content {
    overflow: hidden;
    height: calc(100% - 93px);
    position: relative;
  }
  .cc{
    background: rgb(90, 87, 87);
  }
  .fixed{
    position: relative;
    z-index: 999;
  }
</style>