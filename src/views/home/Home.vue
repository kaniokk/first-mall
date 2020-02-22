<template>
  <div id="home">
    <navbar class="homeNav">
      <div slot="center">购物街</div>
    </navbar>
    <tab-controll :titles="['流行','新款','精选']" @itemClick="clickItem" 
                      ref="tabControl1" class="tabControl" v-show="isFixed"/>
    <scroll class="content"
     ref="scroll"
     :probeType="3"
     :pullUpLoad="true"
     @scrollTrigger="trigger"
     @pullingLoad="pullingLoad">
      <home-swiper :banners="banners" class="homeSwiper" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view/>
      <tab-controll :titles="['流行','新款','精选']" @itemClick="clickItem" 
                      ref="tabControl2"/>
      <good-list :goods="showGoods"/>
    </scroll>
    <!-- 修饰符.native用于监听组件的原生事件 -->
    <back-top @click.native="backClick()" v-show="isShow"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import recommendsView from './childComps/RecommendsView'
import FeatureView from './childComps/FeatureView'

import Navbar from 'components/common/navbar/Navbar'
import TabControll from 'components/content/tabControll/TabControll'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    recommendsView,
    FeatureView,
    Navbar,
    TabControll,
    GoodList,
    Scroll,
    BackTop
  },
  mixins:[itemListenerMixin],
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {

  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()

    // 2.取消全局事件的监听
    this.$bus.$off()
  },

  methods: {
    /**
     * 事件监听相关方法
     */
    clickItem(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2: 
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    trigger(position) {
      // 1、判断置顶符号是否相显示
      this.isShow = (-position.y) > 500

      // 2.决定tabControl是否吸顶
      this.isFixed = (-position.y) > this.tabOffsetTop

    },
    pullingLoad() {
      this.getHomeGoods(this.currentType)


    },
    swiperImageLoad() {
      // 2.获取tabControl的tabOffsetTop
      // 所有的组件都有一个属性$el
      /**
       * 如果没有等待轮播图的图片加载直接使用offsetTop属性，则高度
       * 出现错误，因为一开始计算高度时是没有计算入图片的高度
       *  */ 
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  .homeNav {
    background-color: pink;
    color: white;
    /* box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2); */
    /* position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10; */
  }
  /* .homeSwiper{
    margin-top: 44px;
  } */
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .tabControl {
    position: relative;
    z-index: 10;
    background-color: white;
  }
</style>
