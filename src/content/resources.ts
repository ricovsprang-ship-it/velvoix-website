import type { Locale } from './site';

export type ResourceLocale = 'nl' | 'en' | 'de' | 'es';
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
        'Een pilot laat zien of Velvoix in uw organisatie helpt om sneller te prioriteren, duidelijker op te volgen en beter terug te kijken.',
      note:
        'Praktijkuitkomsten hangen af van teambezetting, processen, apparaten en bestaande systemen. Juist daarom werkt een gerichte pilot beter dan een algemene demo.',
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
      eyebrow: 'Verdiepende pagina\'s',
      title: 'Meer context voor beslissers en teams',
      description:
        'Drie verdiepende pagina\'s over triage, opvolging en pilotaanpak voor zorgsignalen.',
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
        'Practical outcomes depend on staffing, processes, equipment and existing systems. That is why a targeted pilot is more useful than a generic demo.',
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
        'Three deeper pages on how Velvoix turns care signals into clear follow-up, better prioritisation and traceable reconstruction.',
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
          title: 'Schneller erkennen, was Aufmerksamkeit braucht',
          description: 'Welche Signale schneller zu klarer Nachverfolgung führen und wo zusätzliche Einordnung Entscheidungen verbessert.',
        },
        {
          title: 'Klarere Nachverfolgung und Verantwortung',
          description: 'Wie Status, Verantwortung und Eskalation den Interpretationsaufwand im Alltag spürbar senken.',
        },
        {
          title: 'Bessere Rekonstruktion für Auswertung',
          description: 'Welche Audit- und Evaluationsfragen sich mit klarem Statusverlauf und Rekonstruktion besser beantworten lassen.',
        },
      ],
    },
    hub: {
      eyebrow: 'Vertiefende Seiten',
      title: 'Mehr Kontext für Entscheidungsträger und Teams',
      description:
        'Drei vertiefende Seiten zu Triage, Workflow und Pilotansatz rund um Pflegesignale.',
      linkLabel: 'Seite lesen',
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
          title: 'Ver antes qué requiere atención',
          description: 'Qué señales llevan antes a un seguimiento claro y dónde una explicación más clara cambia decisiones.',
        },
        {
          title: 'Seguimiento y responsabilidad más claros',
          description: 'Cómo el estado, la responsabilidad y la escalada reducen el esfuerzo de interpretación en la operación diaria.',
        },
        {
          title: 'Mejor reconstrucción para la revisión',
          description: 'Qué preguntas de auditoría y evaluación se responden mejor con una evolución del estado y una reconstrucción más claras.',
        },
      ],
    },
    hub: {
      eyebrow: 'Lecturas complementarias',
      title: 'Más contexto para responsables y equipos',
      description:
        'Tres páginas de profundidad sobre triaje, flujo de trabajo y enfoque piloto en torno a las señales asistenciales.',
      linkLabel: 'Leer página',
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
        'Waarom context en prioritering nodig zijn om van een binnenkomend signaal tot duidelijke en goed uitlegbare opvolging te komen.',
      eyebrow: 'Verdieping',
      intro:
        'Een binnenkomend zorgsignaal wordt pas werkbaar als duidelijk is waarom het aandacht vraagt, welke urgentie logisch is en welke opvolging daarbij past. Velvoix helpt teams om signalen niet als losse meldingen te behandelen, maar als zorgsituaties met context, prioriteit en een uitlegbare vervolgstap.',
      summary:
        'Uitlegbare zorgtriage gaat niet alleen over sneller prioriteren. Het gaat om een duidelijke vertaling van signaal naar zorgactie, zodat teams begrijpen waarom iets aandacht vraagt en achteraf kunnen reconstrueren waarom een keuze logisch was.',
      points: [
        'Waarom een melding zonder context te weinig zegt',
        'Hoe Velvoix context, urgentie en opvolging bij elkaar brengt',
        'Waarom uitlegbaarheid belangrijk is voor teams, leiding en evaluatie',
      ],
      sections: [
        {
          title: 'Waarom een zorgsignaal context nodig heeft',
          paragraphs: [
            'Een melding laat vaak alleen zien dat er iets gebeurt. Voor goede opvolging is dat meestal niet genoeg. Dezelfde melding kan in de ene situatie laag risico zijn, maar in een andere situatie direct aandacht vragen.',
            'Daarom is context belangrijk: wat voor signaal is het, wat gebeurde ervoor, is er sprake van herhaling, is er al opvolging gestart en past het bij wat bekend is over de situatie? Zonder die context blijft het team zelf onder tijdsdruk interpreteren.',
          ],
          bullets: [
            'Een los signaal zegt weinig over urgentie',
            'Herhaling, timing en situatie kunnen de betekenis veranderen',
            'Teams verliezen tijd wanneer zij telkens opnieuw moeten duiden',
          ],
        },
        {
          title: 'Wat Velvoix toevoegt aan een binnenkomend signaal',
          paragraphs: [
            'Velvoix kijkt naar een zorgsignaal als onderdeel van een bredere situatie. Niet alleen de melding telt, maar ook de context eromheen: recente signalen, opvolgingsstatus, verantwoordelijkheid en relevante procesinformatie.',
            'Daarmee ontstaat een duidelijker beeld van wat aandacht vraagt. De triage wordt niet alleen zichtbaar als prioriteit, maar ook als uitleg: waarom vraagt dit signaal nu aandacht en welke vervolgstap ligt voor de hand?',
          ],
          bullets: [
            'Signaal en context worden samen bekeken',
            'Urgentie wordt beter onderbouwd',
            'De vervolgstap wordt concreter voor het team',
          ],
        },
        {
          title: 'Waarom uitlegbaarheid belangrijk is',
          paragraphs: [
            'In de zorg is het niet genoeg dat een systeem iets markeert als belangrijk. Teams moeten kunnen begrijpen waarom een signaal aandacht vraagt. Dat maakt opvolging rustiger, beter bespreekbaar en minder afhankelijk van losse interpretatie.',
            'Uitlegbaarheid helpt ook leidinggevenden en kwaliteitsrollen. Zij kunnen beter terugzien welke signalen speelden, waarom een bepaalde prioriteit logisch was en hoe de opvolging is verlopen.',
          ],
          bullets: [
            'Teams zien niet alleen dát iets aandacht vraagt, maar ook waarom',
            'Keuzes worden beter bespreekbaar tijdens overdracht en evaluatie',
            'Leiding en kwaliteitsrollen krijgen meer houvast bij terugkijken',
          ],
        },
        {
          title: 'Van duiding naar eerste opvolging',
          paragraphs: [
            'De waarde van triage zit niet alleen in het bepalen van urgentie. Als duidelijk is waarom een signaal aandacht vraagt, moet het team ook zien welke eerste vervolgstap logisch is.',
            'Deze pagina gaat vooral over duiding. De verdere organisatie van status, eigenaarschap, escalatie en afronding hoort bij de zorgworkflow.',
          ],
          bullets: [
            'De duiding wordt vertaald naar een eerste vervolgstap',
            'Teams zien waarom die stap bij het signaal past',
            'Verdere opvolging kan daarna in de workflow zichtbaar blijven',
          ],
        },
        {
          title: 'Wat dit betekent voor evaluatie en kwaliteit',
          paragraphs: [
            'Wanneer signaal, context en eerste uitleg verbonden blijven, wordt terugkijken eenvoudiger. Niet alleen wat er gebeurde is zichtbaar, maar ook waarom iets aandacht kreeg.',
            'Dat helpt bij evaluatie, kwaliteitsgesprekken en het verbeteren van processen. De focus ligt niet op meer registratie, maar op beter begrijpen hoe zorgsignalen tot een passende eerste actie komen.',
          ],
          bullets: [
            'Terugkijken wordt eenvoudiger omdat signaal en uitleg verbonden blijven',
            'Teams kunnen beter leren van terugkerende situaties',
            'Kwaliteitsgesprekken krijgen meer concrete context',
          ],
        },
      ],
      ctaTitle: 'Bespreek uitlegbare triage in een pilot',
      ctaBody:
        'Gebruik een eerste verkenning om te toetsen bij welke zorgsignalen extra context, uitlegbaarheid en duidelijke opvolging het meeste verschil maken.',
      ctaLabel: 'Start pilotverkenning',
      meta: {
        title: 'Uitlegbare zorgtriage voor zorgsignalen | Velvoix',
        description:
          'Lees hoe uitlegbare zorgtriage zorgsignalen vertaalt naar duidelijke opvolging met context, urgentie en heldere uitleg.',
        ogTitle: 'Uitlegbare zorgtriage voor zorgsignalen | Velvoix',
        ogDescription:
          'Velvoix laat zien hoe context en triage zorgsignalen omzetten in duidelijke en goed uitlegbare opvolging.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'zorgworkflow-en-reconstructie',
      title: 'Zorgworkflow, escalatie en reconstructie',
      cardDescription:
        'Hoe eigenaarschap, status, escalatie, overdracht en reconstructie opvolging bestuurbaar houden.',
      eyebrow: 'Verdieping',
      intro:
        'Een zorgsignaal is pas goed afgerond wanneer duidelijk blijft wie verantwoordelijk is, wat de status is, wanneer escalatie nodig wordt en hoe later terug te zien is wat er is gebeurd. Velvoix helpt opvolging te organiseren als een navolgbare zorgworkflow, niet als een losse taak naast het werk.',
      summary:
        'Goede zorgworkflow draait niet alleen om taken verdelen. Het gaat om zicht op verantwoordelijkheid, voortgang, escalatie en reconstructie, zodat teams weten wat openstaat, wat vastloopt en wat achteraf herleidbaar moet blijven.',
      points: [
        'Hoe een signaal verandert in opvolgbaar werk',
        'Waarom escalatie en status samen horen',
        'Hoe reconstructie helpt bij overdracht, evaluatie en kwaliteit',
      ],
      sections: [
        {
          title: 'Van melding naar opvolgbaar werk',
          paragraphs: [
            'Wanneer duidelijk is dat een signaal aandacht vraagt, begint het operationele werk: iemand moet het oppakken, de status moet zichtbaar blijven en de actie moet kunnen worden afgerond.',
            'Daarmee verschuift de vraag van wat dit signaal betekent naar hoe opvolging bestuurbaar blijft totdat het werk klaar is.',
          ],
          bullets: [
            'Een signaal krijgt een herkenbare opvolglijn',
            'Openstaande acties blijven zichtbaar',
            'Afronding wordt onderdeel van hetzelfde verloop',
          ],
        },
        {
          title: 'Eigenaarschap en status zichtbaar houden',
          paragraphs: [
            'In drukke zorgomgevingen raakt opvolging snel versnipperd. Daarom moet zichtbaar blijven wie aan zet is, welke actie loopt en of een melding nog openstaat.',
            'Dat helpt bij overdracht en voorkomt dat teams opnieuw moeten uitzoeken wat al is gebeurd.',
          ],
          bullets: [
            'Teams zien wie verantwoordelijk is voor opvolging',
            'Statusverloop blijft bruikbaar tijdens overdracht',
            'Open, lopende en afgeronde acties blijven onderscheidbaar',
          ],
        },
        {
          title: 'Wanneer escalatie nodig wordt',
          paragraphs: [
            'Escalatie is niet alleen een extra waarschuwing. Het is een manier om zichtbaar te maken dat opvolging opnieuw aandacht nodig heeft.',
            'Dat kan gebeuren omdat een situatie verandert, omdat actie uitblijft of omdat verantwoordelijkheid opnieuw duidelijk moet worden gemaakt.',
          ],
          bullets: [
            'Opvolging blijft niet stilletjes liggen',
            'Veranderende situaties krijgen opnieuw aandacht',
            'Verantwoordelijkheid kan opnieuw zichtbaar worden gemaakt',
          ],
        },
        {
          title: 'Reconstructie zonder extra ruis',
          paragraphs: [
            'Reconstructie moet helpen om terug te kijken zonder extra administratieve last. Het gaat om de lijn van signaal, status, actie, overdracht en afronding.',
            'Zo wordt duidelijker wat gebeurde, waar opvolging soepel liep en waar een proces sterker kan.',
          ],
          bullets: [
            'Signaal, status en actie blijven in samenhang zichtbaar',
            'Overdracht en afronding zijn beter terug te vinden',
            'Procesverbetering start vanuit concrete gebeurtenissen',
          ],
        },
        {
          title: 'Wat dit betekent voor teams en leiding',
          paragraphs: [
            'Teams krijgen meer overzicht over openstaande opvolging en hoeven minder vaak opnieuw te reconstrueren wat al bekend is.',
            'Leiding en kwaliteitsrollen krijgen betere context om situaties te evalueren, patronen te herkennen en processen gericht te verbeteren.',
          ],
          bullets: [
            'Teams houden overzicht over openstaande opvolging',
            'Leiding ziet beter waar processen vastlopen',
            'Kwaliteitsgesprekken krijgen bruikbare praktijkcontext',
          ],
        },
      ],
      ctaTitle: 'Verken workflow en reconstructie in uw organisatie',
      ctaBody:
        'Gebruik een pilot om te beoordelen hoe statusverloop, eigenaarschap, escalatie en reconstructie in uw werkwijze het meeste opleveren.',
      ctaLabel: 'Bespreek samenwerkingsroute',
      meta: {
        title: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        description:
          'Lees hoe Velvoix zorgsignalen omzet in opvolgbare workflow met status, eigenaarschap, escalatie en reconstructie.',
        ogTitle: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        ogDescription:
          'Velvoix verbindt status, eigenaarschap, escalatie en reconstructie in een navolgbare zorgworkflow.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilotaanpak-zorgsignalen',
      title: 'Pilotaanpak voor zorgsignalen en opvolging',
      cardDescription:
        'Hoe een eerste pilot praktische waarde, procesfit en vervolgstappen onderbouwd kan toetsen.',
      eyebrow: 'Pilotaanpak',
      intro:
        'Een goede pilot is geen algemene demo, maar een gerichte verkenning van praktische aansluiting, opvolging en proceswaarde. Velvoix helpt om samen te toetsen waar extra context, duidelijke opvolging en betere reconstructie in uw organisatie het meeste verschil kunnen maken.',
      summary:
        'Een eerste pilot moet duidelijk maken welke signalen relevant zijn, welke teams ermee werken, hoe opvolging past in de dagelijkse praktijk en welke uitkomsten nodig zijn om een volgende stap goed te onderbouwen.',
      points: [
        'Welke vragen een eerste pilot moet beantwoorden',
        'Welke teams, signalen en processen u meeneemt',
        'Hoe u uitkomst en vervolgstap bepaalt',
      ],
      sections: [
        {
          title: 'Wat een eerste pilot moet beantwoorden',
          paragraphs: [
            'Een pilot moet niet alles tegelijk bewijzen. De kern is of Velvoix in deze zorgcontext helpt om signalen beter te duiden, opvolging duidelijker te organiseren en achteraf beter te reconstrueren.',
            'Zo ontstaat een eerlijk beeld van praktische waarde zonder te vroeg brede uitrolclaims te doen.',
          ],
          bullets: [
            'Welke signalen vragen extra context',
            'Waar loopt opvolging nu vast',
            'Welke informatie is nodig om terug te kijken',
          ],
        },
        {
          title: 'Welke setting u meeneemt',
          paragraphs: [
            'De waarde van een pilot hangt af van de gekozen zorgcontext: type signalen, teambezetting, apparaten, bestaande processen en overdrachtsmomenten.',
            'Daarom moeten scope en verwachtingen vooraf scherp zijn, zodat de pilot niet te breed wordt en de uitkomsten bruikbaar blijven.',
          ],
          bullets: [
            'Type zorgsignalen en situaties',
            'Betrokken teams en overdrachtsmomenten',
            'Bestaande processen, apparaten en systemen',
          ],
        },
        {
          title: 'Hoe succes eruit kan zien',
          paragraphs: [
            'Een pilot hoeft niet direct volledige uitrol te bewijzen. Belangrijker is of teams sneller begrijpen wat aandacht vraagt, of opvolging beter zichtbaar blijft en of evaluatie meer concrete context krijgt.',
            'Succes zit dus in bruikbare signalen voor besluitvorming: wat werkt, wat moet worden aangepast en welke waarde is concreet zichtbaar?',
          ],
          bullets: [
            'Snellere duiding van relevante signalen',
            'Duidelijker zicht op openstaande opvolging',
            'Betere context voor evaluatie',
          ],
        },
        {
          title: 'Wat u tijdens de pilot leert',
          paragraphs: [
            'Een goede pilot laat zien waar Velvoix past, waar processen moeten worden afgestemd en welke integraties of werkwijzen later belangrijk worden.',
            'Dat voorkomt te vroege conclusies en maakt vervolgstappen concreter voor teams, leiding en eventuele partners.',
          ],
          bullets: [
            'Waar de aansluiting met de praktijk sterk is',
            'Welke procesafspraken extra aandacht vragen',
            'Welke vervolgstappen realistisch zijn',
          ],
        },
        {
          title: 'Hoe u vervolg bepaalt',
          paragraphs: [
            'Na de pilot moet helder zijn of een volgende fase logisch is, welke onderdelen waardevol zijn en welke randvoorwaarden nodig zijn voor bredere inzet.',
            'De uitkomst is dus geen algemene belofte, maar een onderbouwde beslissing over procesfit, waarde en vervolgstap.',
          ],
          bullets: [
            'Welke waarde in de praktijk zichtbaar is',
            'Welke randvoorwaarden voor vervolg nodig zijn',
            'Welke beslissing na de pilot goed te onderbouwen is',
          ],
        },
      ],
      ctaTitle: 'Gebruik de pilot om echte fit te beoordelen',
      ctaBody:
        'Bespreek vooraf welke signalen, teams en uitkomsten in uw organisatie bepalend zijn voor een volgende stap.',
      ctaLabel: 'Plan een verkenning',
      meta: {
        title: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        description:
          'Lees hoe een eerste pilot met Velvoix zorgsignalen, opvolging en reconstructie gericht kan valideren in de eigen zorgpraktijk.',
        ogTitle: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        ogDescription:
          'Velvoix beschrijft hoe een eerste pilot praktische waarde, procesfit en vervolgstappen in zorgcontext kan toetsen.',
      },
    },
  ],
  en: [
    {
      id: 'explainable-triage',
      slug: 'explainable-care-triage',
      title: 'Explainable care triage for care signals',
      cardDescription:
        'Why context and triage are needed to move from an incoming signal to clear, well-grounded follow-up.',
      eyebrow: 'Deep dive',
      intro:
        'An incoming care signal only becomes actionable when it is clear why it needs attention, which level of urgency makes sense and what follow-up should happen next. Velvoix helps teams treat signals not as isolated alerts, but as care situations with context, priority and an explainable next step.',
      summary:
        'Explainable care triage is not only about prioritising faster. It is about translating a signal into a clear care action, so teams understand why something needs attention and can reconstruct afterwards why a decision made sense.',
      points: [
        'Why an alert without context says too little',
        'How Velvoix brings context, urgency and follow-up together',
        'Why explainability matters for teams, leadership and evaluation',
      ],
      sections: [
        {
          title: 'Why a care signal needs context',
          paragraphs: [
            'An alert often only shows that something has happened. For effective follow-up, that is usually not enough. The same alert may be low risk in one situation and require immediate attention in another.',
            'Context is therefore essential: what type of signal is it, what happened before it, is there repetition, has follow-up already started and does it fit what is known about the situation? Without that context, the team still has to interpret under time pressure.',
          ],
          bullets: [
            'An isolated signal says little about urgency',
            'Repetition, timing and situation can change the meaning',
            'Teams lose time when they have to interpret the same type of event again and again',
          ],
        },
        {
          title: 'What Velvoix adds to an incoming signal',
          paragraphs: [
            'Velvoix looks at a care signal as part of a broader situation. The alert itself matters, but so does the context around it: recent signals, follow-up status, responsibility and relevant process information.',
            'This creates a clearer picture of what needs attention. Triage becomes visible not only as a priority, but also as an explanation: why does this signal need attention now, and what next step is most logical?',
          ],
          bullets: [
            'Signal and context are considered together',
            'Urgency is better grounded',
            'The next step becomes more concrete for the team',
          ],
        },
        {
          title: 'Why explainability matters',
          paragraphs: [
            'In care, it is not enough for a system to mark something as important. Teams need to understand why a signal needs attention. That makes follow-up calmer, easier to discuss and less dependent on individual interpretation.',
            'Explainability also supports managers and quality roles. They can look back more clearly at which signals were present, why a certain priority made sense and how follow-up progressed.',
          ],
          bullets: [
            'Teams see not only that something needs attention, but why',
            'Decisions become easier to discuss during handover and evaluation',
            'Leadership and quality roles have more concrete context when reviewing',
          ],
        },
        {
          title: 'From interpretation to first follow-up',
          paragraphs: [
            'The value of triage is not only in determining urgency. Once it is clear why a signal needs attention, the team also needs to see which first next step makes sense.',
            'This page focuses on interpretation. The wider organisation of status, ownership, escalation and closure belongs to the care workflow.',
          ],
          bullets: [
            'Interpretation is translated into a first next step',
            'Teams see why that step fits the signal',
            'Further follow-up can then remain visible in the workflow',
          ],
        },
        {
          title: 'What this means for evaluation and quality',
          paragraphs: [
            'When signal, context and first explanation remain connected, reviewing afterwards becomes easier. It is visible not only what happened, but also why something needed attention.',
            'That supports evaluation, quality conversations and process improvement. The focus is not on more documentation, but on better understanding how care signals lead to an appropriate first action.',
          ],
          bullets: [
            'Review is easier because signal and explanation remain connected',
            'Teams can learn more effectively from recurring situations',
            'Quality conversations get more concrete context',
          ],
        },
      ],
      ctaTitle: 'Explore explainable triage in a pilot',
      ctaBody:
        'Use an initial exploration to test which care signals benefit most from additional context, explainability and clear follow-up.',
      ctaLabel: 'Start a pilot conversation',
      meta: {
        title: 'Explainable care triage for care signals | Velvoix',
        description:
          'Learn how explainable care triage turns care signals into clear follow-up with context, urgency and clear reasoning.',
        ogTitle: 'Explainable care triage for care signals | Velvoix',
        ogDescription:
          'Velvoix shows how context and triage turn care signals into clear, well-grounded follow-up.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'care-workflow-and-reconstruction',
      title: 'Care workflow, escalation and reconstruction',
      cardDescription:
        'How ownership, status, escalation, handover and reconstruction keep follow-up manageable.',
      eyebrow: 'Deep dive',
      intro:
        'A care signal is only properly closed when it remains clear who owns it, what its status is, when escalation is needed and how the course of events can be reviewed later. Velvoix helps organise follow-up as a traceable care workflow, not as a separate task alongside the work.',
      summary:
        'A strong care workflow is not only about assigning tasks. It is about visibility of responsibility, progress, escalation and reconstruction, so teams know what is open, what is stuck and what needs to remain traceable afterwards.',
      points: [
        'How a signal becomes follow-up work',
        'Why escalation and status belong together',
        'How reconstruction supports handover, evaluation and quality',
      ],
      sections: [
        {
          title: 'From alert to follow-up work',
          paragraphs: [
            'Once it is clear that a signal needs attention, the operational work begins: someone has to pick it up, status has to remain visible and the action has to be closed.',
            'The question shifts from what this signal means to how follow-up remains manageable until the work is done.',
          ],
          bullets: [
            'A signal gets a recognisable follow-up path',
            'Open actions remain visible',
            'Closure becomes part of the same flow',
          ],
        },
        {
          title: 'Keeping ownership and status visible',
          paragraphs: [
            'In busy care settings, follow-up can easily become fragmented. It must remain visible who is responsible, which action is in progress and whether a signal is still open.',
            'That supports handover and prevents teams from having to reconstruct again what has already happened.',
          ],
          bullets: [
            'Teams see who owns the follow-up',
            'Status progression remains useful during handover',
            'Open, active and closed actions remain distinguishable',
          ],
        },
        {
          title: 'When escalation becomes necessary',
          paragraphs: [
            'Escalation is not just an extra warning. It is a way to make visible that follow-up needs renewed attention.',
            'That may happen because a situation changes, because action is delayed or because responsibility needs to be made clear again.',
          ],
          bullets: [
            'Follow-up does not quietly stall',
            'Changing situations receive renewed attention',
            'Responsibility can be made visible again',
          ],
        },
        {
          title: 'Reconstruction without extra noise',
          paragraphs: [
            'Reconstruction should help teams look back without adding administrative burden. It is about the line from signal to status, action, handover and closure.',
            'This makes it clearer what happened, where follow-up worked well and where a process can be strengthened.',
          ],
          bullets: [
            'Signal, status and action remain visible together',
            'Handover and closure are easier to find afterwards',
            'Process improvement starts from concrete events',
          ],
        },
        {
          title: 'What this means for teams and leadership',
          paragraphs: [
            'Teams get a clearer view of open follow-up and need to reconstruct less often what is already known.',
            'Leadership and quality roles get better context to evaluate situations, recognise patterns and improve processes in a targeted way.',
          ],
          bullets: [
            'Teams keep sight of open follow-up',
            'Leadership can see more clearly where processes stall',
            'Quality conversations get usable practice context',
          ],
        },
      ],
      ctaTitle: 'Explore workflow and reconstruction in your setting',
      ctaBody:
        'Use a pilot to assess where status flow, ownership, escalation and reconstruction create the most operational value for your teams.',
      ctaLabel: 'Discuss collaboration',
      meta: {
        title: 'Care workflow, escalation and reconstruction | Velvoix',
        description:
          'Read how Velvoix turns care signals into a manageable workflow with status, ownership, escalation and traceable reconstruction.',
        ogTitle: 'Care workflow, escalation and reconstruction | Velvoix',
        ogDescription:
          'Velvoix connects status, ownership, escalation and reconstruction in one traceable care workflow.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilot-approach-care-signals',
      title: 'Pilot approach for care signals and follow-up',
      cardDescription:
        'How a first pilot can test practical value, process fit and next steps in a grounded way.',
      eyebrow: 'Pilot approach',
      intro:
        'A strong pilot is not a generic demo, but a focused exploration of practical fit, follow-up and process value. Velvoix helps you test where additional context, clearer follow-up and better reconstruction can make the most difference in your organisation.',
      summary:
        'A first pilot should clarify which signals are relevant, which teams work with them, how follow-up fits daily practice and which outcomes are needed to ground a next step.',
      points: [
        'Which questions a first pilot should answer',
        'Which teams, signals and processes to include',
        'How to evaluate outcomes and the next step',
      ],
      sections: [
        {
          title: 'What a first pilot should answer',
          paragraphs: [
            'A pilot should not try to prove everything at once. The core question is whether Velvoix helps in this care context to interpret signals better, organise follow-up more clearly and reconstruct more effectively afterwards.',
            'That creates an honest picture of practical value without making broad rollout claims too early.',
          ],
          bullets: [
            'Which signals need additional context',
            'Where follow-up currently gets stuck',
            'Which information is needed for review',
          ],
        },
        {
          title: 'Which setting to include',
          paragraphs: [
            'The value of a pilot depends on the chosen care context: signal types, staffing, devices, existing processes and handover moments.',
            'Scope and expectations therefore need to be clear upfront, so the pilot does not become too broad and the outcomes remain usable.',
          ],
          bullets: [
            'Types of care signals and situations',
            'Participating teams and handover moments',
            'Existing processes, devices and systems',
          ],
        },
        {
          title: 'What success can look like',
          paragraphs: [
            'A pilot does not need to prove a full rollout immediately. More important is whether teams understand faster what needs attention, whether follow-up remains more visible and whether evaluation gets more concrete context.',
            'Success is therefore about useful signals for decision-making: what works, what needs adjustment and which value is concretely visible?',
          ],
          bullets: [
            'Faster interpretation of relevant signals',
            'Clearer visibility of open follow-up',
            'Better context for evaluation',
          ],
        },
        {
          title: 'What you learn during the pilot',
          paragraphs: [
            'A good pilot shows where Velvoix fits, where processes need alignment and which integrations or ways of working may matter later.',
            'That avoids premature conclusions and makes next steps more concrete for teams, leadership and potential partners.',
          ],
          bullets: [
            'Where fit with daily practice is strong',
            'Which process agreements need attention',
            'Which next steps are realistic',
          ],
        },
        {
          title: 'How to decide on the next step',
          paragraphs: [
            'After the pilot, it should be clear whether a next phase is logical, which parts are valuable and which conditions are needed for broader use.',
            'The outcome is not a general promise, but a grounded decision about process fit, value and the next step.',
          ],
          bullets: [
            'Which value is visible in practice',
            'Which conditions are needed for a next phase',
            'Which decision can be grounded after the pilot',
          ],
        },
      ],
      ctaTitle: 'Use the pilot to assess real fit',
      ctaBody:
        'Discuss upfront which signals, teams and outcomes in your setting should determine the next step.',
      ctaLabel: 'Plan an initial conversation',
      meta: {
        title: 'Pilot approach for care signals and follow-up | Velvoix',
        description:
          'Learn how a first Velvoix pilot can validate care signals, follow-up and reconstruction in a focused way in your own care setting.',
        ogTitle: 'Pilot approach for care signals and follow-up | Velvoix',
        ogDescription:
          'Velvoix outlines how a first pilot can test practical value, process fit and next steps in a care context.',
      },
    },
  ],
  de: [
    {
      id: 'explainable-triage',
      slug: 'erklaerbare-pflege-triage',
      title: 'Erklärbare Pflege-Triage für Pflegesignale',
      cardDescription:
        'Warum Kontext und Priorisierung nötig sind, damit aus einem eingehenden Signal ein klarer und begründbarer nächster Schritt wird.',
      eyebrow: 'Vertiefung',
      intro:
        'Ein eingehendes Pflegesignal wird erst dann handhabbar, wenn klar ist, warum es Aufmerksamkeit braucht, welche Dringlichkeit plausibel ist und welche Nachverfolgung dazu passt. Velvoix hilft Teams, Signale nicht als einzelne Meldungen zu behandeln, sondern als Pflegesituationen mit Kontext, Priorität und einem erklärbaren nächsten Schritt.',
      summary:
        'Erklärbare Pflege-Triage bedeutet nicht nur, schneller zu priorisieren. Es geht darum, ein Signal verständlich in eine Pflegehandlung zu übersetzen, damit Teams verstehen, warum etwas Aufmerksamkeit braucht, und später rekonstruieren können, warum eine Entscheidung sinnvoll war.',
      points: [
        'Warum eine Meldung ohne Kontext zu wenig aussagt',
        'Wie Velvoix Kontext, Dringlichkeit und Nachverfolgung zusammenführt',
        'Warum Erklärbarkeit für Teams, Leitung und Auswertung wichtig ist',
      ],
      sections: [
        {
          title: 'Warum ein Pflegesignal Kontext braucht',
          paragraphs: [
            'Eine Meldung zeigt oft nur, dass etwas passiert. Für gute Nachverfolgung reicht das meist nicht aus. Dieselbe Meldung kann in einer Situation ein geringes Risiko bedeuten, in einer anderen aber sofortige Aufmerksamkeit erfordern.',
            'Darum ist Kontext wichtig: Um welches Signal geht es, was geschah davor, gibt es Wiederholung, wurde bereits nachverfolgt und passt es zu dem, was über die Situation bekannt ist? Ohne diesen Kontext muss das Team unter Zeitdruck selbst interpretieren.',
          ],
          bullets: [
            'Ein einzelnes Signal sagt wenig über Dringlichkeit aus',
            'Wiederholung, Zeitpunkt und Situation können die Bedeutung verändern',
            'Teams verlieren Zeit, wenn sie immer wieder neu einordnen müssen',
          ],
        },
        {
          title: 'Was Velvoix einem eingehenden Signal hinzufügt',
          paragraphs: [
            'Velvoix betrachtet ein Pflegesignal als Teil einer größeren Situation. Nicht nur die Meldung zählt, sondern auch der Kontext darum herum: aktuelle Signale, Nachverfolgungsstatus, Verantwortung und relevante Prozessinformationen.',
            'So entsteht ein klareres Bild davon, was Aufmerksamkeit braucht. Triage wird nicht nur als Priorität sichtbar, sondern auch als Erklärung: Warum braucht dieses Signal jetzt Aufmerksamkeit, und welcher nächste Schritt liegt nahe?',
          ],
          bullets: [
            'Signal und Kontext werden gemeinsam betrachtet',
            'Dringlichkeit wird besser begründet',
            'Der nächste Schritt wird für das Team konkreter',
          ],
        },
        {
          title: 'Warum Erklärbarkeit wichtig ist',
          paragraphs: [
            'In der Pflege reicht es nicht, dass ein System etwas als wichtig markiert. Teams müssen verstehen können, warum ein Signal Aufmerksamkeit braucht. Das macht Nachverfolgung ruhiger, besser besprechbar und weniger abhängig von einzelner Interpretation.',
            'Erklärbarkeit unterstützt auch Leitung und Qualitätsrollen. Sie können besser nachvollziehen, welche Signale vorlagen, warum eine bestimmte Priorität sinnvoll war und wie die Nachverfolgung verlaufen ist.',
          ],
          bullets: [
            'Teams sehen nicht nur, dass etwas Aufmerksamkeit braucht, sondern auch warum',
            'Entscheidungen lassen sich bei Übergabe und Auswertung besser besprechen',
            'Leitung und Qualitätsrollen bekommen beim Zurückblicken mehr Orientierung',
          ],
        },
        {
          title: 'Von Einordnung zur ersten Nachverfolgung',
          paragraphs: [
            'Der Wert von Triage liegt nicht nur darin, Dringlichkeit zu bestimmen. Wenn klar ist, warum ein Signal Aufmerksamkeit braucht, muss das Team auch sehen, welcher erste nächste Schritt sinnvoll ist.',
            'Diese Seite konzentriert sich auf Einordnung. Die weitere Organisation von Status, Verantwortung, Eskalation und Abschluss gehört zum Pflege-Workflow.',
          ],
          bullets: [
            'Einordnung wird in einen ersten nächsten Schritt übersetzt',
            'Teams sehen, warum dieser Schritt zum Signal passt',
            'Weitere Nachverfolgung kann anschließend im Workflow sichtbar bleiben',
          ],
        },
        {
          title: 'Was das für Auswertung und Qualität bedeutet',
          paragraphs: [
            'Wenn Signal, Kontext und erste Erklärung verbunden bleiben, wird das Zurückblicken einfacher. Sichtbar ist nicht nur, was passiert ist, sondern auch, warum etwas Aufmerksamkeit bekam.',
            'Das unterstützt Auswertung, Qualitätsgespräche und Prozessverbesserung. Im Mittelpunkt steht nicht zusätzliche Dokumentation, sondern ein besseres Verständnis dafür, wie Pflegesignale zu einer passenden ersten Handlung führen.',
          ],
          bullets: [
            'Zurückblicken wird einfacher, weil Signal und Erklärung verbunden bleiben',
            'Teams können besser aus wiederkehrenden Situationen lernen',
            'Qualitätsgespräche erhalten konkreteren Kontext',
          ],
        },
      ],
      ctaTitle: 'Erklärbare Triage in einem Pilot prüfen',
      ctaBody:
        'Nutzen Sie eine erste Sondierung, um zu prüfen, welche Pflegesignale besonders von zusätzlichem Kontext, Erklärbarkeit und klarer Nachverfolgung profitieren.',
      ctaLabel: 'Pilot besprechen',
      meta: {
        title: 'Erklärbare Pflege-Triage für Pflegesignale | Velvoix',
        description:
          'Lesen Sie, wie erklärbare Pflege-Triage Pflegesignale mit Kontext, Dringlichkeit und einem begründbaren nächsten Schritt übersetzt.',
        ogTitle: 'Erklärbare Pflege-Triage für Pflegesignale | Velvoix',
        ogDescription:
          'Velvoix zeigt, wie Kontext und Triage Pflegesignale in klare und begründbare Nachverfolgung übersetzen.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'pflege-workflow-eskalation-rekonstruktion',
      title: 'Pflege-Workflow, Eskalation und Rekonstruktion',
      cardDescription:
        'Wie Verantwortung, Status, Eskalation, Übergabe und Rekonstruktion Nachverfolgung steuerbar halten.',
      eyebrow: 'Vertiefung',
      intro:
        'Ein Pflegesignal ist erst dann gut abgeschlossen, wenn klar bleibt, wer verantwortlich ist, welchen Status es hat, wann Eskalation nötig wird und wie der Verlauf später nachvollzogen werden kann. Velvoix hilft, Nachverfolgung als nachvollziehbaren Pflege-Workflow zu organisieren, nicht als separate Aufgabe neben der Arbeit.',
      summary:
        'Ein tragfähiger Pflege-Workflow bedeutet nicht nur, Aufgaben zu verteilen. Es geht um Sichtbarkeit von Verantwortung, Fortschritt, Eskalation und Rekonstruktion, damit Teams wissen, was offen ist, was stockt und was später nachvollziehbar bleiben muss.',
      points: [
        'Wie ein Signal zu nachverfolgbarem Arbeitsfluss wird',
        'Warum Eskalation und Status zusammengehören',
        'Wie Rekonstruktion Übergabe, Auswertung und Qualität unterstützt',
      ],
      sections: [
        {
          title: 'Von der Meldung zu nachverfolgbarem Arbeiten',
          paragraphs: [
            'Wenn klar ist, dass ein Signal Aufmerksamkeit braucht, beginnt die operative Arbeit: Jemand muss es aufnehmen, der Status muss sichtbar bleiben und die Handlung muss abgeschlossen werden können.',
            'Damit verschiebt sich die Frage von was dieses Signal bedeutet zu wie Nachverfolgung steuerbar bleibt, bis die Arbeit erledigt ist.',
          ],
          bullets: [
            'Ein Signal bekommt eine erkennbare Nachverfolgungslinie',
            'Offene Aktionen bleiben sichtbar',
            'Abschluss wird Teil desselben Verlaufs',
          ],
        },
        {
          title: 'Verantwortung und Status sichtbar halten',
          paragraphs: [
            'In arbeitsreichen Pflegeumgebungen kann Nachverfolgung schnell zerfasern. Deshalb muss sichtbar bleiben, wer verantwortlich ist, welche Aktion läuft und ob ein Signal noch offen ist.',
            'Das unterstützt Übergaben und verhindert, dass Teams erneut rekonstruieren müssen, was bereits passiert ist.',
          ],
          bullets: [
            'Teams sehen, wer die Nachverfolgung verantwortet',
            'Statusverlauf bleibt bei Übergaben nutzbar',
            'Offene, laufende und abgeschlossene Aktionen bleiben unterscheidbar',
          ],
        },
        {
          title: 'Wann Eskalation nötig wird',
          paragraphs: [
            'Eskalation ist nicht nur eine zusätzliche Warnung. Sie macht sichtbar, dass Nachverfolgung erneut Aufmerksamkeit braucht.',
            'Das kann passieren, weil sich eine Situation verändert, weil eine Handlung ausbleibt oder weil Verantwortung erneut klar gemacht werden muss.',
          ],
          bullets: [
            'Nachverfolgung bleibt nicht unbemerkt liegen',
            'Veränderte Situationen erhalten erneut Aufmerksamkeit',
            'Verantwortung kann wieder sichtbar gemacht werden',
          ],
        },
        {
          title: 'Rekonstruktion ohne zusätzliche Unruhe',
          paragraphs: [
            'Rekonstruktion soll beim Zurückblicken helfen, ohne zusätzliche administrative Last zu erzeugen. Es geht um die Linie von Signal, Status, Handlung, Übergabe und Abschluss.',
            'So wird klarer, was passiert ist, wo Nachverfolgung gut lief und wo ein Prozess stärker werden kann.',
          ],
          bullets: [
            'Signal, Status und Handlung bleiben im Zusammenhang sichtbar',
            'Übergabe und Abschluss sind später leichter auffindbar',
            'Prozessverbesserung beginnt bei konkreten Ereignissen',
          ],
        },
        {
          title: 'Was das für Teams und Leitung bedeutet',
          paragraphs: [
            'Teams bekommen mehr Übersicht über offene Nachverfolgung und müssen seltener neu rekonstruieren, was bereits bekannt ist.',
            'Leitung und Qualitätsrollen erhalten bessere Kontextinformationen, um Situationen auszuwerten, Muster zu erkennen und Prozesse gezielt zu verbessern.',
          ],
          bullets: [
            'Teams behalten offene Nachverfolgung besser im Blick',
            'Leitung erkennt klarer, wo Prozesse stocken',
            'Qualitätsgespräche erhalten nutzbaren Praxiskontext',
          ],
        },
      ],
      ctaTitle: 'Workflow und Rekonstruktion in Ihrer Umgebung prüfen',
      ctaBody:
        'Nutzen Sie einen Pilot, um zu bewerten, wo Statusverlauf, Verantwortung, Eskalation und Rekonstruktion für Ihre Teams den größten praktischen Nutzen bringen.',
      ctaLabel: 'Gespräch planen',
      meta: {
        title: 'Pflege-Workflow, Eskalation und Rekonstruktion | Velvoix',
        description:
          'Lesen Sie, wie Velvoix Pflegesignale in steuerbaren Workflow mit Status, Verantwortung, Eskalation und nachvollziehbarer Rekonstruktion übersetzt.',
        ogTitle: 'Pflege-Workflow, Eskalation und Rekonstruktion | Velvoix',
        ogDescription:
          'Velvoix verbindet Status, Verantwortung, Eskalation und Rekonstruktion in einem nachvollziehbaren Pflege-Workflow.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilotansatz-pflegesignale',
      title: 'Pilotansatz für Pflegesignale und Nachverfolgung',
      cardDescription:
        'Wie ein erster Pilot praktischen Nutzen, Prozesspassung und nächste Schritte fundiert prüfen kann.',
      eyebrow: 'Pilotansatz',
      intro:
        'Ein guter Pilot ist keine allgemeine Demo, sondern eine gezielte Prüfung von praktischer Passung, Nachverfolgung und Prozessnutzen. Velvoix hilft zu prüfen, wo zusätzlicher Kontext, klarere Nachverfolgung und bessere Rekonstruktion in Ihrer Organisation den größten Unterschied machen können.',
      summary:
        'Ein erster Pilot sollte klären, welche Signale relevant sind, welche Teams damit arbeiten, wie Nachverfolgung in den Alltag passt und welche Ergebnisse eine nächste Entscheidung begründen.',
      points: [
        'Welche Fragen ein erster Pilot beantworten sollte',
        'Welche Teams, Signale und Prozesse einbezogen werden',
        'Wie Ergebnisse und nächste Schritte bewertet werden',
      ],
      sections: [
        {
          title: 'Was ein erster Pilot beantworten sollte',
          paragraphs: [
            'Ein Pilot sollte nicht alles auf einmal beweisen. Im Kern geht es darum, ob Velvoix in diesem Pflegekontext hilft, Signale besser einzuordnen, Nachverfolgung klarer zu organisieren und später besser zu rekonstruieren.',
            'So entsteht ein ehrliches Bild des praktischen Nutzens, ohne zu früh weitreichende Rollout-Aussagen zu machen.',
          ],
          bullets: [
            'Welche Signale zusätzlichen Kontext brauchen',
            'Wo Nachverfolgung heute stockt',
            'Welche Informationen für das Zurückblicken nötig sind',
          ],
        },
        {
          title: 'Welche Umgebung einbezogen werden sollte',
          paragraphs: [
            'Der Wert eines Piloten hängt von der gewählten Pflegeumgebung ab: Signaltypen, Teambelegung, Geräte, bestehende Prozesse und Übergabemomente.',
            'Umfang und Erwartungen sollten deshalb vorher klar sein, damit der Pilot nicht zu breit wird und die Ergebnisse nutzbar bleiben.',
          ],
          bullets: [
            'Arten von Pflegesignalen und Situationen',
            'Beteiligte Teams und Übergabemomente',
            'Bestehende Prozesse, Geräte und Systeme',
          ],
        },
        {
          title: 'Wie Erfolg aussehen kann',
          paragraphs: [
            'Ein Pilot muss nicht sofort einen vollständigen Rollout beweisen. Wichtiger ist, ob Teams schneller verstehen, was Aufmerksamkeit braucht, ob Nachverfolgung sichtbarer bleibt und ob Auswertung konkreteren Kontext erhält.',
            'Erfolg zeigt sich also in brauchbaren Signalen für Entscheidungen: Was funktioniert, was muss angepasst werden und welcher Nutzen ist konkret sichtbar?',
          ],
          bullets: [
            'Schnellere Einordnung relevanter Signale',
            'Klarerer Blick auf offene Nachverfolgung',
            'Besserer Kontext für Auswertung',
          ],
        },
        {
          title: 'Was Sie während des Piloten lernen',
          paragraphs: [
            'Ein guter Pilot zeigt, wo Velvoix passt, wo Prozesse abgestimmt werden müssen und welche Integrationen oder Arbeitsweisen später wichtig werden.',
            'Das verhindert vorschnelle Schlussfolgerungen und macht nächste Schritte für Teams, Leitung und mögliche Partner konkreter.',
          ],
          bullets: [
            'Wo die Passung zur Praxis stark ist',
            'Welche Prozessabsprachen Aufmerksamkeit brauchen',
            'Welche nächsten Schritte realistisch sind',
          ],
        },
        {
          title: 'Wie über den nächsten Schritt entschieden wird',
          paragraphs: [
            'Nach dem Pilot sollte klar sein, ob eine nächste Phase sinnvoll ist, welche Teile wertvoll sind und welche Voraussetzungen für breitere Nutzung nötig werden.',
            'Das Ergebnis ist keine allgemeine Zusage, sondern eine begründete Entscheidung über Prozesspassung, Nutzen und nächsten Schritt.',
          ],
          bullets: [
            'Welcher Nutzen in der Praxis sichtbar ist',
            'Welche Voraussetzungen für eine nächste Phase nötig sind',
            'Welche Entscheidung nach dem Pilot gut begründet werden kann',
          ],
        },
      ],
      ctaTitle: 'Den Pilot nutzen, um echte Passung zu prüfen',
      ctaBody:
        'Besprechen Sie vorab, welche Signale, Teams und Ergebnisse in Ihrer Umgebung über den nächsten Schritt entscheiden.',
      ctaLabel: 'Gespräch planen',
      meta: {
        title: 'Pilotansatz für Pflegesignale und Nachverfolgung | Velvoix',
        description:
          'Lesen Sie, wie ein erster Velvoix-Pilot Pflegesignale, Nachverfolgung und Rekonstruktion gezielt in Ihrer eigenen Pflegeumgebung validieren kann.',
        ogTitle: 'Pilotansatz für Pflegesignale und Nachverfolgung | Velvoix',
        ogDescription:
          'Velvoix beschreibt, wie ein erster Pilot praktischen Nutzen, Prozesspassung und nächste Schritte im Pflegekontext prüfen kann.',
      },
    },
  ],
  es: [
    {
      id: 'explainable-triage',
      slug: 'triaje-asistencial-explicable',
      title: 'Triaje asistencial explicable para señales asistenciales',
      cardDescription:
        'Por qué se necesitan contexto y priorización para pasar de una señal entrante a un siguiente paso claro y defendible.',
      eyebrow: 'Profundización',
      intro:
        'Una señal asistencial entrante solo se vuelve operativa cuando queda claro por qué requiere atención, qué urgencia tiene sentido y qué seguimiento encaja mejor. Velvoix ayuda a los equipos a tratar las señales no como alertas aisladas, sino como situaciones asistenciales con contexto, prioridad y un siguiente paso explicable.',
      summary:
        'El triaje asistencial explicable no consiste solo en priorizar más rápido. Consiste en traducir una señal en una acción asistencial clara, para que los equipos entiendan por qué algo requiere atención y puedan reconstruir después por qué una decisión fue lógica.',
      points: [
        'Por qué una alerta sin contexto dice demasiado poco',
        'Cómo Velvoix reúne contexto, urgencia y seguimiento',
        'Por qué la explicabilidad importa para equipos, dirección y evaluación',
      ],
      sections: [
        {
          title: 'Por qué una señal asistencial necesita contexto',
          paragraphs: [
            'Una alerta suele mostrar solo que algo ha ocurrido. Para un buen seguimiento, normalmente eso no basta. La misma alerta puede representar bajo riesgo en una situación y requerir atención inmediata en otra.',
            'Por eso el contexto importa: qué tipo de señal es, qué ocurrió antes, si hay repetición, si ya se inició el seguimiento y si encaja con lo que se sabe de la situación. Sin ese contexto, el equipo sigue teniendo que interpretar bajo presión.',
          ],
          bullets: [
            'Una señal aislada dice poco sobre la urgencia',
            'La repetición, el momento y la situación pueden cambiar el significado',
            'Los equipos pierden tiempo cuando tienen que volver a interpretar',
          ],
        },
        {
          title: 'Qué añade Velvoix a una señal entrante',
          paragraphs: [
            'Velvoix observa una señal asistencial como parte de una situación más amplia. No cuenta solo la alerta, sino también el contexto que la rodea: señales recientes, estado del seguimiento, responsabilidad e información de proceso relevante.',
            'Así aparece una imagen más clara de lo que requiere atención. El triaje no se muestra solo como prioridad, sino también como explicación: por qué esta señal requiere atención ahora y qué siguiente paso resulta más lógico.',
          ],
          bullets: [
            'Señal y contexto se consideran juntos',
            'La urgencia queda mejor fundamentada',
            'El siguiente paso se vuelve más concreto para el equipo',
          ],
        },
        {
          title: 'Por qué importa la explicabilidad',
          paragraphs: [
            'En la atención asistencial no basta con que un sistema marque algo como importante. Los equipos deben poder entender por qué una señal requiere atención. Eso hace que el seguimiento sea más sereno, más fácil de comentar y menos dependiente de interpretaciones aisladas.',
            'La explicabilidad también ayuda a responsables y perfiles de calidad. Pueden revisar mejor qué señales estaban presentes, por qué una prioridad determinada tenía sentido y cómo evolucionó el seguimiento.',
          ],
          bullets: [
            'Los equipos ven no solo que algo requiere atención, sino también por qué',
            'Las decisiones se comentan mejor durante el traspaso y la evaluación',
            'Dirección y calidad tienen más apoyo concreto al revisar',
          ],
        },
        {
          title: 'De la interpretación al primer seguimiento',
          paragraphs: [
            'El valor del triaje no está solo en determinar la urgencia. Cuando queda claro por qué una señal requiere atención, el equipo también necesita ver qué primer paso tiene sentido.',
            'Esta página se centra sobre todo en la interpretación. La organización posterior de estado, responsabilidad, escalada y cierre pertenece al flujo asistencial.',
          ],
          bullets: [
            'La interpretación se traduce en un primer paso',
            'Los equipos ven por qué ese paso encaja con la señal',
            'El seguimiento posterior puede permanecer visible en el flujo',
          ],
        },
        {
          title: 'Qué significa esto para evaluación y calidad',
          paragraphs: [
            'Cuando señal, contexto y primera explicación permanecen conectados, revisar después resulta más sencillo. No solo se ve qué ocurrió, sino también por qué algo recibió atención.',
            'Eso ayuda en la evaluación, las conversaciones de calidad y la mejora de procesos. El foco no está en añadir más registro, sino en entender mejor cómo las señales asistenciales conducen a una primera acción adecuada.',
          ],
          bullets: [
            'La revisión es más sencilla porque señal y explicación permanecen conectadas',
            'Los equipos pueden aprender mejor de situaciones recurrentes',
            'Las conversaciones de calidad tienen contexto más concreto',
          ],
        },
      ],
      ctaTitle: 'Evaluar el triaje explicable en un piloto',
      ctaBody:
        'Use una primera exploración para comprobar qué señales asistenciales se benefician más de contexto adicional, explicabilidad y seguimiento claro.',
      ctaLabel: 'Hablar del piloto',
      meta: {
        title: 'Triaje asistencial explicable para señales asistenciales | Velvoix',
        description:
          'Descubra cómo el triaje asistencial explicable convierte señales asistenciales en un seguimiento claro con contexto, urgencia y razonamiento defendible.',
        ogTitle: 'Triaje asistencial explicable para señales asistenciales | Velvoix',
        ogDescription:
          'Velvoix muestra cómo el contexto y el triaje convierten señales asistenciales en un seguimiento claro y defendible.',
      },
    },
    {
      id: 'workflow-reconstruction',
      slug: 'flujo-asistencial-escalada-reconstruccion',
      title: 'Flujo asistencial, escalada y reconstrucción',
      cardDescription:
        'Cómo responsabilidad, estado, escalada, traspaso y reconstrucción mantienen gestionable el seguimiento.',
      eyebrow: 'Profundización',
      intro:
        'Una señal asistencial solo queda bien cerrada cuando sigue claro quién es responsable, cuál es el estado, cuándo hace falta escalar y cómo podrá revisarse después lo ocurrido. Velvoix ayuda a organizar el seguimiento como un flujo asistencial trazable, no como una tarea separada junto al trabajo.',
      summary:
        'Un flujo asistencial sólido no trata solo de repartir tareas. Trata de mantener visibles la responsabilidad, el avance, la escalada y la reconstrucción, para que los equipos sepan qué sigue abierto, qué se bloquea y qué debe permanecer trazable después.',
      points: [
        'Cómo una señal se convierte en trabajo seguible',
        'Por qué escalada y estado deben ir juntos',
        'Cómo la reconstrucción ayuda en traspaso, evaluación y calidad',
      ],
      sections: [
        {
          title: 'De la alerta al trabajo seguible',
          paragraphs: [
            'Cuando queda claro que una señal requiere atención, empieza el trabajo operativo: alguien debe asumirla, el estado debe seguir visible y la acción debe poder cerrarse.',
            'La pregunta pasa de qué significa esta señal a cómo mantener el seguimiento gestionable hasta que el trabajo esté terminado.',
          ],
          bullets: [
            'Una señal obtiene una línea de seguimiento reconocible',
            'Las acciones abiertas permanecen visibles',
            'El cierre forma parte del mismo recorrido',
          ],
        },
        {
          title: 'Mantener visibles responsabilidad y estado',
          paragraphs: [
            'En entornos asistenciales con mucha presión, el seguimiento puede fragmentarse rápido. Por eso debe seguir visible quién es responsable, qué acción está en marcha y si una señal sigue abierta.',
            'Eso ayuda en los traspasos y evita que los equipos tengan que reconstruir otra vez lo que ya ocurrió.',
          ],
          bullets: [
            'Los equipos ven quién es responsable del seguimiento',
            'La evolución del estado sigue siendo útil durante el traspaso',
            'Acciones abiertas, activas y cerradas siguen diferenciadas',
          ],
        },
        {
          title: 'Cuándo hace falta escalar',
          paragraphs: [
            'La escalada no es solo una advertencia adicional. Es una forma de hacer visible que el seguimiento necesita atención de nuevo.',
            'Puede ocurrir porque la situación cambia, porque una acción se retrasa o porque la responsabilidad debe volver a quedar clara.',
          ],
          bullets: [
            'El seguimiento no queda detenido en silencio',
            'Las situaciones cambiantes reciben atención de nuevo',
            'La responsabilidad puede volver a hacerse visible',
          ],
        },
        {
          title: 'Reconstrucción sin ruido adicional',
          paragraphs: [
            'La reconstrucción debe ayudar a revisar sin añadir carga administrativa. Se trata de la línea que une señal, estado, acción, traspaso y cierre.',
            'Así queda más claro qué ocurrió, dónde el seguimiento funcionó bien y dónde un proceso puede reforzarse.',
          ],
          bullets: [
            'Señal, estado y acción permanecen visibles en conjunto',
            'Traspaso y cierre son más fáciles de encontrar después',
            'La mejora de procesos parte de hechos concretos',
          ],
        },
        {
          title: 'Qué significa esto para equipos y dirección',
          paragraphs: [
            'Los equipos tienen más visión sobre el seguimiento abierto y necesitan reconstruir menos veces lo que ya se sabe.',
            'Dirección y perfiles de calidad obtienen mejor contexto para evaluar situaciones, reconocer patrones y mejorar procesos de forma específica.',
          ],
          bullets: [
            'Los equipos mantienen visibilidad sobre el seguimiento abierto',
            'Dirección ve mejor dónde se bloquean los procesos',
            'Las conversaciones de calidad tienen contexto práctico útil',
          ],
        },
      ],
      ctaTitle: 'Explorar flujo y reconstrucción en su entorno',
      ctaBody:
        'Use un piloto para valorar dónde la evolución del estado, la responsabilidad, la escalada y la reconstrucción generan más valor práctico para sus equipos.',
      ctaLabel: 'Planificar una conversación',
      meta: {
        title: 'Flujo asistencial, escalada y reconstrucción | Velvoix',
        description:
          'Lea cómo Velvoix convierte señales asistenciales en un flujo gestionable con estado, responsabilidad, escalada y reconstrucción trazable.',
        ogTitle: 'Flujo asistencial, escalada y reconstrucción | Velvoix',
        ogDescription:
          'Velvoix conecta estado, responsabilidad, escalada y reconstrucción en un flujo asistencial trazable.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'enfoque-piloto-senales-asistenciales',
      title: 'Enfoque piloto para señales asistenciales y seguimiento',
      cardDescription:
        'Cómo un primer piloto puede probar valor práctico, encaje de procesos y siguientes pasos de forma fundamentada.',
      eyebrow: 'Enfoque piloto',
      intro:
        'Un buen piloto no es una demo genérica, sino una exploración enfocada del encaje práctico, el seguimiento y el valor del proceso. Velvoix ayuda a comprobar dónde el contexto adicional, un seguimiento más claro y una mejor reconstrucción pueden aportar más en su organización.',
      summary:
        'Un primer piloto debe aclarar qué señales son relevantes, qué equipos trabajan con ellas, cómo encaja el seguimiento en la práctica diaria y qué resultados hacen falta para fundamentar un siguiente paso.',
      points: [
        'Qué preguntas debe responder un primer piloto',
        'Qué equipos, señales y procesos conviene incluir',
        'Cómo valorar resultados y siguiente paso',
      ],
      sections: [
        {
          title: 'Qué debe responder un primer piloto',
          paragraphs: [
            'Un piloto no debería intentar demostrarlo todo de una vez. La pregunta central es si Velvoix ayuda en este contexto asistencial a interpretar mejor las señales, organizar el seguimiento con más claridad y reconstruir mejor después.',
            'Eso genera una visión honesta del valor práctico sin hacer demasiado pronto promesas amplias de despliegue.',
          ],
          bullets: [
            'Qué señales necesitan contexto adicional',
            'Dónde se bloquea hoy el seguimiento',
            'Qué información hace falta para revisar después',
          ],
        },
        {
          title: 'Qué entorno conviene incluir',
          paragraphs: [
            'El valor de un piloto depende del contexto asistencial elegido: tipos de señal, dotación de equipos, dispositivos, procesos existentes y momentos de traspaso.',
            'Por eso el alcance y las expectativas deben estar claros de antemano, para que el piloto no sea demasiado amplio y los resultados sigan siendo utilizables.',
          ],
          bullets: [
            'Tipos de señales asistenciales y situaciones',
            'Equipos participantes y momentos de traspaso',
            'Procesos, dispositivos y sistemas existentes',
          ],
        },
        {
          title: 'Cómo puede verse el éxito',
          paragraphs: [
            'Un piloto no tiene que demostrar de inmediato un despliegue completo. Es más importante saber si los equipos entienden antes qué requiere atención, si el seguimiento sigue más visible y si la evaluación obtiene contexto más concreto.',
            'El éxito consiste en señales útiles para decidir: qué funciona, qué debe ajustarse y qué valor se ve de forma concreta.',
          ],
          bullets: [
            'Interpretación más rápida de señales relevantes',
            'Mayor visibilidad sobre seguimiento abierto',
            'Mejor contexto para evaluación',
          ],
        },
        {
          title: 'Qué se aprende durante el piloto',
          paragraphs: [
            'Un buen piloto muestra dónde encaja Velvoix, dónde deben alinearse procesos y qué integraciones o formas de trabajo pueden ser importantes después.',
            'Eso evita conclusiones prematuras y hace que los siguientes pasos sean más concretos para equipos, dirección y posibles socios.',
          ],
          bullets: [
            'Dónde el encaje con la práctica es fuerte',
            'Qué acuerdos de proceso requieren atención',
            'Qué siguientes pasos son realistas',
          ],
        },
        {
          title: 'Cómo decidir el siguiente paso',
          paragraphs: [
            'Después del piloto debe quedar claro si una siguiente fase tiene sentido, qué partes aportan valor y qué condiciones hacen falta para un uso más amplio.',
            'El resultado no es una promesa general, sino una decisión fundamentada sobre encaje de procesos, valor y siguiente paso.',
          ],
          bullets: [
            'Qué valor se ve en la práctica',
            'Qué condiciones hacen falta para una siguiente fase',
            'Qué decisión puede fundamentarse después del piloto',
          ],
        },
      ],
      ctaTitle: 'Usar el piloto para evaluar el encaje real',
      ctaBody:
        'Alineen de antemano qué señales, equipos y resultados de su entorno deben determinar el siguiente paso.',
      ctaLabel: 'Planificar una conversación',
      meta: {
        title: 'Enfoque piloto para señales asistenciales y seguimiento | Velvoix',
        description:
          'Descubra cómo un primer piloto de Velvoix puede validar de forma enfocada señales asistenciales, seguimiento y reconstrucción en su propio entorno.',
        ogTitle: 'Enfoque piloto para señales asistenciales y seguimiento | Velvoix',
        ogDescription:
          'Velvoix expone cómo un primer piloto puede probar valor práctico, encaje de procesos y siguientes pasos en contexto asistencial.',
      },
    },
  ],
};

export function hasResourcePages(locale: Locale): locale is ResourceLocale {
  return locale === 'nl' || locale === 'en' || locale === 'de' || locale === 'es';
}

export function getResourcePath(locale: ResourceLocale, article: ResourceArticleContent): string {
  return locale === 'nl' ? `/insights/${article.slug}` : `/${locale}/insights/${article.slug}`;
}

export function getResourceAlternates(id: ResourceId): Record<ResourceLocale, string> {
  return {
    nl: getResourcePath('nl', resourceArticlesByLocale.nl.find((article) => article.id === id)!),
    en: getResourcePath('en', resourceArticlesByLocale.en.find((article) => article.id === id)!),
    de: getResourcePath('de', resourceArticlesByLocale.de.find((article) => article.id === id)!),
    es: getResourcePath('es', resourceArticlesByLocale.es.find((article) => article.id === id)!),
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

  if (locale === 'de') {
    return [
      { label: 'Start', href: `${basePath}#home` },
      { label: 'Wie es funktioniert', href: `${basePath}#how-it-works` },
      { label: 'Warum Velvoix', href: `${basePath}#why-velvoix` },
      { label: 'Pilot', href: `${basePath}#pilot` },
      { label: 'Kontakt', href: `${basePath}#contact` },
    ];
  }

  if (locale === 'es') {
    return [
      { label: 'Inicio', href: `${basePath}#home` },
      { label: 'Cómo funciona', href: `${basePath}#how-it-works` },
      { label: 'Por qué Velvoix', href: `${basePath}#why-velvoix` },
      { label: 'Piloto', href: `${basePath}#pilot` },
      { label: 'Contacto', href: `${basePath}#contact` },
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
