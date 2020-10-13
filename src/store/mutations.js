import { stat } from "fs"
import state from "./state"

export default{
  SaveStyleRecommendData(state,data) {
    state.style_recommend_data = {...data}
  },
  Now_Music(state,url) {
    state.now_music = url
  },
  Set_Duration(state,duration) {
    state.music_duration = duration
  },
  Set_Play(state,flag) {
    state.isPlaying = flag
  },
  Set_MusicInfo(state,info) {//添加单个歌曲的信息，用于在播放条上显示歌名歌手等信息
    state.now_music_info = {...info}
  },
  Add_Music_ListIDS(state,list) {//添加歌单，存储的是歌单的所有歌曲的id    
    state.Music_ListIDS = [...list]
  },
  // Set_MusicCount(state,nums) {
  //   state.music_count = nums
  // },
  SET_INDEX(state,INDEX) {
    if(state.Music_ListIDS.length > 0) {
      state.music_index = INDEX
    }
  },
  ADD_INDEX(state) {//下一首的下标值：这里待完善
    if(state.Music_ListIDS.length > 0 && state.music_index+2 <= state.Music_ListIDS.length) {
      state.music_index ++
    }
  },
  SUB_INDEX(state) {//上一首的下标值
    if(state.Music_ListIDS.length > 0 && state.music_index > -1) {
      state.music_index --
    }
  },
  CLEAR_INDEX(state) {//清除下标值，避免在播放另外一个歌单时出现混乱
    if(state.Music_ListIDS.length > 0){
      state.music_index = -1
    }
  },
  SetSignInfo(state,info) {
    state.SignInfo = info
    console.log(state.SignInfo);
  },
  SetUser_Favorite_musicId(state,id) {
    state.User_Favorite_musicId = id
  }
}