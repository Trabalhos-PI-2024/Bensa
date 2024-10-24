<template>
  <section>
    <div class="marcas"></div>
    <MarcasComponente />
    <div class="banner">
      <img src="/src/assets/img/Banners/BENSA STREETWEAR.png" alt="banner">
    </div>

    <div class="lancamentos">
      <LancamentosComponente />
    </div>
    <div class="acessorios">
      <AcessoriosComponente />
    </div>
    <div class="roupas">
      <RoupasComponente />
    </div>
    <div class="ofertas">
      <OfertasComponente />
    </div>
  </section>
</template>

<script setup>
import MarcasComponente from '@/components/BensaComponents/MarcasComponente.vue'
import LancamentosComponente from '@/components/BensaComponents/LancamentosComponente.vue'
import AcessoriosComponente from '@/components/BensaComponents/AcessoriosComponente.vue'
import OfertasComponente from '@/components/BensaComponents/OfertasComponente.vue';
import RoupasComponente from '@/components/BensaComponents/RoupasComponente.vue';

</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

section {
  background: #ffffff;
  width: 100%;
}

.banner {
  width: 100%;
}

.banner img {
  width: 100%;
  height: 75dvh;
  object-fit: cover;
}
</style>
