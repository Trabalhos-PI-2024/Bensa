<template>
  <div v-if="isOpen" class="divCarrinho">
    <div class="fecharCarrinho">
      <button @click="closeModal">
        <img src="/src/assets/img/Icons/excluir.png" alt="Fechar Carrinho">
      </button>
    </div>
    <div class="titleCarrinho">
      <h2>CARRINHO</h2>
    </div>
    <div class="produtosCarrinho">
      <div v-for="carrinho in carrinhoStore.carrinho" :key="carrinho.id" class="produto">
        <button class="close" @click="carrinhoStore.deleteProductById(carrinho.id)">
          <img src="/src/assets/img/Icons/excluir (1).png" alt="Fechar">
        </button>
        <div class="infoProduto">
          <h3>{{ carrinho.name }}</h3>
          <h4>R$ {{ carrinho.price.toFixed(2) }}</h4>
        </div>
        <div class="imgProduto">
          <img :src="carrinho.image1" :alt="carrinho.name">
        </div>
      </div>
    </div>

    <div class="infoCarrinhoContainer">
      <div class="boxTotalaPagar">
        <label>Total a Pagar: R$</label>
        <span class="preco">{{ totalAPagar }}</span>
      </div>
      <div class="historico">
        <router-link to="/historico">Histórico de Compras</router-link>
      </div>
    </div>

    <router-link to="/revisar">
      <div class="buttonComprarCarrinho">
        <button>COMPRAR</button>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinhoStore = useCarrinhoStore();

const isOpen = ref(true);

const totalAPagar = computed(() => {
  return carrinhoStore.carrinho.reduce((acc, carrinho) => acc + carrinho.price, 0).toFixed(2);
});

function closeModal() {
  isOpen.value = false;
}
</script>

<style scoped>
.divCarrinho {
  width: auto;
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 40px 60px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  z-index: 1000000;
}

.titleCarrinho {
  font-size: 25px;
}

.produtosCarrinho .produto {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.infoProduto {
  width: 240px;
  display: flex;
  flex-direction: column;
  background: #f6f6f9;
  border-radius: 7px;
  padding: 10px 20px;
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
}

.close img {
  width: 30px;
}
@media (max-width: 768px) {
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
    width: 140px;
  }

  .infoProduto h3 {
    font-size: 12px;
  }

  .infoProduto h4 {
    font-size: 10px;
    color: #025213;
  }

  .imgProduto img {
    width: 70px;
  }
}
</style>
