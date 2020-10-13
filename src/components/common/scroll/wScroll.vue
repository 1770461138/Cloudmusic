<template>
  <div ref="wrapper">
    <div class="content" ref="group">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'wScroll',
  data() {
    return{
      scroll: {
        type:Object,
        default() {
          return {}
        }
      },
    }
  },
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper,{
    // })
    // console.log(this.scroll);
        this.personScroll()
  },
  methods: {
    personScroll() {
      // // 默认有六个li子元素，每个子元素的宽度为120px
      // this.$nextTick(()=>{
      //   this.children = this.$refs.group.children
      // let width1 = 0
      // for(let i=0; i<this.children.length; i++) {
      //   width1 += 320
      // }
      // console.log(this.children.length);
      let width = 6 * 120;
      
      this.$refs.group.style.width = width + "px";
      
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
          })
          // console.log(this.scroll);   
    }
  }
}
  

</script>
<style scoped>
  
</style>