export default {
  addCart(content,payLoad) {
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
    } else {
      payLoad.count = 1;
      content.commit("addToCart",payLoad)
    }
  }
}