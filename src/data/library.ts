// Shots in the library. Files live in public/media/<file>.{mp4,webm,jpg}.
// To add a shot: run scripts/encode-media.sh <clip> <file>, then add an entry here.
//
// TODO before launch: get written permission from the owners to show these boats by name.
// Southern Cross is named on the page.

export type Category = 'exterior' | 'interior';

export interface Shot {
  file: string;
  category: Category;
  title: string; // what you see, short
  alt: string; // full description for screen readers
  project?: string; // only for named projects the client approved
}

export const categoryLabel: Record<Category, string> = {
  exterior: 'Exterieur',
  interior: 'Interieur',
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

