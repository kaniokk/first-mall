<template>
  <div>
    <navbar class="navbar">
      <div slot="left" class="back" @click="returnBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="item">
        <div v-for="(item,index) in titles" :key="item.index" 
        class="itemTitle" :class="{active: index == currentIndex}" 
        @click="activeItem(index)">
          {{item}}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
export default {
  name: 'DetailNavbar',
  components: {
    Navbar
  },
  data() {
    return {
      titles: ["商品","参数","推荐"],
      currentIndex: 0
    }
  },
  methods: {
    activeItem(index) {
      this.currentIndex = index;
      this.$emit("itemClick",index)
    },
    returnBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .navbar {
    position: relative;
    z-index: 10;
  }
  .item {
    display: flex;
    font-size: 15px;
  }
  .itemTitle {
    flex: 1
  }
  .active {
    color: pink;
  }
  .back img {
    margin-top: 10px;
    margin-left: 10px;
  }
</style>