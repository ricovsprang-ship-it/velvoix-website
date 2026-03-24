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
  steps: Array<{ title: string; description: string }>;
  stepNotes: string[];
}

export interface WhyVelvoixContent extends SectionIntroContent {
  cards: Array<{ title: string; description: string }>;
}

export interface CompareChainsContent extends SectionIntroContent {
  traditionalTitle: string;
  traditionalSteps: string[];
  velvoixTitle: string;
  velvoixSteps: string[];
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
    general: string;
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
        explainabilityLabel: 'Explainability',
        explainabilityTitle: 'Waarom',
        explainabilitySummary: 'Helpknop is herhaald binnen korte tijd.',
        explainabilitySupporting: 'Gebaseerd op triageregels en meldingscontext.',
        explainabilityItems: [
          { label: 'Primair signaal', value: 'Herhaalde helpoproep' },
          { label: 'Kernwaarneming', value: 'Opvolging is waarschijnlijk opnieuw nodig.' },
          { label: 'Triagebasis', value: 'Herhaling in korte tijd en context van deze melding.' },
        ],
        followUpLabel: 'Operational follow-up',
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
      title: 'Een duidelijke keten van input naar opvolging',
      description:
        'Publiek begrijpelijk, operationeel bruikbaar en ontworpen om onder zorgdruk rustig te blijven.',
      panelLabel: 'Operationele keten',
      panelSupporting: 'Velvoix structureert input, duiding, eventvorming en opvolging als één rustige keten.',
      steps: [
        {
          title: 'Input',
          description:
            'Knopoproepen, spraakinput en andere zorgsignalen komen binnen als startpunt voor opvolging.',
        },
        {
          title: 'Interpretatie',
          description:
            'Velvoix helpt context, urgentie en een logisch handelingsvoorstel te structureren, zodat een signaal beter te begrijpen is.',
        },
        {
          title: 'Operationele opvolging',
          description:
            'De uitkomst wordt een werkbaar event voor dashboard, statusopvolging, eigenaarschap en escalatie.',
        },
        {
          title: 'Audit en overzicht',
          description:
            'Acties, statusverloop en opvolging blijven herleidbaar voor evaluatie, kwaliteitsverbetering en operationeel overzicht.',
        },
      ],
      stepNotes: [
        'Brengt signalen gecontroleerd binnen',
        'Maakt urgentie en context uitlegbaar',
        'Maakt eigenaarschap en workflow werkbaar',
        'Houdt evaluatie en reconstructie intact',
      ],
    },
    compareChains: {
      eyebrow: 'Ketenverschil',
      title: 'Niet van melding naar interpretatie, maar van signaal naar bestuurbare workflow',
      description:
        'De kern van Velvoix zit in de hele keten: signalen worden niet alleen getoond, maar gestructureerd tot een uitlegbare, bestuurbare en auditbare operationele uitkomst.',
      traditionalTitle: 'Traditionele keten',
      traditionalSteps: ['Signaal', 'Melding', 'Handmatige interpretatie'],
      velvoixTitle: 'Velvoix-keten',
      velvoixSteps: ['Signaal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalatie', 'Reconstructie'],
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
    snapshots: {
      eyebrow: 'Product snapshots',
      title: 'Compacte bewijsfragmenten uit het product',
      description:
        'Geen volledige schermen, maar gerichte uitsneden die laten zien hoe Velvoix operations, explainability, control en governance zichtbaar maakt.',
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
        'Wilt u meer weten over Velvoix of verkennen of een pilot past bij uw organisatie? Laat uw gegevens achter.',
      inquiryTypes: {
        pilot: 'Pilotverkenning',
        general: 'Algemene vraag',
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
      directEmailValue: 'hello@velvoix.com',
    },
    footer: {
      brand: 'Velvoix',
      languageNl: 'Nederlands',
      languageEn: 'English',
      contact: 'Contact',
      privacy: 'Privacy',
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
      title: 'A clear chain from input to follow-up',
      description:
        'Publicly understandable, operationally useful and designed to stay calm under care pressure.',
      panelLabel: 'Operational chain',
      panelSupporting: 'Velvoix structures input, interpretation, event formation and follow-up as one calm chain.',
      steps: [
        {
          title: 'Input',
          description:
            'Button calls, voice input and other care-related triggers enter the flow as the starting point for follow-up.',
        },
        {
          title: 'Interpretation',
          description:
            'Velvoix helps structure context, urgency and a logical course of action so a signal becomes easier to understand.',
        },
        {
          title: 'Operational follow-up',
          description:
            'The outcome becomes a workable event for dashboard handling, status flow, ownership and escalation.',
        },
        {
          title: 'Audit and oversight',
          description:
            'Actions, status progression and follow-up remain traceable for evaluation, quality improvement and operational oversight.',
        },
      ],
      stepNotes: [
        'Brings signals into a controlled intake path',
        'Makes urgency and context explainable',
        'Makes ownership and workflow operationally workable',
        'Keeps evaluation and reconstruction intact',
      ],
    },
    compareChains: {
      eyebrow: 'Chain difference',
      title: 'Not from alert to interpretation, but from signal to controllable workflow',
      description:
        'The value of Velvoix sits in the full chain: signals are not merely surfaced, but structured into an explainable, controllable and auditable operational outcome.',
      traditionalTitle: 'Traditional chain',
      traditionalSteps: ['Signal', 'Alert', 'Manual interpretation'],
      velvoixTitle: 'Velvoix chain',
      velvoixSteps: ['Signal', 'Context', 'Triage', 'Event', 'Workflow', 'Escalation', 'Reconstruction'],
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
        'Would you like to learn more about Velvoix or explore whether a pilot fits your organisation? Leave your details below.',
      inquiryTypes: {
        pilot: 'Pilot exploration',
        general: 'General inquiry',
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
      directEmailValue: 'hello@velvoix.com',
    },
    footer: {
      brand: 'Velvoix',
      languageNl: 'Nederlands',
      languageEn: 'English',
      contact: 'Contact',
      privacy: 'Privacy',
      copyright: '© 2026 Velvoix® · All rights reserved.',
    },
  },
};
