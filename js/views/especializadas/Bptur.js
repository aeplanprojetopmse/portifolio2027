// js/views/especializadas/Bptur.js
window.Bptur = {
  name: 'Bptur',
  data() {
    return {
      titulo: 'Batalhão de Policiamento Turístico (BPTur)',
      sigla: 'BPTur',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe dedicada à proteção, acolhimento e segurança de turistas e cidadãos nas áreas litorâneas, polos gastronômicos, monumentos históricos e grandes eventos culturais do estado, atuando com policiamento ostensivo, ciclopatrulhamento e patrulha em faixa de areia.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/bptur/capa.png',
      logo: './src/bptur/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Quadriciclo 4x4 Tático Operacional (500cc)',
          descricao: 'Veículo off-road adaptado com sirene e giroflex estroboscópico para patrulhamento ostensivo na faixa de areia da praia.',
          quantidade: 4,
          valorUnitario: 58000.00
        },
        {
          id: 2,
          nome: 'Bicicleta Elétrica Tática com Sistema de Iluminação LED',
          descricao: 'Bicicleta com assistência elétrica para ciclopatrulhamento ágil em calçadões, orlas e áreas de grande fluxo de pedestres.',
          quantidade: 16,
          valorUnitario: 5200.00
        },
        {
          id: 3,
          nome: 'Câmera Corporal Operacional Individual (Bodycam)',
          descricao: 'Câmera acoplável com gravação contínua em alta definição, visão noturna e transmissão em tempo real.',
          quantidade: 30,
          valorUnitario: 3800.00
        },
        {
          id: 4,
          nome: 'Dispositivo Eletrônico Portátil de Tradução Simultânea Multilíngue',
          descricao: 'Aparelho portátil com suporte a mais de 40 idiomas para atendimento humanizado e orientação a turistas estrangeiros.',
          quantidade: 10,
          valorUnitario: 1450.00
        },
        {
          id: 5,
          nome: 'Colete Balístico Nível III-A Ultraleve e Termorregulador',
          descricao: 'Proteção balística com forro de alta respirabilidade projetado para uso prolongado em clima litorâneo quente.',
          quantidade: 40,
          valorUnitario: 3100.00
        },
        {
          id: 6,
          nome: 'Espargidor de Pimenta Tipo Gel com Traçador UV (Não Letal)',
          descricao: 'Agente químico em gel de menor potencial ofensivo, ideal para uso em aglomerações sem dispersão pelo vento marítimo.',
          quantidade: 40,
          valorUnitario: 180.00
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