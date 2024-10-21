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
      <CarrinhoComponente v-if="showCart" :cartItems="cartItems" @close="toggleCart" />
     
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LoginComponente from './LoginComponente.vue';
  import CarrinhoComponente from './CarrinhoComponente.vue'
  
  const showLogin = ref(false);
  const showCart = ref(false);
  const cartItems = ref([]);
  
  const toggleLogin = () => {
    showLogin.value = !showLogin.value;
  };
  
  const toggleCart = () => {
  showCart.value = !showCart.value;
};

  
  </script>
  
<style scoped>
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
