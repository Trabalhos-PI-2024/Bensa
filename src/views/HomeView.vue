<template>
  <div>
    <MarcasComponente />
    <div class="banner">
      <img src="../assets/img/banner.jpg" alt="banner">
    </div>
  </div>
</template>

<script>
import MarcasComponente from '@/components/MarcasComponente.vue';

export default {
  components: {
    MarcasComponente
  },
  data(){
    return{
      camisas: null,
      calcas: null,
      agasalhos: null,
      camisa: null,
      calca: null,
      agasalho: null,
      status: "Solicitado",
    }
  },
  methods: {
    async getCatalogo(){
      const req = await fetch("http://localhost:3000/catalogo");
      const data = await req.json();

    }
  },
  mounted() {
    this.getCatalogo()
  }
}
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
