<template>
  <tabbar>
      <tabbar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar"
import tabbarItem from "components/common/tabbar/tabbar-item"

export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
