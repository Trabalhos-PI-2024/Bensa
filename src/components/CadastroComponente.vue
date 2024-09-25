
<template>
    <div id="cadastro">
      <div class="ImgLogin">
        <img src="./assets/img/user.svg" alt="Logo de Cadastro" class="logo" />
      </div>
      <form method="post" action="">
        <div class="form-header">
          <a href="#login">Login</a>
          <a href="/cadastro" class="active">Sign Up</a>
        </div>
        <div class="line"></div>
  
        <h1>Cadastro</h1>
  
        <p>
          <label for="nome_cad">Seu nome</label>
          <input id="nome_cad" name="nome_cad" type="text" placeholder="Luiz Augusto" />
        </p>
  
        <p>
          <label for="email_cad">Seu e-mail</label>
          <input id="email_cad" name="email_cad" type="email" placeholder="contato@htmlecsspro.com" />
        </p>
  
        <p>
          <label for="senha_cad">Sua senha</label>
          <input id="senha_cad" name="senha_cad" type="password" placeholder="1234" />
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
  </template>
  
  <style scoped>
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  #cadastro {
    position: relative;
    width: 88%;
    padding: 18px 6% 60px 6%;
    margin: 0 0 35px 0;
    background: rgb(247, 247, 247);
    border: 1px solid rgba(147, 184, 189, 0.8);
    border-radius: 5px;
  }
  
  .ImgLogin {
    text-align: center;
  }
  
  .logo {
    width: 70px;
  }
  
  .form-header {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .line {
    width: 70%;
    height: 1.8px;
    background: linear-gradient(
      left,
      rgba(147, 184, 189, 0) 0%,
      rgba(219, 0, 0, 0.8) 20%,
      rgb(143, 0, 0) 53%,
      rgba(12, 0, 0, 0.8) 79%,
      rgba(147, 184, 189, 0) 100%
    );
    margin: 20px auto;
  }
  
  p {
    margin-bottom: 15px;
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
    width: 60%;
    cursor: pointer;
    background: #000000;
    padding: 8px 5px;
    color: #fff;
    font-size: 20px;
    border: 1px solid #fff;
    margin-bottom: 10px;
    border-radius: 12px;
  }
  
  input[type="submit"]:hover {
    transform: scale(1.04);
  }
  
  .link {
    position: absolute;
    background: #e1eaeb;
    color: #7f7c7c;
    left: 0;
    height: 20px;
    width: 440px;
    padding: 17px 30px;
    font-size: 16px;
    text-align: right;
    border-top: 1px solid #dbe5e8;
    border-radius: 0 0 5px 5px;
  }
  
  .link a {
    font-weight: bold;
    background: #f7f8f1;
    padding: 6px;
    color: rgb(29, 162, 193);
    margin-left: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
  }
  </style>
  