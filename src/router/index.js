import { createRouter, createWebHistory } from 'vue-router'
import EnderecoView from '../views/EnderecoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/endereco',
      name: 'endereco',
      component: EnderecoView
    }
  ]
})

export default router
