<template>
  <div class="login container1 ">
    <div class="card p-3">
      <div class="row">
        <div class="col">
          <LoginForm></LoginForm>
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
  width: 55vh;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 15%;
  margin-left: auto;
}
</style>
