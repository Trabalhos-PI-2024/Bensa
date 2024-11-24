import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', () => {
  const cliente = ref([
    {
      nome: "",
      sobrenome: "",
      cidade: "",
      estado: "",
      email: "",
      senha: "",
      confirmarEmail: "",
      confirmarSenha: "",
    }
  ]);

  const clienteInfo = computed(() => cliente.value[0]);

  const atualizarCliente = (novosDados) => {
    cliente.value[0] = { ...cliente.value[0], ...novosDados };
  };

  // Variável reativa para controlar a visibilidade
  const isComponentVisible = ref(true);

  const toggleVisibility = () => {
    isComponentVisible.value = !isComponentVisible.value;
  };

  const closeComponent = () => {
    isComponentVisible.value = false; // Fecha o componente de alerta
  };

  return { cliente, clienteInfo, atualizarCliente, isComponentVisible, toggleVisibility, closeComponent };
});