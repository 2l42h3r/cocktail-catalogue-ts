import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
  },
  {
    path: '/cocktails',
    name: 'Cocktails',
    component: () =>
      import(
        /* webpackChunkName: "CocktailsSearch" */ '@/views/CocktailsSearch.vue'
      ),
  },
  {
    path: '/cocktails/:id',
    component: () =>
      import(
        /* webpackChunkName: "SingleCocktail" */ '@/views/SingleCocktail.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
