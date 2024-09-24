<template>
    <div class="acessorios">
        <div class="mainAcessorios">
            <div class="title">
                <h3>Acessórios</h3>
            </div>
            <div class="mainProdutos">
                <div class="produtos">
                    <img src="../assets/img/Acessorios/bag.jpg" alt="Bag" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/Acessorios/cap.webp" alt="Cap" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/Acessorios/bolsa.webp" alt="Bolsa" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/Acessorios/touca.webp" alt="Touca" />
                </div>
            </div>
        </div>
        <div class="imgAcessorios">
            <img src="../assets/img/Acessorios/Acessorios.webp" alt="Acessórios">
        </div>
    </div>
</template>

<style>
    .acessorios {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 0;
        gap: 10px;
    }

    .acessorios .mainAcessorios {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }

    .acessorios .mainAcessorios .title h3 {
        font-size: 22px;
    }

    .acessorios .mainAcessorios .mainProdutos {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .acessorios .mainAcessorios .mainProdutos .produtos {
        width: 280px;
        height: 280px;
        border: 1px solid #e7e7e7;
    }

    .acessorios .mainAcessorios .mainProdutos .produtos img {
        width: 278px;
        height: 278px;
    }

    .acessorios .imgAcessorios {
        border: 1px solid #e7e7e7;
        width: 550px;
        height: 572px;
        transform: translateX(-120px); 
        margin-top: 20px;
    }

    .acessorios .imgAcessorios img {
        width: 550px;
        height: 570px;
    }
</style>
