<template>
  <div class="page-container">
    <div class="logo-container">
      <img src="../assets/img/vans.svg" alt="Vans Logo" class="vans-logo" />
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
import tenis1vans from '../assets/produtos.vans/tenis1vans.webp';
import chapeu1vans from '../assets/produtos.vans/chapeu1vans.webp';
import mochila1vans from '../assets/produtos.vans/mochila1vans.webp';
import bag1vans from '../assets/produtos.vans/bag1vans.webp';
import chapeu2vans from '../assets/produtos.vans/chapeu2vans.webp';
import oculos1vans from '../assets/produtos.vans/oculos1vans.webp';
import tenis2vans from '../assets/produtos.vans/tenis2vans.webp';
import tenis3vans from '../assets/produtos.vans/tenis3vans.webp';
import tenis4vans from '../assets/produtos.vans/tenis4vans.webp';
import tenis5vans from '../assets/produtos.vans/tenis5vans.webp';
import oculos2vans from '../assets/produtos.vans/oculos2vans.webp';
import camisa1vans from '../assets/produtos.vans/camisa1vans.webp';

const products = ref([
  { id: 73, name: 'Produto 1', description: 'Descrição do produto 1', image: tenis1vans },
  { id: 74, name: 'Produto 2', description: 'Descrição do produto 2', image: chapeu1vans },
  { id: 75, name: 'Produto 3', description: 'Descrição do produto 3', image: bag1vans },
  { id: 76, name: 'Produto 4', description: 'Descrição do produto 5', image: tenis2vans },
  { id: 77, name: 'Produto 5', description: 'Descrição do produto 6', image: oculos1vans },
  { id: 78, name: 'Produto 6', description: 'Descrição do produto 7', image: chapeu2vans },
  { id: 79, name: 'Produto 7', description: 'Descrição do produto 8', image: tenis3vans },
  { id: 80, name: 'Produto 8', description: 'Descrição do produto 11', image: tenis4vans },
  { id: 81, name: 'Produto 9', description: 'Descrição do produto 12', image: tenis5vans },
  { id: 82, name: 'Produto 10', description: 'Descrição do produto 13', image: mochila1vans },
  { id: 83, name: 'Produto 11', description: 'Descrição do produto 14', image: oculos2vans },
  { id: 84, name: 'Produto 12', description: 'Descrição do produto 3', image: camisa1vans }
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

.vans-logo {
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
