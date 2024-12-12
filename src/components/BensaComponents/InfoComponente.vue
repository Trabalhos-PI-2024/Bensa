<template>
    <div class="user-container">
      <form @submit.prevent="formCadastro" class="user-form">
        <div class="user-header">
          <img src="/src/assets/img/Icons/user.svg" alt="Logo de Cadastro" class="user-logo" />
          <div class="user-title-section">
            <div class="user-titulos">
              <RouterLink to="/" class="user-titulo">Sign Up</RouterLink>
              <RouterLink to="/" class="user-titulo">Login</RouterLink>
            </div>
            <div class="user-underline"></div>
          </div>
        </div>
        <h1>Informações Pessoais</h1>
        <div class="user-form-grid">
          <div class="user-form-grupo inline-group">
            <div class="nome-container">
              <label for="nome">Nome</label>
              <input v-model="loginStore.clienteInfo.nome" type="text" id="nome" required placeholder="Ex: João" />
            </div>
            <div class="sobrenome-container">
              <label for="sobrenome">Sobrenome</label>
              <input v-model="loginStore.clienteInfo.sobrenome" type="text" id="sobrenome" required placeholder="Ex: Silva" />
            </div>
          </div>
          <div class="user-form-grupo inline-group">
            <div class="telefone-container">
              <label for="telefone">Telefone</label>
              <input v-model="loginStore.clienteInfo.telefone" type="text" id="telefone" required placeholder="Ex: (11) 91234-5678" />
            </div>
            <div class="email-container">
              <label for="email">E-mail</label>
              <input type="email" id="email" required placeholder="Ex: exemplo@dominio.com" />
            </div>
          </div>
          <div class="user-form-grupo inline-group">
            <div class="cpf-container">
              <label for="cpf">CPF</label>
              <input v-model="loginStore.clienteInfo.cpf" type="text" id="cpf" required placeholder="Ex: 123.456.789-00" />
            </div>
            <div class="data-nascimento-container">
              <label for="data_nascimento">Data de Nascimento</label>
              <input v-model="loginStore.clienteInfo.data_nascimento" type="date" id="data_nascimento" required />
            </div>
            <div class="sexo-container">
              <label for="sexo">Sexo</label>
              <select v-model="loginStore.clienteInfo.sexo" id="sexo" required>
                <option value="">Selecione</option>
                <option value='M'>Masculino</option>
                <option value='F'>Feminino</option>
                <option value='O'>Outro</option>
              </select>
            </div>
          </div>
        </div>
        <div class="user-form-buttons">
          <button type="submit" class="large-button">Salvar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
import { useLoginStore } from '@/stores/login';
import api from '@/axios'; // Importando configuração do Axios
import { useRouter } from 'vue-router';

const loginStore = useLoginStore();
const router = useRouter();

const formCadastro = async () => {
  try {
    // Enviar os dados do cliente para o backend
    const response = await api.post('/infos/', loginStore.clienteInfo);
    console.log('Dados enviados com sucesso:', response.data);

    // Redirecionar para a próxima etapa após o sucesso
    router.push('/');
  } catch (error) {
    console.error('Erro ao enviar dados:', error.response?.data || error.message);
  }
};
</script>


<style scoped>
.user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #e7e7e7;
}

.user-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 35px 0px 35px;
}

.user-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.user-logo {
    width: 80px;
    margin-bottom: 20px;
}

.user-title-section {
    text-align: center;
}

.user-titulos {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.user-titulo {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 20px;
    cursor: pointer;
    color: #000000;
}

.user-underline {
    width: 60%; 
    height: 2px;
    background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
    margin: 5px auto; 
}

.user-form-grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.user-form-grupo {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.user-form-grupo label {
    margin-bottom: 5px;
    font-weight: bold;
}

.user-form-grupo input,
.user-form-grupo select {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #D9D9D9;
}

.inline-group {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.nome-container,
.sobrenome-container,
.telefone-container,
.email-container,
.cpf-container,
.data-nascimento-container,
.sexo-container {
    flex: 1;
}

.large-button {
    width: 40%;
    cursor: pointer;
    background: #000000;
    padding: 8px 5px;
    color: #fff;
    font-size: 16px;
    border: 1px solid #fff;
    margin: 40px auto;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    display: flex;
}

.large-button:hover {
    transform: scale(1.04);
}

@media (max-width: 598px) {
    .user-form {
        margin: 20px 20px;
    }

    .inline-group {
        flex-direction: column;
    }

    .nome-container,
    .sobrenome-container,
    .telefone-container,
    .email-container,
    .cpf-container,
    .data-nascimento-container,
    .sexo-container {
        width: 100%;
    }

    .user-underline {
        width: 80%;
    }
  
}
</style>
