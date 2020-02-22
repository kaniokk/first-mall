import {debounce} from 'common/utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,500)
    // 下拉加载时因为图片的加载速度导致下拉困难时使用
    // 当better-scroll计算content的容器大小时没有将图片的长度计算在内导致
    // 监听图片是否加载完成
    this.itemImgListener = () => {
      // refresh代表的是程序本身，需要加括号才能执行程序
      refresh()
    },
    this.$bus.$on("finishLoad",this.itemImgListener)  
  }
}