<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
        <h3>Acessórios</h3>
        <img src="/src/assets/img/Icons/hat.png" alt="" />
      </div>
      <div class="navegacao">
        <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
        <div class="produtos-container">
          <div class="produtos toRight" v-for="product in produtosVisiveis" :key="product.id">
            <button class="btn-more" @click="visualizar(product.id)">
              <img :src="product.image1" :alt="product.name" />
            </button>
            <div class="infoProdutos">
              <div>
                <h3>{{ product.name }}</h3>
                <p>R${{ product.price }}</p>
              </div>
              <button class="btn-cart" @click="carrinhoStore.addCarrinho(product)">
                <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" class="cart-image" />
              </button>
            </div>
          </div>
        </div>
        <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
      </div>
    </div>
    <div class="imgAcessorios toLeft">
      <img src="/src/assets/img/Acessorios/Acessorios.jpg" alt="Acessórios" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'; // Importações necessárias: reactive state, lifecycle hooks
import { useProductStore } from '@/stores/products'; // Store para acessar os produtos
import { useCarrinhoStore } from '@/stores/carrinho'; // Store para manipular o carrinho de compras
import { useRouter } from 'vue-router'; // Para manipulação da navegação entre páginas
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Para detectar a visibilidade dos produtos na tela

useIntersectionObserver(); // Hook customizado para monitorar a visibilidade de elementos na tela

// Instanciação das stores
const carrinhoStore = useCarrinhoStore(); // Usando a store de carrinho
const router = useRouter(); // Usando o router para navegação
const productStore = useProductStore(); // Usando a store de produtos

// Variáveis reativas para controle da navegação de produtos
const indexAtual = ref(0); // Índice do produto atual exibido
const produtosPorPagina = ref(4); // Número de produtos exibidos por vez (página)

// Computed que filtra e exibe apenas os produtos de acessórios com base no índice atual
const produtosVisiveis = computed(() => {
  return productStore.products // Acessa a lista de produtos na store
    .filter((products) => products.acessorios === true) // Filtra produtos que são acessórios
    .slice(indexAtual.value, indexAtual.value + produtosPorPagina.value); // Exibe um número limitado de produtos por vez, dependendo da página
});

// Função para mover a navegação para a esquerda (diminuindo o índice)
const moverEsquerda = () => {
  if (indexAtual.value > 0) {
    indexAtual.value -= produtosPorPagina.value; // Diminui o índice atual, exibindo os produtos anteriores
  }
};

// Função para mover a navegação para a direita (aumentando o índice)
const moverDireita = () => {
  if (indexAtual.value + produtosPorPagina.value < productStore.products.length) {
    indexAtual.value += produtosPorPagina.value; // Aumenta o índice atual, exibindo os próximos produtos
  }
};

// Função para ajustar o número de produtos exibidos com base na largura da tela
const atualizarProdutosPorPagina = () => {
  const larguraTela = window.innerWidth; // Obtém a largura da tela

  // Define o número de produtos a serem exibidos por página com base na largura da tela
  if (larguraTela >= 1700) {
    produtosPorPagina.value = 6; // Se a tela for muito grande, exibe 6 produtos
  } else if (larguraTela >= 1400) {
    produtosPorPagina.value = 4; // Se a tela for grande, exibe 4 produtos
  } else if (larguraTela >= 700) {
    produtosPorPagina.value = 2; // Se a tela for média, exibe 2 produtos
  } else {
    produtosPorPagina.value = 1; // Se a tela for pequena, exibe 1 produto
  }
};

// Hook para executar quando o componente for montado
onMounted(() => {
  atualizarProdutosPorPagina(); // Ajusta o número de produtos ao carregar a página
  window.addEventListener('resize', atualizarProdutosPorPagina); // Atualiza o número de produtos ao redimensionar a tela
});

// Hook para executar quando o componente for desmontado
onUnmounted(() => {
  window.removeEventListener('resize', atualizarProdutosPorPagina); // Remove o event listener ao desmontar o componente
});

// Função para visualizar o produto em detalhes (navega para a página de detalhes do produto)
const visualizar = (id) => {
  router.push(`/produto/${id}`); // Navega para a página do produto com o id especificado
};
</script>



<style scoped>
.acessorios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
