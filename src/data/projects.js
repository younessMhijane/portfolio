import todoCover from '../assets/todo/todo1.png';
import weatherCover from '../assets/weather/weather1.png';
import ecommerceCover from '../assets/ecommerce/e-commerce-1.png';

export const projects = [
  {
    slug: 'syndizen', number: '01', title: 'SyndiZen', subtitle: 'Gestion de syndic, simplement.',
    category: 'Mobile App', tags: ['Personal', 'Mobile App'], status: 'En developpement',
    stack: ['Flutter', 'Firebase', 'Stripe', 'API REST'],
    description: 'Application mobile permettant aux gestionnaires de piloter leurs immeubles, residents et operations depuis un seul espace.',
    problem: 'Centraliser la gestion quotidienne des petites residences dans une experience mobile claire.',
    features: ['Gestion des immeubles et residents', 'Paiements Stripe', 'Services Firebase', 'Parcours mobile Flutter'], accent: 'cyan',
  },
  {
    slug: 'music-nft-dapp', number: '02', title: 'Music NFT dApp', subtitle: 'La musique connectee au Web3.',
    category: 'Web3', tags: ['Web App', 'Personal'], status: 'Projet de fin d’etudes',
    stack: ['React.js', 'Solidity', 'ethers.js', 'IPFS'],
    description: 'Plateforme decentralisee permettant de vendre de la musique sous forme de NFT.',
    problem: 'Explorer un modele direct de distribution musicale reposant sur la blockchain.',
    features: ['Authentification MetaMask', 'Smart contracts Solidity', 'Mint et transactions NFT', 'Deploiement Truffle et stockage IPFS'], accent: 'purple',
  },
  {
    slug: 'ecommerce-mern', number: '03', title: 'Plateforme E-commerce', subtitle: 'Une experience de vente full-stack.',
    category: 'Web App', tags: ['Web App', 'Personal'], status: 'Projet personnel', cover: ecommerceCover,
    stack: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
    description: 'Plateforme de vente en ligne avec catalogue, panier, authentification et suivi des commandes.',
    problem: 'Construire le parcours complet d’une boutique, de la navigation produit a la commande.',
    features: ['Catalogue et pages produits', 'Panier Redux', 'Authentification utilisateur', 'API Node.js et MongoDB'],
    github: 'https://github.com/younessMhijane/MERN-E-COMMERCE', accent: 'orange',
  },
  {
    slug: 'weather-app', number: '04', title: 'Weather App', subtitle: 'La meteo en temps reel.',
    category: 'Web App', tags: ['Web App', 'Personal'], status: 'Projet personnel', cover: weatherCover,
    stack: ['React.js', 'JavaScript', 'OpenWeather API'],
    description: 'Application React affichant les conditions meteorologiques en temps reel pour plusieurs villes.',
    problem: 'Rendre les donnees d’une API meteo immediatement lisibles et utiles.',
    features: ['Recherche par ville', 'Temperature et humidite', 'Conditions en temps reel', 'Interface responsive'],
    github: 'https://github.com/younessMhijane/react-weather', accent: 'blue',
  },
  {
    slug: 'todolist-notes', number: '05', title: 'Todolist & Notes', subtitle: 'Organiser les taches et les idees.',
    category: 'Web App', tags: ['Web App', 'Personal'], status: 'Projet personnel', cover: todoCover,
    stack: ['React.js', 'Tailwind CSS', 'JavaScript'],
    description: 'Outil simple de gestion de taches et de notes avec les fonctionnalites CRUD essentielles.',
    problem: 'Reunir organisation quotidienne et prise de notes dans une interface directe.',
    features: ['Creation et edition', 'Suppression de taches', 'Gestion des notes', 'Interface responsive'],
    github: 'https://github.com/younessMhijane/React-Projet-To-do-list-Note', accent: 'violet',
  },
  {
    slug: 'scantime', number: '06', title: 'ScanTime', subtitle: 'Presence et paie en temps reel.',
    category: 'Web App', tags: ['Web App', 'Client'], status: 'Projet professionnel / stage',
    stack: ['React.js', 'Laravel', 'React Query', 'MySQL'],
    description: 'Plateforme de gestion des presences, retards, absences, heures de travail et paie.',
    problem: 'Fiabiliser le suivi RH quotidien et automatiser des calculs auparavant manuels.',
    features: ['Scan arrivee et depart', 'Calcul des heures et de la paie', 'Conges et absences', 'Exports PDF et Excel'], accent: 'violet',
  },
  {
    // slug: 'fils-dor', number: '07', title: "Fils d'Or", subtitle: 'Artisanat marocain, presence premium.',
    slug: 'Site-vitrine ', number: '07', title: "Site vitrine ", subtitle: 'Artisanat marocain, presence premium.',
    category: 'WordPress', tags: ['WordPress', 'Client'], status: 'Projet client',
    stack: ['WordPress', 'Elementor', 'CSS', 'SEO'],
    description: 'Site vitrine elegant pour une unite specialisee en caftans, takchitas et broderie marocaine.',
    problem: 'Traduire un savoir-faire artisanal en une presence digitale credible et haut de gamme.',
    features: ['Identite visuelle luxe', 'Galerie et services', 'FAQ et contact', 'Contenu optimise SEO'], accent: 'gold',
  },
  {
    slug: 'Site-professionnel', number: '08', title: 'Site professionnel', subtitle: 'Expertise industrielle bien presentee.',
    category: 'WordPress', tags: ['WordPress', 'Client'], status: 'Projet client',
    stack: ['WordPress', 'Elementor', 'WPForms', 'CSS'],
    description: "Site professionnel pour une entreprise d'automatisme, instrumentation et electricite industrielle.",
    problem: 'Rendre une offre technique complexe lisible et rassurante pour les prospects.',
    features: ['Pages de services', 'Formulaire de contact', 'Composants reutilisables', 'Responsive complet'], accent: 'blue',
  },
  // {
  //   slug: 'marouane-moto', number: '09', title: 'Marouane Moto', subtitle: 'La bonne piece, plus vite.',
  //   category: 'E-commerce', tags: ['WordPress', 'Client'], status: 'Projet client',
  //   stack: ['WooCommerce', 'Elementor', 'Product Filters'],
  //   description: "Boutique en ligne de motos et pieces d'occasion avec une recherche adaptee au marche marocain.",
  //   problem: 'Faciliter la recherche dans un catalogue technique par marque, modele et annee.',
  //   features: ['Catalogue WooCommerce', 'Filtres avances', 'Pages produits', 'Parcours de recherche optimise'], accent: 'orange',
  // },
];

export const projectFilters = ['Tous', 'Web App', 'Mobile App', 'WordPress', 'Client', 'Personal'];
