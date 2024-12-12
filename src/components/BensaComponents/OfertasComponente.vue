<template>
    <div class="boxOferta hidden">
      <div class="boxText">
        <p>Receba ofertas e cupons em primeira mão.</p>
        <p>Quer saber das novidades na Bensa</p>
      </div>
      <div class="boxInputs">
          <input
            type="text"
            v-model="email"
            placeholder="Email"
          />
          <button @click="enviarEmail">Enviar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importa as funções e stores necessárias para o funcionamento do componente
  import { ref } from 'vue'; // Ref é usado para criar variáveis reativas
  import { useEmailStore } from '@/stores/email'; // Store para gerenciar o envio de e-mail
  import { useToast } from 'vue-toastification'; // Toast para mostrar notificações
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver'; // Hook para observação de interseção de elementos
  
  // Chama o hook de interseção para controlar o comportamento de visibilidade do componente
  useIntersectionObserver();
  
  // Declara uma variável reativa para armazenar o e-mail inserido pelo usuário
  const email = ref('');
  
  // A store que será usada para enviar o e-mail
  const emailStore = useEmailStore();
  
  // Função para mostrar notificações de sucesso ou erro
  const toast = useToast();  
  
  // Função que será chamada ao clicar no botão "Enviar"
  const enviarEmail = async () => {
    // Verifica se o campo de e-mail está vazio
    if (!email.value) {
      // Exibe uma notificação de erro se o e-mail não for fornecido
      toast.error('Por favor, insira um e-mail válido.', {
        position: "top-center",  
        timeout: 5000, // Tempo de exibição da notificação
        closeOnClick: true, // Permite fechar a notificação clicando nela
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      return;
    }
  
    try {
      // Tenta enviar o e-mail através da store
      await emailStore.enviarEmail(email.value);
      // Exibe uma notificação de sucesso caso o envio seja bem-sucedido
      toast.success("E-mail enviado com sucesso!", {
        position: "top-center",  
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      // Limpa o campo de e-mail após o envio
      email.value = ''; 
    } catch (error) {
      // Exibe uma notificação de erro caso ocorra algum erro no envio do e-mail
      console.error(error);
      toast.error("E-mail inválido.", {
        position: "top-center",  
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  };
</script>

  
  <style scoped>
.boxOferta {
  width: 100%;
  background: #e7e7e7;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  text-align: center;
}

.boxOferta .boxText p {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.boxOferta .boxInputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}

.boxInputs input {
  padding: 8px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  flex-grow: 1;
}

.boxInputs input:hover {
  border: 1px solid #0d0d0d;
}

.boxInputs button {
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: #fff;
  transition: all 0.5s ease;
  width: 100px;
}

.boxInputs button:hover {
  border: 1px solid #0d0d0d;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .boxOferta {
    gap: 20px;
  }

  .boxOferta .boxText p {
    font-size: 18px;
  }
  .boxOferta .boxInputs {
flex-direction: column;
align-items: end;
}
.boxInputs input {
  width: 100%;
}
}

  </style>
  