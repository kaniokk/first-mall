<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive" >
      <slot name="item-icon"></slot> 
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="changeColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar-item',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    } 
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    changeColor() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
    color: red;
  }
</style>