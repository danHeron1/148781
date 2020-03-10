<template>
  <section class="partida mx-auto w-75">
    <div class="row">
      <button
        class="btn btn-success mx-auto"
        @click="crearPartida"
      >Jugar</button>
    </div>
    <div class="row">
      <div class="col col-sm-6 mx-auto">
        <h3 class="text-center">Juego 1</h3>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-12 col-lg-6 "
        style="background: #8EDFD6;"
      >
        <user-arena
          @opcion="getOpcion"
          :userOption="partida.usuario_1"
        ></user-arena>
      </div>
      <div
        class="col-md-12 col-lg-6"
        style="background: #00D5C1;"
      >
        <user-arena></user-arena>
      </div>
    </div>
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
import fireApp from '../../config/_firebase.js'
const partida = fireApp.firestore().collection('users')
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.obtenerPartida().collection('juego_1')
    })
  },
  firestore: {
    partida: fireApp.firestore().collection('juego_1')
  },
  data () {
    return {
      partida: ''
    }
  },
  watch: {
    '$route.params': {
      deep: true,
      inmediate: true,
      handler (value) {
        this.$bind('user', partida.doc(value.no_partida))
      }
    }
  },
  methods: {
    crearPartida () {
      fireApp.firestore().collection('Juego-1').doc('Partida-2').set(
        {
          'usuario-1': '',
          'usuario-2': '',
          'ganador': ''
        }
      )
    },
    obtenerPartida () {
      fireApp.firestore().collection('juego-1').doc(this.partida).get().then((result) => { console.log(result.data()) })
    },
    getOpcion (opcion) {
      alert(`Estoy en partida: ${opcion}`)
    }
  }
}
</script>
<style lang="scss">
</style>
