import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ass_history',
    name: 'assessmentHistory',
    component: () => import(/* webpackChunkName: "about" */ '../views/assessmentHistory.vue')
  },
  {
    path: '/sidebar',
    name: 'applicantSidebar',
    component: () => import(/* webpackChunkName: "about" */ '../components/applicantSidebar.vue')
  },
  {
    path: '/admindash',
    name: 'adminDashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/adminDashboard.vue')
  },
  {
    path: '/create_app',
    name: 'createApplication',
    component: () => import(/* webpackChunkName: "about" */ '../views/createApplication.vue')
  },
  {
    path: '/entries2',
    name:'Entries2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entries2.vue')
  },
  {
    path: '/compose',
    name:'composeAssessment',
    component: () => import(/* webpackChunkName: "about" */ '../views/composeAssessment.vue')
  },
  {
    path: '/entries2.1',
    name: 'Entries2.1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entries2.1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
