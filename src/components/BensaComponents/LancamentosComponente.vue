<template>
  <div class="lancamentos">
    <div class="title">
      <h3>Lançamentos</h3>
    </div>
    <div class="navegacao">
      <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
      <div class="produtos-container">
        <div class="product" v-for="product in produtosVisiveis" :key="product.id">
          <button class="btn-more" @click="visualizar(product.id)">
            <div class="imgProdutos">
              <img class="img1" :src="product.image1" alt="" />
              <img class="img2" :src="product.image2" alt="" />
            </div>
          </button>
          <div class="infoProdutos">
            <div class="divInfoProduto">
              <h3>{{ product.name }}</h3>
              <p>R${{ product.price }}</p>
            </div>
            <div class="divButtonCart">
              <button class="btn-cart" @click="carrinhoStore.addCarrinho(product)">
                <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" class="cart-image" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
    </div>
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
    .filter(products => products.lancamento === true)
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

  if (larguraTela >= 1400) {
    produtosPorPagina.value = 4
  } else if (larguraTela >= 1010) {
    produtosPorPagina.value = 3
  } else if (larguraTela >= 720) {
    produtosPorPagina.value = 2
  } else {
    produtosPorPagina.value = 1
  }
}

window.addEventListener('resize', atualizarProdutosPorPagina)
atualizarProdutosPorPagina()
</script>

<style scoped>
.lancamentos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
}

.lancamentos .title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lancamentos .title h3 {
  transform: rotate(270deg);
  border-bottom: 1.5px solid #0d0d0d;
  font-size: 22px;
}

.lancamentos .product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e7e7e7e7;
  margin: 0 40px;
  padding: 0 10px;
  transition: all 0.5s ease;
}

.lancamentos .product:hover {
  transform: scale(1.03);
}

.lancamentos .product img {
  width: 207px;
  height: 207px;
}

.lancamentos .product .imgProdutos .img2 {
  display: none;
}

.lancamentos .product:hover .imgProdutos .img1 {
  display: none;
}

.lancamentos .product:hover .imgProdutos .img2 {
  display: block;
}

.infoProdutos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease;
  padding: 0 10px 10px 10px;
}

.lancamentos .product .infoProdutos .cart-image {
  width: 36px;
  height: 36px;
}

.lancamentos .product .infoProdutos .divInfoProduto {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 5px;
}

.lancamentos .product .infoProdutos .divInfoProduto h3 {
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #0d0d0d;
  font-weight: 600;
}
.lancamentos .product .infoProdutos .divInfoProduto p {
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #025213;
  font-weight: 600;
}

.btn-more {
  background: transparent;
}

.lancamentos .product .infoProdutos button {
  background: transparent;
}

.navegacao {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-navegacao {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
}

.produtos-container {
  display: flex;
  overflow: hidden;
  transition: all 0.5s ease;
}


@media (max-width: 1500px) {
  .lancamentos {
    flex-direction: column;
  }

  .lancamentos .title h3 {
    transform: rotate(0deg);
    border-bottom: 1.5px solid transparent;
    margin: 0 0 10px 0;
  }
}

@media (max-width: 985px) {
  .lancamentos .mainProdutos {
    flex-direction: column;
  }
  .lancamentos .mainProdutos .product .imgProdutos .img2 {
    display: none;
  }

  .lancamentos .mainProdutos .product:hover .imgProdutos .img1 {
    display: block;
  }

  .lancamentos .mainProdutos .product:hover .imgProdutos .img2 {
    display: none;
  }

  .lancamentos .mainProdutos .product .infoProdutos {
    opacity: 1;
  }
  .btn-navegacao {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0px;
}
}
</style>