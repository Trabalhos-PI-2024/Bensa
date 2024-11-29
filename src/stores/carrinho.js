import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";

const toast = useToast();

const adicionarAoCarrinho = () => {
  toast.success("Produto Adicionado ao Carrinho", {
    position: "top-right",
    timeout: 3143,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.93,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  });
};

export const useCarrinhoStore = defineStore('cart', () => {

const carrinho = ref([

])

function addCarrinho(item){
  carrinho.value.push(item);
  adicionarAoCarrinho();
}

function deleteProductById(id){
    const pos = carrinho.value.findIndex((cart) => cart.id == id)
    carrinho.value.splice(pos, 1)
  }

return { carrinho, addCarrinho, deleteProductById }

})