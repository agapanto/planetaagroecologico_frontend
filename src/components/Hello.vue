<template>
  <div class="hello container">
    <h3>{{ hero.title }}</h3>
    <h4>{{ hero.subtitle }}</h4>
    <button class="button button-primary">
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
        subtitle: 'Y te avisaremos cuando puedas empezar a vender'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
</style>
