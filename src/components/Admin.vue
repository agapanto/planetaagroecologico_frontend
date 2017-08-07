<template>
  <div class="ui container">
    <div class="ui right floated teal buttons">
      <div class="ui button">Nuevo productor</div>
      <div class="ui floating dropdown icon button">
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item"><i class="cloud upload icon"></i> Importar desde csv</div>
          <!-- <div class="item"><i class="delete icon"></i> Eliminar Productores</div>
          <div class="item"><i class="hide icon"></i> Deshabilitar Productores</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
