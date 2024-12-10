<template>
  <div class="card-produto-venda hidden">
    <img :src="imagem" alt="Imagem do Produto" class="imagem-produto" />
    <div class="info-produto">
      <h3 class="titulo-produto">{{ titulo }}</h3>
      <p class="preco-produto">R$ {{ preco.toFixed(2) }}</p>


    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

useIntersectionObserver

defineProps({
  imagem: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  vendidoPara: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.card-produto-venda {
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

.card-produto-venda:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.imagem-produto {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
}

.info-produto {
  width: 100%;
}

.titulo-produto {
  font-size: 20px;
  margin: 0 0 8px;
}

.preco-produto {
  font-weight: bold;
  color: #2a6413;
  margin: 4px 0;
}

.vendido-para {
  font-size: 16px;
  color: #666;
  margin: 4px 0;
}
</style>