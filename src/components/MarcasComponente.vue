<template>
    <div class="allMarcas">
        <div class="marcas">
            <RouterLink to="/nike"><img src="../assets/img/nike.svg" alt="Nike "></RouterLink>
        </div>
        <div class="marcas">
            <RouterLink to="/adidas"><img src="../assets/img/adidas.svg" alt="Adidas"></RouterLink>
        </div>
        <div class="marcas">
            <RouterLink to="/vans"><img src="../assets/img/vans.svg" alt="Vans"></RouterLink>
        </div>
        <div class="marcas">
            <RouterLink to="/stussy"><img src="../assets/img/stussy.svg" alt="Stussy"></RouterLink>
        </div>
    </div>
</template>

<style>
.allMarcas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 150px;
    padding: 10px;
    background-color: #ffffff;
}

.marcas img {
    width: 105px;
    height: auto;
    max-width: 100%;
}

@media (max-width: 768px) {
    .allMarcas {
        gap: 20px;
    }

    .marcas img {
        width: 80px;
    }
}
</style>
