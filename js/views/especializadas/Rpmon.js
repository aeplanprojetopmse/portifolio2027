// js/views/especializadas/Rpmon.js
window.Rpmon = {
  name: 'Rpmon',
  data() {
    return {
      titulo: 'Regimento de Polícia Montada (RPMon / Cavalaria)',
      sigla: 'RPMon',
      descricao: 'Unidade tradicional de policiamento montado da Polícia Militar de Sergipe. Emprega o cavalo como ferramenta ostensiva de grande alcance visual e impacto psicológico dissuasivo, atuando no policiamento de parques, eventos públicos, praças desportivas, manifestações com controle de distúrbios civis e patrulhamento em áreas de difícil acesso a veículos motorizados.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/rpmon/capa.png',
      logo: './src/rpmon/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Sela Militar de Patrulhamento Montado em Couro Selecionado',
          descricao: 'Arreamento completo com loro de couro duplo, estribo de segurança em aço inox, barrigueira e peitoral de alta resistência.',
          quantidade: 25,
          valorUnitario: 3850.00
        },
        {
          id: 2,
          nome: 'Kit de Proteção Antidistúrbio Equino para CDC (Caneleiras e Viseira Facial)',
          descricao: 'Conjunto em policarbonato e espuma de alta densidade para proteção das patas, tendões e cabeça do cavalo contra arremesso de projéteis.',
          quantidade: 20,
          valorUnitario: 2400.00
        },
        {
          id: 3,
          nome: 'Capacete Hípico Tático com Viseira em Policarbonato 3mm e Comunicação',
          descricao: 'Capacete para cavaleiro militar com proteção nucal, suporte a rádio transmissor e viseira resistente a impactos diretos.',
          quantidade: 30,
          valorUnitario: 1650.00
        },
        {
          id: 4,
          nome: 'Bastão Longo de Choque Montado em Polímero de Alta Densidade (1,20m)',
          descricao: 'Equipamento não letal com empunhadura anatômica emborrachada e fiador de couro para controle e dispersão de multidões.',
          quantidade: 35,
          valorUnitario: 280.00
        },
        {
          id: 5,
          nome: 'Reboque Trailer Veicular Trucado para Transporte de 4 Equinos',
          descricao: 'Carreta tática com divisórias acolchoadas, rampa antiescorregamento, ventilação superior e sistema de freio inercial.',
          quantidade: 2,
          valorUnitario: 78000.00
        },
        {
          id: 6,
          nome: 'Kit de Ferrageamento e Manutenção Ortopédica Equina de Campo',
          descricao: 'Estojo profissional com cravadeiras, grosas, tenazes, torquês e jogo de ferraduras ortopédicas de alta durabilidade.',
          quantidade: 4,
          valorUnitario: 4200.00
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