<template>
    <div class="pagina-perfil">
      <div class="banner">
        <input type="file" id="banner-input" @change="atualizarBanner" accept="image/*" v-show="editar" />
        <label v-show="editar" for="banner-input" class="botao-escolher-arquivo banner-button">+</label>
        <img v-if="banner" :src="banner" alt="Banner" />
      </div>
  
      <div class="perfil-conteudo">
        <div class="perfil-info">
          <div class="imagem-bola">
            <div class="bola">
              <input type="file" id="imagem-bola-input" @change="atualizarImagemBola" accept="image/*" v-show="editar" />
              <label v-show="editar" for="imagem-bola-input" class="botao-escolher-arquivo bola-button">+</label>
              <img v-if="imagemBola" :src="imagemBola" alt="Imagem do Usuário" />
            </div>
          </div>
          <div class="informacoes-usuario">
            <h2>{{ nome }}</h2>
            <p>{{ cidade }}, {{ estado }}</p>
          </div>
        </div>
        <div class="botoes-perfil">
          <button @click="toggleEditar" class="botao-editar-perfil">
            {{ editar ? 'Salvar' : 'Editar Perfil' }}
          </button>
          <router-link to="/addproduto">
            <button class="botao-produto">+ Produto</button>
          </router-link>
        </div>
  
        <div class="avaliacoes">
          <div class="estrelas">
            <span v-for="star in 5" :key="star" class="estrela">&#9733;</span>
          </div>
          <p>({{ numeroAvaliacoes }})</p>
        </div>
      </div>
      <h1 class="tittle">Produtos</h1>
  
      <div class="produtos">
        <CardProdutoComponente
          v-for="(produto, index) in produtos"
          :key="index"
          :produto="produto"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import CardProdutoComponente from '../components/CardProdutoComponente.vue';
  
  export default {
    name: 'MinhaPagina',
    components: {
      CardProdutoComponente,
    },
    setup() {
      const editar = ref(false);
      const banner = ref(null);
      const imagemBola = ref(null);
      const nome = ref('Nome do Usuário');
      const cidade = ref('Cidade');
      const estado = ref('Estado');
      const numeroAvaliacoes = ref(0);
      const produtos = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        nome: `Produto ${index + 1}`,
        preco: Math.random() * 100, // Gerando preços aleatórios para os produtos
        vendido: Math.random() > 0.5, // Definindo aleatoriamente se o produto foi vendido
        imagem: 'https://droper.app/marca/corteiz?utm_source=google&utm_medium=paid_pmax&utm_campaign=%5BFIARA%5D%5BP.MAX%5D%5BVENDAS%5D%5BNC%5D%5BINSTITUCIONAL%5D&utm_content=&utm_id=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkRxEcj5xuqR1i0WvYDNzbphI90YlcJKw0PzjQjDQ_j8nvKAqL5mlQaAvzDEALw_wcB&gad_source=1&gclid=Cj0KCQjwgrO4BhC2ARIsAKQ7zUkRxEcj5xuqR1i0WvYDNzbphI90YlcJKw0PzjQjDQ_j8nvKAqL5mlQaAvzDEALw_wcB'
      }));
  
      const toggleEditar = () => {
        editar.value = !editar.value;
      };
  
      const atualizarBanner = (event) => {
        const file = event.target.files[0];
        if (file) {
          banner.value = URL.createObjectURL(file);
        }
      };
  
      const atualizarImagemBola = (event) => {
        const file = event.target.files[0];
        if (file) {
          imagemBola.value = URL.createObjectURL(file);
        }
      };
  
      return {
        editar,
        banner,
        imagemBola,
        nome,
        cidade,
        estado,
        numeroAvaliacoes,
        produtos,
        toggleEditar,
        atualizarBanner,
        atualizarImagemBola,
      };
    },
  };
  </script>
  
  <style scoped>
  .pagina-perfil {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
  }
  
  .banner {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
  }
  
  .banner input {
    display: none;
  }
  
  .banner-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
    z-index: 1;
  }
  
  .banner-button:hover {
    opacity: 1;
  }
  
  .banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .botoes-perfil {
    display: flex;
    gap: 10px;
  }
  
  .botao-editar-perfil,
  .botao-produto {
    cursor: pointer;
    background-color: #9c1e0e;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    color: white;
    margin-top: 20px;
  }
  
  .botao-produto:hover {
    background-color: #5a140b;
  }
  
  .botao-editar-perfil:hover {
    background-color: #5a140b;
  }
  
  .perfil-conteudo {
    display: flex;
    justify-content: space-between;
  }
  
  .perfil-info {
    display: flex;
  }
  
  .imagem-bola {
    position: relative;
    margin-right: 20px;
  }
  
  .bola {
    width: 100px;
    height: 100px;
    background-color: #d9d9d9;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .bola input {
    display: none;
  }
  
  .bola img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .bola-button {
    position: absolute;
    font-size: 24px;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  
  .bola-button:hover {
    opacity: 1;
  }
  
  .informacoes-usuario {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .avaliacoes {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .estrelas {
    color: #d9d9d9;
  }
  
  .estrelas .estrela {
    font-size: 25px;
  }
  
  .tittle {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 40px;
    border-bottom: 2px solid #9c1e0e;
  }
  
  .produtos {
    padding-top: 40px;
    display: flex; /* Adicionado para exibir os cartões em linha */
    flex-wrap: wrap; /* Permitir quebra de linha */
    justify-content: center; /* Justifica à esquerda */
  }
  </style>
  