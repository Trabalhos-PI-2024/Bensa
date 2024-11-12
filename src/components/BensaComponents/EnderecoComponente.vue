<template>
    <div class="container">
        <form @submit.prevent="formCadastro" class="form">
            <div class="header">
                <img src="/src/assets/img/Icons/user.svg" alt="Logo de Cadastro" class="logo" />
                <div class="titulo-section">
                    <div class="titulos">
                        <RouterLink to="/" class="titulo">Sign Up</RouterLink>
                        <RouterLink to="/" class="titulo">Login</RouterLink>
                    </div>
                </div>
                <div class="underline"></div>
            </div>
            <h1>Endereço</h1>
            <div class="form-grid">
                <div class="form-grupo inline-group">
                    <div class="cep-container">
                        <label for="cep">CEP</label>
                        <input  type="text" id="cep" required placeholder="Ex: 12345-678" />
                    </div>
                    <div class="endereco-container">
                        <label for="endereco">Endereço</label>
                        <input  type="text" id="endereco" required
                            placeholder="Ex: Rua das Flores" />
                    </div>
                </div>
                <div class="form-grupo inline-group">
                    <div class="numero-container">
                        <label for="numero">Número</label>
                        <input type="text" id="numero" required placeholder="Ex: 123" />
                    </div>
                    <div class="complemento-container">
                        <label for="complemento">Complemento</label>
                        <input type="text" id="complemento" placeholder="Ex: Apto 456" />
                    </div>
                </div>
                <div class="form-grupo inline-group">
                    <div class="bairro-container">
                        <label for="bairro">Bairro</label>
                        <input type="text" id="bairro" required placeholder="Ex: Centro" />
                    </div>
                    <div class="cidade-container">
                        <label for="cidade">Cidade</label>
                        <input v-model="loginStore.clienteInfo.cidade" type="text" id="cidade" required placeholder="Ex: São Paulo" />
                    </div>
                    <div class="estado-container">
                        <label for="estado">Estado</label>
                        <input v-model="loginStore.clienteInfo.estado" type="text" id="estado" required placeholder="Ex: SP" />
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
import { useLoginStore } from '@/stores/login';

const loginStore = useLoginStore();

  const formCadastro = () => {
    loginStore.atualizarCliente({
      estado: loginStore.clienteInfo.estado,
      cidade: loginStore.clienteInfo.cidade,
    });
    console.log('Dados do cliente atualizados', loginStore.clienteInfo);
  };
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    background-color: #e7e7e7;
}

.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: -100px 35px 0px 35px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    width: 80px;
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
    color: #252627;
}

.underline {
    width: 60%; 
    height: 2px;
    background: -webkit-linear-gradient(left, rgba(147, 184, 189, 0) 0%, rgba(219, 0, 0, 0.8) 20%, rgb(143, 0, 0) 53%, rgba(12, 0, 0, 0.8) 79%, rgba(147, 184, 189, 0) 100%);
    margin: 5px auto; 
}

.form-grid {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.form-grupo {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center; 
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


.inline-group {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.cep-container,
.endereco-container,
.numero-container,
.complemento-container {
    width: 50%;
}

.bairro-container,
.cidade-container,
.estado-container {
    width: 33%;
}


.form-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

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


@media (max-width: 598px) {
    .form-grid {
        flex-direction: column; 
    }

    .inline-group {
        flex-direction: column; 
    }

    .cep-container,
    .endereco-container,
    .numero-container,
    .complemento-container,
    .bairro-container,
    .cidade-container,
    .estado-container {
        width: 90%; 
    }

    .form-grupo {
        align-items: center; 
    }

    .titulo {
        font-size: 1.2rem; 
    }
   
.container {
    padding-top:140px ;
   
}

}
</style>
