<template>
  <div class="pagina-perfil">
    <div class="banner hidden">
      <input
        type="file"
        id="banner-input"
        @change="atualizarBanner"
        accept="image/*"
        v-show="editar"
      />
      <label v-show="editar" for="banner-input" class="botao-escolher-arquivo banner-button"
        >+</label
      >
      <img v-if="banner" :src="banner" alt="Banner" />
    </div>
      <div class="perfil-conteudo">
        <div class="mainUsuario">
        <div class="perfil-info toRight">
          <div class="imagem-bola">
            <div class="bola">
              <input
                type="file"
                id="imagem-bola-input"
                @change="atualizarImagemBola"
                accept="image/*"
                style="display: none"
              />
              <label
                v-if="editar"
                for="imagem-bola-input"
                class="botao-escolher-arquivo bola-button"
                >+</label
              >
              <img v-if="imagemBola" :src="imagemBola" alt="Imagem do Usuário" />
            </div>
          </div>
          <div class="informacoes-usuario toRight">
            <!-- Acesso correto ao primeiro item do array cliente -->
            <h2>{{ loginStore.cliente[0]?.nome }} {{ loginStore.cliente[0]?.sobrenome }}</h2>
            <p>{{ loginStore.cliente[0]?.cidade }}, {{ loginStore.cliente[0]?.estado }}</p>
          </div>
        </div>
        <div class="botoes-perfil hidden">
          <button @click="toggleEditar" class="botao-editar-perfil">
            {{ editar ? 'Salvar' : 'Editar Perfil' }}
          </button>
          <router-link to="/addproduto">
            <button class="botao-produto">+ Produto</button>
          </router-link>
        </div>
      </div>
        <div class="avaliacoes toLeft">
          <div class="estrelas">
            <span v-for="star in 5" :key="star" class="estrela">&#9733;</span>
          </div>
          <p>({{ numeroAvaliacoes }})</p>
        </div>
      </div>
    <h1 class="tittle hidden">Produtos</h1>
    <div class="status-produtos hidden">
      <span :class="{ ativo: abaAtiva === 'venda' }" @click="mudarAba('venda')"> à venda </span>
      <span :class="{ ativo: abaAtiva === 'vendidos' }" @click="mudarAba('vendidos')">
        vendidos
      </span>
    </div>

    <div class="produtos-container">
      <div v-if="abaAtiva === 'vendidos' && produtos.length > 0">
        <CardVendidoComponente
          v-for="produto in produtos"
          :key="produto.id"
          :imagem="produto.imagem"
          :titulo="produto.titulo"
          :preco="produto.preco"
          :vendidoPara="produto.vendidoPara"
        />
      </div>
      <div v-if="abaAtiva === 'venda' && produtos.length > 0">
        <CardVendaComponente
          v-for="produto in produtos"
          :key="produto.id"
          :imagem="produto.imagem"
          :titulo="produto.titulo"
          :preco="produto.preco"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue' // Importa a função ref do Vue para criar dados reativos
import CardVendidoComponente from '@/components/ComunidadeComponents/CardVendidoComponente.vue' // Importa o componente para produtos vendidos
import CardVendaComponente from '@/components/ComunidadeComponents/CardVendaComponente.vue' // Importa o componente para produtos à venda
import { useLoginStore } from '@/stores/login'; // Importa a store para o gerenciamento de login
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Importa um hook para observação de interseção (não está sendo usado diretamente)

useIntersectionObserver // Chama o hook para observar a interseção do componente (não está sendo utilizado diretamente aqui)

const loginStore = useLoginStore(); // Inicializa a store de login, que pode ser utilizada para acessar dados do usuário logado

// Variáveis reativas
const editar = ref(false) // Controle para alternar entre os modos de edição
const banner = ref(null) // Armazena a URL da imagem do banner
const imagemBola = ref(null) // Armazena a URL da imagem da bola
const numeroAvaliacoes = ref(0) // Armazena o número de avaliações
const abaAtiva = ref('venda') // Controla qual aba está ativa (venda ou vendido)
const produtos = ref([ // Array de produtos, cada um com ID, imagem, título, preço e comprador (se já vendido)
  {
    id: 1,
    imagem: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241018225641239-253.webp', // URL da imagem do produto
    titulo: 'Camiseta Nike', // Título do produto
    preco: 120.0, // Preço do produto
    vendidoPara: 'Davi' // Nome do comprador, caso o produto tenha sido vendido
  }
])

// Função para alternar o estado de edição
const toggleEditar = () => {
  editar.value = !editar.value // Alterna entre verdadeiro ou falso
}

// Função para atualizar a imagem do banner
const atualizarBanner = (event) => {
  const file = event.target.files[0] // Acessa o arquivo selecionado
  if (file) {
    banner.value = URL.createObjectURL(file) // Cria uma URL de objeto para o arquivo e armazena em 'banner'
  }
}

// Função para atualizar a imagem da bola
const atualizarImagemBola = (event) => {
  const file = event.target.files[0] // Acessa o arquivo selecionado
  if (file) {
    imagemBola.value = URL.createObjectURL(file) // Cria uma URL de objeto para o arquivo e armazena em 'imagemBola'
  }
}

// Função para mudar a aba ativa entre "venda" e "vendido"
const mudarAba = (aba) => {
  abaAtiva.value = aba // Atualiza a aba ativa para a aba passada como parâmetro
}
</script>


<style scoped>
.mainUsuario{
  display: flex;
  justify-content: center;
  gap: 30px;
}
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

.produtos-container {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
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

.botao-produto:hover,
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.bola img {
  width: 100px;
  height: 100px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

.produtos {
  padding-top: 40px;
}

.status-produtos {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding-bottom: 20px;
  padding-top: 10px;
}

.status-produtos span {
  cursor: pointer;
  font-size: 18px;
  color: #6e6e6e;
  position: relative;
}

.status-produtos span.ativo {
  font-weight: bold;
  color: #9c1e0e;
}

.status-produtos span.ativo::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #9c1e0e;
}

@media (max-width: 1200px) {
  .mainUsuario{
flex-direction: column;
}
}

@media (max-width: 768px) {
  .perfil-conteudo {
  flex-direction: column-reverse;
}
.produtos-container {
  justify-content: center;
  gap: 20px;
}
}
</style>
