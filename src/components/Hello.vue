<template>
  <div class="hello">
    <div class="ui  container">
      <h1>
        {{ hero.title }}
      </h1>
      <p>
        {{ hero.subtitle }}
      </p>

      <button class="ui primary button">
        Registrarme
      </button>
    </div>

    <div class="ui container">
      <div class="ui four stackable cards">
        <div class="card">
          <div class="blurring dimmable image">
            <div class="ui dimmer">
              <div class="content">
                <div class="center">
                  <div class="ui inverted button">Add Friend</div>
                </div>
              </div>
            </div>
            <img src="https://scontent.fscl8-1.fna.fbcdn.net/v/t31.0-8/10680003_10152531931618978_8479690788427191614_o.jpg?oh=bb1dcd223eccc3248518470cd17fa306&oe=5A5BE51A">
          </div>
          <div class="content">
            <a class="header">Tierra Viva</a>
            <div class="meta">
              <span class="date">desde junio de 2017</span>
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="shopping bag icon"></i>
              10 productos a la venta
            </a>
          </div>
        </div>
      </div>
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
