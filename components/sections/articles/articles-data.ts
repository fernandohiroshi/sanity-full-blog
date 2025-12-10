export type ArticleCard = {
  title: string
  category?: string
  date: string
  readTime?: string
  href: string
  image: string
  excerpt?: string
}

export type HighlightCard = {
  title: string
  category: string
  date: string
  image: string
}

export const featuredArticle: ArticleCard = {
  category: 'Turismo',
  title: 'Roteiro essencial para viver Foz do Iguaçu além das Cataratas',
  excerpt:
    'Da trilha às margens do Rio Iguaçu ao pôr do sol na tríplice fronteira, um passeio que conecta natureza, cultura e a rotina de quem vive aqui.',
  date: '15 de novembro, 2024',
  readTime: '7 min de leitura',
  href: '#',
  image:
    'https://images.unsplash.com/photo-1593322961249-02a0734ce116?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export const popularArticles: ArticleCard[] = [
  {
    title: 'Como o turismo de fronteira movimenta a economia local em Foz do Iguaçu',
    date: '08 de novembro, 2024',
    readTime: '5 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1584132905271-512c958d674a?auto=format&fit=crop&w=400&q=80',
    category: 'Turismo',
  },
  {
    title: 'Gastronomia da tríplice fronteira: sabores que contam histórias de três países',
    date: '30 de outubro, 2024',
    readTime: '6 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    category: 'Gastronomia',
  },
  {
    title: 'Eventos, feiras e congressos: por que Foz virou referência em turismo de negócios',
    date: '22 de outubro, 2024',
    readTime: '4 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80',
    category: 'Evento',
  },
]

export const categories = [
  { label: 'Noticias' },
  { label: 'Turismo' },
  { label: 'Hotelaria' },
  { label: 'Viagens' },
  { label: 'Evento' },
  { label: 'Gastronomia' },
  { label: 'Historias' },
  { label: 'Tecnologia' },
  { label: 'Economia' },
  { label: 'Life Style' },
  { label: 'Paraguai' },
  { label: 'Argentina' },
  { label: 'Saude' },
  { label: 'Moda' },
  { label: 'Acao Social' },
]

export const mainCategoryLabels: string[] = [
  'Noticias',
  'Turismo',
  'Hotelaria',
  'Evento',
  'Viagens',
]

export const recentArticles: ArticleCard[] = [
  {
    category: 'Turismo',
    title: 'Trilhas, mirantes e turismo consciente no entorno do Parque Nacional do Iguaçu',
    date: '10 de novembro, 2024',
    readTime: '6 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1751849685221-d94f7e10d1dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    category: 'Evento',
    title: 'Noite na fronteira: festivais, música e arte que movimentam Foz e região',
    date: '02 de novembro, 2024',
    readTime: '5 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Gastronomia',
    title: 'Da chipa ao churrasco: sabores da tríplice fronteira para colocar no seu roteiro',
    date: '26 de outubro, 2024',
    readTime: '4 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Economia',
    title: 'Como pequenos negócios locais se reinventam com o turismo de experiência',
    date: '18 de outubro, 2024',
    readTime: '6 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Noticias',
    title: 'Novo terminal turístico promete modernizar a recepção de visitantes em Foz do Iguaçu',
    date: '12 de novembro, 2024',
    readTime: '4 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Hotelaria',
    title: 'Pousadas familiares ganham espaço ao oferecer experiências personalizadas na fronteira',
    date: '05 de novembro, 2024',
    readTime: '5 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Life Style',
    title: 'Rotina de quem escolheu viver perto das Cataratas: trabalho, lazer e conexões diárias',
    date: '28 de outubro, 2024',
    readTime: '6 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    category: 'Paraguai',
    title: 'Compras inteligentes no Paraguai: dicas para unir economia, segurança e turismo',
    date: '20 de outubro, 2024',
    readTime: '5 min de leitura',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
]

export const upcomingHighlights: HighlightCard[] = [
  {
    category: 'Evento',
    title: 'Encontro ao pôr do sol nas margens do Rio Iguaçu',
    date: 'Dezembro, 2025',
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
  },
  {
    category: 'Gastronomia',
    title: 'Roteiro gastronômico pela tríplice fronteira',
    date: 'Em breve',
    image:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80',
  },
  {
    category: 'Evento',
    title: 'Caminhada guiada pelo centro histórico de Foz',
    date: 'Janeiro, 2026',
    image:
      'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    category: 'Gastronomia',
    title: 'Noite de sabores da fronteira em família',
    date: 'Datas especiais ao longo do ano',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80',
  },
]
