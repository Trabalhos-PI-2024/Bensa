<template>
    <div class="page-container">
   
  
      <div class="logo-container">
        <h1>Roupas</h1>
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
import camisa3nike from '../assets/produtos.nike/camisa3nike.webp'
import calca4nike from '../assets/produtos.nike/calca4nike.webp'
import camisa2nike from '../assets/produtos.nike/camisa2nike.png'
import chapeu1vans from '../assets/produtos.vans/chapeu1vans.webp'
import chapeu2vans from '../assets/produtos.vans/chapeu2vans.webp'
import camisa3adidas from '../assets/produtos.adidas/camisa3adidas.webp'
import camisa1adidas from '../assets/produtos.adidas/camisa1adidas.webp'
import camisa2adidas from '../assets/produtos.adidas/camisa2adidas.webp'
import shorts2stussy from '../assets/produtos.stussy/shorts2stussy.webp'
import camisa4stussy from '../assets/produtos.stussy/camisa4stussy.webp'
import camisa5stussy from '../assets/produtos.stussy/camisa5stussy.webp'
import moletom3stussy from '../assets/produtos.stussy/moletom3stussy.webp'
  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: [
        { name: 'Produto 2', description: 'Descrição do produto 2', image: chapeu1vans },
        { name: 'Produto 3', description: 'Descrição do produto 3', image: camisa3nike },
        { name: 'Produto 4', description: 'Descrição do produto 4', image: calca4nike },
        { name: 'Produto 5', description: 'Descrição do produto 5', image: camisa2nike },
        { name: 'Produto 7', description: 'Descrição do produto 7', image: chapeu2vans },
        { name: 'Produto 9', description: 'Descrição do produto 11', image: camisa1adidas  },
        { name: 'Produto 10', description: 'Descrição do produto 12', image: camisa2adidas  },
        { name: 'Produto 12', description: 'Descrição do produto 14', image: camisa3adidas  },
        { name: 'Produto 9', description: 'Descrição do produto 11', image: camisa4stussy },
        { name: 'Produto 10', description: 'Descrição do produto 12', image: camisa5stussy },
        { name: 'Produto 11', description: 'Descrição do produto 13', image: shorts2stussy },
        { name: 'Produto 12', description: 'Descrição do produto 14', image: moletom3stussy }
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
  