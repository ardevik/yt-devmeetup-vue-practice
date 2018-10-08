import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from '@firebase/app'
import Vuetify from 'vuetify'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'
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
Vue.component('app-alert', AlertCmp)

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

    this.$store.dispatch('loadMeetups')
  }
})
