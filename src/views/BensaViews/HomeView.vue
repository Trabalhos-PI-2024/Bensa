<template>
  <section>
    <div class="marcas"></div>
    <MarcasComponente />
    <div class="banner">
      <img src="/src/assets/img/Banners/BENSA STREETWEAR.jpg" alt="banner">
      <img src="/src/assets/img/Banners/BENSA STREETWEAR1.jpg" alt="banner">
      <div class="subtitles">
        <h1>BENSA - STREETWEAR</h1>
      <p>Onde o Caos Reina o Estilo Prevalece</p>
    </div>
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

<style scoped>
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

.subtitles{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  color: #fff;
  margin: 45dvh 0 0 0;
}

.subtitles h1{
  font-size: 3dvw;
  letter-spacing: 2px;
}

.subtitles p{
  font-size: 1.9dvw;
  letter-spacing: 1.5px;
}

.banner {
  background: #0E0E0E;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner img:nth-child(1){
  display: none;
}

.banner img:nth-child(2){
  display: block;
}

.banner img {
  width: 80%;
  height: 70dvh;
  object-fit: cover;
}

@media (max-width: 1400px) {
  .banner img {
  width: 100%;
  object-fit: cover;
}
.banner img:nth-child(1){
  display: block;
}
.banner img:nth-child(2){
  display: none;
}
  }
  
@media (max-width: 800px) {
  .subtitles h1{
  font-size: 22px;
  letter-spacing: 2px;
}

.subtitles p{
  font-size: 16px;
  letter-spacing: 1.5px;
}
  }

  @media (max-width: 360px) {
  .subtitles h1{
  font-size: 18px;
  letter-spacing: 2px;
}

.subtitles p{
  font-size: 13px;
  letter-spacing: 1.5px;
}
  }
</style>
