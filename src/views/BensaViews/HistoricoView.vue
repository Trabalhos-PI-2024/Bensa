<template>
    <div class="purchase-history">
      <h1>Histórico de Compras</h1>
      <div v-if="purchases.length > 0" class="purchases-list">
        <div v-for="purchase in purchases" :key="purchase.id" class="purchase-item">
          <div class="purchase-details">
            <h2>{{ purchase.productName }}</h2>
            <p><strong>Data da Compra:</strong> {{ formatDate(purchase.date) }}</p>
            <p><strong>Tamanho:</strong> {{ purchase.sizes }}</p>
            <p><strong>Valor Total:</strong> R$ {{ purchase.totalPrice.toFixed(2) }}</p>
          </div>
          <img :src="purchase.productImage" alt="Imagem do produto" class="product-image" />
        </div>
      </div>
      <div v-else>
        <p class="no-purchases">Você ainda não tem compras registradas.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const purchases = ref([])
  
  function fetchPurchaseHistory() {
    purchases.value = [
      { id: 1, productName: 'Tênis Adidas', date: '2024-01-15', sizes: 2, totalPrice: 1220.90, productImage: 'https://droper-media.us-southeast-1.linodeobjects.com/2720240431943.webp' },
      { id: 2, productName: 'Tênis Nike', date: '2024-03-22', sizes: 1, totalPrice: 1420.80, productImage: 'https://droper-media.us-southeast-1.linodeobjects.com/1972024202252349.webp' },
      { id: 3, productName: 'Camiseta Supreme', date: '2024-05-05', sizes: 1, totalPrice: 329.90, productImage: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241015202245592-955.webp' },
    ]
  }
  
  function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  }
  
  onMounted(() => {
    fetchPurchaseHistory()
  })
  </script>
  
  <style scoped>
  .purchase-history {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    padding: 20px;
    box-sizing: border-box;
  }
  
  h1 {
    font-size: 2.5em;
    color: #862222;
    margin-bottom: 30px;
  }
  
  .purchases-list {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  
  .purchase-item {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 6px solid #862923;
    justify-content: space-between; 
  }
  
  .product-image {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
    margin-left: 20px; 
  }
  
  .purchase-details {
    flex: 1;
  }
  
  .purchase-item h2 {
    margin: 0;
    font-size: 1.5em;
    color: #333;
    font-weight: bold;
  }
  
  .purchase-item p {
    font-size: 1.1em;
    color: #555;
    margin: 5px 0;
  }
  
  .purchase-item strong {
    color: #333;
  }
  
  .no-purchases {
    text-align: center;
    font-size: 1.2em;
    color: #888;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  
    .purchase-item h2 {
      font-size: 1.4em;
    }
  
    .purchase-item p {
      font-size: 1em;
    }
  
    .product-image {
      width: 100px;
      height: 100px;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 1.6em;
    }
  
    .purchase-item h2 {
      font-size: 1.2em;
    }
  
    .purchase-item p {
      font-size: 0.9em;
    }
  
    .product-image {
      width: 90px;
      height: 90px;
    }
  }
  </style>
  