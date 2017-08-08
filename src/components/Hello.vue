<template>
  <div class="hello">
    <div class="ui raised very padded text container segment">
      <!-- <img class="ui center aligned" src="../assets/planetaagroecologico_logo.png"> -->
      <h2>
        {{ hero.title }}
        <br>
        <small>
          {{ hero.subtitle }}
        </small>
      </h2>
      <button class="ui primary button">
        Registrarme
      </button>
    </div>
    <div class="ui text container segment">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      hero: {
        title: 'Registrate ahora como productor',
        subtitle: 'Y te avisaremos cuando puedas comenzar a vender'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
