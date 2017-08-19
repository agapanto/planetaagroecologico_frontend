<template>
  <div class="ui container">

    <admin-menu></admin-menu>

    <admin-file-uploader></admin-file-uploader>

    <admin-producers-table></admin-producers-table>

  </div>
</template>

<script>
import AdminMenu from './admin/AdminMenu'
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
    'admin-menu': AdminMenu,
    'admin-file-uploader': AdminFileUploader,
    'admin-producers-table': AdminProducersTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
