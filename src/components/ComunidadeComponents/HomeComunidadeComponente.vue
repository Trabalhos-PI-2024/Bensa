<template>
  <div class="comunidade-page">
    <h1>Em Alta</h1>
    <CarroselComponente />

    <div class="titulo-container">
      <h3 class="titulo-calçados">Best Sellers</h3>
    </div>
    <MaisVendidosComponente />

    <div class="boxContainer">
      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/teniscomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Calçados</h3>
        <CarroselComponente />
        <div class="cards-container">
          <div class="card-produto" v-for="produto in tenis" :key="produto.id">
            <button class="btn-more" @click="visualizar(produto.id)">
            <img :src="produto.image1" alt="Produto" class="imagem-produto" />
            </button>
            <div class="informacoes">
              <h4 class="nome-produto">{{ produto.name }}</h4>
              <div class="preco-container">
                <span class="preco">R$ {{ produto.price }}</span>
                <button class="botao-sacola" @click="adicionarNaSacola">
                  <img src="/src/assets/img/Icons/carrinho.svg" alt="Adicionar à Sacola" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/roupascomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Roupas</h3>
        <CarroselComponente />
        <div class="cards-container">
          <div class="card-produto" v-for="produto in roupa" :key="produto.id">
            <button class="btn-more" @click="visualizar(produto.id)">
            <img :src="produto.image1" alt="Produto" class="imagem-produto" />
            </button>
            <div class="informacoes">
              <h4 class="nome-produto">{{ produto.name }}</h4>
              <div class="preco-container">
                <span class="preco">R$ {{ produto.price }}</span>
                <button class="botao-sacola" @click="adicionarNaSacola">
                  <img src="/src/assets/img/Icons/carrinho.svg" alt="Adicionar à Sacola" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="banner">
          <img src="/src/assets/img/Banners/acessoriocomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <h3 class="titulo-calçados">Acessórios</h3>
        <CarroselComponente />
        <div class="cards-container">
          <div class="card-produto" v-for="produto in acessorios" :key="produto.id">
            <button class="btn-more" @click="visualizar(produto.id)">
            <img :src="produto.image1" alt="Produto" class="imagem-produto" />
            </button>
            <div class="informacoes">
              <h4 class="nome-produto">{{ produto.name }}</h4>
              <div class="preco-container">
                <span class="preco">R$ {{ produto.price }}</span>
                <button class="botao-sacola">
                  <img src="/src/assets/img/Icons/carrinho.svg" alt="Adicionar à Sacola" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CarroselComponente from '@/components/ComunidadeComponents/CarroselComponente.vue';
import MaisVendidosComponente from '@/components/ComunidadeComponents/MaisVendidosComponente.vue';
import { useComunidadeStore } from '@/stores/comunidade'
import { useRouter } from 'vue-router'

const comunidadeStore = useComunidadeStore()

const router = useRouter()

function visualizar(id) {
  router.push(`/produto/${id}`)
}

const tenis = computed(() =>
  comunidadeStore.comunidade.filter(comunidade => comunidade.tenis)
);
const roupa = computed(() =>
  comunidadeStore.comunidade.filter(comunidade => comunidade.roupa)
);
const acessorios = computed(() =>
  comunidadeStore.comunidade.filter(comunidade => comunidade.acessorios)
);
const lancamento = computed(() =>
  comunidadeStore.comunidade.filter(comunidade => comunidade.lancamento)
);
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

.btn-more {
  background-color: #ffff;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;
  width: 80%;
}

.imagem-produto{
  width: 250px;
}

.nome-produto{
  font-weight: bold;
}

.preco{
  color: #025213;
  font-weight: 600;
}

@media (max-width: 768px) {
  .cards-container {
    justify-content: space-around;
    gap: 0;
  }
}
</style>