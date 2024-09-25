<template>
    <div class="user-container">
        <form @submit.prevent="formCadastro" class="user-form">
            <div class="user-header">
                <img src="../assets/img/user.svg" alt="Logo de Cadastro" class="user-logo" />
                <div class="user-title-section">
                    <div class="user-titulos">
                        <RouterLink to="/" class="user-titulo">Sign Up</RouterLink>
                        <RouterLink to="/" class="user-titulo">Login</RouterLink>
                    </div>
                    <div class="user-underline"></div>
                </div>
            </div>
            <h1>Informações Pessoais</h1>
            <div class="user-form-grid">
                <!-- Primeira linha (Nome e Sobrenome) -->
                <div class="user-form-grupo inline-group">
                    <div class="nome-container">
                        <label for="nome">Nome</label>
                        <input v-model="form.nome" type="text" id="nome" required placeholder="Ex: João" />
                    </div>
                    <div class="sobrenome-container">
                        <label for="sobrenome">Sobrenome</label>
                        <input v-model="form.sobrenome" type="text" id="sobrenome" required placeholder="Ex: Silva" />
                    </div>
                </div>

                <!-- Segunda linha (Telefone e E-mail) -->
                <div class="user-form-grupo inline-group">
                    <div class="telefone-container">
                        <label for="telefone">Telefone</label>
                        <input v-model="form.telefone" type="text" id="telefone" required placeholder="Ex: (11) 91234-5678" />
                    </div>
                    <div class="email-container">
                        <label for="email">E-mail</label>
                        <input v-model="form.email" type="email" id="email" required placeholder="Ex: exemplo@dominio.com" />
                    </div>
                </div>

                <!-- Terceira linha (CPF, Data de Nascimento e Sexo) -->
                <div class="user-form-grupo inline-group">
                    <div class="cpf-container">
                        <label for="cpf">CPF</label>
                        <input v-model="form.cpf" type="text" id="cpf" required placeholder="Ex: 123.456.789-00" />
                    </div>
                    <div class="data-nascimento-container">
                        <label for="data-nascimento">Data de Nascimento</label>
                        <input v-model="form.dataNascimento" type="date" id="data-nascimento" required />
                    </div>
                    <div class="sexo-container">
                        <label for="sexo">Sexo</label>
                        <select v-model="form.sexo" id="sexo" required>
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="user-form-buttons">
                <router-link to="/" class="large-button">Próximo</router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    sexo: ''
});

// O método formCadastro deve ser definido conforme a lógica que você precisa
const formCadastro = () => {
    // Lógica para processar o cadastro, se necessário
};
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #e7e7e7e7;
}

.user-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 35px 0px 35px;
}

.user-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.user-logo {
    width: 80px;
    margin-bottom: 20px;
    margin-right: 0px;
}

.user-title-section {
    text-align: center;
}

.user-titulos {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.user-titulo {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 20px;
    cursor: pointer;
    color: #000000;
}

.user-titulo.active {
    color: #007bff;
}

.user-underline {
    width: 60vh;
    height: 2px;
    background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
    margin: 20px auto;
}

.user-form-grid {
    display: flex;
    flex-direction: column;
    gap: 30px; /* Espaçamento de 30px entre linhas */
}

.user-form-grupo {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.user-form-grupo label {
    margin-bottom: 5px;
    font-weight: bold;
}

.user-form-grupo input,
.user-form-grupo select {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #D9D9D9;
}

/* Estilos para o Nome e Sobrenome */
.inline-group {
    display: flex;
    flex-direction: row; /* Mantém os inputs na mesma linha */
    gap: 20px; /* Espaçamento entre os inputs */
}

/* Estilos para o Nome e Sobrenome */
.nome-container,
.sobrenome-container {
    width: 50%; /* Cada um ocupa 50% da largura */
}

/* Estilos para o Telefone e E-mail */
.telefone-container,
.email-container {
    width: 50%; /* Cada um ocupa 50% da largura */
}

/* Estilos para CPF, Data de Nascimento e Sexo */
.cpf-container,
.data-nascimento-container,
.sexo-container {
    width: 33%; /* Cada um ocupa 33% da largura */
}

/* Estilos para o botão do router link */
.large-button {
    width: 40%;
    cursor: pointer;
    background: #000000;
    padding: 8px 5px;
    color: #fff;
    font-size: 16px;
    border: 1px solid #fff;
    margin: 40px auto;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    display: flex;
}

.large-button:hover {
    transform: scale(1.04);
}
</style>
