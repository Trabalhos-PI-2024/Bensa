<script setup></script>
<template>
  <div class="cadastro">
    <div class="ImgLogin">
      <img src="../assets/img/user.svg" alt="Logo de Cadastro" class="logo" />
    </div>
    <form method="post" action="">
      <div class="form-header">
        <router-link to="/">Sign Up</router-link>
        <router-link to="/">Login</router-link>
      </div>
      <div class="line"></div>

      <h1>Cadastro</h1>

      <p>
        <label for="nome_cad">Seu e-mail</label>
        <input id="nome_cad" name="nome_cad" type="text" placeholder="xaolinmatador@gmail.com" />
      </p>

      <p>
        <label for="email_cad">Sua Senha</label>
        <input id="email_cad" name="email_cad" type="email" placeholder="1234" />
      </p>

      <p>
        <label for="senha_cad">Confirmar Senha</label>
        <input id="senha_cad" name="senha_cad" type="password" placeholder="1234" />
      </p>

      <router-link to="/endereco">
        <p>
          <input type="submit" value="Próximo" class="submit-button" />
        </p>
      </router-link>

      <p class="link">
        Já tem conta? <router-link to="/">Voltar</router-link>
      </p>

    </form>
  </div>
</template>

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
  /* Para permitir melhor controle do layout */
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
  /* Aumentado para mais espaço entre os elementos */
}

.form-header a {
  color: black;
  /* Mudar a cor do texto para preto */
}

.line {
  width: 30%;
  /* Ajustado para ocupar mais espaço */
  height: 1.8px;
  background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%,
      rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
  ;
  margin: 20px auto;
  /* Aumentado para mais espaço */
}

p {
  margin-bottom: 25px;
  /* Aumentado para mais espaço entre os elementos */
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
  /* Tornado menor */
  cursor: pointer;
  background: #000000;
  padding: 8px 5px;
  color: #fff;
  font-size: 16px;
  /* Ajustado para um tamanho mais apropriado */
  border: 1px solid #fff;
  margin: 40px auto;
  /* Centralizado com margem */
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
  /* Ajustado para permitir melhor posicionamento */
  text-align: right;
  /* Alinhado à direita */
}
</style>
