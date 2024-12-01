<template>
    <div class="boxOferta">
      <div class="boxText">
        <p>Receba ofertas e cupons em primeira mão.</p>
        <p>Quer saber das novidades na Bensa</p>
      </div>
      <div class="boxInputs">
        <div class="input-container">
          <input
            type="text"
            v-model="email"
            placeholder="Email"
          />
          <button @click="enviarEmail">Enviar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useEmailStore } from '@/stores/email';
  import { useToast } from 'vue-toastification';  
  
  const email = ref('');
  const emailStore = useEmailStore();
  const toast = useToast();  
  
  const enviarEmail = async () => {
    if (!email.value) {
      toast.error('Por favor, insira um e-mail válido.', {
        position: "top-center",  
        timeout: 5000,
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
      return;
    }
  
    try {
      await emailStore.enviarEmail(email.value);
      toast.success("E-mail enviado com sucesso!", {
        position: "top-center",  
        timeout: 5000,
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
      email.value = ''; 
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar o e-mail.", {
        position: "top-center",  
        timeout: 5000,
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
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
  }
  
  .boxOferta .boxText p {
    font-size: 20px;
    font-weight: 600;
  }
  
  .boxOferta .boxInputs {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    gap: 10px;
  }
  
  .boxInputs .input-container {
    display: flex;
    gap: 10px; 
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
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 12px;
    border: 1px solid transparent;
    background: #fff;
    transition: all 0.5s ease;
  }
  
  .boxInputs button:hover {
    border: 1px solid #0d0d0d;
    transform: scale(1.05);
  }
  </style>
  