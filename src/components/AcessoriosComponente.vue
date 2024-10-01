<template>
  <div class="acessorios">
    <div class="mainAcessorios">
      <div class="title">
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
      </div>
    </div>
    <div class="imgAcessorios">
      <img src="../assets/img/Acessorios/Acessorios.webp" alt="Acessórios" />
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
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 10px;
}

.acessorios .mainAcessorios {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

.acessorios .mainAcessorios .title h3 {
  font-size: 22px;
}

.acessorios .mainAcessorios .mainProdutos {
  width: 50%;
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
  transition: all .5s ease;
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
    padding: 0 45px 20px 45px;
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
  width: 278px;
  height: 278px;
}

.acessorios .imgAcessorios {
  border: 1px solid #e7e7e7;
  width: 550px;
  height: 572px;
  transform: translateX(-120px);
  margin-top: 20px;
}

.acessorios .imgAcessorios img {
  width: 550px;
  height: 570px;
  border: 1px solid #e7e7e7;
}
</style>
