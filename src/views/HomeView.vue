<template>
  <section>
    <div class="marcas"></div>
    <MarcasComponente />
    <div class="banner">
      <img src="../assets/img/BENSA STREETWEAR.png" alt="banner">
    </div>
  
    <div class="lancamentos">
      <LancamentosComponente/>
    </div>
    <div class="acessorios">
      <AcessoriosComponente/>
    </div>
    <hr>
    <div class="roupas">
      <RoupasComponente/>
    </div>
    <div class="ofertas">
      <OfertasComponente />
    </div>
  </section>
</template>

<script setup>

import MarcasComponente from '../components/MarcasComponente.vue'
import LancamentosComponente from '../components/LancamentosComponente.vue'
import AcessoriosComponente from '../components/AcessoriosComponente.vue'
import OfertasComponente from '../components/OfertasComponente.vue';
import RoupasComponente from '../components/RoupasComponente.vue';
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

section {
  width: 100%;
  padding: 0;
  margin: 0;
}

.banner {
  padding: 0;
  margin: 0;
  width: 100%;
}

.banner img {
  width: 100%;
  height: 800px;
  object-fit: cover;
}

hr {
  border: 1px solid #e7e7e7;
  width: 100%;
  margin: 20px 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

</style>
