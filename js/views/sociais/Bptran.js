// js/views/sociais/Bptran.js
window.Bptran = {
  name: 'Bptran',
  data() {
    return {
      chaveUnidade: 'bptran',
      titulo: 'Educação para o Trânsito (BPTran)',
      sigla: 'BPTran',
      descricao: 'Iniciativa socioeducativa desenvolvida pela Polícia Militar de Sergipe, por meio do Batalhão de Policiamento de Trânsito (BPTran). Atua diretamente em escolas públicas e privadas, praças e eventos comunitários na formação de pedestres e futuros condutores conscientes, utilizando ferramentas lúdicas, vivências práticas em minicidade de trânsito itinerante e campanhas de preservação da vida nas vias públicas.',
      capa: './src/bptran/capa.png',
      logo: './src/bptran/logo.png',
      capaModo: 'cover',
      capaPosicao: 'center 20%'
    };
  },
  computed: {
    materiais() {
      return window.PortfolioStore ? window.PortfolioStore.obterMateriais(this.chaveUnidade) : [];
    },
    carregando() {
      return window.PortfolioStore ? window.PortfolioStore.carregando : false;
    },
    valorTotalGeral() {
      return this.materiais.reduce((total, item) => total + (item.quantidade * item.valorUnitario), 0);
    },
    quantidadeTotalItens() {
      return this.materiais.reduce((total, item) => total + item.quantidade, 0);
    }
  },
  methods: {
    formatarMoeda(valor) {
      if (!valor && valor !== 0) return 'R$ 0,00';
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  },
  template: `
    <div class="unidade-page">
      <div class="unidade-hero" :class="{ 'unidade-hero--contain': capaModo === 'contain' }" :style="{ '--capa-pos': capaPosicao }">
        <img v-if="capaModo === 'contain'" :src="capa" class="unidade-capa-bg" alt="" aria-hidden="true" />
        <img :src="capa" :alt="'Capa ' + sigla" class="unidade-capa-img" />
        <div class="unidade-hero-overlay"></div>
        <div class="unidade-hero-content">
          <div class="unidade-logo-badge"><img :src="logo" :alt="'Brasão ' + sigla" /></div>
          <div class="unidade-hero-text">
            <span class="unidade-tag">Projeto Social / Educativo</span>
            <h1>{{ titulo }}</h1>
          </div>
        </div>
      </div>

      <section class="unidade-apresentacao"><p>{{ descricao }}</p></section>

      <div v-if="carregando" class="card-generico" style="text-align: center; padding: 2.5rem;">
        <p style="font-size: 1.1rem; color: #1a2430; font-weight: bold;">Carregando materiais do Portfólio...</p>
      </div>

      <div v-else-if="materiais.length === 0" class="card-generico" style="text-align: center; padding: 2rem;">
        <p style="color: #64748b;">Nenhum material aprovado no portfólio para este projeto no momento.</p>
      </div>

      <template v-else>
        <div class="unidade-kpis">
          <div class="kpi-card">
            <span class="kpi-label">Tipos de Materiais</span>
            <strong class="kpi-valor">{{ materiais.length }}</strong>
          </div>
          <div class="kpi-card">
            <span class="kpi-label">Total de Itens</span>
            <strong class="kpi-valor">{{ quantidadeTotalItens }} un.</strong>
          </div>
          <div class="kpi-card kpi-destaque">
            <span class="kpi-label">Investimento Total Previsto</span>
            <strong class="kpi-valor">{{ formatarMoeda(valorTotalGeral) }}</strong>
          </div>
        </div>

        <section class="materiais-section">
          <div class="materiais-header">
            <h2>Portfólio de Equipamentos e Materiais</h2>
            <span class="materiais-sub">Dados sincronizados diretamente da planilha do projeto</span>
          </div>

          <div class="tabela-responsiva">
            <table class="tabela-materiais">
              <thead>
                <tr>
                  <th style="width: 50px;">Item</th>
                  <th>Nome do Objeto</th>
                  <th>Descrição Técnica</th>
                  <th style="text-align: center;">Qtd</th>
                  <th style="text-align: right;">Valor Unitário</th>
                  <th style="text-align: right;">Valor Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in materiais" :key="item.id">
                  <td class="col-num">{{ String(index + 1).padStart(2, '0') }}</td>
                  <td class="col-nome"><strong>{{ item.nome }}</strong></td>
                  <td class="col-desc">{{ item.descricao }}</td>
                  <td class="col-qtd">{{ item.quantidade }}</td>
                  <td class="col-moeda">{{ formatarMoeda(item.valorUnitario) }}</td>
                  <td class="col-total">{{ formatarMoeda(item.valorTotal) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="total-legenda">VALOR TOTAL DO PROJETO:</td>
                  <td class="total-valor-final">{{ formatarMoeda(valorTotalGeral) }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </template>
    </div>
  `
};
