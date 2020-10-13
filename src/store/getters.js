import state from "./state"

export default{
  getStyleRecommendList(state) {
    return state.style_recommend_data
    // 
  },
  getNowMusic(state) {//取下当前播放的歌曲url
    if(state.now_music === null){
      state.now_music = ''
    }
    return state.now_music
  },
  getMusicDuration(state) {
    return state.music_duration
  },
  getIsPlay(state) {
    return state.isPlaying
  },
  getNowMusicInfo(state) {//取下单个歌曲的信息
    if(state.now_music_info.al === undefined) {
      return {
        al:{
          picUrl:require('@/assets/img/bottombar/singer_img.png')
        },
        name:'歌名',
        ar:[{
            id:0,
            name:'歌手'
        }],
        dt:0,
      }
    }
    return state.now_music_info
  },
  getMusicListIDS(state) {//取下歌单的所有id
    return state.Music_ListIDS
  },
  getMusicIndex(state) {//取下下标值
    return state.music_index
  },
  getSignInfo(state) {//获取登录信息
    return state.SignInfo
  },
  getUser_Favorite_musicId(state) {
    return state.User_Favorite_musicId
  }
}