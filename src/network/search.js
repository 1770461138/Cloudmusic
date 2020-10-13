import {request} from './request'

export function getMusicSearchUrl(id) {//获取音乐搜索链接
  return request({
    url:'/song/url',
    params: {
      id
    }
  })
}
export function getMusicDetail(ids) {
  return request({
    url:'/song/detail',
    params: {
      ids
    }
  })
}
export function SongSearch(keywords) {//单曲搜索
  return request({
    url:'/cloudsearch',
    params: {
      keywords
    }
  })
}
export function getDefaultKeyWord() {//默认搜索关键词
  return request({
    url:'/search/default'
  })
}
export function HotSearch() {//热搜列表详细
  return request({
    url:'/search/hot/detail'
  })
}