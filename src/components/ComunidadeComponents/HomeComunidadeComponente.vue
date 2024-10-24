<template>
  <div class="comunidade-page">
    <h1>Em Alta</h1>
    <CarroselComponente />
    <div class="cards-container">
      <CardProduto v-for="(produto, index) in produtos" :key="index" :produto="produto" />
    </div>

    <div class="titulo-container">
      <h3 class="titulo-calçados">Best Sellers</h3>
    </div>
    <MaisVendidosComponente />
    <div class="cards-container">
      <CardProduto v-for="(produto, index) in produtos" :key="index" :produto="produto" />
    </div>

    <div class="boxContainer">
      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/teniscomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Calçados</h3>
        <CarroselComponente />
        <div class="cards-container">
          <CardProdutoComponente v-for="(produto, index) in produtos" :key="index" :produto="produto" />
        </div>
      </div>

      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/roupascomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Roupas</h3>
        <CarroselComponente />
        <div class="cards-container">
          <CardProdutoComponente v-for="(produto, index) in produtos" :key="index" :produto="produto" />
        </div>
      </div>

      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/acessoriocomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Acessórios</h3>
        <CarroselComponente />
        <div class="cards-container">
          <CardProdutoComponente v-for="(produto, index) in produtos" :key="index" :produto="produto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardProdutoComponente from '@/components/ComunidadeComponents/CardProdutoComponente.vue';
import CarroselComponente from '@/components/ComunidadeComponents/CarroselComponente.vue';
import MaisVendidosComponente from '@/components/ComunidadeComponents/MaisVendidosComponente.vue';
const produtos = ([
  { nome: 'Jaqueta Palace Pro Team', preco: 499.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 599.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 399.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 459.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 199.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 299.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 549.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
  { nome: 'Jaqueta Palace Pro Team', preco: 499.99, imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp' },
]);
</script>

<style scoped>
.comunidade-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  gap: 20px;
}

.boxContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.item {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.banner {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner img {
  width: 100%;
  height: 57vh;
  border-radius: 8px;
}

.titulo-calçados {
  align-self: flex-start;
  margin: 10px 0;
  font-size: 56px;
  font-weight: bold;
  line-height: 1;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>