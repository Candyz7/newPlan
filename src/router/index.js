import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Demo from '@/vivew/demo'
import Register from '@/vivew/register'
import Login from '@/vivew/login'
import Home from '@/vivew/home'
import Newtopic from '@/vivew/newtopic'
import Answer from '@/vivew/answer'
import Question from '@/vivew/question'
import MyInfo from '@/vivew/myInfo'
import Mine from '@/vivew/mine'
import Details from '@/vivew/details'
import EditInfo from '@/vivew/editInfo'

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
      path: '/register',
      name: 'Register',
      component: Register
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
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/myInfo',
      name: 'MyInfo',
      component: MyInfo
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/editInfo',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '*',
      redirect: to => {
        return '/login'
      }
    }
  ]
})
