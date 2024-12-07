import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHistoricoStore = defineStore('historicoCompras', () => {

const historico = ref([

])

function addHistorico(item){
  historico.value.push(item);
}
return { historico, addHistorico }

})