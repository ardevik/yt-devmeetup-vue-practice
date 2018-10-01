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
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: ''
    })
  }
})
