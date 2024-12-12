<template>
  <div class="lancamentos">
    <div class="title">
      <h3>Lançamentos</h3>
    </div>
    <div class="navegacao">
      <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
      <div class="produtos-container">
        <div class="product toRight" v-for="product in produtosVisiveis" :key="product.id">
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
  // Importa as funções e stores necessárias para o funcionamento do componente
  import { computed, ref } from 'vue' // Computed e ref são usados para criar reatividade no Vue
  import { useProductStore } from '@/stores/products' // Store para acessar a lista de produtos
  import { useCarrinhoStore } from '@/stores/carrinho' // Store para gerenciar o carrinho
  import { useRouter } from 'vue-router' // Para navegar entre páginas

  // A store para manipulação do carrinho de compras
  const carrinhoStore = useCarrinhoStore()

  // O router do Vue, utilizado para navegação entre páginas
  const router = useRouter()

  // Função para visualizar os detalhes do produto ao clicar no botão "ver mais"
  function visualizar(id) {
    // Redireciona para a página do produto com o ID específico
    router.push(`/produto/${id}`)
  }

  // A store que contém a lista de produtos
  const productStore = useProductStore()

  // Ref que armazena o índice atual dos produtos a serem exibidos no carrossel
  const indexAtual = ref(0)

  // Ref que define quantos produtos por vez serão exibidos no carrossel
  const produtosPorPagina = ref(4)

  // Computed que calcula os produtos visíveis com base na página atual
  const produtosVisiveis = computed(() => {
    // Filtra os produtos que são lançamentos e aplica o fatiamento para mostrar somente os produtos da página atual
    return productStore.products
      .filter(products => products.lancamento === true)
      .slice(indexAtual.value, indexAtual.value + produtosPorPagina.value)
  })

  // Função que move os produtos à esquerda (para a página anterior)
  const moverEsquerda = () => {
    // Verifica se há produtos à esquerda e se o índice atual não é o primeiro
    if (indexAtual.value > 0) {
      // Se sim, diminui o índice atual para mostrar a página anterior de produtos
      indexAtual.value -= produtosPorPagina.value
    }
  }

  // Função que move os produtos à direita (para a próxima página)
  const moverDireita = () => {
    // Verifica se há produtos à direita e se o índice atual não ultrapassa o total de produtos
    if (indexAtual.value + produtosPorPagina.value < productStore.products.length) {
      // Se sim, aumenta o índice atual para mostrar a próxima página de produtos
      indexAtual.value += produtosPorPagina.value
    }
  }

  // Função que ajusta o número de produtos por página com base no tamanho da tela
  const atualizarProdutosPorPagina = () => {
    const larguraTela = window.innerWidth // Obtém a largura da tela

    // Define quantos produtos devem ser exibidos com base no tamanho da tela
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

  // Adiciona um ouvinte de evento para redimensionamento da tela para ajustar a quantidade de produtos por vez
  window.addEventListener('resize', atualizarProdutosPorPagina)

  // Chama a função logo ao carregar a página para ajustar a quantidade de produtos
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
  transform: scale(1.03) translateY(-5px);
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
  align-items: end;
  width: 100%;
  transition: all 0.5s ease;
  padding: 0 10px 10px 10px;
}

.lancamentos .product .infoProdutos .cart-image {
  width: 28px;
  height: 28px;
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

.lancamentos .product .infoProdutos .divButtonCart{
  position: relative;
  top: 5px;
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