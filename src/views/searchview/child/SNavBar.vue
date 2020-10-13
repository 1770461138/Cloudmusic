<template>
  <div class="navbar">
    <div class="back-icon">
      <img src="~@/assets/img/back.png" alt="" @click="Back">
    </div>
    <div class="input-box">
      <input 
        type="search"
        :placeholder="keyword" 
        autofocus
        v-model.lazy="search_value"
        @keyup.enter="_SongSearch(search_value)">
    </div>
    <div class="category-icon">
      <img src="~@/assets/img/category.png" alt="">
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getDefaultKeyWord,SongSearch} from '@/network/search.js'
export default {
  name:'SNavBar',
  data() {
    return{
      keyword: '',//默认搜索关键词
      search_value: '',//搜索词
    }
  },
  components: {
    NavBar
  },
  created() {
    this._getDefaultKeyWord()
  },
  methods: {
    Back() {
      this.$router.back(-1)
    },
    _getDefaultKeyWord() {
      getDefaultKeyWord().then(res=> {
        this.keyword = res.data.realkeyword
      })
    },
    _SongSearch(search_value) {
      if(search_value !== '') {
        SongSearch(search_value).then(res=>{
          console.log(res);
        })
      }else{
        SongSearch(this.keyword).then(res=>{
          console.log(res);
        })
      }
    },
  },
  watch: {
    search_value() {
      console.log(this.search_value);
    },
  }
}
</script>
<style scoped>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .back-icon, .category-icon {
    width: 40px;
  }
  .input-box {
    flex: 1;
    margin-right: 5px;
    border-bottom: 1px solid black;
  }
  .input-box input {
    width: 100%;
    line-height: 25px;
    font-size: 18px;
    border: none;
  }
  .input-box input:focus {
    outline: none;
  }
  .category-icon img, .back-icon img{
    margin: 7px 5px 7px 5px;
    width: 30px;
    height: 30px;
  }
</style>