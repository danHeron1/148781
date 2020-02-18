<template>
  <section>

    <div class="col form-group">
      <p
        class="text-left"
        style="margin-top: 5vh;font-weight: bold;"
      >Email Adress</p>
      <input
        type="email"
        class="form-control mb-2"
        v-model="user.email"
        style="border-left-width: 0px; border-top-width: 0px; border-right-width: 0px; border-radius: 0.01rem;margin-top: -2vh;"
      >
      <p
        class="text-left"
        style="margin-top: 4vh;font-weight: bold;"
      >Password</p>
      <input
        type="password"
        class="form-control mb-2"
        v-model="user.password"
        style="border-left-width: 0px; border-top-width: 0px; border-right-width: 0px; border-radius: 0.01rem; margin-top: -2vh;"
        @keypress.enter="login"
      >
      <p
        class="text-left"
        style="margin-top: 4vh;font-weight: bold;"
      >Confirm Password</p>
      <input
        type="password"
        class="form-control mb-2"
        v-model="user.password2"
        style="border-left-width: 0px; border-top-width: 0px; border-right-width: 0px; border-radius: 0.01rem; margin-top: -2vh;"
        @keypress.enter="login"
      >

      <div class="form-group">
        <div class="row">

          <div
            class="col "
            style="margin-top: 2vh;"
          >

            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
              style="/*! padding-top: 10vh; */margin: 6px -18px 13px -15px;"
            >

            <small>I accept the privacy Statement</small>
            <button
              class="btn btn-dark btn-block"
              style="margin-top: 2vh; border-radius: 0.01rem;padding: 2vh; margin-bottom: 2vh;"
              @click="login"
            >Register</button>
            <div
              class="col"
              style="margin-top: 2vh;"
            >

            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
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
      if (this.user.password === this.user.password2) {

      } else {
        console.console.log('Las contraseñas tienen que ser iguales')
      }
      Auth.signUp(this.user)
      console.log('Soy el login')
      console.log('user local' + this.user.email)
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
