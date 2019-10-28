import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/sys',
      name: 'home',
      component: Home
    },
    {
      path: '/sys/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
      //component: resolve => require(['@/views/About.vue'], resolve),
      component: About,
    }
  ]
})

export default router
