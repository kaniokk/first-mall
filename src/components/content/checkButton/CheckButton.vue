<template>
  <div class="checkButton" :class="{check: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isCheck: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .checkButton {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .check {
    border-color: red;
    background-color: red;
  }
</style>