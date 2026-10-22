// js/views/sociais/Museu.js
window.Museu = {
  name: 'Museu',
  data() {
    return {
      titulo: 'Museu Histórico da Polícia Militar de Sergipe',
      sigla: 'Museu',
      descricao: 'Espaço cultural e centro de memória institucional dedicado à preservação, pesquisa e difusão da rica trajetória histórica da Polícia Militar de Sergipe desde sua criação em 1835. Abriga acervo de armamentos históricos, viaturas antigas, uniformes de época, condecorações, fotografias e documentos oficiais, promovendo exposições pedagógicas para a comunidade escolar e a sociedade em geral.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/museu/capa.png',
      logo: './src/museu/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Vitrine Expositora de Vidro Temperado de Segurança com Iluminação LED Fria',
          descricao: 'Módulo expositivo com fechamento hermético, vidro laminado de 8mm antirreflexo e iluminação em LED sem emissão de raios UV para proteção de peças históricas.',
          quantidade: 8,
          valorUnitario: 6800.00
        },
        {
          id: 2,
          nome: 'Totem Digital Interativo Touchscreen de Consulta Histórica (43 polegadas)',
          descricao: 'Terminal multimídia interativo com software de navegação pelo acervo digital, linha do tempo da corporação e biografias de comandantes e heróis da PMSE.',
          quantidade: 2,
          valorUnitario: 12500.00
        },
        {
          id: 3,
          nome: 'Manequim Expositor Realista Articulado para Fardamentos Históricos',
          descricao: 'Suporte anatômico em fibra de alta durabilidade com base metálica pesada para exibição de uniformes de gala, combate e fardamentos antigos da PMSE.',
          quantidade: 10,
          valorUnitario: 1450.00
        },
        {
          id: 4,
          nome: 'Desumidificador de Ar Digital e Termo-higrômetro de Precisão para Acervo',
          descricao: 'Equipamento contínuo de controle de umidade e temperatura ambiental para evitar proliferação de fungos e degradação de couros, tecidos e documentos em papel.',
          quantidade: 4,
          valorUnitario: 2900.00
        },
        {
          id: 5,
          nome: 'Sistema de Iluminação Expográfica em Trilhos com Spots LED Dimerizáveis',
          descricao: 'Trilhos eletrificados de teto com refletores direcionais de foco regulável e alta fidelidade de cor (IRC > 90) para valorização das obras expostas.',
          quantidade: 6,
          valorUnitario: 2200.00
        },
        {
          id: 6,
          nome: 'Kit de Conservação, Restauro Básico e Higienização de Documentos Históricos',
          descricao: 'Materiais técnicos de arquivologia e conservação: trinchas japonesas de pelo macio, caixas de polionda ácida, fitas de papel de arroz e espátulas de osso.',
          quantidade: 4,
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
            <span class="unidade-tag">Patrimônio Histórico / Cultural</span>
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