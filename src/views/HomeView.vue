<template>
  <footer class="footer">
    <div class="top-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Marcas</h3>
          <ul>
            <li>Nike</li>
            <li>High</li>
            <li>Vans</li>
            <li>Puma</li>
            <li>Stussy</li>
            <li>Adidas</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Redes Sociais</h3>
          <ul>
            <li class="logo-social">
              <a href="https://www.twitter.com">
                <img src="@/assets/img/twitter.svg" alt="Logo" />
              </a>
            </li>
            <li id="insta" class="logo-social">
              <a href="https://www.instagram.com">
                <img src="@/assets/img/insta.png" alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Sobre nós</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="Logo" />
      </div>
    </div>
    <hr />
    <div class="middle-footer">
      <div class="middle-content">
        <p>
          Este site foi criado por um grupo de alunos do curso de informática como um projeto para o Hackaton do Instituto Federal Catarinense - Campus Araquari de 2024.
        </p>
      </div>
      <div class="email-signup">
        <p class="offer-text">
          Para receber ofertas da nossa loja, insira seu email.
        </p>
        <input type="email" placeholder="Seu email" />
      </div>
    </div>
    <hr />
    <div class="bottom-footer">
      <p>Copyright © 2024 Bença. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #000; /* Fundo preto */
  color: #fff; /* Texto branco */
  padding: 20px;
  font-family: Arial, sans-serif;
}

.top-footer {
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas se necessário */
  justify-content: space-between; /* Espaço entre os itens */
  align-items: center;
  padding-bottom: 20px;
}

.footer-content {
  display: flex; /* Permite que as seções fiquem na horizontal */
  align-items: flex-start; /* Alinha as seções ao topo */
  padding-left: 120px; /* Margem reduzida para dispositivos menores */
  flex: 1; /* Permite que ocupe o espaço disponível */
}

.footer-section {
  margin-right: 80px; /* Espaçamento entre seções */
  padding-bottom: 10px; /* Espaçamento abaixo do texto */
  
}

.footer-section h3{
  padding-bottom: 5px;
  border-bottom: 1px solid #444; /* Linha abaixo da seção */
}

.footer-section ul {
  padding-left: 0; /* Remove a indentação da lista */
  list-style-type: none; /* Remove os marcadores da lista */
}

.footer-section li {
  padding: 8px;
}

.logo {
  display: flex;
  justify-content: flex-end; /* Alinha a logo à direita */
}

.logo img {
  height: 210px; /* Altura da logo */
  margin-right: 120px; /* Margem à esquerda */
}

.logo-social {
  display: flex;
  justify-content: flex-end; /* Alinha a logo à direita */
}

.logo-social img {
  height: 30px; /* Altura da logo */
  padding-top: 5px; /* Margem à esquerda */
  margin-right: 70px;
}

#insta{
  margin-right: 5px;
}

.middle-footer {
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas */
  justify-content: space-between; /* Espaço entre os itens */
  align-items: flex-start; /* Alinhamento ao topo */
  margin-top: 30px; /* Margem superior */
  padding-bottom: 80px;
}

.middle-content {
  width: 350px;
  margin-left: 120px;
}

.email-signup {
  text-align: center; /* Alinha o texto e o input à direita */
  margin-right: 120px;
}

.middle-footer .offer-text {
  margin-bottom: 10px; /* Margem abaixo do texto de oferta */
  width: 250px;
}

.middle-footer input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.bottom-footer {
  text-align: center;
  margin-top: 20px;
  color: grey;
}

/* Estilo das linhas */
hr {
  border: 1px solid #444; /* Cor das linhas */
  margin: auto; /* Margem acima e abaixo das linhas */
  max-width: 1650px;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column; /* Alinha as seções verticalmente em telas menores */
    padding-left: 0; /* Remove o padding em telas menores */
  }
  .footer-section {
    margin-right: 0; /* Remove o espaçamento entre seções */
    margin-bottom: 20px; /* Adiciona margem abaixo das seções */
  }
  
  .middle-footer {
    flex-direction: column; /* Alinha os itens verticalmente */
    align-items: flex-start; /* Alinhamento ao topo */
  }

  .email-signup {
    text-align: left; /* Alinha o texto à esquerda em telas menores */
  }
}
</style>
