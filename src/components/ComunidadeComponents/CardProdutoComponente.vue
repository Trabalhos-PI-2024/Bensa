<template>
  <div class="card-produto">
    <img :src="produto.imagem" alt="Produto" class="imagem-produto" />
    <div class="informacoes">
      <h4 class="nome-produto">{{ produto.nome }}</h4>
      <div class="preco-container">
        <span class="preco">R$ {{ produto.preco.toFixed(2) }}</span>
        <button class="botao-sacola" @click="adicionarNaSacola">
          <img src="/src/assets/img/Icons/carrinho.svg" alt="Adicionar à Sacola" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['produto']);

const adicionarNaSacola = () => {
  alert(`Produto foi adicionado à sacola!`);
};
</script>

<style scoped>
.card-produto {
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
  transition: all .5s ease;
}

.card-produto:hover {
  transform: scale(1.05);
}

.imagem-produto {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.informacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.preco-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
}

.preco {
  font-size: 14px;
  color: #333;
}

.botao-sacola {
  background: none;
  border: none;
  cursor: pointer;
}

.botao-sacola img {
  width: 20px;
  height: 20px;
}
</style>