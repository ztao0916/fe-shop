<template>
  <!-- <form @submit.prevent="saveManufacturer">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        v-model="model.name"
        name="name"
        class="form-control" />
    </div>

    <div class="form-group new-button">
      <button class="button">
        <i class="fa fa-pencil"></i>
        <span v-if="isEditing">Update Manufacturer</span>
        <span v-else>Add Manufacturer</span>
      </button>
    </div>
  </form> -->
  <div class="manufacturerInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="saveManufacturer">更新制造商</el-button>
        <el-button v-else @click="saveManufacturer">新增制造商</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ManufacturerForm',
  props: ['model', 'isEditing'],
  methods: {
    saveManufacturer () {
      this.$emit('save-manufacturer', this.model)
    }
  }
}
</script>

<style scoped>
  .manufacturerInfo {
    width: 500px;
    margin: 100px auto;
  }
</style>
