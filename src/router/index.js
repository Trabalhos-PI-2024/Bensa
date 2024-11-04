import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BensaViews/HomeView.vue'
import AcessoriosView from '../views/BensaViews/AcessoriosView.vue'
import AdidasView from '../views/BensaViews/AdidasView.vue'
import CadastroView from '../views/BensaViews/CadastroView.vue'
import NikeView from '../views/BensaViews/NikeView.vue'
import RoupasView from '../views/BensaViews/RoupasView.vue'
import SneakersView from '../views/BensaViews/SneakersView.vue'
import StussyView from '../views/BensaViews/StussyView.vue'
import VansView from '../views/BensaViews/VansView.vue'
import EnderecoView from '../views/BensaViews/EnderecoView.vue'
import InfoView from '../views/BensaViews/InfoView.vue'
import ProdutoView from '../views/ComunidadeViews/ProdutoView.vue'
import ComunidadeView from '../views/ComunidadeViews/ComunidadeView.vue'
import MinhaLojaView from '../views/ComunidadeViews/MinhaLojaView.vue'
import AddProdutoView from '../views/ComunidadeViews/AddProdutoView.vue';
import AcessoriosComunidadeView from '@/views/ComunidadeViews/AcessoriosComunidadeView.vue'
import RoupasComunidadeView from '@/views/ComunidadeViews/RoupasComunidadeView.vue'
import SneakersComunidadeView from '@/views/ComunidadeViews/SneakersComunidadeView.vue'
import ChatView from '@/views/ComunidadeViews/ChatView.vue'

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
    path: '/produto/:id',
    name: 'produto',
    component: ProdutoView,
    props: true,
  },
  {
    path: '/addproduto',
    name: 'addproduto',
    component: AddProdutoView,
   
  },
  {
    path: '/acessoriosComunidade',
    name: 'acessoriosComunidade',
    component: AcessoriosComunidadeView
  },
  {
    path: '/roupasComunidade',
    name: 'roupasComunidade',
    component: RoupasComunidadeView
  },
  {
    path: '/sneakersComunidade',
    name: 'sneakersComunidade',
    component: SneakersComunidadeView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router