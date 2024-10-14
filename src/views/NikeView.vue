<template>
  <div class="page-container">
    <div class="logo-container">
      <img src="../assets/img/nike.svg" alt="Nike Logo" class="nike-logo" />
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
import mochila2nike from '../assets/produtos.nike/mochila2nike.webp';
import camisa3nike from '../assets/produtos.nike/camisa3nike.webp';
import calca4nike from '../assets/produtos.nike/calca4nike.webp';
import camisa2nike from '../assets/produtos.nike/camisa2nike.png';
import mochila3nike from '../assets/produtos.nike/mochila3nike.webp';
import mochila4nike from '../assets/produtos.nike/mochila4nike.avif';
import tenis2nike from '../assets/produtos.nike/tenis2nike.webp';
import tenis3nike from '../assets/produtos.nike/tenis3nike.webp';
import tenis4nike from '../assets/produtos.nike/tenis4nike.webp';
import tenis5nike from '../assets/produtos.nike/tenis5nike.webp';
import tenis6nike from '../assets/produtos.nike/tenis6nike.webp';

const products = ref([
  { id: 49, name: 'Produto 1', description: 'Descrição do produto 1', image: tenis1nike },
  { id: 50, name: 'Produto 2', description: 'Descrição do produto 2', image: mochila2nike },
  { id: 51, name: 'Produto 3', description: 'Descrição do produto 3', image: camisa3nike },
  { id: 52, name: 'Produto 4', description: 'Descrição do produto 4', image: calca4nike },
  { id: 53, name: 'Produto 5', description: 'Descrição do produto 5', image: tenis2nike },
  { id: 54, name: 'Produto 6', description: 'Descrição do produto 6', image: camisa2nike },
  { id: 55, name: 'Produto 7', description: 'Descrição do produto 7', image: mochila3nike },
  { id: 56, name: 'Produto 8', description: 'Descrição do produto 8', image: tenis3nike },
  { id: 57, name: 'Produto 9', description: 'Descrição do produto 9', image: tenis4nike },
  { id: 58, name: 'Produto 10', description: 'Descrição do produto 10', image: tenis5nike },
  { id: 59, name: 'Produto 11', description: 'Descrição do produto 11', image: mochila4nike },
  { id: 60, name: 'Produto 12', description: 'Descrição do produto 12', image: tenis6nike },
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
