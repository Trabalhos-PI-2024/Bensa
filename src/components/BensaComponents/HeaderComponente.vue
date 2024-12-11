<template>
  <header class="hidden">
    <div class="header" ref="mainHeader">
      <div class="mainHeader">
        <router-link to="/header" class="hamburger">
          <div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </router-link>

        <div class="logo" v-if="!isSearchOpen || windowWidth > 768">
          <RouterLink to="/">
            <img src="/src/assets/img/Logos/logo.png" alt="Logo" />
          </RouterLink>
        </div>

        <nav class="nav">
          <button class="close-menu" v-if="isMenuOpen" @click="toggleMenu">X</button>
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

        <div class="icon" v-if="!isSearchOpen || windowWidth > 768">
          <router-link to="/login" class="icon-button">
            <img src="/src/assets/img/Icons/user.svg" alt="Usuário" />
          </router-link>
          <router-link to="/revisar" class="icon-button">
            <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <hr />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Importa funções do Vue para criar reatividade e registrar/deregistrar eventos no ciclo de vida do componente.

import { useIntersectionObserver } from '@/composables/useIntersectionObserver';
// Importa um observer personalizado para detectar quando o elemento entra em interseção com o viewport. Não está claro no código atual onde é usado, mas pode estar relacionado à visibilidade do `header`.

useIntersectionObserver()
// Provavelmente inicializa o observer mencionado acima.

const isMenuOpen = ref(false)
// Cria uma variável reativa para controlar o estado de abertura do menu responsivo.

const isSearchOpen = ref(false)
// Cria uma variável reativa para controlar o estado de abertura da busca (não está implementado no template).

const windowWidth = ref(window.innerWidth)
// Cria uma variável reativa que armazena a largura atual da janela, usada para responsividade.

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
// Função para alternar o estado do menu entre aberto e fechado.

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
// Função que atualiza a largura da janela na variável reativa toda vez que a janela é redimensionada.

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})
// Registra um listener para o evento de redimensionamento da janela quando o componente é montado, para garantir que `windowWidth` seja atualizado dinamicamente.

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
// Remove o listener do evento de redimensionamento quando o componente é desmontado, evitando vazamento de memória.
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
  transition: all .3s ease-in-out;
  padding: 2.5px; 
  border-bottom: 1px solid transparent;
}

.nav a:hover{
  border-bottom: 1px solid #0d0d0d;
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
