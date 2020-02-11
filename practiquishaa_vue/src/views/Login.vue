<template>
  <div class="login container1 ">
    <div class="card p-3">

      <div class="row">
        <div
          class="col-5"
          style="padding: 5vh;"
        >
          <h2>Welcome back</h2>
          <h4>Log in to continue</h4>
          <LoginForm style="margin: 0vh 10vh;"></LoginForm>
        </div>
        <div class="col">

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
  }
}
</script>

<style lang="scss">
.container1 {
  margin: 0vh 20vh 0vh 20vh;
}
</style>
