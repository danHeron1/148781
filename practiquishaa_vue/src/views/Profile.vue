<template>
  <div class="login container1 ">
    <div class="card p-3">

      <div class="row no-gutters">

        <div class="col">

          <img
            v-bind:src="'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.15752-9/88060287_3055393414479313_4625591950005764096_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=QHQL31SyEDgAX9IfZ3h&_nc_ht=scontent-dfw5-1.xx&oh=9b8a577471552cf2b7ccb366a25812c4&oe=5EFA5749'"
            width="60%"
          />
        </div>

        <div
          class="col-5"
          style="padding: 3vh 5vh;"
        >
          <img
            v-bind:src="'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.15752-9/88060287_3055393414479313_4625591950005764096_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=QHQL31SyEDgAX9IfZ3h&_nc_ht=scontent-dfw5-1.xx&oh=9b8a577471552cf2b7ccb366a25812c4&oe=5EFA5749'"
            width="30%"
          />
          <form>
            <div
              class="row"
              style="margin-top: 6vh;"
            >
              <p style="margin-top: 8px;">Nombre</p>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  style="margin-left: -8px;"
                >
              </div>
              <p style="margin-top: 8px;">Apellido</p>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  style="margin-left: -1px;"
                >

              </div>
            </div>
            <div
              class="row"
              style="margin-top: 6vh;"
            >
              <p style="margin-top: 8px;">Correo</p>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Correo"
                >

              </div>
              <p style="margin-top: 8px;">Teléfono</p>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Teléfono"
                >

              </div>
            </div>
            <button
              class="btn btn-primary btn-primary btn-block"
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
.container1 {
  margin: 0vh 20vh 0vh 20vh;
}
</style>
