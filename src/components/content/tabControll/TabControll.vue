<template>
  <div class="tab-controll">
    <div v-for="(item,index) in titles" :key="item.index" class="item"
    :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControll",
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
 .tab-controll {
    display: flex;
 }
 .item {
    flex: 1;
    text-align: center;
    font-size: 14px;
 }
 .item span {
    height: 40px;
    line-height: 40px;
    padding: 5px;
 }
 .active span {
    color: pink; 
    border-bottom: 2px solid pink;
 }
</style>
