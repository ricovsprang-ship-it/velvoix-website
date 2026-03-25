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
      'Velvoix hilft Pflegeorganisationen dabei, Rufknöpfe, Spracheingaben und andere Pflegesignale in nachvollziehbare, priorisierte und auditierbare Pflege-Workflows zu übersetzen.',
    ogTitle: 'Velvoix | Klare Pflegehandlung aus Signalen',
    ogDescription:
      'Eine Einführung in Velvoix: vom Signal zu nachvollziehbarem, priorisiertem und auditierbarem Pflege-Workflow.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'Vom Signal zur klaren Pflegehandlung',
    subtitle:
      'Velvoix hilft Pflegeorganisationen dabei, Rufknöpfe, Spracheingaben und andere Pflegesignale in nachvollziehbare, priorisierte und auditierbare Pflege-Workflows zu übersetzen.',
    supporting:
      'Entwickelt für Pflegeumgebungen, in denen Klarheit, Nachverfolgung und Rekonstruktion zahlen.',
    primaryCta: 'Velvoix entdecken',
    secondaryCta: 'So funktioniert es',
    metrics: [
      { value: 'Nachvollziehbar', label: 'Vom Signal zur verständlichen Folgeaktion' },
      { value: 'Auditierbar', label: 'Statusverlauf und Rekonstruktion bleiben nachvollziehbar' },
      { value: 'Beherrschbar', label: 'Passt in bestehende Pflegeumgebungen ohne neue Meldungsschicht' },
    ],
  },
  propositionBridge: {
    eyebrow: 'Auf einen Blick',
    title: 'Vom eingehenden Signal zur handhabbaren Nachverfolgung',
    description:
      'Rufknöpfe, Spracheingaben und andere Pflegesignale erhalten durch Velvoix Kontext, Erklärung und einen handhabbaren nächsten Schritt.',
    stages: [
      {
        label: 'Was eingeht',
        title: 'Signale aus dem Pflegealltag',
        description:
          'Rufknöpfe, Spracheingaben und andere Pflegesignale kommen kontrolliert als Ausgangspunkt für die Nachverfolgung an.',
      },
      {
        label: 'Was Velvoix hinzufügt',
        title: 'Operative Einordnung rund um das Signal',
        description:
          'Velvoix fügt Kontext, Triage, Erklärung, Verantwortung und Eventbildung hinzu, damit Teams schneller verstehen, was Aufmerksamkeit braucht.',
      },
      {
        label: 'Was daraus entsteht',
        title: 'Handhabbare Nachverfolgung',
        description:
          'Das führt zu klareren nächsten Schritten, weniger Interpretationslast und besserer Rekonstruktion des Ablaufs.',
      },
    ],
  },
  challenge: {
    eyebrow: 'Die Herausforderung',
    title: 'Wenn ein Signal noch keine klare Pflegehandlung ist',
    description:
      'Viele Systeme können zwar registrieren, dass etwas passiert ist, unterstützen aber den nächsten Schritt nicht ausreichend: Was ist wahrscheinlich los, wie dringend ist es, welche Folgeaktion passt und wie lässt sich der Ablauf später sauber rekonstruieren?',
    proofPanels: {
      explainabilityLabel: 'Erklärbarkeit',
      explainabilityTitle: 'Warum',
      explainabilitySummary: 'Der Hilferuf wurde innerhalb kurzer Zeit wiederholt ausgelöst.',
      explainabilitySupporting: 'Basierend auf Triage-Regeln und Event-Kontext.',
      explainabilityItems: [
        { label: 'Primäres Signal', value: 'Wiederholter Hilferuf' },
        { label: 'Kernbeobachtung', value: 'Erneute Nachverfolgung ist wahrscheinlich erforderlich.' },
        { label: 'Triage-Basis', value: 'Wiederholung in kurzer Zeit und Kontext des aktuellen Events.' },
      ],
      followUpLabel: 'Operative Folgeaktion',
      followUpTitle: 'Empfohlene Maßnahme',
      followUpSummary: 'Gehen Sie direkt zur Bewohnerin oder zum Bewohner und prüfen Sie die Situation.',
      followUpItems: [
        { label: 'Dringlichkeit', value: 'Direkt' },
        { label: 'SLA-Status', value: 'SLA kritisch' },
        { label: 'Verantwortung', value: 'Noch nicht zugewiesen' },
      ],
      followUpAction: 'Übernehmen',
    },
  },
  flow: {
    eyebrow: 'Was Velvoix tut',
    title: 'Velvoix schafft Struktur zwischen Signal und Nachverfolgung',
    description:
      'Velvoix übersetzt Signale in ein handhabbares operatives Ergebnis mit Kontext, Triage und Folgeaktion.',
    flow: ['Signal', 'Kontext', 'Triage', 'Event', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    supporting:
      'Dadurch wird die Nachverfolgung klarer, konsistenter und besser rekonstruierbar.',
  },
  howItWorks: {
    eyebrow: 'Wie es funktioniert',
    title: 'Von der Eingabe zur handhabbaren Folgeaktion',
    description:
      'Velvoix nimmt Signale nicht nur entgegen, sondern reichert sie mit Kontext, Triage und handhabbarer Eventlogik an, damit Pflegeteams schneller verstehen, was Aufmerksamkeit braucht und welcher nächste Schritt sinnvoll ist.',
    panelLabel: 'Operativer Ablauf',
    panelSupporting: 'Von der Eingabe über Kontext und Triage bis zur handhabbaren Nachverfolgung.',
    steps: [
      { title: 'Eingabe', description: 'Rufknopf, Sprache oder anderes Pflegesignal.' },
      { title: 'Kontext', description: 'Verlauf, Auslöser und Situation werden mit einbezogen.' },
      { title: 'Triage', description: 'Dringlichkeit und Erklärung werden strukturiert.' },
      { title: 'Event', description: 'Es entsteht eine handhabbare operative Einheit.' },
      { title: 'Workflow', description: 'Nachverfolgung, Eigentümerschaft und Status werden steuerbar.' },
      { title: 'Audit', description: 'Rekonstruktion und Auswertung bleiben nachvollziehbar.' },
    ],
    stepNotes: [
      'Eingaben kommen kontrolliert an',
      'Kontext macht die Einordnung fundierter',
      'Triage macht Dringlichkeit nachvollziehbar',
      'Eventbildung macht Folgeaktionen handhabbar',
      'Workflow hält Status steuerbar',
      'Audit hält Rekonstruktion intakt',
    ],
  },
  compareChains: {
    eyebrow: 'Kettenunterschied',
    title: 'Nicht von der Meldung zur Interpretation, sondern vom Signal zum steuerbaren Workflow',
    description:
      'Der Unterschied liegt in der Kette: Wo klassische Systeme bei einer Meldung stehen bleiben, ergänzt Velvoix Kontext, Triage und Eventbildung, damit Nachverfolgung steuerbar wird.',
    compareLabel: 'Vergleich',
    outcomes: ['Weniger Interpretationslast', 'Bessere Priorisierung', 'Bessere Rekonstruktion'],
    traditionalTitle: 'Klassische Kette',
    traditionalSteps: ['Signal', 'Meldung', 'Manuelle Interpretation'],
    velvoixTitle: 'Velvoix-Kette',
    velvoixSteps: ['Signal', 'Kontext', 'Triage', 'Event', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    velvoixSupporting: 'Jede zusätzliche Ebene fugt Bedeutung hinzu und macht Nachverfolgung, Eskalation und Audit steuerbar.',
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
        description: 'Dringlichkeit und empfohlene Maßnahme werden in nachvollziehbarer Pflegesprache sichtbar.',
      },
      {
        title: 'Event',
        description:
          'Das Ergebnis wird zu einer handhabbaren operativen Einheit für Status, Verantwortung und nachste Schritte.',
      },
      {
        title: 'Workflow',
        description: 'Nachverfolgung wird über Aktionen, Statusverlauf und klare Verantwortung steuerbar.',
      },
      {
        title: 'Eskalation',
        description: 'Wenn Nachverfolgung stockt oder Risiko steigt, bleibt Eskalation logisch und kontrollierbar.',
      },
      {
        title: 'Rekonstruktion',
        description: 'Entscheidungen, Statusverlauf und Nachverfolgung bleiben für Auswertung und Audit nachvollziehbar.',
      },
    ],
  },
  whyVelvoix: {
    eyebrow: 'Warum Velvoix anders ist',
    title: 'Warum Velvoix operativ anders arbeitet',
    description:
      'Der operative Unterschied liegt in Produktentscheidungen rund um Eventbildung, erklärbare Triage und eine gemeinsame operative Wahrheit.',
    cards: [
      {
        title: 'Keine Benachrichtigungsschicht',
        description:
          'Velvoix lässt Signale nicht als isolierte Meldungen zirkulieren, sondern verwandelt sie in handhabbare Events mit Kontext, Verantwortung und Nachverfolgung.',
      },
      {
        title: 'Erklärbare Triage',
        description:
          'Keine Black-Box-Bewertung, sondern eine klare Kombination aus Dringlichkeit, Kontext und empfohlener Maßnahme in Pflegesprache.',
      },
      {
        title: 'Event-Wahrheit für Workflow und Audit',
        description:
          'Eine operative Wahrheit für Status, Verantwortung, Eskalation und Rekonstruktion.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Technischer Kern',
    title: 'Für verlässliche Nachverfolgung unter Druck entwickelt',
    description:
      'Die Stärke von Velvoix liegt nicht in einem einzelnen Modell, Bildschirm oder Eingangssignal, sondern in einem Produktkern, der Event-Wahrheit, erklärbare Triage, Nachverfolgung und Governance kontrolliert zusammenhält - auch wenn der Betrieb unter Druck steht oder Teile der Kette eingeschränkt sind.',
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
          'Velvoix ist so ausgelegt, dass Nachverfolgung nutzbar bleibt, wenn Teile der Kette vorübergehend eingeschränkt sind. Nicht durch Scheinsicherheit, sondern indem Kernstatus und nachste Maßnahme kontrolliert sichtbar bleiben.',
        effect: 'Verlässlicher Workflow, auch wenn nicht jeder Teil der Kette perfekt reagiert.',
      },
      {
        index: '02',
        title: 'Keine falsche Sicherheit',
        description:
          'Wenn Kontext, Qualität oder Verfügbarkeit begrenzt sind, bleibt das sichtbar und steuerbar, statt hinter scheinbar sicheren Ausgaben zu verschwinden.',
        effect: 'Ehrlicher Fallback statt stiller Degradierung.',
      },
      {
        index: '03',
        title: 'Backend-Wahrheit im Kern',
        description:
          'Die operative Wahrheit über Status, Erklärung und Nachverfolgung liegt im Kern und nicht in UI-Logik oder abgeleiteten Integrationsergebnissen.',
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
          'Nachverfolgung, Statusänderungen und kritische Entscheidungen bleiben nachvollziehbar, sodass Auswertung und Qualitätsverbesserung nicht von Erinnerung oder losen Exporten abhangen.',
        effect: 'Nachvollziehbare Nachverfolgung statt isolierter Momentaufnahmen.',
      },
      {
        index: '06',
        title: 'Operativ steuerbar',
        description:
          'Observability, Verantwortlichkeit und Governance gehören zum Produktverhalten. So bleibt sichtbar, wo Aufmerksamkeit nötig ist und wie Teams kontrolliert reagieren sollen.',
        effect: 'Operative Kontrolle als Produktdisziplin statt als nachgelagerte IT-Aufgabe.',
      },
    ],
    closingLine:
      'Zusammen sorgen diese Ebenen dafür, dass Velvoix keine Meldungsschicht oder Black-Box-Schicht bleibt, sondern eine erklärbare und steuerbare Pflegeplattform wird.',
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
        caption: 'Warum und empfohlene Maßnahme werden als nachvollziehbare operative Begründung sichtbar.',
        image: '/products/proof-explainability.png',
        tone: 'Erklärbarkeit',
      },
      {
        title: 'Boxverwaltung',
        caption: 'Operative Kontrolle bleibt in der Verwaltungsebene ruhig und steuerbar.',
        image: '/products/proof-control.png',
        tone: 'Kontrolle',
      },
      {
        title: 'Technischer Überblick',
        caption: 'Governance bleibt über Profile, Status und Triage-Verwaltung unter Kontrolle.',
        image: '/products/proof-governance.png',
        tone: 'Governance',
      },
    ],
  },
  pilot: {
    eyebrow: 'Pilot und Zusammenarbeit',
    title: 'Mit Velvoix erkunden, was steuerbarer Pflege-Workflow bringt',
    description:
      'Ein Pilot macht sichtbar, wie Velvoix in Ihre Pflegepraxis, Teamroutinen und operativen Prozesse passt.',
    points: [
      'Pflegeheime und Langzeitpflege',
      'Teams, die mehr Klarheit in der Nachverfolgung wollen',
      'Partner, die Passung zu Prozessen und Integrationen prüfen möchten',
    ],
    primaryCta: 'Pilotgespräch vereinbaren',
    secondaryCta: 'Zusammenarbeit besprechen',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Starten Sie eine gezielte Prüfung',
    description:
      'Wählen Sie den Weg, der zu Ihrer Anfrage passt: Pilotprüfung, Kooperationsweg oder allgemeine geschäftliche Frage.',
    reasonsLabel: 'Wege',
    inquiryTypes: {
      pilot: 'Pilotgespräch',
      partnership: 'Kooperationsweg',
      general: 'Geschäftliche Frage',
    },
    reasons: [
      'Pilotprüfung für Pflegeorganisationen und Teams',
      'Kooperationsweg für Partner, Rollout und Integrationsumfang',
      'Geschäftliche Frage zu Plattform, Einsatzkontext oder Planung',
    ],
    directEmailNote: 'Für Pilotprüfungen, Kooperationswege und geschäftliche Fragen.',
    routeContent: {
      pilot: {
        helper: 'Wählen Sie diesen Weg, wenn Sie prüfen wollen, ob Velvoix in Ihrer Pflegeumgebung pilotfähig und operativ relevant ist.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, den Pflegekontext und was Sie in einer Pilotprüfung bewerten möchten.',
        submit: 'Pilotprüfung senden',
      },
      partnership: {
        helper: 'Wählen Sie diesen Weg, wenn Sie Partner-Passung, Rollout, Integration oder einen strategischen Kooperationsweg besprechen möchten.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, Ihre Rolle und welchen Kooperations- oder Rollout-Weg Sie prüfen möchten.',
        submit: 'Kooperationsprüfung senden',
      },
      general: {
        helper: 'Wählen Sie diesen Weg für eine allgemeine geschäftliche Frage zur Plattform, zum Einsatzkontext oder zu nächsten Schritten.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Frage und welcher Kontext oder Zeitrahmen dabei wichtig ist.',
        submit: 'Geschäftliche Frage senden',
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
      message: 'Beschreiben Sie kurz, was Sie erkunden oder worüber Sie mehr erfahren möchten.',
    },
    errors: {
      required: 'Dieses Feld ist erforderlich.',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      phone: 'Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer.',
      generic: 'Beim Senden Ihrer Nachricht ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
    },
    success: 'Vielen Dank. Wir haben Ihre Nachricht erhalten und melden uns so bald wie möglich bei Ihnen.',
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
    languageEs: 'Espa\u00F1ol',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklärung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Allgemeine Geschäftsbedingungen',
    copyright: '\u00A9 2026 Velvoix\u00AE - Alle Rechte vorbehalten.',
  },
};

