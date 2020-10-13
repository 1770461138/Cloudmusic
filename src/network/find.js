import {request} from './request'

export function getBanners(type) {
  return request({
    url:'/banner',
    params: {//type：包括0:pc,1:安卓，2:苹果，3:平板
      type
    }
  })
}
export function getFindData() {
  return request({
    url:'homepage/block/page'
  })
}
export function getPlayListDetail(id) {
  return request({
    url:'/playlist/detail',
    params: {
      id
    }
  })
}