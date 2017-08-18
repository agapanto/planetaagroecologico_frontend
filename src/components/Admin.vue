<template>
  <div class="ui container">

    <div class="ui secondary  menu">
      <a class="item">
        Resumen
      </a>
      <a class="active item">
        Productores
      </a>
      <a class="item">
        Productos
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input placeholder="Buscar..." type="text">
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="ui item">
          Cerrar sesión
        </a>
      </div>
    </div>

    <div class="ui form">
      <div class="required field">
        <label>Archivo csv planetaagroecológico</label>
        <input type="file" id="csv_file" accept=".csv" v-on:change="handleFileUpload" />
      </div>
    </div>

    <table class="ui black table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Productos</th>
          <th>Región</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Productos doña juana</td>
          <td>Sociedad limitada</td>
          <td>10</td>
          <td>5ª</td>
        </tr>
        <tr>
          <td>Productos doña juana</td>
          <td>Cooperativa</td>
          <td>30</td>
          <td>Metropolitana</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var Papa = require('../../static/papaparse/papaparse.min')
var jQuery = require('jquery')
var $ = jQuery

export default {
  name: 'admin',
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
