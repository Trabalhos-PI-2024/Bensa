<template>
    <div class="allMarcas">
        <div class="marcas toRight">
            <RouterLink to="/nike"><img src="/src/assets/img/Logos/nike.svg" alt="Nike"></RouterLink>
        </div>
        <div class="marcas toRight">
            <RouterLink to="/adidas"><img src="/src/assets/img/Logos/adidas.svg" alt="Adidas"></RouterLink>
        </div>
        <div class="marcas toRight">
            <RouterLink to="/vans"><img src="/src/assets/img/Logos/vans.jpg" alt="Vans"></RouterLink>
        </div>
        <div class="marcas toRight">
            <RouterLink to="/stussy"><img src="/src/assets/img/Logos/stussy.svg" alt="Stussy"></RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver';

useIntersectionObserver();
</script>

<style scoped>
.allMarcas {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 200px;
    background-color: #ffffff;
    border-bottom: 1px solid #e7e7e7e7;
    flex-wrap: wrap;
}

.marcas img {
    width: 105px;
    height: auto;
    max-width: 100%;
    z-index: 1;
}

.marcas:nth-child(3) img{
    width: 138px;
}

.marcas{
    transition: all .45s ease-in-out;
}

.marcas:hover{
    transform: scale(1.14);
}

.banner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}


.banner .banner-image {
    width: 65%;
    object-fit: cover;
    opacity: 1;
}

@media (max-width: 1200px) {
    .allMarcas {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0px;
    background-color: #ffffff;
    border-bottom: 1px solid #e7e7e7e7;
}

}

@media (max-width: 768px) {

.marcas img {
    width: 57px;
}

.marcas:nth-child(3) img{
width: 80px;
}
}

</style>