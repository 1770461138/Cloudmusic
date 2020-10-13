export default{
  style_recommend_data: {},//发现页面-风格推荐
  now_music: '',//储存当前要播放的音乐url
  isPlaying: false, //控制播放暂停
  music_duration: 0,//当前播放的音乐的时长，毫秒
  now_music_info: {},//当前播放的音乐的其他信息(歌名、歌手、头像)
  Music_ListIDS: [],
  music_count: 0,
  music_index: -1,//歌曲的下标值，为了进行上下首切换

  SignInfo: {},//用户登录后获取到的用户数据
  User_Favorite_musicId:null,//用户喜欢的音乐，歌单的id
}