<template>
  <div class="page-container">
    <div class="logo-container">
      <img src="../assets/img/stussy.svg" alt="Stussy Logo" class="stussy-logo" />
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
import camisa1stussy from '../assets/produtos.stussy/camisa1stussy.webp';
import chapeu2stussy from '../assets/produtos.stussy/chapeu2stussy.webp';
import camisa2stussy from '../assets/produtos.stussy/camisa2stussy.webp';
import shorts2stussy from '../assets/produtos.stussy/shorts2stussy.webp';
import shorts1stussy from '../assets/produtos.stussy/shorts1stussy.webp';
import chapeu1stussy from '../assets/produtos.stussy/chapeu1stussy.webp';
import moletom1stussy from '../assets/produtos.stussy/moletom1stussy.webp';
import moletom2stussy from '../assets/produtos.stussy/moletom2stussy.webp';
import camisa3stussy from '../assets/produtos.stussy/camisa3stussy.webp';
import camisa4stussy from '../assets/produtos.stussy/camisa4stussy.webp';
import camisa5stussy from '../assets/produtos.stussy/camisa5stussy.webp';
import moletom3stussy from '../assets/produtos.stussy/moletom3stussy.webp';

const products = ref([
  { id: 85, name: 'Produto 1', description: 'Descrição do produto 1', image: camisa1stussy },
  { id: 86, name: 'Produto 2', description: 'Descrição do produto 2', image: chapeu2stussy },
  { id: 87, name: 'Produto 3', description: 'Descrição do produto 3', image: camisa3stussy },
  { id: 88, name: 'Produto 4', description: 'Descrição do produto 4', image: chapeu1stussy },
  { id: 89, name: 'Produto 5', description: 'Descrição do produto 5', image: camisa2stussy },
  { id: 90, name: 'Produto 6', description: 'Descrição do produto 6', image: moletom1stussy },
  { id: 91, name: 'Produto 7', description: 'Descrição do produto 7', image: shorts1stussy },
  { id: 92, name: 'Produto 8', description: 'Descrição do produto 8', image: moletom2stussy },
  { id: 93, name: 'Produto 9', description: 'Descrição do produto 11', image: camisa4stussy },
  { id: 94, name: 'Produto 10', description: 'Descrição do produto 12', image: camisa5stussy },
  { id: 95, name: 'Produto 11', description: 'Descrição do produto 13', image: shorts2stussy },
  { id: 96, name: 'Produto 12', description: 'Descrição do produto 14', image: moletom3stussy }
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
</style>
