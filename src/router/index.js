import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExamView from '../views/ExamView.vue'
import HomeWorkView from '../views/HomeWorkListView.vue'
import TimeTableView from '../views/TimeTableView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/exam',
    name: 'exam',
    component: ExamView
  },{
    path: '/homework',
    name: 'homework',
    component: HomeWorkView
  },{
    path: '/timetable',
    name: 'timetable',
    component: TimeTableView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
