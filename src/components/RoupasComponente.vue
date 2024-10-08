<template>
    <div class="roupas">
        <div class="imgRoupas">
            <img src="../assets/img/roupas/Roupa.jpg" alt="Imagem de Roupas">
        </div>
        <div class="mainRoupas">
            <div class="title">
                <h3>Roupas</h3>
            </div>
            <div class="mainProdutos">
                <div class="produtos">
                    <img src="../assets/img/roupas/fuck.webp" alt="" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/roupas/jacket.webp" alt="" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/roupas/calca.webp" alt="" />
                </div>
                <div class="produtos">
                    <img src="../assets/img/roupas/moletom.webp" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.roupas {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
}

.roupas .imgRoupas {
    border: 1px solid #e7e7e7;
    width: 552px;
    height: 572px;
    transform: translateX(310px);
    /* Move 30px para a direita */
}

.roupas .imgRoupas img {
    width: 550px;
    height: 570px;
}

.roupas .mainRoupas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    transform: translateX(200px);
    /* Move 20px para a esquerda */
}

.roupas .mainRoupas .title h3 {
    font-size: 22px;
}

.roupas .mainRoupas .mainProdutos {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
}

.roupas .mainRoupas .mainProdutos .produtos {
    width: 280px;
    height: 280px;
    border: 1px solid #e7e7e7;
}

.roupas .mainRoupas .mainProdutos .produtos img {
    width: 278px;
    height: 278px;
}
</style>
