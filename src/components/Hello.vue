<template>
  <div class="hello ui container">
    <img src="../assets/planetaagroecologico_logo.png">
    <br>
    <br>
    <h4>
      {{ hero.title }}
      <br>
      <small>
        {{ hero.subtitle }}
      </small>
    </h4>
    <button class="ui primary button">
      Registrarme
    </button>
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
