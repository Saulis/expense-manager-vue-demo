import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

const Overview = () => import('@/components/Overview')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/:dbId',
      name: 'Overview',
      component: Overview,
      props: true
    }
  ]
})
