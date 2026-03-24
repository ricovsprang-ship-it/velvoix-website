export type Locale = 'nl' | 'en';

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
      primaryCta: 'Plan een pilotgesprek',
      secondaryCta: 'Bekijk hoe het werkt',
      metrics: [
        { value: 'Uitlegbaar', label: 'Van signaal naar begrijpelijke opvolging' },
        { value: 'Auditbaar', label: 'Statusverloop en reconstructie blijven herleidbaar' },
        { value: 'Beheersbaar', label: 'Past in bestaande zorgomgevingen zonder losse notificatielaag' },
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
        'Velvoix is ontworpen als een eventgedreven zorgworkflowplatform. Niet om simpelweg meer notificaties te tonen, maar om signalen te vertalen naar een werkbare, uitlegbare en bestuurbare operationele uitkomst.',
      flow: ['Signaal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalatie', 'Reconstructie'],
      supporting:
        'Velvoix helpt om van een losse trigger naar een duidelijke zorgactie te gaan. Daardoor wordt opvolging overzichtelijker, consistenter en beter herleidbaar.',
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
        'De kern van Velvoix zit in de hele keten: signalen worden niet alleen getoond, maar gestructureerd tot een uitlegbare, bestuurbare en auditbare operationele uitkomst.',
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
        'Velvoix positioneert zich niet als notificatieproduct, maar als een gecontroleerde keten voor triage, opvolging en reconstructie.',
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
      title: 'Waarom Velvoix technisch moeilijk te vervangen is',
      description:
        'De kracht van Velvoix zit niet in een model, scherm of signaalbron op zichzelf, maar in een samenhangende productkern waarin triage, eventvorming, workflow, audit en beheer elkaar gecontroleerd versterken.',
      rows: [
        {
          index: '01',
          title: 'Canonieke eventwaarheid',
          description:
            'Velvoix behandelt niet de melding of het externe systeem als waarheid, maar het event zelf. Daardoor blijven status, escalatie, opvolging en reconstructie consistent.',
          effect: 'Een operationele waarheid in plaats van losse signalen en afgeleide UI-logica.',
        },
        {
          index: '02',
          title: 'Uitlegbare triageketen',
          description:
            'Triage levert niet alleen een urgentie, maar ook context, aanbevolen aanpak en uitlegbaarheid in zorgtaal.',
          effect: 'Begrijpelijke prioritering in plaats van een black-box score.',
        },
        {
          index: '03',
          title: 'Governance en besturingslaag',
          description:
            'Configuratie, publicatiestatus en kwaliteitsbewaking zijn onderdeel van het product, niet losse beheerbijlagen.',
          effect: 'Beheersbare uitrol zonder semantische drift.',
        },
        {
          index: '04',
          title: 'Adapterarchitectuur zonder vendor lock-in',
          description:
            'Integraties leveren input of ontvangen output, maar bepalen niet de productsemantiek van Velvoix.',
          effect: 'Modulair koppelen zonder de kern te vervuilen.',
        },
      ],
      closingLine:
        'Samen zorgen deze lagen ervoor dat Velvoix geen meldingenlaag blijft, maar een uitlegbaar en bestuurbaar zorgplatform wordt.',
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
      title: 'Interesse in een pilot?',
      description:
        'Velvoix is bedoeld voor zorgorganisaties die willen verkennen hoe signalen, opvolging en werkdruk beter georganiseerd kunnen worden in een uitlegbare pilotcontext.',
      points: [
        'Verpleeghuizen en langdurige zorg',
        'Teams die zoeken naar meer operationele duidelijkheid',
        'Pilotverkenning rond opvolging, triage en zorgproces',
      ],
      primaryCta: 'Plan een pilotgesprek',
      secondaryCta: 'Vraag informatie aan',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Laten we verder praten',
      description:
        'Wilt u verkennen of Velvoix past bij uw organisatie, pilotcontext of samenwerking? Laat uw gegevens achter en we nemen gericht contact met u op.',
      inquiryTypes: {
        pilot: 'Pilotverkenning',
        partnership: 'Samenwerking',
        general: 'Algemene vraag',
      },
      reasons: [
        'Pilotverkenning voor zorgorganisaties',
        'Samenwerking of partnership bespreken',
        'Algemene vraag over platform of inzetcontext',
      ],
      directEmailNote: 'Voor zakelijke vragen, pilotverkenningen en samenwerkingsgesprekken.',
      routeContent: {
        pilot: {
          helper: 'Kies deze route als u een pilot, zorgcontext of verkenning van inzet wilt bespreken.',
          messagePlaceholder: 'Beschrijf kort uw organisatie, context en wat u in een pilot wilt verkennen.',
          submit: 'Plan een gesprek',
        },
        partnership: {
          helper: 'Kies deze route als u een samenwerking, integratie of strategisch partnership wilt bespreken.',
          messagePlaceholder: 'Beschrijf kort uw organisatie, rol en welke vorm van samenwerking u wilt bespreken.',
          submit: 'Bespreek samenwerking',
        },
        general: {
          helper: 'Kies deze route voor een algemene zakelijke vraag over het platform of de inzetcontext.',
          messagePlaceholder: 'Beschrijf kort uw vraag of waar u meer over wilt weten.',
          submit: 'Verstuur aanvraag',
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
      contact: 'Contact',
      privacy: 'Privacyverklaring',
      cookies: 'Cookiebeleid',
      terms: 'Algemene voorwaarden',
      copyright: '© 2026 Velvoix® · Alle rechten voorbehouden.',
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
      primaryCta: 'Schedule a pilot conversation',
      secondaryCta: 'See how it works',
      metrics: [
        { value: 'Explainable', label: 'From signal to understandable follow-up' },
        { value: 'Auditable', label: 'Event flow and reconstruction remain traceable' },
        { value: 'Controlled', label: 'Fits care environments without becoming another notification layer' },
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
        'Velvoix is designed as an event-driven care workflow platform. Not to simply surface more notifications, but to translate signals into a workable, explainable and controllable operational outcome.',
      flow: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
      supporting:
        'Velvoix helps move from an isolated trigger to a clear care action. That makes follow-up more structured, more consistent and easier to reconstruct.',
    },
    howItWorks: {
      eyebrow: 'How it works',
      title: 'From input to workable follow-up',
      description:
        'Velvoix does not only ingest signals, but enriches them with context, triage and follow-up oriented event behaviour, so care teams understand faster what needs attention and what the logical next step is.',
      panelLabel: 'Operational flow',
      panelSupporting: 'From input to context, triage and controllable follow-up.',
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
          description: 'Follow-up, ownership and status become controllable.',
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
        'Workflow makes status controllable',
        'Audit keeps reconstruction intact',
      ],
    },
    compareChains: {
      eyebrow: 'Chain difference',
      title: 'Not from alert to interpretation, but from signal to controllable workflow',
      description:
        'The value of Velvoix sits in the full chain: signals are not merely surfaced, but structured into an explainable, controllable and auditable operational outcome.',
      compareLabel: 'Comparison',
      outcomes: ['Less interpretation burden', 'Better prioritisation', 'Better reconstruction'],
      traditionalTitle: 'Traditional chain',
      traditionalSteps: ['Signal', 'Alert', 'Manual interpretation'],
      velvoixTitle: 'Velvoix chain',
      velvoixSteps: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
      velvoixSupporting: 'Each extra layer adds meaning and makes follow-up, escalation and audit controllable.',
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
          description: 'Follow-up becomes controllable through actions, status flow and clear responsibility.',
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
        'Velvoix is not positioned as a notification product, but as a controlled chain for triage, follow-up and reconstruction.',
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
      title: 'Why Velvoix is technically hard to replace',
      description:
        'The strength of Velvoix does not sit in one model, screen or signal source, but in a connected product core where triage, event formation, workflow, audit and governance reinforce each other in a controlled way.',
      rows: [
        {
          index: '01',
          title: 'Canonical event truth',
          description:
            'Velvoix does not treat the alert or external system as the truth, but the event itself. That keeps status, escalation, follow-up and reconstruction consistent.',
          effect: 'One operational truth instead of disconnected signals and derived UI logic.',
        },
        {
          index: '02',
          title: 'Explainable triage chain',
          description:
            'Triage produces not only urgency, but also context, recommended action and explainability in care language.',
          effect: 'Understandable prioritisation instead of a black-box score.',
        },
        {
          index: '03',
          title: 'Governance and control plane',
          description:
            'Configuration, publication state and quality control are part of the product itself, not loose admin appendices.',
          effect: 'Governable rollout without semantic drift.',
        },
        {
          index: '04',
          title: 'Adapter architecture without vendor lock-in',
          description:
            'Integrations provide input or receive output, but they do not define the product semantics of Velvoix.',
          effect: 'Modular integration without polluting the core.',
        },
      ],
      closingLine:
        'Together, these layers keep Velvoix from becoming a notification layer and turn it into an explainable, governable care platform.',
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
      title: 'Interested in a pilot?',
      description:
        'Velvoix is designed for healthcare organisations that want to explore how signals, follow-up and workload can be organised more clearly in a practical pilot setting.',
      points: [
        'Nursing homes and long-term care',
        'Teams looking for greater operational clarity',
        'Pilot exploration around follow-up, triage and care process',
      ],
      primaryCta: 'Schedule a pilot conversation',
      secondaryCta: 'Request information',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us continue the conversation',
      description:
        'Would you like to explore whether Velvoix fits your organisation, pilot context or partnership model? Leave your details and we will follow up in a focused way.',
      inquiryTypes: {
        pilot: 'Pilot exploration',
        partnership: 'Partnership',
        general: 'General inquiry',
      },
      reasons: [
        'Pilot exploration for healthcare organisations',
        'Discuss collaboration or partnership',
        'General question about the platform or deployment context',
      ],
      directEmailNote: 'For business questions, pilot explorations and partnership conversations.',
      routeContent: {
        pilot: {
          helper: 'Choose this route if you want to discuss a pilot, care context or practical exploration.',
          messagePlaceholder: 'Briefly describe your organisation, context and what you would like to explore in a pilot.',
          submit: 'Plan a conversation',
        },
        partnership: {
          helper: 'Choose this route if you want to discuss collaboration, integration or a strategic partnership.',
          messagePlaceholder: 'Briefly describe your organisation, role and what kind of collaboration you want to discuss.',
          submit: 'Discuss partnership',
        },
        general: {
          helper: 'Choose this route for a general business question about the platform or deployment context.',
          messagePlaceholder: 'Briefly describe your question or what you would like to learn more about.',
          submit: 'Send request',
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
      contact: 'Contact',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      terms: 'Terms & Conditions',
      copyright: '© 2026 Velvoix® · All rights reserved.',
    },
  },
};
