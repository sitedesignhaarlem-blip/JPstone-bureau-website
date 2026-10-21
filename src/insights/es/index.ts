// Spanish Insights articles. Each entry's id matches the body file src/insights/es/<id>.astro.
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
    slug: 'mejores-fotos-de-anuncio-para-video-con-ia',
    title: '¿Qué fotos funcionan mejor para un vídeo con IA? · Still to Film',
    description: 'Lista práctica de fotos para un buen vídeo de recorrido con IA: resolución, nitidez, luz, líneas rectas, tipos de toma, orden y qué conviene evitar.',
    h1: '¿Qué fotos del anuncio funcionan mejor para un vídeo de recorrido con IA?',
    summary: 'Funcionan mejor las fotos nítidas, bien iluminadas y en alta resolución, con líneas rectas, una mezcla de planos generales y de detalle, y sin personas, marcas de agua ni filtros fuertes; lo ideal son los archivos originales de tu fotógrafo. Un vídeo con IA solo puede mostrar lo que hay en las fotos, así que cuanto más nítidas las fotos, más nítida y tranquila la película.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'que-mostrar-en-un-video-de-charter-de-yates',
    title: 'Qué mostrar en un vídeo de chárter de yates · Still to Film',
    description: 'El orden de un vídeo de chárter de yates de 60 a 90 segundos: exterior, fondeado, cubierta, salón, cocina, camarotes, baño y detalles, y 16:9 frente a 9:16.',
    h1: 'Qué mostrar en un vídeo de chárter de yates, y en qué orden',
    summary: 'Un vídeo de chárter de yates funciona mejor cuando sigue el día de un huésped: el yate navegando y fondeado, luego la cubierta, el salón, la cocina, los camarotes, el baño y algunos detalles, y al final otra vez fuera. En 60 a 90 segundos eso supone unos 10 a 25 segundos por zona, con movimientos de cámara tranquilos, en 16:9 para webs y en 9:16 para Reels y Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'video-con-ia-a-partir-de-fotos-o-dia-de-rodaje',
    title: '¿Vídeo con IA a partir de fotos o día de rodaje? · Still to Film',
    description: 'Vídeo con IA a partir de fotos y día de rodaje comparados: planificación, equipo, plazos, qué muestra cada uno, revisiones, coste y cuándo conviene grabar.',
    h1: 'Vídeo con IA a partir de fotos o día de rodaje: tiempo, coste y límites comparados',
    summary: 'El vídeo con IA a partir de fotos no necesita fecha, equipo ni buen tiempo y cuesta un precio fijo de 50 € a 100 € por vídeo, IVA incluido, pero solo puede mostrar lo que hay en las fotos, sin personas y sin sonido grabado. Un día de rodaje es mejor opción cuando necesitas personas, sonido real, entrevistas, imágenes aéreas o espacios que nunca se fotografiaron.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'un-video-de-recorrido-en-todas-partes',
    title: 'Un vídeo de recorrido, en todas partes · Still to Film',
    description: 'Dónde usar las versiones 16:9 y 9:16 de un vídeo de recorrido: web, plataformas de anuncios, YouTube, Reels, TikTok, Stories y WhatsApp, y consejos de archivo.',
    h1: 'Cómo usar un vídeo de recorrido en tu web, tus anuncios y tus redes sociales',
    summary: 'Usa la versión 16:9 en tu web, en las plataformas de anuncios que aceptan vídeo y en YouTube, y la versión 9:16 para Instagram Reels, TikTok, Stories y el estado de WhatsApp. Sube los archivos MP4, reprodúcelo automáticamente sin sonido en tu web, empieza con la mejor toma y consulta las normas actuales de cada plataforma, porque son distintas.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'video-de-hotel-por-tipo-de-habitacion-o-establecimiento',
    title: 'Hotel: ¿vídeo por habitación o de todo el hotel? · Still to Film',
    description: 'Cuándo conviene un vídeo del hotel, uno por tipo de habitación o ambos, dónde encaja cada uno, su coste por volumen y qué hacer tras una reforma.',
    h1: 'Vídeos de hotel: ¿uno por tipo de habitación o uno de todo el establecimiento?',
    summary: 'Un vídeo del establecimiento encaja en tu página de inicio y en redes sociales, y un vídeo por tipo de habitación encaja en las páginas de reserva, donde el huésped compara habitaciones; también puedes combinar los dos. Cada uno cuenta como un vídeo, así que cinco tipos de habitación y un vídeo del establecimiento son 6 × 95 € = 570 €, IVA incluido, y una habitación reformada necesita un vídeo nuevo a partir de fotos nuevas.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
