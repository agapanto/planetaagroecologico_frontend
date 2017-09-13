<template>
  <div class="ui form">
    <div class="required field">
      <label>Archivo csv planetaagroecológico</label>
      <input type="file" id="csv_file" accept=".csv" v-on:change="handleFileUpload" />
    </div>
  </div>
</template>

<script>
var Papa = require('../../../../static/papaparse/papaparse.min')
var jQuery = require('jquery')
var $ = jQuery

export default {
  name: 'admin-file-uploader',
  props: {
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    var vm = this
    $(document).ready(function () {
      window.csvtojson = function (file) {
        Papa.parse(file, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            vm.$emit('data-loaded', results.data)
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
