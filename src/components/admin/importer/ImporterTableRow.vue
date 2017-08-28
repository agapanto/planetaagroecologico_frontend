<template>
  <tr>
    <td>{{ row.TIPO }}</td>
    <td>{{ row.PRODUCTO }}</td>
    <td>{{ row.PRODUCTOR }}</td>
    <td>{{ row.UNIDAD }}</td>
    <td>{{ row.PRECIO }}</td>
    <td>{{ row.OBSERVACIONES }}</td>
  </tr>
</template>

<script>
export default {
  name: 'admin-producers-table',
  props: {
    row: {
      default: function () { return {} }
    }
  },
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
