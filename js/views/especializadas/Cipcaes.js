// js/views/especializadas/Cipcaes.js
window.Cipcaes = {
  name: 'cipcaes',
  data() {
    return {
      titulo: 'Companhia Independente de Policiamento com Cães (CIPCaes)',
      sigla: 'CIPCaes',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe que emprega cães de serviço policial (K-9) em missões de alta complexidade: faro de entorpecentes, armas de fogo e artefatos explosivos, busca e captura de infratores em áreas de mata ou escombros, além de apoio em intervenções prisionais e controle de distúrbios.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/cipcaes/capa.png',
      logo: './src/cipcaes/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Colete Balístico K-9 com Arnês Tático e Ponto de Ancoragem',
          descricao: 'Proteção balística Nível III-A anatômica para cães policiais de assalto e busca, com alças de transporte e içamento rápido.',
          quantidade: 12,
          valorUnitario: 4850.00
        },
        {
          id: 2,
          nome: 'Traje de Mordida Completo para Treinamento Tático (Bite Suit Profissional)',
          descricao: 'Equipamento de proteção reforçado em tecido aramida para figurante em treinamento de ataque, mordida e imobilização.',
          quantidade: 4,
          valorUnitario: 8900.00
        },
        {
          id: 3,
          nome: 'Kit de Odores Sintéticos para Treinamento de Faro (Narcóticos e Explosivos)',
          descricao: 'Conjunto de substâncias de padrão internacional para condicionamento olfativo avançado de cães de detecção.',
          quantidade: 6,
          valorUnitario: 5400.00
        },
        {
          id: 4,
          nome: 'Caixa de Transporte Veicular Isotérmica em Alumínio de Alta Resistência',
          descricao: 'Módulo duplo com ventilação forçada, dreno e isolamento térmico para transporte seguro de cães em viaturas táticas.',
          quantidade: 8,
          valorUnitario: 7200.00
        },
        {
          id: 5,
          nome: 'Kit de Primeiros Socorros Veterinários em Combate (K-9 Tactical First Aid)',
          descricao: 'Bolsa tática de emergência para cinotécnicos com torniquetes veterinários, selos hemostáticos e fluidoterapia de campo.',
          quantidade: 10,
          valorUnitario: 1250.00
        },
        {
          id: 6,
          nome: 'Coleira Tática com Rastreamento GPS e Iluminação Estroboscópica',
          descricao: 'Dispositivo eletrônico com geolocalização via satélite em tempo real para cães de busca em matagais densos e escuridão.',
          quantidade: 14,
          valorUnitario: 1950.00
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