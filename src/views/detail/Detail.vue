<template>
  <div id="detail">
    <detail-navbar class="navbar" @itemClick="itemClick" ref="nav"></detail-navbar>
    <scroll class="content" ref="scroll"
      :probeType="3"
     @scrollTrigger="contentScroll">
      <detail-swiper :itemImage="itemImage"></detail-swiper>
      <detail-params ref="params" :goods="goods" @itemImgLoad="itemImgLoad"></detail-params>
      <detail-recommend ref="recommend" :recommend="recommend"></detail-recommend>
    </scroll>
    <detail-bottom @addCart="addCart"></detail-bottom>
    <!-- 修饰符.native用于监听组件的原生事件 -->
    <back-top @click.native="backClick()" v-show="isShow"/>
    <!-- <toast :message="message" :isToastShow="isToastShow"></toast> -->
  </div>
</template>

<script>
import DetailNavbar from 'views/detail/childComps/DetailNavbar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/content/toast/Toast'

import DetailParams from './childComps/DetailParams'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottom from './childComps/DetailBottom'

import {itemListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils'

import {detail,Goods,recommend} from 'network/detail'

import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailParams,
    DetailRecommend,
    Scroll,
    DetailBottom,
    // Toast
  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      itemImage: [],
      goods: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // message: '',
      // isToastShow: false
    }
  },
  methods: {
    ...mapActions({
      add: 'addCart'
    }),
    itemClick(index) {
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
    },
    itemImgLoad() {
      this.refresh();
      this.getThemeTopY();
    },
    contentScroll(position) {
      // console.log(position)
      // 1.获取Y值
      const positionY = -position.y;
      // 判断置顶符号是否相显示
      this.isShow = (-position.y) > 500;
      // 2.position和主题中的值进行对比
      let length = this.themeTopYs.length
      for(let i=0;i < length;i++) {
        if(this.currentIndex !== i && ((i < length - 1) && positionY >= this.themeTopYs[i] && positionY <this.themeTopYs[i+1]) || ((i === length-1) && positionY >= this.themeTopYs[i])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      const product = {};
      product.topic = this.goods.topic;
      product.price = this.goods.price;
      product.images = this.goods.images[0];
      product.name = this.goods.name;
      product.iid = this.goods.iid;
      // this.$store.commit("addCount",product);
      // this.$store.dispatch("addCart",product).then(res => {
      //   console.log(res);
      // })
      // 注意：由于调用的actions文件中的函数名称与methods中的函数名起冲突，需要使用对象的形式改变函数名
      // 冲突时报错RangeError: Maximum call stack size exceeded----最大堆栈超过了最大值
      this.add(product).then(res => {
        this.$Toast.show(res,1000)
      })

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

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    },100)

  },
  // mounted() {
  //   const refresh = debounce(this.$refs.scroll.refresh,500)
  //   this.itemImgListener = () => {
  //     // refresh代表的是程序本身，需要加括号才能执行程序
  //     refresh()
  //   },
  //   this.$bus.$on("finishLoad",this.itemImgListener)
  // },
  updated() {

    
  },
  destroyed() {
    this.$bus.$off("finishLoad",this.itemImgListener)
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
    height: 84%;
    background-color: #ffffff;
  }
</style>
