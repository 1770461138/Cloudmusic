<template>
  <div class="style">
    <div class="top-title">曲风榜</div>
      <div class="wrapper">
        <div class="content" v-for="(item,index) in Style_list" :key="index">
          <Matrix :playlist="item" />
        </div>
    </div>
  </div>
</template>
<script>
import Matrix from '@/components/matrix/Matrix'
export default {
  name:'TStyle',
  data() {
    return{}
  },
  props: {
    Style_list: {},
  },
  components: {
    Matrix
  },
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
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .content {
    width: 32%;
  }
</style>