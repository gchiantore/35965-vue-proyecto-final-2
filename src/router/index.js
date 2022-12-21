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
    path: '/abmprod',
    name: 'abmprod',
    component: () => import(/* webpackChunkName: "about" */ '../views/AbmProdView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsuariosView.vue')
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarritoView.vue')
  },
  {
    path: '/ordenes',
    name: 'ordenes',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdenesView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
