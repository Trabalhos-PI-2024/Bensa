<template>
    <div class="releases-container">
      <div class="releases-list">
        <div v-for="(release, index) in releases" :key="index" class="release-item">
          <div class="release-date">{{ release.date }}</div>
          <div class="release-details">
            <img :src="release.image" alt="Tênis" class="release-image" />
            <span class="release-name">{{ release.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Lista de lançamentos completa
  const releases = ref([
    {
      date: '22 out/24',
      name: 'Travis Scott x Air Jordan 1 Low OG SP Velvet Brown',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'New Balance 9060 Slate Grey Raincloud',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'New Balance 9060 Sparrow Flat Taupe',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'adidas Gazelle Indoor Collegiate Purple Cloud White',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'Bob Marley x adidas SL 72 RS Core Black Cloud White',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'Nike Dunk Low Twist Olive Black',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'Bad Bunny x adidas Gazelle Indoor Messi Cardboard Cream White',
      image: 'link-para-imagem',
    },
    {
      date: '21 out/24',
      name: 'Slide Rider R Next Preto',
      image: 'link-para-imagem',
    },

  ]);
  </script>
  
  <style scoped>
  .releases-container {
    padding: 0 20px 10px 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  
  .releases-list {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Duas colunas */
    gap: 10px;
  }
  
  .release-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .release-item:nth-child(7), .release-item:last-child {
    border-bottom: 1px solid transparent;
  }
  
  .release-date {
    font-size: 0.9rem;
    color: #888;
  }
  
  .release-details {
    display: flex;
    align-items: center;
  }
  
  .release-image {
    width: 100px;
    margin-right: 10px;
  }
  
  .release-name {
    font-size: 1rem;
    font-weight: bold;
  }
  </style>
  