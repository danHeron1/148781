<template>
  <div class="login container ">
    <div
      class="card p-3"
      style="background-color:#fff0; border:0px;"
    >

      <div class="row no-gutters">

        <div class="col-sm-6  d-none d-lg-block">

          <img
            v-bind:src="'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.15752-9/96516185_258150225596995_175301658576683008_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=mizO-B05WugAX_zd3AD&_nc_ht=scontent-dfw5-2.xx&oh=321302a94dd023811ae51fa4cc628896&oe=5EDEA115'"
            width="100%"
          />
        </div>

        <div
          class="col-lg-6 "
          style="margin-top: 10vh;"
        >

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
body {
  background-image: url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.15752-9/96539841_2696029147348784_439152009354936320_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=Wsa4UzReXi8AX-EJsdP&_nc_ht=scontent-dfw5-1.xx&oh=8f509900436f6bb569949ecffefce7a2&oe=5EDE759E);
}
</style>
