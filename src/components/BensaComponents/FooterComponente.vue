<template>
  <footer class="footer hidden">
    <div class="top-footer">
      <div class="footer-content">
        <div class="mainFooter">
          <div class="footer-section">
            <h3>Marcas</h3>
            <ul>
              <router-link to="/nike">
                <li>Nike</li>
              </router-link>
              <router-link to="/adidas">
                <li>Adidas</li>
              </router-link>
              <router-link to="/vans">
                <li>Vans</li>
              </router-link>
              <router-link to="/stussy">
                <li>Stussy</li>
              </router-link>

            </ul>
          </div>
          <div class="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li class="logo-social">
                <a href="https://www.twitter.com">
                  <img src="/src/assets/img/Icons/twitter.png" alt="Logo" />
                </a>
              </li>
              <li id="insta" class="logo-social">
                <a href="https://www.instagram.com">
                  <img src="/src/assets/img/Icons/facebook.png" alt="Logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-section">
          <h3>Sobre nós</h3>
          <p> Este site foi criado por um grupo de alunos do curso de informática como um projeto para o Hackaton do
            Instituto Federal Catarinense - Campus Araquari de 2024.</p>
        </div>
      </div>
      <div class="logo">
        <a href="https://youtu.be/vj4hp9XCT6A?feature=shared">
          <img src="/src/assets/img/Logos/hands.png" alt="Logo" />
        </a>
      </div>
    </div>
    <hr />

    <div class="bottom-footer">
      <p>Copyright © 2024 Bença. Todos os direitos reservados.</p>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background-color: #000;
  color: #fff;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.top-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.mainFooter {
  display: flex;
  width: 100%;
}

.footer-content {
  display: flex;
  align-items: flex-start;
  padding-left: 120px;
  flex: 1;
}

.footer-section {
  margin-right: 90px;
  padding-bottom: 10px;
}

.footer-section h3 {
  padding: 5px;
  border-bottom: 1px solid #444;

}

.footer-section ul {
  padding-left: 0;
  list-style-type: none;
}

.footer-section li {
  padding: 4px;
  color: #fff;
}

.logo {
  display: flex;
  justify-content: flex-end;
}

.logo img {
  height: 210px;
  margin-right: 120px;
  width: 210px;
}

.logo-social {
  display: flex;
  justify-content: flex-end;
}

.logo-social img {
  height: 30px;
  padding-top: 5px;
  margin-right: 70px;
}

.bottom-footer {
  text-align: center;
  margin-top: 20px;
  color: grey;
}

hr {
  border: 1px solid #444;
  margin: auto;
  max-width: 1650px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    padding-left: 0;
  }

  .footer-section {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .middle-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .email-signup {
    text-align: left;
  }

  .mainFooter {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
</style>