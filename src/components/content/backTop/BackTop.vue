<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .backTop {
    position: fixed;
    right: 10px;
    bottom: 55px;
  }
  .backTop>img {
    width: 50px;
    height: 50px;
  }
</style>
