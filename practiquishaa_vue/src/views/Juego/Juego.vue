<template>
  <section style="width: 80%;margin-left: 15vh;">
    <div class="row">
      <h1>Partida 1</h1>
    </div>
    <div class="col col-sm-6">
      <h1>inoerkj</h1>
    </div>
    <div class="col col-sm-6">
      <h2></h2>
      <UserArena>3</UserArena>
    </div>
  </section>

</template>

<script lang="js">
import UserArena from '@/components/Juego/UserArena'
export default {
  name: 'Arena',
  components: {
    UserArena
  } }
</script>
