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
      <tr v-for="producer in producers_resume">
        <td>{{ producer.name }}</td>
        <td>{{ producer.type }}</td>
        <td>{{ producer.products_number }}</td>
        <td>{{ producer.region }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'admin-producers-table',
  data () {
    return {
      producers_resume: [
        {
          name: 'Productos doña juana',
          type: 'Sociedad limitada',
          products_number: '10',
          region: '5'
        },
        {
          name: 'Productos doña juana',
          type: 'Cooperativa',
          products_number: '30',
          region: 'Metropolitana'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
