<template>
  <div class="recommendsView">
    <div v-for="item in recommends" :key="item.index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendsView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommendsView {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 10px;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
  }
  .recommendsView img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
