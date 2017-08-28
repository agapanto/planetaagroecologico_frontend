<template>
  <div class="ui container">

    <admin-menu></admin-menu>

    <h1>
      Importación de csv
    </h1>
    <p>
      En esta página podrás importar un archivo csv de productores y productos para cargarlos en el sistema. Podrás modificar los datos antes de cargarlos en el sistema de manera de hacer más sencillo el proceso.
    </p>

    <file-uploader v-on:data-loaded="fillTable"></file-uploader>

    <importer-table v-bind:data="data"></importer-table>

  </div>
</template>

<script>
import AdminMenu from '../../admin/AdminMenu'
import FileUploader from './FileUploader'
import ImporterTable from './ImporterTable'

export default {
  name: 'admin_importer',
  data () {
    return {
      data: []
    }
  },
  methods: {
    fillTable (value) {
      this.data = value
    }
  },
  components: {
    'admin-menu': AdminMenu,
    'file-uploader': FileUploader,
    'importer-table': ImporterTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
