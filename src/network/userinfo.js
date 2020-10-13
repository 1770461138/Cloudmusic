import {request} from './request'

export function getUserInfo(uid) {//获取用户歌单
  return request({
    url: '/user/detail',
    params: {
      uid
    }
  })
}