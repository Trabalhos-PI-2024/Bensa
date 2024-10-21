<template>
    <div class="product-page">
      <div class="product-container">
        <div class="product-image">
          <img :src="product.image1" alt="Product Image" />
        </div>
        <div class="product-details">
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="rating-count">(120)</span>
            <p class="rating-link">Avaliações</p>
          </div>
          <h1 class="product-name">{{product.name}}</h1>
          <p class="product-price">
            R${{product.price}},99
            <span class="installments">ou em até 12x de R${{ (product.price / 12).toFixed(2) }}</span>
          </p>
          
          <div class="size-selection">
            <label>Tamanho:</label>
            <div class="size-options">
              <label>
                <input type="radio" v-model="selectedSize" :value="size" />
                P
              </label>
              <label>
                <input type="radio" v-model="selectedSize"/>
                M
              </label>
              <label>
                <input type="radio" v-model="selectedSize" :value="size" />
                G
              </label>
              <label>
                <input type="radio" v-model="selectedSize" :value="size" />
                GG
              </label>
            </div>
          </div>
  
          <button @click="addToCart" class="buy-button">Adicionar ao Carrinho</button>
        </div>
      </div>
  
      <div class="product-description">
        <h2>Descrição</h2>
        <p>{{ product.descricao }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    import { onMounted, ref } from 'vue';
    import { useProductStore } from '@/stores/products';

    const productStore = useProductStore()
    const product = ref({})
    const props = defineProps(['id'])

    onMounted(() =>{
        product.value = productStore.getProductById(props.id)
    })
  
  const selectedSize = ref('M');
  
  const addToCart = () => {
    console.log(`Produto ${product.name} de tamanho ${selectedSize.value} adicionado ao carrinho!`);
  };
  
  </script>
  
  <style scoped>
  .product-page {
    max-width: 800px;
    margin: 30px auto;
    padding: 10px;
  }
  
 .product-container {
  display: flex;
  justify-content: space-between; /* Garante que a imagem e os detalhes fiquem afastados */
}

.product-image {
  flex: 1;
  margin-right: 20px; /* Adiciona um espaçamento entre a imagem e os detalhes */
}

.product-details {
  flex: 2; /* Aumenta o espaço do lado direito */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Garante que o conteúdo seja espaçado verticalmente */
  margin-left: 5%;
}

.product-description {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  margin: 80px 0px 30px 0px;
  border: 1px solid;
}

.product-description p{
  width: 100%;
}

  .product-image img {
    width: 20dvw;
    border-radius: 8px;
  }
  
  .product-rating {
    display: flex;
    align-items: center;
  }
  
  .rating-count {
    margin-left: 10px;
  }
  
  .rating-link {
    margin-left: 10px;
  }
  
  .product-name {
    font-size: 2em;
    margin: 10px 0;
  }
  
  .product-price {
    font-weight: bold;
    margin: 10px 0;
  }
  
  .size-selection {
    margin: 10px 0;
  }
  
  .size-options {
  display: flex;
  gap: 10px; /* Espaçamento entre as opções de tamanho */
}

.size-options label {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px; /* Um leve arredondamento nos cantos para um estilo quadrangular */
  cursor: pointer;
  text-align: center;
  background-color: white;
  transition: background-color 0.3s, border-color 0.3s;
}

.size-options input[type="radio"] {
  display: none; /* Esconde o botão de rádio padrão */
}

.size-options input[type="radio"]:checked + label {
  background-color: #000; /* Cor de fundo preta quando selecionado */
  color: white; /* Cor do texto em branco quando selecionado */
  border-color: #000; /* Borda preta quando selecionado */
}

.size-options label:hover {
  background-color: #f0f0f0;
  border-color: #000; /* Borda preta ao passar o mouse */
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
  </style>
  