<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'BetterScroll',
  data() {
    return{
      scroll: {//滚动对象
        type: Object,
        default() {
          return {}
        }
      }
    }
  },
  props: {
    probeType: {//用于监听滚动的位置,类型有0,1,2,3
      type: Number,
      default: 1
    },
    ScrollX: {//是否横向滚动
      type: Boolean,
      default: false
    },
    ScrollY: {//是否纵向滚动
      type: Boolean,
      default: true
    },
    click: {//监听点击事件
      type: Boolean,
      default: true
    },
    pullupLoad: {//上拉加载更多
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    },
    refreshDelay: {
      type: Number,
      default: 500
    }
  },
  mounted() {
    setTimeout(()=>{
        this._initScroll()
    },this.refreshDelay)
    
  },
  methods: {
    _initScroll() {//初始化betterscroll
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: this.click,
        scrollX: this.ScrollX,
      })
      console.log(this.scroll);
      //监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    },
    refresh() {//刷新事件
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    // data() {
    //   setTimeout(()=>{
    //     this.refresh()
    //     console.log('----------------------');
    //   },this.refreshDelay)
    // }
  }
}
</script>
<style scoped>
  
</style>