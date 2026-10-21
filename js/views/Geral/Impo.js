// js/views/Geral/Impo.js
window.Impo = {
  name: 'Impo',
  data() {
    return {
      titulo: 'Instrumentos de Menor Potencial Ofensivo (IMPO)',
      sigla: 'IMPO',
      descricao: 'Projeto corporativo da Polícia Militar de Sergipe focado na modernização, padronização e dotação em larga escala de Instrumentos de Menor Potencial Ofensivo para o policiamento ostensivo geral. Tem como objetivo consolidar a doutrina do uso progressivo e proporcional da força, preservando vidas, garantindo a integridade física de policiais e cidadãos e respaldando a atuação operacional.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/impo/capa.png',
      logo: './src/impo/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da imagem
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Dispositivo Eletrônico de Incapacitação Neuromuscular (Taser / Spark)',
          descricao: 'Equipamento de choque de alta tecnologia com sistema de registro de disparos, mira laser e cartuchos de dardos energizados.',
          quantidade: 120,
          valorUnitario: 8400.00
        },
        {
          id: 2,
          nome: 'Espargidor de Pimenta em Gel para Porte Individual (OC / 70g)',
          descricao: 'Spray incapacitante em gel direcional com trava de segurança de acionamento rápido, resistente a desvios por correntes de ar.',
          quantidade: 500,
          valorUnitario: 145.00
        },
        {
          id: 3,
          nome: 'Munição de Elastômero Calibre 12 (Borracha Monoimpacto)',
          descricao: 'Cartuchos não letais de borracha para espingardas calibre 12, indicados para dispersão de aglomerações e contenção de infratores agressivos.',
          quantidade: 1500,
          valorUnitario: 28.00
        },
        {
          id: 4,
          nome: 'Bastão Tático Retrátil em Aço Temperado com Coldre Giratório',
          descricao: 'Bastão expansível de alta resistência mecânica para defesa pessoal policial, imobilização e quebra de vidros em resgates.',
          quantidade: 350,
          valorUnitario: 290.00
        },
        {
          id: 5,
          nome: 'Granada de Efeito Moral Indoor/Outdoor com Carga Mínima de Fragmentos',
          descricao: 'Artefato acústico e luminoso de atordoamento momentâneo para entradas táticas e controle de desordens públicas.',
          quantidade: 250,
          valorUnitario: 310.00
        },
        {
          id: 6,
          nome: 'Algema de Aço Carbono com Trava Dupla e Dobradiça Articulada',
          descricao: 'Algema de alta segurança com restrição de movimentação avançada e resistência à tração superior a 2.000 N.',
          quantidade: 400,
          valorUnitario: 195.00
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
            <span class="unidade-tag">Projeto Corporativo Geral</span>
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