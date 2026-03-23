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
  points: string[];
}

export interface FlowContent extends SectionIntroContent {
  flow: string[];
  supporting: string;
}

export interface HowItWorksContent extends SectionIntroContent {
  steps: Array<{ title: string; description: string }>;
}

export interface WhyVelvoixContent extends SectionIntroContent {
  cards: Array<{ title: string; description: string }>;
}

export interface PilotContent extends SectionIntroContent {
  points: string[];
  primaryCta: string;
  secondaryCta: string;
}

export interface ContactContent extends SectionIntroContent {
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
}

export interface SiteContent {
  locale: Locale;
  nav: NavItem[];
  meta: MetaContent;
  hero: HeroContent;
  challenge: ChallengeContent;
  flow: FlowContent;
  howItWorks: HowItWorksContent;
  whyVelvoix: WhyVelvoixContent;
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
        { value: 'Auditbaar', label: 'Traceerbaar statusverloop en reconstructie' },
        { value: 'Modulair', label: 'Inpasbaar in bestaande zorgomgevingen' },
      ],
    },
    challenge: {
      eyebrow: 'Het probleem',
      title: 'Wanneer een signaal nog geen duidelijke zorgactie is',
      description:
        'Veel systemen kunnen wel registreren dat er iets gebeurt, maar helpen onvoldoende bij de volgende stap: wat is er waarschijnlijk aan de hand, hoe urgent is het, welke opvolging past daarbij en hoe blijft dat achteraf goed te reconstrueren?',
      points: [
        'Meer duidelijkheid over wat aandacht vraagt',
        'Betere prioritering van opvolging',
        'Minder interpretatielast op de werkvloer',
        'Betere reconstructie van wat er is gebeurd',
      ],
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
    },
    whyVelvoix: {
      eyebrow: 'Waarom Velvoix',
      title: 'Ontworpen voor duidelijkheid, opvolging en beheersing',
      description:
        'Geen losse notificatielaag, maar een platform dat operationele zorgworkflow beter hanteerbaar maakt.',
      cards: [
        {
          title: 'Uitlegbaar',
          description:
            'Urgentie en aanbevolen opvolging moeten begrijpelijk zijn. Velvoix is gericht op heldere en uitlegbare uitkomsten.',
        },
        {
          title: 'Operationeel bruikbaar',
          description:
            'Velvoix ondersteunt niet alleen signalering, maar vooral duidelijke opvolging, eigenaarschap en workflow op de werkvloer.',
        },
        {
          title: 'Beheersbaar en modulair',
          description:
            'Velvoix is bedoeld om gecontroleerd in te passen in bestaande omgevingen, met ruimte voor modulaire integraties.',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Interesse in een pilot?',
      description:
        'Velvoix is bedoeld voor zorgorganisaties die niet alleen signalen willen ontvangen, maar vooral meer duidelijkheid, betere prioritering en strakkere opvolging willen organiseren.',
      points: [
        'Verpleeghuizen',
        'Langdurige zorg',
        'Organisaties die zoeken naar meer operationele duidelijkheid',
      ],
      primaryCta: 'Plan een pilotgesprek',
      secondaryCta: 'Vraag informatie aan',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Laten we verder praten',
      description:
        'Wilt u meer weten over Velvoix of verkennen of een pilot past bij uw organisatie? Laat uw gegevens achter.',
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
        { value: 'Explainable', label: 'From incoming signal to understandable follow-up' },
        { value: 'Auditable', label: 'Traceable status flow and reconstruction' },
        { value: 'Modular', label: 'Designed to fit existing care environments' },
      ],
    },
    challenge: {
      eyebrow: 'The challenge',
      title: 'When a signal is not yet a clear care action',
      description:
        'Many systems can register that something happened, but they do not sufficiently support the next step: what is likely going on, how urgent is it, what follow-up fits the situation and how can the full sequence later be reconstructed properly?',
      points: [
        'More clarity on what requires attention',
        'Better prioritisation of follow-up',
        'Less interpretation burden on staff',
        'Better reconstruction of what happened',
      ],
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
    },
    whyVelvoix: {
      eyebrow: 'Why Velvoix',
      title: 'Built for clarity, follow-up and control',
      description:
        'Not a loose notification layer, but a platform that makes operational care workflow easier to handle.',
      cards: [
        {
          title: 'Explainable',
          description:
            'Urgency and recommended follow-up should be understandable. Velvoix is designed for clear and explainable outcomes.',
        },
        {
          title: 'Operationally usable',
          description:
            'Velvoix supports not only signalling, but especially clear follow-up, ownership and workflow on the care floor.',
        },
        {
          title: 'Controlled and modular',
          description:
            'Velvoix is intended to fit into existing environments in a controlled way, with room for modular integrations.',
        },
      ],
    },
    pilot: {
      eyebrow: 'Pilot',
      title: 'Interested in a pilot?',
      description:
        'Velvoix is designed for healthcare organisations that want more than incoming alerts. It is built for teams that want clearer follow-up, better prioritisation and stronger operational control.',
      points: [
        'Nursing homes',
        'Long-term care environments',
        'Organisations looking for greater operational clarity',
      ],
      primaryCta: 'Schedule a pilot conversation',
      secondaryCta: 'Request information',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us continue the conversation',
      description:
        'Would you like to learn more about Velvoix or explore whether a pilot fits your organisation? Leave your details below.',
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
    },
  },
};
