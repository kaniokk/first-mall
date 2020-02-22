<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="goodsItem.img" alt="" @load="loadImg">
    <div class="goodsInfo">
      <span>{{goodsItem.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    loadImg() {
      this.$bus.$emit("finishLoad")
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goodsItem {
  width: 50%;
  height: 100%;
  padding-bottom: 30px;
  position: relative;
}

.goodsItem img {
  width: 100%;
  border-radius: 40%;
}

.goodsInfo {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}

.goodsItem span {
  font-size: 12px;
}

</style>
