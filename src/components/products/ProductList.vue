<template>
  <div>
    <div class="products">
      <div class="container">
        this is ProductList
      </div>
      <template v-for="product in products">
        <product-item :product="product" :key="product._id"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem'
export default {
  name: 'product-list',
  components: {
    'product-item': ProductItem
  },
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    products () {
      // return this.$store.state.products
      return this.$store.getters.allProducts
    }
  }
}
</script>

<style scoped>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>
