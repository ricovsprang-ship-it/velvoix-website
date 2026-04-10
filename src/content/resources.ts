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
        'Een binnenkomend zorgsignaal wordt pas werkbaar als teams begrijpen waarom het aandacht vraagt, welke urgentie logisch is en welke opvolging daarbij past.',
      summary:
        'Uitlegbare triage gaat niet alleen over prioriteit, maar over duidelijke duiding in de zorgcontext.',
      points: [
        'Waarom melding zonder context te weinig zegt',
        'Hoe triage en context elkaar versterken',
        'Welke praktische winst teams hierdoor ervaren',
      ],
      sections: [
        {
          title: 'Waarom meldingen alleen niet genoeg zijn',
          paragraphs: [
            'Veel traditionele omgevingen registreren dat er iets gebeurt, maar laten de echte interpretatie bij het team liggen.',
            'Dat vertraagt opvolging en maakt het moeilijker uit te leggen waarom het ene signaal direct aandacht vroeg en een ander niet.',
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
            'Velvoix combineert binnenkomende signalen met relevante context, historie en triagelogica. Daardoor wordt triage meer dan een kleur of prioriteitslabel.',
            'De uitkomst is opvolging die duidelijker te bespreken is in teamoverleg, kwaliteitsgesprekken en de dagelijkse zorgpraktijk.',
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
        'Gebruik een eerste verkenning om te toetsen bij welke signalen extra context en uitlegbare triage het meeste verschil maken.',
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
        'Waarom opvolging sterker werkt wanneer status, verantwoordelijkheid, escalatie en reconstructie in dezelfde lijn blijven.',
      eyebrow: 'Verdieping',
      intro:
        'Een zorgsignaal is pas afgerond als opvolging, statusverloop en reconstructie in één duidelijke lijn blijven staan.',
      summary:
        'Goede workflow gaat niet alleen over taken verdelen, maar over eigenaarschap, escalatie en terugkijken in dezelfde lijn.',
      points: [
        'Van signaal naar duidelijke opvolging',
        'Waarom escalatie en status samen horen',
        'Wat reconstructie toevoegt voor evaluatie',
      ],
      sections: [
        {
          title: 'Van signaal naar duidelijke opvolging',
          paragraphs: [
            'Velvoix maakt van een signaal een opvolging die teams kunnen toewijzen, volgen en afronden. Daardoor blijft het werkbaar in plaats van alleen zichtbaar.',
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
      ctaTitle: 'Verken workflow en reconstructie in uw organisatie',
      ctaBody:
        'Gebruik een pilot om te beoordelen hoe statusverloop, escalatie en reconstructie in uw werkwijze het meeste opleveren.',
      ctaLabel: 'Bespreek samenwerkingsroute',
      meta: {
        title: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        description:
          'Lees hoe Velvoix zorgsignalen omzet in duidelijke opvolging met eigenaarschap, escalatie en reconstructie.',
        ogTitle: 'Zorgworkflow, escalatie en reconstructie | Velvoix',
        ogDescription:
          'Velvoix verbindt workflow, escalatie en reconstructie in één navolgbare opvolglijn.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilotaanpak-zorgsignalen',
      title: 'Pilotaanpak voor zorgsignalen en opvolging',
      cardDescription:
        'Wat een eerste pilot moet laten zien om te beoordelen of Velvoix past bij teams, processen en de bestaande zorgomgeving.',
      eyebrow: 'Pilotaanpak',
      intro:
        'Een goede pilot is geen vrijblijvende demo, maar een gerichte verkenning van praktische aansluiting, opvolging en proceswaarde.',
      summary:
        'Een eerste pilot moet duidelijk maken wat je wilt valideren, welke teams meedoen en hoe vervolgkeuzes worden onderbouwd.',
      points: [
        'Welke vragen een eerste pilot moet beantwoorden',
        'Welke teams, apparaten en processen je meeneemt',
        'Hoe je uitkomst en vervolg bepaalt',
      ],
      sections: [
        {
          title: 'Wat een eerste pilot moet beantwoorden',
          paragraphs: [
            'Een pilot moet niet proberen alles tegelijk te bewijzen. De kern is meestal: helpt Velvoix om sneller te duiden, duidelijker op te volgen en beter te reconstrueren.',
            'Daarmee ontstaat een bruikbaar beeld van praktische aansluiting zonder te vroeg brede uitrolclaims te doen.',
          ],
        },
        {
          title: 'Welke setting je meeneemt',
          paragraphs: [
            'De waarde van een pilot hangt sterk af van de gekozen setting: type signalen, teambezetting, apparaten, processen en escalatielijnen.',
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
            'Een goede pilot eindigt niet met een algemeen gevoel, maar met concrete bevindingen over triage, workflow, reconstructie en praktische inpassing.',
            'Dat maakt het eenvoudiger om te beslissen of een volgende stap logisch is, welke integraties nodig zijn en waar nog ontwerpkeuzes liggen.',
          ],
        },
      ],
      ctaTitle: 'Gebruik de pilot om echte fit te beoordelen',
      ctaBody:
        'Bespreek vooraf welke signalen, teams en uitkomsten in uw organisatie bepalend zijn voor de vervolgstap.',
      ctaLabel: 'Plan een verkenning',
      meta: {
        title: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        description:
          'Lees hoe een eerste pilot met Velvoix zorgsignalen, opvolging en reconstructie zorgvuldig kan valideren in de eigen zorgpraktijk.',
        ogTitle: 'Pilotaanpak voor zorgsignalen en opvolging | Velvoix',
        ogDescription:
          'Velvoix beschrijft hoe een eerste pilot praktische aansluiting, opvolging en reconstructie in zorgcontext kan valideren.',
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
        'An incoming care signal only becomes actionable when teams understand why it needs attention, how urgent it is and what follow-up makes sense.',
      summary:
        'Explainable triage is not just about priority, but about clear reasoning in a care context.',
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
            'Velvoix combines incoming signals with event context, history and triage logic. That makes triage more than a colour or priority flag.',
            'The result is follow-up that is easier to explain in team discussions, quality reviews and day-to-day care operations.',
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
      ctaTitle: 'Explore explainable triage in a pilot',
      ctaBody:
        'Use an initial pilot to test which signals in your organisation benefit most from context and explainable triage.',
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
        'Why follow-up only becomes manageable when status, ownership, escalation and reconstruction stay in the same chain.',
      eyebrow: 'Deep dive',
      intro:
        'A care signal is only complete when follow-up, status flow and reconstruction stay aligned in one manageable line.',
      summary:
        'A strong workflow is not only about assigning tasks, but about ownership, escalation and traceability in the same operational chain.',
      points: [
        'From signal to clear follow-up',
        'Why escalation and status belong together',
        'How reconstruction supports evaluation and audit',
      ],
      sections: [
        {
          title: 'From signal to clear follow-up',
          paragraphs: [
            'Velvoix turns a signal into a follow-up item that teams can assign, track and close. That keeps it actionable rather than merely visible.',
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
      ctaLabel: 'Discuss collaboration',
      meta: {
        title: 'Care workflow, escalation and reconstruction | Velvoix',
        description:
          'Read how Velvoix turns care signals into a manageable workflow with ownership, escalation and traceable reconstruction.',
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
        'A strong pilot is not a generic demo, but a focused way to assess practical fit, follow-up quality and process value.',
      summary:
        'A first pilot should clarify what you want to validate, which teams participate and how follow-up decisions will be grounded.',
      points: [
        'Which questions a first pilot should answer',
        'Which teams, equipment and processes to include',
        'How to evaluate outcomes and next steps honestly',
      ],
      sections: [
        {
          title: 'What a first pilot should answer',
          paragraphs: [
            'A pilot should not try to prove everything at once. The core questions are usually whether Velvoix helps teams interpret faster, follow up more clearly and reconstruct more reliably.',
            'That creates a useful picture of practical fit without making broad rollout claims too early.',
          ],
        },
        {
          title: 'Which setting to include',
          paragraphs: [
            'The value of a pilot depends heavily on the chosen setting: signal types, staffing, equipment, processes and escalation lines.',
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
      ctaLabel: 'Plan an initial conversation',
      meta: {
        title: 'Pilot approach for care signals and follow-up | Velvoix',
        description:
          'Learn how a first Velvoix pilot can fairly validate care signals, follow-up and reconstruction in your own care setting.',
        ogTitle: 'Pilot approach for care signals and follow-up | Velvoix',
        ogDescription:
          'Velvoix outlines how a first pilot can validate practical fit, follow-up and reconstruction in a care context.',
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
        'Ein eingehendes Pflegesignal wird erst dann wirklich handhabbar, wenn Teams verstehen, warum es Aufmerksamkeit braucht, wie dringend es ist und welcher nächste Schritt dazu passt.',
      summary:
        'Erklärbare Triage bedeutet nicht nur Priorität, sondern eine nachvollziehbare Einordnung im Pflegekontext.',
      points: [
        'Warum ein Hinweis ohne Kontext zu wenig sagt',
        'Wie Triage und Kontext zusammenwirken',
        'Was Teams davon im Alltag haben',
      ],
      sections: [
        {
          title: 'Warum Meldungen allein nicht ausreichen',
          paragraphs: [
            'Viele traditionelle Umgebungen erfassen zwar, dass etwas passiert ist, überlassen die eigentliche Einordnung aber dem Team.',
            'Das verlangsamt die Nachverfolgung und macht es schwerer zu erklären, warum ein Signal sofortiges Handeln erforderte und ein anderes nicht.',
          ],
          bullets: [
            'Ein Signal ohne Kontext sagt wenig über Dringlichkeit aus',
            'Teams verlieren Zeit durch wiederholte Interpretation',
            'Entscheidungen lassen sich im Nachhinein schwerer begründen',
          ],
        },
        {
          title: 'Wie Kontext und Triage zusammenarbeiten',
          paragraphs: [
            'Velvoix verbindet eingehende Signale mit Ereigniskontext, Historie und operativer Logik. Dadurch wird Triage mehr als nur eine Farbe oder ein Prioritätslabel.',
            'Das Ergebnis ist ein nächster Schritt, der sich in Teambesprechungen, Qualitätsgesprächen und im Pflegealltag besser erklären lässt.',
          ],
          bullets: [
            'Historie und Auslöser fließen in die Bewertung ein',
            'Dringlichkeit wird sichtbar begründet',
            'Der nächste Schritt wird für das Team klarer',
          ],
        },
        {
          title: 'Was Teams davon praktisch haben',
          paragraphs: [
            'Erklärbare Triage reduziert Interpretationsrauschen und hilft Teams, schneller zu erkennen, was jetzt Aufmerksamkeit braucht.',
            'Gleichzeitig entsteht eine bessere Grundlage für Auswertung, weil Signale und nächste Schritte in derselben Logik verbunden bleiben.',
          ],
        },
      ],
      ctaTitle: 'Erklärbare Triage in einem Pilot prüfen',
      ctaBody:
        'Nutzen Sie eine erste Pilotphase, um zu testen, welche Signale in Ihrer Umgebung besonders von Kontext und erklärbarer Triage profitieren.',
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
        'Warum Nachverfolgung stärker wird, wenn Status, Verantwortung, Eskalation und Rekonstruktion im selben Ablauf bleiben.',
      eyebrow: 'Vertiefung',
      intro:
        'Ein Pflegesignal ist erst dann wirklich abgeschlossen, wenn Nachverfolgung, Statusverlauf und Rekonstruktion in einem gemeinsamen Ablauf zusammenbleiben.',
      summary:
        'Ein tragfähiger Workflow bedeutet nicht nur Aufgaben zu verteilen, sondern Verantwortung, Eskalation und Nachvollziehbarkeit im selben Ablauf zusammenzuhalten.',
      points: [
        'Vom Signal zur klaren Nachverfolgung',
        'Warum Eskalation und Status zusammengehören',
        'Was Rekonstruktion für Auswertung und Audit ergänzt',
      ],
      sections: [
        {
          title: 'Vom Signal zur klaren Nachverfolgung',
          paragraphs: [
            'Velvoix macht aus einem Signal einen Vorgang, den Teams zuweisen, verfolgen und abschließen können. So bleibt Nachverfolgung praktikabel, statt nur sichtbar zu sein.',
            'Das ist besonders relevant in Umgebungen, in denen mehrere Personen dieselbe Bewohnerin, denselben Bewohner, Raum oder Fall berühren.',
          ],
        },
        {
          title: 'Warum Eskalation und Status zusammengehören',
          paragraphs: [
            'Wenn Status von Verantwortung und Eskalation getrennt bleibt, enden Teams trotzdem wieder mit losen Meldungen und zusätzlichen Interpretationsrunden.',
            'Wenn Eskalation Teil derselben Linie bleibt, wird klarer, wann Risiko steigt, wann nächste Schritte stocken und wer reagieren muss.',
          ],
          bullets: [
            'Verantwortung bleibt sichtbar',
            'Eskalation folgt aus Status und Risiko',
            'Nachverfolgung bleibt für Teams und Leitung logisch',
          ],
        },
        {
          title: 'Was Rekonstruktion ergänzt',
          paragraphs: [
            'Rekonstruktion zeigt, was passiert ist, wie die Nachverfolgung verlief und wo Verzögerung oder Unklarheit entstanden sind.',
            'Das hilft nicht nur bei Audits, sondern auch beim Lernen im Team, bei der Qualitätsverbesserung und bei der Überprüfung von Prozessen.',
          ],
        },
      ],
      ctaTitle: 'Workflow und Rekonstruktion in Ihrer Umgebung prüfen',
      ctaBody:
        'Nutzen Sie einen Pilot, um zu bewerten, wo Statusverlauf, Eskalation und Rekonstruktion für Ihre Teams den größten praktischen Nutzen bringen.',
      ctaLabel: 'Gespräch planen',
      meta: {
        title: 'Pflege-Workflow, Eskalation und Rekonstruktion | Velvoix',
        description:
          'Lesen Sie, wie Velvoix Pflegesignale in steuerbaren Workflow mit Verantwortung, Eskalation und nachvollziehbarer Rekonstruktion übersetzt.',
        ogTitle: 'Pflege-Workflow, Eskalation und Rekonstruktion | Velvoix',
        ogDescription:
          'Velvoix verbindet Workflow, Eskalation und Rekonstruktion in einer nachvollziehbaren Nachverfolgungskette.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'pilotansatz-pflegesignale',
      title: 'Pilotansatz für Pflegesignale und Nachverfolgung',
      cardDescription:
        'Worauf ein erster Pilot ausgerichtet sein sollte, wenn Sie beurteilen wollen, ob Velvoix zu Teams, Prozessen und bestehender Pflegeumgebung passt.',
      eyebrow: 'Pilotansatz',
      intro:
        'Ein guter Pilot ist keine unverbindliche Demo, sondern eine gezielte Prüfung von Passung, Nachverfolgung und Prozessnutzen.',
      summary:
        'Ein erster Pilot sollte klären, was validiert werden soll, welche Teams teilnehmen und wie Folgeentscheidungen begründet werden.',
      points: [
        'Welche Fragen ein erster Pilot beantworten sollte',
        'Welche Teams, Geräte und Prozesse einbezogen werden',
        'Wie Ergebnisse und nächste Schritte bewertet werden',
      ],
      sections: [
        {
          title: 'Was ein erster Pilot beantworten sollte',
          paragraphs: [
            'Ein Pilot sollte nicht versuchen, alles auf einmal zu beweisen. Meist geht es im Kern darum, ob Velvoix Teams hilft, schneller einzuordnen, klarer nachzuverfolgen und verlässlicher zu rekonstruieren.',
            'So entsteht ein brauchbares Bild der praktischen Passung, ohne zu früh weitreichende Rollout-Aussagen zu machen.',
          ],
        },
        {
          title: 'Welche Umgebung einbezogen werden sollte',
          paragraphs: [
            'Der Wert eines Piloten hängt stark von der gewählten Umgebung ab: Signaltypen, Teambelegung, Geräte, Prozesse und Eskalationslinien.',
            'Gerade deshalb sollten Pilotziele von Anfang an an einen konkreten Pflegekontext geknüpft werden.',
          ],
          bullets: [
            'Welche Signale im Umfang enthalten sind',
            'Welche Teams die Nachverfolgung übernehmen',
            'Welche bestehenden Prozesse berücksichtigt werden müssen',
          ],
        },
        {
          title: 'Wie über den nächsten Schritt entschieden wird',
          paragraphs: [
            'Ein guter Pilot endet nicht mit einem allgemeinen Eindruck, sondern mit konkreten Erkenntnissen zu Triage, Workflow, Rekonstruktion und Passung.',
            'Damit lässt sich klarer entscheiden, ob eine nächste Phase sinnvoll ist, welche Integrationen wichtig werden und wo noch Gestaltungsfragen offen sind.',
          ],
        },
      ],
      ctaTitle: 'Den Pilot nutzen, um echte Passung zu prüfen',
      ctaBody:
        'Besprechen Sie vorab, welche Signale, Teams und Ergebnisse in Ihrer Umgebung darüber entscheiden, ob Velvoix in die nächste Phase geht.',
      ctaLabel: 'Gespräch planen',
      meta: {
        title: 'Pilotansatz für Pflegesignale und Nachverfolgung | Velvoix',
        description:
          'Lesen Sie, wie ein erster Velvoix-Pilot Pflegesignale, Nachverfolgung und Rekonstruktion fair in Ihrer eigenen Pflegeumgebung validieren kann.',
        ogTitle: 'Pilotansatz für Pflegesignale und Nachverfolgung | Velvoix',
        ogDescription:
          'Velvoix beschreibt, wie ein erster Pilot operative Passung, Nachverfolgung und Rekonstruktion im Pflegekontext validieren kann.',
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
        'Una señal asistencial entrante solo se vuelve operativa cuando los equipos entienden por qué requiere atención, qué urgencia tiene y qué seguimiento encaja mejor.',
      summary:
        'El triaje explicable no trata solo de prioridad, sino de una interpretación defendible dentro del contexto asistencial.',
      points: [
        'Por qué una alerta sin contexto dice demasiado poco',
        'Cómo trabajan juntos el triaje y el contexto',
        'Qué aporta esto en la práctica a los equipos',
      ],
      sections: [
        {
          title: 'Por qué las alertas por sí solas no bastan',
          paragraphs: [
            'Muchos entornos tradicionales registran que algo ha sucedido, pero dejan la interpretación real en manos del equipo.',
            'Eso retrasa el seguimiento y hace más difícil explicar después por qué una señal requería acción inmediata y otra no.',
          ],
          bullets: [
            'Una señal sin contexto dice poco sobre la urgencia',
            'Los equipos pierden tiempo reinterpretando',
            'Después cuesta más defender por qué una decisión fue lógica',
          ],
        },
        {
          title: 'Cómo trabajan juntos el contexto y el triaje',
          paragraphs: [
            'Velvoix combina las señales entrantes con el contexto del evento, el historial y la lógica operativa. Así, el triaje pasa a ser algo más que un color o una etiqueta de prioridad.',
            'El resultado es un seguimiento más fácil de explicar en conversaciones de equipo, revisiones de calidad y la práctica asistencial diaria.',
          ],
          bullets: [
            'El historial y el detonante forman parte de la valoración',
            'La urgencia queda visiblemente fundamentada',
            'El siguiente paso se vuelve más claro para el equipo',
          ],
        },
        {
          title: 'Qué aporta esto en la práctica',
          paragraphs: [
            'El triaje explicable reduce el ruido interpretativo y ayuda a los equipos a ver antes qué requiere atención inmediata.',
            'Además, crea una mejor base para la evaluación porque las señales y el seguimiento permanecen unidos en la misma lógica.',
          ],
        },
      ],
      ctaTitle: 'Evaluar el triaje explicable en un piloto',
      ctaBody:
        'Use un primer piloto para comprobar qué señales de su entorno se benefician más del contexto y del triaje explicable.',
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
        'Por qué el seguimiento funciona mejor cuando estado, responsabilidad, escalada y reconstrucción permanecen en el mismo flujo.',
      eyebrow: 'Profundización',
      intro:
        'Una señal asistencial solo queda realmente cerrada cuando el seguimiento, la evolución del estado y la reconstrucción permanecen alineados en un mismo flujo.',
      summary:
        'Un flujo de trabajo sólido no trata solo de repartir tareas, sino de mantener responsabilidad, escalada y trazabilidad dentro del mismo flujo.',
      points: [
        'De la señal a un seguimiento claro',
        'Por qué la escalada y el estado deben ir juntos',
        'Qué añade la reconstrucción para evaluación y auditoría',
      ],
      sections: [
        {
          title: 'De la señal a un seguimiento claro',
          paragraphs: [
            'Velvoix convierte una señal en un caso que los equipos pueden asignar, seguir y cerrar. Así el seguimiento sigue siendo operativo en lugar de quedarse solo en algo visible.',
            'Esto importa sobre todo en entornos donde varias personas intervienen sobre la misma residente, el mismo residente, habitación o situación.',
          ],
        },
        {
          title: 'Por qué la escalada y el estado deben ir juntos',
          paragraphs: [
            'Si el estado queda desconectado de la responsabilidad y la escalada, los equipos terminan igualmente con alertas separadas y rondas extra de interpretación.',
            'Al mantener la escalada dentro del mismo flujo, queda más claro cuándo aumenta el riesgo, cuándo se detiene el seguimiento y quién debe responder.',
          ],
          bullets: [
            'La responsabilidad sigue visible',
            'La escalada se deriva del estado y del riesgo',
            'El seguimiento sigue siendo lógico para equipos y responsables',
          ],
        },
        {
          title: 'Qué añade la reconstrucción',
          paragraphs: [
            'La reconstrucción muestra qué ocurrió, cómo avanzó el seguimiento y dónde aparecieron retrasos o ambigüedad.',
            'Eso ayuda en auditorías, pero también en el aprendizaje del equipo, la mejora de calidad y la revisión de procesos.',
          ],
        },
      ],
      ctaTitle: 'Explorar flujo y reconstrucción en su entorno',
      ctaBody:
        'Use un piloto para valorar dónde la evolución del estado, la escalada y la reconstrucción generan más valor práctico para sus equipos.',
      ctaLabel: 'Planificar una conversación',
      meta: {
        title: 'Flujo asistencial, escalada y reconstrucción | Velvoix',
        description:
          'Lea cómo Velvoix convierte señales asistenciales en un flujo gestionable con responsabilidad, escalada y reconstrucción trazable.',
        ogTitle: 'Flujo asistencial, escalada y reconstrucción | Velvoix',
        ogDescription:
          'Velvoix conecta flujo, escalada y reconstrucción en una sola cadena de seguimiento trazable.',
      },
    },
    {
      id: 'pilot-readiness',
      slug: 'enfoque-piloto-senales-asistenciales',
      title: 'Enfoque piloto para señales asistenciales y seguimiento',
      cardDescription:
        'En qué debe centrarse un primer piloto para evaluar si Velvoix encaja con sus equipos, procesos y entorno asistencial existente.',
      eyebrow: 'Enfoque piloto',
      intro:
        'Un buen piloto no es una demo informal, sino una forma concreta de evaluar el encaje operativo, la calidad del seguimiento y el valor del proceso.',
      summary:
        'Un primer piloto debe aclarar qué se quiere validar, qué equipos participan y cómo se apoyarán las decisiones posteriores.',
      points: [
        'Qué preguntas debe responder un primer piloto',
        'Qué equipos, dispositivos y procesos conviene incluir',
        'Cómo valorar los resultados y los siguientes pasos',
      ],
      sections: [
        {
          title: 'Qué debe responder un primer piloto',
          paragraphs: [
            'Un piloto no debería intentar demostrarlo todo de una vez. Las preguntas centrales suelen ser si Velvoix ayuda a los equipos a interpretar antes, hacer un seguimiento más claro y reconstruir con más fiabilidad.',
            'Eso genera una visión útil del encaje operativo sin hacer demasiado pronto promesas amplias de despliegue.',
          ],
        },
        {
          title: 'Qué entorno conviene incluir',
          paragraphs: [
            'El valor de un piloto depende mucho del entorno elegido: tipos de señal, dotación de equipos, dispositivos, procesos y líneas de escalada.',
            'Por eso los objetivos del piloto deberían vincularse desde el principio a un contexto asistencial concreto.',
          ],
          bullets: [
            'Qué señales quedan dentro del alcance',
            'Qué equipos se encargan del seguimiento',
            'Qué procesos existentes deben contemplarse',
          ],
        },
        {
          title: 'Cómo decidir el siguiente paso',
          paragraphs: [
            'Un buen piloto no termina con una impresión general, sino con hallazgos concretos sobre triaje, flujo de trabajo, reconstrucción y encaje.',
            'Eso facilita decidir si una siguiente fase está justificada, qué integraciones importan y qué decisiones de diseño siguen abiertas.',
          ],
        },
      ],
      ctaTitle: 'Usar el piloto para evaluar el encaje real',
      ctaBody:
        'Alineen de antemano qué señales, equipos y resultados de su entorno deben determinar si Velvoix pasa a la siguiente fase.',
      ctaLabel: 'Planificar una conversación',
      meta: {
        title: 'Enfoque piloto para señales asistenciales y seguimiento | Velvoix',
        description:
          'Descubra cómo un primer piloto de Velvoix puede validar con honestidad señales asistenciales, seguimiento y reconstrucción en su propio entorno.',
        ogTitle: 'Enfoque piloto para señales asistenciales y seguimiento | Velvoix',
        ogDescription:
          'Velvoix expone cómo un primer piloto puede validar encaje operativo, seguimiento y reconstrucción en contexto asistencial.',
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
