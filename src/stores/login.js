
import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', () => {
  const cliente = ref([
    {
      nome: "",
      sobrenome: "",
      cidade: "",
      estado: "",
    }
  ]);

  const clienteInfo = computed(() => cliente.value[0]);

  const atualizarCliente = (novosDados) => {
    cliente.value[0] = { ...cliente.value[0], ...novosDados };
  };

  return { cliente, clienteInfo, atualizarCliente };
});
