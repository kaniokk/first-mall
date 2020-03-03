<template>
  <div class="cart-bottom-bar">
    <div class="check-button">
      <check-button :isCheck="isSelected" @click.native="clickCheck()"></check-button>
      <span>全选</span>
    </div>
    <div class="sum">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="clickCalcu()">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton' 

  export default {
    name: "cartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return "￥ "+this.$store.state.cartList.filter(item => {
          return item.check
        }).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => {
          return item.check
        }).length
      },
      isSelected() {
        // 使用ES5中的every方法，当数组中的所有元素都符合函数的判断时返回true
        // return this.$store.state.cartList.every(item => {
        //   return item.check
        // })
        // 当购物车里没有数据时，全选按钮为灰色
        if(this.$store.state.cartList.length === 0) return false;
        // 不需要遍历，只要出现一个没选中的则不符合条件
        return !this.$store.state.cartList.find(item => !item.check)
      }
    },
    methods: {
      clickCheck() {
        if(this.isSelected) {
          return this.$store.state.cartList.forEach(item => item.check = false)
        }else {
          return this.$store.state.cartList.forEach(item => item.check = true)
        }
      },
      clickCalcu() {
        if(!this.isSelected) {
          this.$Toast.show("请选择购买的商品",2000)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    height: 40px;
    background-color: aliceblue;
    margin-top: -40px;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .check-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .check-button span {
    margin-left: 10px;
  }
  .sum {
    display: flex;
    align-items: center;
  }
  .calculate {
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    background-color: red;
    color: white;
  }
</style>