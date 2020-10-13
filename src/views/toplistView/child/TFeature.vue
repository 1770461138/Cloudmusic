<template>
  <div class="feature">
    <div class="top-title">特色榜</div>
    <div class="wrapper">
      <div class="content" v-for="(item,index) in Feature_list" :key="index">
        <Matrix :playlist="item" />
      </div>
    </div>
  </div>
</template>
<script>
import Matrix from '@/components/matrix/Matrix'
export default {
  name:'TFeature',
  data() {
    return{}
  },
  props: {
    Feature_list: {},
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