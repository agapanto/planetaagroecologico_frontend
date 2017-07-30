<template>
  <div id="app">
    <div class="container">
      <img src="./assets/planetaagroecologico_logo.png">
    </div>
    <router-view></router-view>
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
  margin-top: 60px;
  /*text-align: center;
  color: #2c3e50;*/
}
</style>
