import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Demo from '@/vivew/demo'
import Event from '@/vivew/event'
import Login from '@/vivew/login'
import Home from '@/vivew/home'
import Newtopic from '@/vivew/newtopic'
import Answer from '@/vivew/answer'
import Question from '@/vivew/question'

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
      path: '/newtopic',
      name: 'Newtopic',
      component: Newtopic
    },
    {
      path: '/answer',
      name: 'Answer',
      component: Answer
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '*',
      redirect: to => {
        return '/login'
      }
    }
  ]
})
