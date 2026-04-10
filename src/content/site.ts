import { deContent, esContent } from './site-extra';

import { publicContactEmails } from './contact-addresses';

export type Locale = 'nl' | 'en' | 'de' | 'es';

export const localeRootPaths: Record<Locale, string> = {
  nl: '/',
  en: '/en/',
  de: '/de/',
  es: '/es/',
};

export const legalLocaleFallback: Record<Locale, 'nl' | 'en'> = {
  nl: 'nl',
  en: 'en',
  de: 'en',
  es: 'en',
};

export interface NavItem {
  label: string;
  href: string;
}

export interface MetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  supporting: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta: string;
  secondaryHref?: string;
  metrics: Array<{ value: string; label: string }>;
}

export interface PropositionBridgeContent extends SectionIntroContent {
  stages: Array<{
    label: string;
    title: string;
    description: string;
  }>;
}

export interface SectionIntroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ChallengeContent extends SectionIntroContent {
  proofPanels: {
    explainabilityLabel: string;
    explainabilityTitle: string;
    explainabilitySummary: string;
    explainabilitySupporting: string;
    explainabilityItems: Array<{ label: string; value: string }>;
    followUpLabel: string;
    followUpTitle: string;
    followUpSummary: string;
    followUpItems: Array<{ label: string; value: string }>;
    followUpAction: string;
  };
}

export interface FlowContent extends SectionIntroContent {
  flow: string[];
  supporting: string;
}

export interface HowItWorksContent extends SectionIntroContent {
  panelLabel: string;
  panelSupporting: string;
  steps?: Array<{ title: string; description: string }>;
  stepNotes?: string[];
  outcomes?: string[];
  layers?: Array<{
    label: string;
    title: string;
    description: string;
    meta?: Array<{ label: string; value: string }>;
    emphasis?: boolean;
  }>;
}

export interface WhyVelvoixContent extends SectionIntroContent {
  cards: Array<{ title: string; description: string }>;
}

export interface TechnicalCoreContent extends SectionIntroContent {
  capabilities?: string[];
  rows: Array<{
    index: string;
    title: string;
    description: string;
    effect: string;
  }>;
  closingLine: string;
}

export interface CompareChainsContent extends SectionIntroContent {
  compareLabel: string;
  outcomes: string[];
  traditionalTitle: string;
  traditionalSteps: string[];
  velvoixTitle: string;
  velvoixSteps: string[];
  velvoixSupporting: string;
  stepDetails: Array<{ title: string; description: string }>;
}

export interface SnapshotSectionContent extends SectionIntroContent {
  cards: Array<{ title: string; caption: string; image: string; tone: string }>;
}

export interface PilotContent extends SectionIntroContent {
  points: string[];
  primaryCta: string;
  secondaryCta: string;
}

