import type { Locale } from './site';

export interface PlatformTourSlide {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  objectPosition?: string;
  baseScale?: number;
  zoomOrigin?: string;
  offsetX?: number;
  offsetY?: number;
}

export interface PlatformTourContent {
  eyebrow: string;
  title: string;
  description: string;
  supporting: string;
  cta: string;
  previewLabel: string;
  previewTitle: string;
  previewBody: string;
  overlayLabel: string;
  counterLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  zoomInLabel: string;
  zoomOutLabel: string;
  zoomResetLabel: string;
  zoomLevelLabel: string;
  railLabel: string;
  curatedViewsLabel: string;
  slides: PlatformTourSlide[];
}

const slideFraming = {
  login: { image: '/products/platformtour/login.png', objectPosition: 'center center', baseScale: 0.86, zoomOrigin: '50% 58%', offsetY: -88 },
  worklist: { image: '/products/platformtour/worklist.png', objectPosition: 'center top', baseScale: 0.96, zoomOrigin: '50% 0%' },
  notifications: { image: '/products/platformtour/notifications.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  'event-detail': { image: '/products/platformtour/event-detail.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  assign: { image: '/products/platformtour/assign.png', objectPosition: 'center top', baseScale: 0.86, zoomOrigin: '50% 0%' },
  handover: { image: '/products/platformtour/handover.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  'client-context': { image: '/products/platformtour/client-context.png', objectPosition: 'center top', baseScale: 0.96, zoomOrigin: '50% 0%' },
  'care-overview': { image: '/products/platformtour/care-overview.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  management: { image: '/products/platformtour/management.png', objectPosition: 'center top', baseScale: 1, zoomOrigin: '50% 22%' },
  governance: { image: '/products/platformtour/governance-v2.png', objectPosition: 'center top', baseScale: 1, zoomOrigin: '50% 26%' },
} as const;

export const platformTourContent: Record<Locale, PlatformTourContent> = {
  nl: {
    eyebrow: 'Productshowcase',
    title: 'Een gecontroleerd inkijkje in het platform',
    description:
      'Een rustige producttour langs de schermen die in de dagelijkse operatie het verschil maken: events, context, opvolging, beheer en governance.',
    supporting:
      'Een gecureerde tour, geen documentviewer: leesbare desktopweergaven die laten zien hoe Velvoix werkvoorraad, context en operationele controle samenhoudt.',
    cta: 'Open platformtour',
    previewLabel: 'Preview',
    previewTitle: 'Tien gecureerde desktopweergaven',
    previewBody: 'Van werkvoorraad tot eventdetail, toewijzen, afhandeling, beheer en governance.',
    overlayLabel: 'Platformtour',
    counterLabel: 'Slide',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    zoomInLabel: 'Inzoomen',
    zoomOutLabel: 'Uitzoomen',
    zoomResetLabel: 'Herstel zoom',
    zoomLevelLabel: 'Zoom',
    railLabel: 'Onderdelen van de tour',
    curatedViewsLabel: 'gecureerde schermen',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige instap in het platform', text: 'Velvoix begint met een duidelijke en rustige toegang tot de operationele workflow.', alt: 'Velvoix login scherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Meldingen die werkbaar blijven', text: 'Urgentie, status en acties blijven helder zodat teams sneller kunnen handelen zonder contextverlies.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaties', title: 'Nieuwe meldingen zonder ruis', text: 'Een rustige notificatielaag helpt teams snel te zien wat echt aandacht vraagt.', alt: 'Velvoix notificaties', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Waarom, aanpak en onderbouwing samen', text: 'De eventdetailweergave bundelt reden, context, tijdlijn en acties in een operationeel object.', alt: 'Velvoix eventdetail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen blijft rustig en doelgericht zonder de eventcontext te verlaten.', alt: 'Velvoix toewijzen dialoog', ...slideFraming.assign },
      { id: 'handover', label: 'Afhandeling', title: 'Overdragen en afhandelen met duidelijke reden', text: 'Overdracht en afronding blijven gestructureerd, uitlegbaar en geschikt voor log en audit.', alt: 'Velvoix overdracht en afhandeling', ...slideFraming.handover },
      { id: 'client-context', label: 'Clienthistorie', title: 'Relevante context op een plek', text: 'Zorgcontext, recente events en opvolgingshistorie blijven direct beschikbaar voor veilige opvolging.', alt: 'Velvoix clientcontext', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Zorgoverzicht', title: 'Sturen zonder dashboardruis', text: 'Operationeel inzicht laat zien waar druk, trend en SLA-risico het duidelijkst oplopen.', alt: 'Velvoix zorgoverzicht', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Beheer', title: 'Beheer dat rustig en doelgericht blijft', text: 'Koppelingen, beschikbaarheid en werkvolgorde blijven overzichtelijk zonder beheerruis.', alt: 'Velvoix beheer', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Technische basis onder controle', text: 'Profielen, kwaliteit en technische koppelingen blijven georganiseerd in een beheerlaag die rustig blijft.', alt: 'Velvoix governance', ...slideFraming.governance },
    ],
  },
  en: {
    eyebrow: 'Product Showcase',
    title: 'A controlled view into the platform',
    description:
      'A calm product tour through the screens that make the operational difference: events, context, follow-up, management and governance.',
    supporting:
      'A curated tour, not a document viewer: readable desktop views that show how Velvoix keeps worklist, context and operational control together.',
    cta: 'Open platform tour',
    previewLabel: 'Preview',
    previewTitle: 'Ten curated desktop views',
    previewBody: 'From worklist to event detail, assignment, handling, management and governance.',
    overlayLabel: 'Platform Tour',
    counterLabel: 'Slide',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    zoomInLabel: 'Zoom in',
    zoomOutLabel: 'Zoom out',
    zoomResetLabel: 'Reset zoom',
    zoomLevelLabel: 'Zoom',
    railLabel: 'Tour sections',
    curatedViewsLabel: 'curated views',
    slides: [
      { id: 'login', label: 'Start', title: 'A calm entry into the platform', text: 'Velvoix starts with a clear and quiet entry point into the operational workflow.', alt: 'Velvoix login screen', ...slideFraming.login },
      { id: 'worklist', label: 'Worklist', title: 'Events that stay workable', text: 'Urgency, status and actions remain readable so teams can act faster without losing context.', alt: 'Velvoix worklist', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notifications', title: 'New notifications without noise', text: 'A calm notification layer helps teams see quickly what truly needs attention.', alt: 'Velvoix notifications view', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Event Detail', title: 'Why, action and context together', text: 'The event detail view keeps reason, context, timeline and actions together in one operational object.', alt: 'Velvoix event detail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Assign', title: 'Link the right colleague quickly', text: 'Assignment stays calm and targeted without forcing teams to leave the event context.', alt: 'Velvoix assignment dialog', ...slideFraming.assign },
      { id: 'handover', label: 'Handling', title: 'Transfer and resolve with a clear reason', text: 'Transfer and completion remain structured, explainable and suitable for logging and audit.', alt: 'Velvoix handover and completion dialog', ...slideFraming.handover },
      { id: 'client-context', label: 'Client History', title: 'Relevant context in one place', text: 'Care context, recent events and follow-up history remain directly available for safe follow-up.', alt: 'Velvoix client history view', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Care Overview', title: 'Steering without dashboard noise', text: 'Operational insight shows where pressure, trend and SLA risk rise most clearly.', alt: 'Velvoix care overview dashboard', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Management', title: 'Control that remains calm and purposeful', text: 'Linking, availability and work order stay understandable without turning management into a burden.', alt: 'Velvoix management view', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Technical foundation under control', text: 'Profiles, quality and technical coupling remain organised in one governed management layer.', alt: 'Velvoix governance view', ...slideFraming.governance },
    ],
  },
  de: {
    eyebrow: 'Plattformtour',
    title: 'Ein kontrollierter Einblick in die Plattform',
    description:
      'Eine ruhige Produkttour durch die Ansichten, die im Betrieb den Unterschied machen: Events, Kontext, Nachverfolgung, Verwaltung und Governance.',
    supporting:
      'Eine kuratierte Tour statt eines Dokumentenviewers: lesbare Desktopansichten, die zeigen, wie Velvoix Arbeitsvorrat, Kontext und operative Steuerung zusammenhaelt.',
    cta: 'Plattformtour offnen',
    previewLabel: 'Vorschau',
    previewTitle: 'Zehn kuratierte Desktopansichten',
    previewBody: 'Von Arbeitsvorrat uber Eventdetail und Zuweisung bis zu Bearbeitung, Verwaltung und Governance.',
    overlayLabel: 'Plattformtour',
    counterLabel: 'Folie',
    closeLabel: 'Schliessen',
    previousLabel: 'Zuruck',
    nextLabel: 'Weiter',
    zoomInLabel: 'Vergrossern',
    zoomOutLabel: 'Verkleinern',
    zoomResetLabel: 'Zoom zurucksetzen',
    zoomLevelLabel: 'Zoom',
    railLabel: 'Tourabschnitte',
    curatedViewsLabel: 'kuratierte Ansichten',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg in die Plattform', text: 'Velvoix beginnt mit einem klaren und ruhigen Zugang zum operativen Workflow.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsvorrat', title: 'Events, die handhabbar bleiben', text: 'Dringlichkeit, Status und Aktionen bleiben gut lesbar, damit Teams schneller handeln konnen.', alt: 'Velvoix Arbeitsvorrat', ...slideFraming.worklist },
      { id: 'notifications', label: 'Benachrichtigungen', title: 'Neue Meldungen ohne Rauschen', text: 'Eine ruhige Benachrichtigungsschicht hilft Teams, schnell zu sehen, was wirklich Aufmerksamkeit braucht.', alt: 'Velvoix Benachrichtigungen', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Warum, Aktion und Kontext zusammen', text: 'Die Eventdetailansicht bundelt Begrundung, Kontext, Zeitlinie und Aktionen in einem operativen Objekt.', alt: 'Velvoix Eventdetail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person zuweisen', text: 'Die Zuweisung bleibt ruhig und zielgerichtet, ohne den Eventkontext zu verlassen.', alt: 'Velvoix Zuweisung', ...slideFraming.assign },
      { id: 'handover', label: 'Bearbeitung', title: 'Mit klarer Begrundung ubergeben und abschliessen', text: 'Ubergabe und Abschluss bleiben strukturiert, erklarbar und fur Log und Audit geeignet.', alt: 'Velvoix Bearbeitung', ...slideFraming.handover },
      { id: 'client-context', label: 'Klientenhistorie', title: 'Relevanter Kontext an einem Ort', text: 'Pflegekontext, letzte Events und Nachverfolgungshistorie bleiben fur eine sichere Folgeaktion direkt verfugbar.', alt: 'Velvoix Klientenhistorie', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Pflegeubersicht', title: 'Steuerung ohne Dashboard-Rauschen', text: 'Der operative Uberblick zeigt klar, wo Druck, Trend und SLA-Risiko am starksten ansteigen.', alt: 'Velvoix Pflegeubersicht', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Verwaltung', title: 'Kontrolle, die ruhig und zielgerichtet bleibt', text: 'Kopplungen, Verfugbarkeit und Arbeitsreihenfolge bleiben verstandlich, ohne die Verwaltung aufzublahen.', alt: 'Velvoix Verwaltung', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Technische Grundlage unter Kontrolle', text: 'Profile, Qualitat und technische Kopplungen bleiben in einer gefuhrten Verwaltungsebene organisiert.', alt: 'Velvoix Governance', ...slideFraming.governance },
    ],
  },
  es: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Un recorrido tranquilo por las vistas que marcan la diferencia operativa: eventos, contexto, seguimiento, gestion y gobernanza.',
    supporting:
      'Un recorrido guiado, no un visor de documentos: vistas de escritorio legibles que muestran como Velvoix mantiene unidos la lista de trabajo, el contexto y el control operativo.',
    cta: 'Abrir recorrido',
    previewLabel: 'Vista previa',
    previewTitle: 'Diez vistas de escritorio seleccionadas',
    previewBody: 'Desde la lista de trabajo hasta el detalle del evento, asignacion, gestion, administracion y gobernanza.',
    overlayLabel: 'Recorrido de la plataforma',
    counterLabel: 'Diapositiva',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    zoomInLabel: 'Acercar',
    zoomOutLabel: 'Alejar',
    zoomResetLabel: 'Restablecer zoom',
    zoomLevelLabel: 'Zoom',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'vistas seleccionadas',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena en la plataforma', text: 'Velvoix empieza con un acceso claro y tranquilo al flujo operativo.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Lista de trabajo', title: 'Eventos que siguen siendo manejables', text: 'La urgencia, el estado y las acciones siguen siendo legibles para que los equipos actuen mas rapido sin perder contexto.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas notificaciones sin ruido', text: 'Una capa de notificaciones calmada ayuda a ver enseguida que requiere atencion real.', alt: 'Vista de notificaciones de Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle del evento', title: 'Motivo, accion y contexto juntos', text: 'La vista de detalle mantiene razon, contexto, linea temporal y acciones dentro del mismo objeto operativo.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Asignar', title: 'Vincular rapidamente a la persona adecuada', text: 'La asignacion se mantiene tranquila y directa sin sacar al equipo del contexto del evento.', alt: 'Dialogo de asignacion de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir y cerrar con un motivo claro', text: 'La transferencia y el cierre siguen siendo estructurados, explicables y aptos para registro y auditoria.', alt: 'Dialogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'client-context', label: 'Historial del cliente', title: 'Contexto relevante en un solo lugar', text: 'El contexto asistencial, los eventos recientes y el historial de seguimiento permanecen disponibles para una actuacion segura.', alt: 'Historial del cliente en Velvoix', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Resumen asistencial', title: 'Direccion sin ruido de paneles', text: 'La vision operativa muestra donde aumentan con mayor claridad la presion, la tendencia y el riesgo SLA.', alt: 'Resumen asistencial de Velvoix', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Administracion', title: 'Control que sigue siendo calmado y util', text: 'Las vinculaciones, la disponibilidad y el orden de trabajo siguen siendo entendibles sin convertir la administracion en una carga.', alt: 'Vista de administracion de Velvoix', ...slideFraming.management },
      { id: 'governance', label: 'Gobernanza', title: 'Base tecnica bajo control', text: 'Los perfiles, la calidad y el acoplamiento tecnico permanecen organizados en una sola capa de gestion gobernada.', alt: 'Vista de gobernanza de Velvoix', ...slideFraming.governance },
    ],
  },
};




