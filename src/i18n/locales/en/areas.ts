export const areas = {
  labels: {
    back: 'All areas',
    areaOf: 'Area {{current}} of {{total}}',
    challenge: 'The challenge',
    approach: 'How we respond',
    uses: 'Where it applies',
    next: 'Next area',
    allAreas: 'Our areas',
  },
  items: {
    sustainableEnergy: {
      title: 'Sustainable <highlight>energy</highlight>',
      intro:
        'Clean energy for places where the electricity grid is limited, unavailable or unreliable, starting with Lumi, our first bioenergy solution.',
      status: 'Lumi in validation',
      imageAlt: 'Solar panels in a green field',
      challenge:
        'In Angola, only 51.1% of the population had access to electricity in 2023, according to the World Bank. Where the grid does not reach or often fails, there is no light to move around at night, no power for signage and nothing to run the small sensors that help communities and farmers make decisions.\n\nMany of these needs are low-consumption, yet they remain unmet because the available solutions are expensive, hard to maintain or designed for other contexts.',
      approach: {
        a: {
          title: 'Bioenergy from the soil',
          text: 'Lumi uses the natural interaction between plants, soil and microorganisms to generate electricity without harming the plant.',
        },
        b: {
          title: 'Built for low consumption',
          text: 'We focus on concrete applications, such as LED signage and sensors, instead of promising to replace the grid.',
        },
        c: {
          title: 'Validated in the field',
          text: 'We run pilot projects with partner organisations to test the solution in real conditions and measure its impact.',
        },
      },
      highlight: {
        title: 'Lumi',
        text: 'A plant pot that generates energy, designed to power LED signs and environmental sensors. It is in validation and being prepared for pilot projects with partners.',
        imageAlt: 'Lumi prototype with its LED lit',
        cta: 'See Lumi in detail',
      },
      uses: {
        a: 'Orientation lighting along pathways',
        b: 'LED signage in community spaces',
        c: 'Powering agricultural sensors',
        d: 'Low-consumption environmental monitoring',
      },
    },
    digitalHealth: {
      title: 'Digital <highlight>health</highlight>',
      intro:
        'Data in service of public health: tools that help anticipate disease outbreaks and act before they affect communities.',
      status: 'Saúde+ · 1st place at NASA Space Apps Luanda 2025',
      imageAlt: 'Health professional using a phone',
      challenge:
        'When an outbreak is detected late, the response arrives after the disease has already spread. In many communities, the information that could raise early warnings exists, but it is scattered and not analysed in time.\n\nAnticipating risk means bringing data together, interpreting it and turning it into alerts that health teams can use day to day.',
      approach: {
        a: {
          title: 'Data to predict',
          text: 'We combine data to identify patterns that may signal the risk of an outbreak.',
        },
        b: {
          title: 'Alerts to act in time',
          text: 'The goal is to give health teams timely information so they can prevent, not just react.',
        },
        c: {
          title: 'Designed for the local context',
          text: 'Tools built for the reality of Angolan communities and the teams that serve them.',
        },
      },
      highlight: {
        title: 'Saúde+',
        text: 'The project with which the team won the NASA Space Apps Challenge Luanda 2025: a smart platform to predict and prevent disease outbreaks using data. That win is what gave rise to Lactus.',
        imageAlt: '',
        cta: 'Read our story',
      },
      uses: {
        a: 'Epidemiological surveillance',
        b: 'Early outbreak alerts',
        c: 'Public health decision support',
        d: 'Planning prevention campaigns',
      },
    },
    environmentalTech: {
      title: 'Environmental <highlight>tech</highlight>',
      intro:
        'Technologies that help preserve the environment and use natural resources responsibly, starting with measuring what happens in the field.',
      status: '',
      imageAlt: 'Hands planting a seedling in the soil',
      challenge:
        'Protecting the environment starts with understanding it. Without data on soil, humidity or temperature, it is hard to care for crops, green spaces and natural resources, especially where installing powered equipment is difficult.\n\nThe solutions must also be sustainable themselves: it makes no sense to protect the environment with technology that depends on fossil fuels.',
      approach: {
        a: {
          title: 'Measure to care',
          text: 'Sensors that track environmental conditions and support better decisions.',
        },
        b: {
          title: 'Energy from nature',
          text: 'Whenever possible, these solutions run on clean energy, such as the energy generated by Lumi.',
        },
        c: {
          title: 'Responsible use of resources',
          text: 'Solutions designed to reduce waste and extend the life of natural resources.',
        },
      },
      highlight: {
        title: 'Lumi reading the environment',
        text: 'One of Lumi’s applications is powering environmental sensors: the energy generated by the interaction between plants, soil and microorganisms is used to measure the conditions around it.',
        imageAlt: '',
        cta: 'See how Lumi works',
      },
      uses: {
        a: 'Soil and humidity monitoring',
        b: 'Tracking green spaces',
        c: 'Supporting sustainable agriculture',
        d: 'Collecting environmental data in remote areas',
      },
    },
    smartSystems: {
      title: 'Smart systems <highlight>& IoT</highlight>',
      intro:
        'Connected devices and systems that modernise processes, improve efficiency and raise quality of life, designed and built by our team.',
      status: '',
      imageAlt: 'Arduino board connected to a breadboard with wires',
      challenge:
        'Many everyday processes, from agriculture to managing community spaces, still rely on manual checks. Without real-time data, problems are only noticed once they have already caused damage.\n\nConnecting the physical world to digital systems makes it possible to act earlier, but it requires equipment suited to the context, with power and maintenance that are feasible in the field.',
      approach: {
        a: {
          title: 'From circuit to application',
          text: 'We combine robotics, electronics and software development to build complete solutions.',
        },
        b: {
          title: 'Sensors that communicate',
          text: 'Devices that collect data and make it useful for the people who need to decide.',
        },
        c: {
          title: 'Energy efficiency',
          text: 'Low-consumption systems, compatible with sustainable energy sources such as Lumi.',
        },
      },
      highlight: {
        title: 'A team that builds',
        text: 'Lactus brings together people from robotics and electronics and from software development, from backend to frontend and mobile. That combination lets us go from prototype to complete system.',
        imageAlt: '',
        cta: 'Meet the team',
      },
      uses: {
        a: 'Smart LED signage',
        b: 'Remote monitoring with sensors',
        c: 'Automating agricultural processes',
        d: 'Data dashboards to support decisions',
      },
    },
  },
} as const
