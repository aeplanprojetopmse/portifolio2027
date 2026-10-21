// js/views/especializadas/Getam.js
window.Getam = {
  name: 'getam',
  data() {
    return {
      titulo: 'Grupamento Especial Tático de Motocicletas (GETAM)',
      sigla: 'GETAM',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe voltada ao motopatrulhamento tático de pronta intervenção. Destaca-se pela rapidez, flexibilidade e capacidade de transpor congestionamentos urbanos e terrenos acidentados, combatendo roubos a transeuntes, assaltos ao transporte coletivo, tráfico de drogas e realizando escoltas táticas de batedores.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/getam/capa.png',
      logo: './src/getam/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Capacete Escamoteável Tático com Sistema de Comunicação Bluetooth Integrado',
          descricao: 'Capacete modular articulado em fibra de carbono/kevlar, com queixeira móvel, óculos solar interno e fone/microfone acoplados.',
          quantidade: 45,
          valorUnitario: 2850.00
        },
        {
          id: 2,
          nome: 'Jaqueta Tática de Proteção para Motociclista em Cordura 1000D com Proteções CE',
          descricao: 'Vestimenta de alta resistência à abrasão com protetores articulados em ombros, cotovelos e coluna, além de membrana impermeável.',
          quantidade: 45,
          valorUnitario: 1450.00
        },
        {
          id: 3,
          nome: 'Luva Tática de Couro e Kevlar com Proteção de Dorso em Fibra de Carbono',
          descricao: 'Luvas reforçadas com grip antiderrapante na palma, sensibilidade tátil e resistência extrema ao atrito em solo.',
          quantidade: 50,
          valorUnitario: 320.00
        },
        {
          id: 4,
          nome: 'Coldre Tático Polimérico de Perna com Retenção Nível III para Motociclista',
          descricao: 'Sistema de porte velado/ostensivo com trava de segurança antidesarme projetado para pilotagem em alta velocidade.',
          quantidade: 45,
          valorUnitario: 580.00
        },
        {
          id: 5,
          nome: 'Bota Tática de Motociclista Militar em Couro Hidrofugado com Protetor de Marcha',
          descricao: 'Calçado ergonômico de cano alto com placa de proteção para canela, tornozelo e biqueira de termoplástico reforçado.',
          quantidade: 45,
          valorUnitario: 890.00
        },
        {
          id: 6,
          nome: 'Kit de Intercomunicador sem Fio Integrado ao Rádio Digital da Viatura/HT',
          descricao: 'Sistema de rádio PTT (Push-to-Talk) sem fio instalado no guidão da motocicleta para comunicação instantânea sem tirar as mãos do comando.',
          quantidade: 25,
          valorUnitario: 1850.00
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