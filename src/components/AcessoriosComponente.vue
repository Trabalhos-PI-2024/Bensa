<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
        <img src="../assets/img/hat.png" alt="">
        <h3>Acessórios</h3>
      </div>
      <div class="mainProdutos">
        <div class="produtos" v-for="product in acessorio" :key="product.id">
          <img :src="product.image1" :alt="product.name" />
          <div class="infoProdutos">
            <div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.price }}</p>
            </div>
            <button class="btn-cart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="imgAcessorios">
      <img src="../assets/img/Acessorios/Acessorios.jpg" alt="Acessórios" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '@/stores/products';
import { useRouter } from 'vue-router';

const router = useRouter()

function visualizar(id){
  router.push(`/produto/${id}`)
}

const productStore = useProductStore();

const acessorio = computed(() =>
      productStore.products.filter(product => product.acessorios)
    );
</script>

<style scoped>
.acessorios {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding: 20px 0;
  gap: 10px;
  border-bottom: transparent;
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

.acessorios .mainAcessorios .title img{
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

.acessorios .mainAcessorios .mainProdutos .produtos:hover{
    transform: scale(1.01);
}

.infoProdutos{
    display: flex;
    justify-content: space-between;
    width: 100%;
    transition: all .5s ease;
    padding: 10px 25px 20px 25px;
}

.infoProdutos div h3{
  font-size: 15px;
}

.infoProdutos div p{
  font-size: 12.5px;
  font-weight: 600;
}

.acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos .cart-image {
    width: 36px;
    height: 36px;
  }

  .acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos button{
    background: transparent;
  }

.acessorios .mainAcessorios .mainProdutos .produtos img {
  width: 225px;
  height: 225px;
}

.acessorios .imgAcessorios {
  margin-top: 20px;
}

.acessorios .imgAcessorios img {
  width: 550px;
  height: 570px;
  border: 1px solid #e7e7e7;
}


@media (max-width: 1200px) {
  .acessorios {
    flex-direction: column;
}
}
</style>
