// js/router.js
const { createRouter, createWebHashHistory } = VueRouter;

// Busca o componente na memória dinamicamente no momento do clique,
// aceitando variações de maiúsculas/minúsculas e evitando cair na Home por atraso
const carregarView = (nome) => {
  return () => Promise.resolve(
    window[nome] || 
    window[nome.toLowerCase()] || 
    window[nome.toUpperCase()] || 
    (typeof window !== 'undefined' && window.Home) || 
    Home
  );
};

const routes = [
  // 1. Home
  { path: '/', component: carregarView('Home') },

  // 2. Geral
  { path: '/geral/impo', component: carregarView('Impo') },
  { path: '/geral/taticos', component: carregarView('Taticos') },

  // 3. Especializadas
  { path: '/especializadas/bope', component: carregarView('Bope') },
  { path: '/especializadas/bpati', component: carregarView('Bpati') },
  { path: '/especializadas/bprp', component: carregarView('Bprp') },
  { path: '/especializadas/bprv', component: carregarView('Bprv') },
  { path: '/especializadas/bptur', component: carregarView('Bptur') },
  { path: '/especializadas/caatinga', component: carregarView('Caatinga') },
  { path: '/especializadas/cipam', component: carregarView('Cipam') },
  { path: '/especializadas/cipcaes', component: carregarView('Cipcaes') },
  { path: '/especializadas/cto', component: carregarView('Cto') },
  
  { path: '/especializadas/getam', component: carregarView('Getam') },
  { path: '/especializadas/rpmon', component: carregarView('Rpmon') },

  // 4. Sociais
  { path: '/sociais/bptran', component: carregarView('Bptran') },
  { path: '/sociais/equoterapia', component: carregarView('Equoterapia') },
  { path: '/sociais/judo', component: carregarView('Judo') },
  { path: '/sociais/museu', component: carregarView('Museu') },
  { path: '/sociais/proerd', component: carregarView('Proerd') }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});