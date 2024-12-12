<template>
  <div class="page-container">
    <div class="logo-container hidden">
      <img src="/src/assets/img/Logos/stussy.svg" alt="Stussy Logo" class="stussy-logo" />
    </div>
    <div class="main-content">
      <aside class="filter-container">
        <input type="text" placeholder="Filtrar produtos" v-model="filterText" class="filter-input" />
      </aside>
      <div class="product-list">
        <div class="product-item hidden" v-for="product in filteredProducts" :key="product.id" :product="product">
          <button class="btn-more" @click="visualizar(product.id)">
    <img :src="product.image1" :alt="product.name" class="product-image" />
    </button>
    <div class="buttons">
      <div>
      <h3>{{ product.name }}</h3>
      <p>R${{ product.price }}</p>
      </div>
      <button class="btn-cart" @click="carrinhoStore.addCarrinho(product)">
        <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" class="cart-image" />
      </button>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'; 
// Importa funcionalidades do Vue para criar variáveis reativas e propriedades computadas.

import { useProductStore } from '@/stores/products';
// Acessa o store de produtos para obter e gerenciar a lista de produtos.

import { useCarrinhoStore } from '@/stores/carrinho';
// Acessa o store do carrinho para gerenciar os itens no carrinho de compras.

import { useRouter } from 'vue-router';
// Acessa o Vue Router para permitir navegação entre páginas.

const carrinhoStore = useCarrinhoStore();
// Inicializa o store do carrinho, permitindo adicionar produtos ao carrinho.

const router = useRouter()
// Inicializa o roteador para navegação entre páginas.

function visualizar(id) {
  // Função para redirecionar para a página de detalhes do produto com o ID fornecido.
  router.push(`/produto/${id}`)
}

const productStore = useProductStore();
// Inicializa o store de produtos para acessar a lista de produtos.

const filterText = ref('')
// Cria uma variável reativa para armazenar o texto do filtro digitado pelo usuário.

const filteredProducts = computed(() => 
  // Filtra os produtos com base no nome e no filtro de texto digitado.
  productStore.products.filter(product => 
    product.stussy && 
    (!filterText.value || product.name.toLowerCase().includes(filterText.value.toLowerCase()))
  )
);
// Retorna a lista de produtos filtrada, considerando o filtro de texto e a marca 'Stussy'.
</script>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  width: 100%;
}

.logo-container {
  margin: 20px 0;
}

.stussy-logo {
  width: 150px;
  height: auto;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.filter-container {
  width: 100%;
  max-width: 600px;
  padding: 10px;
  box-sizing: border-box;
}

.filter-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1500px;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 20px;
  margin: 15px;
  width: 250px;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all .3s ease-in-out;
}

.product-item:hover{
  transform: scale(1.01) translateY(-5px);
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

button {
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.buttons div h3{
  font-size: 14px;
  font-weight: 600;
}

.buttons div p{
  color: #025213;
  font-weight: 600;
  font-size: 13px;
}

.btn-more {
  color: black;
  padding: 10px 20px;
  background-color: #ffff;
}

.btn-cart {
  background: none;
  padding: 0;
}

.cart-image {
  width: 36px;
  height: 36px;
}
</style>
