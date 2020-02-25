<template>
  <div id="bottom">
    <div class="barItem select">
      <div>
        <div class="icon server"></div>
        <h5>客服</h5>
      </div>
      <div>
        <div class="icon store"></div>
        <h5>店铺</h5>
      </div>
      <div>
        <div class="icon collect"></div>
        <h5>收藏</h5>
      </div>
    </div>
    <div class="barItem">
      <div class="cart text" @click="addToCart">加入购物车</div>
      <div class="charge text">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  methods: {
    addToCart() {
      this.$emit("addCart")
    }
  }
}
</script>

<style scoped>
  #bottom {
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background-color: white;
  }

  .barItem {
    display: flex;
    flex: 1;
  }

  .barItem>div {
    flex: 1;
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-left: 13px;
    margin-top: 2px;
    background-image: url("~assets/img/detail/detail_bottom.png");
    background-size: 80%;
    background-repeat: no-repeat;
  }
  .server {
    background-position: 0 -55px;
  }
  .store {
    background-position: 0 -105px;
  }
  .collect {
    background-position: 0 3px;  
  }

  h5 {
    margin-left: 10px;
  }

  .cart {
    background-color: yellow;
  }

  .charge {
    color: aliceblue;
    background-color: rgb(238, 80, 106);
  }
  .text {
    font-size: 14px;
    padding-top: 15px;
    flex: 1;
    text-align: center;
  }
</style>