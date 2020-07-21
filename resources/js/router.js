import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

import company from './router/company'

import user from './router/user'

import recruitment from './router/recruitment'

import category from './router/category'

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home'
    },
    company,
    ...user,
    recruitment ,
    category
  ]
})
