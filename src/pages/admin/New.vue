<template>
  <div class="title">
    <h1>This is Admin/Add</h1>
    <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers">
    </product-form>
  </div>
 </template>

<script>
import ProductForm from '@/components/products/ProductForm.vue'
export default {
  name: 'New',
  components: {
    'product-form': ProductForm
  },
  data () {
    return {
      model: {manufacturer: {name: ''}}
    }
  },
  created () {
    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers')
    }
  },
  computed: {
    manufacturers () {
      return this.$store.getters.allManufacturers
    }
  },
  methods: {
    addProduct (model) {
      this.$store.dispatch('addProduct', {
        product: model
      })
    }
  }
}
</script>

 <style scoped>

 </style>
