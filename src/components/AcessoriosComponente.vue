<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
        <img src="../assets/img/hat.png" alt="">
        <h3>Acessórios</h3>
      </div>
      <div class="mainProdutos">
        <div class="produtos">
          <img src="../assets/img/Acessorios/bag.jpg" alt="Bag" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
        <div class="produtos">
          <img src="../assets/img/Acessorios/cap.webp" alt="Cap" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
        <div class="produtos">
          <img src="../assets/img/Acessorios/bolsa.webp" alt="Bolsa" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
        <div class="produtos">
          <img src="../assets/img/Acessorios/touca.webp" alt="Touca" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
        <div class="produtos">
          <img src="../assets/img/Acessorios/bolsa.webp" alt="Bolsa" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
        <div class="produtos">
          <img src="../assets/img/Acessorios/touca.webp" alt="Touca" />
          <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
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
<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      showMoreDetails() {
        alert(`Mais detalhes sobre: ${this.product.name}`);
      },
      addToCart() {
        alert(`${this.product.name} foi adicionado ao carrinho!`);
      },
    },
  };
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
  transition: all .5s ease;
  border-radius: 5px;
}

.acessorios .mainAcessorios .mainProdutos .produtos:hover{
    transform: scale(1.01);
}

.infoProdutos{
    display: flex;
    opacity: 0;
    justify-content: space-between;
    width: 100%;
    transition: all .5s ease;
    padding: 10px 45px 20px 45px;
}

.acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos .cart-image {
    width: 36px;
    height: 36px;
  }

  .acessorios .mainAcessorios .mainProdutos .produtos .infoProdutos button{
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