export interface ContactContent extends SectionIntroContent {
  reasonsLabel: string;
  inquiryTypes: {
    pilot: string;
    partnership: string;
    general: string;
  };
  reasons: string[];
  directEmailNote: string;
  routeContent: {
    pilot: {
      helper: string;
      email: string;
      messagePlaceholder: string;
      submit: string;
    };
    partnership: {
      helper: string;
      email: string;
      messagePlaceholder: string;
      submit: string;
    };
    general: {
      helper: string;
      email: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  labels: {
    name: string;
    organisation: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  placeholders: {
    name: string;
    organisation: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    required: string;
    email: string;
    phone: string;
    generic: string;
  };
  success: string;
  error: string;
  directEmailLabel: string;
  directEmailValue: string;
  routeEmailLabel: string;
}

export interface FooterContent {
  brand: string;
  languageNl: string;
  languageEn: string;
  languageDe: string;
  languageEs: string;
  contact: string;
  privacy: string;
  cookies: string;
  terms: string;
  copyright: string;
}

export interface SiteContent {
  locale: Locale;
  nav: NavItem[];
  meta: MetaContent;
  hero: HeroContent;
  propositionBridge: PropositionBridgeContent;
  challenge: ChallengeContent;
  flow: FlowContent;
  howItWorks: HowItWorksContent;
  compareChains: CompareChainsContent;
  whyVelvoix: WhyVelvoixContent;
  technicalCore: TechnicalCoreContent;
  snapshots: SnapshotSectionContent;
  pilot: PilotContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const siteContent: Record<Locale, SiteContent> = {
  nl: {
    locale: 'nl',
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Hoe het werkt', href: '#how-it-works' },
      { label: 'Waarom Velvoix', href: '#why-velvoix' },
      { label: 'Pilot', href: '#pilot' },
      { label: 'Contact', href: '#contact' },
    ],
    meta: {
      title: 'Velvoix | Van signaal naar duidelijke zorgactie',
      description:
        'Velvoix helpt zorgorganisaties zorgsignalen te vertalen naar een duidelijke zorgactie, betere prioritering en herleidbare opvolging.',
      ogTitle: 'Velvoix | Duidelijke zorgactie uit signalen',
      ogDescription:
        'Velvoix helpt teams sneller te zien wat aandacht vraagt, wat eerst moet gebeuren en hoe opvolging herleidbaar blijft.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'Van signaal naar duidelijke zorgactie',
      subtitle:
        'Veel zorgsignalen komen binnen zonder genoeg context. Daardoor moeten medewerkers onder druk zelf bepalen wat urgent is en wat eerst moet gebeuren. Velvoix maakt van een signaal direct een duidelijke zorgactie met context, prioriteit en duidelijke opvolging.',
      supporting:
        'Minder twijfel, duidelijkere prioritering en betere reconstructie achteraf.',
      primaryCta: 'Verken een pilot',
      primaryHref: '#pilot',
      secondaryCta: 'Bekijk de producttour',
      secondaryHref: '#product-tour',
      metrics: [
        { value: 'Duidelijk', label: 'Van signaal naar begrijpelijke zorgactie' },
        { value: 'Herleidbaar', label: 'Opvolging en reconstructie blijven zichtbaar' },
        { value: 'Bruikbaar', label: 'Past in bestaande zorgomgevingen zonder extra werkruis' },
      ],
    },
    propositionBridge: {
      eyebrow: 'In een oogopslag',
      title: 'Van melding naar duidelijke opvolging',
      description:
        'Velvoix helpt teams sneller te zien wat aandacht vraagt, welke actie past en wie aan zet is.',
      stages: [
        {
          label: 'Wat er binnenkomt',
          title: 'Een melding is nog geen duidelijke actie',
          description:
            'Veel signalen komen binnen zonder genoeg context om direct goed te handelen.',
        },
        {
          label: 'Wat Velvoix toevoegt',
          title: 'Context, prioriteit en aanbevolen actie',
          description:
            'Velvoix maakt sneller zichtbaar wat urgent is en welke vervolgstap past.',
        },
        {
          label: 'Wat dat oplevert',
          title: 'Rustigere en duidelijkere opvolging',
          description:
            'Status, verantwoordelijkheid en vervolg blijven zichtbaar zonder extra interpretatieruis.',
        },
      ],
    },
    challenge: {
      eyebrow: 'Het probleem',
      title: 'Wanneer een melding nog geen duidelijke actie is',
      description:
        'Veel systemen laten wel zien dat er iets gebeurt, maar niet meteen wat aandacht vraagt, hoe urgent het is en welke actie nodig is. Daardoor moeten teams onder druk zelf blijven interpreteren.',
      proofPanels: {
        explainabilityLabel: 'Uitlegbaarheid',
        explainabilityTitle: 'Waarom',
        explainabilitySummary: 'Helpknop is herhaald binnen korte tijd.',
        explainabilitySupporting: 'Gebaseerd op triageregels en meldingscontext.',
        explainabilityItems: [
          { label: 'Primair signaal', value: 'Herhaalde helpoproep' },
          { label: 'Kernwaarneming', value: 'Opvolging is waarschijnlijk opnieuw nodig.' },
          { label: 'Triagebasis', value: 'Herhaling in korte tijd en context van deze melding.' },
        ],
        followUpLabel: 'Werkbare opvolging',
        followUpTitle: 'Aanbevolen aanpak',
        followUpSummary: 'Ga direct naar bewoner; controleer situatie.',
        followUpItems: [
          { label: 'Urgentie', value: 'Direct' },
          { label: 'SLA-status', value: 'SLA kritisch' },
          { label: 'Verantwoordelijke', value: 'Nog niet toegewezen' },
        ],
        followUpAction: 'Pak melding op',
      },
    },
    flow: {
      eyebrow: 'Wat Velvoix doet',
      title: 'Velvoix brengt structuur tussen signaal en opvolging',
      description:
        'Velvoix vertaalt signalen naar duidelijke opvolging met context, triage en status.',
      flow: ['Signaal', 'Context', 'Triage', 'Actie', 'Opvolging', 'Escalatie', 'Reconstructie'],
      supporting:
        'Zo wordt opvolging overzichtelijker, consistenter en beter herleidbaar.',
    },
    howItWorks: {
      eyebrow: 'Hoe het werkt',
      title: 'Van signaal naar duidelijke vervolgactie',
      description:
        'Velvoix combineert signalen met context en prioritering, zodat zorgmedewerkers sneller zien wat aandacht vraagt en wat de juiste vervolgstap is.',
      panelLabel: 'Van signaal naar actie',
      panelSupporting: 'Geen losse melding, maar een duidelijke vervolgstap met zicht op status, verantwoordelijkheid en reconstructie.',
      steps: [
        {
          title: 'Input',
          description: 'Knop, spraak of ander zorgsignaal.',
        },
        {
          title: 'Context',
          description: 'Historie, trigger en omgeving wegen mee.',
        },
        {
          title: 'Triage',
          description: 'Urgentie en uitleg worden gestructureerd.',
        },
        {
          title: 'Actie',
          description: 'Het signaal wordt een duidelijke actie voor opvolging.',
        },
        {
          title: 'Opvolging',
          description: 'Opvolging, eigenaarschap en status blijven overzichtelijk.',
        },
        {
          title: 'Evaluatie',
          description: 'Reconstructie en evaluatie blijven goed te volgen.',
        },
      ],
      stepNotes: [
        'Input komt gecontroleerd binnen',
        'Context maakt duiding rijker',
        'Triage maakt urgentie uitlegbaar',
        'Een duidelijke actie maakt opvolging werkbaar',
        'Opvolging houdt status overzichtelijk',
        'Evaluatie houdt reconstructie intact',
      ],
    },
    compareChains: {
      eyebrow: 'Ketenverschil',
      title: 'Niet van melding naar losse interpretatie, maar van signaal naar duidelijke opvolging',
      description:
        'Traditionele systemen stoppen vaak bij de melding. Velvoix voegt context en triage toe, zodat opvolging duidelijker en beter te sturen wordt.',
      compareLabel: 'Vergelijking',
      outcomes: ['Minder interpretatieruis', 'Betere prioritering', 'Betere reconstructie'],
      traditionalTitle: 'Traditionele keten',
      traditionalSteps: ['Signaal', 'Melding', 'Handmatige duiding'],
      velvoixTitle: 'Velvoix-keten',
      velvoixSteps: ['Signaal', 'Context', 'Triage', 'Actie', 'Opvolging', 'Escalatie', 'Reconstructie'],
      velvoixSupporting: 'Elke laag maakt opvolging, escalatie en reconstructie beter hanteerbaar.',
      stepDetails: [
        {
          title: 'Signaal',
          description:
            'Een knopoproep, spraakinput of ander zorgsignaal komt gecontroleerd binnen als startpunt voor opvolging.',
        },
        {
          title: 'Context',
          description: 'Meldingscontext, historie en situatie helpen om het signaal beter te begrijpen.',
        },
        {
          title: 'Triage',
          description: 'Urgentie en aanbevolen aanpak worden zichtbaar onderbouwd in zorgtaal.',
        },
        {
          title: 'Actie',
          description:
            'De uitkomst wordt een duidelijke actie met status, eigenaarschap en vervolg.',
        },
        {
          title: 'Opvolging',
          description: 'Opvolging blijft overzichtelijk met acties, statusverloop en duidelijke verantwoordelijkheid.',
        },
        {
          title: 'Escalatie',
          description: 'Als opvolging uitblijft of risico oploopt, blijft escalatie logisch en controleerbaar.',
        },
        {
          title: 'Reconstructie',
          description: 'Beslissingen, statusverloop en opvolging blijven herleidbaar voor evaluatie en audit.',
        },
      ],
    },
    whyVelvoix: {
      eyebrow: 'Waarom Velvoix anders is',
      title: 'Waarom Velvoix in de praktijk anders werkt',
      description:
        'Velvoix stopt niet bij de melding, maar helpt teams door tot duidelijke actie en herleidbare opvolging.',
      cards: [
        {
          title: 'Niet nog een losse melding',
          description:
            'Velvoix helpt verder dan alleen doorgeven dat er iets is gebeurd.',
        },
        {
          title: 'Duidelijke prioriteit',
          description:
            'Teams zien sneller wat aandacht vraagt en wat eerst moet gebeuren.',
        },
        {
          title: 'Opvolging blijft in één lijn zichtbaar',
          description:
            'Status, verantwoordelijkheid en vervolg blijven samen zichtbaar voor werkvloer en evaluatie.',
        },
      ],
    },
    technicalCore: {
      eyebrow: 'Betrouwbaar in de praktijk',
      title: 'Gebouwd voor zorgsituaties waar druk en afhankelijkheden samenkomen',
      description:
        'Velvoix blijft bruikbaar wanneer snelheid, duidelijkheid en herleidbaarheid nodig zijn. Ook als niet alles in de keten ideaal reageert, blijft zichtbaar wat er gebeurt en wat de volgende stap is.',
      capabilities: [
        'Duidelijke status',
        'Eerlijke fallback',
        'Herleidbare opvolging',
        'Begrensde toegang',
        'Beheersbaar gedrag',
        'Bruikbaar onder druk',
      ],
      rows: [
        {
          index: '01',
          title: 'Blijft bruikbaar bij deeluitval',
          description:
            'Opvolging blijft bruikbaar als delen van de keten tijdelijk beperkt werken, doordat kernstatus en vervolgstap zichtbaar blijven.',
          effect: 'Betrouwbare workflow wanneer niet alles ideaal reageert.',
        },
        {
          index: '02',
          title: 'Geen schijnzekerheid',
          description:
            'Beperkte context of beschikbaarheid blijft zichtbaar in plaats van verborgen achter schijnzekerheid.',
          effect: 'Eerlijke fallback in plaats van stille degradatie.',
        },
        {
          index: '03',
          title: 'Duidelijke status als vertrekpunt',
          description:
            'Status, uitleg en opvolging blijven samen leesbaar, zodat teams niet hoeven te vertrouwen op losse interpretaties.',
          effect: 'Eén duidelijk vertrekpunt voor opvolging.',
        },
        {
          index: '04',
          title: 'Begrensde toegang',
          description:
            'Toegang en acties blijven begrensd per organisatie, context en rol.',
          effect: 'Rustige controle over wie wat kan zien en doen.',
        },
        {
          index: '05',
          title: 'Reconstructeerbaar en auditbaar',
          description:
            'Opvolging, statusverloop en kritieke veranderingen blijven herleidbaar voor evaluatie en kwaliteitsverbetering.',
          effect: 'Herleidbare opvolging in plaats van losse momentopnames.',
        },
        {
          index: '06',
          title: 'Beheersbaar in de praktijk',
          description:
            'Gedrag, opvolging en terugkijken blijven beheersbaar, zodat teams gecontroleerd kunnen reageren zonder extra werkruis.',
          effect: 'Beheersing als onderdeel van de dagelijkse praktijk.',
        },
      ],
      closingLine:
        'Zo blijft Velvoix duidelijk en bruikbaar, ook wanneer de praktijk onder druk staat.',
    },
    snapshots: {
      eyebrow: 'Producttour',
      title: 'Korte productbeelden van duidelijke opvolging',
      description:
        'Gerichte voorbeelden van hoe Velvoix duidelijkheid, opvolging en beheersing zichtbaar maakt.',
      cards: [
        {
          title: 'Meldingenlijst',
          caption: 'Urgentie, bewoner en kernsignaal blijven direct scanbaar in een rustige werklijst.',
          image: '/products/proof-operations.png',
          tone: 'Operations',
        },
        {
          title: 'Meldingdetail',
          caption: 'Waarom en aanbevolen aanpak worden zichtbaar als uitlegbare onderbouwing.',
          image: '/products/proof-explainability.png',
          tone: 'Explainability',
        },
        {
          title: 'Koppelingen en beheer',
          caption: 'Operationele controle blijft rustig en bestuurbaar in de beheerlaag.',
          image: '/products/proof-control.png',
          tone: 'Control',
        },
        {
          title: 'Sturing en profielen',
          caption: 'Sturing blijft beheersbaar via profielkaarten en triagebeheer.',
          image: '/products/proof-governance.png',
          tone: 'Governance',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Verken of Velvoix past bij uw zorgpraktijk',
      description:
        'Een eerste verkenning laat zien of Velvoix helpt bij duidelijkere opvolging, minder interpretatieruis en een goede aansluiting op uw processen.',
      points: [
        'Verpleeghuizen en langdurige zorg',
        'Teams die meer duidelijkheid in opvolging willen',
        'Partners die aansluiting op processen en integraties willen verkennen',
      ],
      primaryCta: 'Plan een pilotgesprek',
      secondaryCta: 'Bespreek samenwerking',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start een verkenning die past bij uw situatie',
      description:
        'Kies wat het beste past: een pilot, samenwerking of een zakelijke vraag.',
      reasonsLabel: 'Onderwerpen',
      inquiryTypes: {
        pilot: 'Pilot',
        partnership: 'Samenwerking',
        general: 'Zakelijke vraag',
      },
      reasons: [
        'Pilot voor zorgorganisaties',
        'Samenwerking of uitrol voor partners',
        'Zakelijke vraag over platform of planning',
      ],
      directEmailNote: 'Voor pilots, samenwerking en zakelijke vragen.',
      routeContent: {
        pilot: {
          helper: 'Kies dit onderwerp om te beoordelen of Velvoix in uw organisatie helpt bij duidelijkere opvolging, prioritering en een goede aansluiting op de praktijk.',
          email: publicContactEmails.pilot,
          messagePlaceholder: 'Beschrijf kort uw organisatie, zorgcontext en wat u in een pilotverkenning wilt toetsen.',
          submit: 'Verstuur pilotverkenning',
        },
        partnership: {
          helper: 'Kies dit onderwerp voor vragen over samenwerking, uitrol, integratie of strategische afstemming.',
          email: publicContactEmails.partners,
          messagePlaceholder: 'Beschrijf kort uw organisatie, rol en welke vorm van samenwerking of uitrol u wilt verkennen.',
          submit: 'Verstuur samenwerkingsverkenning',
        },
        general: {
          helper: 'Kies dit onderwerp voor een zakelijke vraag over het platform, de inzet in de praktijk of de volgende stap.',
          email: publicContactEmails.general,
          messagePlaceholder: 'Beschrijf kort uw vraag en welke context of planning daarbij relevant is.',
          submit: 'Verstuur zakelijke vraag',
        },
      },
      labels: {
        name: 'Naam',
        organisation: 'Organisatie',
        email: 'E-mailadres',
        phone: 'Telefoonnummer (optioneel)',
        message: 'Bericht',
        submit: 'Verstuur aanvraag',
      },
      placeholders: {
        name: 'Voornaam Achternaam',
        organisation: 'Naam van uw organisatie',
        email: 'naam@organisatie.nl',
        phone: '+31 6 12345678',
        message: 'Vertel kort waar u meer over wilt weten of wat u wilt verkennen.',
      },
      errors: {
        required: 'Dit veld is verplicht.',
        email: 'Vul een geldig e-mailadres in.',
        phone: 'Vul een geldig telefoonnummer in of laat dit veld leeg.',
        generic: 'Er ging iets mis bij het versturen van uw bericht. Probeer het opnieuw of neem rechtstreeks contact op.',
      },
      success: 'Bedankt. We hebben uw bericht ontvangen en nemen zo spoedig mogelijk contact met u op.',
      error:
        'Er ging iets mis bij het versturen van uw bericht. Probeer het opnieuw of neem rechtstreeks contact op.',
      directEmailLabel: 'Direct contact',
      directEmailValue: publicContactEmails.general,
      routeEmailLabel: 'E-mailadres voor dit onderwerp',
    },
    footer: {
      brand: 'Velvoix',
      languageNl: 'Nederlands',
      languageEn: 'English',
      languageDe: 'Deutsch',
      languageEs: 'Espa\u00F1ol',
      contact: 'Contact',
      privacy: 'Privacyverklaring',
      cookies: 'Cookiebeleid',
      terms: 'Algemene voorwaarden',
      copyright: '\u00A9 2026 Velvoix\u00AE - Alle rechten voorbehouden.',
    },
  },
  en: {
    locale: 'en',
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Why Velvoix', href: '#why-velvoix' },
      { label: 'Pilot', href: '#pilot' },
      { label: 'Contact', href: '#contact' },
    ],
    meta: {
      title: 'Velvoix | From signal to clear care action',
      description:
        'Velvoix helps healthcare organisations turn care signals into clear action, better prioritisation and traceable follow-up.',
      ogTitle: 'Velvoix | Clear care action from signals',
      ogDescription:
        'Velvoix helps teams see faster what needs attention, what should happen first and how follow-up stays traceable.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'From signal to clear care action',
      subtitle:
        'Many care signals arrive without enough context. That leaves staff to decide under pressure what is urgent and what should happen first. Velvoix turns a signal directly into a clear care action with context, priority and traceable follow-up.',
      supporting:
        'Less doubt, clearer prioritisation and better reconstruction afterwards.',
      primaryCta: 'Explore a pilot',
      primaryHref: '#pilot',
      secondaryCta: 'View the product tour',
      secondaryHref: '#product-tour',
      metrics: [
        { value: 'Clear', label: 'From signal to understandable care action' },
        { value: 'Traceable', label: 'Follow-up and reconstruction stay visible' },
        { value: 'Practical', label: 'Fits existing care environments without adding operational noise' },
      ],
    },
    propositionBridge: {
      eyebrow: 'At a glance',
      title: 'From alert to clear follow-up',
      description:
        'Velvoix helps teams see faster what needs attention, which action fits and who should take it on.',
      stages: [
        {
          label: 'What comes in',
          title: 'An alert is not yet a clear action',
          description:
            'Many signals arrive without enough context to act well straight away.',
        },
        {
          label: 'What Velvoix adds',
          title: 'Context, priority and recommended action',
          description:
            'Velvoix helps teams see sooner what is urgent and what the right next step is.',
        },
        {
          label: 'What that delivers',
          title: 'Calmer and clearer follow-up',
          description:
            'Status, responsibility and next steps remain visible without adding more interpretation burden.',
        },
      ],
    },
    challenge: {
      eyebrow: 'The challenge',
      title: 'When an alert is not yet a clear action',
      description:
        'Many systems show that something is happening, but not immediately what needs attention, how urgent it is and which action is required. That leaves teams interpreting under pressure.',
      proofPanels: {
        explainabilityLabel: 'Explainability',
        explainabilityTitle: 'Why',
        explainabilitySummary: 'Help button was triggered repeatedly within a short interval.',
        explainabilitySupporting: 'Based on triage rules and alert context.',
        explainabilityItems: [
          { label: 'Primary signal', value: 'Repeated help request' },
          { label: 'Core observation', value: 'Further follow-up will likely be needed.' },
          { label: 'Triage basis', value: 'Repeat trigger in a short interval and the context of this alert.' },
        ],
        followUpLabel: 'Practical follow-up',
        followUpTitle: 'Recommended action',
        followUpSummary: 'Go directly to the resident; check the situation.',
        followUpItems: [
          { label: 'Urgency', value: 'Direct' },
          { label: 'SLA status', value: 'SLA critical' },
          { label: 'Owner', value: 'Not yet assigned' },
        ],
        followUpAction: 'Take ownership',
      },
    },
    flow: {
      eyebrow: 'What Velvoix does',
      title: 'Velvoix adds structure between signal and follow-up',
      description:
        'Velvoix turns signals into a workable operational outcome with context, triage and follow-up.',
      flow: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
      supporting:
        'That makes follow-up more structured, more consistent and easier to reconstruct.',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'From input to workable follow-up',
      description:
        'Velvoix does more than receive signals. It adds context, triage and a clear operational flow, so care teams understand faster what needs attention and what should happen next.',
      panelLabel: 'Operational flow',
      panelSupporting: 'From input to context, triage and workable follow-up.',
      steps: [
        {
          title: 'Input',
          description: 'Button, voice or other care signal.',
        },
        {
          title: 'Context',
          description: 'History, trigger and setting are weighed.',
        },
        {
          title: 'Triage',
          description: 'Urgency and explanation are structured.',
        },
        {
          title: 'Event',
          description: 'A workable operational unit is created.',
        },
        {
          title: 'Workflow',
          description: 'Follow-up, ownership and status become manageable.',
        },
        {
          title: 'Audit',
          description: 'Reconstruction and evaluation remain traceable.',
        },
      ],
      stepNotes: [
        'Input enters in a controlled way',
        'Context enriches interpretation',
        'Triage makes urgency explainable',
        'The event gives follow-up a clear structure',
        'Workflow keeps status manageable',
        'Audit keeps reconstruction intact',
      ],
    },
    compareChains: {
      eyebrow: 'Chain difference',
      title: 'Not from alert to interpretation, but from signal to structured workflow',
      description:
        'Traditional systems often stop at the alert. Velvoix adds context and prioritisation so follow-up becomes clearer and more manageable.',
      compareLabel: 'Comparison',
      outcomes: ['Less interpretation burden', 'Better prioritisation', 'Better reconstruction'],
      traditionalTitle: 'Traditional chain',
      traditionalSteps: ['Signal', 'Alert', 'Manual interpretation'],
      velvoixTitle: 'Velvoix chain',
      velvoixSteps: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
      velvoixSupporting: 'Each layer makes follow-up, escalation and audit more manageable.',
      stepDetails: [
        {
          title: 'Signal',
          description:
            'A button call, voice input or other care-related signal enters in a controlled way as the starting point for follow-up.',
        },
        {
          title: 'Context',
          description: 'Event context, history and situation help teams understand the signal more clearly.',
        },
        {
          title: 'Triage',
          description: 'Urgency and recommended action become visible with explainable care wording.',
        },
        {
          title: 'Event',
          description:
            'The outcome becomes one workable operational unit for status, ownership and next steps.',
        },
        {
          title: 'Workflow',
          description: 'Follow-up becomes manageable through actions, status flow and clear responsibility.',
        },
        {
          title: 'Escalation',
          description: 'If follow-up stalls or risk rises, escalation remains logical and controlled.',
        },
        {
          title: 'Reconstruction',
          description: 'Decisions, status flow and follow-up remain traceable for evaluation and audit.',
        },
      ],
    },
    whyVelvoix: {
      eyebrow: 'Why Velvoix is different',
      title: 'Why Velvoix works differently in practice',
      description:
        'Velvoix does not stop at the alert, but helps teams move toward clear action and traceable follow-up.',
      cards: [
        {
          title: 'Not just another alert',
          description:
            'Velvoix goes beyond simply flagging that something happened.',
        },
        {
          title: 'Clearer priority',
          description:
            'Teams see faster what needs attention and what should happen first.',
        },
        {
          title: 'Follow-up stays visible in one place',
          description:
            'Status, responsibility and next steps stay visible together for the care team and for review.',
        },
      ],
    },
    technicalCore: {
      eyebrow: 'Reliable in practice',
      title: 'Built for care situations where pressure and dependencies meet',
      description:
        'Velvoix remains useful when speed, clarity and traceability matter. Even when not every part of the chain responds ideally, it stays visible what is happening and what the next step should be.',
      capabilities: [
        'Clear status',
        'Honest fallback',
        'Traceable follow-up',
        'Bounded access',
        'Manageable behaviour',
        'Usable under pressure',
      ],
      rows: [
        {
          index: '01',
          title: 'Remains usable during partial disruption',
          description:
            'Follow-up remains usable when parts of the chain are temporarily limited because core status and the next step stay visible.',
          effect: 'Reliable workflow when not every part responds ideally.',
        },
        {
          index: '02',
          title: 'No false certainty',
          description:
            'Limited context or availability stays visible instead of disappearing behind apparent certainty.',
          effect: 'Honest fallback instead of silent degradation.',
        },
        {
          index: '03',
          title: 'Clear status as the starting point',
          description:
            'Status, explanation and follow-up remain readable together, so teams do not have to rely on scattered interpretations.',
          effect: 'One clear starting point for action.',
        },
        {
          index: '04',
          title: 'Bounded access',
          description:
            'Access and actions remain bounded by organisation, context and role.',
          effect: 'Calm control over who can see and do what.',
        },
        {
          index: '05',
          title: 'Reconstructable and auditable',
          description:
            'Follow-up, status changes and critical decisions remain traceable for evaluation and quality improvement.',
          effect: 'Traceable follow-up instead of isolated snapshots.',
        },
        {
          index: '06',
          title: 'Manageable in practice',
          description:
            'Behaviour, follow-up and review remain manageable so teams can respond in a controlled way without adding extra noise.',
          effect: 'Control as part of day-to-day practice.',
        },
      ],
      closingLine:
        'That keeps Velvoix clear and usable, even when care practice is under pressure.',
    },
    snapshots: {
      eyebrow: 'Product tour',
      title: 'Short product views of clear follow-up',
      description:
        'Focused examples show how Velvoix brings clarity, follow-up and control together.',
      cards: [
        {
          title: 'Alert list',
          caption: 'Urgency, resident and the core signal remain easy to scan in a calm worklist.',
          image: '/products/proof-operations.png',
          tone: 'Operations',
        },
        {
          title: 'Alert detail',
          caption: 'Why something matters and the recommended action become visible in one understandable view.',
          image: '/products/proof-explainability.png',
          tone: 'Explainability',
        },
        {
          title: 'Linking and control',
          caption: 'Operational control stays calm and manageable in the management layer.',
          image: '/products/proof-control.png',
          tone: 'Control',
        },
        {
          title: 'Governance and profiles',
          caption: 'Governance remains controlled through profiles and prioritisation management.',
          image: '/products/proof-governance.png',
          tone: 'Governance',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Explore whether Velvoix fits your care practice',
      description:
        'An initial exploration shows whether Velvoix helps create clearer follow-up, less interpretation burden and a better fit with your processes.',
      points: [
        'Nursing homes and long-term care',
        'Teams looking for clearer follow-up',
        'Partners exploring fit with existing processes and integrations',
      ],
      primaryCta: 'Plan a pilot conversation',
      secondaryCta: 'Discuss collaboration',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start an exploration that fits your situation',
      description:
        'Choose the route that fits: pilot exploration, collaboration or a business question.',
      reasonsLabel: 'Routes',
      inquiryTypes: {
        pilot: 'Pilot exploration',
        partnership: 'Collaboration',
        general: 'Business question',
      },
      reasons: [
        'Pilot exploration for healthcare organisations',
        'Collaboration for partners and rollout',
        'Business question about the platform or timing',
      ],
      directEmailNote: 'For pilots, collaborations and business questions.',
      routeContent: {
        pilot: {
          helper: 'Choose this route to assess whether Velvoix helps create clearer follow-up, better prioritisation and practical fit in your setting.',
          email: publicContactEmails.pilot,
          messagePlaceholder: 'Briefly describe your organisation, care context and what you want to assess in a pilot exploration.',
          submit: 'Send pilot enquiry',
        },
        partnership: {
          helper: 'Choose this route for partner fit, rollout, integration or strategic collaboration.',
          email: publicContactEmails.partners,
          messagePlaceholder: 'Briefly describe your organisation, role and which partnership or rollout route you want to explore.',
          submit: 'Send collaboration enquiry',
        },
        general: {
          helper: 'Choose this route for a business question about the platform, deployment context or next steps.',
          email: publicContactEmails.general,
          messagePlaceholder: 'Briefly describe your question and any context or timing that matters.',
          submit: 'Send business question',
        },
      },
      labels: {
        name: 'Name',
        organisation: 'Organisation',
        email: 'Email',
        phone: 'Phone number (optional)',
        message: 'Message',
        submit: 'Send request',
      },
      placeholders: {
        name: 'First name Last name',
        organisation: 'Your organisation',
        email: 'name@organisation.com',
        phone: '+31 6 12345678',
        message: 'Briefly describe what you would like to explore or learn more about.',
      },
      errors: {
        required: 'This field is required.',
        email: 'Enter a valid email address.',
        phone: 'Enter a valid phone number or leave this field empty.',
        generic: 'Something went wrong while sending your message. Please try again or contact us directly.',
      },
      success: 'Thank you. We have received your message and will get back to you as soon as possible.',
      error:
        'Something went wrong while sending your message. Please try again or contact us directly.',
      directEmailLabel: 'Direct contact',
      directEmailValue: publicContactEmails.general,
      routeEmailLabel: 'Email for this route',
    },
    footer: {
      brand: 'Velvoix',
      languageNl: 'Nederlands',
      languageEn: 'English',
      languageDe: 'Deutsch',
      languageEs: 'Espa\u00F1ol',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms & Conditions',
      copyright: '\u00A9 2026 Velvoix\u00AE - All rights reserved.',
    },
  },
  de: deContent,
  es: esContent,
};


