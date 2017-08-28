<template>
  <table class="ui black table">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Producto</th>
        <th>Productor</th>
        <th>Unidad</th>
        <th>Precio</th>
        <th>Observaciones</th>
      </tr>
    </thead>
    <tbody>
      <importer-table-row v-bind:row="row" v-for="row in data"></importer-table-row>
    </tbody>
  </table>
</template>

<script>
import ImporterTableRow from './ImporterTableRow'

export default {
  name: 'admin-producers-table',
  props: {
    data: {
      default: function () { return [] }
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'importer-table-row': ImporterTableRow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
