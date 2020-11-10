<template>
 <!-- <form @submit.prevent="saveProduct">
  <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        v-model="model.name"
        name="name"
        class="form-control" />
    </div>
    <div class="form-group">
      <label>Price</label>
      <input
        type="number"
        class="form-control"
        placeholder="Price"
        v-model="model.price"
        name="price" />
    </div>
    <div class="form-group">
      <label>Manufacturer</label>
      <select
        type="text"
        class="form-control"
        v-model="model.manufacturer"
        name="manufacturer">
        <template v-for="manufacturer in manufacturers">
          <option
            :value="manufacturer._id"
            :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
            :key="manufacturer._id">
            {{manufacturer.name}}
          </option>
        </template>
      </select>
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
    <div class="form-group">
      <label>Image</label>
      <input
        type="text"
        lass="form-control"
        placeholder="Image"
        v-model="model.image"
        name="image"
        class="form-control" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea
        class="form-control"
        placeholder="Description"
        rows="5"
        v-model="model.description"
        name="description"
       ></textarea>
    </div>
    <div class="form-group new-button">
      <button class="button">
        <i class="fa fa-pencil"></i>
        <span v-if="isEditing">Update Product</span>
        <span v-else>Add Product</span>
      </button>
    </div>
  </div>
 </form> -->
  <div class="productInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="名称">
          <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="价格">
         <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="制造商">
        <el-select v-model="model.manufacturer.name" clearable placeholder="请选择制造商" style="width:100%;">
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="model.image"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="saveProduct">更新产品</el-button>
        <el-button v-else @click="saveProduct">新增产品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct () {
      // $emit子传父
      this.$emit('save-product', this.model)
    }
  }
}
</script>

<style scoped>

</style>
