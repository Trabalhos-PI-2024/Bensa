<template>
    <div class="comunidade-page">
        <h1>Mais Vendidos</h1>
        <CarroselComponente />

        <div class="banner">
            <img src="../assets/img/teniscomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Calçados</h3>
        </div>

        <CarroselComponente />

        <div class="banner">
            <img src="../assets/img/roupascomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Roupas</h3>
        </div>

        <CarroselComponente />

        <div class="banner">
            <img src="../assets/img/acessoriocomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Acessórios</h3>
        </div>
    </div>
    <CarroselComponente />
</template>

<script setup>
import CarroselComponente from './CarroselComponente.vue';
</script>

<style scoped>
.comunidade-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}

.banner {
    width: 90%;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner img {
    width: 100%;
    height: 57vh;
    border-radius: 8px;
}

.titulo-container {
    width: 90%;
    display: flex;
    justify-content: flex-start;
}

.titulo-calçados {
    margin: 10px 0;
    font-size: 56px;
    font-weight: bold;
    display: flex;
    align-items: center;
    width: 90%;
    line-height: 1;
    width: 90%;
}
</style>