import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Price from '../views/recipePriceCac.vue'
import Finder from '../views/recipeFinder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipePriceCac',
    name: 'Price',
    component: Price
  },
  {
    path: '/recipeFinder',
    name: 'Finder',
    component: Finder
  }

]

const router = new VueRouter({
  routes
})

export default router
