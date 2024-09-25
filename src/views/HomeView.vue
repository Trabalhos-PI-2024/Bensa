<template>
  <div>
    <MarcasComponente />
    <div class="banner">
      <img src="../assets/img/banner.jpg" alt="banner">
    </div>
  </div>
</template>

<script setup>
import MarcasComponente from '@/components/MarcasComponente.vue';

</script>

<style>
.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.banner img {
  width: 100%;
  max-height: 930px;;
  object-fit: cover;
}
</style>
