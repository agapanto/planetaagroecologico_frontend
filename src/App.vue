<template>
  <div id="app">
    <div class="ui menu">
      <div class="ui container">
        <a class="active item">
          Inicio
        </a>
        <a class="item">
          Ofertas
        </a>
        <a class="item">
          Historias
        </a>
        <div class="right menu">
          <div class="ui dropdown item">
            Ayuda <i class="dropdown icon"></i>
            <div class="menu">
              <a class="item">Quienes somos</a>
              <a class="item">Como comprar</a>
              <a class="item">Como vender</a>
            </div>
          </div>
          <a class="item">
            Iniciar sesión
          </a>
          <div class="item">
            <div class="ui primary button">Regístrate</div>
          </div>
        </div>
      </div>
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
