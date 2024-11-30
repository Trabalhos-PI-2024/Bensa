// src/stores/email.js
import { defineStore } from "pinia";
import emailjs from "@emailjs/browser";

export const useEmailStore = defineStore("email", {
  actions: {
    async enviarEmail(email) {
      const serviceId = "GmailMessage"; // Substitua pelo seu Service ID
      const templateId = "template_rcxrymq"; // Template ID
      const userId = "Q-WH8nKiPyrYDVZ-f"; // Substitua pelo seu User ID do EmailJS

      const templateParams = {
        user_email: email, // Nome da variável do template configurado no EmailJS
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, userId);
        console.log("E-mail enviado com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        console.error("Detalhes do erro:", error.text);  // Exibe detalhes do erro
        throw error;
      }
    },
  },
});
