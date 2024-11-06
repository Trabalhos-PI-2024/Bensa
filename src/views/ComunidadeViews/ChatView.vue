<template>
    <div class="chat-container">
      <div class="chat-header">
        <img src="/src/assets/img/Icons/user-svgrepo-com.svg" class="seller-image" />
        <h2 class="seller-name">{{ seller.name }}</h2>
      </div>
  
      <div class="messages-container">
        <div
          class="message"
          v-for="(message, index) in messages"
          :key="index"
          :class="{ sender: message.sender === 'user', receiver: message.sender === 'seller' }"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>
  
      <div class="input-container">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Digite sua mensagem..."
          class="message-input"
        />
        <button @click="sendMessage" class="send-button">
          <img src="/src/assets/img/Icons/comment.svg" alt="">
        </button>
      </div>
  
     <router-link to="/revisar"> <button @click="finalizePurchase" class="finalize-button">Finalizar Compra</button></router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const seller = {
    name: 'Vendedor Nome',
    image: 'path/to/seller-image.jpg'
  }
  
  const messages = ref([])
  const newMessage = ref('')
  
  function sendMessage() {
    if (newMessage.value.trim()) {
      messages.value.push({ text: newMessage.value, sender: 'user' })
      newMessage.value = ''
    }
  }
  
 
  </script>
  
  <style scoped>
  .chat-container {
    width: 50%;
    height: 70vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #7a1616;
    color: white;
  }
  
  .seller-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .seller-name {
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  
  .message {
    padding: 10px 15px;
    border-radius: 20px;
    margin-bottom: 10px;
    max-width: 70%;
    transition: transform 0.2s ease;
  }
  
  .message p {
    margin: 0;
    font-size: 1rem;
  }
  
  .sender {
    background-color: #d1e7dd;
    align-self: flex-end;
    transform: translateX(20px);
  }
  
  .receiver {
    background-color: #f8d7da;
    align-self: flex-start;
    transform: translateX(-20px);
  }
  
  .sender:hover,
  .receiver:hover {
    transform: scale(1.05);
  }
  
  .input-container {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
  }
  
  .message-input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 10px;
    transition: border-color 0.3s ease;
  }
  
  .message-input:focus {
    border-color: #7a1616;
  }
  
  .send-button {
    background-color: #7a1616;
    border: none;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .send-button img {
    width: 24px;
  }
  
  .send-button:hover {
    background-color: #5a0f0f;
  }
  
  .finalize-button {
    margin: 10px;
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .finalize-button:hover {
    background-color: #218838;
  }
  
  
  @media (max-width: 768px) {
    .chat-container {
      width: 100%;
    }
  
    .seller-name {
      font-size: 1.25rem;
    }
  
    .message-input {
      padding: 10px;
    }
  
    .send-button,
    .finalize-button {
      padding: 8px;
    }
  }
  
  @media (max-width: 480px) {
    .chat-header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .seller-image {
      margin-bottom: 5px;
    }
  
    .message {
      font-size: 0.9rem;
    }
  
    .seller-name {
      font-size: 1rem;
    }
  }
  </style>
  