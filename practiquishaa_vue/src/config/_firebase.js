import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA2KRW7KK8iO5uj32uhpvssIngxNioD_NE',
  authDomain: 'integral-web-d4f5f.firebaseapp.com',
  databaseURL: 'https://integral-web-d4f5f.firebaseio.com',
  projectId: 'integral-web-d4f5f',
  storageBucket: 'integral-web-d4f5f.appspot.com',
  messagingSenderId: '848341807768',
  appId: '1:848341807768:web:911f325ef622a94ecb56ed'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
