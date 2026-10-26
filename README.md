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
| Portugees | `/pt/` | `/pt/galeria/`, `/pt/precos/` |

De adressen staan in `src/i18n/config.ts`. Alle pagina's worden gemaakt door `src/pages/[...path].astro`.

## Teksten aanpassen

- **Gewone teksten:** `src/i18n/en.ts`, `nl.ts`, `de.ts`, `fr.ts`, `es.ts`, `hr.ts`, `pt.ts`. Elk bestand heeft precies dezelfde sleutels. Pas je in het Engels iets aan, doe het dan ook in de andere talen.
- **Juridische teksten:** `src/legal/<taal>/Privacy.astro`, `Terms.astro`, `Cookies.astro`. De Nederlandse versie is leidend. Pas na een wijziging de datum aan in `src/i18n/index.ts` (`LEGAL_UPDATED`).
- **Landingspagina's** (jacht, hotel, vakantiehuis, AI-video, vergelijking, prijzen, FAQ): `src/landing/<taal>/`. Ze tonen "Laatst bijgewerkt" en sturen `dateModified` mee aan zoekmachines. Pas na een inhoudelijke wijziging (prijzen, levertijd, voorwaarden) `CONTENT_UPDATED` aan in `src/i18n/index.ts`.
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
4. Zet de titel en de beschrijving voor schermlezers onder `shots` in **alle zeven** de taalbestanden in `src/i18n/`.

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
- Een nieuw artikel: voeg het toe aan `index.ts` en maak het `.astro`-bestand met dezelfde `id`. Het verschijnt vanzelf op de overzichtspagina, in de sitemap, in de zoekbalk en met hreflang naar de andere talen. Zet het in alle zeven de talen, anders meldt `npm run check:seo` ontbrekende taalversies.
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
- **llms-full.txt:** wordt bij elke build automatisch gemaakt (`scripts/llms-full.mjs`) met de volledige Engelse tekst van alle openbare pagina's. Niets aan doen.
- **IndexNow:** na elke productiebuild op Vercel meldt `scripts/indexnow.mjs` alle adressen uit de sitemap bij Bing en andere IndexNow-zoekmachines (Bing voedt ook ChatGPT-zoeken en Copilot). De sleutel staat in die file en in `public/<sleutel>.txt`; verander ze alleen samen. Mislukt het melden, dan gaat de deploy gewoon door.
- **Vergelijkingspagina:** `src/landing/<taal>/AiToolsVsDoneForYou.astro` (AI-tools zelf gebruiken of uitbesteden). Noem geen prijzen of functies van andere tools die je niet zelf hebt gecontroleerd.
- **Structured data:** `src/data/schema.ts` (Organization, WebSite, Service, FAQPage, VideoObject, BreadcrumbList). De FAQ-data komt uit dezelfde teksten als de zichtbare FAQ.
- **Hoofdadres:** `https://stilltofilm.com` (zonder www). De doorverwijzing van www regel je in Vercel onder **Settings → Domains**, niet in `vercel.json`: twee regels die elkaar tegenspreken geven een eindeloze lus (ERR_TOO_MANY_REDIRECTS).

## Bestellen, klantportaal en betalen

