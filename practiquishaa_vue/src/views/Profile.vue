<template>
  <div class=" p-4 ">
    <div
      class="card p-3"
      style="background-color: #0000002e;"
    >

      <div class="row no-gutters">

        <div class="col-sm-6  d-none d-lg-block">

          <img
            v-bind:src="'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'"
            width="60%"
          />
        </div>

        <div class="col-lg-5 ">
          <img
            v-bind:src="'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'"
            width="30%"
          />
          <form>
            <div
              class="row"
              style="margin-top: 3vh;"
            >
              <p style="margin-top: 8px; color:white;">Nombre</p>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre"
                  style="margin-left: -8px;"
                >
              </div>

            </div>
            <div
              class="row"
              style="margin-top: 3vh;"
            >
              <p style="margin-top: 8px; color:white;">Apellido</p>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellido"
                  style="margin-left: -8px;"
                >
              </div>

            </div>
            <div
              class="row"
              style="margin-top: 3vh;"
            >
              <p style="margin-top: 8px; color:white;">Correo</p>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Correo"
                >

              </div>

            </div>
            <div
              class="row"
              style="margin-top: 3vh;"
            >
              <p style="margin-top: 8px; color:white;">Telefono</p>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Telefono"
                >

              </div>

            </div>
            <button
              class="btn btn-primary btn-primary btn-block  mx-auto"
              style="padding: 2vh; width: 25vh; margin: 15px 130px;border-radius: 35px;"
            >
              Guardar Cambios
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>

<script lang="js">

</script>

<style lang="scss">
</style>
