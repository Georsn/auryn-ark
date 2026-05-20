import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Frieren: Beyond Journey\'s End - Eternal Mage',
    price: 1249.90,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    category: 'Anime',
    stockStatus: 'In Stock',
    stockCount: 14,
    scale: '1/7',
    material: 'PVC & ABS Premium',
    description: 'Estátua premium esculpida meticulosamente em escala 1/7, capturando a elfa Frieren em sua postura icônica de conjuração mágica com seu cajado lendário. Apresenta efeitos translúcidos deslumbrantes imitando runas mágicas ao redor do pedestal místico de acrílico.',
    features: [
      'Cajado com detalhes dourados e jóia vermelha facetada',
      'Efeitos de magia translúcidos acopláveis na base',
      'Expressão facial calma intercambiável e fecho de cabelo móvel'
    ],
    rating: 4.9,
    reviewsCount: 48
  },
  {
    id: '2',
    name: 'Goku Ultra Instinct - Cosmic Aura Edition',
    price: 1599.90,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    category: 'Anime',
    stockStatus: 'Low Stock',
    stockCount: 3,
    scale: '1/6',
    material: 'Resina Polystone Premium',
    description: 'Uma representação lendária do Son Goku em sua forma de Instinto Superior Completo. A aura cristalina esculpida em resina semitranslúcida envolve o boneco, refletindo as cores prateadas místicas e o brilho divino da batalha cósmica.',
    features: [
      'Aura gigantesca em resina azulada e prateada translúcida',
      'Pintura metálica avançada para simulação perfeita de musculatura',
      'Placa numerada de autenticidade em liga de latão inclusa'
    ],
    rating: 5.0,
    reviewsCount: 74
  },
  {
    id: '3',
    name: 'Cyberpunk Mech: Arasaka Vanguard-X9',
    price: 2199.00,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&auto=format&fit=crop&q=80',
    category: 'Pop Culture',
    stockStatus: 'In Stock',
    stockCount: 8,
    scale: '1/12 (Articulado)',
    material: 'Liga Metálica Die-cast & ABS',
    description: 'Figura hiperdetalhada combinando metal fundido sob pressão e peças de ABS de altíssima qualidade. Possui mais de 45 pontos de articulação de alta precisão e cockpit funcional que revela o minúsculo piloto cibernético em seu interior com design futurista.',
    features: [
      'Articulações com rolamentos de aço ultra-firmes para poses dinâmicas',
      'Iluminação LED azulada integrada nos propulsores das costas e visores',
      'Mais de 10 armas intercambiáveis, incluindo o canhão térmico'
    ],
    rating: 4.8,
    reviewsCount: 31
  },
  {
    id: '4',
    name: 'Kratos & Atreus: Norse Fate',
    price: 3499.00,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80',
    category: 'Games',
    stockStatus: 'In Stock',
    stockCount: 5,
    scale: '1/4 Standard',
    material: 'Resina Polystone Premium & Tecido Real',
    description: 'Estátua obra-prima pintada à mão em escala impressionante de 1/4. Captura a consagrada dupla pai e filho Kratos e Atreus em meio ao inverno rigoroso Fimbulwinter, prontos para enfrentar o panteão nórdico e resistir ao Ragnarök. Detalhes de peles reais nas vestes.',
    features: [
      'Roupas de couro e tecido real costurados individualmente sobre a resina',
      'Machado Leviatã e Lâminas do Caos intercambiáveis e detalhados com runas',
      'Pintura ultra-realista que realça cicatrizes e expressões de fúria'
    ],
    rating: 5.0,
    reviewsCount: 112
  },
  {
    id: '5',
    name: 'Miles Morales: Brooklyn Protector Hero',
    price: 1149.90,
    image: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80',
    category: 'Pop Culture',
    stockStatus: 'Out of Stock',
    stockCount: 0,
    scale: '1/8',
    material: 'PVC Premium',
    description: 'Retratando Miles Morales saltando sobre letreiros e grafites iluminados de Nova Iorque. Feito com tintas fluorescentes que reagem de forma deslumbrante à luz negra, imitando perfeitamente os efeitos dinâmicos de sua bioeletricidade venom.',
    features: [
      'Efeito de teia e faíscas elétricas feitos de PVC translúcido amarelo',
      'Pintura fluorescente especial que brilha sob efeito de luz UV/Luz Negra',
      'Cabeça opcional sem máscara revelando os traços de Miles'
    ],
    rating: 4.7,
    reviewsCount: 22
  },
  {
    id: '6',
    name: 'Malenia, Blade of Miquella - Goddess of Rot',
    price: 1899.90,
    image: 'https://images.unsplash.com/photo-1608889174633-41a4c815d017?w=600&auto=format&fit=crop&q=80',
    category: 'Games',
    stockStatus: 'Low Stock',
    stockCount: 2,
    scale: '1/6',
    material: 'PVC Mágico & Metal Die-Cast',
    description: 'A guerreira invicta das Terras Intermediárias da icônica franquia Elden Ring, esculpida em detalhes majestosos, trajando sua armadura dourada e capacete alado icônico removível. O braço mecânico protético simula as juntas esféricas do jogo.',
    features: [
      'Capacete alado de bronze totalmente removível com travas magnéticas',
      'Braço protético articulado construído em liga leve de cromo metálico',
      'Lâmina curva titânica de 30cm entalhada com detalhes do jogo'
    ],
    rating: 4.9,
    reviewsCount: 95
  },
  {
    id: '7',
    name: 'Zelda & Link: Master Sword Legacy',
    price: 1450.00,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
    category: 'Games',
    stockStatus: 'In Stock',
    stockCount: 11,
    scale: '1/7',
    material: 'PVC Híbrido Avançado',
    description: 'Recriando a lendária conexão mágica entre o herói do tempo Link e a princesa de Hyrule Zelda. Link empunha o braço sagrado de Rauru com iluminação especial que absorve a luz do ambiente, enquanto segura a lendária Master Sword corrompida pelo mal.',
    features: [
      'Braço de Rauru brilha sob luz negra com gravuras divinas de Hyrule',
      'Pedestal de luxo simulando ruínas antigas do Templo do Tempo',
      'Inclui réplica em miniatura do misterioso Purah Pad'
    ],
    rating: 4.9,
    reviewsCount: 41
  },
  {
    id: '8',
    name: 'Venti: Windborne Bard Archon',
    price: 1099.90,
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
    category: 'Anime',
    stockStatus: 'In Stock',
    stockCount: 15,
    scale: '1/7',
    material: 'PVC Translúcido Semirígido',
    description: 'O bardo do vento Venti levita rodeado por rajadas verdejantes de Anemo esculpidas em resina transparente turquesa e dentes-de-leão flutuantes. Sua lira sagrada "Der Himmel" é meticulosamente adornada e dourada.',
    features: [
      'Visual de rajadas de vento espiraladas flutuantes no suporte traseiro',
      'Suporte invisível engenhoso ancorado nas asas de vento e pés',
      'Asas das costas esculpidas em material celestial brilhante'
    ],
    rating: 4.8,
    reviewsCount: 37
  }
];
