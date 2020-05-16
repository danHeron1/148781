<template>
  <div class="login container">
    <div
      class="card p-3"
      style="background-color: #fff0;"
    >

      <div class="row no-gutters">

        <div class="col-sm-6  d-none d-lg-block">

          <img
            v-bind:src="'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.15752-9/96516185_258150225596995_175301658576683008_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=mizO-B05WugAX_zd3AD&_nc_ht=scontent-dfw5-2.xx&oh=321302a94dd023811ae51fa4cc628896&oe=5EDEA115'"
            width="100%"
          />
        </div>

        <div
          class="col-lg-6"
          style="margin-top: 10vh;"
        >

          <LoginFormDos
            class="login-form"
            style="margin: 0vh 5vh;"
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
</style>
