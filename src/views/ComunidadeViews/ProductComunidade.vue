<template>
    <div class="product-page">
      <div class="product-container">
        <div class="product-image toRight">
          <img :src="comunity.image1" alt="Product Image" />
        </div>
        <div class="product-details toLeft">
          <div class="product-rating">
            <span>★★★★★</span>
            <span class="rating-count">(120)</span>
            <p class="rating-link">Avaliações</p>
          </div>
          <h1 class="product-name">{{ comunity.name }}</h1>
          <p class="product-price">
            R${{ comunity.price }}
            <span class="installments">ou em até 12x de R${{ (comunity.price / 12).toFixed(2) }}</span>
          </p>
          <div class="divSizes">
            <button class="size">{{ comunity.selectedSize }}</button>
          </div>
          <router-link to="/chat" @click="carrinhoStore.addCarrinho(comunity)" class="buy-button">Chat com o Vendedor</router-link>
        </div>
      </div>
  
      <div class="product-description hidden">
        <h2>Descrição</h2>
        <p>{{ comunity.descricao }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importando funções necessárias do Vue e outras dependências
  import { onMounted, ref } from 'vue'; // 'onMounted' para realizar ações após o componente ser montado, 'ref' para criar variáveis reativas
  import { useComunidadeStore } from '@/stores/comunidade'; // Importando o store da comunidade (para acessar os dados do produto)
  import { useCarrinhoStore } from '@/stores/carrinho'; // Importando o store do carrinho (para adicionar produtos ao carrinho)
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Importando o hook para detecção de elementos visíveis (não está sendo usado aqui)

  // Utilizando o hook 'useIntersectionObserver', mas não está sendo utilizado diretamente neste componente
  useIntersectionObserver

  // Instanciando os stores de carrinho e comunidade
  const carrinhoStore = useCarrinhoStore(); // Acesso ao carrinho do usuário
  const comunidadeStore = useComunidadeStore(); // Acesso aos dados dos produtos

  // Inicializando a variável reativa 'comunity' para armazenar as informações do produto
  const comunity = ref({}); // O produto será armazenado nesta variável reativa

  // 'props' será usado para pegar o ID do produto, passado na rota (via URL ou de outro componente)
  const props = defineProps(['id']); // Definindo as propriedades que serão passadas para o componente, neste caso, 'id'

  // Usando 'onMounted' para pegar o produto ao montar o componente, com base no 'id' passado
  onMounted(() => {
    // Buscando os detalhes do produto usando o método 'getProductById' do store da comunidade, com o ID fornecido
    comunity.value = comunidadeStore.getProductById(props.id);
  });
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
  
  .product-details .divSizes .size {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid #0d0d0d;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
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
  