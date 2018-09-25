import Vue from 'vue'
import App from './App'
import router from './router'
import {
  store
} from './store'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import DateFilter from './filters/date'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#00BFA5',
    secondary: '#0091EA',
    accent: '#00C853',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAR4ZK-VRp8w05-zdbFBDJi3AzWDbs_Ts8',
      authDomain: 'ardevik-2414a.firebaseapp.com',
      databaseURL: 'https://ardevik-2414a.firebaseio.com',
      projectId: 'ardevik-2414a',
      storageBucket: 'ardevik-2414a.appspot.com'

    })
  }
})
