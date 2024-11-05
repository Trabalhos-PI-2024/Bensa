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
        <div class="produtos" v-for="product in produtosVisiveis" :key="product.id">
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
    <div class="imgAcessorios">
      <img src="/src/assets/img/roupas/Roupa.jpg" alt="Acessórios" />
    </div>
  </div>
  <div class="line">
    <img src="/src/assets/img/Lancamentos/truck-loading-load-a-truck-svgrepo-com.svg" alt="">
    <p>Frete grátis para a região sul e sudeste a partir de R$ 299</p>
    <img src="/src/assets/img/Lancamentos/label-svgrepo-com.svg" alt="">
    <p>5% Desconto no PIX</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useProductStore } from '@/stores/products'
import { useCarrinhoStore } from '@/stores/carrinho'
import { useRouter } from 'vue-router'

const carrinhoStore = useCarrinhoStore()

const router = useRouter()

function visualizar(id) {
  router.push(`/produto/${id}`)
}

const productStore = useProductStore()

const indexAtual = ref(0)
const produtosPorPagina = ref(4)

const produtosVisiveis = computed(() => {
  return productStore.products
    .filter(products => products.roupas === true)
    .slice(indexAtual.value, indexAtual.value + produtosPorPagina.value)
})

const moverEsquerda = () => {
  if (indexAtual.value > 0) {
    indexAtual.value -= produtosPorPagina.value
  }
}

const moverDireita = () => {
  if (indexAtual.value + produtosPorPagina.value < productStore.products.length) {
    indexAtual.value += produtosPorPagina.value
  }
}

const atualizarProdutosPorPagina = () => {
  const larguraTela = window.innerWidth

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

window.addEventListener('resize', atualizarProdutosPorPagina)
atualizarProdutosPorPagina()
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
  transition: all .2s ease;
  border-radius: 5px;
}

.acessorios .mainAcessorios .produtos:hover {
  transform: scale(1.01);
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

.line {
  width: 100%;
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
