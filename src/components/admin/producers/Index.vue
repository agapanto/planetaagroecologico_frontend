<template>
  <div class="ui container">

    <admin-menu></admin-menu>

    <producer-table v-bind:producers="producers"></producer-table>

  </div>
</template>

<script>
import AdminMenu from '../../admin/AdminMenu'
import ProducerTable from './ProducerTable'
import store from '../../../store'

export default {
  name: 'admin_producers',
  data () {
    return {
      producers: []
    }
  },
  methods: {
  },
  computed: {

  },
  mounted: function () {
    const ctrl = this
    var data = store.state.store.findAll('producer')
    data.then(
      function (result) {
        ctrl.producers = result
      }
    )
  },
  components: {
    'admin-menu': AdminMenu,
    'producer-table': ProducerTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
