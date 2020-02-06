import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.创建axios的拦截器
  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    alert(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err1 => {
    alert(err1)
  })
  
  // 3.发送真正的拦截请求(返回的是promise)
  return instance(config)
}