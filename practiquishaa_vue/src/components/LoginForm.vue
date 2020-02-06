<template>
  <section>
    <h3>Hello, Crack</h3>
    <h3>Welcome back homs</h3>
    <div class="col form-group">
      <input
        type="email"
        placeholder="correo"
        class="form-control mb-2"
        v-model="user.email"
      >
      <input
        type="pswd"
        placeholder="contraseña"
        class="form-control mb-2"
        v-model="user.password"
        @keypress.enter="login"
      >

      <div class="form-group">
        <div class="row">
          <div class="col">
            <small>Remember Me</small>
          </div>

          <div class="col">

            <small>Forgot pswrd prroo?</small>
          </div>

        </div>

      </div>

      <button
        class="btn btn-purple btn-dark btn-block"
        @click='login'
      >Iniciar Sesión</button>

    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: ' ',
        password: ' ' }
    }
  },
  created () {
    console.log(`Estoy en el created ${this.user}`)
  },

  mounted () {
    console.log('soy el mapaaa, dijgo el log in')
    console.log(`Estoy en el mounted ${this.user}`)
    console.log(`Estoy en ${this.$route.name}`)
  },
  methods: {
    login () {
      let user = {
        email: 'esto es local'
      }

      console.log('Soy el login')
      console.log('user local' + user.email)
      console.log('user from data:' + this.user.email)
      console.log('this.user.password')
      this.$router.push({ name: 'about' })
    }
  }
}
</script>
<style lang="scss">
.btn-purple {
  background: rgb(243, 173, 22);
  &:hover,
  &:active {
    background: red;
  }
}
</style>
