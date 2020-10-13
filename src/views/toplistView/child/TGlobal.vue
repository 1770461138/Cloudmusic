<template>
  <div class="global">
    <div class="top-title">全球榜</div>
      <div class="wrapper">
        <div v-for="(item,index) in Global_list" :key="index" class="content">
          <Matrix :playlist="item" />
        </div>
      </div>
  </div>
</template>
<script>
import Matrix from '@/components/matrix/Matrix'
export default {
  name:'TGlobal',
  data() {
    return{}
  },
  props: {
    Global_list: {}
  },
  components: {
    Matrix
  },
  methods: {},

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