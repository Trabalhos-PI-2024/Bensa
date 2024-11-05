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
        <button class="close" @click="carrinhoStore.deleteProductById(carrinho.id)"><img src="/src/assets/img/Icons/excluir (1).png" alt=""></button>
        <div class="infoProduto">
          <h3>{{ carrinho.name }}</h3>
          <h4>R$ {{ carrinho.price.toFixed(2) }}</h4>
        </div>
        <div class="imgProduto">
          <img :src="carrinho.image1" :alt="carrinho.name">
        </div>
      </div>
    </div>
    <div class="infoCarrinho">
      <div class="boxTotalaPagar">
        <label>Total a Pagar: R$</label>
        <input type="text" :value="totalAPagar" readonly>
      </div>
    </div>
    <div class="buttonComprarCarrinho">
      <button>COMPRAR</button>
    </div>
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
  top: 10px;
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

.infoProduto h3{
  font-size: 16px;
}

.infoProduto h4{
  font-size: 14px;
  color: #025213;
}

.imgProduto img {
  width: 100px;
}
.infoCarrinho {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7.3px;
}

.boxFrete input {
  background: #e7e7e7;
  padding: 5px 10px;
  width: 95px;
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
  top: 40px;
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
}

.close img {
  width: 30px;
}

@media (max-width: 520px) {
  .infoProduto {
  width: 140px;
}

.infoProduto h3{
  font-size: 12px;
}

.infoProduto h4{
  font-size: 10px;
  color: #025213;
}
.imgProduto img {
  width: 70px;
}

}
</style>
