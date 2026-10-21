// Croatian Insights articles. Each entry's id matches the body file src/insights/hr/<id>.astro.
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
    slug: 'najbolje-fotografije-iz-oglasa-za-ai-video',
    title: 'Koje su fotografije najbolje za AI video? · Still to Film',
    description: 'Popis provjera za fotografije iz oglasa koje daju dobar AI video obilazak: rezolucija, oštrina, svjetlo, ravne linije, kadrovi, redoslijed i što izbjegavati.',
    h1: 'Koje su fotografije iz oglasa najbolje za AI video obilazak?',
    summary: 'Najbolje funkcioniraju oštre, dobro osvijetljene fotografije visoke rezolucije s ravnim linijama, mješavinom širokih kadrova i detalja te bez ljudi, vodenih žigova i jakih filtara, po mogućnosti izvorne datoteke od vašeg fotografa. AI video može prikazati samo ono što je na fotografijama, pa što su fotografije oštrije, to je film oštriji i mirniji.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'YachtListingVideo',
    slug: 'sto-prikazati-u-videu-za-charter-jahtu',
    title: 'Što prikazati u videu za charter jahtu · Still to Film',
    description: 'Redoslijed za video charter jahte od 60 do 90 sekundi: eksterijer, sidro, paluba, salon, kuhinja, kabine, kupaonica i detalji te usporedba 16:9 i 9:16.',
    h1: 'Što prikazati u videu za charter jahtu i kojim redoslijedom',
    summary: 'Video charter jahte najbolje funkcionira kad prati gostov dan: jahta u plovidbi i na sidru, zatim paluba, salon, kuhinja, kabine, kupaonica i nekoliko detalja, a na kraju ponovno vani. U 60 do 90 sekundi to je otprilike 10 do 25 sekundi po dijelu, s mirnim pokretima kamere, u formatu 16:9 za web-stranice i 9:16 za Reels i Stories.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'AiVideoVsFilming',
    slug: 'ai-video-od-fotografija-ili-dan-snimanja',
    title: 'AI video od fotografija ili dan snimanja? · Still to Film',
    description: 'Usporedba AI videa od fotografija i dana snimanja: planiranje, ekipa, rok izrade, što svaki prikazuje, izmjene i cijena te kada je snimanje bolji izbor.',
    h1: 'AI video od fotografija ili dan snimanja: usporedba vremena, cijene i ograničenja',
    summary: 'AI video od fotografija ne traži datum, ekipu ni lijepo vrijeme i stoji fiksno od 50 do 100 € po videu s PDV-om, ali može prikazati samo ono što je na fotografijama, bez ljudi i bez snimljenog zvuka. Dan snimanja bolji je izbor kad trebate ljude, pravi zvuk, intervjue, snimke iz zraka ili prostore koji nikad nisu fotografirani.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'UseOneVideoEverywhere',
    slug: 'jedan-video-obilazak-svugdje',
    title: 'Jedan video obilazak, korišten svugdje · Still to Film',
    description: 'Gdje koristiti verzije 16:9 i 9:16 video obilaska: web-stranica, platforme za oglase, YouTube, Reels, TikTok, Stories i WhatsApp te savjeti za datoteke.',
    h1: 'Kako jedan video obilazak koristiti na web-stranici, u oglasima i na društvenim mrežama',
    summary: 'Verziju 16:9 koristite na web-stranici, na platformama za oglase koje prihvaćaju video i na YouTubeu, a verziju 9:16 za Instagram Reels, TikTok, Stories i WhatsApp status. Učitajte MP4 datoteke, na web-stranici pustite automatsku reprodukciju bez zvuka, počnite najjačim kadrom i provjerite aktualna pravila svake platforme jer se razlikuju.',
    date: '2026-10-21',
    readMinutes: 5,
  },
  {
    id: 'HotelRoomVideos',
    slug: 'video-za-hotel-po-tipu-sobe-ili-objekta',
    title: 'Video za hotel: po tipu sobe ili cijeli objekt? · Still to Film',
    description: 'Kada hotelu treba jedan video objekta, jedan po tipu sobe ili oboje, gdje svaki najbolje funkcionira, koliko stoji po količini i što nakon renovacije.',
    h1: 'Videi za hotel: jedan po tipu sobe ili jedan za cijeli objekt?',
    summary: 'Jedan video objekta odgovara vašoj početnoj stranici i društvenim mrežama, a video po tipu sobe stranicama za rezervaciju na kojima gosti uspoređuju sobe, i oboje možete kombinirati. Svaki se računa kao jedan video, pa pet tipova soba i jedan video objekta stoje 6 × 95 € = 570 € s PDV-om, a renoviranoj sobi treba novi video od novih fotografija.',
    date: '2026-10-21',
    readMinutes: 5,
  },
];
