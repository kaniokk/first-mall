<template>
  <div class="goods" > 
    <good-list-item v-for="item in goods" :key="item.index" :goodsItem="item"/>
  </div>
</template>

<script>
import GoodListItem from 'components/content/goods/GoodListItem'

export default {
  name: 'GoodList',
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    width: 100%;
    /* flex定义在弹性盒子里 */
    display: flex;
    flex-wrap: wrap;
  }
</style>
