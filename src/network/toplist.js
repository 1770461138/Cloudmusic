import { request} from './request'

export function getTopListData() {
  return request({
    url:'/toplist/detail'
  })
}