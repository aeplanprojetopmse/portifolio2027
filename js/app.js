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
app.mount('#app');