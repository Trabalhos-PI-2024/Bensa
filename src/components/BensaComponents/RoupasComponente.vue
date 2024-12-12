<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
        <h3>Roupas</h3>
        <img src="/src/assets/img/Icons/t-shirt.png" alt="">
      </div>
      <div class="navegacao">
      <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
      <div class="produtos-container">
        <div class="produtos toLeft" v-for="product in produtosVisiveis" :key="product.id">
          <button class="btn-more" @click="visualizar(product.id)"> 
          <img :src="product.image1" :alt="product.name" />
        </button>
          <div class="infoProdutos">
            <div>
              <h3>{{ product.name }}</h3>
              <p>R${{ product.price }}</p>
            </div>
            <button class="btn-cart" @click="carrinhoStore.addCarrinho(product)">
              <img src="/src/assets/img/Icons/carrinho.svg"  alt="Carrinho" class="cart-image" >
            </button>
          </div>
        </div>
      </div>
      <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
    </div>
    </div>
    <div class="imgAcessorios toRight">
      <img src="/src/assets/img/roupas/Roupa.jpg" alt="Acessórios" />
    </div>
  </div>
  <marquee direction="right" class="line hidden">
    <div class="line">
    <img src="/src/assets/img/Lancamentos/truck-loading-load-a-truck-svgrepo-com.svg" alt="">
    <p>Frete grátis para a região sul e sudeste a partir de R$ 299</p>
    <img src="/src/assets/img/Lancamentos/label-svgrepo-com.svg" alt="">
    <p>5% Desconto no PIX</p>
  </div>
  </marquee>
</template>

<script setup>
import { computed, ref } from 'vue' // Importando as funções necessárias do Vue
import { useProductStore } from '@/stores/products' // Importando o store de produtos
import { useCarrinhoStore } from '@/stores/carrinho' // Importando o store de carrinho
import { useRouter } from 'vue-router' // Importando o router para navegação
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Importando o hook personalizado de observer

useIntersectionObserver(); // Chamando o hook de observação de interseção

const carrinhoStore = useCarrinhoStore() // Criando uma referência ao store de carrinho

const router = useRouter() // Criando uma referência ao router para navegação

function visualizar(id) { // Função para redirecionar para a página do produto
  router.push(`/produto/${id}`) // Navegar para a página do produto com o ID passado
}

const productStore = useProductStore() // Criando uma referência ao store de produtos

const indexAtual = ref(0) // Variável reativa que controla o índice atual de produtos visíveis
const produtosPorPagina = ref(4) // Variável reativa que controla o número de produtos por página

// Computed que retorna os produtos filtrados por categoria "roupas" e limita o número de itens visíveis
const produtosVisiveis = computed(() => {
  return productStore.products
    .filter(products => products.roupas === true) // Filtrando os produtos de "roupas"
    .slice(indexAtual.value, indexAtual.value + produtosPorPagina.value) // Retornando os produtos dentro do intervalo da página atual
})

// Função para mover os produtos para a esquerda (retroceder a página)
const moverEsquerda = () => {
  if (indexAtual.value > 0) { // Verifica se não está na primeira página
    indexAtual.value -= produtosPorPagina.value // Decrementa o índice atual para exibir produtos anteriores
  }
}

// Função para mover os produtos para a direita (avançar para a próxima página)
const moverDireita = () => {
  if (indexAtual.value + produtosPorPagina.value < productStore.products.length) { // Verifica se há mais produtos para exibir
    indexAtual.value += produtosPorPagina.value // Incrementa o índice atual para exibir os próximos produtos
  }
}

// Função que atualiza o número de produtos por página com base na largura da tela
const atualizarProdutosPorPagina = () => {
  const larguraTela = window.innerWidth // Obtendo a largura da tela

  // Ajusta o número de produtos visíveis de acordo com a largura da tela
  if (larguraTela >= 1700) {
    produtosPorPagina.value = 6
  } else if (larguraTela >= 1400) {
    produtosPorPagina.value = 4
  } else if (larguraTela >= 700) {
    produtosPorPagina.value = 2
  } else {
    produtosPorPagina.value = 1
  }
}

// Adicionando um listener para atualizar a quantidade de produtos por página quando a tela for redimensionada
window.addEventListener('resize', atualizarProdutosPorPagina)
atualizarProdutosPorPagina() // Chamando a função ao carregar a página para definir o número de produtos
</script>

<style scoped>
.acessorios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  padding: 20px 0;
}

.acessorios .mainAcessorios {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.acessorios .mainAcessorios .title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.acessorios .mainAcessorios .title img {
  width: 40px;
}

.acessorios .mainAcessorios .title h3 {
  font-size: 22px;
}

.acessorios .mainAcessorios {
  width: 55dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.acessorios .mainAcessorios .produtos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e7e7e7;
  padding: 10px 20px 0 20px;
  transition: all .3s ease;
  border-radius: 5px;
}

.acessorios .mainAcessorios .produtos:hover {
  transform: scale(1.01) translateY(-5px);
}

.infoProdutos {
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all .5s ease;
  padding: 10px 25px 20px 25px;
}

.infoProdutos div h3 {
  font-size: 15px;
}

.infoProdutos div p {
  font-size: 12.5px;
  font-weight: 600;
  color: #025213;
}

.acessorios .mainAcessorios .produtos .infoProdutos .cart-image {
  width: 36px;
  height: 36px;
}

.acessorios .mainAcessorios .produtos .infoProdutos button {
  background: transparent;
}

.acessorios .mainAcessorios .produtos:hover .infoProdutos {
  opacity: 1;
}

.acessorios .mainAcessorios .produtos img {
  width: 225px;
  height: 225px;
}

.acessorios .imgAcessorios {
  border: 1px solid #e7e7e7;
  width: 550px;
  height: 570px;
  margin-top: 20px;
}

.acessorios .imgAcessorios img {
  width: 550px;
  height: 570px;
  border: 1px solid #e7e7e7;
}

marquee{
  width: 100%;
}

.line {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #920404;
  padding: 5px 0;
  color: #e7e7e7;
  gap: 10px;
  letter-spacing: 1px;
}

.line img {
  width: 30px;
}

.line p {
  margin: 0 20px 0 0;
}

.btn-more{
  background: transparent;
}

.navegacao {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-more {
  background-color: #ffff;
}

.btn-navegacao {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  display: none;
}

.produtos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

@media (max-width: 1700px) {
  .btn-navegacao {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  display: block;
}
}

@media (max-width: 1400px) {
  .produtos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 30px;
}
}

@media (max-width: 1200px) {
  .acessorios {
    flex-direction: column;
  }

  .acessorios .mainAcessorios {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
}
</style>
