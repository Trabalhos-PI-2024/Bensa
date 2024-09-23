<template>
  <section>
  <div class="marcas">
    <MarcasComponente />
  </div>
  <div class="lancamentos">
    <LancamentosComponente/>
  </div>
  <div class="acessorios">
    <AcessoriosComponente/>
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
</script>

<style>

</style>