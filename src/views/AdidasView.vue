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

  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: [
          { name: 'Produto 1', description: 'Descrição do produto 1', image: 'img1.jpg' },
          { name: 'Produto 2', description: 'Descrição do produto 2', image: 'img2.jpg' },
          { name: 'Produto 3', description: 'Descrição do produto 3', image: 'img3.jpg' },
          { name: 'Produto 4', description: 'Descrição do produto 4', image: 'img4.jpg' },
          { name: 'Produto 5', description: 'Descrição do produto 5', image: 'img5.jpg' },
          { name: 'Produto 6', description: 'Descrição do produto 6', image: 'img6.jpg' },
          { name: 'Produto 7', description: 'Descrição do produto 7', image: 'img7.jpg' },
          { name: 'Produto 8', description: 'Descrição do produto 8', image: 'img8.jpg' },
          { name: 'Produto 9', description: 'Descrição do produto 9', image: 'img9.jpg' },
          { name: 'Produto 10', description: 'Descrição do produto 10', image: 'img10.jpg' },
          { name: 'Produto 11', description: 'Descrição do produto 11', image: 'img11.jpg' },
          { name: 'Produto 12', description: 'Descrição do produto 12', image: 'img12.jpg' },
          { name: 'Produto 13', description: 'Descrição do produto 13', image: 'img13.jpg' },
          { name: 'Produto 14', description: 'Descrição do produto 14', image: 'img14.jpg' },
          { name: 'Produto 15', description: 'Descrição do produto 15', image: 'img15.jpg' },
          { name: 'Produto 16', description: 'Descrição do produto 16', image: 'img16.jpg' },
          { name: 'Produto 17', description: 'Descrição do produto 17', image: 'img17.jpg' },
          { name: 'Produto 18', description: 'Descrição do produto 18', image: 'img18.jpg' },
          { name: 'Produto 19', description: 'Descrição do produto 19', image: 'img19.jpg' },
          { name: 'Produto 20', description: 'Descrição do produto 20', image: 'img20.jpg' },
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
  