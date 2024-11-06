<template>
    <div class="confirmation-page">
      <h1>Confirmação de Pedido</h1>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <p class="step-title">Revisar Pedido</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <p class="step-title">Pagamento</p>
        </div>
        <div class="step active">
          <div class="step-number">3</div>
          <p class="step-title">Confirmação</p>
        </div>
      </div>
      <div class="confirmation-message">
        <h2>Pedido Confirmado!</h2>
        <p>Seu pedido foi processado com sucesso. Agradecemos pela sua compra!</p>
        <p>Número do Pedido: <strong>#123456</strong></p>
        <p>Data da Compra: <strong>{{ new Date().toLocaleDateString() }}</strong></p>
      </div>
      <div class="order-details">
        <h3>Detalhes do Pedido</h3>
        <ul>
          <li v-for="carrinho in carrinhoStore.carrinho" :key="carrinho.id">{{ carrinho.name }} - R$ {{ carrinho.price }}</li>
          <li>Frete - R$ 20,00</li>
          <li>Total a Pagar - R$<input type="text" :value="totalAPagar" readonly></li>
        </ul>
      </div>
     <router-link to="/"><button @click="returnToHome" class="return-button">Voltar à Página Inicial</button></router-link> 
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { computed, ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinhoStore = useCarrinhoStore();
  
  const router = useRouter();
  const returnToHome = () => {
    router.push('/');
  };

  const totalAPagar = computed(() => {
  return carrinhoStore.carrinho.reduce((acc, carrinho) => acc + carrinho.price + 20, 0).toFixed(2);
});
  </script>
  
  <style scoped>
  .confirmation-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f1f1f1;
  }
  
  h1 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .steps {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-bottom: 10px;
  }
  
  .step {
    flex: 1;
    text-align: center;
  }
  
  .step-number {
    background-color: #7e201d;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 5px;
  }
  
  .step-title {
    font-size: 14px;
    color: #555;
  }
  
  .active .step-number {
    background-color: #27ae60;
  }
  
  .confirmation-message {
    width: 100%;
    max-width: 600px;
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .confirmation-message h2 {
    font-size: 24px;
    color: #27ae60;
    margin-bottom: 10px;
  }
  
  .confirmation-message p {
    font-size: 16px;
    color: #333;
  }
  
  .order-details {
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .order-details h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .order-details ul {
    list-style: none;
    padding: 0;
    font-size: 16px;
  }
  
  .order-details li {
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .return-button {
    background-color: #7e201d;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    max-width: 200px;
    transition: background-color 0.3s ease;
  }
  
  .return-button:hover {
    background-color: #a12b2a;
  }
  
  @media (max-width: 1024px) {
    .order-details, .confirmation-message {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    .order-details, .confirmation-message {
      width: 90%;
    }
    .steps {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    .order-details, .confirmation-message {
      width: 100%;
    }
    .steps {
      flex-direction: column;
    }
  }
  </style>
  