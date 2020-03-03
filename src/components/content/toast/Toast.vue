<template>
  <div class="toast" v-show="isToastShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isToastShow: false
      }
    },
    methods: {
      show(message,duration=1000) {
        this.message = message;
        this.isToastShow = true;
        setTimeout(() => {
          this.message = '';
          this.isToastShow = false;
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    padding: 10px 4px;
    /* 以父容器为参照物，左边和上边各移动50% */
    left: 50%;
    top: 50%;
    /* 以自身为参照物，平移自身长度的50% */
    transform: translate(-50%,-50%);
    z-index: 2;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 18px;
  }
</style>