<template>
    <div class="titleCarrinho">
      <h2>SUA SACOLA</h2>
      <router-link to="/" class="fecharCarrinho">
      <img src="/src/assets/img/Icons/excluir.png" alt="Fechar Carrinho" />
    </router-link>
    </div>
  <div class="divCarrinho">
    <div class="mainSacola">
    <div class="produtosCarrinho" v-if="carrinhoStore.carrinho.length > 0">
      <div
        v-for="carrinho in carrinhoStore.carrinho"
        :key="carrinho.id"
        @click.stop
        class="produto"
      >
        <button class="close" @click="carrinhoStore.deleteProductById(carrinho.id)">
          <img src="/src/assets/img/Icons/excluir (1).png" alt="Fechar" />
        </button>
        <div class="infoProduto">
          <div class="nameProduto">
            <h3>{{ carrinho.name }}</h3>
            <h5>
              Tamanho:
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
            </h5>
          </div>
          <h4>R$ {{ carrinho.price.toFixed(2) }}</h4>
        </div>

        <div class="imgProduto">
          <img :src="carrinho.image1" :alt="carrinho.name" />
        </div>
      </div>
    </div>
    <div class="semProdutoCarrinho" v-else>
          <h3>Ops, você não possui itens na Sacola</h3>
        </div>
      </div>
    <div class="infoCarrinhoContainer">
      <div class="boxTotalaPagar">
        <label>Total a Pagar: R$</label>
        <span class="preco">{{ totalAPagar }}</span>
      </div>
      <div class="historico" @click.stop>
        <router-link to="/historico" @click="carrinhoStore.closeModal()"
          >Histórico de Compras</router-link
        >
      </div>
      <div class="buttonComprarCarrinho" @click.stop>
      <button @click="verificarCarrinho()">COMPRAR</button>
    </div>
    </div>
  </div>
</template>

<script setup>
  // Importando as dependências necessárias
  import { computed, ref } from 'vue' // Usando as funcionalidades do Vue, como computed e ref
  import { useCarrinhoStore } from '@/stores/carrinho' // Importando o store do carrinho
  import { useRouter } from 'vue-router' // Para navegação entre rotas
  import { useToast } from 'vue-toastification' // Para exibir notificações tipo toast
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Para usar o observer de interseção

  // Utiliza o hook do Intersection Observer (provavelmente para monitoramento de visibilidade de elementos)
  useIntersectionObserver()

  // Inicializa o Toast para mostrar mensagens de aviso
  const toast = useToast()

  // Instância do Router para redirecionamento de páginas
  const router = useRouter()

  // Acessando o store do carrinho
  const carrinhoStore = useCarrinhoStore()

  // Função para exibir um toast de aviso quando algum produto não tiver tamanho selecionado
  function showWarning(produtoSemTamanho) {
    toast.warning(`Escolha o tamanho de "${produtoSemTamanho.name}" antes de prosseguir.`, {
      position: 'top-center', // Define a posição do toast
      timeout: 5000, // Tempo de exibição do toast
      closeOnClick: true, // Fecha o toast ao clicar
      pauseOnFocusLoss: true, // Pausa o tempo ao perder o foco
      pauseOnHover: true, // Pausa o tempo ao passar o mouse sobre o toast
      draggable: true, // Permite arrastar o toast
      draggablePercent: 0.6, // Ajusta a porcentagem para arrastar
      showCloseButtonOnHover: false, // Não exibe botão de fechar ao passar o mouse
      hideProgressBar: false, // Exibe a barra de progresso
      closeButton: 'button', // Exibe um botão de fechar
      icon: true, // Exibe o ícone no toast
      rtl: false, // Não é RTL (direita para esquerda)
      zIndex: 9999, // Define o índice z para o toast
    })
  }

  // Computed para calcular o total a pagar, somando os preços dos itens no carrinho
  const totalAPagar = computed(() => {
    return carrinhoStore.carrinho.reduce((acc, carrinho) => acc + carrinho.price, 0).toFixed(2)
  })

  // Função para selecionar o tamanho de um produto no carrinho
  const selectSize = (productId, size) => {
    const product = carrinhoStore.carrinho.find((item) => item.id === productId) // Encontra o produto
    if (product) {
      product.selectedSize = size // Atualiza o tamanho selecionado do produto
    }
  }

  // Função que valida o carrinho antes de proceder para a página de revisão
  const verificarCarrinho = () => {
    // Verifica se algum produto no carrinho não tem tamanho selecionado
    const produtoSemTamanho = carrinhoStore.carrinho.find((produto) => !produto.selectedSize)

    // Se algum produto não tiver tamanho, exibe um aviso e impede de prosseguir
    if (produtoSemTamanho) {
      showWarning(produtoSemTamanho)
      return
    }

    // Se todos os produtos tiverem tamanho, o usuário é redirecionado para a página de revisão
    router.push('/revisar')
    console.log('vai tomando') // Esta linha parece ser um log para depuração, talvez possa ser removida
    carrinhoStore.closeModal() // Fecha o modal do carrinho
  }
