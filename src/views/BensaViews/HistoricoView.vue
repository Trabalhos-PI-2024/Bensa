<template>
    <div class="purchase-history">
      <h1 class="hidden">Histórico de Compras</h1>
      <div v-if="historicoStore.historico.length > 0" class="purchases-list toLeft">
        <div v-for="purchase in historicoStore.historico" :key="purchase.id" class="purchase-item">
          <div class="purchase-details">
            <h2>{{ purchase.name }}</h2>
            <p><strong>Data da Compra:</strong> {{ formatDate(purchase.date) }}</p>
            <p><strong>Tamanho:</strong> {{ purchase.sizes }}</p>
            <p><strong>Valor Total:</strong> R$ {{ purchase.price.toFixed(2) }}</p>
          </div>
          <img :src="purchase.productImage" alt="Imagem do produto" class="product-image" />
        </div>
      </div>
      <div v-else class="historicoVazio toRight">
        <img src="@\assets\img\Banners\sacolavazia.jpg" alt="">
        <p class="no-purchases">Parece que você ainda não comprou nada. Explore nossos produtos e encontre o que mais combina com você!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importando o store de histórico de compras
  import { useHistoricoStore } from '@/stores/historico';
  
  // Importando o composable para detecção de visibilidade (não está sendo utilizado diretamente aqui, mas é chamado)
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

  // Inicializando o useIntersectionObserver (pode estar monitorando a visibilidade de algum elemento, mas não está claro no código)
  useIntersectionObserver();

  // Acessando o store de histórico de compras
  const historicoStore = useHistoricoStore();
  
  // Função para formatar a data de cada compra para o formato brasileiro
  function formatDate(dateStr) {
    // Convertendo a string de data em um objeto Date
    const date = new Date(dateStr);
    // Retornando a data formatada para o padrão pt-BR (ex: 10/12/2024)
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
</script>

  <style scoped>
.historicoVazio{
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.historicoVazio img{
  width: 100%;
  height: 60dvh;
}

.no-purchases {
    text-align: center;
    font-size: 1.2em;
    color: black;
    font-weight: bold;
    padding: 5px;
    border-radius: 7px;
  }

  .purchase-history {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    padding: 20px;
    box-sizing: border-box;
  }
  
  h1 {
    font-size: 2.5em;
    color: #862222;
    margin-top: 30px;
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
    margin-top: 30px;
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
  