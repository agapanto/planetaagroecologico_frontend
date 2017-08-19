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

    <admin-producers-table></admin-producers-table>

  </div>
</template>

<script>
import AdminFileUploader from './admin/AdminFileUploader'
import AdminProducersTable from './admin/AdminProducersTable'

export default {
  name: 'admin',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'admin-file-uploader': AdminFileUploader,
    'admin-producers-table': AdminProducersTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
