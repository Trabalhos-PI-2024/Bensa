<template>
    <div class="comunidade-page">
        <h1>Mais Vendidos</h1>
        <CarroselComponente />
        <div class="titulo-container">
            <h3 class="titulo-calçados">Lançamentos</h3>
        </div>
        <MaisVendidosComponente/>

        <div class="boxContainer">
            <div>
        <div class="banner">
            <img src="../assets/img/teniscomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Calçados</h3>
        </div>
    </div>

        <CarroselComponente />
        <MaisVendidosComponente/>

    </div>

        <div class="boxContainer">
            <div>
        <div class="banner">
            <img src="../assets/img/roupascomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Roupas</h3>
        </div>
    </div>


        <CarroselComponente />
        <MaisVendidosComponente/>
    </div>
    <div class="boxContainer">
        <div>
        <div class="banner">
            <img src="../assets/img/acessoriocomunidade.webp" alt="Banner da Comunidade" />
        </div>
        <div class="titulo-container">
            <h3 class="titulo-calçados">Acessórios</h3>
        </div>
    </div>
        <CarroselComponente />
    <MaisVendidosComponente/>
</div>
    </div>
</template>

<script setup>
import CarroselComponente from './CarroselComponente.vue';
import MaisVendidosComponente from './MaisVendidosComponente.vue';
</script>

<style scoped>

.boxContainer{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 30px;
}

.boxContainer div{
    width: 90%;
}
.comunidade-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
}

.banner {
    width: 100%;
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