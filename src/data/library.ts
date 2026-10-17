// Shots in the library. Files live in public/media/<file>.{mp4,webm,jpg}.
// To add a shot: run scripts/encode-media.sh <clip> <file>, add an entry here,
// and add its title and alt text under `shots` in every file in src/i18n/.
//
// TODO before launch: get written permission from the owner to show Southern Cross by name.

export type Category = 'exterior' | 'interior';

export interface Shot {
  file: string;
  category: Category;
}

export const southernCross: Shot[] = [
  { file: 'southern-cross-varen-zij', category: 'exterior' },
  { file: 'southern-cross-drone-anker', category: 'exterior' },
  { file: 'southern-cross-achterdek', category: 'interior' },
  { file: 'southern-cross-kombuis', category: 'interior' },
  { file: 'southern-cross-salon', category: 'interior' },
  { file: 'southern-cross-hut', category: 'interior' },
];
