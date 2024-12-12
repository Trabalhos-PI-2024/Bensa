<script setup>
  // Importação de dependências
  import { ref } from 'vue'; // 'ref' para criar variáveis reativas
  import { useRouter } from 'vue-router'; // 'useRouter' para navegação entre páginas
  import { useLoginStore } from '@/stores/login'; // Acesso à store de login, onde estão as informações do cliente
  import { useToast } from "vue-toastification"; // Acesso à biblioteca de notificações para exibir mensagens de erro ou sucesso

  // Criação da instância do Toast
  const toast = useToast();

  // Função para exibir uma mensagem de erro caso o login falhe
  const exibirErro = () => {
    toast.error("Erro!! Verifique se digitou seu Email ou Senha certo.", {
      position: "top-center", // Posição do toast na tela
      timeout: 3143, // Duração do toast (3 segundos)
      closeOnClick: true, // Permite fechar o toast ao clicar
      pauseOnFocusLoss: true, // Pausa o tempo do toast quando a página perde foco
      pauseOnHover: true, // Pausa o tempo do toast ao passar o mouse sobre ele
      draggable: true, // Permite arrastar o toast
      draggablePercent: 0.93, // Percentual de área que o toast pode ser arrastado
      showCloseButtonOnHover: false, // Não exibe o botão de fechar ao passar o mouse
      hideProgressBar: true, // Oculta a barra de progresso
      closeButton: "button", // Tipo do botão de fechar (em forma de botão)
      icon: true, // Exibe o ícone de erro
      rtl: false, // Direção do texto (não precisa para esse caso)
    });
  };

  // Instanciação da store de login e do roteador
  const loginStore = useLoginStore(); // Acesso à store que armazena as informações do cliente
  const router = useRouter(); // Instância do roteador para navegação

  // Variável reativa para controlar se o modal está aberto ou fechado
  const isOpen = ref(true);

  // Acessando os dados do cliente da store de login
  const email = loginStore.clienteInfo.email;
  const senha = loginStore.clienteInfo.senha;
  const confirmarEmail = loginStore.clienteInfo.confirmarEmail;
  const confirmarSenha = loginStore.clienteInfo.confirmarSenha;

  // Função para fechar o componente de login
  const closeComponent = () => {
    loginStore.closeComponent(); // Fecha o componente de login na store
  };

  // Função para fechar o modal de login
  function closeModal() {
    isOpen.value = false; // Altera o valor de 'isOpen' para fechar o modal
  }

  // Função para redirecionar o usuário para a página de cadastro
  function goToCadastro() {
    closeModal(); // Fecha o modal antes de redirecionar
    router.push('/cadastro'); // Redireciona para a página de cadastro
  }

  // Função para atualizar os dados do cliente no store durante o cadastro
  const formCadastro = () => {
    loginStore.atualizarCliente({
      confirmarEmail: loginStore.clienteInfo.confirmarEmail,
      confirmarSenha: loginStore.clienteInfo.confirmarSenha,
    });
    console.log('Dados do cliente atualizados', loginStore.clienteInfo); // Exibe os dados atualizados no console
  };

  // Função de validação do login
  function validacao() {
    // Verifica se o email e senha confirmados são iguais aos dados armazenados
    if (confirmarEmail == email && confirmarSenha == senha) {
      closeModal(); // Fecha o modal de login
      closeComponent(); // Fecha o componente de login na store
    } else {
      exibirErro(); // Se a validação falhar, exibe a mensagem de erro
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
