// js/app.js
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      anoAtual: new Date().getFullYear(),
      menuAberto: false
    };
  },
  methods: {
    alternarMenu() {
      this.menuAberto = !this.menuAberto;
    },
    fecharMenu() {
      this.menuAberto = false;
    }
  }
});

app.use(router);
app.mount('#app');