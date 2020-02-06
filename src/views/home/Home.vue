<template>
  <div id="home">
    <navbar class="homeNav">
      <div slot="center">购物街</div>
    </navbar>
    <home-swiper :banners="banners" class="homeSwiper"></home-swiper>
    <recommends-view :recommends="recommends"></recommends-view>
    <feature-view/>
    <tab-controll :titles="['流行','新款','精选']" class="tab-controll"/>

    <ul>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
      <li>kkk</li>
    </ul>
    
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import recommendsView from './childComps/RecommendsView'
import FeatureView from './childComps/FeatureView'

import Navbar from 'components/common/navbar/Navbar'
import TabControll from 'components/content/tabControll/TabControll'

import {getHomeMultidata} from 'network/home'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    recommendsView,
    FeatureView,
    Navbar,
    TabControll
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
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
  }
</style>
