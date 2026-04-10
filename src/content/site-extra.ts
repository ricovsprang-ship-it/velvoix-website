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
    title: 'Velvoix | Vom Signal zur klaren Handlung in der Pflege',
    description:
      'Velvoix hilft Pflegeorganisationen, Pflegesignale in klare nächste Schritte, bessere Priorisierung und nachvollziehbare Nachverfolgung zu übersetzen.',
    ogTitle: 'Velvoix | Klare Pflegehandlung aus Signalen',
    ogDescription:
      'Velvoix hilft Teams, schneller zu erkennen, was Aufmerksamkeit braucht, was zuerst ansteht und wie Nachverfolgung nachvollziehbar bleibt.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'Vom Signal zur klaren Handlung in der Pflege',
    subtitle:
      'Viele Pflegesignale gehen ohne ausreichenden Kontext ein. Dadurch müssen Mitarbeitende unter Druck selbst entscheiden, was dringend ist und was zuerst geschehen muss. Velvoix macht aus einem Signal direkt einen klaren nächsten Schritt mit Kontext, Priorität und nachvollziehbarer Nachverfolgung.',
    supporting:
      'Weniger Zweifel, klarere Priorisierung und bessere Rekonstruktion im Rückblick.',
    primaryCta: 'Pilot erkunden',
    primaryHref: '#pilot',
    secondaryCta: 'Produkttour ansehen',
    secondaryHref: '#product-tour',
    metrics: [
      { value: 'Klar', label: 'Vom Signal zur gut verständlichen Handlung in der Pflege' },
      { value: 'Nachvollziehbar', label: 'Nachverfolgung und Rekonstruktion bleiben sichtbar' },
      { value: 'Praxistauglich', label: 'Passt in bestehende Pflegeumgebungen ohne zusätzlichen Arbeitslärm' },
    ],
  },
  propositionBridge: {
    eyebrow: 'Auf einen Blick',
    title: 'Von der Meldung zur klaren Nachverfolgung',
    description:
      'Velvoix hilft Teams, schneller zu erkennen, was Aufmerksamkeit braucht, welcher Schritt sinnvoll ist und wer ihn übernehmen sollte.',
    stages: [
      {
        label: 'Was hereinkommt',
        title: 'Eine Meldung ist noch keine klare Handlung',
        description: 'Viele Signale kommen ohne genügend Kontext an, um sofort richtig zu handeln.',
      },
      {
        label: 'Was Velvoix ergänzt',
        title: 'Kontext, Priorität und empfohlene Handlung',
        description: 'Velvoix macht schneller sichtbar, was dringend ist und welcher nächste Schritt sinnvoll ist.',
      },
      {
        label: 'Was das bringt',
        title: 'Ruhigere und klarere Nachverfolgung',
        description: 'Status, Verantwortung und der weitere Verlauf bleiben sichtbar, ohne zusätzlichen Interpretationsaufwand.',
      },
    ],
  },
  challenge: {
    eyebrow: 'Das Problem',
    title: 'Wenn eine Meldung noch keine klare Handlung ist',
    description:
      'Viele Systeme zeigen zwar, dass etwas geschieht, aber nicht sofort, was Aufmerksamkeit braucht, wie dringend es ist und welche Handlung erforderlich ist. Dadurch müssen Teams unter Druck weiter selbst interpretieren.',
    proofPanels: {
      explainabilityLabel: 'Erklärbarkeit',
      explainabilityTitle: 'Warum',
      explainabilitySummary: 'Der Hilferuf wurde innerhalb kurzer Zeit wiederholt ausgelöst.',
      explainabilitySupporting: 'Basierend auf Triage-Regeln und dem Kontext der Meldung.',
      explainabilityItems: [
        { label: 'Primäres Signal', value: 'Wiederholter Hilferuf' },
        { label: 'Kernbeobachtung', value: 'Ein weiterer Schritt ist wahrscheinlich nötig.' },
        { label: 'Triage-Basis', value: 'Wiederholung in kurzer Zeit und Kontext dieser Meldung.' },
      ],
      followUpLabel: 'Praktisches Vorgehen',
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
    title: 'Velvoix bringt Struktur zwischen Signal und Nachverfolgung',
    description:
      'Velvoix übersetzt Signale in einen klaren Ablauf mit Kontext, Priorisierung und Nachverfolgung.',
    flow: ['Signal', 'Kontext', 'Priorisierung', 'Handlung', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    supporting:
      'So wird Nachverfolgung übersichtlicher, konsistenter und besser nachvollziehbar.',
  },
  howItWorks: {
    eyebrow: 'Wie es funktioniert',
    title: 'Vom Signal zur klaren nächsten Handlung',
    description:
      'Velvoix verbindet das Signal mit Kontext und Priorisierung, damit Pflegeteams schneller sehen, was geschieht und was als Nächstes zu tun ist.',
    panelLabel: 'Vom Signal zur Handlung',
    panelSupporting: 'Nicht nur eine Meldung, sondern ein klarer nächster Schritt mit sichtbarem Status, klarer Verantwortung und nachvollziehbarer Rekonstruktion.',
    steps: [
      { title: 'Eingang', description: 'Rufknopf, Sprache oder anderes Pflegesignal.' },
      { title: 'Kontext', description: 'Historie, Auslöser und Situation werden mit einbezogen.' },
      { title: 'Priorisierung', description: 'Dringlichkeit und Erklärung werden strukturiert.' },
      { title: 'Handlung', description: 'Es entsteht ein klarer nächster Schritt für das Team.' },
      { title: 'Workflow', description: 'Nachverfolgung, Verantwortung und Status bleiben gut im Blick.' },
      { title: 'Auswertung', description: 'Rekonstruktion und Evaluation bleiben nachvollziehbar.' },
    ],
    stepNotes: [
      'Eingaben kommen kontrolliert an',
      'Kontext macht die Einordnung fundierter',
      'Priorisierung macht Dringlichkeit nachvollziehbar',
      'Die Handlung wird für das Team klar',
      'Workflow hält Status und Verantwortung zusammen',
      'Auswertung hält Rekonstruktion intakt',
    ],
  },
  compareChains: {
    eyebrow: 'Kettenunterschied',
    title: 'Nicht von der Meldung zur Interpretation, sondern vom Signal zum klaren nächsten Schritt',
    description:
      'Klassische Systeme bleiben oft bei der Meldung stehen. Velvoix ergänzt Kontext und Priorisierung, damit klarer wird, was als Nächstes zu tun ist.',
    compareLabel: 'Vergleich',
    outcomes: ['Weniger Interpretationslast', 'Bessere Priorisierung', 'Bessere Rekonstruktion'],
    traditionalTitle: 'Klassische Kette',
    traditionalSteps: ['Signal', 'Meldung', 'Manuelle Interpretation'],
    velvoixTitle: 'Velvoix-Kette',
    velvoixSteps: ['Signal', 'Kontext', 'Priorisierung', 'Handlung', 'Workflow', 'Eskalation', 'Rekonstruktion'],
    velvoixSupporting: 'Jede Ebene macht Nachverfolgung, Eskalation und Auswertung klarer greifbar.',
    stepDetails: [
      {
        title: 'Signal',
        description: 'Ein Rufknopf, eine Spracheingabe oder ein anderes Pflegesignal kommt kontrolliert als Startpunkt der Nachverfolgung an.',
      },
      {
        title: 'Kontext',
        description: 'Historie, Situation und Meldungskontext helfen Teams, das Signal besser zu verstehen.',
      },
      {
        title: 'Priorisierung',
        description: 'Dringlichkeit und empfohlene Maßnahme werden in verständlicher Pflegesprache sichtbar.',
      },
      {
        title: 'Handlung',
        description: 'Aus dem Signal wird ein klarer nächster Schritt mit Status, Verantwortung und Anschluss im Ablauf.',
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
    title: 'Warum Velvoix in der Praxis anders funktioniert',
    description:
      'Velvoix bleibt nicht bei der Meldung stehen, sondern unterstützt Teams bis zum klaren nächsten Schritt und einer nachvollziehbaren Nachverfolgung.',
    cards: [
      {
        title: 'Mehr als nur eine weitere Meldung',
        description: 'Velvoix macht nicht nur sichtbar, dass etwas passiert ist.',
      },
      {
        title: 'Klare Priorität',
        description: 'Teams sehen schneller, was Aufmerksamkeit braucht und was zuerst geschehen muss.',
      },
      {
        title: 'Nachverfolgung bleibt in einem klaren Ablauf',
        description: 'Status, Verantwortung und nächster Schritt bleiben für Team und Auswertung zusammen sichtbar.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Zuverlässig in der Praxis',
    title: 'Gebaut für Pflegesituationen, in denen Druck und Abhängigkeiten zusammenkommen',
    description:
      'Velvoix bleibt nutzbar, wenn Geschwindigkeit, Klarheit und Nachvollziehbarkeit nötig sind. Auch wenn nicht alles in der Kette ideal reagiert, bleibt sichtbar, was geschieht und welcher nächste Schritt ansteht.',
    capabilities: ['Klarer Status', 'Ehrlicher Fallback', 'Nachvollziehbare Nachverfolgung', 'Begrenzter Zugriff', 'Steuerbares Verhalten', 'Nutzbar unter Druck'],
    rows: [
      {
        index: '01',
        title: 'Bleibt bei Teilausfällen nutzbar',
        description:
          'Nachverfolgung bleibt nutzbar, wenn Teile der Kette vorübergehend eingeschränkt sind, weil Kernstatus und nächster Schritt sichtbar bleiben.',
        effect: 'Zuverlässiger Workflow, auch wenn nicht alles ideal reagiert.',
      },
      {
        index: '02',
        title: 'Keine Scheinsicherheit',
        description:
          'Begrenzter Kontext oder eingeschränkte Verfügbarkeit bleiben sichtbar, statt hinter Scheinsicherheit zu verschwinden.',
        effect: 'Ehrlicher Fallback statt stiller Verschlechterung.',
      },
      {
        index: '03',
        title: 'Klarer Status als Ausgangspunkt',
        description:
          'Status, Erklärung und Nachverfolgung bleiben zusammen lesbar, sodass Teams sich nicht auf verstreute Interpretationen verlassen müssen.',
        effect: 'Ein klares gemeinsames Ausgangsbild für den nächsten Schritt.',
      },
      {
        index: '04',
        title: 'Begrenzter Zugriff',
        description: 'Zugriffe und Aktionen bleiben nach Organisation, Kontext und Rolle begrenzt.',
        effect: 'Ruhige Kontrolle darüber, wer was sehen und tun kann.',
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
        title: 'In der Praxis steuerbar',
        description:
          'Verhalten, Nachverfolgung und Rückblick bleiben steuerbar, damit Teams kontrolliert reagieren können, ohne zusätzlichen Arbeitslärm.',
        effect: 'Steuerbarkeit als Teil der täglichen Praxis.',
      },
    ],
    closingLine:
      'So bleibt Velvoix klar und nutzbar, auch wenn der Alltag unter Druck steht.',
  },
  snapshots: {
    eyebrow: 'Produkttour',
    title: 'Kurze Produktansichten klarer Nachverfolgung',
    description:
      'Gezielte Beispiele zeigen, wie Velvoix Klarheit, Nachverfolgung und Kontrolle sichtbar macht.',
    cards: [
      { title: 'Meldungsliste', caption: 'Dringlichkeit, Bewohnerin oder Bewohner und Kernsignal bleiben in einer ruhigen Arbeitsliste direkt erfassbar.', image: '/products/proof-operations.png', tone: 'Operations' },
      { title: 'Meldungsdetail', caption: 'Warum und empfohlene Maßnahme werden als nachvollziehbare Begründung sichtbar.', image: '/products/proof-explainability.png', tone: 'Explainability' },
      { title: 'Verknüpfung und Steuerung', caption: 'Operative Kontrolle bleibt in der Verwaltungsebene ruhig und steuerbar.', image: '/products/proof-control.png', tone: 'Control' },
      { title: 'Governance und Profile', caption: 'Governance bleibt über Profile und Priorisierungssteuerung kontrollierbar.', image: '/products/proof-governance.png', tone: 'Governance' },
    ],
  },
  pilot: {
    eyebrow: 'Pilot',
    title: 'Prüfen, ob Velvoix zu Ihrer Pflegepraxis passt',
    description:
      'Eine erste Erkundung zeigt, ob Velvoix zu klarerer Nachverfolgung, weniger Interpretationsaufwand und einer besseren Einbindung in Ihre Abläufe beiträgt.',
    points: [
      'Pflegeheime und Langzeitpflege',
      'Teams, die sich klarere Nachverfolgung wünschen',
      'Partner, die die Passung zu Prozessen und Integrationen prüfen möchten',
    ],
    primaryCta: 'Pilotgespräch planen',
    secondaryCta: 'Zusammenarbeit besprechen',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Starten Sie eine Erkundung, die zu Ihrer Situation passt',
    description:
      'Wählen Sie den passenden Weg: Piloterkundung, Zusammenarbeit oder eine geschäftliche Anfrage.',
    reasonsLabel: 'Wege',
    inquiryTypes: {
      pilot: 'Piloterkundung',
      partnership: 'Zusammenarbeit',
      general: 'Geschäftliche Anfrage',
    },
    reasons: [
      'Piloterkundung für Pflegeorganisationen',
      'Zusammenarbeit, Rollout oder Integration',
      'Geschäftliche Anfrage zu Plattform oder Planung',
    ],
    directEmailNote: 'Für Piloten, Zusammenarbeit und geschäftliche Anfragen.',
    routeContent: {
      pilot: {
        helper: 'Wählen Sie diesen Weg, wenn Sie prüfen möchten, ob Velvoix in Ihrer Umgebung klarere Nachverfolgung, bessere Priorisierung und eine gute praktische Passung unterstützt.',
        email: publicContactEmails.pilot,
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, Ihren Pflegekontext und was Sie in einer Piloterkundung überprüfen möchten.',
        submit: 'Piloterkundung senden',
      },
      partnership: {
        helper: 'Wählen Sie diesen Weg für Fragen zu Zusammenarbeit, Rollout, Integration oder strategischer Abstimmung.',
        email: publicContactEmails.partners,
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Organisation, Ihre Rolle und welche Form der Zusammenarbeit oder des Rollouts Sie erkunden möchten.',
        submit: 'Erkundung zur Zusammenarbeit senden',
      },
      general: {
        helper: 'Wählen Sie diesen Weg für eine geschäftliche Anfrage zur Plattform, zum Einsatz in der Praxis oder zum weiteren Vorgehen.',
        email: publicContactEmails.general,
        messagePlaceholder: 'Beschreiben Sie kurz Ihre Frage und welcher Kontext oder Zeitrahmen dafür wichtig ist.',
        submit: 'Geschäftliche Anfrage senden',
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
      message: 'Beschreiben Sie kurz, was Sie erkunden möchten oder worüber Sie mehr erfahren wollen.',
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
    routeEmailLabel: 'E-Mail-Adresse für dieses Anliegen',
  },
  footer: {
    brand: 'Velvoix',
    languageNl: 'Nederlands',
    languageEn: 'English',
    languageDe: 'Deutsch',
    languageEs: 'Español',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklärung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Allgemeine Geschäftsbedingungen',
    copyright: '© 2026 Velvoix® - Alle Rechte vorbehalten.',
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
      'Velvoix ayuda a las organizaciones asistenciales a traducir señales en acciones claras, mejor priorización y seguimiento trazable.',
    ogTitle: 'Velvoix | Acción asistencial clara a partir de señales',
    ogDescription:
      'Velvoix ayuda a los equipos a ver antes qué requiere atención, qué debe hacerse primero y cómo mantener un seguimiento trazable.',
  },
  hero: {
    eyebrow: 'Velvoix',
    title: 'De la señal a una acción asistencial clara',
    subtitle:
      'Muchas señales asistenciales llegan sin suficiente contexto. Eso obliga a los profesionales a decidir bajo presión qué es urgente y qué debe hacerse primero. Velvoix convierte una señal directamente en una acción asistencial clara con contexto, prioridad y seguimiento trazable.',
    supporting:
      'Menos dudas, una priorización más clara y mejor reconstrucción posterior.',
    primaryCta: 'Explorar un piloto',
    primaryHref: '#pilot',
    secondaryCta: 'Ver el recorrido del producto',
    secondaryHref: '#product-tour',
    metrics: [
      { value: 'Claro', label: 'De la señal a una acción asistencial comprensible' },
      { value: 'Trazable', label: 'El seguimiento y la reconstrucción siguen siendo visibles' },
      { value: 'Práctico', label: 'Encaja en entornos asistenciales existentes sin añadir ruido operativo' },
    ],
  },
  propositionBridge: {
    eyebrow: 'De un vistazo',
    title: 'De la alerta al seguimiento claro',
    description:
      'Velvoix ayuda a los equipos a ver antes qué requiere atención, qué acción encaja y quién debe asumirla.',
    stages: [
      {
        label: 'Lo que entra',
        title: 'Una alerta todavía no es una acción clara',
        description: 'Muchas señales llegan sin suficiente contexto para actuar bien de inmediato.',
      },
      {
        label: 'Lo que añade Velvoix',
        title: 'Contexto, prioridad y acción recomendada',
        description: 'Velvoix ayuda a ver antes qué es urgente y cuál debe ser el siguiente paso.',
      },
      {
        label: 'Lo que eso aporta',
        title: 'Seguimiento más sereno y más claro',
        description: 'El estado, la responsabilidad y la continuidad siguen visibles sin añadir más carga interpretativa.',
      },
    ],
  },
  challenge: {
    eyebrow: 'El problema',
    title: 'Cuando una alerta todavía no es una acción clara',
    description:
      'Muchos sistemas muestran que algo está ocurriendo, pero no de inmediato qué requiere atención, qué urgencia tiene y qué acción hace falta. Eso obliga a los equipos a seguir interpretando bajo presión.',
    proofPanels: {
      explainabilityLabel: 'Explicabilidad',
      explainabilityTitle: 'Por qué',
      explainabilitySummary: 'El botón de ayuda se ha activado repetidamente en poco tiempo.',
      explainabilitySupporting: 'Basado en reglas de triaje y en el contexto de la alerta.',
      explainabilityItems: [
        { label: 'Señal principal', value: 'Solicitud de ayuda repetida' },
        { label: 'Observación clave', value: 'Es probable que sea necesaria una nueva intervención.' },
        { label: 'Base del triaje', value: 'Repetición en poco tiempo y contexto de esta alerta.' },
      ],
      followUpLabel: 'Seguimiento práctico',
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
      'Velvoix traduce señales en una acción operativa clara con contexto, priorización y seguimiento.',
    flow: ['Señal', 'Contexto', 'Priorización', 'Acción', 'Flujo', 'Escalada', 'Reconstrucción'],
    supporting:
      'Así el seguimiento resulta más claro, más consistente y más fácil de revisar.',
  },
  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'De la señal a la siguiente acción clara',
    description:
      'Velvoix combina la señal con contexto y priorización para que los equipos asistenciales vean antes qué ocurre y qué deben hacer a continuación.',
    panelLabel: 'De la señal a la acción',
    panelSupporting: 'No solo una alerta, sino un siguiente paso claro con estado, responsabilidad y reconstrucción.',
    steps: [
      { title: 'Entrada', description: 'Botón, voz u otra señal asistencial.' },
      { title: 'Contexto', description: 'Se tienen en cuenta el historial, el desencadenante y la situación.' },
      { title: 'Priorización', description: 'Se estructuran la urgencia y la explicación.' },
      { title: 'Acción', description: 'Se genera el siguiente paso claro para el equipo.' },
      { title: 'Flujo', description: 'El seguimiento, la responsabilidad y el estado siguen siendo fáciles de gestionar.' },
      { title: 'Evaluación', description: 'La reconstrucción y la evaluación siguen siendo trazables.' },
    ],
    stepNotes: [
      'La entrada llega de forma controlada',
      'El contexto hace más sólida la interpretación',
      'La priorización hace comprensible la urgencia',
      'La acción queda clara para el equipo',
      'El flujo mantiene unidos el estado y la responsabilidad',
      'La evaluación mantiene intacta la reconstrucción',
    ],
  },
  compareChains: {
    eyebrow: 'Diferencia en la cadena',
    title: 'No de la alerta a la interpretación, sino de la señal al seguimiento claro',
    description:
      'Los sistemas tradicionales suelen quedarse en la alerta. Velvoix añade contexto y priorización para que el seguimiento resulte más claro y más fácil de gestionar.',
    compareLabel: 'Comparación',
    outcomes: ['Menos carga interpretativa', 'Mejor priorización', 'Mejor reconstrucción'],
    traditionalTitle: 'Cadena tradicional',
    traditionalSteps: ['Señal', 'Alerta', 'Interpretación manual'],
    velvoixTitle: 'Cadena Velvoix',
    velvoixSteps: ['Señal', 'Contexto', 'Priorización', 'Acción', 'Flujo', 'Escalada', 'Reconstrucción'],
    velvoixSupporting: 'Cada capa hace más manejables el seguimiento, la escalada y la evaluación.',
    stepDetails: [
      {
        title: 'Señal',
        description: 'Una llamada de botón, una entrada por voz u otra señal asistencial entra de forma controlada como punto de partida del seguimiento.',
      },
      {
        title: 'Contexto',
        description: 'El historial, la situación y el contexto de la alerta ayudan al equipo a comprender mejor la señal.',
      },
      {
        title: 'Priorización',
        description: 'La urgencia y la acción recomendada se hacen visibles en un lenguaje asistencial claro.',
      },
      {
        title: 'Acción',
        description: 'La valoración se convierte en una acción clara para el estado, la responsabilidad y el siguiente paso.',
      },
      {
        title: 'Flujo',
        description: 'El seguimiento se vuelve más manejable mediante acciones, evolución del estado y responsabilidad clara.',
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
    title: 'Por qué Velvoix funciona de forma distinta en la práctica',
    description:
      'Velvoix no se queda en la alerta, sino que ayuda a los equipos a llegar a una acción clara y a un seguimiento trazable.',
    cards: [
      {
        title: 'No es solo otra alerta',
        description: 'Velvoix va más allá de limitarse a avisar de que algo ha ocurrido.',
      },
      {
        title: 'Prioridad más clara',
        description: 'Los equipos ven antes qué requiere atención y qué debe hacerse primero.',
      },
      {
        title: 'El seguimiento sigue visible en una misma línea',
        description: 'El estado, la responsabilidad y el siguiente paso permanecen visibles juntos para el equipo y para la revisión posterior.',
      },
    ],
  },
  technicalCore: {
    eyebrow: 'Fiable en la práctica',
    title: 'Diseñado para situaciones asistenciales en las que coinciden presión y dependencias',
    description:
      'Velvoix sigue siendo útil cuando hacen falta rapidez, claridad y trazabilidad. Incluso cuando no todo en la cadena responde de forma ideal, sigue siendo visible qué ocurre y cuál es el siguiente paso.',
    capabilities: ['Estado claro', 'Fallback honesto', 'Seguimiento trazable', 'Acceso limitado', 'Comportamiento controlable', 'Útil bajo presión'],
    rows: [
      {
        index: '01',
        title: 'Sigue siendo utilizable ante fallos parciales',
        description:
          'El seguimiento sigue siendo utilizable cuando partes de la cadena están temporalmente limitadas, porque el estado principal y el siguiente paso siguen visibles.',
        effect: 'Flujo fiable incluso cuando no todo responde de forma ideal.',
      },
      {
        index: '02',
        title: 'Sin falsa seguridad',
        description:
          'El contexto limitado o la disponibilidad parcial siguen siendo visibles en lugar de quedar ocultos detrás de una aparente certeza.',
        effect: 'Fallback honesto en lugar de degradación silenciosa.',
      },
      {
        index: '03',
        title: 'Estado claro como punto de partida',
        description:
          'El estado, la explicación y el seguimiento se mantienen legibles juntos, para que los equipos no dependan de interpretaciones dispersas.',
        effect: 'Un punto de partida claro y compartido para la acción.',
      },
      {
        index: '04',
        title: 'Acceso limitado',
        description: 'Los accesos y las acciones siguen limitados por organización, contexto y rol.',
        effect: 'Control sereno sobre quién puede ver y hacer qué.',
      },
      {
        index: '05',
        title: 'Reconstruible y auditable',
        description:
          'El seguimiento, los cambios de estado y las decisiones críticas siguen siendo trazables para la evaluación y la mejora de la calidad.',
        effect: 'Seguimiento trazable en lugar de instantáneas aisladas.',
      },
      {
        index: '06',
        title: 'Gobernable en la práctica',
        description:
          'El comportamiento, la acción posterior y la revisión siguen siendo manejables para que los equipos puedan responder de forma controlada sin añadir ruido operativo.',
        effect: 'Gobernabilidad como parte de la práctica diaria.',
      },
    ],
    closingLine:
      'Así Velvoix sigue siendo claro y útil, incluso cuando la práctica está bajo presión.',
  },
  snapshots: {
    eyebrow: 'Recorrido del producto',
    title: 'Vistas breves del producto con seguimiento claro',
    description:
      'Ejemplos concretos muestran cómo Velvoix aporta claridad, seguimiento y control.',
    cards: [
      { title: 'Lista de alertas', caption: 'La urgencia, el residente y la señal principal se mantienen visibles en una lista de trabajo tranquila.', image: '/products/proof-operations.png', tone: 'Operations' },
      { title: 'Detalle de la alerta', caption: 'El porqué y la acción recomendada se muestran como una justificación comprensible.', image: '/products/proof-explainability.png', tone: 'Explainability' },
      { title: 'Vinculación y control', caption: 'El control operativo sigue siendo sereno y manejable en la capa de gestión.', image: '/products/proof-control.png', tone: 'Control' },
      { title: 'Gobernanza y perfiles', caption: 'La gobernanza se mantiene controlada mediante perfiles y gestión de la priorización.', image: '/products/proof-governance.png', tone: 'Governance' },
    ],
  },
  pilot: {
    eyebrow: 'Piloto',
    title: 'Explore si Velvoix encaja en su práctica asistencial',
    description:
      'Una primera exploración muestra si Velvoix aporta un seguimiento más claro, menos carga interpretativa y una mejor integración en sus procesos.',
    points: [
      'Residencias y atención de larga duración',
      'Equipos que buscan un seguimiento más claro',
      'Socios que quieren explorar el encaje con procesos e integraciones',
    ],
    primaryCta: 'Planificar una conversación piloto',
    secondaryCta: 'Hablar de colaboración',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Inicie una exploración que encaje con su situación',
    description:
      'Elija la vía adecuada: exploración piloto, colaboración o una consulta empresarial.',
    reasonsLabel: 'Vías',
    inquiryTypes: {
      pilot: 'Exploración piloto',
      partnership: 'Colaboración',
      general: 'Consulta empresarial',
    },
    reasons: [
      'Exploración piloto para organizaciones asistenciales',
      'Colaboración para socios y despliegue',
      'Consulta empresarial sobre la plataforma o la planificación',
    ],
    directEmailNote: 'Para pilotos, colaboraciones y consultas empresariales.',
    routeContent: {
      pilot: {
        helper: 'Elija esta vía para valorar si Velvoix aporta un seguimiento más claro, mejor priorización y encaje práctico en su entorno.',
        email: publicContactEmails.pilot,
        messagePlaceholder: 'Describa brevemente su organización, su contexto asistencial y qué desea evaluar en una exploración piloto.',
        submit: 'Enviar exploración piloto',
      },
      partnership: {
        helper: 'Elija esta vía para encaje de socios, despliegue, integración o colaboración estratégica.',
        email: publicContactEmails.partners,
        messagePlaceholder: 'Describa brevemente su organización, su función y qué vía de colaboración o despliegue desea explorar.',
        submit: 'Enviar exploración de colaboración',
      },
      general: {
        helper: 'Elija esta vía para una consulta empresarial sobre la plataforma, el contexto de uso o los siguientes pasos.',
        email: publicContactEmails.general,
        messagePlaceholder: 'Describa brevemente su consulta y qué contexto o calendario es relevante.',
        submit: 'Enviar consulta empresarial',
      },
    },
    labels: {
      name: 'Nombre',
      organisation: 'Organización',
      email: 'Correo electrónico',
      phone: 'Número de teléfono (opcional)',
      message: 'Mensaje',
      submit: 'Enviar solicitud',
    },
    placeholders: {
      name: 'Nombre Apellidos',
      organisation: 'Nombre de su organización',
      email: 'nombre@organizacion.es',
      phone: '+34 612 34 56 78',
      message: 'Cuéntenos brevemente qué quiere explorar o sobre qué desea saber más.',
    },
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Introduzca una dirección de correo electrónico válida.',
      phone: 'Introduzca un número de teléfono válido o deje este campo vacío.',
      generic: 'Se ha producido un error al enviar su mensaje. Inténtelo de nuevo o contacte con nosotros directamente.',
    },
    success: 'Gracias. Hemos recibido su mensaje y nos pondremos en contacto con usted lo antes posible.',
    error:
      'Se ha producido un error al enviar su mensaje. Inténtelo de nuevo o contacte con nosotros directamente.',
    directEmailLabel: 'Contacto directo',
    directEmailValue: publicContactEmails.general,
    routeEmailLabel: 'Correo de la vía',
  },
  footer: {
    brand: 'Velvoix',
    languageNl: 'Nederlands',
    languageEn: 'English',
    languageDe: 'Deutsch',
    languageEs: 'Español',
    contact: 'Contacto',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    terms: 'Términos y condiciones',
    copyright: '© 2026 Velvoix® - Todos los derechos reservados.',
  },
};