export const esContent: SiteContent = {
  locale: 'es',
  nav: [
    { label: 'Inicio', href: '#home' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Por qué Velvoix', href: '#why-velvoix' },
    { label: 'Piloto', href: '#pilot' },
    { label: 'Contacto', href: '#contact' },
  ],
  meta: {
    title: 'Velvoix | De la señal a una acción asistencial clara',
    description:
      'Velvoix ayuda a las organizaciones sanitarias a convertir llamadas de botón, entradas por voz y otras señales asistenciales en un flujo asistencial explicable, priorizado y auditable.',
    ogTitle: 'Velvoix | Acción asistencial clara a partir de señales',
    ogDescription:
      'Una introducción a Velvoix: de la señal a un flujo asistencial explicable, priorizado y auditable.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'De la señal a una acción asistencial clara',
    subtitle:
      'Velvoix ayuda a las organizaciones sanitarias a convertir llamadas de botón, entradas por voz y otras señales asistenciales en un flujo asistencial explicable, priorizado y auditable.',
    supporting:
      'Diseñado para entornos asistenciales donde importan la claridad, el seguimiento y la reconstrucción.',
    primaryCta: 'Explorar Velvoix',
    secondaryCta: 'Ver cómo funciona',
    metrics: [
      { value: 'Explicable', label: 'De la señal a un seguimiento comprensible' },
      { value: 'Auditable', label: 'El estado y la reconstrucción siguen siendo trazables' },
      { value: 'Controlado', label: 'Se integra sin crear otra capa de alertas' },
    ],
  },
  propositionBridge: {
    eyebrow: 'De un vistazo',
    title: 'De la señal entrante al seguimiento operativo',
    description:
      'Las llamadas de botón, la voz y otras señales asistenciales adquieren contexto, explicación y un siguiente paso operativo con Velvoix.',
    stages: [
      {
        label: 'Qué entra',
        title: 'Señales del trabajo asistencial',
        description:
          'Las llamadas de botón, la voz y otras señales asistenciales entran de forma controlada como punto de partida del seguimiento.',
      },
      {
        label: 'Qué aporta Velvoix',
        title: 'Sentido operativo alrededor de la señal',
        description:
          'Velvoix añade contexto, triaje, explicación, titularidad y formación del evento para que el equipo entienda antes qué requiere atención.',
      },
      {
        label: 'Qué cambia después',
        title: 'Seguimiento gobernable',
        description:
          'Eso se traduce en pasos más claros, menos carga interpretativa y una mejor reconstrucción de lo ocurrido.',
      },
    ],
  },
  challenge: {
    eyebrow: 'El reto',
    title: 'Cuando una señal todavía no es una acción asistencial clara',
    description:
      'Muchos sistemas pueden registrar que ha ocurrido algo, pero no apoyan suficientemente el siguiente paso: qué está pasando probablemente, qué urgencia tiene, qué seguimiento encaja y cómo puede reconstruirse después todo el recorrido.',
    proofPanels: {
      explainabilityLabel: 'Explicabilidad',
      explainabilityTitle: 'Por qué',
      explainabilitySummary: 'El botón de ayuda se activó repetidamente en poco tiempo.',
      explainabilitySupporting: 'Basado en reglas de triaje y contexto del evento.',
      explainabilityItems: [
        { label: 'Señal principal', value: 'Solicitud de ayuda repetida' },
        { label: 'Observación clave', value: 'Es probable que haga falta un nuevo seguimiento.' },
        { label: 'Base del triaje', value: 'Repetición en poco tiempo y contexto del evento actual.' },
      ],
      followUpLabel: 'Seguimiento operativo',
      followUpTitle: 'Acción recomendada',
      followUpSummary: 'Acuda directamente al residente y compruebe la situación.',
      followUpItems: [
        { label: 'Urgencia', value: 'Directa' },
        { label: 'Estado SLA', value: 'SLA crítico' },
        { label: 'Responsable', value: 'Aún sin asignar' },
      ],
      followUpAction: 'Asumir',
    },
  },
  flow: {
    eyebrow: 'Qué hace Velvoix',
    title: 'Velvoix aporta estructura entre la señal y el seguimiento',
    description:
      'Velvoix convierte las señales en un resultado operativo claro con contexto, triaje y seguimiento.',
    flow: ['Señal', 'Contexto', 'Triaje', 'Evento', 'Flujo', 'Escalada', 'Reconstrucción'],
    supporting:
      'Así el seguimiento resulta más claro, más coherente y más fácil de reconstruir.',
  },
  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'De la entrada a un seguimiento operativo',
    description:
      'Velvoix no solo recibe señales, sino que las enriquece con contexto, triaje y una lógica de evento accionable para que los equipos asistenciales entiendan antes qué requiere atención y cuál es el siguiente paso lógico.',
    panelLabel: 'Flujo operativo',
    panelSupporting: 'De la entrada al contexto, el triaje y un seguimiento accionable.',
    steps: [
      { title: 'Entrada', description: 'Botón, voz u otra señal asistencial.' },
      { title: 'Contexto', description: 'Se ponderan historial, desencadenante y situación.' },
      { title: 'Triaje', description: 'Se estructuran la urgencia y la explicación.' },
      { title: 'Evento', description: 'Se crea una unidad operativa gestionable.' },
      { title: 'Workflow', description: 'Seguimiento, titularidad y estado se vuelven gestionables.' },
      { title: 'Auditoría', description: 'La reconstrucción y la evaluación siguen siendo trazables.' },
    ],
    stepNotes: [
      'La entrada llega de forma controlada',
      'El contexto enriquece la interpretación',
      'El triaje hace explicable la urgencia',
      'La creación del evento hace viable el seguimiento',
      'El workflow mantiene el estado gobernable',
      'La auditoría mantiene intacta la reconstrucción',
    ],
  },
  compareChains: {
    eyebrow: 'Diferencia en la cadena',
    title: 'No de la alerta a la interpretación, sino de la señal al workflow gobernable',
    description:
      'La diferencia está en la cadena: donde los sistemas tradicionales se detienen en una alerta, Velvoix añade contexto, triaje y formación del evento para que el seguimiento sea gobernable.',
    compareLabel: 'Comparación',
    outcomes: ['Menos carga interpretativa', 'Mejor priorización', 'Mejor reconstrucción'],
    traditionalTitle: 'Cadena tradicional',
    traditionalSteps: ['Señal', 'Alerta', 'Interpretación manual'],
    velvoixTitle: 'Cadena Velvoix',
    velvoixSteps: ['Señal', 'Contexto', 'Triaje', 'Evento', 'Flujo', 'Escalada', 'Reconstrucción'],
    velvoixSupporting: 'Cada capa adicional aporta significado y hace gobernables el seguimiento, la escalada y la auditoría.',
    stepDetails: [
      {
        title: 'Señal',
        description:
          'Una llamada de botón, una entrada por voz u otra señal asistencial entra de forma controlada como punto de partida del seguimiento.',
      },
      {
        title: 'Contexto',
        description: 'El contexto del evento, el historial y la situación ayudan a entender mejor la señal.',
      },
      {
        title: 'Triaje',
        description: 'La urgencia y la acción recomendada se hacen visibles con lenguaje asistencial comprensible.',
      },
      {
        title: 'Evento',
        description:
          'El resultado se convierte en una unidad operativa viable para estado, titularidad y siguientes pasos.',
      },
      {
        title: 'Workflow',
        description: 'El seguimiento se vuelve gobernable mediante acciones, evolución de estado y responsabilidad clara.',
      },
      {
        title: 'Escalada',
        description: 'Si el seguimiento se detiene o el riesgo aumenta, la escalada sigue siendo lógica y controlable.',
      },
      {
        title: 'Reconstrucción',
        description: 'Las decisiones, la evolución del estado y el seguimiento siguen siendo trazables para evaluación y auditoría.',
      },
    ],
  },
  whyVelvoix: {
    eyebrow: 'Por qué Velvoix es diferente',
    title: 'Por qué Velvoix funciona de otra manera en la operación',
    description:
      'La diferencia operativa reside en decisiones de producto en torno a la formación del evento, el triaje explicable y una verdad operativa única.',
    cards: [
      {
        title: 'No es una capa de notificaciones',
        description:
          'Velvoix no deja que las señales circulen como alertas aisladas, sino que las convierte en eventos operativos con contexto, titularidad y seguimiento.',
      },
      {
        title: 'Triaje explicable',
        description:
          'No es una puntuación de caja negra, sino una combinación clara de urgencia, contexto y acción recomendada en lenguaje asistencial.',
      },
      {
        title: 'Verdad del evento para workflow y auditoría',
        description:
          'Una verdad operativa para estado, titularidad, escalada y reconstrucción.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Núcleo técnico',
    title: 'Diseñado para un seguimiento fiable bajo presión',
    description:
      'La fortaleza de Velvoix no reside en una pantalla, modelo o fuente de señal aislados, sino en un núcleo de producto que mantiene unidas, de forma controlada, la verdad del evento, el triaje explicable, el seguimiento y la gobernanza, incluso cuando la operación está bajo presión o parte de la cadena queda limitada.',
    capabilities: [
      'Verdad backend',
      'Fallback honesto',
      'Seguimiento auditable',
      'Acceso por rol',
      'Separación por tenant',
      'Observabilidad de la cadena',
    ],
    rows: [
      {
        index: '01',
        title: 'Sigue siendo utilizable ante fallos parciales',
        description:
          'Velvoix esta diseñado para que el seguimiento siga siendo utilizable cuando partes de la cadena quedan temporalmente limitadas. No fingiendo certeza, sino manteniendo visibles de forma controlada el estado clave y la siguiente acción.',
        effect: 'Workflow fiable incluso cuando no toda la cadena responde de forma perfecta.',
      },
      {
        index: '02',
        title: 'Sin falsa certeza',
        description:
          'Si el contexto, la calidad o la disponibilidad son limitados, eso debe seguir siendo visible y gobernable en lugar de desaparecer detrás de una salida aparentemente segura.',
        effect: 'Fallback honesto en lugar de degradación silenciosa.',
      },
      {
        index: '03',
        title: 'La verdad backend en el centro',
        description:
          'La verdad operativa sobre estado, explicación y seguimiento se mantiene en el núcleo, no repartida entre la lógica de pantalla o resultados derivados de integraciónes.',
        effect: 'Verdad gobernada por backend frente a lógica fragmentada de UI o integraciónes.',
      },
      {
        index: '04',
        title: 'Ligado a roles y tenants',
        description:
          'Los accesos y las acciones siguen ligados a la organización, al contexto y al rol. Así Velvoix sigue siendo gobernable cuando conviven varios equipos y entornos.',
        effect: 'Límites claros entre organizaciones, roles y contextos.',
      },
      {
        index: '05',
        title: 'Reconstruible y auditable',
        description:
          'El seguimiento, los cambios de estado y las decisiones críticas siguen siendo trazables, para que la evaluación y la mejora de calidad no dependan de la memoria ni de exportaciones desconectadas.',
        effect: 'Seguimiento trazable en lugar de instantáneas aisladas.',
      },
      {
        index: '06',
        title: 'Gobernable operativamente',
        description:
          'La observabilidad, la titularidad y la gobernanza forman parte del comportamiento del producto. Así se mantiene visible dónde hace falta atención y cómo debe responder el equipo de forma controlada.',
        effect: 'Control operativo como disciplina de producto, no como añadido de TI.',
      },
    ],
    closingLine:
      'En conjunto, estas capas hacen que Velvoix no sea una capa de notificaciones ni una capa de caja negra, sino una plataforma asistencial explicable y gobernable.',
  },
  snapshots: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Velvoix no solo muestra señales, sino que reune triaje, seguimiento, gestión y reconstrucción en un entorno operativo orientado al cuidado.',
    cards: [
      {
        title: 'Página de eventos',
        caption: 'La urgencia, el residente y la señal principal siguen siendo fáciles de escanear en una lista de trabajo tranquila.',
        image: '/products/proof-operations.png',
        tone: 'Operaciónes',
      },
      {
        title: 'Gestión',
        caption: 'El motivo y la acción recomendada se muestran como razonamiento operativo explicable.',
        image: '/products/proof-explainability.png',
        tone: 'Explicabilidad',
      },
      {
        title: 'Gestión de boxes',
        caption: 'El control operativo se mantiene sereno y gobernable en la capa de administración.',
        image: '/products/proof-control.png',
        tone: 'Control',
      },
      {
        title: 'Visión técnica',
        caption: 'La gobernanza se mantiene controlada mediante perfiles, estado y gestión del triaje.',
        image: '/products/proof-governance.png',
        tone: 'Governance',
      },
    ],
  },
  pilot: {
    eyebrow: 'Piloto y colaboración',
    title: 'Explore con Velvoix que aporta un workflow asistencial gobernable en la práctica',
    description:
      'Un piloto ayuda a ver cómo encaja Velvoix en su práctica asistencial, las rutinas del equipo y los procesos operativos.',
    points: [
      'Residencias y cuidados de larga duración',
      'Equipos que buscan un seguimiento más claro',
      'Socios que quieren explorar el encaje con procesos e integraciónes',
    ],
    primaryCta: 'Solicitar conversación piloto',
    secondaryCta: 'Hablar de colaboración',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Inicie una exploración enfocada',
    description:
      'Elija la vía que encaje con su solicitud: exploración piloto, ruta de colaboración o pregunta empresarial.',
    reasonsLabel: 'Vías',
    inquiryTypes: {
      pilot: 'Exploración piloto',
      partnership: 'Ruta de colaboración',
      general: 'Pregunta empresarial',
    },
    reasons: [
      'Exploración piloto para organizaciones y equipos asistenciales',
      'Ruta de colaboración para socios, despliegue e integración',
      'Pregunta empresarial sobre plataforma, contexto de uso o planificación',
    ],
    directEmailNote: 'Para exploraciones piloto, rutas de colaboración y preguntas empresariales.',
    routeContent: {
      pilot: {
        helper: 'Elija esta vía si quiere evaluar si Velvoix es relevante para un piloto y si encaja operativamente en su entorno asistencial.',
        messagePlaceholder: 'Describa brevemente su organización, el contexto asistencial y qué desea evaluar en una exploración piloto.',
        submit: 'Enviar exploración piloto',
      },
      partnership: {
        helper: 'Elija esta vía si quiere tratar encaje de socio, despliegue, integración o una ruta de colaboración estratégica.',
        messagePlaceholder: 'Describa brevemente su organización, su rol y qué ruta de colaboración o despliegue desea explorar.',
        submit: 'Enviar exploración de colaboración',
      },
      general: {
        helper: 'Elija esta vía para una pregunta empresarial sobre la plataforma, el contexto de implantación o los siguientes pasos.',
        messagePlaceholder: 'Describa brevemente su pregunta y qué contexto o plazo es relevante.',
        submit: 'Enviar pregunta empresarial',
      },
    },
    labels: {
      name: 'Nombre',
      organisation: 'Organización',
      email: 'Correo electrónico',
      phone: 'Teléfono (opcional)',
      message: 'Mensaje',
      submit: 'Enviar solicitud',
    },
    placeholders: {
      name: 'Nombre Apellido',
      organisation: 'Nombre de su organización',
      email: 'nombre@organización.es',
      phone: '+34 600 123 456',
      message: 'Cuentenos brevemente que le gustaria explorar o conocer mejor.',
    },
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Introduzca una direccion de correo valida.',
      phone: 'Introduzca un numero de telefono valido o deje este campo vacio.',
      generic: 'Se ha producido un error al envíar su mensaje. Vuelva a intentarlo o contactenos directamente.',
    },
    success: 'Gracias. Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible.',
    error:
      'Se ha producido un error al envíar su mensaje. Vuelva a intentarlo o contactenos directamente.',
    directEmailLabel: 'Contacto directo',
    directEmailValue: 'info@velvoix.com',
  },
  footer: {
    brand: 'Velvoix',
    languageNl: 'Nederlands',
    languageEn: 'English',
    languageDe: 'Deutsch',
    languageEs: 'Espa\u00F1ol',
    contact: 'Contacto',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    terms: 'Términos y condiciones',
    copyright: '\u00A9 2026 Velvoix\u00AE - Todos los derechos reservados.',
  },
};






