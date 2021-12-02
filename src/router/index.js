import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Demo from '@/vivew/demo'
import Event from '@/vivew/event'
import Login from '@/vivew/login'
import Home from '@/vivew/home'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      redirect: to => {
        return '/login'
      }
    }
  ]
})
