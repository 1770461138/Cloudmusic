import {request} from './request'

export function getUserPlayList(uid) {//获取用户歌单
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}