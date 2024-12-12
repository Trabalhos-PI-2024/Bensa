<template>
  <div class="cadastro">
    <div class="ImgLogin">
      <img src="/src/assets/img/Icons/user.svg" alt="Logo de Cadastro" class="logo" />
    </div>
    <form method="post" @submit.prevent="formCadastro" >
      <div class="form-header">
        <router-link to="/">Sign Up</router-link>
        <router-link to="/">Login</router-link>
      </div>
      <div class="line"></div>

      <h1>Cadastro</h1>

      <p>
        <label for="email">Seu e-mail</label>
        <input v-model="loginStore.clienteInfo.email" id="email" name="email" type="email" placeholder="xaolinmatador@gmail.com" />
      </p>

      <p>
        <label for="senha">Sua Senha</label>
        <input v-model="loginStore.clienteInfo.senha" id="senha" name="senha" type="password" placeholder="1234" />
      </p>

      <p>
        <label for="confirmar_senha">Confirmar Senha</label>
        <input id="confirmar_senha" name="confirmar_senha" type="password" placeholder="1234" />
      </p>

        <p>
          <input type="submit" value="Próximo" class="submit-button" />
        </p>

      <p class="link">
        Já tem conta? <router-link to="/">Voltar</router-link>
      </p>

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
    const response = await api.post('/usuarios/', loginStore.clienteInfo);
    console.log('Dados enviados com sucesso:', response.data);

    // Redirecionar para a próxima etapa após o sucesso
    router.push('/endereco');
  } catch (error) {
    console.error('Erro ao enviar dados:', error.response?.data || error.message);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.cadastro {
  width: 100%;
  padding: 18px 6% 60px 6%;
  background: #e7e7e7e7;
  border-top: 1px solid #e7e7e7;
  display: flex;
  flex-direction: column;

}

.ImgLogin {
  text-align: center;
}

.logo {
  width: 80px;
}

.form-header {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;

}

.form-header a {
  color: black;

}

.line {
  width: 60%; 
    height: 2px;
    background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
    margin: 5px auto; 
}

p {
  margin-bottom: 25px;
}

input {
  width: 100%;
  height: 50px;
  margin-top: 4px;
  padding: 10px;
  border: none;
  background: #d9d9d9;
  border-radius: 8px;
}

input[type="submit"] {
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

input[type="submit"]:hover {
  transform: scale(1.04);
}

.link {
  position: relative;
  text-align: right;

}
</style>
