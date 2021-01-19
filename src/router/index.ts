import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Create from '../views/Create.vue'
import Read from '../views/Read.vue'
import Update from '../views/Update.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/create'
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/read',
    name: 'Read',
    component: Read,
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
