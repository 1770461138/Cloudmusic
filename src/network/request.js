import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000
  })
  //请求拦截器
  instance.interceptors.request.use(config => {
    return config
  },err=>{

  })
  //响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  },err=>{

  })
  return instance(config)
}