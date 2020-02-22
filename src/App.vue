<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name: 'app',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
