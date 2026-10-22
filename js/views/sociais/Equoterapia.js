
window.Equoterapia = {
  name: 'Equoterapia',
  data() {
    return {
      titulo: 'Centro de Equoterapia da Polícia Militar de Sergipe',
      sigla: 'Equoterapia',
      descricao: 'Serviço interdisciplinar especializado da Polícia Militar de Sergipe que utiliza o cavalo como instrumento cinesioterapêutico e pedagógico na reabilitação e desenvolvimento biopsicossocial de crianças, adolescentes e adultos com deficiências, necessidades especiais e transtornos do neurodesenvolvimento (como TEA, paralisia cerebral e síndrome de Down), atendendo à comunidade sergipana e dependentes da corporação.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/equoterapia/capa.png',
      logo: './src/equoterapia/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Sela Terapêutica de Montaria Adaptada com Alça de Apoio Frontal',
          descricao: 'Sela anatômica de aproximação sem armação rígida, permitindo a transmissão direta dos movimentos tridimensionais do dorso do cavalo.',
          quantidade: 8,
          valorUnitario: 3400.00
        },
        {
          id: 2,
          nome: 'Rampa Metálica de Acessibilidade com Piso Antiderrapante para Montaria',
          descricao: 'Estrutura adaptada com corrimão duplo de segurança e desnível suave para embarque de cadeirantes e praticantes com mobilidade reduzida.',
          quantidade: 2,
          valorUnitario: 18500.00
        },
        {
          id: 3,
          nome: 'Capacete Hípico de Segurança Regulável para Praticantes (Infantil e Adulto)',
          descricao: 'Capacete com certificação de segurança internacional, sistema de absorção de impactos e fixação de três pontas.',
          quantidade: 25,
          valorUnitario: 380.00
        },
        {
          id: 4,
          nome: 'Kit de Estímulo Psicomotor e Sensorial para Picadeiro',
          descricao: 'Conjunto lúdico com argolas pedagógicas, bolas bobath, painéis de textura, túneis e cones coloridos para exercícios cognitivos sobre o cavalo.',
          quantidade: 6,
          valorUnitario: 2900.00
        },
        {
          id: 5,
          nome: 'Estribo de Segurança com Gaiola e Travas de Liberação Rápida',
          descricao: 'Estribos anatômicos que impedem o travamento dos pés dos praticantes em eventuais desequilíbrios durante a sessão.',
          quantidade: 10,
          valorUnitario: 450.00
        },
        {
          id: 6,
          nome: 'Manta de Equoterapia em Gel com Amortecimento de Impacto',
          descricao: 'Manta térmica e viscoelástica para alívio de pressão sobre a coluna do animal e maior conforto térmico ao praticante.',
          quantidade: 12,
          valorUnitario: 620.00
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