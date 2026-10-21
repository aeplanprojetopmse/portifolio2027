// js/views/especializadas/Caatinga.js
window.Caatinga = {
  name: 'caatinga',
  data() {
    return {
      titulo: 'Companhia Independente de Operações em Área de Caatinga (CIOPAC)',
      sigla: 'Caatinga',
      descricao: 'Unidade de elite da Polícia Militar de Sergipe especializada em operações táticas rurais, rastreamento e combate em ambiente inóspito de semiárido (bioma Caatinga). Atua no enfrentamento a organizações criminosas do "novo cangaço", repressão ao roubo de gado e patrulhamento das divisas interestaduais.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/caatinga/capa.png',
      logo: './src/caatinga/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Fuzil de Assalto Calibre 7.62x51mm com Trilho Picatinny',
          descricao: 'Armamento de alto poder de impacto e longo alcance, ideal para engajamento em terreno rural aberto e vegetação densa.',
          quantidade: 10,
          valorUnitario: 22000.00
        },
        {
          id: 2,
          nome: 'Monóculo de Visão Térmica Portátil de Longo Alcance',
          descricao: 'Equipamento optrônico para detecção de assinaturas de calor em matas e terrenos escuros a até 1.500 metros.',
          quantidade: 6,
          valorUnitario: 34000.00
        },
        {
          id: 3,
          nome: 'Kit de Fardamento e Coturno Especial em Couro/Cordura para Caatinga',
          descricao: 'Equipamento de proteção individual reforçado para resistir à espessura da vegetação espinhosa e às altas temperaturas do sertão.',
          quantidade: 40,
          valorUnitario: 1650.00
        },
        {
          id: 4,
          nome: 'Mochila de Patrulha Rural com Sistema de Hidratação Tática (Camelbak 3L)',
          descricao: 'Mochila com reservatório térmico antibacteriano e compartimentos para suporte operacional de longa duração no semiárido.',
          quantidade: 40,
          valorUnitario: 890.00
        },
        {
          id: 5,
          nome: 'Navegador GPS Portátil Militar com Mapeamento Topográfico',
          descricao: 'Dispositivo robusto e resistente a intempéries com coordenadas UTM e comunicação via satélite para áreas sem sinal de celular.',
          quantidade: 12,
          valorUnitario: 4800.00
        },
        {
          id: 6,
          nome: 'Drone Tático de Reconhecimento Rural com Câmera Dupla (Óptica 4K e Térmica)',
          descricao: 'Aeronave não tripulada com alcance de 8 km para varredura aérea prévia em cercos e operações em matagais.',
          quantidade: 2,
          valorUnitario: 45000.00
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