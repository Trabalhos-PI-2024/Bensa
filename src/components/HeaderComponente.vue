<template>
    <header>
      <div class="mainHeader">
        <div class="logo">
          <RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo"></RouterLink>
        </div>
        <nav class="nav">
          <RouterLink to="/roupas" class="routerLink">
            <p>Roupas</p>
          </RouterLink>
          <RouterLink to="/sneakers" class="routerLink">
            <p>Calçados</p>
          </RouterLink>
          <RouterLink to="/acessorios" class="routerLink">
            <p>Acessórios</p>
          </RouterLink>
          <RouterLink to="/comunidade" class="routerLink">
            <p>Comunidade</p>
          </RouterLink>
        </nav>
        <div class="icon">
          <button @click="toggleLogin" class="icon-button">
            <img src="../assets/img/user.svg" alt="Usuário">
          </button>
          <button @click="toggleCart" class="icon-button">
            <img src="../assets/img/carrinho.svg" alt="Carrinho">
          </button>
        </div>
      </div>
  
      <LoginComponente v-if="showLogin" />
      <div class="divCarrinho" v-if="showCart">
        <div class="fecharCarrinho">
          <button @click="toggleCart">
            <img src="../assets/img/excluir.png" alt="Fechar Carrinho">
          </button>
        </div>
        <div class="titleCarrinho">
          <h2>CARRINHO</h2>
        </div>
        <div class="produtosCarrinho">
          <!-- Renderizar dinamicamente os produtos no carrinho -->
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
            <input type="text" value="00000-000">
          </div>
          <div class="boxTotalaPagar">
            <label>Total a Pagar: R$</label>
            <input type="text" :value="totalPrice.toFixed(2)">
          </div>
        </div>
        <div class="buttonComprarCarrinho">
          <button>COMPRAR</button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, computed, provide } from 'vue';
  import LoginComponente from './LoginComponente.vue';
  
  const showLogin = ref(false);
  const showCart = ref(false);
  const cartItems = ref([]);
  
  const toggleLogin = () => {
    showLogin.value = !showLogin.value;
  };
  
  const toggleCart = () => {
    showCart.value = !showCart.value;
  };
  const addToCart = (product) => {
    console.log('Produto recebido pelo carrinho:', product);
    cartItems.value.push(product); 
    console.log('Carrinho atualizado:', cartItems.value);
  };
  
  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price, 0);
  });
  
  provide('addToCart', addToCart);
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

header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    z-index: 1000;
}

.mainHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid #e0dbdb;
    background-color: #ffffff;
}

.logo img {
    width: 150px;
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
}

.nav a {
    text-decoration: none;
}

.nav p {
    color: #0d0d0d;
    margin: 0;
    cursor: pointer;
    font-size: 20px;
}

.icon {
    display: flex;
    gap: 30px;
}

.icon img {
    width: 40px;
}

.icon-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.icon-button img {
    width: 40px;
}

.routerLink {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.routerLink img {
    width: 30px;
}

@media (max-width: 1100px) {
    .mainHeader {
        flex-direction: column;
    }

    .icon {
        position: absolute;
        top: 30px;
        right: 30px;
        gap: 20px;
    }

    .icon img {
        width: 30px;
    }
}
</style>
