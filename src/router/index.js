import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Baseinfo from '@/components/Baseinfo'
import Userlist from '@/components/Userlist'
import Setting from '@/components/Setting'
import Axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/userlist',
      name: 'Userlist',
      component: Userlist
    },
    {
      path: '/baseinfo',
      name: 'Baseinfo',
      component: Baseinfo
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
