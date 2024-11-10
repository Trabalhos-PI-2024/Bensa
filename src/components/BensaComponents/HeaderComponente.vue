<template>
  <header>
    <div class="header">
      <div class="mainHeader">
        <div class="hamburger" @click="toggleMenu">
          <div :class="{ open: isMenuOpen }">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>

        <div class="logo" v-if="!isSearchOpen || windowWidth > 768">
          <RouterLink to="/">
            <img src="/src/assets/img/Logos/logo.png" alt="Logo" />
          </RouterLink>
        </div>

        <nav class="nav" :class="{ active: isMenuOpen }">
          <button class="close-menu" v-if="isMenuOpen" @click="toggleMenu">X</button>
          <RouterLink to="/roupas" class="routerLink" @click="toggleMenu">
            <p>Roupas</p>
          </RouterLink>
          <RouterLink to="/sneakers" class="routerLink" @click="toggleMenu">
            <p>Calçados</p>
          </RouterLink>
          <RouterLink to="/acessorios" class="routerLink" @click="toggleMenu">
            <p>Acessórios</p>
          </RouterLink>
          <RouterLink to="/comunidade" class="routerLink" @click="toggleMenu">
            <p>Comunidade</p>
          </RouterLink>
        </nav>

        <div class="icon" v-if="!isSearchOpen || windowWidth > 768">
          <button @click="toggleLogin" class="icon-button">
            <img src="/src/assets/img/Icons/user.svg" alt="Usuário" />
          </button>
          <button @click="toggleCart" class="icon-button">
            <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" />
          </button>
        </div>
      </div>
      
      <LoginComponente v-if="showLogin" />
      <CarrinhoComponente v-if="showCart" :cartItems="cartItems" @close="toggleCart" />
      
     
    </div>
  </header>
  <hr />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LoginComponente from '@/components/BensaComponents/LoginComponente.vue'
import CarrinhoComponente from '../BensaComponents/CarrinhoComponente.vue'


const showLogin = ref(false)
const showCart = ref(false)
const cartItems = ref([])

const toggleLogin = () => {
  showLogin.value = !showLogin.value
}

const toggleCart = () => {
  showCart.value = !showCart.value
}
const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const windowWidth = ref(window.innerWidth)


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  z-index: 1000;
}

.mainHeader {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: #ffffff;
}

hr {
  border-bottom: 1px solid #e0dbdb;
}

.logo img {
  width: 150px;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .bar {
  display: block;
  width: 30px;
  height: 3px;
  margin: 6px 0;
  background-color: #333;
  transition: 0.4s;
}

.nav {
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  flex: 1;
  font-size: 20px;
}

.nav a{
  color: #0d0d0d;
  transition: all .5s ease-in-out;
  padding: 5px 10px; 
}

.nav a:hover{
  background: #0d0d0d;
  color: #fff;
  border-radius: 10px;
  transform: scale(1.1) translateY(-5px);
}

.icon {
  display: flex;
  gap: 20px;
}

.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon-button img {
  width: 35px;
}

.close-menu {
  display: none;
  }

@media (max-width: 768px) {
  .mainHeader {
    justify-content: space-between;
  }

  .hamburger {
    display: block;
  }

  .logo {
    margin-left: 20px;
  }

  .logo img {
    width: 120px;
  }
  .icon {
    gap: 12px;
  }

  .nav {
    position: absolute;
    top: 0;
    gap: 40px;
    background: #fff;
    display: none;
    flex-direction: column;
    z-index: 10;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all .5s ease;
  }

  .nav.active {
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: calc(50dvh - 1px);
  }

  .close-menu {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    align-self: flex-end;
  }

}

@media (min-width: 769px) and (max-width: 1024px) {
  .mainHeader {
    justify-content: space-between;
  }

  .nav {
    gap: 40px;
  }

  .logo img {
    width: 140px;
  }

  .icon-button img {
    width: 30px;
  }
  .nav {
    font-size: 16px;
  }
}

@media (min-width: 1025px) {
  .nav {
    gap: 60px;
  }

  .logo img {
    width: 150px;
  }

  .icon-button img {
    width: 35px;
  }
}
</style>
