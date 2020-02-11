import {request,myRequest} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return myRequest({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
