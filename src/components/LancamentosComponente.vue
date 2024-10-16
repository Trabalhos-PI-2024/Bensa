<template>
  <div class="lancamentos">
    <div class="title">
      <h3>Lançamentos</h3>
    </div>
    <div class="mainProdutos">
      <div class="product" v-for="product in lancamentos" :key="product.id">
        <div class="imgProdutos">
          <img class="img1" :src="product.image1" alt="" />
          <img class="img2" :src="product.image2" alt="" />
        </div>
        <div class="infoProdutos">
          <div class="divInfoProduto">
            <p>{{ product.name }}</p>
            <button class="btn-more" @click="showMoreDetails(product.name)">Saiba Mais</button>
          </div>
          <div class="divButtonCart">
            <button class="btn-cart" @click="addToCart(product.name)">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../stores/products.js';

const productStore = useProductStore();

const lancamentos = computed(() =>
      productStore.products.filter(product => product.lancamento)
    );

const showMoreDetails = (productName) => {
  alert(`Mais detalhes sobre: ${productName}`);
};

const addToCart = (productName) => {
  alert(`${productName} foi adicionado ao carrinho!`);
};

console.log(productStore.products)  
</script>

<style scoped>
.lancamentos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  border-bottom: 1px solid #e7e7e7;
}

.lancamentos .title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lancamentos .title h3 {
  transform: rotate(270deg);
  border-bottom: 1.5px solid #0d0d0d;
  font-size: 22px;
}

.lancamentos .mainProdutos {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.lancamentos .mainProdutos .product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e7e7e7e7;
  margin: 0 40px;
  padding: 0 10px;
  transition: all .5s ease;
}

.lancamentos .mainProdutos .product:hover {
  transform: scale(1.03);
}

.lancamentos .mainProdutos .product img {
  width: 207px;
  height: 207px;
}

.lancamentos .mainProdutos .product .imgProdutos .img2 {
  display: none;
}

.lancamentos .mainProdutos .product:hover .imgProdutos .img1 {
  display: none;
}

.lancamentos .mainProdutos .product:hover .imgProdutos .img2 {
  display: block;
}

.infoProdutos {
  display: flex;
  opacity: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all .5s ease;
  padding: 0 10px 10px 10px;
}

.lancamentos .mainProdutos .product .infoProdutos .cart-image {
  width: 36px;
  height: 36px;
}

.lancamentos .mainProdutos .product .infoProdutos .divInfoProduto {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 5px;
}

.lancamentos .mainProdutos .product .infoProdutos .divInfoProduto p {
  font-size: 12px;
  letter-spacing: .5px;
}

.lancamentos .mainProdutos .product .infoProdutos .divInfoProduto .btn-more {
  background: #e7e7e7;
  padding: 5px 10px;
  border-radius: 10px;
}

.lancamentos .mainProdutos .product .infoProdutos button {
  background: transparent;
}

.lancamentos .mainProdutos .product:hover .infoProdutos {
  opacity: 1;
}

@media (max-width: 1200px) {
  .lancamentos {
    flex-direction: column;
  }

  .lancamentos .title h3 {
    transform: rotate(0deg);
    border-bottom: 1.5px solid transparent;
    margin: 0 0 10px 0;
  }
}

@media (max-width: 985px) {
  .lancamentos .mainProdutos {
    flex-direction: column;
  }
}
</style>
