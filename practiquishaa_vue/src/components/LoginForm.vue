<template>
  <section>

    <div class="col form-group">
      <input
        type="email"
        placeholder="username"
        class="form-control mb-2"
        style="border-left-width: 0px;border-top-width: 0px;border-right-width: 0px; border-radius: 0.01rem;"
      >
      <input
        type="password"
        placeholder="contraseña"
        class="form-control mb-2"
        style="border-left-width: 0px;border-top-width: 0px;border-right-width: 0px; border-radius: 0.01rem;"
        v-model="user.password"
        @keypress.enter="login"
      >

      <div class="form-group">
        <div class="row">
          <div class="col">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              style="/*! padding-top: 10vh; */margin: 6px -18px 13px -15px;"
            >
            <small>Recuerdame</small>
          </div>

          <div class="col">

            <small>Forgot password?</small>
          </div>

        </div>

      </div>

      <button
        class="btn btn-dark btn-purple btn-block"
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
