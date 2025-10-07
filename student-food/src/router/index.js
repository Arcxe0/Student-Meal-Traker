import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BasketView from '../views/BasketView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/basket', name: 'basket', component: BasketView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
