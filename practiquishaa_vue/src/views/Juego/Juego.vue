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
        <h3 class="text-center">{{$route.params.no_partida.replace('-',' ')}}</h3>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-12 col-lg-6 "
        style="background: #8EDFD6;"
      >
        <user-arena
          @opcion="getOpcion"
          :userOpcion="partida.usuario_1"
        ></user-arena>
      </div>
      <div
        class="col-md-12 col-lg-6"
        style="background: #00D5C1;"
      >
        <user-arena :userOpcion="partida.usuario_1!=''?partida.usuario_2:''"></user-arena>
      </div>
    </div>
    {{partida}}
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
import fireApp from '../../config/_firebase.js'
const partida = fireApp.firestore().collection('juego-1')
export default {
  name: 'Partida',
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: []
    }
  },
  firestore: {
    partidas: fireApp.firestore().collection('juego-1')
  },
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  methods: {

    crearPartida () {
      fireApp.firestore().collection('juego-1').doc('partida-2').set({
        'usuario_1': '',
        'usuario_2': '',
        'ganador': ''
      })
    },
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego-1').doc(partida).get().then((result) => {
        console.log(result.data())
      })
    },
    getOpcion (opcion) {
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update({
        'usuario_1': opcion
      })
    }
  }
}
</script>
<style lang="scss">
</style>
