<template>
  <div id="detail">
    <detail-navbar class="navbar"></detail-navbar>
    <scroll class="content" ref="scroll">
      <detail-swiper :itemImage="itemImage"></detail-swiper>
      <detail-main :goods="goods" :recommend="recommend"></detail-main>
    </scroll>
  </div>
</template>

<script>
import DetailNavbar from 'views/detail/childComps/DetailNavbar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import Scroll from 'components/common/scroll/Scroll'

import DetailMain from './childComps/DetailMain'

import {itemListenerMixin} from 'common/mixin'

import {detail,Goods,recommend} from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailMain,
    Scroll
  },
  mixins:[itemListenerMixin],
  data() {
    return {
      iid: null,
      itemImage: [],
      goods: {},
      recommend: []
    }
  },
  created() {
    // 1.获取iid
    this.iid = this.$route.params.iid
    // 2.根据iid请求详细数据
    detail(this.iid).then(res => {
      this.itemImage = res.data.result.topImages,
      // 3.录入展示数据
      this.goods = new Goods(res.data.content,res.data.summy,res.data.extra)
    })
    // 3.获取详细数据
    recommend().then(res => {
      this.recommend = res.data.list
    })
  },
  // mounted() {
  //   const refresh = debounce(this.$refs.scroll.refresh,500)
  //   this.itemImgListener = () => {
  //     // refresh代表的是程序本身，需要加括号才能执行程序
  //     refresh()
  //   },
  //   this.$bus.$on("finishLoad",this.itemImgListener)
  // },
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off("itemImgLoad",this.itemImgListener)
  }
}
</script>

<style scoped>
  #detail {
    background-color: #ffffff;
    position: relative;
    z-index: 1;
    height: 100vh;
    overflow: hidden;
  }
  .navbar {
    background-color: #ffffff;
    position: relative;
    z-index: 10;
  }
  .content {
    height: 100%;
    background-color: #ffffff;
  }
</style>
