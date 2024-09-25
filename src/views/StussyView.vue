<template>
  <div class="page-container">
    <div class="logo-container">
      <img src="../assets/img/stussy.svg" alt="Stussy Logo" class="stussy-logo" />
    </div>

    <div class="main-content">
      <!-- Filtro -->
      <aside class="filter-container">
        <input type="text" placeholder="Filtrar produtos" class="filter-input" />
      </aside>

      <!-- Lista de produtos -->
      <div class="product-list">
        <ProductItem v-for="(product, index) in products" :key="index" :product="product" />
      </div>
    </div>
  </div>
</template>
  
  <script>
import ProductItem from '../components/ProductItem.vue'
import camisa1stussy from '../assets/produtos.stussy/camisa1stussy.webp'
import chapeu2stussy from '../assets/produtos.stussy/chapeu2stussy.webp'
import camisa2stussy from '../assets/produtos.stussy/camisa2stussy.webp'
import shorts2stussy from '../assets/produtos.stussy/shorts2stussy.webp'
import shorts1stussy from '../assets/produtos.stussy/shorts1stussy.webp'
import chapeu1stussy from '../assets/produtos.stussy/chapeu1stussy.webp'
import moletom1stussy from '../assets/produtos.stussy/moletom1stussy.webp'
import moletom2stussy from '../assets/produtos.stussy/moletom2stussy.webp'
import camisa3stussy from '../assets/produtos.stussy/camisa3stussy.webp'
import camisa4stussy from '../assets/produtos.stussy/camisa4stussy.webp'
import camisa5stussy from '../assets/produtos.stussy/camisa5stussy.webp'
import moletom3stussy from '../assets/produtos.stussy/moletom3stussy.webp'

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        { name: 'Produto 1', description: 'Descrição do produto 1', image: camisa1stussy },
        { name: 'Produto 2', description: 'Descrição do produto 2', image: chapeu2stussy },
        { name: 'Produto 3', description: 'Descrição do produto 3', image: camisa3stussy },
        { name: 'Produto 4', description: 'Descrição do produto 4', image: chapeu1stussy },
        { name: 'Produto 5', description: 'Descrição do produto 5', image: camisa2stussy },
        { name: 'Produto 6', description: 'Descrição do produto 6', image: moletom1stussy },
        { name: 'Produto 7', description: 'Descrição do produto 7', image: shorts1stussy },
        { name: 'Produto 8', description: 'Descrição do produto 8', image: moletom2stussy },
        { name: 'Produto 9', description: 'Descrição do produto 11', image: camisa4stussy },
        { name: 'Produto 10', description: 'Descrição do produto 12', image: camisa5stussy },
        { name: 'Produto 11', description: 'Descrição do produto 13', image: shorts2stussy },
        { name: 'Produto 12', description: 'Descrição do produto 14', image: moletom3stussy }
      ]
    }
  }
}
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
  