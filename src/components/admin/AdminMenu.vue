<template>
  <div class="ui pointing menu">

    <a class="item" href="#/admin/importer">
      Productos
    </a>
    <a class="item" href="#/admin/importer">
      Categorias
    </a>
    <a class="item" href="#/admin/importer">
      Productores
    </a>
    <a class="active item" href="#/admin/importer">
      Importador csv
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui transparent icon input">
          <input placeholder="Filtrar..." type="text">
          <i class="search link icon"></i>
        </div>
      </div>
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
