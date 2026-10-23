// Portuguese Insights articles. Each entry's id matches the body file src/insights/pt/<id>.astro.
export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  date: string;
  readMinutes: number;
}

export const articles: ArticleMeta[] = [
  {
    id: 'PhotosForVideo',
    slug: 'melhores-fotos-de-anuncio-para-video-com-ia',
    title: 'Que fotos funcionam melhor para vídeo com IA? · Still to Film',
    description: 'Lista prática de fotos para um bom vídeo de visita com IA: resolução, nitidez, luz, linhas direitas, tipos de plano, ordem e o que convém evitar.',
    h1: 'Que fotos do anúncio funcionam melhor para um vídeo de visita com IA?',
    summary: 'Funcionam melhor as fotos nítidas, bem iluminadas e em alta resolução, com linhas direitas, uma mistura de planos gerais e de pormenor, e sem pessoas, marcas de água nem filtros fortes; o ideal são os ficheiros originais do seu fotógrafo. Um vídeo com IA só pode mostrar o que está nas fotos, por isso quanto mais nítidas as fotos, mais nítido e calmo o filme.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'o-que-mostrar-num-video-de-charter-de-iates',
    title: 'O que mostrar num vídeo de charter de iates · Still to Film',
    description: 'A ordem de um vídeo de charter de iates de 60 a 90 segundos: exterior, fundeado, convés, salão, cozinha, cabines, casa de banho e pormenores, e 16:9 ou 9:16.',
    h1: 'O que mostrar num vídeo de charter de iates, e por que ordem',
    summary: 'Um vídeo de charter de iates funciona melhor quando segue o dia de um hóspede: o iate a navegar e fundeado, depois o convés, o salão, a cozinha, as cabines, a casa de banho e alguns pormenores, terminando de novo no exterior. Em 60 a 90 segundos, isso significa cerca de 10 a 25 segundos por zona, com movimentos de câmara calmos, em 16:9 para sites e em 9:16 para Reels e Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'video-com-ia-a-partir-de-fotos-ou-dia-de-filmagem',
    title: 'Vídeo com IA de fotos ou dia de filmagem? · Still to Film',
    description: 'Vídeo com IA a partir de fotos e dia de filmagem comparados: planeamento, equipa, prazos, o que cada um mostra, revisões, custo e quando convém filmar.',
    h1: 'Vídeo com IA a partir de fotos ou dia de filmagem: tempo, custo e limites comparados',
    summary: 'O vídeo com IA a partir de fotos não precisa de data, equipa nem bom tempo e custa um preço fixo de 50 € a 100 € por vídeo, IVA incluído, mas só pode mostrar o que está nas fotos, sem pessoas e sem som gravado. Um dia de filmagem é a melhor opção quando precisa de pessoas, som real, entrevistas, imagens aéreas ou espaços que nunca foram fotografados.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'um-video-de-visita-em-todo-o-lado',
    title: 'Um vídeo de visita, usado em todo o lado · Still to Film',
    description: 'Onde usar as versões 16:9 e 9:16 de um vídeo de visita: site, plataformas de anúncios, YouTube, Reels, TikTok, Stories e WhatsApp, e dicas sobre os ficheiros.',
    h1: 'Como usar um vídeo de visita no seu site, nos seus anúncios e nas redes sociais',
    summary: 'Use a versão 16:9 no seu site, nas plataformas de anúncios que aceitam vídeo e no YouTube, e a versão 9:16 para Instagram Reels, TikTok, Stories e o estado do WhatsApp. Carregue os ficheiros MP4, reproduza-o automaticamente sem som no seu site, comece com o melhor plano e consulte as regras atuais de cada plataforma, porque são diferentes.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'video-de-hotel-por-tipo-de-quarto-ou-do-estabelecimento',
    title: 'Hotel: vídeo por tipo de quarto ou do hotel? · Still to Film',
    description: 'Quando faz sentido um vídeo do hotel, um por tipo de quarto ou ambos, onde funciona cada um, o custo por volume e o que fazer após uma remodelação.',
    h1: 'Vídeos de hotel: um por tipo de quarto ou um do estabelecimento inteiro?',
    summary: 'Um vídeo do estabelecimento adequa-se à sua página inicial e às redes sociais, e um vídeo por tipo de quarto adequa-se às páginas de reserva, onde o hóspede compara quartos; também pode combinar os dois. Cada um conta como um vídeo, por isso cinco tipos de quarto e um vídeo do estabelecimento são 6 × 95 € = 570 €, IVA incluído, e um quarto remodelado precisa de um vídeo novo a partir de fotos novas.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
