<template>
    <div class="navegacao">
      <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
      <div class="produtos-container" :style="carrosselStyle">
        <div
          v-for="produto in produtosVisiveis"
          :key="produto.id"
          class="produto-card"
        >
          <img :src="produto.imagem" alt="Imagem do Produto" />
          <h3>{{ produto.titulo }}</h3>
          <p class="preco">R$ {{ produto.preco.toFixed(2) }}</p>
        </div>
      </div>
      <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const produtos = ref([
    {
      id: 1,
      imagem: 'caminho/para/imagem_produto_1.jpg',
      titulo: 'Produto 1',
      preco: 29.99,
    },
    {
      id: 2,
      imagem: 'caminho/para/imagem_produto_2.jpg',
      titulo: 'Produto 2',
      preco: 49.99,
    },
    {
      id: 3,
      imagem: 'caminho/para/imagem_produto_3.jpg',
      titulo: 'Produto 3',
      preco: 19.99,
    },
    {
      id: 4,
      imagem: 'caminho/para/imagem_produto_4.jpg',
      titulo: 'Produto 4',
      preco: 39.99,
    },
    {
      id: 5,
      imagem: 'caminho/para/imagem_produto_5.jpg',
      titulo: 'Produto 5',
      preco: 59.99,
    },
    {
      id: 6,
      imagem: 'caminho/para/imagem_produto_6.jpg',
      titulo: 'Produto 6',
      preco: 24.99,
    },
    {
      id: 7,
      imagem: 'caminho/para/imagem_produto_7.jpg',
      titulo: 'Produto 7',
      preco: 89.99,
    },
    {
      id: 8,
      imagem: 'caminho/para/imagem_produto_8.jpg',
      titulo: 'Produto 8',
      preco: 34.99,
    },
  ]);
  
  const indexAtual = ref(0);
  const produtosPorPagina = ref(4);
  
  const produtosVisiveis = computed(() => {
    return produtos.value.slice(indexAtual.value, indexAtual.value + produtosPorPagina.value);
  });
  
  const moverEsquerda = () => {
    if (indexAtual.value > 0) {
      indexAtual.value -= produtosPorPagina.value;
    }
  };
  
  const moverDireita = () => {
    if (indexAtual.value + produtosPorPagina.value < produtos.value.length) {
      indexAtual.value += produtosPorPagina.value;
    }
  };
  
  const atualizarProdutosPorPagina = () => {
    const larguraTela = window.innerWidth;
  
    if (larguraTela >= 1200) {
      produtosPorPagina.value = 4;
    } else if (larguraTela >= 768) {
      produtosPorPagina.value = 3;
    } else if (larguraTela >= 480) {
      produtosPorPagina.value = 2;
    } else {
      produtosPorPagina.value = 1;
    }
  };
  
  window.addEventListener('resize', atualizarProdutosPorPagina);
  atualizarProdutosPorPagina();
  </script>
  
  <style scoped>
  .navegacao {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-navegacao {
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
  }
  
  .produtos-container {
    display: flex;
    overflow: hidden;
    padding: 10px;
    transition: transform 0.5s ease;
  }
  
  .produto-card {
    flex: 0 0 auto;
    margin: 10px;
    text-align: center;
    width: 200px;
  }
  
  .produto-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .preco {
    font-weight: bold;
    color: #2a6413;
  }
  </style>
  