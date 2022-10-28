import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoView.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManagementView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
