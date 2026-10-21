# Still to Film – website

Marketingsite voor Still to Film: walkthrough-video's van listingfoto's, voor jachtcharters, boutique hotels en vakantieverhuur.
Gebouwd met [Astro](https://astro.build) als statische site, met gewone CSS en een beetje JavaScript. Bedoeld voor hosting op Vercel.

## Starten

```bash
npm install
npm run dev        # lokaal ontwikkelen op http://localhost:4321
npm run build      # bouwt de site in dist/
npm run preview    # bekijk de gebouwde site
npm run check:a11y # toegankelijkheidscheck (axe, WCAG 2.1 AA) op alle pagina's; eerst build + preview
npm run check:seo  # titels, beschrijvingen, H1, canonical, hreflang, JSON-LD en interne links; eerst build
```

## Talen en adressen

Engels is de basistaal. De andere talen hebben een eigen voorvoegsel en vertaalde paginanamen.

| Taal | Home | Voorbeeld |
|---|---|---|
| Engels | `/` | `/library/`, `/how-it-works/` |
| Nederlands | `/nl/` | `/nl/bibliotheek/`, `/nl/werkwijze/` |
| Duits | `/de/` | `/de/bibliothek/`, `/de/kontakt/` |
| Frans | `/fr/` | `/fr/bibliotheque/`, `/fr/conditions/` |
| Spaans | `/es/` | `/es/biblioteca/`, `/es/contacto/` |
| Kroatisch | `/hr/` | `/hr/galerija/`, `/hr/cijene/` |

De adressen staan in `src/i18n/config.ts`. Alle pagina's worden gemaakt door `src/pages/[...path].astro`.

## Teksten aanpassen

- **Gewone teksten:** `src/i18n/en.ts`, `nl.ts`, `de.ts`, `fr.ts`, `es.ts`, `hr.ts`. Elk bestand heeft precies dezelfde sleutels. Pas je in het Engels iets aan, doe het dan ook in de andere talen.
- **Juridische teksten:** `src/legal/<taal>/Privacy.astro`, `Terms.astro`, `Cookies.astro`. De Nederlandse versie is leidend. Pas na een wijziging de datum aan in `src/i18n/index.ts` (`LEGAL_UPDATED`).
- **Bedrijfsgegevens** (e-mail, telefoon, KvK, btw, adres, formulier): `src/data/site.ts`.
- **Placeholders:** alles wat in een tekst als `[TODO: …]` staat, verschijnt op de site als oranje gestippelde tekst. Zo valt het op tot het is ingevuld. Zoek ze op met `grep -rn "TODO" src`.

## Video's toevoegen of vervangen

1. Zet het ruwe bestand ergens neer, bijvoorbeeld in `assets/`.
2. Maak de webversies:
   ```bash
   scripts/encode-media.sh pad/naar/clip.mp4 mijn-clip
   ```
   Dit maakt `public/media/mijn-clip.mp4` (H.264), `.webm` (VP9) en `.jpg` (stilstaand beeld), 960 px breed, zonder geluid.
3. Voeg de clip toe in `src/data/library.ts` (bestandsnaam en `exterior` of `interior`).
4. Zet de titel en de beschrijving voor schermlezers onder `shots` in **alle zes** de taalbestanden in `src/i18n/`.

### Voor/na-slider

- De slider op de homepage (`src/components/BeforeAfter.astro`) vergelijkt de originele listingfoto (`public/media/photo-<naam>.jpg`) met de video die ervan is gemaakt.
- De foto moet de **startfoto** van de clip zijn en dezelfde verhouding hebben als de video, anders sluiten ze niet op elkaar aan.

### Hero-video

De video bovenaan de homepage staat in `src/views/Home.astro`. Houd hem klein (onder ~1,5 MB), want hij laadt meteen.

## Persoonlijke pagina voor een prospect

Maak een proefvideo van de listing van een prospect en stuur een eigen link mee, bijvoorbeeld `/p/voorbeeld/`.

1. Encodeer de clip en zet de startfoto in `public/media/` (zie hierboven).
2. Voeg een regel toe in `src/data/prospects.ts`: `slug`, bedrijfsnaam, naam van de listing, taal, clip en foto.
3. Bouw en publiceer. De pagina toont de video, de voor/na-slider en knoppen voor e-mail en WhatsApp, met de naam al ingevuld.

Deze pagina's staan niet in de sitemap en worden niet geïndexeerd (`noindex`).

## Artikelen (Insights)

- Staan onder `/insights/` en `/<taal>/insights/`. Per taal een map in `src/insights/<taal>/` met `index.ts` (titels, adressen, datum) en per artikel een `.astro`-bestand met de tekst.
- Een nieuw artikel: voeg het toe aan `index.ts` en maak het `.astro`-bestand met dezelfde `id`. Het verschijnt vanzelf op de overzichtspagina, in de sitemap, in de zoekbalk en met hreflang naar de andere talen. Zet het in alle zes de talen, anders meldt `npm run check:seo` ontbrekende taalversies.
- Teksten rond de artikelen: `src/insights/ui.ts`.

## Reviews

- **Formulier:** stuur klanten na levering de link `stilltofilm.com/review/` (of `/nl/review/`, `/de/review/`, `/fr/review/`, `/es/review/`, `/hr/review/`). Ze kiezen sterren, schrijven een review en geven wel of geen toestemming om te publiceren. De review komt binnen per e-mail of WhatsApp; er wordt niets vanzelf gepubliceerd. De pagina staat niet in het menu, niet in de sitemap en wordt niet geïndexeerd.
- **Tonen:** zet een goedgekeurde review (alleen met toestemming) in `src/data/reviews.ts`. Zolang die lijst leeg is, staat er geen reviewblok op de homepage.
- **Teksten:** `src/i18n/review.ts`.

## Zoeken op de site

Het vergrootglas in het menu (`src/components/SiteSearch.astro`) geeft suggesties terwijl je typt: pagina's, onderdelen van de homepage en alle vragen van de FAQ-pagina. Extra zoekwoorden per taal, zoals "betalen" of "btw" voor de prijzenpagina, staan in `src/i18n/search.ts`. Alles staat in de pagina zelf; er gaat niets naar een externe dienst. Sneltoets: `/` of Ctrl/Cmd+K.

## SEO en AI-zoekmachines

- **Sitemap:** `/sitemap.xml` wordt bij elke build gemaakt uit de paginalijst in `src/i18n/config.ts`, met alle taalversies (hreflang). Een nieuwe pagina komt er vanzelf in.
- **robots.txt:** laat alle zoekmachines en AI-crawlers toe (GPTBot, ClaudeBot, PerplexityBot, Google-Extended en andere).
- **llms.txt:** een korte, feitelijke samenvatting voor AI-assistenten in `public/llms.txt`. Houd die gelijk met de site als prijzen of diensten veranderen.
- **Structured data:** `src/data/schema.ts` (Organization, WebSite, Service, FAQPage, VideoObject, BreadcrumbList). De FAQ-data komt uit dezelfde teksten als de zichtbare FAQ.
- **Hoofdadres:** `https://stilltofilm.com` (zonder www). De doorverwijzing van www regel je in Vercel onder **Settings → Domains**, niet in `vercel.json`: twee regels die elkaar tegenspreken geven een eindeloze lus (ERR_TOO_MANY_REDIRECTS).

## Beveiliging

- **Content Security Policy:** Astro zet bij elke build een CSP-tag in elke pagina met een hash van elk eigen script en elke eigen style (`security.csp` in `astro.config.mjs`). Alleen die scripts mogen draaien; alles van andere websites wordt geblokkeerd. Voeg je een externe dienst toe (bijvoorbeeld een andere formulierdienst), zet het domein dan bij de juiste regel in `astro.config.mjs`.
- **Headers** (in `vercel.json`): HSTS, geen inbedden in andere sites (`frame-ancestors 'none'`), `nosniff`, een strikte `Referrer-Policy` en `Permissions-Policy` (geen camera, microfoon, locatie en dergelijke), en `Cross-Origin-Opener-Policy`/`-Resource-Policy`. Prospectpagina's (`/p/`) krijgen ook `X-Robots-Tag: noindex`.
- **Geen cookies, geen advertentietrackers, geen externe scripts of lettertypen.** Alles komt van het eigen domein. Bezoekersstatistieken via Vercel Web Analytics (`<Analytics />` in `src/layouts/Base.astro`): zonder cookies, het script en de metingen lopen via `/_vercel/insights/` op het eigen domein. Zet het aan in Vercel onder **Analytics → Enable**.
- **`/.well-known/security.txt`:** zo weten onderzoekers waar ze een lek kunnen melden. Verloopt op 19-10-2027; zet dan de datum vooruit.
- **Controleren:** `npm audit` (afhankelijkheden) en na livegang https://securityheaders.com en https://observatory.mozilla.org.

### Zelf doen (buiten de code)

- [ ] **Tweestapsverificatie (2FA)** aan op GitHub, Vercel, je domeinregistrar en je e-mail.
- [ ] **Domein vergrendelen** (transfer lock) en **DNSSEC** aanzetten bij de registrar.
- [ ] **E-mailspoofing voorkomen:** zolang je geen e-mail op stilltofilm.com gebruikt, zet in de DNS een SPF-record `v=spf1 -all` en een DMARC-record `_dmarc` met `v=DMARC1; p=reject;`. Dan kan niemand mail versturen die van je domein lijkt te komen.
- [ ] **CAA-record:** `0 issue "letsencrypt.org"`, zodat alleen de certificaatuitgever van Vercel certificaten voor je domein mag maken.
- [ ] **HSTS preload:** na een paar weken zonder problemen het domein aanmelden op https://hstspreload.org.

## Wat nog moet gebeuren voor de livegang

- [x] **Belafspraak:** loopt via WhatsApp, met een vooraf ingevuld bericht (`booking.waMessage` in `src/i18n/`).

- [x] **Domein:** stilltofilm.com (staat in `src/data/site.ts` en `public/robots.txt`). In Vercel is stilltofilm.com het hoofdadres; www.stilltofilm.com stuurt daarheen door.
- [ ] **Bedrijfsgegevens (na inschrijving):** KvK-nummer, btw-id en vestigingsadres invullen in `src/data/site.ts`. Zolang ze leeg zijn, worden ze nergens getoond. Zodra ze er staan, verschijnen ze vanzelf in de footer, de privacyverklaring en de voorwaarden.
- [ ] **Formulier:** Formspree (of vergelijkbaar) koppelen via `formEndpoint` in `src/data/site.ts`, en de dienst noemen in de privacyverklaringen.
- [x] **Pakketten:** €100 per video, 30 seconden, 2 revisies, Vloot onbeperkt, Doorlopend tot 100 per maand (`packages` en `faq` in `src/i18n/`, artikel 5 in `src/legal/*/Terms.astro`).
- [x] **Levertijd en betaaltermijn:** tot 2 video's per dag, leverdatum altijd vooraf afgesproken (FAQ); betaaltermijn 14 dagen (artikel 6 van de voorwaarden).
- [ ] **Case Virgin Charter Yachts** (op de bibliotheekpagina): levering, levertijd en citaat invullen in `caseStudy` in `src/i18n/`, pas na akkoord van de klant. Zolang ze op `[TODO` beginnen, worden ze niet getoond.
- [ ] **Toestemming:** schriftelijke toestemming van de eigenaar om Southern Cross bij naam te tonen.
- [ ] **Vertalingen:** Duits, Frans, Spaans en Kroatisch laten nalezen door iemand met die moedertaal, vooral de voorwaarden.
- [ ] **Juridische check:** voorwaarden en privacyverklaring laten controleren door een jurist.

## Opbouw

```
src/
  i18n/        teksten per taal + taal- en adresinstellingen
  legal/       juridische teksten per taal
  views/       paginasjablonen (Home, Library, How, Contact)
  components/  onderdelen (menu, footer, slider, tegels, FAQ, …)
  layouts/     Base (head, SEO, hreflang) en Legal
  data/        bedrijfsgegevens en de lijst met clips
  styles/      design tokens en basisstijlen
  scripts/     afspelen bij hover en de grote weergave
public/
  media/       video's, stilstaande beelden en listingfoto's
  fonts/       Hanken Grotesk (SIL Open Font License, OFL.txt)
scripts/       encode-media.sh, check-a11y.mjs, shoot.mjs (screenshots)
```
