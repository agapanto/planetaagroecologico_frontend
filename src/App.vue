<template>
  <div id="app">
    <nav>
      <div class="container">
        <a href="#">
          Iniciar sesión
        </a>
      </div>
    </nav>

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
  font-family: 'Hind', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main{
  margin-top: 60px;
}
</style>
