<template>
  <div class="navegacao">
    <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
    <div class="produtos-container" :style="carrosselStyle">
      <CardProdutoComponente v-for="produto in produtosVisiveis" :key="produto.id" :produto="produto" />
    </div>
    <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CardProdutoComponente from './CardProdutoComponente.vue'; 

const produtos = ref([
  { nome: 'Jaqueta Palace Pro Team ', preco: 499.99, imagem: '	https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 599.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 399.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 459.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 199.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 299.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 549.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 499.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
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
</style>
