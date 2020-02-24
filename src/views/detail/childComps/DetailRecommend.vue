<template>
  <div>
    <h3>猜你喜欢：</h3>
    <good-list :goods="recommend"></good-list>
  </div>
</template>

<script>
  import GoodList from 'components/content/goods/GoodList'

  export default {
    name: "DetailRecommend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodList
    }
  }
</script>

<style scoped>

</style>