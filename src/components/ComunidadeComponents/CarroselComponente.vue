<template>
  <div class="navegacao">
    <button @click="moverEsquerda" class="btn-navegacao">&#9664;</button>
    <div class="produtos-container">
      <div class="card-produto" v-for="produto in produtosVisiveis" :key="produto.id">
        <button class="btn-more" @click="visualizar(produto.id)">
          <img :src="produto.image1" alt="Produto" class="imagem-produto" />
        </button>
        <div class="informacoes">
          <h4 class="nome-produto">{{ produto.name }}</h4>
          <div class="preco-container">
            <span class="preco">R$ {{ produto.price }}</span>
            <button class="botao-sacola" @click="adicionarNaSacola">
              <img src="/src/assets/img/Icons/carrinho.svg" alt="Adicionar à Sacola" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <button @click="moverDireita" class="btn-navegacao">&#9654;</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useComunidadeStore } from '@/stores/comunidade'
import { useRouter } from 'vue-router'

const comunidadeStore = useComunidadeStore()

const router = useRouter()

function visualizar(id) {
  router.push(`/produto/${id}`)
}

const indexAtual = ref(0)
const produtosPorPagina = ref(4)

const produtosVisiveis = computed(() => {
  return comunidadeStore.comunidade.slice(indexAtual.value, indexAtual.value + produtosPorPagina.value)
})

const moverEsquerda = () => {
  if (indexAtual.value > 0) {
    indexAtual.value -= produtosPorPagina.value
  }
}

const moverDireita = () => {
  if (indexAtual.value + produtosPorPagina.value < comunidadeStore.comunidade.length) {
    indexAtual.value += produtosPorPagina.value
  }
}

const atualizarProdutosPorPagina = () => {
  const larguraTela = window.innerWidth

  if (larguraTela >= 1200) {
    produtosPorPagina.value = 4
  } else if (larguraTela >= 910) {
    produtosPorPagina.value = 3
  } else if (larguraTela >= 650) {
    produtosPorPagina.value = 2
  } else {
    produtosPorPagina.value = 1
  }
}

window.addEventListener('resize', atualizarProdutosPorPagina)
atualizarProdutosPorPagina()
</script>

<style scoped>
.navegacao {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-more {
  background-color: #ffff;
}

.btn-navegacao {
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
}

.produtos-container {
  display: flex;
  overflow: hidden;
  padding: 10px;
  transition: transform 0.5s ease;
}

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
  color: #025213;
  font-weight: 600;
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

@media (max-width: 768px) {
  .imagem-produto {
    width: 85%;
  }

  .card-produto {
    width: 230px;
  }
}
</style>
