<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
        <h3>Roupas</h3>
        <img src="../assets/img/t-shirt.png" alt="">
      </div>
      <div class="mainProdutos">
        <div class="produtos" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <div class="infoProdutos">
            <div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.price }}</p>
            </div>
            <button class="btn-cart" @click="addToCart(product.name)">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="imgAcessorios">
      <img src="../assets/img/roupas/Roupa.jpg" alt="Acessórios" />
    </div>
  </div>
  <div class="line">
    <img src="../assets/img/Lancamentos/truck-loading-load-a-truck-svgrepo-com.svg" alt="">
    <p>Frete grátis para a região sul e sudeste a partir de R$ 299</p>
    <img src="../assets/img/Lancamentos/label-svgrepo-com.svg" alt="">
    <p>5% Desconto no PIX</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import calcaImg from '../assets/img/roupas/calca.webp';
import fuckImg from '../assets/img/roupas/fuck.webp';
import jacketImg from '../assets/img/roupas/jacket.webp';
import moletomImg from '../assets/img/roupas/moletom.webp';

const products = ref([
  {
    id: 12,
    name: 'Calça Nike',
    price: 'R$199,99',
    image: calcaImg
  },
  {
    id: 13,
    name: 'Camiseta Nike',
    price: 'R$99,99',
    image: fuckImg
  },
  {
    id: 14,
    name: 'Jaqueta Nike',
    price: 'R$299,99',
    image: jacketImg
  },
  {
    id: 15,
    name: 'Moletom Nike',
    price: 'R$79,99',
    image: moletomImg
  },
  {
    id: 16,
    name: 'Moletom Nike',
    price: 'R$79,99',
    image: moletomImg
  },
  {
    id: 17,
    name: 'Moletom Nike',
    price: 'R$79,99',
    image: moletomImg
  },
]);

const addToCart = (productName) => {
  alert(`${productName} foi adicionado ao carrinho!`);
};
</script>

<style scoped>
.acessorios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  padding: 20px 0;
}

.acessorios .mainAcessorios {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.acessorios .mainAcessorios .title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.acessorios .mainAcessorios .title img {
  width: 40px;
}

.acessorios .mainAcessorios .title h3 {
  font-size: 22px;
}

.acessorios .mainAcessorios .mainProdutos {
  width: 55dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.acessorios .mainAcessorios .mainProdutos .produtos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e7e7e7;
  padding: 10px 20px 0 20px;
  transition: all .2s ease;
  border-radius: 5px;
}

.acessorios .mainAcessorios .mainProdutos .produtos:hover {
  transform: scale(1.01);
}

.infoProdutos {
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: all .5s ease;
  padding: 10px 25px 20px 25px;
}

.infoProdutos div h3 {
  font-size: 15px;
}

.infoProdutos div p {
  font-size: 12.5px;
  font-weight: 600;
}

.acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos .cart-image {
  width: 36px;
  height: 36px;
}

.acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos button {
  background: transparent;
}

.acessorios .mainAcessorios .mainProdutos .produtos:hover .infoProdutos {
  opacity: 1;  
}

.acessorios .mainAcessorios .mainProdutos .produtos img {
  width: 225px;
  height: 225px;
}

.acessorios .imgAcessorios {
  border: 1px solid #e7e7e7;
  width: 550px;
  height: 570px;
  margin-top: 20px;
}

.acessorios .imgAcessorios img {
  width: 550px;
  height: 570px;
  border: 1px solid #e7e7e7;
}

.line {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #920404;
  padding: 5px 0;
  color: #e7e7e7;
  gap: 10px;
  letter-spacing: 1px;
}

.line img {
  width: 30px;
}

.line p {
  margin: 0 20px 0 0;
}

@media (max-width: 1200px) {
  .acessorios {
    flex-direction: column;
  }
}
</style>
