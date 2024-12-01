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
      email.value = ''; 
    } catch (error) {
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
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
}

.boxInputs .input-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}

.boxInputs input {
  padding: 8px;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  flex-grow: 1;
  width: calc(100% - 110px);
  max-width: 300px;
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
  width: 100px;
}

.boxInputs button:hover {
  border: 1px solid #0d0d0d;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .boxOferta {
    flex-direction: column;
    gap: 20px;
    padding: 30px 10px;
  }

  .boxOferta .boxText p {
    font-size: 18px;
  }

  .boxInputs .input-container {
    flex-direction: column;
    align-items: stretch;
  }

  .boxInputs input {
    width: 100%;
    max-width: none;
  }

  .boxInputs button {
    width: 100%;
  }
}

  </style>
  