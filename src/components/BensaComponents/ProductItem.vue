<template>
  <div class="product-item">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="buttons">
      <button class="btn-more" @click="showMoreDetails">Saiba Mais</button>
      <button @click="productsStore.addCarrinho(product)" class="btt-cart">
        <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" class="cart-image" />
      </button>
    </div>
  </div>
</template>

<script setup>
// Importa a store de produtos para gerenciar o estado do carrinho
import { useProductStore } from '@/stores/products';
// Importa funções do Vue, como `defineProps` e `inject`, para lidar com propriedades e injeção de dependências
import { defineProps, inject } from 'vue';

// Define as propriedades que o componente espera receber
const props = defineProps({
  product: {
    type: Object, // O tipo de dado esperado para o produto é um objeto
    required: true, // A propriedade é obrigatória
  },
});

// Injeta a função `addToCart` para adicionar um produto ao carrinho, que foi fornecida por um componente pai
const addToCart = inject('addToCart');

// Função para lidar com a adição do produto ao carrinho, chamando a função injetada
const handleAddToCart = () => {
  // Exibe um log no console indicando que o produto está sendo adicionado ao carrinho
  console.log('Adicionando ao carrinho:', props.product);
  // Chama a função `addToCart` passando o produto como argumento
  addToCart(props.product);
};

// Função para exibir mais detalhes do produto quando o botão "Saiba Mais" é clicado
const showMoreDetails = () => {
  // Exibe um alerta com o nome do produto, indicando que mais detalhes podem ser mostrados
  alert(`Mais detalhes sobre: ${props.product.name}`);
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
