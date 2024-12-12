<template>
  <div class="alert-container" v-if="loginStore.isComponentVisible">
    <div class="alert-card"> 
      <img src="/src/assets/img/Icons/alarm.png" alt="Sirene" class="alert-image" />
      <p class="alert-text">
        Se quiser utilizar a comunidade, faça login ou registre-se.
      </p>
      <div class="alert-buttons">
        <button class="alert-button" @click="showLogin = true">Fazer Login</button>
        <router-link to="/">
          <button class="voltar-button" @click="showLogin = false">Voltar</button>
        </router-link>
      </div>
    </div>

    <LoginComponente v-if="showLogin" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoginComponente from "../../views/BensaViews/LoginView.vue"; 
import { useLoginStore } from '@/stores/login';

const loginStore = useLoginStore();
const showLogin = ref(false);
</script>
  
  <style scoped>
  .alert-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .alert-card {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
  
  .alert-image {
    width: 80px;
    margin-bottom: 20px;
  }
  
  .alert-text {
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .alert-buttons {
    display: flex;
    justify-content: center;
    gap: 90px;
  }
  
  .alert-button,
  .voltar-button {
    background-color: #007bff;
    color: white;
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  
  }
  
  .alert-button:hover {
    background-color: #0056b3;
  }
  
  .voltar-button {
    background-color: #dc3545;
  }
  
  .voltar-button:hover {
    background-color: #c82333;
  }
  </style>
  