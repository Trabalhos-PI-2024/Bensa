<template>
  <div class="product-page">
    <div class="product-container">
      <div class="product-image toRight">
        <img :src="product.image1" alt="Product Image" />
      </div>
      <div class="product-details toLeft">
        <div class="product-rating">
          <span>★★★★★</span>
          <span class="rating-count">(120)</span>
          <p class="rating-link">Avaliações</p>
        </div>
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">
          R${{ product.price }}
          <span class="installments">ou em até 12x de R${{ (product.price / 12).toFixed(2) }}</span>
        </p>
        <div class="divSizes">
          <div
            class="size"
            v-for="(tamanho, index) in product.sizes"
            :key="index"
          >
            <button
              :class="{ selected: selectedSize === tamanho }"
              @click="() => selectSize(tamanho)"
            >
              {{ tamanho }}
            </button>
          </div>
        </div>
        <button
          @click="addToCart"
          :disabled="!selectedSize"
          class="buy-button"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>

    <div class="product-description hidden">
      <h2>Descrição</h2>
      <p>{{ product.descricao }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCarrinhoStore } from '@/stores/carrinho';
import { useProductStore } from '@/stores/products';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

useIntersectionObserver

const carrinhoStore = useCarrinhoStore();
const productStore = useProductStore();
const product = ref({}); // Produto carregado
const selectedSize = ref(null); // Estado do tamanho selecionado

const props = defineProps(['id']);

// Carrega o produto ao montar o componente
onMounted(() => {
  product.value = productStore.getProductById(props.id);
});

// Define o tamanho selecionado
const selectSize = (tamanho) => {
  selectedSize.value = tamanho;
};

// Adiciona o produto ao carrinho com o tamanho selecionado
const addToCart = () => {
  if (selectedSize.value) {
    carrinhoStore.addCarrinho({
      ...product.value,
      selectedSize: selectedSize.value,
    });
  }
};
</script>

<style scoped>
.product-page {
  max-width: 1100px;
  margin: 30px auto;
  padding: 10px;
}

.product-container {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 20dvw;
}

.product-details .divSizes{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px 30px;
  flex-wrap: wrap;
  max-width: 20dvw;
}

.product-details .divSizes .size button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.product-details .divSizes .size button:hover {
  border: 1px solid #0d0d0d;
}

.product-details .divSizes .size button.selected {
  border: 1px solid black;
}

.buy-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.product-description {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0px 30px 0px;
}

.product-description p {
  width: 100%;
  letter-spacing: 1.2px;
  text-align: justify;
}

.product-image{
  display: flex;
}

.product-image img {
  width: 400px;
}

.product-rating {
  display: flex;
  align-items: center;
}

.rating-count {
  margin-left: 10px;
}

.rating-link {
  margin-left: 4px;
}

.product-name {
  font-size: 2em;
  margin: 10px 0;
}

.product-price {
  font-weight: bold;
  margin: 10px 0;
}

.buy-button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #333;
}

@media (max-width: 1200px) {
  .product-details .divSizes{
  max-width: 50dvw;
}
}

@media (max-width: 900px) {
  .product-container {
flex-direction: column;
align-items: center;
gap: 0;
}

.product-description h2{
  font-size: 20px;
}

.product-description p {
  font-size: 14px;
}
.product-details .divSizes{
  max-width: 100%;
}
}

@media (max-width: 500px) {
  .product-details {
    width: 100%;
  justify-content: start;
}
  .product-details h1{
    font-size: 24px;
}

.product-details p{
    font-size: 13px;
}

.product-image img {
  width: 250px;
}
}
</style>
