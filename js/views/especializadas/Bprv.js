// js/views/especializadas/Bprv.js
window.Bprv = {
  name: 'Bprv',
  data() {
    return {
      titulo: 'Batalhão de Polícia Rodoviária Estadual (BPRv)',
      sigla: 'BPRv',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe responsável pelo policiamento ostensivo e fiscalização de trânsito em toda a malha rodoviária estadual, atuando na prevenção de acidentes e no combate qualificado ao tráfico de armas, entorpecentes e roubo de cargas nas rodovias.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/bprv/capa.png',
      logo: './src/bprv/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Etilômetro Portátil Homologado (Bafômetro Digital)',
          descricao: 'Equipamento de precisão certificado pelo INMETRO com impressora térmica integrada para fiscalização da Lei Seca.',
          quantidade: 12,
          valorUnitario: 14800.00
        },
        {
          id: 2,
          nome: 'Etilômetro Passivo de Triagem Rápida (Bastão LED)',
          descricao: 'Sensor rápido por amostragem de ar para triagem imediata de condutores em blitz rodoviária.',
          quantidade: 20,
          valorUnitario: 3900.00
        },
        {
          id: 3,
          nome: 'Medidor de Velocidade Portátil Tipo Laser (LIDAR)',
          descricao: 'Radar óptico com captura fotográfica de infrações em tempo real a longas distâncias.',
          quantidade: 6,
          valorUnitario: 42000.00
        },
        {
          id: 4,
          nome: 'Kit de Sinalização Rodoviária de Emergência (Cones Refletivos e Luzes LED)',
          descricao: 'Cones pesados NBR com faixas prismáticas e sinalizadores estroboscópicos magnéticos para bloqueio de pista.',
          quantidade: 25,
          valorUnitario: 1850.00
        },
        {
          id: 5,
          nome: 'Colete de Alta Visibilidade Balístico Nível III-A',
          descricao: 'Colete com proteção balística e acabamento externo em tecido fluorescente/refletivo de alta durabilidade.',
          quantidade: 40,
          valorUnitario: 3450.00
        },
        {
          id: 6,
          nome: 'Câmera Veicular Embarcada com Reconhecimento de Placas (OCR/LPR)',
          descricao: 'Sistema inteligente de monitoramento para viatura com leitura automática de placas em movimento e alerta de restrição.',
          quantidade: 8,
          valorUnitario: 16500.00
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