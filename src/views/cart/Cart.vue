<template>
  <div id="Cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/Navbar'
import { mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar
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
</style>
