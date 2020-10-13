<template>
  <div class="style">
    <div class="top-title">榜单推荐</div>
      <div class="wrapper">
        <div class="content" v-for="(item,index) in Recommend_list" :key="index">
          <Matrix :playlist="item" />
        </div>
    </div>
  </div>
</template>
<script>
import Matrix from '@/components/matrix/Matrix'
export default {
  name:'TRecommend',
  data() {
    return{}
  },
  props: {
    Recommend_list: {},
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
    padding-top: 20px;
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