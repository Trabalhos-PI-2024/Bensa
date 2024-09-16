<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Seções de Marcas, Redes Sociais e Sobre Nós -->
      <div class="footer-sections">
        <!-- Seção de Marcas -->
        <div class="footer-section brands">
          <h3>Marcas</h3>
          <ul>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Vans</li>
            <li>Puma</li>
            <li>High</li>
            <li>Stussy</li>
          </ul>
        </div>

        <!-- Seção Redes Sociais -->
        <div class="footer-section social">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>

        <!-- Seção Sobre Nós -->
        <div class="footer-section about">
          <h3>Sobre Nós</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <!-- Logo -->
      <div class="footer-section logo">
        
      </div>
    </div>

    <!-- Linha de Separação -->
    <hr />

    <!-- Seção Informações Adicionais -->
    <div class="footer-info">
      <p>&copy; 2024 Sua Loja Virtual. Todos os direitos reservados.</p>
      <p>Email: contato@sualoja.com</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer-Bensa',
};
</script>

<style scoped>
/* Estilo Global */
* {
  font-size: 1.03em;
  color: white; /* Muda todas as letras para branco */
  background-color: #1e1e1e; /* Fundo escuro */
}

.footer {
  background-color: #1e1e1e; /* Fundo do footer */
  padding: 20px;
  font-family: Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-sections {
  display: flex;
  gap: 10px; /* Define o espaço entre as seções */
}

.footer-section {
  margin: 0;
  padding: 50px;
}

.footer-section h3 {
  margin-bottom: 10px;
  border-bottom: 2px solid white; /* Linha abaixo do título em branco */
  padding-bottom: 5px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section a {
  text-decoration: none;
  color: white; /* Links em branco */
}

.footer-section.brands {
  margin-left: 20px;
}
.footer-section.about {
  color: white; /* Garante que o texto da seção 'Sobre Nós' seja branco */
}

/* Ajuste da logo */
.footer-section.logo img {
  max-width: 50%;
  margin-left: 500px;
}

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid white; /* Linha de separação em branco */
}

.footer-info {
  font-size: 0.9em;
  text-align: center;
}

.footer-info p {
  margin: 5px 0;
}
</style>
