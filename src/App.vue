<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/LoginView">PrototipoLogin</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />

  <div class="container">
    <a class="links" id="paracadastro"></a>
    <a class="links" id="paralogin"></a>

    <div class="content">
      <!-- FORMULÁRIO DE LOGIN -->
      <div id="login">
        <div class="ImgLogin">
          <img src="./assets/user.png" alt="Logo de Cadastro" class="logo" />
        </div>
        <form method="post" action="">
          <div class="form-header">
            <a href="#" class="active">Login</a>
            <a href="#cadastro">Sign Up</a>
          </div>
          <div class="line"></div>
          <p>
            <input id="email_login" name="email_login" required="required" type="text" placeholder="EMAIL" />
          </p>

          <p>
            <input id="senha_login" name="senha_login" required="required" type="password" placeholder="SENHA" />
          </p>

          <p class="login-options">
            <div class="login-options-group">
              <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
              <label for="manterlogado" class="manterLogado">Remember-me</label>
            </div>
            <a href="#forgot-password" class="forgot-password">Esqueci a Senha</a>
          </p>

          <p>
            <input type="submit" value="ENTRAR" />
          </p>

          <p class="link">
            Ainda não tem conta?
            <a href="#paracadastro">Cadastre-se</a>
          </p>
        </form>
      </div>

      <!-- FORMULÁRIO DE CADASTRO -->
      <div id="cadastro">
        <form method="post" action="">
          <div class="form-header">
            <a href="#login">Login</a>
            <a href="#cadastro" class="active">Sign Up</a>
          </div>
          <div class="line"></div>

          <h1>Cadastro</h1>

          <p>
            <label for="nome_cad">Seu nome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Luiz Augusto" />
          </p>

          <p>
            <label for="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="contato@htmlecsspro.com" />
          </p>

          <p>
            <label for="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234" />
          </p>

          <p>
            <input type="submit" value="Cadastrar" />
          </p>

          <p class="link">
            Já tem conta?
            <a href="#paralogin">Ir para Login</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
/* CSS reset */
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

body {
  margin: 10px;
}

a {
  text-decoration: none;
}

/* esconde as âncoras da tela */
a.links {
  display: none;
}

/* content que contém os formulários */
.content {
  width: 500px;
  margin: 0px auto;
  position: relative;
}

/* formatando os links de cabeçalho dos formulários */
.form-header {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.form-header a {
  color: #000;
  text-decoration: none;
}

/* Centraliza a imagem */
.ImgLogin {
  text-align: center;
}

.logo {
  width: 70px; 
}

/* linha decorativa abaixo dos links */
.line {
  width: 70%;
  height: 1.8px;
  background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
  background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
  margin: 20px auto;
}

p {
  margin-bottom: 15px;
}

p:first-child {
  margin: 0px;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder {
  color: #a3a0a0;
  font-style: italic;
  font-weight: 600;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #000000;
  font-style: italic;
}

input {
  outline: none;
}

input:not([type="checkbox"]) {
  width: 100%;
  height: 50px;
  margin-top: 4px;
  padding: 10px;
  border: none;
  background: #D9D9D9;
  -webkit-border-radius: 3px;
  border-radius: 8px;

  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/* estilo do botão submit */
input[type="submit"] {
  width: 60% !important;
  margin-left: 75px;
  cursor: pointer;
  background: #000000;
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  margin-bottom: 10px;

  -webkit-border-radius: 5px;
  border-radius: 12px;

  transition: all 0.2s linear;
}

input[type="submit"]:hover {
  transform: scale(1.04);
}

/* marcando os links para mudar de um formulário para outro */
.link {
  position: absolute;
  background: #e1eaeb;
  color: #7f7c7c;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;
  border-top: 1px solid #dbe5e8;

  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
}

.link a {
  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  border: 1px solid #c4c4c4;

  -webkit-border-radius: 4px;
  border-radius: 4px;

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.link a:hover {
  color: #39bfd7;
  background: #f7f7f7;
  border: 1px solid #4ab3c6;
}

/* estilos para ambos os formulários */
#cadastro,
#login {
  position: absolute;
  top: 0px;
  width: 88%;
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border: 1px solid rgba(147, 184, 189, 0.8);

  -webkit-box-shadow: 5px;
  border-radius: 5px;

  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

#paracadastro:target~.content #cadastro,
#paralogin:target~.content #login {
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}

#registro:target~.content #login,
#paralogin:target~.content #cadastro {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}

/* fadeInLeft */
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* fadeOutLeft */
@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%);
  }
}

/* Estilo do link "Esqueci a Senha" */
.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-options-group {
  display: flex;
  align-items: center;
}

.manterLogado {
  color: #303030;
}

.forgot-password {
  color: #303030;
  font-size: 15px;
  text-decoration: none;
}
</style>
