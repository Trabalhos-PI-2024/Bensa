<template>
    <div class="page-container">
   
  
      <div class="logo-container">
        <h1>Acessórios</h1>
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
import chapeu1vans from '../assets/produtos.vans/chapeu1vans.webp'
import bag1adidas from '../assets/produtos.adidas/bag1adidas.webp'
import mochila2nike from '../assets/produtos.nike/mochila2nike.webp'
import mochila3nike from '../assets/produtos.nike/mochila3nike.webp'
import mochila4nike from '../assets/produtos.nike/mochila4nike.avif'
import mochila2adidas from '../assets/produtos.adidas/mochila2adidas.jpg'
import chapeu1stussy from '../assets/produtos.stussy/chapeu1stussy.webp'
import chapeu2stussy from '../assets/produtos.stussy/chapeu2stussy.webp'
  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: [
        { name: 'Produto 1', description: 'Descrição do produto 2', image: mochila2nike },
        { name: 'Produto 2', description: 'Descrição do produto 2', image: chapeu1vans },
        { name: 'Produto 3', description: 'Descrição do produto 3', image: chapeu1stussy },
        { name: 'Produto 5', description: 'Descrição do produto 6', image: chapeu2stussy },
        { name: 'Produto 6', description: 'Descrição do produto 7', image: bag1adidas },
        { name: 'Produto 7', description: 'Descrição do produto 7', image: mochila3nike },
        { name: 'Produto 11', description: 'Descrição do produto 13', image: mochila4nike  },
        { name: 'Produto 9', description: 'Descrição do produto 12', image: mochila2adidas  },
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
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1500px;
}
  </style>
  