<template>
    <header>
        <div class="mainHeader">
            <div class="logo">
                <RouterLink to="/"><img src="../assets/img/Design sem nome (3).png" alt=""></RouterLink>
            </div>
            <nav class="nav">
                <RouterLink to="/">
                    <p>Roupas</p>
                </RouterLink>
                <RouterLink to="/">
                    <p>Calçados</p>
                </RouterLink>
                <RouterLink to="/">
                    <p>Acessórios</p>
                </RouterLink>
            </nav>
            <div class="icon">
                <button type="button">usuario</button>
                <button type="button">carrinho</button>
            </div>
        </div>
        <div class="allMarcas">
            <div class="marcas">
                <RouterLink to="/"><img src="../assets/img/nike.png" alt=""></RouterLink>
            </div>
            <div class="marcas">
                <RouterLink to="/"><img src="../assets/img/adidas.jpg" alt=""></RouterLink>
            </div>
            <div class="marcas">
                <RouterLink to="/"><img src="../assets/img/vans.jpg" alt=""></RouterLink>
            </div>
            <div class="marcas">
                <RouterLink to="/"><img src="../assets/img/stussy.webp" alt=""></RouterLink>
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#header .mainHeader {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #0d0d0d;
}

#header .mainHeader .logo img {
    width: 150px;
}

#header .mainHeader .nav {
    display: flex;
    gap: 20px;
    margin-right: 100px;
}

zheader .mainHeader .nav p {
    color: #0d0d0d;
}

#header .mainHeader .icon {
    display: flex;
    gap: 10px;
}

#header .allMarcas {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 75px;
}

#header .allMarcas .marcas img {
    width: 115px;
}
</style>
