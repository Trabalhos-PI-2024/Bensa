import { defineStore } from "pinia";
import emailjs from "@emailjs/browser";

export const useEmailStore = defineStore("email", {
  actions: {
    async enviarEmail(email) {
      const serviceId = "GmailMessage"; 
      const templateId = "template_rcxrymq"; 
      const userId = "Q-WH8nKiPyrYDVZ-f"; 

      const templateParams = {
        user_email: email, 
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, userId);
        console.log("E-mail enviado com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        console.error("Detalhes do erro:", error.text);  
        throw error;
      }
    },
  },
});
