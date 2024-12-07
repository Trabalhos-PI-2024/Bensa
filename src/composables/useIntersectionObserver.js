import { onMounted, onUnmounted } from 'vue';

export function useIntersectionObserver() {
  let observer = null;
  let mutationObserver = null;

  const observarIntersecoes = () => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.remove('toRight', 'toLeft', 'toTop', 'hidden');
        } else {
          if (entry.target.classList.contains('toRight')) {
            entry.target.classList.add('toRight');
            entry.target.classList.remove('show');
          }
         else if (entry.target.classList.contains('toLeft')) {
            entry.target.classList.add('toLeft');
            entry.target.classList.remove('show');
          }
         else if (entry.target.classList.contains('toTop')) {
            entry.target.classList.add('toTop');
            entry.target.classList.remove('show');
          }
         else if (entry.target.classList.contains('hidden')) {
            entry.target.classList.add('hidden');
            entry.target.classList.remove('show');
          }
        }
      });
    }); 

    const elementosParaObservar = document.querySelectorAll('.toRight, .toLeft, .toTop, .hidden');
    elementosParaObservar.forEach((element) => {
      observer.observe(element);
    });
  };

  const monitorarMutacoes = () => {
    const targetNode = document.body; // Ou um nó específico do seu layout
    mutationObserver = new MutationObserver(() => {
      if (observer) observer.disconnect();
      observarIntersecoes();
    });

    mutationObserver.observe(targetNode, { childList: true, subtree: true });
  };

  onMounted(() => {
    observarIntersecoes();
    monitorarMutacoes();
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
  });
}