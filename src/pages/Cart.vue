<template>
 <div>
  <div class="title">
    <h1>{{msg}}</h1>
  </div>
  <template v-for="product in cart">
    <product-item :product="product" :key="product._id"></product-item>
  </template>
 </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem'
export default {
  name: 'Cart',
  components: {
    'product-item': ProductItem
  },
  data () {
    return {
      msg: 'welcome to cart page!'
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

<style scoped>

</style>
