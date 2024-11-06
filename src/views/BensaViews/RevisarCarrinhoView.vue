<template>
  <div class="order-review">
    <h1>Revisão do Pedido</h1>
    <div class="steps">
      <div class="step active">
        <div class="step-number">1</div>
        <p class="step-title">Revisar Pedido</p>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <p class="step-title">Pagamento</p>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <p class="step-title">Confirmação</p>
      </div>
    </div>
    <div class="current-step">
      <p>Etapa atual: <strong>Revisar Pedido</strong> - Verifique se todos os produtos estão corretos antes de prosseguir para o pagamento.</p>
    </div>

    <div class="product-list">
      <div class="product" v-for="carrinho in carrinhoStore.carrinho" :key="carrinho.id">
        <img :src="carrinho.image1" alt="Imagem do Produto" class="product-image" />
        <div class="product-info">
          <h2>{{ carrinho.name }}</h2>
          <p class="product-price">R$ {{ carrinho.price }}</p>
        </div>
        <button @click="carrinhoStore.deleteProductById(carrinho.id)" class="remove-button">
          <img src="/src/assets/img/Icons/excluir (1).png" alt="Excluir">
        </button>
      </div>
    </div>

    <router-link to="/pagar"><button @click="proceedToPayment" class="pay-button">Ir para Pagamento</button></router-link>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useRouter } from 'vue-router';
const carrinhoStore = useCarrinhoStore();

const router = useRouter();

const proceedToPayment = () => {
  router.push({ name: 'PaymentPage' });
};

const removeProduct = (index) => {
  products.value.splice(index, 1); 
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.order-review {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh; 
  padding: 20px;
  background-color: #f9f9f9;
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

.current-step {
  width: 100%;
  max-width: 600px;
  background-color: #e8f5e9; 
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 20px; 
}

.current-step p {
  font-size: 14px;
  color: #333;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%; 
  max-width: 600px; 
}

.product {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: box-shadow 0.3s ease;
  background-color: white; 
}

.product:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 90px;
  height: auto;
  border-radius: 4px;
  margin-right: 15px;
}

.product-info {
  flex-grow: 1;
  text-align: left;
  font-size: 12px;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #27ae60; 
}

.remove-button {
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px; 
  background-color: white; 
}

.remove-button img {
  width: 30px;
}

.pay-button {
  background-color: #7e201d; 
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; 
  max-width: 300px; 
  margin-top: 20px; 
}

.pay-button:hover {
  background-color: #ad2525; 
}

@media (max-width: 768px) {
  .order-review {
    padding: 15px;
    height: 70vh;
  }

  h1 {
    font-size: 24px;
  }

  .product-image {
    width: 60px;
  }

  .pay-button {
    padding: 10px;
    font-size: 14px;
  }

  .remove-button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .step-title {
    font-size: 12px;
  }

  .current-step p {
    font-size: 12px; 
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 20px;
  }

  .pay-button {
    font-size: 12px;
  }

  .remove-button {
    font-size: 10px;
  }

  .step-title {
    font-size: 10px;
  }

  .current-step p {
    font-size: 10px; 
  }
  .order-review{
    height: 90vh;
  }
}
</style>
