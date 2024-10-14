<template>
    <div class="divCarrinho">
      <div class="fecharCarrinho">
        <button @click="toggleCart">
          <img src="../assets/img/excluir.png" alt="Fechar Carrinho">
        </button>
      </div>
      <div class="titleCarrinho">
        <h2>CARRINHO</h2>
      </div>
      <div class="produtosCarrinho">
        <div v-for="(item, index) in cartItems" :key="index" class="produto">
          <div class="infoProduto">
            <p>{{ item.name }}</p>
            <p>R$ {{ item.price.toFixed(2) }}</p>
          </div>
          <div class="imgProduto">
            <img :src="item.image" :alt="item.name">
          </div>
        </div>
              </div>
      <div class="infoCarrinho">
        <div class="boxFrete">
          <label>Calcular Frete:</label>
          <input type="text" v-model="cep" @input="validateCep">
        </div>
        <div class="boxTotalaPagar">
          <label>Total a Pagar: R$</label>
          <input type="text" :value="totalPrice.toFixed(2)" readonly>
        </div>
      </div>
      <div class="buttonComprarCarrinho">
        <button>COMPRAR</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps } from 'vue';
  
  const props = defineProps(['cartItems']);
  const cep = ref('');
  
  const validateCep = () => {
  };
  
  const totalPrice = computed(() => {
    return props.cartItems.reduce((total, item) => total + item.price, 0);
  });
  const toggleCart = () => {
    showCart.value = !showCart.value;
  };
  const showCart = ref(false);
  </script>
  <style scoped>
  .divCarrinho {
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
  
  .divCarrinho .titleCarrinho {
      font-size: 25px;
  }
  
  .divCarrinho .produtosCarrinho {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
  }
  
  .divCarrinho .produtosCarrinho .closeProduto button {
      background: transparent;
  }
  
  .divCarrinho .produtosCarrinho .closeProduto img {
      width: 25px;
  }
  
  .divCarrinho .produtosCarrinho .infoProduto {
      display: flex;
      gap: 20px;
      background: #e7e7e7;
      padding: 20px;
  }
  
  .divCarrinho .produtosCarrinho .infoProduto input {
      width: 20px;
  }
  
  .divCarrinho .produtosCarrinho .imgProduto img {
      width: 100px;
  }
  
  .divCarrinho .infoCarrinho {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap: 7.3px;
  }
  
  .divCarrinho .infoCarrinho div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7.5px;
  }
  
  .divCarrinho .infoCarrinho .boxFrete {
      font-size: 17px;
  }
  
  .divCarrinho .infoCarrinho .boxFrete input {
      background: #e7e7e7;
      padding: 5px 10px;
      width: 95px;
  }
  
  .divCarrinho .infoCarrinho .boxTotalaPagar {
      font-size: 13px;
  }
  
  .divCarrinho .buttonComprarCarrinho button {
      padding: 10px 20px;
      background: #e7e7e7;
      border-radius: 12px;
      font-size: 19px;
      font-weight: 600;
      transition: all 0.5s;
  }
  
  .divCarrinho .buttonComprarCarrinho:hover button {
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
</style>
 