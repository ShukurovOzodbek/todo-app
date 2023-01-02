import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosPage from '../views/TodosPage.vue'
import DonePage from '../views/DonePage.vue'
import NotDoneTodos from '../views/NotDoneTodos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodosPage
  },
  {
    path: '/done',
    name: 'done',
    component: DonePage
  },
  {
    path: '/notdone',
    name: 'notDone',
    component: NotDoneTodos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
