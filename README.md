# JPstone Bureau – website

Marketingsite voor JPstone Bureau: walkthrough-video's van listingfoto's, voor jachtcharters en boutique hotels.
Gebouwd met [Astro](https://astro.build) als statische site, met gewone CSS en een beetje JavaScript. Bedoeld voor hosting op Vercel.

## Starten

```bash
npm install
npm run dev        # lokaal ontwikkelen op http://localhost:4321
npm run build      # bouwt de site in dist/
npm run preview    # bekijk de gebouwde site
npm run check:a11y # toegankelijkheidscheck (axe, WCAG 2.1 AA) op alle pagina's; eerst build + preview
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

De adressen staan in `src/i18n/config.ts`. Alle pagina's worden gemaakt door `src/pages/[...path].astro`.

## Teksten aanpassen

- **Gewone teksten:** `src/i18n/en.ts`, `nl.ts`, `de.ts`, `fr.ts`, `es.ts`. Elk bestand heeft precies dezelfde sleutels. Pas je in het Engels iets aan, doe het dan ook in de andere talen.
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
4. Zet de titel en de beschrijving voor schermlezers onder `shots` in **alle vijf** de taalbestanden in `src/i18n/`.

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

Deze pagina's staan niet in de sitemap en worden niet geïndexeerd (`noindex`). Haal de voorbeelden `voorbeeld` en `example` weg voor de livegang.

## Wat nog moet gebeuren voor de livegang

- [x] **Belafspraak:** meetergo-link staat bij `booking` in `src/data/site.ts`.

- [ ] **Domein:** invullen in `src/data/site.ts` (`SITE_URL`) en in `public/robots.txt`.
- [ ] **Bedrijfsgegevens (na inschrijving):** KvK-nummer, btw-id en vestigingsadres invullen in `src/data/site.ts`. Zolang ze leeg zijn, worden ze nergens getoond. Zodra ze er staan, verschijnen ze vanzelf in de footer, de privacyverklaring en de voorwaarden.
- [ ] **Formulier:** Formspree (of vergelijkbaar) koppelen via `formEndpoint` in `src/data/site.ts`, en de dienst noemen in de privacyverklaringen.
- [x] **Pakketten:** €100 per video, 30 seconden, 2 revisies, Vloot onbeperkt, Doorlopend tot 100 per maand (`packages` en `faq` in `src/i18n/`, artikel 5 in `src/legal/*/Terms.astro`).
- [ ] **Levertijd en betaaltermijn:** nog invullen (FAQ in `src/i18n/`, artikel 6 in `src/legal/*/Terms.astro`).
- [ ] **Case Virgin Charter Yachts:** levering, levertijd en citaat, pas na akkoord van de klant.
- [ ] **Toestemming:** schriftelijke toestemming van de eigenaar om Southern Cross bij naam te tonen.
- [ ] **Vertalingen:** Duits, Frans en Spaans laten nalezen door iemand met die moedertaal, vooral de voorwaarden.
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
