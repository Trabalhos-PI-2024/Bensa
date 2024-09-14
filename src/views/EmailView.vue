<template>
    <div class="container">
      <form @submit.prevent="formCadastro" class="form">
        <div class="header">
          <img src="../assets/user.png" alt="Logo de Cadastro" class="logo" />
          <div class="titulo-section">
            <div class="titulos">
              <div class="titulo active">Login</div>
              <div class="titulo">Sign up</div>
            </div>
            <div class="underline"></div>
          </div>
        </div>
        
        <div class="form-grupo">
          <input v-model="form.email" type="text" id="email" required placeholder="Email" />
        </div>
        <div class="form-grupo">
          <input v-model="form.senha" type="text" id="senha" required placeholder="Senha" />
        </div>
        <div class="form-grupo">
          <input v-model="form.confirmarSenha" type="text" id="confirmarSenha" required placeholder="Confirmar Senha" />
        </div>

        <div class="form-options">
          <div class="remember-me">
            <input v-model="rememberMe" type="checkbox" id="remember-me" />
            <label for="remember-me">Remember Me</label>
          </div>
          <a href="#" class="forgot-password">Esqueci a Senha</a>
        </div>
  
        <div class="form-buttons">
          <button type="submit" @click="proximaEtapa">Criar Conta</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  
  const rememberMe = ref(false);
  
  function formCadastro() {
    console.log('Dados do formulário:', form.value);
    console.log('Lembrar-me:', rememberMe.value);
  }
  
  function proximaEtapa() {
    console.log('Próxima etapa clicada');
  }
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #fffefe;
  }
  
  .form {
    max-width: 100%; 
    width: 50vh;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .logo {
    width: 80px; 
    margin-bottom: 20px;
  }
  
  .titulo-section {
    text-align: center;
  }
  
  .titulos {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }
  
  .titulo {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 20px;
    cursor: pointer;
  }
  
  .titulo.active {
    color: #007bff;
  }
  
  .underline {
    width: 25vh;
    height: 4px;
    background: linear-gradient(90deg, #ff0000, #000000);
    margin: 0 auto;
  }
  
  .form-grupo {
    margin-bottom: 15px;
  }
  
  .form-grupo input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #D9D9D9;
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .remember-me {
    display: flex;
    align-items: center;
  }
  
  .remember-me input {
    margin-right: 8px;
  }
  
  .forgot-password {
    color: #000000;
    text-decoration: none;
    font-size: 0.875rem;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  .form-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .form-buttons button {
    padding: 12px 20px;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    background-color: #000000;
    font-size: 1rem;
  }
  </style>
  