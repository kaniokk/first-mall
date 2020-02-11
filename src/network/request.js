import axios from 'axios'

// 老师视频中的接口
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
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err1 => {
    console.log(err1)
  })
  
  // 3.发送真正的拦截请求(返回的是promise)
  return instance(config)
}


// 根据自己创建的express简单搭建的服务器接口
// 使用该接口时不能访问localhost：8080创建的vue项目，而是手动输入http://127.0.0.1:8080
export function myRequest(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })

  return instance(config)
}