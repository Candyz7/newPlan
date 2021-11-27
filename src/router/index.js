import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Demo from '@/vivew/demo'

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
      path: '*',
      redirect: to => {
        return '/demo'
      }
    }
  ]
})
