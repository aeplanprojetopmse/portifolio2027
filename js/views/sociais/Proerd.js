// js/views/sociais/Proerd.js
window.Proerd = window.proerd = {
  name: 'Proerd',
  data() {
    return {
      chaveUnidade: 'proerd',
      titulo: 'Programa Educacional de Resistência às Drogas (PROERD)',
      sigla: 'PROERD',
      descricao: 'Estratégia institucional de prevenção primária da Polícia Militar de Sergipe desenvolvida em parceria com as escolas públicas e privadas e as famílias. Policiais militares devidamente capacitados atuam como educadores sociais em sala de aula, orientando crianças e adolescentes a resistirem às pressões do meio, prevenindo o uso de drogas e a prática da violência, e estimulando tomadas de decisão seguras e responsáveis.',
      capa: './src/proerd/capa.png',
      logo: './src/proerd/logo.png',
      capaModo: 'contain',
      capaPosicao: 'center 30%',

      // COLE AQUI O LINK OU ID DO SEU VÍDEO DO YOUTUBE:
      // Aceita: 'https://www.youtube.com/watch?v=ID', 'https://youtu.be/ID' ou o código direto
      videoYoutube: 'https://youtu.be/ccIf7toksFI?si=1vQ1nCwxjkUbXwat'
    };
  },
  computed: {
    // Converte automaticamente qualquer formato de link do YouTube para o formato de embed
    videoEmbedUrl() {
      if (!this.videoYoutube) return null;
      const url = this.videoYoutube.trim();
      if (url.includes('youtube.com/embed/')) return url;
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes('watch?v=')) {
        const id = url.split('watch?v=')[1]?.split('&')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (!url.includes('/') && url.length > 5) {
        return `https://www.youtube.com/embed/${url}`;
      }
      return url;
    },
    materiais() {
      return window.PortfolioStore ? window.PortfolioStore.obterMateriais(this.chaveUnidade) : [];
    },
    carregando() {
      return window.PortfolioStore ? window.PortfolioStore.carregando : false;
    },
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
      <!-- HERO COM A CAPA -->
      <div class="unidade-hero" :class="{ 'unidade-hero--contain': capaModo === 'contain' }" :style="{ '--capa-pos': capaPosicao }">
        <img v-if="capaModo === 'contain'" :src="capa" class="unidade-capa-bg" alt="" aria-hidden="true" />
        <img :src="capa" :alt="'Capa ' + sigla" class="unidade-capa-img" />
        <div class="unidade-hero-overlay"></div>
        <div class="unidade-hero-content">
          <div class="unidade-logo-badge"><img :src="logo" :alt="'Brasão ' + sigla" /></div>
          <div class="unidade-hero-text">
            <span class="unidade-tag">Projeto Social / Prevenção</span>
            <h1>{{ titulo }}</h1>
          </div>
        </div>
      </div>

      <!-- DESCRITIVO -->
      <section class="unidade-apresentacao">
        <p>{{ descricao }}</p>
      </section>

      <!-- VÍDEO INSTITUCIONAL (RESPONSIVO 16:9) -->
      <section v-if="videoEmbedUrl" class="card-generico" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div style="border-left: 4px solid #e5a93b; padding-left: 0.8rem;">
          <h2 style="font-family: 'Medula One', cursive; font-size: 2.2rem; color: #1a2430; margin: 0; line-height: 1;">Vídeo Institucional</h2>
          <span style="font-size: 0.9rem; color: #64748b;">Conheça a atuação e o impacto social do PROERD</span>
        </div>
        <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.18); background-color: #000;">
          <iframe 
            :src="videoEmbedUrl" 
            title="Vídeo Institucional PROERD" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </section>

      <!-- CARREGAMENTO -->
      <div v-if="carregando" class="card-generico" style="text-align: center; padding: 2.5rem;">
        <p style="font-size: 1.1rem; color: #1a2430; font-weight: bold;">Carregando materiais do Portfólio...</p>
      </div>

      <!-- SEM ITENS COM 'TRUE' -->
      <div v-else-if="materiais.length === 0" class="card-generico" style="text-align: center; padding: 2rem;">
        <p style="color: #64748b;">Nenhum material aprovado no portfólio para este projeto no momento.</p>
      </div>

      <!-- CARDS E VALORES -->
      <template v-else>
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

        <section class="materiais-section">
          <div class="materiais-header">
            <h2>Portfólio de Equipamentos e Materiais</h2>
            <span class="materiais-sub">Dados sincronizados diretamente da planilha do projeto</span>
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
                  <td class="col-nome">
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                      <strong>{{ item.nome }}</strong>

                      <!-- ETIQUETA DA NATUREZA DA DESPESA -->
                      <span v-if="obterInfoNd(item).ativo" :class="['ribbon-wrapper', obterInfoNd(item).classe]">
                        <span class="ribbon-corpo">
                          <span class="nd-codigo">{{ obterInfoNd(item).codigo }}</span>
                          <span class="nd-texto">{{ obterInfoNd(item).texto }}</span>
                        </span>
                      </span>
                    </div>
                  </td>
                  <td class="col-desc">{{ item.descricao }}</td>
                  <td class="col-qtd">{{ item.quantidade }}</td>
                  <td class="col-moeda">{{ formatarMoeda(item.valorUnitario) }}</td>
                  <td class="col-total">{{ formatarMoeda(item.valorTotal) }}</td>
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
      </template>
    </div>
  `
};
