import type { SiteContent } from './site';

export const deContent: SiteContent = {
  locale: 'de',
  nav: [
    { label: 'Start', href: '#home' },
    { label: 'Wie es funktioniert', href: '#how-it-works' },
    { label: 'Warum Velvoix', href: '#why-velvoix' },
    { label: 'Pilot', href: '#pilot' },
    { label: 'Kontakt', href: '#contact' },
  ],
  meta: {
    title: 'Velvoix | Vom Signal zur klaren Pflegehandlung',
    description:
      'Velvoix hilft Pflegeorganisationen dabei, Rufknopfe, Spracheingaben und andere Pflegesignale in nachvollziehbare, priorisierte und auditierbare Pflege-Workflows zu ubersetzen.',
    ogTitle: 'Velvoix | Klare Pflegehandlung aus Signalen',
    ogDescription:
      'Eine Einfuhrung in Velvoix: vom Signal zu nachvollziehbarem, priorisiertem und auditierbarem Pflege-Workflow.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'Vom Signal zur klaren Pflegehandlung',
    subtitle:
      'Velvoix hilft Pflegeorganisationen dabei, Rufknopfe, Spracheingaben und andere Pflegesignale in nachvollziehbare, priorisierte und auditierbare Pflege-Workflows zu ubersetzen.',
    supporting:
      'Entwickelt fur Pflegeumgebungen, in denen Klarheit, Nachverfolgung und Rekonstruktion zahlen.',
    primaryCta: 'Velvoix entdecken',
    secondaryCta: 'So funktioniert es',
    metrics: [
      { value: 'Nachvollziehbar', label: 'Vom Signal zur verstandlichen Folgeaktion' },
      { value: 'Auditierbar', label: 'Statusverlauf und Rekonstruktion bleiben nachvollziehbar' },
      { value: 'Beherrschbar', label: 'Passt in bestehende Pflegeumgebungen ohne neue Meldungsschicht' },
    ],
  },
  challenge: {
    eyebrow: 'Die Herausforderung',
    title: 'Wenn ein Signal noch keine klare Pflegehandlung ist',
    description:
      'Viele Systeme konnen zwar registrieren, dass etwas passiert ist, unterstutzen aber den nachsten Schritt nicht ausreichend: Was ist wahrscheinlich los, wie dringend ist es, welche Folgeaktion passt und wie lasst sich der Ablauf spater sauber rekonstruieren?',
    proofPanels: {
      explainabilityLabel: 'Erklarbarkeit',
      explainabilityTitle: 'Warum',
      explainabilitySummary: 'Der Hilferuf wurde innerhalb kurzer Zeit wiederholt ausgelost.',
      explainabilitySupporting: 'Basierend auf Triage-Regeln und Event-Kontext.',
      explainabilityItems: [
        { label: 'Primares Signal', value: 'Wiederholter Hilferuf' },
        { label: 'Kernbeobachtung', value: 'Erneute Nachverfolgung ist wahrscheinlich erforderlich.' },
        { label: 'Triage-Basis', value: 'Wiederholung in kurzer Zeit und Kontext des aktuellen Events.' },
      ],
      followUpLabel: 'Operative Folgeaktion',
      followUpTitle: 'Empfohlene Massnahme',
      followUpSummary: 'Gehen Sie direkt zur Bewohnerin oder zum Bewohner und prufen Sie die Situation.',
      followUpItems: [
        { label: 'Dringlichkeit', value: 'Direkt' },
        { label: 'SLA-Status', value: 'SLA kritisch' },
        { label: 'Verantwortung', value: 'Noch nicht zugewiesen' },
      ],
      followUpAction: 'Ubernehmen',
    },
  },
  flow: {
    eyebrow: 'Was Velvoix tut',
    title: 'Velvoix schafft Struktur zwischen Signal und Nachverfolgung',
    description:
      'Velvoix ubersetzt Signale in ein handhabbares operatives Ergebnis mit Kontext, Triage und Folgeaktion.',
    flow: ['Signal', 'Kontext', 'Triage', 'Event', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    supporting:
      'Dadurch wird die Nachverfolgung klarer, konsistenter und besser rekonstruierbar.',
  },
  howItWorks: {
    eyebrow: 'Wie es funktioniert',
    title: 'Von der Eingabe zur handhabbaren Folgeaktion',
    description:
      'Velvoix nimmt Signale nicht nur entgegen, sondern reichert sie mit Kontext, Triage und handhabbarer Eventlogik an, damit Pflegeteams schneller verstehen, was Aufmerksamkeit braucht und welcher nachste Schritt sinnvoll ist.',
    panelLabel: 'Operativer Ablauf',
    panelSupporting: 'Von der Eingabe uber Kontext und Triage bis zur handhabbaren Nachverfolgung.',
    steps: [
      { title: 'Eingabe', description: 'Rufknopf, Sprache oder anderes Pflegesignal.' },
      { title: 'Kontext', description: 'Verlauf, Ausloser und Situation werden mit einbezogen.' },
      { title: 'Triage', description: 'Dringlichkeit und Erklarung werden strukturiert.' },
      { title: 'Event', description: 'Es entsteht eine handhabbare operative Einheit.' },
      { title: 'Workflow', description: 'Nachverfolgung, Eigentumerschaft und Status werden steuerbar.' },
      { title: 'Audit', description: 'Rekonstruktion und Auswertung bleiben nachvollziehbar.' },
    ],
    stepNotes: [
      'Eingaben kommen kontrolliert an',
      'Kontext macht die Einordnung fundierter',
      'Triage macht Dringlichkeit nachvollziehbar',
      'Eventbildung macht Folgeaktionen handhabbar',
      'Workflow halt Status steuerbar',
      'Audit halt Rekonstruktion intakt',
    ],
  },
  compareChains: {
    eyebrow: 'Kettenunterschied',
    title: 'Nicht von der Meldung zur Interpretation, sondern vom Signal zum steuerbaren Workflow',
    description:
      'Der Unterschied liegt in der Kette: Wo klassische Systeme bei einer Meldung stehen bleiben, erganzt Velvoix Kontext, Triage und Eventbildung, damit Nachverfolgung steuerbar wird.',
    compareLabel: 'Vergleich',
    outcomes: ['Weniger Interpretationslast', 'Bessere Priorisierung', 'Bessere Rekonstruktion'],
    traditionalTitle: 'Klassische Kette',
    traditionalSteps: ['Signal', 'Meldung', 'Manuelle Interpretation'],
    velvoixTitle: 'Velvoix-Kette',
    velvoixSteps: ['Signal', 'Kontext', 'Triage', 'Event', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    velvoixSupporting: 'Jede zusatzliche Ebene fugt Bedeutung hinzu und macht Nachverfolgung, Eskalation und Audit steuerbar.',
    stepDetails: [
      {
        title: 'Signal',
        description:
          'Ein Rufknopf, eine Spracheingabe oder ein anderes Pflegesignal kommt kontrolliert als Startpunkt der Nachverfolgung an.',
      },
      {
        title: 'Kontext',
        description: 'Event-Kontext, Historie und Situation helfen Teams, das Signal besser zu verstehen.',
      },
      {
        title: 'Triage',
        description: 'Dringlichkeit und empfohlene Massnahme werden in nachvollziehbarer Pflegesprache sichtbar.',
      },
      {
        title: 'Event',
        description:
          'Das Ergebnis wird zu einer handhabbaren operativen Einheit fur Status, Verantwortung und nachste Schritte.',
      },
      {
        title: 'Workflow',
        description: 'Nachverfolgung wird uber Aktionen, Statusverlauf und klare Verantwortung steuerbar.',
      },
      {
        title: 'Eskalation',
        description: 'Wenn Nachverfolgung stockt oder Risiko steigt, bleibt Eskalation logisch und kontrollierbar.',
      },
      {
        title: 'Rekonstruktion',
        description: 'Entscheidungen, Statusverlauf und Nachverfolgung bleiben fur Auswertung und Audit nachvollziehbar.',
      },
    ],
  },
  whyVelvoix: {
    eyebrow: 'Warum Velvoix anders ist',
    title: 'Warum Velvoix operativ anders arbeitet',
    description:
      'Der operative Unterschied liegt in Produktentscheidungen rund um Eventbildung, erklarbare Triage und eine gemeinsame operative Wahrheit.',
    cards: [
      {
        title: 'Keine Benachrichtigungsschicht',
        description:
          'Velvoix lasst Signale nicht als isolierte Meldungen zirkulieren, sondern verwandelt sie in handhabbare Events mit Kontext, Verantwortung und Nachverfolgung.',
      },
      {
        title: 'Erklarbare Triage',
        description:
          'Keine Black-Box-Bewertung, sondern eine klare Kombination aus Dringlichkeit, Kontext und empfohlener Massnahme in Pflegesprache.',
      },
      {
        title: 'Event-Wahrheit fur Workflow und Audit',
        description:
          'Eine operative Wahrheit fur Status, Verantwortung, Eskalation und Rekonstruktion.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Technischer Kern',
    title: 'Fur verlassliche Nachverfolgung unter Druck entwickelt',
    description:
      'Die Starke von Velvoix liegt nicht in einem einzelnen Modell, Bildschirm oder Eingangssignal, sondern in einem Produktkern, der Event-Wahrheit, erklarbare Triage, Nachverfolgung und Governance kontrolliert zusammenhalt - auch wenn der Betrieb unter Druck steht oder Teile der Kette eingeschrankt sind.',
    capabilities: [
      'Backend-Wahrheit',
      'Ehrlicher Fallback',
      'Auditierbare Nachverfolgung',
      'Rollenbasierter Zugriff',
      'Tenant-Trennung',
      'Kettenbeobachtbarkeit',
    ],
    rows: [
      {
        index: '01',
        title: 'Bleibt bei Teilstorungen nutzbar',
        description:
          'Velvoix ist so ausgelegt, dass Nachverfolgung nutzbar bleibt, wenn Teile der Kette vorubergehend eingeschrankt sind. Nicht durch Scheinsicherheit, sondern indem Kernstatus und nachste Massnahme kontrolliert sichtbar bleiben.',
        effect: 'Verlasslicher Workflow, auch wenn nicht jeder Teil der Kette perfekt reagiert.',
      },
      {
        index: '02',
        title: 'Keine falsche Sicherheit',
        description:
          'Wenn Kontext, Qualitat oder Verfugbarkeit begrenzt sind, bleibt das sichtbar und steuerbar, statt hinter scheinbar sicheren Ausgaben zu verschwinden.',
        effect: 'Ehrlicher Fallback statt stiller Degradierung.',
      },
      {
        index: '03',
        title: 'Backend-Wahrheit im Kern',
        description:
          'Die operative Wahrheit uber Status, Erklarung und Nachverfolgung liegt im Kern und nicht in UI-Logik oder abgeleiteten Integrationsergebnissen.',
        effect: 'Backend-basierte Wahrheit statt fragmentierter UI- oder Integrationslogik.',
      },
      {
        index: '04',
        title: 'Rollen- und tenantgebunden',
        description:
          'Zugriffe und Aktionen bleiben an Organisation, Kontext und Rolle gebunden. So bleibt Velvoix steuerbar, wenn mehrere Teams und Umgebungen parallel arbeiten.',
        effect: 'Klare Grenzen zwischen Organisationen, Rollen und Kontexten.',
      },
      {
        index: '05',
        title: 'Rekonstruierbar und auditierbar',
        description:
          'Nachverfolgung, Statusanderungen und kritische Entscheidungen bleiben nachvollziehbar, sodass Auswertung und Qualitatsverbesserung nicht von Erinnerung oder losen Exporten abhangen.',
        effect: 'Nachvollziehbare Nachverfolgung statt isolierter Momentaufnahmen.',
      },
      {
        index: '06',
        title: 'Operativ steuerbar',
        description:
          'Observability, Verantwortlichkeit und Governance gehoren zum Produktverhalten. So bleibt sichtbar, wo Aufmerksamkeit notig ist und wie Teams kontrolliert reagieren sollen.',
        effect: 'Operative Kontrolle als Produktdisziplin statt als nachgelagerte IT-Aufgabe.',
      },
    ],
    closingLine:
      'Zusammen sorgen diese Ebenen dafur, dass Velvoix keine Meldungsschicht oder Black-Box-Schicht bleibt, sondern eine erklarbare und steuerbare Pflegeplattform wird.',
  },
  snapshots: {
    eyebrow: 'Produktshowcase',
    title: 'Ein kontrollierter Einblick in die Plattform',
    description:
      'Velvoix zeigt nicht nur Signale, sondern bringt Triage, Folgeaktion, Verwaltung und Rekonstruktion in einer pflegeorientierten operativen Umgebung zusammen.',
    cards: [
      {
        title: 'Eventseite',
        caption: 'Dringlichkeit, Bewohnerin oder Bewohner und Kernsignal bleiben in einer ruhigen Arbeitsliste direkt erfassbar.',
        image: '/products/proof-operations.png',
        tone: 'Operationen',
      },
      {
        title: 'Bearbeitung',
        caption: 'Warum und empfohlene Massnahme werden als nachvollziehbare operative Begrundung sichtbar.',
        image: '/products/proof-explainability.png',
        tone: 'Erklarbarkeit',
      },
      {
        title: 'Boxverwaltung',
        caption: 'Operative Kontrolle bleibt in der Verwaltungsebene ruhig und steuerbar.',
        image: '/products/proof-control.png',
        tone: 'Kontrolle',
      },
      {
        title: 'Technischer Uberblick',
        caption: 'Governance bleibt uber Profile, Status und Triage-Verwaltung unter Kontrolle.',
        image: '/products/proof-governance.png',
        tone: 'Governance',
      },
    ],
  },
  pilot: {
    eyebrow: 'Pilot und Zusammenarbeit',
    title: 'Mit Velvoix erkunden, was steuerbarer Pflegeworkflow in der Praxis bringt',
    description:
      'Ein Pilot macht sichtbar, wie Velvoix in Ihre Pflegepraxis, Teamroutinen und operativen Prozesse passt.',
    points: [
      'Pflegeheime und Langzeitpflege',
      'Teams, die mehr Klarheit in der Nachverfolgung wollen',
      'Partner, die Passung zu Prozessen und Integrationen prufen mochten',
    ],
    primaryCta: 'Pilotgesprach planen',
    secondaryCta: 'Zusammenarbeit besprechen',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Lassen Sie uns weiter sprechen',
    description:
      'Mochten Sie prufen, ob Velvoix zu Ihrer Organisation, einem Pilotkontext oder einer Zusammenarbeit passt? Hinterlassen Sie Ihre Daten, und wir melden uns gezielt bei Ihnen.',
    inquiryTypes: {
      pilot: 'Pilotgesprach',
      partnership: 'Zusammenarbeit',
      general: 'Allgemeine Anfrage',
    },
    reasons: [
      'Pilotgesprach fur Pflegeorganisationen',
      'Zusammenarbeit oder Partnerschaft besprechen',
      'Allgemeine Frage zur Plattform oder zum Einsatzkontext',
    ],
    directEmailNote: 'Fur geschaftliche Fragen, Pilotgesprache und Partnerschaften.',
    routeContent: {
      pilot: {
        helper: 'Wahlen Sie diesen Weg, wenn Sie einen Pilotkontext oder eine praktische Erprobung besprechen mochten.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, den Kontext und was Sie in einem Pilot erkunden mochten.',
        submit: 'Gesprach planen',
      },
      partnership: {
        helper: 'Wahlen Sie diesen Weg, wenn Sie eine Zusammenarbeit, Integration oder strategische Partnerschaft besprechen mochten.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, Ihre Rolle und welche Form der Zusammenarbeit Sie besprechen mochten.',
        submit: 'Zusammenarbeit besprechen',
      },
      general: {
        helper: 'Wahlen Sie diesen Weg fur eine allgemeine geschaftliche Frage zur Plattform oder zum Einsatzkontext.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Frage oder woruber Sie mehr erfahren mochten.',
        submit: 'Anfrage senden',
      },
    },
    labels: {
      name: 'Name',
      organisation: 'Organisation',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer (optional)',
      message: 'Nachricht',
      submit: 'Anfrage senden',
    },
    placeholders: {
      name: 'Vorname Nachname',
      organisation: 'Name Ihrer Organisation',
      email: 'name@organisation.de',
      phone: '+49 170 1234567',
      message: 'Beschreiben Sie kurz, was Sie erkunden oder woruber Sie mehr erfahren mochten.',
    },
    errors: {
      required: 'Dieses Feld ist erforderlich.',
      email: 'Bitte geben Sie eine gultige E-Mail-Adresse ein.',
      phone: 'Bitte geben Sie eine gultige Telefonnummer ein oder lassen Sie das Feld leer.',
      generic: 'Beim Senden Ihrer Nachricht ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    },
    success: 'Vielen Dank. Wir haben Ihre Nachricht erhalten und melden uns so bald wie moglich bei Ihnen.',
    error:
      'Beim Senden Ihrer Nachricht ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    directEmailLabel: 'Direkter Kontakt',
    directEmailValue: 'info@velvoix.com',
  },
  footer: {
    brand: 'Velvoix',
    languageNl: 'Nederlands',
    languageEn: 'English',
    languageDe: 'Deutsch',
    languageEs: 'Espanol',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklarung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Allgemeine Geschaftsbedingungen',
    copyright: '© 2026 Velvoix® · Alle Rechte vorbehalten.',
  },
};

export const esContent: SiteContent = {
  locale: 'es',
  nav: [
    { label: 'Inicio', href: '#home' },
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Por que Velvoix', href: '#why-velvoix' },
    { label: 'Piloto', href: '#pilot' },
    { label: 'Contacto', href: '#contact' },
  ],
  meta: {
    title: 'Velvoix | De la senal a una accion asistencial clara',
    description:
      'Velvoix ayuda a las organizaciones sanitarias a convertir llamadas de boton, entradas por voz y otras senales asistenciales en un flujo asistencial explicable, priorizado y auditable.',
    ogTitle: 'Velvoix | Accion asistencial clara a partir de senales',
    ogDescription:
      'Una introduccion a Velvoix: de la senal a un flujo asistencial explicable, priorizado y auditable.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'De la senal a una accion asistencial clara',
    subtitle:
      'Velvoix ayuda a las organizaciones sanitarias a convertir llamadas de boton, entradas por voz y otras senales asistenciales en un flujo asistencial explicable, priorizado y auditable.',
    supporting:
      'Disenado para entornos asistenciales donde importan la claridad, el seguimiento y la reconstruccion.',
    primaryCta: 'Explorar Velvoix',
    secondaryCta: 'Ver como funciona',
    metrics: [
      { value: 'Explicable', label: 'De la senal a un seguimiento comprensible' },
      { value: 'Auditable', label: 'El estado y la reconstruccion siguen siendo trazables' },
      { value: 'Controlado', label: 'Se integra sin crear otra capa de alertas' },
    ],
  },
  challenge: {
    eyebrow: 'El reto',
    title: 'Cuando una senal todavia no es una accion asistencial clara',
    description:
      'Muchos sistemas pueden registrar que ha ocurrido algo, pero no apoyan suficientemente el siguiente paso: que esta pasando probablemente, que urgencia tiene, que seguimiento encaja y como puede reconstruirse despues todo el recorrido.',
    proofPanels: {
      explainabilityLabel: 'Explicabilidad',
      explainabilityTitle: 'Por que',
      explainabilitySummary: 'El boton de ayuda se activo repetidamente en poco tiempo.',
      explainabilitySupporting: 'Basado en reglas de triaje y contexto del evento.',
      explainabilityItems: [
        { label: 'Senal principal', value: 'Solicitud de ayuda repetida' },
        { label: 'Observacion clave', value: 'Es probable que haga falta un nuevo seguimiento.' },
        { label: 'Base del triaje', value: 'Repeticion en poco tiempo y contexto del evento actual.' },
      ],
      followUpLabel: 'Seguimiento operativo',
      followUpTitle: 'Accion recomendada',
      followUpSummary: 'Acuda directamente al residente y compruebe la situacion.',
      followUpItems: [
        { label: 'Urgencia', value: 'Directa' },
        { label: 'Estado SLA', value: 'SLA critico' },
        { label: 'Responsable', value: 'Aun sin asignar' },
      ],
      followUpAction: 'Asumir',
    },
  },
  flow: {
    eyebrow: 'Que hace Velvoix',
    title: 'Velvoix aporta estructura entre la senal y el seguimiento',
    description:
      'Velvoix convierte las senales en un resultado operativo viable con contexto, triaje y seguimiento.',
    flow: ['Senal', 'Contexto', 'Triaje', 'Evento', 'Workflow', 'Escalada', 'Reconstruccion'],
    supporting:
      'Asi el seguimiento resulta mas claro, mas coherente y mas facil de reconstruir.',
  },
  howItWorks: {
    eyebrow: 'Como funciona',
    title: 'De la entrada a un seguimiento operativo',
    description:
      'Velvoix no solo recibe senales, sino que las enriquece con contexto, triaje y una logica de evento accionable para que los equipos asistenciales entiendan antes que requiere atencion y cual es el siguiente paso logico.',
    panelLabel: 'Flujo operativo',
    panelSupporting: 'De la entrada al contexto, el triaje y un seguimiento accionable.',
    steps: [
      { title: 'Entrada', description: 'Boton, voz u otra senal asistencial.' },
      { title: 'Contexto', description: 'Se ponderan historial, desencadenante y situacion.' },
      { title: 'Triaje', description: 'Se estructuran la urgencia y la explicacion.' },
      { title: 'Evento', description: 'Se crea una unidad operativa gestionable.' },
      { title: 'Workflow', description: 'Seguimiento, titularidad y estado se vuelven gestionables.' },
      { title: 'Auditoria', description: 'La reconstruccion y la evaluacion siguen siendo trazables.' },
    ],
    stepNotes: [
      'La entrada llega de forma controlada',
      'El contexto enriquece la interpretacion',
      'El triaje hace explicable la urgencia',
      'La creacion del evento hace viable el seguimiento',
      'El workflow mantiene el estado gobernable',
      'La auditoria mantiene intacta la reconstruccion',
    ],
  },
  compareChains: {
    eyebrow: 'Diferencia en la cadena',
    title: 'No de la alerta a la interpretacion, sino de la senal al workflow gobernable',
    description:
      'La diferencia esta en la cadena: donde los sistemas tradicionales se detienen en una alerta, Velvoix anade contexto, triaje y formacion del evento para que el seguimiento sea gobernable.',
    compareLabel: 'Comparacion',
    outcomes: ['Menos carga interpretativa', 'Mejor priorizacion', 'Mejor reconstruccion'],
    traditionalTitle: 'Cadena tradicional',
    traditionalSteps: ['Senal', 'Alerta', 'Interpretacion manual'],
    velvoixTitle: 'Cadena Velvoix',
    velvoixSteps: ['Senal', 'Contexto', 'Triaje', 'Evento', 'Workflow', 'Escalada', 'Reconstruccion'],
    velvoixSupporting: 'Cada capa adicional aporta significado y hace gobernables el seguimiento, la escalada y la auditoria.',
    stepDetails: [
      {
        title: 'Senal',
        description:
          'Una llamada de boton, una entrada por voz u otra senal asistencial entra de forma controlada como punto de partida del seguimiento.',
      },
      {
        title: 'Contexto',
        description: 'El contexto del evento, el historial y la situacion ayudan a entender mejor la senal.',
      },
      {
        title: 'Triaje',
        description: 'La urgencia y la accion recomendada se hacen visibles con lenguaje asistencial comprensible.',
      },
      {
        title: 'Evento',
        description:
          'El resultado se convierte en una unidad operativa viable para estado, titularidad y siguientes pasos.',
      },
      {
        title: 'Workflow',
        description: 'El seguimiento se vuelve gobernable mediante acciones, evolucion de estado y responsabilidad clara.',
      },
      {
        title: 'Escalada',
        description: 'Si el seguimiento se detiene o el riesgo aumenta, la escalada sigue siendo logica y controlable.',
      },
      {
        title: 'Reconstruccion',
        description: 'Las decisiones, la evolucion del estado y el seguimiento siguen siendo trazables para evaluacion y auditoria.',
      },
    ],
  },
  whyVelvoix: {
    eyebrow: 'Por que Velvoix es diferente',
    title: 'Por que Velvoix funciona de otra manera en la operacion',
    description:
      'La diferencia operativa reside en decisiones de producto en torno a la formacion del evento, el triaje explicable y una verdad operativa unica.',
    cards: [
      {
        title: 'No es una capa de notificaciones',
        description:
          'Velvoix no deja que las senales circulen como alertas aisladas, sino que las convierte en eventos operativos con contexto, titularidad y seguimiento.',
      },
      {
        title: 'Triaje explicable',
        description:
          'No es una puntuacion de caja negra, sino una combinacion clara de urgencia, contexto y accion recomendada en lenguaje asistencial.',
      },
      {
        title: 'Verdad del evento para workflow y auditoria',
        description:
          'Una verdad operativa para estado, titularidad, escalada y reconstruccion.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Nucleo tecnico',
    title: 'Disenado para un seguimiento fiable bajo presion',
    description:
      'La fortaleza de Velvoix no reside en una pantalla, modelo o fuente de senal aislados, sino en un nucleo de producto que mantiene unidas, de forma controlada, la verdad del evento, el triaje explicable, el seguimiento y la gobernanza, incluso cuando la operacion esta bajo presion o parte de la cadena queda limitada.',
    capabilities: [
      'Verdad backend',
      'Fallback honesto',
      'Seguimiento auditable',
      'Acceso por rol',
      'Separacion por tenant',
      'Observabilidad de la cadena',
    ],
    rows: [
      {
        index: '01',
        title: 'Sigue siendo utilizable ante fallos parciales',
        description:
          'Velvoix esta disenado para que el seguimiento siga siendo utilizable cuando partes de la cadena quedan temporalmente limitadas. No fingiendo certeza, sino manteniendo visibles de forma controlada el estado clave y la siguiente accion.',
        effect: 'Workflow fiable incluso cuando no toda la cadena responde de forma perfecta.',
      },
      {
        index: '02',
        title: 'Sin falsa certeza',
        description:
          'Si el contexto, la calidad o la disponibilidad son limitados, eso debe seguir siendo visible y gobernable en lugar de desaparecer detras de una salida aparentemente segura.',
        effect: 'Fallback honesto en lugar de degradacion silenciosa.',
      },
      {
        index: '03',
        title: 'La verdad backend en el centro',
        description:
          'La verdad operativa sobre estado, explicacion y seguimiento se mantiene en el nucleo, no repartida entre la logica de pantalla o resultados derivados de integraciones.',
        effect: 'Verdad gobernada por backend frente a logica fragmentada de UI o integraciones.',
      },
      {
        index: '04',
        title: 'Ligado a roles y tenants',
        description:
          'Los accesos y las acciones siguen ligados a organizacion, contexto y rol. Asi Velvoix sigue siendo gobernable cuando conviven varios equipos y entornos.',
        effect: 'Limites claros entre organizaciones, roles y contextos.',
      },
      {
        index: '05',
        title: 'Reconstruible y auditable',
        description:
          'El seguimiento, los cambios de estado y las decisiones criticas siguen siendo trazables, para que la evaluacion y la mejora de calidad no dependan de la memoria ni de exportaciones desconectadas.',
        effect: 'Seguimiento trazable en lugar de instantaneas aisladas.',
      },
      {
        index: '06',
        title: 'Gobernable operativamente',
        description:
          'La observabilidad, la titularidad y la gobernanza forman parte del comportamiento del producto. Asi se mantiene visible donde hace falta atencion y como debe responder el equipo de forma controlada.',
        effect: 'Control operativo como disciplina de producto, no como anadido de TI.',
      },
    ],
    closingLine:
      'En conjunto, estas capas hacen que Velvoix no sea una capa de notificaciones ni una capa de caja negra, sino una plataforma asistencial explicable y gobernable.',
  },
  snapshots: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Velvoix no solo muestra senales, sino que reune triaje, seguimiento, gestion y reconstruccion en un entorno operativo orientado al cuidado.',
    cards: [
      {
        title: 'Pagina de eventos',
        caption: 'La urgencia, el residente y la senal principal siguen siendo faciles de escanear en una lista de trabajo tranquila.',
        image: '/products/proof-operations.png',
        tone: 'Operaciones',
      },
      {
        title: 'Gestion',
        caption: 'El por que y la accion recomendada se muestran como razonamiento operativo explicable.',
        image: '/products/proof-explainability.png',
        tone: 'Explicabilidad',
      },
      {
        title: 'Gestion de boxes',
        caption: 'El control operativo se mantiene sereno y gobernable en la capa de administracion.',
        image: '/products/proof-control.png',
        tone: 'Control',
      },
      {
        title: 'Vision tecnica',
        caption: 'La gobernanza se mantiene controlada mediante perfiles, estado y gestion del triaje.',
        image: '/products/proof-governance.png',
        tone: 'Governance',
      },
    ],
  },
  pilot: {
    eyebrow: 'Piloto y colaboracion',
    title: 'Explore con Velvoix que aporta un workflow asistencial gobernable en la practica',
    description:
      'Un piloto ayuda a ver como encaja Velvoix en su practica asistencial, las rutinas del equipo y los procesos operativos.',
    points: [
      'Residencias y cuidados de larga duracion',
      'Equipos que buscan un seguimiento mas claro',
      'Partners que quieren explorar el encaje con procesos e integraciones',
    ],
    primaryCta: 'Programar una conversacion piloto',
    secondaryCta: 'Hablar de colaboracion',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Sigamos la conversacion',
    description:
      'Quiere explorar si Velvoix encaja con su organizacion, un contexto piloto o una colaboracion? Dejenos sus datos y nos pondremos en contacto de forma dirigida.',
    inquiryTypes: {
      pilot: 'Exploracion piloto',
      partnership: 'Colaboracion',
      general: 'Consulta general',
    },
    reasons: [
      'Exploracion piloto para organizaciones asistenciales',
      'Hablar de colaboracion estrategica',
      'Pregunta general sobre la plataforma o el contexto de despliegue',
    ],
    directEmailNote: 'Para consultas comerciales, pilotos y conversaciones de colaboracion.',
    routeContent: {
      pilot: {
        helper: 'Elija esta via si quiere hablar de un piloto, del contexto asistencial o de una exploracion practica.',
        messagePlaceholder: 'Describa brevemente su organizacion, el contexto y que le gustaria explorar en un piloto.',
        submit: 'Programar conversacion',
      },
      partnership: {
        helper: 'Elija esta via si quiere hablar de colaboracion, integracion o colaboracion estrategica.',
        messagePlaceholder: 'Describa brevemente su organizacion, su rol y que tipo de colaboracion desea tratar.',
        submit: 'Hablar de colaboracion',
      },
      general: {
        helper: 'Elija esta via para una consulta comercial general sobre la plataforma o su contexto de implantacion.',
        messagePlaceholder: 'Describa brevemente su pregunta o sobre que le gustaria recibir mas informacion.',
        submit: 'Enviar solicitud',
      },
    },
    labels: {
      name: 'Nombre',
      organisation: 'Organizacion',
      email: 'Correo electronico',
      phone: 'Telefono (opcional)',
      message: 'Mensaje',
      submit: 'Enviar solicitud',
    },
    placeholders: {
      name: 'Nombre Apellido',
      organisation: 'Nombre de su organizacion',
      email: 'nombre@organizacion.es',
      phone: '+34 600 123 456',
      message: 'Cuentenos brevemente que le gustaria explorar o conocer mejor.',
    },
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Introduzca una direccion de correo valida.',
      phone: 'Introduzca un numero de telefono valido o deje este campo vacio.',
      generic: 'Se ha producido un error al enviar su mensaje. Vuelva a intentarlo o contactenos directamente.',
    },
    success: 'Gracias. Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible.',
    error:
      'Se ha producido un error al enviar su mensaje. Vuelva a intentarlo o contactenos directamente.',
    directEmailLabel: 'Contacto directo',
    directEmailValue: 'info@velvoix.com',
  },
  footer: {
    brand: 'Velvoix',
    languageNl: 'Nederlands',
    languageEn: 'English',
    languageDe: 'Deutsch',
    languageEs: 'Espanol',
    contact: 'Contacto',
    privacy: 'Politica de privacidad',
    cookies: 'Politica de cookies',
    terms: 'Terminos y condiciones',
    copyright: '© 2026 Velvoix® · Todos los derechos reservados.',
  },
};



