<template>
  <div class="order-review">
    <h1 class="hidden">Revisão do Pedido</h1>
    <div class="steps hidden">
      <div class="step active">
        <div class="step-number">1</div>
        <p class="step-title">Revisar Pedido</p>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <p class="step-title">Pagamento</p>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <p class="step-title">Confirmação</p>
      </div>
    </div>
    <div class="current-step">
      <p>
        Etapa atual: <strong>Revisar Pedido</strong> - Verifique se todos os produtos estão corretos
        antes de prosseguir para o pagamento.
      </p>
    </div>
    <div class="ahh">
      <div class="product-list toRight" v-if="carrinhoStore.carrinho.length > 0">
        <div class="product" v-for="carrinho in carrinhoStore.carrinho" :key="carrinho.id">
          <img :src="carrinho.image1" alt="Imagem do Produto" class="product-image" />
          <div class="product-info">
            <h2>{{ carrinho.name }}</h2>
            <div class="size">
              <h4>Tamanho:</h4>
              <template v-if="carrinho.selectedSize">
                {{ carrinho.selectedSize }}
              </template>
              <template v-else>
                <div class="size-selection">
                  <button
                    v-for="size in carrinho.sizes"
                    :key="size"
                    @click="selectSize(carrinho.id, size)"
                    :class="{ active: carrinho.selectedSize === size }"
                  >
                    {{ size }}
                  </button>
                </div>
              </template>
            </div>
            <p class="product-price">R$ {{ carrinho.price }}</p>
          </div>
          <button @click="carrinhoStore.deleteProductById(carrinho.id)" class="remove-button">
            <img src="/src/assets/img/Icons/excluir (1).png" alt="Excluir" />
          </button>
        </div>
      </div>
      <div class="semProdutoCarrinho toRight" v-else>
        <img src="@\assets\img\Banners/sacolavazia.jpg" alt="sacola" />
        <h3>Ops, nada por aqui ainda!</h3>
        <p>Explore nossos produtos e encha sua sacola de estilo.</p>
      </div>
      <div class="resumo toLeft">
        <div class="title">
          <h2>Resumo</h2>
        </div>
        <div class="infos">
          <p>Valor dos Produtos: R${{ totalAPagar }}</p>
          <p>Frete: A Calcular</p>
          <p>Descontos: Nenhum</p>
          <p>Valor da Compra: R${{ totalAPagar }}</p>
        </div>
        <div class="last">
          <router-link to="/historico" @click="carrinhoStore.closeModal()" class="historico-button"
            >Histórico de Compras</router-link
          >
          <button @click="verificarCarrinho()" class="pay-button">Ir para Pagamento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue' // Importa funções necessárias do Vue
import { useCarrinhoStore } from '@/stores/carrinho' // Acessa o store do carrinho
import { useRouter } from 'vue-router' // Acessa o roteador para navegação
import { useToast } from 'vue-toastification' // Acessa a biblioteca de notificações
import { useIntersectionObserver } from '@/composables/useIntersectionObserver' // Acessa o composable para observação de interseções

useIntersectionObserver() // Inicializa a observação de interseções

const toast = useToast() // Inicializa o serviço de notificações

// Função para exibir um alerta caso o produto não tenha tamanho selecionado
function showWarning(produtoSemTamanho) {
  toast.warning(`Escolha o tamanho de "${produtoSemTamanho.name}" antes de prosseguir.`, {
    position: 'top-center',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
    zIndex: 9999
  })
}

// Função para exibir um alerta caso não haja produtos no carrinho
function showWarning2(semProdutoCarrinho) {
  toast.warning(`Sem Produto na Sacola`, {
    position: 'top-center',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
    zIndex: 9999
  })
}

const carrinhoStore = useCarrinhoStore() // Acessa o store do carrinho

const router = useRouter() // Inicializa o roteador

