<template>
    <div class="card-produto">
      <img :src="produto.imagem " alt="Imagem do Produto" class="imagem-produto" />
      <div class="conteudo-produto">
        <div class="info-esquerda">
          <h3>{{ produto.nome }}</h3>
          <p>R$ {{ produto.preco.toFixed(2) }}</p>
        </div>
        <span :class="statusClass">{{ statusTexto }}</span>
      </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'ProductCard',
    props: {
        produto: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const statusClass = computed(() =>
            props.produto.vendido ? 'status-vendido' : 'status-a-venda'
        );

        const statusTexto = computed(() =>
            props.produto.vendido ? 'Vendido' : 'À Venda'
        );

        return { statusClass, statusTexto };
    },
};
</script>

<style scoped>
.card-produto {
    width: calc(33.333% - 20px); /* Ajusta a largura do card para 3 por linha */
  margin: 10px; /* Margem para espaçamento entre os cards */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px;
  background-color: white;
  transition: transform 0.2s;
}

.card-produto:hover {
    transform: scale(1.02); /* Efeito de zoom ao passar o mouse */
}

.imagem-produto {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
}

.conteudo-produto {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: flex-end;
    width: 100%;
}

.info-esquerda h3 {
    margin: 0;
    font-size: 16px;
}

.info-esquerda p {
    margin: 5px 0;
    font-weight: bold;
}

.status-vendido {
    color: green;
    font-weight: bold;
}

.status-a-venda {
    color: orange;
    font-weight: bold;
}
</style>
