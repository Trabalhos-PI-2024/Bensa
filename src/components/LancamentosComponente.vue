<template>
  <div class="lancamentos">
    <div class="title">
      <h3>Lançamentos</h3>
    </div>
    <div class="mainProdutos">
      <div class="product">
        <div class="imgProdutos">
        <img class="img1" src="../assets/img/Lancamentos/adi2000.webp" alt="" />
        <img class="img2" src="../assets/img/Lancamentos/adidas2000.webp" alt="" />
      </div>
        <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
      </div>
      <div class="product">
        <div class="imgProdutos">
          <img class="img1" src="../assets/img/Lancamentos/nb.webp" alt="" />
        <img class="img2" src="../assets/img/Lancamentos/nbb.webp" alt="" />
      </div>
        <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
      </div>
      <div class="product">
        <div class="imgProdutos">
          <img class="img1" src="../assets/img/Lancamentos/jordan.webp" alt="" />
        <img class="img2" src="../assets/img/Lancamentos/jordan1.webp" alt="" />
      </div>
        <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
      </div>
      <div class="product">
        <div class="imgProdutos">
          <img  class="img1" src="../assets/img/Lancamentos/samba.webp" alt="" />
        <img class="img2" src="../assets/img/Lancamentos/samba1.webp" alt="" />
      </div>
        <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
      </div>
      <div class="product">
        <div class="imgProdutos">
          <img class="img1" src="../assets/img/Lancamentos/force.webp" alt="" />
        <img class="img2" src="../assets/img/Lancamentos/force1.webp" alt="" />
      </div>
        <div class="infoProdutos">
            <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
            <button class="btn-cart" @click="addToCart">
              <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
      </div>
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
.lancamentos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;

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

.lancamentos .mainProdutos  .product:hover{
  transform: scale(1.03);
}

.lancamentos .mainProdutos .product img {
  width: 207px;
  height: 207px;
}

.lancamentos .mainProdutos .product .imgProdutos .img2{
  display: none;
}

.lancamentos .mainProdutos  .product:hover .imgProdutos .img1{
  display: none;
}

.lancamentos .mainProdutos  .product:hover .imgProdutos .img2{
  display: block;
}

.infoProdutos{
    display: flex;
    opacity: 0;
    justify-content: space-between;
    width: 100%;
    transition: all .5s ease;
    padding: 0 30px 10px 30px;
}
.lancamentos .mainProdutos  .product .infoProdutos .cart-image {
    width: 36px;
    height: 36px;
  }

  .lancamentos .mainProdutos  .product .infoProdutos button{
    background: transparent;
  }
  .lancamentos .mainProdutos  .product:hover .infoProdutos {
  opacity: 1;  
}

</style>