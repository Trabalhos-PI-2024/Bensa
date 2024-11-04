<template>
    <div class="boxOferta">
        <div class="boxText">
            <p>Receba ofertas e cupons em primeira mão.</p>
            <p>Quer saber das novidades na Bensa</p>
        </div>
        <div class="boxInputs">
            <input type="text" placeholder="Email">
            <button>Enviar</button>
        </div>
    </div>
</template>
<style scoped>
.boxOferta {
    width: 100%;
    background: #e7e7e7;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
}

.boxOferta .boxText p {
    font-size: 20px;
    font-weight: 600;
}

.boxOferta .boxInputs {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    gap: 10px;
}

.boxOferta .boxInputs input {
    padding: 8px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: all .5s ease;
}

.boxOferta .boxInputs input:hover {
    border: 1px solid #0d0d0d;
}

.boxOferta .boxInputs button {
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: #fff;
    transition: all .5s ease;
}

.boxOferta .boxInputs button:hover {
    border: 1px solid #0d0d0d;
    transform: scale(1.05);
}
</style>