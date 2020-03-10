<template>
  <div class="login container ">
    <div class="card p-3">

      <div class="row no-gutters">

        <div class="col-sm-6  d-none d-lg-block">

          <img
            v-bind:src="'https://scontent.fcjs2-1.fna.fbcdn.net/v/t1.15752-9/84301686_215565806238222_6094784443879260160_n.png?_nc_cat=103&_nc_ohc=mgrkVgG2hHgAX-l6_t1&_nc_ht=scontent.fcjs2-1.fna&oh=fd2832635c4873ca20631924a0a2b6bf&oe=5EBCF9E5'"
            width="100%"
          />
        </div>

        <div class="col-lg-6">

          <button
            type="button"
            class="btn btn-light"
            @click="login"
            style="margin: 10vh 8vh 0vh -4vh; background: white;border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;"
          >Sign In</button>
          <button
            type="button"
            class="btn btn-light"
            @click="logins"
            style="margin: 10vh -2vh 0vh 2vh;background: white;border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;"
          >Register</button>
          <LoginForm style="padding: 0vh 5vh;"></LoginForm>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  methods: {
    logins () {
      this.$router.push({ name: 'SignUp' })
    }

  }
}
</script>

<style lang="scss">
</style>
