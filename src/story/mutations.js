export default {
  addCount(state,payLoad) {
    payLoad.count ++
  },
  addToCart(state,payLoad) {
    payLoad.check = true;
    state.cartList.push(payLoad)
  }
}