// Função para selecionar o tamanho do produto
const selectSize = (productId, size) => {
  const product = carrinhoStore.carrinho.find((item) => item.id === productId) // Encontra o produto no carrinho
  if (product) {
    product.selectedSize = size // Define o tamanho selecionado
  }
}

// Função para verificar o carrinho antes de prosseguir para o pagamento
const verificarCarrinho = () => {
  const produtoSemTamanho = carrinhoStore.carrinho.find((produto) => !produto.selectedSize) // Verifica se há produto sem tamanho selecionado
  const semProdutoCarrinho = carrinhoStore.carrinho.length // Verifica se o carrinho está vazio

  if (semProdutoCarrinho == 0) {
    // Se o carrinho estiver vazio
    showWarning2(semProdutoCarrinho) // Exibe o alerta de carrinho vazio
    return
  }

  if (produtoSemTamanho) {
    // Se algum produto não tem tamanho
    showWarning(produtoSemTamanho) // Exibe o alerta de produto sem tamanho selecionado
    return
  }
  router.push('/pagar') // Redireciona para a página de pagamento
}

// Computa o valor total a ser pago
const totalAPagar = computed(() => {
  return carrinhoStore.carrinho.reduce((acc, carrinho) => acc + carrinho.price, 0).toFixed(2) // Soma os preços dos produtos
})
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.semProdutoCarrinho {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5px;
  min-height: 10dvh;
  text-align: center;
}
.semProdutoCarrinho img {
  height: 300px;
}

.order-review {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70dvh;
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.steps {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 10px;
}

.step {
  flex: 1;
  text-align: center;
}

.step-number {
  background-color: #7e201d;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5px;
}

.step-title {
  font-size: 14px;
  color: #555;
}

.active .step-number {
  background-color: #27ae60;
}

.current-step {
  width: 100%;
  max-width: 600px;
  background-color: #e8f5e9;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px;
}

.current-step p {
  font-size: 14px;
  color: #333;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 600px;
  max-width: 600px;
  max-height: 600px;
  overflow-y: auto;
}

.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: white;
}

.product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 90px;
  height: auto;
  border-radius: 4px;
  margin-right: 15px;
}

.product-info {
  flex-grow: 1;
  text-align: left;
  font-size: 12px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #27ae60;
}

.remove-button {
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;
  background-color: white;
}

.remove-button img {
  width: 30px;
}

.pay-button {
  background-color: #7e201d;
  color: white;
  padding: 12px 0;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
}

.pay-button:hover {
  background-color: #ad2525;
}

.historico-button {
  background-color: #000000;
  color: white;
  padding: 12px 0;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 300px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
}

.historico-button:hover {
  background: transparent;
  color: #000000;
  border: 1px solid #0d0d0d;
}

.size {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  font-size: 13px;
}

.size-selection {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1px;
}

.size-selection button {
  padding: 2.5px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;
}

.size-selection button:hover {
  background-color: #e7e7e7;
}

.last {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.resumo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #e0e0e0;
  padding: 20px;
  transition: all 0.5s ease;
  border-radius: 12px;
}

.resumo:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.infos {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
}

.infos p {
  font-weight: 600;
}

.ahh {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 120px;
}
@media (max-width: 970px) {
  .order-review {
    padding: 15px;
  }

  h1 {
    font-size: 24px;
  }

  .product-image {
    width: 60px;
  }

  .pay-button {
    padding: 10px;
    font-size: 14px;
  }

  .remove-button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .step-title {
    font-size: 12px;
  }

  .current-step p {
    font-size: 12px;
  }

  .ahh {
    flex-direction: column;
    align-items: center;
  }
  .product-list {
    width: 100%;
  }
  .semProdutoCarrinho p {
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px;
  }

  .pay-button {
    font-size: 12px;
  }

  .remove-button {
    font-size: 10px;
  }

  .step-title {
    font-size: 10px;
  }

  .current-step p {
    font-size: 10px;
  }
  .size-selection button {
    font-size: 7px;
    padding: 1.75px 2.5px;
    border-radius: 2.5px;
  }
}
</style>
