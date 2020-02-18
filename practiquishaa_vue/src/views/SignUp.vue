<template>
  <div class="login container1 ">
    <div class="card p-3">

      <div class="row no-gutters">

        <div class="col">

          <img
            v-bind:src="'https://scontent.fcjs2-1.fna.fbcdn.net/v/t1.15752-9/83797382_613150709449195_2445596993007910912_n.png?_nc_cat=102&_nc_ohc=F9sNri7fN1EAX_G8g--&_nc_ht=scontent.fcjs2-1.fna&oh=d9e057ae81aa040ee044da42e8ca6c28&oe=5ECC7CFF'"
            width="600"
          />
        </div>

        <div
          class="col-5"
          style="padding: 3vh 5vh;"
        >

          <button
            type="button"
            class="btn btn-light"
            @click="login"
            style="margin: 5vh 8vh 0vh -4vh; background: white;border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;"
          >Sign Up</button>
          <button
            type="button"
            class="btn btn-light"
            style="margin: 5vh -2vh 0vh 2vh;background: white;border-top-width: 0px;border-left-width: 0px;border-right-width: 0px;"
          >Register</button>
          <LoginFormDos
            class="login-form"
            style="margin: 0vh 10vh;"
          ></LoginFormDos>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">
import LoginFormDos from '@/components/LoginFormDos'

export default {
  name: 'login',
  components: {
    LoginFormDos
  }
}
</script>

<style lang="scss">
.container1 {
  margin: 0vh 20vh 0vh 20vh;
}
</style>
