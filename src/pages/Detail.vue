<template>
 <div>
  <product-detail :product="product"></product-detail>
 </div>
</template>

<script>
import ProductDetail from '@/components/products/ProductDetail.vue'
export default {
  name: 'Detail',
  components: {
    'product-detail': ProductDetail
  },
  computed: {
    product () {
      return this.$store.getters.productById(this.$route.params['id'])
    }
  },
  created () {
    // 跳转到详情时,如果本地不存在此商品,则从后端获取此商品信息
    const {name} = this.product
    if (!name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id']
      })
    }
  }
}
</script>

<style scoped>

</style>
