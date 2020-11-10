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
    <el-form
      class="form"
      ref="form"
      :model="modelData"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-form-item label="名称">
        <el-input v-model="modelData.name"></el-input>
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
  data () {
    return {
      modelData: {}
    }
  },
  props: ['model', 'isEditing'],
  created () {
    var manufacturer = this.model
    this.modelData = {...manufacturer}
  },
  computed: {
    loading () {
      return this.$store.state.showLoader
    }
  },
  watch: {
    model (val, oldVal) {
      this.modelData = val
    }
  },
  methods: {
    saveManufacturer () {
      this.$emit('save-manufacturer', this.modelData)
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
