// js/views/especializadas/Cto.js
window.Cto = window.cto = window.CTO = {
  name: 'cto',
  data() {
    return {
      titulo: 'Companhia Tática de Operações (CTO)',
      sigla: 'CTO',
      descricao: 'Unidade de tropa de choque da Polícia Militar de Sergipe especializada em controle de distúrbios civis (CDC), intervenções táticas em estabelecimentos prisionais, cumprimento de mandados de reintegração de posse de alto risco, escolta de presos de alta periculosidade e policiamento em praças desportivas.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/cto/capa.png',
      logo: './src/cto/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Lançador de Munição de Menor Potencial Ofensivo Calibre 37/38mm (ou 40mm)',
          descricao: 'Armamento longo para dispersão e lançamento de projéteis de borracha, cápsulas lacrimogêneas e fumígenas em CDC.',
          quantidade: 12,
          valorUnitario: 13500.00
        },
        {
          id: 2,
          nome: 'Escudo Antidistúrbio Transparente em Policarbonato de Alta Resistência (1,20m)',
          descricao: 'Escudo de choque ergonômico com empunhadura amortecida e proteção contra arremesso de objetos contundentes e coquetéis molotov.',
          quantidade: 40,
          valorUnitario: 1250.00
        },
        {
          id: 3,
          nome: 'Traje de Proteção Corporal Antidistúrbio Completo (Armadura CDC)',
          descricao: 'Conjunto rígido articulado para tórax, costas, ombros, braços, coxas e caneleiras com absorção de impacto balístico/mecânico.',
          quantidade: 35,
          valorUnitario: 3800.00
        },
        {
          id: 4,
          nome: 'Capacete Tático Antidistúrbio com Viseira de Policarbonato 4mm e Protetor de Nuca',
          descricao: 'Capacete com retenção de 4 pontos, resistente a impactos perfurantes, líquidos inflamáveis e substâncias químicas.',
          quantidade: 40,
          valorUnitario: 1950.00
        },
        {
          id: 5,
          nome: 'Máscara Facial Contra Gases com Filtros Combinados para Agentes Químicos (CS/CN/OC)',
          descricao: 'Equipamento de proteção respiratória panorâmico com vedação hermética para operadores em ambientes saturados de gás.',
          quantidade: 40,
          valorUnitario: 2400.00
        },
        {
          id: 6,
          nome: 'Lote de Munições e Granadas Não Letais (Efeito Moral, Gás Lacrimogêneo e Luz e Som)',
          descricao: 'Cargas fumígenas, granadas de dispersão indoor/outdoor e cartuchos elastômeros para contenção de tumultos.',
          quantidade: 150,
          valorUnitario: 320.00
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