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
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                >
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                >
              </div>

            </div>
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
