<template>
    <div class="container">
        <form @submit.prevent="formCadastro" class="form">
            <div class="header">
                <img src="../assets/img/user.svg" alt="Logo de Cadastro" class="logo" />
                <div class="titulo-section">
                    <div class="titulos">
                        <RouterLink to="/" class="titulo">Sign Up</RouterLink>
                        <RouterLink to="/" class="titulo">Login</RouterLink>
                    </div>
                    <div class="underline"></div>
                </div>
            </div>
            <h1>Endereço</h1>
            <div class="form-grid">
                <!-- Primeira linha (CEP e Endereço) -->
                <div class="form-grupo inline-group">
                    <div class="cep-container">
                        <label for="cep">CEP</label>
                        <input v-model="form.cep" type="text" id="cep" required placeholder="Ex: 12345-678" />
                    </div>
                    <div class="endereco-container">
                        <label for="endereco">Endereço</label>
                        <input v-model="form.endereco" type="text" id="endereco" required placeholder="Ex: Rua das Flores" />
                    </div>
                </div>

                <!-- Segunda linha (Número e Complemento) -->
                <div class="form-grupo inline-group">
                    <div class="numero-container">
                        <label for="numero">Número</label>
                        <input v-model="form.numero" type="text" id="numero" required placeholder="Ex: 123" />
                    </div>
                    <div class="complemento-container">
                        <label for="complemento">Complemento</label>
                        <input v-model="form.complemento" type="text" id="complemento" placeholder="Ex: Apto 456" />
                    </div>
                </div>

                <!-- Terceira linha (Bairro, Cidade e Estado) -->
                <div class="form-grupo inline-group">
                    <div class="bairro-container">
                        <label for="bairro">Bairro</label>
                        <input v-model="form.bairro" type="text" id="bairro" required placeholder="Ex: Centro" />
                    </div>
                    <div class="cidade-container">
                        <label for="cidade">Cidade</label>
                        <input v-model="form.cidade" type="text" id="cidade" required placeholder="Ex: São Paulo" />
                    </div>
                    <div class="estado-container">
                        <label for="estado">Estado</label>
                        <input v-model="form.estado" type="text" id="estado" required placeholder="Ex: SP" />
                    </div>
                </div>
            </div>
            <div class="form-buttons">
                <router-link to="/info" class="large-button">Próximo</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
});

// O método formCadastro deve ser definido conforme a lógica que você precisa
const formCadastro = () => {
    // Lógica para processar o cadastro, se necessário
};
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #e7e7e7e7;
}

.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 35px 0px 35px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.logo {
    width: 80px;
    margin-bottom: 20px;
    margin-right: 100px;
}

.titulo-section {
    text-align: center;
}

.titulos {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.titulo {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 20px;
    cursor: pointer;
    color: #000000;
}

.titulo.active {
    color: #007bff;
}

.underline {
    width: 60vh;
    height: 2px;
    background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
    margin: 20px auto;
}

.form-grid {
    display: flex;
    flex-direction: column;
    gap: 30px; /* Espaçamento de 30px entre linhas */
}

.form-grupo {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.form-grupo label {
    margin-bottom: 5px;
    font-weight: bold;
}

.form-grupo input {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #D9D9D9;
}

/* Estilos para o CEP e Endereço */
.inline-group {
    display: flex;
    flex-direction: row; /* Mantém os inputs na mesma linha */
    gap: 20px; /* Espaçamento entre os inputs */
}

/* Estilos para o CEP e Endereço */
.cep-container {
    width: 50%; /* CEP ocupa 50% da largura */
}

.endereco-container {
    width: 50%; /* Endereço ocupa 50% da largura */
}

/* Estilos para o Número e Complemento */
.numero-container {
    width: 50%; /* Número ocupa 50% da largura */
}

.complemento-container {
    width: 50%; /* Complemento ocupa 50% da largura */
}

/* Estilos para Bairro, Cidade e Estado */
.bairro-container,
.cidade-container,
.estado-container {
    width: 33%; /* Cada um ocupa 33% da largura */
}

/* Estilos para o botão do router link */
.large-button {
    width: 40%;
  /* Tornado menor */
  cursor: pointer;
  background: #000000;
  padding: 8px 5px;
  color: #fff;
  font-size: 16px;
  /* Ajustado para um tamanho mais apropriado */
  border: 1px solid #fff;
  margin: 40px auto;
  /* Centralizado com margem */
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.large-button:hover {
    transform: scale(1.04);
}
</style>
