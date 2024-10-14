<template>
  <div class="product-item">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="buttons">
      <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
      <button class="btn-cart" @click="addToCart">
        <img src="../assets/img/carrinho.svg" alt="Carrinho" class="cart-image" />
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const showMoreDetails = () => {
  alert(`Mais detalhes sobre: ${props.product.name}`);
};

const addToCart = () => {
  alert(`${props.product.name} foi adicionado ao carrinho!`);
};
</script>

<style scoped>
.product-item {
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
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

button {
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.btn-more {
  color: black;
  padding: 10px 20px;
  background-color: #ffff;
}

.btn-cart {
  background: none;
  padding: 0;
}

.cart-image {
  width: 36px;
  height: 36px;
}

button:hover {
  opacity: 0.9;
}
</style>
