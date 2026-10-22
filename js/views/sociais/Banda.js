// js/views/sociais/Banda.js
window.Banda = window.banda = {
  name: 'Banda',
  data() {
    return {
      chaveUnidade: 'banda',
      titulo: 'Corpo Musical da Polícia Militar de Sergipe',
      sigla: 'Banda de Música',
      descricao: 'Patrimônio histórico e cultural de Sergipe, o Corpo Musical da PMSE desempenha papel fundamental no cerimonial cívico-militar, em solenidades de Estado e na aproximação com a sociedade sergipana. Através de concertos sinfônicos, apresentações didáticas em escolas e eventos comemorativos em praças públicas, a Banda de Música difunde a arte, a tradição militar e projetos de musicalização comunitária.',
      capa: './src/banda/capa.png',
      logo: './src/banda/logo.png',
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
            <span class="unidade-tag">Corpo Musical / Cultural</span>
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
            <h2>Portfólio de Equipamentos e Instrumentos</h2>
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
