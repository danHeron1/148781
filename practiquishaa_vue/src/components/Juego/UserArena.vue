<template>
  <section>
    <div class="container-fluid pb-5">
      <div class="row">
        <h3
          class="mx-auto"
          style="color:white; text-shadow: 2px 2px 4px #000000"
        >Player</h3>
      </div>
      <div class="row">
        <div class="col-3 mx-auto">
          <h1 style="text-shadow: 2px 2px 4px #000000">🤜</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 mx-auto opciones">
          <div
            class="row"
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); font-size:5vh;"
          >
            <div
              class="col col-sm-4 opcion p-3"
              v-for="(option,key) in options"
              :key="key"
              @click="select(key)"
            >
              {{option}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
export default {
  name: 'UserArena',
  props: ['userOpcion'],
  data () {
    return {
      options: {
        t: '✌️',
        pp: '✋',
        p: '🤜'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', key)
    }
  }
}
</script>
<style lang="scss">
.opciones {
  background: white;
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
  }
}
</style>
