<template>
  <div class="page-container">
    <div class="logo-container">
      <h1>Calçados</h1>
    </div>
    <div class="main-content">
      <aside class="filter-container">
        <input type="text" placeholder="Filtrar produtos" class="filter-input" />
      </aside>
      <div class="product-list">
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductItem from '../components/ProductItem.vue';
import tenis1nike from '../assets/produtos.nike/tenis1nike.webp';
import tenis2nike from '../assets/produtos.nike/tenis2nike.webp';
import tenis3nike from '../assets/produtos.nike/tenis3nike.webp';
import tenis4nike from '../assets/produtos.nike/tenis4nike.webp';
import tenis5nike from '../assets/produtos.nike/tenis5nike.webp';
import tenis6nike from '../assets/produtos.nike/tenis6nike.webp';
import tenis1adidas from '../assets/produtos.adidas/tenis1adidas.webp';
import tenis2adidas from '../assets/produtos.adidas/tenis2adidas.webp';
import tenis3adidas from '../assets/produtos.adidas/tenis3adidas.webp';
import tenis4adidas from '../assets/produtos.adidas/tenis4adidas.jpg';
import tenis5adidas from '../assets/produtos.adidas/tenis5adidas.webp';
import tenis6adidas from '../assets/produtos.adidas/tenis6adidas.webp';

const products = ref([
  { id: 29, name: 'Produto 1', description: 'Descrição do produto 1', image: tenis1nike },
  { id: 30, name: 'Produto 2', description: 'Descrição do produto 2', image: tenis1adidas },
  { id: 31, name: 'Produto 3', description: 'Descrição do produto 3', image: tenis6adidas },
  { id: 32, name: 'Produto 4', description: 'Descrição do produto 4', image: tenis5adidas },
  { id: 33, name: 'Produto 5', description: 'Descrição do produto 5', image: tenis2nike },
  { id: 34, name: 'Produto 6', description: 'Descrição do produto 6', image: tenis4adidas },
  { id: 35, name: 'Produto 7', description: 'Descrição do produto 7', image: tenis2adidas },
  { id: 36, name: 'Produto 8', description: 'Descrição do produto 8', image: tenis3nike },
  { id: 37, name: 'Produto 9', description: 'Descrição do produto 11', image: tenis4nike },
  { id: 38, name: 'Produto 10', description: 'Descrição do produto 12', image: tenis5nike },
  { id: 39, name: 'Produto 11', description: 'Descrição do produto 13', image: tenis3adidas },
  { id: 40, name: 'Produto 12', description: 'Descrição do produto 14', image: tenis6nike },
]);
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

.nike-logo {
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
</style>
