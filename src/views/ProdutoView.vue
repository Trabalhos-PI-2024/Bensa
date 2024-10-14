<template>
    <div class="product-page">
      <div class="product-container">
        <div class="product-image">
          <img :src="product.images[0]" alt="Product Image" />
        </div>
        <div class="product-details">
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="rating-count">({{ product.ratingCount }})</span>
            <router-link to="/avaliacoes" class="rating-link">Avaliações</router-link>
          </div>
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-price">
            ${{ product.price.toFixed(2) }} 
            <span class="installments">ou em até {{ product.installments }}x de ${{ (product.price / product.installments).toFixed(2) }}</span>
          </p>
          
          <div class="size-selection">
            <label>Tamanho:</label>
            <div class="size-options">
              <label v-for="size in product.sizes" :key="size">
                <input type="radio" v-model="selectedSize" :value="size" />
                {{ size }}
              </label>
            </div>
          </div>
  
          <button @click="addToCart" class="buy-button">Adicionar ao Carrinho</button>
        </div>
      </div>
  
      <div class="product-description">
        <h2>Descrição</h2>
        <p>{{ product.description }}</p>
      </div>
  
      <div class="carousel">
        <h2>Outros Produtos</h2>
        <div class="carousel-container" ref="carousel">
          <div class="carousel-item" v-for="otherProduct in otherProducts" :key="otherProduct.id">
            <img :src="otherProduct.image" alt="Other Product" />
            <h3>{{ otherProduct.name }}</h3>
            <p>${{ otherProduct.price.toFixed(2) }}</p>
          </div>
        </div>
        <button @click="scrollLeft" class="scroll-button">←</button>
        <button @click="scrollRight" class="scroll-button">→</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const product = {
    name: 'Camiseta Estilosa',
    price: 29.99,
    ratingCount: 120,
    images: ['https://example.com/camiseta.jpg'],
    installments: 3,
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Esta camiseta tem um caimento perfeito, é feita de algodão 100% e pode ser lavada à máquina. Estrutura leve e confortável, ideal para o dia a dia.'
  };
  
  const selectedSize = ref('M');
  
  const addToCart = () => {
    console.log(`Produto ${product.name} de tamanho ${selectedSize.value} adicionado ao carrinho!`);
  };
  
  const otherProducts = ref([
    { id: 1, name: 'Camiseta Básica', price: 19.99, image: 'https://example.com/camiseta-basica.jpg' },
    { id: 2, name: 'Camiseta Colorida', price: 24.99, image: 'https://example.com/camiseta-colorida.jpg' },
    { id: 3, name: 'Camiseta de Estampa', price: 34.99, image: 'https://example.com/camiseta-estampada.jpg' },
    { id: 4, name: 'Camiseta de Manga Longa', price: 39.99, image: 'https://example.com/camiseta-manga-longa.jpg' },
    { id: 5, name: 'Camiseta com Capuz', price: 44.99, image: 'https://example.com/camiseta-capuz.jpg' },
  ]);
  
  const scrollLeft = () => {
    const carousel = document.querySelector('.carousel-container');
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    const carousel = document.querySelector('.carousel-container');
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
  };
  </script>
  
  <style scoped>
  .product-page {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .product-container {
    display: flex;
  }
  
  .product-image {
    flex: 1; /* Aumenta o espaço da imagem */
  }
  
  .product-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .product-details {
    margin-left: 20px;
    flex: 1.5; /* Aumenta ainda mais o espaço do lado direito */
  }
  
  .product-rating {
    display: flex;
    align-items: center;
  }
  
  .rating-count {
    margin-left: 10px;
  }
  
  .rating-link {
    margin-left: 10px;
    color: blue;
    text-decoration: underline;
  }
  
  .product-name {
    font-size: 2em;
    margin: 10px 0;
  }
  
  .product-price {
    font-weight: bold;
    margin: 10px 0;
  }
  
  .size-selection {
    margin: 10px 0;
  }
  
  .size-options {
    display: flex;
    gap: 10px; /* Espaçamento entre as opções de tamanho */
  }
  
  .buy-button {
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .buy-button:hover {
    background-color: #333;
  }
  
  .product-description {
    margin-top: 20px;
  }
  
  .carousel {
    margin-top: 20px;
    position: relative;
  }
  
  .carousel-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  
  .carousel-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-right: 10px;
    padding: 10px;
    text-align: center;
    min-width: 150px;
  }
  
  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ddd;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }
  
  .scroll-button:first-of-type {
    left: 10px;
  }
  
  .scroll-button:last-of-type {
    right: 10px;
  }
  </style>
  