// Shots in the library. Files live in public/media/<file>.{mp4,webm,jpg}.
// To add a shot: run scripts/encode-media.sh <clip> <file>, then add an entry here.
//
// TODO before launch: get written permission from the owners to show these boats by name.
// Southern Cross is named on the page; Freedom, Aventura and other names are visible in some shots.

export type Category = 'exterior' | 'interior' | 'hotel';

export interface Shot {
  file: string;
  category: Category;
  title: string; // what you see, short
  alt: string; // full description for screen readers
  project?: string; // only for named projects the client approved
}

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Alles' },
  { id: 'exterior', label: 'Exterieur' },
  { id: 'interior', label: 'Interieur' },
  { id: 'hotel', label: 'Hotels' },
];

export const categoryLabel: Record<Category, string> = {
  exterior: 'Exterieur',
  interior: 'Interieur',
  hotel: 'Hotel',
};

export const southernCross: Shot[] = [
  {
    file: 'southern-cross-varen-zij',
    category: 'exterior',
    project: 'Southern Cross',
    title: 'Op open zee',
    alt: 'Motorcatamaran Southern Cross vaart van links naar rechts over open zee met een witte boeggolf.',
  },
  {
    file: 'southern-cross-drone-anker',
    category: 'exterior',
    project: 'Southern Cross',
    title: 'Voor anker, van bovenaf',
    alt: 'Drone kijkt neer op Southern Cross, voor anker in helder turquoise water.',
  },
  {
    file: 'southern-cross-achterdek',
    category: 'interior',
    project: 'Southern Cross',
    title: 'Achterdek',
    alt: 'Camera schuift over het witte achterdek van Southern Cross, langs de tafel richting de salondeuren.',
  },
  {
    file: 'southern-cross-kombuis',
    category: 'interior',
    project: 'Southern Cross',
    title: 'Van kombuis naar salon',
    alt: 'Camera beweegt vanaf de kombuis van Southern Cross de lichte salon met U-bank en eettafel in.',
  },
  {
    file: 'southern-cross-salon',
    category: 'interior',
    project: 'Southern Cross',
    title: 'Door de salon',
    alt: 'Camera loopt langs het kookeiland door de salon van Southern Cross naar de lounge voorin.',
  },
  {
    file: 'southern-cross-hut',
    category: 'interior',
    project: 'Southern Cross',
    title: 'Gastenhut',
    alt: 'Langzame draai door een gastenhut met licht eikenhout, een opgemaakt bed en de deur naar de badkamer.',
  },
];

export const shots: Shot[] = [
  { file: 'ext-drone-rondom', category: 'exterior', title: 'Drone rondom, voor anker', alt: 'Drone cirkelt om een motorcatamaran die voor anker ligt in diepblauw water.' },
  { file: 'ext-strand-profiel', category: 'exterior', title: 'Profiel voor het strand', alt: 'Motorcatamaran in profiel in turquoise water, met een palmstrand op de achtergrond.' },
  { file: 'ext-varen-hekgolf', category: 'exterior', title: 'Op snelheid, hekgolf', alt: 'Motorcatamaran vaart op snelheid en trekt een brede witte hekgolf.' },
  { file: 'int-kuip-lounge', category: 'interior', title: 'Achterdek lounge', alt: 'Ruim achterdek met blauwe loungebanken en een tafel, met een rotskust en peddelplanken op de achtergrond.' },
  { file: 'hotel-gevel', category: 'hotel', title: 'Gevel van het hotel', alt: 'Monumentale bakstenen hotelgevel met torentjes, vogels vliegen over.' },
  { file: 'ext-turquoise-ondiep', category: 'exterior', title: 'Ondiep turquoise water', alt: 'Motorcatamaran ligt stil in helder, ondiep turquoise water met een heuvel erachter.' },
  { file: 'hotel-suite', category: 'hotel', title: 'Suite met gouden kussens', alt: 'Hotelsuite met een groot bed, gouden kussens en hoge gordijnen in warm licht.' },
  { file: 'ext-drone-varen', category: 'exterior', title: 'Drone, varend', alt: 'Drone volgt een motorcatamaran van bovenaf over groenblauw water.' },
  { file: 'int-salon-eettafel', category: 'interior', title: 'Salon met eettafel', alt: 'Lichte salon met een U-vormige bank, eettafel en turquoise kussens.' },
  { file: 'ext-strand-baai', category: 'exterior', title: 'Voor anker in de baai', alt: 'Motorcatamaran met donkerblauwe romp voor anker voor een strand met parasols.' },
  { file: 'int-kuip-gedekt', category: 'interior', title: 'Gedekte tafel op het achterdek', alt: 'Gedekte tafel met borden en fruit op het achterdek, blauwe banken en zee erachter.' },
  { file: 'hotel-salon', category: 'hotel', title: 'Salon met kroonluchter', alt: 'Hotelsalon met rode wanden, fluwelen stoelen en een sterkroonluchter.' },
  { file: 'ext-varen-boeg', category: 'exterior', title: 'Varen, boeg vooruit', alt: 'Motorcatamaran vaart schuin op de camera af met spray langs de boeg.' },
  { file: 'int-salon-lounge', category: 'interior', title: 'Salon lounge', alt: 'Salon met grijze banken, groene kussens en ramen rondom met uitzicht op groen.' },
  { file: 'ext-anker-hek', category: 'exterior', title: 'Achterschip voor anker', alt: 'Achterschip van een motorcatamaran met bijboot, voor anker bij een beboste kust.' },
  { file: 'hotel-kamer', category: 'hotel', title: 'Kamer met kroonluchter', alt: 'Hotelkamer met houten lambrisering, rode panelen en een gouden kroonluchter.' },
  { file: 'int-hut-master', category: 'interior', title: 'Masterhut', alt: 'Masterhut met een opgemaakt tweepersoonsbed, grijze plaid en eigen badkamer.' },
  { file: 'ext-turquoise-profiel', category: 'exterior', title: 'Profiel in turquoise', alt: 'Donkere motorcatamaran in profiel op turquoise water onder een lichte lucht.' },
  { file: 'int-salon-uitzicht', category: 'interior', title: 'Salon met uitzicht', alt: 'Salon met blauwe kussens en panoramaramen op een baai.' },
  { file: 'hotel-zolder', category: 'hotel', title: 'Zoldersuite', alt: 'Zoldersuite onder een schuin dak met donker hout, een zithoek en dakramen.' },
  { file: 'int-kombuis-salon', category: 'interior', title: 'Kombuis met zicht op zee', alt: 'Lange kombuis met donkere kasten, doorkijk naar de salon en het water.' },
  { file: 'ext-anker-boeg', category: 'exterior', title: 'Boeg, voor anker', alt: 'Motorcatamaran vanaf de boeg gezien, voor anker in een blauwe baai.' },
  { file: 'int-salon-tafel', category: 'interior', title: 'Salon, tafel en ramen', alt: 'Salon met crèmekleurige banken rond een grote tafel en ramen rondom.' },
  { file: 'ext-drone-zij', category: 'exterior', title: 'Drone, varend zijaanzicht', alt: 'Drone volgt een lichtblauwe motorcatamaran die snel over het water vaart.' },
];
