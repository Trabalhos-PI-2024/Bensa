<template>
    <div class="banner">
        <img src="/src/assets/img/Banners/bannercomunidade.png" alt="banner">
    </div>
    <HomeComunidadeComponente />
</template>
<script setup>
import HomeComunidadeComponente from '@/components/ComunidadeComponents/HomeComunidadeComponente.vue';
</script>
<style scoped>
.banner {
    width: 100%;
    border: 1px solid #ccc;
}

.banner img {
    width: 100%;
    object-fit: cover;
    height: 60dvh;

}
@media (max-width: 480px) {
  .banner {
    height: 40vh; 
  }

  .banner img {
    height: 100%; 
  }
}


@media (min-width: 481px) and (max-width: 1024px) {
  .banner {
    height: 50vh; 
  }

  .banner img {
    height: 100%; 
  }
}
</style>