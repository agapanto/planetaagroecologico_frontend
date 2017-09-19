<template>
  <table class="ui sortable celled table">
    <thead>
      <tr>
        <th class="sorted ascending">Nombre</th>
        <th class="">Descripción</th>
        <th class="">Estado</th>
      </tr>
    </thead>
    <tbody>
      <producer-table-row v-bind:producer="producer" v-for="producer in producers"></producer-table-row>
    </tbody>
  </table>
</template>

<script>
import ProducerTableRow from './ProducerTableRow'

export default {
  name: 'admin-producers-table',
  props: {
    producers: {
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
    'producer-table-row': ProducerTableRow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
