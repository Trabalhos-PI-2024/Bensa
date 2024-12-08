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
import ProdutoView from '../views/BensaViews/ProdutoView.vue'
import ComunidadeView from '../views/ComunidadeViews/ComunidadeView.vue'
import MinhaLojaView from '../views/ComunidadeViews/MinhaLojaView.vue'
import AddProdutoView from '../views/ComunidadeViews/AddProdutoView.vue';
import AcessoriosComunidadeView from '@/views/ComunidadeViews/AcessoriosComunidadeView.vue'
import RoupasComunidadeView from '../views/ComunidadeViews/RoupasComunidadeView.vue'
import SneakersComunidadeView from '../views/ComunidadeViews/SneakersComunidadeView.vue'
import ChatView from '../views/ComunidadeViews/ChatView.vue'
import RevisarCarrinhoViewView from '../views/BensaViews/RevisarCarrinhoView.vue'
import PagamentoView from '../views/BensaViews/PagamentoView.vue'
import ConfirmaçãoView from '../views/BensaViews/ConfirmaçãoView.vue'
import HistoricoView from '../views/BensaViews/HistoricoView.vue'
import ProductComunidade from '@/views/ComunidadeViews/ProductComunidade.vue'
import CarrinhoView from '@/views/BensaViews/CarrinhoView.vue'
import LoginView from '@/views/BensaViews/LoginView.vue'
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
    path: '/produtoComunidade/:id',
    name: 'produtoComunidade',
    component: ProductComunidade,
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
  {
    path: '/revisar',
    name: 'revisar',
    component: RevisarCarrinhoViewView
  },
  {
    path: '/pagar',
    name: 'pagar',
    component: PagamentoView
  },
  {
    path: '/confirmar',
    name: 'confirmar',
    component: ConfirmaçãoView
  },
  {
    path: '/historico',
    name: 'historico',
    component: HistoricoView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: CarrinhoView
  },
]

const router = createRouter({
  history: createWebHistory(''), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router