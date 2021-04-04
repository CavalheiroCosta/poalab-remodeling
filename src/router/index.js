import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/place',
    name: 'Place',
    component: () => import('../views/Place.vue')
  },
  {
    path: '/machinary',
    name: 'Machinary',
    component: () => import('../views/Machinary.vue')
  },
  {
    path: '/openday',
    name: 'Open-Day',
    component: () => import('../views/Open-day.vue')
  },
  {
    path: '/calendar-month',
    name: 'Calendar-Month',
    component: () => import('../views/Calendar-Month.vue')
  },
  {
    path: '/channels',
    name: 'Channels',
    component: () => import('../views/Channels.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
