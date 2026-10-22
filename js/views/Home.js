// js/views/Home.js
window.Home = window.home = {
  name: 'Home',
  template: `
    <div class="home-wrapper">
      
      <!-- 1. Seção Principal (Imagem do QCG + Apresentação) -->
      <section class="home-container">
        <div class="moldura-imagem">
          <img 
            src="./src/QCG.jpg" 
            alt="Quartel do Comando Geral - PMSE" 
            class="imagem-animada"
          />
        </div>

        <div class="home-texto">
          <h2>Portfólio de Projetos</h2>
          <p>
            O Portfólio de Projetos da Polícia Militar do Estado de Sergipe (PMSE) 
            consolida as principais iniciativas estratégicas da corporação voltadas 
            à modernização tecnológica, ao fortalecimento da segurança pública, 
            à ampliação da infraestrutura e à valorização do policial militar. 
            Guiado pela inovação e pela transparência no planejamento corporativo, 
            este documento reflete o compromisso contínuo da PMSE em otimizar o 
            policiamento ostensivo, prevenir a criminalidade e prestar um serviço 
            cada vez mais eficiente e próximo da sociedade sergipana.
          </p>
        </div>
      </section>

      <!-- 2. Seção da Mensagem do Comandante -->
      <section class="cmd-section">
        <h3 class="cmd-titulo-secao">Mensagem do Comando-Geral</h3>

        <div class="cmd-card">
          <!-- Foto do Comandante -->
          <div class="cmd-foto-container">
            <img 
              src="./src/comandante.png" 
              alt="Comandante-Geral da PMSE" 
              class="cmd-foto"
            />
          </div>

          <!-- Mensagem / Texto -->
          <div class="cmd-texto">
            <p>
  Dirijo-me a Vossas Excelências para apresentar o Portfólio de 
  Projetos 2027. Este documento reúne as principais ações, investimentos 
  e planejamentos estratégicos da nossa corporação para o próximo 
  ciclo, buscando consolidar um modelo de segurança pública cada 
  vez mais moderno, técnico e eficiente no estado de Sergipe.
</p>
<p>
  O avanço das nossas instituições depende diretamente da união 
  de esforços nas esferas estadual e federal. O parlamento tem 
  sido um parceiro fundamental da Polícia Militar, demonstrando 
  sensibilidade e compromisso com a segurança de todos os sergipanos 
  por meio do diálogo, do apoio legislativo e da destinação de 
  recursos essenciais para as atividades da corporação.
</p>
<p>
  Apresento meus sinceros agradecimentos a cada parlamentar pelo 
  apoio contínuo. A indicação de emendas, o suporte às causas 
  da segurança pública e a parceria institucional são indispensáveis 
  para o sucesso das nossas operações e para a devida proteção 
  da sociedade.
</p>
<p>
  Reitero o meu compromisso com o trabalho integrado e coloco a 
  Polícia Militar do Estado de Sergipe à disposição de Vossas 
  Excelências.
</p>

            <!-- BLOCO DE ASSINATURA -->
            <div class="cmd-assinatura-bloco">
              <img 
                src="./src/assinatura_cmt.png" 
                alt="Assinatura do Comandante-Geral" 
                class="cmd-assinatura-img"
              />
              <div class="cmd-assinatura-info">
                <div class="cmd-cargo">Comando-Geral da PMSE</div>
                <div class="cmd-instituicao">Polícia Militar do Estado de Sergipe</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `
};
