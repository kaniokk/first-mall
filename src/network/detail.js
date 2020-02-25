import {myRequest} from 'network/request'

export function detail(iid) {
  return myRequest({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function recommend() {
  return myRequest({
    url: "/recommend"
  })
}

// 创建类
export class Goods {
  constructor(content,summy,extra) {
    this.images = content.images,
    this.style = content.style,
    this.name = summy.name,
    this.price = summy.price,
    this.sum = summy.sum,
    this.topic = summy.topic,
    this.author = extra.author,
    this.publisher = extra.publisher,
    this.date = extra.date,
    this.iid = extra.iid
  }
}