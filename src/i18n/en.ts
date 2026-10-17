// English: the base language and the source of the text structure.
// Every other language file (nl, de, fr, es) has exactly the same keys.
// Copy rule: write like a person, not a brochure. Short sentences, no claims we can't back up.

const en = {
  meta: {
    homeTitle: 'JPstone Bureau · Walkthrough videos from your listing photos',
    homeDesc: 'We use AI to turn the photos on your listing into a calm walkthrough video. For yacht charters and boutique hotels. No shoot day, no crew on board.',
    libraryTitle: 'Library · JPstone Bureau',
    libraryDesc: 'Southern Cross: six clips of a motor catamaran, made with AI from its existing listing photos.',
    howTitle: 'How it works · JPstone Bureau',
    howDesc: 'How it works: you send your listing photos, we use AI to turn them into a walkthrough video, you publish.',
    contactTitle: 'Contact · JPstone Bureau',
    contactDesc: 'Request a free sample video. Send a link to your listing, or call or WhatsApp +31 6 57 24 96 07.',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main menu',
    home: 'Home',
    library: 'Library',
    how: 'How it works',
    contact: 'Contact',
    language: 'Language',
  },
  hero: {
    eyebrow: 'For yacht charters and boutique hotels',
    title: 'Your listing photos become a film. No shoot day.',
    lead: 'Send us the photos already on your listing. We use AI to turn them into a calm video walkthrough.',
    cta: 'Request a free sample video',
    more: 'See the library',
    videoAlt: 'Motor catamaran Southern Cross cruising on open water, made from listing photos.',
  },
  fromLibrary: {
    title: 'From the library.',
    more: 'All Southern Cross clips',
  },
  steps: {
    title: 'How it works.',
    s1Title: 'You send photos',
    s1Text: 'A link to your listing is enough.',
    s2Title: 'We make the film',
    s2Text: 'With AI, based on your photos. In 16:9 for your website and 9:16 for social.',
    s3Title: 'You publish',
    s3Text: 'You get mp4 files, ready to post.',
  },
  how: {
    nextTitle: 'Want to try it?',
  },
  contact: {
    title: 'Curious what your listing could look like?',
    lead: "Send us a link to your listing. We'll make a free sample video.",
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    name: 'Name',
    company: 'Company',
    url: 'Website or listing',
    message: 'Message',
    optional: '(optional)',
    submit: 'Request a free sample video',
    noteBefore: 'We only use your details to reply to your request and make the sample video. More in our',
    noteLink: 'privacy policy',
    noteAfter: '. The sample video is free, with no obligation.',
    sending: 'Sending…',
    sent: "Sent. We'll get back to you as soon as we can.",
    failed: "That didn't work. Email us at {email} or send a WhatsApp.",
    mailSubject: 'Sample video request',
  },
  library: {
    eyebrow: 'Library',
    title: 'Every shot started as a photo.',
    lead: 'No crew on board, no drone in the air. These clips were made with AI, from the photos that were already on the listing.',
    featured: 'Featured',
    projectLead: 'Motor catamaran, outside and in. Six clips: at sea, at anchor, the aft deck and a walk through the galley, saloon and cabin.',
  },
  tile: {
    open: 'View larger',
    exterior: 'Exterior',
    interior: 'Interior',
  },
  dialog: {
    label: 'View clip',
    close: 'Close',
  },
  footer: {
    location: 'Based in the Netherlands',
    legalNav: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    refund: 'Cancellation and refunds',
    cookies: 'Cookies',
    vat: 'VAT',
    ai: 'Videos made with AI from real listing photos.',
    font: 'Typeface Hanken Grotesk,',
  },
  legal: {
    updated: 'Last updated',
    privacyTitle: 'Privacy policy',
    privacyDesc: 'What data JPstone Bureau processes, why, for how long, and how to see or delete it.',
    termsTitle: 'Terms and conditions',
    termsDesc: 'The terms for sample videos and projects from JPstone Bureau: prices, delivery, revisions, usage rights, cancellation and refunds.',
    cookiesTitle: 'Cookie policy',
    cookiesDesc: 'JPstone Bureau sets no cookies and uses no trackers. That is why you see no cookie banner.',
    // Shown on translated legal pages: which version counts if they differ. Empty for Dutch.
    translationNote: 'This is a translation of the Dutch text. If the two differ, the Dutch version applies.',
  },
  shots: {
    'southern-cross-varen-zij': {
      title: 'On open water',
      alt: 'Motor catamaran Southern Cross cruising left to right across open water with a white bow wave.',
    },
    'southern-cross-drone-anker': {
      title: 'At anchor, from above',
      alt: 'Drone looking down on Southern Cross at anchor in clear turquoise water.',
    },
    'southern-cross-achterdek': {
      title: 'Aft deck',
      alt: 'Camera glides across the white aft deck of Southern Cross, past the table towards the saloon doors.',
    },
    'southern-cross-kombuis': {
      title: 'From galley to saloon',
      alt: 'Camera moves from the galley of Southern Cross into the bright saloon with a U-shaped sofa and dining table.',
    },
    'southern-cross-salon': {
      title: 'Through the saloon',
      alt: 'Camera passes the kitchen island and moves through the saloon of Southern Cross to the lounge at the front.',
    },
    'southern-cross-hut': {
      title: 'Guest cabin',
      alt: 'Slow turn through a guest cabin with light oak panelling, a made bed and the door to the bathroom.',
    },
  },
};

export type UI = typeof en;
export default en;
