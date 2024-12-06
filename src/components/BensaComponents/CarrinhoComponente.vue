<template>
  <div v-if="carrinhoStore.isOpen" class="divCarrinho">
    <div class="fecharCarrinho">
        <img src="/src/assets/img/Icons/excluir.png" alt="Fechar Carrinho" />
    </div>
    <div class="titleCarrinho">
      <h2>SACOLA</h2>
    </div>
    <div class="produtosCarrinho">
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
    </div>
      <div class="buttonComprarCarrinho" @click.stop>
        <button @click="verificarCarrinho()">COMPRAR</button>
      </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCarrinhoStore } from '@/stores/carrinho'
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const toast = useToast();

const router = useRouter()

const carrinhoStore = useCarrinhoStore()

function showWarning(produtoSemTamanho) {
  toast.warning(`Escolha o tamanho de "${produtoSemTamanho.name}" antes de prosseguir.`, {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    zIndex: 9999
  });
}

const totalAPagar = computed(() => {
  return carrinhoStore.carrinho.reduce((acc, carrinho) => acc + carrinho.price, 0).toFixed(2)
});

const selectSize = (productId, size) => {
  const product = carrinhoStore.carrinho.find((item) => item.id === productId);
  if (product) {
    product.selectedSize = size;
  }
};

const verificarCarrinho = () => {
  const produtoSemTamanho = carrinhoStore.carrinho.find(
    (produto) => !produto.selectedSize
  );

  if (produtoSemTamanho) {
    showWarning(produtoSemTamanho);
    return;
  }

  // Somente chama closeModal e redireciona se todos os tamanhos estiverem selecionados
  router.push('/revisar');
  console.log("vai tomando")
  carrinhoStore.closeModal();
};


</script>

<style scoped>
.divCarrinho {
  width: auto;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 40px 60px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  z-index: 100;
}

.titleCarrinho {
  font-size: 25px;
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
  width: 350px;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  flex-wrap: wrap;
  gap: 20px;
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
  top: 10px;
  right: 10px;
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

.size-selection{
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
  .divCarrinho{
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
