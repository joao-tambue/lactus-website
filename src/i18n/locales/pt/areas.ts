export const areas = {
  labels: {
    back: 'Todas as áreas',
    areaOf: 'Área {{current}} de {{total}}',
    challenge: 'O desafio',
    approach: 'Como respondemos',
    uses: 'Onde se aplica',
    next: 'Próxima área',
    allAreas: 'As nossas áreas',
  },
  items: {
    sustainableEnergy: {
      title: 'Energia <highlight>sustentável</highlight>',
      intro:
        'Energia limpa para os lugares onde a rede elétrica é limitada, inexistente ou pouco fiável, a começar pelo Lumi, a nossa primeira solução de bioenergia.',
      status: 'Lumi em fase de validação',
      imageAlt: 'Painéis solares num campo verde',
      challenge:
        'Em Angola, apenas 51,1% da população tinha acesso à eletricidade em 2023, segundo o Banco Mundial. Onde a rede não chega ou falha com frequência, falta luz para circular à noite, energia para sinalização e alimentação para pequenos sensores que ajudam comunidades e agricultores a decidir.\n\nMuitas destas necessidades são de baixo consumo, mas continuam sem resposta porque as soluções disponíveis são caras, difíceis de manter ou pensadas para outros contextos.',
      approach: {
        a: {
          title: 'Bioenergia a partir do solo',
          text: 'O Lumi usa a interação natural entre plantas, solo e microrganismos para gerar eletricidade, sem prejudicar a planta.',
        },
        b: {
          title: 'Pensado para baixo consumo',
          text: 'Focamo-nos em aplicações concretas, como sinalização LED e sensores, em vez de prometer substituir a rede.',
        },
        c: {
          title: 'Validado no terreno',
          text: 'Desenvolvemos projetos-piloto com organizações parceiras para testar a solução em condições reais e medir o seu impacto.',
        },
      },
      highlight: {
        title: 'O Lumi',
        text: 'Um vaso de plantas que gera energia, pensado para alimentar sinais LED e sensores ambientais. Está em validação e em preparação para projetos-piloto com parceiros.',
        imageAlt: 'Protótipo do Lumi com o LED aceso',
        cta: 'Ver o Lumi em detalhe',
      },
      uses: {
        a: 'Iluminação de orientação em percursos',
        b: 'Sinalização LED em espaços comunitários',
        c: 'Alimentação de sensores agrícolas',
        d: 'Monitorização ambiental de baixo consumo',
      },
    },
    digitalHealth: {
      title: 'Saúde <highlight>digital</highlight>',
      intro:
        'Dados ao serviço da saúde pública: ferramentas que ajudam a antecipar surtos de doenças e a agir antes que afetem as comunidades.',
      status: 'Saúde+ · 1.º lugar no NASA Space Apps Luanda 2025',
      imageAlt: 'Profissional de saúde a usar o telemóvel',
      challenge:
        'Quando um surto é detetado tarde, a resposta chega depois de a doença já se ter espalhado. Em muitas comunidades, a informação que poderia dar sinais de alerta existe, mas está dispersa e não é analisada a tempo.\n\nAntecipar riscos exige juntar dados, interpretá-los e transformá-los em alertas que as equipas de saúde consigam usar no dia a dia.',
      approach: {
        a: {
          title: 'Dados para prever',
          text: 'Cruzamos dados para identificar padrões que podem indicar o risco de um surto.',
        },
        b: {
          title: 'Alertas para agir a tempo',
          text: 'O objetivo é dar às equipas de saúde informação atempada para prevenir, e não apenas reagir.',
        },
        c: {
          title: 'Pensado para o contexto local',
          text: 'Ferramentas desenhadas para a realidade das comunidades angolanas e das equipas que as servem.',
        },
      },
      highlight: {
        title: 'O Saúde+',
        text: 'O projeto com que a equipa venceu o NASA Space Apps Challenge Luanda 2025: uma plataforma inteligente para prever e prevenir surtos de doenças com base em dados. Foi esta vitória que deu origem à Lactus.',
        imageAlt: '',
        cta: 'Conhecer a nossa história',
      },
      uses: {
        a: 'Vigilância epidemiológica',
        b: 'Alertas precoces de surtos',
        c: 'Apoio à decisão em saúde pública',
        d: 'Planeamento de campanhas de prevenção',
      },
    },
    environmentalTech: {
      title: 'Tecnologias <highlight>ambientais</highlight>',
      intro:
        'Tecnologias que ajudam a preservar o meio ambiente e a usar os recursos naturais de forma responsável, a começar por medir o que acontece no terreno.',
      status: '',
      imageAlt: 'Mãos a plantar uma muda na terra',
      challenge:
        'Proteger o ambiente começa por conhecê-lo. Sem dados sobre o solo, a humidade ou a temperatura, é difícil cuidar de culturas, espaços verdes e recursos naturais, sobretudo em zonas onde instalar equipamentos com energia é complicado.\n\nAs soluções também têm de ser sustentáveis em si mesmas: não faz sentido proteger o ambiente com tecnologia que depende de combustíveis fósseis.',
      approach: {
        a: {
          title: 'Medir para cuidar',
          text: 'Sensores que acompanham as condições do ambiente e ajudam a tomar melhores decisões.',
        },
        b: {
          title: 'Energia que vem da natureza',
          text: 'Sempre que possível, estas soluções são alimentadas com energia limpa, como a gerada pelo Lumi.',
        },
        c: {
          title: 'Uso responsável de recursos',
          text: 'Soluções pensadas para reduzir desperdício e prolongar a vida dos recursos naturais.',
        },
      },
      highlight: {
        title: 'O Lumi a ler o ambiente',
        text: 'Uma das aplicações do Lumi é alimentar sensores ambientais: a energia gerada pela interação entre plantas, solo e microrganismos serve para medir as condições à sua volta.',
        imageAlt: '',
        cta: 'Ver como funciona o Lumi',
      },
      uses: {
        a: 'Monitorização do solo e da humidade',
        b: 'Acompanhamento de espaços verdes',
        c: 'Apoio à agricultura sustentável',
        d: 'Recolha de dados ambientais em zonas remotas',
      },
    },
    smartSystems: {
      title: 'Sistemas inteligentes <highlight>& IoT</highlight>',
      intro:
        'Dispositivos e sistemas conectados que modernizam processos, melhoram a eficiência e elevam a qualidade de vida, desenhados e construídos pela nossa equipa.',
      status: '',
      imageAlt: 'Placa Arduino ligada a uma breadboard com fios',
      challenge:
        'Muitos processos do dia a dia, da agricultura à gestão de espaços comunitários, ainda dependem de verificações manuais. Sem dados em tempo real, os problemas só são percebidos quando já causaram prejuízo.\n\nLigar o mundo físico a sistemas digitais permite agir mais cedo, mas exige equipamento adaptado ao contexto, com energia e manutenção possíveis no terreno.',
      approach: {
        a: {
          title: 'Do circuito à aplicação',
          text: 'Juntamos robótica, eletrónica e desenvolvimento de software para criar soluções completas.',
        },
        b: {
          title: 'Sensores que comunicam',
          text: 'Dispositivos que recolhem dados e os tornam úteis para quem tem de decidir.',
        },
        c: {
          title: 'Eficiência energética',
          text: 'Sistemas de baixo consumo, compatíveis com fontes de energia sustentáveis como o Lumi.',
        },
      },
      highlight: {
        title: 'Uma equipa que constrói',
        text: 'A Lactus reúne pessoas de robótica e eletrónica e de desenvolvimento de software, do backend ao frontend e mobile. É esta combinação que nos permite ir do protótipo ao sistema completo.',
        imageAlt: '',
        cta: 'Conhecer a equipa',
      },
      uses: {
        a: 'Sinalização LED inteligente',
        b: 'Monitorização remota com sensores',
        c: 'Automação de processos agrícolas',
        d: 'Painéis de dados para apoiar decisões',
      },
    },
  },
} as const
