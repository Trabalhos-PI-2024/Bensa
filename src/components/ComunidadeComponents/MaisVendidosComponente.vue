<template>
  <div class="releases-container">
    <div class="releases-list">
      <div v-for="(release, index) in releases" :key="index" class="release-item">
        <div class="release-details">
          <img :src="release.image" alt="Tênis" class="release-image" />
          <div class="release-info">
            <span class="release-name">{{ release.name }}</span>
            <div class="release-price">R$ {{ release.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const releases = ref([
  {
    price: '1.499,00',
    name: 'Travis Scott x Air Jordan 1 Low OG SP Velvet Brown',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '999,00',
    name: 'New Balance 9060 Slate Grey Raincloud',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '999,00',
    name: 'New Balance 9060 Sparrow Flat Taupe',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '749,00',
    name: 'adidas Gazelle Indoor Collegiate Purple Cloud White',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '699,00',
    name: 'Bob Marley x adidas SL 72 RS Core Black Cloud White',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '649,00',
    name: 'Nike Dunk Low Twist Olive Black',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '799,00',
    name: 'Bad Bunny x adidas Gazelle Indoor Messi Cardboard Cream White',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
  {
    price: '299,00',
    name: 'Slide Rider R Next Preto',
    image: 'https://droper-media.us-southeast-1.linodeobjects.com/1972023192352558.webp',
  },
]);
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
}

.release-details {
  display: flex;
  align-items: center;
}

.release-item:nth-child(7), .release-item:last-child {
  border-bottom: 1px solid transparent;
}

.release-image {
  width: 100px;
  margin-right: 10px;
}

.release-info {
  display: flex;
  flex-direction: column;
}

.release-name {
  font-size: 1rem;
  font-weight: bold;
}

.release-price {
  margin-top: 5px;
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
