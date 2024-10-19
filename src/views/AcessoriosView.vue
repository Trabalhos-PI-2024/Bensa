<template>
  <div class="page-container">
    <div class="logo-container">
      <h1>Acessórios</h1>
    </div>
    <div class="main-content">
      <aside class="filter-container">
        <input type="text" placeholder="Filtrar produtos" class="filter-input" />
      </aside>
      <div class="product-list">
        <div class="product-item" v-for="product in acessorios" :key="product.id" :product="product">
    <img :src="product.image1" :alt="product.name" class="product-image" />
    <div class="buttons">
      <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
      <!-- Passa o produto ao carrinho -->
      <button @click="productsStore.addCarrinho(product)" class="btt-cart">
        <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
      </button>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../stores/products.js';

const productStore = useProductStore();

const acessorios = computed(() =>
      productStore.products.filter(product => product.acessoriosView)
    );
</script>


<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.logo-container {
  margin: 20px 0;
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

button:hover {
  opacity: 0.9;
}
</style>
