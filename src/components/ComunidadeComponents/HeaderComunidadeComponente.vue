<template>
    <header>
        <div class="mainHeader">
            <div class="logo-search">
                <div class="logo">
                    <RouterLink to="/"><img src="/src/assets/img/Logos/logo.png" alt="Logo"></RouterLink>
                </div>
                <div class="search-bar">
                    <input type="text" placeholder="Pesquisar...">
                    <button class="search-button"></button>
                </div>
            </div>

            <nav class="nav">
                <RouterLink to="/roupas" class="routerLink">
                    <p>Roupas</p>
                </RouterLink>
                <RouterLink to="/sneakers" class="routerLink">
                    <p>Calçados</p>
                </RouterLink>
                <RouterLink to="/acessorios" class="routerLink">
                    <p>Acessórios</p>
                </RouterLink>
            </nav>

            <div class="icon">
                <button @click="showLogin = !showLogin" class="icon-button">
                    <img src="/src/assets/img/Icons/user.svg" alt="Usuário">
                </button>
                <button @click="mostrarEsconder" class="icon-button">
                    <img src="/src/assets/img/Icons/carrinho.svg" alt="Carrinho">
                </button>
                <router-link to="/minhaloja">
                    <button class="quero-vender-button">Quero Vender</button>
                </router-link>
            </div>
        </div>

        <LoginComponente v-if="showLogin" />
        <div class="divCarrinho" v-if="mostrar">
            <div class="fecharCarrinho">
                <button @click="mostrarEsconder">
                    <img src="/src/assets/img/Icons/excluir.png" alt="">
                </button>
            </div>
            <div class="titleCarrinho">
                <h2>CARRINHO</h2>
            </div>
            <div class="produtosCarrinho">
                <div class="closeProduto">
                    <button>
                        <img src="/src/assets/img/Icons/excluir (1).png" alt="">
                    </button>
                </div>
                <div class="infoProduto">
                    <div>
                        <p>CAMISETA NIKE NRG MAX90 BT2</p>
                        <p>R$174,99</p>
                    </div>
                    <div>
                        <input type="number">
                    </div>
                </div>
                <div class="imgProduto"><img src="/src/assets/produtos.nike/camisa3nike.webp" alt=""></div>
            </div>
            <div class="infoCarrinho">
                <div class="boxFrete">
                    <label>Calcular Frete:</label>
                    <input type="text" value="00000-000">
                </div>
                <div class="boxTotalaPagar">
                    <label>Total a Pagar: R$</label>
                    <input type="text" value="174,99">
                </div>
            </div>
            <div class="buttonComprarCarrinho">
                <button>COMPRAR</button>
            </div>
        </div>
    </header>
</template>

<script>
import LoginComponente from '@/components/BensaComponents/LoginComponente.vue';


export default {
    components: {
        LoginComponente
    },
    data() {
        return {
            showLogin: false,
            mostrar: false,
        }
    },
    methods: {
        mostrarEsconder() {
            this.mostrar = !this.mostrar
        }
    }
}
</script>

<style scoped>
.mainHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #e0dbdb;
    background-color: #ffffff;
}

.logo-search {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.logo img {
    width: 150px;
}

.search-bar {
    position: relative;
}

.search-bar input {
    padding: 14px 40px 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 70vh;
    margin-left: 5px;
    margin-right: 40px;
}

.search-bar .search-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
}

.nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav .routerLink p {
    color: #0d0d0d;
    margin: 0;
    cursor: pointer;
    font-size: 18px;
}

.icon {
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: 70px;
}

.icon-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
}

.icon-button img {
    width: 30px;
}

.divCarrinho {
    position: fixed;
    right: 0;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 40px 60px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #0d0d0d;
    z-index: 1000000;
}

.divCarrinho .titleCarrinho {
    font-size: 25px;
}

.divCarrinho .produtosCarrinho {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.divCarrinho .produtosCarrinho .closeProduto button {
    background: transparent;
}

.divCarrinho .produtosCarrinho .closeProduto img {
    width: 25px;
}

.divCarrinho .produtosCarrinho .infoProduto {
    display: flex;
    gap: 20px;
    background: #e7e7e7;
    padding: 20px;
}

.divCarrinho .produtosCarrinho .infoProduto input {
    width: 20px;
}

.divCarrinho .produtosCarrinho .imgProduto img {
    width: 100px;
}

.divCarrinho .infoCarrinho {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 7.3px;
}

.divCarrinho .infoCarrinho div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7.5px;
}

.divCarrinho .infoCarrinho .boxFrete {
    font-size: 17px;
}

.divCarrinho .infoCarrinho .boxFrete input {
    background: #e7e7e7;
    padding: 5px 10px;
    width: 95px;
}

.divCarrinho .infoCarrinho .boxTotalaPagar {
    font-size: 13px;
}

.divCarrinho .buttonComprarCarrinho button {
    padding: 10px 20px;
    background: #e7e7e7;
    border-radius: 12px;
    font-size: 19px;
    font-weight: 600;
    transition: all .5s;
}

.divCarrinho .buttonComprarCarrinho:hover button {
    transform: scale(1.1);
}

.fecharCarrinho {
    position: absolute;
    top: 40px;
    right: 40px;
}

.fecharCarrinho button {
    background: transparent;
}

.fecharCarrinho img {
    width: 40px;
}

.quero-vender-button {
    background-color: #9c1e0e;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
}

.quero-vender-button:hover {
    background-color: #69160b;
}

@media (max-width: 1100px) {
    .mainHeader {
        flex-direction: column;
        align-items: flex-start;
    }

    .logo-search,
    .nav,
    .icon {
        width: 100%;
        justify-content: center;
        margin: 10px 0;
    }

    .nav {
        flex-wrap: wrap;
        gap: 15px;
    }

    .icon {
        justify-content: flex-end;
    }
}
</style>
