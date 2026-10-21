// Client reviews shown on the home page. Add only real reviews, with the client's written
// permission (the review form has a checkbox for that). While this list is empty the block is hidden.
//
// Example:
// { name: 'Anna de Vries', company: 'Example Charters', rating: 5, text: 'The videos look great on our listings.', lang: 'en' },

export interface Review {
  name: string;
  company?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string; // in the language it was written in
  lang: string; // e.g. 'en', 'nl', 'hr'
}

export const reviews: Review[] = [];
