<template>
  <div class="ui raised very padded text container segment">
    <h1>
      Inicia sesión
    </h1>
    <p>
      Para poder entrar ingresa tu nombre de usuario y contraseña
    </p>
    <button class="ui primary button" @click="login()">
      Iniciar sesión
    </button>
  </div>
</template>

<script>
// Import the Lock instance
import {lock} from '../main'

export default {
  ready () {
    lock.on('authenticated', function (authResult) {
      lock.getProfile(authResult.idToken, function (error, profile) {
        if (error) {
          // handle error
          return
        }
        localStorage.setItem('profile', JSON.stringify(profile))
        localStorage.setItem('id_token', authResult.idToken)
      })
    })
  },
  methods: {
    login () {
      // Show the lock widget
      lock.show()
    },
    logout () {
      // Remove the profile and token from localStorage
      localStorage.removeItem('profile')
      localStorage.removeItem('id_token')
    }
  }

}

</script>
