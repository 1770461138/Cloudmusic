<template>
  <div  class="user-info">
    <!-- 已登录时显示 -->
    <div class="loggde-in" v-if="Object.keys(this.getSignInfo).length !== 0">
      <div class="user-img">
        <img :src="getUserImg" alt="">
      </div>
      <div class="user-name">
        <div class="">{{getUserName}}</div>
        <div style="font-size:14px"><i>Lv {{userLevel}}</i></div>
      </div>
      <div class="vip">
        <div class="">开通黑胶VIP</div>
      </div>
    </div>
    <!-- 未登录时显示 -->
    <div class="not-logged-in" v-else>
      <div class="img">
        <img src="~@/assets/img/profile/user.png" alt="">
      </div>
      <div class="title">
        <div style="font-size:14px;line-height:50px;color:white">登录立享手机电脑多端同步</div>
      </div>
      <div class="btn">
        <button @click="PushTo_SignIn">立即登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {getUserInfo} from '@/network/userinfo.js'
export default {
  name:'PuserInfo',
  data() {
    return{
      userLevel: 0
    }
  },
  computed: {
    ...mapGetters(['getSignInfo']),
    getUserImg() {
      return this.getSignInfo.profile.avatarUrl
    },
    getUserName() {
      return this.getSignInfo.profile.nickname
    },
  },
  created() {
    this._getUserInfo()
  },
  methods: {
    PushTo_SignIn() {
      this.$router.push('/signin')
    },
    _getUserInfo() {
      if(Object.keys(this.getSignInfo).length !== 0) {
        let id = this.getSignInfo.profile.userId
        getUserInfo(id).then(res=>{
          this.userLevel = res.level
        })
      }else return false
    }
  }
}
</script>
<style scoped>
  .loggde-in, .not-logged-in {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    height: 50px; 
    color: white;
  }
  .user-img, .img {
    width: 50px;
  }
  .user-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-name,.title {
    flex: 1;
    padding-left: 15px;
    line-height: 25px;
  }
  .vip {
    width: 80px;
    line-height: 25px;
    font-size: 14px;
  }
  .btn {
    width: 80px;
  }
  .btn button {
    height: 30px;
    font-size: 14px;
    border: 0.5px solid white;
    background: none;
    border-radius: 15px;
    width: 100%;
    margin: 10px 0 10px 0;
    color:white;
  } 
</style>