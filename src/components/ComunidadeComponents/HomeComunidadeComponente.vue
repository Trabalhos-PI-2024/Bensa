<template>
  <div class="comunidade-page">
    <LoginAlert v-if="showAlert" @close="showAlert = false" />
  </div>

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

                <router-link to="/chat">
                  <button class="botao-chat" @click="carrinhoStore.addCarrinho(produto)"><img src="/src/assets/img/Icons/comment.png" alt=""></button>
                </router-link>
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
      
                <router-link to="/chat">
                  <button class="botao-chat" @click="carrinhoStore.addCarrinho(produto)"><img src="/src/assets/img/Icons/comment.png" alt=""></button>
                </router-link>
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
                <router-link to="/chat">
                  <button class="botao-chat" @click="carrinhoStore.addCarrinho(produto)"><img src="/src/assets/img/Icons/comment.png" alt=""></button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import CarroselComponente from '@/components/ComunidadeComponents/CarroselComponente.vue';
import MaisVendidosComponente from '@/components/ComunidadeComponents/MaisVendidosComponente.vue';
import LoginAlert from "@/components/BensaComponents/AlertaComponente.vue";
import { useComunidadeStore } from '@/stores/comunidade';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useRouter } from 'vue-router';

const carrinhoStore = useCarrinhoStore();
const comunidadeStore = useComunidadeStore();
const router = useRouter();
const showAlert = ref(true); 

function visualizar(id) {
  router.push(`/produto/${id}`);
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
  object-fit: cover;  
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
  gap: 20px;
  width: 80%;
}

.imagem-produto {
  width: 220px;
}

.nome-produto {
  font-weight: bold;
}

.preco {
  color: #025213;
  font-weight: 600;
}

.card-produto {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 20px;
  margin: 15px;
  width: 250px;
  height: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all .5s ease;
}

.card-produto:hover{
  transform: scale(1.01) translateY(-5px);
}

.botao-chat {
margin-left: 100px;
 background-color: white;
 cursor: pointer;
}
.botao-chat img{
  width: 24px;
  background-color: white;
  
}


@media (max-width: 768px) {
  .cards-container {
    justify-content: space-around;
    gap: 0;
  }

  .item {
    width: 100%;
  }

  .banner {
    width: 100%;
    box-shadow: none;
    padding-bottom: 0px;
  }

  .banner img {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }

  .imagem-produto {
    width: 180px;
  }
}
</style>
