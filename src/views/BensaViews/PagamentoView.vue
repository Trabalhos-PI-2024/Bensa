<template>
  <div class="payment-page">
    <h1>Pagamento</h1>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <p class="step-title">Revisar Pedido</p>
      </div>
      <div class="step active">
        <div class="step-number">2</div>
        <p class="step-title">Pagamento</p>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <p class="step-title">Confirmação</p>
      </div>
    </div>
    <div class="current-step">
      <p>Etapa atual: <strong>Pagamento</strong> - Selecione o método de pagamento e preencha as informações necessárias.</p>
    </div>
    <div class="payment-method">
      <label for="paymentType">Escolha o método de pagamento:</label>
      <select v-model="selectedPayment" class="styled-select">
        <option value="" disabled>Selecione...</option>
        <option value="debit">Débito</option>
        <option value="credit">Crédito</option>
        <option value="pix">Pix</option>
        <option value="boleto">Boleto</option>
      </select>
    </div>
    <div v-if="selectedPayment === 'debit'" class="payment-form card-form">
      <h2>Pagamento com Cartão de Débito</h2>
      <form @submit.prevent="submitPayment">
        <label for="debitCardNumber">Número do Cartão:</label>
        <input type="text" id="debitCardNumber" placeholder="1234 5678 9012 3456" required>
        <label for="debitCardHolder">Nome do Titular:</label>
        <input type="text" id="debitCardHolder" placeholder="Nome Completo" required>
        <label for="debitExpiryDate">Data de Expiração:</label>
        <input type="text" id="debitExpiryDate" placeholder="MM/AA" required>
        <label for="debitCvv">CVV:</label>
        <input type="password" id="debitCvv" placeholder="123" required>
        <router-link to="/confirmar"><button type="submit" class="submit-button">Finalizar Pagamento</button></router-link>
      </form>
    </div>
    <div v-if="selectedPayment === 'credit'" class="payment-form card-form">
      <h2>Pagamento com Cartão de Crédito</h2>
      <form @submit.prevent="submitPayment">
        <label for="creditCardNumber">Número do Cartão:</label>
        <input type="text" id="creditCardNumber" placeholder="1234 5678 9012 3456" required>
        <label for="creditCardHolder">Nome do Titular:</label>
        <input type="text" id="creditCardHolder" placeholder="Nome Completo" required>
        <label for="creditExpiryDate">Data de Expiração:</label>
        <input type="text" id="creditExpiryDate" placeholder="MM/AA" required>
        <label for="creditCvv">CVV:</label>
        <input type="password" id="creditCvv" placeholder="123" required>
        <label for="installments">Parcelamento:</label>
        <select id="installments" class="styled-select">
          <option value="1">1x sem juros</option>
          <option value="2">2x sem juros</option>
          <option value="3">3x sem juros</option>
        </select>
        <router-link to="/confirmar"><button type="submit" class="submit-button">Finalizar Pagamento</button></router-link>
      </form>
    </div>
    <div v-if="selectedPayment === 'pix'" class="payment-pix">
      <h2>Pagamento via Pix</h2>
      <p>Escaneie o código QR abaixo com seu app de banco para realizar o pagamento.</p>
      <img src="/src/assets/img/Logos/WhatsApp Image 2024-11-04 at 19.59.54.jpeg" alt="QR Code Pix" class="qr-code">
      <div class="pix-code-container">
        <span class="pix-code">34191.79001 01043.510047 91020.150008 8 72170000001000</span>
        <button class="copy-icon" @click="copyToClipboard">
          <i class="fas fa-copy"></i> <img src="/src/assets/img/Icons/copy.png" alt="">
        </button>
      </div>
    </div>
    <div v-if="selectedPayment === 'boleto'" class="payment-boleto">
      <h2>Pagamento via Boleto</h2>
      <p>Este é o código de barras do seu boleto. Pague em qualquer banco ou casa lotérica.</p>
      <div class="boleto-code">34191.79001 01043.510047 91020.150008 8 72170000001000</div>
      <button @click="downloadBoleto" class="download-button">Baixar Boleto</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedPayment = ref(''); // Método de pagamento selecionado

const submitPayment = () => {
  alert("Pagamento realizado com sucesso!");
};

const downloadBoleto = () => {
  alert("Boleto para pagamento gerado com sucesso!");
};

// Função para copiar o código Pix para a área de transferência
const copyToClipboard = () => {
  const pixCode = document.querySelector('.pix-code');
  navigator.clipboard.writeText(pixCode.textContent)

};
</script>

<style scoped>
.payment-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f1f1f1;
  padding-bottom: 100px;
  min-height: 60dvh;
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

.payment-method,
.payment-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.styled-select,
.payment-form input,
.payment-form select {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.styled-select:focus,
.payment-form input:focus,
.payment-form select:focus {
  border-color: #7e201d;
  background-color: #fff;
}

.submit-button,
.download-button {
  background-color: #7e201d;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.submit-button:hover,
.download-button:hover {
  background-color: #a12b2a;
}

.card-form {
  width: 60%;
  margin: 0 auto;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.qr-code {
  width: 200px;
  height: 200px;
  display: block;
  margin: 20px auto;
}

.pix-code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

.pix-code {
  font-family: monospace;
  font-size: 18px;
 
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
}

.copy-icon img {
 width: 30px;
 cursor: pointer;
}

.copy-icon:hover {
  color: #7e201d;
}

.boleto-code {
  font-family: monospace;
  font-size: 18px;
  color: #333;
  background-color: #e8f5e9;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.payment-boleto {
  margin-top: 20px;
  text-align: center;
}
</style>
