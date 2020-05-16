<template>
  <section>
    <AlertComponent
      v-if="showError"
      :message="errorMessage"
      :code="errorCode"
    ></AlertComponent>

    <div class="col">
      <div class="col mb-3">
        <p
          class="text-left"
          style="margin-top: 5vh;font-weight: bold;color:white;"
        >Email</p>
        <input
          type="email"
          class="form-control mb-3"
          v-model="user.email"
          @keypress="showError = false"
          style="border-left-width: 0px; border-top-width: 0px; border-right-width: 0px; border-radius: 0.01rem;margin-top: -2vh;"
        />
        <p
          class="text-left"
          style="margin-top: 4vh;font-weight: bold;color:white;"
        >
          Password
        </p>
        <input
          type="password"
          class="form-control mb-3"
          v-model="user.password"
          style="border-left-width: 0px; border-top-width: 0px; border-right-width: 0px; border-radius: 0.01rem; margin-top: -2vh;"
          @keypress.enter="login"
          @keypress="showError = false"
        />
      </div>
      <div class="col mb-3">
        <div class="form-group mb-3">
          <div class="row">
            <div
              class="col "
              style="margin-top: 2vh;"
            >
              <button
                class="btn btn-dark btn-dark btn-block"
                style="margin-top: 2vh; border-radius: 0.01rem;padding: 2vh; margin-bottom: 2vh;background-color: gray;"
                @click="login"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col"
        style="margin-top: 2vh;"
      >
        <a
          class="btn float-left btn-light"
          href="#"
          role="button"
          style="border-top-width: 0px;margin-right: 0px;border-right-width: 0px;border-left-width: 0px;border-bottom-width: 0px;background: white;"
        >Forgot your password?</a>
        <button
          type="button"
          class="btn float-right btn-light"
          @click="logins"
          style="margin: 0vh 0vh 0vh 0vh;background: white;border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;"
        >Register</button>
      </div>

    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
import AlertComponent from '@/components/Helpers/Alerts'
export default {
  name: 'LoginForm',
  components: { AlertComponent
  },
  data () {
    return {
      showError: false,
      errorMessage: '',
      errorCode: '',
      user: {
        email: ' ',
        password: ''
      }
    }
  },
  beforeCreate () {
    console.log(`Estoy en beforecreated ${this.user}`)
  },
  created () {
    console.log(`Estoy en el created ${this.user}`)
  },
  mounted () {
    console.log('soy el mapaaa, digo el log in')
    console.log(`Estoy en el mounted ${this.user}`)
    console.log(`Estoy en ${this.$route.name}`)
  },
  methods: {
    login () {
      /* let user = {
        email: 'esto es local'
      }

      console.log('Soy el login')
      console.log('user local' + user.email)
      console.log('user from data:' + this.user.email)
      console.log('this.user.password')
      Auth.login(this.user)
    //  this.$router.push({ name: 'about' }) */
      Auth.login(this.user).catch(error => {
        // *Tomamos el error y lo utilizamos en el alert correspondiente.
        console.log('Estoy en LoginForm')
        console.log('Esto es un error:' + error.code, error.message)
        this.showError = true
        this.errorMessage = error.message
        this.errorCode = error.code
      })
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
