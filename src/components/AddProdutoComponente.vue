<template>
    <div class="product-form">
        <h1 class="form-title">Publicar Produto</h1>

        <div class="input-container">
            <label for="product-title">Título do Produto</label>
            <input type="text" id="product-title" v-model="product.title" placeholder="Ex: Camiseta Estampada"
                required />
        </div>

        <div class="input-container">
            <label for="brand">Marca</label>
            <input type="text" id="brand" v-model="product.brand" placeholder="Ex: Nike" required />
        </div>

        <div class="input-container">
            <label for="description">Descrição do Produto (até 350 caracteres)</label>
            <textarea id="description" v-model="product.description" maxlength="350"
                placeholder="Descreva o produto aqui..." required></textarea>
        </div>

        <div class="input-container">
            <label for="category">Categoria</label>
            <select id="category" v-model="product.category" @change="resetSize" required>
                <option value="" disabled>Selecione uma categoria</option>
                <option value="roupas">Roupas</option>
                <option value="calçados">Calçados</option>
                <option value="acessórios">Acessórios</option>
            </select>
        </div>

        <div class="input-container">
            <label for="price">Preço</label>
            <input type="number" id="price" v-model="product.price" placeholder="Ex: 99.99" required />
        </div>

        <div class="input-container">
            <label for="size">Tamanho</label>
            <select id="size" v-model="product.size" required>
                <option value="" disabled>Selecione um tamanho</option>
                <option v-for="size in sizeOptions" :key="size" :value="size">{{ size }}</option>
            </select>
        </div>

        <div class="image-upload">
            <h2>Adicionar Fotos</h2>
            <div class="image-grid">
                <label class="image-box main-image">
                    <input type="file" accept="image/*" @change="handleImageChange(0)" />
                    <span>+</span>
                </label>
                <label class="image-box">
                    <input type="file" accept="image/*" @change="handleImageChange(1)" />
                    <span>+</span>
                </label>
                <label class="image-box">
                    <input type="file" accept="image/*" @change="handleImageChange(2)" />
                    <span>+</span>
                </label>
                <label class="image-box">
                    <input type="file" accept="image/*" @change="handleImageChange(3)" />
                    <span>+</span>
                </label>
                <label class="image-box">
                    <input type="file" accept="image/*" @change="handleImageChange(4)" />
                    <span>+</span>
                </label>
            </div>
            <p class="image-instructions">Tire fotos de diferentes ângulos do produto, isso vai aumentar suas chances de
                vendê-lo.</p>
        </div>
        <router-link to="/minhaloja">
            <button class="submit-button">Enviar</button>
        </router-link>

    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {
                title: '',
                brand: '',
                description: '',
                category: '',
                price: '',
                size: '',
                images: Array(5).fill(null), // Array para armazenar as imagens
            },
            sizeOptions: [], // Array para armazenar as opções de tamanho
        };
    },
    methods: {
        handleImageChange(index) {
            const input = event.target;
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.$set(this.product.images, index, e.target.result); // Armazena a imagem no array
                };
                reader.readAsDataURL(input.files[0]);
            }
        },
        resetSize() {
            this.product.size = ''; // Reseta o tamanho quando a categoria muda
            this.updateSizeOptions(); // Atualiza as opções de tamanho
        },
        updateSizeOptions() {
            switch (this.product.category) {
                case 'roupas':
                    this.sizeOptions = ['P', 'M', 'G', 'GG', 'XGG'];
                    break;
                case 'calçados':
                    this.sizeOptions = ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47'];
                    break;
                case 'acessórios':
                    this.sizeOptions = ['Tamanho Único'];
                    break;
                default:
                    this.sizeOptions = [];
            }
        },
    },
};
</script>

<style scoped>
.product-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
}

.form-title {
    text-align: center;
    margin-bottom: 20px;
}

.input-container {
    margin-bottom: 15px;
}

.input-container label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    height: 100px;
}

.image-upload {
    margin: 20px 0;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.image-box {
    width: 100%;
    height: 100px;
    background-color: #f0f0f0;
    border: 1px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.image-box input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* Torna o input invisível */
    cursor: pointer;
}

.main-image {
    grid-column: span 2;
    height: 200px;
}

.image-instructions {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
}

.submit-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #9c1e0e;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #69160b;
}
</style>