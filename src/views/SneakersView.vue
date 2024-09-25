<template>
    <div class="page-container">
   
  
      <div class="logo-container">
        <h1>Calçados</h1>
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
  import tenis1nike from '../assets/produtos.nike/tenis1nike.webp'
import tenis2nike from '../assets/produtos.nike/tenis2nike.webp'
import tenis3nike from '../assets/produtos.nike/tenis3nike.webp'
import tenis4nike from '../assets/produtos.nike/tenis4nike.webp'
import tenis5nike from '../assets/produtos.nike/tenis5nike.webp'
import tenis6nike from '../assets/produtos.nike/tenis6nike.webp'
  import tenis1adidas from '../assets/produtos.adidas/tenis1adidas.webp'
import tenis2adidas from '../assets/produtos.adidas/tenis2adidas.webp'
import tenis3adidas from '../assets/produtos.adidas/tenis3adidas.avif'
import tenis4adidas from '../assets/produtos.adidas/tenis4adidas.avif'
import tenis5adidas from '../assets/produtos.adidas/tenis5adidas.avif'
import tenis6adidas from '../assets/produtos.adidas/tenis6adidas.avif'
  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: [
        { name: 'Produto 1', description: 'Descrição do produto 1', image: tenis1nike },
        { name: 'Produto 2', description: 'Descrição do produto 2', image: tenis1adidas },
        { name: 'Produto 3', description: 'Descrição do produto 3', image: tenis6adidas },
        { name: 'Produto 4', description: 'Descrição do produto 4', image: tenis5adidas },
        { name: 'Produto 5', description: 'Descrição do produto 5', image: tenis2nike },
        { name: 'Produto 6', description: 'Descrição do produto 6', image: tenis4adidas },
        { name: 'Produto 7', description: 'Descrição do produto 7', image: tenis2adidas },
        { name: 'Produto 8', description: 'Descrição do produto 8', image: tenis3nike },
        { name: 'Produto 9', description: 'Descrição do produto 11', image: tenis4nike  },
        { name: 'Produto 10', description: 'Descrição do produto 12', image: tenis5nike  },
        { name: 'Produto 11', description: 'Descrição do produto 13', image: tenis3adidas  },
        { name: 'Produto 12', description: 'Descrição do produto 14', image: tenis6nike  },
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
    /* Adicione o estilo do header aqui */
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
  