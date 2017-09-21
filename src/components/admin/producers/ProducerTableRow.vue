<template>
  <tr>
    <td>{{producer.name}}</td>
    <td>{{producer.description}}</td>
    <td>{{producer.producer_type}}</td>
    <td>{{producer.status}}</td>
  </tr>
</template>

<script>
export default {
  name: 'admin-producers-table',
  props: {
    producer: {
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
