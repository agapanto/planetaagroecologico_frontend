<template>
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
</template>

<script>
export default {
  name: 'admin-producers-table',
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
