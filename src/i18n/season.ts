// Texts for the season message at the top of the site (src/components/SeasonBanner.astro).
// The message changes by itself with the time of year (picked in the <head> of Base.astro).
import type { Locale } from './config';

export type Period = 'winter' | 'spring' | 'summer' | 'autumn';

export interface SeasonUI {
  label: string; // name of the region for screen readers
  periods: Record<Period, string>;
  cta: string;
  close: string;
}

export const seasonUI: Record<Locale, SeasonUI> = {
  en: {
    label: 'Season message',
    periods: {
      winter: 'Ready for the new season? Order before 1 February and you’ll have your videos by March.',
      spring: 'The season is about to start. Order now and your videos are online before the first guests.',
      summer: 'In the middle of the season? We need no filming day: no guests to move, no boat out of service.',
      autumn: 'Season over? New photos or a refit? Refresh your videos for next season.',
    },
    cta: 'Order now',
    close: 'Close message',
  },
  nl: {
    label: 'Seizoensmelding',
    periods: {
      winter: "Klaar voor het nieuwe seizoen? Bestel vóór 1 februari, dan heb je je video's uiterlijk in maart.",
      spring: "Het seizoen begint bijna. Bestel nu, dan staan je video's online vóór de eerste gasten.",
      summer: 'Midden in het seizoen? Wij hebben geen draaidag nodig: geen gasten verplaatsen, geen boot uit de vaart.',
      autumn: "Seizoen voorbij? Nieuwe foto's of verbouwd? Ververs je video's voor volgend seizoen.",
    },
    cta: 'Nu bestellen',
    close: 'Melding sluiten',
  },
  de: {
    label: 'Saisonhinweis',
    periods: {
      winter: 'Bereit für die neue Saison? Bestellen Sie vor dem 1. Februar, dann haben Sie Ihre Videos bis März.',
      spring: 'Die Saison beginnt bald. Bestellen Sie jetzt, dann sind Ihre Videos vor den ersten Gästen online.',
      summer: 'Mitten in der Saison? Wir brauchen keinen Drehtag: keine Gäste umbuchen, kein Boot außer Betrieb.',
      autumn: 'Saison vorbei? Neue Fotos oder renoviert? Frischen Sie Ihre Videos für die nächste Saison auf.',
    },
    cta: 'Jetzt bestellen',
    close: 'Hinweis schließen',
  },
  fr: {
    label: 'Message de saison',
    periods: {
      winter: 'Prêt pour la nouvelle saison ? Commandez avant le 1er février et vous aurez vos vidéos d’ici mars.',
      spring: 'La saison commence bientôt. Commandez maintenant : vos vidéos seront en ligne avant les premiers clients.',
      summer: 'En pleine saison ? Pas besoin de tournage : aucun client à déplacer, aucun bateau immobilisé.',
      autumn: 'Saison terminée ? Nouvelles photos ou travaux ? Rafraîchissez vos vidéos pour la saison prochaine.',
    },
    cta: 'Commander',
    close: 'Fermer le message',
  },
  es: {
    label: 'Aviso de temporada',
    periods: {
      winter: '¿Listo para la nueva temporada? Pide antes del 1 de febrero y tendrás tus vídeos en marzo.',
      spring: 'La temporada está a punto de empezar. Pide ahora y tus vídeos estarán en línea antes de los primeros huéspedes.',
      summer: '¿En plena temporada? No necesitamos día de rodaje: ni huéspedes que mover ni barco fuera de servicio.',
      autumn: '¿Terminó la temporada? ¿Fotos nuevas o reformas? Renueva tus vídeos para la próxima temporada.',
    },
    cta: 'Pedir ahora',
    close: 'Cerrar aviso',
  },
  hr: {
    label: 'Sezonska obavijest',
    periods: {
      winter: 'Spremni za novu sezonu? Naručite prije 1. veljače i videe ćete imati do ožujka.',
      spring: 'Sezona uskoro počinje. Naručite sada i vaši videi bit će online prije prvih gostiju.',
      summer: 'Usred sezone? Ne treba nam dan snimanja: bez premještanja gostiju, bez povlačenja broda iz plovidbe.',
      autumn: 'Sezona je završila? Nove fotografije ili renovacija? Osvježite videe za sljedeću sezonu.',
    },
    cta: 'Naruči sada',
    close: 'Zatvori obavijest',
  },
  pt: {
    label: 'Aviso de época',
    periods: {
      winter: 'Pronto para a nova época? Encomende antes de 1 de fevereiro e terá os seus vídeos até março.',
      spring: 'A época está quase a começar. Encomende agora e os seus vídeos estarão online antes dos primeiros hóspedes.',
      summer: 'Em plena época? Não precisamos de dia de filmagem: sem mudar hóspedes, sem barco parado.',
      autumn: 'A época terminou? Fotografias novas ou obras? Renove os seus vídeos para a próxima época.',
    },
    cta: 'Encomendar',
    close: 'Fechar aviso',
  },
};
