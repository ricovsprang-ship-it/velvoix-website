import { publicContactEmails } from './contact-addresses';
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
      'Velvoix hilft Pflegeorganisationen, Pflegesignale in klare, nachvollziehbare und herleitbare Nachverfolgung zu übersetzen.',
    ogTitle: 'Velvoix | Klare Pflegehandlung aus Signalen',
    ogDescription:
      'Velvoix übersetzt Pflegesignale in klare Nachverfolgung mit Kontext, Triage und nachvollziehbarem Workflow.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'Vom Signal zur klaren Pflegehandlung',
    subtitle:
      'Velvoix hilft Pflegeorganisationen dabei, Rufknöpfe, Spracheingaben und andere Pflegesignale in klare, nachvollziehbare Nachverfolgung zu übersetzen.',
    supporting:
      'Für Teams, die schnelle Einordnung und nachvollziehbare Nachverfolgung brauchen.',
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
      'Vom eingehenden Pflegesignal zum klaren nächsten Schritt.',
    stages: [
      {
        label: 'Was eingeht',
        title: 'Signale aus dem Pflegealltag',
        description:
          'Rufknöpfe, Spracheingaben und andere Pflegesignale kommen kontrolliert an.',
      },
      {
        label: 'Was Velvoix hinzufügt',
        title: 'Operative Einordnung rund um das Signal',
        description:
          'Velvoix fügt Kontext, Triage und Verantwortung hinzu.',
      },
      {
        label: 'Was daraus entsteht',
        title: 'Handhabbare Nachverfolgung',
        description:
          'Das führt zu klarerer Aktion, weniger Interpretationslast und besserer Rekonstruktion.',
      },
    ],
  },
  challenge: {
    eyebrow: 'Die Herausforderung',
    title: 'Wenn ein Signal noch keine klare Pflegehandlung ist',
    description:
      'Viele Systeme registrieren zwar, dass etwas passiert ist, helfen aber zu wenig bei der Frage, was Aufmerksamkeit braucht, wie dringend es ist und welche Folgeaktion passt.',
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
      'Klassische Systeme bleiben oft bei der Meldung stehen. Velvoix ergänzt Kontext, Triage und Eventbildung, damit Nachverfolgung steuerbar wird.',
    compareLabel: 'Vergleich',
    outcomes: ['Weniger Interpretationslast', 'Bessere Priorisierung', 'Bessere Rekonstruktion'],
    traditionalTitle: 'Klassische Kette',
    traditionalSteps: ['Signal', 'Meldung', 'Manuelle Interpretation'],
    velvoixTitle: 'Velvoix-Kette',
    velvoixSteps: ['Signal', 'Kontext', 'Triage', 'Event', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    velvoixSupporting: 'Jede Ebene macht Nachverfolgung, Eskalation und Audit besser steuerbar.',
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
      'Die Stärke von Velvoix liegt in einem Produktkern, der Event-Wahrheit, erklärbare Triage, Nachverfolgung und Governance auch unter Druck zusammenhält.',
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
        title: 'Bleibt bei Teilstörungen nutzbar',
        description:
          'Nachverfolgung bleibt nutzbar, wenn Teile der Kette vorübergehend eingeschränkt sind, weil Kernstatus und nächste Maßnahme sichtbar bleiben.',
        effect: 'Verlässlicher Workflow, auch wenn nicht jeder Teil der Kette perfekt reagiert.',
      },
      {
        index: '02',
        title: 'Keine falsche Sicherheit',
        description:
          'Begrenzter Kontext oder begrenzte Verfügbarkeit bleiben sichtbar, statt hinter scheinbarer Sicherheit zu verschwinden.',
        effect: 'Ehrlicher Fallback statt stiller Degradierung.',
      },
      {
        index: '03',
        title: 'Backend-Wahrheit im Kern',
        description:
          'Status, Erklärung und Nachverfolgung liegen im Kern und nicht verteilt in UI-Logik oder abgeleiteten Integrationen.',
        effect: 'Backend-basierte Wahrheit statt fragmentierter UI- oder Integrationslogik.',
      },
      {
        index: '04',
        title: 'Rollen- und tenantgebunden',
        description:
          'Zugriffe und Aktionen bleiben an Organisation, Kontext und Rolle gebunden.',
        effect: 'Klare Grenzen zwischen Organisationen, Rollen und Kontexten.',
      },
      {
        index: '05',
        title: 'Rekonstruierbar und auditierbar',
        description:
          'Nachverfolgung, Statusänderungen und kritische Entscheidungen bleiben für Auswertung und Qualitätsverbesserung nachvollziehbar.',
        effect: 'Nachvollziehbare Nachverfolgung statt isolierter Momentaufnahmen.',
      },
      {
        index: '06',
        title: 'Operativ steuerbar',
        description:
          'Observability, Verantwortlichkeit und Governance gehören zum Produktverhalten, damit Teams kontrolliert reagieren können.',
        effect: 'Operative Kontrolle als Produktdisziplin statt als nachgelagerte IT-Aufgabe.',
      },
    ],
    closingLine:
      'So bleibt Velvoix auch unter Druck erklärbar und steuerbar.',
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
      'Wählen Sie den Weg, der passt: Pilotprüfung, Kooperationsweg oder geschäftliche Frage.',
    reasonsLabel: 'Wege',
    inquiryTypes: {
      pilot: 'Pilotgespräch',
      partnership: 'Kooperationsweg',
      general: 'Geschäftliche Frage',
    },
    reasons: [
      'Pilotprüfung für Pflegeorganisationen',
      'Kooperationsweg für Partner und Rollout',
      'Geschäftliche Frage zu Plattform oder Planung',
    ],
    directEmailNote: 'Für Piloten, Kooperation und geschäftliche Fragen.',
    routeContent: {
      pilot: {
        email: publicContactEmails.pilot,
        helper: 'Wählen Sie diesen Weg, um zu prüfen, ob Velvoix in Ihrer Pflegeumgebung pilotfähig und operativ relevant ist.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, den Pflegekontext und was Sie in einer Pilotprüfung bewerten möchten.',
        submit: 'Pilotprüfung senden',
      },
      partnership: {
        email: publicContactEmails.partners,
        helper: 'Wählen Sie diesen Weg für Partner-Passung, Rollout, Integration oder strategische Kooperation.',
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, Ihre Rolle und welchen Kooperations- oder Rollout-Weg Sie prüfen möchten.',
        submit: 'Kooperationsprüfung senden',
      },
      general: {
        email: publicContactEmails.general,
        helper: 'Wählen Sie diesen Weg für eine geschäftliche Frage zur Plattform, zum Einsatzkontext oder zu nächsten Schritten.',
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
    directEmailValue: publicContactEmails.general,
    routeEmailLabel: 'Route-E-Mail',
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
      'Velvoix ayuda a las organizaciones sanitarias a convertir señales asistenciales en un seguimiento claro, explicable y trazable.',
    ogTitle: 'Velvoix | Acción asistencial clara a partir de señales',
    ogDescription:
      'Velvoix traduce señales asistenciales en seguimiento claro con contexto, triaje y workflow trazable.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'De la señal a una acción asistencial clara',
    subtitle:
      'Velvoix ayuda a las organizaciones sanitarias a convertir llamadas de botón, entradas por voz y otras señales asistenciales en un seguimiento claro y explicable.',
    supporting:
      'Para equipos que necesitan interpretación rápida y seguimiento trazable.',
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
      'De la señal asistencial entrante al siguiente paso claro.',
    stages: [
      {
        label: 'Qué entra',
        title: 'Señales del trabajo asistencial',
        description:
          'Las llamadas de botón, la voz y otras señales asistenciales entran de forma controlada.',
      },
      {
        label: 'Qué aporta Velvoix',
        title: 'Sentido operativo alrededor de la señal',
        description:
          'Velvoix añade contexto, triaje y titularidad.',
      },
      {
        label: 'Qué cambia después',
        title: 'Seguimiento gobernable',
        description:
          'Eso se traduce en acciones más claras, menos carga interpretativa y mejor reconstrucción.',
      },
    ],
  },
  challenge: {
    eyebrow: 'El reto',
    title: 'Cuando una señal todavía no es una acción asistencial clara',
    description:
      'Muchos sistemas registran que ha ocurrido algo, pero ayudan poco a ver qué requiere atención, qué urgencia tiene y qué seguimiento encaja.',
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
      'Los sistemas tradicionales suelen detenerse en la alerta. Velvoix añade contexto, triaje y formación del evento para que el seguimiento sea gobernable.',
    compareLabel: 'Comparación',
    outcomes: ['Menos carga interpretativa', 'Mejor priorización', 'Mejor reconstrucción'],
    traditionalTitle: 'Cadena tradicional',
    traditionalSteps: ['Señal', 'Alerta', 'Interpretación manual'],
    velvoixTitle: 'Cadena Velvoix',
    velvoixSteps: ['Señal', 'Contexto', 'Triaje', 'Evento', 'Flujo', 'Escalada', 'Reconstrucción'],
    velvoixSupporting: 'Cada capa hace más gobernables el seguimiento, la escalada y la auditoría.',
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
      'La fortaleza de Velvoix reside en un núcleo de producto que mantiene unidas la verdad del evento, el triaje explicable, el seguimiento y la gobernanza, incluso bajo presión.',
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
          'El seguimiento sigue siendo utilizable cuando partes de la cadena quedan limitadas, porque el estado clave y la siguiente acción siguen visibles.',
        effect: 'Workflow fiable incluso cuando no toda la cadena responde de forma perfecta.',
      },
      {
        index: '02',
        title: 'Sin falsa certeza',
        description:
          'El contexto o la disponibilidad limitados siguen siendo visibles en lugar de ocultarse tras una certeza aparente.',
        effect: 'Fallback honesto en lugar de degradación silenciosa.',
      },
      {
        index: '03',
        title: 'La verdad backend en el centro',
        description:
          'La verdad sobre estado, explicación y seguimiento se mantiene en el núcleo, no repartida entre pantallas o integraciones derivadas.',
        effect: 'Verdad gobernada por backend frente a lógica fragmentada de UI o integraciónes.',
      },
      {
        index: '04',
        title: 'Ligado a roles y tenants',
        description:
          'Los accesos y las acciones siguen ligados a la organización, al contexto y al rol.',
        effect: 'Límites claros entre organizaciones, roles y contextos.',
      },
      {
        index: '05',
        title: 'Reconstruible y auditable',
        description:
          'El seguimiento, los cambios de estado y las decisiones críticas siguen siendo trazables para evaluación y mejora de calidad.',
        effect: 'Seguimiento trazable en lugar de instantáneas aisladas.',
      },
      {
        index: '06',
        title: 'Gobernable operativamente',
        description:
          'La observabilidad, la titularidad y la gobernanza forman parte del producto para que el equipo responda de forma controlada.',
        effect: 'Control operativo como disciplina de producto, no como añadido de TI.',
      },
    ],
    closingLine:
      'Así Velvoix sigue siendo explicable y gobernable incluso bajo presión.',
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
      'Elija la vía que encaja: exploración piloto, ruta de colaboración o pregunta empresarial.',
    reasonsLabel: 'Vías',
    inquiryTypes: {
      pilot: 'Exploración piloto',
      partnership: 'Ruta de colaboración',
      general: 'Pregunta empresarial',
    },
    reasons: [
      'Exploración piloto para organizaciones asistenciales',
      'Ruta de colaboración para socios y despliegue',
      'Pregunta empresarial sobre plataforma o planificación',
    ],
    directEmailNote: 'Para pilotos, colaboración y preguntas empresariales.',
    routeContent: {
      pilot: {
        email: publicContactEmails.pilot,
        helper: 'Elija esta vía para evaluar si Velvoix encaja operativamente en un piloto.',
        messagePlaceholder: 'Describa brevemente su organización, el contexto asistencial y qué desea evaluar en una exploración piloto.',
        submit: 'Enviar exploración piloto',
      },
      partnership: {
        email: publicContactEmails.partners,
        helper: 'Elija esta vía para tratar encaje de socio, despliegue, integración o colaboración estratégica.',
        messagePlaceholder: 'Describa brevemente su organización, su rol y qué ruta de colaboración o despliegue desea explorar.',
        submit: 'Enviar exploración de colaboración',
      },
      general: {
        email: publicContactEmails.general,
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
    routeEmailLabel: 'Correo de la ruta',
    directEmailValue: publicContactEmails.general,
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






