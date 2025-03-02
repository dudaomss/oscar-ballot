const categories = [
  {
    "name": "Actor in a Leading Role",
    "explanation": "A performance mais destacada de um ator ou atriz em um papel principal, considerando interpretação e impacto emocional.",
    "nominees": [
      "Adrien Brody - The Brutalist",
      "Timothée Chalamet - A Complete Unknown",
      "Colman Domingo - Sing Sing",
      "Ralph Fiennes - Conclave",
      "Sebastian Stan - The Apprentice"
    ]
  },
  {
    "name": "Actor in a Supporting Role",
    "explanation": "A melhor performance em um papel secundário, que apoia o enredo principal.",
    "nominees": [
      "Yura Borisov - Anora",
      "Kieran Culkin - A Real Pain",
      "Edward Norton - A Complete Unknown",
      "Guy Pearce - The Brutalist",
      "Jeremy Strong - The Apprentice"
    ]
  },
  {
    "name": "Actress in a Leading Role",
    "explanation": "A performance mais destacada de um ator ou atriz em um papel principal, considerando interpretação e impacto emocional.",
    "nominees": [
      "Cynthia Erivo - Wicked",
      "Karla Sofía Gascón - Emilia Pérez",
      "Mikey Madison - Anora",
      "Demi Moore - The Substance",
      "Fernanda Torres - I'm Still Here"
    ]
  },
  {
    "name": "Actress in a Supporting Role",
    "explanation": "A melhor performance em um papel secundário, que apoia o enredo principal.",
    "nominees": [
      "Monica Barbaro - A Complete Unknown",
      "Ariana Grande - Wicked",
      "Felicity Jones - The Brutalist",
      "Isabella Rossellini - Conclave",
      "Zoe Saldaña - Emilia Pérez"
    ]
  },
  {
    "name": "Animated Feature Film",
    "explanation": "O melhor longa-metragem animado com mais de 40 minutos. Avalia-se a técnica (2D, 3D, stop-motion), a narrativa, a qualidade da animação e a criatividade. ",
    "nominees": [
      "Flow",
      "Inside Out 2",
      "Memoir of a Snail",
      "Wallace & Gromit: Vengeance Most Fowl",
      "The Wild Robot"
    ]
  },
  {
    "name": "Animated Short Film",
    "explanation": "O melhor curta animado com menos de 40 minutos. Avalia-se a originalidade, a técnica de animação (2D, 3D, stop-motion), a narrativa e o impacto emocional ou artístico. É uma categoria que valoriza a criatividade e a inovação em formatos mais curtos.",
    "nominees": [
      "Beautiful Men",
      "In the Shadow of the Cypress",
      "Magic Candies",
      "Wander to Wonder",
      "Yuck!"
    ]
  },
  {
    "name": "Cinematography",
    "explanation": "A excelência na captação visual de um filme, avaliando iluminação, enquadramento, movimento de câmera e estética visual para criar imagens impactantes e narrativas visuais.",
    "nominees": [
      "The Brutalist",
      "Dune: Part Two",
      "Emilia Pérez",
      "Maria",
      "Nosferatu"
    ]
  },
  {
    "name": "Costume Design",
    "explanation": "Reconhece o melhor design de roupas e acessórios usados no filme.",
    "nominees": [
      "A Complete Unknown",
      "Conclave",
      "Gladiator II",
      "Nosferatu",
      "Wicked"
    ]
  },
  {
    "name": "Directing",
    "explanation": "Reconhece a realização excepcional na direção de um filme, avaliando visão, criatividade e liderança.",
    "nominees": [
      "Sean Baker - Anora",
      "Brady Corbet - The Brutalist",
      "James Mangold - A Complete Unknown",
      "Jacques Audiard - Emilia Pérez",
      "The Substance - Coralie Fargeat"
    ]
  },
  {
    "name": "Documentary Feature Film",
    "explanation": "Premia o melhor filme documentário, considerando pesquisa, narrativa e impacto social.",
    "nominees": [
      "Black Box Diaries",
      "No Other Land",
      "Porcelain War",
      "Soundtrack to a Coup d'Etat",
      "Sugarcane"
    ]
  },
  {
    "name": "Documentary Short Film",
    "explanation": "Premia o melhor filme documentário, considerando pesquisa, narrativa e impacto social.",
    "nominees": [
      "Death by Numbers",
      "I Am Ready, Warden",
      "Incident",
      "Instruments of a Beating Heart",
      "The Only Girl in the Orchestra"
    ]
  },
  {
    "name": "Film Editing",
    "explanation": "Reconhece a melhor montagem de um filme, considerando ritmo, continuidade e narrativa.",
    "nominees": [
      "Anora",
      "The Brutalist",
      "Conclave",
      "Emilia Pérez",
      "Wicked"
    ]
  },
  {
    "name": "International Feature Film",
    "explanation": "Reconhece o melhor filme produzido fora dos Estados Unidos, com diálogos predominantemente em outro idioma.",
    "nominees": [
      "Brazil - I'm Still Here",
      "Denmark - The Girl with the Needle",
      "France - Emilia Pérez",
      "Germany - The Seed of the Sacred Fig",
      "Latvia - Flow"
    ]
  },
  {
    "name": "Makeup and Hairstyling",
    "explanation": "Premia a excelência na aplicação de maquiagem e estilização de cabelo para criar personagens.",
    "nominees": [
      "A Different Man",
      "Emilia Pérez",
      "Nosferatu",
      "The Substance",
      "Wicked"
    ]
  },
  {
    "name": "Music (Original Score)",
    "explanation": "Premia a música instrumental composta especificamente para o filme, avaliando sua qualidade musical, impacto emocional e integração com a narrativa e atmosfera da obra.",
    "nominees": [
      "The Brutalist",
      "Conclave",
      "Emilia Pérez",
      "Wicked",
      "The Wild Robot"
    ]
  },
  {
    "name": "Music (Original Song)",
    "explanation": "Premia a melhor música escrita especificamente para o filme, avaliando letra, melodia e impacto emocional dentro da narrativa.",
    "nominees": [
      "El Mal - from Emilia Pérez",
      "The Journey - from The Six Triple Eight",
      "Like A Bird - from Sing Sing",
      "Mi Camino - from Emilia Pérez",
      "Never Too Late - from Elton John: Never Too Late"
    ]
  },
  {
    "name": "Production Design",
    "explanation": "Reconhece a criação dos cenários e ambientes do filme, incluindo direção de arte e decoração de set, avaliando autenticidade, criatividade e contribuição para a atmosfera.",
    "nominees": [
      "The Brutalist",
      "Conclave",
      "Dune: Part Two",
      "Nosferatu",
      "Wicked"
    ]
  },
  {
    "name": "Live Action Short Film",
    "explanation": "Premia o melhor curta-metragem com atores reais e menos de 40 minutos, avaliando narrativa, direção e impacto emocional.",
    "nominees": [
      "A Lien",
      "Anuja",
      "I'm Not a Robot",
      "The Last Ranger",
      "The Man Who Could Not Remain Silent"
    ]
  },
  {
    "name": "Sound",
    "explanation": "Reconhece a excelência na captação, edição e mixagem de som, incluindo diálogos, efeitos sonoros e trilha, para criar imersão e realismo.",
    "nominees": [
      "A Complete Unknown",
      "Dune: Part Two",
      "Emilia Pérez",
      "Wicked",
      "The Wild Robot"
    ]
  },
  {
    "name": "Visual Effects",
    "explanation": "Premia a criação e integração de efeitos visuais que complementam a narrativa, avaliando qualidade técnica, realismo e impacto visual.",
    "nominees": [
      "Alien",
      "Better Man",
      "Dune: Part Two",
      "Kingdom of the Planet of the Apes",
      "Wicked"
    ]
  },
  {
    "name": "Writing (Adapted Screenplay)",
    "explanation": "Premia o melhor roteiro baseado em material preexistente (livros, peças, etc.), avaliando fidelidade, criatividade na adaptação e desenvolvimento da narrativa.",
    "nominees": [
      "A Complete Unknown",
      "Conclave",
      "Emilia Pérez",
      "Nickel Boys",
      "Sing Sing"
    ]
  },
  {
    "name": "Writing (Original Screenplay)",
    "explanation": "Reconhece o melhor roteiro criado originalmente para o cinema, avaliando originalidade, estrutura narrativa e desenvolvimento de personagens.",
    "nominees": [
      "Anora",
      "The Brutalist",
      "A Real Pain",
      "September 5",
      "The Substance"
    ]
  },
  {
    "name": "Best Picture",
    "explanation": "Premia o filme como um todo, considerando direção, roteiro, atuações, produção e impacto geral.",
    "nominees": [
      "Anora",
      "The Brutalist",
      "A Complete Unknown",
      "Conclave",
      "Dune: Part Two",
      "Emilia Pérez",
      "I'm Still Here",
      "Nickel Boys",
      "The Substance",
      "Wicked"
    ]
  }
]

export default categories;