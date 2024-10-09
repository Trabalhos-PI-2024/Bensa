<template>
    <div class="pagina-perfil">
        <div class="banner">
            <input type="file" id="banner-input" @change="atualizarBanner" accept="image/*" v-show="editar" />
            <label v-show="editar" for="banner-input" class="botao-escolher-arquivo banner-button">+</label>
            <img v-if="banner" :src="banner" alt="Banner" />
        </div>

        <div class="perfil-conteudo">
            <div class="perfil-info">
                <div class="imagem-bola">
                    <div class="bola">
                        <input type="file" id="imagem-bola-input" @change="atualizarImagemBola" accept="image/*"
                            v-show="editar" />
                        <label v-show="editar" for="imagem-bola-input"
                            class="botao-escolher-arquivo bola-button">+</label>
                        <img v-if="imagemBola" :src="imagemBola" alt="Imagem do Usuário" />
                    </div>
                </div>
                <div class="informacoes-usuario">
                    <h2>{{ nome }}</h2>
                    <p>{{ cidade }}, {{ estado }}</p>
                </div>
            </div>
            <div class="botoes-perfil">
                <button @click="toggleEditar" class="botao-editar-perfil">
                    {{ editar ? 'Salvar' : 'Editar Perfil' }}
                </button>
                <router-link to="/addproduto">
                    <button class="botao-produto">+ Produto</button>
                </router-link>
            </div>

            <div class="avaliacoes">
                <div class="estrelas">
                    <span v-for="star in 5" :key="star" class="estrela">&#9733;</span>
                </div>
                <p>({{ numeroAvaliacoes }})</p>
            </div>
        </div>
        <h1 class="tittle">Produtos</h1>
    </div>
</template>

<script>
export default {
    name: 'MinhaPagina',
    data() {
        return {
            editar: false,
            banner: null,
            imagemBola: null,
            nome: 'Nome do Usuário',
            cidade: 'Cidade',
            estado: 'Estado',
            numeroAvaliacoes: 0,
        };
    },
    methods: {
        toggleEditar() {
            this.editar = !this.editar;
        },
        atualizarBanner(event) {
            const file = event.target.files[0];
            if (file) {
                this.banner = URL.createObjectURL(file);
            }
        },
        atualizarImagemBola(event) {
            const file = event.target.files[0];
            if (file) {
                this.imagemBola = URL.createObjectURL(file);
            }
        },
    }
}
</script>

<style scoped>
.pagina-perfil {
    padding: 20px;
    width: 80%;
    margin: 0 auto;
}

.banner {
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #f0f0f0;
    margin-bottom: 20px;
}

.banner input {
    display: none;
}

.banner-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
    z-index: 1;
}

.banner-button:hover {
    opacity: 1;
}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.botoes-perfil {
    display: flex;
    gap: 10px;
    /* Espaçamento entre os botões */
}

.botao-editar-perfil,
.botao-produto {
    cursor: pointer;
    background-color: #9c1e0e;
    border-radius: 10px;
    width: 120px;
    height: 50px;
    color: white;
    margin-top: 20px;
}

.botao-produto:hover {
    background-color: #5a140b;
}

.botao-editar-perfil:hover {
    background-color: #5a140b;
}

.perfil-conteudo {
    display: flex;
    justify-content: space-between;
}

.perfil-info {
    display: flex;
}

.imagem-bola {
    position: relative;
    margin-right: 20px;
}

.bola {
    width: 100px;
    height: 100px;
    background-color: #d9d9d9;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bola input {
    display: none;
}

.bola img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.bola-button {
    position: absolute;
    font-size: 24px;
    color: #000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s;
}

.bola-button:hover {
    opacity: 1;
}

.informacoes-usuario {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.avaliacoes {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.estrelas {
    color: #d9d9d9;
}

.estrelas .estrela {
    font-size: 25px;
}

.tittle {
    margin: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 40px;
    border-bottom: 2px solid #9c1e0e;
}
</style>