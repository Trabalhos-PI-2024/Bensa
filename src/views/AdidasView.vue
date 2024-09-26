<template>
    <div class="page-container">
   
  
      <div class="logo-container">
        <img src="../assets/img/adidas.svg" alt="Adidas Logo" class="adidas-logo" />
      </div>
  
      <div class="main-content">
        <!-- Filtro -->
        <aside class="filter-container">
          <input type="text" placeholder="Filtrar produtos" class="filter-input" />
        </aside>
  
        <!-- Lista de produtos -->
        <div class="product-list">
          <ProductItem
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ProductItem from '../components/ProductItem.vue';
  import tenis1adidas from '../assets/produtos.adidas/tenis1adidas.webp'
import mochila2adidas from '../assets/produtos.adidas/mochila2adidas.jpg'
import mochila1adidas from '../assets/produtos.adidas/mochila1adidas.webp'
import camisa3adidas from '../assets/produtos.adidas/camisa3adidas.webp'
import camisa1adidas from '../assets/produtos.adidas/camisa1adidas.webp'
import camisa2adidas from '../assets/produtos.adidas/camisa2adidas.webp'
import tenis2adidas from '../assets/produtos.adidas/tenis2adidas.webp'
import tenis3adidas from '../assets/produtos.adidas/tenis3adidas.webp'
import tenis4adidas from '../assets/produtos.adidas/tenis4adidas.jpg'
import tenis5adidas from '../assets/produtos.adidas/tenis5adidas.webp'
import tenis6adidas from '../assets/produtos.adidas/tenis6adidas.webp'
import bag1adidas from '../assets/produtos.adidas/bag1adidas.webp'

  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: [
        { name: 'Produto 1', description: 'Descrição do produto 1', image: tenis1adidas },
        { name: 'Produto 2', description: 'Descrição do produto 2', image: mochila2adidas },
        { name: 'Produto 3', description: 'Descrição do produto 3', image: camisa3adidas },
        { name: 'Produto 4', description: 'Descrição do produto 5', image: tenis2adidas },
        { name: 'Produto 5', description: 'Descrição do produto 6', image: camisa2adidas },
        { name: 'Produto 6', description: 'Descrição do produto 7', image: camisa1adidas },
        { name: 'Produto 7', description: 'Descrição do produto 8', image: tenis3adidas },
        { name: 'Produto 8', description: 'Descrição do produto 11', image: tenis4adidas  },
        { name: 'Produto 9', description: 'Descrição do produto 12', image: tenis5adidas  },
        { name: 'Produto 10', description: 'Descrição do produto 13', image: mochila1adidas  },
        { name: 'Produto 11', description: 'Descrição do produto 14', image: tenis6adidas  },
        { name: 'Produto 12', description: 'Descrição do produto 3', image: bag1adidas },
        ],
      };
    },
  };
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
  
  .adidas-logo {
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
    margin-bottom: 20px; /* Espaço abaixo do campo de filtro */
  }
  
  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
  }
  </style>
  