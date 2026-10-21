// js/views/especializadas/Bprp.js
window.Bprp = {
  name: 'bprp',
  data() {
    return {
      titulo: 'Batalhão de Polícia de Radiopatrulha (BPRp)',
      sigla: 'BPRp',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe voltada ao radiopatrulhamento tático motorizado, suporte imediato às unidades de área e combate qualificado aos crimes violentos e ao tráfico de drogas na Região Metropolitana de Aracaju e municípios adjacentes.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/bprp/capa.png',
      logo: './src/bprp/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser ver 100% da arte com fundo desfocado
      capaPosicao: 'center 20%', // Ajuste o ponto focal da imagem conforme a pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Carabina Tática Semiautomática Calibre 9x19mm',
          descricao: 'Armamento longo compacto para dotação em viaturas de radiopatrulha, ideal para confronto urbano.',
          quantidade: 20,
          valorUnitario: 9200.00
        },
        {
          id: 2,
          nome: 'Rádio Transceptor Portátil Digital (HT) com Criptografia',
          descricao: 'Equipamento de telecomunicação padrão digital para integração rápida e segura com o CIOSP.',
          quantidade: 40,
          valorUnitario: 4800.00
        },
        {
          id: 3,
          nome: 'Dispositivo Eletrônico de Incapacitação Neuromuscular (Taser)',
          descricao: 'Armamento de menor potencial ofensivo para imobilização não letal em ocorrências de resistência armada.',
          quantidade: 15,
          valorUnitario: 8900.00
        },
        {
          id: 4,
          nome: 'Colete Balístico Nível III-A com Capa Modular Tática',
          descricao: 'Proteção individual balística com painéis leves e sistema de acoplagem para carregadores e rádio.',
          quantidade: 50,
          valorUnitario: 3200.00
        },
        {
          id: 5,
          nome: 'Lanterna Tática LED Recarregável (2000 lúmens)',
          descricao: 'Lanterna tática de alta intensidade com estrobo e coldre rígido para patrulhamento noturno.',
          quantidade: 50,
          valorUnitario: 420.00
        },
        {
          id: 6,
          nome: 'Kit de Primeiros Socorros Táticos (IFAK / Controle de Hemorragias)',
          descricao: 'Torniquetes táticos homologados, gaze hemostática e selo de tórax para atendimento pré-hospitalar em combate.',
          quantidade: 35,
          valorUnitario: 650.00
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