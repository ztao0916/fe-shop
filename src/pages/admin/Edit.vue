<template>
  <div>
   <div class="title">
     <product-form
      @save-product="updateProduct"
      :model="model"
      :manufacturers="manufacturers"
      :isEditing="true"
      ></product-form>
   </div>
  </div>
 </template>

<script>
import ProductForm from '@/components/products/ProductForm.vue'
export default {
  name: 'Edit',
  components: {
    'product-form': ProductForm
  },
  created () {
    const {name} = this.model
    if (!name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id']
      })
    }
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers')
    }
  },
  computed: {
    manufacturers () {
      return this.$store.getters.allManufacturers
    },
    model () {
      const product = this.$store.getters.productById(this.$route.params['id'])
      // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，在保存之前不修改本地 Vuex stire 的 product 属性
      return {
        ...product,
        manufacturer: { ...product.manufacturer }
      }
    }
  },
  methods: {
    updateProduct (product) {
      this.$store.dispatch('updateProduct', {
        product
      })
    }
  }
}
</script>

 <style scoped>

 </style>
