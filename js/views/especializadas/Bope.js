// js/views/especializadas/Bope.js
window.Bope = {
  name: 'Bope',
  data() {
    return {
      titulo: 'Batalhão de Operações Policiais Especiais (BOPE)',
      sigla: 'BOPE',
      descricao: 'Unidade tática de pronta resposta da Polícia Militar de Sergipe destinada ao atendimento de ocorrências de altíssima complexidade, gerenciamento de crises, intervenção em ambientes hostis e ações contra o crime organizado.',
      
      // CAMINHOS CORRIGIDOS CONFORME SUA ÁRVORE DE PASTAS:
      capa: './src/bope/capa.png',
      logo: './src/bope/logo.png',

      // AJUSTES DA CAPA (iguais em todos os componentes, só mudam os valores)
      capaModo: 'cover',        // 'cover' = preenche e corta | 'contain' = mostra inteira
      capaPosicao: 'center 20%',// ponto focal do corte: 'center top', 'center 25%', 'left center'...
      
      // ITENS DO PDF (Valores e quantidades)
      materiais: [
        {
          id: 1,
          nome: 'Fuzil de Precisão (Sniper) .308',
          descricao: 'Armamento de alta precisão para atirador designado com mira óptica térmica.',
          quantidade: 4,
          valorUnitario: 38500.00
        },
        {
          id: 2,
          nome: 'Colete Balístico Nível IV com Placas Cerâmicas',
          descricao: 'Proteção individual reforçada contra munições perfurantes de fuzil.',
          quantidade: 25,
          valorUnitario: 5200.00
        },
        {
          id: 3,
          nome: 'Óculos de Visão Noturna (NVG) Monocular',
          descricao: 'Dispositivo tático de intensificação de luminosidade geração 3.',
          quantidade: 10,
          valorUnitario: 24000.00
        },
        {
          id: 4,
          nome: 'Kit de Entrada Tática (Arrombamento Hidráulico)',
          descricao: 'Conjunto mecânico/hidráulico para violação e brecha rápida de portas blindadas.',
          quantidade: 2,
          valorUnitario: 18900.00
        },
        {
          id: 5,
          nome: 'Capacete Balístico de Alta Proteção (FAST)',
          descricao: 'Capacete tático com trilhos laterais para fixação de fones e lanternas.',
          quantidade: 30,
          valorUnitario: 3100.00
        }
      ]
    };
  },
  computed: {
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
      
      <!-- HERO COM A CAPA DA UNIDADE -->
      <div class="unidade-hero"
           :class="{ 'unidade-hero--contain': capaModo === 'contain' }"
           :style="{ '--capa-pos': capaPosicao }">
        <img v-if="capaModo === 'contain'" :src="capa" class="unidade-capa-bg" alt="" aria-hidden="true" />
        <img :src="capa" :alt="'Capa ' + sigla" class="unidade-capa-img" />
        <div class="unidade-hero-overlay"></div>
        
        <!-- LOGO SOBREPOSTO E TÍTULO -->
        <div class="unidade-hero-content">
          <div class="unidade-logo-badge">
            <img :src="logo" :alt="'Brasão ' + sigla" />
          </div>
          <div class="unidade-hero-text">
            <span class="unidade-tag">Unidade Especializada</span>
            <h1>{{ titulo }}</h1>
          </div>
        </div>
      </div>

      <!-- DESCRITIVO DA UNIDADE -->
      <section class="unidade-apresentacao">
        <p>{{ descricao }}</p>
      </section>

      <!-- CARDS DE RESUMO (KPIs) -->
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

      <!-- TABELA / LISTA DE MATERIAIS -->
      <section class="materiais-section">
        <div class="materiais-header">
          <h2>Portfólio de Equipamentos e Materiais</h2>
          <span class="materiais-sub">Detalhamento dos itens orçados para o ciclo 2027</span>
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
                <td class="col-total">{{ formatarMoeda(item.quantidade * item.valorUnitario) }}</td>
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

    </div>
  `
};