import type { Locale } from './site';

export type ResourceLocale = 'nl' | 'en';
export type ResourceId = 'explainable-triage' | 'workflow-reconstruction' | 'pilot-readiness';

export interface ResourceMetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface ResourceSectionContent {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ResourceArticleContent {
  id: ResourceId;
  slug: string;
  title: string;
  cardDescription: string;
  eyebrow: string;
  intro: string;
  summary: string;
  points: string[];
  sections: ResourceSectionContent[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
  meta: ResourceMetaContent;
}

export interface ValidationContent {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  cards: Array<{ title: string; description: string }>;
}

export interface HubContent {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
}

export interface ResourceUiContent {
  validation: ValidationContent;
  hub: HubContent;
}

export const resourceUiByLocale: Record<Locale, ResourceUiContent> = {
  nl: {
    validation: {
      eyebrow: 'Pilotvalidatie',
      title: 'Wat een eerste pilot in de praktijk moet bewijzen',
      description:
        'Een pilot maakt zichtbaar of Velvoix in jullie setting echt helpt om sneller te prioriteren, duidelijker op te volgen en beter te reconstrueren.',
      note:
        'Praktijkuitkomsten hangen af van teambezetting, processen, devices en bestaande systemen. Juist daarom werkt een gerichte pilot beter dan een algemene demo.',
      cards: [
        {
          title: 'Sneller zien wat aandacht vraagt',
          description: 'Welke signalen sneller tot duidelijke opvolging leiden en waar extra context echt helpt.',
        },
        {
          title: 'Duidelijkere opvolging en verantwoordelijkheid',
          description: 'Hoe status, verantwoordelijkheid en escalatie minder interpretatieruis geven in de dagelijkse praktijk.',
        },
        {
          title: 'Betere reconstructie voor evaluatie',
          description: 'Welke audit- en evaluatievragen beter te beantwoorden zijn met duidelijk statusverloop en reconstructie.',
        },
      ],
    },
    hub: {
      eyebrow: 'Verdiepende pagina’s',
      title: 'Meer context voor beslissers en teams',
      description:
        'Drie verdiepende pagina’s over triage, workflow en pilotaanpak voor zorgsignalen.',
      linkLabel: 'Lees pagina',
    },
  },
  en: {
    validation: {
      eyebrow: 'Pilot validation',
      title: 'What a first pilot can validate in practice',
      description:
        'A pilot shows whether Velvoix really helps your setting prioritise faster, follow up more clearly and reconstruct events more effectively.',
      note:
        'Practical outcomes depend on staffing, processes, devices and existing systems. That is why a targeted pilot is more useful than a generic demo.',
      cards: [
        {
          title: 'Seeing faster what needs attention',
          description: 'Which signals lead to clearer follow-up sooner, and where additional context genuinely changes decisions.',
        },
        {
          title: 'Clearer follow-up and responsibility',
          description: 'How status, responsibility and escalation reduce interpretation noise in day-to-day work.',
        },
        {
          title: 'Better reconstruction for review',
          description: 'Which audit and evaluation questions become easier to answer with clearer status progression and reconstruction.',
        },
      ],
    },
    hub: {
      eyebrow: 'Further reading',
      title: 'More context for decision-makers and teams',
      description:
        'Three deeper pages on how Velvoix helps translate care signals into clear follow-up, better prioritisation and traceable reconstruction.',
      linkLabel: 'Read page',
    },
  },
  de: {
    validation: {
      eyebrow: 'Pilotvalidierung',
      title: 'Was ein erster Pilot in der Praxis belegen sollte',
      description:
        'Ein Pilot macht sichtbar, ob Velvoix in Ihrer Umgebung wirklich hilft, schneller zu priorisieren, klarer nachzuverfolgen und besser zu rekonstruieren.',
      note:
        'Praktische Ergebnisse hängen von Teams, Prozessen, Geräten und bestehenden Systemen ab. Gerade deshalb ist ein gezielter Pilot wertvoller als eine allgemeine Demo.',
      cards: [
        {
          title: 'Schnellere Einordnung',
          description: 'Welche Signale schneller zu klarer Nachverfolgung führen und wo Erklärbarkeit Entscheidungen verbessert.',
        },
        {
          title: 'Steuerbare Verantwortung',
          description: 'Wie Status, Verantwortung und Eskalation die tägliche Interpretationslast senken.',
        },
        {
          title: 'Nachvollziehbare Rekonstruktion',
          description: 'Welche Audit- und Evaluationsfragen sich mit Eventlogik und Statusverlauf besser beantworten lassen.',
        },
      ],
    },
    hub: {
      eyebrow: 'Vertiefende Seiten',
      title: 'Weitere Kontextseiten folgen',
      description:
        'Für Deutsch ergänzen wir die vertiefenden Ressourcen im nächsten Schritt. Die Pilotvalidierung steht bereits im Vordergrund.',
      linkLabel: 'Read page',
    },
  },
  es: {
    validation: {
      eyebrow: 'Validación piloto',
      title: 'Qué puede validar de forma concreta un primer piloto',
      description:
        'Velvoix no promete un resultado genérico por adelantado. Un primer piloto vuelve estas preguntas concretas en el entorno propio.',
      note:
        'Los resultados prácticos dependen de equipos, procesos, dispositivos y sistemas existentes. Por eso un piloto enfocado aporta más que una demo genérica.',
      cards: [
        {
          title: 'Interpretación más rápida',
          description: 'Qué señales llevan antes a un seguimiento claro y dónde la explicabilidad cambia decisiones.',
        },
        {
          title: 'Titularidad gobernable',
          description: 'Cómo estado, titularidad y escalada reducen ruido de interpretación en la operación diaria.',
        },
        {
          title: 'Reconstrucción trazable',
          description: 'Qué preguntas de auditoría y evaluación se responden mejor con lógica de evento y evolución de estado.',
        },
      ],
    },
    hub: {
      eyebrow: 'Lecturas complementarias',
      title: 'Más recursos llegarán después',
      description:
        'Para español añadiremos las páginas de profundidad en una siguiente iteración. Por ahora priorizamos la capa de validación piloto.',
      linkLabel: 'Read page',
    },
  },
};

export const resourceArticlesByLocale: Record<ResourceLocale, ResourceArticleContent[]> = {
  nl: [
    {
      id: 'explainable-triage',
      slug: 'uitlegbare-zorgtriage',
      title: 'Uitlegbare zorgtriage voor zorgsignalen',
      cardDescription:
        'Waarom context en prioritering nodig zijn om van een binnenkomend signaal naar een duidelijke en verdedigbare vervolgactie te komen.',
      eyebrow: 'Verdieping',
      intro:
        'Een binnenkomend zorgsignaal wordt pas werkbaar als teams begrijpen waarom het aandacht vraagt, welke urgentie logisch is en welke opvolging daarbij past.',
      summary:
        'Uitlegbare triage gaat niet alleen over prioriteit, maar over verdedigbare duiding in zorgcontext.',
      points: [
        'Waarom melding zonder context te weinig zegt',
        'Hoe triage en eventcontext elkaar versterken',
        'Welke operationele winst teams hierdoor ervaren',
      ],
      sections: [
        {
          title: 'Waarom meldingen alleen niet genoeg zijn',
          paragraphs: [
            'Veel traditionele omgevingen registreren dat er iets gebeurt, maar laten de echte interpretatie bij het team liggen.',
            'Dat vertraagt opvolging en maakt moeilijker uitlegbaar waarom één signaal direct aandacht vroeg en een ander signaal niet.',
          ],
          bullets: [
            'Een signaal zonder context zegt weinig over urgentie',
            'Teams verliezen tijd aan herinterpretatie',
            'Achteraf is moeilijker uit te leggen waarom een keuze logisch was',
          ],
        },
        {
          title: 'Hoe context en triage samenwerken',
          paragraphs: [
            'Velvoix combineert binnenkomende signalen met eventcontext, historie en operationele logica. Daardoor wordt triage meer dan een kleur of prioriteitslabel.',
            'De uitkomst is een opvolging die beter verdedigbaar is in teamoverleg, kwaliteitsgesprekken en dagelijkse zorgpraktijk.',
          ],
          bullets: [
            'Historie en trigger worden meegewogen',
            'Urgentie wordt zichtbaar onderbouwd',
            'De volgende stap wordt duidelijker voor het team',
          ],
        },
        {
          title: 'Wat teams hier praktisch aan hebben',
          paragraphs: [
            'Uitlegbare triage vermindert interpretatieruis en helpt teams sneller te zien wat directe actie vraagt.',
            'Daarnaast ontstaat een beter spoor voor evaluatie, omdat signalen en vervolgacties in dezelfde logica blijven staan.',
          ],
        },
      ],
      ctaTitle: 'Bespreek uitlegbare triage in een pilot',
      ctaBody:
        'Gebruik een eerste verkenning om te toetsen welke signalen in jullie setting vooral baat hebben bij context en uitlegbare triage.',
      ctaLabel: 'Start pilotverkenning',
      meta: {
        title: 'Uitlegbare zorgtriage voor zorgsignalen | Velvoix',
        description:
          'Lees hoe uitlegbare zorgtriage zorgsignalen vertaalt naar duidelijke opvolging met context, urgentie en verdedigbare uitleg.',
        ogTitle: 'Uitlegbare zorgtriage voor zorgsignalen | Velvoix',
        ogDescription:
          'Velvoix laat zien hoe context en triage zorgsignalen omzetten in duidelijke en verdedigbare opvolging.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'zorgworkflow-en-reconstructie',
      title: 'Zorgworkflow, escalatie en reconstructie',
      cardDescription:
        'Waarom opvolging sterker werkt wanneer status, verantwoordelijkheid, escalatie en reconstructie in dezelfde operationele lijn blijven.',
      eyebrow: 'Verdieping',
      intro:
        'Een zorgsignaal is pas afgerond als opvolging, statusverloop en reconstructie in één bestuurbare lijn blijven staan.',
      summary:
        'Werkbare workflow gaat niet alleen over taken verdelen, maar over eigenaarschap, escalatie en terugkijkbaarheid in dezelfde operationele keten.',
      points: [
        'Van event naar bestuurbare opvolging',
        'Waarom escalatie en status samen horen',
        'Wat reconstructie toevoegt voor evaluatie',
      ],
      sections: [
        {
          title: 'Van event naar bestuurbare opvolging',
          paragraphs: [
            'Velvoix maakt van een signaal een event dat teams kunnen toewijzen, volgen en afsluiten. Daardoor blijft het werkbaar in plaats van alleen zichtbaar.',
            'Dat helpt vooral in omgevingen waar meerdere mensen dezelfde bewoner, kamer of situatie raken.',
          ],
        },
        {
          title: 'Waarom escalatie en status samen horen',
          paragraphs: [
            'Als status losstaat van eigenaarschap en escalatie, krijgen teams alsnog losse meldingen en extra interpretatierondes.',
            'Door escalatie onderdeel te maken van dezelfde flow wordt duidelijk wanneer risico oploopt, wanneer vervolgactie uitblijft en wie moet reageren.',
          ],
          bullets: [
            'Eigenaarschap blijft zichtbaar',
            'Escalatie volgt uit status en risico',
            'Opvolging blijft logisch voor teams en leiding',
          ],
        },
        {
          title: 'Wat reconstructie toevoegt',
          paragraphs: [
            'Reconstructie maakt zichtbaar wat er gebeurde, hoe opvolging verliep en waar vertraging of onduidelijkheid ontstond.',
            'Dat helpt niet alleen bij audits, maar ook bij teamleren, kwaliteitsverbetering en gesprekken over procesinrichting.',
          ],
        },
      ],
      ctaTitle: 'Verken workflow en reconstructie in jullie setting',
      ctaBody:
        'Gebruik een pilot om te beoordelen hoe statusverloop, escalatie en reconstructie in jullie workflow het meeste opleveren.',
      ctaLabel: 'Bespreek samenwerkingsroute',
      meta: {
        title: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        description:
          'Lees hoe Velvoix zorgsignalen omzet in bestuurbare workflow met eigenaarschap, escalatie en herleidbare reconstructie.',
        ogTitle: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        ogDescription:
          'Velvoix verbindt workflow, escalatie en reconstructie in één traceerbare opvolgketen.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilotaanpak-zorgsignalen',
      title: 'Pilotaanpak voor zorgsignalen en opvolging',
      cardDescription:
        'Waar een eerste pilot op moet sturen om te beoordelen of Velvoix past bij teams, processen en bestaande zorgomgeving.',
      eyebrow: 'Pilotaanpak',
      intro:
        'Een goede pilot is geen vrijblijvende demo, maar een gecontroleerde verkenning van operationele fit, opvolging en proceswaarde.',
      summary:
        'Een eerste pilot moet scherp maken wat je wilt valideren, welke teams meedoen en hoe vervolgkeuzes worden onderbouwd.',
      points: [
        'Welke vragen een eerste pilot moet beantwoorden',
        'Welke teams, devices en processen je meeneemt',
        'Hoe je uitkomst en vervolg bepaalt',
      ],
      sections: [
        {
          title: 'Wat een eerste pilot moet beantwoorden',
          paragraphs: [
            'Een pilot moet niet proberen alles tegelijk te bewijzen. De kern is meestal: helpt Velvoix om sneller te duiden, duidelijker op te volgen en beter te reconstrueren.',
            'Daarmee ontstaat een bruikbaar beeld van operationele fit zonder te vroeg brede uitrolclaims te doen.',
          ],
        },
        {
          title: 'Welke setting je meeneemt',
          paragraphs: [
            'De waarde van een pilot hangt sterk af van de gekozen setting: type signalen, teambezetting, devices, processen en escalatielijnen.',
            'Juist daarom is het verstandig om pilotdoelen vooraf aan een concrete zorgcontext te koppelen.',
          ],
          bullets: [
            'Welke signalen zijn in scope',
            'Welke teams werken met de opvolging',
            'Welke bestaande processen moeten worden meegenomen',
          ],
        },
        {
          title: 'Hoe je vervolg bepaalt',
          paragraphs: [
            'Een goede pilot eindigt niet met een algemeen gevoel, maar met concrete bevindingen over triage, workflow, reconstructie en inpasbaarheid.',
            'Dat maakt het eenvoudiger om te beslissen of een volgende stap logisch is, welke integraties nodig zijn en waar nog ontwerpkeuzes liggen.',
          ],
        },
      ],
      ctaTitle: 'Gebruik de pilot om echte fit te beoordelen',
      ctaBody:
        'Bespreek vooraf welke signalen, teams en uitkomsten in jullie setting bepalend zijn voor een vervolgroute.',
      ctaLabel: 'Plan een verkenning',
      meta: {
        title: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        description:
          'Lees hoe een eerste pilot met Velvoix zorgsignalen, opvolging en reconstructie eerlijk kan valideren in de eigen zorgsetting.',
        ogTitle: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        ogDescription:
          'Velvoix beschrijft hoe een eerste pilot operationele fit, opvolging en reconstructie in zorgcontext kan valideren.',
      },
    },
  ],
  en: [
    {
      id: 'explainable-triage',
      slug: 'explainable-care-triage',
      title: 'Explainable care triage for care signals',
      cardDescription:
        'Why context and triage are needed to move from an incoming signal to a defensible next action.',
      eyebrow: 'Deep dive',
      intro:
        'An incoming care signal only becomes workable when teams understand why it needs attention, how urgent it is and which follow-up makes sense.',
      summary:
        'Explainable triage is not just about priority, but about defensible interpretation in care context.',
      points: [
        'Why an alert without context says too little',
        'How triage and event context reinforce each other',
        'What operational gain teams can expect',
      ],
      sections: [
        {
          title: 'Why alerts alone are not enough',
          paragraphs: [
            'Many traditional environments record that something happened, but leave most interpretation with the team.',
            'That slows follow-up and makes it harder to explain afterwards why one signal required immediate action and another did not.',
          ],
          bullets: [
            'A signal without context says little about urgency',
            'Teams lose time on repeated interpretation',
            'It becomes harder to defend decisions afterwards',
          ],
        },
        {
          title: 'How context and triage work together',
          paragraphs: [
            'Velvoix combines incoming signals with event context, history and operational logic. That makes triage more than a colour or priority flag.',
            'The result is follow-up that is easier to defend in team discussions, quality reviews and day-to-day care operations.',
          ],
          bullets: [
            'History and trigger are part of the assessment',
            'Urgency becomes visibly grounded',
            'The next step becomes clearer for the team',
          ],
        },
        {
          title: 'What teams gain in practice',
          paragraphs: [
            'Explainable triage reduces interpretation noise and helps teams see faster what needs attention now.',
            'It also creates a better basis for evaluation, because signals and follow-up remain linked in the same logic.',
          ],
        },
      ],
      ctaTitle: 'Discuss explainable triage in a pilot',
      ctaBody:
        'Use a first pilot to test which signals in your setting benefit most from context and explainable triage.',
      ctaLabel: 'Start pilot assessment',
      meta: {
        title: 'Explainable care triage for care signals | Velvoix',
        description:
          'Learn how explainable care triage turns care signals into clear follow-up with context, urgency and defensible reasoning.',
        ogTitle: 'Explainable care triage for care signals | Velvoix',
        ogDescription:
          'Velvoix shows how context and triage turn care signals into clear and defensible follow-up.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'care-workflow-and-reconstruction',
      title: 'Care workflow, escalation and reconstruction',
      cardDescription:
        'Why follow-up only becomes manageable when status, ownership, escalation and reconstruction stay in the same chain.',
      eyebrow: 'Deep dive',
      intro:
        'A care signal is only complete when follow-up, status flow and reconstruction stay aligned in one manageable line.',
      summary:
        'Workable workflow is not only about assigning tasks, but about ownership, escalation and traceability in the same operational chain.',
      points: [
        'From event to manageable follow-up',
        'Why escalation and status belong together',
        'How reconstruction supports evaluation and audit',
      ],
      sections: [
        {
          title: 'From event to manageable follow-up',
          paragraphs: [
            'Velvoix turns a signal into an event that teams can assign, track and close. That keeps it workable rather than merely visible.',
            'This matters most in environments where several people touch the same resident, room or situation.',
          ],
        },
        {
          title: 'Why escalation and status belong together',
          paragraphs: [
            'If status is disconnected from ownership and escalation, teams still end up with separate alerts and extra interpretation rounds.',
            'By keeping escalation inside the same flow, it becomes clearer when risk is rising, when follow-up stalls and who needs to respond.',
          ],
          bullets: [
            'Ownership stays visible',
            'Escalation follows from status and risk',
            'Follow-up remains logical for teams and leadership',
          ],
        },
        {
          title: 'What reconstruction adds',
          paragraphs: [
            'Reconstruction shows what happened, how follow-up progressed and where delay or ambiguity entered the process.',
            'That helps with audits, but also with team learning, quality improvement and process review.',
          ],
        },
      ],
      ctaTitle: 'Explore workflow and reconstruction in your setting',
      ctaBody:
        'Use a pilot to assess where status flow, escalation and reconstruction create the most operational value for your teams.',
      ctaLabel: 'Discuss partnership route',
      meta: {
        title: 'Care workflow, escalation and reconstruction | Velvoix',
        description:
          'Read how Velvoix turns care signals into manageable workflow with ownership, escalation and traceable reconstruction.',
        ogTitle: 'Care workflow, escalation and reconstruction | Velvoix',
        ogDescription:
          'Velvoix connects workflow, escalation and reconstruction in one traceable follow-up chain.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilot-approach-care-signals',
      title: 'Pilot approach for care signals and follow-up',
      cardDescription:
        'What a first pilot should focus on when you want to assess whether Velvoix fits your teams, processes and existing care environment.',
      eyebrow: 'Pilot approach',
      intro:
        'A strong pilot is not a loose demo, but a controlled way to assess operational fit, follow-up quality and process value.',
      summary:
        'A first pilot should clarify what you want to validate, which teams participate and how follow-up decisions will be grounded.',
      points: [
        'Which questions a first pilot should answer',
        'Which teams, devices and processes to include',
        'How to evaluate outcomes and next steps honestly',
      ],
      sections: [
        {
          title: 'What a first pilot should answer',
          paragraphs: [
            'A pilot should not try to prove everything at once. The core questions are usually whether Velvoix helps teams interpret faster, follow up more clearly and reconstruct more reliably.',
            'That creates a useful picture of operational fit without making broad rollout claims too early.',
          ],
        },
        {
          title: 'Which setting to include',
          paragraphs: [
            'The value of a pilot depends heavily on the chosen setting: signal types, staffing, devices, processes and escalation lines.',
            'That is why pilot goals should be tied to a concrete care context from the start.',
          ],
          bullets: [
            'Which signals are in scope',
            'Which teams handle the follow-up',
            'Which existing processes need to be included',
          ],
        },
        {
          title: 'How to decide on the next step',
          paragraphs: [
            'A useful pilot ends with concrete findings on triage, workflow, reconstruction and fit, rather than a vague positive feeling.',
            'That makes it easier to decide whether a next phase is justified, which integrations matter and where design decisions still remain.',
          ],
        },
      ],
      ctaTitle: 'Use the pilot to assess real fit',
      ctaBody:
        'Discuss upfront which signals, teams and outcomes in your setting should determine whether Velvoix moves to the next phase.',
      ctaLabel: 'Plan a conversation',
      meta: {
        title: 'Pilot approach for care signals and follow-up | Velvoix',
        description:
          'Learn how a first Velvoix pilot can fairly validate care signals, follow-up and reconstruction in your own care setting.',
        ogTitle: 'Pilot approach for care signals and follow-up | Velvoix',
        ogDescription:
          'Velvoix outlines how a first pilot can validate operational fit, follow-up and reconstruction in care context.',
      },
    },
  ],
};

export function hasResourcePages(locale: Locale): locale is ResourceLocale {
  return locale === 'nl' || locale === 'en';
}

export function getResourcePath(locale: ResourceLocale, article: ResourceArticleContent): string {
  return locale === 'nl' ? `/insights/${article.slug}` : `/${locale}/insights/${article.slug}`;
}

export function getResourceAlternates(id: ResourceId): Record<ResourceLocale, string> {
  return {
    nl: getResourcePath('nl', resourceArticlesByLocale.nl.find((article) => article.id === id)!),
    en: getResourcePath('en', resourceArticlesByLocale.en.find((article) => article.id === id)!),
  };
}

export function getResourceNav(locale: ResourceLocale) {
  const basePath = locale === 'nl' ? '/' : `/${locale}/`;

  if (locale === 'nl') {
    return [
      { label: 'Home', href: `${basePath}#home` },
      { label: 'Hoe het werkt', href: `${basePath}#how-it-works` },
      { label: 'Waarom Velvoix', href: `${basePath}#why-velvoix` },
      { label: 'Pilot', href: `${basePath}#pilot` },
      { label: 'Contact', href: `${basePath}#contact` },
    ];
  }

  return [
    { label: 'Home', href: `${basePath}#home` },
    { label: 'How it works', href: `${basePath}#how-it-works` },
    { label: 'Why Velvoix', href: `${basePath}#why-velvoix` },
    { label: 'Pilot', href: `${basePath}#pilot` },
    { label: 'Contact', href: `${basePath}#contact` },
  ];
}
