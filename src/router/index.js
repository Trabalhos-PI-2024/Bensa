import { createRouter, createWebHistory } from 'vue-router'
import EnderecoView from '../views/EnderecoView.vue'
import EmailView from '@/views/EmailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/endereco',
      name: 'endereco',
      component: EnderecoView
    },
    {
      path: '/email',
      name: 'email',
      component: EmailView
    }
  ]
})

export default router
