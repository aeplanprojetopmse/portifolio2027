// js/views/sociais/Proerd.js
window.Proerd = {
  name: 'Proerd',
  data() {
    return {
      titulo: 'Programa Educacional de Resistência às Drogas (PROERD)',
      sigla: 'PROERD',
      descricao: 'Estratégia institucional de prevenção primária da Polícia Militar de Sergipe desenvolvida em parceria com as escolas públicas e privadas e as famílias. Policiais militares devidamente capacitados atuam como educadores sociais em sala de aula, orientando crianças e adolescentes a resistirem às pressões do meio, prevenindo o uso de drogas e a prática da violência, e estimulando tomadas de decisão seguras e responsáveis.',
      
      // CAMINHOS DAS IMAGENS NA PASTA SRC:
      capa: './src/proerd/capa.png',
      logo: './src/proerd/logo.png',

      // AJUSTES DINÂMICOS DA CAPA:
      capaModo: 'cover',        // Mude para 'contain' se quiser exibir a imagem 100% inteira com fundo desfocado
      capaPosicao: 'center 20%', // Ponto focal da pintura
      
      // ESQUELETO DE MATERIAIS DO PDF
      materiais: [
        {
          id: 1,
          nome: 'Livro Pedagógico do Estudante PROERD (Currículo 5º e 7º anos)',
          descricao: 'Material didático oficial ilustrado com atividades teóricas e práticas sobre pressão de pares, tomada de decisão e autoproteção.',
          quantidade: 5000,
          valorUnitario: 8.50
        },
        {
          id: 2,
          nome: 'Camiseta Institucional de Formatura PROERD em Tecido Dry-Fit',
          descricao: 'Uniforme comemorativo com estampa oficial do programa e do Leão Daren para uso de todos os formandos nas solenidades de conclusão.',
          quantidade: 5000,
          valorUnitario: 22.00
        },
        {
          id: 3,
          nome: 'Kit de Certificados em Papel Especial e Medalhas de Mérito Estudantil',
          descricao: 'Diplomas oficiais de conclusão de curso com acabamento refinado e medalhas metálicas personalizadas para alunos destaques da redação.',
          quantidade: 5000,
          valorUnitario: 4.80
        },
        {
          id: 4,
          nome: 'Mascote Inflável Gigante do Leão Daren com Motor Bivolt (3 metros)',
          descricao: 'Estrutura promocional inflável do símbolo do PROERD para recepção lúdica das crianças em formaturas e eventos escolares.',
          quantidade: 2,
          valorUnitario: 6500.00
        },
        {
          id: 5,
          nome: 'Kit Audiovisual Portátil de Apoio ao Policial Instrutor',
          descricao: 'Conjunto com mini projetor multimídia LED, caixa de som amplificada portátil com microfone sem fio e ponteira laser para aulas dinâmicas.',
          quantidade: 12,
          valorUnitario: 3400.00
        },
        {
          id: 6,
          nome: 'Pelúcia Temática do Leão Daren (Mascote Oficial para Premiações)',
          descricao: 'Brinquedo temático antialérgico oficial entregue como reconhecimento aos melhores alunos do concurso de redação em cada polo de ensino.',
          quantidade: 200,
          valorUnitario: 45.00
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
            <span class="unidade-tag">Projeto Social / Prevenção</span>
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