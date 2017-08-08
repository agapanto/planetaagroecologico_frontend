<template>
  <div id="app">
    <div class="ui menu">
      <div class="header item">
        Planeta Agroecológico
      </div>
      <a class=" item">
        Nuestra misión
      </a>
      <a class="item">
        Tienda
      </a>
      <a class="item">
        Sucursales
      </a>
      <a class="item">
        Acerca de
      </a>

    </div>

    <router-view id="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main{
  margin-top: 60px;
}
</style>
