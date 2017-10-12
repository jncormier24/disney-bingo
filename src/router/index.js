import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AuthSuccess from '@/components/AuthSuccess'
// import AddItemArea from '@/components/AddItemArea'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/auth',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      component: AuthSuccess
    }
  ]
})
