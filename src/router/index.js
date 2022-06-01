import store from '@/store'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/login_page.vue'
import Welcome from '../views/welcome.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    redirect : '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/welcome',
    name: 'welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/welcome.vue')
    component : Welcome
  },
  {
    path: '/:catchAll(.*)',
    name : 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404View.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next)=>{
  
  if(to.path === '/welcome' && store.state.user == null){
    console.log('welcome route')
    router.replace({path : '/login'})
  }
  else next()
})

export default router
