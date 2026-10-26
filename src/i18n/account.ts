// Texts for the client-account links on the public site: the menu icon, the home page block and the
// footer. The portal itself (/account/, /order/) is in English and Dutch; other languages use English.
import type { Locale } from './config';

export interface AccountUI {
  nav: string; // footer link and tooltip of the menu button
  button: string; // the log-in button top right in the menu
  order: string; // footer link and button
  eyebrow: string;
  title: string;
  lead: string;
  create: string;
  have: string;
  login: string;
}

export const accountUI: Record<Locale, AccountUI> = {
  en: { button: 'Log in', nav: 'Client login', order: 'Order online', eyebrow: 'Client account', title: 'Order and follow everything online.', lead: 'Create a free account to place orders, see where they are, review your videos and download them. One account for all your listings.', create: 'Create an account', have: 'Already have an account?', login: 'Log in' },
  nl: { button: 'Inloggen', nav: 'Inloggen voor klanten', order: 'Online bestellen', eyebrow: 'Klantaccount', title: 'Bestel en volg alles online.', lead: "Maak gratis een account aan om te bestellen, de status te zien, je video's te beoordelen en te downloaden. Eén account voor al je listings.", create: 'Account aanmaken', have: 'Heb je al een account?', login: 'Inloggen' },
  de: { button: 'Anmelden', nav: 'Kunden-Login', order: 'Online bestellen', eyebrow: 'Kundenkonto', title: 'Online bestellen und alles verfolgen.', lead: 'Erstellen Sie ein kostenloses Konto, um zu bestellen, den Stand zu sehen, Ihre Videos zu prüfen und herunterzuladen. Ein Konto für alle Ihre Inserate.', create: 'Konto erstellen', have: 'Schon ein Konto?', login: 'Anmelden' },
  fr: { button: 'Connexion', nav: 'Espace client', order: 'Commander en ligne', eyebrow: 'Espace client', title: 'Commandez et suivez tout en ligne.', lead: 'Créez un compte gratuit pour commander, suivre l’avancement, valider vos vidéos et les télécharger. Un seul compte pour toutes vos annonces.', create: 'Créer un compte', have: 'Déjà un compte ?', login: 'Se connecter' },
  es: { button: 'Acceder', nav: 'Acceso clientes', order: 'Pedir en línea', eyebrow: 'Cuenta de cliente', title: 'Pide y sigue todo en línea.', lead: 'Crea una cuenta gratis para hacer pedidos, ver en qué punto están, revisar tus vídeos y descargarlos. Una sola cuenta para todos tus anuncios.', create: 'Crear una cuenta', have: '¿Ya tienes cuenta?', login: 'Iniciar sesión' },
  hr: { button: 'Prijava', nav: 'Prijava za klijente', order: 'Naruči online', eyebrow: 'Korisnički račun', title: 'Naručite i pratite sve online.', lead: 'Otvorite besplatan račun da biste naručivali, pratili status, pregledavali svoje videe i preuzimali ih. Jedan račun za sve vaše oglase.', create: 'Otvori račun', have: 'Već imate račun?', login: 'Prijava' },
  pt: { button: 'Entrar', nav: 'Área de cliente', order: 'Encomendar online', eyebrow: 'Área de cliente', title: 'Encomende e acompanhe tudo online.', lead: 'Crie uma conta gratuita para fazer encomendas, ver em que ponto estão, rever os seus vídeos e descarregá-los. Uma só conta para todos os seus anúncios.', create: 'Criar conta', have: 'Já tem conta?', login: 'Iniciar sessão' },
};

/** The portal language for a site language: Dutch stays Dutch, the rest gets English. */
export const portalLangFor = (lang: Locale) => (lang === 'nl' ? 'nl' : 'en');
