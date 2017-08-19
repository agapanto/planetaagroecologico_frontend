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

    <admin-file-uploader></admin-file-uploader>

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
import AdminFileUploader from './admin/AdminFileUploader'

export default {
  name: 'admin',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'admin-file-uploader': AdminFileUploader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
