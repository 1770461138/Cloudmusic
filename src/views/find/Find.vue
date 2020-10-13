<template>
  <div id="find">
    <Menu/>
    <BetterScroll class="content" ref="scroll" >
      <div class="find-content">
        <FindSwipe :Fbanners="banners"/>
        <FEntrance/>
        <FindSelectedPlaylists 
          :Fselect="select_playlists" 
          :Fselect_title="select_title"/>
        <!-- 根据听歌风格推荐的歌曲 -->
        <StyleRecommend 
          :play_lists="style_recommends.creatives" 
          :Fhead_title="style_title"/>
        <!-- 新歌|新碟 ：框架是一样的 -->
        <!-- <StyleRecommend 
          :play_lists="new_songs.creatives" 
          Fhead_title="新歌"/> -->
      </div>
      
    </BetterScroll>
  </div>
</template>
<script>
import Menu from '@/components/navmenu/Menu'
import FindSwipe from './FchildComp/FindSwipe'
import FindSelectedPlaylists from './FchildComp/FindSelectedPlaylists'
import StyleRecommend from './FchildComp/StyleRecommend'
import BetterScroll from '@/components/betterscroll/BetterScroll'
import FEntrance from './FchildComp/FEntrance'

import {getBanners,getFindData} from '@/network/find'
export default {
  name:'Find',
  data() {
    return{
      type: 2,//0: pc;1: android;2: iphone;3: ipad
      banners: [],//轮播图数据
      select_playlists: {},//“精选歌单”数据
      select_title:'',                      //因为数据传到子组件时保存再刷新就会报错：mainTitle没定义
      style_recommends: {},//“风格推荐”数据
      style_title:'',
      scene_recommends: {},//“场景推荐”数据
      new_songs: {},       //“新歌”数据
      newsongs_title:'',
      radio_recommends: {},//“电台推荐”数据
    } 
  },
  components: {
    Menu,
    FindSwipe,
    FindSelectedPlaylists,
    StyleRecommend,
    BetterScroll,
    FEntrance
  },
  created() {
    this._getBanners(this.type)
    this._getFindData()
  },
  methods: {
    playMusic(){
      this.$refs.audio.play();
    },
    _getBanners(type) {//请求轮播图数据
      getBanners(type).then(res=>{
        // console.log(res);
        this.banners = res.banners
        // console.log(this.banners);
      })
    },
    _getFindData() {//请求发现首页的所有数据
      getFindData().then(res=>{
        console.log(res);
        //获取精选歌单数据
        this.select_playlists = res.data.blocks[0]
        this.select_title = res.data.blocks[0].uiElement.mainTitle.title
        console.log(this.select_playlists);

        //获取根据风格推荐歌单数据
        this.style_recommends = res.data.blocks[1]
        
        this.$store.commit('SaveStyleRecommendData',res.data.blocks[1])
        this.style_title = res.data.blocks[1].uiElement.mainTitle.title
        console.log(this.style_recommends);

        //获取根据场景推荐歌单数据
        this.scene_recommends = res.data.blocks[2]
        // console.log(this.scene_recommends);

        //获取新歌数据
        this.new_songs = res.data.blocks[5]
        // console.log(this.new_songs);
        this.newsongs_title = res.data.blocks[5].uiElement.mainTitle.title

        //获取电台推荐数据
        this.radio_recommends = res.data.blocks[7]
        // console.log(this.radio_recommends);
      })
    }
  }
}
</script>
<style scoped>
  #find {
    height: calc(100vh - 94px);
  }
  .find-content {
    margin-left:10px;
    margin-right: 10px;
  }
  .content {
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>