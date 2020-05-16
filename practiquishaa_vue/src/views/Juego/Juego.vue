<template>
  <section>
    <AlertComponent
      v-if="showError"
      :message="errorMessage"
      :code="errorCode"
    ></AlertComponent>
    <div class="Container"></div>
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

.Container {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>
