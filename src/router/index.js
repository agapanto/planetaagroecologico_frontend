import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import AdminImporter from '@/components/admin/importer/Index'
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
      path: '/admin/importer',
      name: 'AdminImporter',
      component: AdminImporter
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
