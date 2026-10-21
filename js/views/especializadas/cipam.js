// js/views/especializadas/cipam.js
window.Cipam = {
  name: 'Cipam',
  data() {
    return {
      titulo: 'Companhia Independente de Polícia Ambiental (CIPAM)',
      sigla: 'CIPAM',
      descricao: 'Unidade especializada da Polícia Militar de Sergipe dedicada à preservação dos recursos naturais, fiscalização de biomas (Mata Atlântica, Caatinga e Manguezais), combate ao desmatamento, enfrentamento ao tráfico de fauna silvestre, repressão à pesca predatória e controle de poluição sonora em todo o estado.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/cipam/capa.png',
      logo: './src/cipam/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Embarcação Tática de Alumínio com Motor de Popa 60HP',
          descricao: 'Bote com casco reforçado para patrulhamento fluvial e fiscalização em manguezais e bacias hidrográficas (Rios São Francisco e Vaza-Barris).',
          quantidade: 2,
          valorUnitario: 68000.00
        },
        {
          id: 2,
          nome: 'Sonômetro Digital Calibrado Homologado pelo INMETRO (Decibelímetro)',
          descricao: 'Equipamento de precisão para medição técnica e laudo pericial de poluição sonora em ações de fiscalização urbana e rural.',
          quantidade: 8,
          valorUnitario: 11500.00
        },
        {
          id: 3,
          nome: 'Kit de Resgate e Manejo de Fauna Silvestre e Peçonhentos',
          descricao: 'Conjunto com pinças herpetológicas, cambões retráteis, puçás de contenção e caixas de transporte ventiladas homologadas.',
          quantidade: 10,
          valorUnitario: 2450.00
        },
        {
          id: 4,
          nome: 'Colete Balístico Flutuante Tático Nível III-A',
          descricao: 'Colete que combina proteção balística integral com sistema de flutuabilidade positiva para operações embarcadas seguras.',
          quantidade: 25,
          valorUnitario: 4200.00
        },
        {
          id: 5,
          nome: 'Drone Multiespectral para Monitoramento de Desmatamento e Queimadas',
          descricao: 'Aeronave não tripulada com sensores de índice de vegetação e alcance estendido para mapeamento de áreas de preservação permanente (APP).',
          quantidade: 2,
          valorUnitario: 52000.00
        },
        {
          id: 6,
          nome: 'Binóculo Náutico com Bússola e Retículo Iluminado (7x50)',
          descricao: 'Dispositivo óptico impermeável e flutuante para identificação a longa distância de caça e pesca predatória.',
          quantidade: 8,
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