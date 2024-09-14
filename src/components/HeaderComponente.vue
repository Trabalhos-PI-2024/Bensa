<template>
    <header>
        <div class="mainHeader">
            <div class="logo">
                <RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo"></RouterLink>
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
                <RouterLink to="/usuario">
                    <img src="../assets/img/user.svg" alt="Usuário">
                </RouterLink>
                <RouterLink to="/carrinho">
                    <img src="../assets/img/carrinho.svg" alt="Carrinho">
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<style>
header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
}

.mainHeader {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #e0dbdb;
    background-color: #ffffff;
    position: relative;
}

.logo img {
    width: 150px;
}

.logo {
    margin-left: 100px;
}

.nav {
    display: flex;
    align-items: center;
    gap: 60px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: 600px;
}

.nav a {
    text-decoration: none;
}

.nav p {
    color: #0d0d0d;
    margin: 0;
    cursor: pointer;
    font-size: 20px;
}

.icon {
    display: flex;
    gap: 30px;
    position: absolute;
    right: 200px;
}

.icon img {
    width: 40px;
    height: auto;
}

@media (max-width: 768px) {
    .mainHeader {
        flex-direction: column;
        text-align: center;
    }

    .nav {
        gap: 30px;
        position: static;
        transform: none;
        max-width: none;
    }

    .icon img {
        width: 24px;
    }
}
</style>
