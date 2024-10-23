<template>
    <div class="banner">
        <img src="../assets/img/bannercomunidade.webp" alt="banner">
    </div>
    <HomeComunidadeComponente/>
</template>
<script setup>
import HomeComunidadeComponente from '@/components/HomeComunidadeComponente.vue';
</script>
<style scoped>
.banner {
    width: 100%;
}

.banner img {
    width: 100%;
    object-fit: cover;
    height: 60dvh;
    
}
</style>