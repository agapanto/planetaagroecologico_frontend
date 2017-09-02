import Vue from 'vue'
import Vuex from 'vuex'
import { DataStore } from 'js-data'
import { HttpAdapter } from 'js-data-http'

const httpAdapter = new HttpAdapter(
  {
    basePath: 'http://localhost:8000/api',
    forceTrailingSlash: true
  }
)
const store = new DataStore()

store.registerAdapter('http', httpAdapter, { 'default': true })

store.defineMapper(
  'products_import',
  {
    endpoint: 'products_import', // name in plurar by default
    type: 'object'
  }
)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // this.$state.store
    store: store
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
