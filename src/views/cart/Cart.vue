<template>
  <div id="Cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import { mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: "cartLength"
    }) 
  }
}
</script>

<style>
  .nav-bar {
    background-color: pink;
  }
  #Cart {
    height: 100vh;
  }
</style>