- **/order/** – bezoekers bestellen zelf: aantal video's kiezen (prijs volgt de staffel, max. 100; daarboven offerte), gegevens invullen, akkoord met de voorwaarden. Daarna zien ze het bedrag en de bankgegevens met de omschrijving `Still to Film #<nummer>`.
- **/account/register/** – iedereen kan een account aanmaken met naam, e-mail en wachtwoord. Het account werkt pas na bevestiging via de link in de e-mail, zodat niemand bestellingen ziet van een adres dat niet van hem is.
- **/account/login/** – inloggen met wachtwoord, of met een code van 6 cijfers per e-mail. **/account/forgot/** stuurt een link om een nieuw wachtwoord te kiezen; **/account/password/** wijzigt het wachtwoord.
- **/account/** – klanten zien hun bestelling, de bankgegevens, klikken "Ik heb overgemaakt", bekijken hun video's, geven feedback of vragen een revisie aan, en downloaden zodra alles betaald is.
- **/admin/** – jij: bestellingen bekijken of zelf aanmaken (na een offerte), betalingen bevestigen met "Betaling ontvangen", video's uploaden, nieuwe versies, reageren, status wijzigen.

**Betalen** gaat alleen per bankoverschrijving. Regel (`src/lib/orders.ts`, `SPLIT_FROM_CENTS`): onder €1.000 incl. btw alles vooraf; vanaf €1.000 50% bij bestelling en 50% na oplevering. Het restbedrag verschijnt pas als jij de status op `delivered` zet. **Facturen** maak je zelf (je boekhoudprogramma); er is een plek voor een factuurlink per betaling (`invoice_url`).

**Bankgegevens** zet je in Vercel → Environment Variables: `BANK_HOLDER` (ten name van), `BANK_IBAN` en `BANK_BIC`, daarna Redeploy. Zo wissel je later van rekening zonder code. Zonder die variabelen gelden de waarden in `src/data/site.ts` (nu een oranje [TODO]). Let op: de site toont altijd de huidige rekening, ook bij oudere bestellingen.

**Werkwijze per bestelling**
1. Nieuwe bestelling (via /order/ of door jou aangemaakt) staat op `awaiting_payment`. Je ziet hem op /admin/.
2. Klant maakt over en klikt "Ik heb overgemaakt" → op /admin/ zie je "klant meldt betaald". Zie je het geld op je rekening, klik "Betaling ontvangen": de status gaat naar `in_production`.
3. Upload de video's (16:9 en 9:16) op de bestelpagina. De klant beoordeelt ze en geeft feedback; een nieuwe versie upload je bij dezelfde video.
4. Klaar → status `delivered`. Bij 50/50 ziet de klant dan het restbedrag met de bankgegevens. Na volledige betaling kan de klant downloaden; zet de status op `completed`.

Let op: er gaan nog geen automatische e-mails uit bij een nieuwe bestelling. Kijk dus regelmatig op /admin/, of laat me e-mailmeldingen toevoegen (bijv. met Resend).

**Beveiliging van de accounts**
- Wachtwoorden bewaren we niet: Supabase slaat alleen een versleutelde hash op (bcrypt). Wij, en de site, kunnen ze niet zien.
- Wachtwoord: minstens 10 tekens, niet (een deel van) het e-mailadres, en niet een wachtwoord dat in bekende datalekken voorkomt (controle via Have I Been Pwned; alleen de eerste 5 tekens van een hash gaan de deur uit).
- Pogingen worden beperkt (`src/lib/ratelimit.ts`): 5 foute wachtwoorden per e-mailadres per 15 minuten, 30 per IP-adres; daarna 15 minuten blokkade, ook voor het juiste wachtwoord. Ook codes, registraties en resetlinks hebben een limiet. Supabase heeft daarbovenop eigen limieten.
- Foutmeldingen verraden niet of een e-mailadres een account heeft (inloggen, registreren en wachtwoord vergeten geven steeds hetzelfde antwoord).
- Wachtwoord wijzigen vraagt het huidige wachtwoord en logt alle andere apparaten uit. Sessiecookies zijn `httpOnly`, `secure` en `sameSite=lax`; formulieren van andere sites worden geweigerd (Astro `checkOrigin`). Registratieformulier heeft een onzichtbaar veld tegen bots.
- /admin/ werkt alleen voor bevestigde adressen in `ADMIN_EMAILS`. Gebruik daar een sterk, uniek wachtwoord.

**Eenmalig instellen**
1. **Supabase** (supabase.com, gratis): maak een project in regio Frankfurt of Ierland.
   - SQL Editor → plak `supabase/schema.sql` → Run.
   - Authentication → URL Configuration: Site URL `https://stilltofilm.com`, Redirect URL `https://stilltofilm.com/account/auth/callback/**`.
   - Authentication → Sign In / Providers → Email: **Confirm email aan**, **Secure password change uit** (de site vraagt zelf het huidige wachtwoord), minimale wachtwoordlengte **10**.
   - Authentication → Email Templates → **Magic Link**: zet de code erin, bijv. `<p>Je code: <strong>{{ .Token }}</strong></p><p>Of klik: <a href="{{ .ConfirmationURL }}">inloggen</a></p>`. Pas ook **Confirm signup** en **Reset password** aan naar je eigen tekst (Nederlands/Engels).
   - **Eigen e-mailserver (SMTP) is nodig voor de livegang**: zonder stuurt Supabase maar een paar e-mails per uur, en dan krijgen nieuwe klanten hun bevestigingsmail niet. Bijv. Resend (gratis tot 3000/maand): Authentication → SMTP.
   - Project Settings → API: kopieer URL, `anon` key en `service_role` key.
   - Het gratis plan staat bestanden tot 50 MB toe en 1 GB opslag in totaal. Comprimeer video's (bijv. met `scripts/encode-media.sh`) of neem Pro als je meer nodig hebt. Supabase stuurt standaard maar een paar e-mails per uur; stel later eigen SMTP in (Authentication → SMTP).
2. **Vercel** → Settings → Environment Variables: zet de vier waarden uit `.env.example` (Supabase-URL, de twee keys en `ADMIN_EMAILS`) en deploy opnieuw.

Zonder deze sleutels werkt de site gewoon: /order/ biedt dan bestellen per e-mail aan en /account/ zegt dat het portaal nog niet beschikbaar is.

**Lokaal testen:** kopieer `.env.example` naar `.env`, vul in, en start `npm run dev`.

**Techniek:** de site blijft statisch, behalve /order/, /account/, /admin/ en /api/ (Vercel-functies, `prerender = false`). Klanten zien in de database alleen hun eigen bestellingen (row level security op e-mail); alles wat iets wijzigt loopt via de server, na een controle wie het vraagt. Het bedrag van een bestelling wordt altijd op de server berekend. Video's staan in een privé-bucket en zijn alleen bereikbaar via links die een uur geldig zijn.

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
- [ ] **Vertalingen:** Duits, Frans, Spaans, Kroatisch en Portugees laten nalezen door iemand met die moedertaal, vooral de voorwaarden.
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
