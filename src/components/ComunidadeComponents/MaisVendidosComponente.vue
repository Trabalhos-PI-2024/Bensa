<template>
  <div class="releases-container">
    <div class="releases-list">
      <div v-for="release in releases" :key="release.id" class="release-item">
        <button class="btn-more" @click="visualizar(release.id)">
        <div class="release-details">
          <img :src="release.image1" alt="Tênis" class="release-image" />
          <div class="release-info">
            <span class="release-name">{{ release.name }}</span>
            <div class="release-price">R$ {{ release.price }}</div>
          </div>
        </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useComunidadeStore } from '@/stores/comunidade';
import { useRouter } from 'vue-router';

const comunidadeStore = useComunidadeStore();
const router = useRouter();

// Acesso aos produtos da loja e filtragem para apenas os lançamentos
const releases = computed(() => {
  return comunidadeStore.comunidade.filter(comunidade => comunidade.lancamento === true);
});

// Função para visualizar o produto
function visualizar(id) {
  router.push(`/produto/${id}`);
}
</script>

<style scoped>
.releases-container {
  padding: 0 20px 10px 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.releases-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.release-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 500px;
}

.release-details {
  display: flex;
  align-items: center;
}

.release-image {
  width: 100px;
  margin-right: 10px;
}

.release-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.release-name {
  font-size: 1rem;
  font-weight: bold;
}

.release-price {
  margin-top: 5px;
  color: #025213;
  font-weight: 600;
}

.btn-more {
  background-color: #ffff;
}

@media (max-width: 1100px) {
  .release-item {
  width: auto;
}
}

@media (max-width: 600px) {
  .releases-list {
    grid-template-columns: 1fr;
  }

  .release-details {
    flex-direction: column;
  }
}
</style>
