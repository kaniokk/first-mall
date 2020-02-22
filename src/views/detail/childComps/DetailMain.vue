<template>
  <div class="detailMain">
    <div class="propt">
      <div>{{goods.name}}</div>
      <div>{{goods.author}}</div>
    </div>
    <div class="topic">{{goods.topic}}</div>
    <div class="mPropt">
      <div class="price">{{goods.price}}</div>
      <div class="publisher" :style="{color: goods.style}">{{goods.publisher}}</div>
      <div class="sum">{{goods.sum}}</div> 
    </div>
    <div class="date">{{goods.date | showDate}}</div>
    <div v-for="(item,index) in goods.images" :key="index" class="imgs">
      <img :src="item" alt="">
    </div>
    <h3>猜你喜欢：</h3>
    <good-list :goods="recommend"></good-list>
  </div>
</template>

<script>
import GoodList from 'components/content/goods/GoodList'

import {formatDate} from 'common/utils'

export default {
  name: "DetailMain",
  components: {
    GoodList
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      //将时间戳转化为date对象
      // 时间戳单位为秒，date类型为毫秒
      let date = new Date(value * 1000)
      return formatDate(date,"yyyy-MM-dd")
    }
  }
}
</script>

<style scoped>
  .detailMain>.propt{
    font-size: 15px;
    color: pink;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
  }
  .propt > div {
    flex: 1;
    text-align: center;
    margin: 10px auto
  }
  .detailMain>.topic {
    font-size: 16px;
    text-indent: 32px;
    margin: 2px 8px;
  }
  .detailMain>.mPropt {
    margin: 10px 8px;
    display: flex;
  }
  .mPropt div {
    flex: 1;
    text-align: center;
  }
  .price:before {
    content: "单价为:";
  }
  .sum:before {
    content: "数量为:";
  }
  .publisher {
    color: gray;
  }
  .imgs img {
    width: 60%;
    display: block;
    margin: 10px auto;
  }
  .date::before {
    content: "上架时间:"
  }
  .date {
    margin-left: 15px;
  }
</style>
