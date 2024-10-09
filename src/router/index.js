import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcessoriosView from '../views/AcessoriosView.vue'
import AdidasView from '../views/AdidasView.vue'
import CadastroView from '../views/CadastroView.vue'
import NikeView from '../views/NikeView.vue'
import RoupasView from '../views/RoupasView.vue'
import SneakersView from '../views/SneakersView.vue'
import StussyView from '../views/StussyView.vue'
import VansView from '../views/VansView.vue'
import EnderecoView from '../views/EnderecoView.vue'
import InfoView from '../views/InfoView.vue'
import ComunidadeView from '../views/ComunidadeView.vue'
import MinhaLojaView from '../views/MinhaLojaView.vue'
import AddProdutoView from '../views/AddProdutoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/acessorios',
    name: 'acessorios',
    component: AcessoriosView
  },
  {
    path: '/adidas',
    name: 'adidas',
    component: AdidasView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView,
  },
  {
    path: '/nike',
    name: 'nike',
    component: NikeView
  },
  {
    path: '/roupas',
    name: 'roupas',
    component: RoupasView
  },
  {
    path: '/sneakers',
    name: 'sneakers',
    component: SneakersView
  },
  {
    path: '/stussy',
    name: 'stussy',
    component: StussyView
  },
  {
    path: '/vans',
    name: 'vans',
    component: VansView
  },
  {
    path: '/endereco',
    name: 'endereco',
    component: EnderecoView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/comunidade',
    name: 'comunidade',
    component: ComunidadeView
  },
  {
    path: '/minhaloja',
    name: 'minhaloja',
    component: MinhaLojaView
  },
  {
    path: '/addproduto',
    name: 'addproduto',
    component: AddProdutoView
  },


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
