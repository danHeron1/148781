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
          @opcion="partida.participantes[0] === user.uid?getOpcion:''"
          :userOpcion="partida.usuario_1"
          :displayName="!user.displayName?partida.names[0]!== user.displayName?partida.names[0]:'':user.displayName"
        ></user-arena>
      </div>
      <div
        class="col-md-12 col-lg-6"
        style="background: #00D5C1;"
      >
        <button
          v-if="!partida.names[1]"
          class="btn btn-outline-primary"
          @click="retar"
        >
          👾
        </button>
        <user-arena
          :displayName="!partida.names[1]?'Esperando Retador':partida.names[1]"
          :userOpcion="partida.usuario_1!=''?partida.usuario_2:''"
          @opcion="partida.participantes[1] === user.uid?getOpcion:''"
        ></user-arena>
      </div>
    </div>
    {{partida}}
  </section>
</template>
<script lang="js">
import UserArena from '@/components/Juego/UserArena'
import fireApp from '../../config/_firebase.js'
import Auth from '../../config/auth.js'
const partida = fireApp.firestore().collection('juego-1')
export default {
  name: 'Partida',
  props: ['usuario_opcion'],
  components: {
    UserArena
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      vm.$bind('user', Auth.getUser())
      vm.user = await Auth.getUser()
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
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
        this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted () {
    // this.user = Auth.getUser()
  },
  methods: {
    async obtenerUser () {
      this.user = await Auth.getUser()
    },
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid
      // Escribe en la base de datos
      fireApp.firestore().collection('juego-1').add({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario' : this.user.displayName],
        'usuario_1': ' ',
        'usuario_2': ' ',
        'ganador': ' '
      })
    },
    obtenerPartida () {
      fireApp.firestore().collection('juego-1').doc(this.partida).get().then((result) => {
        console.log(result.data())
      })
    },
    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid
      // Escribe en la base de datos
      this.partida.name.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))
      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario_1': opcion
        }
      } else {
        data = {
          'usuario_2': opcion
        }
      }
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update(data)
    }
  }
}
</script>
<style lang="scss">
</style>
