<template>
    <div class="acessorios">
        <div class="mainAcessorios">
            <div class="title">
                <h3>Acessórios</h3>
            </div>
            <div class="mainProdutos">
                <div class="produtos">

                </div>
                <div class="produtos">
                    
                </div>
                <div class="produtos">
                    
                </div>
                <div class="produtos">
                    
                </div>
            </div>
        </div>
        <div class="imgAcessorios">
            <img src="#" alt="">
        </div>
    </div>
</template>

<style>
    .acessorios{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 0;
        gap: 20px;
    }
    .acessorios .mainAcessorios{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }

    .acessorios .mainAcessorios .title h3{
        font-size: 22px;
    }

    .acessorios .mainAcessorios .mainProdutos{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .acessorios .mainAcessorios .mainProdutos .produtos{
        width: 150px;
        height: 150px;
        border: 1px solid ;
        background: #e7e7e7;
    }

    .acessorios .imgAcessorios{
        border: 1px solid;
        width: 450px;
        height: 500px;
    }
</style>