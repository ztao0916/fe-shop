import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 以后修改state只能通过mutation
  state: {
    // bought items - 购买物品
    cart: [],
    // ajax遮罩层-showLoader
    showLoader: false,
    // 选择商品-product
    product: {},
    // all product
    products: [],
    // all manufacturers - 所有供应商
    manufacturers: [],
    manufacturer: {}
  },
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations
  },
  getters: {
    ...productGetters,
    ...manufacturerGetters
  },
  actions: {
    ...productActions,
    ...manufacturerActions
  }
})
