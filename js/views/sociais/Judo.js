// js/views/sociais/Judo.js
window.Judo = {
  name: 'Judo',
  data() {
    return {
      titulo: 'Projeto Social de Judô da PMSE',
      sigla: 'Judô',
      descricao: 'Iniciativa de alcance comunitário da Polícia Militar de Sergipe que utiliza a arte marcial do Judô como instrumento de inclusão social, disciplina, respeito e desenvolvimento motor. Atende crianças e jovens de comunidades em situação de vulnerabilidade social em polos esportivos da corporação, promovendo a prevenção primária à violência, o incentivo ao esporte de rendimento e o fortalecimento do vínculo de confiança com a sociedade.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/judo/capa.png',
      logo: './src/judo/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Tatame Olímpico Oficial de Alta Densidade (Módulos 2m x 1m x 40mm)',
          descricao: 'Placas profissionais com revestimento vinílico antiderrapante tipo palha de arroz e espuma de alta absorção de impacto para segurança nas quedas.',
          quantidade: 100,
          valorUnitario: 340.00
        },
        {
          id: 2,
          nome: 'Kimono Oficial de Judô com Faixa (Infantil e Juvenil)',
          descricao: 'Uniforme completo (judogi) confeccionado em tecido trançado 100% algodão reforçado nas áreas de pegada, acompanhado de faixas graduadas.',
          quantidade: 120,
          valorUnitario: 245.00
        },
        {
          id: 3,
          nome: 'Boneco Tático de Arremesso para Judô (Dummy / 25kg e 35kg)',
          descricao: 'Equipamento anatômico para repetição contínua de golpes de projeção (nage-waza) e transições para o solo sem desgaste físico de parceiros.',
          quantidade: 6,
          valorUnitario: 1850.00
        },
        {
          id: 4,
          nome: 'Kit de Preparação Física e Treinamento Funcional para Judocas',
          descricao: 'Conjunto com elásticos extensores tipo uchi-komi bands, kettlebells, cordas navais e medicine balls para ganho de força e resistência.',
          quantidade: 10,
          valorUnitario: 1280.00
        },
        {
          id: 5,
          nome: 'Placar Eletrônico Digital Portátil com Controle para Torneios',
          descricao: 'Painel LED de pontuação com contagem de tempo (osaekomi/waza-ari/ippon) e sinalização sonora para simulação de competições federadas.',
          quantidade: 2,
          valorUnitario: 4200.00
        },
        {
          id: 6,
          nome: 'Kit de Agasalho Esportivo e Mochila Institucional do Projeto',
          descricao: 'Vestimenta de viagem e representação para jovens atletas beneficiários do projeto social em disputas de campeonatos locais e interestaduais.',
          quantidade: 80,
          valorUnitario: 260.00
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
            <span class="unidade-tag">Projeto Social / Esportivo</span>
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