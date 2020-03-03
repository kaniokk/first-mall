export default {
  addCart(content,payLoad) {
    return new Promise((resolve,reject) => {
        // 判断是否重复添加商品
      let oldProduct = null;
      for(let item of content.state.cartList) {
        if(item.iid === payLoad.iid) {
          oldProduct = item
        }
      }

      if(oldProduct) {
        // oldProduct.count += 1;
        content.commit("addCount",oldProduct)
        resolve("商品数量+1")
      } else {
        payLoad.count = 1;
        content.commit("addToCart",payLoad)
        resolve("添加新的商品成功")
      }
    })
  }
}