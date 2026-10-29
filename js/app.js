// js/app.js
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      anoAtual: new Date().getFullYear(),
      menuAberto: false,
      submenuAberto: null // Guarda qual submenu está aberto no celular ('geral', 'especializadas' ou 'sociais')
    };
  },
  methods: {
    alternarMenu() {
      this.menuAberto = !this.menuAberto;
      if (!this.menuAberto) this.submenuAberto = null;
    },
    fecharMenu() {
      this.menuAberto = false;
      this.submenuAberto = null;
    },
    alternarSubmenu(nome) {
      this.submenuAberto = this.submenuAberto === nome ? null : nome;
    }
  }
});

app.use(router);
app.config.globalProperties.formatarMoeda = function(valor) {
  if (!valor && valor !== 0) return 'R$ 0,00';
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
app.config.globalProperties.obterInfoNd = function(item) {
  // Pega o campo vindo do Sheets (independente de como foi nomeado no Apps Script)
  const valor = String(item.natureza || item.naturezaDespesa || item.nd || item['natureza da despesa'] || '').trim();
  
  if (!valor) return { ativo: false };

  const vLower = valor.toLowerCase();

  // Detecta se é Investimento (4.4.90)
  if (vLower.includes('4') || vLower.includes('invest')) {
    return {
      ativo: true,
      classe: 'ribbon-investimento',
      codigo: '4.4.90',
      texto: 'Investimento'
    };
  }

  // Detecta se é Custeio (3.3.90)
  if (vLower.includes('3') || vLower.includes('cust')) {
    return {
      ativo: true,
      classe: 'ribbon-custeio',
      codigo: '3.3.90',
      texto: 'Custeio'
    };
  }

  // Fallback genérico caso venha outro texto
  return {
    ativo: true,
    classe: 'ribbon-custeio',
    codigo: '',
    texto: valor
  };
};
app.mount('#app');
