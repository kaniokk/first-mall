<template>
  <div id="home">
    <navbar class="homeNav">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners" class="homeSwiper"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view/>
    <tab-controll :titles="['流行','新款','精选']" class="tab-controll" @itemClick="clickItem"/>
    <good-list :goods="showGoods"/>
    
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import recommendsView from './childComps/RecommendsView'
import FeatureView from './childComps/FeatureView'

import Navbar from 'components/common/navbar/Navbar'
import TabControll from 'components/content/tabControll/TabControll'
import GoodList from 'components/content/goods/GoodList'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    recommendsView,
    FeatureView,
    Navbar,
    TabControll,
    GoodList
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType: 'pop'
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
      })
    }
  }
}
</script>

<style>
  .homeNav {
    background-color: pink;
    color: white;
    box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .homeSwiper{
    margin-top: 44px;
  }
  .tab-controll {
    position: sticky;
    top: 44px;
    background-color: white;
    z-index: 10
  }
</style>
