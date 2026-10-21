// js/views/Geral/Taticos.js
window.Taticos = {
  name: 'Taticos',
  data() {
    return {
      titulo: 'Projeto Patrulhamento Tático / Força Tática',
      sigla: 'Táticos',
      descricao: 'Projeto estruturante da Polícia Militar de Sergipe focado na padronização doutrinária, treinamento tático continuado e reaparelhamento bélico das equipes de Força Tática dos Batalhões de Área (capital e interior). Constitui o segundo escalão de resposta imediata da corporação para enfrentamento a ocorrências de média e alta gravidade, saturação em áreas conflagradas e apoio tático direto às guarnições convencionais de radiopatrulha.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/taticos/capa.png',
      logo: './src/taticos/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Espingarda Tática Calibre 12 (Pump Action) com Coronha Retrátil',
          descricao: 'Armamento longo para emprego de munições de contenção física e menor potencial ofensivo em incursões táticas.',
          quantidade: 40,
          valorUnitario: 6800.00
        },
        {
          id: 2,
          nome: 'Mira Holográfica Tipo Red Dot para Armamento Longo com Suporte Tático',
          descricao: 'Sistema óptico com ponto vermelho colimado para visada instintiva e rápida aquisição de alvos em curta distância.',
          quantidade: 60,
          valorUnitario: 3200.00
        },
        {
          id: 3,
          nome: 'Escudo Balístico Portátil Nível III-A com Visor e Alça Ergonômica',
          descricao: 'Escudo tático leve para progressão e aproximação em corredores, becos e ambientes urbanos de alto risco.',
          quantidade: 20,
          valorUnitario: 9800.00
        },
        {
          id: 4,
          nome: 'Capacete Balístico Nível III-A com Trilhos Laterais e Suporte Noturno',
          descricao: 'Proteção craniana individual contra fragmentos e impactos de projéteis de armas curtas com sistema de amortecimento interno.',
          quantidade: 80,
          valorUnitario: 2950.00
        },
        {
          id: 5,
          nome: 'Lanterna Tática de Cano com Acionador Remoto por Fio (1500 lúmens)',
          descricao: 'Módulo de iluminação robusto resistente a recuo de disparo para identificação de ameaças em baixa luminosidade.',
          quantidade: 60,
          valorUnitario: 650.00
        },
        {
          id: 6,
          nome: 'Kit de Entrada Forçada Veicular (Alavanca Tática Tipo Halligan e Corta-Frio)',
          descricao: 'Conjunto de ferramentas manuais reforçadas para desobstrução rápida de vias, arrombamentos táticos e resgates de emergência.',
          quantidade: 25,
          valorUnitario: 1450.00
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
            <span class="unidade-tag">Projeto Geral / Operacional</span>
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