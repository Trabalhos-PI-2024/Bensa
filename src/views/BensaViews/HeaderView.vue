<template>
            <nav class="nav">
          <router-link to="/" class="close-menu"><img src="@/assets/img/Icons/excluir.png" alt=""></router-link>
          <RouterLink to="/roupas" class="routerLink">
            <p>Roupas</p>
          </RouterLink>
          <RouterLink to="/sneakers" class="routerLink">
            <p>Calçados</p>
          </RouterLink>
          <RouterLink to="/acessorios" class="routerLink">
            <p>Acessórios</p>
          </RouterLink>
          <RouterLink to="/comunidade" class="routerLink">
            <p>Comunidade</p>
          </RouterLink>
        </nav>
</template>
<style scoped>
    .nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  z-index: 1000;
}

.nav .routerLink{
    display: flex;
    padding: 0 0 5px 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #0d0d0d;
    border-bottom: 1px solid #0d0d0d;
}

.close-menu{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 24px;
    cursor: pointer;
}

.close-menu img{
    width: 30px;
}
</style>