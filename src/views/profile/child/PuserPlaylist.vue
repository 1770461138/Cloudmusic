<template>
  <div class="user-playlist">
    <div class="tabcontrol">
      <div class="item" v-for="(item,index) in title" :key="index" @click="itemClick(index)" :class="{active: index === currentIndex}">
        <span >{{item}}</span>
        <span style="font-size: 12px;"></span>
      </div>
      <div class="more">
        <img src="~@/assets/img/profile/more.png" alt="">
      </div>
    </div>
    <div class="playlist">
      <div class="playlist-item" v-for="(item,index) in playlist[type]" :key="index" @click="PushTo_Playlist(index)">
        <img :src="item.coverImgUrl" alt="">
        <div class="name" style="color:black">
          <div style="font-size:14px;line-clamp: 2;height:35px;overflow: hidden;">{{item.name}}</div>
          <div style="font-size:12px;line-height:25px;color:#7a7979">{{item.trackCount}}首</div>
        </div>
      </div>
      <div class="playlist-item">
        <img src="~@/assets/img/profile/add.png" alt="">
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {getUserPlayList} from '@/network/userplaylist.js'
export default {
  name:'PuserPlaylist',
  data() {
    return{
      title: ['创建歌单','收藏歌单','歌单助手'],
      currentIndex: 0,
      playlist: {
        'create':[],//创建歌单
        'collection':[],//收藏歌单
      },
      type: 'create'
    }
  },
  computed: {
    ...mapGetters(['getSignInfo']),
    showPlayList() {
      return this.playlist[this.type]
    }
  },
  created() {
    this._getUserPlayList()
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.type = 'create'
          break;
        case 1:
          this.type = 'collection'
          break;
      }
    },
    _getUserPlayList() {
      if(Object.keys(this.getSignInfo).length !== 0) {
        const uid = this.getSignInfo.profile.userId
        getUserPlayList(uid).then(res=>{
          console.log(res);
          //把我喜欢的音乐的歌单id上传到vuex
          this.$store.commit('SetUser_Favorite_musicId',res.playlist[0].id)
          for(let item of res.playlist) {
            if(item.subscribed ===false) {
              this.playlist['create'].push(item)
            }
            else{
              this.playlist['collection'].push(item)
            }
          }
        })
      }else console.log('222222222');
    },
    PushTo_Playlist(index) {
      // console.log(this.playlist[this.type][index].id);
      this.$router.push('/playlist/'+this.playlist[this.type][index].id)
    }
  }
}
</script>
<style scoped>
  .user-playlist {
    background: white;
    
  }
  .tabcontrol {
    display: flex;
  }
  .item, .more {
    flex: 1;
    text-align: center;
    font-size: 16px;
    line-height: 35px;
    color: rgb(145, 143, 143);
  }
  .active {
    color: rgb(0, 0, 0);
  }
  .more img {
    width: 20px;
    height: 20px;
    position: relative;
    text-align: right;
    top: 5px;
    left: 30px;
  }
  .playlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
    text-align: left;
    padding-left: 10px;
    padding-right: 10px;
  }
  .playlist-item {
    padding-bottom: 10px;
    position: relative;
    display: flex;
    width: 50%;
    
  }
  .name {
    flex: 1;
    margin-left: 5px;
  }
  .playlist img {
    width: 35%;
    height: 60px;
    border-radius: 5px;
    
  }
</style>