<template>
  <section>
    <h3>Hello, Crack</h3>
    <h3>Welcome back homs</h3>
    <div class="col form-group">
      <input
        type="email"
        placeholder="correo"
        class="form-control mb-2"
      >
      <input
        type="pswd"
        placeholder="contraseña"
        class="form-control mb-2"
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

      <button class="btn btn-purple btn-dark btn-block">Iniciar Sesión</button>
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'Login Form'
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
