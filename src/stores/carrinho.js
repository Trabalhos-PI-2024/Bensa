import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('cart', () => {

const carrinho = ref([

])

function addCarrinho(item){
  carrinho.value.push(item);
  alert(`Seu produto foi adicionado ao carrinho!`);
}

function deleteProductById(id){
    const pos = carrinho.value.findIndex((cart) => cart.id == id)
    carrinho.value.splice(pos, 1)
  }

return { carrinho, addCarrinho, deleteProductById }

})