<template>
  <div id="top-list">
    <TNavBar class="navbar"/>
    <BetterScroll class="content" ref="scroll">
      <div>
        <TRecommend :Recommend_list="Recommend_list"/>
        <TOfficial :Official_list="Official_list"/>
        <TFeature :Feature_list="Feature_list"/>
        <TGlobal :Global_list="Global_list"/>
        <TRegion :Region_list="Region_list"/>
        <TStyle :Style_list="Style_list"/>
        <TMore :More_list="More_list"/>
      </div>
    </BetterScroll>
  </div>
</template>
<script>
import TNavBar from './child/TNavBar'
import TRecommend from './child/TRecommend'
import TOfficial from './child/TOfficial'
import TFeature from './child/TFeature'
import TGlobal from './child/TGlobal'
import TRegion from './child/TRegion'
import TStyle from './child/TStyle'
import TMore from './child/TMore'
import Matrix from '@/components/matrix/Matrix'
import BetterScroll from '@/components/betterscroll/BetterScroll'
import {getTopListData} from '@/network/toplist.js'
export default {
  name:'TopList',
  data() {
    return{
      Recommend_list: [],//榜单推荐
      Official_list: [],//官方榜
      Feature_list: [],//特色榜
      Global_list: [],//全球榜
      Region_list: [],//地区榜
      Style_list: [],//曲风榜
      More_list: [],//更多榜单
    }
  },
  components: {
    TNavBar,
    TRecommend,
    TOfficial,
    TFeature,
    TGlobal,
    TRegion,
    TStyle,
    TMore,
    Matrix,
    BetterScroll
  },
  created() {
    this._getTopListData()
  },
  methods: {
    _getTopListData() {
      getTopListData().then(res=>{
        const list = res.list
        console.log(list);
        //for循环取出各类榜单数据
          for(let n in list){
            //取出榜单推荐数据
            if(n==4 || n==22 || n==33) {
              this.Recommend_list.push(list[n])
            }
            //取出官方榜数据
            if(n<4) {
              this.Official_list.push(list[n])
              }
            //取出特色榜数据
            if(n==8 || n==28 || n==34) {
              this.Feature_list.push(list[n])
            }
            //取出全球榜数据
            if(n==15 || n==16 || n==19 || n==20 || n==24 || n==25) {
              this.Global_list.push(list[n])
            }
            //取出地区榜数据
            if(n==11 || n==23 || n==30) {
              this.Region_list.push(list[n])
            }
            //取出曲风榜数据
            if(n==5 || n==7 || n==10 || n==31 || n==32 || n==33) {
              this.Style_list.push(list[n])
            }
            //取出更多榜单数据
            if(n==6 || n==12 || n==17 || n==18 || n==21 || n==22 || n==29) {
              this.More_list.push(list[n])
            }
          }
        console.log(this.Official_list);
        console.log(this.Feature_list);
        console.log(this.Global_list);
        console.log(this.Region_list);
        console.log(this.Style_list);
      })
    }
  }
}
</script>
<style scoped>
  #top-list {
    margin-left:10px;
    margin-right: 10px;
    height: calc(100vh - 93px);
  }
  .content {
    overflow: hidden;
    height: 100%;
    position: relative;
  }
</style>