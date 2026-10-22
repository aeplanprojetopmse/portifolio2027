// js/views/sociais/Bptran.js
window.Bptran = {
  name: 'Bptran',
  data() {
    return {
      titulo: 'Educação para o Trânsito (BPTran)',
      sigla: 'BPTran',
      descricao: 'Iniciativa socioeducativa desenvolvida pela Polícia Militar de Sergipe, por meio do Batalhão de Policiamento de Trânsito (BPTran). Atua diretamente em escolas públicas e privadas, praças e eventos comunitários na formação de pedestres e futuros condutores conscientes, utilizando ferramentas lúdicas, vivências práticas em minicidade de trânsito itinerante e campanhas de preservação da vida nas vias públicas.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/bptran/capa.png',
      logo: './src/bptran/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Kit Minicidade de Trânsito Itinerante com Sinalização Completa',
          descricao: 'Circuito pedagógico modular em lona vinílica reforçada com semáforos eletrônicos em miniatura, faixas de pedestres e placas de trânsito regulamentadas.',
          quantidade: 2,
          valorUnitario: 32000.00
        },
        {
          id: 2,
          nome: 'Mini Veículo Elétrico Infantil Pedagógico para Simulação de Direção',
          descricao: 'Minicarros elétricos recarregáveis com cinto de segurança e controle remoto de apoio para aulas práticas de trânsito com crianças.',
          quantidade: 8,
          valorUnitario: 3450.00
        },
        {
          id: 3,
          nome: 'Kit de Óculos Simuladores de Alcoolemia e Fadiga (Distorção Visual)',
          descricao: 'Dispositivos ópticos especiais que simulam a perda de reflexos, percepção de profundidade e visão turva decorrentes do consumo de álcool para palestras com jovens.',
          quantidade: 6,
          valorUnitario: 2800.00
        },
        {
          id: 4,
          nome: 'Sistema Audiovisual Móvel para Palestras Educativas em Escolas',
          descricao: 'Projetor multimídia de alta resolução, tela de projeção retrátil tripé e caixa de som portátil amplificada com microfones sem fio.',
          quantidade: 4,
          valorUnitario: 5600.00
        },
        {
          id: 5,
          nome: 'Lote de Cartilhas Didáticas e Jogos Educativos de Trânsito (Infantil)',
          descricao: 'Material gráfico ilustrado, livros de atividades, jogos da memória e tabuleiros com temas de cidadania e segurança viária para distribuição a alunos.',
          quantidade: 3000,
          valorUnitario: 6.50
        },
        {
          id: 6,
          nome: 'Tenda Inflável Promocional para Blitz Educativa e Ações Comunitárias (5x5m)',
          descricao: 'Tenda de montagem ultrarrápida com motor embutido e personalização visual institucional para pontos de apoio em campanhas públicas.',
          quantidade: 3,
          valorUnitario: 7800.00
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
            <span class="unidade-tag">Projeto Social / Educativo</span>
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