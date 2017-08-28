<template>
  <div class="ui secondary  menu">

    <a class="item" href="#/admin/importer">
      Importador csv
    </a>

    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input placeholder="Buscar..." type="text">
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="ui item">
        Cerrar sesión
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-menu',
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
