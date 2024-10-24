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
</style>