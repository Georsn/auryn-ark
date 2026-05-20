import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Frieren: Beyond Journey\'s End - Eternal Mage',
    price: 1249.90,
    image: 'https://i.ebayimg.com/images/g/u3QAAOSwcHtleQY3/s-l1200.jpg',
    category: 'Anime',
    stockStatus: 'In Stock',
    stockCount: 14,
    scale: '1/7',
    material: 'PVC & ABS Premium',
    description: 'Estátua premium esculpida meticulosamente, capturando a elfa Frieren com seu cajado lendário. Visual estilizado e acabamento cinematográfico. A personagem apresenta efeitos mágicos detalhados, roupas elegantes e base dinâmica, ideal para renders, colecionáveis e projetos de animação.',
    features: [
      'Cajado com detalhes dourados e jóia vermelha facetada',
      'Efeitos de magia translúcidos',
      'Cabelo detalhado em estilo anime'
    ],
    rating: 4.9,
    reviewsCount: 48
  },
  {
    id: '2',
    name: 'Goku Ultra Instinct - Dragon Ball Super',
    price: 1599.90,
    image: 'https://ae-pic-a1.aliexpress-media.com/kf/S6259fa7b46fb4f3b95690cf7e42d72216.jpg',
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
    name: 'WALL-E - Disney Pixar',
    price: 2199.00,
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&auto=format&fit=crop&q=80',
    category: 'Pop Culture',
    stockStatus: 'In Stock',
    stockCount: 8,
    scale: '1/12 (Articulado)',
    material: 'Liga Metálica Die-cast & ABS',
    description: 'Figura hiperdetalhada do icônico robô WALL·E, com visual cinematográfico, detalhes mecânicos e design sci-fi retrô. Ideal para animações, renders, games e colecionáveis digitais.',
    features: [
      'Modelagem hard surface detalhada',
      'Texturas detalhadas',
      'Pequena planta incluída como acessório icônico',
      'Estilo fiel ao personagem original'
    ],
    rating: 4.8,
    reviewsCount: 31
  },
  {
    id: '4',
    name: 'Atreus - God Of War',
    price: 3499.00,
    image: 'https://rihappy.vtexassets.com/arquivos/ids/2933243-800-auto?v=637842087232530000&width=800&height=auto&aspect=true',
    category: 'Games',
    stockStatus: 'In Stock',
    stockCount: 5,
    scale: '1/4 Standard',
    material: 'Resina Polystone Premium & Tecido Real',
    description: 'Estátua obra-prima pintada à mão em escala impressionante de 1/4. Captura a consagrada presença do filho de Kratos, Atreus em meio ao inverno rigoroso Fimbulwinter, prontos para enfrentar o panteão nórdico e resistir ao Ragnarök. Detalhes de peles reais nas vestes.',
    features: [
      'Roupa detalhada em pele, couro e tecido',
      'Pintura ultra-realista que realça cicatrizes e expressões de fúria',
      'Arco artesanal modelado'
    ],
    rating: 5.0,
    reviewsCount: 112
  },
  {
    id: '5',
    name: 'Miles Morales: Spider Man',
    price: 1149.90,
    image: 'https://fbi.cults3d.com/uploaders/18988104/illustration-file/327e1783-e15c-4d84-98fd-9e17db8fecee/spidey4.jpg',
    category: 'Pop Culture',
    stockStatus: 'Out of Stock',
    stockCount: 0,
    scale: '1/8',
    material: 'PVC Premium',
    description: 'Retratando Miles Morales em pose dinâmica de salto, com traje moderno, capuz e base detalhada, trazendo estilo, movimento e alto nível de acabamento. Feito com tintas fluorescentes que reagem de forma deslumbrante à luz negra, imitando perfeitamente os efeitos dinâmicos de sua bioeletricidade venom.',
    features: [
      'Pintura fluorescente especial que brilha sob efeito de luz UV/Luz Negra',
      'Base detalhada simulando estrutura urbana',
      'Alto nível de detalhe em roupas, texturas e proporções'
    ],
    rating: 4.7,
    reviewsCount: 22
  },
  {
    id: '6',
    name: 'Malenia, Blade of Miquella - Elden Ring',
    price: 1899.90,
    image: 'https://i.ibb.co/tpBT1C1h/malenia-statue-v0-j80o4rff86kb1.jpg',
    category: 'Games',
    stockStatus: 'Low Stock',
    stockCount: 2,
    scale: '1/6',
    material: 'PVC Mágico & Metal Die-Cast',
    description: 'A guerreira invicta das Terras Intermediárias da icônica franquia Elden Ring, esculpida em detalhes majestosos, trajando sua armadura dourada e capacete alado icônico. O braço mecânico protético simula as juntas esféricas do jogo.',
    features: [
      'Braço protético construído em liga leve de cromo metálico',
      'Capa vermelha esvoaçante com efeito dinâmico de movimento',
      'Base temática orgânica com tronco, cogumelos e flores inspiradas no universo do jogo',
      'Lâmina curva titânica de 30cm entalhada com detalhes do jogo'
    ],
    rating: 4.9,
    reviewsCount: 95
  },
  {
    id: '7',
    name: 'Zelda & Link: The Legend of Zelda',
    price: 1450.00,
    image: 'https://fbi.cults3d.com/uploaders/26130607/illustration-file/6f9261da-59b6-4dc2-b9ac-4d27b2ce5d7e/POST-1.png',
    category: 'Games',
    stockStatus: 'In Stock',
    stockCount: 11,
    scale: '1/7',
    material: 'PVC Híbrido Avançado',
    description: 'Recriando a lendária conexão mágica entre o herói do tempo Link e a princesa de Hyrule Zelda.',
    features: [
      'Base temática texturizada',
      'Personagens com expressões detalhadas',
      'Detalhamento refinado em roupas e acessórios',
      'Edição limitada / fan collectible'
    ],
    rating: 4.9,
    reviewsCount: 41
  },
  {
    id: '8',
    name: 'Venti: Windborne Bard Archon',
    price: 1099.90,
    image: 'https://fbi.cults3d.com/uploaders/28791449/illustration-file/10327c04-ec6d-47cc-a8b7-dd1466df8c89/venti_np_render_1.png',
    category: 'Anime',
    stockStatus: 'In Stock',
    stockCount: 15,
    scale: '1/7',
    material: 'PVC Translúcido Semirígido',
    description: 'O bardo do vento Venti sentado em um tronco com base natural detalhada, cercado por efeito de vento estilizado e pássaros, com acabamento refinado e visual delicado e encantador.',
    features: [
      'Efeito de vento estilizado em volta do corpo (elemento Anemo)',
      'Base detalhada com grama e textura natural',
      'Pintura com cores suaves e acabamento refinado',
      'Roupas e acessórios fiéis ao design original do personagem'
    ],
    rating: 4.8,
    reviewsCount: 37
  }
];
