<template>
  <div class="ui form">
    <div class="required field">
      <label>Archivo csv planetaagroecológico</label>
      <input type="file" id="csv_file" accept=".csv" v-on:change="handleFileUpload" />
    </div>
  </div>
</template>

<script>
var Papa = require('../../../static/papaparse/papaparse.min')
var jQuery = require('jquery')
var $ = jQuery

// JS Data
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
  'producer',
  {
    endpoint: 'producers', // name in plurar by default
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' }
    }
  }
)

store.defineMapper(
  'products_import',
  {
    endpoint: 'products_import', // name in plurar by default
    type: 'object'
  }
)

// GET /producer/
// store.findAll('producer').then((producer) => {
//   console.log('producer')
// })

export default {
  name: 'admin-file-uploader',
  data () {
    return {
    }
  },
  mounted () {
    $(document).ready(function () {
      window.csvtojson = function (file) {
        Papa.parse(file, {
          header: true,
          complete: function (results) {
            console.log('Finished:', results.data)
            store.create(
              'products_import',
              {
                'data': results.data
              }
            )
          }
        })
      }
    })
  },
  methods: {
    handleFileUpload: function (event) {
      var file = event.target.files[0]
      window.csvtojson(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
