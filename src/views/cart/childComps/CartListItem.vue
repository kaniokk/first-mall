<template>
  <div class="cartListItem">
    <div class="itemButton">
      <check-button :isCheck="product.check" @click.native="checkClick()"></check-button>
    </div>
    <div class="itemImage">
      <img :src="product.images" alt="">
    </div>
    <div class="itemSummy">
      <h3>{{product.name}}</h3>
      <h5 class="topic">{{product.topic}}</h5>
      <h5 class="price">{{product.price}}</h5>
      <h5 class="count">{{product.count}}</h5>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: "CartListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        return this.product.check = !this.product.check
      }
    }
  }
</script>

<style scoped>
  .cartListItem {
    height: 150px;
    border-bottom: 1px solid rgb(218, 218, 218);
    display: flex;
  }

  .itemButton {
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .itemImage {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemImage img {
    width: 120px;
    height: 120px;
  }

 .price::before {
   content: '￥ '
  }
  .price {
    margin-top: 30px;
    color: orange;
    font-size: 14px;
    float: left;
  }

  .count::before {
    content: "x"
  }

  .count {
    float: right;
    margin-top: 30px;
    margin-right: 10px;
  }
  
  h3 {
    margin-top: 20px;
  }

  .topic {
    margin-top: 15px;
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

</style>