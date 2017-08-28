<template>
  <div class="ui container">

    <admin-menu></admin-menu>

    <admin-producers-table v-bind:data="data"></admin-producers-table>

  </div>
</template>

<script>
import AdminMenu from './admin/AdminMenu'
import AdminProducersTable from './admin/AdminProducersTable'

export default {
  name: 'admin',
  data () {
    return {
      data: []
    }
  },
  methods: {
  },
  components: {
    'admin-menu': AdminMenu,
    'admin-producers-table': AdminProducersTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
