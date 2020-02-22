<template>
<!-- 
    ref如果是绑定在组件中，那么通过this.$ref.refname获取到的是一个组件对象
    ref如果是绑定在普通的元素中，那么通过this.$ref.refname获取到的是一个元素对象
 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  methods: {
    scrollTo(x,y,time = 300) {
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },
  mounted() {
    // 1.创建better-scroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollTrigger",position)
    })
    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingLoad")
    })
  }
}
</script>

<style scoped>

</style>