</script>


<style scoped>
.divCarrinho {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
  padding: 40px 60px;
  background: #fff;
  border-radius: 10px;
}

.titleCarrinho {
  font-size: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}


.mainSacola{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.produtosCarrinho {
  max-height: 50dvh;
  overflow-y: auto;
}

.produtosCarrinho .produto {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.infoProduto {
  display: flex;
  background: #f6f6f9;
  border-radius: 7px;
  padding: 10px 20px;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.infoProduto h3 {
  font-size: 16px;
}

.infoProduto h4 {
  font-size: 14px;
  color: #025213;
}

.imgProduto img {
  width: 100px;
}

.infoCarrinhoContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 50dvh;
  padding: 0 0 0 20px;
  border-left: 1px solid #4b4b4b;
}

.boxTotalaPagar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.boxTotalaPagar label {
  font-weight: bold;
}

.preco {
  font-weight: bold;
  color: #025213;
}

.historico {
  font-weight: bold;
  text-decoration: underline;
  color: #007bff;
}

.historico a {
  color: inherit;
  text-decoration: none;
}

.buttonComprarCarrinho button {
  padding: 10px 20px;
  background: #e7e7e7;
  border-radius: 12px;
  font-size: 19px;
  font-weight: 600;
  transition: all 0.5s;
}

.buttonComprarCarrinho button:hover {
  transform: scale(1.1);
}

.fecharCarrinho {
  position: absolute;
  right: 40px;
}

.fecharCarrinho button {
  background: transparent;
}

.fecharCarrinho img {
  width: 40px;
}

.close {
  background: transparent;
  cursor: pointer;
}

.close img {
  width: 30px;
}

.size-selection {
  display: flex;
  justify-content: center;
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
@media (max-width: 768px) {
  .divCarrinho {
    width: 100%;
  }
  .infoCarrinhoContainer {
    flex-direction: column;
    align-items: flex-start;
  }

  .boxTotalaPagar,
  .historico {
    width: 100%;
    margin-bottom: 10px;
    text-align: left;
  }
  .fecharCarrinho {
    right: 5px;
  }
  .produtosCarrinho {
    max-height: 30dvh;
    overflow-y: auto;
  }
}
@media (max-width: 520px) {
  .infoCarrinhoContainer {
    flex-direction: column;
    align-items: center;
  }

  .boxTotalaPagar {
    flex-direction: row;
  }

  .fecharCarrinho {
    right: 5px;
  }
  .infoProduto {
    width: auto;
  }

  .infoProduto h3 {
    font-size: 12px;
  }

  .infoProduto h4 {
    font-size: 10px;
    color: #025213;
  }

  .infoProduto h5 {
    font-size: 8px;
  }

  .imgProduto img {
    width: 70px;
  }
  .size-selection button {
    font-size: 7px;
    padding: 1.75px 2.5px;
    border-radius: 2.5px;
  }
}
</style>
