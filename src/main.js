import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import App from './App'
import router from './router'
import { config } from './firebase'
Vue.use(VueFire)
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
    })
  }
})
