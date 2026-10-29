// js/store.js
// CAMADA DE DADOS E ESTADO GLOBAL (STORE)

const API_PORTFOLIO_URL = "https://script.google.com/macros/s/AKfycbzeK6gEasON7ZxE10HeYOr47evjWPkxJqQ0DBtVHd7patnI_ZOlpBVQxwuPZt9dzqbjYA/exec";
window.PortfolioStore = Vue.reactive({
  carregando: true,
  erro: null,
  dados: {},

  // Busca os dados uma única vez na inicialização
  async carregar() {
    try {
      const resposta = await fetch(API_PORTFOLIO_URL);
      const json = await resposta.json();

      if (json && json.sucesso && json.dados) {
        Object.assign(this.dados, json.dados);
      } else {
        throw new Error(json.erro || "Resposta inválida do backend.");
      }
    } catch (erro) {
      console.error("[PortfolioStore] Erro ao carregar planilha:", erro);
      this.erro = erro.message;
    } finally {
      this.carregando = false;
    }
  },

  // Método auxiliar que qualquer página usa para pegar seus itens
  obterMateriais(sigla) {
    if (!sigla) return [];
    const chave = String(sigla).toLowerCase().trim();
    return this.dados[chave] || [];
  }
});

// Dispara a carga em segundo plano assim que o script é importado
window.PortfolioStore.carregar();
