import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Hello from '@/components/Hello'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
