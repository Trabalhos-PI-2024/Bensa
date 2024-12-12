<template>
  <div class="page-container">
    <div class="logo-container hidden">
      <img src="/src/assets/img/Logos/adidas.svg" alt="Adidas Logo" class="adidas-logo" />
    </div>
    <div class="main-content">
      <aside class="filter-container hidden">
        <input
          type="text"
          placeholder="Filtrar produtos"
          class="filter-input"
          v-model="filterText"
        />
      </aside>
      <div class="product-list">
        <div
          class="product-item hidden"
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        >
          <button class="btn-more" @click="visualizar(product.id)">
            <img :src="product.image1" :alt="product.name" class="product-image" />
          </button>
          <div class="buttons">
            <div>
              <h3>{{ product.name }}</h3>
              <p>R${{ product.price }}</p>
            </div>
            <button class="btn-cart" @click="carrinhoStore.addCarrinho(product)">
              <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho" class="cart-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Importando os hooks e stores necessários do Vue e outras dependências
  import { ref, computed } from 'vue' // Usando ref e computed do Vue para propriedades reativas
  import { useProductStore } from '@/stores/products' // Store para acessar os produtos
  import { useCarrinhoStore } from '@/stores/carrinho' // Store para manipular o carrinho de compras
  import { useRouter } from 'vue-router' // Para navegar entre as páginas
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Hook personalizado para observação de interseção de elementos

  // Utilizando o hook de IntersectionObserver (provavelmente para manipulação de visibilidade de elementos enquanto o usuário rola a página)
  useIntersectionObserver()

  // Instanciando o store do carrinho
  const carrinhoStore = useCarrinhoStore()

  // Instanciando o router para navegação
  const router = useRouter()

  // Função para redirecionar o usuário para a página de detalhes do produto
  function visualizar(id) {
    router.push(`/produto/${id}`) // Navega para a página do produto específico
  }

  // Instanciando o store dos produtos
  const productStore = useProductStore()

  // Definindo a propriedade reativa filterText para o filtro de produtos
  const filterText = ref('')

  // Computed que retorna os produtos filtrados com base no filtro de texto e somente produtos da Adidas
  const filteredProducts = computed(() => 
    productStore.products.filter(product => 
      product.adidas && // Filtra somente os produtos da Adidas
      (!filterText.value || product.name.toLowerCase().includes(filterText.value.toLowerCase())) // Aplica o filtro de texto se houver
    )
  );
</script>



<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header {
  width: 100%;
}

.logo-container {
  margin: 20px 0;
}

.adidas-logo {
  width: 150px;
  height: auto;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.buttons div h3 {
  font-size: 14px;
  font-weight: 600;
}

.buttons div p {
  color: #025213;
  font-weight: 600;
  font-size: 13px;
}

.filter-container {
  width: 100%;
  max-width: 600px;
  padding: 10px;
  box-sizing: border-box;
}

.filter-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1500px;
}

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
  transition: all 0.3s ease-in-out;
}

.product-item:hover {
  transform: scale(1.01) translateY(-5px);
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

.buttons h3 {
  font-size: 14px;
  font-weight: 600;
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
</style>