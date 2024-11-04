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

        <button
          v-if="windowWidth <= 768 && !isSearchOpen"
          class="search-button"
          @click="toggleSearchBar"
        >
          <img src="/src/assets/img/Icons/search.png" alt="Pesquisar" />
        </button>

        <div class="logo" v-if="!isSearchOpen || windowWidth > 768">
          <RouterLink to="/">
            <img src="/src/assets/img/Logos/logo.png" alt="Logo" />
          </RouterLink>
        </div>

        <div class="search-bar" :class="{ 'full-width': isSearchOpen || windowWidth > 768 }">
          <div v-if="isSearchOpen || windowWidth > 768" class="search-input-container">
            <button v-if="windowWidth <= 768" @click="toggleSearchBar" class="close-search">
              X
            </button>
            <input
              type="text"
              placeholder="Pesquisar..."
              :class="{ 'small-input': windowWidth > 768 }"
            />
          </div>
        </div>

        <nav class="nav" :class="{ active: isMenuOpen }">
          <button class="close-menu" v-if="isMenuOpen" @click="toggleMenu">X</button>
          <RouterLink to="/roupasComunidade" class="routerLink" @click="toggleMenu">
            <p>Roupas</p>
          </RouterLink>
          <RouterLink to="/sneakersComunidade" class="routerLink" @click="toggleMenu">
            <p>Calçados</p>
          </RouterLink>
          <RouterLink to="/acessoriosComunidade" class="routerLink" @click="toggleMenu">
            <p>Acessórios</p>
          </RouterLink>
          <router-link to="/minhaloja" @click="toggleMenu">
            <button class="quero-vender-button">Quero Vender</button>
          </router-link>
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
      <CarrinhoComponente v-if="showCart" :cartItems="cartItems" @close="toggleCart" />
      <LoginComponente v-if="showLogin" />
    </div>
  </header>
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

const toggleSearchBar = () => {
  isSearchOpen.value = !isSearchOpen.value
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
  max-width: 90%;
  margin: 0 auto;
}
.mainHeader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0dbdb;
  background-color: #ffffff;
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

.search-bar {
  position: relative;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar.full-width {
  flex: 1;
  justify-content: space-between;
  padding: 0 10px;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.search-button img {
  width: 20px;
}

.search-input-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.search-input-container input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
}

.search-input-container .close-search {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
}

.search-input-container input.small-input {
  max-width: 100%;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  flex: 1;
}

.nav p{
  color: #0d0d0d;
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

.quero-vender-button {
  background-color: #9c1e0e;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.quero-vender-button:hover {
  background-color: #69160b;
}

.close-menu{
  display: none;
}

@media (max-width: 768px) {
  .mainHeader {
    justify-content: space-between;
  }

  .search-bar {
    width: auto;
    margin-top: 20px;
  }

  .hamburger {
    display: block;
  }

  .logo {
    margin-left: 15px;
  }

  .logo img {
    width: 110px;
  }

  .search-button {
    margin-left: 25px;
  }

  .search-button img {
    width: 25px;
  }

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    display: none;
    flex-direction: column;
    z-index: 10;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav.active {
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 50vh;
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
@media (max-width: 576px) {
  .quero-vender-button {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .logo img {
    width: 120px;
  }

  .nav {
    gap: 20px;
  }
}
</style>
