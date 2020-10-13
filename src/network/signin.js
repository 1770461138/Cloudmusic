import {request} from './request'
export function PSignIn(phone,password) {//手机登录,md5_password密码加密处理
  return request({
    url:'/login/cellphone',
    params: {
      phone,
      password
    }
  })
}
export function ESignIn(email,password) {//网易邮箱登录
  return request({
    url:'/login',
    params: {
      email,
      password
    }
  })
}
export function Register(phone) {//检测手机号是否已注册
  return request({
    url:'/cellphone/existence/check',
    params: {
      phone
    }
  })
}
