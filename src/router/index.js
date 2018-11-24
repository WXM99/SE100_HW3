import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/inline_page/homepage'
import create from '../components/inline_page/create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    { 
      path: '/create',
      name: 'create',
      component: create
    }
  ]
})
