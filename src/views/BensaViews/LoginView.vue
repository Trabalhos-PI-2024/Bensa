<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login';
import { useToast } from "vue-toastification";

const toast = useToast();

const exibirErro = () => {
  toast.error("Erro!! Verifique se digitou seu Email ou Senha certo.", {
    position: "top-center",
    timeout: 3143,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.93,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};

const loginStore = useLoginStore();
const router = useRouter();

const isOpen = ref(true);
const email = loginStore.clienteInfo.email;
const senha = loginStore.clienteInfo.senha;
const confirmarEmail = loginStore.clienteInfo.confirmarEmail;
const confirmarSenha = loginStore.clienteInfo.confirmarSenha;

const closeComponent = () => {
  loginStore.closeComponent();
};

function closeModal() {
  isOpen.value = false;
}

function goToCadastro() {
  closeModal();
  router.push('/cadastro');
}

const formCadastro = () => {
  loginStore.atualizarCliente({
    confirmarEmail: loginStore.clienteInfo.confirmarEmail,
    confirmarSenha: loginStore.clienteInfo.confirmarSenha,
  });
  console.log('Dados do cliente atualizados', loginStore.clienteInfo);
};

function validacao() {
  if (confirmarEmail == email && confirmarSenha == senha) {
    closeModal();
    closeComponent();
  } else {
    exibirErro();
  }
}
</script>

<template>
  <div v-if="isOpen" class="login-overlay">
    <div class="content">
      <router-link to="/" class="close-button"><img src="/src/assets/img/Icons/excluir.png" alt="Fechar Carrinho"></router-link>
      <div class="ImgLogin">
        <img src="/src/assets/img/Icons/user.svg" alt="Logo de Cadastro" class="logo" />
      </div>
      <form method="post"  @submit.prevent="formCadastro" >
        <div class="form-header">
          <a href="#" class="active">Login</a>
          <a href="#" @click="goToCadastro" class="sign-up">Sign Up</a>
        </div>
        <div class="line"></div>
        <p>
          <input id="email_login" name="email_login" required type="text" v-model="loginStore.clienteInfo.confirmarEmail" placeholder="EMAIL" />
        </p>
        <p>
          <input id="senha_login" name="senha_login" required type="password" v-model="loginStore.clienteInfo.confirmarSenha" placeholder="SENHA" />
        </p>
        <div class="login-options">
          <div class="login-options-group">
            <input type="checkbox" id="manterlogado" />
            <label for="manterlogado" class="manterLogado">Remember-me</label>
          </div>
          <a href="#forgot-password" class="forgot-password">Esqueci a Senha</a>
        </div>
        <div class="user-form-buttons">
          <button class="large-button" @click="validacao()">Próximo</button>
        </div>
        <p class="link">
          Ainda não tem conta?
          <a href="#" @click="goToCadastro">Cadastre-se</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.content {
  width: 500px;
  padding: 40px;
  border-radius: 8px;
  border: 2px solid #ccc;
  position: relative;
}

.close-button {
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 15px;
  border-radius: 100px;
  background-color: #fff;
}

.close-button img{
  width: 45px;
}

.ImgLogin {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

}

.logo {
  width: 80px;
  height: 80px;
}

.form-header {
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-header a {
  color: black;
}

.line {
  width: 70%;
  height: 2px;
  background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%,
      rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
  margin: 20px auto;
}

input {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: none;
  background: #d9d9d9;
  border-radius: 8px;
}

.user-form-buttons button {
  width: 100%;
  padding: 15px;
  background: #000;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 30px;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.forgot-password {
  font-size: 14px;
}

.link {
  text-align: center;
  margin-top: 30px;
}

.login-options-group {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.manterLogado {
  font-size: 14px;
  margin-left: 10px;
  margin-top: 15px;
}
</style>
