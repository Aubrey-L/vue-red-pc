import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login.vue'
import inputs from '@/components/Text/indexT'
import messagePage from '@/components/messagePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/messagePage',
      name: 'messagePage',
      component: messagePage
    },
    ,{
      path: '/inputs',
      name: 'inputs',
      component: inputs
    }
  ]
})
