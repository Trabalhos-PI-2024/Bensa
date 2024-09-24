<script>
import HeaderComponente from './components/HeaderComponente.vue';

export default {
  components: {
    HeaderComponente
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

      this.camisas = data.camisas;
      this.calcas = data.calcas;
      this.agasalhos = data.agasalhos;

    }
  },
  mounted() {
    this.getCatalogo()
  }
}

</script>

<template>
<HeaderComponente/>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{  font-family: "Poppins", sans-serif;
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
}
a{
  text-decoration: none;
}

</style>