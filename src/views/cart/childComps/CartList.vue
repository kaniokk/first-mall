<template>
  <div class="cartList">
    <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
        <div>kk</div>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cartList {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
  .content {
    height: 100%;
  }
</style>