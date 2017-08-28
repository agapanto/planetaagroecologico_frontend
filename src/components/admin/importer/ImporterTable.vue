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
      <tr v-for="row in data">
        <td>{{ row.TIPO }}</td>
        <td>{{ row.PRODUCTO }}</td>
        <td>{{ row.PRODUCTOR }}</td>
        <td>{{ row.UNIDAD }}</td>
        <td>{{ row.PRECIO }}</td>
        <td>{{ row.OBSERVACIONES }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'admin-producers-table',
  props: ['data'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
