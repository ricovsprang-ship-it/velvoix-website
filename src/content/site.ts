import { deContent, esContent } from './site-extra';

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
      messagePlaceholder: string;
      submit: string;
    };
    partnership: {
      helper: string;
      messagePlaceholder: string;
      submit: string;
    };
    general: {
      helper: string;
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
        'Velvoix helpt zorgorganisaties om knopoproepen, spraakinput en andere zorgsignalen om te zetten in uitlegbare, geprioriteerde en auditbare zorgworkflow.',
      ogTitle: 'Velvoix | Duidelijke zorgactie uit signalen',
      ogDescription:
        'Een informatieve introductie tot Velvoix: van signaal naar uitlegbare, geprioriteerde en auditbare zorgworkflow.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'Van signaal naar duidelijke zorgactie',
      subtitle:
        'Velvoix helpt zorgorganisaties om knopoproepen, spraakinput en andere zorgsignalen om te zetten in uitlegbare, geprioriteerde en auditbare zorgworkflow.',
      supporting:
        'Gebouwd voor zorgomgevingen waar duidelijkheid, opvolging en reconstructie tellen.',
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
        'Knopoproepen, spraakinput en andere zorgsignalen krijgen via Velvoix context, uitleg en een werkbare volgende stap.',
      stages: [
        {
          label: 'Wat binnenkomt',
          title: 'Signalen uit de zorgpraktijk',
          description:
            'Knopoproepen, spraakinput en andere zorgsignalen komen gecontroleerd binnen als het startpunt voor opvolging.',
        },
        {
          label: 'Wat Velvoix toevoegt',
          title: 'Duiding rond het signaal',
          description:
            'Velvoix voegt context, triage, uitleg, eigenaarschap en eventvorming toe zodat een team sneller begrijpt wat aandacht vraagt.',
        },
        {
          label: 'Wat dat oplevert',
          title: 'Werkbare opvolging',
          description:
            'Dat geeft duidelijkere vervolgacties, minder interpretatielast en betere reconstructie van wat er is gebeurd.',
        },
      ],
    },
    challenge: {
      eyebrow: 'Het probleem',
      title: 'Wanneer een signaal nog geen duidelijke zorgactie is',
      description:
        'Veel systemen kunnen wel registreren dat er iets gebeurt, maar helpen onvoldoende bij de volgende stap: wat is er waarschijnlijk aan de hand, hoe urgent is het, welke opvolging past daarbij en hoe blijft dat achteraf goed te reconstrueren?',
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
        'Het verschil zit in de keten: waar traditionele systemen stoppen bij een melding, voegt Velvoix context, triage en eventvorming toe zodat opvolging bestuurbaar wordt.',
      compareLabel: 'Vergelijking',
      outcomes: ['Minder interpretatielast', 'Betere prioritering', 'Betere reconstructie'],
      traditionalTitle: 'Traditionele keten',
      traditionalSteps: ['Signaal', 'Melding', 'Handmatige interpretatie'],
      velvoixTitle: 'Velvoix-keten',
      velvoixSteps: ['Signaal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalatie', 'Reconstructie'],
      velvoixSupporting: 'Elke extra laag voegt betekenis toe en maakt opvolging, escalatie en audit bestuurbaar.',
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
        'De kracht van Velvoix zit niet in een los scherm, model of signaalbron, maar in een productkern die eventwaarheid, uitlegbare triage, opvolging en beheer gecontroleerd bijeenhoudt, ook wanneer de praktijk druk is of delen van de keten beperkt werken.',
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
            'Velvoix is ontworpen zodat opvolging bruikbaar kan blijven als delen van de keten tijdelijk beperkt werken. Niet door schijnzekerheid te tonen, maar door kernstatus en vervolgstap beheerst zichtbaar te houden.',
          effect: 'Betrouwbare workflow wanneer niet alles ideaal reageert.',
        },
        {
          index: '02',
          title: 'Geen schijnzekerheid',
          description:
            'Als context, kwaliteit of beschikbaarheid beperkt is, hoort dat zichtbaar en bestuurbaar te blijven in plaats van stil te verdwijnen achter ogenschijnlijk zekere output.',
          effect: 'Eerlijke fallback in plaats van stille degradatie.',
        },
        {
          index: '03',
          title: 'Backend-truth als kern',
          description:
            'De operationele waarheid over status, uitleg en opvolging wordt in de kern bewaakt, niet in losse schermlogica of afgeleide integratie-uitkomsten.',
          effect: 'Backend-truth boven losse scherm- of integratielogica.',
        },
        {
          index: '04',
          title: 'Rol- en tenantzuiver',
          description:
            'Toegang en acties blijven begrensd per organisatie, context en rol. Zo blijft Velvoix bestuurbaar wanneer meerdere teams en omgevingen naast elkaar werken.',
          effect: 'Harde grenzen tussen organisaties, rollen en context.',
        },
        {
          index: '05',
          title: 'Reconstructeerbaar en auditbaar',
          description:
            'Opvolging, statusverloop en kritieke veranderingen blijven herleidbaar, zodat evaluatie en kwaliteitsverbetering niet afhankelijk worden van geheugen of losse exports.',
          effect: 'Herleidbare opvolging in plaats van losse momentopnames.',
        },
        {
          index: '06',
          title: 'Operationeel beheersbaar',
          description:
            'Observability, eigenaarschap en governance horen bij het productgedrag. Daardoor blijft zichtbaar waar aandacht nodig is en hoe een team gecontroleerd moet reageren.',
          effect: 'Beheersing als productdiscipline, niet als losse IT-bijlage.',
        },
      ],
      closingLine:
        'Samen zorgen deze lagen ervoor dat Velvoix geen meldingenlaag of black-box laag wordt, maar een uitlegbaar en bestuurbaar zorgplatform blijft.',
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
        'Kies hieronder de route die past bij uw vraag: pilotverkenning, samenwerkingsroute of een algemene zakelijke vraag.',
      reasonsLabel: 'Routes',
      inquiryTypes: {
        pilot: 'Pilotverkenning',
        partnership: 'Samenwerkingsroute',
        general: 'Zakelijke vraag',
      },
      reasons: [
        'Pilotverkenning voor zorgorganisaties en teams',
        'Samenwerkingsroute voor partners en uitrolvraagstukken',
        'Zakelijke vraag over platform, inzetcontext of planning',
      ],
      directEmailNote: 'Voor pilotverkenningen, samenwerkingsroutes en zakelijke vragen.',
      routeContent: {
        pilot: {
          helper: 'Kies deze route als u wilt toetsen of Velvoix binnen uw zorgsetting pilotwaardig en operationeel relevant is.',
          messagePlaceholder: 'Beschrijf kort uw organisatie, zorgcontext en wat u in een pilotverkenning wilt toetsen.',
          submit: 'Verstuur pilotverkenning',
        },
        partnership: {
          helper: 'Kies deze route als u partnerfit, uitrol, integratie of een strategische samenwerkingsroute wilt bespreken.',
          messagePlaceholder: 'Beschrijf kort uw organisatie, rol en welke samenwerkings- of uitrolroute u wilt verkennen.',
          submit: 'Verstuur samenwerkingsverkenning',
        },
        general: {
          helper: 'Kies deze route voor een algemene zakelijke vraag over het platform, de inzetcontext of vervolgstappen.',
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
      directEmailValue: 'info@velvoix.com',
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
        'Velvoix helps healthcare organisations turn button calls, voice input and other care-related signals into explainable, prioritised and auditable care workflow.',
      ogTitle: 'Velvoix | Clear care action from signals',
      ogDescription:
        'An introduction to Velvoix: from signal to explainable, prioritised and auditable care workflow.',
    },
    hero: {
      eyebrow: 'Velvoix',
      title: 'From signal to clear care action',
      subtitle:
        'Velvoix helps healthcare organisations turn button calls, voice input and other care-related signals into explainable, prioritised and auditable care workflow.',
      supporting:
        'Built for care environments where clarity, follow-up and reconstruction matter.',
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
        'Button calls, voice input and other care signals gain context, explanation and a workable next step through Velvoix.',
      stages: [
        {
          label: 'What comes in',
          title: 'Signals from care operations',
          description:
            'Button calls, voice input and other care-related signals enter in a controlled way as the starting point for follow-up.',
        },
        {
          label: 'What Velvoix adds',
          title: 'Operational meaning around the signal',
          description:
            'Velvoix adds context, triage, explanation, ownership and event shaping so teams understand faster what needs attention.',
        },
        {
          label: 'What that delivers',
          title: 'Workable follow-up',
          description:
            'That leads to clearer next steps, less interpretation burden and better reconstruction of what happened.',
        },
      ],
    },
    challenge: {
      eyebrow: 'The challenge',
      title: 'When a signal is not yet a clear care action',
      description:
        'Many systems can register that something happened, but they do not sufficiently support the next step: what is likely going on, how urgent is it, what follow-up fits the situation and how can the full sequence later be reconstructed properly?',
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
        'The difference sits in the chain: where traditional systems stop at an alert, Velvoix adds context, triage and event formation so follow-up becomes manageable.',
      compareLabel: 'Comparison',
      outcomes: ['Less interpretation burden', 'Better prioritisation', 'Better reconstruction'],
      traditionalTitle: 'Traditional chain',
      traditionalSteps: ['Signal', 'Alert', 'Manual interpretation'],
      velvoixTitle: 'Velvoix chain',
      velvoixSteps: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
      velvoixSupporting: 'Each extra layer adds meaning and makes follow-up, escalation and audit manageable.',
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
        'The strength of Velvoix does not sit in a standalone screen, model or signal source, but in a product core that keeps event truth, explainable triage, follow-up and governance together in a controlled way, even when operations are under pressure or parts of the chain are temporarily limited.',
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
            'Velvoix is designed so follow-up can remain usable when parts of the chain are temporarily limited. Not by pretending certainty, but by keeping core status and next action visible in a controlled way.',
          effect: 'Reliable workflow when not every part of the chain reacts perfectly.',
        },
        {
          index: '02',
          title: 'No false certainty',
          description:
            'If context, quality or availability is limited, that should remain visible and manageable instead of disappearing behind apparently certain output.',
          effect: 'Honest fallback instead of silent degradation.',
        },
        {
          index: '03',
          title: 'Backend truth at the core',
          description:
            'The operational truth about status, explanation and follow-up is held in the core, not spread across screen logic or derived integration outcomes.',
          effect: 'Backend-owned truth over fragmented UI or integration logic.',
        },
        {
          index: '04',
          title: 'Role- and tenant-bound',
          description:
            'Access and actions remain bounded by organisation, context and role. That keeps Velvoix governable when multiple teams and environments operate side by side.',
          effect: 'Hard boundaries between organisations, roles and contexts.',
        },
        {
          index: '05',
          title: 'Reconstructable and auditable',
          description:
            'Follow-up, status changes and critical decisions remain traceable, so evaluation and quality improvement do not depend on memory or disconnected exports.',
          effect: 'Traceable follow-up instead of isolated snapshots.',
        },
        {
          index: '06',
          title: 'Operationally manageable',
          description:
            'Observability, ownership and governance are part of product behaviour. That keeps it visible where attention is needed and how teams should respond in a controlled way.',
          effect: 'Operational control as product discipline, not an IT afterthought.',
        },
      ],
      closingLine:
        'Together, these layers keep Velvoix from becoming a notification layer or black-box layer and make it an explainable, governable care platform.',
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
        'Choose the route that fits your request: pilot exploration, partnership route or a general business question.',
      reasonsLabel: 'Routes',
      inquiryTypes: {
        pilot: 'Pilot exploration',
        partnership: 'Partnership route',
        general: 'Business question',
      },
      reasons: [
        'Pilot exploration for healthcare organisations and care teams',
        'Partnership route for partners, rollout and integration scope',
        'Business question about platform fit, deployment context or timing',
      ],
      directEmailNote: 'For pilot explorations, partnership routes and business questions.',
      routeContent: {
        pilot: {
          helper: 'Choose this route if you want to assess whether Velvoix is pilot-ready and operationally relevant in your care setting.',
          messagePlaceholder: 'Briefly describe your organisation, care context and what you want to assess in a pilot exploration.',
          submit: 'Send pilot exploration',
        },
        partnership: {
          helper: 'Choose this route if you want to discuss partner fit, rollout scope, integration or a strategic collaboration route.',
          messagePlaceholder: 'Briefly describe your organisation, role and which partnership or rollout route you want to explore.',
          submit: 'Send partnership exploration',
        },
        general: {
          helper: 'Choose this route for a general business question about the platform, deployment context or next steps.',
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
      directEmailValue: 'info@velvoix.com',
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


