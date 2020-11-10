<template>
<div>
  <div class="title">
    <h1>商品</h1>
  </div>
  <product-list></product-list>
</div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'welcome to your vue.js app'
    }
  },
  components: {
    'product-list': ProductList
  }
}
</script>
