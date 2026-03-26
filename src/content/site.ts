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
  secondaryCta: string;
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
        'Velvoix helpt zorgorganisaties zorgsignalen om te zetten in duidelijke, uitlegbare en herleidbare opvolging.',
      ogTitle: 'Velvoix | Duidelijke zorgactie uit signalen',
      ogDescription:
        'Velvoix vertaalt zorgsignalen naar duidelijke opvolging met context, triage en herleidbare workflow.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'Van signaal naar duidelijke zorgactie',
      subtitle:
        'Velvoix helpt zorgorganisaties knopoproepen, spraakinput en andere zorgsignalen om te zetten in duidelijke, uitlegbare opvolging.',
      supporting:
        'Voor teams die snelle duiding en herleidbare opvolging nodig hebben.',
      primaryCta: 'Verken Velvoix',
      secondaryCta: 'Bekijk hoe het werkt',
      metrics: [
        { value: 'Uitlegbaar', label: 'Van signaal naar begrijpelijke opvolging' },
        { value: 'Auditbaar', label: 'Statusverloop en reconstructie blijven herleidbaar' },
        { value: 'Beheersbaar', label: 'Past in bestaande zorgomgevingen zonder losse notificatielaag' },
      ],
    },
    propositionBridge: {
      eyebrow: 'In een oogopslag',
      title: 'Van binnenkomend signaal naar werkbare opvolging',
      description:
        'Van binnenkomend zorgsignaal naar een duidelijke volgende stap.',
      stages: [
        {
          label: 'Wat binnenkomt',
          title: 'Signalen uit de zorgpraktijk',
          description:
            'Knopoproepen, spraakinput en andere signalen komen gecontroleerd binnen.',
        },
        {
          label: 'Wat Velvoix toevoegt',
          title: 'Duiding rond het signaal',
          description:
            'Velvoix voegt context, triage en eigenaarschap toe.',
        },
        {
          label: 'Wat dat oplevert',
          title: 'Werkbare opvolging',
          description:
            'Dat geeft duidelijkere actie, minder interpretatielast en betere reconstructie.',
        },
      ],
    },
    challenge: {
      eyebrow: 'Het probleem',
      title: 'Wanneer een signaal nog geen duidelijke zorgactie is',
      description:
        'Veel systemen registreren wel dat er iets gebeurt, maar helpen onvoldoende bij de vraag wat aandacht vraagt, hoe urgent het is en welke opvolging past.',
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
        followUpAction: 'Pak op',
      },
    },
    flow: {
      eyebrow: 'Wat Velvoix doet',
      title: 'Velvoix brengt structuur tussen signaal en opvolging',
      description:
        'Velvoix vertaalt signalen naar een werkbare operationele uitkomst met context, triage en opvolging.',
      flow: ['Signaal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalatie', 'Reconstructie'],
      supporting:
        'Zo wordt opvolging overzichtelijker, consistenter en beter herleidbaar.',
    },
    howItWorks: {
      eyebrow: 'Hoe het werkt',
      title: 'Van input naar werkbare opvolging',
      description:
        'Velvoix brengt signalen niet alleen binnen, maar verrijkt ze met context, triage en opvolgbaar eventgedrag, zodat zorgmedewerkers sneller begrijpen wat aandacht vraagt en wat logisch vervolg is.',
      panelLabel: 'Operationele flow',
      panelSupporting: 'Velvoix structureert input, duiding, eventvorming en opvolging als een rustige keten.',
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
          title: 'Event',
          description: 'Werkbare operationele eenheid ontstaat.',
        },
        {
          title: 'Workflow',
          description: 'Opvolging, eigenaarschap en status worden bestuurbaar.',
        },
        {
          title: 'Audit',
          description: 'Reconstructie en evaluatie blijven herleidbaar.',
        },
      ],
      stepNotes: [
        'Input komt gecontroleerd binnen',
        'Context maakt duiding rijker',
        'Triage maakt urgentie uitlegbaar',
        'Eventvorming maakt opvolging werkbaar',
        'Workflow maakt status bestuurbaar',
        'Audit houdt reconstructie intact',
      ],
    },
    compareChains: {
      eyebrow: 'Ketenverschil',
      title: 'Niet van melding naar interpretatie, maar van signaal naar bestuurbare workflow',
      description:
        'Traditionele systemen stoppen vaak bij de melding. Velvoix voegt context, triage en eventvorming toe zodat opvolging bestuurbaar wordt.',
      compareLabel: 'Vergelijking',
      outcomes: ['Minder interpretatielast', 'Betere prioritering', 'Betere reconstructie'],
      traditionalTitle: 'Traditionele keten',
      traditionalSteps: ['Signaal', 'Melding', 'Handmatige interpretatie'],
      velvoixTitle: 'Velvoix-keten',
      velvoixSteps: ['Signaal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalatie', 'Reconstructie'],
      velvoixSupporting: 'Elke laag maakt opvolging, escalatie en audit beter bestuurbaar.',
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
          title: 'Event',
          description:
            'De uitkomst wordt een werkbare operationele eenheid voor status, eigenaarschap en vervolg.',
        },
        {
          title: 'Workflow',
          description: 'Opvolging wordt bestuurbaar met acties, statusverloop en duidelijke verantwoordelijkheid.',
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
      title: 'Systeemverschillen die operationeel voelbaar zijn',
      description:
        'Het operationele verschil zit in productkeuzes rond eventvorming, uitlegbare triage en een operationele waarheid.',
      cards: [
        {
          title: 'Geen notificatielaag',
          description:
            'Velvoix laat signalen niet als losse meldingen rondzingen, maar zet ze om naar werkbare events met context, eigenaarschap en opvolging.',
        },
        {
          title: 'Uitlegbare triage',
          description:
            'Niet black-box scoren, maar een duidelijke combinatie van urgentie, context en aanbevolen aanpak in zorgtaal.',
        },
        {
          title: 'Event truth voor workflow en audit',
          description:
            'Een operationele waarheid voor status, eigenaarschap, escalatie en reconstructie.',
        },
      ],
    },
    technicalCore: {
      eyebrow: 'Technische kern',
      title: 'Gebouwd voor betrouwbare opvolging onder druk',
      description:
        'De kracht van Velvoix zit in een productkern die eventwaarheid, uitlegbare triage, opvolging en beheer bijeenhoudt, ook onder druk.',
      capabilities: [
        'Backend-truth',
        'Eerlijke fallback',
        'Auditbare opvolging',
        'Rolzuivere toegang',
        'Tenantgescheiden',
        'Ketenobservability',
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
          title: 'Backend-truth als kern',
          description:
            'Status, uitleg en opvolging worden in de kern bewaakt, niet verspreid over schermlogica of afgeleide integraties.',
          effect: 'Backend-truth boven losse scherm- of integratielogica.',
        },
        {
          index: '04',
          title: 'Rol- en tenantzuiver',
          description:
            'Toegang en acties blijven begrensd per organisatie, context en rol.',
          effect: 'Harde grenzen tussen organisaties, rollen en context.',
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
          title: 'Operationeel beheersbaar',
          description:
            'Observability, eigenaarschap en governance zitten in het productgedrag, zodat teams gecontroleerd kunnen reageren.',
          effect: 'Beheersing als productdiscipline, niet als losse IT-bijlage.',
        },
      ],
      closingLine:
        'Zo blijft Velvoix uitlegbaar en bestuurbaar, ook wanneer de praktijk onder druk staat.',
    },
    snapshots: {
      eyebrow: 'Product snapshots',
      title: 'Compacte bewijsfragmenten uit het product',
      description:
        'Geen volledige schermen, maar gerichte uitsneden die laten zien hoe Velvoix werkvoorraad, uitlegbaarheid, beheer en governance zichtbaar maakt.',
      cards: [
        {
          title: 'Meldingenlijst',
          caption: 'Urgentie, bewoner en kernsignaal blijven direct scanbaar in een rustige worklist.',
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
          title: 'Governance en profielen',
          caption: 'Governance blijft productmatig beheerst via profielkaarten en triagebeheer.',
          image: '/products/proof-governance.png',
          tone: 'Governance',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Verken of een pilot past',
      description:
        'Een pilot maakt zichtbaar hoe Velvoix past in uw zorgpraktijk, teamafspraken en operationele processen.',
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
      title: 'Start een gerichte verkenning',
      description:
        'Kies de route die past: pilotverkenning, samenwerkingsroute of zakelijke vraag.',
      reasonsLabel: 'Routes',
      inquiryTypes: {
        pilot: 'Pilotverkenning',
        partnership: 'Samenwerkingsroute',
        general: 'Zakelijke vraag',
      },
      reasons: [
        'Pilotverkenning voor zorgorganisaties',
        'Samenwerkingsroute voor partners en uitrol',
        'Zakelijke vraag over platform of planning',
      ],
      directEmailNote: 'Voor pilots, samenwerking en zakelijke vragen.',
      routeContent: {
        pilot: {
          helper: 'Kies deze route om te toetsen of Velvoix pilotwaardig en operationeel relevant is in uw zorgsetting.',
          email: publicContactEmails.pilot,
          messagePlaceholder: 'Beschrijf kort uw organisatie, zorgcontext en wat u in een pilotverkenning wilt toetsen.',
          submit: 'Verstuur pilotverkenning',
        },
        partnership: {
          helper: 'Kies deze route voor partnerfit, uitrol, integratie of strategische samenwerking.',
          email: publicContactEmails.partners,
          messagePlaceholder: 'Beschrijf kort uw organisatie, rol en welke samenwerkings- of uitrolroute u wilt verkennen.',
          submit: 'Verstuur samenwerkingsverkenning',
        },
        general: {
          helper: 'Kies deze route voor een zakelijke vraag over platform, inzetcontext of vervolgstappen.',
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
      directEmailLabel: 'Rechtstreeks contact',
      directEmailValue: publicContactEmails.general,
      routeEmailLabel: 'Route e-mailadres',
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
        'Velvoix helps healthcare organisations turn care signals into clear, explainable and traceable follow-up.',
      ogTitle: 'Velvoix | Clear care action from signals',
      ogDescription:
        'Velvoix translates care signals into clear follow-up with context, triage and traceable workflow.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'From signal to clear care action',
      subtitle:
        'Velvoix helps healthcare organisations turn button calls, voice input and other care signals into clear, explainable follow-up.',
      supporting:
        'For teams that need fast interpretation and traceable follow-up.',
      primaryCta: 'Explore Velvoix',
      secondaryCta: 'See how it works',
      metrics: [
        { value: 'Explainable', label: 'From signal to understandable follow-up' },
        { value: 'Auditable', label: 'Event flow and reconstruction remain traceable' },
        { value: 'Controlled', label: 'Fits care environments without becoming another notification layer' },
      ],
    },
    propositionBridge: {
      eyebrow: 'At a glance',
      title: 'From incoming signal to workable follow-up',
      description:
        'From incoming care signal to a clear next step.',
      stages: [
        {
          label: 'What comes in',
          title: 'Signals from care operations',
          description:
            'Button calls, voice input and other care signals enter in a controlled way.',
        },
        {
          label: 'What Velvoix adds',
          title: 'Operational meaning around the signal',
          description:
            'Velvoix adds context, triage and ownership.',
        },
        {
          label: 'What that delivers',
          title: 'Workable follow-up',
          description:
            'That leads to clearer action, less interpretation burden and better reconstruction.',
        },
      ],
    },
    challenge: {
      eyebrow: 'The challenge',
      title: 'When a signal is not yet a clear care action',
      description:
        'Many systems register that something happened, but do not sufficiently support what needs attention, how urgent it is and which follow-up fits.',
      proofPanels: {
        explainabilityLabel: 'Explainability',
        explainabilityTitle: 'Why',
        explainabilitySummary: 'Help button was triggered repeatedly within a short interval.',
        explainabilitySupporting: 'Based on triage rules and event context.',
        explainabilityItems: [
          { label: 'Primary signal', value: 'Repeated help request' },
          { label: 'Core observation', value: 'Follow-up is likely needed again.' },
          { label: 'Triage basis', value: 'Repeat trigger in a short interval and contextual signal data.' },
        ],
        followUpLabel: 'Operational follow-up',
        followUpTitle: 'Recommended action',
        followUpSummary: 'Go directly to the resident; check the situation.',
        followUpItems: [
          { label: 'Urgency', value: 'Direct' },
          { label: 'SLA status', value: 'SLA critical' },
          { label: 'Owner', value: 'Not yet assigned' },
        ],
        followUpAction: 'Claim event',
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
        'Velvoix does not only ingest signals, but enriches them with context, triage and actionable event flow, so care teams understand faster what needs attention and what the next step should be.',
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
        'Event shaping makes follow-up workable',
        'Workflow keeps status manageable',
        'Audit keeps reconstruction intact',
      ],
    },
    compareChains: {
      eyebrow: 'Chain difference',
      title: 'Not from alert to interpretation, but from signal to structured workflow',
      description:
        'Traditional systems often stop at the alert. Velvoix adds context, triage and event formation so follow-up becomes manageable.',
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
      title: 'System differences that matter operationally',
      description:
        'The operational difference sits in product choices around event formation, explainable triage and one operational truth.',
      cards: [
        {
          title: 'Not a notification layer',
          description:
            'Velvoix does not let signals circulate as isolated alerts, but turns them into workable events with context, ownership and follow-up.',
        },
        {
          title: 'Explainable triage',
          description:
            'Not black-box scoring, but a clear combination of urgency, context and recommended action in care language.',
        },
        {
          title: 'Event truth for workflow and audit',
          description:
            'One operational truth for status, ownership, escalation and reconstruction.',
        },
      ],
    },
    technicalCore: {
      eyebrow: 'Technical core',
      title: 'Built for reliable follow-up under pressure',
      description:
        'The strength of Velvoix sits in a product core that keeps event truth, explainable triage, follow-up and governance together, even under pressure.',
      capabilities: [
        'Backend truth',
        'Honest fallback',
        'Auditable follow-up',
        'Role-bound access',
        'Tenant separation',
        'Chain observability',
      ],
      rows: [
        {
          index: '01',
          title: 'Remains usable under partial failure',
          description:
            'Follow-up remains usable when parts of the chain are temporarily limited because core status and next action stay visible.',
          effect: 'Reliable workflow when not every part of the chain reacts perfectly.',
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
          title: 'Backend truth at the core',
          description:
            'Status, explanation and follow-up are held in the core, not spread across screen logic or derived integrations.',
          effect: 'Backend-owned truth over fragmented UI or integration logic.',
        },
        {
          index: '04',
          title: 'Role- and tenant-bound',
          description:
            'Access and actions remain bounded by organisation, context and role.',
          effect: 'Hard boundaries between organisations, roles and contexts.',
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
          title: 'Operationally manageable',
          description:
            'Observability, ownership and governance are part of product behaviour so teams can respond in a controlled way.',
          effect: 'Operational control as product discipline, not an IT afterthought.',
        },
      ],
      closingLine:
        'That keeps Velvoix explainable and governable, even when operations are under pressure.',
    },
    snapshots: {
      eyebrow: 'Product snapshots',
      title: 'Compact proof fragments from the product',
      description:
        'Not full screens, but focused crops that show how Velvoix makes operations, explainability, control and governance visible.',
      cards: [
        {
          title: 'Events worklist',
          caption: 'Urgency, resident and core signal remain directly scannable in a calm worklist.',
          image: '/products/proof-operations.png',
          tone: 'Operations',
        },
        {
          title: 'Event detail',
          caption: 'Why and recommended action become visible as explainable operational reasoning.',
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
          caption: 'Governance remains controlled through profile cards and triage management.',
          image: '/products/proof-governance.png',
          tone: 'Governance',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Explore whether a pilot fits',
      description:
        'A pilot helps make clear how Velvoix fits your care practice, team routines and operational processes.',
      points: [
        'Nursing homes and long-term care',
        'Teams looking for clearer follow-up',
        'Partners exploring fit with existing processes and integrations',
      ],
      primaryCta: 'Schedule a pilot conversation',
      secondaryCta: 'Discuss partnership',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start a focused exploration',
      description:
        'Choose the route that fits: pilot exploration, partnership route or business question.',
      reasonsLabel: 'Routes',
      inquiryTypes: {
        pilot: 'Pilot exploration',
        partnership: 'Partnership route',
        general: 'Business question',
      },
      reasons: [
        'Pilot exploration for healthcare organisations',
        'Partnership route for partners and rollout',
        'Business question about platform or timing',
      ],
      directEmailNote: 'For pilots, partnerships and business questions.',
      routeContent: {
        pilot: {
          helper: 'Choose this route to assess whether Velvoix is pilot-ready and operationally relevant in your care setting.',
          email: publicContactEmails.pilot,
          messagePlaceholder: 'Briefly describe your organisation, care context and what you want to assess in a pilot exploration.',
          submit: 'Send pilot exploration',
        },
        partnership: {
          helper: 'Choose this route for partner fit, rollout, integration or strategic collaboration.',
          email: publicContactEmails.partners,
          messagePlaceholder: 'Briefly describe your organisation, role and which partnership or rollout route you want to explore.',
          submit: 'Send partnership exploration',
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
      routeEmailLabel: 'Route email',
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


