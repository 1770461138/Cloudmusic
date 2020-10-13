<template>
  <div class="official" v-if="Object.keys(Official_list).length !== 0">
    <div class="top-title">官方榜</div>
    <div class="outer" v-for="(item,index) in 4" :key="index">
      <div class="inner" @click="PushTo_PlayListDetail(index)">
        <div class="left">
          <img :src="Official_list[index].coverImgUrl" alt="">
          <span>{{Official_list[index].updateFrequency}}</span>
        </div>
        <div class="right">
          <div v-for="(content,i) in Official_list[index].tracks" :key="i" class="text">
            {{i+1}}.{{content.first}} - {{content.second}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'TOfficial',
  data() {
    return{}
  },
  props: {
    Official_list: {},
  },
  methods: {
    PushTo_PlayListDetail(index) {//跳转到歌单详情页面
      console.log(index+'官方榜---------');
      this.$router.push('/playlist/'+this.Official_list[index].id)
    }
  }
}
</script>
<style scoped>
  .top-title {
    font-size: 19px;
    font-weight: bold;
    font-family: '黑体';
    line-height: 30px;
    margin-top: 10px;
  }
  .inner {
    display: flex;
    height: 120px;
    margin: 5px 0 5px 0;
  }
  .left {
    width: 110px;
  }
  .left img {
    width: 110px;
    height: 110px;
    border-radius: 8px;
  }
  .left span {
    font-size: 12px;
    color: white;
    position: relative;
    bottom: 30px;
    left: 5px;
  }
  .right {
    flex: 1;
    padding: 7px 0 7px 10px;
    width: calc(100% - 120px);
  }
  .text {
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    line-height: 32px;
    text-overflow: ellipsis;
  }
</style>